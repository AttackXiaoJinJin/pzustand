import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

console.log(__dirname,'aaa5')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
