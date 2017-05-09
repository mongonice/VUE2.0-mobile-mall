<template>
  <div id="app">
    <my-header></my-header>
    <!-- 切换页面 -->
    <router-view></router-view>
    <!-- 引用组件底部 -->
    <my-footer></my-footer>
  </div>
</template>

<script>
// 引入适配移动端的js插件
import FixScreen from './assets/js/fixScreen.js'
import Vue from 'vue'
// 将头部组件引过来
import myHeader from './components/v-header.vue'
// 将底部组件引过来
import myFooter from './components/v-footer.vue'
// 注册全局组件
// Vue.component('my-header', myHeader)
// Vue.component('my-footer', myFooter)

export default {
  name: 'app',
  components:{
    myHeader,
    myFooter
  },
  methods: {
    highLight () {

    }
  }
}
</script>
<style>
*{padding:0; margin:0; line-height:100%;}
a{ text-decoration:none; color:#000;}
li{ list-style:none;}
h1,h2,h3,h4,h5,h6,strong,b{ font-weight:normal;}
em,i{ font-style:normal;}
img{vertical-align:top; border:none;}
.clearfix:after{ display:block; clear:both; content:'';}
.clearfix{zoom:1;}
table{ border-collapse:collapse;}
th,td{ padding:0;}
.fl{float:left;}
.fr{float:right;}
input{border:none; outline:none;}
html,body{
  font-size:100px;
}
</style>
<style scoped>
#app {
  font-family:-apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

