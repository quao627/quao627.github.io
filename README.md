# Ao Qu - Ubuntu-Inspired Academic Website

A sleek, Linux Ubuntu-inspired personal academic website with authentic OS-style design.

## 🐧 Design Features

### **Ubuntu Aesthetic**
- **Top Bar**: Ubuntu-style status bar with clock, system icons, and user indicator
- **Left Sidebar**: Ubuntu launcher with app icons and orange active indicator
- **Window Chrome**: macOS/Ubuntu hybrid window controls (red/yellow/green buttons)
- **Terminal Window**: Authentic terminal styling for "About" section
- **Black-White-Grey**: Professional monochrome color scheme with Ubuntu orange accents

### **Key Components**

1. **Sidebar Launcher** (Left)
   - Home, About, News, Research, Mentorship sections
   - Social media links (Email, Scholar, Github, LinkedIn, Twitter)
   - Orange indicator bar for active section
   - Hover tooltips

2. **Windows/Applications**
   - **Home**: Profile card with photo, badges, and contact info
   - **About**: Terminal-style display of bio and research questions
   - **News**: Clean list view with highlighted important updates
   - **Research**: Paper listings with thumbnails and status badges
   - **Mentorship**: Grid layout for interns, collaborators, mentors

3. **Top Bar**
   - Ubuntu logo (orange dot)
   - Current application name
   - Live clock
   - System status icons

## 🚀 Quick Start

1. **View the website**: Open `index.html` in your browser
2. **Navigate**: Click launcher icons on the left sidebar
3. **Switch sections**: Click any icon or use keyboard shortcuts

## ⌨️ Keyboard Shortcuts

- `Alt + 1-5`: Switch between windows (Home, About, News, Research, Mentorship)
- `Esc`: Return to home
- `Tab`: Navigate through elements

## 📝 Customization Guide

### 1. Update Personal Information

**Profile Picture:**
- Replace `profile.svg` with `profile.jpg` (recommended: 400x400px square)
- Photo appears in the Home window

**Email & Links** (in `index.html`):
```html
<!-- Line 52: Top bar -->
<span class="app-name">your-username@mit</span>

<!-- Lines 74-88: Sidebar social links -->
<a href="mailto:your.email@mit.edu" ...>
<a href="https://scholar.google.com/..." ...>
<a href="https://github.com/yourusername" ...>
<a href="https://linkedin.com/in/yourprofile" ...>
<a href="https://twitter.com/yourhandle" ...>

<!-- Line 109: Profile contact -->
<p><a href="mailto:your.email@mit.edu">...</a></p>
```

### 2. Customize Colors

Edit `styles.css` (lines 11-19) to change the color scheme:

```css
:root {
    --ubuntu-orange: #dd4814;      /* Active indicator & accents */
    --ubuntu-dark: #2c2c2c;        /* Desktop background */
    --ubuntu-sidebar: #2d2d2d;     /* Sidebar background */
    --terminal-bg: #300a24;        /* Terminal purple */
}
```

**Color Scheme Options:**
- Default: Black-white-grey with Ubuntu orange
- All Grey: Set `--ubuntu-orange: #5e5e5e;`
- Pure B&W: Set `--ubuntu-orange: #1a1a1a;`

### 3. Add Paper Visuals

Replace icon placeholders with actual images:

```html
<!-- Current (in Research window): -->
<div class="paper-thumbnail">
    <i class="fas fa-brain"></i>
    <span class="paper-badge oral">ORAL</span>
</div>

<!-- Replace with: -->
<div class="paper-thumbnail">
    <img src="images/mem1-preview.jpg" alt="MEM1">
    <span class="paper-badge oral">ORAL</span>
</div>
```

### 4. Update Paper Information

Each paper has:
- **Thumbnail**: 120x90px image or icon
- **Badge**: `oral`, `best`, or `finalist` classes
- **Title, Authors, Venue**: Update text
- **Links**: Add actual URLs

Example:
```html
<div class="paper-item">
    <div class="paper-thumbnail">
        <img src="images/your-paper.jpg" alt="Paper">
        <span class="paper-badge oral">ORAL</span>
    </div>
    <div class="paper-details">
        <h3>Your Paper Title</h3>
        <p class="authors">Author1, Author2, Your Name, et al.</p>
        <p class="venue">Conference Name 2025</p>
        <div class="paper-actions">
            <a href="https://arxiv.org/..." class="btn">
                <i class="fas fa-file-pdf"></i> Paper
            </a>
        </div>
    </div>
</div>
```

### 5. Modify Terminal Content

Edit the About section terminal commands (around line 120):

```html
<div class="terminal-line">
    <span class="prompt">aoqu@mit:~$</span> cat your-file.txt
</div>
<div class="terminal-output">
    <p>Your content here...</p>
</div>
```

## 🎨 Design Elements

### **Window Controls**
- **Red**: Close (returns to home)
- **Yellow**: Minimize (closes window)
- **Green**: Maximize (future feature)

### **Status Badges**
- `oral`: Orange badge for oral presentations
- `best`: Green badge for best paper awards
- `finalist`: Grey badge for finalists

### **Terminal Features**
- Purple Ubuntu terminal background (#300a24)
- Green prompt: `aoqu@mit:~$`
- Orange highlighting for important text
- Blinking cursor animation

### **Sidebar Launcher**
- Orange bar indicates active section
- Tooltips on hover
- Icons fade on hover
- Separator line between sections and social links

## 📂 File Structure

```
aoqu-website/
├── index.html              # Ubuntu-style layout
├── styles.css              # Black-white-grey theme
├── script.js               # Window switching & interactions
├── profile.svg             # Profile picture placeholder
├── create-placeholder.html # Image generator
├── README.md               # This file
├── SETUP.md                # Quick start guide
└── LICENSE
```

## 🌐 Deployment

### GitHub Pages
```bash
1. Create new repository
2. Upload all files
3. Settings → Pages → Select main branch
4. URL: https://username.github.io/repo-name
```

### Netlify
```bash
1. Drag folder to netlify.com/drop
2. Instant deployment
3. Optional: Custom domain
```

## 💡 Features & Interactions

- ✅ **Single-page app** with window switching
- ✅ **Live clock** in top bar
- ✅ **Keyboard navigation** (Alt+1-5, Esc)
- ✅ **Hover tooltips** on launcher icons
- ✅ **Smooth animations** for window transitions
- ✅ **Responsive design** (mobile-friendly)
- ✅ **Terminal aesthetics** for technical feel
- ✅ **Ubuntu window chrome** for authenticity
- ✅ **Status badges** for papers
- ✅ **Click feedback** on buttons

## 🎯 Ubuntu Design Principles

This website follows Ubuntu's design language:

1. **Functionality First**: Clean, usable interface
2. **Consistent Elements**: Standardized window chrome
3. **Professional Palette**: Black-white-grey with orange accents
4. **Clear Hierarchy**: Bold headings, organized sections
5. **Familiar Patterns**: OS-style navigation users understand

## 🛠 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (responsive)

## 🐛 Troubleshooting

**Sidebar not showing?**
- Check browser width (minimum 480px recommended)

**Windows not switching?**
- Check browser console (F12) for JavaScript errors
- Ensure Font Awesome CDN is accessible

**Clock not updating?**
- JavaScript is required
- Check browser console for errors

**Profile image not loading?**
- Falls back to `profile.svg` automatically
- Add `profile.jpg` or `profile.png` for custom photo

## 🎨 Customization Examples

### Make it All Grayscale
```css
/* In styles.css */
--ubuntu-orange: #5e5e5e;  /* Replace orange with grey */
```

### Change Terminal Color
```css
/* In styles.css */
--terminal-bg: #1a1a1a;  /* Black terminal */
--terminal-bg: #0c0c0c;  /* Pure black */
```

### Adjust Sidebar Width
```css
/* In styles.css */
.sidebar {
    width: 80px;  /* Wider sidebar */
}
.launcher-icon {
    width: 60px;
    height: 60px;
}
```

## 📧 Contact & Links

Update all instances of:
- `your.email@mit.edu`
- Social media URLs
- Paper links (`href="#"`)

Search for these in `index.html` and replace with actual links.

---

**Design Inspiration**: Ubuntu 20.04+ Desktop Environment  
**Color Scheme**: Black-White-Grey Professional  
**Status**: Ready to deploy 🚀

**Last Updated**: October 2025
