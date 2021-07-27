<template>
  <div class="Navmenu">
          <router-link to="/"
      >
    <div class="brand">

        <img class="mainlogo" src="../assets/logo/Logo-no-background.png" alt=""/>

          <div class="company-name">Service Pro</div>

    </div>
                  </router-link>

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
  background-color: #FF6701;
  color: white;
  font-size: 1.3em;
  border-radius: 30px;
  padding: 0.5em 1em;
  margin-left: 2em;
  cursor: pointer;
  margin-right: .5em;
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

.brand {
  display: flex;
}
.mainlogo {
  height: 70px;
  margin: 1px 4px;
  cursor: pointer;
  margin-left: 3em;
}
.company-name {
  color:#b91e24;
  font-family: 'Sigmar One', cursive;
  vertical-align: middle;
  display: flex;
  align-items: center;
  font-size: 2em;
}
.items {
  display: flex;
  align-items: center;
}
</style>
