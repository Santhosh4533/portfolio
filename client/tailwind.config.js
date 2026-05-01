/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0C0C0C',
        surface: '#1F1F1F',
        accent: '#FF5500',
        accent2: '#FF7733',
        muted: 'rgba(255,255,255,0.4)',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"DM Serif Display"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
    },
  },
  plugins: [],
};
