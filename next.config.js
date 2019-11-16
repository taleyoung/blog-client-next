const path = require("path");
const withCss = require("@zeit/next-css");

if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
}

const clientPath = path.resolve(__dirname, "client");
module.exports = withCss({
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
});

// webpack(config, options){
//     return config
// }
