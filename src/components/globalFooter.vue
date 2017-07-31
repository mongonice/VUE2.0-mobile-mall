<!-- 页面的底部组件 -->
<template>
  <ul class="footer-tabs">
    <li v-for="tab in tabs">
      <router-link :to="tab.path">
        <!-- 当tab.path 等于 $route.path的时候，要显示黄色的icon -->
        <img class="tab-icon" :src=" tab.path == $route.path ? tab.iconUrlOn : tab.iconUrlOff " />
        <i>{{ tab.name }}</i>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'myFooter',
  data () {
    return {
      tabs:[
        {
          path:'/Home',
          name:'首页',
          iconUrlOn:require('../assets/images/home-live.png'),
          iconUrlOff:require('../assets/images/home-die.png')
        },
        {
          path:'/Classfy',
          name:'分类',
          iconUrlOn:require('../assets/images/classfy-live.png'),
          iconUrlOff:require('../assets/images/classfy-die.png')
        },
        {
          path:'/Buy',
          name:'购物车',
          iconUrlOn:require('../assets/images/buy-live.png'),
          iconUrlOff:require('../assets/images/buy-die.png')
        },
        {
          path:'/My',
          name:'我的',
          iconUrlOn:require('../assets/images/my-live.png'),
          iconUrlOff:require('../assets/images/my-die.png')
        }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer-tabs{
    position:fixed; 
    width:100%;
    left:0; 
    bottom:0; 
    background:#333;
    padding:0.16rem 0 0.08rem;
  }
  .footer-tabs>li a{
    width:25%;
    float:left;
    text-align:center;
    color:#666;
  }
  .footer-tabs>li .tab-icon{
    display:block;
    width:0.48rem;
    height:0.48rem;
    margin:0 auto;
  }
  .footer-tabs>li i{
    display:block;
    font-size:0.2rem;
    line-height:0.36rem;
  }
  .footer-tabs>li .active{
    color:#f9f027 !important;
  }
</style>
