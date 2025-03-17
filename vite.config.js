// vite.config.js
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default {
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
};