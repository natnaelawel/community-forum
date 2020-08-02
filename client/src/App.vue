<template>
  <div id="app">
    <div id="nav">
      <app-nav></app-nav>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";

export default {
  components: {
    "app-nav": AppNav
  }
};
</script>

<style lang="scss">
</style>
