/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#070812',
        night: '#101124',
        deck: '#17182f',
        line: '#2b2f55',
        mist: '#dce3f7',
        pulse: '#2f8cff',
        coral: '#ff6b6b',
        cyan: '#66e5ff',
        vinyl: '#9fdcff',
      },
      fontFamily: {
        display: ['Righteous', 'ui-sans-serif', 'system-ui'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 44px rgba(47, 140, 255, 0.28)',
        device: '0 30px 90px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
};
