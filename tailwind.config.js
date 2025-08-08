module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'], // Scan your src/ files for Tailwind classes
  theme: {
    extend: {
      fontFamily: {
        dyna: ['"DynaPuff"', 'system-ui'], // Add custom font as 'font-dyna'
      },
    },
  },
  plugins: [],
};
