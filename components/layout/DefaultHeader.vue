<script lang="ts" setup></script>

<template>
  <header>
    <div class="title">CodeJourney.dev</div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cv">CV</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DefaultHeader",
});
</script>

<style scoped>

</style>