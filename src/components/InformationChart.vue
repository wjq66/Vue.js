<template>
	<div id="myChart" :style="{width: '100%', height: 'calc(100vh - 70px)'}"></div>
</template>

<script>
	import ajax from '../ajax.js'
	export default {
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  mounted(){
	    this.drawLine();
	  },
	  methods: {
	    async drawLine(){
	        // 基于准备好的dom，初始化echarts实例
	        let myChart = this.$echarts.init(document.getElementById('myChart'))
	        // 绘制图表
	        myChart.showLoading();
	        let res= await ajax("/chart");
	        let data = res.data; 
		    myChart.hideLoading();
		
		    this.$echarts.util.each(data.children, function (datum, index) {
		        index % 2 === 0 && (datum.collapsed = true);
		    });
			
		    myChart.setOption({
		    	title:{
		    		text:"报警信息拓扑图" 
		    	},
		        tooltip: {
		            trigger: 'item',
		            triggerOn: 'mousemove'
		        },
		        series: [
		            {  
		                type: 'tree',
		
		                data: [data],
		
		                top: '1%',
		                left: '7%',
		                bottom: '1%',
		                right: '20%',
		
		                symbolSize: 7,
		
		                label: {
		                    normal: {
		                        position: 'left',
		                        verticalAlign: 'middle',
		                        align: 'right',
		                        fontSize: 9
		                    }
		                },
		
		                leaves: {
		                    label: {
		                        normal: {
		                            position: 'right',
		                            verticalAlign: 'middle',
		                            align: 'left'
		                        }
		                    }
		                },
		
		                expandAndCollapse: true,
		                animationDuration: 550,
		                animationDurationUpdate: 750
		            }
		        ]
		    });
	    }
	  }
	}
</script>

<style>
</style>