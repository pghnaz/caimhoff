/**
 * @file Defines the nested template for the contact page
 * @author Reuben L. Lillie <rlillie@pghnaz.org>
 */

/**
 * An Eleventy JavaScript template using classes and optional data method
 * @class
 * @see {@link https://www.11ty.io/docs/languages/javascript/#classes 11ty docs}
 * @see {@link https://www.11ty.io/docs/config/#directory-for-layouts-(optional) Optional 11ty layouts directory}
 */
class Content {

	data() {
		return {
			layout: '../includes/layouts/base' // relative to 11ty layouts
		}
	}

	render(data) {
		return `
			<article>
				${data.title
					? `<header>
						<h1>${data.title}</h1>
					</header>`
					: ''
				}
				<section class="grid grid-repeat-columns">
					<div class="flex flex-column space-around align-items-center xx-large">
						<figure class="flex justify-center">
							${this.fileToString(data.site.contact.logo)}
						</figure>
						<address class="text-center">
							${data.site.contact.address}<br>
							<a href="tel:+1${this.numberfy(data.site.contact.phone)}">${data.site.contact.phone}</a>
						</address>
						${data.content}
						${this.callToAction(data)}
						<div class="medium">${this.socialLinks(data.site.social)}</div>
					</div>
					<form method="POST" action="https://formspree.io/${data.site.contact.email}">
						<fieldset class="flex flex-column space-between border-radius">
							<legend class="xx-large bold">${data.title}</legend>
							<input type="hidden" name="_subject" value="New Form Submission">
							<input type="text" name="_gotcha" style="display:none">
							<input type="hidden" name="_next" value="/thanks/">
							<label for="name">Your name</label>
							<input class="margin-bottom border-radius border less-padding" type="text" name="name" required>
							<label for="email">Your email</label>
							<input class="margin-bottom border-radius border less-padding" name="email" type="email" required>
							<label for="message">Your message</label>
							<textarea class="margin-bottom border-radius border less-padding" name="message" required rows=12 minlength=1></textarea>
							<button class="call-to-action x-large bold padding border border-radius" type="submit">Send</button>
						</fieldset>
					</form>
				</section>
				<footer class="small">
					<p>${this.editThisPage(data)}</p>
				</footer>
			</article>
		`
	}

}

module.exports = Content
