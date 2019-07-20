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
		<body>
			<header id="site_header">
				${data.page.url === '/'
					? `<h1>${data.site.title}</h1>`
					: `<a href="/"><h1>${data.site.title}</h1></a>`
				}
				${this.callToAction(data)}
			</header>
			${data.content}
			<footer id="site_footer">
				<p>${this.editThisPage(data)}</p>
				<p><a href="/copyright/">Copyright</a> &copy; ${data.site.copyright.year} by ${data.site.copyright.owner}</p>
				<p>${this.siteTagline(data)}</p>
			</footer>
		</body>
	</html>
	`
}
