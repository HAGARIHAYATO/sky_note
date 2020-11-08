<template>
<div class="pt-6">
  <button @click="parentFunc" class="focus:outline-none"><img :src="url" class="hover:shadow hover:border-gray-400 border-2 p-1 border-gray-300 rounded imgsize" /></button>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  PropSync
} from "nuxt-property-decorator"
@Component
export default class NumberInput extends Vue {
  @Prop({
    type: String,
    required: true
  }) url!: string;
  @Prop({
    type: Function,
    required: false
  }) parentFunc!: () => void;
}
</script>

<style scoped>
.imgsize {
  height: 28px;
}
</style>
