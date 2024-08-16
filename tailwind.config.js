/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./output/index.html"],
  theme: {
    extend: {
      height: {
        '32': '50px', // Override the default h-32 with 50px
      },
    },
  },
  plugins: [],
};
