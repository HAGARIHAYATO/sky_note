<template>
  <div v-if="popUp.isPopUp" class="py-8 px-12 m-10 fixed bottom-0 right-0 bg-yellow-200 rounded-lg">
    <img @click="removePopUp" class="h-6 absolute top-0 right-0 m-2 cursor-pointer" src="/remove.svg" />
    <p class="font-bold text-xl text-blue text-left break-all textSize">{{textDisplay}}</p>
  </div>
</template>
<script lang="ts">
import { IPopUp } from '*.vue'
import {
  Component,
  Vue,
  Prop
} from 'nuxt-property-decorator'
@Component({})
export default class PopUp extends Vue {
  @Prop({ required: true }) popUp!: IPopUp
  get textDisplay(): string {
    const text = this.popUp.status ? "保存が完了しました。" : "保存が実行できませんでした。ログイン状態を確認してもう一度お試しください。"
    return text
  }
  public removePopUp() {
    this.popUp.isPopUp = !this.popUp.isPopUp
    this.popUp.status = false
  }
}
</script>
<style scoped>
.textSize {
  max-width: 350px;
}
</style>