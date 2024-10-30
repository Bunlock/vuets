import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OrderService } from './services/order.service'

const app = createApp(App)

app.provide('orders', new OrderService())

app.use(router)

app.mount('#app')
