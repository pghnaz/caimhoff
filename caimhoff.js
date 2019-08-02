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
var groupBy = require('./filters/group-by')
var googleMapsAPI = require('./shortcodes/google-maps-api')
var headTag = require('./shortcodes/head-tag')
var minifyCSS = require('./filters/minify-css')
var minifyHTML = require('./filters/minify-html')
var minifyJS = require('./filters/minify-js')
var numberfy = require('./filters/numberfy')
var siteFooter = require('./shortcodes/site-footer')
var siteHeader = require('./shortcodes/site-header')
var siteTagline = require('./shortcodes/site-tagline')
var slugify = require('./filters/slugify')
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
	groupBy(eleventyConfig)
	googleMapsAPI(eleventyConfig)
	headTag(eleventyConfig)
	minifyCSS(eleventyConfig)
	minifyHTML(eleventyConfig)
	minifyJS(eleventyConfig)
	numberfy(eleventyConfig)
	siteFooter(eleventyConfig)
	siteHeader(eleventyConfig)
	siteTagline(eleventyConfig)
	slugify(eleventyConfig)
	socialLinks(eleventyConfig)
	socialMeta(eleventyConfig)
	titleTag(eleventyConfig)

	return

}
