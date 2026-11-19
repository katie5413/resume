/**
 * EDIT ME: GAZAI Stats Configuration
 * 
 * Update these numbers as needed. They will be automatically
 * applied to all pages in both languages.
 */
const GAZAI_STATS = {
    creators: '50K+',
    works: '1M+',
    partners: '20+',
    pullRequests: '500+'
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
    document.querySelectorAll('.gazai-stat-prs').forEach(el => {
        el.textContent = GAZAI_STATS.pullRequests;
    });
});
