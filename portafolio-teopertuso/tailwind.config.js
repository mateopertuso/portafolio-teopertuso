/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        bgPaths: {
          '0%': {
            transform: 'translateX(0px)',
            opacity: '0.15',
          },
          '50%': {
            transform: 'translateX(-280px)',
            opacity: '0.6',
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: '0.15',
          },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        fadeOutDown: 'fadeOutDown 0.3s ease-in forwards',
        'bg-paths': 'bgPaths 18s linear infinite',
      },
    },
  },
  plugins: [],
};
