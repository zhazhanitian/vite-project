import { createStore, createLogger } from 'vuex'
import userInfo, { userInfoState } from './modules/userInfo'

const debug = import.meta.env.VITE_APP_ENV !== 'production'

export interface State {
  userInfo: userInfoState
}

export const modules = {
  userInfo
}

export default createStore<State>({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

// import { InjectionKey } from 'vue'
// import { createStore, useStore as baseUseStore, Store } from 'vuex'

// // 手动声明 state 类型
// export interface State {
//   count: number
//   token: string
// }

// // 定义注入类型
// // eslint-disable-next-line symbol-description
// export const key: InjectionKey<Store<State>> = Symbol()

// export const store = createStore<State>({
//   state() {
//     return {
//       count: 0,
//       token: ''
//     }
//   },

//   mutations: {
//     increment(state: State) {
//       state.count += 1
//     }
//   },

//   actions: {
//     increment(context) {
//       context.commit('increment')
//     }
//   },

//   getters: {
//     double(state: State) {
//       return 2 * state.count
//     },
//     getToken(state: State): string {
//       return state.token
//     }
//   }
// })

// // 定义自己的 `useStore` 组合式函数
// export function useStore() {
//   return baseUseStore(key)
// }
