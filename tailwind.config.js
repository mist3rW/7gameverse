/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#3ad8f0',
        theme: {
          dark: '#010116',
          medium: '#0f0f2b',
          light: '#1e1e3f',
        },
        text: {
          primary: '#fafafa',
          secondary: '#999999',
        },
      },
    },
  },
  plugins: [],
};
