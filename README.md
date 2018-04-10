# ATD Browser Support

A conditional front end polyfill loader based on 3 levels of browser support. This idea was extrapolated from an [idea from Philip Walton](https://philipwalton.com/articles/loading-polyfills-only-when-needed/). In addition to translating the polyfill loader into a node module, a third browser support tier has been added.

Browser support levels are:

- **Modern** (fully supports)
- **Legacy** (partially supports)
- **Deprecated** (browsers with low support such as IE 9-, because sometimes, reality bites)

**Note**: This module was developed for [AirTight Design](https://airtightdesign.com), a web design and developmemnt agency, for use in client web projects. It is built for how we work. If you would like to see any specific features or polyfills added, please file an [issue on GitGub](https://github.com/airtightdesign/atd-browser-support/issues).

## Setup

Add this to your project

```
npm install atd-browser-support --save
```

Include the module in your script and call the `loadSupport` function.

```
import Supports from 'atd-browser-support';

Supports.loadSupport(yourCallbackFunction);

```

The `loadSupport` function takes a callback function as a parameter (Promises cannot be depended upon yet).  It is recommended to use this funtion to initialize your app after polyfills are loaded. This way we can minimize the code executed before then polfillys are ready.

## Setting up the Polyfill JS Files

In order to load the polyfills on demand from the browser, the .js files must be copied over from the `atd-browser-support` module `dist/js` folder to your project's webroot.

One solution to this is to use the `copy-webpack-plugin` plugin for webpack.

**Add it to your dependencies:**
```
npm install copy-webpack-plugin --save-dev
```

**Initialize in `webpack.config.js`**

```
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    ...

  plugins: [
    new CopyWebpackPlugin([
        { 
            from: './node_modules/atd-legacy-polyfills/dist/js/atd-legacy-polyfills.js',
            to: 'atd-legacy-polyfills.js',
            copyUnmodified: true
        },
        { 
            from: './node_modules/atd-deprecated-polyfills/dist/js/atd-deprecated-polyfills.js',
            to: 'atd-deprecated-polyfills.js',
            copyUnmodified: true
        }
    ])
  ]
};
```

Change the `to` properties of the `CoptyWebpackPlugin` initialization objects to reflect your project's requirements.

## Included Polyfills by Browser Tier

### Modern Browsers

These browsers have a baseline of Modern support, currently defined in the module as:

```
if(typeof window.Promise === 'function')
```

This test will evolve as more polyfills are added to the module. If there is a need, a future version may include the ability to set tests and polyfill inclusion as desired.

Do not rely on these browsers to support every ES2015+ feature, but simply those included in the test above.  

### Legacy Browsers

Legacy Browsers (partial support) load polyfills from the [atd-legacy-polyfills module](https://www.npmjs.com/package/atd-legacy-polyfills).

### Deprecated Browsers

Deprecated Browsers (partial support) load polyfills from the [atd-deprecated-polyfills module](https://www.npmjs.com/package/atd-deprecated-polyfills).

