<template>
	
	<!--检测规则策划-->
    
    <div class="b_right" id="b_right">
		<div class="b_right_breadcrumbs">
			<breadcrumb>
				<span>当前位置：</span>
		        <breadcrumb-item to="/InformationList">报警信息列表</breadcrumb-item>
		        <breadcrumb-item to="/InformationList_details">详细信息</breadcrumb-item>
		        <breadcrumb-item>检测规则策划</breadcrumb-item>
		    </breadcrumb>
		</div>
		
		<div class="b_right_table">
			<Tabs type="card" @on-click="rouTo" value="10" :animated="false">
		        <TabPane v-for="tab in tablists" :label="tab.name" :name="tab.value">
		        	<div class="tabs_table">
						<div class="tabs_row">
					        <div span="8" class="tabs_col" v-for="cols in colLists"  @click="colRouTo(cols)">{{cols.name}}</div> 
					    </div>
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
				colLists:[]
			}
		},
		methods:{
			rouTo(index){
				var thisId = window.location.toString().split("?")[1].split("&")[0].split("=")[1]
				this.$router.push({path:this.tablists[index].urls, query: { id: thisId, option: ""}});
			},
			colRouTo(cols){
				var thisId = window.location.toString().split("?")[1].split("&")[0].split("=")[1];
				this.$router.push({path:cols.urls, query: { id: thisId, option: ""}});
			},
			async init(){
				this.isShow =false;
				let res = await ajax("/InformationList_details_detectionRules");
				console.log(res);
				this.colLists = res.data.colLists;
				this.isShow = false;
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
	.tabs_row{
		width: 100%;
		overflow: hidden;
	}
	.tabs_row .tabs_col{
		width: 25%;
		float: left;
		text-align: center;  
		font-size: 14px; 
		border-left: 1px solid #f5f5f5;
		border-top: 1px solid #f5f5f5;
		height: 70px;
		line-height: 35px;
	} 
	.tabs_row .tabs_col:nth-child(4n+1){
		border-left: 1px solid #fff;
	}
	.tabs_row .tabs_col:nth-child(1),.tabs_row .tabs_col:nth-child(2),.tabs_row .tabs_col:nth-child(3),.tabs_row .tabs_col:nth-child(4){
		border-top: 1px solid #fff;
	}
</style>