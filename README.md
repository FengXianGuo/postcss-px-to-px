# postcss-px-to-px-dt

[PostCSS] plugin to convert `px` values to `px` values, like 750px(local) to 375px(device).

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
npm install --save-dev postcss postcss-px-to-px-dt
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
+   require('postcss-px-to-px-dt'),
    require('autoprefixer')
  ]
}
```
## Options

You can set `viewportWidth` is real viewport. The default `viewportWidth` is 375.

Yon can set `devViewportWidth` is dev environment viewport. The default `devViewportWidth` is 750.

```diff
module.exports = {
  plugins: [
+   require('postcss-px-to-px-dt',{viewportWidth:375,devViewportWidth:750}),
    require('autoprefixer')
  ]
}
```





