<template>
  <transition name="fade">
    <div class="flex min-h-screen page page__site-intro" v-if="showLoader">
      <div class="progress-bar__wrap absolute pin flex flex-col">
        <div class="container m-auto">
          <h1 class="sm:text-lg md:text-3xl text-center">hi.</h1>
          <div class="progress loader w-1/4 h-1 rounded-lg relative">
              <div class="progress-bar h-1 rounded-lg absolute pin-l" role="progressbar" :style="loaderStyle" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "siteIntro",
  data() {
    return {
      websiteTitle: null
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "isLoading",
      loadingProgress: "loadingProgress",
      websiteDetails: "websiteDetails",
      allPagesLoaded: "allPagesLoaded",
      showLoader: "showLoader"
    }),

    loaderStyle() {
      return `width: ${this.loadingProgress}%;`;
    }
  },
  watch: {
    websiteDetails(val) {
      if (val[0] !== undefined && val[0] !== null) {
        this.websiteTitle = val[0].data.website_title[0].text;
      }
    }
  }
};
</script>
