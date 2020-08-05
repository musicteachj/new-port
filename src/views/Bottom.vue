<template>
  <div id="bottomComp" style="background-color:green">
    <v-row class="justify-center" style="background-color:blue">
      <v-card v-for="(p, index) in projects" :key="index" class="mx-auto mt-8"
            max-width="500">
         <v-img
          class="white--text"
          height="400px"
          :src="p.img">
        </v-img>

        <v-card-text>
          <h1 class="text--primary display-1">{{p.name}}</h1>
          <br>
          <p class="text--primary body-2">
            <span>{{p.text}}</span>
          </p>
        </v-card-text>

        <v-chip
          text-color="white"
          :color="p.color"
          v-for="t in p.tech"
          :key="t"
          class="ma-2">
          {{t}}
        </v-chip>

        <v-card-actions>
          <v-tooltip  :color="p.color" top v-if="index != 2 && index != 3">
            <template v-slot:activator="{ on }">
              <v-icon class="actionz" :color="p.color" dark v-on="on">mdi-account</v-icon>
            </template>
            <span>Individual</span>
          </v-tooltip>
          <v-tooltip :color="p.color" top v-if="index == 2 || index == 3">
            <template v-slot:activator="{ on }">
              <v-icon class="actionz" :color="p.color" dark v-on="on">mdi-account-multiple</v-icon>

            </template>
            <span>Collaboration</span>
          </v-tooltip>
          
          <div class="flex-grow-1"></div>
          <v-btn
            
            class="demo"
            v-if="index > 1"
            text
            :color="p.color"
            :href="p.code"
            target="_blank">
            Code
          </v-btn>
          <v-btn
            class="code"
            text
            :color="p.color"
            :href="p.demo"
            target="_blank">
            Demo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import CarlosImg from '@/assets/carlos.png';
import GreatDebateImg from '@/assets/greatDebate.png';

// const Carlos = require('@/assets/carlos.png');
// const GreatDebate = require('@/assets/greatDebate.png');

@Component({})
export default class Bottom extends Vue {

  projects: Array<object> = [
    {name: "Carlos San Francisco", color: "#B30101", img: CarlosImg, text: "A web game inspired by Carmen Sandiego. The user must use clues given to them in the form of pictures taken around the world (Flickr API) and various facts given to them (CIA world fact book API) to try and track down the criminal on the world map before time runs out.", tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Firebase", "Flickr API"], demo: "https://carltheape.github.io/carlosSanFrancisco/", code: "https://github.com/carltheape/carlosSanFrancisco"},
    {name: "The Great Debate", color: "#453C41", img: GreatDebateImg, text: "The Great DB8 is a full stack debate website inspired by Reddit that allows users to create an account and comment on admin curated topics.", tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Handlebars.js", "Node.js", "Express.js", "MySQL"], demo: "https://thegreatdb8.herokuapp.com/", code: "https://github.com/jliip51/The-Great-Debate"}
    // {name: "Barcode Generator", color: "#453C41", img: "https://picsum.photos/id/11/500/300", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Vue.js", "Vuetify", "Vue-Barcode", "PrintD"], demo: "https://github.com/musicteachj", code: "https://github.com/musicteachj"},
    // {name: "Music Calendar", color: "#453C41", img: "https://picsum.photos/id/11/500/300", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", tech: ["HTML", "CSS", "Sass", "JavaScript", "Node.js", "Express.js", "MongoDB", "Vue.js", "Vuetify"], demo: "https://github.com/musicteachj", code: "https://github.com/musicteachj"},
    // {name: "React Project", color: "#453C41", img: "https://picsum.photos/id/11/500/300", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "React.js"], demo: "https://github.com/musicteachj", code: "https://github.com/musicteachj"}

  ];


  

}

</script>