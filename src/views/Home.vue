<template>
  <div id="home">
    <v-card 
      id="top"
      :height="window.height"
      :width="window.width"
      color="blue"
      class="d-flex align-content-center flex-wrap">
      <v-col cols="12">
        <v-row class="ml-3 mr-3 pb-8 justify-center">
          <transition name="name">
            <p v-if="show" :class="`text-${nameFontSize}`">{{window.width}}</p>
          </transition>
        </v-row>

        <v-row class="ml-3 mr-3 mt-4 text-center justify-center">
          <div  
            v-for="m in 30"
            :key="m"
            class="pa-2">
            <!-- <transition :name="test(randId())"> -->
               <transition name="nameNew">
              <v-card width="50" height="50" v-if="condShow">
                <p>test</p>
              </v-card>
              <!-- <p v-if="show">test</p> -->
            </transition>
          </div>
          <!-- <v-card
            v-for="m in 30"
            :key="m"
            class="pa-2"
            outlined
            tile
          >
            test
          </v-card> -->
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

@Component({})
export default class Home extends Vue {
  // LOCAL VARIABLES ------------------
   window: any = {
    width: 0,
    height: 0
  };
  show = false;
  condShow = false;
  numArr: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


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
    setTimeout(() => {
      this.condShow = true
      setTimeout(() => {
        this.show = true;
      }, 2000)
    }, 1000)
    // this.show = true;
  }

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  }

  // METHODS --------------------------
  test(rec: number) {
    console.log(rec);

    if (rec % 2 == 0) {
      console.log("this worked");
      return "name";
    } else {
      return "nothing"
    }

  }

  randId() {
    return Math.floor((Math.random() * 30) + 1);
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
  transition: all 2s ease;
}
.nameNew-leave-active {
  transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.nameNew-enter, .nameNew-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

.card {
  background-color: white;
  border: 1px solid black;
}
</style>