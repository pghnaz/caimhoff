/**
 * @file Defines a shortcode for displaying a call to action link
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An 11ty univeral shortcode
 * @module includes/shortcode/call-to-action
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filters/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * Call to action link markup from data in front matter or data/site.json
	 * @method
	 * @name titleTag
	 * @param {Object} data The 11ty `data` object
	 * @return {string} HTML template literal
	 * @example `${this.callToAction(data)}`
	 */
	eleventyConfig.addShortcode('callToAction', function (data) {

		var classes = [
			'call-to-action',
			'bold',
			'border-radius',
			'more-margin',
			'padding',
			'text-center'
		]

		var html = ''

		var mapArray = (arr, joiner) =>
			arr.map(item => item)
				.join (joiner
					? `${joiner}`
					: ' '
				)

		// If there is no separate call to action,
		// then don’t include the site call to action on that same page
		if(!data.callToAction && (data.site.callToAction.link === data.page.url)) {
			return html
		}

		// Use this page’s call to action, otherwise use the site’s
		data.callToAction && data.callToAction.link && data.callToAction.text
			? html = `
				<a class="${mapArray(classes)}" href="${data.callToAction.link}">
					<span>${data.callToAction.text}</span>
				</a>
			`
			: html = `
				<a class="${mapArray(classes)}" href="${data.site.callToAction.link}">
					<span>${data.site.callToAction.text}</span>
				</a>
			`
		return html

	})

}
