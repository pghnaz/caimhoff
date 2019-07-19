/**
 * @file A filter to convert an object with objects into an array of objects
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An 11ty filter
 * @module includes/filters/array-from-object
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filters/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * Converts an object containing objects into an array of objects
	 * @param {Object} object containing objects
	 * @return {Array} array of objects
	 * @example	`${this.arrayFromObject(data.churches)}`
	 */
	eleventyConfig.addFilter('arrayFromObject', object =>
		Object.keys(object)
			.map(item => object[item])
	)

}
