<template>
<div>
  <Header />
  stars index
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
import Header from '../../components/organisms/Header.vue'
@Component({
  auth: false,
  components: {
    Header
  }
})
export default class StarIndex extends Vue {}
</script>

<style scoped>
  
</style>
