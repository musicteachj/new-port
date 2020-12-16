<template>
  <div id="bottomComp">
    <v-row class="justify-center mb-12 ml-6 mr-6" style="background-color:teal">
      <h1 :class="`text-${projectsText} font-weight-light`">Projects</h1>
    </v-row>
    <v-row class="justify-center ml-6 mr-6 mb-12" style="background-color: red">
      <v-hover
        v-slot:default="{ hover }"
        v-for="(p, index) in projects" 
        :key="index"
      >
        <v-card
          :elevation="hover ? 12 : 4"
          class="mx-auto d-flex mb-12 ml-8 mr-8"
          :max-width="cardWidth"
        >
          <v-card
            class="align-self-stretch"
            outlined
            tile
          >
            <v-img
              height="200"
              :src="p.img"
              class="mb-4 img"
            ></v-img>
            
            <p :class="`text-center font-weight-normal text-${projectName}`">{{p.name}}</p>
            
            <v-card-text class="text-center">
              <p :class="`text--primary text-${projectText} font-weight-${projectTextWeight}`">{{p.text}}</p>
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
    <v-row class="justify-center mb-12 ml-6 mr-6" style="background-color:purple">
      <h1 :class="`text-${projectsText} font-weight-light`">Connect</h1>
    </v-row>
    <v-row class="justify-center ml-6 mr-6 mb-12" style="background-color:pink">
      <v-card  
        v-for="(c, index) in connectMedia"
        :key="index"
        :width="cardDim"
        :height="cardDim"
        class="pa-2 ml-6 mr-6"
        flat
      >
        <v-card flat>
          <v-tooltip :left="index === 0" :right="index === 1" :color="c.color">
            <template v-slot:activator="{ on }">
              <a 
                :href="c.url"
                target="_blank">
                <v-img
                  v-on="on"
                  contain
                  :src="c.img"
                  max-width="auto"
                  max-height="auto"
                  :href="c.url"
                  target="_blank">
                </v-img>
              </a>
            </template>
            <span>{{c.tech}}</span>
          </v-tooltip>
        </v-card>
      </v-card>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';
import Styling from "@/mixins/Styling.vue";


import CarlosImg from '@/assets/cardAssets/carlos.png';
import GreatDebateImg from '@/assets/cardAssets/greatDebate.png';
// import BarcodeGenImg from '@/assets/cardAssets/save.PNG';
import BarcodeGen from '@/assets/cardAssets/barcodeGen.png';

import GITHUB from '@/assets/techIcons/github2.png';
import LINKEDIN from '@/assets/techIcons/link-social.png';

// const Carlos = require('@/assets/carlos.png');
// const GreatDebate = require('@/assets/greatDebate.png');

@Component({})
export default class Bottom extends mixins(Styling) {

  projects: Array<object> = [
    {
      name: "Barcode Gen", 
      color: "#323EA0", 
      img: BarcodeGen,
      screenSizes: ["mdi-cellphone", "mdi-tablet-ipad", "mdi-laptop", "mdi-monitor"],
      text: "The Great DB8 is a full stack debate website inspired by Reddit that allows users to create an account and comment on admin curated topics.",
      tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Vuetify", "Vue.js", "Vuex", "Vue-Router", "Node.js", "Express.js", "MongoDB"],
      demo: "https://hidden-crag-36310.herokuapp.com/",  
      code: "https://github.com/musicteachj/barcode-gen", 
      collaboration: false
    },
    // {
    //   name: "Menu Creator", 
    //   color: "#1B5E20", 
    //   img: GreatDebateImg,
    //   screenSizes: ["mdi-cellphone", "mdi-tablet-ipad", "mdi-laptop", "mdi-monitor"],
    //   text: "The Great DB8 is a full stack debate website inspired by Reddit that allows users to create an account and comment on admin curated topics.", 
    //   tech: ["HTML", "CSS", "JavaSCript", "TypeScript", "Bootstrap", "React.js", "Elixir", "MySQL"], 
    //   demo: "https://thegreatdb8.herokuapp.com/", 
    //   code: "https://github.com/jliip51/The-Great-Debate", 
    //   collaboration: false
    // },
    // {
    //   name: "Music Calendar", 
    //   color: "#4E342E", 
    //   img: GreatDebateImg,
    //   screenSizes: ["mdi-cellphone", "mdi-tablet-ipad", "mdi-laptop", "mdi-monitor"],
    //   text: "The Great DB8 is a full stack debate website inspired by Reddit that allows users to create an account and comment on admin curated topics.", 
    //   tech: ["HTML", "CSS", "JavaSCript", "TypeScript", "Vuetify", "Vue.js", "GraphQL", "Postgres"], 
    //   demo: "https://thegreatdb8.herokuapp.com/", 
    //   code: "https://github.com/jliip51/The-Great-Debate", 
    //   collaboration: false
    // },
    // {
    //   name: "Jam Book", 
    //   color: "#4E342E", 
    //   img: GreatDebateImg,
    //   screenSizes: ["mdi-cellphone", "mdi-tablet-ipad", "mdi-laptop", "mdi-monitor"],
    //   text: "The Great DB8 is a full stack debate website inspired by Reddit that allows users to create an account and comment on admin curated topics.", 
    //   tech: ["HTML", "CSS", "JavaSCript", "TypeScript", "React.js", "Express.js", "MongoDB"], 
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
  ];

  connectMedia:  Array<object> = [
    { tech: "Github", 
      img: GITHUB, 
      color: "#008DD2", 
      url: "https://github.com/musicteachj"
    },
    { tech: "LinkedIn", 
      img: LINKEDIN, 
      color: "#16689D", 
      url: "https://www.linkedin.com/in/james-littlefield-93037713b/"
    }
  ]

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