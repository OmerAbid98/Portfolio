# Omer Abid Portfolio Website

## Overview

This is a personal portfolio website for Omer Abid, a Software Engineer and AI Specialist with an MSc in Artificial Intelligence (Distinction) from Queen's University Belfast. The website showcases professional experience, technical skills, education, projects, and provides contact functionality. Built as a **simple, static single-page application using vanilla HTML, CSS, and JavaScript** for easy deployment to **GitHub Pages** or any static hosting service.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Static Site Architecture

**Current Implementation**
- **Pure vanilla JavaScript** - No build tools, frameworks, or dependencies required
- **Single-page application** - All content in `index.html`
- **Simple file structure**: `index.html`, `style.css`, `script.js`, and `attached_assets/` folder
- **No backend required** - Fully static and client-side only
- **Contact form** uses mailto links to open default email client with pre-filled information
- **All data hardcoded** in `script.js` for easy editing and maintenance
- **Ready for instant deployment** to GitHub Pages, Netlify, Vercel, or any static hosting service

### Key Files

**index.html**
- Complete HTML structure with all sections
- Semantic HTML5 markup
- SEO meta tags and Open Graph tags
- Google Fonts loaded via CDN (Inter, Poppins)
- Links to `style.css` and `script.js`

**style.css**
- All styling in a single CSS file
- Dark mode only (no light mode toggle)
- Animated gradient background with pulsing blur effects
- CSS variables for easy theme customization
- Fully responsive design with mobile-first approach
- Smooth transitions and animations

**script.js**
- All interactive features in vanilla JavaScript
- No dependencies or frameworks
- All portfolio data defined at the top for easy editing
- Features:
  - Animated typing effect for job titles
  - Smooth scrolling navigation
  - Active section tracking
  - Mobile menu toggle
  - Testimonial carousel
  - Project filtering system
  - Skill progress animations (linear and circular)
  - Contact form mailto functionality
  - Back to top button

### Design System

**Typography**
- Primary font: Inter (sans-serif) via Google Fonts
- Heading font: Poppins (display) via Google Fonts
- Font sizes use responsive scaling for mobile/desktop

**Color Palette (Dark Mode Only)**
- Background: `hsl(270, 60%, 6%)` - Deep purple-black
- Foreground: `hsl(270, 10%, 95%)` - Light gray text
- Primary: `hsl(270, 80%, 55%)` - Vibrant purple
- Accent: `hsl(75, 100%, 60%)` - Bright lime green
- Card: `hsl(270, 55%, 9%)` - Slightly lighter than background
- Muted: `hsl(270, 35%, 20%)` - Dark gray
- All colors defined as CSS custom properties in `:root`

**Layout & Spacing**
- Container max-width: 1280px
- Section padding: 5-8rem (responsive)
- Card border-radius: 0.375rem
- Responsive breakpoints: 640px, 768px, 1024px

### Key Features

**Visual Design**
- Animated gradient background flowing seamlessly across entire page
- Three pulsing blur orbs creating depth and atmosphere
- Smooth hover effects on cards and interactive elements
- Responsive navigation with mobile hamburger menu
- Circular progress indicators for coding skills
- Linear progress bars for technical skills
- Star ratings for testimonials
- Technology icons using Unicode emojis

**Sections**
1. **Hero** - Animated typing effect cycling through job titles, CTA buttons, scroll indicator
2. **About** - Contact information cards with icons, professional bio
3. **Services** - 6 service cards with icons and descriptions
4. **Experience** - Timeline layout with 4 positions, achievements, badges for promotions/ratings
5. **Education** - 2 education cards with coursework, projects, and achievements
6. **Skills** - 4 category cards with progress bars, circular coding skills, language dots, skill badges
7. **Interests** - 5 interest cards with icons
8. **Testimonials** - Carousel with 4 client testimonials, navigation controls, rating stars
9. **Portfolio** - 8 projects with category filtering, tech stack badges
10. **Technologies** - 12 technology cards with icons
11. **Contact** - Contact form (mailto), contact info cards, social links, availability notice
12. **Footer** - Copyright, social links, back-to-top button

**Interactive Features**
- Sticky navigation with active section highlighting
- Smooth scroll to sections on link click
- Mobile menu with hamburger toggle
- Animated typing effect for job roles
- Testimonial carousel (prev/next + dot navigation)
- Project category filtering
- Skill progress animations on scroll
- Back to top button appears on scroll
- Contact form validation and mailto submission

### Deployment Instructions

**For GitHub Pages:**
1. Create a new GitHub repository
2. Upload these files to the repository:
   - `index.html`
   - `style.css`
   - `script.js`
   - `attached_assets/` folder (contains CV PDF)
3. Go to repository Settings → Pages
4. Select "Deploy from branch" and choose `main` branch
5. Save and wait for deployment
6. Site will be live at `https://username.github.io/repository-name`

**For Netlify/Vercel:**
1. Drag and drop the folder containing the files to Netlify/Vercel
2. Site deploys instantly
3. No build configuration needed

**For any static hosting:**
- Simply upload all files maintaining the folder structure
- No build step, server, or configuration required
- Works instantly when accessed via HTTP/HTTPS

### Customization Guide

**Updating Content:**
- All portfolio data is in `script.js` at the top
- Edit the data objects (services, experiences, education, etc.)
- No rebuild or compilation needed - changes are instant

**Changing Colors:**
- Edit CSS custom properties in `style.css` under `:root`
- Main colors: `--primary`, `--accent`, `--background`, `--foreground`

**Modifying Sections:**
- Section order can be changed by reordering HTML in `index.html`
- To remove a section, delete from HTML and remove data from `script.js`
- To add a section, add HTML structure and generate content in `script.js`

## Design Reference

- Portfolio design inspired by CVIO template
- Adapted for tech-forward aesthetics suitable for AI/ML professional
- Dark mode only with vibrant purple and lime green accents
- Focus on clean, modern presentation with gradient background and smooth animations
- Professional yet approachable design suitable for software engineering and AI roles
