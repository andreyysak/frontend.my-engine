import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

const src = (path: string) => fileURLToPath(new URL(`./src/${path}`, import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': src('shared'),
      '@assets': src('shared/assets'),
      '@styles': src('shared/assets/styles'),
      '@mocks': src('mocks'),
      '@': src(''),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@styles/base/vars' as *;\n@use '@styles/base/mixins' as *;\n`,
      },
    },
  },
})
