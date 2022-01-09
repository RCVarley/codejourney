<template class="skills">
  <h1>Skills</h1>
  <tag-list
    v-for="(t, index) in modelValue"
    :key="index"
    :tags="t.tags"
    :title="t.title">
  </tag-list>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import TagList from "./TagList.vue";
import type {Tags} from "../types/types";

export default defineComponent( {
  name: "CvSkills",
  components: {
    TagList,
  },
  props: {
    modelValue: {
      type: Object as PropType<Tags[]>,
      required: true,
    },
  },
  computed: {
  },
})
</script>

<style scoped>

</style>