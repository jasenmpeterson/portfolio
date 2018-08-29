<template>
  <div class="flex min-h-screen page page__home-intro">
    <div class="container container__home flex-1 self-center">
        <div class="content content__wrap" :class="{ animated: page }" v-if="page" v-for="(page, i) in content" :key="i">
          <div class="content content__wrap">
            <h1 class="sm:text-lg md:text-2xl" v-if="page.data.welcome">{{ page.data.welcome[i].text }}</h1>
            <h2 class="sm:text-base md:text-lg" v-if="page.data.sub_title">{{ page.data.sub_title[i].text }}</h2>
            <p class="sm:text-base" v-if="page.data.page_content">{{ page.data.page_content[i].text }}</p>
            <p><router-link to="/portfolio">view my portfolio</router-link></p>
            <p><router-link to="/contact">contact me</router-link></p>
          </div>
        </div>
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
    }),
    page() {
      return this.$store.state.page[0];
    }
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
.content__wrap {
  max-width: 600px;
}

a {
  font-weight: 700;
}
</style>
