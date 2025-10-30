import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables if needed (for future scalability)
  const env = loadEnv(mode, process.cwd(), "");

  const isDev = mode === "development";

  return {
    // ✅ IMPORTANT: use "/" for root-domain deployment
    // Example: https://www.preformit.se/
    base: "/",

    server: {
      host: "0.0.0.0", // accessible locally & in Docker if needed
      port: 8080,
      open: true,      // automatically open in browser on dev start
    },

    plugins: [
      react(),
      isDev && componentTagger()
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: false, // disable source maps in prod for speed & security
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,   // remove console.* in production
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: undefined, // better single-bundle LCP
        },
      },
    },

    preview: {
      port: 4173,
      strictPort: true,
      open: true,
    },
  };
});
