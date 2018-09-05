<template>
  <div class="page-wrap">
    <progressLoader/>
    <div class="flex min-h-screen page page__home-intro" :class="{ animated: content }" v-if="content !== null && content !== undefined">
      <div class="page__home-intro__background"></div>
      <div class="container container__home flex-1 self-center">
          <div class="content content__wrap" v-for="(pageData, i) in content" :key="i">
            <div class="content content__wrap">
              <h1 class="sm:text-lg md:text-2xl" >{{ pageData.data.welcome[0].text }}</h1>
              <h2 class="sm:text-base md:text-lg">{{ pageData.data.sub_title[0].text }}</h2>
              <p class="sm:text-base">{{ pageData.data.page_content[0].text }}</p>
              <p><router-link to="/portfolio">view my portfolio</router-link></p>
              <p><router-link to="/contact">contact me</router-link></p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import progressLoader from "./ProgressLoader";

export default {
  name: "home",
  beforeMount: function() {
    this.$store.dispatch("getPage", "home");
  },
  computed: {
    ...mapGetters({
      content: "pageContent"
    })
  },
  components: {
    progressLoader
  }
};
</script>
<style scoped>
.content__wrap {
  max-width: 600px;
}

h1 {
  margin-bottom: 0;
}

a {
  font-weight: 700;
}

.animated * {
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.animated .page__home-intro__background {
  animation-delay: 1.5s;
}

.animated h1 {
  animation-delay: 1.7s;
}

.animated h2 {
  animation-delay: 1.8s;
}

.animated p {
  animation-delay: 1.9s;
}
</style>
