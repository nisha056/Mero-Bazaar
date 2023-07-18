import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA({
    workbox: {
      globPatterns: ["**/*"],
    },
    includeAssets: [
      "**/*",
    ],
    manifest: {
      "theme_color": "#004099",
      "background_color": "#ffffff",
      "display": "standalone",
      "scope": "/",
      "start_url": "/",
      "short_name": "React PWA",
      "description": "Testing React PWA",
      "name": "React PWA Web Application",
      "icons": [
        {
          "src": "/vite.svg",
          "sizes": "64x64 32x32 24x24 16x16",
          "type": "image/svg"
        },
        {
          "src": "/vite.svg",
          "type": "image/svg",
          "sizes": "192x192"
        },
        {
          "src": "/vite.svg",
          "type": "image/svg",
          "sizes": "512x512"
        }
      ],
    }
  }
  ),],
});
