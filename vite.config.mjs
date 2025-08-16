import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
  plugins: [
    tailwindcss(),
    ViteEjsPlugin({
      title: "My Website", // global variable
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        contact: "contact.html",
      },
    },
  },
  base: "/resturant/",
});
