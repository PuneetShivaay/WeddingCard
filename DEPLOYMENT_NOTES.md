# How to Deploy This Website

This file contains the instructions for deploying the wedding invitation website from your local terminal.

## Prerequisites

1.  **Node.js and npm:** Make sure you have Node.js and npm installed on your computer.
2.  **Firebase CLI:** You need the Firebase Command Line Interface (CLI) installed globally. If you don't have it, run this command in your terminal:
    ```bash
    npm install -g firebase-tools
    ```

## Deployment Steps

Follow these steps in your project's root directory every time you want to deploy updates.

### 1. Log in to Firebase
If you aren't already logged in, run:
```bash
firebase login
```
This will open a browser window for you to sign in to your Google account.

### 2. Select Your Firebase Project
Tell the Firebase CLI which project you want to deploy to. Your project ID is `puneetritu`.
```bash
firebase use puneetritu
```

### 3. Build Your Website
This command compiles your Next.js application into a set of static files in a folder named `out`. **You must run this command before every deployment.**
```bash
npm run build
```

### 4. Deploy to Firebase Hosting
This command uploads the built files (from the `out` folder) to your live website.
```bash
firebase deploy --only hosting
```

After the command finishes, your latest changes will be live at `https://puneetritu.web.app/`.

---

## Troubleshooting

### Error: "Could not determine the web framework in use"
This error happens if your `firebase.json` is not configured correctly for a static site deployment. Ensure the `hosting` section looks like this:
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
The key is `"public": "out"`. If it says `"source": "out"`, you will get this error.

### Error: "Build failed" or "Internal Server Error" during `npm run build`
This often indicates that some code is trying to use browser-only APIs (like `window` or `document`) during the server-side build process.

- **Check your components:** Look for any component that might be using these APIs.
- **Use `useEffect`:** The safest way to fix this is to wrap the browser-specific code in a `useEffect` hook with an empty dependency array (`[]`). This ensures the code only runs on the client-side after the component has mounted.
