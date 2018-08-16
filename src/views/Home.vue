<template>
  <div class="home">
    <div v-for="(pageContent, i) in content" :key="i">
      {{ pageContent.data.page_title[i].text }}
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
