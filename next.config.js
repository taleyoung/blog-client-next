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
    // config.module.rules.push({
    //   test: /\.(jpe?g|png|svg|gif|ico|webp)$/,
    //   use: [
    //     {
    //       loader: "url-loader",
    //       options: {
    //         limit: 8192,
    //         fallback: "file-loader",
    //         publicPath: `/_next/static/images/`,
    //         outputPath: `${isServer ? "../" : ""}static/images/`,
    //         name: "[name]-[hash].[ext]"
    //       }
    //     }
    //   ]
    // });
    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader" // translates CSS into CommonJS
        },
        {
          loader: "less-loader", // compiles Less to CSS
          options: {
            modifyVars: {
              "primary-color": "red",
              "link-color": "#1DA57A",
              "border-radius-base": "2px"
              // or
              // hack: `true; @import "your-less-file-path.less";` // Override with less file
            },
            javascriptEnabled: true
          }
        }
      ]
      // ...other rules
    });
    return config;
  }
  // })
});
