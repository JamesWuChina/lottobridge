/**
 * SEO结构化数据管理组件
 * 为Google、Bing、百度等搜索引擎提供Schema.org结构化数据
 */

class StructuredDataManager {
    constructor() {
        this.init();
    }

    init() {
        this.addOrganizationData();
        this.addWebsiteData();
        this.addBreadcrumbData();
        this.addPageSpecificData();
    }

    // 添加组织信息结构化数据
    addOrganizationData() {
        const organizationData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LottoBridge",
            "alternateName": ["LottoBridge彩票", "LottoBridge Lottery", "彩票出海"],
            "url": "https://lottobridge.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://lottobridge.com/images/logo.png",
                "width": 200,
                "height": 60
            },
            "description": {
                "@language": "zh",
                "@value": "全球彩票出海一站式解决方案平台，提供市场调研、系统开发、终端设备、票券印刷等全流程服务"
            },
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "industry": "Lottery Technology Solutions",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "弘祥产业园B座",
                "addressLocality": "通州区",
                "addressRegion": "北京市",
                "postalCode": "101100",
                "addressCountry": "CN"
            },
            "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+86-17610653863",
                "contactType": "customer service",
                "email": "wupengfei@outlook.com",
                "availableLanguage": ["Chinese", "English", "Spanish", "French", "Arabic", "Korean", "Russian"],
                "serviceArea": {
                    "@type": "Place",
                    "name": "Global"
                }
            }],
            "sameAs": [
                "https://www.linkedin.com/company/lottobridge",
                "https://twitter.com/lottobridge",
                "https://www.facebook.com/lottobridge"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Lottery Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Market Research",
                            "description": "AI-driven global lottery market analysis"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Lottery System Development",
                            "description": "Complete lottery system solutions"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Product",
                            "name": "Terminal Equipment",
                            "description": "POS terminals and printing equipment"
                        }
                    }
                ]
            }
        };

        this.insertStructuredData('organization', organizationData);
    }

    // 添加网站信息结构化数据
    addWebsiteData() {
        const websiteData = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "LottoBridge",
            "url": "https://lottobridge.com",
            "description": "Global lottery overseas one-stop solution platform",
            "inLanguage": ["zh-CN", "en-US", "es-ES", "fr-FR", "ar-SA", "ko-KR", "ru-RU"],
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://lottobridge.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
            },
            "mainEntity": {
                "@type": "Organization",
                "name": "LottoBridge"
            }
        };

        this.insertStructuredData('website', websiteData);
    }

    // 添加面包屑导航结构化数据
    addBreadcrumbData() {
        const currentPath = window.location.pathname;
        const breadcrumbData = this.generateBreadcrumb(currentPath);
        
        if (breadcrumbData) {
            this.insertStructuredData('breadcrumb', breadcrumbData);
        }
    }

    // 生成面包屑数据
    generateBreadcrumb(path) {
        const pathParts = path.split('/').filter(part => part);
        const breadcrumbItems = [];

        // 首页
        breadcrumbItems.push({
            "@type": "ListItem",
            "position": 1,
            "name": "首页",
            "item": "https://lottobridge.com/"
        });

        // 动态生成面包屑
        const breadcrumbMap = {
            'market-research.html': '市场调研',
            'products.html': '产品服务',
            'insights.html': '行业洞察',
            'case-studies.html': '合作案例',
            'about.html': '关于我们',
            'contact.html': '联系我们',
            'casestudy': '案例详情',
            'product': '产品详情',
            'insights': '洞察文章',
            'report': '市场报告'
        };

        let currentUrl = 'https://lottobridge.com';
        let position = 2;

        pathParts.forEach(part => {
            currentUrl += '/' + part;
            const name = breadcrumbMap[part] || part;
            
            breadcrumbItems.push({
                "@type": "ListItem",
                "position": position++,
                "name": name,
                "item": currentUrl
            });
        });

        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbItems
        };
    }

    // 添加页面特定结构化数据
    addPageSpecificData() {
        const pageName = window.location.pathname.split('/').pop() || 'index.html';
        
        switch (pageName) {
            case 'index.html':
                this.addHomepageData();
                break;
            case 'contact.html':
                this.addContactPageData();
                break;
            case 'about.html':
                this.addAboutPageData();
                break;
            case 'products.html':
                this.addProductsPageData();
                break;
            case 'case-studies.html':
                this.addCaseStudiesPageData();
                break;
            default:
                if (pageName.includes('case-')) {
                    this.addCaseStudyData(pageName);
                }
                break;
        }
    }

    // 首页结构化数据
    addHomepageData() {
        const homepageData = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "LottoBridge | 全球彩票出海一站式解决方案平台",
            "description": "LottoBridge提供全球彩票出海一站式解决方案，包括市场调研、系统开发、终端设备、票券印刷等全流程服务",
            "url": "https://lottobridge.com/index.html",
            "mainEntity": {
                "@type": "Service",
                "name": "Global Lottery Solutions",
                "provider": {
                    "@type": "Organization",
                    "name": "LottoBridge"
                },
                "serviceType": "Lottery Technology Solutions",
                "areaServed": [
                    {"@type": "Country", "name": "Cambodia"},
                    {"@type": "Country", "name": "Kenya"},
                    {"@type": "Country", "name": "Brazil"},
                    {"@type": "Country", "name": "Mexico"},
                    {"@type": "Country", "name": "Uzbekistan"}
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Lottery Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "市场调研",
                                "description": "AI驱动的全球彩票市场分析"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "系统搭建",
                                "description": "完整的彩票系统解决方案"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Product",
                                "name": "终端设备",
                                "description": "POS终端和打印设备"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "票券印刷",
                                "description": "专业的彩票票券设计和印刷服务"
                            }
                        }
                    ]
                }
            }
        };

        this.insertStructuredData('homepage', homepageData);
    }

    // 联系页面结构化数据
    addContactPageData() {
        const contactData = {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "联系我们 | LottoBridge",
            "description": "联系LottoBridge获取专业的彩票解决方案报价和咨询服务",
            "url": "https://lottobridge.com/contact.html",
            "mainEntity": {
                "@type": "ContactPoint",
                "telephone": "+86-17610653863",
                "email": "wupengfei@outlook.com",
                "contactType": "customer service",
                "availableLanguage": ["Chinese", "English", "Spanish", "French", "Arabic", "Korean", "Russian"],
                "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00",
                    "validFrom": "2020-01-01",
                    "validThrough": "2030-12-31"
                }
            }
        };

        this.insertStructuredData('contact', contactData);
    }

    // 关于页面结构化数据
    addAboutPageData() {
        const aboutData = {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "关于我们 | LottoBridge",
            "description": "了解LottoBridge的发展历程、团队实力和全球彩票业务布局",
            "url": "https://lottobridge.com/about.html",
            "mainEntity": {
                "@type": "Organization",
                "name": "LottoBridge",
                "foundingDate": "2020",
                "description": "专注于全球彩票出海业务的技术服务提供商",
                "knowsAbout": [
                    "Lottery Technology",
                    "Market Research",
                    "System Development",
                    "Terminal Equipment",
                    "Ticket Printing"
                ]
            }
        };

        this.insertStructuredData('about', aboutData);
    }

    // 产品页面结构化数据
    addProductsPageData() {
        const productsData = {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "产品服务 | LottoBridge",
            "description": "LottoBridge提供完整的彩票产品服务组合",
            "url": "https://lottobridge.com/products.html",
            "mainEntity": {
                "@type": "ItemList",
                "name": "Lottery Products and Services",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                            "@type": "Product",
                            "name": "数字彩票系统",
                            "description": "完整的数字彩票解决方案"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                            "@type": "Product",
                            "name": "即开票系统",
                            "description": "即开型彩票系统和管理平台"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "item": {
                            "@type": "Product",
                            "name": "POS终端设备",
                            "description": "专业的彩票销售终端设备"
                        }
                    }
                ]
            }
        };

        this.insertStructuredData('products', productsData);
    }

    // 案例页面结构化数据
    addCaseStudiesPageData() {
        const caseStudiesData = {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "合作案例 | LottoBridge",
            "description": "查看LottoBridge在全球各地的成功彩票项目案例",
            "url": "https://lottobridge.com/case-studies.html",
            "mainEntity": {
                "@type": "ItemList",
                "name": "Lottery Project Case Studies",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                            "@type": "CreativeWork",
                            "name": "柬埔寨彩票系统本地化合作",
                            "description": "全票种销售系统定制和本地终端部署项目"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                            "@type": "CreativeWork",
                            "name": "肯尼亚移动彩票平台建设",
                            "description": "移动应用和支付集成解决方案"
                        }
                    }
                ]
            }
        };

        this.insertStructuredData('caseStudies', caseStudiesData);
    }

    // 单个案例研究结构化数据
    addCaseStudyData(pageName) {
        const caseMap = {
            'case-brazil.html': {
                name: '巴西战略顾问与系统预研',
                description: '市场准入政策分析和线上彩票系统规划项目',
                country: 'Brazil'
            },
            'case-cambodia.html': {
                name: '柬埔寨彩票系统本地化合作',
                description: '全票种销售系统定制和本地终端部署项目',
                country: 'Cambodia'
            },
            'case-kenya.html': {
                name: '肯尼亚移动彩票平台建设',
                description: '移动应用和支付集成解决方案',
                country: 'Kenya'
            }
        };

        const caseInfo = caseMap[pageName];
        if (!caseInfo) return;

        const caseStudyData = {
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            "name": caseInfo.name,
            "description": caseInfo.description,
            "url": `https://lottobridge.com/casestudy/${pageName}`,
            "about": {
                "@type": "Service",
                "name": "Lottery System Implementation",
                "provider": {
                    "@type": "Organization",
                    "name": "LottoBridge"
                }
            },
            "locationCreated": {
                "@type": "Country",
                "name": caseInfo.country
            },
            "datePublished": "2024-01-01",
            "author": {
                "@type": "Organization",
                "name": "LottoBridge"
            }
        };

        this.insertStructuredData('caseStudy', caseStudyData);
    }

    // 插入结构化数据到页面
    insertStructuredData(id, data) {
        // 移除已存在的同类型数据
        const existingScript = document.getElementById(`structured-data-${id}`);
        if (existingScript) {
            existingScript.remove();
        }

        // 创建新的script标签
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = `structured-data-${id}`;
        script.textContent = JSON.stringify(data, null, 2);

        // 插入到head中
        document.head.appendChild(script);
    }

    // 添加FAQ结构化数据
    addFAQData(faqs) {
        const faqData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq, index) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };

        this.insertStructuredData('faq', faqData);
    }

    // 添加评论/评价结构化数据
    addReviewData(reviews) {
        const reviewData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LottoBridge",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": reviews.length,
                "bestRating": "5",
                "worstRating": "1"
            },
            "review": reviews.map(review => ({
                "@type": "Review",
                "author": {
                    "@type": "Organization",
                    "name": review.author
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": review.rating,
                    "bestRating": "5"
                },
                "reviewBody": review.text
            }))
        };

        this.insertStructuredData('reviews', reviewData);
    }
}

// 自动初始化结构化数据
document.addEventListener('DOMContentLoaded', function() {
    window.structuredDataManager = new StructuredDataManager();

    // 监听语言变化，更新结构化数据
    document.addEventListener('change', function(e) {
        if (e.target.id === 'languageSelector' || e.target.id === 'mobileLanguageSelector') {
            setTimeout(() => {
                window.structuredDataManager = new StructuredDataManager();
            }, 500);
        }
    });
});

// 导出类供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StructuredDataManager;
} 