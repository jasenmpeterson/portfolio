<template>
  <div id="app">
    
    <transition
          name="loader-animation"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">
        <div class="progress loader" v-if="showLoader">
          <div class="progress-bar" role="progressbar" :style="loaderStyle" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </transition>

    <router-view/>
  </div>
</template>

<style>
@import "./assets/css/main.css";
</style>


<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showLoader: true
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "isLoading",
      loadingProgress: "loadingProgress"
    }),

    loaderStyle() {
      return `width: ${this.loadingProgress}%;`;
    }
  },
  watch: {
    isLoading(val) {
      if (val == false) {
        let self = this;
        setTimeout(function() {
          self.showLoader = false;
        }, 1000);
      }
    }
  }
};
</script>
