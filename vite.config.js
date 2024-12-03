import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), nodePolyfills({
        globals: {
            Buffer: true,
            global: true,
            process: true,
        },
    })],
    define: {
        'process.env': {},
        global: 'window',
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        },
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    },
    server: {
        port: 3000,
        open: true,
        cors: true,
    },
    base: './',
})