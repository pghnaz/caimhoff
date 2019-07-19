/**
 * @file Defines a shortcode to load a favicon for the user’s platform
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An 11ty univeral shortcode
 * @module includes/shortcode/favicon
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filters/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * Load the appropriate favicon
	 * @method
	 * @name favicon
	 * @example `${this.favicon(data)}`
	 * @return {string} HTML template literal
	 * @see {@link https://realfavicongenerator.net/ Favicon Generator}
	 */
	eleventyConfig.addShortcode('favicon', function () {
		return `
			<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
			<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
			<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
			<link rel="manifest" href="/favicons/site.webmanifest">
			<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#101820">
			<link rel="shortcut icon" href="/favicons/favicon.ico">
			<meta name="msapplication-TileColor" content="#ffb612">
			<meta name="msapplication-config" content="/favicons/browserconfig.xml">
			<meta name="theme-color" content="#101820">`
	})

}
