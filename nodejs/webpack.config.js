const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = ['types', 'date'];

let cleanOptions = {
  root: path.resolve(__dirname),
  verbose: true,
  dry: false,
};

module.exports = {
  mode: 'production',
  devtool: 'source-map',// 打包出的js文件是否生成map文件（方便浏览器调试）
  entry: {
    'idear-tools': './src/index.ts',
  },
  output: {
    filename: '[name].js',// 生成的fiename需要与package.json中的main一致
    path: path.resolve(__dirname, './'),
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: path.resolve(__dirname, './tslint.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, './tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions)
  ]
};
