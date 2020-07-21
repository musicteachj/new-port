<template>
  <div id="home">
    <v-card 
      id="top"
      :height="window.height"
      :width="window.width"
      color="blue">
      <h1>home</h1>
    </v-card>
    <v-card
      id="bottom">
      <h1>more</h1>
    </v-card>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Home extends Vue {
  // LOCAL VARIABLES ------------------
   window: any = {
    width: 0,
    height: 0
  }

  // COMPUTED -------------------------

  // EVENTS ---------------------------

  // LIFECYCLE EVENTS -----------------
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  }

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  }

  // METHODS --------------------------
  handleResize() {
    this.window.width = window.innerWidth;
    this.window.height = window.innerHeight;
  }

}
</script>

<style scoped>

</style>