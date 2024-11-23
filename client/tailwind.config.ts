import type { Config } from 'tailwindcss'

const config: Config = {
    prefix: "tw-",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config
