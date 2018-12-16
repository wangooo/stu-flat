import Vue from 'vue'
import Router from 'vue-router'
// import homePage from '@/components/homePage'
import detailPage from '@/components/detailPage'
import flat from '@/components/flat'
import addPage from '@/components/addPage'
import updatePage from '@/components/updatePage'
import room from '@/components/room'
import addRoom from '@/components/addRoom'
import detailRoom from '@/components/detailRoom'
import updateRoom from '@/components/updateRoom'
import student from '@/components/student'
import detailStu from '@/components/detailStu'
import addStu from '@/components/addStu'
import updateStu from '@/components/updateStu'
import login from '@/components/login'
import autoadd from '@/components/autoadd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/detail/:id',
      name: 'detailPage',
      component: detailPage
    },
    {
      path: '/detailRoom/:r',
      name: 'detailRoom',
      component: detailRoom
    },
    {
      path:'/detailStu/:sid',
      name:'detailStu',
      component:detailStu
    },
    {
      path: '/student',
      name: 'student',
      component: student
    },
    {
      path:'/flat',
      name:'flat',
      component:flat
    },
    {
      path:'/room',
      name:'room',
      component:room
    },
    {
      path: '/addFlat',
      name: 'addPage',
      component: addPage
    },
    {
      path: '/addRoom',
      name: 'addRoom',
      component: addRoom
    },
    {
      path:'/addStu',
      name:'addStu',
      component:addStu
    },
    {
      path: '/updateFlat/:id',
      name: 'updatePage',
      component: updatePage
    },
    {
      path: '/updateRoom/:r',
      name: 'updateRoom',
      component: updateRoom
    },
    {
      path: '/updateStu/:sid',
      name: 'updateStu',
      component: updateStu
    },
    {
      path: '/autoadd',
      name: 'autoadd',
      component: autoadd
    }
    
  ]
})
