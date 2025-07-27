/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
  animation: {
    fadeIn: 'fadeIn 1s ease-out forwards',
    fadeUp: 'fadeUp 1s ease-out forwards',
    zoomIn: 'zoomIn 0.8s ease-out forwards',
      slide: 'slide 10s linear infinite',
  },
  keyframes: {
     slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    fadeUp: {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    zoomIn: {
      '0%': { opacity: '0', transform: 'scale(0.95)' },
      '100%': { opacity: '1', transform: 'scale(1)' },
    },
  },
},

  },
  plugins: [],
}

