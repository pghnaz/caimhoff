/**
 * @file Defines a filter for stripping non-numeric characters from a string
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An 11ty univeral filter
 * @module includes/filter/numberfy
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filter/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * Strip all non-numeric characters from a string
	 * @method
	 * @name Numberfy
	 * @param {string} text (e.g., a phone number)
	 * @return {string} numberified text (e.g., '5555555555')
	 * @example `${this.numberfy('(555) 555-5555')}`
	 */
	eleventyConfig.addFilter('numberfy', function (text) {
		return text.toString().toLowerCase().trim()
			.replace(/\D/g,'')
	})

}
