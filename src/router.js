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
		path: '/',
		redirect:'Home'
	},
	{ 
		path: '/Home', 
		name:'0',
		component: Home, 
		meta:{title:'环球小镇'}
	},
	{ 
		path: '/Classfy', 
		name:'1',
		component: Classfy, 
		meta:{title:'分类'}
	},
	{ 
		path: '/Buy', 
		name:'2',
		component: Buy, 
		meta:{title:'购物车'}
	},
	{ 
		path: '/My', 
		name:'3',
		component: My, 
		meta:{title:'我的'}
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
