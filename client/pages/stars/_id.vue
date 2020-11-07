<template>
<div>
  <Header />
  star show
</div>
</template>

<script lang="ts">
import Header from '../../components/organisms/Header.vue'
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
@Component({
  components: {
    Header
  }
})
export default class StarShow extends Vue {}
</script>

<style scoped>
  
</style>
