<template>
  <div id="Detail">
    <div class="nav clearfix">
       <i class="fl el-icon-arrow-left back" @click="$router.back()"></i>
       <div class="nav-title"> {{ $route.query.id }} </div>
    </div>
    <ul class="nav-tabs">
      <router-link :to="{name: 'base'}" tag="li">基本信息</router-link>
      <router-link :to="{name: 'desc'}" tag="li">商品详情</router-link>
      <router-link :to="{name: 'comment'}" tag="li">商品评价</router-link>
    </ul>
    <router-view></router-view>
    <add-cart-bar></add-cart-bar>
  </div>
</template>

<script>
import AddCartBar from '../components/addCartBar.vue'
export default {
  name: 'HomeGoodsListDetail',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  components:{
    AddCartBar
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@len: 0.01rem;
#Detail{
  position: absolute;
  z-index: 999;
  left:0;
  top:0;
  width: 100%;
  height: 300%;
  background: #fff;
}
.nav{
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background: #333;
  color: #fff;
  padding: 2%;
  .back{
    font-size: 30*@len;
  }
  .nav-title{
    font-size: 28*@len;
    overflow: hidden;
  }
}
.nav-tabs{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  li{
    float: left;
    width: 33.33333%;
    font-size: 24*@len;
    line-height: 76*@len;
    border-right: 1px solid #e5e5e5;
    border-top: 4px solid #fff;
    box-sizing: border-box;
  }
  li:last-of-type{
    border-right: none;
  }
  .active{
    transform: all 0.4s;
    border-top: 4px solid #c40000;
    color: #c40000;
  }
}
</style>

