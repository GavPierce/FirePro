<template>
  <div id="app">
    <NavMenu />
    <router-view />
  </div>
</template>

<script>
import NavMenu from './components/NavMenu';
export default {
  name: "App",
  components: {
    NavMenu
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
