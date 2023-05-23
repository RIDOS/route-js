import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details/:name',
    name: 'details',
    component: () => import('../views/DetailView.vue'),
    children: [
      {
        path: ":animalName",
        name: "books",
        props: true,
        component: import("../views/BooksView.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
