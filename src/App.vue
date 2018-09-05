<template>
  <div id="app">

    <!-- <siteHeader :title="websiteTitle"/> -->

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

  </div>
</template>

<style>
@import "./assets/css/main.css";
</style>


<script>
import siteHeader from "./components/global/Header";

export default {
  components: {
    siteHeader
  }
};
</script>
