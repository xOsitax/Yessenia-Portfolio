import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Replace this with your actual GitHub repo name
const repoName = "Yessenia-Portfolio";

export default defineConfig({
  base: "/Yessenia-Portfolio",
  plugins: [react(), tailwindcss()],
});
