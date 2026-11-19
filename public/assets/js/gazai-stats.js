/**
 * EDIT ME: GAZAI Stats Configuration
 * 
 * Update these numbers as needed. They will be automatically
 * applied to all pages in both languages.
 */
const GAZAI_STATS = {
    creators: '55K+',
    works: '1.5M+',
    partners: '40+'
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.gazai-stat-creators').forEach(el => {
        el.textContent = GAZAI_STATS.creators;
    });
    document.querySelectorAll('.gazai-stat-works').forEach(el => {
        el.textContent = GAZAI_STATS.works;
    });
    document.querySelectorAll('.gazai-stat-partners').forEach(el => {
        el.textContent = GAZAI_STATS.partners;
    });
});
