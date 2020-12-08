<template>
  <div id="bottomComp">
    <v-row class="justify-center mb-12">
      <h1 class="text-h1">Projects</h1>
    </v-row>
    <v-row class="justify-center ml-10 mr-10 mb-12">
      <!-- <v-card 
        v-for="(p, index) in projects" 
        :key="index" 
        class="mx-auto mt-8 mb-8"
        max-width="374">

        <v-img
          class="white--text"
          height="200px"
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
          <v-tooltip :color="p.color" top v-if="p.collaboration">
            <template v-slot:activator="{ on }">
              <v-icon class="actionz" :color="p.color" dark v-on="on">mdi-account-multiple</v-icon>
            </template>
            <span>Collaboration</span>
          </v-tooltip>
           <v-tooltip :color="p.color" top v-else>
            <template v-slot:activator="{ on }">
              <v-icon class="actionz" :color="p.color" dark v-on="on">mdi-account</v-icon>
            </template>
            <span>Individual</span>
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
      </v-card> -->

    <v-hover
        v-slot:default="{ hover }"
         v-for="(p, index) in projects" 
        :key="index"
      >
      <v-card
        :elevation="hover ? 12 : 4"
       
        class="mx-auto my-12x d-flex"
        max-width="374"
      >

        <v-card
          class="align-self-stretch"
          outlined
          tile
        >
          <v-img
            height="200"
            :src="p.img"
            class="mb-4"
          ></v-img>
          
            <p class="text-center font-weight-bold text-h5">{{p.name}}</p>
          
          <v-card-text class="text-center">
            <p class="text--primary body-1">{{p.text}}</p>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-text class="text-center">
            <v-chip
              text-color="white"
              :color="p.color"
              v-for="t in p.tech"
              :key="t"
              class="ma-2">
              {{t}}
            </v-chip>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-text class="text-center">
            <v-btn 
              icon 
              :color="p.color"
              v-for="s in p.screenSizes"
              :key="s"
              class="ma-2"
            >
              <v-icon>{{s}}</v-icon>
            </v-btn>
          </v-card-text>

          <v-card-actions class="align-self-end">
            <v-tooltip :color="p.color" top v-if="p.collaboration">
              <template v-slot:activator="{ on }">
                <v-btn class="actionz" icon v-on="on" :color="p.color">
                  <v-icon>mdi-account-multiple</v-icon>
                </v-btn>
              </template>
              <span>Collaboration</span>
            </v-tooltip>
            <v-tooltip class="actionz" :color="p.color" top v-else>
              <template v-slot:activator="{ on }">
                <v-btn class="actionz" icon v-on="on" :color="p.color">
                  <v-icon class="actionz" dark>mdi-account</v-icon>
                </v-btn>
              </template>
              <span>Individual</span>
            </v-tooltip>

            <v-btn
              class="code"
              v-if="index > 1"
              text
              :color="p.color"
              :href="p.code"
              target="_blank">
              Code
            </v-btn>
            <v-btn
              class="demo"
              text
              :color="p.color"
              :href="p.demo"
              target="_blank">
              Demo
            </v-btn>
          </v-card-actions>
        </v-card>


       
      </v-card>
      </v-hover>

    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import CarlosImg from '@/assets/cardAssets/carlos.png';
import GreatDebateImg from '@/assets/cardAssets/greatDebate.png';
// import BarcodeGenImg from '@/assets/cardAssets/save.PNG';
import BarcodeGen from '@/assets/cardAssets/barcodeGen.png';

// const Carlos = require('@/assets/carlos.png');
// const GreatDebate = require('@/assets/greatDebate.png');

@Component({})
export default class Bottom extends Vue {

  projects: Array<object> = [
    {
      name: "Barcode Gen", 
      color: "#323EA0", 
      img: BarcodeGen,
      screenSizes: ["mdi-cellphone", "mdi-tablet-ipad", "mdi-laptop", "mdi-monitor"],
      text: "The Great DB8 is a full stack debate website inspired by Reddit that allows users to create an account and comment on admin curated topics.",
      tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Vuetify", "Vue.js", "Vuex", "Vue-Router", "Node.js", "Express.js", "MongoDB"],
      demo: "https://thegreatdb8.herokuapp.com/", code: "https://github.com/jliip51/The-Great-Debate", 
      collaboration: false
    },
    // {
    //   name: "One Website", 
    //   color: "#453C41", 
    //   img: GreatDebateImg,
    //   screenSizes: ["mdi-cellphone", "mdi-tablet-ipad", "mdi-laptop", "mdi-monitor"],
    //   text: "The Great DB8 is a full stack debate website inspired by Reddit that allows users to create an account and comment on admin curated topics.", 
    //   tech: ["HTML", "CSS", "JavaSCript", "TypeScript", "Vuetify", "Vue"], 
    //   demo: "https://thegreatdb8.herokuapp.com/", 
    //   code: "https://github.com/jliip51/The-Great-Debate", 
    //   collaboration: false
    // },
    // {
    //   name: "Two Website", 
    //   color: "#453C41", 
    //   img: GreatDebateImg,
    //   screenSizes: ["mdi-cellphone", "mdi-tablet-ipad", "mdi-laptop", "mdi-monitor"],
    //   text: "The Great DB8 is a full stack debate website inspired by Reddit that allows users to create an account and comment on admin curated topics.", 
    //   tech: ["HTML", "CSS", "JavaSCript", "TypeScript", "Vuetify", "Vue"], 
    //   demo: "https://thegreatdb8.herokuapp.com/", 
    //   code: "https://github.com/jliip51/The-Great-Debate", 
    //   collaboration: false
    // },
    {
      name: "Carlos San Francisco", 
      color: "#B30101", 
      img: CarlosImg,
      screenSizes: ["mdi-laptop", "mdi-monitor"],
      text: "A web game inspired by Carmen Sandiego. The user must use clues given to them in the form of pictures taken around the world (Flickr API) and various facts given to them (CIA world fact book API) to try and track down the criminal on the world map before time runs out.", 
      tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Firebase", "Flickr API"], 
      demo: "https://carltheape.github.io/carlosSanFrancisco/", 
      code: "https://github.com/carltheape/carlosSanFrancisco", 
      collaboration: true
    },
    {
      name: "The Great Debate", 
      color: "#453C41", 
      img: GreatDebateImg,
      screenSizes: ["mdi-laptop"],
      text: "The Great DB8 is a full stack debate website inspired by Reddit that allows users to create an account and comment on admin curated topics.", 
      tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Handlebars.js", "Node.js", "Express.js", "MySQL"], 
      demo: "https://thegreatdb8.herokuapp.com/", 
      code: "https://github.com/jliip51/The-Great-Debate", 
      collaboration: true
    }
   
    // {name: "Barcode Generator", color: "#453C41", img: "https://picsum.photos/id/11/500/300", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Vue.js", "Vuetify", "Vue-Barcode", "PrintD"], demo: "https://github.com/musicteachj", code: "https://github.com/musicteachj"},
    // {name: "Music Calendar", color: "#453C41", img: "https://picsum.photos/id/11/500/300", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", tech: ["HTML", "CSS", "Sass", "JavaScript", "Node.js", "Express.js", "MongoDB", "Vue.js", "Vuetify"], demo: "https://github.com/musicteachj", code: "https://github.com/musicteachj"},
    // {name: "React Project", color: "#453C41", img: "https://picsum.photos/id/11/500/300", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "React.js"], demo: "https://github.com/musicteachj", code: "https://github.com/musicteachj"}

  ];

}

</script>

<style scoped>
#top {
  background-color: black;
}

.name {
  color: white;
  padding-top: 50px;
  font-weight: 250;
  font-size: 50px;
  padding-bottom: 25px;
}

.testPurple {
  background-color: purple;
}

.testOrange {
  background-color: orange;
}

.testy {
  background-color: transparent !important;
  color: white !important
}

th {
  color: white !important;
}

td, th {
  border-bottom: 1px solid white !important;
}

.actionz {
  bottom: 3px !important;
  left: 2px !important;
  position: absolute;
}

.demo {
  bottom: 3px !important;
  right: 0px !important;
  position: absolute;
}

.code {
  bottom: 3px !important;
  right: 70px !important;
  position: absolute;
}
</style>