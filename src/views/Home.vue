<template>
  <div class="home">
    <div v-for="(pageContent, i) in content" :key="i">
      <h1>{{ pageContent.data.page_title[i].text }}</h1>
    </div>
    <p>To embed your selected fonts into a webpage, copy this code into th of your HTML document.</p>
    <h2>Lorem</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit quos ab, iste vero voluptatem tempora quo nulla odit itaque ut quae illo tempore laboriosam mollitia, eum quaerat optio quibusdam?</p>
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
