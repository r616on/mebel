// https://vitejs.dev/config/

import * as path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    rollupOptions: {
      external: [
        'js/jquery.min.js',
        'js/jquery.bootstrap.js',
        'js/jquery.magnific-popup.js',
        'js/jquery.owl.carousel.js',
        'js/jquery.ion.rangeSlider.js',
        'js/jquery.isotope.pkgd.js',
        'js/main.js',
      ],
    },
  },
});
