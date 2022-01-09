<template>
  <h1>Education</h1>
  <div
    v-for="(course, index) in modelValue"
    :key="index"
    class="course">
    <h2 class="course__title">{{course.title}}</h2>
    <div class="institution">{{course.institution}}</div>
    <date-range :start="course.start" :end="course.end" :current="course.current"/>
    <div class="course__achieved"><strong>Achieved:</strong> {{course.achieved}}</div>
  </div>
</template>

<script setup></script>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import DateRange from "./DateRange.vue";
import {Course} from "../types/types";

export default defineComponent({
  name: "CvEducation",
  components: {DateRange},
  props: {
    modelValue: {
      type: Array as PropType<Course[]>,
      required: true,
    },
  },
})
</script>

<style scoped>

</style>