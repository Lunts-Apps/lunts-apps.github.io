# Bitsquid Website

A professional, multilingual React website for Bitsquid, featuring their college dating app Lunts. Built with modern technologies and best practices.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Multilingual Support**: English, Spanish, and French with URL-based routing
- **Professional Design**: Custom Bitsquid/Lunts branding
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Hover effects, transitions, and interactive elements
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Styled Components with custom theme system
- **Routing**: React Router v6 with language-based routing
- **Internationalization**: react-i18next with language detection
- **Icons**: FontAwesome (Free)
- **Typography**: League Spartan (Google Fonts)
- **Email**: EmailJS for contact form
- **Development**: VS Code with custom orange theme

## 📁 Project Structure

```
bitsquid-website/
├── public/
│   ├── app-ads.txt              # Google AdSense verification
│   └── favicon.svg              # Custom Bitsquid favicon
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx       # Navigation with language switching
│   │   │   └── footer.tsx       # Footer with social links
│   │   └── ui/
│   │       └── carousel.tsx     # Interactive carousel component
│   ├── i18n/
│   │   ├── index.ts             # i18n configuration
│   │   └── locales/
│   │       ├── en.json          # English translations
│   │       ├── es.json          # Spanish translations
│   │       └── fr.json          # French translations
│   ├── pages/
│   │   ├── home.tsx             # Homepage with carousel
│   │   ├── products.tsx         # Products overview
│   │   ├── jobs.tsx             # Jobs page with animations
│   │   ├── contact.tsx          # Contact form with EmailJS
│   │   └── lunts/
│   │       ├── lunts-page.tsx   # Main Lunts page
│   │       ├── privacy-policy.tsx
│   │       └── terms-conditions.tsx
│   ├── styles/
│   │   └── global-styles.ts     # Global styles and theme
│   ├── App.tsx                  # Main app component
│   └── main.tsx                 # Entry point
├── .vscode/
│   └── settings.json            # VS Code orange theme
└── package.json
```

## 🎨 Design System

### Brand Colors

**Bitsquid Colors:**
- Primary: Obsidian Black `#0B0C10`
- Secondary: Midnight Indigo `#1F2A44`
- Accent 1: Neon Violet `#9B5DE5`
- Accent 2: Cyber Red `#FF4B5C`
- Neutral: Ash Gray `#B0B3C2`
- Contrast: Crystal White `#F9F9F9`

**Lunts Colors:**
- Primary: Sunset Orange `#FF6F4A`
- Secondary: Jade Green `#489B7D`
- Secondary Dark: Emerald Green `#008F68`
- Accent: Soft Coral `#FFAA99`
- Text: Charcoal Gray `#333333`
- Background: Ivory White `#FAFAF9`

### Typography
- **Font Family**: League Spartan (Google Fonts)
- **Weights**: 100-900 available
- **Usage**: Clean, modern sans-serif for all text

## 🌐 Internationalization

The website supports three languages with URL-based routing:

- **English** (default): `/en/`
- **Spanish**: `/es/`
- **French**: `/fr/`

All content, including navigation, forms, legal pages, and UI elements, is fully translated.

## 📱 Pages & Routes

### Main Routes
- `/` → Redirects to `/en`
- `/:lang/` → Homepage
- `/:lang/products` → Products overview
- `/:lang/products/lunts` → Lunts app page
- `/:lang/jobs` → Career opportunities
- `/:lang/contact` → Contact form

### Lunts-Specific Routes
- `/:lang/products/lunts/privacy-policy` → Privacy policy
- `/:lang/products/lunts/terms-and-conditions` → Terms and conditions

### Special Files
- `/app-ads.txt` → Google AdSense verification file

## 🚀 Getting Started

### Prerequisites
- Node.js v22.18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bitsquid-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy in gh-pages of GitHub
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📧 Email Configuration

The contact form uses EmailJS for sending emails. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `src/pages/contact.tsx`:
   ```typescript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message,
       to_email: 'bitsquidcorp@gmail.com'
     },
     'YOUR_PUBLIC_KEY'
   );
   ```

## 🎯 Key Features

### Navigation
- Fixed navbar that changes color on Lunts pages
- Dropdown menu for products
- Language selector with full names
- Mobile-responsive hamburger menu

### Homepage
- Hero section with animated background
- Interactive carousel with 3 slides
- Feature cards with hover animations
- About section

### Products Page
- Large Lunts showcase section
- Feature highlights
- Download buttons for app stores
- Video presentation links (language-specific)

### Lunts Pages
- Custom orange branding
- Lunts logo integration
- Download sections
- Legal pages (Privacy Policy, Terms & Conditions)

### Contact Page
- Professional contact form
- Company information cards
- EmailJS integration
- Form validation

### Jobs Page
- Animated "no positions available" message
- Floating icons with animations
- Contact information

## 🔧 Development

### VS Code Configuration
The project includes a custom VS Code theme with orange accents:
```json
{
  "workbench.colorCustomizations": {
    "titleBar.activeBackground": "#ff6f4a",
    "titleBar.activeForeground": "#ffffff",
    "activityBar.background": "#ff6f4a",
    "statusBar.background": "#ff6f4a",
    "statusBar.noFolderBackground": "#ff6f4a",
    "notificationCenterHeader.background": "#ff6f4a"
  },
  "workbench.colorTheme": "Default Dark+"
}
```

### File Naming Convention
- All files use `kebab-case` naming
- Components use PascalCase for the actual component names
- Consistent structure across all files

## 🌟 Best Practices

- **Clean Code**: Well-organized, commented, and maintainable
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and semantic HTML
- **SEO**: Proper meta tags and structured data

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components adapt gracefully to different screen sizes.

## 🔗 External Links

### Lunts App
- **Google Play**: https://play.google.com/store/apps/details?id=com.bitsquid.lunts
- **App Store**: https://www.apple.com/app-store/

### Video Presentations
- **English**: https://www.youtube.com/watch?v=0jSEvBaDDZ8
- **Spanish**: https://www.youtube.com/watch?v=8kgAXmBIuTY
- **French**: https://www.youtube.com/watch?v=eLoWZNH3YSc

### Social Media
- **Instagram**: https://www.instagram.com/luntsapp

## 📞 Contact Information

### Bitsquid
- **Email**: bitsquidcorp@gmail.com
- **NIT**: 901713594

### Lunts
- **Email**: lunts.info@gmail.com

## 📄 License

This project is proprietary software owned by Bitsquid Corp.

## 🤝 Contributing

This is a private project. For any questions or suggestions, please contact the development team.

---

**Built with ❤️ by the Bitsquid team**
