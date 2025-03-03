import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      hooks: "/src/hooks",
      features: "/src/features",
      store: "/src/store",
      pages: "/src/pages",
      data: "/src/data"
    },
  },
});
