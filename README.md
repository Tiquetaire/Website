# Tiquetaire Website

Beautiful, modern website for Tiquetaire - the open-source NFC card reader for public transport in Tarragona, Girona, and Lleida.

## 🌐 Features

- **Multilingual Support**: Available in Catalan, Spanish, and English
- **Modern Design**: Dark theme with glassmorphism effects and smooth animations
- **Responsive**: Fully optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Complete metadata, Open Graph tags, and semantic HTML
- **Brand Colors**: Uses the official Tiquetaire color scheme from the MAUI app

## 🎨 Design System

The website uses the official Tiquetaire color palette:

- **Primary**: `#F28C00` - Main brand orange
- **Primary Dark**: `#CE4D02` - Darker orange for gradients
- **Secondary**: `#DAC400` - Accent yellow
- **Tertiary**: `#2B0B98` - Deep purple
- **Background**: Dark theme with `#0A0A0F` base

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm or bun package manager

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start the development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create an optimized production build
npm run build
# or
bun run build

# Start the production server
npm start
# or
bun start
```

## 📁 Project Structure

```
tiquetaire-web/
├── src/
│   └── app/
│       ├── globals.css          # Global styles and design system
│       ├── layout.tsx            # Root layout with metadata
│       ├── page.tsx              # Main page component
│       ├── page.module.css       # Page-specific styles
│       └── translations.ts       # Multilingual content
├── public/                       # Static assets
├── package.json
└── README.md
```

## 🌍 Supported Languages

- **Catalan (ca)** - Default language
- **Spanish (es)**
- **English (en)**

The language switcher is located in the top-right corner of the navigation bar.

## 🎯 Sections

1. **Hero**: Eye-catching introduction with app preview
2. **Features**: Six key features with icons and descriptions
3. **How It Works**: Three-step guide to using the app
4. **Motivation**: Background story of the project
5. **Download**: Links to GitHub and future Google Play release
6. **Footer**: Additional information and disclaimer

## 🔗 Links

- **GitHub Repository**: [krosk93/ATMCTReader](https://github.com/krosk93/ATMCTReader)
- **Author**: Òscar Rovira
- **License**: MIT

## 📱 Mobile Optimization

The website is fully responsive with special optimizations for mobile devices:

- Fixed language switcher on mobile (bottom-right corner)
- Optimized touch targets
- Simplified navigation
- Responsive typography and spacing

## 🎨 Design Highlights

- **Glassmorphism**: Frosted glass effects on cards and modals
- **Smooth Animations**: Fade-in, float, and glow effects
- **Gradient Backgrounds**: Dynamic color gradients throughout
- **Custom Scrollbar**: Branded scrollbar matching the color scheme
- **Micro-interactions**: Hover effects and button animations

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + Global CSS
- **Font**: Inter (Google Fonts)
- **Build Tool**: Turbopack (Next.js default)

## 📄 License

This project is open source under the MIT License.

## ⚠️ Disclaimer

This website is not official and has no affiliation with the Territorial Mobility Authorities (ATM) of Tarragona, Girona, or Lleida.

---

Developed with ❤️ by Òscar Rovira
