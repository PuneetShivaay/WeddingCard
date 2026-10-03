"use client";
import { useEffect, useState } from 'react';

const FloralBackground = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        // Render a simple background on the server to avoid hydration mismatch
        return (
            <div
                className="pointer-events-none fixed inset-0 -z-10"
                style={{ backgroundColor: "hsl(28 67% 95%)" }}
            />
        );
    }

    // This code now only runs on the client
    const accentColor = "hsl(45 62% 52%)";
    const bgColor = "hsl(28 67% 95%)";

    const svgPattern = `
        <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'>
            <g fill='${accentColor}' fill-opacity='0.08'>
                <path d='M50 0 C55 15, 65 15, 70 0 L85 15 C70 20, 70 30, 85 35 L70 50 C65 35, 55 35, 50 50 C45 35, 35 35, 30 50 L15 35 C30 30, 30 20, 15 15 L30 0 C35 15, 45 15, 50 0 Z' transform='translate(0 25) scale(0.5)'/>
                <path d='M50 0 C55 15, 65 15, 70 0 L85 15 C70 20, 70 30, 85 35 L70 50 C65 35, 55 35, 50 50 C45 35, 35 35, 30 50 L15 35 C30 30, 30 20, 15 15 L30 0 C35 15, 45 15, 50 0 Z' transform='translate(50 75) scale(0.5)'/>
            </g>
        </svg>
    `;

    const encodedSvg = window.encodeURIComponent(svgPattern);

    const backgroundStyle = {
      backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
      backgroundColor: bgColor,
    };

    return (
        <div
            className="pointer-events-none fixed inset-0 -z-10 animate-float"
            style={backgroundStyle}
        />
    );
};

export default FloralBackground;
