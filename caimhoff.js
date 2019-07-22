/**
 * @file Exports theme modules to the 11ty configuration file (.eleventy.js)
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

// Require theme modules
var arrayFromObject = require('./filters/array-from-object')
var callToAction = require('./shortcodes/call-to-action')
var editThisPage = require('./shortcodes/edit-this-page')
var fileToString = require('./filters/file-to-string')
var favicon = require('./shortcodes/favicon')
var googleMapsAPI = require('./shortcodes/google-maps-api')
var headTag = require('./shortcodes/head-tag')
var minifyCSS = require('./filters/minify-css')
var minifyHTML = require('./filters/minify-html')
var minifyJS = require('./filters/minify-js')
var siteTagline = require('./shortcodes/site-tagline')
var socialLinks = require('./shortcodes/social-links')
var socialMeta = require('./shortcodes/social-meta')
var titleTag = require('./shortcodes/title-tag')

/**
 * Expose the theme modules to 11ty to load in .eleventy.js
 * @module caimhoff
 * @param 11ty’s config argument
 * @see {@link https://www.11ty.io/docs/config/ 11ty docs}
 */
module.exports = function (eleventyConfig) {

	// Pass 11ty config argument to local modules
	arrayFromObject(eleventyConfig)
	callToAction(eleventyConfig)
	editThisPage(eleventyConfig)
	fileToString(eleventyConfig)
	favicon(eleventyConfig)
	googleMapsAPI(eleventyConfig)
	headTag(eleventyConfig)
	minifyCSS(eleventyConfig)
	minifyHTML(eleventyConfig)
	minifyJS(eleventyConfig)
	siteTagline(eleventyConfig)
	socialLinks(eleventyConfig)
	socialMeta(eleventyConfig)
	titleTag(eleventyConfig)

	return

}
