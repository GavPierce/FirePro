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
      <router-link to="/Services?activeService=0">
        <div class="offerbox"> 
          <div class="offerbox-title">SPRINKLERS</div>
            <div class="offerbox-content">
              <div class="offerbox-content-item">
                Installation
              </div>
              <div class="offerbox-content-item">
                Testing
              </div>
              <div class="offerbox-content-item">
                Repairs
              </div>
          </div>
          <div class="offerbox-link">
            More >
          </div> 
        </div>
      </router-link>
      <router-link to="/Services?activeService=1">
        <div class="offerbox"> 
          <div class="offerbox-title">ALARMS</div>
            <div class="offerbox-content">
              <div class="offerbox-content-item">
                Installation
              </div>
              <div class="offerbox-content-item">
                Testing
              </div>
              <div class="offerbox-content-item">
                Replacing
              </div>
          </div>
          <div  class="offerbox-link">
            More >
          </div> 
        </div>
      </router-link>
      <router-link to="/Services?activeService=2">
      <div class="offerbox"> 
        <div class="offerbox-title">FIRE EXTINGUISHERS</div>
          <div class="offerbox-content">
            <div class="offerbox-content-item">
              Recharging
            </div>
            <div class="offerbox-content-item">
              Hydrotesting
            </div>
            <div class="offerbox-content-item">
              Repair
            </div>
        </div>
        <div class="offerbox-link">
          More >
        </div> 
      </div>
      </router-link>
      <router-link to="/Services?activeService=3">

        <div class="offerbox"> 
          <div class="offerbox-title">KITCHEN SUPPRESION</div> 
            <div class="offerbox-content">
              <div class="offerbox-content-item">
                Pyro Chem
              </div>
              <div class="offerbox-content-item">
                Amerex
              </div>
              <div class="offerbox-content-item">
                Ansul
              </div>
              <div class="offerbox-content-item">
                Buckeye
              </div>
          </div>
          <div class="offerbox-link">
            More >
          </div>
        </div>
      </router-link>

      <router-link to="/Services?activeService=4">

      <div class="offerbox"> 
        <div class="offerbox-title"> BACKFLOW</div>
          <div class="offerbox-content">
            <div class="offerbox-content-item">
              Testing
            </div>
            <div class="offerbox-content-item">
              Repairs
            </div>
            <div class="offerbox-content-item">
              Installations
            </div>

        </div>
        <div class="offerbox-link">
          More >
        </div>
      </div>
      </router-link>
    </div>
    <div class="wrapper-boxoffer">
      <div class="boxoffer">
      <div class="rectangule">
        <div class="textoffer">
          <p >
           THE DIFFERENCE IS SERVICE
          </p>
        </div>
      </div>
      <div class="triangle" v-on:click="open">
        <div class="textoffer2">
          <p>REQUEST A QUOTE</p>
        </div>
      </div>
    </div>
    </div>

    <div class="AU">
      <div class="ab1">ABOUT</div>
      <div class="ab2">US</div>
    </div>
    <div class="AU-TEXT">
      <p class="text">
        Providing Design, Installation, Testing, Inspection, Maintenance, and Repair for a variety of Fire Protection and Fire Safety related equipment.
        As a company we provide excellent service, take care of all our customers and treat them with respect and dignity, because we believe the difference is service!
      </p>
      <p class="word">SERVICE PRO.</p>
    </div>
    <div id="work"></div>
    <div class="subtitle" >
    <div class="OW">
      <div class="ow2">OUR</div>
      <div class="ow1">WORK</div>

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
    <div class="testimonial-wrapper"  id="testimonial">
      <div class="Testimonial">
      <p>TESTIMONIALS</p>
    </div>
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
    <div class="subtitle" id="contact">
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
    },
    scrollToTop() {
      window.scrollTo(0,0);
  }
  },
  mounted() {
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
  top: -3em;
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
  background-color: #FF6701;
  color: #f4f0ea;
  font-size: 25px;
  width: 9em;
  z-index: 100;
  margin-left: 2em;
  cursor: pointer;
  border-radius: 33px;
  padding: .3em 1em;
  margin-top: 1em;
}

.certificates {
  margin-top: 1.75em;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.certs {  
  display: flex;
  position: relative;
  width: 240px;
  margin: 0 .25em;
}
@media screen and (max-width: 1300px) {
  .certificates {
    flex-wrap: wrap;
  }
}
.image1 {
height: 4em;
position: absolute;
left: 1.2em;
}
.image2 {
height: 4em;
position: absolute;
left: .7em;
}
.image3 {
height: 1.5em;
left: .5em;
position: absolute;
top: 1.25em;
}

.leaves {
height: 4.6em;
right: .3em;
top: -10px;
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
  display: flex;
  position: relative;
  text-align: inherit;
  background: white;
  color: #000000;
  flex-wrap: wrap;
  font-size: 13px;
  justify-content: center;
}

.offerbox {
  width:250px;
  height: 250px;
  border: solid 1px #fea82f;
  border-radius: 40px;
  box-shadow: 0px 15px 30px #b8b7b7;
  transition: all .2s ease-in-out; 
  cursor: pointer;
  margin: 1em;
}
.offerbox:hover {
  transform: scale(1.2);
}
.offerbox-title {
  font-weight: bold;
  margin-top: 1em;
  font-size: 1.4em;
 
}
.offerbox-content {
  margin: .5em 1em;
  font-size: 1.3em;
}
.offerbox-content-item {
    border-bottom: 1px solid #fea82f;
    padding: .4em;
}
.offerbox-link {
  color: #FF6701;
}
.wrapper-boxoffer {
  widows: 100%;
}
.boxoffer {
  position: relative;
  display: flex;
  margin: 8em auto;
  width: min-content;
  max-width: 90vw;
}

.rectangule {
  width: 750px;
  border-top: 100px solid #00000010;
  border-right: 100px solid transparent;
}
@media screen and (max-width: 1285px) {
  .rectangule {
    margin-left: 0;
  }
}
.rectangule p {
  font-size: 2em;
}
.triangle p {
  font-size: 2em;

}
@media screen and (max-width: 760px) {
  .rectangule p {
   font-size: 1.5em;
  }
  .triangle p {
    font-size: 1em;
  }
}
@media screen and (max-width: 580px) {
  .rectangule p {
   font-size: 1em;
  }
  .textoffer {
    right: 1em;
  }
  .triangle p {
    font-size: 1em;
  }
}

@media screen and (max-width: 480px) {
  .rectangule p {
   font-size: 1em;
  }
  .triangle p {
    font-size: 1em;
  }
}
@media screen and (max-width: 380px) {
  .rectangule p {
   font-size: .75em;
    
  }
  .triangle p {
        transform: translate(-10px);
  }
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
  color: #f4f0ea;
}
.textoffer {
  top: 0em;
  left: 1em;
  height: 100px;
  display: flex;
  text-align: left;
  align-items: center;
  position: absolute;
}
p.textoffer {
  font-size: 1em;
}
.textoffer2 {
  top: 0em;
  height: 100px;
  display: flex;
  align-items: center;
  position: absolute;
}
.AU {
  border-top: solid 5px #FFC288;
  width: 200px;
  margin-top: 2em;
  display: flex;
  margin-left: 6em;
}
.ab1 {
  font-size: 50px;
  color: #000000;
}
.ab2 {
  font-size: 30px;
  color: #000000;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
.AU-TEXT {
  display: flex;
  justify-content: space-between;
}

.text {
  text-align: start;
  margin-left: 6em;
  margin-top: 1em;
  max-width: 40em;
}
.word {
  color: #fea82f;
  font-size: 90px;
  margin: 0;
  margin-right: 1.5em;
}


.OW {
  border-top: solid 5px #FFC288;
  width: 200px;
  margin-right: 10em;
  display: flex;
  position: relative;
}
.ow1 {
  font-size: 50px;
  color: #000000;
}
.ow2 {
  font-size: 30px;
  color: #000000;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.below-ow {
  position: relative;
  margin-top: 2em;
  margin-right: 10em;
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 1240px) {
  .AU-TEXT {
    flex-direction: column-reverse;
  }
  .word {
    margin: 1em auto;
  }
  .OW {
    margin-right: 3em;
  }
  .below-ow {
   margin-right: 3em;
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
.slider {
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
  border-top: solid 5px #FFC288;
  width: 250px;
  margin-top: 0em;
  margin-left: 6em;
}

.testimonial-wrapper {
  padding-top: 7em;
}
.Testimonial p {
  font-size: 50px;
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
  padding: 0 1em;
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
  padding-top: 7em;
  display: flex;
  justify-content: flex-end;
}
.CU {
  border-top: solid 5px #FFC288;

  width: 250px;
  margin: 4em 10em 0 0;
  display: flex;
  position: relative;
  justify-self: flex-end;
}
.cu1 {
  font-size: 50px;
  color: #000000;
}
.cu2 {
  font-size: 30px;
  color: #000000;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
@media (max-width: 700px) {
  .word {
    font-size: 40px;
  }
  .Testimonial {
    margin-left: 1em;
  }
  .CU {
    margin: 0 auto;
  }
  .AU {
    margin: 1em;
  }
  .OW {
    margin: 1em;
  }
  .below-ow {
    margin: 1em;
  }
  .slider {
    max-width: 100vw;
  }
  .text {
    margin: 1em;
  }
}
</style>
