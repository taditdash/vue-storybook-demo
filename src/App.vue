<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <RFModal :display="true"></RFModal>
  </div>
</template>

<script>
import RFModal from "./components/RFModal.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    RFModal
    // HelloWorld
  }
};
</script>

<style>
@import "./index.css";
</style>
