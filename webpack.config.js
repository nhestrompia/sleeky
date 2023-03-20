const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlPlugin = require("html-webpack-plugin")
const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")
const postcssImport = require("postcss-import")

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: "./src/popup/popup.tsx",
    options: "./src/options/options.tsx",
    background: "./src/background/background.ts",
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
      {
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader", // postcss loader needed for tailwindcss
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
        test: /\.css$/i,
      },
      {
        type: "assets/resource",
        use: "asset/resource",
        test: /\.(png|jpg|jpef|gif|woff|woff2|tff|eot|svg)$/,
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: "assets/resource",
      // },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist"),
        },
        // { from: path.resolve("src/assets/icon.png"), to: path.resolve("dist") },
      ],
    }),
    ...getHtmlPlugins(["popup", "options"]),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
}
function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "Sleeky",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  )
}
