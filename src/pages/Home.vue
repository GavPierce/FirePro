<template>
  <div class="wrapper">
    <div class="left">
      <div class="title"> KEEP FACILITIES AND <br> OCCUPANTS   </div>
      <div class="safe"> SAFE </div>
      <div class="button">REQUEST A QUOTE </div>
      <div class="certificates">
       <img class="image1" src="../assets/certs/calfire.png" alt=""/>
        <img class="image2" src="../assets/certs/experience.svg" alt=""/>
        <img class="image3" src="../assets/certs/amerex.png" alt=""/>
        <img class="leaves1" src="../assets/certs/leaves.svg" alt=""/>
        <img class="leaves2" src="../assets/certs/leaves.svg" alt=""/>    
        <img class="leaves3" src="../assets/certs/leaves.svg" alt=""/>   
      </div>      
  </div>
  <div class="right">
    <img class="background" src="../assets/img/home-background.png" alt="" /> 
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
  padding-left:2em ;
  text-align: justify;
  font-size: 60px;
  position: relative;
  display: flex;
  overflow: hidden;
  top:-2em;
}

.title{
color: #000000;
width: 25em;
height: 10em;
padding-top: 4em;
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
margin-left: 2em;
border-radius: 33px;
padding: 0.3em 1em 0 1em;
}

.certificates{
margin-top: 1em;
display:flex;
position: relative;

}
.image1{
  height:2em;
max-width: 93px;
margin-left:-25px;  
}
.leaves1{
  height:3em;
  width: 3em;
  position: absolute;
  left:-70px;
  bottom:-30px;
}
.image2{
  margin-left:125px;
  height:2em;
max-width: 93px;  
}
.leaves2{
  height:3em;
  width: 3em;
  position: absolute;
  left: 150px;
  bottom:-30px;
}
.image3{
   margin-left:100px;
   height:2em;
max-width: 95px;  
}
.leaves3{
  height:3em;
  width: 3em;
  position: absolute;
  left:350px;
  bottom:-30px;
}
.background{
  
width: 500px;
height: 800px;
background-color:transparent;
object-fit: cover;
margin-left: 2em;
}
.left{
  width: 50%;
}
.right{
  width: 50%;
}

@media (max-width:1050px) {
  .right {
    display: none;
  }
}


</style>