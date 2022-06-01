module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,js,less,txt,yml,json,scss,svg,ttf,woff2,png,gif,jpg,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};