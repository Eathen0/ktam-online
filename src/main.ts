import { createApp } from 'vue'
import './style.css'
import 'vue3-toastify/dist/index.css';
import App from './App.vue'
import router from './routers/router'
import appConfigs from './configs/appConfigs'
import Vue3Toastify, {type ToastContainerOptions} from "vue3-toastify";

const app = createApp(App)
app.config.globalProperties.$appConfigs = appConfigs
app.use(router)
app.config.errorHandler = (err, vm, info) => {
    console.error('ERROR FROM ERROR HANDLER: ', err)
    console.error('ERROR FROM ERROR HANDLER: ', vm)
    console.error('ERROR FROM ERROR HANDLER: ', info)
    // router.push({ name: 'error' })
}
app.use(Vue3Toastify, {
    position: 'top-right',
    duration: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    hideProgressBar: false,
    icon: true,
    limit: 3,
    newestOnTop: true,
} as ToastContainerOptions)
app.mount('#app')
