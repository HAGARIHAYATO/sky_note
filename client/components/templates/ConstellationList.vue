<template>
<div>
  <div v-if="list && list.length !== 0" class="flex mx-auto container flex-wrap justify-evenly">
    <template v-for="(item, i) in list">
      <star-card :item="item" :key="i" />
    </template>
  </div>
  <h2 v-else class="text-center text-3xl font-bold m-40 text-gray-500">少し待ってから画面をリロードしてください</h2>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
import StarCard from '../molecules/StarCard.vue'
@Component({
  components: {
    StarCard
  }
})
export default class ConstellationList extends Vue {
  @Prop({
    required: true
  }) list!: any[];
}
</script>
