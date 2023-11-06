module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
  },
};
