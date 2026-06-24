/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gray: {
          50: '#0a0a0a',
          100: '#141414',
          200: '#1a1a1a',
          300: '#262626',
          400: '#404040',
          500: '#525252',
          600: '#737373',
          700: '#a3a3a3',
          800: '#d4d4d4',
          900: '#ffffff',
        },
        green: {
          50: '#0d1f0d',
          100: '#1a331a',
          200: '#264d26',
          300: '#338033',
          400: '#40bf40',
          500: '#00ff00', // Neon green
          600: '#00e600',
          700: '#00cc00',
          800: '#00b300',
          900: '#009900',
        },
        primary: {
          50: '#0d1f0d',
          100: '#1a331a',
          200: '#264d26',
          300: '#338033',
          400: '#40bf40',
          500: '#00ff00', // Neon green
          600: '#00e600',
          700: '#00cc00',
          800: '#00b300',
          900: '#009900',
        },
        accent: {
          50: '#0d1f0d',
          100: '#1a331a',
          200: '#264d26',
          300: '#338033',
          400: '#40bf40',
          500: '#00ff00', // Neon green
          600: '#00e600',
          700: '#00cc00',
          800: '#00b300',
          900: '#009900',
        },
      },
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'Monaco', 'monospace'],
        'kanit': ['Kanit', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-glow': 'neonGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        neonGlow: {
          '0%': {
            'text-shadow': '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00',
          },
          '100%': {
            'text-shadow': '0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00, 0 0 50px #00ff00',
          }
        }
      },
      boxShadow: {
        'neon': '0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 60px #00ff00',
        'neon-green': '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
      }
    },
  },
  plugins: [],
}
