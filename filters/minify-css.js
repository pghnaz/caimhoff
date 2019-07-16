/**
 * @file Minify CSS files
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * Jakub Pawlowicz’s CSS optimizer module
 * @see {@link https://github.com/jakubpawlowicz/clean-css GitHub repo}
 */
var CleanCSS = require('clean-css')

/**
 * Expose the configuration to 11ty as a function
 * @module .eleventy
 * @param 11ty’s config argument
 * @see {@link https://www.11ty.io/docs/config/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * Minify a stringified version of a Cascading Style Sheet
	 * @param {string} stylesheet A raw stylesheet
	 * @return {string} The minified stylesheet
	 * @example	`${this.minifyCSS($this.fileToString('./src/includes/assets/css/inline.css'))}`
	 * @see {@link https://github.com/jakubpawlowicz/clean-css#minify-method Package author README on GitHub}
	 */
	eleventyConfig.addFilter("minifyCSS", function (stylesheet) {
		return minified = new CleanCSS({}).minify(stylesheet).styles
	})

}
