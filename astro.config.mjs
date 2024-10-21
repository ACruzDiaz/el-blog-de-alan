import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: []
  },
  // site: 'https://www.my-site.dev',
  output: "static",
  adapter: netlify()
});