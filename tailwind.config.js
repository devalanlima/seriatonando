/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                color_primary: 'rgb(var(--color-primary) / <alpha-value>)',
                color_secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
                color_terciary: 'rgb(var(--color-terciary) / <alpha-value>)',
                color_dark: 'rgb(var(--color-dark) / <alpha-value>)',
                color_light: 'rgb(var(--color-light) / <alpha-value>)',
                color_success: 'rgb(var(--color-success) / <alpha-value>)',
                color_danger: 'rgb(var(--color-danger) / <alpha-value>)',
                color_neutral: 'rgb(var(--color-neutral) / <alpha-value>)',
            }
        },
    },
    plugins: [],
}