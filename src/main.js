import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueScroller from 'vue-scroller'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueScroller)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
