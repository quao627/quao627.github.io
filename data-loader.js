// Data Loader - Populates HTML with data from separate files
// This runs after all data files are loaded

// ======== LOAD ABOUT DATA ========
function loadAboutData() {
    if (typeof ABOUT_DATA === 'undefined') return;
    
    // Load profile and bio together
    const profileBioOutput = document.getElementById('profile-bio-output');
    if (profileBioOutput && ABOUT_DATA.profile && ABOUT_DATA.bio) {
        const { name, title, image, badges, email, links } = ABOUT_DATA.profile;
        
        profileBioOutput.innerHTML = `
            <div class="profile-header-large">
                <div class="terminal-avatar-large">
                    <img src="${image}" alt="${name}">
                </div>
                <div class="profile-info-large">
                    <h1>${name}</h1>
                    <p class="role">${title}</p>
                    <div class="badges-inline">
                        ${badges.map(badge => {
                            if (typeof badge === 'object' && badge.url) {
                                const logoImg = badge.logo ? `<img src="${badge.logo}" alt="${badge.name}" class="badge-logo-img">` : '';
                                return `<a href="${badge.url}" target="_blank" class="badge-terminal badge-link">${logoImg}<span class="badge-text">${badge.name}</span></a>`;
                            }
                            return `<span class="badge-terminal">${badge}</span>`;
                        }).join('')}
                    </div>
                </div>
            </div>
            <div class="contact-links">
                <a href="mailto:${email}"><i class="fas fa-envelope"></i> qua at mit.edu</a>
                <a href="${links.scholar}" target="_blank"><i class="fas fa-graduation-cap"></i> Google Scholar</a>
                <a href="${links.github}" target="_blank"><i class="fab fa-github"></i> Github</a>
                <a href="${links.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                <a href="${links.twitter}" target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
            </div>
            <div class="bio-content">
                ${ABOUT_DATA.bio.map(para => `<p>${para}</p>`).join('\n')}
            </div>
        `;
    }
    
    // Load research interests
    const researchOutput = document.getElementById('research-output');
    if (researchOutput && ABOUT_DATA.researchInterests) {
        researchOutput.innerHTML = `
            <p class="section-label">Some research questions that recently pique my interests are:</p>
            <ul class="research-list">
                ${ABOUT_DATA.researchInterests.map(q => `<li>${q}</li>`).join('\n')}
            </ul>
        `;
    }
}

// ======== LOAD NEWS DATA ========
function loadNewsData() {
    if (typeof NEWS_DATA === 'undefined') return;
    
    const newsList = document.querySelector('.news-list');
    if (newsList) {
        // Map keywords in <em> to publication IDs
        function linkPaperNames(content) {
            const paperMap = {
                'MEM1': 'mem1',
                'AlphaOPT': 'alphaopt',
                'SPARKLE': 'sparkle',
                'Sparkle': 'sparkle',
            };
            let linked = content;
            for (const [name, id] of Object.entries(paperMap)) {
                const pattern = new RegExp(`<em>${name}</em>`, 'g');
                linked = linked.replace(pattern, `<em><a href="#${id}">${name}</a></em>`);
            }
            return linked;
        }

        newsList.innerHTML = NEWS_DATA.map(item => `
            <div class="news-item${item.highlight ? ' highlight' : ''}">
                <span class="date">${item.date}:</span>
                <p>${linkPaperNames(item.content)}</p>
            </div>
        `).join('\n');
    }
}

// ======== LOAD PUBLICATIONS DATA ========
function loadPublicationsData() {
    if (typeof PUBLICATIONS_DATA === 'undefined') return;
    
    // Load selected works
    const papersList = document.querySelector('.papers-list');
    if (papersList && PUBLICATIONS_DATA.selectedWorks) {
        papersList.innerHTML = PUBLICATIONS_DATA.selectedWorks.map(paper => {
            const linkButtons = ['paper','code','project','video','demo']
                .filter(key => paper.links && (key in paper.links))
                .map((type) => {
                    const url = paper.links[type];
                    const icons = { paper: 'fa-file-pdf', code: 'fab fa-github', project: 'fa-globe', video: 'fa-video', demo: 'fa-rocket' };
                    const labels = { paper: 'Paper', code: 'Code', project: 'Project', video: 'Video', demo: 'Demo' };
                    const isComing = !url || url === '#' || url === '';
                    if (isComing) {
                        return `<span class="paper-link-disabled"><i class="fas ${icons[type] || 'fa-link'}"></i> ${labels[type] || type}: Coming soon</span>`;
                    }
                    return `<a href="${url}" target="_blank"><i class="fas ${icons[type] || 'fa-link'} icon-${type}"></i> ${labels[type] || type}</a>`;
                })
                .join('\n');
            
            return `
                <div class="paper-item" id="${paper.id}">
                    <div class="paper-image">
                        <img src="${paper.image}" alt="${paper.title}" />
                    </div>
                    <div class="paper-info">
                        <h3>${paper.title}</h3>
                        <div class="paper-meta">
                            <span class="authors">${paper.authors}</span>
                            <span class="venue">${paper.venue}</span>
                        </div>
                        <div class="paper-links">
                            ${linkButtons}
                        </div>
                    </div>
                </div>
            `;
        }).join('\n');
    }
    
    // Load early-stage research
    const simpleList = document.querySelector('.simple-list');
    if (simpleList && PUBLICATIONS_DATA.earlyStage) {
        simpleList.innerHTML = PUBLICATIONS_DATA.earlyStage
            .map(item => {
                // Parse the publication string: Authors. <em>Title.</em> Venue.
                const titleMatch = item.match(/<em>(.*?)<\/em>/);
                const title = titleMatch ? titleMatch[1] : '';
                const authors = item.split('<em>')[0].trim();
                const venue = item.split('</em>')[1]?.trim() || '';
                
                return `
                    <li>
                        <div class="early-pub-title">${title}</div>
                        <div class="early-pub-authors">${authors}</div>
                        <div class="early-pub-venue">${venue}</div>
                    </li>
                `;
            })
            .join('\n');
    }
}

// ======== LOAD PEOPLE DATA ========
function loadPeopleData() {
    if (typeof PEOPLE_DATA === 'undefined') return;
    
    const peopleGrid = document.querySelector('.people-grid');
    if (peopleGrid) {
        peopleGrid.innerHTML = `
            <!-- Research Interns Box -->
            <div class="people-box">
                <h2>Research interns I have mentored</h2>
                <ul class="people-list">
                    ${PEOPLE_DATA.interns.map(intern => {
                        const hasUrl = intern.url && intern.url !== '#';
                        const nameLink = hasUrl 
                            ? `<a href="${intern.url}" target="_blank">${intern.name}</a>`
                            : intern.name;
                        return `<li>${nameLink} <span class="tag">${intern.tag}</span></li>`;
                    }).join('\n')}
                </ul>
            </div>

            <!-- Start-ups Box -->
            <div class="people-box">
                <h2>Startups I have collaborated with</h2>
                ${PEOPLE_DATA.startups.map(startup => 
                    `<p><a href="${startup.url}" target="_blank">${startup.name} <i class="fas fa-external-link-alt"></i></a></p>`
                ).join('\n')}
            </div>

            <!-- Mentors Box -->
            <div class="people-box">
                <h2>Mentors who have shaped my thinking as a researcher</h2>
                <p class="names-list">
                    ${PEOPLE_DATA.mentors.map((mentor, idx) => {
                        const hasUrl = mentor.url && mentor.url !== '#';
                        const link = hasUrl 
                            ? `<a href="${mentor.url}" target="_blank">${mentor.name}</a>`
                            : mentor.name;
                        return link;
                    }).join(', ')}
                </p>
            </div>

            <!-- Collaborators Box -->
            <div class="people-box">
                <h2>Collaborators I am honored to have worked with</h2>
                <div class="section-note">Listed in alphabetical order</div>
                <p class="names-list">
                    ${PEOPLE_DATA.collaborators.map((collab, idx) => {
                        const hasUrl = collab.url && collab.url !== '#';
                        const link = hasUrl 
                            ? `<a href="${collab.url}" target="_blank">${collab.name}</a>`
                            : collab.name;
                        return link;
                    }).join(', ')}
                </p>
            </div>
        `;
    }
}

// ======== INITIALIZE ALL DATA ========
function initializeData() {
    console.log('📊 Loading data from separate files...');
    
    loadAboutData();
    loadNewsData();
    loadPublicationsData();
    loadPeopleData();
    
    console.log('✅ Data loaded successfully!');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeData);
} else {
    initializeData();
}

