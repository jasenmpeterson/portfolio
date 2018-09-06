<template>
  <div class="page-wrap">
    <progressLoader/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import progressLoader from "./ProgressLoader";

export default {
  name: "portfolio",
  data() {
    return {
      dataHasLoaded: false,
      dataHasNotLoaded: true
    };
  },
  mounted: function() {
    this.$store.dispatch("getPage", "portfolio");
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
  },
  components: {
    progressLoader
  }
};
</script>
