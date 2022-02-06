const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("kutty"),
    require('@tailwindcss/forms'),
  ],
  theme: {
    
    extend: {
      colors: {
        primary: {
          light: "#93C5FD", // For lighter primary color
          DEFAULT: "#2563EB", // Normal primary color
          dark: "#1E40AF", // Used for hover, active, etc.
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
    },
  },
}
