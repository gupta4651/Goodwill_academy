# Goodwill Academy Website - Technical Specification

## Project Overview

**Project Name:** Goodwill Academy Website
**Type:** Educational Institution Website (Academy/Coaching Classes)
**Core Functionality:** Professional website for Goodwill Academy - a coaching center in Nagpur offering JEE, MHCET, XI-XII Science, GATE, and other competitive exam preparations.
**Target Users:** Students (Class 8-12), parents, competitive exam aspirants, working professionals seeking skill development

---

## 1. Visual & Rendering Specification

### Design System

**Color Palette:**
- Primary: `#1E40AF` (Deep Blue - Trust, Education)
- Primary Light: `#3B82F6` (Bright Blue - CTAs)
- Secondary: `#059669` (Emerald Green - Success, Growth)
- Accent: `#F59E0B` (Amber - Highlights, CTAs)
- Background: `#F8FAFC` (Light Gray-White)
- Card Background: `#FFFFFF`
- Text Primary: `#1E293B` (Slate 800)
- Text Secondary: `#64748B` (Slate 500)
- Dark Section: `#0F172A` (Slate 900)

**Typography:**
- Headings: `Poppins` (Google Font) - Bold, Semi-bold weights
- Body: `Inter` (Google Font) - Regular, Medium weights
- Fallback: system-ui, sans-serif

**Spacing System:**
- Base unit: 4px
- Container max-width: 1280px
- Section padding: 80px (desktop), 48px (mobile)

### Layout Structure

1. **Sticky Header** - Logo, Navigation, CTA Button
2. **Hero Section** - Full-width, gradient overlay on background
3. **About Section** - Two-column layout (text + image)
4. **Courses Section** - Card grid (3 columns desktop, 1 mobile)
5. **Stats Section** - Dark background, counter animations
6. **Features Section** - Icon-based feature cards
7. **Testimonials** - Carousel/slider
8. **Contact Section** - Two-column (form + info)
9. **Footer** - Multi-column links, social icons, copyright

---

## 2. Business Information (Source: Justdial)

### Core Data
- **Business Name:** Goodwill Academy
- **Founded:** 2007
- **Rating:** 4.2 (17 Google reviews)
- **Phone:** +91 82378 12411
- **Email:** info@goodwillacademy.com

### Locations
1. **Main Branch:**
   - BUS STOP, Hingna Rd, Yashoda Nagar, Nagpur, Maharashtra 440022

2. **Hingna T Point Branch:**
   - Opposite Priyadarshini Girls Hostel
   - Hingna T Point, Hingna, Nagpur - 440016

### Operating Hours
- Monday - Friday: 7:00 AM - 9:00 PM
- Saturday - Sunday: 8:00 AM - 6:00 PM

---

## 3. Courses & Programs

| Course | Description | Target |
|--------|-------------|--------|
| **JEE + MHCET** | Comprehensive coaching for XI-XII with JEE Main/Advanced & MHCET preparation | Class 11, 12 students |
| **XI-XII Science** | Physics, Chemistry, Mathematics coaching for State Board/CBSE | Class 11, 12 students |
| **GATE Coaching** | Engineering & Polytechnic entrance preparation | Engineering students |
| **NEET Preparation** | Medical entrance exam coaching | Class 11, 12 students |
| **Math Tuition** | 11th & 12th Standard Mathematics | Class 11, 12 students |
| **Physics Tuition** | 11th Standard Physics Classes | Class 11 students |
| **Digital Marketing** | Industry-relevant digital skills training | Working professionals |
| **IT & Management** | Soft skills and vocational training | All levels |

### Fee Structure
- **Price Range:** Starting at ₹ 5,000
- **MHT CET Coaching:** ₹ 35,000/course
- **JEE Coaching:** ₹ 1,20,000/course

---

## 4. SEO Specification

### On-Page SEO Elements

**Meta Tags:**
```html
<title>Goodwill Academy | Best Coaching Classes for JEE, MHCET, XI-XII Science in Nagpur</title>
<meta name="description" content="Goodwill Academy - Top coaching institute in Nagpur since 2007. Expert coaching for JEE, MHCET, NEET, GATE, XI-XII Science. Phone: +91 82378 12411. Located at Hingna T Point.">
<meta name="keywords" content="coaching classes Nagpur, JEE coaching Nagpur, MHCET preparation, XI XII science classes, GATE coaching, best tuition classes, Goodwill Academy Nagpur">
```

**Open Graph Tags:**
```html
<meta property="og:title" content="Goodwill Academy - Premier Coaching Institute in Nagpur">
<meta property="og:description" content="Expert coaching for JEE, MHCET, NEET, GATE & XI-XII Science since 2007">
<meta property="og:type" content="website">
```

**Structured Data (JSON-LD):**
- LocalBusiness schema
- EducationalOrganization schema
- Course schema for each program
- FAQPage schema
- Review schema for testimonials

### Semantic HTML Structure
- Proper heading hierarchy (H1 > H2 > H3)
- Schema.org markup for educational organizations
- ARIA labels for accessibility
- Semantic landmarks: header, nav, main, section, article, footer

### Content SEO
- Target keywords: "coaching classes Nagpur", "JEE coaching Nagpur", "XI XII science Nagpur", "MHCET preparation", "GATE coaching Nagpur", "best tuition classes Hingna"
- Natural keyword density: 1-2% for primary keywords
- Long-tail keywords integrated naturally
- Local SEO optimization for Nagpur area

---

## 5. Technical Requirements

### Performance
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Lazy loading for images below the fold
- Responsive images with srcset

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Sufficient color contrast ratios
- Alt text for all images
- Skip to content link

### Mobile Responsiveness
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Touch-friendly tap targets (min 44px)
- Collapsible mobile navigation
- Viewport meta tag configured

---

## 6. Component Specifications

### Header Component
- Logo with text
- Desktop: Horizontal navigation links
- Mobile: Hamburger menu with slide-out drawer
- Sticky on scroll with shadow
- CTA button: "Enquire Now"

### Hero Section
- Full-width background with gradient overlay
- H1 headline with main keyword
- Subheadline with value proposition
- Dual CTA buttons
- Trust badges (Rating, Students trained, Years experience)

### Course Cards
- Icon representation
- Course title (H3)
- Brief description
- "Learn More" link
- Hover animation (lift + shadow)

### Stats Counter
- Animated number counting
- Suffix (+, etc.)
- Label text below
- Dark background section

### Testimonial Slider
- Auto-play carousel
- Navigation dots
- Star rating display
- Quote text with attribution
- Avatar image

### Contact Form
- Fields: Name, Email, Phone, Course Interest (dropdown), Message
- Client-side validation
- Submit button with loading state
- Success/error feedback

### Footer
- 4-column layout (logo+about, quick links, courses, contact)
- Social media icons
- Google Maps embed
- Copyright text

---

## 7. File Structure

```
goodwill-academy/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Courses.tsx
│   │   ├── Stats.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── content.ts
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## 8. Implementation Notes

1. All images use high-quality stock education imagery
2. Icons from Lucide React library
3. Smooth scroll behavior
4. Form validation before submission
5. Mobile-first responsive design
6. Production build optimization with Vite
