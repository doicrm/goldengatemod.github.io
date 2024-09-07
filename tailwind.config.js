/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gg2-first-header': "url('./src/assets/images/goldengate2/.webp')"
      }
    }
  },
  plugins: []
}
