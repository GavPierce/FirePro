<template>
  <div class="container">
    <div class="menu">
      <router-link to="/"
        ><img class="mainlogo" src="../assets/logo/logo.png" alt=""
      /></router-link>

      <div>
        <div
          class="hamburger"
          :class="{ open: isOpen }"
          id="hamburger-6"
          v-on:click="isOpen = !isOpen"
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </div>

    <div class="list" :class="{ active: isOpen }">
      <div class="item" v-on:click="isOpen = false">
        <router-link to="/Services">SERVICES</router-link>
      </div>
      <div class="item" v-on:click="isOpen = false">
        <router-link to="/about-us">ABOUT US</router-link>
      </div>
      <div class="item" v-on:click="isOpen = false">
        <router-link to="/Work">WORK</router-link>
      </div>
      <div class="item" v-on:click="isOpen = false">
        <router-link to="/Testimonial">TESTIMONIAL</router-link>
      </div>
      <div class="item" v-on:click="isOpen = false">
        <router-link to="/contact-us">CONTACT US</router-link>
      </div>
      <div class="item number" v-on:click="open, (isOpen = false)">
        805-487-1477
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      showBox: false
    };
  },

  methods: {
    open() {
      this.$emit("showQuote", true);
    }
  }
};
</script>
<style scoped>
.open span {
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-transition-delay: 0.6s;
  -o-transition-delay: 0.6s;
  transition-delay: 0.6s;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
#hamburger-6.open .line:nth-child(2) {
  width: 0px;
}

#hamburger-6.open .line:nth-child(1),
#hamburger-6.open .line:nth-child(3) {
  -webkit-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

#hamburger-6.open .line:nth-child(1) {
  -webkit-transform: translateY(13px);
  -ms-transform: translateY(13px);
  -o-transform: translateY(13px);
  transform: translateY(13px) rotate(135deg);
}

#hamburger-6.open .line:nth-child(3) {
  -webkit-transform: translateY(-13px) rotate(90deg);
  -ms-transform: translateY(-13px) rotate(90deg);
  -o-transform: translateY(-13px) rotate(90deg);
  transform: translateY(-13px) rotate(45deg);
}

.hamburger .line {
  width: 50px;
  height: 5px;
  background-color: #ecf0f1;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.menu {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  width: 99.5%;
  z-index: 1;
  color: white;
  background-color: orangered;
}
.list {
  height: 0;
  position: relative;
  top: -24em;
  z-index: -2;
  transition: ease 0.5s;
  width: 100%;
  text-align: center;
}
.list .item {
  background-color: white;
}
.number {
  background-color: orangered !important;
  color: white;
  font-size: 1em;
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
  margin-left: 40%;
  margin-right: 30%;
}
.list.active {
  top: 0;
}

@media screen and (min-width: 1314px) {
  .container {
    display: none;
  }
}

.hamburger {
  cursor: pointer;
}
.container {
  position: fixed;
  width: 98%;
  z-index: 99;
}
.mainlogo {
  margin-right: 300px;
  height: 50px;
  margin-top: 2px;
  cursor: pointer;
}
</style>
