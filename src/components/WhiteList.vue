
<!--报警信息-->

<template>
	  <div class="b_right" id="b_right">
				<div class="b_right_breadcrumbs">
						<breadcrumb>
								<span>当前位置：</span>
								<breadcrumb-item to="/">白名单管理</breadcrumb-item>
						</breadcrumb>
						
						<Button @click="modal = true" class="layer">添加白名单</Button>
				    <Modal title="添加白名单" v-model="modal" :styles="{top: '100px'}" @on-ok="addWhiteOk" @on-cancel="addWhiteCancel">
				        <Tabs value="name1">
						        <TabPane label="可执行文件白名单" name="name1">
						        		<Row>
										      	<Col span="18">
										      		<Form :model="formItem" :label-width="150">
								        					<FormItem label="可执行文件MD5值">
									                    <Input v-model="addWhiteForm1.input1"></Input>
													        </FormItem>
													        <FormItem>
													            <Button type="primary" id="whiteListFormOne">提交</Button>
													        </FormItem>
														  </Form>
										      	</Col>
					            	</Row>
						        </TabPane>
						        <TabPane label="进程网络白名单" name="name2">
							        	<Row>
										      	<Col span="18">
										      		<Form :model="formItem" :label-width="150">
								        					<FormItem label="进程名称">
									                    <Input v-model="addWhiteForm2.input1"></Input>
													        </FormItem>
													        <FormItem label="IP类型">
													            <RadioGroup v-model="addWhiteForm2.radio1">
													                <Radio label="Ipv4">Ipv4</Radio>
													                <Radio label="Ipv6">Ipv6</Radio>
													            </RadioGroup>
													        </FormItem>
													        <FormItem label="是否控制">
													            <RadioGroup v-model="addWhiteForm2.radio2">
													                <Radio label="yes">是</Radio>
													                <Radio label="no">否</Radio>
													            </RadioGroup>
													        </FormItem>
													        <FormItem label="起始IP">
									                    <Input v-model="addWhiteForm2.input2"></Input>
													        </FormItem>
													        <FormItem label="终止IP">
									                    <Input v-model="addWhiteForm2.input3"></Input>
													        </FormItem>
													        <FormItem>
													            <Button type="primary" id="whiteListFormTwo">提交</Button>
													        </FormItem>
														  </Form>
										      	</Col>
					            	</Row>
						        </TabPane>
						        <TabPane label="设备白名单" name="name3">
							        	<Form :model="formItem" :label-width="150">
						        					<FormItem label="设备serial ID">
							        						<Row>
											                <Col span="18">
											                    <Input v-model="addWhiteForm3.input1"></Input>
											                </Col>
										            	</Row>
											        </FormItem>
											        <FormItem>
											            <Button type="primary" id="whiteListFormThree">提交</Button>
											        </FormItem>
												  </Form>
						        </TabPane>
						    </Tabs>
				    </Modal>
				</div>
				<div class="b_right_table" v-if='whiteOneData'>
					  <p class="tableTitle">可执行文件白名单</p>
						<can-edit-table refs="table1" v-model="whiteOneData" :columns-list="whiteOneColumns"></can-edit-table>
						<page class="floatRight"  show-elevator @on-change="handlePage(page)"></page>
				</div>
				<div class="b_right_table" v-if='whiteTwoData'>
					  <p class="tableTitle">进程网络白名单</p>
						<can-edit-table refs="table2" v-model="whiteTwoData" :columns-list="whiteTwoColumns"></can-edit-table>
						<page class="floatRight"  show-elevator @on-change="handlePage(page)"></page>
				</div>
				<div class="b_right_table" v-if='whiteThreeData'>
					  <p class="tableTitle">设备白名单</p>
					  <can-edit-table refs="table3" v-model="whiteThreeData" :columns-list="whiteThreeColumns"></can-edit-table>
						<page class="floatRight" show-elevator @on-change="handlePage(page)"></page>
				</div>
		</div>
</template>
<script>
//	import axios from 'axios'
		import ajax from '../ajax.js'
		import canEditTable from './canEditTable.vue'
		import ColumnsData from '../data/white_list.js'
		export default {
				components: {
	        	canEditTable
	   		},
				data(){
						return {
								addWhiteForm1: {
                    input1: ''
                },
                addWhiteForm2:{
                		input1:'',
                		radio1: 'Ipv4',
                		radio2: 'yes',
                		input2:'',
                		input3:''
                },
                addWhiteForm3:{
                	input1:''
                },
							  modal: false,
								isShow :true,
								whiteOneColumns: [],
						    whiteOneData: [],
						    whiteTwoColumns: [],
						    whiteTwoData: [],
						    whiteThreeColumns: [],
						    whiteThreeData:[]
						}
				},
			methods:{
					async init(){
							this.isShow =false;
							let res = await ajax("/WhiteList");
							this.whiteOneData = res.data.whiteOneData;
							this.whiteTwoData = res.data.whiteTwoData;
							this.whiteThreeData = res.data.whiteThreeData;
							
							this.whiteOneColumns = ColumnsData.whiteOneColumns;
							this.whiteTwoColumns = ColumnsData.whiteTwoColumns;
							this.whiteThreeColumns = ColumnsData.whiteThreeColumns;
							
							this.isShow = false;
					},
					addWhiteOk () {
	            this.$Message.info('添加成功');
	        },
	        addWhiteCancel () {
	            this.$Message.info('取消添加');
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
		.layer{
				float: right;
				margin-top: -25px;
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
		.floatRight{
				float: right;
		}
		
		.ivu-form-item{
				margin-bottom: 12px;
		}
</style>