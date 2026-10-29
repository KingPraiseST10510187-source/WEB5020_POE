# Greenfield United Football Club Website

**Student Number:** ST10510187  
**Module:** DISD1  
**Project:** Multi-page website for a community football club  

## Description

This repository contains the complete website for **Greenfield United Football Club (GUFC)**, a community-based soccer club based in Johannesburg. The site allows visitors to learn about the club, view teams and services, register players, submit enquiries, browse a photo gallery, and contact the club.

## Live Demo

*(Add your Netlify / GitHub Pages URL here after deployment)*

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `home.html` | Welcome, video, dynamic news |
| About Us | `about.html` | History, mission, vision, values (accordion), committee, facilities |
| Services | `services.html` | Teams with search/filter, sponsorship packages |
| Enquiry | `enquiry.html` | Player registration & sponsorship/volunteer enquiry form |
| Gallery | `gallery.html` | Photo gallery with lightbox |
| Contact | `contact.html` | Contact details, interactive Leaflet map, contact form |

## Features (Part 3)

### JavaScript Functionality
- Mobile hamburger navigation menu
- Active page highlighting in the navigation
- Back-to-top button
- Gallery lightbox (click to enlarge, close with × / background / Escape)
- Accordion on the About page
- Live search/filter for teams on the Services page
- Dynamic news content loading on the Home page
- Client-side form validation with custom error messages
- AJAX-style form submission simulation with success feedback
- Contact form prepares a `mailto:` link after validation

### SEO
- Unique title tags and meta descriptions on every page
- Relevant keywords meta tags
- Semantic HTML5 structure (`header`, `nav`, `main`, `footer`, `article`)
- Descriptive image `alt` attributes
- Canonical URLs
- Internal linking throughout the site
- Mobile-friendly responsive design
- `robots.txt` and `sitemap.xml`
- Skip-to-content accessibility link

### Forms
- **enquiry.html** – Registration / sponsorship / volunteer enquiries with contextual response messages
- **contact.html** – General messages with mailto integration

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Media Queries, Transitions)
- Vanilla JavaScript (ES6)
- Google Maps embed (interactive map)

## Folder Structure

```
GREENFIELD UNITED FOOTBALL CLUB/
├── CSS/
│   └── style.css
├── Documents/
│   ├── Proposal.docx
│   ├── Updates.docx          (Part 2)
│   └── Part3_Updates.docx
├── Images/
│   ├── Logo.jpg
│   ├── img1.jpg … img6.jpg
│   └── Download.mp4
├── JScript/
│   └── main.js
├── about.html
├── contact.html
├── enquiry.html
├── gallery.html
├── home.html
├── services.html
├── robots.txt
├── sitemap.xml
└── README.md
```

## Changelog

### Part 3 – 29 October 2026

**New Features**
- Added external JavaScript file (`JScript/main.js`) with full interactivity
- Implemented mobile hamburger menu with animation
- Added gallery lightbox modal
- Created accordion component on About page
- Added live search/filter for teams on Services page
- Implemented dynamic news loading on Home page
- Built client-side form validation for enquiry and contact forms
- Simulated AJAX form submission with loading state and success messages
- Integrated Google Maps embed on Contact page
- Added Back-to-Top button

**SEO Improvements**
- Added unique `<title>`, meta description, keywords, author and robots tags to all pages
- Added canonical links
- Improved image alt texts to be descriptive
- Created `robots.txt` and `sitemap.xml`
- Added semantic landmarks and skip-to-content link
- Ensured full mobile responsiveness

**Structural Changes**
- Created dedicated `enquiry.html` page (as required by brief)
- Updated navigation across all pages to include Enquiry link
- Cleaned remaining inline styles
- Added viewport meta tag and charset to all pages
- Improved footer with internal links

**Part 2 Feedback / General Improvements**
- (No specific Part 2 feedback document was available)
- Removed remaining inline styles from Gallery page
- Standardised navigation and footer across all pages
- Improved colour contrast and focus states
- Ensured consistent heading hierarchy (single H1 per page)

### Part 2 – September 2026
- Moved all styling to external stylesheet `CSS/style.css`
- Applied forest green + gold colour scheme
- Implemented sticky header and responsive design (media query ≤ 600px)
- Styled forms, tables, gallery figures and video

### Part 1 – Initial HTML structure
- Created five core pages with basic content and navigation

## How to Run Locally

1. Clone or download this repository
2. Open `home.html` in a modern web browser  
   (or use a local server such as Live Server in VS Code)

## Deployment

The site is ready for deployment on:
- **GitHub Pages**
- **Netlify** (drag-and-drop the project folder)
- Any static hosting provider

## References

- W3Schools – HTML, CSS & JavaScript Tutorials  
- MDN Web Docs – JavaScript Guide & CSS Reference  
- Class notes (DISD1) – Responsive Design, DOM Manipulation, Form Validation, SEO

---

**ST10510187** | DISD1 | Greenfield United Football Club
