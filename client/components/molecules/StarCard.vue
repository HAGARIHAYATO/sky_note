<template>
<nuxt-link :to="'/stars/' + item.enName + urlQuery">
  <div class="border-2 border-blue-400 m-10 rounded bg-black relative">
    <img :src="item.starIcon" class="cardsizing rounded-lg">
    <div class="namefolder bg-white opacity-75 hover:opacity-0 transition-all duration-200">
      <p class="text-center text-lg font-bold">{{item.jpName}}</p>
      <p class="text-center text-sm">{{item.enName}}</p>
    </div>
  </div>
</nuxt-link>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
@Component
export default class StarCard extends Vue {
  @Prop({
    required: true
  }) item!: any;
  q = this.$route.query
  urlQuery = "?" + "lat=" + this.q.lat + "&lng=" + this.q.lng + "&date=" + this.q.date + "&hour=" + this.q.hour + "&min=" + this.q.min + "&id=" + this.item.id
}
</script>

<style scoped>
.cardsizing {
  height: 200px;
  width: 200px;
}

.namefolder {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
