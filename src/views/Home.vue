// TODO: Progress Indicator
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-for="(pageContent, i) in content" :key="i">
      {{ pageContent.data.page_title[i].text }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    HelloWorld
  },
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
