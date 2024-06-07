import { createApp } from 'vue'
import App from './App.vue'
import setupVuetify from './plugins/vuetify'


const app = createApp(App)

setupVuetify(app)

app.mount('#app')
