import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Pinia
import { createPinia } from "pinia";

// Event Bus باستخدام mitt
import mitt from "mitt";
const Emitter = mitt();

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "vuetify/dist/vuetify.min.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// Swiper Config
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faTimes, fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(faCheck, faTimes, far, fab, fas);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .provide("Emitter", Emitter) // توفير Emitter
  .use(createPinia())
  .use(router)
  .mount("#app");
