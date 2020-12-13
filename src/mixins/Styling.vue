<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Styling extends Vue {

  // LOCAL VARIABLES ------------------
   window: any = {
    width: 0,
    height: 0
  };

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

  get cardDim() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return '60';
      case 'sm': return '60';
      case 'md': return '80';
      case 'lg': return '95';
      case 'xl': return '95';
      default: return '95';
    }
  }

  get newTopTop() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return (this.window.height / 2) - 200;
      case 'sm': return (this.window.height / 2) - 100;
      case 'md': return (this.window.height / 2) - 150;
      case 'lg': return (this.window.height / 2) - 200;
      case 'xl': return (this.window.height / 2) - 200;
      default: return this.window.height / 2;
    }
  }

  get newTopBottom() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return (this.window.height / 2) + 200;
      case 'sm': return (this.window.height / 2) + 100;
      case 'md': return (this.window.height / 2) + 150;
      case 'lg': return (this.window.height / 2) + 200;
      case 'xl': return (this.window.height / 2) + 200;
      default: return this.window.height / 2;
    }
  }

  // get iconContainerDiv() {
  //   let changeDiv: any = {
  //     background-color: green;
  // width: 95px;
  // height: 95px;
  //   };
  //   switch (this.$vuetify.breakpoint.name) {
  //     case 'xs': return 'h4';
  //     case 'sm': return 'h3';
  //     case 'md': return 'h2';
  //     case 'lg': return 'h1';
  //     case 'xl': return 'h1';
  //     default: return 'h1';
  //   }
  // }

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