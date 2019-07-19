/**
 * @file Defines the nested “Church Directory” template
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An Eleventy JavaScript template using classes and optional data method
 * @class
 * @see {@link https://www.11ty.io/docs/languages/javascript/#classes 11ty docs}
 */
class ChurchDirectory {
	data() {
		return {
			layout: 'layouts/content'
		}
	}

	render(data) {
		var arr = Object.keys(data.churches)
			            .map(item => data.churches[item])
		return `
			${data.content}
			<section>
				${arr.map(item => {
					var id = item.properties.gmcID.substr(4)
					var href = `/${Object.keys(data.churches).find(key => data.churches[key] === item)}`
					return `
					<article id="church_${id}">
						<header>
							<h1>
								<a href="${href}">
									<span id="churchName_${id}">
										${item.properties.name}
									</span>
								</a>
							</h1>
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
						</section>
						<footer>
							<p><a href="${href}">${data.site.baseURL}${href.substr(1)}</a></p>
						</footer>
					</article>
				`
			}).join('')}
			</section>
		`
	}
}

module.exports = ChurchDirectory
