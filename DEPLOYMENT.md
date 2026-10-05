# 🚀 Production Deployment Guide — Vantix Digital

This document provides step-by-step instructions for deploying the **Vantix Digital** modern Next.js 16 web application across various hosting platforms.

---

## 📑 Table of Contents
- [Option 1: Vercel (Recommended)](#option-1-vercel-recommended)
- [Option 2: Netlify](#option-2-netlify)
- [Option 3: Custom Node.js Server / Hostinger VPS (PM2)](#option-3-custom-nodejs-server--hostinger-vps-pm2)
- [Option 4: Docker Containerization](#option-4-docker-containerization)
- [⚙️ Environment Configuration](#️-environment-configuration)
- [🔍 Post-Deployment Verification](#-post-deployment-verification)

---

## Option 1: Vercel (Recommended)

Vercel is the native platform for Next.js and offers zero-configuration automated CI/CD deployments.

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "chore: prepare for production release"
   git push origin master
   ```

2. **Connect to Vercel**:
   - Navigate to [Vercel Dashboard](https://vercel.com/dashboard).
   - Click **Add New...** ➔ **Project**.
   - Import your `Vantix-Digital` repository.

3. **Configure Project Settings**:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./` (or `Vantix Digital Next JS` if in a subfolder)
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

4. Click **Deploy**. Your site will be live on a global Edge CDN in less than 60 seconds with automatic SSL.

---

## Option 2: Netlify

1. Log in to [Netlify](https://app.netlify.com/).
2. Click **Add new site** ➔ **Import an existing project**.
3. Authorize GitHub and select your repository.
4. Set Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Netlify will automatically detect the `@netlify/plugin-nextjs` plugin and deploy the site.

---

## Option 3: Custom Node.js Server / Hostinger VPS (PM2)

For deploying on Ubuntu/Debian Linux VPS using PM2 process manager and Nginx reverse proxy:

### 1. Server Setup
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x or 22.x LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git nginx

# Install PM2 globally
sudo npm install -g pm2
```

### 2. Clone and Build Project
```bash
# Clone repository
cd /var/www
sudo git clone https://github.com/Jahanzaib-Arain24/Vantix-Digital.git vantix
cd vantix

# Install dependencies & build production bundle
sudo npm install
sudo npm run build
```

### 3. Start with PM2
```bash
pm2 start npm --name "vantix-digital" -- start -- -p 3000
pm2 save
pm2 startup
```

### 4. Configure Nginx Reverse Proxy
Create `/etc/nginx/sites-available/vantixdigital.com`:
```nginx
server {
    listen 80;
    server_name vantixdigital.com www.vantixdigital.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable site & reload Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/vantixdigital.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Install Free SSL via Certbot
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d vantixdigital.com -d www.vantixdigital.com
```

---

## Option 4: Docker Containerization

Create a `Dockerfile` for containerized deployments:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

---

## ⚙️ Environment Configuration

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Production canonical URL | `https://vantixdigital.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Contact WhatsApp number | `447840179553` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Official contact email | `hello.vantixdigital@gmail.com` |

---

## 🔍 Post-Deployment Verification

After deploying, verify the following checklist:
- [ ] Core Web Vitals score 95+ on Google PageSpeed Insights.
- [ ] OpenGraph metadata and `/Header.png` image preview render correctly on LinkedIn & Twitter.
- [ ] Direct WhatsApp buttons trigger correct contact link with pre-filled message.
- [ ] Contact form budget selector matches active selected service.
- [ ] Portfolio modals open with rich 4–6 paragraph case studies and valid external links.
