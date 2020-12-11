<template>
  <div id="home" style="background-color:purple">
     <v-card
      flat
      id="top">
      <NewTop />
    </v-card>

    <v-card
      flat
      id="bottom">
      <Bottom />
    </v-card>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Top from '@/views/Top.vue';
import NewTop from '@/views/NewTop.vue';
import Bottom from '@/views/Bottom.vue';
// import { set } from 'vue/types/umd';

@Component({
  components: {
    Top,
    Bottom,
    NewTop
  }
})
export default class Home extends Vue {

}
</script>

<style scoped>

</style>