<script lang="ts" setup></script>

<template>
  <div class="page page--home">
    <p-stack :split-index="6">
      <div class="test">one</div>
      <div class="test">two</div>
      <p-stack large>
        <div class="test">three/one</div>
        <div class="test">three/two</div>
      </p-stack>
      <div class="test">four</div>
      <div class="test">five</div>
      <div class="test">six</div>
      <p-stack small>
        <div class="test">seven/one</div>
        <div class="test">seven/two</div>
      </p-stack>
<!--      <div class="test">eight</div>-->
<!--      <div class="test">nine</div>-->
<!--      <div class="test">ten</div>-->
<!--      <div class="test">eleven</div>-->
<!--      <div class="test">twelve</div>-->
<!--      <div class="test">thirteen</div>-->
<!--      <div class="test">fourteen</div>-->
<!--      <div class="test">fifteen</div>-->
    </p-stack>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import PStack from "../components/primitives/PStack.vue";

export default defineComponent({
  name: 'home',
  components: {
    PStack,
  },
});
</script>

<style scoped>

</style>
