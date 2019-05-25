import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/index.jsx',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve({ extensions: ['.jsx', '.js'] }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.BUILD),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    copy({
      targets: [
        'src/index.html',
      ],
      outputFolder: 'dist',
    }),
    process.env.BUILD === 'production' && terser(),
  ],
};
