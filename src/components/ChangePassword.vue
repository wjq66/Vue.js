<template>
	<div class="b_right" id="b_right">
		<div class="b_right_breadcrumbs">
			<breadcrumb>
				<span>当前位置：</span>
		        <breadcrumb-item to="/">修改用户密码</breadcrumb-item>
		    </breadcrumb>
		</div>
		
		<div class="b_right_table">
	        <Form class="changePassword" ref="formInline" :model="formInline" :rules="ruleInline" :label-width="100">
	        	<h3>个人密码修改</h3>
		        <FormItem prop="user" label="原始密码"> 
		            <Input type="text" v-model="formInline.user" placeholder="原始密码">
		            </Input>
		        </FormItem>
		        <FormItem prop="password" label="新密码">
		            <Input type="password" v-model="formInline.password" placeholder="新密码">
		            </Input>
		        </FormItem>
		        <FormItem prop="surePassword" label="确定新密码">
		            <Input type="password" v-model="formInline.surePassword" placeholder="再次输入新密码">
		            </Input>
		        </FormItem>
		        <FormItem>
		            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
		        </FormItem>
		    </Form>
		</div>
	</div>
</template>

<script>
	 export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: '',
                    surePassword:''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '原始密码不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '新密码不能为空', trigger: 'blur' },
                        { type: 'string', min: 6, message: '长度不能小于6位数', trigger: 'blur' }
                    ],
                    surePassword:[
                    	{ required: true, message: '新密码不能为空', trigger: 'blur' },
                        { type: 'string', min: 6, message: '长度不能小于6位数', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
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
	.changePassword{
		width: 340px;
		margin: auto;
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