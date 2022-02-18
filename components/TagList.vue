<template>
  <h2>{{title}}</h2>
  <ul>
    <li
      v-for="(tag, index) in tags"
      :key="index">
      {{tag}}
    </li>
  </ul>
</template>

<script setup></script>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent( {
  name: 'TagList',
  props: {
    tags: {
      type: Array as PropType<string[]>,
      required: true,
    },
    title: {
      type: String,
      default: "tags",
    },
  },
})
</script>

<style lang="scss">

</style>
