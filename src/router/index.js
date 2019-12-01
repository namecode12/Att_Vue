import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Translator from '../views/Translator.vue'
import Game from '../views/Game.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/translator',
    name: 'translator',
    component: Translator
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
