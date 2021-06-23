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
      <div class="offer1">SPRINKLERS</div>
      <div class="offer2">ALARMS</div>
      <div class="offer3">FIRE EXTINGUISHERS</div>
      <div class="offer4">KITCHEN SUPPRESION</div>
      <div class="offer5">BACKFLOW</div>
    </div>
    <div class="boxoffer">
      <div class="rectangule">
        <p>WE OFFER PROFESIONAL FIRE PROTECTION SERVICES</p>
      </div>

      <div class="triangle">REQUEST A QUOTE</div>
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
}

.certificates {
  margin-top: 1em;
  display: flex;
  position: relative;
}
.image1 {
  height: 2em;
  max-width: 93px;
  margin-left: -25px;
}
.leaves1 {
  height: 3em;
  width: 3em;
  position: absolute;
  left: -70px;
  bottom: -30px;
}
.image2 {
  margin-left: 125px;
  height: 2em;
  max-width: 93px;
}
.leaves2 {
  height: 3em;
  width: 3em;
  position: absolute;
  left: 150px;
  bottom: -30px;
}
.image3 {
  margin-left: 100px;
  height: 2em;
  max-width: 95px;
}
.leaves3 {
  height: 3em;
  width: 3em;
  position: absolute;
  left: 350px;
  bottom: -30px;
}
.background {
  width: 500px;
  height: 800px;
  background-color: transparent;
  object-fit: cover;
  margin-left: 2em;
}
.left {
  width: 50%;
}
.right {
  width: 50%;
  z-index: -2;
}

@media (max-width: 1050px) {
  .right {
    display: none;
  }
}
.offers {
  margin-top: -3em;
  display: flex;
  position: relative;
  margin-right: 80px;
  text-align: inherit;
  background: white;
  color: #000000;
  margin-bottom: 1em;
}
.offer1 {
  width: 230px;
  height: 190px;
  margin-left: 40px;
  border: solid 1px #fea82f;
  box-shadow: 0px 15px 30px #b8b7b7;
  border-radius: 40px;
}
.offer2 {
  width: 230px;
  height: 190px;
  margin-left: 60px;
  border: solid 1px #fea82f;
  box-shadow: 0px 15px 30px #b8b7b7;
  border-radius: 40px;
}
.offer3 {
  width: 230px;
  height: 190px;
  margin-left: 60px;
  border: solid 1px #fea82f;
  box-shadow: 0px 15px 30px #b8b7b7;
  border-radius: 40px;
}

.offer4 {
  width: 230px;
  height: 190px;
  margin-left: 60px;
  border: solid 1px #fea82f;
  box-shadow: 0px 15px 30px #b8b7b7;
  border-radius: 40px;
}

.offer5 {
  width: 230px;
  height: 190px;
  margin-left: 60px;
  border: solid 1px #fea82f;
  box-shadow: 0px 15px 30px #b8b7b7;
  border-radius: 40px;
}
.boxoffer {
  position: relative;
  margin-top: 5em;
}
.rectangule {
  width: 500px;
  height: 200px;
  border-top: 100px solid red;
  border-right: 100px solid transparent;
}
.rectangule p {
  position: absolute;
  top: 1em;
}
</style>
