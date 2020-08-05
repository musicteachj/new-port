<template>
  <div id="topComp">
    <v-card 
      id="topOneCard"
      :height="window.height / 2"
      :width="window.width"
      color="blue"
      class="d-flex align-content-end flex-wrap">
      <v-col cols="12">
       <v-row class="ml-3 mr-3 mb-16 justify-center">
          <transition name="name">
            <p v-if="showName" :class="`text-${nameFontSize}`">{{window.width}}</p>
          </transition>
        </v-row>
      </v-col>
    </v-card>

    <v-card 
      id="topTwoCard"
      :height="window.height / 2"
      :width="window.width"
      color="purple"
      class="d-flex align-content-start flex-wrap"
    >
      <v-col cols="12" class="mx-auto" style="background-color:red; max-width: 90% !important;">
        <v-row class="ml-3 mr-3 justify-center" style="background-color:blue">
          <div  
            v-for="s in shows"
            :key="s.id"
            class="pa-2 mx-auto divIt"
          >
            <transition name="nameNew">    
              <v-card v-once width="50" height="50" v-if="s.show">
                <p>{{s.tech}}</p>
              </v-card>
            </transition>
          </div>
        </v-row>
      </v-col>
    </v-card>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
// import { set } from 'vue/types/umd';

@Component({})
export default class Top extends Vue {
  // LOCAL VARIABLES ------------------
   window: any = {
    width: 0,
    height: 0
  };
  showName = false;
  shows: any = [
    {show: false, id: 1, tech: "HTML"},
    {show: false, id: 2, tech: "CSS"},
    {show: false, id: 3, tech: "Sass"},
    {show: false, id: 4, tech: "JavaScript"},
    {show: false, id: 5, tech: "TypeScript"},
    {show: false, id: 6, tech: "Express"},
    {show: false, id: 7, tech: "GraphQL"},
    {show: false, id: 8, tech: "MongoDB"},
    {show: false, id: 9, tech: "Bootstrap"},
    {show: false, id: 10, tech: "Vue"},
    {show: false, id: 11, tech: "React"},
    {show: false, id: 12, tech: "Vuex"},
    {show: false, id: 13, tech: "Git"},
    {show: false, id: 14, tech: "Node"},
    {show: false, id: 15, tech: "BitBucket"},
    {show: false, id: 16, tech: "Jira"},
    {show: false, id: 17, tech: "Azure"},
    {show: false, id: 18, tech: "Vuetify"},
  ]

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

    return "h1"

  }

  // EVENTS ---------------------------

  // LIFECYCLE EVENTS -----------------
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  }

  mounted() {
    this.newTimeOutFunc();
  }

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  }

  // METHODS --------------------------
  newTimeOutFunc() {
    let timer = 1500;
    let idNumber = 1;

    setTimeout(() => {
      this.showName = true
    }, 1000);

    // Randomizes array
    for (let i = this.shows.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.shows[i], this.shows[j]] = [this.shows[j], this.shows[i]];
    }

    for (let i = 0; i < this.shows.length; i++) {
      for (const s of this.shows) { 
        if (s.id === idNumber) {
          timer = timer += 150;
          idNumber = idNumber += 1;
          setTimeout(() => {
            s.show = true
          }, timer);
        }
      }
    }
  }

  handleResize() {
    this.window.width = window.innerWidth;
    this.window.height = window.innerHeight;
  }

}
</script>

<style scoped>
.name-enter-active {
  transition: all 2s ease;
}
.name-leave-active {
  transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.name-enter, .name-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

.nameNew-enter-active {
  transition: all 1s ease;
}
.nameNew-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.nameNew-enter, .nameNew-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

/* .card {
  background-color: white;
  border: 1px solid black;
} */

.divIt {
  background-color: green;
  width: 75px;
  height: 75px;
}
</style>