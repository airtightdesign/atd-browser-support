# ATD Browser Support

A conditional front end polyfill loader based on 3 levels of browser support. This idea was extrapolated from an [idea from Philip Walton](https://philipwalton.com/articles/loading-polyfills-only-when-needed/). In addition to translating the polyfill loader into a node module, a third browser support tier has been added.

Browser support levels are:

- **Modern** (fully supports)
- **Legacy** (partially supports)
- **Deprecated** (browsers with low support such as IE 9-, because sometimes, reality bites)

## Setup

Add this to your project

```
npm install atd-browser-support
```

In order to load the polyfills on demand from the browser, the .js files must be copied over from the `atd-browser-support` module `dist/js` folder.

One solution to this is to use the `copy-webpack-plugins` plugin for webpack.

**Add it to your dependencies:**
```
npm install copy-webpack-plugins --save-dev
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
'''

## Model for Browser Support

### Modern Browsers

### Legacy Browsers

#### Polyfills Included: 

- `fetch`
- `Promise`

### Deprecated Browsers

#### Polyfills Included:

- All Legacy polyfills plus
- `classList`
- `Console`