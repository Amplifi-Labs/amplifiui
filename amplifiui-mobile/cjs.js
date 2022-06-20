import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'index.js',
    dir: 'dist',
    name: 'smartsx',
    format: 'cjs'
  },
  external: [
    'react-native',
    'twrnc'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};
