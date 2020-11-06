<template>
<div>
  mypage
  <p v-for="(item, i) in array" :key="i">
    {{item}}
  </p>
</div>
</template>

<script lang="ts">
import axios from "axios"
export default {
  data() {
    return {
      array: []
    }
  },
  async mounted() {
    const baseUrl = 'http://localhost:3000/api'
    const getUrl = encodeURI(baseUrl)
    await axios.get(getUrl).then(res => {
      this.array = res.data.Result
    })
  },
}
</script>

<style scoped>
  
</style>
