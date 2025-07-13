import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: mode === "production" ? "/showunit.paradise/" : "/", // Gunakan "/" untuk dev
    server: {
      hmr: true, // Aktifkan Hot Module Replacement
      watch: { usePolling: true }, // Pantau perubahan file
      headers: { "Cache-Control": "no-store, no-cache, must-revalidate" }, // Nonaktifkan cache di dev
    },
  };
});
