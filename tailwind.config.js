/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001145',
        gov: '#0943b5',
        cyan: '#0ff0fd',
        lima: '#85e501',
        papel: '#edecea',
        rey: '#001e7f',
      },
      fontFamily: {
        sans: ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        olo: '1920px',
      },
    },
  },
  plugins: [],
}
