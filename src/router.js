// 引入vue文件
import Vue from 'vue'
// 引入路由文件
import VueRouter from 'vue-router'
// 引入模板文件
import Home from './pages/Home'
import Classfy from './pages/Classfy'
import Buy from './pages/Buy'
import My from './pages/My'
// 用路由器
Vue.use(VueRouter)

// 定义路由，以及设置组件和路由的映射
const routes = [
    { 
	  path: '/Home', 
	  component: Home,
	  children: [
		{
		  	path: '/',
		    name : 'Home', 
		    component: r => require.ensure([], () => r(require('./pages/HomeBase.vue')), 'Home')
		},
		{
		  	path: ':classId/:classTitle',
		  	component: r => require.ensure([], () => r(require('./pages/HomeGoodsList.vue')), 'HomeGoodsList'),
		  	children: [
		  		{
		  			path: '/',
				  	name: 'List',
				  	component: r => require.ensure([], () => r(require('./pages/HomeGoodsListBase.vue')), 'HomeGoodsList'),
		  		},
		  		{
		  			path: '/GoodsDetail',
				  	name: 'GoodsDetail',
				  	component: r => require.ensure([], () => r(require('./pages/HomeGoodsListDetail.vue')), 'HomeGoodsListDetail'),
				  	children: [
				  		{
				  		  path: 'a',
				  		  name: 'base',
				  		  component: r => require.ensure([], () => r(require('./pages/GoodsDetailBase.vue')), 'base'),
				  		},
				  		{
				  		  path: 'b',
				  		  name: 'desc',
				  		  component: r => require.ensure([], () => r(require('./pages/GoodsDetailDesc.vue')), 'desc'),
				  		},
				  		{
                          path: 'c',
                          name: 'comment',
                          component: r => require.ensure([], () => r(require('./pages/GoodsDetailComment.vue')), 'comment')
				  		}
				  	]
		  		}
		  	]
		}
	 ]
	},
	{ 
      path: '/Classfy', 
      name: 'Classfy',
      component: Classfy,
	},
	{ 
      path: '/Buy', 
      name:'Buy',
      component: Buy, 
	},
	{ 
      path: '/My', 
      name:'My',
      component: My,
	}
];

// 创建router实例，设置路由等参数
const router = new VueRouter({
	linkActiveClass : 'active', //当前显示的页面的按钮的class
	routes: routes
})

// 通过路由改变页面title 2017-05-05
router.afterEach((to, from, next) => {
	document.title = to.meta.title;
});


// 导出模块
export default router
