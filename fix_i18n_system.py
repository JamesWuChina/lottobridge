#!/usr/bin/env python3
"""
LottoBridge i18n System Repair Tool
This script fixes the entire i18n system by:
1. Standardizing all language files
2. Generating missing translations
3. Creating a unified i18n architecture
4. Implementing fallback mechanisms
"""

import json
import os
import re
from collections import defaultdict
from pathlib import Path

class I18nSystemFixer:
    def __init__(self):
        self.languages = ['zh', 'en', 'es', 'fr', 'ar', 'ko', 'ru']
        self.master_keys = set()
        self.language_data = {}
        self.missing_translations = defaultdict(set)
        
    def load_analysis_report(self):
        """Load the analysis report"""
        with open('i18n_analysis_report.json', 'r', encoding='utf-8') as f:
            report = json.load(f)
        
        self.master_keys = set(report['translation_keys'])
        print(f"Loaded {len(self.master_keys)} master translation keys")
        
        return report
    
    def load_existing_language_files(self):
        """Load existing language files"""
        for lang in self.languages:
            lang_file = f'js/languages/{lang}.js'
            if os.path.exists(lang_file):
                print(f"Loading existing translations for {lang}")
                self.language_data[lang] = self.extract_translations_from_js(lang_file)
            else:
                print(f"No existing file found for {lang}")
                self.language_data[lang] = {}
    
    def extract_translations_from_js(self, filepath):
        """Extract translations from JavaScript file"""
        translations = {}
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                
            # Find the main object definition
            lines = content.split('\n')
            current_path = []
            in_string = False
            
            for line in lines:
                line = line.strip()
                
                if not line or line.startswith('//') or line.startswith('/*'):
                    continue
                    
                # Handle object keys
                if ':' in line and not line.startswith('*'):
                    # Extract key and value
                    parts = line.split(':', 1)
                    if len(parts) == 2:
                        key_part = parts[0].strip()
                        value_part = parts[1].strip()
                        
                        # Remove quotes from key
                        key = re.sub(r'^["\']|["\']$', '', key_part)
                        
                        # Check if it's a nested object
                        if '{' in value_part:
                            current_path.append(key)
                        else:
                            # Extract value
                            value = value_part.rstrip(',').strip()
                            if value.startswith('"') and value.endswith('"'):
                                value = value[1:-1]
                            elif value.startswith("'") and value.endswith("'"):
                                value = value[1:-1]
                            
                            # Create full key path
                            full_key = '.'.join(current_path + [key])
                            translations[full_key] = value
                
                # Handle closing braces
                if '}' in line:
                    brace_count = line.count('}')
                    for _ in range(brace_count):
                        if current_path:
                            current_path.pop()
                            
        except Exception as e:
            print(f"Error parsing {filepath}: {e}")
            
        return translations
    
    def generate_missing_translations(self):
        """Generate missing translations using the most complete language as template"""
        # Use English as the master template since it has 95.8% coverage
        english_translations = self.language_data.get('en', {})
        
        print("Generating missing translations...")
        
        for lang in self.languages:
            if lang == 'en':
                continue
                
            current_translations = self.language_data.get(lang, {})
            missing_keys = self.master_keys - set(current_translations.keys())
            
            print(f"Generating {len(missing_keys)} missing translations for {lang}")
            
            # Simple translation mapping (in a real scenario, you'd use a translation service)
            translation_map = self.get_translation_mapping(lang)
            
            for key in missing_keys:
                if key in english_translations:
                    english_text = english_translations[key]
                    # Simple keyword-based translation
                    translated_text = self.simple_translate(english_text, translation_map)
                    current_translations[key] = translated_text
                else:
                    # Use the key itself as fallback
                    current_translations[key] = key
                    
            self.language_data[lang] = current_translations
    
    def get_translation_mapping(self, lang):
        """Get basic translation mapping for common terms"""
        translations = {
            'zh': {
                'Home': '首页',
                'Products': '产品',
                'Services': '服务',
                'About': '关于',
                'Contact': '联系',
                'Market Research': '市场研究',
                'Case Studies': '案例研究',
                'Insights': '洞察',
                'Reports': '报告',
                'Solutions': '解决方案',
                'Features': '特性',
                'Technology': '技术',
                'System': '系统',
                'Digital': '数字',
                'Lottery': '彩票',
                'Analysis': '分析',
                'Overview': '概述',
                'Opportunities': '机会',
                'Challenges': '挑战'
            },
            'es': {
                'Home': 'Inicio',
                'Products': 'Productos',
                'Services': 'Servicios',
                'About': 'Acerca de',
                'Contact': 'Contacto',
                'Market Research': 'Investigación de Mercado',
                'Case Studies': 'Casos de Estudio',
                'Insights': 'Perspectivas',
                'Reports': 'Informes',
                'Solutions': 'Soluciones',
                'Features': 'Características',
                'Technology': 'Tecnología',
                'System': 'Sistema',
                'Digital': 'Digital',
                'Lottery': 'Lotería',
                'Analysis': 'Análisis',
                'Overview': 'Descripción General',
                'Opportunities': 'Oportunidades',
                'Challenges': 'Desafíos'
            },
            'fr': {
                'Home': 'Accueil',
                'Products': 'Produits',
                'Services': 'Services',
                'About': 'À propos',
                'Contact': 'Contact',
                'Market Research': 'Étude de Marché',
                'Case Studies': 'Études de Cas',
                'Insights': 'Perspectives',
                'Reports': 'Rapports',
                'Solutions': 'Solutions',
                'Features': 'Fonctionnalités',
                'Technology': 'Technologie',
                'System': 'Système',
                'Digital': 'Numérique',
                'Lottery': 'Loterie',
                'Analysis': 'Analyse',
                'Overview': 'Aperçu',
                'Opportunities': 'Opportunités',
                'Challenges': 'Défis'
            },
            'ar': {
                'Home': 'الرئيسية',
                'Products': 'المنتجات',
                'Services': 'الخدمات',
                'About': 'حول',
                'Contact': 'اتصل',
                'Market Research': 'بحث السوق',
                'Case Studies': 'دراسات الحالة',
                'Insights': 'رؤى',
                'Reports': 'التقارير',
                'Solutions': 'الحلول',
                'Features': 'الميزات',
                'Technology': 'التكنولوجيا',
                'System': 'النظام',
                'Digital': 'رقمي',
                'Lottery': 'اليانصيب',
                'Analysis': 'تحليل',
                'Overview': 'نظرة عامة',
                'Opportunities': 'الفرص',
                'Challenges': 'التحديات'
            },
            'ko': {
                'Home': '홈',
                'Products': '제품',
                'Services': '서비스',
                'About': '소개',
                'Contact': '연락처',
                'Market Research': '시장 조사',
                'Case Studies': '사례 연구',
                'Insights': '인사이트',
                'Reports': '보고서',
                'Solutions': '솔루션',
                'Features': '기능',
                'Technology': '기술',
                'System': '시스템',
                'Digital': '디지털',
                'Lottery': '복권',
                'Analysis': '분석',
                'Overview': '개요',
                'Opportunities': '기회',
                'Challenges': '과제'
            },
            'ru': {
                'Home': 'Главная',
                'Products': 'Продукты',
                'Services': 'Услуги',
                'About': 'О нас',
                'Contact': 'Контакты',
                'Market Research': 'Исследование рынка',
                'Case Studies': 'Примеры из практики',
                'Insights': 'Аналитика',
                'Reports': 'Отчеты',
                'Solutions': 'Решения',
                'Features': 'Функции',
                'Technology': 'Технология',
                'System': 'Система',
                'Digital': 'Цифровой',
                'Lottery': 'Лотерея',
                'Analysis': 'Анализ',
                'Overview': 'Обзор',
                'Opportunities': 'Возможности',
                'Challenges': 'Вызовы'
            }
        }
        
        return translations.get(lang, {})
    
    def simple_translate(self, text, translation_map):
        """Simple translation using keyword mapping"""
        if not text:
            return text
            
        translated = text
        for english_word, translated_word in translation_map.items():
            translated = translated.replace(english_word, translated_word)
            
        return translated
    
    def create_nested_dict(self, translations):
        """Convert flat key-value pairs to nested dictionary structure"""
        nested = {}
        
        for key, value in translations.items():
            parts = key.split('.')
            current = nested
            
            for part in parts[:-1]:
                if part not in current:
                    current[part] = {}
                elif not isinstance(current[part], dict):
                    # Handle conflict: convert string to dict
                    current[part] = {}
                current = current[part]
                
            # Handle final key assignment
            final_key = parts[-1]
            if isinstance(current, dict):
                current[final_key] = value
            else:
                # Skip if there's a conflict
                print(f"Warning: Key conflict for {key}, skipping")
                continue
                
        return nested
    
    def generate_js_file_content(self, lang, translations):
        """Generate JavaScript file content"""
        nested_translations = self.create_nested_dict(translations)
        
        def dict_to_js(obj, indent=0):
            if isinstance(obj, dict):
                lines = ['{']
                items = list(obj.items())
                for i, (key, value) in enumerate(items):
                    comma = ',' if i < len(items) - 1 else ''
                    js_value = dict_to_js(value, indent + 1)
                    lines.append(f"{'    ' * (indent + 1)}{key}: {js_value}{comma}")
                lines.append('    ' * indent + '}')
                return '\n'.join(lines)
            else:
                # Escape quotes in strings
                escaped = str(obj).replace('"', '\\"')
                return f'"{escaped}"'
        
        js_content = f"""// {lang.upper()} Language Pack - Auto-generated
// This file contains all translations for the {lang} language
// Generated by LottoBridge i18n System Repair Tool

const {lang} = {dict_to_js(nested_translations)};

// Export for both Node.js and browser environments
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {lang};
}} else if (typeof window !== 'undefined') {{
    window.{lang} = {lang};
}}
"""
        
        return js_content
    
    def backup_existing_files(self):
        """Backup existing language files"""
        backup_dir = Path('js/languages/backup')
        backup_dir.mkdir(exist_ok=True)
        
        for lang in self.languages:
            original_file = Path(f'js/languages/{lang}.js')
            if original_file.exists():
                backup_file = backup_dir / f'{lang}.js.backup'
                import shutil
                shutil.copy2(original_file, backup_file)
                print(f"Backed up {lang}.js to {backup_file}")
    
    def write_standardized_language_files(self):
        """Write standardized language files"""
        print("Writing standardized language files...")
        
        for lang in self.languages:
            translations = self.language_data.get(lang, {})
            js_content = self.generate_js_file_content(lang, translations)
            
            output_file = f'js/languages/{lang}.js'
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(js_content)
                
            print(f"Generated {output_file} with {len(translations)} translations")
    
    def create_unified_i18n_manager(self):
        """Create a unified i18n manager"""
        unified_manager = '''// Unified i18n Manager for LottoBridge
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
        if (this.languages[langCode]) {
            this.currentLanguage = langCode;
            localStorage.setItem('selectedLanguage', langCode);
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
        
        // Update page title
        const title = this.translate('page.title');
        if (title && title !== 'page.title') {
            document.title = title;
        }
        
        // Update all elements with data-i18n attributes
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key);
            
            if (translation && translation !== key) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
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
window.unifiedI18n = new UnifiedI18nManager();

// Backward compatibility
window.i18n = {
    getCurrentLanguage: () => window.unifiedI18n.getCurrentLanguage(),
    setLanguage: (lang) => window.unifiedI18n.setLanguage(lang),
    translate: (key) => window.unifiedI18n.translate(key),
    getAvailableLanguages: () => window.unifiedI18n.getAvailableLanguages(),
    validateTranslations: () => window.unifiedI18n.validateTranslations()
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Setup language selector
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            window.unifiedI18n.setLanguage(e.target.value);
        });
    }
    
    console.log('Unified i18n system initialized');
});
'''
        
        with open('js/unified-i18n.js', 'w', encoding='utf-8') as f:
            f.write(unified_manager)
        
        print("Created unified i18n manager: js/unified-i18n.js")
    
    def create_validation_script(self):
        """Create a validation script for ongoing maintenance"""
        validation_script = '''// i18n Validation Script
// Use this to validate translation completeness

function validateI18nSystem() {
    if (!window.unifiedI18n) {
        console.error('Unified i18n system not loaded');
        return;
    }
    
    const report = window.unifiedI18n.validateTranslations();
    
    console.log('=== i18n Validation Report ===');
    Object.entries(report).forEach(([lang, data]) => {
        console.log(`${lang.toUpperCase()}: ${data.coverage} coverage (${data.available}/${data.total} keys)`);
        if (data.missing > 0) {
            console.log(`  Missing keys sample:`, data.missingKeys);
        }
    });
    
    return report;
}

// Run validation automatically
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(validateI18nSystem, 2000);
});
'''
        
        with open('js/i18n-validation.js', 'w', encoding='utf-8') as f:
            f.write(validation_script)
        
        print("Created validation script: js/i18n-validation.js")
    
    def run_complete_fix(self):
        """Run the complete i18n system fix"""
        print("=== STARTING COMPLETE I18N SYSTEM FIX ===")
        
        # Step 1: Load analysis
        print("\n1. Loading analysis report...")
        report = self.load_analysis_report()
        
        # Step 2: Backup existing files
        print("\n2. Backing up existing files...")
        self.backup_existing_files()
        
        # Step 3: Load existing translations
        print("\n3. Loading existing translations...")
        self.load_existing_language_files()
        
        # Step 4: Generate missing translations
        print("\n4. Generating missing translations...")
        self.generate_missing_translations()
        
        # Step 5: Write standardized files
        print("\n5. Writing standardized language files...")
        self.write_standardized_language_files()
        
        # Step 6: Create unified manager
        print("\n6. Creating unified i18n manager...")
        self.create_unified_i18n_manager()
        
        # Step 7: Create validation script
        print("\n7. Creating validation script...")
        self.create_validation_script()
        
        print("\n=== I18N SYSTEM FIX COMPLETED ===")
        print("Next steps:")
        print("1. Update HTML pages to use unified-i18n.js")
        print("2. Remove old i18n.js and languages.js files")
        print("3. Test all pages with all languages")
        print("4. Use validateI18nSystem() to check completeness")

if __name__ == "__main__":
    fixer = I18nSystemFixer()
    fixer.run_complete_fix() 