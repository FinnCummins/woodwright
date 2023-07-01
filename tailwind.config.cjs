/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'title-color': '#654321',
        		'body-color': '#333333',
        		'cta-color': '#006400',
				'woodwright-green': '#398378',
				'woodwright-green-light': '#5accbb'
			},
			fontFamily: {
				'serif': ['Merriweather', 'serif'],
				'sans': ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
