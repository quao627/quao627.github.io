# Ubuntu Website Visual Layout Guide

## 🖥️ Overall Layout

```
┌────────────────────────────────────────────────────────────┐
│  ●  aoqu@mit        15:30        🔊 🔋 AQ                  │ TOP BAR (26px)
├─────┬──────────────────────────────────────────────────────┤
│  🏠 │                                                       │
│     │         WINDOW / APPLICATION AREA                    │
│  👤 │     ┌──────────────────────────────┐                │
│     │     │ ●  ●  ●  Window Title       │                │
│  📰 │     ├──────────────────────────────┤                │
│     │     │                              │                │
│  🧪 │     │      Window Content          │                │
│     │     │                              │                │
│  👥 │     │                              │                │
│     │     └──────────────────────────────┘                │
│ ─── │                                                       │
│  ✉️ │                                                       │
│  🎓 │        DESKTOP BACKGROUND                            │
│  🐙 │        (Dark Grey)                                   │
│  💼 │                                                       │
│  🐦 │                                                       │
│     │                                                       │
└─────┴──────────────────────────────────────────────────────┘
 64px                   Main Content Area
SIDEBAR
```

## 📊 Component Breakdown

### 1. **Top Bar** (Ubuntu Style)
```
┌────────────────────────────────────────────┐
│ ● aoqu@mit    15:30    🔊 🔋 AQ           │
└────────────────────────────────────────────┘
  ^      ^         ^           ^
  |      |         |           └─ User Indicator
  |      |         └─────────────── Live Clock
  |      └───────────────────────── App Name
  └──────────────────────────────── Ubuntu Logo (orange)
```

**Features:**
- Height: 26px
- Background: Dark gradient (#4d4d4d → #3d3d3d)
- Live updating clock
- System status icons

### 2. **Sidebar Launcher** (Left Edge)
```
┌─────┐
│  🏠 │ ← Home (Active - orange bar on left)
│  👤 │ ← About
│  📰 │ ← News
│  🧪 │ ← Research
│  👥 │ ← Mentorship
│ ─── │ ← Separator
│  ✉️ │ ← Email
│  🎓 │ ← Scholar
│  🐙 │ ← Github
│  💼 │ ← LinkedIn
│  🐦 │ ← Twitter
└─────┘
```

**Features:**
- Width: 64px
- Dark background (#2d2d2d)
- Icons: 48x48px
- Orange indicator bar (4px) on active item
- Hover tooltips

### 3. **Window Chrome**
```
┌──────────────────────────────────────┐
│ 🔴 🟡 🟢  Window Title              │
├──────────────────────────────────────┤
│                                      │
│         Window Content               │
│                                      │
└──────────────────────────────────────┘
```

**Window Controls:**
- 🔴 Close → Returns to home
- 🟡 Minimize → Closes window
- 🟢 Maximize → (Reserved for future)

**Features:**
- Header: Light grey gradient (#ededed → #d9d9d9)
- Content: White background (#ffffff)
- Border radius: 8px (top corners)
- Shadow: Subtle depth

## 🪟 Window Types

### **Home Window** (Profile)
```
┌────────────────────────────────────────┐
│ 🔴 🟡 🟢  Profile - Ao Qu             │
├────────┬───────────────────────────────┤
│        │ Institution                   │
│  📷   │ MIT IDSS                      │
│  AQ    │                               │
│        │ Advisors                      │
│  Name  │ Prof. Paul Liang              │
│  Role  │ Prof. Jinhua Zhao             │
│        │                               │
│ [MIT]  │ Contact                       │
│ [DUSP] │ your.email@mit.edu            │
│ [M3S]  │                               │
└────────┴───────────────────────────────┘
```

### **About Window** (Terminal)
```
┌────────────────────────────────────────┐
│ 🔴 🟡 🟢  Terminal - about.sh         │
├────────────────────────────────────────┤
│ aoqu@mit:~$ cat bio.txt                │
│ PhD student at MIT IDSS...             │
│                                        │
│ aoqu@mit:~$ cat research_vision.txt    │
│ Mission: Building socially aware...    │
│                                        │
│ aoqu@mit:~$ █                          │
└────────────────────────────────────────┘
```

**Terminal Colors:**
- Background: #300a24 (Ubuntu purple)
- Prompt: #00ff00 (green)
- Text: #ffffff (white)
- Highlights: #ff8800 (orange)

### **News Window**
```
┌────────────────────────────────────────┐
│ 🔴 🟡 🟢  News & Updates              │
├────────────────────────────────────────┤
│ ┃ 2025-10-10  MEM1 presented...       │
│ ┃ 2025-10-05  MEM1 accepted (top 1%)  │ ← Highlighted
│ ┃ 2025-09-25  Position paper...       │
│ ┃ 2025-09-17  AlphaOPT finalist       │ ← Highlighted
└────────────────────────────────────────┘
```

**Entry Types:**
- Normal: Light grey background
- Highlighted: Cream background (#fff8f0)
- Left border: Orange on highlight, grey on normal

### **Research Window**
```
┌────────────────────────────────────────┐
│ 🔴 🟡 🟢  Research & Publications      │
├────────────────────────────────────────┤
│ Selected Works                         │
│                                        │
│ ┌──────┐  MEM1: Learning to...       │
│ │ 🧠   │  Ao Qu*, Zijian Zhou*        │
│ │ ORAL │  NeurIPS 2025 Workshop       │
│ └──────┘  [Paper] [Code] [Project]    │
│                                        │
│ ┌──────┐  ClassMind: Scaling...       │
│ │ 👨‍🏫  │  [Authors TBD]               │
│ └──────┘  Under Review                │
└────────────────────────────────────────┘
```

**Paper Components:**
- Thumbnail: 120x90px (left)
- Badge: Top-right corner of thumbnail
- Details: Right side
- Buttons: Bottom of details

### **Mentorship Window**
```
┌────────────────────────────────────────┐
│ 🔴 🟡 🟢  Mentorship & Collaboration   │
├────────────────┬───────────────────────┤
│ 🎓 Research    │ 🚀 Start-ups          │
│ Josephine  MIT │ O2Tech.ai             │
│ Kathy      MIT │ Subconscious.dev      │
│ Anirudh    MIT │                       │
│ Minwei   LSE→  │ 👨‍🏫 Mentors            │
│ Yibo     JHU→  │ [Paul] [Jinhua]       │
│ Zhenze   NEU→  │ [Cathy] [Tyler]...    │
│ Yuhan    UCB→  │                       │
│                │ 🤝 Collaborators       │
│                │ [Zhaokai] [Zijian]    │
└────────────────┴───────────────────────┘
```

## 🎨 Color Palette

### **Grayscale**
```
███ #1a1a1a - Black (text)
███ #2c2c2c - Dark grey (desktop)
███ #3d3d3d - Medium grey (top bar)
███ #5e5e5e - Grey (secondary text)
███ #aeaeae - Light grey (borders)
███ #e0e0e0 - Lighter grey (dividers)
███ #f5f5f5 - Off-white (cards)
███ #ffffff - White (windows)
```

### **Accents**
```
███ #dd4814 - Ubuntu orange (active states)
███ #e95420 - Ubuntu orange light (hover)
███ #300a24 - Terminal purple (about window)
███ #00ff00 - Terminal green (prompt)
```

### **Paper Badges**
```
[ORAL]     - Orange (#dd4814)
[BEST]     - Green (#45a846)
[FINALIST] - Grey (#5e5e5e)
```

## 📐 Measurements

```
Top Bar Height:      26px
Sidebar Width:       64px
Launcher Icon:       48x48px
Window Header:       40px
Window Padding:      24px
Paper Thumbnail:     120x90px
Profile Image:       180x180px
Max Window Width:    1200px
```

## 🎯 Responsive Breakpoints

```
Desktop:   > 1024px  (Full layout)
Tablet:    768-1024  (Narrower sidebar: 56px)
Mobile:    < 768px   (Minimal sidebar: 48px)
```

## 💡 Design Philosophy

1. **Functional**: Ubuntu's focus on usability
2. **Professional**: Black-white-grey scheme
3. **Familiar**: OS-style navigation
4. **Clean**: Minimal decorations
5. **Efficient**: Compact information display

## 🎭 Visual Hierarchy

```
Primary:   Window titles, section headings (bold, 16-20px)
Secondary: Paper titles, names (semi-bold, 14-16px)
Tertiary:  Body text, metadata (regular, 13-14px)
Accent:    Orange highlights, active states
```

## 🖱️ Interactive States

**Launcher Icons:**
- Rest: Dark background
- Hover: Lighter background + small orange bar
- Active: Light background + full orange bar

**Buttons:**
- Rest: White with grey border
- Hover: Orange background + white text
- Click: Ripple effect

**Window Controls:**
- Rest: Red/yellow/green gradient
- Hover: Brighter + slight scale (1.1x)

---

**This layout creates an authentic Ubuntu desktop experience while showcasing your academic work professionally.**

