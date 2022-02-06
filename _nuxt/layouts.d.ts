import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module 'C:/Users/Jeevan Kumar/Desktop/NUXT3_APP/nuxt3-app/node_modules/nuxt3/dist/pages/runtime/composables' {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}