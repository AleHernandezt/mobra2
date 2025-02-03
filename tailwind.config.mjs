/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            animation: {
                "loop-scroll": "loop-scroll 10s linear infinite",
                "loop-scroll-reverse": "loop-scroll-reverse 10s linear infinite",
                "slideInRight": "slideInRight 0.5s ease-in-out",
                "slideOutRight": "slideOutRight 0.5s ease-in-out",
            },
            keyframes: {
                "loop-scroll": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                "loop-scroll-reverse": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" },
                },
                "slideInRight": {
                    "0%": { transform: "translateX(100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                "slideOutRight": {
                    "0%": { transform: "translateX(0)", opacity: "1" },
                    "100%": { transform: "translateX(100%)", opacity: "0" },
                },
            },
        },
    },
    plugins: [],
};
