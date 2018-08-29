<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "contact",
  data() {
    return {
      dataHasLoaded: false,
      dataHasNotLoaded: true
    };
  },
  mounted: function() {
    this.$store.dispatch("getPage", "contact");
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
