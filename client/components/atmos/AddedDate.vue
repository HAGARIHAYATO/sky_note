<template>
<div class="border-2 border-t-0 border-gray-300">
  <nuxt-link :to="'/stars/' + item.date + '@' + item.hour + '@' + item.min" class="block text-center font-bold text-gray-500 h-10 leading-10 hover:text-black transition-all duration-300"> {{item.date}} {{item.hour}}h {{item.min}}m の星空 </nuxt-link>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
@Component
export default class AddedDate extends Vue {
  @Prop({
    type: Object,
    required: true
  }) item!: object;
}
</script>

<style scoped>
</style>
