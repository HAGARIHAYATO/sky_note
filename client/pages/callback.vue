<template>
<div class="box">
  <img src="/sky_note.png" class="h-40 mx-auto block">
  <p class="text-center text font-bold text-lg">get started connection . . .</p>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
@Component
export default class CallBack extends Vue {}
</script>

<style scoped>
.box {
  position: absolute;
  width: 350px;
  height: 200px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.text {
  color: #0282BE;
}
</style>
