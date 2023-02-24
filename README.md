# postcss-px-to-px

[PostCSS] plugin to convert `px` values to `px` values.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
  width:40px;
}
```

```css
.foo {
  width:20px;
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-rem-to-px
```

**Step 2:** Check your project for existing PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('${pluginName}'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
