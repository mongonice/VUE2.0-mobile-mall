<template>
  <div id="app">
    <global-header></global-header>
    <!-- 切换页面 -->
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <!-- 引用组件底部 -->
    <global-footer></global-footer>
  </div>
</template>

<script>
// 引入适配移动端的js插件
import FixScreen from './assets/js/fixScreen.js'
import Vue from 'vue'
// 将头部组件引过来
import globalHeader from './components/globalHeader.vue'
// 将底部组件引过来
import globalFooter from './components/globalFooter.vue'
// 注册全局组件
// Vue.component('my-header', myHeader)
// Vue.component('my-footer', myFooter)

export default {
  name: 'app',
  components:{
    globalHeader,
    globalFooter
  },
  methods: {
  }
}
</script>

<style scoped>
#app {
  font-family: 'Microsoft YaHei';
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  width: 100%;
  /*padding-top: 50px;*/
}
.slide-enter {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
.slide-leave{
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
.slide-enter-active{
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  transition: all 0.1s ease;
}
.slide-leave-active{
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  transition: all 0.1s ease;
}
</style>

