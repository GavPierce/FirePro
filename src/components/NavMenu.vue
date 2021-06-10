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
    <div class="phone">805-487-1477</div>
  </div>
</template>

<script>
export default {};
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
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: orange;
}
</style>
