<template>
  <div>
    <div class="box">
      <div class="top-bar">
        <h3>REQUEST A QUOTE</h3>
        <div class="close" v-on:click="close">X</div>
      </div>
      <h6>Contact us for a no obligation</h6>
      <h6>quote by calling</h6>
      <h4>805-487-1477</h4>
      <h6>Or complete the form below</h6>

      <div class="label">Name:</div>
      <input type="text" /><br /><br />
      <div class="label">Telephone:</div>
      <input type="text" /><br /><br />
      <div class="label">Email:</div>
      <input type="text" /><br /><br />
      <div class="label">Message:</div>
      <textarea class="Message" /><br /><br />
      <div class="Buttom">SUBMIT</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("showQuote", false);
    }
  }
};
</script>
<style>
.box {
  background-color: #ff6701;
  height: 28em;
  width: 23em;
  position: fixed;
  left: calc(50% - 11.5em);
  top: calc(50% - 15em);
  line-height: 0;
  margin: 0;
  padding: 2 em;
  border-radius: 1em;
  color: #ffffff;
  z-index: 10;
}
h6 {
  font-weight: normal;
  font-size: 1em;
  line-height: 1em;
  
  margin: 0 0 1em 0;
}
.h4 {
  
  font-weight: bold;
}
.close {
  left: 5em;
  top: 1em;
}
.label {
  text-align: left;
  margin-left: 9em;
  font-size: 0.6em;
  color: #ffffff;
}
.Buttom {
  color: #ffffff;
  font-size: 0.8em;
  cursor: pointer;
  background-color: black;
  padding: 1.5em;
  width: min-content;
  border-radius: 1.5em;
  margin: 1em auto;
}
input {
  width: 60%;
  padding: 3px 2px;
  margin: 9px 0;
  border-radius: 20ex;
  border: 0;
}
.Message {
  margin-top: 1em;
  width: 60%;
  height: 70px;
  padding: 5px 2px;
  border-radius: 20px;
  resize: none;
}
</style>
