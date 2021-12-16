import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     '/@/': resolve('./src/'),
  //     '/router/': resolve('./router/'),
  //     '/utils/': resolve('./utils/')
  //   }
  // },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: 'store',
        replacement: resolve(__dirname, 'src/store/store')
      }
    ],
    extensions: ['.js', '.vue', '.json', '.scss', '.ts', '.mjs', '*']
  },
  base: './', // 打包路径
  server: {
    port: 4000, // 服务端口号
    hmr: { overlay: false },
    fs: { strict: false },
    open: true, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  }
})
