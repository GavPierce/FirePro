<template>
  <div class="wrapper">
    <div class="Aboutus" >
      <div class="about">ABOUT</div>
      <div class="us">US</div>
    </div>
    <div class="autop">
      <div class="auleft">
        <div class="resume">
          <p>
            MAKE SMART DECISIONS<br />
            FOR YOUR FAMILY AND <br />
            BUSINESS
          </p>
        </div>
        <div class="paragraph">
Service Pro Fire Protection  understands the demands placed on business owners and managers to maintain compliance and protect their employees, customers, and property can be overwhelming.
 Our goal is to offer a tailored program for each customer’s unique challenges.
As a full-service fire protection company, Service Pro Fire Protection can address all your fire protection needs.
 We take pride in knowing our fire protection systems offer the maximum level of safety and effectiveness. Service Pro Fire Protection is committed to meet or exceed your expectations every day. 
Through our experienced and licensed personnel, we offer 24-hours a day, 365 days a year services to fit your needs.

<br>
<br>
We are located in Southern California and provide Fire Protection and Fire Safety Services for all of Ventura County.
        </div>
      </div>

      <div class="auright">
        <img class="tools" src="../assets/img/circle.svg" alt="" />
      </div>
    </div>
    <div class="description">
      <div>
        <p class="benefits">EXPERT MEMBERS</p>
        <p class="descritext">  
          The Service Pro Fire Protectin team has <br>
          decades of hands on expierience in the field.
        </p>
      </div>
      <div>
        <p class="benefits">Licensed Specialty</p>
        <p class="descritext">
Service Pro Fire Protection’s California Contractors 
<br>
            License Specialties include C-16 Fire Protection.
        </p>
      </div>
      <div>
        <p class="benefits">GREAT PRODUCTS</p>
        <p class="descritext">
          We offer not only the highest quality service,<br />
          but the highest quality certified products.
        </p>
      </div>
    </div>

    <div class="team">OUR TEAM</div>

    <div class="members">
      <div>
        <img class="staff" src="../assets/img/member1.png" alt="" />
        <p class="staff-name">Roberto Ceron</p>
        <p class="staff-possition">CFO</p>
      </div>
      <div>
        <img class="staff" src="../assets/img/member2.png" alt="" />
        <p class="staff-name">Mark Halden</p>
        <p class="staff-possition">CEO</p>
      </div>
      <div>
        <img class="staff" src="../assets/img/member3.png" alt="" />
        <p class="staff-name">Jose Montejano</p>
        <p class="staff-possition">Project Manager</p>
      </div>
    </div>
    <div class="line-diveder"></div>
  </div>
</template>

<script>
export default {
    mounted() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
};
</script>
<style>
.Aboutus {
  border-top-style: solid;
  color: #fea82f;
  width: 13em;
  padding-top: 0em;
  display: flex;
  margin-left: 6em;
}
.about {
  font-size: 50px;
  color: #000000;
}
.us {
  font-size: 40px;
  color: #000000;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
.resume {
  border-left: solid;
  color: #000000;
  margin-left: 3em;
  font-size: 30px;
  margin-top: 3em;
  padding-left: 15px;
  opacity: 0.5;
}
.resume p {
  text-align: left;
}

.paragraph {
  text-align: start;
  font-size: 20px;
  margin-left: 4em;
  margin-right: 6em;
}
.autop {
  display: flex;
}

.tools {
  max-width: 100%;
}

.auleft {
  width: 50%;
}
.auright {
  width: 50%;

  margin-top: 0;
}

@media (max-width: 1050px) {
  .auright {
    display: none;
  }
  .auleft {
    width: 100%;
  }
}

.description {
  margin-top: 2em;
  display: flex;
  position: relative;
  justify-content: space-between;
  font-size: 25px;
  flex-wrap: wrap;
  margin-left: 3em;
  color: #000000;
  margin-right: 3em;
}
p.descritext {
  font-size: .7em;
  color: #000000;
  text-align: center;
  margin-left: 10px;
  margin-top: 1em;
}

@media screen and (max-width: 800px) {
  .description {
    flex-direction: column;
  }
}
.team {
  text-align: center;
  font-size: 50px;
  color: #000000;
  margin-top: 2em;
}
.members {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.members img {
  object-fit: cover;
}
.staff {
  width: 200px;
  height: 200px;
  justify-content: space-between;

  margin: 5em 1em 0em 1em;
  border-radius: 50%;
}
p.staff-name {
  font-size: 20px;
  margin-left: 1.5em;
}
p.staff-possition {
  margin-left: 1.5em;
  font-size: 15px;
  color: #ff6701;
  margin-top: -2em;
}
.line-diveder {
  border-top-style: solid;
  color: rgba(0, 0, 0, 0.323);
  width: 75%;
  margin: 2em auto;
}
@media screen and (max-width: 600px) {
  .Aboutus {
    margin-left: 2em;
  }
  .resume {
    margin-left: 1em;
  }
  .paragraph {
    margin-left: 2em;
    width: 90%;
  }
}
</style>
