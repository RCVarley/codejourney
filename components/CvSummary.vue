<template class="summary">
  <h1>Summary</h1>
  <p 
    v-for="(p, index) in modelValue" 
    :key="index"
    class="summary__paragraph">
    {{ p }}
  </p>
</template>

<script setup></script>
<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent( {
  name: "CvSummary",
  props: {
    modelValue: {
      type: Array as PropType<string[]>,
      required: true,
    },
  }
})
</script>

<style scoped>

</style>