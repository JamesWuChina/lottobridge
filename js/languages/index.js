// 多语言系统主文件
// 等待所有语言包加载完成后初始化

// 检查语言包是否已加载
function checkLanguagePacksLoaded() {
    return typeof window.zh !== 'undefined' && typeof window.en !== 'undefined';
}

// 语言配置
const languageConfig = {
    zh: {
        name: '中文',
        nativeName: '中文',
        flag: '🇨🇳',
        direction: 'ltr',
        getData: () => window.zh || {}
    },
    en: {
        name: 'English',
        nativeName: 'English',
        flag: '🇺🇸',
        direction: 'ltr',
        getData: () => window.en || {}
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
    const config = languageConfig[currentLang];
    if (config && config.getData) {
        return config.getData();
    }
    return languageConfig[defaultLanguage].getData();
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
        name: languageConfig[code].name,
        nativeName: languageConfig[code].nativeName,
        flag: languageConfig[code].flag,
        direction: languageConfig[code].direction
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
    if (!checkLanguagePacksLoaded()) {
        console.warn('Language packs not loaded yet, retrying...');
        setTimeout(initLanguageSystem, 100);
        return;
    }
    
    const currentLang = getCurrentLanguage();
    const config = getLanguageConfig(currentLang);
    
    // 设置文档方向
    document.documentElement.dir = config.direction;
    document.documentElement.lang = currentLang;
    
    // 更新页面标题
    const title = translate('page.title', currentLang);
    if (title && title !== 'page.title') {
        document.title = title;
    }
    
    // 更新所有带有 data-i18n 属性的元素
    updatePageContent(currentLang);
    
    console.log('多语言系统已初始化，当前语言:', currentLang);
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
        if (title && title !== 'page.title') {
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

// 模块导出（兼容性）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = i18n;
} else if (typeof exports !== 'undefined') {
    exports.i18n = i18n;
} 