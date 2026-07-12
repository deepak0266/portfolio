import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves project sites from /<repo-name>/
// Change BASE_PATH below to match your repository name exactly.
const BASE_PATH = '/portfolio/'

export default defineConfig({
  base: BASE_PATH,
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
