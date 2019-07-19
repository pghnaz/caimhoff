/**
 * @file Minify JavaScript files
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * Mihai Bazon’s JavaScript optimizer module
 * @see {@link https://github.com/mishoo/UglifyJS2/tree/harmony GitHub repo}
 */
var UglifyJS = require('uglify-es')

/**
 * Expose the configuration to 11ty as a function
 * @module .eleventy
 * @param 11ty’s config argument
 * @see {@link https://www.11ty.io/docs/config/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * Minify a stringified version of a JavaScript file
	 * @param {string} code A raw script
	 * @return {string} The minified script
	 * @example	`${this.minifyJS($this.fileToString('./src/includes/assets/js/district-map.js'))}`
	 */
	eleventyConfig.addFilter("minifyJS", function (code) {
			var minified = UglifyJS.minify(code)
		if (minified.error) {
			console.log("UglifyJS error: ", minified.error)
			return code
		}
		return minified.code
	})
}
