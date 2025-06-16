import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@app": path.resolve(__dirname, "./src/app/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@constants": path.resolve(__dirname, "./src/constants/"),
      "@contexts": path.resolve(__dirname, "./src/contexts/"),
      "@layouts": path.resolve(__dirname, "./src/layouts/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@styles": path.resolve(__dirname, "./src/styles/"),
      "@provider": path.resolve(__dirname, "./src/provider/"),
      "@routes": path.resolve(__dirname, "./src/routes/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
    },
  },
});
