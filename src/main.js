import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// export const eventBus = new vue()


const myApp = createApp(App)
myApp.use(store)
myApp.mount('#app')