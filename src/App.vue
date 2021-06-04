<template>
  <div id="app">
    <NavMenu />
    <MobileMenu />
    <router-view />
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";
import MobileMenu from "./components/MobileMenu.vue";
export default {
  name: "App",
  components: {
    NavMenu,
    MobileMenu,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
