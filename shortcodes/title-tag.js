/**
 * @file Defines a shortcode for displaying the document title metadata
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An 11ty univeral shortcode
 * @module includes/shortcode/title-tag
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filters/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * HTML `<title>` markup
	 * @method
	 * @name titleTag
	 * @param {Object} data The 11ty `data` object
	 * @return {string} HTML template literal
	 * @example `${this.titleTag(data)}`
	 */
	eleventyConfig.addShortcode('titleTag', function (data) {
		if (data.site.tagline) {
			return `
				<title>
					${data.page.url === '/'
						? `${data.site.title}`
						: `${data.site.title} - ${data.title}`
					}
				</title>
			`
		}
	})

}
