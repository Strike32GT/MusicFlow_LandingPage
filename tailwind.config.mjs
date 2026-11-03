/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1224',
        canvas: '#FBFDFF',
        soft: '#F2F7FF',
        deck: '#FFFFFF',
        line: '#DCE6F4',
        mist: '#475569',
        pulse: '#176BEE',
        coral: '#E5484D',
        cyan: '#0284C7',
        vinyl: '#6D5DFB',
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 18px 50px rgba(23, 107, 238, 0.22)',
        card: '0 18px 55px rgba(49, 83, 141, 0.10)',
        device: '0 34px 90px rgba(21, 58, 118, 0.18)',
      },
    },
  },
  plugins: [],
};
