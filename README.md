# Abhitej-Portfolio

A high-performance, minimalist personal portfolio crafted with **React 19**, **Vite**, and **Tailwind CSS**. Built directly from reference UI mockups with a completely separated data layer for effortless customization.

---

## 🌟 Features

- **Pixel-Accurate Design**: Faithfully reproduced from design mockups:
  - **Hero Section**: High-contrast typography, metric counters (+200 Projects, +50 Startups), high-priority portrait with transparent background, and vertical desktop sidebar rail.
  - **About Me Section**: Clean 3-column layout featuring an elevated 120% engagement metric card, avatar action card, and strategic design highlights.
  - **Experience Journey**: Interactive timeline with expandable cards, project preview imagery, tag filtering, and an exclusive consultation offer banner.
  - **Latest Works (Portfolio)**: 3-column project showcase with interactive dark-tint overlay preview and link navigation.
  - **Design Insights & Trends (Blog)**: Curated article cards with category tags, read-time indicators, and a clean call-to-action banner.
  - **Minimalist Footer**: Architectural outline motif with pill navigation and high-impact email link.
- **100% Separated Data Layer**: All text, stats, links, and image paths reside cleanly in `src/data/`. Change data in one place with zero changes required in UI components.
- **Performance Optimized**: Sub-second load times, LCP image optimization with `fetchpriority="high"`, zero layout shifts, and responsive on all viewport sizes.

---

## 📁 Project Structure

```
AbhitejPortfolio/
├── reference images/            # Original UI screenshots for design reference
├── public/
│   └── images/                  # Processed transparent portraits and visual assets
├── src/
│   ├── data/                    # SEPARATED DATA LAYER (Change text & links here)
│   │   ├── heroData.js
│   │   ├── aboutData.js
│   │   ├── experienceData.js
│   │   ├── portfolioData.js
│   │   ├── blogData.js
│   │   ├── footerData.js
│   │   ├── navigationData.js
│   │   ├── sidebarData.js
│   │   └── index.js
│   ├── components/
│   │   ├── common/              # Navbar, Logo, LeftSidebarMeta
│   │   ├── hero/                # HeroSection, Stats, Heading, Portrait
│   │   ├── about/               # AboutSection
│   │   ├── experience/          # ExperienceSection
│   │   ├── portfolio/           # ProjectsSection
│   │   ├── blog/                # BlogSection
│   │   └── footer/              # FooterSection
│   ├── layouts/
│   │   └── MainLayout.jsx       # Layout shell with desktop rail & top navigation
│   ├── pages/
│   │   └── HomePage.jsx         # Integrated full-page showcase
│   ├── routes/
│   │   └── AppRoutes.jsx        # React Router routes
│   ├── styles/
│   │   └── index.css            # Tailwind CSS styling & custom utilities
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
