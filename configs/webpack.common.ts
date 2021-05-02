import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import type { Configuration } from 'webpack';

import { buildDir, publicDir, resolvePath } from './paths';

const common: Configuration = {
  entry: {
    index: resolvePath('src', 'index.tsx'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', 'jsx', '.js', '.mjs', '.json', '.wasm'],
    plugins: [new TsconfigPathsPlugin()],
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: publicDir,
          to: buildDir,
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: resolvePath('public', 'index.html'),
      inject: 'head',
      scriptLoading: 'defer',
      cache: false,
    }),
  ],
  module: {
    rules: [],
  },
};

export default common;
