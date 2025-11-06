/// <reference types="vite/client" />

// 为 .vue 文件提供类型声明，避免 TS "找不到模块或其类型声明" 的报错
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>>
  export default component
}