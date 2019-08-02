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
			<footer id="site_footer" class="grid grid-column-full-bleed medium align-items-center border-top gray background-gray more-padding">
				<div class="flex space-between">
					<p><a href="/copyright/">Copyright</a> &copy; ${data.site.copyright.year} by ${data.site.copyright.owner}</p>
					${this.socialLinks(data.site.social)}
				</div>
					<nav class="grid grid-repeat-columns grid-column-gap">
						<ul>
						<li><a href="/contact/">Contact Us</a></li>
						<li>
							<address class="margin-top margin-bottom">
								${data.site.title
									? `${data.site.title}<br>`
									: ''
								}
								${data.site.contact.address
									? `${data.site.contact.address}<br>`
									: ''
								}
								${data.site.contact.phone
									? `<a href="tel:+1${data.site.contact.phone.toString().trim().replace(/\D/g,'')}">${data.site.contact.phone}</a>`
									: ''
								}
							</address>
						</li>
						</ul>
						<ul>
							<li><a href="/about/">About</a></li>
							<li><a href="/news/">News</a></li>
							<li><a href="/calendar/">Calendar</a></li>
						</ul>
						<ul>
							<li><a href="/officers/">District Officers</a></li>
							<li><a href="/boards-and-committees/">Boards and Committees</a></li>
							<li><a href="/ministers/">Ministers</a></li>
						</ul>
						<ul>
							<li><a href="https://sdmi.pghnaz.org/"><abbr title="Sunday School and Discipleship Ministries International">SDMI</abbr></a></li>
							<li><a href="https://nmi.pghnaz.org/"><abbr title="Nazarene Missions International">NMI</abbr></a></li>
							<li><a href="https://nyi.pghnaz.org/"><abbr title="Nazarene Youth International">NYI</abbr></a></li>
						</ul>
						<ul>
							<li><a href="/directory/">Find a Church</a></li>
							<li><a href="/map/">District Map</a></li>
							<li><a href="/zones/">Zones</a></li>
						</ul>
						<ul>
							<li><a href="https://mcnc.pghnaz.org/">Mt. Chestnut Nazarene Center</a></li>
							<li><a href="https://pdlc.pghnaz.org/">Pittsburgh District Learning Center</a></li>
							<li><a href="/enc/">Eastern Nazarene College</a></li>
						</ul>
						<ul>
							<li><a href="http://nazarene.org/">Church of the Nazarene</a></li>
							<li><a href="https://www.usacanadaregion.org/">USA/Canada Region</a></li>
							<li><a href="/manual/"><em>Manual</em></a></li>
						</ul>
						<ul>
							<li><a href="/terms/">Terms</a></li>
							<li><a href="/privacy/">Privacy</a></li>
							<li><a href="/copyright/">Copyright</a></li>
						</ul>
						<ul>
							<li><a class="call-to-action more-padding border-radius margin-top" href="/give/">Give Now</a></li>
						</ul>
					</nav>
				<section id="footer_branding" class="flex flex-column justify-center align-items-center text-center">
					<figure class="logo gray">${this.fileToString(data.site.parentOrganization.logo)}</figure>
					${this.siteTagline(data)}
				</section>
			</footer>
		`
	})

}
