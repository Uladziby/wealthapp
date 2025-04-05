export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "tw-animate-css",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("tw-animate-css")],
};
