<template>
  <div class="flex min-h-screen page page__home">
    <!-- <div v-for="(pageContent, i) in content" :key="i">
      <h1 class="sm:text-lg md:text-4xl lg:text-5xl">{{ pageContent.data.home_content[i].text }}</h1>
    </div> -->
    <div class="container container__home flex-1 self-center text-center">
        <h1 class="sm:text-lg md:text-4xl lg:text-5xl">Hi.</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  mounted: function() {
    this.$store.dispatch("getPage", "home");
  },
  computed: {
    ...mapGetters({
      content: "pageContent"
    })
  }
};
</script>
