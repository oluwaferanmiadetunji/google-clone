module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		maxWidth: {
			584: '584px',
		},
		borderWidth: {
			1: '1px',
		},
		extend: {
			spacing: {
				600: '600px',
			},
		},
		backgroundColor: (theme) => ({
			...theme('colors'),
			button: '#f8f9fa',
			footer: '#f2f2f2',
			signin: '#1a73e8',
		}),
		textColor: {
			primary: '#3c4043',
			button: '#3c4043',
			anchor: '#1a0dab',
			footer: 'rgba(0,0,0,.54)',
			white: '#fff',
		},
		height: {
			header: '8vh',
			main: '80vh',
			footer: '12vh',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
