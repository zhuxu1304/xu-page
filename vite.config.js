import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For a custom domain (CNAME), base can remain '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { outDir: 'dist' }
});
