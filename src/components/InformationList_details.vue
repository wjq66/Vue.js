<template>
	
	<!--默认：报警信息-->
    
    <div class="b_right" id="b_right">
		<div class="b_right_breadcrumbs">
			<breadcrumb>
				<span>当前位置：</span>
		        <breadcrumb-item to="/InformationList">报警信息列表</breadcrumb-item>
		        <breadcrumb-item to="/InformationList_details">详细信息</breadcrumb-item>
		        <breadcrumb-item>报警信息</breadcrumb-item>
		    </breadcrumb>
		</div>
		
		<div class="b_right_table">
			<Tabs type="card" @on-click="rouTo" value="0" :animated="false">
		        <TabPane v-for="tab in tablists" :label="tab.name" :name="tab.value">
		        	<div class="tabs_box"  >
						<p class="tableTitle">监控</p>
						<div class="tabs_content">
							<p>未启动监控</p>
							
							<Form :model="formItem" :label-width="80" inline>
						        <FormItem label="进程名">
						            <Input v-model="formItem.input" placeholder=""></Input>
						        </FormItem>
						        <FormItem>
						            <Button type="primary">监控</Button>
						            <Button type="ghost" style="margin-left: 8px">停止</Button>
						        </FormItem>
						   </Form>
							
						</div>
					</div>
		        	<div class="tabs_table"  >
						<p class="tableTitle">可执行文件监控</p>
						<i-table  :loading='isShow'  stripe border :columns="InformationList_details_1" :data="InformationList_details_data_1"></i-table>
						<page class="floatRight"  show-elevator @on-change="handlePage(page)" size="small"></page>
						<Button type="primary" size="small">查看已处理信息</Button>
						<Button type="primary" size="small">查看白名单</Button>
					</div>
					<div class="tabs_table"  >
						<p class="tableTitle">进程网络监控</p>
						<i-table  :loading='isShow' stripe border :columns="InformationList_details_2" :data="InformationList_details_data_2"></i-table>
						<page class="floatRight"  show-elevator @on-change="handlePage(page)" size="small"></page>
						<Button type="primary" size="small">查看已处理信息</Button>
					</div>
					<div class="tabs_table">
						<p class="tableTitle">恶意文件分析</p>
						<i-table  :loading='isShow' stripe border :columns="InformationList_details_3" :data="InformationList_details_data_3"></i-table>
						<page class="floatRight"  show-elevator @on-change="handlePage(page)" size="small"></page>
						<Button type="primary" size="small">查看已处理信息</Button>
					</div>
					<div class="tabs_table"  >
						<p class="tableTitle">设备监控</p>
						<i-table  :loading='isShow' stripe border :columns="InformationList_details_4" :data="InformationList_details_data_4"></i-table>
						<page class="floatRight"  show-elevator @on-change="handlePage(page)" size="small"></page>
						<Button type="primary" size="small">查看已处理信息</Button>
						<Button type="primary" size="small">查看白名单</Button>
					</div>
					<div class="tabs_table"  >
						<p class="tableTitle">移动存储文件监控</p>
						<i-table  :loading='isShow' stripe border :columns="InformationList_details_5" :data="InformationList_details_data_5"></i-table>
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
				formItem: {
                    input: ''
               },
				isShow :true,
				InformationList_details_1: [
			        {
			            title: '序号',
			            key: 'serialNumber',
			            width:120,
			            align:'center'
			        },
			        {
			            title: '执行文件名',
			            key: 'name',
			            align:'center'
			        },
			        {
			            title: '文件MD5值',
			            key: 'MD5',
			            align:'center'
			        },
			        {
			            title: '操作进度',
			            key: 'speed',
			            align:'center'
			        },
			        {
			            title: '操作时间',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '人工处理',
			            key: 'action',
			            width: 180,
			            align: 'center',
			            render: (h, params) => {
			                return h('div', [
			                    h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                       /* click: () => {
                                             this.remove(params.index)
                                        }*/
                                    }
                                }, '异常'),
			                    h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                       /* click: () => {
                                             this.remove(params.index)
                                        }*/
                                    }
                                }, '加入白名单')
			                ]);
			            }
			        }
			    ],
			    InformationList_details_2: [
			        {
			            title: '序号',
			            key: 'serialNumber',
			            width:120,
			            align:'center'
			        },
			        {
			            title: '进程名',
			            key: 'name',
			            align:'center'
			        },
			        {
			            title: 'IP协议',
			            key: 'MD5',
			            align:'center'
			        },
			        {
			            title: '传输层协议',
			            key: 'speed',
			            align:'center'
			        },
			        {
			            title: '远程IP',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '本地IP',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '扫描时间',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '人工处理',
			            key: 'action',
			            width: 180,
			            align: 'center',
			            render: (h, params) => {
			                return h('div', [
			                    h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                       /* click: () => {
                                             this.remove(params.index)
                                        }*/
                                    }
                                }, '异常'),
			                    h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                       /* click: () => {
                                             this.remove(params.index)
                                        }*/
                                    }
                                }, '加入白名单')
			                ]);
			            }
			        }
			    ],
			    InformationList_details_3: [
			        {
			            title: '序号',
			            key: 'serialNumber',
			            width:120,
			            align:'center'
			        },
			        {
			            title: '文件路径',
			            key: 'name',
			            align:'center'
			        },
			        {
			            title: '文件类型',
			            key: 'MD5',
			            align:'center'
			        },
			        {
			            title: '威胁等级',
			            key: 'speed',
			            align:'center'
			        },
			        {
			            title: '详细报告',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '磁盘序列号',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '扫描时间',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '人工处理',
			            key: 'action',
			            width: 180,
			            align: 'center',
			            render: (h, params) => {
			                return h('div', [
			                    h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                       /* click: () => {
                                             this.remove(params.index)
                                        }*/
                                    }
                                }, '异常'),
			                    h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                       /* click: () => {
                                             this.remove(params.index)
                                        }*/
                                    }
                                }, '加入白名单')
			                ]);
			            }
			        }
			    ],
			    InformationList_details_4: [
			        {
			            title: '序号',
			            key: 'serialNumber',
			            width:120,
			            align:'center'
			        },
			        {
			            title: '操作类型',
			            key: 'name',
			            align:'center'
			        },
			        {
			            title: '设备类型',
			            key: 'MD5',
			            align:'center'
			        },
			        {
			            title: '设备名称',
			            key: 'speed',
			            align:'center'
			        },
			        {
			            title: '设备GUID标识',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '设备serialID',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '操作时间',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '人工处理',
			            key: 'action',
			            width: 180,
			            align: 'center',
			            render: (h, params) => {
			                return h('div', [
			                    h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                       /* click: () => {
                                             this.remove(params.index)
                                        }*/
                                    }
                                }, '异常'),
			                    h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                       /* click: () => {
                                             this.remove(params.index)
                                        }*/
                                    }
                                }, '加入白名单')
			                ]);
			            }
			        }
			    ],
			    InformationList_details_5: [
			        {
			            title: '序号',
			            key: 'serialNumber',
			            width:120,
			            align:'center'
			        },
			        {
			            title: '文件操作类型',
			            key: 'name',
			            align:'center'
			        },
			        {
			            title: '文件磁盘类型',
			            key: 'MD5',
			            align:'center'
			        },
			        {
			            title: '文件路径',
			            key: 'speed',
			            align:'center'
			        },
			        {
			            title: '进程名称',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '进程路径',
			            key: 'time',
			            align:'center'
			        },
			        {
			            title: '操作时间',
			            key: 'time',
			            align:'center'
			        }
			    ],
			    InformationList_details_data_1:[],
			    InformationList_details_data_2:[],
			    InformationList_details_data_3:[],
			    InformationList_details_data_4:[],
			    InformationList_details_data_5:[],
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
				var thisId = window.location.toString().split("?")[1].split("&")[0].split("=")[1];
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
		color: red;
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
</style>