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
          <div class="certs">
            <img class="image1" src="../assets/certs/calfire.png" alt="" />
            <img class="leaves" src="../assets/certs/leaves.svg" alt="" />
          </div>
          <div class="certs">
            <img class="image2" src="../assets/certs/experience.svg" alt="" />
            <img class="leaves" src="../assets/certs/leaves.svg" alt="" />
          </div>
          <div class="certs">
            <img class="image3" src="../assets/certs/amerex.png" alt="" />
            <img class="leaves" src="../assets/certs/leaves.svg" alt="" />
          </div>
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
        <div class="textoffer">
          <p style="font-size:2vw;">
            WE OFFER PROFESIONAL FIRE PROTECTION SERVICES
          </p>
        </div>
      </div>

      <div class="triangle" v-on:click="open">
        <div class="textoffer2">
          <p style="font-size:2vw;">REQUEST A QUOTE</p>
        </div>
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
  padding-left: 1em;
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
@media (min-width: 1287px) {
  .title .safe {
    float: right;
  }
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
  margin-top: 2em;
  display: flex;
  margin-top: 2em;
  width: 100%;
}
.certs {
  margin-left: 1.1em;
  display: flex;
  position: relative;
  width: 70px;
  height: 80px;
}
.image1 {
  margin-left: 0.7em;
  margin-top: -0.1em;
}
.image2 {
  margin-left: 0.5em;
  margin-top: -0.2em;
}
.image3 {
  margin-left: 0.6em;
  margin-top: -0.1em;
  width: 80px;
  height: 80px;
}

.leaves {
  position: absolute;
  width: 150px;
  height: 100px;
  margin-top: -0.3em;
}

.background {
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
  margin-top: 20px;
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
  border-top: 100px solid #00000010;
  border-right: 100px solid transparent;
  margin-left: 3em;
}
.rectangule p {
  font-size: 30px;
  margin-left: 20px;
}

.triangle {
  width: 350px;
  height: 50px;
  border-bottom: 100px solid #ff6701;
  border-left: 100px solid transparent;
  margin-left: -5em;
  margin-top: -3em;
  cursor: pointer;
}

.triangle p {
  font-size: 30px;
  color: #f4f0ea;
}
.textoffer {
  top: 0em;
  height: 100px;
  display: flex;
  align-items: center;
  position: absolute;
}
.textoffer2 {
  top: 0em;
  height: 100px;
  display: flex;
  align-items: center;
  position: absolute;
}
</style>
