<template>
<div class="">
  <Header />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/organisms/Header.vue'
export default Vue.extend({
  auth: false,
  components: {
    Header
  }
})
</script>

<style>
</style>
