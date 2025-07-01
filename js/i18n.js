// 国际化管理器
class I18nManager {
    constructor() {
        this.currentLanguage = 'zh'; // 默认语言
        this.languages = window.languages || {};
        this.init();
    }

    init() {
        // 从localStorage获取保存的语言设置
        const savedLanguage = localStorage.getItem('lottobridge_language');
        if (savedLanguage && this.languages[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        }

        // 初始化语言选择器
        this.initLanguageSelector();
        
        // 应用当前语言
        this.applyLanguage(this.currentLanguage);
    }

    initLanguageSelector() {
        const languageSelector = document.querySelector('.language-selector select');
        if (languageSelector) {
            // 更新语言选择器选项
            languageSelector.innerHTML = `
                <option value="zh" ${this.currentLanguage === 'zh' ? 'selected' : ''}>中文</option>
                <option value="en" ${this.currentLanguage === 'en' ? 'selected' : ''}>English</option>
                <option value="fr" ${this.currentLanguage === 'fr' ? 'selected' : ''}>Français</option>
                <option value="es" ${this.currentLanguage === 'es' ? 'selected' : ''}>Español</option>
                <option value="ko" ${this.currentLanguage === 'ko' ? 'selected' : ''}>한국어</option>
                <option value="ar" ${this.currentLanguage === 'ar' ? 'selected' : ''}>العربية</option>
                <option value="ru" ${this.currentLanguage === 'ru' ? 'selected' : ''}>Русский</option>
            `;

            // 添加语言切换事件监听器
            languageSelector.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }
    }

    changeLanguage(languageCode) {
        if (this.languages[languageCode]) {
            this.currentLanguage = languageCode;
            localStorage.setItem('lottobridge_language', languageCode);
            this.applyLanguage(languageCode);
            
            // 更新页面方向（阿拉伯语从右到左）
            document.documentElement.dir = languageCode === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.lang = languageCode;
        }
    }

    applyLanguage(languageCode) {
        const translations = this.languages[languageCode];
        if (!translations) return;

        // 设置页面语言属性
        document.documentElement.lang = languageCode;
        document.body.setAttribute('lang', languageCode);
        
        // 为阿拉伯语设置RTL方向
        if (languageCode === 'ar') {
            document.documentElement.dir = 'rtl';
            document.body.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
            document.body.dir = 'ltr';
        }

        // 更新页面标题
        if (translations.page && translations.page.title) {
            document.title = translations.page.title;
        }

        // 更新导航栏
        this.updateNavigation(translations.nav);
        
        // 更新英雄区域
        this.updateHeroSection(translations.hero);
        
        // 更新特性区域
        this.updateFeaturesSection(translations.features);
        
        // 更新解决方案区域
        this.updateSolutionsSection(translations.solutions);
        
        // 更新全球覆盖区域
        this.updateGlobalSection(translations.global);
        
        // 更新客户评价区域
        this.updateTestimonialsSection(translations.testimonials);
        
        // 更新CTA区域
        this.updateCtaSection(translations.cta);
        
        // 更新页脚
        this.updateFooter(translations.footer);
        
        // 更新所有data-i18n属性的元素
        this.updateDataI18nElements(translations);
        
        // 触发自定义事件，通知语言已更改
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: languageCode, translations }
        }));
    }

    updateNavigation(navTranslations) {
        const navLinks = document.querySelectorAll('.nav-links a');
        const navTexts = [
            navTranslations.home,
            navTranslations.market_research,
            navTranslations.products,
            navTranslations.insights,
            navTranslations.case_studies,
            navTranslations.about,
            navTranslations.contact
        ];

        navLinks.forEach((link, index) => {
            if (navTexts[index]) {
                link.textContent = navTexts[index];
            }
        });
    }

    updateHeroSection(heroTranslations) {
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero p');
        const ctaButtons = document.querySelectorAll('.hero .cta-buttons .btn');

        if (heroTitle) heroTitle.textContent = heroTranslations.title;
        if (heroSubtitle) heroSubtitle.textContent = heroTranslations.subtitle;
        
        if (ctaButtons[0]) ctaButtons[0].textContent = heroTranslations.cta_primary;
        if (ctaButtons[1]) ctaButtons[1].textContent = heroTranslations.cta_secondary;
    }

    updateFeaturesSection(featuresTranslations) {
        const featuresTitle = document.querySelector('.features .section-title h2');
        const featuresSubtitle = document.querySelector('.features .section-title p');
        const featureCards = document.querySelectorAll('.features .feature-card');

        if (featuresTitle) featuresTitle.textContent = featuresTranslations.title;
        if (featuresSubtitle) featuresSubtitle.textContent = featuresTranslations.subtitle;

        const featureData = [
            featuresTranslations.consulting,
            featuresTranslations.products,
            featuresTranslations.support
        ];

        featureCards.forEach((card, index) => {
            if (featureData[index]) {
                const title = card.querySelector('h3');
                const desc = card.querySelector('p');
                if (title) title.textContent = featureData[index].title;
                if (desc) desc.textContent = featureData[index].desc;
            }
        });
    }

    updateSolutionsSection(solutionsTranslations) {
        const solutionsTitle = document.querySelector('.solutions .section-title h2');
        const solutionsSubtitle = document.querySelector('.solutions .section-title p');
        const solutionCards = document.querySelectorAll('.solutions .solution-card');

        if (solutionsTitle) solutionsTitle.textContent = solutionsTranslations.title;
        if (solutionsSubtitle) solutionsSubtitle.textContent = solutionsTranslations.subtitle;

        const solutionData = [
            solutionsTranslations.software,
            solutionsTranslations.hardware,
            solutionsTranslations.printing
        ];

        solutionCards.forEach((card, index) => {
            if (solutionData[index]) {
                const title = card.querySelector('h3');
                const desc = card.querySelector('p');
                const link = card.querySelector('.solution-link');
                
                if (title) title.textContent = solutionData[index].title;
                if (desc) desc.textContent = solutionData[index].description;
                if (link) {
                    const linkText = link.childNodes[0];
                    if (linkText) linkText.textContent = solutionsTranslations.learn_more + ' ';
                }
            }
        });
    }

    updateGlobalSection(globalTranslations) {
        const globalTitle = document.querySelector('.global-coverage .section-title h2');
        const globalSubtitle = document.querySelector('.global-coverage .section-title p');
        const countryNames = document.querySelectorAll('.country-name');

        if (globalTitle) globalTitle.textContent = globalTranslations.title;
        if (globalSubtitle) globalSubtitle.textContent = globalTranslations.subtitle;

        const regionNames = [
            globalTranslations.regions.latinAmerica,
            globalTranslations.regions.africa,
            globalTranslations.regions.southeastAsia,
            globalTranslations.regions.centralEasternEurope,
            globalTranslations.regions.middleEast
        ];

        countryNames.forEach((name, index) => {
            if (regionNames[index]) {
                name.textContent = regionNames[index];
            }
        });
    }

    updateTestimonialsSection(testimonialsTranslations) {
        const testimonialsTitle = document.querySelector('.testimonials .section-title h2');
        const testimonialsSubtitle = document.querySelector('.testimonials .section-title p');
        const testimonialText = document.querySelector('.testimonial-text');
        const authorName = document.querySelector('.author-info h4');
        const authorPosition = document.querySelector('.author-info p');

        if (testimonialsTitle) testimonialsTitle.textContent = testimonialsTranslations.title;
        if (testimonialsSubtitle) testimonialsSubtitle.textContent = testimonialsTranslations.subtitle;
        if (testimonialText) testimonialText.textContent = testimonialsTranslations.quote;
        if (authorName) authorName.textContent = testimonialsTranslations.author;
        if (authorPosition) authorPosition.textContent = testimonialsTranslations.position;
    }

    updateCtaSection(ctaTranslations) {
        const ctaTitle = document.querySelector('.cta-section h2');
        const ctaSubtitle = document.querySelector('.cta-section p');
        const ctaButtons = document.querySelectorAll('.cta-section .cta-buttons .btn');

        if (ctaTitle) ctaTitle.textContent = ctaTranslations.title;
        if (ctaSubtitle) ctaSubtitle.textContent = ctaTranslations.subtitle;
        
        if (ctaButtons[0]) ctaButtons[0].textContent = ctaTranslations.contact_now;
        if (ctaButtons[1]) ctaButtons[1].textContent = ctaTranslations.book_demo;
    }

    updateFooter(footerTranslations) {
        const footerDescription = document.querySelector('.footer-col p');
        const footerHeadings = document.querySelectorAll('.footer-col h3');
        const copyright = document.querySelector('.footer-bottom p');

        if (footerDescription && footerTranslations.company) {
            footerDescription.textContent = footerTranslations.company.description;
        }
        
        // 更新页脚标题
        if (footerHeadings[1] && footerTranslations.products) {
            footerHeadings[1].textContent = footerTranslations.products.title;
        }
        if (footerHeadings[2] && footerTranslations.resources) {
            footerHeadings[2].textContent = footerTranslations.resources.title;
        }
        if (footerHeadings[3] && footerTranslations.contact) {
            footerHeadings[3].textContent = footerTranslations.contact.title;
        }

        // 更新版权信息
        if (copyright && footerTranslations.copyright) {
            const currentYear = new Date().getFullYear();
            const privacyText = footerTranslations.privacy_policy || '隐私政策';
            const termsText = footerTranslations.terms_of_service || '使用条款';
            
            copyright.innerHTML = `© ${currentYear} LottoBridge. ${footerTranslations.copyright} | <a href="#">${privacyText}</a> | <a href="#">${termsText}</a>`;
        }
    }

    updateDataI18nElements(translations) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedTranslation(translations, key);
            if (translation) {
                element.textContent = translation;
            }
        });
    }

    getNestedTranslation(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : null;
        }, obj);
    }

    // 获取当前语言的翻译文本
    t(key) {
        const keys = key.split('.');
        let value = this.languages[this.currentLanguage];
        
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // 如果找不到翻译，返回原始key
            }
        }
        
        return value || key;
    }

    // 获取当前语言代码
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // 获取支持的语言列表
    getSupportedLanguages() {
        return Object.keys(this.languages);
    }
}

// 创建全局实例
window.i18n = new I18nManager();