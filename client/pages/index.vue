<template>
<div class="">
  <Header />
  <h2 class="text-center text-xl font-bold my-6">星空を探索</h2>
  <search-stars />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/organisms/Header.vue'
import SearchStars from '../components/templates/SearchStars.vue'
export default Vue.extend({
  auth: false,
  components: {
    Header,
    SearchStars
  }
})
</script>

<style>
</style>
