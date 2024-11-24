import type { Config } from 'tailwindcss'

const config: Config = {
    prefix: "tw-",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            obsidianPink: "#ff50da",
            background: "#101b41",
        },
        extend: {
            fontFamily: {
                header: ["Megabomb", "sans-serif"],
            },

        },
    },
    plugins: [],
}

export default config
