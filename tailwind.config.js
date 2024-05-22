/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#997428',
          300: '#A3722A',
          200: '#3F2305',
        },
      },
      keyframes: {
        backInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-2000px) scale(0.7)',
          },
          '80%': {
            opacity: '0.7',
            transform: 'translateY(0px) scale(0.7)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px) scale(1)',
          },
        },
        backInTop: {
          '0%': {
            opacity: '0',
            transform: 'translateY(2000px) scale(0.7)',
          },
          '80%': {
            opacity: '0.7',
            transform: 'translateY(0px) scale(0.7)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px) scale(1)',
          },
        },
        backInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-2000px) scale(0.7)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-in-out',
      },
    },
  },
}