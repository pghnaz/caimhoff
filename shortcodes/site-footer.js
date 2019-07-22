/**
 * @file Defines a shortcode for the site footer area
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An 11ty univeral shortcode
 * @module includes/shortcode/site-footer
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filters/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * HTML `<footer>` markup.
	 * @method
	 * @name siteFooter
	 * @param {Object} data The 11ty `data` object
	 * @return {string} HTML template literal
	 * @example `${this.siteFooter(data)}`
	 */
	eleventyConfig.addShortcode('siteFooter', function (data) {
		return `
			<footer id="site_footer" class="grid grid-column-full-bleed medium less-padding align-items-center border-top gray background-gray">
				<div class="flex space-between">
					<p><a href="/copyright/">Copyright</a> &copy; ${data.site.copyright.year} by ${data.site.copyright.owner}</p>
					${this.socialLinks(data.site.social)}
				</div>
				<p class="flex flex-column justify-center align-items-center">
					<span class="logo gray">${this.fileToString(data.site.parentOrganization.logo)}</span>
					${this.siteTagline(data)}
				</p>
			</footer>
		`
	})

}
