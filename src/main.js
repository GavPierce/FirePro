import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import AboutUs from "./pages/AboutUs.vue";
import Home from "./pages/Home.vue";
import ContactUs from "./pages/ContactUs.vue";
import Services from "./pages/Services.vue";
import Testimonial from "./pages/Testimonial.vue";
import Work from "./pages/Work.vue";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

Vue.use(VueSplide);
Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/about-us", component: AboutUs },
  { path: "/contact-us", component: ContactUs },
  { path: "/Services", component: Services },
  { path: "/Testimonial", component: Testimonial },
  { path: "/Work", component: Work },
  { path: "/work", component: Work }
];

const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
