import Mock from 'mockjs'
import InformationListData from './InformationList.json'
import InformationList_detailsData from './InformationList_details.json'
import WhiteListData from './WhiteList.json'
import UserManagementData from './UserManagement.json'
import ConfigurationManagementData from './ConfigurationManagement.json'
import InformationList_details_malwareModel from './InformationList_details_malwareModel.json'
import InformationList_details_detectionRules from './InformationList_details_detectionRules.json'

import chart from './chart.json'


Mock.mock('/WhiteList',{
    code:0,
    data:WhiteListData
})
Mock.mock('/InformationList',{
    code:0,
    data:InformationListData
})
Mock.mock('/UserManagement',{
    code:0,
    data:UserManagementData
})
Mock.mock('/ConfigurationManagement',{
    code:0,
    data:ConfigurationManagementData
})
Mock.mock('/InformationList_details',{
    code:0,
    data:InformationList_detailsData
})
Mock.mock('/InformationList_details_malwareModel',{
	code:0,
	data:InformationList_details_malwareModel
})
Mock.mock('/InformationList_details_detectionRules',{
	code:0,
	data:InformationList_details_detectionRules
})
Mock.mock('/chart',{
	code:0,
	data:chart
})
