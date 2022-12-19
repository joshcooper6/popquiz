/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer")
]
}
