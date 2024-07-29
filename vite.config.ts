/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dotevn from 'dotenv'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals:true,
    environment:"jsdom"
  },
  build:{chunkSizeWarningLimit:1600}
})
