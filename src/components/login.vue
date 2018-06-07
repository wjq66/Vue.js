<template>
	<div id="app">
		<div class="bgBox">
			<div class="shu"></div>
			<div class="formBox">
				<div class="formTopBg"></div>
				<div class="title">
					<div class="titleImg"></div>
					<p>{{title}}</p>
				</div>
				 <Form class="loginForm" ref="formInline" :model="formInline" :rules="ruleInline">
			        <FormItem prop="user">
			            <Input type="text" v-model="formInline.user" placeholder="请输入用户名">
			                <Icon class="icon" type="person" slot="prepend" ></Icon>
			            </Input>
			        </FormItem>
			        <FormItem prop="password">
			            <Input type="password" v-model="formInline.password" placeholder="请输入密码">
			                <Icon class="icon" type="locked" slot="prepend"></Icon>
			            </Input>
			        </FormItem>
			        <FormItem>
			            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
			        </FormItem>
			    </Form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				url:'/index/InformationList',
				title:'终端行为检测分析系统',
				formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
			}
		},
	
		methods:{
			handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        /*this.$Message.success('Success!');*/
                       /*登录成功跳转到首页*/
                        this.$router.push({path:this.url})
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
		}
	}
</script>

<style scoped>
	.shu{
		width: 50px;
		height: calc(50vh - 130px);
		position: absolute;
		top: 0px;
		left: calc(45% + 175px);
		background: url(../assets/shu3.jpg);
		z-index: 10;
		box-shadow:2px 2px 2px #ccc;
	}
	.bgBox{
		width: calc(100vw-16px);
		height: 100vh;
		background: url(../assets/bg5.jpg) no-repeat;
		background-size: 100% 100%;
		position: relative;
		top: 0px;
		left: 0px;
	}
	.formBox{
		width: 400px;
		height:  270px;
		background: rgba(220,220,220,0.5);
		border-radius: 8px;
		position: absolute;
		top: calc(50vh - 150px);
		left: 45%;
		box-shadow:5px 5px 4px #8a8a8a70;
	}
	.formTopBg{
		width: 50px;
		height: 5px;
		background: rgba(0,0,0,0.2);
		border-radius: 3px;
		margin: auto;
		margin-top: 20px;
	}
	.title{
		width: 100%;
		height: 60px;
		line-height: 60px;
		padding: 0px 20px;
		margin-top: 15px;
	}
	.title>p{ 
		color: #222;
		letter-spacing: 2px;
		font-size: 22px;
		font-weight: 600;
		
	}
	.titleImg{
		width: 60px;
		height: 60px;
		background: url(../assets/icon.png);
		background-size: 100% 100%;
		float: left;
	}
	.loginForm{
		width: 56%;
		margin: auto;
		margin-top: 10px;
	}
	.icon{
		font-size: 18px;
		font-weight: 600;
	}
</style>