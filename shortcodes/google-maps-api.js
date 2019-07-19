/**
 * @file Defines a shortcode to call the Google Maps API with credentials
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

require('dotenv').config()

/**
 * An 11ty univeral shortcode
 * @module includes/shortcode/google-maps-api
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/filters/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * A Google Maps API call
	 * @method
	 * @name googleMapsAPI
	 * @return {string} HTML template literal
	 * @example `${this.googleMapsAPI()}`
	 */
	eleventyConfig.addShortcode('googleMapsAPI', function () {
		return `<script async defer src="https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API}&callback=initMap"></script>`
	})

}
