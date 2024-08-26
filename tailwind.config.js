/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      height: {
        '32': '50px', // Override the default h-32 with 50px
      },
    },
  },
  plugins: [],
};
