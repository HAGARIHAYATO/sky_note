<template>
<div>
  <Header />
  <Profile :currentUser="$auth.user" :items="array" />
</div>
</template>

<script lang="ts">
import axios from "axios"
import auth from "nuxt.config"
import Header from '../../components/organisms/Header.vue'
import Profile from '../../components/organisms/Profile.vue'
import {
  Component,
  Vue
} from "nuxt-property-decorator"
@Component({
  components: {
    Header,
    Profile
  },
  async asyncData({
    $axios
  }) {
    const baseUrl = 'http://localhost:3000/api'
    const getUrl = encodeURI(baseUrl)
    const array = await $axios.$get(getUrl)
    return {
      array: array.Result
    }
  },
})
export default class MyPage extends Vue {
  logout() {
    this.$auth.logout()
  }
}
</script>

<style scoped>
  
</style>
