/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        variant: "var(--variant)",
        mute: "var(--mute)",
        shade: "var(--shade)",
        secondary: "var(--secondary)",
        secondary_variant: "var(--secondary_variant)",
      },
      borderRadius: {
        "4xl": "4rem",
      },
    },
  },
  plugins: [],
};
