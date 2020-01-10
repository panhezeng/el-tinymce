const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  output: {
    filename: "el-tinymce.min.js",
    libraryTarget: "umd",
    umdNamedDefine: true,
    library: "ElTinymce",
    libraryExport: "ElTinymce"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
    "@panhezeng/vue-tinymce": "VueTinymce",
    "@panhezeng/el-single-upload": "ElSingleUpload",
    vue: "Vue",
    "element-ui": "ELEMENT"
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()]
};
