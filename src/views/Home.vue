<template>
  <div id="home">
    <v-card 
      id="top"
      :height="window.height"
      :width="window.width"
      color="blue"
      class="d-flex align-content-center flex-wrap">
      <v-col cols="12">
        <v-row class="ml-3 mr-3 pb-8 justify-center">
          <!-- <v-card
            v-for="n in 20"
            :key="n"
            class="pa-2"
            outlined
            tile
          >
            Flex item
          </v-card> -->
          <div :class="`text-${nameFontSize}`">{{window.width}}</div>
        </v-row>

        <v-row class="ml-3 mr-3 justify-center">
          <v-card
            v-for="m in 30"
            :key="m"
            class="pa-2"
            outlined
            tile
          >
            test
          </v-card>
        </v-row>
      </v-col>
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
  get nameFontSize() {
    if (this.window.width <= 600) {
      return "h1"
    }

    if (this.window.width >= 601 && this.window.width <= 960) {
      return "caption"
    }

    if (this.window.width >= 961 && this.window.width <= 1264) {
      return "h1"
    }

    if (this.window.width >= 1265 && this.window.width <= 1904) {
      return "caption"
    }

    if (this.window.width >= 1905) {
      return "h1"
    }

    return ""

  }

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