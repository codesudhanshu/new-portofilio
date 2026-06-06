import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4EF',
        ink: '#18181A',
        vermilion: '#E8472A',
        gold: '#F4B942',
        muted: '#EDEAE4',
        canvas: '#0F0E0D',
      },
      fontFamily: {
        display: ['var(--font-sans)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        skeletonPulse: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.85' },
        },
        underlineDraw: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        sweepRight: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'skeleton-pulse': 'skeletonPulse 1.6s ease-in-out infinite',
        'underline-draw': 'underlineDraw 1.4s cubic-bezier(0.65, 0, 0.35, 1) 0.4s forwards',
        'sweep-right': 'sweepRight 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards',
      },
    },
  },
  plugins: [],
}

export default config
