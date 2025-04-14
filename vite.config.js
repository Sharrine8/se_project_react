import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", //add for github pages deployment
  plugins: [react()],
  server: {
    port: 3000,
  },
});
