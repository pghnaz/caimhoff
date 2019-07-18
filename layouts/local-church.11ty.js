/**
 * @file Defines the nested local church template
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An Eleventy JavaScript template using classes and optional data method
 * @class
 * @see {@link https://www.11ty.io/docs/languages/javascript/#classes 11ty docs}
 */
class FindAChurch {
	data() {
		return {
			layout: 'layouts/content'
		}
	}

	render(data) {
		var item = data.churches[data.page.fileSlug]
		var id = item.properties.gmcID.substr(4)
		return `
			<article>
				<header>
					<h1>${item.properties.name} Church of the Nazarene</h1>
				</header>
				<section>
					<p>
						${item.properties.gmcID
							? `ID: <span id="churchID_${id}">
								${item.properties.gmcID}
							</span>`
							: ''
						}</span>
						${item.properties.yearOrganized
							? `Organized: <span id="churchYearOrganized_${id}">
								${item.properties.yearOrganized}
							</span>`
							: ''
						}
					</p>
					<address>
						${item.properties.address
							? `
								<p>
									<span>${item.properties.address.street}</span></br>
									<span id="churchCity_${id}">${item.properties.address.city}</span>,
									<span>${item.properties.address.state}</span>
									<span>${item.properties.address.zip}</span>

								</p>
							`
							: ''
						}
					</address>
					<p>
						${item.properties.pastor
							? `Pastor ${item.properties.pastor}`
							: 'Praying for our next pastor'
						}
					</p>
					${item.properties.mailingAddress
						? `<address>
							<h1>Mailing Address</h1>
							<p>
								<span>${item.properties.mailingAddress.street}</span></br>
								<span id="churchCity_${id}">${item.properties.mailingAddress.city}</span>,
								<span>${item.properties.mailingAddress.state}</span>
								<span>${item.properties.mailingAddress.zip}</span>

							</p>
						</address>`
						: ''
					}
					${item.properties.website
						? `<p>
							<a href="${item.properties.website}">
								${item.properties.website}
							</a>
						</p>`
						: ''
					}
					${item.properties.social
						? `${(() => {
							var arr = Object.keys(item.properties.social)
											.map(profile => item.properties.social[profile])
							return arr.map(profile => `
								<a href="${profile}">
									${Object.keys(item.properties.social).find(key => item.properties.social[key] === profile)}
								</a>`).join('')
						})()}`
						: ''
					}
				</section>
				${data.content}
			</article>
		`
	}
}

module.exports = FindAChurch
