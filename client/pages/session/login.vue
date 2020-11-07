<template>
<div>
  login
  <button @click.stop="authenticate">click</button>
</div>
</template>

<script lang="ts">
import auth from "nuxt.config"
export default {
  methods: {
    authenticate() {
      this.$auth.loginWith("google");
    }
  }
}
</script>

<style scoped>
  
</style>
