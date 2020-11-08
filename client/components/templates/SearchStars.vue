<template>
<div class="border-4 border-gray-300 rounded flex mx-auto boxsize">
  <div class=""><img src="/galaxy.jpg" class="galaxy m-12 rounded"></div>
  <search-star-form />
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
import SearchStarForm from '../organisms/SearchStarForm.vue'
@Component({
  components: {
    SearchStarForm
  }
})
export default class SearchStars extends Vue {

}
</script>

<style scoped>
.galaxy {
  height: 350px;
}

.boxsize {
  width: 970px;
}
</style>
