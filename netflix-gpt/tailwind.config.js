/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-hide': {
        /* Hide scrollbars in WebKit browsers */
        '-webkit-overflow-scrolling': 'touch',
        'scrollbar-width': 'none', /* Hide scrollbar in Firefox */
        '-ms-overflow-style': 'none', /* Hide scrollbar in IE/Edge */
      },
      '.scrollbar-hide::-webkit-scrollbar': {
        display: 'none', /* Hide scrollbar in Chrome, Safari */
      },
    });
  },],
}

