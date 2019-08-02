/**
 * @file Defines the nested template for content in markdown files
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
			<article>
				${data.title
					? `<header>
						<h1>${data.title}</h1>
					</header>`
					: ''
				}
				${data.image
					? `<figure class="float-left margin-right padding-right" style="max-width:33ch;">
							${this.fileToString(data.image)}
						</figure>`
					: ''
				}
				${data.content}
				<footer class="small">
					<p>${this.editThisPage(data)}</p>
				</footer>
			</article>
		`
	}

}

module.exports = Content
