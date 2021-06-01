<template>

<div class="Navmenu">
  <div class="item">
     <router-link to="/about-us">AboutUS</router-link> 
  </div>
  <div class="item"> <router-link to="/contact-us">ContactUs</router-link> </div>
<div class="item"><router-link to="/">Home</router-link></div>
<div class="item"><router-link to="/Services">Services</router-link></div>
<div class="item"> <router-link to="/Testimonial">Testimonial</router-link></div>
<div class="item"><router-link to="/Work">Work</router-link></div>

  </div>


</template>

<script>
export default {};
</script>
<style>
.Navmenu {
  background: grey;
  padding: 1em 0;
  width: 50%;
  justify-content: flex-end;
  margin-left: 22%;
    border: 1px solid grey;
    border-radius: 10px;
    background: white;
    padding: 1em 0;
    width: 75%;
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
} 
.item {
  padding: 0 0.5em;
}
</style>

