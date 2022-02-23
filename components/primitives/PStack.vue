<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'PStack',
  props: {
    large: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    recursive: {
      type: Boolean,
      default: false,
    },
    splitIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    classes () {
      const result = ['stack'];
      if (this.recursive) {
        if (this.large) {
          result.push('stack--recursive-large');
        } else if (this.small) {
          result.push('stack--recursive-small');
        }
      } else if (this.large) {
        result.push('stack--large');
      } else if (this.small) {
        result.push('stack--small');
      }

      if (this.splitIndex > 1) {
        result.push(`stack--split-${this.splitIndex}`);
      }

      return result;
    }
  }
})
</script>

<style lang="scss">
@use '/assets/styles/layout';

.stack {
  padding: layout.$s0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    margin-block: 0;
  }

  &--recursive * + *,
  & > * + * {
    margin-block-start: layout.$s-1;
  }

  &--recursive-large * + *,
  &--large > * + * {
    margin-block-start: layout.$s1;
  }

  &--recursive-small * + *,
  &--small > * + * {
    margin-block-start: layout.$s-3;
  }

  @for $i from 2 through 9 {
    &--split-#{$i} {
      @include layout.split($i);
    }
  }
}
</style>
