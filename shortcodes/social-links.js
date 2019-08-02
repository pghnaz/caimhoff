/**
 * @file Defines a shortcode for adding social media links
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

// Require Node’s native File System module checking if icon files exist
var fs = require('fs')

/**
 * An 11ty univeral shortcode
 * @module includes/shortcode/social-links
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.io/docs/shortcodes/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * A <nav> with links to social media accounts in src/data/site.json
	 * @method
	 * @name Social Links
	 * @param {Object} data The 11ty `data` object
	 * @return {string} HTML template literal
	 * @example `${this.socialLinks(data)}`
	 */
	eleventyConfig.addShortcode('socialLinks', function (social) {

		var profiles = this.arrayFromObject(social)

		return `
			<nav class="social-links flex align-items-center">
				${profiles.map(profile => {

					// A string containing the key for the social media profile URL
					var platform = Object.keys(social)
							.find(key => social[key] === profile).toString().trim()

					// The file path for the icon file relative to 11ty’s input/
					var iconPath = `includes/assets/images/icons/${platform}.svg`

					// If the icon file exists, then display it inline.
					// Otherwise use text.
					return `
						<a class="${platform} padding margin" href="${profile}">
							${fs.statSync(`src/${iconPath}`).isFile()
								? `${this.fileToString(iconPath)}`
								: `${platform.charAt(0).toUpperCase()}${platform.substr(1)}`
							}
						</a>`

					}).join('&nbsp;')
				}
			</nav>
		`
	})

}
