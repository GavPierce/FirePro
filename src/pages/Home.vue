<template>
  <div class="Wrapper">
    <div class="top">
      <div class="left">
        <div class="title">
          KEEP FACILITIES AND <br />
          OCCUPANTS
        </div>
        <div class="safe">SAFE</div>
        <div class="button" v-on:click="open">REQUEST A QUOTE</div>
        <div class="certificates">
          <img class="image1" src="../assets/certs/calfire.png" alt="" />
          <img class="image2" src="../assets/certs/experience.svg" alt="" />
          <img class="image3" src="../assets/certs/amerex.png" alt="" />
          <img class="leaves1" src="../assets/certs/leaves.svg" alt="" />
          <img class="leaves2" src="../assets/certs/leaves.svg" alt="" />
          <img class="leaves3" src="../assets/certs/leaves.svg" alt="" />
        </div>
      </div>
      <div class="right">
        <img
          class="background"
          src="../assets/img/home-background.png"
          alt=""
        />
        
      </div>
    </div>
    <div class="offers">
      <div class="offerbox">SPRINKLERS</div>
      <div class="offerbox">ALARMS</div>
      <div class="offerbox">FIRE EXTINGUISHERS</div>
      <div class="offerbox">KITCHEN SUPPRESION</div>
      <div class="offerbox">BACKFLOW</div>
    </div>
    <div class="boxoffer">
      <div class="rectangule">
        <p style="font-size:2vw;">WE OFFER PROFESIONAL FIRE PROTECTION SERVICES</p>
        </div>
        
        <div class="triangle">
        <p v-on:click="open" style="font-size:2vw;">REQUEST A QUOTE</p>
        </div>

      </div>
    </div>
  
</template>

<script>
export default {
  methods: {
    open() {
      console.log("from home button");
      this.$emit("showQuote", true);
    }
  }
};
</script>
<style>
.top {
  padding-left: 2em;
  text-align: justify;
  font-size: 60px;
  position: relative;
  display: flex;
  overflow: hidden;
  top: -2em;
}

.title {
  color: #000000;

  padding-top: 4em;
}

.safe {
  color: #fea82f;
}

.button {
  background-color: orangered;
  color: #f4f0ea;
  font-size: 30px;
  width: 9em;
  height: 2em;
  z-index: 100;
  margin-left: 2em;
  cursor: pointer;
  border-radius: 33px;
  padding: 0.3em 1em 0 1em;
  margin-top: 1em;
}

.certificates {
  margin-top: 1em;
  display: flex;
  position: relative;
  margin-left: 1.1em;
}
.image1 {
  height: 120px;
  max-width: 93px;
  margin-left: -25px;
}
.leaves1 {
  height: 3em;
  width: 3em;
  position: absolute;
  left: -70px;
  bottom: -15px;
}
.image2 {
  margin-left: 125px;
  height: 140px;
  max-width: 93px;
}
.leaves2 {
  height: 3em;
  width: 3em;
  position: absolute;
  left: 150px;
  bottom: -13px;
}
.image3 {
  margin-left: 100px;
  height: 115px;
  max-width: 95px;
}
.leaves3 {
  height: 3em;
  width: 3em;
  position: absolute;
  left: 350px;
  bottom: -13px;
}

.background{
  max-width: 100%;
}
 
.left {
  width: 50%;
}
.right {
  width: 50%;
  z-index: 2;
  margin-top: 0;
}

@media (max-width: 1050px) {
  .right {
    display: none;
  }
}

.offers {
  margin-top: -2em;
  display: flex;
  position: relative;
  margin-right: 60px;
  text-align: inherit;
  background: white;
  color: #000000;
  margin-bottom: 1em;
  flex-wrap: wrap;
  font-size: 13px;
  margin-left: 60px;
  
}

@media screen and (max-width: 900px) {
  .offers {
    flex-direction: column;
    
  }
}

.offerbox {
  width: 180px;
  height: 190px;
  margin-left: 40px;
  border: solid 1px #fea82f;
  box-shadow: 0px 15px 30px #b8b7b7;
  border-radius: 40px;
  margin-top:20px;
  margin: 20px auto;
  
}


.boxoffer {
  position: relative;
  margin-top: 5em;
  display: flex;
  
}

.rectangule {
  width: 750px;
  height: 200px;
  border-top: 100px solid #00000010 ;
  border-right: 100px solid transparent;
  margin-left: 3em;
  
}
.rectangule p {
  position: absolute;
  top: 0em;
  font-size: 30px;
  margin-left: 20px; 
  
}

.triangle{
   width: 350px;
   height:50px;
   border-bottom: 100px solid #FF6701;
   border-left: 100px solid transparent;
   margin-left:-5em;
   margin-top: -3em;
   
}

.triangle p {
  position: absolute;
  top: 0em;
  font-size: 30px;
  color:#F4F0EA;
  cursor: pointer;
}

</style>
