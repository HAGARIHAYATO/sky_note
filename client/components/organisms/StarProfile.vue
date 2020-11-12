<template>
<div class="profileBoard flex border-2 border-gray-400 rounded-lg my-16 justify-start">
  <img :src="item.starIcon" class="imgSize border-2 border-blue-400 rounded-lg bg-black block"/>
  <text-group :item="item" />
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
import {IStar} from '*.vue'
import TextGroup from '../molecules/TextGroup.vue'
@Component({
  components: {
    TextGroup
  }
})
export default class StarProfile extends Vue {
  @Prop({
    required: true
  }) item!: IStar;
}
</script>
<style scoped>
.profileBoard{
  height: 374px;
  padding: 10px;
}
.imgSize{
  height: 350px;
  width: 350px;
}
</style>