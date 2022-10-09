// import { createApp } from 'vue';
// import App from './App.vue';
// import  Vue  from 'vue';

import Toaster from "@meforma/vue-toaster";
// import VueToast from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-sugar.css';
// import 'vue-toast-notification/dist/theme-sugar.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



import router from "./router";

// import AOS from "aos";
// import "aos/dist/aos.css";

// const app = createApp(App);

// app.use(router);
// app.mount("#app");

// new Vue({
//     created() {
//       AOS.init({ disable: "phone" });
//     },
//     router,
//     render: h => h(App)
//   }).mount("#app");


import { createApp } from 'vue'
import App from './App.vue'
import AOS from "aos";
import "aos/dist/aos.css";
import $ from 'jquery'
import {BackgroundVideo} from './assets/Slide1-1.mp4'

import { BIconCardImage, BIconGear, BIconPhone, BIconDisplay, BIconChevronBarRight, BIconCircle, BIconChevronRight} from 'bootstrap-icons-vue';

import VueParticles from 'vue-particles'
// import Particles from "particles.vue";
import VideoBg from 'vue-videobg'

const app = createApp(App)
app.component('BIconCardImage', BIconCardImage);
app.component('BIconGear', BIconGear);
app.component('BIconPhone', BIconPhone);
app.component('BIconDisplay', BIconDisplay);
app.component('BIconChevronBarRight', BIconChevronBarRight);
app.component('BIconCircle', BIconCircle);
app.component('video-bg', VideoBg)
app.component('BIconChevronRight', BIconChevronRight)
app.component('BackgroundVideo',BackgroundVideo);


app.AOS = new AOS.init({ disable: "phone" });
app.use(VueParticles)
app.use(router);
app.use(Toaster);
app.use($);
// app.use(VueToast);
// app.use(BackgroundVideo);
app.use(AOS).mount('#app')
