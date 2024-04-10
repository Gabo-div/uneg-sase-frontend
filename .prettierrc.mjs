/** @type {import("prettier").Config} */
export default {
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: false,
	quoteProps: "as-needed",
	jsxSingleQuote: false,
	trailingComma: "all",
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: "always",
	rangeStart: 0,
	rangeEnd: Infinity,
	endOfLine: "lf",
	plugins: ["prettier-plugin-tailwindcss"],
};
