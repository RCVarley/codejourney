<template class="experience">
  <h1>Experience</h1>
  <div v-for="(pos, pIndex) in modelValue"
       :key="pIndex"
       class="experience__position">
    <h2 class="experience__title">{{pos.title}}</h2>
    <div class="experience__company">{{pos.company}}</div>
    <date-range :start="pos.start" :end="pos.end" :current="pos.current"/>
    <ul v-if="pos.feats?.length > 0"
        class="experience__feats">
      <li v-for="(feat, fIndex) in pos.feats"
          :key="fIndex"
          class="experience__feat">
        {{feat}}
      </li>
    </ul>
    <ul v-if="pos.role?.length > 0"
        class="experience__roles">
      <li v-for="(role, fIndex) in pos.role"
          :key="fIndex"
          class="experience__role">
        {{role}}
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import DateRange from "./DateRange.vue";
import type {Position} from '../types/types';

export default defineComponent( {
  name: "CvExperience",
  components: {
    DateRange,
  },
  props: {
    modelValue: {
      type: Array as PropType<Position[]>,
      required: true,
    },
  },
})
</script>

<style scoped>

</style>
