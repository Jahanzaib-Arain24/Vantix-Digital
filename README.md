# Vantix Digital — Smart Digital Solutions for Modern Brands 🚀

A modern, high-performance agency website built using **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- ⚡ **Next.js App Router Architecture**: Fast server rendering & optimal Core Web Vitals.
- 📱 **Mobile-First Responsive Design**: Flawlessly optimized across **Mobile**, **Tablet**, **Laptop**, and **Desktop 4K**.
- 🎨 **Modern Agency Aesthetics**: Sleek dark theme, subtle emerald glows, glassmorphic cards, and smooth transitions.
- 💬 **Direct WhatsApp Integration**: Interactive inquiry form & floating live chat button directly connecting to WhatsApp.
- 📂 **Interactive Portfolio**: Categorized live client showcase with preview modals and direct Netlify links.
- 📝 **Insights & Blogs**: Modern blog section with quick-read article modals.
- ⚡ **1-Click Localhost Batch File**: Double-click `.bat` file to start the server and auto-open the browser.

---

## 📁 Folder Structure Explained

```text
Vantix Digital Next JS/
├── public/                 # Public static assets (Logos, banners, project screenshots, favicons)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root HTML structure, Google Fonts (Poppins & Cuprum), metadata
│   │   ├── page.tsx        # Main landing page assembling all components
│   │   └── globals.css     # Design tokens, emerald glow effects, custom scrollbar
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx      # Sticky glass header with mobile drawer
│   │   ├── Hero.tsx        # Hero banner with CTA & stats badges
│   │   ├── About.tsx       # Agency story, 8+ years badge & guarantees
│   │   ├── Services.tsx    # 6 core services with details modal
│   │   ├── Features.tsx    # 6 numbered agency benefits & guarantees
│   │   ├── Portfolio.tsx   # Categorized project gallery with live previews
│   │   ├── Blog.tsx        # 2026 industry news & articles
│   │   ├── Contact.tsx     # Direct inquiry form & WhatsApp integration
│   │   ├── Footer.tsx      # Newsletter, links, Manchester UK office info
│   │   ├── SocialIcons.tsx # Standalone SVG vectors for social media
│   │   ├── HowItWorksModal.tsx # 4-step agency workflow popup
│   │   └── WhatsAppFloat.tsx   # Floating pulse chat trigger
│   └── data/
│       └── siteData.ts     # Single source of truth for all content & links
├── Run-Website.bat         # 1-Click localhost launcher
└── package.json            # Project dependencies & scripts
```

---

## 🛠️ How to Run Locally

### Method 1: Using the 1-Click Batch File (.bat)
Simply double-click **`Run-Website.bat`** in the folder. It will start the server and open `http://localhost:3000` automatically.

### Method 2: Using Terminal
```bash
# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 How to Publish to GitHub & Deploy

1. Initialize git and commit:
```bash
git add .
git commit -m "feat: Vantix Digital Next.js modern agency website"
```

2. Link to your GitHub repo:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vantix-digital-nextjs.git
git push -u origin main
```

3. **Deploy on Vercel or Netlify**:
   - Go to [Vercel.com](https://vercel.com)
   - Click "Add New Project" -> Import your GitHub repository
   - Click **Deploy**! (Takes less than 60 seconds).

---

## 📄 License & Credits
© 2026 **Vantix Digital**. All Rights Reserved.
