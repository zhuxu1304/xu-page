import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// vite.config.js
export default defineConfig({
    plugins: [react()],
    base: '/xu-page/',   // repo name
    build: { outDir: 'dist' }
})
