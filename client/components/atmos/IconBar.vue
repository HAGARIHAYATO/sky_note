<template>
<div class="max-w-2xl mx-auto border-2 rounded-lg border-gray-500 py-2 px-4 flex items-center justify-between">
  <img :src="currentUser.picture" class="rounded-full h-16">
  <p class="text-xl font-bold min-w-full text-center">{{currentUser.name}}</p>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
@Component
export default class IconBar extends Vue {
  @Prop({
    required: true
  }) currentUser!: object;
}
</script>

<style scoped>
</style>
