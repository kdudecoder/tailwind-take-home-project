import Vue from 'vue'
import 'tailwindcss/tailwind.css'
import App from './App.vue'

import Numeral from 'numeral'

export const EventBus = new Vue();

Vue.use(Numeral)

Vue.filter("formatNumber", function (value) {
    return Numeral(value).format("0,0."); // displaying other groupings/separators is possible, look at the docs
  });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
