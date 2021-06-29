<template>
  <div class="Navmenu">
    <router-link to="/"
      ><img class="mainlogo" src="../assets/logo/logo.png" alt=""
    /></router-link>
    <div class="items">
      <div class="item">
        <router-link to="/Services"><strong>SERVICES</strong></router-link>
      </div>
      <div class="item">
        <router-link to="/about-us">ABOUT US</router-link>
      </div>
      <div class="item"><router-link to="/Work">WORK</router-link></div>
      <div class="item">
        <router-link to="/Testimonial">TESTIMONIAL</router-link>
      </div>
      <div class="item">
        <router-link to="/contact-us">CONTACT US</router-link>
      </div>
      <div class="phone" v-on:click="open">805-487-1477</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      console.log("hi there");
      this.$emit("showQuote", true);
    }
  }
};
</script>
<style>
.Navmenu {
  justify-content: space-between;
  border-radius: 35px;
  background: white;
  box-shadow: 5px 10px 20px #b8b7b7;
  display: flex;
  text-decoration: none;
  top: 1em;
  margin: 1em 175px;
  position: sticky;
  z-index: 99;
  width: 90%;
  align-items: center;
  font-size: 15px;
  margin-left: 2.5em;
}
@media screen and (max-width: 1314px) {
  .Navmenu {
    display: none;
  }
}
@media screen and (max-width: 1070px) {
  .Navmenu .phone {
    padding-top: 1em;
    font-size: 0em;
  }
}
.icon {
  display: inline-block;
  cursor: pointer;
}
.item {
  padding: 0.6em 0.5em;
  font-weight: 600;
}
.phone {
  background-color: orangered;
  color: white;
  font-size: 1.3em;
  border-radius: 30px;
  padding: 0.5em 1em;
  margin-left: 2em;
  cursor: pointer;
  margin-right: 0em;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: orange;
}
.top-bar {
  display: flex;
  text-align: center;
  justify-content: center;
  padding-top: 1em;
}

.close {
  position: relative;
  right: -6em;
  top: 1.4em;
  cursor: pointer;
}

input {
  width: 60%;
  padding: 3px 2px;
  margin: 9px 0;
  border-radius: 25ex;
  border: 0;
}
.Message {
  width: 60%;
  height: 70px;
  padding: 3px 2px;
  border-radius: 30px;
  resize: none;
}
.label {
  text-align: left;
  margin-left: 9em;
  font-size: 0.6em;
  color: #ffffff;
}
.Buttom {
  color: #ffffff;
  font-size: 0.8em;
  cursor: pointer;
}

.mainlogo {
  height: 40px;
  margin: 1px 4px;
  opacity: 0.75;
  cursor: pointer;
}
.items {
  display: flex;
  align-items: center;
}
</style>
