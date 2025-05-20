import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
// 不曉得為什麼裝了 TailwindCSS 後 relativeLinks 會報錯
// import relativeLinks from "oastro-relative-links";

// https://astro.build/config
export default defineConfig({
  // integrations: [relativeLinks()],
  vite: {
    plugins: [tailwindcss()],
  },
});
