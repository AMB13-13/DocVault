import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  preview: {
    allowedHosts: [
      "docvault-production-5214.up.railway.app",
    ],
  },
});