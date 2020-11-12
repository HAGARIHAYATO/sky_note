<template>
<div>
  <Header />
  <h2 v-if="q.date" class="text-center font-bold text-xl my-10">{{q.date}} {{q.hour}}h {{q.min}}m の星空</h2>
  <button v-if="$auth.user && array.length > 0" @click="saveDateObject" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-16 rounded focus:outline-none block mx-auto">この星空を保存する</button>
  <constellation-list v-if="q.date" :list="array" />
  <pop-up :popUp="popUp" />
</div>
</template>

<script lang="ts">
import { IPopUp, Result } from '*.vue'
import {
  Component,
  Vue,
  Watch
} from 'nuxt-property-decorator'
import auth from 'nuxt.config'
import Header from '../../components/organisms/Header.vue'
import ConstellationList from '../../components/templates/ConstellationList.vue'
import PopUp from '../../components/molecules/PopUp.vue'
@Component({
  auth: false,
  middleware: ["query"],
  components: {
    Header,
    ConstellationList,
    PopUp
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
        array: res.result
      }
    }).catch((err: Error) => {
      console.error(err)
    })
  }
})
export default class StarIndex extends Vue {
  q ? = this.$route.query
  array ? = []
  popUp: IPopUp = {
    isPopUp: false,
    status: false
  }

  public async saveDateObject() {
    this.q!.user_sub = this.$auth.user.sub
    const baseUrl = "http://localhost:3000/api/stars"
    const getUrl = encodeURI(baseUrl)
    this.$axios.$post(getUrl, {
      params: this.q
    }).then(() => {
      this.popUp = {
        status: true,
        isPopUp: true
      }
    }).catch((err: Error) => {
      this.popUp = {
        status: false,
        isPopUp: true
      }
    })
  }
}
</script>

<style scoped>
  
</style>
