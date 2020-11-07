<template>
<div class="border-b-4 border-gray-400 py-2 mx-4 hover:border-black transition-all duration-200">
  <nuxt-link :to="linkUrl" class="ml-6">{{linkName}}</nuxt-link>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
@Component
export default class NavLink extends Vue {
  @Prop({
    type: String,
    required: true
  }) linkUrl!: string;
  @Prop({
    type: String,
    required: true
  }) linkName!: string;
}
</script>

<style scoped>
</style>
