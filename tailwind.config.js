/** @type {import('tailwindcss').Config} */
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
      animation: {
        scrollIndicate: "scrollIndicateKey 2.5s ease-out infinite",
        splashContainer: "splashContainerKey 0.3s ease-out 2.3s forwards",
        splashLogoName: "splashLogoNameKey 1.6s ease-out forwards",
        splashLogo: "splashLogoKey 1.6s ease-in-out forwards",
      },
      keyframes: {
        scrollIndicateKey: {
          "0%, 80%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
          "10%, 60%": {
            transform: "translateY(-20%)",
          },
          "65%": {
            transform: "translateY(0%)",
          },
          "70%": {
            transform: "translateY(-10%)",
          },
          "100%": {
            opacity: 0,
          },
        },
        splashContainerKey: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
        splashLogoNameKey: {
          "0%": {
            opacity: 0,
          },
          "79%": {
            opacity: 0,
            transform: "translateX(40px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        splashLogoKey: {
          "0%": {
            opacity: 0,
            transform: "translateX(-14px) scale(0)",
          },
          "20%": {
            opacity: 0,
            transform: "translateX(-14px) scale(0)",
          },
          "28%": {
            opacity: 1,
            transform: "translateX(-14px) scale(1.2)",
          },
          "38%": {
            opacity: 1,
            transform: "translateX(-14px) scale(1)",
          },
          "60%": {
            transform: "translateX(-14px) rotate(0)",
          },
          "100%": {
            transform: "translateX(-103px) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
