<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
// import { mixin } from 'vue/types/umd';
// import Top from '@/views/Top.vue';
// import Bottom from '@/views/Bottom.vue';
// import { set } from 'vue/types/umd';

@Component
export default class Styling extends Vue {

  // COMPUTED -------------------------
  get nameFontSize() {
    // if (this.window.width <= 600) {
    //   return "h1"
    // }

    // if (this.window.width >= 601 && this.window.width <= 960) {
    //   return "caption"
    // }

    // if (this.window.width >= 961 && this.window.width <= 1264) {
    //   return "h1"
    // }

    // if (this.window.width >= 1265 && this.window.width <= 1904) {
    //   return "caption"
    // }

    // if (this.window.width >= 1905) {
    //   return "h1"
    // }

    // return ""

    return "h2"

  }

}
</script>

<style scoped>

</style>