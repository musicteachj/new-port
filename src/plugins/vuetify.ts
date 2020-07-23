// import Vue from 'vue';
// import Vuetify from 'vuetify/lib';

// Vue.use(Vuetify);

// export default new Vuetify({
//   icons: {
//     iconfont: 'mdi',
//   },
// });

import Vue from 'vue';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css";

const opts: any = {
  // options: {
  //   customProperties: true
  // },
  icons: {
    iconfont: 'mdi',
  },
};

Vue.use(Vuetify);

export default new Vuetify(opts);