<template>
  <div id="GoodsDetailBase">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(pro, index) in pros" :key="index">
        <img :src="pro" class="pro">
      </swiper-slide> 
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="section section1">
      <h1 class="goods-main-info">森马短袖T恤女 2017春装新款波点圆领套头上衣打底衫体恤学生韩版</h1>
      <div class="clearfix price-block">
        <span class="fl new-price">￥69.90</span><span class="fl old-price">￥99.90</span>
      </div>
      <div class="clearfix goods-extra-info">
        <span class="fl" style="text-align: left;">快递:0.00</span>
        <span class="fl">月销量116件</span>
        <span class="fl" style="text-align: right;">浙江杭州</span>
      </div>
    </div>
    <div class="section section2">
      <div class="clearfix" @click="showSizeBlock">
        <span class="fl select">选择:尺码/主要颜色</span>
        <i class="fr el-icon-more hide-icon"></i>
      </div>
      <div class="size-layer" v-show="isHide">
        <div class="size-block">
          <div class="goods-suolue-block">
            <img src="../../static/images/pro_s1.jpg" height="200" width="200" class="pro-suolue">
            <div class="pro-suolue-info">
              <p class="actual-price">￥69.90</p>
              <p class="relate-info">库存 218件</p>
              <p class="relate-info">已选择: {{size}}{{color}}</p>
              <i class="el-icon-circle-close close-size-btn" @click="hideSizeBlock"></i>
            </div>
          </div>
          <ul class="size-info-list">
            <li>
              <h2 class="size-tit">尺码</h2>
              <ul class="size-list">
                <li :class="{selected: size.isSelected}" v-for="(size, index) in sizeList" :key="index"  @click="selectSize(index)">{{ size.name }}</li>
              </ul>
            </li>
            <li>
              <h2 class="size-tit">主要颜色</h2>
              <ul class="size-list">
                <li :class="{selected: color.isSelected}" v-for="(color, index) in colorList" :key="index" @click="selectColor(index)">{{ color.name }}</li>
              </ul>
            </li>
            <li>
              <h2 class="size-tit">数量</h2>
              <div class="change-goods-amount">
                <button class="el-icon-minus minus-btn" @click="minusAmount"></button>
                <input type="text" class="goods-amount" v-model="goodsAmount">
                <button class="el-icon-plus plus-btn" @click="addAmount"></button>
              </div>
            </li>
          </ul>
          <div class="cart-block">
            <button class="add">加入购物车</button>
            <button class="buy">立即购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'GoodsDetailBase',
  data () {
    return {
      isHide: true,
      pros: ['../../static/images/pro1.jpg', '../../static/images/pro2.jpg'],
      goodsAmount: 1,
      isDisabled: true,
      size: '',
      color: '',
      sizeList: [
        { name: 'XS', isSelected: false },
        { name: 'S', isSelected: false },
        { name: 'M', isSelected: false },
        { name: 'L', isSelected: false },
        { name: 'XL', isSelected: false },
        { name: 'XXL', isSelected: false },
      ],
      colorList: [
        { name: '花黑色调0209', isSelected: false },
        { name: '白黑色调0219', isSelected: false },
        { name: '红黑色调0269', isSelected: false },
        { name: '黑白色调0291', isSelected: false },
      ],
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        grabCursor : true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        observeParents:true,
        debugger: true,
        onSlideChangeEnd: swiper => {  
            //这个位置放swiper的回调方法  
            this.page = swiper.realIndex+1;  
            this.index = swiper.realIndex;  
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    showSizeBlock () {
      this.isHide = !this.isHide
    },

    hideSizeBlock () {
      this.isHide = !this.isHide
    },

    selectSize (index) {
      this.sizeList.map((val, i) => {
        if(index == i){
          val.isSelected = !val.isSelected
          this.size = val.name
        }else{
          val.isSelected = false
        }
      })
    },

    selectColor (index) {
      this.colorList.map((val, i) => {
        if(index == i){
          val.isSelected = !val.isSelected
          this.color = val.name
        }else{
          val.isSelected = false
        }
      })
    },

    minusAmount () {
      if(this.goodsAmount > 1 ){
        this.goodsAmount--
      }
    },

    addAmount () {
      this.goodsAmount++
    }

  },
  components:{
    swiper,
    swiperSlide
  },
  mounted() {
    this.swiper.slideTo(1, 1000, false)
  }
}
</script>
<style lang="less" scoped>
@len: 0.01rem;
#GoodsDetailBase{
  padding-top: 80*@len;
  background: #f5f5f5;
}

.pro{
  width: 640*@len;
  height: 640*@len;
}

.section{
  background: #fff;
  padding: 20*@len;
  margin-bottom: 20*@len;
}
.section1{
  text-align: left;
 
  .goods-main-info{
    font-size: 28*@len;
    line-height: 32*@len;
  }
  .price-block{
    margin: 30*@len 0;
    .new-price{
      font-size: 48*@len;
      color: #dd2727;
    }
    .old-price{
      text-decoration: line-through;
      color: #999;
      font-size: 32*@len;
      margin: 10*@len 0 0 10*@len;
    }
  }
  
  .goods-extra-info{
    font-size: 22*@len;
    color: #999;
    padding:0 0.5%;
    span{
      width: 33%;
    }
  }
}

.section2{
  color: #666;
  font-size: 28*@len;
  .select{
    font-size: #666;
  }

  .size-layer{
    position: fixed;
    z-index: 1000;
    background: rgba(0,0,0,0.7);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .size-block{
      width: 100%;
      height: 80%;
      position: absolute;
      left: 0;
      bottom: 0;
      background: #fff;
      color: #000;
      
      .goods-suolue-block{
        border-bottom: 1px solid #ddd;
        padding-bottom: 30*@len;

        .pro-suolue{
          position: absolute;
          width: 200*@len;
          height: 200*@len;
          left: 20*@len;
          top: -46*@len;
          border: 1px solid #ddd;
          border-radius: 10*@len;
        }

        .pro-suolue-info{
          margin-left: 250*@len;
          padding-bottom: 20*@len;
          p{
            text-align: left;
          }
          p.actual-price{
            font-size: 28*@len;
            color: #DD2727;
            margin: 20*@len 0 10*@len 0;
          }
          p.relate-info{
            font-size: 24*@len;
            color: #333;
            line-height: 36*@len;
          }
          .close-size-btn{
            position: absolute;
            right: 20*@len;
            top: 20*@len;
            font-size: 48*@len;
          }
        }
      }
      
      .size-info-list{
        padding: 0 30*@len;
        height: 600*@len;
        overflow: scroll;
        li{
          .size-tit{
            text-align: left;
            color: #666;
            font-size: 24*@len;
            margin: 30*@len 0 20*@len;
          }
          .size-list{
            display: flex;
            display: -webkite-flex;
            flex-wrap: wrap;
            li{
              padding: 16*@len 30*@len;
              border: 1px solid #e5e5e5;
              margin: 0 16*@len 16*@len 0;
              // color: #cfcfcf;
              color: #333;
              font-size: 24*@len;
              border-radius: 4*@len;
            }
            li.selected{
              border: 1px solid #b10000;
            }
          }
          .change-goods-amount{
            display: flex;
            display: -webkit-flex;
            button{
              height: 66*@len;
              font-size: 24*@len;
              background: none;
              border: 1px solid #b3b3b3;
              padding: 0 16*@len;
            }

            // button.isDisabled{

            // }
            .goods-amount{
              font-size: 28*@len;
              text-align: center;
              width: 120*@len;
              height: 64*@len;
              border-top: 1px solid #b3b3b3;
              border-bottom: 1px solid #b3b3b3;
            }
          }
          
        }
        li:last-of-type{
          border-top: 1px solid #ddd;
          margin-top: 10*@len;
        }
      }
      
      .cart-block{
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        button{
          height: 98*@len;
          width: 50%;
          color: #fff;
          float: left;
          font-size: 28*@len;
        }
        button.add{
          background: #FF9500;
        }
        button.buy{
          background: #DD2727;
        }
      }
    }
  }
}
</style>

