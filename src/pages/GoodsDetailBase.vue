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
      <div class="clearfix">
        <span class="fl select">选择:尺码/主要颜色</span>
        <i class="fr el-icon-more hide-icon"></i>
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
      pros: ['../../static/images/pro1.jpg', '../../static/images/pro2.jpg'],
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
}
</style>

