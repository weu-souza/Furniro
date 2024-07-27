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
  define:{
    VITE_API_KEY:JSON.stringify(process.env.VITE_API_KEY),
    VITE_AUTH_DOMAIN:JSON.stringify(process.env.VITE_AUTH_DOMAIN),
    VITE_PROJECT_ID:JSON.stringify(process.env.VITE_PROJECT_ID),
    VITE_STORAGE_BUCKET:JSON.stringify(process.env.VITE_STORAGE_BUCKET),
    VITE_MESSAGING_SENDER_ID:JSON.stringify(process.env.VITE_MESSAGING_SENDER_ID),
    VITE_APP_ID:JSON.stringify(process.env.VITE_APP_ID),
  }
})
