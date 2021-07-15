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
      <div class="offerbox">  
        <div class="offerbox-title">SPRINKLERS</div> 
        <div class="offerbox-content">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod
        </div>
        <div class="offerbox-link">
          More >
        </div>
      </div>
      <div class="offerbox"> 
        <div class="offerbox-title">ALARMS</div> 
          <div class="offerbox-content">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod
        </div>
        <div class="offerbox-link">
          More >
        </div>
      </div>
      <div class="offerbox"> 
        <div class="offerbox-title">FIRE EXTINGUISHERS</div>
          <div class="offerbox-content">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod
        </div>
        <div class="offerbox-link">
          More >
        </div> 
      </div>
      <div class="offerbox"> 
        <div class="offerbox-title">KITCHEN SUPPRESION</div> 
          <div class="offerbox-content">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod
        </div>
        <div class="offerbox-link">
          More >
        </div>
      </div>
      <div class="offerbox"> 
        <div class="offerbox-title"> BACKFLOW</div>
          <div class="offerbox-content">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod
        </div>
        <div class="offerbox-link">
          More >
        </div>
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
    <div class="AU">
      <div class="ab1">ABOUT</div>
      <div class="ab2">US</div>
    </div>
    <div class="AU-TEXT">
      <p class="text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum
        dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>
      <p class="word">SERVICE PRO.</p>
    </div>
    <div class="subtitle">
          <div class="OW">
      <div class="ow1">WORK</div>
      <div class="ow2">OUR</div>
    </div>
    </div>

    <div class="below-ow">
      <div class="box1">
        <div class="experience">
          <p>
            20
          </p>

          <p class="yo">
            YEARS OF <br />
            EXPERIENCE
          </p>
        </div>
      </div>

      <div class="box2" v-on:click="open">
        <div class="number">
          <p>805-487-1477</p>
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
    <div class="Testimonial">
      <p>TESTIMONIAL</p>
    </div>

    <div class="Rating">
      <!-- Font Awesome Icon Library -->
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div class="testbox">
        <p>Hayling Pierce</p>
        <p class="city">California, San Diego</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <p class="opinion">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>

      <div class="testbox">
        <p>Gavin Pierce</p>
        <p class="city">California, Ventura</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <p class="opinion">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>

      <div class="testbox">
        <p>Mauriel Sequeira</p>
        <p class="city">California, Sacramento</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <p class="opinion">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>
    </div>
    <div class="subtitle">
      <div class="CU">
        <div class="cu1">CONTACT</div>
        <div class="cu2">US</div>
    </div>
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
.top {
  padding-left: 3em;
  text-align: justify;
  font-size: 45px;
  position: relative;
  display: flex;
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
  font-size: 25px;
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
  margin-top: 1.75em;
  display: flex;
justify-content: center;
  width: 100%;
}
.certs {
  display: flex;
  position: relative;
  margin-top: 1em;
  width: 190px;
  height: 120px;
}
@media screen and (max-width: 1300px) {
  .certificates {
    flex-wrap: wrap;
  }
}
.image1 {
  margin-left: 0.9em;
  margin-top: -0em;
}
.image2 {
  margin-left: 0.6em;
  margin-top: -0em;
}
.image3 {
  margin-left: 0.7em;
  margin-top: -0em;
  width: 110px;
  height: 120px;
}

.leaves {
  position: absolute;
  width: 170px;
  height: 170px;
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
  .top {
    padding-left: 0;
  }
  .right {
    display: none;
  }
  .left {
    width: 100%;
    text-align: center;
    margin: 0;
    margin-top: .5em;
  }
  .button {
    margin: 2em auto;
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

.offerbox {
  width: 180px;
  height: 190px;
  margin-left: 40px;
  border: solid 1px #fea82f;
  box-shadow: 0px 15px 30px #b8b7b7;
  border-radius: 40px;
  margin-top: 20px;
  margin: 20px auto;
  cursor: pointer;
}
.offerbox-title {
  font-weight: bold;
  margin-top: 1em;
}
.offerbox-content {
  margin: 2em 0;
}
.offerbox-link {
  color: #FF6701;
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
.AU {
  border-top-style: solid;
  color: #fea82f;
  width: 8em;
  margin-top: -7em;
  display: flex;
  margin-left: 4em;
}
.ab1 {
  font-size: 30px;
  color: #000000;
}
.ab2 {
  font-size: 20px;
  color: #000000;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
.AU-TEXT {
  display: flex;
}

.text {
  text-align: start;
  margin-left: 4em;
  margin-top: 1em;
  margin-right: 2em;
}
.word {
  color: #fea82f;
  font-size: 90px;
  margin: 0;
  margin-right: 3em;
}

@media (max-width: 700px) {
  .word {
    font-size: 40px;
  }
}
.OW {
  border-top-style: solid;
  color: #fea82f;
  width: 7em;
  margin-right: 5em;
  display: flex;
  position: relative;
}
.ow1 {
  font-size: 30px;
  color: #000000;
}
.ow2 {
  font-size: 20px;
  color: #000000;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.below-ow {
  position: relative;
  margin-top: 2em;
  margin-right: 5em;
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 1240px) {
  .AU-TEXT {
    flex-direction: column-reverse;
  }
  .word {
    margin: 0 auto;
  }
  .OW {
    margin-right: 3em;
  }
  .below-ow {
   margin-right: 0em;

  }
}
.box1 {
  width: 90px;
  height: 1px;
  margin-right: 1em;
  border-top: 100px solid #f27405;
  border-right: 100px solid transparent;
}
.experience {
  top: 0em;
  height: 100px;
  display: flex;
  align-items: center;
  position: absolute;
  color: #ffffff;
  margin-left: 10px;
}
.experience p {
  font-size: 25px;
  margin-left: 10px;
}
p.yo {
  font-size: 10px;
  margin-right: 3em;
  font-weight: bold;
}
.slider img {
  height: 20em;
  width: 50em;
  object-fit: cover;
}

.box2 {
  width: 110px;
  height: 1px;
  border-bottom: 100px solid #ff6701;
  border-left: 100px solid transparent;
  margin-left: -5em;
  cursor: pointer;
  font-weight: bold;
}
.splide__arrow svg {
  height: 3em !important;
  fill: #f28729 !important;
  transition: fill 0.2s linear !important;
}
.splide__arrow--next {
  margin-right: 1em;
}
.splide__arrow--prev {
  margin-left: 1em;
}
.splide__pagination__page.is-active {
  background: #f28729 !important;
}
.number {
  align-items: center;
  position: absolute;
  color: #ffffff;
  margin-left: -10px;
  font-size: 15px;
  margin-top: 1.5em;
}
.Testimonial {
  border-top-style: solid;
  color: #fea82f;
  width: 11.5em;
  margin-top: 5em;
  margin-left: 3em;
}
.Testimonial p {
  font-size: 30px;
  color: #000000;
  margin-top: 0em;
}
.Rating {
  display: flex;
  flex-wrap: wrap;
}
.testbox {
  width: 300px;
  height: 300px;
  border: solid 1px #ffffff;
  box-shadow: 0px 15px 30px #b8b7b7;
  border-radius: 40px;
  margin-top: 2em;
  margin: 50px auto;
}
.testbox p {
  font-size: 20px;
  color: #000000;
  text-align: center;
  margin-left: 10px;
}
p.city {
  font-size: 10px;
  color: #000000;
  text-align: center;
  margin-left: 10px;
  margin-top: -2em;
}
.checked {
  color: #fea82f;
}
p.opinion {
  font-size: 15px;
  text-align: center;
  color: #000000;
}
.subtitle {
  display: flex;
  justify-content: flex-end;
}
.CU {
  border-top-style: solid;
  color: #fea82f;
  width: 10.5em;
  margin: 4em 3em 0 0;
  display: flex;
  position: relative;
  justify-self: flex-end;
}
.cu1 {
  font-size: 30px;
  color: #000000;
}
.cu2 {
  font-size: 20px;
  color: #000000;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
</style>
