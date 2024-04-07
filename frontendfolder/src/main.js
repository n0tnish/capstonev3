import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap';


bootstrap(App, { store, router })

createApp(App).use(store).use(router).mount('#app')
