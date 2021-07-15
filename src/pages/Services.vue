<template>
  <div class="wrapper">
    <div class="ourServices">
      <div class="Services">SERVICES</div>
      <div class="Our">OUR</div>
    </div>
    <div class="left-line">
      <div class="OS-Intro">
        <p class="safety-first">
          SAFETY FIRST
        </p>
        <P class="alarms"> ALARMS </P>
      </div>
    </div>
    <div class="Intro-Text">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
      wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
      lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
      iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
      illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
      odio dignissim qui blandit praesent luptatum zzril delenit augue duis
      dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer
      adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
      magna aliquam erat volutpat.
    </div>

    <div class="Services-Pictures">
      <div>
        <img class="service-Icon" src="../assets/img/service1.svg" alt="" />
      </div>
      <div>
        <img class="service-Icon" src="../assets/img/service2.svg" alt="" />
      </div>
      <div>
        <img class="service-Icon" src="../assets/img/service3.svg" alt="" />
      </div>
      <div>
        <img class="service-Icon" src="../assets/img/service4.svg" alt="" />
      </div>
      <div>
        <img class="service-Icon" src="../assets/img/service5.svg" alt="" />
      </div>
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
    <div class="slider">
      <splide
        :options="{
          rewind: true,
          gap: '1rem'
        }"
      >
        <splide-slide>
          <img src="../assets/img/slide1.png" alt="slide.alt" />
        </splide-slide>
        <splide-slide>
          <img src="../assets/img/slide2.png" alt="slide.alt" />
        </splide-slide>
        <splide-slide>
          <img src="../assets/img/slide3.png" alt="slide.alt" />
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Splide,
    SplideSlide
  },
  methods: {
    open() {
      console.log("from home button");
      this.$emit("showQuote", true);
    }
  }
};
</script>
<style>
.ourServices {
  border-top-style: solid;
  color: #fea82f;
  width: 16em;
  padding-top: 0em;
  display: flex;
  margin-left: 4em;
}
.Services {
  font-size: 50px;
  color: #000000;
}
.Our {
  font-size: 20px;
  color: #000000;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
.wrapper {
  position: relative;
  top: 5em;
}

.OS-Intro {
  margin-left: 0.5em;
  font-size: 30px;
  margin-top: 4em;
  text-align: left;
}
.left-line {
  border-left: solid;
  color: #000000;
  margin-left: 6em;
}
p.safety-first {
  opacity: 0.5;
}
p.alarms {
  margin-top: -1em;
}
.Intro-Text {
  text-align: left;
  font-size: 18px;
  margin-left: 5em;
  margin-right: 25em;
}
.Services-Pictures {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  margin-left: 3em;
  margin-right: 3em;
  margin-top: 4em;
}
.service-Icon {
  width: 150px;
  height: 150px;
  justify-content: space-between;
  margin-left: 4em;
  margin-right: 2em;
  margin-top: 5em;
}
.boxoffer {
  position: relative;
  margin-top: 25em;
  display: flex;
}

.rectangule {
  width: 750px;
  height: 200px;
  border-top: 100px solid #00000010;
  border-right: 100px solid transparent;
  margin-left: 3em;
}
@media screen and (max-width: 1285px) {
  .rectangule {
    margin-left: 0em;
  }
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
@media (max-width: 900px) {
  .Intro-Text {
    margin-right: 0em;
  }
}
</style>
