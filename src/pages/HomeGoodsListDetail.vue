<template>
  <div id="Detail">
    <div class="nav clearfix">
       <i class="fl el-icon-arrow-left back" @click="$router.back()"></i>
       <span class="fl nav-title"> {{ $route.query.id }} </span>
     </div>
    我是商品详情页
  </div>
</template>
<script>

export default {
  name: 'HomeGoodsListDetail',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
.fl{
  float: left;
}
.fr{
  float: right;
}
.clearfix::after{
  display: block;
  clear: both;
  content: '';
}
.clearfix{
  zoom: 1;
}
@len: 0.01rem;
#Detail{
  position: absolute;
  z-index: 999;
  left:0;
  top:0;
  width: 100%;
  height: 300%;
  background: yellow;
}
.nav{
  background: #ccc;
  padding: 2%;
  .back{
    font-size: 30*@len;
  }
  .nav-title{
    font-size: 28*@len;
  }
}
.goods-list{
  padding: 0 2%;
  li{
    float: left;
    width: 48%;

    .goods-pic{
      width: 100%;
    }
    .goods-info{
      font-size: 24*@len;
      width: 80%;
    }
  }
}

</style>

