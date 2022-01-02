module.exports = {
	mode: 'jit',
	content: ['./index.html', './partials/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#972354',
				secondary: '#141B2D',
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
