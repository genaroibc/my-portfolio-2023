/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "rgb(9 9 11)",
        light: "rgb(255 255 255)"
      },
      maxWidth: {
        "page-max-width": "1400px"
      }
    }
  },
  darkMode: "class",
  plugins: []
}
