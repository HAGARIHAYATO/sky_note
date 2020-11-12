<template>
<div class="">
  <icon-bar :currentUser="currentUser" />
  <index-date :items="items" />
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
import IndexDate from '../molecules/IndexDate.vue'
import IconBar from '../atmos/IconBar.vue'
import { IStar, IUser } from "*.vue";
@Component({
  components: {
    IndexDate
  }
})
export default class Profile extends Vue {
  @Prop({
    required: true
  }) currentUser!: IUser;
  @Prop({
    required: true
  }) items!: Array<IStar>;
}
</script>

<style scoped>
</style>
