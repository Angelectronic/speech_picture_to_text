/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'HomeMainFrame': 'calc(100vw - 250px)',
        'HomeMainFrameMobile': 'calc(100vw - 70px)',
      },
    },
  },
  plugins: [],
}

