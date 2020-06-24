import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import routes from './router/router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  next();
  // if (to.matched || to.matched.length == 0) {
  //   next({ path: '/err/404' })
  // } else {
  //   next();
  // }
  // if (to.path == '/login') {
  //   sessionStorage.removeItem('user');
  // }
  // let user = JSON.parse(sessionStorage.getItem('user'));
  // if (!user && to.path != '/login') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
