<template>
  <div id="app">
    <NavMenu @showQuote="toggleQuoteBox" />
    <MobileMenu @showQuote="toggleQuoteBox" />
    <Quoteform @showQuote="toggleQuoteBox" v-if="showQuote" />
    <router-view @showQuote="toggleQuoteBox" />
    <ContactUs />
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";
import MobileMenu from "./components/MobileMenu.vue";
import Quoteform from "./components/Quote.vue";
import ContactUs from "./components/contact-us.vue";
export default {
  name: "App",

  data() {
    return {
      showQuote: false
    };
  },
  components: {
    NavMenu,
    MobileMenu,
    Quoteform,
    ContactUs
  },
  methods: {
    toggleQuoteBox(info) {
      console.log("Emit heard!");
      this.showQuote = info;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
