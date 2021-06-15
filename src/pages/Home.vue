<template>
  <div class="wrapper">
    <div class="title"> </div>
    <div class="safe"> </div>
    <div class="button"> </div>
    <div class="certificates">
      <div class="calfire"></div>
      <div class="experience"></div>
      <div class="amerex"></div>
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
  margin-left: 6em;
}

.title{
background-color: #000000;
width: 25em;
margin-top: 15em;
height: 10em;
}

.safe {
background-color:#FEA82F;
width: 9em;
height: 2em;
margin-top: 1em;

}

.button{
background-color: #FF6701;
width: 9em;
height: 2em;;
margin-top: 3em;
padding-right:25px;
margin-left: 5em;
}

.certificates{
background-color: blueviolet;
width: 35em;
margin-top:2em;
margin-left: 5em;
display:flex;

}

.calfire{
background-color: green;
width: 10em;
height: 6em;
margin-bottom: 5em;
margin-left: 2.5em;
float: left;
}
.experience{
background-color:black;
width: 10em;
height: 6em;
margin-bottom: 5em;
float: left;
}
.amerex{
background-color:pink;
width: 10em;
height: 6em;
margin-bottom: 5em;
float: left;
}


</style>
