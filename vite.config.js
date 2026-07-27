import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        tailwindcss(),
    ],
})