<template>
  <div class="block">
    <div class="cart-bar">
      <div class="bar-item r-b service">
       <a href=""><i class="el-icon-message"></i><br/>客服</a>
      </div>
      <div class="bar-item r-b into-shop">
        <a href=""><i class="el-icon-setting"></i><br/>进店</a>
      </div>
      <div class="bar-item save">
        <a href=""><i class="el-icon-star-off"></i><br/>收藏</a>
      </div>
      <div class="bar-item add"><button class="add-into-cart">加入购物车</button></div>
      <div class="bar-item buy"><button class="buy-btn">立即购买</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addCartBar',
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
  button{
    border: none;
  }
  .r-b{
    border-right: 1px solid #e5e5e5;
  }
  @len: 0.01rem;
  .cart-bar{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    .service, .into-shop, .save{
      width: 15%; 
    }
    .add{
      width: 30%;
    }
    .buy{
      width: 25%;
    }
    .bar-item{
      height: 86*@len;
      float: left;
      font-size: 24*@len;
      box-sizing: border-box;
      background: #fff;
      a{
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        color: #999;
        line-height: 32*@len;
        padding-top: 15*@len;
      }
      .add-into-cart{
        width: 100%;
        height: 86*@len;
        background: #FF9500;
        color: #fff;
        font-size: 24*@len;
      }

      .buy-btn{
        .add-into-cart;
        background: #DD2727;
      }
    }
    
  }
</style>
