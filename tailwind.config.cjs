const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './types/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: {
          red: '#8a1912',
          redLight: '#b73d2c',
          cream: '#f7efe2',
          wood: '#b87c52',
          green: '#496845',
          pastel: '#e8d6c2',
          dark: '#26201f'
        }
      },
      boxShadow: {
        card: '0 18px 60px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
};
