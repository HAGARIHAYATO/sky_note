<template>
<div class="border-2 border-gray-400">
  <nuxt-link to="/" class="block text-center font-bold bg-gray-400 text-white h-10 leading-10 hover:text-black transition-all duration-300"> + Save Starry Sky </nuxt-link>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
@Component
export default class SaveDate extends Vue {}
</script>

<style scoped>
</style>
