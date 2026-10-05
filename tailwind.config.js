/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffbf70',
          400: '#ff9a38',
          500: '#ff7d12',
          600: '#f06108',
          700: '#c74909',
          800: '#9e3b10',
          900: '#7f3211',
        },
        ocean: {
          50: '#eff8ff',
          100: '#dceffd',
          200: '#b1dffc',
          300: '#6ec6f9',
          400: '#23a7f3',
          500: '#0b8ce0',
          600: '#026fbd',
          700: '#055a99',
          800: '#0a4c7f',
          900: '#0e4069',
        },
        cream: '#fdf8f0',
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
