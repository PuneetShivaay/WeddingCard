# Project Architecture

This document provides a technical overview of the Puneet & Ritu Wedding Invitation application.

## 🏗️ Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) - Utilizing React 18 for high-performance rendering.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - For utility-first, responsive design.
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) - Accessible and customizable components built on Radix UI.
- **Icons:** [Lucide React](https://lucide.dev/) - For clean, vector-based iconography.
- **Fonts:** [Google Fonts](https://fonts.googleapis.com/)
  - *Headline:* Playfair Display (Serif)
  - *Body:* PT Sans (Sans-serif)

## 📁 File Structure

- `src/app/`: Contains the main page layout and routing logic.
- `src/components/`: Reusable React components.
  - `countdown-timer.tsx`: Handles the event counter logic with hydration safety.
  - `floral-background.tsx`: Manages the dynamic SVG background pattern.
  - `music-player.tsx`: Custom audio controls for background shehnai.
- `src/lib/`: Utility functions and static data (e.g., placeholder images).
- `public/`: Static assets like images and audio files.

## 🛠️ Key Logic Patterns

### Hydration Safety
To prevent Next.js hydration mismatch errors caused by browser-specific APIs (like `new Date()`) or dynamic content (like `Math.random()`), we use a client-side mounting pattern:
```tsx
const [isClient, setIsClient] = useState(false);
useEffect(() => setIsClient(true), []);
if (!isClient) return <Placeholder />;
```

### Static Optimization
The project is configured for **Static Site Export** (`output: 'export'` in `next.config.ts`), making it ideal for low-cost, high-performance hosting on platforms like Firebase.
