<template>
<div class="border-b-4 border-gray-400 py-2 mx-4 hover:border-black transition-all duration-200">
  <button @click.stop="clickFunc" class="ml-6 focus:outline-none">{{linkName}}</button>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
@Component
export default class NavBtn extends Vue {
  @Prop({
    type: Function,
    required: true
  }) clickFunc!: () => void;
  @Prop({
    type: String,
    required: true
  }) linkName!: string;
}
</script>

<style scoped>
</style>
