/**
 * @file A filter to convert a file’s contents to a single string
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * Node’s native file system module
 * @see {@link https://nodejs.org/api/fs.html Node.js docs}
 */
var fs = require('fs')

/**
 * An 11ty filter
 * @module includes/filters/file-to-string
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filters/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * Converts a file’s contents to a string.
	 * @param {string} file Path of the file to convert (relative to input)
	 * @return {string} Stringified version of target file’s contents
	 * @example	`${this.fileToString('includes/assets/css/inline.css')}`
	 */
	eleventyConfig.addFilter('fileToString', function (file) {
		return fs.readFileSync(`src/${file}`).toString()
	})

}
