/**
 * @file Minify HTML output files
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * Juriy Zaytsev’s HTMLMinifier module
 * @see {@link https://github.com/kangax/html-minifier GitHub repo}
 */
var htmlmin = require('html-minifier')

/**
 * Expose the configuration to 11ty as a function
 * @module .eleventy
 * @param 11ty’s config argument
 * @see {@link https://www.11ty.io/docs/config/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	/**
	 * Minifies HTML templates.
	 * @param {string} content An HTML document
	 * @param {string} outputPath The path where 11ty outputs the HTML
	 * @return {string} The minified HTML
	 * @see {@link https://www.11ty.io/docs/config/#transforms 11ty docs}
	 */
	eleventyConfig.addTransform('minifyHTML', function(content, outputPath) {
		if( outputPath.endsWith('.html') ) {
			var minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			})
			return minified
		}
		return content
	})

}
