# Deployment Guide: Puneet & Ritu Wedding Invitation

This guide provides clear instructions for deploying your wedding invitation website to Firebase Hosting.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your local machine:

1.  **Node.js & npm:** Download and install from [nodejs.org](https://nodejs.org/).
2.  **Firebase CLI:** Install it globally using npm:
    ```bash
    npm install -g firebase-tools
    ```

## 🚀 Deployment Steps

Follow these steps in your project's root directory:

### 1. Authentication
Log in to your Google account associated with Firebase:
```bash
firebase login
```

### 2. Initialize/Select Project
Set the active project for this directory (Your project ID is `puneetritu`):
```bash
firebase use puneetritu
```

### 3. Build the Application
This project is configured for **Static Site Export**. You must generate the static HTML/CSS/JS files before deploying:
```bash
npm run build
```
*This command creates an `out/` directory containing the final website files.*

### 4. Deploy to Firebase
Upload the contents of the `out/` folder to Firebase Hosting:
```bash
firebase deploy --only hosting
```

Once finished, your site will be live at:
**[https://puneetritu.web.app/](https://puneetritu.web.app/)**

---

## 🛠️ Troubleshooting & Common Issues

### "Could not determine the web framework in use"
This occurs if the Firebase CLI doesn't recognize the project structure. Ensure your `firebase.json` explicitly points to the `out` directory:
```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

### Hydration Mismatch Errors
If the build fails or the site looks broken after deployment:
1.  **Check Dynamic Data:** Ensure any code using `new Date()` or `Math.random()` is wrapped in a `useEffect` hook.
2.  **Browser APIs:** Do not use `window` or `document` outside of `useEffect`.
3.  **Static Export:** The `next.config.ts` must have `output: 'export'` for Firebase Hosting to work without a custom server.

### Local Preview
To test exactly what will be deployed, you can use the Firebase emulator:
```bash
firebase serve --only hosting
```
