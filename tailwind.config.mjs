/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'youtube': '#FF0000',
				'soundcloud-1': '#FF5500',
				'soundcloud-2': '#F59117',
				'instagram-1' : '#B70EEC',
				'instagram-2' : '#FD0F7B',
				'facebook-1' : '#1BA7FB',
				'facebook-2' : '#0C71E6',
				'reddit-1' : '#EE1725',
				'reddit-2' : '#FF7216',

			}
		},
	},
	plugins: [],
}
