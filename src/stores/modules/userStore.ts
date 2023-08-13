import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore', {
    // 推荐使用 完整类型推断的箭头函数
    state: () => ({
        token: {} as object,
    }),
    actions: {
    },
    getters: {},
    persist: {
        // 开启持久化
        enabled: true,
        // 选择存储方式和内容
        strategies: [
            { storage: localStorage, paths: ['token'] }
        ]
    }
})
