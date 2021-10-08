import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: function () {
      return import('../views/Inicio.vue')
    }
  },
  {
    path: '/sobre',
    name: 'Sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Sobre.vue')
    }
  },
  {
    path: '/maisinformacoes',
    name: 'MaisInformacoes',
    component: function () {
      return import('../views/MaisInformacoes.vue')
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history' // remover a '#' da raiz do router do projeto
})

export default router
