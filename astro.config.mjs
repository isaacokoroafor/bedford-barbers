// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";
import sanity from "@sanity/astro";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://bedford-barbers.vercel.app',
  integrations: [react(), icon(), sanity({
    projectId: 'hmnd7ebx',
    dataset: 'production',
    // Set useCdn to false if you're building statically.
    useCdn: false,
    studioBasePath: '/studio',
    stega: {
        studioUrl: "/studio",
      },
  }), sitemap()],

  adapter: vercel(),
});