import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/router";

createApp(App).use(router).mount("#app");
