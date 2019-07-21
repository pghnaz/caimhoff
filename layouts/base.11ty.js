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
			<header id="site_header" class="flex align-items-center grid-column-full-bleed space-between xx-large padding">
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
			<main id="site_main" class="grid-column-content flex flex-column padding">
				${data.content}
			</main>
			<footer id="site_footer" class="grid grid-column-full-bleed small less-padding align-items-center border-top gray">
				<div class="flex space-between">
					<p><a href="/copyright/">Copyright</a> &copy; ${data.site.copyright.year} by ${data.site.copyright.owner}</p>
					${this.socialLinks(data.site.social)}
				</div>
				<p class="flex justify-center">${this.siteTagline(data)}</p>
			</footer>
		</body>
	</html>
	`
}
