<template>
  <div>
    <div class="Aboutus">
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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla
          facilisi.Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat.
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
          Lorem ipsum dolor sit amet,<br />
          consectetuer adipiscing elit,<br />
          sed diam nonummy nibh euismod
        </p>
      </div>
      <div>
        <p class="benefits">SATISFIED CLIENT</p>
        <p class="descritext">
          Lorem ipsum dolor sit amet,<br />
          consectetuer adipiscing elit,<br />
          sed diam nonummy nibh euismod
        </p>
      </div>

      <div>
        <p class="benefits">BEST QUALIFIED TEAM</p>
        <p class="descritext">
          Lorem ipsum dolor sit amet,<br />
          consectetuer adipiscing elit,<br />
          sed diam nonummy nibh euismod
        </p>
      </div>
      <div>
        <p class="benefits">GREAT PRODUCTS</p>
        <p class="descritext">
          Lorem ipsum dolor sit amet,<br />
          consectetuer adipiscing elit,<br />
          sed diam nonummy nibh euismod
        </p>
      </div>
    </div>

    <div class="team">OUR TEAM</div>

    <div class="members">
      <div>
        <img class="staff" src="../assets/img/member1.png" alt="" />
        <p class="staff-name">JOHN SMITH</p>
        <p class="staff-possition">DESIGN EXPERT</p>
      </div>
      <div>
        <img class="staff" src="../assets/img/member2.png" alt="" />
        <p class="staff-name">AMBER ARES</p>
        <p class="staff-possition">CEO</p>
      </div>
      <div>
        <img class="staff" src="../assets/img/member3.png" alt="" />
        <p class="staff-name">Charles JANE</p>
        <p class="staff-possition">KITCHEN SUPPRESION</p>
      </div>
      <div>
        <img class="staff" src="../assets/img/member4.png" alt="" />
        <p class="staff-name">KING SAM</p>
        <p class="staff-possition">FIRE EXTINGUISHERS EXPERT</p>
      </div>
    </div>
    <div class="line-diveder"></div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.Aboutus {
  border-top-style: solid;
  color: #fea82f;
  width: 13em;
  padding-top: 0em;
  display: flex;
  margin-left: 4em;
  margin-top: 7em;
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
  margin-left: 2em;
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
  margin-left: 3em;
  margin-right: 6em;
}
.autop {
  display: flex;
  padding-top: 3em;
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
}

.description {
  margin-top: 12em;
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
  font-size: 10px;
  color: #000000;
  text-align: center;
  margin-left: 10px;
  margin-top: -2em;
}

@media screen and (max-width: 800px) {
  .description {
    flex-direction: column;
  }
}
.team {
  text-align: center;
  font-size: 30px;
  color: #000000;
  margin-top: 7em;
}
.members {
  display: flex;
}
.staff {
  width: 200px;
  height: 200px;
  justify-content: space-between;
  margin-left: 5em;
  margin-right: 3em;
  margin-top: 7em;
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
  color: black;
  width: 100%;
  margin-top: 12em;
  opacity: 0.5;
  margin-bottom: 5em;
}
</style>
