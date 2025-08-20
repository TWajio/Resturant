import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { resolve } from "path";   // 👈 this was missing

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
        main: resolve(__dirname, "index.html"),
        our_menu: resolve(__dirname, "menu.html"),
        about: resolve(__dirname, "about.html"),
        order: resolve(__dirname, "Order_Online.html"),
      },
    },
  },
  base: "/resturant/", // 👈 must match your repo name exactly
});
