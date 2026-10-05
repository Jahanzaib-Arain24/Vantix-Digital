# 🤝 Contributing to Vantix Digital

First off, thank you for considering contributing to **Vantix Digital**! It's people like you that make modern web engineering so exciting.

---

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful and welcoming environment for everyone. Please treat contributors and community members with respect and professionalism.

---

## 🛠️ Development Workflow

1. **Fork the Repository**
   - Click the **Fork** button at the top right of the GitHub repository.

2. **Clone your Fork locally**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Vantix-Digital.git
   cd Vantix-Digital
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Make Your Changes & Test**
   - Follow clean TypeScript & React component practices.
   - Maintain mobile-first responsive layout design.
   - Adhere to the Tailwind CSS design system tokens.

7. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat(ui): add new interactive case study modal"
   ```

8. **Push to Your Branch**
   ```bash
   git push origin feature/your-feature-name
   ```

9. **Submit a Pull Request**
   - Open a PR against the `main` or `master` branch with a clear summary of your changes.

---

## 📐 Coding Standards & Guidelines

- **TypeScript**: Strict typing without `any` where possible.
- **Component Architecture**: Keep UI components modular, reusable, and cleanly organized under `src/components/`.
- **Styling**: Use utility classes with Tailwind CSS and CSS custom properties in `globals.css`.
- **Data Centralization**: All static content, pricing tiers, and portfolio case studies must reside in `src/data/siteData.ts`.
- **Assets**: Optimize images in WebP/PNG format before placing them in `public/`.

---

## 🐛 Reporting Bugs

If you find a bug:
1. Open an issue on GitHub.
2. Provide a clear, descriptive title.
3. Describe the steps to reproduce the issue.
4. Include screenshots and environment details (Browser, OS, Screen Size).

---

## 💡 Feature Suggestions

We welcome new feature proposals! Please submit an issue with:
- The problem you want to solve.
- Your proposed solution or user interface mockup.
- How it enhances the modern digital agency experience.

---

## 👤 Author & Support

Maintained by **Muhammad Jahanzaib** ([@Jahanzaib-Arain24](https://github.com/Jahanzaib-Arain24)).
For inquiries, reach out via [hello.vantixdigital@gmail.com](mailto:hello.vantixdigital@gmail.com).
