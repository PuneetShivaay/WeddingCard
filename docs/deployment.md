# Deployment Guide

This guide provides instructions for deploying the wedding invitation to Firebase Hosting.

## 🚀 Quick Deploy (Terminal)

Run these commands in order from the root of your project:

```bash
# 1. Generate the static site (creates the 'out' folder)
npm run build

# 2. Authenticate with Firebase
firebase login

# 3. Select your project
firebase use puneetritu

# 4. Upload to Firebase Hosting
firebase deploy --only hosting
```

## 🛠️ Detailed Steps

### 1. Build the Application
This project uses Next.js **Static Site Export**. The `npm run build` command compiles your React code into standard HTML/CSS/JS files located in the `out/` directory.

### 2. Firebase Configuration
The `firebase.json` file is already configured to point to the `out/` directory:
```json
{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
```

### 3. Verification
Once the deployment is complete, the CLI will provide a "Hosting URL" (e.g., `https://puneetritu.web.app`). Visit this link to see your live site.

## ⚠️ Important Notes
- **Static Export:** The site uses `next export`. Do not use server-side features like `getServerSideProps` or dynamic API routes that require a Node.js server.
- **Image Optimization:** Since this is a static export, `next/image` is configured with `unoptimized: true` in `next.config.ts`.
- **Assets:** Ensure all audio and image files are in the `public/` directory before building.
