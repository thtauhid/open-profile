import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
import PWAmanifest from './manifest.json';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['/public/icons/favicon.ico', '/public/icons/apple-touch-icon.png'],
      registerType: 'autoUpdate',
      manifest: PWAmanifest,
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
