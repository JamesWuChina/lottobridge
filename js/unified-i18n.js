// Unified i18n Manager for LottoBridge
// This replaces multiple i18n systems with a single, robust solution

class UnifiedI18nManager {
    constructor() {
        this.currentLanguage = 'zh';
        this.languages = {};
        this.fallbackLanguage = 'en';
        this.loadedLanguages = new Set();
        this.init();
    }

    async init() {
        // Load language configuration
        await this.loadLanguageConfig();
        
        // Load saved language preference
        this.loadSavedLanguage();
        
        // Initialize page
        this.updatePage();
    }

    async loadLanguageConfig() {
        const supportedLanguages = ['zh', 'en', 'es', 'fr', 'ar', 'ko', 'ru'];
        
        for (const lang of supportedLanguages) {
            try {
                // Languages are loaded via script tags, check if available
                if (window[lang]) {
                    this.languages[lang] = window[lang];
                    this.loadedLanguages.add(lang);
                    console.log(`Loaded ${lang} language pack`);
                }
            } catch (e) {
                console.warn(`Failed to load ${lang} language pack:`, e);
            }
        }
    }

    loadSavedLanguage() {
        const savedLang = localStorage.getItem('selectedLanguage');
        if (savedLang && this.languages[savedLang]) {
            this.currentLanguage = savedLang;
        } else {
            // Auto-detect browser language
            const browserLang = navigator.language.split('-')[0];
            if (this.languages[browserLang]) {
                this.currentLanguage = browserLang;
            }
        }
    }

    setLanguage(langCode) {
        console.log(`Attempting to set language to: ${langCode}`);
        console.log(`Available languages:`, Object.keys(this.languages));
        
        if (this.languages[langCode]) {
            this.currentLanguage = langCode;
            localStorage.setItem('selectedLanguage', langCode);
            console.log(`Language set to: ${langCode}`);
            this.updatePage();
            
            // Trigger language change event
            window.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: langCode }
            }));
            
            return true;
        }
        
        console.warn(`Language ${langCode} not available`);
        return false;
    }

    translate(key, langCode = null) {
        const lang = langCode || this.currentLanguage;
        
        // Try current language first
        let translation = this.getTranslationFromLanguage(key, lang);
        
        // Fallback to English if translation not found
        if (!translation && lang !== this.fallbackLanguage) {
            translation = this.getTranslationFromLanguage(key, this.fallbackLanguage);
        }
        
        // Final fallback to key itself
        if (!translation) {
            console.warn(`Translation not found for key: ${key}`);
            return key;
        }
        
        return translation;
    }

    getTranslationFromLanguage(key, langCode) {
        const langData = this.languages[langCode];
        if (!langData) return null;
        
        const keys = key.split('.');
        let current = langData;
        
        for (const k of keys) {
            if (current && typeof current === 'object' && k in current) {
                current = current[k];
            } else {
                return null;
            }
        }
        
        return typeof current === 'string' ? current : null;
    }

    updatePage() {
        // Update document language and direction
        document.documentElement.lang = this.currentLanguage;
        document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
        
        // Update page title if available
        const titleElements = document.querySelectorAll('[data-i18n*=".page.title"]');
        titleElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key);
            if (translation && translation !== key) {
                document.title = translation;
            }
        });
        
        // Update all elements with data-i18n attributes
        const elements = document.querySelectorAll('[data-i18n]');
        console.log(`Found ${elements.length} elements with data-i18n attributes`);
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key);
            
            if (translation && translation !== key) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
                console.log(`Updated ${key} -> ${translation}`);
            } else {
                console.warn(`Translation not found for key: ${key}`);
            }
        });
        
        // Update language selector
        const languageSelector = document.getElementById('languageSelector');
        if (languageSelector) {
            languageSelector.value = this.currentLanguage;
        }
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    getAvailableLanguages() {
        return Object.keys(this.languages);
    }

    // Validation method to check translation completeness
    validateTranslations() {
        const report = {};
        const allKeys = new Set();
        
        // Collect all keys from all languages
        Object.values(this.languages).forEach(lang => {
            this.collectKeys(lang, '', allKeys);
        });
        
        // Check completeness for each language
        Object.keys(this.languages).forEach(langCode => {
            const langKeys = new Set();
            this.collectKeys(this.languages[langCode], '', langKeys);
            
            const missing = Array.from(allKeys).filter(key => !langKeys.has(key));
            report[langCode] = {
                total: allKeys.size,
                available: langKeys.size,
                missing: missing.length,
                coverage: ((langKeys.size / allKeys.size) * 100).toFixed(1) + '%',
                missingKeys: missing.slice(0, 10) // First 10 missing keys
            };
        });
        
        return report;
    }

    collectKeys(obj, prefix, keySet) {
        if (typeof obj === 'object' && obj !== null) {
            Object.keys(obj).forEach(key => {
                const fullKey = prefix ? `${prefix}.${key}` : key;
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    this.collectKeys(obj[key], fullKey, keySet);
                } else {
                    keySet.add(fullKey);
                }
            });
        }
    }
}

// Create global instance
// Initialize when DOM is ready - 确保DOM完全加载后再初始化
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the global i18n manager
    window.unifiedI18n = new UnifiedI18nManager();

    // Backward compatibility API
    window.i18n = {
        getCurrentLanguage: () => window.unifiedI18n.getCurrentLanguage(),
        setLanguage: (lang) => window.unifiedI18n.setLanguage(lang),
        changeLanguage: (lang) => window.unifiedI18n.setLanguage(lang), // Alias for backward compatibility
        translate: (key) => window.unifiedI18n.translate(key),
        getAvailableLanguages: () => window.unifiedI18n.getAvailableLanguages(),
        validateTranslations: () => window.unifiedI18n.validateTranslations()
    };

    // Setup language selector
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            window.unifiedI18n.setLanguage(e.target.value);
        });
    }
    
    console.log('Unified i18n system initialized');
});
