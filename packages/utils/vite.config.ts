import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      formats: ['es', 'cjs', 'iife'],
      entry: './src/index.ts',
      name: 'UTILS',
      fileName: 'index'
    },
    terserOptions: {
      // compress: {
      //   keep_infinity: true,
      //   drop_debugger: false
      // }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [dts()]
})
