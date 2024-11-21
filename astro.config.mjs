import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    build: {
        assets: 'assets' //instead of '_astro'
    },
    site: 'https://nuj716.github.io',
    base: '/threejs-land'
});
