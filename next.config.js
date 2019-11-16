const path = require("path");
const withCss = require("@zeit/next-css");
const withLess = require("@zeit/next-less");

if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
}

const clientPath = path.resolve(__dirname, "client");
module.exports = withLess(
  withCss({
    cssModule: true,
    webpack(config) {
      const alias = config.resolve.alias;
      config.resolve.alias = {
        ...alias,
        "@client": clientPath,
        "@assets": path.resolve(clientPath, "assets"),
        "@redux": path.resolve(clientPath, "redux"),
        "@components": path.resolve(clientPath, "components"),
        "@utils": path.resolve(clientPath, "utils")
      };
      return config;
    }
  })
);

// webpack(config, options){
//     return config
// }
