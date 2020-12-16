<template>
  <div id="home">
     <v-card
      flat
      id="top"
    >
      <Top />
    </v-card>

    <v-card
      flat
      id="bottom"
    >
      <Bottom />
    </v-card>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Top from '@/views/Top.vue';
import Bottom from '@/views/Bottom.vue';

@Component({
  components: {
    Top,
    Bottom
  }
})
export default class Home extends Vue {

}
</script>

<style scoped>

</style>