# Kogeros Website

A booking website for apartments and studios in Corfu, Greece.

## 🌐 Live Website

Once this PR is merged to the main branch, the website will be automatically deployed to GitHub Pages at:
`https://theokrok77.github.io/kogeros_website/`

## 🚀 GitHub Pages Deployment

This website is configured to deploy automatically to GitHub Pages using GitHub Actions.

### How it works:

1. **Workflow**: The `.github/workflows/deploy.yml` file contains a GitHub Actions workflow that:
   - Triggers on pushes to the `main` or `master` branch
   - Can also be triggered manually via workflow_dispatch
   - Uploads the website files to GitHub Pages
   - Deploys the site automatically

2. **Permissions**: The workflow has the necessary permissions:
   - `contents: read` - to read the repository files
   - `pages: write` - to deploy to GitHub Pages
   - `id-token: write` - for authentication

3. **Setup Required** (One-time):
   - After merging this PR, go to repository **Settings** → **Pages**
   - Under "Build and deployment", select **Source**: "GitHub Actions"
   - The website will be live at `https://theokrok77.github.io/kogeros_website/`

## 📁 Website Structure

- `index.html` - Main website page
- `styles.css` - Stylesheet for the website
- `script.js` - JavaScript for interactive features
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

## ✨ Features

- Responsive design that works on desktop and mobile
- Three apartment types with details
- Location information
- Contact form
- Smooth scrolling navigation
- Modern, professional design

## 🛠️ Local Development

To run the website locally:

```bash
# Start a simple HTTP server
python3 -m http.server 8000

# Or use Node.js
npx http-server

# Or use PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📝 Customization

To customize the website:

1. Edit `index.html` to change content, add more apartments, or modify structure
2. Edit `styles.css` to change colors, fonts, and layout
3. Edit `script.js` to add more interactive features

## 📧 Contact Form

The contact form currently shows an alert message. For production use, you'll want to:
- Integrate with a backend service (e.g., Formspree, EmailJS)
- Set up server-side email handling
- Add form validation

## 🎨 Design

The website features:
- Blue and purple gradient color scheme
- Clean, modern layout
- Card-based apartment displays
- Responsive grid layouts
- Smooth animations and transitions
