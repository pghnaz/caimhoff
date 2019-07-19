/**
 * @file Defines the nested local church template
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

require('dotenv').config()

/**
 * An Eleventy JavaScript template using classes and optional data method
 * @class
 * @see {@link https://www.11ty.io/docs/languages/javascript/#classes 11ty docs}
 */
class LocalChurch {
	data() {
		return {
			layout: 'layouts/content'
		}
	}

	render(data) {
		var item = data.churches[data.page.fileSlug]
		var id = item.properties.gmcID.substr(4)
		return `
			<article id="article_${id}">
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
					${item.properties.phone
						? `<p>
							<a href="tel:+1${item.properties.phone
									.toString()
									.trim()
									.replace(/[^0-9]/g, '')}">
								${item.properties.phone}
							</a>
						</p>`
						: ''
					}
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
							var arr = this.arrayFromObject(item.properties.social)
							return arr.map(profile => {
								var platform = Object.keys(item.properties.social)
										.find(key => item.properties.social[key] === profile).toString().trim()
								return `
								<a class="${platform}" href="${profile}">
									${platform.charAt(0).toUpperCase()}${platform.substr(1)}
								</a>`}).join('&nbsp;')
						})()}`
						: ''
					}
					<div id="map"></div>
					<p>Find more local churches on our <a href="/map/">District Map</a></p>
				</section>
				${data.content}
			</article>
			<script async defer>
			${this.minifyJS(`
				var map
				var initMap = function () {
				var map = new google.maps.Map(document.getElementById('map'), {
					center: {
						lat: ${item.geometry.coordinates[1]},
						lng: ${item.geometry.coordinates[0]}
					},
					zoom: 13,
				})

					var image = {
						url: '/includes/assets/images/nazarene-logo-map-marker-red.png',
						size: new google.maps.Size((35.184), 48),
						origin: new google.maps.Point (0, 0),
						anchor: new google.maps.Point (0, 48)
					}

					var marker = new google.maps.Marker({
						position: {
							lat: ${item.geometry.coordinates[1]},
							lng: ${item.geometry.coordinates[0]}
						},
						map: map,
						icon: image
					})
				}`)

			}
			</script>
			${this.googleMapsAPI()}
		`
	}
}

module.exports = LocalChurch
