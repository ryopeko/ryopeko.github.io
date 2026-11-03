// @ts-check
import { defineConfig } from 'astro/config';

// user site (https://ryopeko.github.io/) なので base は不要
export default defineConfig({
  site: 'https://ryopeko.github.io',
  output: 'static',
});
