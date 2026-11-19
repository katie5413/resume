/**
 * i18n - Language Switcher
 * 
 * Handles language switching between English and Traditional Chinese.
 * Persists choice in localStorage and supports ?lang= parameter.
 */
(function() {
    const STORAGE_KEY = 'preferred_lang';
    
    function getCurrentLang() {
        return document.documentElement.lang === 'zh-TW' ? 'zh-TW' : 'en';
    }
    
    function getUrlLang() {
        const params = new URLSearchParams(window.location.search);
        return params.get('lang');
    }
    
    function saveLangPreference(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            console.warn('localStorage not available');
        }
    }
    
    function getSavedLang() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }
    
    function getTargetPath(targetLang) {
        const currentLang = getCurrentLang();
        const currentPath = window.location.pathname;
        
        if (targetLang === 'zh-TW' && currentLang === 'en') {
            const basePath = currentPath.replace(/\/public\//, '/public/zh-TW/');
            if (basePath === currentPath) {
                const parts = currentPath.split('/');
                const filename = parts.pop();
                parts.push('zh-TW', filename);
                return parts.join('/');
            }
            return basePath;
        } else if (targetLang === 'en' && currentLang === 'zh-TW') {
            return currentPath.replace(/\/zh-TW\//, '/');
        }
        return currentPath;
    }
    
    function switchLanguage(targetLang) {
        saveLangPreference(targetLang);
        const newPath = getTargetPath(targetLang);
        window.location.href = newPath;
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        const urlLang = getUrlLang();
        const savedLang = getSavedLang();
        const currentLang = getCurrentLang();
        
        if (urlLang && urlLang !== currentLang) {
            switchLanguage(urlLang);
            return;
        }
        
        if (savedLang && savedLang !== currentLang && !urlLang) {
            switchLanguage(savedLang);
            return;
        }
        
        if (currentLang) {
            saveLangPreference(currentLang);
        }
        
        document.querySelectorAll('.lang-switch').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                const targetLang = el.getAttribute('data-lang');
                if (targetLang && targetLang !== currentLang) {
                    switchLanguage(targetLang);
                }
            });
        });
    });
    
    window.switchLanguage = switchLanguage;
})();
