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
import {defineComponent, PropType} from "vue";
import type {TagGroup} from "../types/types";

export default defineComponent( {
  name: "KeyWords",
  props: {
    modelValue: {
      type: Object as PropType<TagGroup[]>,
      required: true,
    },
  },
})
</script>
