import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'

import PaginaInicial from '../src/components/paginas/PaginaInicial.vue'
import PaginaProduto from '../src/components/paginas/PaginaProduto.vue'
import PaginaCategoria from '../src/components/paginas/PaginaCategoria.vue'

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
    { path: '/category/:id', component: PaginaCategoria },
  ]
 
  const router = createRouter({
  
    history: createWebHistory(),
    
    routes, // short for `routes: routes`
  })
  
  
  const app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  app.use(router)
  app.mount('#app')