# Modern Portfolio v2

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://megam1n4.github.io/portfolio/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-61DAFB?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

A high-performance, aesthetically refined portfolio engine designed for academics and engineers. Built with a focus on motion design, glassmorphism, and a seamless data-driven architecture.

---

## ✨ Key Features

- **🌓 Dynamic Theming**: Full support for Dark and Light modes with persistent user preference.
- **🚀 Performance Optimized**: Built using Next.js App Router and optimized for Static Site Generation (SSG).
- **🎭 Motion Design**: Smooth reveal animations and sequential transitions powered by Framer Motion.
- **🌊 Fluid UX**: Integrated Lenis for high-end smooth scrolling experiences.
- **📱 Fully Responsive**: Meticulously crafted for all screen sizes, from mobile to ultra-wide displays.
- **🛠 Data-Driven Architecture**: Manage your entire portfolio through a single TypeScript configuration file.

## 🛠️ Tech Stack & Tools

### Frontend Core
- **Next.js 16 (App Router)**: For robust routing and server/client component architecture.
- **React 19**: Leveraged for modern hook patterns and performance.
- **TypeScript**: Ensuring type safety across the entire data schema.

### Styling & Motion
- **Tailwind CSS v4**: Utilizing the latest CSS-first engine for ultra-lightweight styling.
- **Framer Motion**: Orchestrating complex entrance and scroll-based animations.
- **Lucide React**: A clean, consistent iconography system.

### Optimization & Utilities
- **Lenis**: Industry-standard smooth scrolling library.
- **Next Themes**: Reliable theme switching with system detection.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm / yarn / pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/megam1n4/portfolio.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📂 Project Structure

```text
├── app/               # Next.js App Router (Layouts & Pages)
├── components/        # Reusable UI components (Navbar, Hero, Cards)
├── lib/               # Business logic & Data configuration
│   └── data.ts        # Primary source of truth for portfolio content
├── public/            # Static assets (Images, Resume, Icons)
└── styles/            # Global styling and Tailwind configuration
```

---

## ⚡ Quick Personalization

If you've cloned this repository and want to make it your own in under 2 minutes:

1.  **Update Content**: Open `lib/data.ts` and replace the values in the `resumeData` object with your own information (experience, education, links, etc.).
2.  **Replace Profile Photo**: Drop your portrait into `/public/images/profile.jpg` (ensure the filename remains exactly `profile.jpg`).
3.  **Upload Resume**: Replace `/public/resume.pdf` with your actual CV (ensure the filename remains exactly `resume.pdf`).
4.  **Deploy**: Your changes will be live as soon as you push to your configured branch.

---

## ⚙️ Advanced Customization

This project follows a **Configuration-as-Data** pattern. To go beyond basic updates:

1.  **Dynamic UI Adaptation**: The UI components are built to automatically adapt to the length and structure of your `data.ts`. No manual JSX editing is required for list items or sections.
2.  **Global Theming**: Modify the `theme` object in `lib/data.ts` to adjust primary/secondary HSL colors globally across both dark and light modes.
3.  **Smooth Scroll & Motion**: Animation durations and scroll speeds can be fine-tuned in the individual component files (e.g., `components/Hero.tsx` or `app/layout.tsx`).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/megam1n4">megam1n4</a>
</p>
