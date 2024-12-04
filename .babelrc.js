const fs = require('fs');
const path = require('path');

process.env.CORE_JS = fs.readFileSync(path.resolve(__dirname, "node_modules/core-js-bundle/minified.js"), "utf8");
process.env.REGENERATOR_RUNTIME = fs.readFileSync(path.resolve(__dirname, "node_modules/regenerator-runtime/runtime.js"), "utf8");
process.env.EPUBJS = fs.readFileSync(path.resolve(__dirname, "node_modules/epubjs/dist/epub.min.js"), "utf8");
process.env.BRIDGE = fs.readFileSync(path.resolve(__dirname, "src/bridge.js"), "utf8");

module.exports = {
  "presets":[
    ['@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: 3,
    }],
],
  plugins: [
    ["module-resolver", {
      "alias": {
        "stream": "stream-browserify",
        "path": "path-webpack"
      }
    }],
    "transform-inline-environment-variables"
  ]
};
