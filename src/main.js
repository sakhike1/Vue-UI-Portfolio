import { createApp } from 'vue'
import VWave from 'v-wave'
import App from './App.vue'
import router from './router'
import "./assets/tailwind.css";
import './assets/tailwind.css';

createApp(App).use(VWave).use(router).mount('#app')
