import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: []
  },
  site: 'https://www.alan-blog-cd.netlify.app',
  build:{
    format: 'file'
  }
});