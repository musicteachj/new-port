<template>
  <v-app>
    <v-main id="main">
      <Home />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Home from './views/Home.vue';

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {
  
}
</script>
