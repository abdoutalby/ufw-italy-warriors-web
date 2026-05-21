import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss(), tsconfigPaths()],
  },
  output: 'static',
  // Make sure base matches your GitHub Pages repository name if it's not a custom domain.
  // Example: base: '/my-repo-name'
});
