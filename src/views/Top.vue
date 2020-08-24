<template>
  <div id="topComp">
    <v-card 
      id="topOneCard"
      :height="window.height / 2"
      :width="window.width"
      flat
      class="d-flex align-content-end flex-wrap">
      <v-col cols="12">
       <v-row class="ml-3 mr-3 mb-16 justify-center">
          <transition name="name">
            <!-- <p v-if="showName" :class="`text-${nameFontSize}`">{{window.width}}</p> -->
            <p v-if="showName" :class="`text-${nameFontSize}`">James Littlefield</p>

          </transition>
        </v-row>
      </v-col>
    </v-card>

    <v-card
      flat
      id="topTwoCard"
      :height="window.height / 2"
      :width="window.width"
      class="d-flex align-content-start flex-wrap"
    >
      <v-col cols="12" class="mx-auto" style="max-width: 90% !important;">
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

         <!-- <div v-for="f in frontTech"
                :key="f.id"
                class="pa-2 mx-auto divIt">
                <transition name="nameNew">
                  <v-tooltip  v-if="f.show" bottom :color="f.color">
                    <template v-slot:activator="{ on }">
                      <v-img
                       
                        v-on="on"
                        contain
                        :src="f.img"
                        max-width="auto"
                        max-height="auto">
                      </v-img>
                    </template>
                  <span>{{f.name}}</span>
                </v-tooltip>
              </transition>
              </div> -->

        <v-row class="ml-3 mr-3 justify-center">
          <div  
            v-for="s in frontTech"
            :key="s.id"
            class="pa-2 mx-auto divIt"
          >
          <!-- Refactor this old code to new vuetify -->
            <transition name="nameNew">    
              <v-card flat v-once width="80" height="80" v-if="s.show">
               <v-tooltip bottom :color="s.color">
                <template v-slot:activator="{ on }">
                  <v-img
                    v-on="on"
                    contain
                    :src="s.img"
                    max-width="auto"
                    max-height="auto">
                  </v-img>
                </template>
                <span>{{s.tech}}</span>
              </v-tooltip>
              </v-card>
            </transition>
          </div>
        </v-row>

        <v-row class="ml-3 mr-3 justify-center" >
          <div  
            v-for="s in backTech"
            :key="s.id"
            class="pa-2 mx-auto divIt"
          >
            <transition name="nameNew">    
              <v-card flat v-once width="80" height="80" v-if="s.show">
               <v-tooltip bottom :color="s.color">
                <template v-slot:activator="{ on }">
                  <v-img
                    v-on="on"
                    contain
                    :src="s.img"
                    max-width="auto"
                    max-height="auto">
                  </v-img>
                </template>
                <span>{{s.tech}}</span>
              </v-tooltip>
              </v-card>
            </transition>
          </div>
        </v-row>

        <v-row class="ml-3 mr-3 justify-center" >
          <div  
            v-for="s in otherTech"
            :key="s.id"
            class="pa-2 mx-auto divIt"
          >
            <transition name="nameNew">    
              <v-card flat v-once width="80" height="80" v-if="s.show">
                <v-tooltip bottom :color="s.color">
                <template v-slot:activator="{ on }">
                  <v-img
                    v-on="on"
                    contain
                    :src="s.img"
                    max-width="auto"
                    max-height="auto">
                  </v-img>
                </template>
                <span>{{s.tech}}</span>
              </v-tooltip>
              </v-card>
            </transition>
          </div>
        </v-row>

        <v-row class="ml-3 mr-3 justify-center" >
          <div class="divIt2 text-center">
            <transition name="nameNew">
            <v-btn v-if="showBtn" color="primary" class="mt-6">Projects</v-btn>
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

import HTML5 from '@/assets/techIcons/html-5-icon.png';
import CSS3 from '@/assets/techIcons/css3-icon.jpg';
import SASS from '@/assets/techIcons/Sass.png';
import BOOTSTRAP from '@/assets/techIcons/bootstrap.png';
import VUETIFY from '@/assets/techIcons/vuetify.png';

import JAVASCRIPT from '@/assets/techIcons/javascript-logo.png';
import TYPESCRIPT from '@/assets/techIcons/ts.png';
import EXPRESS from '@/assets/techIcons/exp.png';
import GRAPHQL from '@/assets/techIcons/graphql.png';
import MONGODB from '@/assets/techIcons/mongodb.png';
import VUE from '@/assets/techIcons/vue.png';
import REACT from '@/assets/techIcons/react.png';
import VUEX from '@/assets/techIcons/vuex.png';
import NODE from '@/assets/techIcons/node.jpg';
import HASURA from '@/assets/techIcons/hasura.png';

import GIT from '@/assets/techIcons/git.png';
import GITHUB from '@/assets/techIcons/github2.png';
import BITBUCKET from '@/assets/techIcons/bitbucket.png';
import JIRA from '@/assets/techIcons/jira.png';
import AZURE from '@/assets/techIcons/azure.png';

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
    {show: false, id: 1, tech: "HTML", img: HTML5, color: "#D1382B"},
    {show: false, id: 2, tech: "CSS", img: CSS3, color: "#0277BC"},
    {show: false, id: 3, tech: "Sass", img: SASS, color: "#CF649A"},
    {show: false, id: 4, tech: "Bootstrap", img: BOOTSTRAP, color: "#723EBF"},
    {show: false, id: 5, tech: "Vuetify", img: VUETIFY, color: "#1697F6"},
  ]

  backTech: any = [
    {show: false, id: 1, tech: "JavaScript", img: JAVASCRIPT, color: "#F7DF1E"},
    {show: false, id: 2, tech: "TypeScript", img: TYPESCRIPT, color: "#007ACC"},
    {show: false, id: 3, tech: "Express", img: EXPRESS, color: "#007ACC"},
    {show: false, id: 4, tech: "GraphQL", img: GRAPHQL, color: "#007ACC"},
    {show: false, id: 5, tech: "MongoDB", img: MONGODB, color: "#4CAF50"},
    {show: false, id: 6, tech: "Vue", img: VUE, color: "#41B883"},
    {show: false, id: 7, tech: "React", img: REACT, color: "#292929"},
    {show: false, id: 8, tech: "Vuex", img: VUEX, color: "#292929"},
    {show: false, id: 9, tech: "Node", img: NODE, color: "#8BC500"},
    {show: false, id: 10, tech: "Hasura", img: HASURA, color: "#8BC500"},
  ]

  otherTech: any = [
    {show: false, id: 1, tech: "Git", img: GIT, color: "#F05033"},
    {show: false, id: 2, tech: "Github", img: GITHUB, color: "#008DD2"},
    {show: false, id: 3, tech: "BitBucket", img: BITBUCKET, color: "#205081"},
    {show: false, id: 4, tech: "Jira", img: JIRA, color: "#0052CC"},
    {show: false, id: 5, tech: "Azure", img: AZURE, color: "#0052CC"},
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
  /* background-color: green; */
  width: 95px;
  height: 95px;
}

.divIt2 {
  /* background-color: green; */
  width: 175px;
  height: 75px;
}
</style>