<template>
  <div class="flex min-h-screen page page__home">
    <div class="container container__home flex-1 self-center text-center">
        <h1 class="sm:text-lg md:text-4xl lg:text-5xl" v-bind:class="{ remove: dataHasLoaded }">Hi.</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      dataHasLoaded: false
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
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
h1 {
  animation: slide-in-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

h1.remove {
  animation: slide-out-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.5s;
}
</style>
