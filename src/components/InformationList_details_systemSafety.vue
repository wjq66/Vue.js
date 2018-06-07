<template>
	
	<!--系统安全信息-->
    
    <div class="b_right" id="b_right">
		<div class="b_right_breadcrumbs">
			<breadcrumb>
				<span>当前位置：</span>
		        <breadcrumb-item to="/InformationList">报警信息列表</breadcrumb-item>
		        <breadcrumb-item to="/InformationList_details">详细信息</breadcrumb-item>
		        <breadcrumb-item>系统安全信息</breadcrumb-item>
		    </breadcrumb>
		</div>
		
		<div class="b_right_table">
			<Tabs type="card" @on-click="rouTo" value="1" :animated="false">
		        <TabPane v-for="tab in tablists" :label="tab.name" :name="tab.value">
		        	<div class="tabs_box"  >
						<p class="tableTitle">监控</p>
						<div class="tabs_content">
							<i-circle :percent="percent" class="circle">
						        <p class="score">{{status}}</p>
						    </i-circle>
						    
							
							<Form :model="formItem" :label-width="80" inline class="date">
						        <DatePicker type="date" placeholder="开始时间" style="width: 200px"></DatePicker>
						        <DatePicker type="date" placeholder="结束时间" style="width: 200px"></DatePicker>
					            <Button type="ghost" style="margin-left: 8px">导出数据</Button>
						    </Form>
							<Button type="dashed" class="start" size="small"  @click="add">{{start}}</Button>
						</div>
					</div>
		        	<div class="tabs_table"  >
						<p class="tableTitle">系统安全检测结果</p> 
						<i-table  :loading='isShow'  stripe border :columns="InformationList_details_systemSafety_1" :data="InformationList_details_systemSafety_data_1"></i-table>
						<page class="floatRight"  show-elevator @on-change="handlePage(page)" size="small"></page>
						<Button type="primary" size="small">查看已处理信息</Button>
						<Button type="primary" size="small">查看白名单</Button>
					</div>
					<div class="tabs_table"  >
						<p class="tableTitle">基本信息检测结果</p>
						<i-table  :loading='isShow' stripe border :columns="InformationList_details_systemSafety_2" :data="InformationList_details_systemSafety_data_2"></i-table>
						<page class="floatRight"  show-elevator @on-change="handlePage(page)" size="small"></page>
						<Button type="primary" size="small">查看已处理信息</Button>
					</div>
					<div class="tabs_table">
						<p class="tableTitle">登录检测结果</p>
						<i-table  :loading='isShow' stripe border :columns="InformationList_details_systemSafety_3" :data="InformationList_details_systemSafety_data_3"></i-table>
						<page class="floatRight"  show-elevator @on-change="handlePage(page)" size="small"></page>
						<Button type="primary" size="small">查看已处理信息</Button>
					</div>
					<div class="tabs_table"  >
						<p class="tableTitle">审核信息检测结果</p>
						<i-table  :loading='isShow' stripe border :columns="InformationList_details_systemSafety_4" :data="InformationList_details_systemSafety_data_4"></i-table>
						<page class="floatRight"  show-elevator @on-change="handlePage(page)" size="small"></page>
						<Button type="primary" size="small">查看已处理信息</Button>
						<Button type="primary" size="small">查看白名单</Button>
					</div>
					<div class="tabs_table"  >
						<p class="tableTitle">异常信息检测结果</p>
						<i-table  :loading='isShow' stripe border :columns="InformationList_details_systemSafety_5" :data="InformationList_details_systemSafety_data_5"></i-table>
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
				status:"0分",
				start:"开始",
				isShow :true,
				InformationList_details_systemSafety_1: [
			        {
			            title: '安全信息',
			            key: 'serialNumber',
			            width:120,
			            align:'center'
			        },
			        {
			            title: '检测结果',
			            key: 'name',
			            align:'center'
			        },
			        {
			            title: '检测分数',
			            key: 'MD5',
			            align:'center'
			        }
			    ],
			    InformationList_details_systemSafety_2: [
			        {
			            title: '基本信息',
			            key: 'serialNumber',
			            width:120,
			            align:'center'
			        },
			        {
			            title: '是否发生变化',
			            key: 'name',
			            align:'center'
			        },
			        {
			            title: '改变时间',
			            key: 'MD5',
			            align:'center'
			        },
			        {
			            title: '原来信息',
			            key: 'speed',
			            align:'center'
			        },
			        {
			            title: '现在的信息',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '检测分数',
			            key: 'time',
			            align:'center'
			        }
			    ],
			    InformationList_details_systemSafety_3: [
			        {
			            title: '登入时间',
			            key: 'serialNumber',
			            width:120,
			            align:'center'
			        },
			        {
			            title: '详细信息',
			            key: 'name',
			            align:'center'
			        }
			    ],
			    InformationList_details_systemSafety_4: [
			        {
			            title: '时间',
			            key: 'serialNumber',
			            width:120,
			            align:'center'
			        },
			        {
			            title: '详细信息',
			            key: 'name',
			            align:'center'
			        },
			        {
			            title: '检测分数',
			            key: 'MD5',
			            align:'center'
			        }
			    ],
			    InformationList_details_systemSafety_5: [
			        {
			            title: '发生时间',
			            key: 'serialNumber',
			            width:120,
			            align:'center'
			        },
			        {
			            title: '异常检测',
			            key: 'name',
			            align:'center'
			        },
			        {
			            title: '检测分数',
			            key: 'MD5',
			            align:'center'
			        }
			    ],
			    InformationList_details_systemSafety_data_1:[],
			    InformationList_details_systemSafety_data_2:[],
			    InformationList_details_systemSafety_data_3:[],
			    InformationList_details_systemSafety_data_4:[],
			    InformationList_details_systemSafety_data_5:[],
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
				}],
				percent: 0
			}
		},
		methods:{
			rouTo(index){
				var thisId = window.location.toString().split("?")[1].split("&")[0].split("=")[1]
				this.$router.push({path:this.tablists[index].urls, query: { id: thisId, option: ""}});
			},
			async init(){
				this.isShow =false;
				let res = await ajax("/InformationList_details_systemSafety");
				console.log(res);
				this.InformationList_details_systemSafety_data_1 = res.data.InformationList_details_systemSafety_data_1;
				this.isShow = false
			},
			add(){
				if(this.percent==0){
					this.percent += 100;
					this.status = "79分";
					this.start="完成";
				}
			}
		},
		created(){
			this.init(); 
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
		overflow: hidden;
	}
	.tabs_box{
		width: 96%;
		margin: auto;
		margin-bottom: 20px;
		margin-top: 10px;
		overflow: hidden;
	}
	.tabs_box Form{
		margin-top: 30px;
	}
	.circle{
		float: left;
		margin-top: 10px;
	}
	.date{
		float: left;
		line-height: 80px;
		margin-left: 30px; 
	}
	.start{
		display: block; 
		text-align: center; 
		font-size: 14px;
		cursor: pointer; 
		margin-top: 135px;
		margin-left: 38px;
		clear: both;
	}
	.score{
		font-size: 14px;
	}
</style>