import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login/Login'
import PerIndex from '@/pages/PerIndex/PerIndex'
import Personal from '@/pages/Personal/Personal'
import DoctorReply from '@/pages/Personal/DoctorReply'
import DoctorList from '@/pages/Personal/DoctorList'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
      redirect: '/login'
		},
    {
      path: '/login',
      component: Login
    },
		{
			path:'/perindex',
			component: PerIndex,
		},
		{
			path:'/personal',
			component: Personal,
			children:[
				{
					path:'',
          redirect:'/personal/doctorreply'
				},
				{
					path:'doctorreply',
					component: DoctorReply,
				},
				{
					path:'doctorlist',
					component: DoctorList,
				}
			]
		}
  ]
})
