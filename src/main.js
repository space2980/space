import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
const app = createApp(App)

// 使用模块
app.use(ElementPlus)
app.use(router)
// 挂载
app.mount('#app')
