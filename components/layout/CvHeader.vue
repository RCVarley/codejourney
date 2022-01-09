<script lang="ts" setup></script>

<template>
  <header>
    <div class="title">Ryan C. Varley</div>
    <div class="subtitle">Full Stack Web Developer</div>
    <div class="tel"><a href="tel:+447791886395"><span class="icon">phone</span> 07791 886 395</a></div>
    <div class="email"><a href="mailto:ryan@varleys.email"><span class="icon">at</span> ryan@varleys.email</a></div>
    <div class="linkedin"><a href="https://uk.linkedin.com/in/rcvarley"><span class="icon">linkedin</span> linkedin.com/in/rcvarley</a></div>
    <div class="github"><a href="https://github.com/rcvarley"><span class="icon">github</span> github.com/rcvarley</a></div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "CvHeader",
});
</script>

<style scoped>

</style>