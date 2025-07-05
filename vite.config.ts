import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: mode === 'development',
    // Optimize chunk size and splitting
    chunkSizeWarningLimit: 700, // Set warning limit to 700kb
    rollupOptions: {
      output: {
        // Customize chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        // Better chunk splitting strategy
        manualChunks: (id) => {
          // Group UI components in one chunk
          if (id.includes('node_modules/@radix-ui') || id.includes('src/components/ui/')) {
            return 'ui-components';
          }
          
          // Group React and related packages
          if (id.includes('node_modules/react') ||
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/scheduler')) {
            return 'react-vendor';
          }
          
          // Group routing-related packages
          if (id.includes('node_modules/react-router') ||
              id.includes('node_modules/react-router-dom') ||
              id.includes('node_modules/@remix-run')) {
            return 'router-vendor';
          }
          
          // Group service pages
          if (id.includes('/pages/services/')) {
            return 'services-pages';
          }
          
          // Group industry pages
          if (id.includes('/pages/industries/')) {
            return 'industry-pages';
          }
          
          // Group area pages
          if (id.includes('/pages/areas/')) {
            return 'area-pages';
          }
          
          // Keep other pages individually code-split
          if (id.includes('/pages/') && !id.includes('Index') && !id.includes('NotFound')) {
            return 'other-pages';
          }
        }
      }
    },
    // Enable code splitting
    cssCodeSplit: true,
  }
}));
