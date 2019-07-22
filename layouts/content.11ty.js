/**
 * @file Defines the nested content template
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An Eleventy JavaScript template using classes and optional data method
 * @class
 * @see {@link https://www.11ty.io/docs/languages/javascript/#classes 11ty docs}
 * @see {@link https://www.11ty.io/docs/config/#directory-for-layouts-(optional) Optional 11ty layouts directory}
 */
class Content {

	data() {
		return {
			layout: '../includes/layouts/base' // relative to 11ty layouts
		}
	}

	render(data) {
		return `
			${data.title
				? `<header id="main_header">
					<h1>${data.title}</h1>
				</header>`
				: ''
			}
			${data.content}
			<footer class="small">
				<p>${this.editThisPage(data)}</p>
			</footer>
		`
	}

}

module.exports = Content
