// vite.config.ts
import VueI18n from "file:///run/media/drive2/Developing/flame-launcher/node_modules/.pnpm/@intlify+unplugin-vue-i18n@0.13.0_rollup@2.79.1_vue-i18n-bridge@9.13.1_vue@2.7.16__vue-i18n@8.28.2_vue@2.7.16_/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import createVuePlugin from "file:///run/media/drive2/Developing/flame-launcher/node_modules/.pnpm/@vitejs+plugin-vue2@2.3.1_vite@3.2.10_@types+node@20.12.7_terser@5.20.0__vue@2.7.16/node_modules/@vitejs/plugin-vue2/dist/index.mjs";
import { readdirSync } from "fs";
import { join, resolve } from "path";
import AutoImport from "file:///run/media/drive2/Developing/flame-launcher/node_modules/.pnpm/unplugin-auto-import@0.17.6_@vueuse+core@10.9.0_vue@2.7.16__rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import { defineConfig } from "file:///run/media/drive2/Developing/flame-launcher/node_modules/.pnpm/vite@3.2.10_@types+node@20.12.7_terser@5.20.0/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///run/media/drive2/Developing/flame-launcher/node_modules/.pnpm/unocss@0.61.0_postcss@8.4.40_rollup@2.79.1_vite@3.2.10_@types+node@20.12.7_terser@5.20.0_/node_modules/unocss/dist/vite.mjs";
var __vite_injected_original_dirname = "/run/media/drive2/Developing/flame-launcher/xmcl-keystone-ui";
var entries = readdirSync(join(__vite_injected_original_dirname, "./src")).filter((f) => f.endsWith(".html")).map((f) => join(__vite_injected_original_dirname, "./src", f));
var vite_config_default = defineConfig({
  server: {
    port: 3e3
  },
  root: join(__vite_injected_original_dirname, "./src"),
  base: "",
  build: {
    rollupOptions: {
      input: entries,
      external: ["electron"]
    },
    minify: "terser",
    sourcemap: true,
    terserOptions: {
      keep_classnames: true
    },
    outDir: resolve(__vite_injected_original_dirname, "./dist"),
    assetsInlineLimit: 0
  },
  define: {},
  resolve: {
    alias: {
      undici: "undici-shim",
      "@": join(__vite_injected_original_dirname, "./src"),
      "~main": join(__vite_injected_original_dirname, "./src/windows/main"),
      "~logger": join(__vite_injected_original_dirname, "./src/windows/logger"),
      "~setup": join(__vite_injected_original_dirname, "./src/windows/setup"),
      "@vue/composition-api": "vue",
      "vue-i18n-bridge": "vue-i18n-bridge/dist/vue-i18n-bridge.runtime.esm-bundler.js"
    }
  },
  optimizeDeps: {
    exclude: ["electron"],
    esbuildOptions: {
      minify: false,
      keepNames: true
    }
  },
  plugins: [
    createVuePlugin(),
    UnoCSS(),
    VueI18n({
      include: [
        resolve(__vite_injected_original_dirname, "locales/**")
      ],
      esm: true,
      strictMessage: false,
      bridge: false
    }),
    AutoImport({
      imports: [
        "vue",
        {
          "vue-i18n-bridge": [
            "useI18n"
          ],
          "vue-router/composables": [
            "useRouter",
            "useRoute"
          ]
        }
      ],
      dts: "auto-imports.d.ts",
      exclude: ["node_modules", /xmcl\/packages.+/],
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcnVuL21lZGlhL2RyaXZlMi9EZXZlbG9waW5nL2ZsYW1lLWxhdW5jaGVyL3htY2wta2V5c3RvbmUtdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ydW4vbWVkaWEvZHJpdmUyL0RldmVsb3BpbmcvZmxhbWUtbGF1bmNoZXIveG1jbC1rZXlzdG9uZS11aS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vcnVuL21lZGlhL2RyaXZlMi9EZXZlbG9waW5nL2ZsYW1lLWxhdW5jaGVyL3htY2wta2V5c3RvbmUtdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgVnVlSTE4biBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuaW1wb3J0IGNyZWF0ZVZ1ZVBsdWdpbiBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUyJ1xuaW1wb3J0IHsgcmVhZGRpclN5bmMgfSBmcm9tICdmcydcbmltcG9ydCB7IGpvaW4sIHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuXG5jb25zdCBlbnRyaWVzID0gcmVhZGRpclN5bmMoam9pbihfX2Rpcm5hbWUsICcuL3NyYycpKVxuICAuZmlsdGVyKChmKSA9PiBmLmVuZHNXaXRoKCcuaHRtbCcpKVxuICAubWFwKChmKSA9PiBqb2luKF9fZGlybmFtZSwgJy4vc3JjJywgZikpXG5cbi8qKlxuICogVml0ZSBzaGFyZWQgY29uZmlnLCBhc3NpZ24gYWxpYXMgYW5kIHJvb3QgZGlyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG4gIHJvb3Q6IGpvaW4oX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgYmFzZTogJycsIC8vIGhhcyB0byBzZXQgdG8gZW1wdHkgc3RyaW5nIHNvIHRoZSBodG1sIGFzc2V0cyBwYXRoIHdpbGwgYmUgcmVsYXRpdmVcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDogZW50cmllcyxcbiAgICAgIGV4dGVybmFsOiBbJ2VsZWN0cm9uJ10sXG4gICAgfSxcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBrZWVwX2NsYXNzbmFtZXM6IHRydWUsXG4gICAgfSxcbiAgICBvdXREaXI6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9kaXN0JyksXG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDAsXG4gIH0sXG4gIGRlZmluZToge1xuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIHVuZGljaTogJ3VuZGljaS1zaGltJyxcbiAgICAgICdAJzogam9pbihfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgJ35tYWluJzogam9pbihfX2Rpcm5hbWUsICcuL3NyYy93aW5kb3dzL21haW4nKSxcbiAgICAgICd+bG9nZ2VyJzogam9pbihfX2Rpcm5hbWUsICcuL3NyYy93aW5kb3dzL2xvZ2dlcicpLFxuICAgICAgJ35zZXR1cCc6IGpvaW4oX19kaXJuYW1lLCAnLi9zcmMvd2luZG93cy9zZXR1cCcpLFxuICAgICAgJ0B2dWUvY29tcG9zaXRpb24tYXBpJzogJ3Z1ZScsXG4gICAgICAndnVlLWkxOG4tYnJpZGdlJzpcbiAgICAgICAgJ3Z1ZS1pMThuLWJyaWRnZS9kaXN0L3Z1ZS1pMThuLWJyaWRnZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzJyxcbiAgICB9LFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2VsZWN0cm9uJ10sXG4gICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgIG1pbmlmeTogZmFsc2UsXG4gICAgICBrZWVwTmFtZXM6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIGNyZWF0ZVZ1ZVBsdWdpbigpLFxuICAgIFVub0NTUygpLFxuICAgIC8vIFdpbmRpQ1NTKHtcbiAgICAvLyAgIGNvbmZpZzoge1xuICAgIC8vICAgICBpbXBvcnRhbnQ6IHRydWUsXG4gICAgLy8gICB9LFxuICAgIC8vICAgc2Nhbjoge1xuICAgIC8vICAgICBkaXJzOiBbam9pbihfX2Rpcm5hbWUsICcuL3NyYycpXSxcbiAgICAvLyAgICAgZmlsZUV4dGVuc2lvbnM6IFsndnVlJywgJ3RzJ10sXG4gICAgLy8gICB9LFxuICAgIC8vIH0pLFxuXG4gICAgVnVlSTE4bih7XG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgIHJlc29sdmUoX19kaXJuYW1lLCAnbG9jYWxlcy8qKicpLFxuICAgICAgXSxcbiAgICAgIGVzbTogdHJ1ZSxcbiAgICAgIHN0cmljdE1lc3NhZ2U6IGZhbHNlLFxuICAgICAgYnJpZGdlOiBmYWxzZSxcbiAgICB9KSxcblxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAge1xuICAgICAgICAgICd2dWUtaTE4bi1icmlkZ2UnOiBbXG4gICAgICAgICAgICAndXNlSTE4bicsXG4gICAgICAgICAgXSxcbiAgICAgICAgICAndnVlLXJvdXRlci9jb21wb3NhYmxlcyc6IFtcbiAgICAgICAgICAgICd1c2VSb3V0ZXInLFxuICAgICAgICAgICAgJ3VzZVJvdXRlJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGR0czogJ2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAgIGV4Y2x1ZGU6IFsnbm9kZV9tb2R1bGVzJywgL3htY2xcXC9wYWNrYWdlcy4rL10sXG4gICAgICBlc2xpbnRyYzoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBmaWxlcGF0aDogJy4vLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb24nLCAvLyBEZWZhdWx0IGAuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uYFxuICAgICAgICBnbG9iYWxzUHJvcFZhbHVlOiB0cnVlLCAvLyBEZWZhdWx0IGB0cnVlYCwgKHRydWUgfCBmYWxzZSB8ICdyZWFkb25seScgfCAncmVhZGFibGUnIHwgJ3dyaXRhYmxlJyB8ICd3cml0ZWFibGUnKVxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNXLE9BQU8sYUFBYTtBQUMxWCxPQUFPLHFCQUFxQjtBQUM1QixTQUFTLG1CQUFtQjtBQUM1QixTQUFTLE1BQU0sZUFBZTtBQUM5QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFlBQVk7QUFObkIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTSxVQUFVLFlBQVksS0FBSyxrQ0FBVyxPQUFPLENBQUMsRUFDakQsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLE9BQU8sQ0FBQyxFQUNqQyxJQUFJLENBQUMsTUFBTSxLQUFLLGtDQUFXLFNBQVMsQ0FBQyxDQUFDO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxNQUFNLEtBQUssa0NBQVcsT0FBTztBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLFVBQVUsQ0FBQyxVQUFVO0FBQUEsSUFDdkI7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLGlCQUFpQjtBQUFBLElBQ25CO0FBQUEsSUFDQSxRQUFRLFFBQVEsa0NBQVcsUUFBUTtBQUFBLElBQ25DLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxRQUFRLENBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLEtBQUssS0FBSyxrQ0FBVyxPQUFPO0FBQUEsTUFDNUIsU0FBUyxLQUFLLGtDQUFXLG9CQUFvQjtBQUFBLE1BQzdDLFdBQVcsS0FBSyxrQ0FBVyxzQkFBc0I7QUFBQSxNQUNqRCxVQUFVLEtBQUssa0NBQVcscUJBQXFCO0FBQUEsTUFDL0Msd0JBQXdCO0FBQUEsTUFDeEIsbUJBQ0U7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLFVBQVU7QUFBQSxJQUNwQixnQkFBZ0I7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsSUFDaEIsT0FBTztBQUFBLElBV1AsUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBLFFBQ1AsUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDakM7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxJQUNWLENBQUM7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFVBQ0UsbUJBQW1CO0FBQUEsWUFDakI7QUFBQSxVQUNGO0FBQUEsVUFDQSwwQkFBMEI7QUFBQSxZQUN4QjtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLFNBQVMsQ0FBQyxnQkFBZ0Isa0JBQWtCO0FBQUEsTUFDNUMsVUFBVTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsVUFBVTtBQUFBLFFBQ1Ysa0JBQWtCO0FBQUEsTUFDcEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
