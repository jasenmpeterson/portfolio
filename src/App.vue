<template>
  <div id="app">
    
    <router-view/>

    <transition name="loader-animation">
        <div class="progress-bar__wrap absolute pin flex flex-col" v-if="showLoader">
          <div class="container m-auto">
            <h1 class="sm:text-lg md:text-3xl text-center">Hi.</h1>
            <div class="progress loader w-1/4 h-1 rounded-lg relative">
                <div class="progress-bar h-1 rounded-lg absolute pin-l" role="progressbar" :style="loaderStyle" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
    </transition>

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
