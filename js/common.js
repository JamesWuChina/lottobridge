/**
 * 公共组件加载器
 * 用于动态加载header和footer组件
 */

// 组件加载器类
class ComponentLoader {
    constructor() {
        this.componentsLoaded = 0;
        this.totalComponents = 0;
        this.onAllComponentsLoaded = null;
    }

    // 加载单个组件
    async loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentPath}: ${response.status}`);
            }
            
            const html = await response.text();
            const element = document.getElementById(elementId);
            
            if (element) {
                element.innerHTML = html;
                this.componentsLoaded++;
                
                // 如果所有组件都已加载，触发回调
                if (this.componentsLoaded === this.totalComponents && this.onAllComponentsLoaded) {
                    this.onAllComponentsLoaded();
                }
            } else {
                console.warn(`Element with ID "${elementId}" not found`);
            }
        } catch (error) {
            console.error(`Error loading component ${componentPath}:`, error);
        }
    }

    // 加载所有公共组件
    async loadComponents() {
        this.totalComponents = 2; // header + footer
        this.componentsLoaded = 0;
        
        // 加载header组件
        await this.loadComponent('header-container', 'components/header.html');
        
        // 加载footer组件
        await this.loadComponent('footer-container', 'components/footer.html');
    }

    // 设置当前页面的活动导航项
    setActiveNav(currentPage) {
        // 等待组件加载完成后再设置活动状态
        const setActive = () => {
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                link.classList.remove('active');
                
                // 检查当前页面链接
                const href = link.getAttribute('href');
                if (href === currentPage || 
                    (currentPage === 'index.html' && href === 'index.html') ||
                    (currentPage === '' && href === 'index.html')) {
                    link.classList.add('active');
                }
            });
        };

        if (this.componentsLoaded === this.totalComponents) {
            setActive();
        } else {
            this.onAllComponentsLoaded = setActive;
        }
    }

    // 初始化公共功能
    initializeCommonFunctions() {
        // 移动菜单切换
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        if (mobileMenuBtn && mainNav) {
            mobileMenuBtn.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                this.querySelector('i').classList.toggle('fa-times');
                this.querySelector('i').classList.toggle('fa-bars');
            });
        }
        
        // 头部滚动效果
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (header) {
                if (window.scrollY > 10) {
                    header.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.08)';
                }
            }
        });
        
        // 多语言功能初始化
        document.addEventListener('DOMContentLoaded', function() {
            if (window.i18n) {
                console.log('多语言系统已初始化，当前语言:', window.i18n.getCurrentLanguage());
            } else {
                console.warn('多语言系统未初始化');
            }
        });
    }
}

// 全局组件加载器实例
const componentLoader = new ComponentLoader();

// 初始化函数
async function initializeCommonComponents(currentPage = '') {
    // 加载公共组件
    await componentLoader.loadComponents();
    
    // 设置活动导航项
    if (currentPage) {
        componentLoader.setActiveNav(currentPage);
    }
    
    // 初始化公共功能
    componentLoader.initializeCommonFunctions();
}

// 自动检测当前页面并初始化
document.addEventListener('DOMContentLoaded', function() {
    // 自动检测当前页面
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    initializeCommonComponents(currentPage);
});

// 导出供其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ComponentLoader, initializeCommonComponents };
} 