<template>
  <div class="Navmenu">

    <meta name="Icon" content="width=device-width, initial-scale=1">

    <div class="item">
      <router-link to="/Services">SERVICES</router-link>
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
export default {
  data: function() {
    return {
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
.icon {
  display: inline-block;
  cursor: pointer;
}
.item {

  padding: 1em 0.5em;
 
}

.phone {
  background-color: #FF6701;
  color: white;
  font-size: 1.3em;
  border-radius: 25px;
  padding: 0.7em 1em;
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
