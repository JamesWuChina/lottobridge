/**
 * 通用多语言自动翻译系统
 * 支持所有页面的多语言切换
 * LottoBridge Universal Translator
 */

class UniversalTranslator {
    constructor() {
        this.supportedLanguages = ['zh', 'en', 'es', 'fr', 'ar', 'ko', 'ru'];
        this.fallbackLanguage = 'en';
        this.initialized = false;
    }

    // 初始化翻译系统
    init() {
        if (this.initialized) return;
        
        // 确保所有脚本加载完成后再执行，延长等待时间确保语言包完全加载
        setTimeout(() => {
            console.log('=== Universal Translator System Activated ===');
            
            // 检查URL参数中的语言设置
            const urlParams = new URLSearchParams(window.location.search);
            const langParam = urlParams.get('lang');
            
            // 确定目标语言（优先级：URL参数 > localStorage > 默认中文）
            let targetLang = langParam || localStorage.getItem('selectedLanguage') || 'zh';
            
            // 验证目标语言是否支持
            if (!this.supportedLanguages.includes(targetLang)) {
                console.warn(`不支持的语言: ${targetLang}, 使用默认语言`);
                targetLang = 'zh';
            }
            
            // 如果URL中有语言参数，保存到localStorage
            if (langParam && langParam !== localStorage.getItem('selectedLanguage')) {
                localStorage.setItem('selectedLanguage', langParam);
                console.log('保存语言设置:', langParam);
            }
            
            // 如果目标语言不是中文且语言包已加载，启动自动翻译
            if (targetLang !== 'zh' && typeof window[targetLang] !== 'undefined') {
                console.log(`启动${targetLang}自动翻译...`);
                this.translatePage(targetLang);
            } else if (targetLang !== 'zh') {
                console.error(`${targetLang}语言包未加载`);
            } else {
                console.log('保持中文显示');
            }
            
            this.initialized = true;
        }, 2000);
    }

    // 翻译整个页面
    translatePage(langCode) {
        const languageData = window[langCode];
        if (!languageData) {
            console.error(`语言包 ${langCode} 未找到`);
            console.log('可用的语言包:', Object.keys(window).filter(key => 
                this.supportedLanguages.includes(key) && typeof window[key] === 'object'
            ));
            return;
        }

        console.log(`使用语言包 ${langCode}:`, typeof languageData, Object.keys(languageData).slice(0, 10));

        // 批量翻译所有带有data-i18n属性的元素
        const elements = document.querySelectorAll('[data-i18n]');
        console.log(`找到 ${elements.length} 个需要翻译的元素`);

        let successCount = 0;
        let failedCount = 0;
        const failedKeys = [];

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(languageData, key);
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
                successCount++;
                // console.log(`✓ ${key} -> ${translation.substring(0, 50)}...`);
            } else {
                // 尝试使用英文作为后备翻译
                if (langCode !== 'en' && window.en) {
                    const fallbackTranslation = this.getTranslation(window.en, key);
                    if (fallbackTranslation) {
                        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                            element.placeholder = fallbackTranslation;
                        } else {
                            element.textContent = fallbackTranslation;
                        }
                        successCount++;
                        console.log(`⚠️ ${key} -> 使用英文后备翻译`);
                    } else {
                        failedCount++;
                        failedKeys.push(key);
                        console.warn(`✗ 翻译缺失: ${key}`);
                    }
                } else {
                    failedCount++;
                    failedKeys.push(key);
                    console.warn(`✗ 翻译缺失: ${key}`);
                }
            }
        });

        // 显示失败的翻译键统计
        if (failedKeys.length > 0) {
            console.log('缺失的翻译键分组:');
            const keyGroups = {};
            failedKeys.forEach(key => {
                const prefix = key.split('.')[0];
                if (!keyGroups[prefix]) keyGroups[prefix] = [];
                keyGroups[prefix].push(key);
            });
            console.log(keyGroups);
        }

        // 更新页面标题
        this.updatePageTitle(languageData, langCode);
        
        // 更新HTML语言属性
        document.documentElement.lang = langCode;
        document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
        
        console.log(`翻译完成! 成功: ${successCount}, 失败: ${failedCount}`);
    }

    // 更新页面标题
    updatePageTitle(languageData, langCode) {
        // 尝试多种可能的标题键
        const titleKeys = [
            'page.title',
            'uzbekistan.page.title',
            'kenya.page.title', 
            'mexico.page.title',
            'nigeria.page.title',
            'philippines.page.title',
            'vietnam.page.title'
        ];

        for (const key of titleKeys) {
            const title = this.getTranslation(languageData, key);
            if (title) {
                document.title = title;
                break;
            }
        }
    }

    // 获取嵌套翻译的辅助函数
    getTranslation(obj, key) {
        if (!obj || !key) return null;
        
        const keys = key.split('.');
        let current = obj;
        
        for (const k of keys) {
            if (current && typeof current === 'object' && k in current) {
                current = current[k];
            } else {
                return null;
            }
        }
        
        return typeof current === 'string' ? current : null;
    }

    // 手动切换语言
    switchLanguage(langCode) {
        if (!this.supportedLanguages.includes(langCode)) {
            console.error(`不支持的语言: ${langCode}`);
            return false;
        }

        localStorage.setItem('selectedLanguage', langCode);
        
        // 更新URL参数
        const url = new URL(window.location);
        url.searchParams.set('lang', langCode);
        window.history.replaceState({}, '', url);
        
        // 刷新页面以应用新语言
        window.location.reload();
        
        return true;
    }
}

// 创建全局实例
window.universalTranslator = new UniversalTranslator();

// 自动初始化
document.addEventListener('DOMContentLoaded', () => {
    window.universalTranslator.init();
});

// 后备初始化（防止DOMContentLoaded已触发）
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.universalTranslator.init();
    });
} else {
    window.universalTranslator.init();
} 