/* https://tailwindcss.com/docs/guides/nextjs */

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      scale: {
        97: '0.97',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
