import Vue from 'vue'
import Router from 'vue-router'
import InformationList from '@/components/InformationList'
import InformationChart from '@/components/InformationChart'
import WhiteList from '@/components/WhiteList'
import UserManagement from '@/components/UserManagement'
import ConfigurationManagement from '@/components/ConfigurationManagement'

import InformationList_details from '@/components/InformationList_details'
import InformationList_details_systemSafety from '@/components/InformationList_details_systemSafety'
import InformationList_details_fileOperation from '@/components/InformationList_details_fileOperation'
import InformationList_details_netUse from '@/components/InformationList_details_netUse'
import InformationList_details_equipmentUse from '@/components/InformationList_details_equipmentUse'
import InformationList_details_printOperation from '@/components/InformationList_details_printOperation'
import InformationList_details_userAccount from '@/components/InformationList_details_userAccount'
import InformationList_details_systemAudit from '@/components/InformationList_details_systemAudit'
import InformationList_details_endUser from '@/components/InformationList_details_endUser'
import InformationList_details_malwareModel from '@/components/InformationList_details_malwareModel'
import InformationList_details_detectionRules from '@/components/InformationList_details_detectionRules'
import InformationList_details_currentProcess from '@/components/InformationList_details_currentProcess'

import ChangePassword from '@/components/ChangePassword'
import login from '@/components/login'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
  		{
	      path: '/', 
	      redirect: '/login'
    	},
    	{
	    	path:'/login',
	    	component:login
	    },
	    {
	    	path:'/index',
	    	component:index,
	    	children:[
	    		 
			    {
			      path: 'InformationList',
			      component: InformationList
			    },
			    {
			      path: 'InformationChart', 
			      component: InformationChart
			    },
			    {
			      path: '/WhiteList', 
			      component: WhiteList
			    },
			    {
			      path: '/UserManagement', 
			      component: UserManagement
			    },
			    {
			      path: '/ConfigurationManagement', 
			      component: ConfigurationManagement
			    },
			    {
			      path: '/InformationList_details', 
			      component: InformationList_details
			    },
			    {
			      path: '/InformationList_details_systemSafety', 
			      component: InformationList_details_systemSafety
			    },
			    {
			      path: '/InformationList_details_fileOperation', 
			      component: InformationList_details_fileOperation
			    },
			    {
			    	path:'/InformationList_details_netUse',
			    	component:InformationList_details_netUse
			    },
			    {
			    	path:'/InformationList_details_equipmentUse',
			    	component:InformationList_details_equipmentUse
			    },
			    {
			    	path:'/InformationList_details_printOperation',
			    	component:InformationList_details_printOperation
			    },
			    {
			    	path:'/InformationList_details_userAccount',
			    	component:InformationList_details_userAccount
			    },
			    {
			    	path:'/InformationList_details_systemAudit',
			    	component:InformationList_details_systemAudit
			    },
			    {
			    	path:'/InformationList_details_endUser',
			    	component:InformationList_details_endUser
			    },
			    {
			    	path:'/InformationList_details_malwareModel',
			    	component:InformationList_details_malwareModel
			    },
			    {
			    	path:'/InformationList_details_currentProcess',
			    	component:InformationList_details_currentProcess
			    },
			    {
			    	path:'/InformationList_details_detectionRules',
			    	component:InformationList_details_detectionRules
			    },
			    {
			    	path:'/ChangePassword',
			    	component:ChangePassword
			    }
	    	]
	    }
	    
    
  ]
})
