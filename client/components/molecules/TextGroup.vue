<template>
<div class="ml-20 container">
  <h2 class="text-left text-xl font-bold">{{item.jpName}} ({{item.direction}})</h2>
  <h3 class="text-left text-lg">{{item.enName}}</h3>
  <p class="break-words text-sm">{{item.roughly}}</p>
  <p class="break-words text-xs my-4 p-4 bg-yellow-200 rounded-lg"><b>概要</b> {{item.content}}</p>
  <p class="break-words text-xs my-4 p-4 bg-yellow-200 rounded-lg"><b>伝承</b> {{item.origin}}</p>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
import {IStar} from '*.vue' 
@Component({
  components: {
    
  }
})
export default class TextGroup extends Vue {
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