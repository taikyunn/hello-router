// vue-routerの記述がここに書かれている
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    // リクエストのパス
    path: '/',
    // ルーティングの名前
    name: 'Home',
    // このルーティングで呼び出されるコンポーネント名
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/article',
    name: "article",
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Article.vue')
    }
  }
]

// ルーティング情報を扱うルーターの生成
const router = createRouter({
  //historyモードの設定
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
