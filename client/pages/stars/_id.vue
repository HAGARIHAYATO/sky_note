<template>
<div>
  <Header />
</div>
</template>

<script lang="ts">
import Header from '../../components/organisms/Header.vue'
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
@Component({
  auth: false,
  middleware: ["query"],
  components: {
    Header
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
        item: res.result[0]
      }
    }).catch(err => {
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
