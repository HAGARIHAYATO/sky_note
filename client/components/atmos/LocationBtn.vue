<template>
<button @click="getLocation" class="border-2 rounded border-gray-300 geobtn block hover:shadow hover:border-gray-400">
  <img src="/geobtn.png" class="rounded">
</button>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  PropSync
} from "nuxt-property-decorator"
@Component
export default class LocationBtn extends Vue {
  @PropSync('lat', {
    type: Number,
    default: 0
  }) latitude!: number;
  @PropSync('long', {
    type: Number,
    default: 0
  }) longitude!: number;
  getLocation() {
    if (process.client) {
      if (!navigator.geolocation) {
        alert('現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。')
        return
      }
      const options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
      }
      navigator.geolocation.getCurrentPosition(this.success, this.error, options)
    }
  }
  success(position: any) {
    this.latitude = position.coords.latitude
    this.longitude = position.coords.longitude
  }

  error(error: any) {
    switch (error.code) {
      case 1: //PERMISSION_DENIED
        alert('位置情報の利用が許可されていません')
        break
      case 2: //POSITION_UNAVAILABLE
        alert('現在位置が取得できませんでした')
        break
      case 3: //TIMEOUT
        alert('タイムアウトになりました')
        break
      default:
        alert('現在位置が取得できませんでした')
        break
    }
  }
}
</script>

<style scoped>
.geobtn {
  position: relative;
  width: 250px;
  height: 106px;
  cursor: pointer;
}
</style>
