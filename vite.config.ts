import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ✅ Vite config for PreForm IT (MissHosting + custom domain)
export default defineConfig({
  base: "/", // ✅ since you're hosting on your own domain (https://www.preformit.se)

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      input: "index.html",
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
      },
    },
  },

  server: {
    host: "0.0.0.0",
    port: 8080,
  },

  preview: {
    port: 4173,
    open: true,
  },
});
