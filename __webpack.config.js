const path = require("path")

module.exports = {
  entry: "./src/test.ts",
  output: {
    filename : "test.bundle.js",
    path : path.resolve(__dirname, "dist")
  },
  module : {
    rules : [
      {
        test: /\.css$/,
        use : ["style-loader","css-loader"]
      },
      {
        test : /\.(js|jsx|ts|tsx)$/,
        use : 'babel-loader',
        exclude : /node_modules/,
      },
      {
        test : /\.(ts|tsx)$/,
        use : "ts-loader",
        exclude : /node_modules/,
      },
    ]
  },
  resolve : {
    extensions : [".ts",".tsx",".js",".jsx",".css"]
  }
}