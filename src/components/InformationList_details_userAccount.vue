<template>
	
	<!--用户账号信息-->
    
    <div class="b_right" id="b_right">
		<div class="b_right_breadcrumbs">
			<breadcrumb>
				<span>当前位置：</span>
		        <breadcrumb-item to="/InformationList">报警信息列表</breadcrumb-item>
		        <breadcrumb-item to="/InformationList_details">详细信息</breadcrumb-item>
		        <breadcrumb-item>用户账号信息</breadcrumb-item>
		    </breadcrumb>
		</div>
		
		<div class="b_right_table">
			<Tabs type="card" @on-click="rouTo" value="6" :animated="false">
		        <TabPane v-for="tab in tablists" :label="tab.name" :name="tab.value">
		        	<div class="tabs_box"  >
						<p class="tableTitle">查询条件</p>
						<div class="tabs_content"  style="margin-left: calc(50% - 150px);">
							<Form :model="formItem" :label-width="80">
					        	<DatePicker inline type="daterange" placement="bottom-end" placeholder="时间范围" style="width: 200px;float: left;"></DatePicker>
					            <Button type="primary" style="float: left;margin-left: 50px;">查询</Button> 
						   </Form>
						</div>	
					</div>
		        	<div class="tabs_table">
						<p class="tableTitle">登录审核详情</p>
						<i-table  :loading='isShow'  stripe border :columns="InformationList_details_userAccount_1" :data="InformationList_details_userAccount_data_1"></i-table>
						<page class="floatRight"  show-elevator @on-change="handlePage(page)" size="small"></page>
					</div>
					<div class="tabs_table">
						<p class="tableTitle">账户管理审核详情</p>
						<i-table  :loading='isShow'  stripe border :columns="InformationList_details_userAccount_2" :data="InformationList_details_userAccount_data_2"></i-table>
						<page class="floatRight"  show-elevator @on-change="handlePage(page)" size="small"></page>
					</div>
		        </TabPane> 
		    </Tabs>
		  
		</div>
		
	</div>
</template>

<script>
	
	import ajax from '../ajax.js'
	
	export default {
        data(){
			return {
				fruit: [''],
				formItem: {
                    input: ''
                },
				isShow :true,
				InformationList_details_userAccount_1: [
			        {
			            title: '序号',
			            key: 'serialNumber',
			            width:120,
			            align:'center'
			        },
			        {
			            title: '审核状态',
			            key: 'name',
			            align:'center'
			        },
			        {
			            title: '审核用户',
			            key: 'MD5',
			            align:'center'
			        },
			        {
			            title: '登录事件详情',
			            key: 'speed',
			            align:'center'
			        },
			        {
			            title: '操作时间',
			            key: 'time',
			            align:'center'
			        }
			    ],
			    InformationList_details_userAccount_2: [
			        {
			            title: '序号',
			            key: 'serialNumber',
			            width:120,
			            align:'center'
			        },
			        {
			            title: '审核状态',
			            key: 'name',
			            align:'center'
			        },
			        {
			            title: '审核用户',
			            key: 'MD5',
			            align:'center'
			        },
			        {
			            title: '账户事件详情',
			            key: 'speed',
			            align:'center'
			        },
			        {
			            title: '操作时间',
			            key: 'time',
			            align:'center'
			        }
			    ],
			    InformationList_details_userAccount_data_1:[],
			    InformationList_details_userAccount_data_2:[],
				tablists:[{
					name:'报警信息',
					urls:'InformationList_details',
					value:'0'
				},{
					name:"系统安全信息",
					urls:'InformationList_details_systemSafety',
					value:'1'
				},{
					name:"文件操作信息",
					urls:'InformationList_details_fileOperation',
					value:'2'
				},{
					name:"网络使用信息",
					urls:'InformationList_details_netUse',
					value:'3'
				},{
					name:"设备使用信息",
					urls:'InformationList_details_equipmentUse',
					value:'4'
				},{
					name:"打印操作信息",
					urls:'InformationList_details_printOperation',
					value:'5'
				},{
					name:"用户账号信息",
					urls:'InformationList_details_userAccount',
					value:'6'
				},{
					name:"系统审核信息",
					urls:'InformationList_details_systemAudit',
					value:'7'
				},{
					name:"终端用户信息",
					urls:'InformationList_details_endUser',
					value:'8'
				},{
					name:"恶意模型",
					urls:'InformationList_details_malwareModel',
					value:'9'
				},{
					name:"检测规则策划",
					urls:'InformationList_details_detectionRules',
					value:'10'
				},{
					name:"当前进程信息",
					urls:'InformationList_details_currentProcess',
					value:'11'
				}]
			}
		},
		methods:{
			rouTo(index){
				var thisId = window.location.toString().split("?")[1].split("&")[0].split("=")[1]
				this.$router.push({path:this.tablists[index].urls, query: { id: thisId, option: ""}});
			},
			async init(){
				this.isShow =false;
				let res = await ajax("/InformationList_details");
				console.log(res);
				this.InformationList_details_data_1 = res.data.InformationList_details_data_1;
				this.isShow = false
			},
		},
		created(){
			this.init()
		} 
    }
</script>

<style scoped>
	.b_right_table{
		width: 96%; 
		margin: auto;
		margin-top: 15px;
		border-radius: 5px;
		box-shadow: 5px 5px 5px #eee;
		height: auto;
		background: #fff;
		padding: 20px; 
		overflow: hidden;
	}
	.tabs_table button{
		margin-left: 5px;
		float: right;
	}
	.b_right_breadcrumbs{
		width: 96%;
		height: auto;
		margin: auto;
		margin-top: 15px;
		border-radius: 5px;
		box-shadow: 5px 5px 5px #eee;
		background: #FFF;
		padding: 15px;
		font-size: 15px;
	} 
	.b_right_table ul{
		margin-top: 5px;
	}
	.b_right_table .tableTitle{
		text-align: left;
		font-size: 14px;
		line-height: 35px;
		font-weight: 600;
		padding-left: 15px;
	    background: #f1f1f1;
	    border-radius: 5px 0px;
	}
	.floatRight{
		float: right;
		margin-left: 5px;
	}
	.tabs_table{
		width: 96%;
		margin: auto;
		margin-bottom: 20px;
		margin-top: 10px;
		overflow: hidden;
	}
	.tabs_table Button{
		margin-top: 5px;
	} 
	.tabs_content{
		text-align: center;
		font-size: 14px; 
		overflow: hidden;
		margin-left: 20px;
	}
	.tabs_box{
		width: 96%;
		margin: auto;
		margin-bottom: 20px;
		margin-top: 10px;
		overflow: hidden;
	}
	.tabs_box Form{
		margin-top: 20px;
		overflow: hidden;
	}
</style>