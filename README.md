# K Wilbur Donovan — Portfolio Website

A fast personal portfolio website designed for **K Wilbur Donovan**, Test Automation Engineer, highlighting expertise in software testing, quality engineering, UI/UX design, and web development.

Built strictly against verified resume facts without fabricated metrics, testimonials, or technologies.

---

## 🚀 Key Features

- **Domain-Specific Automation Simulation**: An interactive Test Pipeline visualizer simulating real-world execution of test suites on the **iCargo** enterprise application (Air France-KLM Martinair Cargo) using **Java**, **Selenium WebDriver**, **TestNG**, and **RapidBotz**.
- **Dark / Light Mode**: Clean SaaS aesthetic with persistent local theme switching and system preference auto-detection.
- **Enterprise Experience Timeline**: Spotlight on **IBS Software** (Test Solutions Engineer) alongside web engineering and design internships at **NodDesk** and **Zidio Development**.
- **Accurate Project Cards**: Clean technical showcases of *Online RPG (2024)*, *Pay-Equity (2023)*, and *Medicare (2022)* with direct links to Wilbur's GitHub profile.
- **Direct CV Integration**: Accessible, downloadable PDF resume served directly from `/public/K_Wilbur_Donovan_Updated_CV.pdf`.
- **Responsive & Accessible**: Semantic HTML5, keyboard navigation (`Skip to main content`), WCAG-compliant color contrast, active scroll spy, mobile drawer menu, and `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Inter & JetBrains Mono
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVGs

---

## 💻 Running Locally

### Prerequisites
- Node.js (v18 or higher recommended; tested on v22.18.0)
- npm (v10+; on Windows PowerShell, use `npm.cmd` if `.ps1` script execution is restricted)

### 1. Install Dependencies
```bash
npm install
# or on Windows PowerShell:
npm.cmd install
```

### 2. Start Development Server
```bash
npm run dev
# or on Windows PowerShell:
npm.cmd run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
# or on Windows PowerShell:
npm.cmd run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
# or on Windows PowerShell:
npm.cmd run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub under [github.com/Citizen2405](https://github.com/Citizen2405).
2. Go to [vercel.com](https://vercel.com/) and import the repository.
3. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [netlify.com](https://netlify.com/).
2. Set Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/<repo-name>/'` (or `'/'` if using `<username>.github.io`).
2. Add the `gh-pages` package: `npm install -D gh-pages`
3. Add deploy script to `package.json`: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

---

## 📁 Content Customization

All portfolio content is centralized in a single configuration file:
```
src/data/portfolio-data.ts
```
To update contact information, new test frameworks, or additional projects in the future, simply update the values in `portfolio-data.ts`.
