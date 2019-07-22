/**
 * @file Defines a shortcode for the site header area
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An 11ty univeral shortcode
 * @module includes/shortcode/site-header
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filters/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * HTML `<header>` markup.
	 * @method
	 * @name siteHeader
	 * @param {Object} data The 11ty `data` object
	 * @return {string} HTML template literal
	 * @example `${this.siteHeader(data)}`
	 */
	eleventyConfig.addShortcode('siteHeader', function (data) {
		return `
			<header id="site_header" class="flex flex-wrap align-items-center grid-column-full-bleed xx-large">
				${data.site.logo && data.page.url === '/'
					? `<span class="logo flex">${this.fileToString(data.site.logo)}</span>`
					: data.page.url === '/'
						? `<h1>${data.site.title}</h1>`
						: data.site.logo
							? `<a href="/"><span class="logo flex">${this.fileToString(data.site.logo)}</span></a>`
							: `<a href="/"><h1>${data.site.title}</h1></a>`
				}
				${this.callToAction(data)}
			</header>
		`
	})

}
