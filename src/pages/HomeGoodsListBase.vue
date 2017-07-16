<template>
 <div id="HomeGoodList">
   <div class="nav clearfix">
     <i class="fl el-icon-arrow-left back" @click="$router.back()"></i>
     <span class="fl nav-title"> {{ $route.params.classTitle }} </span>
   </div>
   <ul class="goods-list">
     <li v-for="(item, index) in goodsList" :key="item.id">
      <router-link :to="{name: 'GoodsDetail', query: {id: item.id} }">
        <div>
          <img :src="item.proUrl" alt="" class="goods-pic">
        </div>
        <div class="goods-info">
          {{ item.proInfo }}
        </div>
      </router-link>
     </li>
   </ul>
 </div>
</template>

<script>
export default {
  name: 'HomeGoodList',
  data () {
    return {
      goodsList: [
        {
          id: '1',
          proUrl: '../../static/images/goods1.png',
          proInfo: '韩都衣舍2017韩版女装夏装新款百褶裙拼接中长款连衣裙RW6403陆 绿色 S',
          oldPrice: 128,
          newPrice: 28
        },
        {
          id: '1',
          proUrl: '../../static/images/goods1.png',
          proInfo: '韩都衣舍2017韩版女装夏装新款百褶裙拼接中长款连衣裙RW6403陆 绿色 S',
          oldPrice: 128,
          newPrice: 28
        },
        {
          id: '1',
          proUrl: '../../static/images/goods1.png',
          proInfo: '韩都衣舍2017韩版女装夏装新款百褶裙拼接中长款连衣裙RW6403陆 绿色 S',
          oldPrice: 128,
          newPrice: 28
        }

      ]
    }
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
#HomeGoodList{
  position: absolute;
  z-index: 999;
  left:0;
  top:0;
  width: 100%;
  height: 300%;
  background: pink;
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
