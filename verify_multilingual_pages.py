#!/usr/bin/env python3
"""
LottoBridge 多语言页面验证脚本
检查所有页面的多语言支持是否正常工作
"""

import os
import re
from pathlib import Path

class MultilingualPageVerifier:
    def __init__(self):
        self.languages = ['zh', 'en', 'es', 'fr', 'ar', 'ko', 'ru']
        self.required_scripts = [
            'js/languages/zh.js',
            'js/languages/en.js', 
            'js/languages/es.js',
            'js/languages/fr.js',
            'js/languages/ar.js',
            'js/languages/ko.js',
            'js/languages/ru.js',
            'js/unified-i18n.js',
            'js/i18n-validation.js'
        ]
        
        self.updated_pages = [
            'product/video-lottery-system.html',
            'product/printing.html', 
            'product/terminals.html',
            'product/training.html'
        ]
        
    def verify_language_selector(self, filepath):
        """验证语言选择器是否包含所有7种语言"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 检查是否有完整的7种语言选项
            expected_options = [
                'value="zh">🇨🇳 中文 (CN)',
                'value="en">🇺🇸 English (US)', 
                'value="es">🇪🇸 Español (ES)',
                'value="fr">🇫🇷 Français (FR)',
                'value="ko">🇰🇷 한국어 (KR)',
                'value="ar">🇸🇦 العربية (SA)',
                'value="ru">🇷🇺 Русский (RU)'
            ]
            
            missing_options = []
            for option in expected_options:
                if option not in content:
                    missing_options.append(option)
            
            return len(missing_options) == 0, missing_options
            
        except Exception as e:
            return False, [f"Error reading file: {e}"]
    
    def verify_script_references(self, filepath):
        """验证JavaScript脚本引用是否正确"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            missing_scripts = []
            for script in self.required_scripts:
                # 对于product子目录，需要检查相对路径
                if filepath.startswith('product/'):
                    expected_script = f'../{script}'
                else:
                    expected_script = script
                    
                if expected_script not in content:
                    missing_scripts.append(expected_script)
            
            return len(missing_scripts) == 0, missing_scripts
            
        except Exception as e:
            return False, [f"Error reading file: {e}"]
    
    def verify_footer_structure(self, filepath):
        """验证footer结构是否统一"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 检查关键footer元素
            footer_elements = [
                'footer-grid',
                'footer-col',
                'footer.company.name',
                'footer.products.title',
                'footer.resources.title', 
                'footer.contact.title',
                'footer.copyright.company',
                'social-links'
            ]
            
            missing_elements = []
            for element in footer_elements:
                if element not in content:
                    missing_elements.append(element)
            
            return len(missing_elements) == 0, missing_elements
            
        except Exception as e:
            return False, [f"Error reading file: {e}"]
    
    def verify_i18n_attributes(self, filepath):
        """验证data-i18n属性的使用"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 提取所有data-i18n属性
            i18n_pattern = r'data-i18n="([^"]+)"'
            i18n_keys = re.findall(i18n_pattern, content)
            
            return len(i18n_keys) > 0, len(i18n_keys)
            
        except Exception as e:
            return False, 0
    
    def run_verification(self):
        """运行完整验证"""
        print("🔍 开始验证多语言页面功能...")
        print("=" * 60)
        
        all_passed = True
        
        for page in self.updated_pages:
            print(f"\n📄 验证页面: {page}")
            page_passed = True
            
            # 1. 验证语言选择器
            selector_ok, selector_issues = self.verify_language_selector(page)
            if selector_ok:
                print("  ✅ 语言选择器: 7种语言支持完整")
            else:
                print("  ❌ 语言选择器: 存在问题")
                for issue in selector_issues:
                    print(f"     - {issue}")
                page_passed = False
            
            # 2. 验证脚本引用
            script_ok, script_issues = self.verify_script_references(page)
            if script_ok:
                print("  ✅ JavaScript脚本: 引用正确")
            else:
                print("  ❌ JavaScript脚本: 存在问题")
                for issue in script_issues:
                    print(f"     - 缺失: {issue}")
                page_passed = False
            
            # 3. 验证footer结构
            footer_ok, footer_issues = self.verify_footer_structure(page)
            if footer_ok:
                print("  ✅ Footer结构: 与首页统一")
            else:
                print("  ❌ Footer结构: 存在问题")
                for issue in footer_issues:
                    print(f"     - 缺失: {issue}")
                page_passed = False
            
            # 4. 验证i18n属性
            i18n_ok, i18n_count = self.verify_i18n_attributes(page)
            if i18n_ok:
                print(f"  ✅ 多语言标记: 找到{i18n_count}个data-i18n属性")
            else:
                print("  ❌ 多语言标记: 未找到data-i18n属性")
                page_passed = False
            
            if page_passed:
                print("  🎉 页面验证通过")
            else:
                print("  ⚠️  页面需要修复")
                all_passed = False
        
        print("\n" + "=" * 60)
        if all_passed:
            print("🎉 所有页面验证通过！多语言功能正常")
        else:
            print("⚠️  部分页面需要修复")
        
        # 额外验证建议
        print("\n📋 后续验证建议:")
        print("1. 在浏览器中测试语言切换功能")
        print("2. 验证阿拉伯语的RTL布局显示")
        print("3. 检查移动端响应式设计")
        print("4. 运行i18n-test.html进行完整性测试")
        
        return all_passed

if __name__ == "__main__":
    verifier = MultilingualPageVerifier()
    verifier.run_verification() 