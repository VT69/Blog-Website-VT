/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5f9',
          100: '#f5e6f2',
          200: '#eacde6',
          300: '#daa7d3',
          400: '#c779b7',
          500: '#b6599c',
          600: '#a24484',
          700: '#88346c',
          800: '#722e59',
          900: '#612b4b',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '600',
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};