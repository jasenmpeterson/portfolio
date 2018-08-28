<template>
  <div class="flex min-h-screen page page__home-intro">
    <div class="container container__home flex-1 self-center">
      <transition name="fade" mode="out-in">
        <div class="content content__wrap" v-if="pageContent" v-for="(pageContent, i) in content" :key="i">
          <div class="content content__wrap">
            <h1 class="sm:text-lg md:text-2xl" v-if="pageContent.data.welcome[i].text">{{ pageContent.data.welcome[i].text }}</h1>
            <h2 class="sm:text-base md:text-lg" v-if="pageContent.data.sub_title[i].text">{{ pageContent.data.sub_title[i].text }}</h2>
            <p class="sm:text-base" v-if="pageContent.data.page_content[i].text">{{ pageContent.data.page_content[i].text }}</p>
          </div>
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
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-enter-active {
  transition-delay: 1.8s;
}

.fade-enter-to {
  opacity: 1;
}

.content__wrap {
  max-width: 600px;
}
</style>
