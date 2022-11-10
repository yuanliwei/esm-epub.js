import { defineConfig } from "rollup"
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
    input: 'index.js',
    output: {
        dir: 'dist/',
        format: 'es',
    },
    external: [ ],
    plugins: [nodeResolve(), commonjs()]
})