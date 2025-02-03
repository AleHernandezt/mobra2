/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            animation: {
                "loop-scroll": "loop-scroll 10s linear infinite",
                "loop-scroll-reverse": "loop-scroll-reverse 10s linear infinite",
                "fadeOut": "fadeOut 0.5s ease-in-out",
                "fadeIn": "fadeIn 0.5s ease-in-out",
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
                "fadeOut": {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
                "fadeIn": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};
