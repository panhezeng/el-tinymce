const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  output: {
    filename: "el-tinymce.min.js",
    libraryTarget: "umd",
    umdNamedDefine: true,
    library: "ElTinymce",
    libraryExport: "ElTinymce",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.((c|le)ss)$/i,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "media/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:7].[ext]",
        },
      },
    ],
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
      ".json",
    ],
  },
  externals: {
    "@panhezeng/el-single-upload": {
      commonjs: "@panhezeng/el-single-upload",
      commonjs2: "@panhezeng/el-single-upload",
      amd: "@panhezeng/el-single-upload",
      root: "ElSingleUpload",
    },
    tinymce: {
      commonjs: "tinymce",
      commonjs2: "tinymce",
      amd: "tinymce",
      root: "tinymce",
    },
    vue: {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue",
    },
    "element-ui": {
      commonjs: "element-ui",
      commonjs2: "element-ui",
      amd: "element-ui",
      root: "ELEMENT",
    },
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()],
};
