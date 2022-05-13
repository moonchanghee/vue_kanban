import { createApp } from 'vue'
import App from './App.vue'
import store from './store'


const myApp = createApp(App)
myApp.use(store)
myApp.mount('#app')