# Puneet & Ritu Wedding Invitation

**GitHub Description:** A beautiful, responsive, and interactive digital wedding invitation for Puneet and Ritu, built with modern web technologies.

**Tags:** `wedding-invitation`, `nextjs`, `react`, `tailwind-css`, `shadcn-ui`, `digital-invite`, `responsive-design`, `interactive-ui`, `firebase-hosting`

---

## 🌟 Features

- **Interactive UI:** Smooth animations and a floral-themed aesthetic.
- **Event Counter:** Real-time counter showing time passed since (or time remaining until) the special day.
- **Event Details:** Clear information for Haldi & Mehandi, Wedding, and Reception ceremonies.
- **Location Integration:** Direct links to Google Maps for each venue.
- **Background Music:** Ambient shehnai music with play/pause controls.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.

## 🏗️ Architecture & Tech Stack

The application is built using the following technologies:

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- **Components:** [Shadcn UI](https://ui.shadcn.com/) for accessible and high-quality UI components.
- **Icons:** [Lucide React](https://lucide.dev/) for clean, consistent iconography.
- **Fonts:** [Google Fonts](https://fonts.googleapis.com/) (Playfair Display for headlines, PT Sans for body text).

### Core Components

- `src/app/page.tsx`: The main entry point and landing page.
- `src/components/countdown-timer.tsx`: Handles the event counter logic and ensures mobile responsiveness.
- `src/components/floral-background.tsx`: Manages the dynamic SVG background pattern.
- `src/components/music-player.tsx`: Controls the background audio experience.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm or yarn

### Local Development

1.  **Clone the repository.**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:9002](http://localhost:9002) in your browser.

## 📦 Deployment

This project is configured for static export to Firebase Hosting.

1.  **Build the project:**
    ```bash
    npm run build
    ```
    This command generates the static files in the `out/` directory.
2.  **Deploy to Firebase:**
    ```bash
    firebase deploy --only hosting
    ```

For detailed deployment steps and troubleshooting, please refer to [DEPLOYMENT_NOTES.md](./DEPLOYMENT_NOTES.md).

## 🛠️ Configuration

- `next.config.ts`: Configures the static export and image optimization settings.
- `tailwind.config.ts`: Defines custom theme colors, fonts, and animations.
- `src/app/globals.css`: Contains CSS variables for the color palette.
