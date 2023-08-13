import {createApp} from "vue";
import App from "./App.vue";
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "./base.scss";
import "vue3-video-play/dist/style.css"; // 引入css
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import mitt from "mitt";
import router from "@/router/index.ts";
import pinia from './stores'

const app = createApp(App);

// 将 $Bus 设置为全局属性
app.config.globalProperties.Bus = mitt();

app.use(vue3videoPlay)
    .use(ElementPlus)
    .use(pinia)
    .use(router)
    .mount("#app");
