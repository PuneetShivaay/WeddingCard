# Deployment Guide: Puneet & Ritu Wedding Invitation

This guide provides clear instructions for deploying your wedding invitation website to Firebase Hosting.

## 🚀 Quick Start: Deployment Commands

Run these in your terminal:

```bash
npm run build
firebase login
firebase use puneetritu
firebase deploy --only hosting
```

## 📋 Prerequisites

Before you begin, ensure you have:
1.  **Node.js & npm** installed.
2.  **Firebase CLI** installed: `npm install -g firebase-tools`

## 🛠️ Troubleshooting

### "Could not find 'out' directory"
Ensure you ran `npm run build` before trying to deploy. The `out` folder is only created during the build process.

### Changes not reflecting?
1. Run `npm run build` again to generate new static files.
2. Run `firebase deploy` to upload the new files.
3. Refresh your browser (or use Ctrl+F5 to clear cache).

### Hydration Mismatch Errors
If the site looks broken after deployment, ensure that any code using `new Date()` is wrapped in the `useEffect` pattern found in `countdown-timer.tsx`.

---
Live Site: **[https://puneetritu.web.app/](https://puneetritu.web.app/)**
