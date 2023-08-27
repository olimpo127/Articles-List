import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { useArticleStore } from './stores/articleStore';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

createApp(App).mount('#app')
