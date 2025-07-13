/**
 * 百度搜索引擎SEO专项优化
 * 针对百度搜索的特殊需求和算法优化
 */

class BaiduSEOOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.addBaiduSpecificMeta();
        this.addBaiduPushScript();
        this.addBaiduAnalytics();
        this.optimizeForBaiduSpider();
        this.addBaiduSiteInfo();
    }

    // 添加百度特定的Meta标签
    addBaiduSpecificMeta() {
        // 百度移动适配
        this.addMetaTag('name', 'applicable-device', 'pc,mobile');
        this.addMetaTag('name', 'MobileOptimized', 'width');
        this.addMetaTag('name', 'HandheldFriendly', 'true');
        
        // 百度缓存控制
        this.addMetaTag('http-equiv', 'Cache-Control', 'max-age=7200');
        this.addMetaTag('http-equiv', 'Expires', this.getExpiresDate());
        
        // 百度收录控制
        this.addMetaTag('name', 'baidu-site-verification', 'code-will-be-provided');
        this.addMetaTag('name', 'renderer', 'webkit');
        
        // 百度转码控制
        this.addMetaTag('http-equiv', 'Cache-Control', 'no-transform');
        this.addMetaTag('http-equiv', 'Cache-Control', 'no-siteapp');
        
        // 中文搜索优化
        this.addMetaTag('name', 'format-detection', 'telephone=no');
        this.addMetaTag('name', 'browsermode', 'application');
        this.addMetaTag('name', 'x5-orientation', 'portrait');
        this.addMetaTag('name', 'x5-fullscreen', 'true');
        this.addMetaTag('name', 'x5-page-mode', 'app');
    }

    // 添加百度主动推送脚本
    addBaiduPushScript() {
        const script = document.createElement('script');
        script.innerHTML = `
            (function(){
                var bp = document.createElement('script');
                var curProtocol = window.location.protocol.split(':')[0];
                if (curProtocol === 'https') {
                    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
                } else {
                    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
                }
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(bp, s);
            })();
        `;
        document.head.appendChild(script);
    }

    // 添加百度统计代码
    addBaiduAnalytics() {
        // 百度统计代码（需要在百度统计后台获取实际的统计ID）
        const script = document.createElement('script');
        script.innerHTML = `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?your-baidu-analytics-id";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
            })();
        `;
        document.head.appendChild(script);
    }

    // 针对百度蜘蛛的优化
    optimizeForBaiduSpider() {
        // 检测是否为百度爬虫
        const userAgent = navigator.userAgent.toLowerCase();
        const isBaiduSpider = userAgent.includes('baiduspider') || userAgent.includes('baidu');
        
        if (isBaiduSpider) {
            // 为百度爬虫优化页面加载
            this.optimizePageForBaiduSpider();
        }

        // 添加百度收录标签
        this.addBaiduSeoTags();
    }

    // 百度蜘蛛专用页面优化
    optimizePageForBaiduSpider() {
        // 移除不必要的动画和交互
        const style = document.createElement('style');
        style.textContent = `
            * { animation: none !important; transition: none !important; }
            .loading { display: none !important; }
            .lazy { opacity: 1 !important; }
        `;
        document.head.appendChild(style);

        // 确保所有图片有alt属性
        document.querySelectorAll('img').forEach(img => {
            if (!img.alt) {
                img.alt = '彩票系统解决方案';
            }
        });

        // 优化链接结构
        document.querySelectorAll('a').forEach(link => {
            if (!link.title && link.textContent) {
                link.title = link.textContent.trim();
            }
        });
    }

    // 添加百度SEO专用标签
    addBaiduSeoTags() {
        const pageName = window.location.pathname.split('/').pop() || 'index.html';
        const baiduKeywords = this.getBaiduKeywords(pageName);
        
        // 百度特色关键词
        this.addMetaTag('name', 'baidu-keywords', baiduKeywords.join(','));
        
        // 百度页面分类
        this.addMetaTag('name', 'baidu-category', this.getBaiduCategory(pageName));
        
        // 百度地域信息
        this.addMetaTag('name', 'baidu-location', '北京,通州区');
        
        // 百度行业分类
        this.addMetaTag('name', 'baidu-industry', '互联网软件,彩票技术,系统开发');
    }

    // 获取百度专用关键词
    getBaiduKeywords(pageName) {
        const keywordMap = {
            'index.html': [
                '彩票系统', '彩票平台', '彩票出海', '彩票解决方案',
                '国际彩票', '彩票技术', '彩票开发', '彩票运营',
                '亚洲彩票', '非洲彩票', '拉美彩票', '中东彩票'
            ],
            'market-research.html': [
                '彩票市场调研', '彩票市场分析', 'AI市场调研',
                '彩票投资分析', '国际彩票市场', '彩票政策分析'
            ],
            'products.html': [
                '彩票系统开发', '彩票终端设备', 'POS终端',
                '热敏打印机', '票券印刷', '即开票系统'
            ],
            'case-studies.html': [
                '彩票案例', '国际彩票项目', '彩票成功案例',
                '柬埔寨彩票', '肯尼亚彩票', '巴西彩票'
            ],
            'contact.html': [
                '彩票咨询', '彩票合作', '彩票项目咨询',
                '彩票技术支持', '彩票解决方案咨询'
            ]
        };

        return keywordMap[pageName] || keywordMap['index.html'];
    }

    // 获取百度页面分类
    getBaiduCategory(pageName) {
        const categoryMap = {
            'index.html': '企业首页',
            'market-research.html': '服务介绍',
            'products.html': '产品展示',
            'case-studies.html': '案例展示',
            'about.html': '公司介绍',
            'contact.html': '联系方式'
        };

        return categoryMap[pageName] || '其他页面';
    }

    // 添加百度站点信息
    addBaiduSiteInfo() {
        // 添加百度站点信息JSON-LD
        const siteInfo = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "LottoBridge",
            "description": "全球彩票出海一站式解决方案平台",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "弘祥产业园B座",
                "addressLocality": "通州区",
                "addressRegion": "北京市",
                "postalCode": "101100",
                "addressCountry": "中国"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "39.728",
                "longitude": "116.658"
            },
            "telephone": "+86-17610653863",
            "email": "wupengfei@outlook.com",
            "url": "https://lottobridge.com",
            "sameAs": [
                "https://www.baidu.com/s?wd=LottoBridge",
                "https://www.so.com/s?q=LottoBridge",
                "https://www.sogou.com/web?query=LottoBridge"
            ],
            "openingHours": "Mo-Fr 09:00-18:00",
            "paymentAccepted": ["现金", "转账", "支票"],
            "currenciesAccepted": "CNY,USD,EUR",
            "areaServed": [
                "中国", "亚洲", "非洲", "美洲", "欧洲", "大洋洲"
            ]
        };

        this.insertBaiduStructuredData('siteInfo', siteInfo);
    }

    // 添加百度熊掌号相关
    addBaiduBearPaw() {
        // 百度熊掌号JSON-LD
        const bearPawData = {
            "@context": "https://ziyuan.baidu.com/contexts/cambrian.jsonld",
            "@id": "https://lottobridge.com",
            "appid": "your-bear-paw-id",
            "title": "LottoBridge - 全球彩票出海解决方案",
            "images": [
                "https://lottobridge.com/images/logo.png"
            ],
            "description": "专业的彩票系统解决方案提供商",
            "pubDate": new Date().toISOString()
        };

        this.insertBaiduStructuredData('bearPaw', bearPawData);
    }

    // 百度小程序适配
    addBaiduSmartProgram() {
        this.addMetaTag('name', 'baidu-smart-app', 'enable');
        this.addMetaTag('name', 'smart-app-id', 'your-smart-app-id');
        
        // 添加百度小程序关联
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.href = 'baiduboxapp://swan/your-app-id/path/to/page';
        link.setAttribute('media', 'only screen and (max-width: 640px)');
        document.head.appendChild(link);
    }

    // 百度MIP优化
    addBaiduMIP() {
        // 如果是移动端，添加MIP相关标签
        if (this.isMobile()) {
            this.addMetaTag('name', 'mip-version', '1.0');
            this.addLinkTag('mip-html', `${window.location.href}?mip=1`);
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

    addLinkTag(rel, href) {
        let link = document.querySelector(`link[rel="${rel}"]`);
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', rel);
            document.head.appendChild(link);
        }
        link.setAttribute('href', href);
    }

    insertBaiduStructuredData(id, data) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = `baidu-structured-data-${id}`;
        script.textContent = JSON.stringify(data, null, 2);
        document.head.appendChild(script);
    }

    getExpiresDate() {
        const date = new Date();
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7天后
        return date.toUTCString();
    }

    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // 百度收录检测
    checkBaiduIndexing() {
        const currentUrl = encodeURIComponent(window.location.href);
        const baiduSearchUrl = `https://www.baidu.com/s?wd=site:${currentUrl}`;
        
        // 在控制台显示百度收录检查链接
        console.log('百度收录检查:', baiduSearchUrl);
        
        return baiduSearchUrl;
    }

    // 生成百度推送用的URL列表
    generatePushUrls() {
        const baseUrl = 'https://lottobridge.com';
        const urls = [
            `${baseUrl}/index.html`,
            `${baseUrl}/market-research.html`,
            `${baseUrl}/products.html`,
            `${baseUrl}/insights.html`,
            `${baseUrl}/case-studies.html`,
            `${baseUrl}/about.html`,
            `${baseUrl}/contact.html`
        ];

        // 添加子页面
        const subPages = [
            'casestudy/case-brazil.html',
            'casestudy/case-cambodia.html',
            'casestudy/case-kenya.html',
            'casestudy/case-mexico.html',
            'casestudy/case-uzbekistan.html'
        ];

        subPages.forEach(page => {
            urls.push(`${baseUrl}/${page}`);
        });

        return urls;
    }
}

// 初始化百度SEO优化
document.addEventListener('DOMContentLoaded', function() {
    // 检测是否在中国境内或中文环境
    const isChineseEnvironment = 
        navigator.language.includes('zh') ||
        window.location.href.includes('zh') ||
        document.documentElement.lang.includes('zh');

    if (isChineseEnvironment) {
        window.baiduSEO = new BaiduSEOOptimizer();
        
        // 延迟执行一些优化，避免影响页面加载速度
        setTimeout(() => {
            window.baiduSEO.addBaiduBearPaw();
            window.baiduSEO.addBaiduSmartProgram();
            window.baiduSEO.addBaiduMIP();
        }, 2000);
    }
});

// 导出类供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BaiduSEOOptimizer;
} 