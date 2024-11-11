/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      lightBlue: colors.sky,   // Change lightBlue to sky
      warmGray: colors.stone,  // Change warmGray to stone
      trueGray: colors.neutral, // Change trueGray to neutral
      coolGray: colors.gray,    // Change coolGray to gray
      blueGray: colors.slate,   // Change blueGray to slate
      
    },
  },
  plugins: [],
};

