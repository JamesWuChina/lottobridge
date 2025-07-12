// i18n Validation Script
// Use this to validate translation completeness

function validateI18nSystem() {
    if (!window.unifiedI18n) {
        console.error('Unified i18n system not loaded');
        return;
    }
    
    const report = window.unifiedI18n.validateTranslations();
    
    console.log('=== i18n Validation Report ===');
    Object.entries(report).forEach(([lang, data]) => {
        console.log(`${lang.toUpperCase()}: ${data.coverage} coverage (${data.available}/${data.total} keys)`);
        if (data.missing > 0) {
            console.log(`  Missing keys sample:`, data.missingKeys);
        }
    });
    
    return report;
}

// Run validation automatically
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(validateI18nSystem, 2000);
});
