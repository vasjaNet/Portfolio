# Portfolio

A modern, responsive portfolio website for a Senior Java Developer built with React, TypeScript, Vite, and Tailwind CSS.

![Portfolio Preview](./public/preview.png)

## Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive**: Fully responsive layout for all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Sections**:
  - Hero with animated background
  - About Me
  - Work Experience (timeline)
  - Featured Projects
  - Technical Skills
  - Contact
- **Performance**: Optimized build with Vite
- **SEO Ready**: Meta tags and semantic HTML

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vasyl/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

This project includes a GitHub Actions workflow for automatic deployment.

1. Go to your repository Settings → Pages
2. Select "GitHub Actions" as the source
3. Push to the `main` branch
4. The workflow will automatically build and deploy

Your site will be available at: `https://vasyl.github.io/Portfolio/`

## Project Structure

```
portfolio/
├── .github/           # GitHub Actions workflow
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── layout/   # Layout components (Header, Footer, Section)
│   │   ├── sections/ # Page sections
│   │   └── ui/       # UI components (Button, Card, Badge)
│   ├── data/         # Portfolio content data
│   ├── hooks/        # Custom React hooks
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main app component
│   ├── main.tsx      # Entry point
│   └── index.css     # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

Edit the content in `src/data/portfolio.ts` to personalize:

- Personal information
- About section content
- Work experience
- Projects
- Skills
- Contact details

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this template for your own portfolio.

---

Built with ❤️ by Vasyl
