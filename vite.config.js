import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
const path = require('path');

export default defineConfig({
    build: {
        outDir: 'build',
    },
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@page': path.resolve(__dirname, 'src/pages'),
            '@reducers': path.resolve(__dirname, './src/serviceCenter/store'),
            '@components': path.resolve(__dirname, './src/components'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@style': path.resolve(__dirname, './src/style.css'),
            '@image': path.resolve(__dirname, './src/images'),
        },
    },
    plugins: [
        reactRefresh({
            parserPlugins: ['classProperties', 'classPrivateProperties'],
        }),
    ],
});
