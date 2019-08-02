/**
 * @file Defines a filter for converting strings to URL slugs
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An 11ty univeral filter
 * @module includes/filter/slugify
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filter/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * Convert a string to a slug
	 * @method
	 * @name Slugify
	 * @param {string} text to convert to a slug
	 * @return {string} slugified text
	 * @example `${this.slugify('Slugify me')}`
	 */
	eleventyConfig.addFilter('slugify', function (text) {
		return text.toString().toLowerCase().trim()
				.replace(/\s+/g, '-')
				.replace(/\-\-+/g, '-')
	})

}
