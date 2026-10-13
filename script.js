// Interactions: news expander, author expander, live GitHub stars

// ======== NEWS: show the latest few, expand on demand ========
const newsToggle = document.getElementById('news-toggle');
const newsList = document.querySelector('.news-list');
if (newsToggle && newsList) {
    const extra = newsList.querySelectorAll('.news-extra').length;
    if (extra === 0) {
        newsToggle.hidden = true;
    } else {
        const label = open => open ? 'Show less' : `Show ${extra} more`;
        newsToggle.textContent = label(false);
        newsToggle.addEventListener('click', () => {
            newsToggle.textContent = label(newsList.classList.toggle('expanded'));
        });
    }
}

// ======== AUTHORS: expand long author lists ========
document.addEventListener('click', e => {
    const btn = e.target.closest('.authors-toggle');
    if (!btn) return;
    const rest = btn.previousElementSibling;
    rest.hidden = !rest.hidden;
    btn.textContent = rest.hidden ? btn.dataset.more : btn.dataset.less;
});

// ======== LIVE GITHUB STARS (cached for 6 hours) ========
async function refreshStars() {
    if (typeof OPEN_SOURCE_DATA === 'undefined') return;
    const KEY = 'gh-stars-v1';
    const TTL = 6 * 60 * 60 * 1000;
    let cache = {};
    try { cache = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (_) { /* ignore */ }

    if (!cache.t || Date.now() - cache.t > TTL) {
        const results = await Promise.all(OPEN_SOURCE_DATA.map(r =>
            fetch(`https://api.github.com/repos/${r.repo}`)
                .then(res => res.ok ? res.json() : null)
                .then(json => json ? [r.repo, json.stargazers_count] : null)
                .catch(() => null)
        ));
        const stars = Object.fromEntries(results.filter(Boolean));
        if (Object.keys(stars).length === 0) return;   // offline or rate-limited: keep fallbacks
        cache = { t: Date.now(), stars };
        try { localStorage.setItem(KEY, JSON.stringify(cache)); } catch (_) { /* ignore */ }
    }

    document.querySelectorAll('[data-repo]').forEach(el => {
        const n = cache.stars[el.dataset.repo];
        if (typeof n === 'number') el.textContent = formatStars(n);
    });
}
refreshStars();
