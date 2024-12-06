import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '.runtimeConfig': './runtimeConfig.browser',
     // fs: require.resolve('rollup-pligin-node-builtins'),
    "@": path.resolve(__dirname, "./src"),
    "~@": path.resolve(__dirname, "/src"),
  },
},
})
