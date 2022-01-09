<template>
  <div class="date-range">
    {{intlStart}} - {{isCurrent ? 'current' : intlEnd}}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import dateFormat, {masks} from 'dateformat';

masks.custom = 'mmmm yyyy';

export default defineComponent({
  name: "DateRange.vue",
  props: {
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      default: null,
    },
    current: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isCurrent(): boolean {
      return this.current || !this.end;
    },
    intlStart(): string {
      const start: Date = new Date(this.start);
      return dateFormat(start, masks.custom);
    },
    intlEnd(): string {
      let result = "";
      if (!this.isCurrent) {
        const end = new Date(this.end);
        result = dateFormat(end, masks.custom);
      }
      return result;
    },
  },
})
</script>

<style scoped>

</style>
