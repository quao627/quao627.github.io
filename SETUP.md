# Ubuntu-Style Website - Quick Setup

## 🐧 What You Have

An **Ubuntu Linux-inspired** academic website with:
- ✅ Left sidebar launcher (Ubuntu-style)
- ✅ Top status bar with live clock
- ✅ Window-based navigation
- ✅ Terminal-style About section
- ✅ Black-white-grey color scheme
- ✅ Ubuntu orange accents
- ✅ Profile picture placeholder ready

## 🚀 View Your Website NOW

**Just double-click `index.html`** or run:

```bash
open index.html
```

## 🎮 How to Navigate

### **Using the Sidebar** (Left)
Click icons to switch between sections:
- 🏠 Home - Your profile
- 👤 About - Terminal-style bio
- 📰 News - Latest updates
- 🧪 Research - Publications
- 👥 Mentorship - Collaborations

### **Using Keyboard**
- `Alt + 1` → Home
- `Alt + 2` → About
- `Alt + 3` → News
- `Alt + 4` → Research
- `Alt + 5` → Mentorship
- `Esc` → Return to Home

### **Window Controls**
- 🔴 Red button: Close window (returns to home)
- 🟡 Yellow button: Minimize
- 🟢 Green button: Maximize

## ⚡ Quick Customizations

### 1. Update Your Email (2 minutes)

Search for `your.email@mit.edu` in `index.html` and replace (appears 3 times):

- Line 12: Top bar username
- Line 74: Sidebar email link
- Line 109: Profile contact info

### 2. Add Social Links (3 minutes)

In `index.html`, lines 74-88, replace `#` with your actual URLs:

```html
<a href="https://scholar.google.com/citations?user=YOURUSER">
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourprofile">
<a href="https://twitter.com/yourhandle">
```

### 3. Add Your Photo (1 minute)

**Option A - Use your photo:**
```bash
# Add a square photo (400x400px+) named profile.jpg
# Place it in the main folder
# The site will automatically use it
```

**Option B - Generate placeholder:**
```bash
# Open create-placeholder.html in browser
# Click "Download Placeholder"
# Save as profile.jpg
```

### 4. Update Paper Links (10 minutes)

In the Research section (lines 230-350), replace `#` with actual URLs:

```html
<a href="https://arxiv.org/abs/your-paper" class="btn">
    <i class="fas fa-file-pdf"></i> Paper
</a>
```

## 🎨 Color Customization

### Want Pure Black & White?

In `styles.css` (line 15), change:
```css
--ubuntu-orange: #1a1a1a;  /* Removes orange, uses black */
```

### Want Different Accent Color?

```css
--ubuntu-orange: #0066cc;  /* Blue accent */
--ubuntu-orange: #2ecc71;  /* Green accent */
--ubuntu-orange: #9b59b6;  /* Purple accent */
```

### Want Darker Desktop?

```css
--ubuntu-dark: #1a1a1a;  /* Darker background */
```

## 📸 Add Paper Images

Create an `images/` folder and add paper previews:

```html
<!-- In Research section, replace: -->
<div class="paper-thumbnail">
    <i class="fas fa-brain"></i>
    <span class="paper-badge oral">ORAL</span>
</div>

<!-- With: -->
<div class="paper-thumbnail">
    <img src="images/mem1.jpg" alt="MEM1">
    <span class="paper-badge oral">ORAL</span>
</div>
```

**Recommended image size**: 120x90px (or larger, will auto-resize)

## 🎯 Complete Author Lists

Search for `[Authors TBD]` in `index.html` and replace with full author names:

```html
<p class="authors">Author1, Author2, Your Name, et al.</p>
```

## 📝 Customize Terminal Content

In the About section (terminal window), edit commands and outputs:

```html
<div class="terminal-line">
    <span class="prompt">aoqu@mit:~$</span> cat your_custom_file.txt
</div>
<div class="terminal-output">
    <p>Your custom content here...</p>
</div>
```

## 🌐 Deploy Your Site

### **GitHub Pages** (Easiest)
```bash
1. Create new repo: "aoqu-website"
2. Upload all files
3. Go to Settings → Pages
4. Source: main branch
5. Done! URL: https://yourusername.github.io/aoqu-website
```

### **Netlify** (Fast)
```bash
1. Go to netlify.com
2. Drag your folder to the drop area
3. Instant deployment
4. Get a random URL or add custom domain
```

### **MIT Personal Website**
```bash
# Upload to your MIT web space
# Usually: web.mit.edu/yourusername/www/
```

## ✅ Checklist

**Before deploying:**
- [ ] Updated email addresses (3 places)
- [ ] Added social media links (5 links)
- [ ] Replaced profile.svg with your photo
- [ ] Updated all paper links from `#` to actual URLs
- [ ] Completed author lists
- [ ] (Optional) Added paper preview images
- [ ] (Optional) Customized terminal content
- [ ] (Optional) Adjusted colors to preference

## 🎨 Design Elements Explained

### **Sidebar Launcher**
- Orange bar on left = active section
- Hover for tooltips
- Click to switch windows
- Top icons = sections, bottom = social links

### **Top Bar**
- Left: Ubuntu logo + current app
- Center: Live clock (updates every second)
- Right: System status icons + your initials

### **Windows**
- Red/yellow/green dots = window controls
- Each section = separate window
- Only one window visible at a time
- Smooth transitions between windows

### **Terminal (About section)**
- Purple background = Ubuntu terminal colors
- Green prompt = `aoqu@mit:~$`
- Commands show your bio/research
- Blinking cursor at bottom

### **Paper Badges**
- `ORAL` = Orange badge
- `BEST PAPER` = Green badge
- `FINALIST` = Grey badge

## 💡 Pro Tips

1. **Test in multiple browsers** before deploying
2. **Mobile works** but desktop experience is optimal
3. **Add images** for paper thumbnails (makes it pop!)
4. **Keep terminal content** concise and readable
5. **Use Alt+1-5** keyboard shortcuts for quick navigation

## 🐛 Common Issues

**Sidebar icons not clickable?**
- JavaScript required - check browser console

**Clock not showing time?**
- Should update automatically on page load
- Refresh page if needed

**Windows not switching?**
- Click sidebar icons, not social media links
- Social links open external pages

**Profile picture shows "AQ"?**
- That's the placeholder - add profile.jpg to use your photo

## 🎓 Next Steps

1. **View now** → Open index.html
2. **Quick edits** → Update email & social links (5 min)
3. **Add photo** → Replace profile.svg (2 min)
4. **Paper links** → Add all URLs (15 min)
5. **Images** → Add paper previews (optional, 20 min)
6. **Deploy** → Push to GitHub Pages (10 min)

**Total time to fully customize: ~1 hour**

---

## 🎨 Style Guide

**Fonts:**
- Body: Ubuntu, system fonts
- Terminal: Ubuntu Mono, Courier New

**Colors:**
- Background: #2c2c2c (dark grey)
- Windows: #ffffff (white)
- Text: #1a1a1a (near black)
- Accent: #dd4814 (Ubuntu orange)

**Spacing:**
- Compact and efficient
- Clear visual hierarchy
- Generous padding in windows
- Tight sidebar for more screen space

---

**Need help?** Check `README.md` for full documentation.

**Ready to go?** Open `index.html` and start customizing! 🚀
