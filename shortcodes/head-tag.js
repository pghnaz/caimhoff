/**
 * @file Defines a shortcode to load the `<head>` tag into an HTML document
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An 11ty univeral shortcode
 * @module includes/shortcode/head-tag
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filters/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * HTML `<head>` markup.
	 * @method
	 * @name htmlHead
	 * @param {Object} data The 11ty `data` object
	 * @return {string} HTML template literal
	 * @example `${this.headTag(data)}`
	 */
	eleventyConfig.addShortcode('headTag', function (data) {
		return `
			<head>
				${this.titleTag(data)}
				${this.favicon()}
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				${this.socialMeta(data)}
				<style>
					${this.minifyCSS(this.fileToString('/includes/assets/css/inline.css'))}
				</style>
			</head>
		`
	})

}
