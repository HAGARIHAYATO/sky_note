<template>
<div>
  <Header />
  <h2 v-if="q.date" class="text-center font-bold text-xl my-10">{{q.date}} {{q.hour}}h {{q.min}}m の星空</h2>
  <button v-if="$auth.user && array.length > 0" @click="saveDateString" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-16 rounded focus:outline-none block mx-auto">この星空を保存する</button>
  <constellation-list v-if="q.date" :list="array" />
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
import Header from '../../components/organisms/Header.vue'
import ConstellationList from '../../components/templates/ConstellationList.vue'
@Component({
  auth: false,
  middleware: ["query"],
  components: {
    Header,
    ConstellationList
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
    }).then(res => {
      return {
        array: res.result
      }
    }).catch(err => {
      console.error(err)
    })
  }
})
export default class StarIndex extends Vue {
  q ? = this.$route.query
  array ? = []
  public async saveDateString() {
    // TODO date save DB via server
  }
}
</script>

<style scoped>
  
</style>
