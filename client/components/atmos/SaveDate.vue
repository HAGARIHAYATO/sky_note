<template>
<div class="border-2 border-gray-500">
  <nuxt-link to="/" class="block text-center font-bold bg-gray-500 text-white h-10 leading-10 hover:text-black transition-all duration-300"> + Save Starry Sky </nuxt-link>
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
