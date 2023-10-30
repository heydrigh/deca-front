import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				'dex-gray': '#292728',
				primary: '#DBC79A',
				hover: '#C5B2A5',
				inputGray: '#383637',
			},
			textColor: {
				primary: '#DBC79A',
				darkGray: '#595959',
				placeholder: '#817763',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}
export default config
