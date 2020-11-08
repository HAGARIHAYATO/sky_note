<template>
<div class="mr-6">
  <p>{{inputTitle}}:</p>
  <p><input type="number" v-model="count" @change="parseNumber" :class="'hover:shadow hover:border-gray-400 border-2 border-gray-300 rounded px-2 mb-6 w-' + sizing" /></p>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  PropSync,
  Watch
} from "nuxt-property-decorator"
@Component
export default class NumberInput extends Vue {
  @Prop({
    type: String,
    required: true
  }) inputTitle!: string;
  @Prop({
    required: false
  }) sizing!: number;
  @PropSync('num', {
    type: Number,
    default: 0
  }) cnv!: number;
  @Watch("cnv")
  private reflectNum() {
    this.count = this.cnv
  }
  count = 0
  async mounted() {
    this.reflectNum()
  }
  async parseNumber() {
    this.cnv = Number(this.count)
  }
}
</script>

<style scoped>
</style>
