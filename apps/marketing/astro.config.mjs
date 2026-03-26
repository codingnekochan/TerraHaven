// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import react from "@astrojs/react";

import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(__dirname, '../../');


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server:{
      fs: {
        allow : [workspaceRoot]
      }
    }
  },

  integrations: [icon(), react()]
});