import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  theme: {
    fontFamily: {
      mono: ["Vazir Code", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
