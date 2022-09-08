/* https://tailwindcss.com/docs/guides/nextjs */

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      scale: {
        97: '0.97',
      },
      'max-w': {
        3: '0.75rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
