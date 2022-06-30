import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

import PaginaInicial from '../src/components/paginas/PaginaInicial.vue'
import PaginaProduto from '../src/components/paginas/PaginaProduto.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCartShopping)


const routes = [
    { path: '/', component: PaginaInicial },
    { path: '/produto/:id', component: PaginaProduto },
  ]
 
  const router = VueRouter.createRouter({
  
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
  
  const app = Vue.createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  app.use(router)
  app.mount('#app')