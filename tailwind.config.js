/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-background': 'url(/world-map.png)',
      },
      colors: {
        primary: '#590BD8',
        primaryLighter: '#DDD5EA',
        primaryDark: '#312A4F',
        grayPrimary: '#717171',
        graySecondary: '#BBBFBF',
      },
      textColor: {
        dark: '#717171',
        light: '#BBBFBF',
      },
      animation: {
        topIn: 'topIn .5s cubic-bezier(.48,.8,.61,.85) forwards',
      },
      keyframes: {
        topIn: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
