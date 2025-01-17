import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://lebaba-ecommerce-backend-app-snowy.vercel.app', // رابط الخادم الخلفي
                changeOrigin: true, // تغيير الأصل للخادم الخلفي
                rewrite: (path) => path.replace(/^\/api/, ''), // إزالة /api من الرابط
            },
        },
    },
});