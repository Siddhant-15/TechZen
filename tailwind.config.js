module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#F0F4F8',
        gray: '#BAC7CC',
        teal: '#56B2BB',
        darkBlue: '#1D2233',
        darkerBlue: '#0A0F22',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        body: ['Roboto', 'sans-serif'],
        heading: ['Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
