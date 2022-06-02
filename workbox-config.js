module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,js,png,gif,jpg,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};