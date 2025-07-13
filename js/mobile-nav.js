/**
 * 移动端导航系统
 * 负责处理汉堡菜单、侧边栏导航、移动端交互等功能
 */

class MobileNavigation {
    constructor() {
        this.init();
    }

    init() {
        this.createMobileNavigation();
        this.bindEvents();
        this.handleResize();
    }

    /**
     * 创建移动端导航结构
     */
    createMobileNavigation() {
        // 检查是否已经存在移动端导航
        if (document.querySelector('.mobile-nav-overlay')) {
            return;
        }

        // 创建汉堡菜单按钮
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.setAttribute('aria-label', '打开导航菜单');

        // 将汉堡菜单按钮添加到导航栏
        const headerContainer = document.querySelector('.header-container');
        if (headerContainer) {
            headerContainer.appendChild(mobileMenuBtn);
        }

        // 创建移动端导航结构
        const mobileNavStructure = this.createMobileNavStructure();
        document.body.appendChild(mobileNavStructure);
    }

    /**
     * 创建移动端导航结构
     */
    createMobileNavStructure() {
        // 创建遮罩层
        const overlay = document.createElement('div');
        overlay.className = 'mobile-nav-overlay';

        // 创建导航菜单
        const navMenu = document.createElement('div');
        navMenu.className = 'mobile-nav-menu';

        // 创建导航头部
        const navHeader = document.createElement('div');
        navHeader.className = 'mobile-nav-header';

        const logoClone = document.querySelector('.logo').cloneNode(true);
        const closeBtn = document.createElement('button');
        closeBtn.className = 'mobile-nav-close';
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        closeBtn.setAttribute('aria-label', '关闭导航菜单');

        navHeader.appendChild(logoClone);
        navHeader.appendChild(closeBtn);

        // 创建导航链接
        const navLinks = document.createElement('div');
        navLinks.className = 'mobile-nav-links';

        const navList = document.createElement('ul');
        const desktopNavLinks = document.querySelectorAll('.nav-links a');
        
        desktopNavLinks.forEach(link => {
            const listItem = document.createElement('li');
            const mobileLink = document.createElement('a');
            mobileLink.href = link.href;
            mobileLink.textContent = link.textContent;
            mobileLink.setAttribute('data-i18n', link.getAttribute('data-i18n'));
            
            // 复制active类
            if (link.classList.contains('active')) {
                mobileLink.classList.add('active');
            }
            
            listItem.appendChild(mobileLink);
            navList.appendChild(listItem);
        });

        navLinks.appendChild(navList);

        // 创建移动端语言选择器
        const mobileLanguageSelector = document.createElement('div');
        mobileLanguageSelector.className = 'mobile-language-selector';

        const languageSelect = document.querySelector('.language-selector select');
        if (languageSelect) {
            const mobileLanguageSelect = languageSelect.cloneNode(true);
            mobileLanguageSelect.id = 'mobileLanguageSelector';
            mobileLanguageSelector.appendChild(mobileLanguageSelect);
        }

        // 组装导航菜单
        navMenu.appendChild(navHeader);
        navMenu.appendChild(navLinks);
        navMenu.appendChild(mobileLanguageSelector);

        // 创建完整的移动端导航结构
        const mobileNavContainer = document.createElement('div');
        mobileNavContainer.appendChild(overlay);
        mobileNavContainer.appendChild(navMenu);

        return mobileNavContainer;
    }

    /**
     * 绑定事件监听器
     */
    bindEvents() {
        // 汉堡菜单按钮点击事件
        document.addEventListener('click', (e) => {
            if (e.target.closest('.mobile-menu-btn')) {
                this.openMobileNav();
            }
        });

        // 关闭按钮点击事件
        document.addEventListener('click', (e) => {
            if (e.target.closest('.mobile-nav-close')) {
                this.closeMobileNav();
            }
        });

        // 遮罩层点击事件
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('mobile-nav-overlay')) {
                this.closeMobileNav();
            }
        });

        // 导航链接点击事件
        document.addEventListener('click', (e) => {
            if (e.target.closest('.mobile-nav-links a')) {
                this.closeMobileNav();
            }
        });

        // 键盘事件
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMobileNavOpen()) {
                this.closeMobileNav();
            }
        });

        // 移动端语言选择器事件
        document.addEventListener('change', (e) => {
            if (e.target.id === 'mobileLanguageSelector') {
                const desktopSelector = document.getElementById('languageSelector');
                if (desktopSelector) {
                    desktopSelector.value = e.target.value;
                    // 触发桌面版语言选择器的change事件
                    const changeEvent = new Event('change', { bubbles: true });
                    desktopSelector.dispatchEvent(changeEvent);
                }
            }
        });

        // 窗口大小变化事件
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // 滚动事件 - 自动隐藏导航
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            const header = document.querySelector('.header');
            
            if (window.innerWidth <= 768) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // 向下滚动时隐藏导航栏
                    header.style.transform = 'translateY(-100%)';
                } else {
                    // 向上滚动时显示导航栏
                    header.style.transform = 'translateY(0)';
                }
            }
            
            lastScrollY = currentScrollY;
        });
    }

    /**
     * 打开移动端导航
     */
    openMobileNav() {
        const overlay = document.querySelector('.mobile-nav-overlay');
        const navMenu = document.querySelector('.mobile-nav-menu');
        
        if (overlay && navMenu) {
            overlay.classList.add('active');
            navMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // 焦点管理
            const firstLink = navMenu.querySelector('a');
            if (firstLink) {
                firstLink.focus();
            }
        }
    }

    /**
     * 关闭移动端导航
     */
    closeMobileNav() {
        const overlay = document.querySelector('.mobile-nav-overlay');
        const navMenu = document.querySelector('.mobile-nav-menu');
        
        if (overlay && navMenu) {
            overlay.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            
            // 恢复焦点到汉堡菜单按钮
            const menuBtn = document.querySelector('.mobile-menu-btn');
            if (menuBtn) {
                menuBtn.focus();
            }
        }
    }

    /**
     * 检查移动端导航是否打开
     */
    isMobileNavOpen() {
        const overlay = document.querySelector('.mobile-nav-overlay');
        return overlay && overlay.classList.contains('active');
    }

    /**
     * 处理窗口大小变化
     */
    handleResize() {
        // 当窗口大小变化时，如果切换到桌面版，关闭移动端导航
        if (window.innerWidth > 768 && this.isMobileNavOpen()) {
            this.closeMobileNav();
        }

        // 同步语言选择器的值
        this.syncLanguageSelectors();
    }

    /**
     * 同步桌面版和移动端语言选择器
     */
    syncLanguageSelectors() {
        const desktopSelector = document.getElementById('languageSelector');
        const mobileSelector = document.getElementById('mobileLanguageSelector');
        
        if (desktopSelector && mobileSelector) {
            if (desktopSelector.value !== mobileSelector.value) {
                mobileSelector.value = desktopSelector.value;
            }
        }
    }

    /**
     * 更新活动导航链接
     */
    updateActiveNavLink(href) {
        // 更新桌面版导航
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === href) {
                link.classList.add('active');
            }
        });

        // 更新移动端导航
        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === href) {
                link.classList.add('active');
            }
        });
    }

    /**
     * 添加移动端特有的交互增强
     */
    enhanceMobileInteractions() {
        // 添加触摸反馈
        document.addEventListener('touchstart', (e) => {
            if (e.target.closest('.btn, .mobile-nav-links a, .mobile-toolbar-btn')) {
                e.target.style.transform = 'scale(0.98)';
            }
        });

        document.addEventListener('touchend', (e) => {
            if (e.target.closest('.btn, .mobile-nav-links a, .mobile-toolbar-btn')) {
                setTimeout(() => {
                    e.target.style.transform = '';
                }, 100);
            }
        });

        // 防止双击缩放
        document.addEventListener('touchend', (e) => {
            if (e.target.closest('.btn, .mobile-nav-links a')) {
                e.preventDefault();
            }
        });

        // 添加滑动手势支持
        this.addSwipeGesture();
    }

    /**
     * 添加滑动手势支持
     */
    addSwipeGesture() {
        let startX = 0;
        let startY = 0;

        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        document.addEventListener('touchmove', (e) => {
            if (!startX || !startY) return;

            const diffX = startX - e.touches[0].clientX;
            const diffY = startY - e.touches[0].clientY;

            // 检查是否为水平滑动
            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX > 50) {
                    // 向左滑动 - 关闭导航菜单
                    if (this.isMobileNavOpen()) {
                        this.closeMobileNav();
                    }
                } else if (diffX < -50) {
                    // 向右滑动 - 打开导航菜单（仅在屏幕左边缘）
                    if (startX < 20 && !this.isMobileNavOpen()) {
                        this.openMobileNav();
                    }
                }
            }

            startX = 0;
            startY = 0;
        });
    }

    /**
     * 初始化移动端增强功能
     */
    initMobileEnhancements() {
        // 添加触摸类到body
        if ('ontouchstart' in window) {
            document.body.classList.add('touch-device');
        }

        // 添加移动端交互增强
        this.enhanceMobileInteractions();

        // 添加视口高度修复（解决移动端浏览器地址栏问题）
        this.fixViewportHeight();
    }

    /**
     * 修复移动端视口高度问题
     */
    fixViewportHeight() {
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setVH();
        window.addEventListener('resize', setVH);
        window.addEventListener('orientationchange', setVH);
    }

    /**
     * 销毁移动端导航
     */
    destroy() {
        // 移除事件监听器
        document.removeEventListener('click', this.handleClick);
        document.removeEventListener('keydown', this.handleKeydown);
        window.removeEventListener('resize', this.handleResize);

        // 移除移动端导航元素
        const overlay = document.querySelector('.mobile-nav-overlay');
        const navMenu = document.querySelector('.mobile-nav-menu');
        const menuBtn = document.querySelector('.mobile-menu-btn');

        if (overlay) overlay.remove();
        if (navMenu) navMenu.remove();
        if (menuBtn) menuBtn.remove();

        // 恢复body overflow
        document.body.style.overflow = '';
    }
}

// 自动初始化
document.addEventListener('DOMContentLoaded', () => {
    window.mobileNav = new MobileNavigation();
    window.mobileNav.initMobileEnhancements();
});

// 导出类供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileNavigation;
} 