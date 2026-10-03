# Deployment Guide

This guide provides instructions for deploying the wedding invitation to Firebase Hosting.

## 🚀 Deployment Steps

### 1. Build the Application
Ensure you have the latest static files generated:
```bash
npm run build
```
*Output will be generated in the `out/` directory.*

### 2. Firebase Setup
Ensure you are logged in and using the correct project:
```bash
firebase login
firebase use puneetritu
```

### 3. Deploy
Upload the `out/` folder contents:
```bash
firebase deploy --only hosting
```

## ⚠️ Important Notes
- **Static Export:** The site uses `next export`. Do not use server-side features like `getServerSideProps`.
- **Image Optimization:** Since this is a static export, `next/image` is used with `unoptimized: true` in `next.config.ts`.
- **Public Folder:** Ensure audio files like `shehnai.mp3` are present in the `public/` directory before building.
