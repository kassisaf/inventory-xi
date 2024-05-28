const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './out/**/*.{js,ts,jsx,tsx}',
    //'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    './node_modules/@nextui-org/theme/dist/components/table.js',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
}
