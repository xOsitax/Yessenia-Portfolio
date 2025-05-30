import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace this with your actual GitHub repo name
const repoName = "Yessenia-Portfolio";

export default defineConfig({
  base: "/Yessenia-Portfolio/",
  plugins: [react()],
});
