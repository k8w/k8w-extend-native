import typescript from 'rollup-plugin-typescript2';

export default {
    input: './index.ts',
    output: [
        {
            format: 'cjs',
            file: './dist/index.js',
        },
        {
            format: 'es',
            file: './dist/index.mjs',
        }
    ],
    plugins: [
        typescript()
    ]
}