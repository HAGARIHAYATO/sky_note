<template>
<div class="max-w-2xl mx-auto my-16">
  <save-date />
  <template v-for="(item, i) in array">
    <added-date :key="i" :item="item" />
  </template>
  <template v-if="items.length > 5">
    <p v-if="!isOpen" @click="changeFlag" class="text-blue-600 text-right cursor-pointer">もっと見る</p>
    <p v-else @click="changeFlag" class="text-blue-600 text-right cursor-pointer">閉じる</p>
  </template>
</div>
</template>

<script lang="ts">
import {
  Component,
  Watch,
  Vue,
  Prop
} from "nuxt-property-decorator"
import SaveDate from '../atmos/SaveDate.vue'
import AddedDate from '../atmos/AddedDate.vue'
import { IStar } from "*.vue";
@Component({
  components: {
    SaveDate,
    AddedDate
  }
})
export default class IndexDate extends Vue {
  @Prop({
    required: true
  }) items!: Array<IStar>;

  isOpen = false
  array: Array<IStar> = []
  mounted() {
    this.onChangeIsOpen()
  }

  @Watch('isOpen')
  onChangeIsOpen() {
    if (!this.isOpen) {
      this.array = this.items.slice(0, 5)
    } else {
      this.array = this.items
    }
  }

  changeFlag() {
    this.isOpen = !this.isOpen
  }
}
</script>

<style scoped>
</style>
