// rollup.config.js
// import json from 'rollup-plugin-json';
// import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel';

export default {
  input: './src/main.js',
  output: {
    // file: 'bundle.js',
    // format: 'es'
    dir: './lib',
    format: 'cjs',
    globals: {
      jquery: '$'
    }
  },
  plugins: [
    // json(),
    // resolve(),
    babel({
      exclude: ['node_modules/**', './src/demo/'] // 只编译我们的源代码
    })
  ],
  external: ['jquery'],
  sourceMap: false
};