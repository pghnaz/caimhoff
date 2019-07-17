/**
 * @file Defines a shortcode to load social media metadat into the `<head>`
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An 11ty univeral shortcode
 * @module includes/shortcode/social-meta
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filters/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * OpenGraph and Twitter metadata with fallbacks
	 * @method
	 * @name socialMeta
	 * @example `${this.socialMeta(data)}`
	 * @param {Object} data - Template data
	 * @return {string} Composite HTML template literal
	 * @see {@link https://css-tricks.com/essential-meta-tags-social-media/ Adam Coti, “The Essential Meta Tags for Social Media,” _CSS-Tricks_ (updated December 21, 2016)}
	 */
	eleventyConfig.addShortcode('socialMeta', function (data) {
		var html = '';
		(data.title)
			? html += `
				<meta property="og:title" content="${data.title}">
				<meta name="twitter:title" content="${data.title}">
			`
			: html += `
				<meta property="og:title" content="${data.site.title}">
				<meta name="twitter:title" content="${data.site.title}">
			`;
		(data.description)
			? html += `
				<meta property="og:description" content="${data.description}">
				<meta property="twitter:description" content="${data.description}">
			`
			: html += `
				<meta property="og:description" content="${data.site.description}">
				<meta property="twitter:description" content="${data.site.description}">
			`;
		(data.thumbnail)
			? html += `
				<meta property="og:image" content="/assets/img/${data.thumbnail}">
				<meta name="twitter:image" content="/assets/img/${data.thumbnail}">
				<meta name="twitter:card" content="summary_large_image">
			`
			: html += `
				<meta property="og:image" content="/assets/img/headshot.jpg">
				<meta name="twitter:image" content="/assets/img/headshot.jpg">
				<meta name="twitter:card" content="summary_large_image">
			`
		html += `<meta property="og:url" content="${data.page.url}">`
		return html
	})

}
