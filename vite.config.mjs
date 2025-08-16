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
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        order: resolve(__dirname, 'order_online.html'),
      }
    }
  },
  base: "/resturant/",
});
