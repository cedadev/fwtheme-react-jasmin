import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import external from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";

import pkg from './package.json';


export default {
    input: pkg.source,
    output: { file: pkg.module, format: 'esm', sourcemap: true },
    plugins: [
        external(),
        postcss({ extensions: ['.css'] }),
        babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
        del({ targets: ['dist/*'] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
