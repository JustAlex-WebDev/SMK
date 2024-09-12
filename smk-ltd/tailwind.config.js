/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url(/hero-image.jpg)",
        "secondary-image": "url(/secondary-image.jpg)",
      },
    },
  },
  plugins: [],
};
