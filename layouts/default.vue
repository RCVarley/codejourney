<template>
  <div class="stack">
    <default-header/>
    <main>
      <slot>
        Main Content
      </slot>
    </main>
    <default-footer/>
  </div>
</template>

<script>
import DefaultHeader from "../components/layout/DefaultHeader";
import DefaultFooter from "../components/layout/DefaultFooter";
import {defineComponent} from "vue/dist/vue";

export default defineComponent( {
  components: {DefaultFooter, DefaultHeader}
});
</script>

<style scoped>

</style>