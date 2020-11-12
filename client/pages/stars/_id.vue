<template>
<div>
  <Header />
  <h2 class="text-center font-bold text-xl my-10">星座解説</h2>
  <commentary :item="item"/>
</div>
</template>

<script lang="ts">
import Header from '../../components/organisms/Header.vue'
import Commentary from '../../components/templates/Commentary.vue'
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
import { IStar, Result } from '*.vue'
@Component({
  auth: false,
  middleware: ["query"],
  components: {
    Header,
    Commentary
  },
  async asyncData({
    $axios,
    query,
    redirect
  }) {
    const baseUrl = "https://livlog.xyz/hoshimiru/constellation"
    const getUrl = encodeURI(baseUrl)
    return await $axios.$get(getUrl, {
      params: query
    }).then((res: Result) => {
      return {
        item: res.result[0]
      }
    }).catch((err: Error) => {
      console.error(err)
    })
  }
})
export default class StarShow extends Vue {
  item ? = {}
  async mounted() {
    console.log(this.item)
  }
}
</script>

<style scoped>
  
</style>
