import { fileURLToPath, URL } from 'node:url';
import VueRouter from 'unplugin-vue-router/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import Components from 'unplugin-vue-components/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
        /\.md$/, // .md
      ],
      imports: ['vue', VueRouterAutoImports],
      dts: true,
      viteOptimizeDeps: true,
    }),
    Components({
      /* options */
    }),
    VueRouter(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('iconify-icon'),
        },
      },
    }),
    tailwindcss(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
