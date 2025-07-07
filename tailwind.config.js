/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'montserrat': ['Montserrat'],
				'lato': ['Lato'],
				'garamond': ['Garamond']
			},
			colors: {
				"primary": "#FF6A00",
				"structure-elements": "#0d0d0d",
				"app-bg": "#11152e",
				"text": "#e8e8e8",
			},
			spacing:{
				
			}
		}
	},

	plugins: []
};
