/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       screens: {
        // 'xs': '480px',      // extra small
        'sm': '320px',     // custom small
        // 'tablet': '768px',  // alias
        // 'laptop': '1024px',
        // 'desktop': '1280px',
        // '2xl': '1536px',
        // You can also use max-width breakpoints
        // 'max-md': {'max': '768px'},
      }
    },
  },
  plugins: [],
}

