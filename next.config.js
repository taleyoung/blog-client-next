const path = require("path");
const withCss = require("@zeit/next-css");

if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
}

const clientPath = path.resolve(__dirname, "./");
module.exports = withCss({
  webpack: config => {
    const alias = config.resolve.alias;
    config.resolve.alias = {
      ...alias,
      "@client": clientPath,
      "@static": path.resolve(clientPath, "static"),
      "@redux": path.resolve(clientPath, "redux"),
      "@components": path.resolve(clientPath, "components"),
      "@utils": path.resolve(clientPath, "utils"),
      "@itypings": path.resolve(clientPath, "typings"),
      "@config": path.resolve(clientPath, "config")
    };
    return config;
  }
});
