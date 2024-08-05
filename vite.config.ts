/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path';
// https://vitejs.dev/config/

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  plugins: [react()],
  test:{
    globals:true,
    environment:"jsdom",
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: [ 'src/**/*.tsx'],
      exclude:['src/App.tsx', 'src/main.tsx']
    },
  },
  build:{chunkSizeWarningLimit:1600
  }
})
