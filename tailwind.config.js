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
      keyframes: {
        "scale-up-tr": {
          "0%": {
            transform: "scale(0.5)",
            "transform-origin": "100% 0%",
          },
          "100%": {
            transform: "scale(1)",
            "transform-origin": "100% 0%",
          },
        },
      },
      animation: {
        grow: "scale-up-tr 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both",
      },
    },
  },
  plugins: [],
};
