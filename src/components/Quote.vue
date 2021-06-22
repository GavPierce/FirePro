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
      <input class="Message" type="text" /><br /><br />
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
  height: 26em;
  width: 27em;
  position: fixed;
  left: calc(50% - 12.5em);
  top: calc(50% - 10em);
  line-height: 0;
  margin: 0;
  padding: 2 em;
  border-radius: 2em;
  color: #ffffff;
  z-index: 10;
}
</style>
