import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Main from '@/components/Main'
import UserList from '@/components/UserList'
import userID from '@/components/userID'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/userList',
      name: 'userList',
      component: UserList
    },
    {
      path: '/userList/:userId',
      name: 'user',
      component: userID
    },
    {
      path: '*',
      redirect: 'root'
    }
  ]
})
