import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Clear type-safe configuration bundle
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
