/**
 * @file Defines a shortcode for adding a link to edit this page on GitHub
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An 11ty univeral shortcode
 * @module includes/shortcode/edit-this-page
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filters/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * A link to edit this page on GitHub
	 * @method
	 * @name titleTag
	 * @param {Object} data The 11ty `data` object
	 * @param {string} editLinkText Alternate link text (optional)
	 * @return {string} HTML template literal
	 * @example `${this.editThisPage(data, 'Improve this page')}`
	 */
	eleventyConfig.addShortcode('editThisPage', function (data, editLinkText) {
		return `
			<a class="edit-link" href="${data.site.repository}${data.page.inputPath}">
				${editLinkText && typeof editLinkText === 'string'
					? `${editLinkText}`
					: 'Edit this page'
				}
			</a>
		`
	})

}
