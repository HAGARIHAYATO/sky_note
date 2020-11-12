<template>
<header class="flex p-2 justify-between mb-20">
  <div><img src="/sky_note.png" class="h-12"></div>
  <div class="flex">
    <nav-link linkUrl="/" linkName="TOP画面" />
    <template v-if="!$auth.user">
      <nav-btn :clickFunc="login" linkName="ログイン" />
    </template>
    <template v-else>
      <nav-link linkUrl="/mypage" linkName="マイページ" />
      <nav-btn :clickFunc="logout" linkName="ログアウト" />
    </template>
  </div>
</header>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import NavLink from '../atmos/NavLink.vue'
import NavBtn from '../atmos/NavBtn.vue'
import auth from 'nuxt.config'
@Component({
  components: {
    NavLink,
    NavBtn
  }
})
export default class Header extends Vue {
  login() {
    this.$auth.login("google")
  }
  logout() {
    this.$auth.logout()
  }
}
</script>

<style scoped>
  
</style>
