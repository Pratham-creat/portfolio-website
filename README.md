# Pratham Dixit — Developer & AI Engineer Portfolio

A modern, minimal, technical personal portfolio website for **Pratham Dixit** (AI Engineer & Web Developer).

Built with **React 18, TypeScript, Vite, Tailwind CSS v4**, and subtle interactions via **Framer Motion** and **Lucide Icons**.

---

## ✨ Features & Highlights

- **Aesthetic**: Minimal, technical, crisp typography, clean dark/light mode toggle with persistence.
- **Interactive Command Palette (`⌘K` / `Ctrl+K`)**: Fast keyboard-driven navigation across all sections, projects, and social profiles.
- **Hero Section**: Typographic headline, live status badge, quick stats, primary CTAs, and a live terminal widget previewing engineering profile and competencies.
- **About Section**: Highlighting B.Tech CSE background, applied AI focus, full-stack architecture, and clean engineering principles.
- **Technical Skills**: Categorized tabs (Languages, Frontend, Backend & APIs, AI/ML, Databases, Tools & Cloud) with live instant search filtering.
- **Selected Projects**:
  - **AI Law Advisor** (*Flagship Project*): 100% local LLM inference (Ollama), OCR document parsing, and plain-language legal clause simplification.
  - **Blogger Platform**: Full-stack publishing ecosystem with Cloudinary media CDN, JWT auth, and Markdown editor.
  - **PM Shri School Website**: Responsive institutional portal with dynamic announcements and high accessibility.
  - **Library Management System**: Automated book circulation, overdue fine algorithms, and ISBN cataloging.
  - **Deep-Dive Architecture Modals**: Modal breakdown for every project detailing the *Problem*, *What was built*, *Key Capabilities*, and *System Architecture*.
- **Experience Timeline**: Krazyfox Web Developer internship with verified engineering contributions and tech stack tags.
- **Achievements & Certifications**: Inter-college Jabalpur Hackathon Team Lead finalist, IBM AI Fundamentals, and Microsoft Machine Learning certification.
- **Contact & Connect**: Direct email with one-click copy-to-clipboard, LinkedIn/GitHub links, and an interactive validated contact form.
- **Footer**: Live Indian Standard Time (IST) clock, quick back-to-top button, and clean attribution.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd portfolio-website
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to preview the website.

### 3. Build for Production
```bash
npm run build
```
Production assets will be built to the `dist/` directory.

---

## 🛠️ How to Customize Your Details

All profile content and projects are organized in a single typed data file:
👉 [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

You can easily update:
- `personalInfo.email`: Replace with your actual email address.
- `personalInfo.github`: Replace with your personal GitHub URL.
- `personalInfo.linkedin`: Replace with your LinkedIn profile URL.
- `projectsData`: Add new projects, update repository URLs, or live demo URLs.
- `experienceData`: Add new roles or internships.
- `achievementsData`: Add new hackathon milestones or certifications.

---

## 🌐 Free 1-Click Deployment

### Deploy to Vercel
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**.

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com).
2. Connect your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.
