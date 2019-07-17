/**
 * @file Defines a shortcode for displaying the site tagline
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An 11ty univeral shortcode
 * @module includes/filters/site-tagline
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filters/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * Tagline shortcode markup.
	 * @method
	 * @name siteTagline
	 * @param {Object} data - The 11ty `data` object
	 * @return {string} HTML template literal
	 * @example `${this.siteTagline(data)}`
	 */
	eleventyConfig.addShortcode('siteTagline', function (data) {
		if (data.site.tagline) {
			return `
				<span class="tagline">${data.site.tagline}</span>
			`
		}
	})

}

