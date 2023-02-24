/**
 * @type {import('postcss').PluginCreator}
 */
const defaults = {
  unitToConvert: 'px',
  viewportWidth: 375,
  devViewportWidth: 750,
  unitPrecision: 5,
};
module.exports = (options = {}) => {
  const opts = Object.assign({}, defaults, options);
  const { unitToConvert, viewportWidth, devViewportWidth, unitPrecision } = opts;
  return {
    postcssPlugin: 'postcss-px-to-px',
    Declaration (decl) {
      decl.value = decl.value.replace(
        /"[^"]+"|'[^']+'|url\([^)]+\)|(-?\d*\.?\d+)px/g,
        (match, p1) => {
          if (p1 === undefined) return match;
          return `${toFixed(p1 / (devViewportWidth / viewportWidth), unitPrecision)}${
            p1 == 0 ? '' : unitToConvert
          }`;
        },
      );
    }
  }
}

module.exports.postcss = true
