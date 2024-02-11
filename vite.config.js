import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  define: {

    'process.env.VITE_APP_DATABASE_URL':JSON.stringify(process.env.VITE_APP_DATABASE_URL),
    
    'process.env.VITE_APP_YOUR_SERVICE_KEY':JSON.stringify(process.env.VITE_APP_YOUR_SERVICE_KEY),
    
    'process.env.VITE_APP_YOUR_TEMPLATE_KEY':JSON.stringify(process.env.VITE_APP_YOUR_TEMPLATE_KEY),

    'process.env.VITE_APP_YOUR_PUBLIC_KEY':JSON.stringify(process.env.VITE_APP_YOUR_PUBLIC_KEY)
    
    }
})
