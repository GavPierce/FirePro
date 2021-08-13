<template>
  <div class="wrapper"  id='service'>
    <div class="ourServices">
      <div class="Our">OUR</div>
      <div class="Services">SERVICES</div>
    </div>
        <div class="left-line">
          <div class="OS-Intro" >
            <p class="safety-first">
              SAFETY FIRST
            </p>
            <p class="alarms"> {{services[activeService].name}}</p>
          </div>
        </div>
        <div class="Intro-Text">
          {{services[activeService].info}}
        </div>

    <div class="Services-Pictures">
      <div @click="setActive(0)" class="service-button" :class="{'service-active': activeService==0}">
        <img class="service-Icon" src="../assets/img/service1.svg" alt="" />
        <div class="service-title">Sprinklers</div>
      </div>
      <div @click="setActive(1)" class="service-button" :class="{'service-active': activeService==1}">
        <img class="service-Icon" src="../assets/img/service2.svg" alt="" />
        <div class="service-title">Alarms</div>
      </div>
      <div @click="setActive(2)" class="service-button" :class="{'service-active': activeService==2}">
        <img class="service-Icon" src="../assets/img/service5.svg" alt="" />
        <div class="service-title">Fire Extinguishers</div>
      </div>
      <div @click="setActive(3)" class="service-button" :class="{'service-active': activeService==3}">
        <img class="service-Icon" src="../assets/img/kitchen.svg" alt="" />
        <div class="service-title">Kitchen Suppression</div>

      </div>
      <div @click="setActive(4)" class="service-button" :class="{'service-active': activeService==4}">
        <img class="service-Icon" src="../assets/img/service4.svg" alt="" />
        <div class="service-title">Backflow</div>
      </div>

    </div>
    <div></div>

    <div class="distributors">
      <div class="our-distributors" >
        <div class="Our">OUR</div>
        <div class="Services">DISTRIBUTORS</div>
      </div>
      <div class="distributor-list">
        <img src="../assets/certs/amerex.png" alt="" />
        <img src="../assets/img/brooks.png" alt="" />
        <img src="../assets/img/Ferguson.jpg" alt="" />
        <img src="../assets/img/firelite-logo.png" alt="" />
        <img src="../assets/img/potter-logo.png" alt="" />
        <img src="../assets/img/silent-knight.png" alt="" />
                <img src="../assets/img/VikingLogo.png" alt="" />


      </div>
    </div>
    <div class="boxoffer">
      <div class="rectangule">
        <div class="textoffer services-box">
          <p class="">
            WE OFFER PROFESIONAL FIRE PROTECTION SERVICES
          </p>
        </div>
      </div>

      <div class="triangle" v-on:click="open">
        <div class="textoffer2">
          <p >REQUEST A QUOTE</p>
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
  props: {
    activeService: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      
      services:[
        {
          name: 'Sprinklers',
          info: `Sprinklers save lives. Well maintained and functioning fire sprinkler systems are an integral part of a 
          company’s overall fire safety plan. Our team’s combined 100+ years of industry experience allows us to offer design, 
          installation, preventative maintenance (PM), and emergency services.`,
        },
        {
          name: 'Alarms',
          info:`As your partner in fire and life safety, we will support your existing system and design, and install and maintain a new one. 
          We can work with you to create a plan to migrate your outdated or obsolete systems to newer, 
          addressable systems often recommended by the local AHJ. We can also provide a phased plan to help with budgeting upgrades. 
          Properly inspected and maintained fire alarms simply work better. Our reasonably priced inspection and service rates set us apart from our competition. 
          Commercial fire and security monitoring are available for any panel.`,
        },
        {
          name: 'Fire Extinguishers',
          info: `Portable fire extinguishers provide a first line of defense against fires of limited size. Fire extinguishers should be readily accessible and fully functional for immediate use. Since all fire extinguishers are not created equal, it is vital to have the proper size and agent when needed to minimize damage. 
          Properly maintained fire extinguishers operated by trained personnel save lives and prevent property damage. We offer a full suite of fire extinguisher maintenance  in accord with NFPA 10 and Title 19 (California State Fire Marshal).
          Including recharging, hydrotesting and repair. For ABC – dry chemical, Co2, water, water mist, & clean agents (Halon and halotron) extinguishers.
`,
        },
        {
          name: 'Kitchen Suppresion',
          info:`Commercial kitchens have changed – equipment heats to higher temperatures, oils burn hotter, 
          and cooking equipment has improved heat retention. 
          A kitchen fire cannot be simply doused with water, it must be diffused at its fuel 
          source with a chemical suppression system installed by the experts at Service Pro Fire Protection. 
          Whether you need a new fire suppression system or a routine inspection or repair, 
          we will be there at a moment’s notice to provide you with a free estimate.  We offer all services for Kitchen Hood Systems inlcuding testing and repairs to any kind of fire kitchen suppression systems in accordance with NFPA17A and Title 19 (California State Fire Marshal).
          Pyro Chem, Amerex, Ansul and Buckeye.`,
        },
        {
          name: 'Backflow Services',
          info:`As a leader in the fire protection industry, our team at Service Pro Fire Protection does our part in protecting the earth’s water supply through the testing, maintenance, and installation of backflow prevention systems. 
          A backflow preventer is a mechanical device that ensures water flow in a single direction. 
          These one-way devices are critical in keeping potable and non-potable water from mixing. Our highly experienced team offers testing, repairs and installations of Backflow Systems to keep unlcean water out of your clean drinking water.`,
        },
      ],
    }
  },
  methods: {
    open() {
      console.log("from home button");
      this.$emit("showQuote", true);
    },
    setActive(index) {
      this.activeService = index;
            window.scrollTo(0,0);

    },
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
  mounted() {
    this.scrollToTop();
  }
};
</script>
<style>
.ourServices {
  border-top-style: solid;
  color: #fea82f;
  width: 16em;
  display: flex;
  margin-left: 6em;
}
.distributors {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.our-distributors {
  border-top-style: solid;
  color: #fea82f;
  padding-top: 0em;
  display: flex;
  align-self: flex-end;
  margin-right: 5em;
  margin-top: 5em;
}
.distributor-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.distributor-list img {
  width: 120px;
  margin: 3em 1.5em;
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


.OS-Intro {
  margin-left: 0.5em;
  font-size: 30px;
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
  min-height: 10em;
}
.Services-Pictures {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  margin-left: 3em;
  margin-right: 3em;
}
.service-Icon {
  width: 150px;
  height: 150px;
  justify-content: space-between;
  margin-left: 4em;
  margin-right: 2em;
  margin-top: 2em;
  cursor: pointer;
  transition: all .2s ease-in-out; 

}
.service-button {
  text-align: center;
}
.service-button:hover {
  transform:scale(1.2);
}
.service-title {
padding-left: 1.5em;
font-size: 1.1em;
padding-bottom: 1em;
}
.service-active {
    transform:scale(1.2);
    color: orange;
    font-weight: 600;
}



.textoffer2 {
  top: 0em;
  height: 100px;
  display: flex;
  align-items: center;
  position: absolute;
}

    .services-box {
    font-size: .9em;
  }
@media (max-width: 900px) {
  .Intro-Text {
    margin-right: 0em;
    margin-left: 2em;
  }
  .ourServices {
    margin-left: 2em;
  }
  .left-line {
    margin-left: 2em;
  }
  .our-distributors {
    margin-right: 2em;
  }
  .services-box {
    max-width: 20em;
  }
}
@media (max-width: 1240px) {
  .Intro-Text {
    width: 80%;
  }
    .services-box {
    font-size: .7em;
  }
}
@media (max-width: 1315px) {
  .wrapper {
  padding-top: 5em;
}

}
@media (max-width: 400px) {
  .our-distributors {
    margin-right: 0;
  }
      .services-box {
    font-size: .75em;
    max-width: 17em;
  }
 }
</style>
