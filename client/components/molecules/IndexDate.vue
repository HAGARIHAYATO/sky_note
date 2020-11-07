<template>
<div class="max-w-2xl mx-auto my-16">
  <save-date />
  <template v-for="(item, i) in items">
    <added-date :key="i" :item="item" />
  </template>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
import SaveDate from '../atmos/SaveDate.vue'
import AddedDate from '../atmos/AddedDate.vue'
@Component({
  components: {
    SaveDate,
    AddedDate
  }
})
export default class IndexDate extends Vue {
  @Prop({
    required: true
  }) items!: [];
}
</script>

<style scoped>
</style>
