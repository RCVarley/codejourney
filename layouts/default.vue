<template>
  <p-stack split-index="2">
    <default-header/>
    <main>
      <slot>
        Main Content
      </slot>
    </main>
    <default-footer/>
  </p-stack>
</template>

<script>
import DefaultHeader from "../components/layout/DefaultHeader";
import DefaultFooter from "../components/layout/DefaultFooter";
import {defineComponent} from "vue";
import PStack from "../components/primitives/PStack";

export default defineComponent( {
  components: {PStack, DefaultFooter, DefaultHeader}
});
</script>

<style scoped>

</style>
