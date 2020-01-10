const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputPath = path.resolve(__dirname, "../docs");

const config = {
  output: {
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules|dist/,
        use: "babel-loader"
      },
      {
        test: /\.(css|less)$/,
        use: ["vue-style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "media/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: [
      ".js",
      ".ts",
      ".jsx",
      ".vue",
      ".css",
      ".less",
      ".scss",
      ".json"
    ]
  },
  externals: {
    vue: "Vue",
    "element-ui": "ELEMENT",
    "@panhezeng/ucloud-ufile": "UCloudUFile"
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()]
};

module.exports = (env, argv) => {
  const HtmlWebpackPluginOptions = {
    script: "",
    template: "index.html"
  };
  if (argv.mode === "production") {
    HtmlWebpackPluginOptions.script = ".min";
  }
  config.plugins.push(new HtmlWebpackPlugin(HtmlWebpackPluginOptions));
  return config;
};
