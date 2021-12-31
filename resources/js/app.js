// require('./bootstrap');
import App from './components/App'
import { createApp } from 'vue'
const app = createApp({
    components: {
        App
      }
});
app.mount('#app');