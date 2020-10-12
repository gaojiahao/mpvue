import Vue from 'vue'
import App from './App'
import Tips from './config/tip'

Vue.prototype.$tips=Tips

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
