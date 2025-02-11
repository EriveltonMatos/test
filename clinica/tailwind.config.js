/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html", "./node_modules/primereact/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
		fontSize: {
			'1vh': '1vh',
			'2vh': '2vh',
			'3vh': '3vh',
			'4vh': '4vh',
			'5vh': '5vh',
			'6vh': '6vh',
			'7vh': '7vh',
			'8vh': '8vh',
			'9vh': '9vh',
			'10vh': '10vh',
		  },
  		keyframes: {
  			updown: {
  				'0%, 100%': {
  					transform: 'translateY(0) scale(0.85)'
  				},
  				'50%': {
  					transform: 'translateY(40px) scale(0.85)'
  				}
  			},
  			downup: {
  				'0%, 100%': {
  					transform: 'translateY(0) scale(0.75)'
  				},
  				'50%': {
  					transform: 'translateY(-40px) scale(0.75)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'spin-slow': 'spin 3s linear infinite',
  			'updown-slow': 'updown 3s ease-in-out infinite',
  			'downup-slow': 'downup 3s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		fontFamily: {
  			yeseva: ['Yeseva One', 'sans-serif']
  		},
  		colors: {
  			principal: '#004AAD'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('tailwindcss-animated'),
      require("tailwindcss-animate")
],
}

