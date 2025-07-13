/**
 * 多语言SEO配置
 * 为Google、Bing、百度等搜索引擎优化
 */

window.SEOConfig = {
    // 默认SEO设置
    default: {
        siteName: "LottoBridge",
        domain: "https://lottobridge.com",
        author: "LottoBridge Team",
        robots: "index, follow",
        revisitAfter: "7 days",
        rating: "general"
    },

    // 多语言关键词配置
    keywords: {
        zh: {
            primary: [
                "彩票系统", "彩票平台", "彩票出海", "全球彩票", "彩票解决方案",
                "彩票软件", "彩票终端", "彩票设备", "即开彩票", "数字彩票",
                "彩票市场调研", "彩票合规", "彩票技术", "彩票运营", "彩票印刷"
            ],
            secondary: [
                "lottery system", "lottery platform", "lottery overseas",
                "彩票系统开发", "彩票平台搭建", "彩票技术服务",
                "国际彩票", "亚洲彩票", "非洲彩票", "美洲彩票",
                "彩票终端设备", "POS终端", "热敏打印", "票券设计"
            ],
            locations: [
                "中国彩票", "柬埔寨彩票", "肯尼亚彩票", "巴西彩票", 
                "墨西哥彩票", "乌兹别克斯坦彩票", "亚洲彩票市场",
                "非洲彩票市场", "拉美彩票市场", "中东彩票市场"
            ]
        },
        en: {
            primary: [
                "lottery system", "lottery platform", "lottery solution",
                "global lottery", "lottery overseas", "lottery software",
                "lottery terminal", "lottery equipment", "instant lottery",
                "digital lottery", "lottery market research", "lottery compliance"
            ],
            secondary: [
                "lottery technology", "lottery operations", "lottery printing",
                "lottery development", "lottery deployment", "lottery services",
                "international lottery", "asia lottery", "africa lottery",
                "america lottery", "POS terminal", "thermal printing"
            ],
            locations: [
                "China lottery", "Cambodia lottery", "Kenya lottery", 
                "Brazil lottery", "Mexico lottery", "Uzbekistan lottery",
                "Asian lottery market", "African lottery market", 
                "Latin America lottery market", "Middle East lottery"
            ]
        },
        es: {
            primary: [
                "sistema de lotería", "plataforma de lotería", "lotería global",
                "solución de lotería", "lotería internacional", "software de lotería",
                "terminal de lotería", "equipo de lotería", "lotería instantánea",
                "lotería digital", "investigación de mercado de lotería"
            ],
            secondary: [
                "tecnología de lotería", "operaciones de lotería", "impresión de lotería",
                "desarrollo de lotería", "despliegue de lotería", "servicios de lotería",
                "terminal POS", "impresión térmica", "diseño de boletos"
            ],
            locations: [
                "lotería de México", "lotería de Brasil", "lotería de España",
                "mercado de lotería de América Latina", "lotería latinoamericana"
            ]
        },
        fr: {
            primary: [
                "système de loterie", "plateforme de loterie", "loterie mondiale",
                "solution de loterie", "loterie internationale", "logiciel de loterie",
                "terminal de loterie", "équipement de loterie", "loterie instantanée",
                "loterie numérique", "étude de marché de loterie"
            ],
            secondary: [
                "technologie de loterie", "opérations de loterie", "impression de loterie",
                "développement de loterie", "déploiement de loterie", "services de loterie",
                "terminal POS", "impression thermique", "conception de billets"
            ],
            locations: [
                "loterie africaine", "marché de loterie africain", "loterie francophone"
            ]
        },
        ar: {
            primary: [
                "نظام اليانصيب", "منصة اليانصيب", "اليانصيب العالمي",
                "حل اليانصيب", "اليانصيب الدولي", "برنامج اليانصيب",
                "محطة اليانصيب", "معدات اليانصيب", "اليانصيب الفوري",
                "اليانصيب الرقمي", "بحوث السوق لليانصيب"
            ],
            secondary: [
                "تكنولوجيا اليانصيب", "عمليات اليانصيب", "طباعة اليانصيب",
                "تطوير اليانصيب", "نشر اليانصيب", "خدمات اليانصيب",
                "محطة نقطة البيع", "الطباعة الحرارية", "تصميم التذاكر"
            ],
            locations: [
                "اليانصيب في الشرق الأوسط", "سوق اليانصيب العربي", "اليانصيب الإسلامي"
            ]
        },
        ko: {
            primary: [
                "복권 시스템", "복권 플랫폼", "글로벌 복권", "복권 솔루션",
                "국제 복권", "복권 소프트웨어", "복권 터미널", "복권 장비",
                "즉석 복권", "디지털 복권", "복권 시장 조사"
            ],
            secondary: [
                "복권 기술", "복권 운영", "복권 인쇄", "복권 개발",
                "복권 배포", "복권 서비스", "POS 터미널", "열전사 인쇄"
            ],
            locations: [
                "한국 복권", "아시아 복권", "아시아 복권 시장"
            ]
        },
        ru: {
            primary: [
                "система лотереи", "платформа лотереи", "глобальная лотерея",
                "решение для лотереи", "международная лотерея", "программное обеспечение лотереи",
                "терминал лотереи", "оборудование для лотереи", "мгновенная лотерея",
                "цифровая лотерея", "исследование рынка лотереи"
            ],
            secondary: [
                "технология лотереи", "операции лотереи", "печать лотереи",
                "разработка лотереи", "развертывание лотереи", "услуги лотереи",
                "POS терминал", "термопечать", "дизайн билетов"
            ],
            locations: [
                "лотерея Узбекистана", "российская лотерея", "рынок лотереи СНГ"
            ]
        }
    },

    // 页面特定SEO配置
    pages: {
        "index.html": {
            zh: {
                title: "LottoBridge | 全球彩票出海一站式解决方案平台",
                description: "LottoBridge提供全球彩票出海一站式解决方案，包括市场调研、系统开发、终端设备、票券印刷等全流程服务。支持亚洲、非洲、美洲等50+国家和地区的彩票业务。",
                keywords: "彩票系统,彩票平台,彩票出海,全球彩票,彩票解决方案,lottery system,国际彩票"
            },
            en: {
                title: "LottoBridge | Global Lottery Overseas One-Stop Solution Platform",
                description: "LottoBridge provides global lottery overseas one-stop solutions, including market research, system development, terminal equipment, ticket printing and full-process services. Supporting lottery business in 50+ countries and regions.",
                keywords: "lottery system,lottery platform,lottery overseas,global lottery,lottery solution,international lottery"
            },
            es: {
                title: "LottoBridge | Plataforma Global de Soluciones Integrales para Lotería",
                description: "LottoBridge ofrece soluciones integrales globales para lotería en el extranjero, incluyendo investigación de mercado, desarrollo de sistemas, equipos terminales, impresión de boletos y servicios de proceso completo.",
                keywords: "sistema de lotería,plataforma de lotería,lotería global,solución de lotería,lotería internacional"
            },
            fr: {
                title: "LottoBridge | Plateforme Mondiale de Solutions Intégrées de Loterie",
                description: "LottoBridge fournit des solutions intégrées mondiales pour la loterie à l'étranger, y compris la recherche de marché, le développement de systèmes, les équipements terminaux, l'impression de billets et les services de processus complet.",
                keywords: "système de loterie,plateforme de loterie,loterie mondiale,solution de loterie,loterie internationale"
            },
            ar: {
                title: "لوتو بريدج | منصة حلول اليانصيب العالمية الشاملة",
                description: "تقدم لوتو بريدج حلولاً شاملة عالمية لليانصيب في الخارج، بما في ذلك بحوث السوق وتطوير الأنظمة ومعدات المحطات وطباعة التذاكر وخدمات العملية الكاملة.",
                keywords: "نظام اليانصيب,منصة اليانصيب,اليانصيب العالمي,حل اليانصيب,اليانصيب الدولي"
            },
            ko: {
                title: "LottoBridge | 글로벌 복권 해외진출 원스톱 솔루션 플랫폼",
                description: "LottoBridge는 시장 조사, 시스템 개발, 터미널 장비, 티켓 인쇄 등 전체 프로세스 서비스를 포함한 글로벌 복권 해외진출 원스톱 솔루션을 제공합니다.",
                keywords: "복권 시스템,복권 플랫폼,글로벌 복권,복권 솔루션,국제 복권"
            },
            ru: {
                title: "LottoBridge | Глобальная Платформа Комплексных Решений для Лотереи",
                description: "LottoBridge предоставляет глобальные комплексные решения для лотереи за рубежом, включая исследования рынка, разработку систем, терминальное оборудование, печать билетов и услуги полного процесса.",
                keywords: "система лотереи,платформа лотереи,глобальная лотерея,решение для лотереи,международная лотерея"
            }
        },
        "market-research.html": {
            zh: {
                title: "市场调研 | AI驱动的全球彩票市场分析 | LottoBridge",
                description: "LottoBridge提供AI驱动的全球彩票市场调研服务，涵盖政策法规、市场规模、竞争格局分析。专业团队为50+国家提供深度市场洞察和投资建议。",
                keywords: "彩票市场调研,彩票市场分析,AI市场调研,全球彩票市场,彩票投资分析,lottery market research"
            },
            en: {
                title: "Market Research | AI-Driven Global Lottery Market Analysis | LottoBridge",
                description: "LottoBridge provides AI-driven global lottery market research services, covering policy regulations, market size, and competitive landscape analysis. Professional team provides in-depth market insights for 50+ countries.",
                keywords: "lottery market research,lottery market analysis,AI market research,global lottery market,lottery investment analysis"
            }
        },
        "products.html": {
            zh: {
                title: "产品服务 | 彩票系统终端设备票券印刷 | LottoBridge",
                description: "LottoBridge提供完整的彩票产品服务：数字彩票系统、即开票系统、体彩系统、POS终端、热敏打印设备、票券设计印刷等一站式解决方案。",
                keywords: "彩票系统,彩票终端,POS终端,热敏打印,票券印刷,即开票系统,数字彩票,lottery system,lottery terminal"
            },
            en: {
                title: "Products & Services | Lottery Systems Terminal Equipment Ticket Printing | LottoBridge",
                description: "LottoBridge provides complete lottery product services: digital lottery systems, instant ticket systems, sports betting systems, POS terminals, thermal printing equipment, ticket design and printing one-stop solutions.",
                keywords: "lottery system,lottery terminal,POS terminal,thermal printing,ticket printing,instant lottery system,digital lottery"
            }
        },
        "case-studies.html": {
            zh: {
                title: "合作案例 | 全球彩票项目成功案例 | LottoBridge",
                description: "查看LottoBridge在柬埔寨、肯尼亚、巴西、墨西哥、乌兹别克斯坦等国的成功彩票项目案例。从系统搭建到运营支持的完整解决方案实例。",
                keywords: "彩票项目案例,彩票成功案例,国际彩票项目,柬埔寨彩票,肯尼亚彩票,巴西彩票,lottery case study"
            },
            en: {
                title: "Case Studies | Global Lottery Project Success Stories | LottoBridge",
                description: "View LottoBridge's successful lottery project cases in Cambodia, Kenya, Brazil, Mexico, Uzbekistan and other countries. Complete solution examples from system setup to operational support.",
                keywords: "lottery case study,lottery success stories,international lottery projects,Cambodia lottery,Kenya lottery,Brazil lottery"
            }
        },
        "contact.html": {
            zh: {
                title: "联系我们 | 获取彩票解决方案报价 | LottoBridge",
                description: "联系LottoBridge获取专业的彩票解决方案报价和咨询服务。我们的专家团队为您提供7×24小时技术支持，覆盖全球50+国家和地区。",
                keywords: "联系LottoBridge,彩票解决方案咨询,彩票项目报价,彩票技术支持,lottery contact,lottery consultation"
            },
            en: {
                title: "Contact Us | Get Lottery Solution Quote | LottoBridge",
                description: "Contact LottoBridge for professional lottery solution quotes and consulting services. Our expert team provides 7×24 technical support, covering 50+ countries and regions globally.",
                keywords: "contact LottoBridge,lottery solution consultation,lottery project quote,lottery technical support"
            }
        }
    },

    // 地域性SEO配置
    regions: {
        asia: {
            zh: ["中国", "亚洲", "东南亚", "东亚", "南亚"],
            en: ["China", "Asia", "Southeast Asia", "East Asia", "South Asia"],
            countries: ["Cambodia", "Thailand", "Vietnam", "Malaysia", "Singapore", "Indonesia", "Philippines"]
        },
        africa: {
            zh: ["非洲", "东非", "西非", "南非", "北非"],
            en: ["Africa", "East Africa", "West Africa", "South Africa", "North Africa"],
            countries: ["Kenya", "Nigeria", "South Africa", "Egypt", "Morocco", "Ghana", "Tanzania"]
        },
        americas: {
            zh: ["美洲", "北美", "南美", "拉丁美洲", "中美洲"],
            en: ["Americas", "North America", "South America", "Latin America", "Central America"],
            es: ["América", "América del Norte", "América del Sur", "América Latina", "Centroamérica"],
            countries: ["Brazil", "Mexico", "Argentina", "Colombia", "Chile", "Peru", "Venezuela"]
        },
        middleEast: {
            zh: ["中东", "西亚", "阿拉伯"],
            en: ["Middle East", "West Asia", "Arab"],
            ar: ["الشرق الأوسط", "غرب آسيا", "العربية"],
            countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Jordan", "Lebanon"]
        },
        europe: {
            zh: ["欧洲", "东欧", "西欧", "南欧", "北欧"],
            en: ["Europe", "Eastern Europe", "Western Europe", "Southern Europe", "Northern Europe"],
            fr: ["Europe", "Europe de l'Est", "Europe de l'Ouest", "Europe du Sud", "Europe du Nord"],
            countries: ["Germany", "France", "UK", "Italy", "Spain", "Poland", "Netherlands"]
        }
    },

    // 结构化数据模板
    structuredData: {
        organization: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LottoBridge",
            "url": "https://lottobridge.com",
            "logo": "https://lottobridge.com/images/logo.png",
            "description": "Global lottery overseas one-stop solution platform",
            "foundingDate": "2020",
            "founders": [{
                "@type": "Person",
                "name": "LottoBridge Team"
            }],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "弘祥产业园B座",
                "addressLocality": "通州区",
                "addressRegion": "北京市",
                "addressCountry": "CN"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+86-17610653863",
                "contactType": "customer service",
                "email": "wupengfei@outlook.com"
            },
            "sameAs": [
                "https://www.linkedin.com/company/lottobridge",
                "https://twitter.com/lottobridge"
            ]
        },
        service: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Lottery System Solutions",
            "provider": {
                "@type": "Organization",
                "name": "LottoBridge"
            },
            "serviceType": "Lottery Technology Solutions",
            "description": "Comprehensive lottery system solutions including market research, system development, terminal equipment, and ticket printing services."
        }
    }
};

// SEO工具函数
window.SEOUtils = {
    // 获取当前语言的SEO信息
    getCurrentSEO: function(pageName) {
        const currentLang = this.getCurrentLanguage();
        const pageConfig = window.SEOConfig.pages[pageName];
        
        if (pageConfig && pageConfig[currentLang]) {
            return pageConfig[currentLang];
        }
        
        return pageConfig ? pageConfig.zh : null;
    },

    // 获取当前语言
    getCurrentLanguage: function() {
        if (window.i18nManager && typeof window.i18nManager.getCurrentLanguage === 'function') {
            return window.i18nManager.getCurrentLanguage();
        }
        
        const langSelector = document.getElementById('languageSelector') || document.getElementById('mobileLanguageSelector');
        if (langSelector) {
            return langSelector.value;
        }
        
        return 'zh';
    },

    // 生成关键词字符串
    generateKeywords: function(pageName) {
        const currentLang = this.getCurrentLanguage();
        const keywords = window.SEOConfig.keywords[currentLang];
        
        if (!keywords) return '';
        
        let allKeywords = [...keywords.primary];
        
        // 添加次要关键词
        if (keywords.secondary) {
            allKeywords = allKeywords.concat(keywords.secondary.slice(0, 5));
        }
        
        // 添加地域关键词
        if (keywords.locations) {
            allKeywords = allKeywords.concat(keywords.locations.slice(0, 3));
        }
        
        // 页面特定关键词
        const pageSEO = this.getCurrentSEO(pageName);
        if (pageSEO && pageSEO.keywords) {
            allKeywords.unshift(pageSEO.keywords);
        }
        
        return allKeywords.join(',');
    },

    // 更新页面Meta标签
    updatePageMeta: function(pageName) {
        const seoData = this.getCurrentSEO(pageName);
        const currentLang = this.getCurrentLanguage();
        
        if (!seoData) return;
        
        // 更新title
        if (seoData.title) {
            document.title = seoData.title;
            this.updateMetaTag('property', 'og:title', seoData.title);
            this.updateMetaTag('name', 'twitter:title', seoData.title);
        }
        
        // 更新description
        if (seoData.description) {
            this.updateMetaTag('name', 'description', seoData.description);
            this.updateMetaTag('property', 'og:description', seoData.description);
            this.updateMetaTag('name', 'twitter:description', seoData.description);
        }
        
        // 更新keywords
        const keywords = this.generateKeywords(pageName);
        if (keywords) {
            this.updateMetaTag('name', 'keywords', keywords);
        }
        
        // 更新语言标签
        document.documentElement.lang = currentLang;
        this.updateMetaTag('property', 'og:locale', this.getOGLocale(currentLang));
        
        // 更新canonical URL
        const currentUrl = window.location.href.split('?')[0].split('#')[0];
        this.updateLinkTag('canonical', currentUrl);
    },

    // 更新meta标签
    updateMetaTag: function(attribute, value, content) {
        let meta = document.querySelector(`meta[${attribute}="${value}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attribute, value);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    },

    // 更新link标签
    updateLinkTag: function(rel, href) {
        let link = document.querySelector(`link[rel="${rel}"]`);
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', rel);
            document.head.appendChild(link);
        }
        link.setAttribute('href', href);
    },

    // 获取OpenGraph语言代码
    getOGLocale: function(lang) {
        const localeMap = {
            'zh': 'zh_CN',
            'en': 'en_US',
            'es': 'es_ES',
            'fr': 'fr_FR',
            'ar': 'ar_AR',
            'ko': 'ko_KR',
            'ru': 'ru_RU'
        };
        return localeMap[lang] || 'en_US';
    }
};

// 自动初始化SEO
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面名称
    const pageName = window.location.pathname.split('/').pop() || 'index.html';
    
    // 更新SEO信息
    window.SEOUtils.updatePageMeta(pageName);
    
    // 监听语言变化
    document.addEventListener('change', function(e) {
        if (e.target.id === 'languageSelector' || e.target.id === 'mobileLanguageSelector') {
            setTimeout(() => {
                window.SEOUtils.updatePageMeta(pageName);
            }, 100);
        }
    });
});

// 导出配置供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SEOConfig: window.SEOConfig, SEOUtils: window.SEOUtils };
} 