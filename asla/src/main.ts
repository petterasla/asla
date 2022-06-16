import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vue3GoogleLogin from 'vue3-google-login'


createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .use(vue3GoogleLogin, {
        clientId: '749862802460-aeuuju8u5m1l6s12bb0671ard7g216vs.apps.googleusercontent.com'
    })
    .mount("#app");

//app.config.globalProperties.$store=store;