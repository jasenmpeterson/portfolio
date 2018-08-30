<template>
    <transition name="slide-in-right">
      <div class="header__site-header fixed pin-t pin-l w-full" v-if="title">
        <h1 class="sm:text-sm md:text-base">{{title}}</h1>
      </div>
    </transition>
</template>
<script>
export default {
  name: "siteHeader",
  props: ["title"]
};
</script>
