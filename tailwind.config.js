const colors = require('tailwindcss/colors')
module.exports = {
  content: [    
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      terminal: '#66FF66',
      green: colors.green,
      blue: colors.blue,
      slate: colors.slate
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require("@tailwindcss/typography")
  ],
}
