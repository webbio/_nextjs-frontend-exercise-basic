/** @type {import("prettier").Config} */
const config = {
	plugins: [require.resolve('prettier-plugin-tailwindcss')],
	printWidth: 120,
	singleQuote: true,
	semi: true,
	bracketSameLine: false,
	useTabs: true,
	tabWidth: 2,
	trailingComma: 'none',
	endOfLine: 'auto'
};

module.exports = config;
