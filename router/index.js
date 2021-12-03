import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/InventoryReg';
import Login from '../views/InventoryLogin';
import Admin from '../views/InventoryAdmin';
import User from '../views/InventoryUser';
import Cart from '../components/GoodsBuy'

const routes = [
  {
    path: '/',
    component: Register,
    name: "register"
  },
  {
    path: '/login',
    component: Login,
    name: "login"
  },
  {
    path: '/admin',
    component: Admin,
    name: "admin"
  },
  {
    path: "/user",
    component: User,
    name: "user"
  },
  {
    path: "/user/cart",
    component: Cart,
    name: "cart"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router