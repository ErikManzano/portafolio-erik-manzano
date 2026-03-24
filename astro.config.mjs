import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

export default defineConfig({
  // Configuración de Astro
  integrations: [],

  vite: {
    ssr: {
      external: ["aos"]
    }
  },

  adapter: netlify()
});