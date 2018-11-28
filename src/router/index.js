import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/pages/Pos'
import Shop from '@/components/pages/Shop'
import Shop1 from '@/components/pages/Shop1'
import Shop2 from '@/components/pages/Shop2'
import Product from '@/components/pages/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/Shop',
      name: 'shop',
      component: Shop,
      children : [
        {
          path: 'shop1',
          component: Shop1
        },
        {
          path: 'shop2',
          component: Shop2
        }
      ]
    },
    {
      path: '/Product',
      name: 'Product',
      components: 
        {
          default : Product,
          view1 : Shop2,
          view2 : Shop1,
        }
      ,
    }
  ]
})
