<template class="highlights">
  <h1>{{ title }}</h1>
  <p 
    v-for="(h, index) in modelValue"
    :key="index"
    class="highlights__highlight">
    <span class="icon">{{h.icon}}</span><strong>{{h.hook}}</strong>
     - {{h.caption}}
  </p>
</template>

<script lang="ts">
import {PropType, defineComponent} from "vue";
import {Highlight} from "../types/types";

export default defineComponent({
  name: "CvHighlights",
  props: {
    modelValue: {
      type: Array as PropType<Highlight[]>,
      required: true,
    },
    title: {
      type: String, 
      default: 'Highlights',
    },
  },
})
</script>

<style scoped>

</style>