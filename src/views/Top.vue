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
        <!-- <v-row class="ml-3 mr-3 justify-center" style="background-color:blue">
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
        </v-row> -->

        <v-row class="ml-3 mr-3 justify-center" style="background-color:blue">
          <div  
            v-for="s in frontTech"
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

        <v-row class="ml-3 mr-3 justify-center" style="background-color:orange">
          <div  
            v-for="s in backTech"
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

        <v-row class="ml-3 mr-3 justify-center" style="background-color:cyan">
          <div  
            v-for="s in otherTech"
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

        <v-row class="ml-3 mr-3 justify-center" style="background-color:blue">
          <div class="divIt2 text-center">
            <transition name="nameNew">
            <v-btn v-if="showBtn" class="mt-6">Projects</v-btn>
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
  showBtn = false;

  frontTech: any = [
    {show: false, id: 1, tech: "HTML"},
    {show: false, id: 2, tech: "CSS"},
    {show: false, id: 3, tech: "Sass"},
    {show: false, id: 4, tech: "Bootstrap"},
    {show: false, id: 5, tech: "Vuetify"},
  ]

  backTech: any = [
    {show: false, id: 1, tech: "JavaScript"},
    {show: false, id: 2, tech: "TypeScript"},
    {show: false, id: 3, tech: "Express"},
    {show: false, id: 4, tech: "GraphQL"},
    {show: false, id: 5, tech: "MongoDB"},
    {show: false, id: 6, tech: "Vue"},
    {show: false, id: 7, tech: "React"},
    {show: false, id: 8, tech: "Vuex"},
    {show: false, id: 9, tech: "Node"},
  ]

  otherTech: any = [
    {show: false, id: 1, tech: "Git"},
    {show: false, id: 2, tech: "Github"},
    {show: false, id: 3, tech: "BitBucket"},
    {show: false, id: 4, tech: "Jira"},
    {show: false, id: 5, tech: "Azure"},
  ]

  // shows: any = [
  //   {show: false, id: 1, tech: "HTML"},
  //   {show: false, id: 2, tech: "CSS"},
  //   {show: false, id: 3, tech: "Sass"},
  //   {show: false, id: 4, tech: "JavaScript"},
  //   {show: false, id: 5, tech: "TypeScript"},
  //   {show: false, id: 6, tech: "Express"},
  //   {show: false, id: 7, tech: "GraphQL"},
  //   {show: false, id: 8, tech: "MongoDB"},
  //   {show: false, id: 9, tech: "Bootstrap"},
  //   {show: false, id: 10, tech: "Vue"},
  //   {show: false, id: 11, tech: "React"},
  //   {show: false, id: 12, tech: "Vuex"},
  //   {show: false, id: 13, tech: "Git"},
  //   {show: false, id: 14, tech: "Node"},
  //   {show: false, id: 15, tech: "BitBucket"},
  //   {show: false, id: 16, tech: "Jira"},
  //   {show: false, id: 17, tech: "Azure"},
  //   {show: false, id: 18, tech: "Vuetify"},
  // ]

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
    // let timer = 1500;
    // let frontIdNumber = 1;
    // let backIdNumber = 1;
    // let otherIdNumber = 1;


    setTimeout(() => {
      this.showName = true
    }, 1000);

    this.frontIcons();
    this.backIcons();
    this.otherIcons();

    setTimeout(() => {
      this.showBtn = true
    }, 4500);

    // Randomizes array
    // for (let i = this.shows.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [this.shows[i], this.shows[j]] = [this.shows[j], this.shows[i]];
    // }

    // for (let i = 0; i < this.shows.length; i++) {
    //   for (const s of this.shows) { 
    //     if (s.id === idNumber) {
    //       timer = timer += 150;
    //       idNumber = idNumber += 1;
    //       setTimeout(() => {
    //         s.show = true
    //       }, timer);
    //     }
    //   }
    // }

    // for (let i = this.frontTech.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [this.frontTech[i], this.frontTech[j]] = [this.frontTech[j], this.frontTech[i]];
    // }

    // for (let i = 0; i < this.frontTech.length; i++) {
    //   for (const s of this.frontTech) { 
    //     if (s.id === frontIdNumber) {
    //       timer = timer += 150;
    //       frontIdNumber = frontIdNumber += 1;
    //       setTimeout(() => {
    //         s.show = true
    //       }, timer);
    //     }
    //   }
    // }

    // for (let i = this.backTech.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [this.backTech[i], this.backTech[j]] = [this.backTech[j], this.backTech[i]];
    // }

    // for (let i = 0; i < this.backTech.length; i++) {
    //   for (const s of this.backTech) { 
    //     if (s.id === backIdNumber) {
    //       timer = timer += 150;
    //       backIdNumber = backIdNumber += 1;
    //       setTimeout(() => {
    //         s.show = true
    //       }, timer);
    //     }
    //   }
    // }

    // for (let i = this.otherTech.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [this.otherTech[i], this.otherTech[j]] = [this.otherTech[j], this.otherTech[i]];
    // }

    // for (let i = 0; i < this.otherTech.length; i++) {
    //   for (const s of this.otherTech) { 
    //     if (s.id === otherIdNumber) {
    //       timer = timer += 150;
    //       otherIdNumber = otherIdNumber += 1;
    //       setTimeout(() => {
    //         s.show = true
    //       }, timer);
    //     }
    //   }
    // }
  }

  frontIcons() {
    let timer = 1500;
    let frontIdNumber = 1;

    for (let i = this.frontTech.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.frontTech[i], this.frontTech[j]] = [this.frontTech[j], this.frontTech[i]];
    }

    for (let i = 0; i < this.frontTech.length; i++) {
      for (const s of this.frontTech) { 
        if (s.id === frontIdNumber) {
          timer = timer += 150;
          frontIdNumber = frontIdNumber += 1;
          setTimeout(() => {
            s.show = true
          }, timer);
        }
      }
    }
  }

  backIcons() {
    let timer = 2500;
    let backIdNumber = 1;

    for (let i = this.backTech.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.backTech[i], this.backTech[j]] = [this.backTech[j], this.backTech[i]];
    }

    for (let i = 0; i < this.backTech.length; i++) {
      for (const s of this.backTech) { 
        if (s.id === backIdNumber) {
          timer = timer += 150;
          backIdNumber = backIdNumber += 1;
          setTimeout(() => {
            s.show = true
          }, timer);
        }
      }
    }
  }

  otherIcons() {
    let timer = 3500;
    let otherIdNumber = 1;

    for (let i = this.otherTech.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.otherTech[i], this.otherTech[j]] = [this.otherTech[j], this.otherTech[i]];
    }

    for (let i = 0; i < this.otherTech.length; i++) {
      for (const s of this.otherTech) { 
        if (s.id === otherIdNumber) {
          timer = timer += 150;
          otherIdNumber = otherIdNumber += 1;
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

.divIt2 {
  background-color: green;
  width: 175px;
  height: 75px;
}
</style>