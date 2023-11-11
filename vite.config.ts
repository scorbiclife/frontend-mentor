import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(new URL(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: resolve(__filename, "../src"),
  base: "", // use relative hrefs when bundling
  build: {
    outDir: resolve(__filename, "../dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__filename, "../src/index.html"),
        "product-preview-card-component": resolve(
          __filename,
          "../src/product-preview-card-component/index.html"
        ),
        "interactive-rating-component": resolve(
          __filename,
          "../src/interactive-rating-component/index.html"
        ),
      },
    },
  },
});
