// 多语言系统主文件
// 导入所有语言包
import zh from './zh.js';
import en from './en.js';
import fr from './fr.js';
import es from './es.js';
import ko from './ko.js';
import ar from './ar.js';
import ru from './ru.js';

// 语言配置
const languageConfig = {
    zh: {
        name: '中文',
        nativeName: '中文',
        flag: '🇨🇳',
        direction: 'ltr',
        data: zh
    },
    en: {
        name: 'English',
        nativeName: 'English',
        flag: '🇺🇸',
        direction: 'ltr',
        data: en
    },
    fr: {
        name: 'Français',
        nativeName: 'Français',
        flag: '🇫🇷',
        direction: 'ltr',
        data: fr
    },
    es: {
        name: 'Español',
        nativeName: 'Español',
        flag: '🇪🇸',
        direction: 'ltr',
        data: es
    },
    ko: {
        name: '한국어',
        nativeName: '한국어',
        flag: '🇰🇷',
        direction: 'ltr',
        data: ko
    },
    ar: {
        name: 'العربية',
        nativeName: 'العربية',
        flag: '🇸🇦',
        direction: 'rtl',
        data: ar
    },
    ru: {
        name: 'Русский',
        nativeName: 'Русский',
        flag: '🇷🇺',
        direction: 'ltr',
        data: ru
    }
};

// 默认语言
const defaultLanguage = 'zh';

// 获取当前语言
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || defaultLanguage;
}

// 设置语言
function setLanguage(langCode) {
    if (languageConfig[langCode]) {
        localStorage.setItem('selectedLanguage', langCode);
        return true;
    }
    return false;
}

// 获取语言数据
function getLanguageData(langCode = null) {
    const currentLang = langCode || getCurrentLanguage();
    return languageConfig[currentLang]?.data || languageConfig[defaultLanguage].data;
}

// 获取语言配置
function getLanguageConfig(langCode = null) {
    const currentLang = langCode || getCurrentLanguage();
    return languageConfig[currentLang] || languageConfig[defaultLanguage];
}

// 获取所有可用语言
function getAvailableLanguages() {
    return Object.keys(languageConfig).map(code => ({
        code,
        ...languageConfig[code]
    }));
}

// 翻译函数
function translate(key, langCode = null) {
    const data = getLanguageData(langCode);
    const keys = key.split('.');
    let result = data;
    
    for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
            result = result[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key; // 返回原始键作为后备
        }
    }
    
    return result || key;
}

// 初始化语言系统
function initLanguageSystem() {
    const currentLang = getCurrentLanguage();
    const config = getLanguageConfig(currentLang);
    
    // 设置文档方向
    document.documentElement.dir = config.direction;
    document.documentElement.lang = currentLang;
    
    // 更新页面标题
    const title = translate('page.title', currentLang);
    if (title) {
        document.title = title;
    }
    
    // 更新所有带有 data-i18n 属性的元素
    updatePageContent(currentLang);
}

// 更新页面内容
function updatePageContent(langCode) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translate(key, langCode);
        
        if (translation && translation !== key) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// 切换语言
function switchLanguage(langCode) {
    if (setLanguage(langCode)) {
        const config = getLanguageConfig(langCode);
        
        // 更新文档属性
        document.documentElement.dir = config.direction;
        document.documentElement.lang = langCode;
        
        // 更新页面内容
        updatePageContent(langCode);
        
        // 更新页面标题
        const title = translate('page.title', langCode);
        if (title) {
            document.title = title;
        }
        
        // 触发语言切换事件
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: langCode, config }
        }));
        
        return true;
    }
    return false;
}

// 导出语言系统
const i18n = {
    // 核心功能
    getCurrentLanguage,
    setLanguage,
    getLanguageData,
    getLanguageConfig,
    getAvailableLanguages,
    translate,
    switchLanguage,
    initLanguageSystem,
    updatePageContent,
    
    // 语言配置
    languageConfig,
    defaultLanguage
};

// 导出到全局对象
if (typeof window !== 'undefined') {
    window.i18n = i18n;
    window.languageConfig = languageConfig;
}

// 模块导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = i18n;
} else if (typeof exports !== 'undefined') {
    exports.i18n = i18n;
}

export default i18n; 