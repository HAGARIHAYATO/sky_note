<template>
<div>
  mypage
  {{status}}
</div>
</template>

<script lang="ts">
import axios from "axios"
export default {
  data() {
    return {
      status: ""
    }
  },
  async mounted() {
    const baseUrl = 'http://localhost:3000/api'
    const getUrl = encodeURI(baseUrl)
    await axios.get(getUrl).then(res => {
      console.log(res.data.Status)
      this.status = String(res.data.Status)
    })
  },
}
</script>

<style scoped>
  
</style>
