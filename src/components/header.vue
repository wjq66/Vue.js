<template>
	<div class="c_top">
		<div class="t_banner">
			<div class="logo">
				<img src="../assets/zhongduan_logo.png" alt="" />
				<p>终端行为检测分析系统</p>
			</div>
			<div class="admin">
				<p class="nowTime" id="nowTime">时间 {{time}}</p>
				<div class="adminIcon">
				    <div class="pointer userIcon"  @click="showToggle">
				      <span><Icon type="person" style="font-size: 18px;"></Icon></span>
				      <span><Icon type="ios-arrow-down"></Icon></span>
				    </div>
				    <ul class="dropdown-menu" v-show="isShow">
				      <li class="dropdown-menu_li">当前用户:{{adminName}}</li>
				      <li class="dropdown-menu_li" @click="changepassword">修改用户密码</li>
				      <li class="divider"></li>
				      <li class="dropdown-menu_li" @click="signOut">退出登录</li>
				    </ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				adminName:'admin',
				time:'****年**月**日',
				flag:1,
				isShow:false
			}
		},
		methods:{
			nowTime(){
				function p(s) {
			    	return s < 10 ? '0' + s: s;
				}
				
				var date = new Date();
				this.year = date.getFullYear();
				this.month = date.getMonth() + 1;
				this.date = date.getDate();
				this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()]; 
				var currentTime = this.year + "年" + this.month + "月" + this.date + "日 " + " " + this.day;
				this.time = currentTime;
			},
			showToggle:function(){  
                this.isShow = !this.isShow  
                if(this.isShow){  
                    this.btnText = "隐藏"  
                }else{  
                    this.btnText = "显示"  
                }  
            },
            changepassword:function(){
            	this.$router.push({path:'/ChangePassword'});
            },
            signOut:function(){
            	this.$router.push({path:'/login'});
            }
		},
		mounted(){
			this.nowTime(); 
		}
		
	}
</script>

<style scoped>
	ul li {
	    list-style: none;
	}
	.c_top{
		width: 100%;
		height:70px; 
		z-index: 100;
		top: 0;
		left: 0;
	}
	.t_banner{
		width: 100%;
		height:100%;
		background: #3C3D3D;
	} 
	.t_banner .logo{
		width: auto;
		height: 100%;
		float: left;
	}
	.t_banner .logo img{
		float: left;
		width: 50px;
		height: 50px;
		margin: 10px;
	}
	.t_banner .logo p{
		font-size: 24px;
		float: left;
		line-height: 70px;
		color: #fff;
	}
	.t_banner .admin{
		width: auto;
		float: right;
		height: 100%;	
		color: #fff;
		margin-right: 70px;
	}
	
	.t_banner .admin .nowTime{
		width: auto;
		height: 100%;
		line-height: 70px;
		float: left;
	}
	.t_banner .admin .adminIcon{
		float: left;
		width: auto;
		height: 100%;
		line-height: 70px;
		margin-left: 40px;
		position: relative;
	} 
	.adminIconOne{
		margin-top: 27px;
		font-size: 16px;
		color: #fff;
		cursor: pointer;
	}  
	.pointer{
		cursor: pointer;
	}
	.t_banner .dropdown-menu{
		width: 150px;
		position: absolute;
		left: -75px; 
	} 
 
	.dropdown-menu .divider {
	    height: 1px;
	    margin: 9px 0;
	    overflow: hidden;
	    background-color: #e5e5e5;
    }
	
	.dropdown-menu{ 
	    position: absolute;
	    top: 100%;
	    left: 0;
	    z-index: 1000; 
	    float: left;
	    min-width: 160px;
	    padding: 5px 0;
	    margin: 2px 0 0;
	    font-size: 14px;
	    text-align: left;
	    list-style: none;
	    background-color: #fff;
	    -webkit-background-clip: padding-box;
	    background-clip: padding-box;
	    border: 1px solid #ccc;
	    border: 1px solid rgba(0, 0, 0, .15);
	    border-radius: 4px;
	    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
	    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
	}
	.display{
		display: block;
	}
	.dropdown-menu > .dropdown-menu_li {
	    display: block;
	    padding: 3px 20px;
	    clear: both;
	    font-weight: normal;
	    line-height: 1.42857143;
	    color: #333;
	    white-space: nowrap;
	    cursor: pointer;
	}
 
</style>