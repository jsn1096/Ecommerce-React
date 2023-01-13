/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      padding: '1.5rem',
      
    }, 
    extend: {
      width: {
        '50p': '65px',
        '360': '360px',
        '500': '420px'
      },
      height: {
        '40': '40px'
      },
      maxWidth: {
        '140': '1200px'
      },
      backgroundColor: {
        'bg-button': '#0F172A'
      }
    },
    fontFamily: {
      'sens': "'Work Sans', sans-serif",
      'cascadia': '"CascadiaCode"'
    }
  },
  plugins: [],
}

