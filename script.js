// Interactions: nav state, publication filters, expanders, live GitHub stars, reveal-on-scroll

// ======== NAV: shadow on scroll + active section ========
const nav = document.getElementById('site-nav');
const navLinks = [...document.querySelectorAll('.nav-links a')];

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
    });
}, { rootMargin: '-45% 0px -50% 0px' });

navLinks
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean)
    .forEach(section => sectionObserver.observe(section));

// ======== PUBLICATION FILTERS ========
const filterBar = document.querySelector('.pub-filters');
const pubs = [...document.querySelectorAll('.pub')];

function applyFilter(area) {
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.filter === area);
    });
    pubs.forEach(pub => {
        const match = area === 'all' || pub.dataset.areas.split(' ').includes(area);
        pub.classList.toggle('is-hidden', !match);
    });
}

if (filterBar) {
    filterBar.addEventListener('click', e => {
        const chip = e.target.closest('.filter-chip');
        if (chip) applyFilter(chip.dataset.filter);
    });
}

// Research area cards filter the publication list
document.querySelectorAll('.area-card').forEach(card => {
    const go = () => {
        const area = card.dataset.area;
        const hasChip = document.querySelector(`.filter-chip[data-filter="${area}"]`);
        applyFilter(hasChip ? area : 'all');
        document.getElementById('publications').scrollIntoView({ behavior: 'smooth' });
    };
    card.addEventListener('click', e => {
        if (e.target.closest('a')) return;   // chips handle themselves
        go();
    });
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
    });
});

// Links to a paper (#id) reset the filter and flash the card
document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = document.getElementById(a.getAttribute('href').slice(1));
    if (!target || !target.classList.contains('pub')) return;
    e.preventDefault();
    if (target.classList.contains('is-hidden')) applyFilter('all');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    history.replaceState(null, '', `#${target.id}`);
    target.classList.remove('flash');
    void target.offsetWidth;
    target.classList.add('flash');
});

// ======== EXPANDERS ========
document.addEventListener('click', e => {
    const btn = e.target.closest('.authors-toggle');
    if (!btn) return;
    const rest = btn.previousElementSibling;
    const open = rest.hidden;
    rest.hidden = !open;
    btn.textContent = open ? btn.dataset.less : btn.dataset.more;
});

const newsToggle = document.getElementById('news-toggle');
const newsList = document.querySelector('.news-list');
if (newsToggle && newsList) {
    const extra = newsList.querySelectorAll('.news-extra').length;
    if (extra === 0) {
        newsToggle.hidden = true;
    } else {
        const label = open => open ? 'Show less' : `Show ${extra} earlier updates`;
        newsToggle.textContent = label(false);
        newsToggle.addEventListener('click', () => {
            const open = newsList.classList.toggle('expanded');
            newsToggle.textContent = label(open);
        });
    }
}

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

    OPEN_SOURCE_DATA.forEach(r => {
        if (typeof cache.stars[r.repo] === 'number') r.stars = cache.stars[r.repo];
    });
    document.querySelectorAll('[data-repo]').forEach(el => {
        const repo = OPEN_SOURCE_DATA.find(r => r.repo === el.dataset.repo);
        if (repo) el.textContent = formatStars(repo.stars);
    });
    const total = document.querySelector('[data-stat="stars"]');
    if (total) total.textContent = `${formatStars(totalStars())}+`;
}
refreshStars();

// ======== REVEAL ON SCROLL ========
const revealTargets = document.querySelectorAll('.section-head, .card, .area-card, .repo-card, .post-card, .pub');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
}
