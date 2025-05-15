const fs = require('fs');
const {optimize} = require('svgo');
const path = require("path");

const svg = fs.readFileSync(path.join(__dirname, '../file/svg1.svg'), 'utf-8')

function purifySvg(svg, precision = 2, removeId = true) {
  const result = optimize(svg, {
    multipass: true,
    js2svg: {
      pretty: true,
      indent: 2
    },
    floatPrecision: precision,
    plugins: [
      {name: "cleanupIds", active: removeId},
      "cleanupAttrs",
      "cleanupEnableBackground",
      "cleanupListOfValues",
      "cleanupNumericValues",
      "collapseGroups",
      "convertColors",
      "convertEllipseToCircle",
      "convertOneStopGradients",
      "convertPathData",
      {name: "convertStyleToAttrs", active: false},
      "moveGroupAttrsToElems",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "removeDesc",
      "removeComments",
      "removeDoctype",
      "removeDimensions",
      "removeMetadata",
      "removeTitle",
      {
        name: "removeUnknownsAndDefaults", active: true, params: {
          unknownAttr: true,
          defaultMarkupDeclarations: true,
        }
      },
      "removeUselessDefs",
      "removeUselessStrokeAndFill",
      "sortAttrs",
      "removeXlink",
      {
        name: "removeAttrs",
        active: true,
        params: {
          attrs: ['p_id', 't']
        }
      },

      // {name: 'removeViewBox', active: false},
      // {
      //   name: 'cleanupAttrs', active: true, params: {
      //     removeUnknownsAndDefaults: {
      //       unknownAttr: false,
      //     }
      //   }
      // },
      // {
      //   name: 'preset-default',
      //   params: {
      //     overrides: {
      //       inlineStyles: {
      //         onlyMatchedOnce: false,
      //       },
      //     },
      //   },
      // },
    ]
  })
  return result.data
}

const data = purifySvg(svg)
fs.writeFileSync(path.join(__dirname, '../file/output.svg'), data)