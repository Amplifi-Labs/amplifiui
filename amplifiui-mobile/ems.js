import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'index.esm.js',
    dir: 'dist',
    name: 'smartxs',
    format: 'esm'
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