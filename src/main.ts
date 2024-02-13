import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css';

const Toast = ({
    toast: true,
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true
});

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueSweetalert2, Toast)
app.mount('#app')
