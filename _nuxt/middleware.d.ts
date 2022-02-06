import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module 'C:/Users/Jeevan Kumar/Desktop/NUXT3_APP/nuxt3-app/node_modules/nuxt3/dist/pages/runtime/composables' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}