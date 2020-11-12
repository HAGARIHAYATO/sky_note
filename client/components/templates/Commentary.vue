<template>
<div class="mx-auto my-12">
  <div v-if="item && item.id" class="starImage mx-auto">
    <div class="bg-gray-900 rounded-lg">
      <img :src="item.starImage" class="mx-auto" />
    </div>
    <star-profile :item="item" />
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
import {IStar} from '*.vue' 
import StarProfile from '../organisms/StarProfile.vue'
@Component({
  components: {
    StarProfile
  }
})
export default class Commentary extends Vue {
  @Prop({
    required: true
  }) item!: IStar;
}
</script>
<style scoped>
.starImage {
  width: 70%;
}  
</style>