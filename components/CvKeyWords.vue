<template>
  <h1>Key Words</h1>
  <p
    v-for="(t, tIndex) in modelValue"
    :key="tIndex">
    <strong>{{t.title}}:</strong> {{t.tags.join(', ')}}
  </p>
</template>

<script setup></script>

<script lang="ts">
import {Tags} from "../types/types";
import {defineComponent, PropType} from "vue";

export default defineComponent( {
  name: "KeyWords",
  props: {
    modelValue: {
      type: Object as PropType<Tags[]>,
      required: true, 
    },
  },
})
</script>