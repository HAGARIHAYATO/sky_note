<template>
<div class="mr-6">
  <p>{{inputTitle}}:</p>
  <p><input type="date" v-model="now" @change="parseString" class="border-2 border-gray-300 rounded px-2 mb-6 hover:shadow hover:border-gray-400" /></p>
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
export default class DateInput extends Vue {
  @Prop({
    type: String,
    required: true
  }) inputTitle!: string;
  @PropSync('dateInfo', {
    type: String,
    default: 0
  }) cnv!: string;
  now: Date = new Date
  async mounted() {
    this.now = new Date(this.cnv)
  }
  async parseString() {
    this.cnv = String(this.now)
  }
}
</script>

<style scoped>
</style>
