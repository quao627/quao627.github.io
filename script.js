// Ubuntu-style Single Page Website

// ======== CLOCK ========
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

updateClock();
setInterval(updateClock, 1000);

// ======== SMOOTH SCROLL NAVIGATION ========
const launcherIcons = document.querySelectorAll('.launcher-icon[href^="#"]');
const sections = document.querySelectorAll('.section[id]');

// Update active state based on scroll position
function updateActiveSection() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active from all icons
            launcherIcons.forEach(icon => {
                icon.classList.remove('active');
            });
            
            // Add active to current section icon
            const activeIcon = document.querySelector(`.launcher-icon[href="#${sectionId}"]`);
            if (activeIcon) {
                activeIcon.classList.add('active');
            }
        }
    });
}

// Smooth scroll on click
launcherIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = icon.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 24; // Account for top bar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Listen to scroll events
window.addEventListener('scroll', updateActiveSection);

// Initial update
updateActiveSection();

// ======== PROFILE IMAGE ERROR HANDLING ========
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('error', function() {
        this.src = 'profile.svg';
    });
}

// ======== TOOLTIPS ========
document.querySelectorAll('.launcher-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        const title = this.getAttribute('title');
        if (title && !this.querySelector('.tooltip')) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = title;
            tooltip.style.cssText = `
                position: absolute;
                left: 100%;
                top: 50%;
                transform: translateY(-50%);
                margin-left: 10px;
                background: rgba(0, 0, 0, 0.85);
                color: white;
                padding: 5px 10px;
                border-radius: 3px;
                font-size: 11px;
                white-space: nowrap;
                pointer-events: none;
                z-index: 10000;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
            `;
            this.style.position = 'relative';
            this.appendChild(tooltip);
        }
    });
    
    icon.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

// ======== KEYBOARD SHORTCUTS ========
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const sectionIds = ['home', 'news', 'research', 'people'];
        const index = parseInt(e.key) - 1;
        const targetSection = document.getElementById(sectionIds[index]);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 24;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

// ======== INITIALIZATION ========
console.log('🐧 Ubuntu-style scrollable website loaded!');
console.log('💡 Shortcuts: Alt+1-4 (sections)');
console.log('📜 Scroll or click sidebar to navigate');
console.log('⌨️  Terminal mode activated!');
