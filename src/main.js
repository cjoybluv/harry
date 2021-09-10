import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "prismjs/themes/prism-coy.css";
import "@/assets/layout/layout.scss";
import "@/assets/layout/flags/flags.css";

import { createApp, reactive } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

import PrimeVue from "primevue/config";
import { registerPrime } from "./primeComponentReg";

const app = createApp(App).use(store).use(router).use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);
app.use(PrimeVue, { ripple: true });
app.config.globalProperties.$appState = reactive({ inputStyle: "outlined" });
registerPrime(app);
app.mount("#app");
