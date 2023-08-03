import { createApp } from 'vue'
import App from './App.vue'
import vue3videoPlay from 'vue3-video-play' // 引入组件
import './base.scss'
import 'vue3-video-play/dist/style.css' // 引入css
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(vue3videoPlay).use(ElementPlus).mount('#app')
