/* eslint-disable turbo/no-undeclared-env-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
// const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

const isProduction =
  typeof process.env.NODE_ENV !== 'undefined' &&
  process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';

module.exports = function (options, webpack) {
  return {
    entry: ['webpack/hot/poll?100', './src/main.ts'],
    output: {
      library: { type: 'commonjs' },
      path: path.join(__dirname, '../../build/out-tsc/src/'),
      filename: 'main.js',
    },
    optimization: {
      minimize: false,
    },
    target: 'node',
    mode,
    devtool,
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
        modulesDir: '../../node_modules',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      // TODO: only for dev purposes
      // new RunScriptWebpackPlugin({ name: options.output.filename }),
    ],
  };
};
