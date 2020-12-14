import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Constructor from '../views/Constructor.vue'
import Document from '../views/Document.vue'
import MachineSystem from '../views/home/MachineSystem.vue'
import MainPage from '../views/home/MainPage.vue'
import Append from '../views/Append.vue'
import RightUnits from '../views/appendMachine/RightUnits.vue'
import MachineModel from '../views/appendMachine/MachineModel.vue'
import MachineSource from '../views/appendMachine/MachineSource.vue'
import MachineType from '../views/appendMachine/MachineType.vue'
import DailyStatus from '../views/DailyStatus'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:{path:'/mainPage'},
    children:[
      {
        path: '/mainPage',
        name: 'MainPage',
        component:MainPage
      },
       {
    path: '/machineSystem',
    name: 'MachineSystem',
    component:MachineSystem
      },
    ]
  },
  {
    path: '/constructor',
    name: 'Constructor',
    component:Constructor
  },
  {
    path: '/document',
    name: 'Document',
    component:Document
  },
  {
    path: '/append',
    name: 'Append',
    component:Append
  },
  {
    path: '/machineType',
    name: 'MachineType',
    component:MachineType
  },
  {
    path: '/rightUnits',
    name: 'RightUnits',
    component:RightUnits
  },
  {
    path: '/machineModel',
    name: 'MachineModel',
    component:MachineModel
  },
  {
    path: '/machineSource',
    name: 'MachineSource',
    component:MachineSource
  },
  {
    path: '/dailyStatus',
    name: 'DailyStatus',
    component:DailyStatus
  },

]


const router = new VueRouter({
  mode: "history",
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(to,from.path)
  let arr=['/','/constructor','/document','/machineType','/machineSystem','/mainPage','/append','/rightUnits','/machineModel','/machineSource','/dailyStatus']
 if(arr.includes(to.path)){
     next()
     return
 }else{
 router.go(-1)
    // next(from.path)
 }

})
export default router
