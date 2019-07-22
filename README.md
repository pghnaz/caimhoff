# C. A. Imhoff

C. A. Imhoff is an [Eleventy](https://www.11ty.io/docs/templates/) theme named after the second district superintendent for the Pittsburgh District Church of the Nazarene, who served from 1909 to 1912.

## Overview

This theme is designed as a [Git submodule](https://git-scm.com/docs/git-submodule) for https://pghnaz.org/ and its [subdomain sites](https://github.com/pghnaz) to serve as 11ty’s [includes directory](https://www.11ty.io/docs/config/#directory-for-includes).

If C. A. Imhoff is not already loaded as a submodule, then you can install it with the following command.

```cli
$ git submodule add https://github.com/pghnaz/caimhoff.git ELEVENTY_INCLUDES_DIRECTORY
```

If you are unfamiliar with Git submodules (and even if you are familiar), [Chris Wanstrath](https://github.com/defunkt) has is a helpful article in [Git documentation](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

With the submodule loaded, then you can require the `caimhoff` module and pass it the 11ty config argument.

_NB, you’ll also need to specify a [layouts directory](https://www.11ty.io/docs/config/#directory-for-layouts-(optional)) in 11ty’s configuration options. This can be any directory inside the input directory, as long as it is at the same level as your includes directory. This allows you to define custom layouts outside the theme files._

```js
// .eleventy.js

// Require theme modules, assuming your 11ty includes directory is src/includes/
var caimhoff = require('./src/includes/caimhoff')

module.exports = function (eleventyConfig) {

	// Pass 11ty config argument to theme modules
	caimhoff(eleventyConfig)

	// 11ty directory options
	return {
		dir {
			layouts: 'layouts' // any directory inside 11ty’s input directory
		}
	}
}

```

## Contributing

Before submitting an issue or pull request, please read our [code of conduct](https://github.com/pghnaz/caimhoff/blob/master/CODE_OF_CONDUCT.md).

Also, check out our [main site wiki](https://github.com/pghnaz/pghnaz.org/wiki) for style guides and coding standards.

### Contributors

Thanks for helping make this site possible.

* [Reuben L. Lillie](https://github.com/reubenlillie/)
* [Justin Czech](https://github.com/czechju/)

Copyright &copy; 2019 by Pittsburgh District Church of the Nazarene
