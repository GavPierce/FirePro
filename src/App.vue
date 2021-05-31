<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Norlan />
    <Norlan />
    <Norlan />
    <Norlan />
  </div>
</template>

<script>
import Norlan from "./components/Norlan.vue";

export default {
  name: "App",
  components: {
    Norlan,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
