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
  }
})
export default class MyPage extends Vue {
  array = []

  async mounted() {
    const baseUrl = 'http://localhost:3000/api'
    const getUrl = encodeURI(baseUrl)
    await axios.get(getUrl).then(res => {
      this.array = res.data.Result
    })
  }

  logout() {
    this.$auth.logout()
  }
}
</script>

<style scoped>
  
</style>
