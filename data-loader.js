// Data Loader - renders the data files into the page
// Runs after all data files are loaded; interactions live in script.js

const LINK_META = {
    paper:   { icon: 'fas fa-file-lines', label: 'Paper' },
    code:    { icon: 'fab fa-github', label: 'Code' },
    project: { icon: 'fas fa-globe', label: 'Project' },
    blog:    { icon: 'fas fa-pen-nib', label: 'Blog' },
    video:   { icon: 'fas fa-play', label: 'Video' },
    demo:    { icon: 'fas fa-rocket', label: 'Demo' },
    poster:  { icon: 'fas fa-image', label: 'Poster' }
};

function formatStars(n) {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return String(n);
}

function formatDate(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1];
    return `${month} ${d}, ${y}`;
}

function isRealUrl(url) {
    return url && url !== '#';
}

function externalAttrs(url) {
    return /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : '';
}

// Very long author lists collapse after Ao Qu (or the first eight names)
function renderAuthors(authors) {
    const parts = authors.split(/,\s*/);
    if (parts.length <= 14) return authors;
    const me = parts.findIndex(p => p.includes('Ao Qu'));
    const keep = Math.max(8, me + 2);
    if (keep >= parts.length - 2) return authors;
    const hidden = parts.length - keep;
    return `${parts.slice(0, keep).join(', ')}<span class="authors-rest" hidden>, ${parts.slice(keep).join(', ')}</span>` +
        ` <button type="button" class="authors-toggle" data-more="+${hidden} more" data-less="show less">+${hidden} more</button>`;
}

function totalStars() {
    return OPEN_SOURCE_DATA.reduce((sum, r) => sum + r.stars, 0);
}

// ======== HERO ========
function loadHero() {
    const hero = document.getElementById('about');
    if (!hero || typeof ABOUT_DATA === 'undefined') return;
    const { profile, tagline, advisors, affiliations, stats } = ABOUT_DATA;
    const l = profile.links;

    const statHtml = stats.map(s => {
        const value = s.value ?? `${formatStars(totalStars())}+`;
        return `<div class="stat"><span class="stat-value"${s.key ? ` data-stat="${s.key}"` : ''}>${value}</span><span class="stat-label">${s.label}</span></div>`;
    }).join('');

    hero.innerHTML = `
        <div class="hero-main">
            <div class="hero-eyebrow">
                <span class="status-dot" aria-hidden="true"></span>
                <span>${profile.role}</span>
                <span class="sep">·</span>
                <span>${profile.location}</span>
            </div>
            <h1 class="hero-name">${profile.name}<span class="hero-zh">${profile.nameZh}</span></h1>
            <p class="hero-tagline">${tagline}</p>
            <p class="hero-advisors">${advisors}</p>
            <div class="hero-links">
                <a class="btn btn-primary" href="mailto:${profile.email}"><i class="fas fa-envelope"></i> Email</a>
                <a class="btn" href="${l.scholar}" target="_blank" rel="noopener"><i class="fas fa-graduation-cap"></i> Scholar</a>
                <a class="btn" href="${l.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>
                <a class="btn btn-icon" href="${l.twitter}" target="_blank" rel="noopener" aria-label="X / Twitter"><i class="fab fa-x-twitter"></i></a>
                <a class="btn btn-icon" href="${l.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <figure class="hero-photo">
            <img src="${profile.image}" alt="Portrait of ${profile.name}">
        </figure>
        <div class="hero-foot">
            <div class="stats">${statHtml}</div>
            <div class="affils">
                ${affiliations.map(a => `
                    <a class="affil" href="${a.url}" target="_blank" rel="noopener" title="${a.name}">
                        <img src="${a.logo}" alt=""><span>${a.name}</span>
                    </a>`).join('')}
            </div>
        </div>
    `;
}

// ======== NOW ========
function loadNow() {
    const grid = document.querySelector('.now-grid');
    if (!grid) return;
    grid.innerHTML = ABOUT_DATA.now.map(item => {
        const links = item.links.map(link => {
            const repo = link.repo ? OPEN_SOURCE_DATA.find(r => r.repo === link.repo) : null;
            const stars = repo ? `<span class="btn-stars"><i class="fas fa-star"></i> <span data-repo="${repo.repo}">${formatStars(repo.stars)}</span></span>` : '';
            return `<a class="btn ${item.featured ? 'btn-light' : ''}" href="${link.url}"${externalAttrs(link.url)}><i class="${link.icon}"></i> ${link.label}${stars}</a>`;
        }).join('');

        if (item.featured) {
            return `
                <article class="card card-feature span-8">
                    <span class="eyebrow">Now · ${item.kind}</span>
                    <h3 class="feature-title">${item.title}</h3>
                    <p class="feature-text">${item.text}</p>
                    <div class="tag-row">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                    <div class="btn-row">${links}</div>
                </article>`;
        }
        return `
            <article class="card now-card span-4">
                <span class="eyebrow">Now · ${item.kind}</span>
                <h3 class="now-title">${item.title}</h3>
                <p class="now-text">${item.text}</p>
                ${item.role ? `<span class="role-pill">${item.role}</span>` : ''}
                <div class="btn-row">${links}</div>
            </article>`;
    }).join('');
}

// ======== RESEARCH AREAS ========
function loadAreas() {
    const grid = document.querySelector('.areas-grid');
    if (!grid) return;
    grid.innerHTML = ABOUT_DATA.researchAreas.map((area, i) => {
        const chips = area.papers.map(p => {
            if (p.id) return `<a class="chip" href="#${p.id}">${p.label}</a>`;
            if (p.url) return `<a class="chip" href="${p.url}" target="_blank" rel="noopener">${p.label} <i class="fas fa-arrow-up-right-from-square"></i></a>`;
            return `<span class="chip chip-plain">${p.label}</span>`;
        }).join('');
        return `
            <article class="area-card${area.id === 'social' ? ' area-alt' : ''}" data-area="${area.id}" tabindex="0" role="button" aria-label="Show ${area.title} publications">
                <div class="area-top">
                    <span class="area-num">0${i + 1}</span>
                    <i class="fas ${area.icon}" aria-hidden="true"></i>
                </div>
                <h3>${area.title}</h3>
                <div class="chip-row">${chips}</div>
            </article>`;
    }).join('');
}

// ======== EXPERIENCE & HONORS ========
function loadExperience() {
    const list = document.querySelector('.timeline');
    if (list) {
        list.innerHTML = ABOUT_DATA.experience.map(e => `
            <li class="tl-item">
                <div class="tl-mark">${e.logo ? `<img src="${e.logo}" alt="">` : `<span>${e.mono}</span>`}</div>
                <div class="tl-body">
                    <div class="tl-row">
                        <span class="tl-org">${e.org}</span>
                        <span class="tl-time">${e.time}</span>
                    </div>
                    <div class="tl-role">${e.role}</div>
                    <div class="tl-detail">${[e.detail, e.place].filter(Boolean).join(' · ')}</div>
                </div>
            </li>`).join('');
    }

    const honors = document.querySelector('.honors-list');
    if (honors) {
        honors.innerHTML = ABOUT_DATA.honors.map(h => `
            <li class="honor">
                <i class="fas fa-award" aria-hidden="true"></i>
                <div>
                    <div class="honor-title">${h.title}${h.paper ? ` <a href="#${h.id}" class="honor-paper">${h.paper}</a>` : ''}</div>
                    <div class="honor-where">${h.where}</div>
                </div>
            </li>`).join('');
    }
}

// ======== OPEN SOURCE ========
function loadOpenSource() {
    const grid = document.querySelector('.repo-grid');
    if (!grid || typeof OPEN_SOURCE_DATA === 'undefined') return;
    grid.innerHTML = OPEN_SOURCE_DATA.map(r => {
        const [owner, name] = r.repo.split('/');
        return `
            <a class="repo-card" href="https://github.com/${r.repo}" target="_blank" rel="noopener">
                <div class="repo-top">
                    <span class="repo-name">${r.name}</span>
                    <span class="repo-stars"><i class="fas fa-star"></i> <span data-repo="${r.repo}">${formatStars(r.stars)}</span></span>
                </div>
                <p class="repo-desc">${r.desc}</p>
                <div class="repo-meta">
                    <span class="repo-path"><i class="fab fa-github"></i> ${owner}/<b>${name}</b></span>
                    <span class="repo-lang"><span class="lang-dot"></span>${r.lang}</span>
                </div>
            </a>`;
    }).join('');
}

// ======== WRITING ========
function loadWriting() {
    const grid = document.querySelector('.writing-grid');
    if (!grid || typeof WRITING_DATA === 'undefined') return;
    grid.innerHTML = WRITING_DATA.map(w => `
        <a class="post-card" href="${w.url}"${externalAttrs(w.url)}>
            <div class="post-cover"><img src="${w.cover}" alt="" loading="lazy"></div>
            <div class="post-body">
                <div class="post-meta"><span>${w.source}</span><span>${w.date}</span></div>
                <h3>${w.title}</h3>
                <p>${w.sub}</p>
            </div>
        </a>`).join('');
}

// ======== NEWS & MEDIA ========
function loadNews() {
    const list = document.querySelector('.news-list');
    if (list && typeof NEWS_DATA !== 'undefined') {
        const paperMap = {
            'MEM1': 'mem1',
            'AlphaOPT': 'alphaopt',
            'SPARKLE': 'sparkle',
            'Sparkle': 'sparkle',
            'CORAL': 'coral',
            'FrontierOR': 'frontieror',
            'Economy of Minds': 'eom',
            'Evolving in Thought Space': 'thoughtspace',
            'SPADE': 'spade',
            'The Last Human-Written Paper': 'ara',
            'HugAgent': 'hugagent',
            'GEM-4D': 'gem4d',
        };
        const linkPaperNames = content => Object.entries(paperMap).reduce(
            (html, [name, id]) => html.replace(new RegExp(`<em>${name}</em>`, 'g'), `<em><a href="#${id}">${name}</a></em>`),
            content
        );

        list.innerHTML = NEWS_DATA.map((item, i) => `
            <li class="news-item${item.highlight ? ' highlight' : ''}${i >= 5 ? ' news-extra' : ''}">
                <time datetime="${item.date}">${formatDate(item.date)}</time>
                <p>${linkPaperNames(item.content)}</p>
            </li>`).join('');
    }

    const media = document.querySelector('.media-list');
    if (media && typeof MEDIA_DATA !== 'undefined') {
        media.innerHTML = MEDIA_DATA.map(m => `
            <li>
                <a href="${m.url}" target="_blank" rel="noopener">
                    <span class="media-outlet">${m.outlet}</span>
                    <span class="media-topic">${m.topic}${m.note ? ` · <em>${m.note}</em>` : ''}</span>
                    <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
            </li>`).join('');
    }
}

// ======== PUBLICATIONS ========
function loadPublications() {
    if (typeof PUBLICATIONS_DATA === 'undefined') return;
    const works = PUBLICATIONS_DATA.selectedWorks;

    const filters = document.querySelector('.pub-filters');
    if (filters) {
        const areaChips = ABOUT_DATA.researchAreas
            .map(a => ({ ...a, count: works.filter(w => w.areas.includes(a.id)).length }))
            .filter(a => a.count > 0)
            .map(a => `<button type="button" class="filter-chip" data-filter="${a.id}">${a.title}<span>${a.count}</span></button>`)
            .join('');
        filters.innerHTML = `<button type="button" class="filter-chip active" data-filter="all">All<span>${works.length}</span></button>${areaChips}`;
    }

    const list = document.querySelector('.pub-list');
    if (list) {
        list.innerHTML = works.map(p => {
            const firstLink = isRealUrl(p.links.paper) ? p.links.paper : Object.values(p.links).find(isRealUrl);
            const links = Object.keys(LINK_META)
                .filter(key => isRealUrl(p.links[key]))
                .map(key => `<a class="pub-link" href="${p.links[key]}"${externalAttrs(p.links[key])}><i class="${LINK_META[key].icon}"></i> ${LINK_META[key].label}</a>`)
                .join('');
            const badges = (p.badges || [])
                .map(b => `<span class="badge${b.kind === 'award' ? ' badge-award' : ''}">${b.kind === 'award' ? '<i class="fas fa-trophy"></i> ' : ''}${b.text}</span>`)
                .join('');
            const media = p.media && p.media.length
                ? `<div class="pub-media"><i class="fas fa-newspaper"></i> ${p.media.map(m => `<a href="${m.url}" target="_blank" rel="noopener">${m.name}</a>`).join(' · ')}</div>`
                : '';

            return `
                <article class="pub" id="${p.id}" data-areas="${p.areas.join(' ')}">
                    <a class="pub-thumb" href="${firstLink}"${externalAttrs(firstLink)} tabindex="-1" aria-hidden="true">
                        <img src="${p.image}" alt="" loading="lazy">
                    </a>
                    <div class="pub-body">
                        <div class="pub-venue"><span class="venue${/arXiv/.test(p.venue) ? ' venue-pre' : ''}">${p.venue}</span>${badges}</div>
                        <h3 class="pub-title"><a href="${firstLink}"${externalAttrs(firstLink)}>${p.title}</a></h3>
                        <p class="pub-authors">${renderAuthors(p.authors)}</p>
                        <div class="pub-links">${links}</div>
                        ${media}
                    </div>
                </article>`;
        }).join('');
    }

    const early = document.querySelector('.early-list');
    if (early) {
        early.innerHTML = PUBLICATIONS_DATA.earlyStage.map(p => `
            <li>
                <div class="early-title">${p.title}</div>
                <div class="early-authors">${p.authors}</div>
                <div class="early-venue">${p.venue}${p.award ? ` <span class="badge badge-award">${p.award}</span>` : ''}${p.note ? `<span class="early-note">${p.note}</span>` : ''}</div>
            </li>`).join('');
    }
}

// ======== PEOPLE ========
function loadPeople() {
    const grid = document.querySelector('.people-grid');
    if (!grid || typeof PEOPLE_DATA === 'undefined') return;
    const nameLink = p => (p.url && p.url !== '#')
        ? `<a href="${p.url}" target="_blank" rel="noopener">${p.name}</a>`
        : `<span>${p.name}</span>`;

    grid.innerHTML = `
        <div class="card people-card span-5">
            <div class="card-head"><span class="eyebrow">Research interns I've mentored</span></div>
            <ul class="mentee-list">
                ${PEOPLE_DATA.interns.map(p => `<li>${nameLink(p)}<span class="mentee-tag">${p.tag.replace(/^\(|\)$/g, '')}</span></li>`).join('')}
            </ul>
        </div>
        <div class="card people-card span-7">
            <div class="card-head"><span class="eyebrow">Mentors who shaped my thinking</span></div>
            <div class="name-cloud">${PEOPLE_DATA.mentors.map(nameLink).join('')}</div>
            <div class="card-head card-head-sub"><span class="eyebrow">Collaborators</span></div>
            <div class="name-cloud name-cloud-sm">${PEOPLE_DATA.collaborators.map(nameLink).join('')}</div>
            <div class="card-head card-head-sub"><span class="eyebrow">Startups I've worked with</span></div>
            <div class="name-cloud">${PEOPLE_DATA.startups.map(p => `<a href="${p.url}" target="_blank" rel="noopener">${p.name} <i class="fas fa-arrow-up-right-from-square"></i></a>`).join('')}</div>
        </div>
    `;
}

// ======== FOOTER ========
function loadFooter() {
    const card = document.querySelector('.contact-card');
    if (card) {
        const { profile, contact } = ABOUT_DATA;
        card.innerHTML = `
            <div>
                <span class="eyebrow">Get in touch</span>
                <h2>Let's build agents that keep getting better.</h2>
                <p>${contact}</p>
            </div>
            <div class="contact-actions">
                <a class="btn btn-light" href="mailto:${profile.email}"><i class="fas fa-envelope"></i> ${profile.email}</a>
                <div class="contact-icons">
                    <a href="${profile.links.scholar}" target="_blank" rel="noopener" aria-label="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
                    <a href="${profile.links.github}" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
                    <a href="${profile.links.twitter}" target="_blank" rel="noopener" aria-label="X / Twitter"><i class="fab fa-x-twitter"></i></a>
                    <a href="${profile.links.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>`;
    }
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
}

loadHero();
loadNow();
loadAreas();
loadExperience();
loadOpenSource();
loadWriting();
loadNews();
loadPublications();
loadPeople();
loadFooter();
