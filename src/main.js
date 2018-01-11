import Vue from 'vue'
import VueRouter from 'vue-router'; //import the router
import App from './App.vue'

//import the routes 
import { routes } from './routes';

//tell vue to use the router
Vue.use(VueRouter);

//configure the router
const router = new VueRouter({
  routes,
  mode: 'history', //default: hash
  scrollBehavior(to, from, savedPosition) {
    
    //manda l'utente all'ultima posizione scrollata, se c'è
    if (savedPosition) { 
      return savedPosition;
    }
    //se c'è un hash nell'url, es. #data, manda a quell'elemento 
    // (comportamento di default)
    if (to.hash) {
      return {
        selector: to.hash
      };
    }

    //codice per dire "scrolla sempre di 700px"
    // return {
    //   x: 0, 
    //   y: 700
    // }
  }
});

router.beforeEach((to, from, next) => {

console.log('global beforeEach');
next();
});

new Vue({
  el: '#app',
  router, // add this 
  render: h => h(App)
});
