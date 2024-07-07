/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {  
    keyframes: {
      wave: {
        '0%': { transform: 'rotate(0.0deg)', transformOrigin: '70% 70%' },
        '10%': { transform: 'rotate(14deg)', transformOrigin: '70% 70%' },
        '20%': { transform: 'rotate(-8deg)', transformOrigin: '70% 70%' },
        '30%': { transform: 'rotate(14deg)', transformOrigin: '70% 70%' },
        '40%': { transform: 'rotate(-4deg)', transformOrigin: '70% 70%' },
        '50%': { transform: 'rotate(10.0deg)', transformOrigin: '70% 70%' },
        '60%': { transform: 'rotate(0.0deg)', transformOrigin: '70% 70%' },
        '100%': { transform: 'rotate(0.0deg)', transformOrigin: '70% 70%' },
      },
      },
      animation: {
        'wave': 'wave 2s  infinite',
      },
      fontFamily: {
        protest: ["Protest Revolution", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
