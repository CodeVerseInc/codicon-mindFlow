import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'bg-gray': '#f2f2f2', // Brackground page
				'text-logo': '#509755',
				'color-tex-pr': '#8591A4',
				'color-text-name-profile': '#73B577',
				'color-box': '#73B577',
				'color-box-secundary': '#509755',
				'color-separator': '#AEAEAE',
				'color-icon': '#5F5F5F',
				'gray-button': '#D9D9D9',
				'bg-dark': '#121212',
				'bg-green-dark': '#325E36',
				'bg-card-dark': '#595959',
				'tom-thumb': {
					'50': '#f5f9f4', // Lightest - used for backgrounds, borders etc.
					'100': '#e5f3e6', // Lighter
					'200': '#cce6cd', // Light
					'300': '#a3d2a6', // Light-Medium
					'400': '#73b577', // Medium
					'500': '#509755', // Medium-Dark - good for readable text
					'600': '#3d7c41', // Dark
					'700': '#336237', // Darker
					'800': '#305633', // Darkest - used for text or backgrounds
					'900': '#264129', // Extra Dark
					'950': '#102312' // Extra Dark - used for text or backgrounds
				}
			}
		}
	},
	plugins: []
}

export default config
