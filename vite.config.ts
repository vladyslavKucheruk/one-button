import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@shared": resolve(__dirname, "./src/shared"),
      "@widgets": resolve(__dirname, "./src/widgets"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@features": resolve(__dirname, "./src/features"),
    },
  },
});
