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
        "vite-mpa-test": resolve(__filename, "../src/vite-mpa-test/index.html"),
      },
    },
  },
});
