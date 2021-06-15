<template>
  <div class="wrapper">
    <img class="background" src="../assets/img/home-background.png" alt="" />
    <div class="title"> KEEP FACILITIES AND <br> OCCUPANTS   </div>
    <div class="safe"> SAFE </div>
    <div class="button">REQUEST A QUOTE </div>
    <div class="certificates">
      <img class="image1" src="../assets/certs/calfire.png" alt=""/>
      <img class="image2" src="../assets/certs/experience.svg" alt=""/>
      <img class="image3" src="../assets/certs/amerex.png" alt=""/>
      
      
    </div>
      </div>


</template>

<script>
export default {
  components: {},
};
</script>
<style>
.wrapper {
  z-index: -2;
  margin-left:2em;
  text-align: justify;
  font-size: 60px;
  position: relative;
}

.title{
color: #000000;
width: 25em;
margin-top: -10em;
height: 10em;
}

.safe {
color:#FEA82F;
width: 9em;
height: 2em;
margin-top:-7em;

}

.button{
background-color: #FF6701;
color: #F4F0EA;
font-size: 30px;
width: 9em;
height:2em;
margin-top: 1em;
margin-left: 2em;
border-radius: 33px;
padding: 0.3em 1em 0 1em;
}

.certificates{
margin-top: 1em;
display:flex;
}
.image1{
  height:2em;
  width: 2em;
}
.image2{
  margin-left:80px;
  height:2em;
  width: 2em;
}
.image3{
   margin-left:80px;
   height:2em;
   width: 2em;
}
.background{
  
margin-left:11em;
width: 500px;
height: 800px;
background-color:transparent;
margin-top: -1.5em;

}
</style>