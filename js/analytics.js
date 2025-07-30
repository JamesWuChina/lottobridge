/**
 * 多平台分析统计集成
 * 支持Google Analytics、百度统计、Yandex Metrica等
 */

class AnalyticsManager {
    constructor() {
        this.config = {
            // Google Analytics配置
            googleAnalytics: {
                measurementId: 'G-XXXXXXXXXX', // 需要替换为实际的GA4测量ID
                enabled: false // 暂时禁用以避免加载错误
            },
            // 百度统计配置
            baiduAnalytics: {
                siteId: 'your-baidu-site-id', // 需要替换为实际的百度统计ID
                enabled: false // 暂时禁用以避免加载错误
            },
            // Yandex Metrica配置（俄语地区）
            yandexMetrica: {
                counterId: 'your-yandex-counter-id',
                enabled: false // 暂时禁用以避免加载错误
            },
            // Microsoft Clarity配置
            microsoftClarity: {
                projectId: 'your-clarity-project-id',
                enabled: false // 暂时禁用以避免加载错误
            },
            // 热力图工具
            hotjar: {
                siteId: 'your-hotjar-site-id',
                enabled: false
            }
        };
        
        this.init();
    }

    init() {
        this.setupGoogleAnalytics();
        this.setupBaiduAnalytics();
        this.setupYandexMetrica();
        this.setupMicrosoftClarity();
        this.setupSearchConsoleVerification();
        this.trackPageEvents();
    }

    // 设置Google Analytics (GA4)
    setupGoogleAnalytics() {
        if (!this.config.googleAnalytics.enabled) return;

        // Google Analytics 4 代码
        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.googleAnalytics.measurementId}`;
        document.head.appendChild(gtagScript);

        const gtagConfig = document.createElement('script');
        gtagConfig.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${this.config.googleAnalytics.measurementId}', {
                page_title: document.title,
                page_location: window.location.href,
                language: document.documentElement.lang || 'zh-CN',
                country: this.getCountryFromLanguage(),
                send_page_view: true,
                anonymize_ip: true,
                custom_map: {
                    'custom_parameter_1': 'user_language',
                    'custom_parameter_2': 'page_category'
                }
            });

            // 设置用户属性
            gtag('config', '${this.config.googleAnalytics.measurementId}', {
                user_properties: {
                    user_language: document.documentElement.lang || 'zh-CN',
                    site_section: this.getPageCategory()
                }
            });
        `;
        document.head.appendChild(gtagConfig);

        // 绑定到全局
        window.gtag = window.gtag || function() {
            window.dataLayer.push(arguments);
        };
    }

    // 设置百度统计
    setupBaiduAnalytics() {
        if (!this.config.baiduAnalytics.enabled) return;

        const baiduScript = document.createElement('script');
        baiduScript.textContent = `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?${this.config.baiduAnalytics.siteId}";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
            })();
        `;
        document.head.appendChild(baiduScript);

        // 百度统计自定义事件追踪
        window._hmt = window._hmt || [];
    }

    // 设置Yandex Metrica（俄语地区分析）
    setupYandexMetrica() {
        if (!this.config.yandexMetrica.enabled) return;

        const yandexScript = document.createElement('script');
        yandexScript.textContent = `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${this.config.yandexMetrica.counterId}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
        `;
        document.head.appendChild(yandexScript);

        // noscript备用
        const noscript = document.createElement('noscript');
        noscript.innerHTML = `
            <div><img src="https://mc.yandex.ru/watch/${this.config.yandexMetrica.counterId}" style="position:absolute; left:-9999px;" alt="" /></div>
        `;
        document.body.appendChild(noscript);
    }

    // 设置Microsoft Clarity
    setupMicrosoftClarity() {
        if (!this.config.microsoftClarity.enabled) return;

        const clarityScript = document.createElement('script');
        clarityScript.textContent = `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${this.config.microsoftClarity.projectId}");
        `;
        document.head.appendChild(clarityScript);
    }

    // 设置搜索引擎验证
    setupSearchConsoleVerification() {
        // Google Search Console验证
        this.addMetaTag('name', 'google-site-verification', 'your-google-verification-code');
        
        // Bing Webmaster验证
        this.addMetaTag('name', 'msvalidate.01', 'your-bing-verification-code');
        
        // Yandex Webmaster验证
        this.addMetaTag('name', 'yandex-verification', 'your-yandex-verification-code');
        
        // 百度站长平台验证
        this.addMetaTag('name', 'baidu-site-verification', 'your-baidu-verification-code');
        
        // 360搜索验证
        this.addMetaTag('name', '360-site-verification', 'your-360-verification-code');
        
        // Sogou搜索验证
        this.addMetaTag('name', 'sogou_site_verification', 'your-sogou-verification-code');
    }

    // 追踪页面事件
    trackPageEvents() {
        // 页面停留时间
        this.trackTimeOnPage();
        
        // 滚动深度
        this.trackScrollDepth();
        
        // 点击事件
        this.trackClicks();
        
        // 表单提交
        this.trackFormSubmissions();
        
        // 文件下载
        this.trackDownloads();
        
        // 外部链接点击
        this.trackExternalLinks();
        
        // 语言切换
        this.trackLanguageChanges();
        
        // 移动端交互
        this.trackMobileInteractions();
    }

    // 追踪页面停留时间
    trackTimeOnPage() {
        const startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            
            // Google Analytics
            if (window.gtag) {
                window.gtag('event', 'page_timing', {
                    event_category: 'engagement',
                    name: 'time_on_page',
                    value: timeOnPage
                });
            }
            
            // 百度统计
            if (window._hmt) {
                window._hmt.push(['_trackEvent', 'engagement', 'time_on_page', 'seconds', timeOnPage]);
            }
        });
    }

    // 追踪滚动深度
    trackScrollDepth() {
        let maxScroll = 0;
        const milestones = [25, 50, 75, 90, 100];
        const reached = new Set();

        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );
            
            maxScroll = Math.max(maxScroll, scrollPercent);
            
            milestones.forEach(milestone => {
                if (scrollPercent >= milestone && !reached.has(milestone)) {
                    reached.add(milestone);
                    
                    // Google Analytics
                    if (window.gtag) {
                        window.gtag('event', 'scroll_depth', {
                            event_category: 'engagement',
                            event_label: `${milestone}%`,
                            value: milestone
                        });
                    }
                    
                    // 百度统计
                    if (window._hmt) {
                        window._hmt.push(['_trackEvent', 'engagement', 'scroll_depth', `${milestone}%`, milestone]);
                    }
                }
            });
        });
    }

    // 追踪点击事件
    trackClicks() {
        document.addEventListener('click', (e) => {
            const element = e.target.closest('a, button, .btn');
            if (!element) return;

            const elementText = element.textContent.trim() || element.alt || element.title;
            const elementType = element.tagName.toLowerCase();
            const elementClass = element.className || 'no-class';

            // Google Analytics
            if (window.gtag) {
                window.gtag('event', 'click', {
                    event_category: 'interaction',
                    event_label: elementText,
                    element_type: elementType,
                    element_class: elementClass
                });
            }

            // 百度统计
            if (window._hmt) {
                window._hmt.push(['_trackEvent', 'interaction', 'click', elementText]);
            }
        });
    }

    // 追踪表单提交
    trackFormSubmissions() {
        document.addEventListener('submit', (e) => {
            const form = e.target;
            const formId = form.id || 'unnamed-form';
            const formAction = form.action || window.location.href;

            // Google Analytics
            if (window.gtag) {
                window.gtag('event', 'form_submit', {
                    event_category: 'form',
                    event_label: formId,
                    form_action: formAction
                });
            }

            // 百度统计
            if (window._hmt) {
                window._hmt.push(['_trackEvent', 'form', 'submit', formId]);
            }
        });
    }

    // 追踪文件下载
    trackDownloads() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.href;
            const downloadExtensions = /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip|rar|mp4|avi|mov)$/i;
            
            if (downloadExtensions.test(href)) {
                const fileName = href.split('/').pop();
                
                // Google Analytics
                if (window.gtag) {
                    window.gtag('event', 'file_download', {
                        event_category: 'download',
                        event_label: fileName,
                        file_url: href
                    });
                }

                // 百度统计
                if (window._hmt) {
                    window._hmt.push(['_trackEvent', 'download', 'file', fileName]);
                }
            }
        });
    }

    // 追踪外部链接
    trackExternalLinks() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.href;
            const isExternal = href && 
                link.hostname !== window.location.hostname && 
                href.startsWith('http');

            if (isExternal) {
                // Google Analytics
                if (window.gtag) {
                    window.gtag('event', 'external_link', {
                        event_category: 'outbound',
                        event_label: href,
                        transport_type: 'beacon'
                    });
                }

                // 百度统计
                if (window._hmt) {
                    window._hmt.push(['_trackEvent', 'outbound', 'external_link', href]);
                }
            }
        });
    }

    // 追踪语言切换
    trackLanguageChanges() {
        document.addEventListener('change', (e) => {
            if (e.target.id === 'languageSelector' || e.target.id === 'mobileLanguageSelector') {
                const newLanguage = e.target.value;
                
                // Google Analytics
                if (window.gtag) {
                    window.gtag('event', 'language_change', {
                        event_category: 'user_preference',
                        event_label: newLanguage,
                        custom_parameter_1: newLanguage
                    });
                }

                // 百度统计
                if (window._hmt) {
                    window._hmt.push(['_trackEvent', 'user_preference', 'language_change', newLanguage]);
                }
            }
        });
    }

    // 追踪移动端交互
    trackMobileInteractions() {
        if (this.isMobile()) {
            // 触摸事件
            document.addEventListener('touchstart', (e) => {
                const element = e.target.closest('a, button, .btn');
                if (element) {
                    // Google Analytics
                    if (window.gtag) {
                        window.gtag('event', 'mobile_touch', {
                            event_category: 'mobile_interaction',
                            event_label: element.textContent.trim()
                        });
                    }
                }
            });

            // 设备方向变化
            window.addEventListener('orientationchange', () => {
                const orientation = screen.orientation ? screen.orientation.angle : window.orientation;
                
                // Google Analytics
                if (window.gtag) {
                    window.gtag('event', 'orientation_change', {
                        event_category: 'mobile_interaction',
                        event_label: orientation === 0 ? 'portrait' : 'landscape'
                    });
                }
            });
        }
    }

    // 自定义事件追踪方法
    trackCustomEvent(eventName, category, label, value) {
        // Google Analytics
        if (window.gtag) {
            window.gtag('event', eventName, {
                event_category: category,
                event_label: label,
                value: value
            });
        }

        // 百度统计
        if (window._hmt) {
            window._hmt.push(['_trackEvent', category, eventName, label, value]);
        }

        // Yandex Metrica
        if (window.ym) {
            window.ym(this.config.yandexMetrica.counterId, 'reachGoal', eventName);
        }
    }

    // 追踪页面性能
    trackPagePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    const pageLoadTime = perfData.loadEventEnd - perfData.fetchStart;
                    
                    // Google Analytics
                    if (window.gtag) {
                        window.gtag('event', 'page_load_time', {
                            event_category: 'performance',
                            value: Math.round(pageLoadTime),
                            metric_id: 'page_load'
                        });
                    }

                    // 百度统计
                    if (window._hmt) {
                        window._hmt.push(['_trackEvent', 'performance', 'page_load_time', 'milliseconds', Math.round(pageLoadTime)]);
                    }
                }, 1000);
            });
        }
    }

    // 工具方法
    addMetaTag(attribute, name, content) {
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attribute, name);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    }

    getCountryFromLanguage() {
        const langMap = {
            'zh': 'CN', 'en': 'US', 'es': 'ES', 'fr': 'FR',
            'ar': 'SA', 'ko': 'KR', 'ru': 'RU'
        };
        const lang = document.documentElement.lang || 'zh';
        return langMap[lang.split('-')[0]] || 'US';
    }

    getPageCategory() {
        const path = window.location.pathname;
        if (path.includes('market-research')) return 'research';
        if (path.includes('products')) return 'products';
        if (path.includes('case-studies')) return 'cases';
        if (path.includes('about')) return 'about';
        if (path.includes('contact')) return 'contact';
        return 'home';
    }

    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
}

// 初始化分析统计
document.addEventListener('DOMContentLoaded', function() {
    window.analyticsManager = new AnalyticsManager();
    window.analyticsManager.trackPagePerformance();
});

// 导出类供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnalyticsManager;
} 