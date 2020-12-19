import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import VideoList from '../views/video/List.vue'
import VideoEdit from '../views/video/edit.vue'

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        name: 'home',
        path: '/',
        component: Home,
      },
      {
        name: 'videoList',
        path: '/video/list',
        component: VideoList,
      },
      {
        name: 'videoEdit',
        path: '/video/edit/:id',
        component: VideoEdit,
        props: true,
      },
      {
        name: 'videoCreate',
        path: '/video/edit',
        component: VideoEdit,
      },
    ]
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
