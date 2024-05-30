import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App); // Define the app
app.use(router); // Use the router
app.use(store); // Use the store
app.mount('#app'); // Mount the app to the '#app' element
