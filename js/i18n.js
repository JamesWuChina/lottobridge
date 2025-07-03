// 多语言支持系统 - 更新版本
class I18nManager {
    constructor() {
        this.currentLanguage = 'zh';
        this.languages = {};
        this.init();
    }

    init() {
        // 等待语言文件加载完成
        this.waitForLanguages();
    }

    waitForLanguages() {
        if (window.languages && Object.keys(window.languages).length > 0) {
            this.languages = window.languages;
            this.loadSavedLanguage();
            this.updatePage();
        } else {
            // 如果语言文件还没加载，等待一下再试
            setTimeout(() => this.waitForLanguages(), 100);
        }
    }

    loadSavedLanguage() {
        const savedLang = localStorage.getItem('selectedLanguage');
        if (savedLang && this.languages[savedLang]) {
            this.currentLanguage = savedLang;
        } else {
            // 检测浏览器语言
            const browserLang = navigator.language || navigator.userLanguage;
            const langCode = browserLang.split('-')[0];
            if (this.languages[langCode]) {
                this.currentLanguage = langCode;
            }
        }
    }

    setLanguage(langCode) {
        if (this.languages[langCode]) {
            this.currentLanguage = langCode;
            localStorage.setItem('selectedLanguage', langCode);
            this.updatePage();
            return true;
        }
        return false;
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    translate(key) {
        const keys = key.split('.');
        let result = this.languages[this.currentLanguage];
        
        for (const k of keys) {
            if (result && typeof result === 'object' && k in result) {
                result = result[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }
        
        return result || key;
    }

    updatePage() {
        // 更新页面标题
        const title = this.translate('page.title');
        if (title) {
            document.title = title;
        }

        // 更新所有带有 data-i18n 属性的元素
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key);
            
            if (translation && translation !== key) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });

        // 设置文档语言属性
        document.documentElement.lang = this.currentLanguage;
        
        // 如果是阿拉伯语，设置RTL方向
        if (this.currentLanguage === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    }

    // 获取所有可用语言
    getAvailableLanguages() {
        return Object.keys(this.languages).map(code => ({
            code,
            name: this.getLanguageName(code),
            flag: this.getLanguageFlag(code)
        }));
    }

    getLanguageName(code) {
        const names = {
            zh: '中文',
            en: 'English',
            fr: 'Français',
            es: 'Español',
            ko: '한국어',
            ar: 'العربية',
            ru: 'Русский'
        };
        return names[code] || code;
    }

    getLanguageFlag(code) {
        const flags = {
            zh: '🇨🇳',
            en: '🇺🇸',
            fr: '🇫🇷',
            es: '🇪🇸',
            ko: '🇰🇷',
            ar: '🇸🇦',
            ru: '🇷🇺'
        };
        return flags[code] || '🌐';
    }
}

// 创建全局实例
window.i18nManager = new I18nManager();

// 兼容旧版本API
window.i18n = {
    getCurrentLanguage: () => window.i18nManager.getCurrentLanguage(),
    setLanguage: (lang) => window.i18nManager.setLanguage(lang),
    changeLanguage: (lang) => window.i18nManager.setLanguage(lang),
    translate: (key) => window.i18nManager.translate(key),
    getAvailableLanguages: () => window.i18nManager.getAvailableLanguages()
};

// 语言选择器事件处理
document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.value = window.i18nManager.getCurrentLanguage();
        
        languageSelector.addEventListener('change', function() {
            const selectedLang = this.value;
            if (window.i18nManager.setLanguage(selectedLang)) {
                console.log(`Language switched to: ${selectedLang}`);
            }
        });
    }
});