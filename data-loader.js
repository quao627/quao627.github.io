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
        ` <button type="button" class="authors-toggle" data-more="+${hidden} more" data-less="less">+${hidden} more</button>`;
}

// ======== INTRO ========
function loadIntro() {
    const intro = document.getElementById('about');
    if (!intro || typeof ABOUT_DATA === 'undefined') return;
    const { profile, bio } = ABOUT_DATA;
    const l = profile.links;
    intro.innerHTML = `
        <div class="intro-text">
            <h1>${profile.name} <span class="intro-zh">${profile.nameZh}</span></h1>
            <p class="intro-title">${profile.title}</p>
            ${bio.map(p => `<p>${p}</p>`).join('')}
            <p class="intro-links">
                <a href="mailto:${profile.email}"><i class="fas fa-envelope"></i> Email</a>
                <a href="${l.scholar}" target="_blank" rel="noopener"><i class="fas fa-graduation-cap"></i> Scholar</a>
                <a href="${l.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>
                <a href="${l.twitter}" target="_blank" rel="noopener"><i class="fab fa-x-twitter"></i> Twitter</a>
                <a href="${l.linkedin}" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i> LinkedIn</a>
            </p>
        </div>
        <img class="intro-photo" src="${profile.image}" alt="${profile.name}">
    `;

    document.querySelectorAll('[data-note]').forEach(el => {
        const key = el.dataset.note;
        el.innerHTML = key === 'contact' ? ABOUT_DATA.contact : (ABOUT_DATA.notes[key] || '');
    });
}

// ======== NEWS ========
function loadNews() {
    const list = document.querySelector('.news-list');
    if (!list || typeof NEWS_DATA === 'undefined') return;
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
        <li class="${item.highlight ? 'highlight' : ''}${i >= 6 ? ' news-extra' : ''}">
            <span class="news-date">${item.date}</span>
            <span class="news-text">${linkPaperNames(item.content)}</span>
        </li>`).join('');
}

// ======== RESEARCH ========
function loadResearch() {
    const { research, researchAreas } = ABOUT_DATA;

    const mission = document.querySelector('.mission');
    if (mission) mission.innerHTML = research.mission;

    const questions = document.querySelector('.question-list');
    if (questions) questions.innerHTML = research.questions.map(q => `<li>${q}</li>`).join('');

    const areas = document.querySelector('.area-list');
    if (areas) {
        areas.innerHTML = researchAreas.map(area => {
            const papers = area.papers.map(p => {
                if (p.id) return `<a href="#${p.id}">${p.label}</a>`;
                if (p.url) return `<a href="${p.url}" target="_blank" rel="noopener">${p.label}</a>`;
                return `<span>${p.label}</span>`;
            }).join('<span class="dot">·</span>');
            return `
                <div class="area">
                    <div class="area-title">${area.title}</div>
                    <p class="area-desc">${area.desc}</p>
                    <div class="area-papers">${papers}</div>
                </div>`;
        }).join('');
    }
}

// ======== OPEN SOURCE & BLOGS ========
function loadProjects() {
    const repos = document.querySelector('.repo-list');
    if (repos && typeof OPEN_SOURCE_DATA !== 'undefined') {
        repos.innerHTML = OPEN_SOURCE_DATA.map(r => `
            <li>
                <div class="row">
                    <a href="https://github.com/${r.repo}" target="_blank" rel="noopener">${r.name}</a>
                    <span class="stars"><i class="fas fa-star"></i> <span data-repo="${r.repo}">${formatStars(r.stars)}</span></span>
                </div>
                <div class="sub">${r.desc}</div>
            </li>`).join('');
    }

    const blogs = document.querySelector('.blog-list');
    if (blogs && typeof BLOG_DATA !== 'undefined') {
        blogs.innerHTML = BLOG_DATA.map(b => `
            <li>
                <a href="${b.url}"${externalAttrs(b.url)}>${b.title}</a>
                <div class="sub">${b.source} · ${b.date}</div>
            </li>`).join('');
    }
}

// ======== EXPERIENCE ========
function loadExperience() {
    const list = document.querySelector('.exp-list');
    if (!list) return;
    list.innerHTML = ABOUT_DATA.experience.map(e => `
        <li>
            <span><strong>${e.org}</strong>, ${e.role}</span>
            <span class="exp-time">${e.time}</span>
        </li>`).join('');
}

// ======== PUBLICATIONS ========
function loadPublications() {
    if (typeof PUBLICATIONS_DATA === 'undefined') return;

    const list = document.querySelector('.pub-list');
    if (list) {
        list.innerHTML = PUBLICATIONS_DATA.selectedWorks.map(p => {
            const mainUrl = isRealUrl(p.links.paper) ? p.links.paper : Object.values(p.links).find(isRealUrl);
            const links = Object.keys(LINK_META)
                .filter(key => isRealUrl(p.links[key]))
                .map(key => `<a href="${p.links[key]}"${externalAttrs(p.links[key])}><i class="${LINK_META[key].icon}"></i> ${LINK_META[key].label}</a>`)
                .join('');
            const badges = (p.badges || [])
                .map(b => b.kind === 'award' ? ` · <span class="award">${b.text}</span>` : ` · ${b.text}`)
                .join('');
            const media = p.media && p.media.length
                ? `<div class="pub-media">Media: ${p.media.map(m => `<a href="${m.url}" target="_blank" rel="noopener">${m.name}</a>`).join(', ')}</div>`
                : '';
            return `
                <div class="pub" id="${p.id}">
                    <a class="pub-image" href="${mainUrl}"${externalAttrs(mainUrl)} tabindex="-1" aria-hidden="true">
                        <img src="${p.image}" alt="" loading="lazy">
                    </a>
                    <div class="pub-info">
                        <a class="pub-title" href="${mainUrl}"${externalAttrs(mainUrl)}>${p.title}</a>
                        <div class="pub-authors">${renderAuthors(p.authors)}</div>
                        <div class="pub-venue"><span class="venue">${p.venue}</span>${badges}</div>
                        <div class="pub-links">${links}</div>
                        ${media}
                    </div>
                </div>`;
        }).join('');
    }

    const early = document.querySelector('.early-list');
    if (early) {
        early.innerHTML = PUBLICATIONS_DATA.earlyStage.map(p => `
            <li>
                <div class="early-title">${p.title}</div>
                <div class="early-authors">${p.authors}</div>
                <div class="early-venue">${p.venue}${p.award ? ` · <span class="award">${p.award}</span>` : ''}${p.note ? ` · ${p.note}` : ''}</div>
            </li>`).join('');
    }
}

// ======== PEOPLE ========
function loadPeople() {
    const box = document.querySelector('.people');
    if (!box || typeof PEOPLE_DATA === 'undefined') return;
    const nameLink = p => (p.url && p.url !== '#')
        ? `<a href="${p.url}" target="_blank" rel="noopener">${p.name}</a>`
        : p.name;
    box.innerHTML = `
        <div>
            <h3>Research interns I have mentored</h3>
            <ul class="intern-list">
                ${PEOPLE_DATA.interns.map(p => `<li>${nameLink(p)} <span class="sub">${p.tag.replace(/^\(|\)$/g, '')}</span></li>`).join('')}
            </ul>
        </div>
        <div>
            <h3>Mentors who have shaped my thinking</h3>
            <p class="name-list">${PEOPLE_DATA.mentors.map(nameLink).join(', ')}</p>
            <h3>Collaborators I am honored to have worked with</h3>
            <p class="name-list">${PEOPLE_DATA.collaborators.map(nameLink).join(', ')}</p>
            <h3>Startups I have collaborated with</h3>
            <p class="name-list">${PEOPLE_DATA.startups.map(nameLink).join(', ')}</p>
        </div>
    `;
}

loadIntro();
loadNews();
loadResearch();
loadProjects();
loadExperience();
loadPublications();
loadPeople();
