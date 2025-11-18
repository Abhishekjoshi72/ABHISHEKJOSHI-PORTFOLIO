/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 0px rgba(0, 255, 200, 0.0)' },
          '50%': { boxShadow: '0 0 12px rgba(0, 255, 200, 0.5)' },
          '100%': { boxShadow: '0 0 0px rgba(0, 255, 200, 0.0)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

