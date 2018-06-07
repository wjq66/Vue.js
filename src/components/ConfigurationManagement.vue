<template>
	 <div class="b_right" id="b_right">
	    <div class="b_right_breadcrumbs">
			<breadcrumb>
				<span>当前位置：</span>
		        <breadcrumb-item to="/">配置管理</breadcrumb-item> 
		    </breadcrumb>
		</div>
		
		<div class="b_right_table" v-if='configure_data_1'> 
			<p class="tableTitle">配置列表</p>
			<can-edit-table refs="table3" v-model="configure_data_1" :columns-list="configure_columns_1"></can-edit-table>
			<page class="floatRight" :total="100" show-elevator></page>
		</div>
		
	</div>
</template>

<script>
	import ajax from '../ajax.js'
	import canEditTable from './canEditTable.vue'
	import ColumnsData from '../data/ConfigurationManagement.js'
	export default {
		components: {
	        canEditTable
   		},
		data(){
			return {
				isShow :true,
				pageTotal:16,
			 	pageNum:1,
			 	pageSize:5,
				configure_columns_1: [],
			    configure_data_1: []
			}
		},
		methods:{
			async init(){
				this.isShow =false;
				let res = await ajax("/ConfigurationManagement");
				this.configure_data_1 = res.data.configure_data_1;
				this.configure_columns_1 = ColumnsData.Columns1;
				this.isShow = false
			},
			remove (index) {
		        this.configure_data_1.splice(index, 1);
		    }
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
	}
	.b_right h3{
		width: 100%;
		text-align: center;
		line-height: 75px;
	}
	.b_right .ivu-form-item-content{
		font-size: 14px;
	}
	.floatRight{
		float: right;
	}
</style>