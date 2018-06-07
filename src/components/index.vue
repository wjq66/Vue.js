<template>
	<div id="app">
		<theader />
		<Layout :style="{minHeight: 'calc(100vh - 70px)'}" style="overflow-y: hidden;">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="报警信息列表" theme="dark" width="auto" :class="menuitemClasses">
					<MenuItem :name="item" v-for="(item,index) in navlists" :key='index'>
					<router-link :to='item.url'>
						<Icon :type="item.icon" />
						<span>{{item.title}}</span>
					</router-link>
					</MenuItem>
				</Menu>
            </Sider>
            <Layout>
                <Content :style="{padding: '0 16px 16px'}">
                    <router-view />
                </Content>
            </Layout>
        </Layout>

	</div>
</template>

<script>
	import Theader from './header.vue'
	export default {
		data() {
			return {
				isCollapsed: false,
				navlists: [{
						icon: "ios-list",
						title: '报警信息列表',
						url: '/index/InformationList'
					},
					{
						icon: "social-dropbox",
						title: '报警信息拓扑图',
						url: '/index/InformationChart'
					},
					{
						icon: "social-buffer",
						title: '白名单管理',
						url: '/WhiteList'
					},
					{
						icon: "android-person",
						title: '用户管理',
						url: '/UserManagement'
					},
					{
						icon: "gear-b",
						title: '配置管理',
						url: '/configurationManagement'
					}
				]
			}
		},
		components: {
			Theader
		},
		computed: {
			menuitemClasses() {
				return [
					'menu-item',
					this.isCollapsed ? 'collapsed-menu' : ''
				]
			}
		},
		methods:{
			toggleBtn(){
				$(".leftBox").css("width","78px");
				$(".contentBox").css("margin-left","78px");
				$(".contentBox").css("width","calc(100% - 78px)");
			}
		},
		mouted(){
			$(".ivu-layout-sider-trigger").click(function(){
				alert("a");
				this.toggleBtn();
			})
		}
	}
</script>


<style scoped>
	a,a:visited,a:hover,a:active{
		color: #fff;
		text-decoration: none;
	}
	.ivu-menu-dark{
		background: #313131;
	}
	.ivu-layout-sider{
		background: #313131;
	}
	.ivu-layout-sider-trigger{
		background: #313131 !important;
	}
	.layout-con {
		height: 100%;
		width: 100%;
	}
	
	.menu-item span {
		display: inline-block;
		overflow: hidden;
		width: 120px;
		text-overflow: ellipsis;
		white-space: nowrap;
		vertical-align: bottom;
		transition: width .2s ease .2s;
	}
	
	.menu-item i {
		transform: translateX(0px);
		transition: font-size .2s ease, transform .2s ease;
		vertical-align: middle;
		font-size: 16px;
	}
	
	.collapsed-menu span {
		width: 0px;
		transition: width .2s ease;
	}
	
	.collapsed-menu i {
		transform: translateX(5px);
		transition: font-size .2s ease .2s, transform .2s ease .2s;
		vertical-align: middle;
		font-size: 22px;
	}
	.contentBox{
		width: calc(100% - 200px);
		padding: 10px; 
		box-sizing: border-box;
		float: left;
		margin-top: 70px;
		margin-left: 200px;
	}
</style>
<style type="text/css">
	.ivu-layout-sider-trigger{
		background: #313131;
	}
</style>