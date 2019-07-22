/**
 * @file Defines the base template
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * The base JavaScript template layout
 * @module layouts/base
 * @param {Object} data The 11ty data object for a given URL
 * @return ${String} HTML
 * @see {@link https://www.11ty.io/docs/languages/javascript/ 11ty docs}
 */
module.exports = function (data) {
	return `<!DOCTYPE html>
	<html lang="en">
		${this.headTag(data)}
		<body class="grid no-margin ${data.page.fileSlug ? data.page.fileSlug : 'home'}">
			${this.siteHeader(data)}
			<main id="site_main" class="grid-column-content flex flex-column padding">
				${data.content}
			</main>
			${this.siteFooter(data)}
		</body>
	</html>
	`
}
