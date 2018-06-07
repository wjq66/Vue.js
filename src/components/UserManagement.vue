<template>
	<div class="b_right" id="b_right">
	    <div class="b_right_breadcrumbs">
			<breadcrumb>
				<span>当前位置：</span>
		        <breadcrumb-item to="/">用户管理</breadcrumb-item> 
		    </breadcrumb>
		</div>
		
		<div class="b_right_table" v-if='user_data_1'> 
			<can-edit-table refs="table1" v-model="user_data_1" :columns-list="user_columns_1"></can-edit-table>
			<page class="floatRight" :total="100" show-elevator></page>
		</div>
		
	</div>
	 
</template>

<script>
	import ajax from '../ajax.js'
	import canEditTable from './canEditTable.vue'
	import ColumnsData from '../data/UserManagement.js'
	export default {
		components: {
	        canEditTable
   		},
		data(){
			return {
				isShow:true, 
				user_columns_1: [],
			    user_data_1: []
			}
		},
		methods:{
			async init(){
				let res = await ajax("/UserManagement");
				this.user_data_1 = res.data.user_data_1;
				this.user_columns_1 = ColumnsData.Columns1;
				this.isShow = false
			}
		},
		created(){
			this.init()
		} 
	}
</script>

<style>
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