<template>
  <div class="stack">
    <cv-header/>
    <main>
      <slot>
        Main Content
      </slot>
    </main>
    <default-footer/>
  </div>
</template>

<script lang="ts">
import CvHeader from '../components/layout/CvHeader.vue';
import DefaultFooter from '../components/layout/DefaultFooter.vue';
import {defineComponent} from "vue";

export default defineComponent({
  components: {DefaultFooter, CvHeader}
})
</script>

<style scoped>

</style>