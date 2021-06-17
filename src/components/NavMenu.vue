<template>
  <div class="Navmenu">
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
    <div class="phone" @click="showBox=true">805-487-1477</div>

  <div class="box" v-if="showBox">
    <div class="top-bar">    
      <h3>REQUEST A QUOTE </h3>
      <div class="close" @click="showBox=false">X</div>
    </div>
    <h6>Contact us for a no obligation</h6>
    <h6>quote by phoning</h6>
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
</template>

<script>
export default {
  data () {
    return {
      showBox: false
    }
  }
};
</script>
<style>
.Navmenu {
  justify-content: flex-end;
  border-radius: 40px;
  background: white;
  box-shadow: 5px 10px 20px #b8b7b7;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  top: 1em;
  margin: 1em 175px;
  position: sticky;
}
@media screen and (max-width: 1000px) {
  .Navmenu {
    display: none;
  }
  }
@media screen and (max-width: 1070px) {
  .Navmenu .phone {
   padding-top: .75em   ;
   font-size: 0.9em;
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
  border-radius: 25px;
  padding: 0.3em 1em 0 1em;
  margin-left: 2em;
  cursor: pointer;
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
input {
  width: 60%;
  padding: 3px 2px;
  margin: 9px 0;
  border-radius: 25ex;
  border:0
  
  
}
.Message
{
  width: 60%;
  height: 70px;
  padding: 3px 2px;
  border-radius: 30px;
  resize: none;
}
  .label {
    text-align: left;
    margin-left:9em;
    font-size: .60em;
    color: #FFFFFF;
  }
.Buttom {
  color: #FFFFFF;
  font-size: .80em;
  cursor: pointer;
}





</style>
