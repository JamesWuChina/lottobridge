/**
 * Enhanced Mobile JavaScript for LottoBridge Case Studies
 * Provides touch-friendly interactions and mobile optimizations
 */

(function() {
    'use strict';

    // Mobile Detection and Setup
    const isMobile = window.innerWidth <= 768;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    // Mobile-First Initialization
    document.addEventListener('DOMContentLoaded', function() {
        initMobileOptimizations();
        initTouchInteractions();
        initMobileNavigation();
        initLanguageSelectorMobile();
        initScrollOptimizations();
        initPerformanceOptimizations();
    });

    /**
     * Initialize Mobile-Specific Optimizations
     */
    function initMobileOptimizations() {
        // Add mobile-specific body classes
        document.body.classList.add('mobile-optimized');
        if (isTouch) document.body.classList.add('touch-device');
        if (isIOS) document.body.classList.add('ios-device');
        if (isAndroid) document.body.classList.add('android-device');

        // Optimize viewport for mobile
        optimizeViewport();

        // Prevent zoom on input focus (iOS specific)
        preventZoomOnInput();

        // Handle orientation changes
        handleOrientationChange();

        // Optimize images for mobile
        optimizeImagesForMobile();
    }

    /**
     * Enhanced Touch Interactions
     */
    function initTouchInteractions() {
        // Enhanced button touch feedback
        const buttons = document.querySelectorAll('.btn, .case-highlight, .delivery-step');
        buttons.forEach(button => {
            // Add touch ripple effect
            addTouchRipple(button);
            
            // Enhanced touch feedback
            button.addEventListener('touchstart', function(e) {
                this.style.transform = 'scale(0.98)';
                this.style.transition = 'transform 0.1s ease';
            }, { passive: true });

            button.addEventListener('touchend', function(e) {
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.transition = 'transform 0.2s ease';
                }, 100);
            }, { passive: true });
        });

        // Swipe gestures for case studies navigation
        initSwipeNavigation();

        // Touch-friendly image gallery
        initTouchImageGallery();
    }

    /**
     * Enhanced Mobile Navigation
     */
    function initMobileNavigation() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const header = document.querySelector('.header');
        let isMenuOpen = false;

        if (!mobileMenuBtn || !navLinks) return;

        // Enhanced mobile menu toggle
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            isMenuOpen = !isMenuOpen;
            
            // Toggle menu with enhanced animations
            navLinks.classList.toggle('active', isMenuOpen);
            mobileMenuBtn.classList.toggle('active', isMenuOpen);
            document.body.classList.toggle('menu-open', isMenuOpen);
            
            // Update aria attributes for accessibility
            mobileMenuBtn.setAttribute('aria-expanded', isMenuOpen);
            navLinks.setAttribute('aria-hidden', !isMenuOpen);
            
            // Animate menu button icon
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.className = isMenuOpen ? 'fas fa-times' : 'fas fa-bars';
            }
            
            // Prevent body scroll when menu is open
            if (isMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (isMenuOpen && !header.contains(e.target)) {
                mobileMenuBtn.click();
            }
        });

        // Close menu when clicking on nav links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (isMenuOpen) {
                    mobileMenuBtn.click();
                }
            });
        });

        // Handle escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isMenuOpen) {
                mobileMenuBtn.click();
            }
        });
    }

    /**
     * Enhanced Language Selector for Mobile
     */
    function initLanguageSelectorMobile() {
        const languageSelector = document.getElementById('languageSelector');
        if (!languageSelector) return;

        // Add touch-friendly styling
        languageSelector.style.minHeight = '44px';
        languageSelector.style.fontSize = isMobile ? '16px' : '15px'; // Prevent zoom on iOS

        // Enhanced change handler with loading feedback
        languageSelector.addEventListener('change', function() {
            const selectedLang = this.value;
            const currentPath = window.location.pathname;
            
            // Show loading feedback
            showLoadingFeedback();
            
            // Determine new path
            const basePath = currentPath.replace(/-(en|ru|es|pt|fr|ar|ko|zh|km|th|vi|sw)\.html/, '');
            let newPath;
            
            if (selectedLang === 'zh') {
                newPath = basePath + '.html';
            } else {
                newPath = basePath + '-' + selectedLang + '.html';
            }
            
            // Smooth transition to new language
            setTimeout(() => {
                window.location.href = newPath;
            }, 200);
        });
    }

    /**
     * Scroll Optimizations for Mobile
     */
    function initScrollOptimizations() {
        let ticking = false;
        let lastScrollY = 0;

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    smoothScrollTo(target, 800);
                }
            });
        });

        // Enhanced header scroll behavior
        function updateHeaderOnScroll() {
            const header = document.querySelector('.header');
            if (!header) return;

            const scrollY = window.pageYOffset;
            const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';

            // Hide header when scrolling down, show when scrolling up
            if (isMobile) {
                if (scrollDirection === 'down' && scrollY > 100) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
            }

            // Update header shadow
            if (scrollY > 10) {
                header.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
                header.style.backdropFilter = 'blur(12px)';
            } else {
                header.style.boxShadow = '0 6px 32px rgba(26,62,140,0.10)';
                header.style.backdropFilter = 'blur(8px)';
            }

            lastScrollY = scrollY;
            ticking = false;
        }

        // Throttled scroll listener
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateHeaderOnScroll);
                ticking = true;
            }
        }, { passive: true });
    }

    /**
     * Performance Optimizations
     */
    function initPerformanceOptimizations() {
        // Lazy load images
        if ('IntersectionObserver' in window) {
            lazyLoadImages();
        }

        // Preload critical resources
        preloadCriticalResources();

        // Optimize font loading
        optimizeFontLoading();

        // Reduce animations on low-performance devices
        optimizeAnimations();
    }

    /**
     * Helper Functions
     */

    function addTouchRipple(element) {
        element.addEventListener('touchstart', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.touches[0].clientX - rect.left - size / 2;
            const y = e.touches[0].clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;

            if (!this.style.position || this.style.position === 'static') {
                this.style.position = 'relative';
            }
            this.style.overflow = 'hidden';

            this.appendChild(ripple);

            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        }, { passive: true });

        // Add ripple animation CSS if not exists
        if (!document.querySelector('#ripple-animation')) {
            const style = document.createElement('style');
            style.id = 'ripple-animation';
            style.textContent = `
                @keyframes ripple {
                    to { transform: scale(2); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    function smoothScrollTo(target, duration = 800) {
        const targetPosition = target.offsetTop - 80; // Account for fixed header
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    function optimizeViewport() {
        // Fix viewport issues on mobile devices
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.setAttribute('content', 
                'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover'
            );
        }
    }

    function preventZoomOnInput() {
        if (isIOS) {
            const inputs = document.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    if (this.style.fontSize !== '16px') {
                        this.style.fontSize = '16px';
                    }
                });
            });
        }
    }

    function handleOrientationChange() {
        window.addEventListener('orientationchange', function() {
            // Force viewport recalculation
            setTimeout(() => {
                window.scrollTo(0, window.pageYOffset);
            }, 100);
        });
    }

    function optimizeImagesForMobile() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            
            // Add loading="lazy" for performance
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
    }

    function initSwipeNavigation() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        document.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        document.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            handleSwipeGesture();
        }, { passive: true });

        function handleSwipeGesture() {
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            
            // Only trigger if horizontal swipe is significant
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 100) {
                // Implement case study navigation if needed
                // This could navigate between different case studies
            }
        }
    }

    function initTouchImageGallery() {
        const images = document.querySelectorAll('.case-overview-img, .testimonial-avatar');
        images.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                // Could implement image lightbox/zoom for mobile
                this.style.transform = this.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
                this.style.transition = 'transform 0.3s ease';
                
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 2000);
            });
        });
    }

    function showLoadingFeedback() {
        const loader = document.createElement('div');
        loader.className = 'language-loading';
        loader.innerHTML = '<div class="spinner"></div>';
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255,255,255,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        `;
        
        const spinner = loader.querySelector('.spinner');
        spinner.style.cssText = `
            width: 32px;
            height: 32px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #1a3e8c;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        `;

        // Add spin animation
        if (!document.querySelector('#spinner-animation')) {
            const style = document.createElement('style');
            style.id = 'spinner-animation';
            style.textContent = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(loader);
    }

    function lazyLoadImages() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    function preloadCriticalResources() {
        // Preload critical fonts
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap';
        fontPreload.as = 'style';
        document.head.appendChild(fontPreload);

        // Preload critical images
        const criticalImages = [
            '../images/logo.png',
            '../images/report-uzbekistan.jpg'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = src;
            link.as = 'image';
            document.head.appendChild(link);
        });
    }

    function optimizeFontLoading() {
        // Use font-display: swap for better performance
        const style = document.createElement('style');
        style.textContent = `
            @font-face {
                font-family: 'Inter';
                font-display: swap;
            }
        `;
        document.head.appendChild(style);
    }

    function optimizeAnimations() {
        // Reduce animations on low-end devices
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
            document.body.classList.add('reduce-animations');
            
            const style = document.createElement('style');
            style.textContent = `
                .reduce-animations * {
                    transition-duration: 0.1s !important;
                    animation-duration: 0.1s !important;
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Expose global functions for external use
    window.LottoBridgeMobile = {
        smoothScrollTo,
        showLoadingFeedback,
        isMobile,
        isTouch,
        isIOS,
        isAndroid
    };

})(); 