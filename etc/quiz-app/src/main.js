import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
import router from './router';

import messages from '@/assets/translations';

const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');