<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Styling extends Vue {

  // COMPUTED -------------------------
  get nameFontSize() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return 'h4';
      case 'sm': return 'h3';
      case 'md': return 'h2';
      case 'lg': return 'h1';
      case 'xl': return 'h1';
      default: return 'h1';
    }
  }

  get projectsText() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return 'h4';
      case 'sm': return 'h3';
      case 'md': return 'h2';
      case 'lg': return 'h1';
      case 'xl': return 'h1';
      default: return 'h1';
    }
  }
}
</script>

<style scoped>

</style>