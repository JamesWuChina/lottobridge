#!/usr/bin/env python3
"""
HTML Pages Update Script for Unified i18n System
This script updates all HTML pages to use the new unified i18n system
"""

import os
import re
from pathlib import Path

class HtmlUpdater:
    def __init__(self):
        self.html_files = []
        self.backup_dir = Path('html_backup')
        
    def find_html_files(self):
        """Find all HTML files"""
        for root, dirs, files in os.walk('.'):
            for file in files:
                if file.endswith('.html'):
                    file_path = os.path.join(root, file)
                    self.html_files.append(file_path)
        
        print(f"Found {len(self.html_files)} HTML files")
        return self.html_files
    
    def backup_html_files(self):
        """Backup all HTML files"""
        self.backup_dir.mkdir(exist_ok=True)
        
        for html_file in self.html_files:
            relative_path = os.path.relpath(html_file, '.')
            backup_path = self.backup_dir / relative_path
            backup_path.parent.mkdir(parents=True, exist_ok=True)
            
            import shutil
            shutil.copy2(html_file, backup_path)
            
        print(f"Backed up {len(self.html_files)} HTML files to {self.backup_dir}")
    
    def update_script_tags(self, content):
        """Update script tags to use unified i18n system"""
        # Remove old language script tags
        old_script_patterns = [
            r'<script src="[^"]*js/languages/\w+\.js"></script>\s*',
            r'<script src="[^"]*js/languages\.js"></script>\s*',
            r'<script src="[^"]*js/i18n\.js"></script>\s*',
            r'<script src="[^"]*js/main\.js"></script>\s*'
        ]
        
        for pattern in old_script_patterns:
            content = re.sub(pattern, '', content, flags=re.MULTILINE)
        
        # Find where to insert new scripts (before </body>)
        if '</body>' in content:
            # Determine relative path to js directory
            script_path = self.get_script_path(content)
            
            new_scripts = f'''
    <!-- Unified i18n System -->
    <script src="{script_path}js/languages/zh.js"></script>
    <script src="{script_path}js/languages/en.js"></script>
    <script src="{script_path}js/languages/es.js"></script>
    <script src="{script_path}js/languages/fr.js"></script>
    <script src="{script_path}js/languages/ar.js"></script>
    <script src="{script_path}js/languages/ko.js"></script>
    <script src="{script_path}js/languages/ru.js"></script>
    <script src="{script_path}js/unified-i18n.js"></script>
    <script src="{script_path}js/i18n-validation.js"></script>
</body>'''
            
            content = content.replace('</body>', new_scripts)
        
        return content
    
    def get_script_path(self, content):
        """Determine the relative path to js directory"""
        # Look for existing script tags to determine path
        script_match = re.search(r'<script src="([^"]*js/)', content)
        if script_match:
            return script_match.group(1)[:-3]  # Remove 'js/' part
        
        # Default paths based on file location
        return '../' if 'product/' in content or 'report/' in content else ''
    
    def remove_old_initialization_code(self, content):
        """Remove old i18n initialization code"""
        # Remove old initialization scripts
        old_init_patterns = [
            r'<script>\s*// 初始化国际化.*?</script>',
            r'<script>\s*document\.addEventListener\(\'DOMContentLoaded\'.*?i18n.*?</script>',
            r'<script>\s*// 检查i18n是否已初始化.*?</script>'
        ]
        
        for pattern in old_init_patterns:
            content = re.sub(pattern, '', content, flags=re.MULTILINE | re.DOTALL)
        
        return content
    
    def update_single_file(self, file_path):
        """Update a single HTML file"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Update script tags
            content = self.update_script_tags(content)
            
            # Remove old initialization code
            content = self.remove_old_initialization_code(content)
            
            # Write updated content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Updated: {file_path}")
            return True
            
        except Exception as e:
            print(f"Error updating {file_path}: {e}")
            return False
    
    def update_all_files(self):
        """Update all HTML files"""
        print("Updating HTML files...")
        success_count = 0
        
        for file_path in self.html_files:
            if self.update_single_file(file_path):
                success_count += 1
        
        print(f"Successfully updated {success_count}/{len(self.html_files)} files")
        return success_count
    
    def create_test_page(self):
        """Create a test page for the new i18n system"""
        test_content = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-i18n="page.title">i18n System Test Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        .language-selector {
            margin: 20px 0;
            padding: 10px;
            background: #f5f5f5;
            border-radius: 5px;
        }
        .test-section {
            margin: 20px 0;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .validation-results {
            margin: 20px 0;
            padding: 15px;
            background: #f0f8ff;
            border-radius: 5px;
            font-family: monospace;
            font-size: 12px;
        }
        button {
            background: #007cba;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background: #005a8b;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 data-i18n="test.title">i18n System Test Page</h1>
        
        <div class="language-selector">
            <label for="languageSelector" data-i18n="test.language_selector">Select Language:</label>
            <select id="languageSelector">
                <option value="zh">中文</option>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
                <option value="ko">한국어</option>
                <option value="ru">Русский</option>
            </select>
        </div>
        
        <div class="test-section">
            <h2 data-i18n="test.navigation">Navigation Test</h2>
            <ul>
                <li data-i18n="nav.home">Home</li>
                <li data-i18n="nav.products">Products</li>
                <li data-i18n="nav.market_research">Market Research</li>
                <li data-i18n="nav.case_studies">Case Studies</li>
                <li data-i18n="nav.insights">Insights</li>
                <li data-i18n="nav.about">About</li>
                <li data-i18n="nav.contact">Contact</li>
            </ul>
        </div>
        
        <div class="test-section">
            <h2 data-i18n="test.content">Content Test</h2>
            <p data-i18n="hero.title">Global Lottery Export Solution Platform</p>
            <p data-i18n="hero.subtitle">From market research to system construction, terminal supply and ticket printing, full-process AI-driven support for market implementation</p>
        </div>
        
        <div class="test-section">
            <h2 data-i18n="test.validation">System Validation</h2>
            <button onclick="runValidation()" data-i18n="test.run_validation">Run Validation</button>
            <div id="validationResults" class="validation-results"></div>
        </div>
    </div>
    
    <!-- Unified i18n System -->
    <script src="js/languages/zh.js"></script>
    <script src="js/languages/en.js"></script>
    <script src="js/languages/es.js"></script>
    <script src="js/languages/fr.js"></script>
    <script src="js/languages/ar.js"></script>
    <script src="js/languages/ko.js"></script>
    <script src="js/languages/ru.js"></script>
    <script src="js/unified-i18n.js"></script>
    <script src="js/i18n-validation.js"></script>
    
    <script>
        function runValidation() {
            const results = validateI18nSystem();
            const resultsDiv = document.getElementById('validationResults');
            
            let html = '<h3>Validation Results:</h3>';
            Object.entries(results).forEach(([lang, data]) => {
                html += `<div><strong>${lang.toUpperCase()}</strong>: ${data.coverage} coverage (${data.available}/${data.total} keys)</div>`;
                if (data.missing > 0) {
                    html += `<div style="margin-left: 20px; color: #666;">Missing: ${data.missingKeys.join(', ')}</div>`;
                }
            });
            
            resultsDiv.innerHTML = html;
        }
        
        // Add test translations
        if (window.zh) {
            window.zh.test = {
                title: 'i18n系统测试页面',
                language_selector: '选择语言：',
                navigation: '导航测试',
                content: '内容测试',
                validation: '系统验证',
                run_validation: '运行验证'
            };
        }
        
        if (window.en) {
            window.en.test = {
                title: 'i18n System Test Page',
                language_selector: 'Select Language:',
                navigation: 'Navigation Test',
                content: 'Content Test',
                validation: 'System Validation',
                run_validation: 'Run Validation'
            };
        }
    </script>
</body>
</html>'''
        
        with open('i18n-test.html', 'w', encoding='utf-8') as f:
            f.write(test_content)
        
        print("Created test page: i18n-test.html")
    
    def run_complete_update(self):
        """Run complete HTML update process"""
        print("=== STARTING HTML PAGES UPDATE ===")
        
        # Step 1: Find all HTML files
        print("\n1. Finding HTML files...")
        self.find_html_files()
        
        # Step 2: Backup files
        print("\n2. Backing up HTML files...")
        self.backup_html_files()
        
        # Step 3: Update files
        print("\n3. Updating HTML files...")
        success_count = self.update_all_files()
        
        # Step 4: Create test page
        print("\n4. Creating test page...")
        self.create_test_page()
        
        print(f"\n=== UPDATE COMPLETED ===")
        print(f"Successfully updated {success_count}/{len(self.html_files)} HTML files")
        print("Next steps:")
        print("1. Test the i18n-test.html page")
        print("2. Check a few main pages (index.html, products.html)")
        print("3. Verify all languages work correctly")
        print("4. Remove old backup files if everything works")

if __name__ == "__main__":
    updater = HtmlUpdater()
    updater.run_complete_update() 