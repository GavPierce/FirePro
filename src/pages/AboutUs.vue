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
      <div>EXPERT MEMBERS</div>
      <div></div>
      <div>SATISFIED CLIENT</div>
      <div></div>
      <div>BEST QUALIFIED TEAM</div>
      <div></div>
      <div>GREAT PRODUCTS</div>
      <div></div>
    </div>
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
  .right {
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
}

@media screen and (max-width: 900px) {
  .description {
    flex-direction: column;
  }
}
</style>
