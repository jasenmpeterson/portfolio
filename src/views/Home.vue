<template>
  <div class="flex min-h-screen page page__home-intro">
    <div class="container container__home flex-1 self-center">
      <transition name="fade" mode="out-in">
        <h1 class="sm:text-lg md:text-4xl lg:text-5xl text-center" v-if="dataHasNotLoaded">Hi.</h1>
        <div class="content content__wrap" v-if="pageContent.data.page_title[i].text" v-for="(pageContent, i) in content" :key="i">
          <h2 class="sm:text-lg md:text-2xl ">{{ pageContent.data.page_title[i].text }}</h2>
          <h2 class="sm:text-base md:text-lg ">{{ pageContent.data.sub_title[i].text }}</h2>
          <p class="sm:text-base">{{ pageContent.data.page_content[i].text }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      dataHasLoaded: false,
      dataHasNotLoaded: true
    };
  },
  mounted: function() {
    this.$store.dispatch("getPage", "home");
  },
  computed: {
    ...mapGetters({
      content: "pageContent",
      isLoading: "isLoading"
    })
  },
  watch: {
    isLoading(val) {
      if (val == false) {
        let self = this;
        setTimeout(function() {
          self.dataHasLoaded = true;
          self.dataHasNotLoaded = false;
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-to {
  opacity: 1;
}
</style>
