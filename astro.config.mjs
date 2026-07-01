import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://bit-squid.com',
  base: '/',
  output: 'static',
  integrations: [react()],
  build: {
    assets: 'assets',
  },
  vite: {
    ssr: {
      noExternal: ['styled-components'],
    },
  },
});
