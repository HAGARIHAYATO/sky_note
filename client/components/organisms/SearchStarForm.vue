<template>
<div class="p-12">
  <div class="flex">
    <number-input inputTitle="緯度" :num.sync="latitude" />
    <number-input inputTitle="経度" :num.sync="longitude" />
  </div>
  <location-btn :lat.sync="latitude" :long.sync="longitude" />
  <div class="flex my-6">
    <date-input inputTitle="年月日" :dateInfo.sync="dateInfo" />
    <number-input inputTitle="時" :num.sync="hourInfo" :sizing="16" />
    <number-input inputTitle="分" :num.sync="minInfo" :sizing="16" />
    <pict-btn url="/reload.png" :parentFunc="reloadTime" />
  </div>
  <div class=""></div>
  <button @click="sendLocationInfo" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">星座を見に行こう</button>
</div>
</template>

<script lang="ts">
import NumberInput from "../atmos/NumberInput.vue"
import DateInput from "../atmos/DateInput.vue"
import LocationBtn from "../atmos/LocationBtn.vue"
import PictBtn from "../atmos/PictBtn.vue"
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
@Component({
  components: {
    NumberInput,
    DateInput,
    LocationBtn,
    PictBtn
  }
})
export default class SearchStarForm extends Vue {
  date = new Date();
  latitude: number = 0.0
  longitude: number = 0.0
  dateInfo: string = String(this.date.getFullYear() + "/" + this.parseDateString(Number(this.date.getMonth() + 1)) + "/" + this.parseDateString(this.date.getDate()))
  hourInfo: number = this.date.getHours()
  minInfo: number = this.date.getMinutes()
  private parseDateString(num: number): string {
    return (num > 9) ? String(num) : String("0" + num)
  }
  async reloadTime() {
    this.date = new Date()
    this.dateInfo = String(this.date.getFullYear() + "-" + this.parseDateString(Number(this.date.getMonth() + 1)) + "-" + this.parseDateString(this.date.getDate()))
    this.minInfo = this.date.getMinutes()
    this.hourInfo = this.date.getHours()
  }
  async sendLocationInfo() {
    this.$router.push({
      path: '/stars',
      query: {
        lat: String(this.latitude),
        lng: String(this.longitude),
        date: this.dateInfo,
        hour: this.parseDateString(this.hourInfo),
        min: this.parseDateString(this.minInfo)
      }
    })
  }
}
</script>

<style scoped>
</style>
