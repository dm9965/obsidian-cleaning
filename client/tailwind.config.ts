import type { Config } from 'tailwindcss'

const config: Config = {
    prefix: "tw-",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "primary-orange": "#f16806",
            "primary-blue": "#1745b9",
            "primary-dark-blue": "#052d90",
            "primary-black": "#171717",
            "primary-white": "#dedede",
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
