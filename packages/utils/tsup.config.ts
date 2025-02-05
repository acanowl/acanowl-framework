import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  bundle: true,
  clean: true,
  minify: true,
  dts: true,
  keepNames: true
  // watch: true,
  // treeshake: true,
})
