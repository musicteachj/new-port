<template>
  <div id="home">
    <v-card 
      id="topOne"
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
    <!-- <v-card 
      id="topTwo"
      :height="window.height / 2"
      :width="window.width"
      color="purple"
      class="d-flex align-content-start flex-wrap"
    >
      <v-col cols="12">
        <v-row class="ml-3 mr-3 justify-center" style="background-color:blue">
          <div  
            v-for="m in 5"
            :key="m"
            class="pa-2 mx-auto divIt"
          >
            <transition name="nameNew">    
              <v-card v-once width="50" height="50" v-if="testShow(randId())">
                <p>test</p>
              </v-card>
            </transition>
          </div>
        </v-row>
      </v-col>
    </v-card> -->

    <v-card 
      id="topTwo"
      :height="window.height / 2"
      :width="window.width"
      color="purple"
      class="d-flex align-content-start flex-wrap"
    >
      <v-col cols="12">
        <v-row class="ml-3 mr-3 justify-center" style="background-color:blue">
          <div  
            v-for="s in shows"
            :key="s.id"
            class="pa-2 mx-auto divIt"
          >
            <transition name="nameNew">    
              <v-card v-once width="50" height="50" v-if="s.show">
                <p>test</p>
              </v-card>
            </transition>
          </div>
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
import { set } from 'vue/types/umd';

@Component({})
export default class Home extends Vue {
  // LOCAL VARIABLES ------------------
   window: any = {
    width: 0,
    height: 0
  };
  showName = false;
  shows: any = [
    {show: false, id: 1},
    {show: false, id: 2},
    {show: false, id: 3},
    {show: false, id: 4},
    {show: false, id: 5},
  ]
  // show1 = false;
  // show2 = false;
  // show3 = false;
  // show4 = false;
  // show5 = false;

  numArr: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];


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
    this.timeOutFunc();

    // setTimeout(() => {
    //   this.showName = true
    // }, 1000);
    // setTimeout(() => {
    //   this.show1 = true
    // }, 1100);
    // setTimeout(() => {
    //   this.show2 = true
    // }, 1200)
    // setTimeout(() => {
    //   this.show = true
    // }, 1000);
    // setTimeout(() => {
    //   this.show1 = true
    // }, 1500)
    // this.show = true;
    // this.show1 = true;
  }

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  }

  // METHODS --------------------------
  timeOutFunc() {
    let timer = 1500;
    setTimeout(() => {
      this.showName = true;
    //   for (const s of this.shows) {
    //   console.log(s);
    //    setTimeout(() => {
    //     s.show = true
    //   }, 1000);
    // }
    }, 1000);
    // setTimeout(() => {
    //   this.shows[0].show = true
    // }, 1500);
    //  setTimeout(() => {
    //   this.shows[1].show = true
    // }, 2000);
    //  setTimeout(() => {
    //   this.shows[2].show = true
    // }, 2500);
    //  setTimeout(() => {
    //   this.shows[3].show = true
    // }, 3000);
    //  setTimeout(() => {
    //   this.shows[4].show = true
    // }, 3500)
    
    setTimeout(() => {
      this.showName = true;
      for (const s of this.shows) {
        console.log(s);
        timer = timer += 500;
        setTimeout(() => {
          s.show = true;
        }, timer);
      }
    }, 1000)

    // setTimeout(() => {
    //   console.log(this.shows[0].show1);
    //   this.shows[0].show1 = true
    // }, 2000);
    // setTimeout(() => {
    //   this.shows[1].show2 = true
    // }, 2500)
    // setTimeout(() => {
    //   this.shows[2].show3 = true
    // }, 3000)
    // setTimeout(() => {
    //   this.shows[3].show4 = true
    // }, 3500)
    // setTimeout(() => {
    //   this.shows[4].show5 = true
    // }, 4000)

    // setTimeout(() => {
    //   this.showName = true
    //   setTimeout(() => {
    //     this.show1 = true
    //      setTimeout(() => {
    //       this.show2 = true
    //        setTimeout(() => {
    //         this.show3 = true
    //          setTimeout(() => {
    //           this.show4 = true
    //           setTimeout(() => {
    //             this.show5 = true
    //           }, 4000)
    //         }, 3500)
    //       }, 3000)
    //     }, 2500)
    //   }, 2000);
    // }, 1000);
  }

  testShow(m: any) {
    console.log("Fire testShow")
    if (m === 1) return this.show1;
    if (m === 2) return this.show2;
    if (m === 3) return this.show3;
    if (m === 4) return this.show4;
    if (m === 5) return this.show5;
  }

  // t(item: any) {
  //   if (item === 2) {
  //     return "show"
  //   } else {
  //     return "show1"
  //   }
  // } 

  // conditionalName(item: any) {
  //   if (item === 1) {
  //     return "name"
  //   } else {
  //     return "nameNew"
  //   }
  // }

  // test(rec: number) {
  //   console.log(rec);

  //   if (rec % 2 == 0) {
  //     console.log("this worked");
  //     return "name";
  //   } else {
  //     return "nothing"
  //   }

  // }

  randId() {
    console.log("Fire randId")
    return Math.floor((Math.random() * 5) + 1);
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
  transform: translateY(100px);
  opacity: 0;
}

.card {
  background-color: white;
  border: 1px solid black;
}

.divIt {
  background-color: green;
  width: 75px;
  height: 75px;
}
</style>