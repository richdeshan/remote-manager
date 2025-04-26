import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';  // Pastikan mengimpor style Vuetify

const vuetify = createVuetify();  // Membuat instansi Vuetify

createApp(App)
  .use(vuetify)  // Menggunakan Vuetify dalam aplikasi Vue
  .mount('#app');
