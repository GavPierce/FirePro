import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import AboutUs from "./pages/AboutUs.vue";
import Home from "./pages/Home.vue";
import Services from "./pages/Services.vue";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

Vue.use(VueSplide);
Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/about-us", component: AboutUs },
  { path: "/Services", 
    component: Services,
    props: (route) => ({
      activeService: route.query.activeService
    })
  },

];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
