import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: "lesson*.md", dest: "." },
        { src: "toc.md", dest: "." },
        { src: "images", dest: "." },
        { src: "arrays", dest: "." },
        { src: "bookstore", dest: "." },
        { src: "functions", dest: "." },
        { src: "objects", dest: "." },
        { src: "project", dest: "." },
      ],
    }),
  ],
});
