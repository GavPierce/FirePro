<template>
  <div class="container">
    <div class="menu">
      <div>LOGO</div>
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
     
      <div class="item" v-on:click="isOpen=false">
        <router-link to="/Services">SERVICES</router-link> 
        </div>
      <div class="item" v-on:click="isOpen=false">
        <router-link to="/about-us">ABOUT US</router-link>
        </div>
      <div class="item" v-on:click="isOpen=false">
        <router-link to="/Work">WORK</router-link>
      </div>  
      <div class="item" v-on:click="isOpen=false">
        <router-link to="/Testimonial">TESTIMONIAL</router-link>
      </div>
      <div class="item" v-on:click="isOpen=false">
        <router-link to="/contact-us">CONTACT US</router-link> 
      </div>
      <div class="item number" v-on:click="showBox = true">
         805-487-1477
         </div>


      <div class="box" v-if="showBox">
    <div class="top-bar">    
      <h3>REQUEST A QUOTE</h3>
      <div class="close" @click="showBox=false">X</div>
    </div>
      <h6>Contact us for a no obligation</h6>
      <h6>quote by calling</h6>
     <h4>805-487-1477</h4>
     <h6>Or complete the form below</h6>

    <div class="label">Name:</div>
        <input type="text"  ><br><br>
        <div class="label">Telephone:</div>
        <input type="text"><br><br>
        <div class="label">Email:</div>
        <input type="text" ><br><br>
        <div class="label">Message:</div>
        <input class="Message" type="text"><br><br>
        <div class="Buttom">SUBMIT</div>
  </div>
      
    </div>
  </div>
  
</template>

<script>
export default {
  data: function() {
    return {
      isOpen: false,
      showBox:false,
      
    }
  },
};
</script>
<style>
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
  padding: 2em;
  position: relative;
  z-index: 2;
  color: white;
  background-color: orangered;
}
.list {
  height: 0;
  position: relative;
  top: -19em;
  z-index: 1;
  transition: ease 0.5s;
  width: 100%;
  text-align: center;
}
.list .item {
  background-color: white;
}
.number{
  background-color: orangered !important;
  color: white;
  font-size: 1em;
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
  margin-left: 30%;
  margin-right: 30%;
  
}
.list.active {
  top: 0;
}

@media screen and (min-width: 1000px) {
  .container {
    display: none;
  } 
}

@media (max-width:1050px) {
  .background {
    display: none;
  }
}
.hamburger{
  cursor: pointer;
}
.box{
  background-color: #FF6701;
  height:26em;
  width: 27em ;
  position: fixed;
  left: calc(50% - 12.5em);
  top: calc(50% - 10em);
  line-height:0;
  margin: 0;
  padding: 2 em;
  border-radius:2em;
  color: #FFFFFF
  
}



</style>
