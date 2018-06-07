
<!--报警信息-->

<template>
	<div class="b_right" id="b_right">
		<div class="b_right_breadcrumbs">
			<breadcrumb>
				<span>当前位置：</span>
		        <breadcrumb-item to="/">报警信息列表</breadcrumb-item>
		        <!--<breadcrumb-item to="/components/breadcrumb">Components</breadcrumb-item>
		        <breadcrumb-item>Breadcrumb</breadcrumb-item>-->
		    </breadcrumb>
		</div>
		
		<div class="b_right_table" v-if='data2'>
			<can-edit-table refs="table1" v-model="data2" :columns-list="columns2"></can-edit-table>
			<page class="floatRight" :total="pageTotal" :current="pageNum" :page-size="pageSize" show-elevator @on-change="handlePage(page)"></page>
		</div>
	</div>
</template>
<script>
//	import axios from 'axios'
	import ajax from '../ajax.js'
	import canEditTable from './canEditTable.vue'
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
				columns2: [
					{
						type: 'index',
						width:60,
				        align:'center'
				    },
				    {
				        title: '主机名',
				        key: 'name',
        				editable: true
				    },
				    {
				        title: '使用者',
				        key: 'user',
        				editable: true
				    },
				    {
				        title: 'MAC地址',
				        key: 'macAddress',
        				editable: true
				    },
				    {
				        title: 'ip地址',
				        key: 'ipAddress',
        				editable: true
				    },
				    {
				        title: '检测得分',
				        key: 'mark',
				        width:100,
				        align:'center',
        				editable: true
				    },
				    {
				        title: '编辑',
				        align: 'center',
				        width: 85,
				        key: 'handle',
				        handle: ['edit']
				    },
				    {
				        title: '操作',
				        align: 'center',
				        width: 190,
				        render: (h, params) => {
				            return h('div', [
				                h('Button', {
				                    props: {
				                        type: 'primary',
				                        size: 'small'
				                    },
				                    style: {
				                        marginRight: '5px'
				                    },
				                    on: {
				                        click: () => {
				                            this.toCurrentPage(params.index)
				                        }
				                    }
				                }, '详细信息'),
				                h('Button', {
				                    props: {
				                        type: 'error',
				                        size: 'small'
				                    }
				                }, '未启动')
				            ]);
				        }
				    }
				],
                data2:[]
			}
		},
		methods:{
			async init(){
				this.isShow =false;
				let res = await ajax("/InformationList");
				this.data2 = res.data.data2;
			},
			show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data2[index].name}<br>Age：${this.data2[index].user}<br>Address：${this.data2[index].macAddress}`
                })
            },
            remove (index) {
                this.data2.splice(index, 1);
            },
            toCurrentPage(thisId){
			    this.$router.push({path:'/InformationList_details', query: { id: thisId, option: ""}});
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