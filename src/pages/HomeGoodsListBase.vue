<template>
 <div id="HomeGoodList">
   <div class="nav clearfix">
     <i class="fl el-icon-arrow-left back" @click="$router.back()"></i>
     <div class="nav-title"> {{ $route.params.classTitle }} </div>
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
        <div class="clearfix price-bar">
          <span class="fl new-price">￥{{ item.newPrice }}</span>
          <span class="fl old-price">￥{{ item.oldPrice }}</span>
        </div>
      </router-link>
      <i class="fr buy-icon" @click="addOneGoodsAction(item)"></i>
     </li>
   </ul>
 </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'HomeGoodList',
  data () {
    return {
      goodsList: [
        {
          id: '1',
          proUrl: '../../static/images/goods1.jpg',
          proInfo: '【天猫超市】新希望 酸奶airsnow轻爱轻质感饮用型酸奶200g*12盒/箱 ',
          oldPrice: 128,
          newPrice: 28
        },
        {
          id: '1',
          proUrl: '../../static/images/goods2.jpg',
          proInfo: '【天猫超市】伊利 无菌砖高钙低脂奶250ml*24盒',
          oldPrice: 128,
          newPrice: 28
        },
        {
          id: '1',
          proUrl: '../../static/images/goods3.jpg',
          proInfo: '【天猫超市】itoTokyoa铝镁合金包角拉杆箱万向轮男女行李箱旅行箱登机箱20英寸 银色',
          oldPrice: 128,
          newPrice: 28
        },
        {
          id: '1',
          proUrl: '../../static/images/goods1.jpg',
          proInfo: '【天猫超市】新希望 酸奶airsnow轻爱轻质感饮用型酸奶200g*12盒/箱 ',
          oldPrice: 128,
          newPrice: 28
        },
        {
          id: '1',
          proUrl: '../../static/images/goods2.jpg',
          proInfo: '【天猫超市】伊利 无菌砖高钙低脂奶250ml*24盒',
          oldPrice: 128,
          newPrice: 28
        },
        {
          id: '1',
          proUrl: '../../static/images/goods3.jpg',
          proInfo: '【天猫超市】itoTokyoa铝镁合金包角拉杆箱万向轮男女行李箱旅行箱登机箱20英寸 银色',
          oldPrice: 128,
          newPrice: 28
        }
      ]
    }
  },
  methods: {
    ...mapActions(['addOneGoodsAction'])
  }
}
</script>
<style lang="less" scoped>
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
  height: 150%;
  background: #f5f5f5;
}
.nav{
  background: #333;
  color: #fff;
  padding: 3%;
  .back{
    font-size: 30*@len;
  }
  .nav-title{
    overflow: hidden;
    font-size: 28*@len;
  }
}
.goods-list{
  li{
    float: left;
    position: relative;
    width: 49.5%;
    height: 460*@len;
    background: #fff;
    margin-bottom: 8*@len;
    font-size: 24*@len;
    .goods-pic{
      width: 100%;
    }
    .goods-info{
      font-family: 'Microsoft YaHei", Arial, Helvetica, sans-serif';
      text-align: left;
      font-size: 24*@len;
      line-height: 32*@len;
      padding: 0 3%;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-word;
      overflow: hidden;
    }
    .price-bar{
      margin-top: 40*@len;
      .old-price{
        text-decoration: line-through;
        color: #999;
        margin-left: 10*@len;
      }
    }
    
    .buy-icon{
      position: absolute;
      right: 8*@len;
      bottom: 8*@len;
      width: 50*@len;
      height: 50*@len;
      background: url(../assets/images/buy-icon.png) no-repeat;
      background-size: 80% 80%;
    }
  }
  li:nth-child(2n+1){
    margin-right: 1%;
  }
}

</style>
