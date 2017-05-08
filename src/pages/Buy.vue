<template>
  <div v-if="isHave">
    <ul class="goods-list">
      <li v-for="(order, index) in orders">
        <div class="clearfix">
          <span class="goods-edit" v-text="order.isEdit ? '编辑' : '完成'" @click="editGoods(index)"></span>
        </div>
        <div class="clearfix">
          <!-- <span :class="[fl, goods-radio, el-icon-check, isSelected ? 'active' : '']" @click="selectGoods(index)"></span> -->
          <span :class="['fl', 'goods-radio', 'el-icon-check', {'active': order.isSelected }]" @click="selectGoods(index)"></span>
          <img :src="order.ProductThumbnail" alt="" class="pro-thumbnail fl">
          <div class="fl" v-if="order.isEdit">
            <div class="fl goods-info goods-info-w">{{ order.detail }}</div>
            <div class="fl">
              <p class="goods-info"><span class="goods-price">￥{{ order.unitPrice * order.number | keepTwo}} </span></p>
              <p class="goods-info">× {{ order.number }} </p>
            </div>
          </div>
          <div class="fl" v-else>
            <div class="fl goods-number-wrap">
              <button class="goods-number-cal fl" @click="minusNumber(index)">-</button>
              <input  class="goods-number-text fl" type="text" v-model="order.number">
              <button class="goods-number-cal fl" @click="addNumber(index)">+</button>
            </div>
            <button class="fl goods-del" @click="delGoods(index)">删除</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="pay-wrap">
      <span :class="['fl', 'pay-radio', 'el-icon-check', {'active': isAllSelected}]" @click="selectAll"></span>
      <span class="fl goods-all">全选</span>
      <button class="pay-btn fr">结算({{ goodsTotal }})</button>
      <div class="fr pay-m-wrap">
        <p class="pay-money">合计：<i class="pay-val">￥{{ actualPay | keepTwo }}</i></p>
        <p class="pay-money">已优惠：￥{{ salePrice }} 金额说明></p>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="no-goods-wrap">
      <img class="no-goods-icon" src="../assets/images/cart-null.png">
      <p class="no-goods-pity">购物车空空如也</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Buy',
  created () {

  },
  data () {
    return {
      isHave: true,
      goodsTotal:0,
      actualPay:0,
      salePrice:0,
      isAllSelected:false,
      orders:[
        {
          ProductThumbnail:require('../assets/images/pro.jpg'),
          isEdit: true,
          isSelected: false,
          detail:'宝宝婴儿奶粉 三段实惠放心购买来自澳大利亚的纯天然奶牛',
          unitPrice:200,
          number:2
        },
        {
          ProductThumbnail:require('../assets/images/pro.jpg'),
          isEdit: true,
          isSelected: false,
          detail:'宝宝婴儿奶粉 三段实惠放心购买来自澳大利亚的纯天然奶牛',
          unitPrice:60,
          number:1
        },
        {
          ProductThumbnail:require('../assets/images/pro.jpg'),
          isEdit: true,
          isSelected: false,
          detail:'宝宝婴儿奶粉 三段实惠放心购买来自澳大利亚的纯天然奶牛',
          unitPrice:20,
          number:2
        },
        {
          ProductThumbnail:require('../assets/images/pro.jpg'),
          isEdit: true,
          isSelected: false,
          detail:'宝宝婴儿奶粉 三段实惠放心购买来自澳大利亚的纯天然奶牛',
          unitPrice:15.683,
          number:2
        },
        {
          ProductThumbnail:require('../assets/images/pro.jpg'),
          isEdit: true,
          isSelected: false,
          detail:'宝宝婴儿奶粉 三段实惠放心购买来自澳大利亚的纯天然奶牛',
          unitPrice:100,
          number:2
        }
      ]
    }
  },
  methods: {
    // 点击编辑
    editGoods:function(index){
      this.orders.map(function(val, i){
          if(index == i){
            if(val.isEdit == false){
              val.isEdit = true;
            }else{
              val.isEdit = false;
            }
          }
      })
    },

    // 点击减
    minusNumber:function(index){
      this.orders.map(function(val, i){
        if(index == i){
          if(val.number>0){
            val.number--;
          }
          val.total = val.number * val.unitPice;
        }
      })
    },
    // 点击加
    addNumber:function(index){
      this.orders.map(function(val, i){
        if(index == i){
          val.number++;
        }
      })
    },
    // 点击删除键
    delGoods:function(index){
      this.orders.splice(index,1)
    },
    // 选中商品
    selectGoods:function(index){
      var _this = this;
      _this.orders.map(function(val, i){
        if(index == i){
          if(val.isSelected == false){
            val.isSelected = true;
             _this.goodsTotal++;
             _this.actualPay += (val.unitPrice*val.number)
          }else{
            val.isSelected = false;
             _this.goodsTotal--;
             _this.actualPay -= (val.unitPrice*val.number)
          }
         
        }
      })
    },
    // 全选
    selectAll:function(){
      var _this = this;
      if(_this.isAllSelected == false){
          _this.isAllSelected = true;
          _this.orders.map(function(val, i){
           val.isSelected = true;
           _this.goodsTotal += 1;
           _this.actualPay += (val.unitPrice*val.number);
          })
        }else{
          _this.isAllSelected = false;
          _this.orders.map(function(val, i){
           val.isSelected = false;
          })
          _this.goodsTotal = 0;
          _this.actualPay = 0;
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
input,button{
  background:none;
  border:none;
}
@baseColor:#ccc;
@bgColor:#fff;
@baseFontSize:0.1rem;
@var: @distance;
@distance: 0.01rem;
@baseRed:#c40000;

.textStyle{
  font-size:2.4*@baseFontSize;
  text-align:center;
}
.btnStyle{
  background:@baseRed;
  .textStyle;
  color:@bgColor;
  font-size:20*@var;
}
.radioStyle{
  width:28*@var;
  height:28*@var;
  border-radius:50%;
  border:1px solid @baseColor;
  margin:40*@var 20*@var 0 0;
  padding-top:4*@var;
  font-size:2*@baseFontSize;
  color:@bgColor;
}
.goods-list{
  li{
    border-bottom:8 * @var solid @baseColor;
    padding:8*@var 16*@var 8*@var 40*@var;
    .goods-edit{
      width:100%;
      float:right;
      font-size:20*@var;
      line-height:48*@var;
      text-align:right;
      border-bottom:3px solid @baseColor;
      margin-bottom:10*@var;
    }
    .goods-radio{
      .radioStyle;
    }
    .goods-radio.active{
      background:@baseRed;
    }
    .pro-thumbnail{
      width:120*@var;
      border-radius:10*@var;
    }
   .goods-info{
      font-size:2.4*@baseFontSize;
      text-align:left;
      margin:4*@var 12*@var;
      .goods-price{
        color:@baseRed;
      }
    }
    .goods-info-w{
      width:2.6rem;
    }
    .goods-number-wrap{
      margin:4*@var 20*@var 0;
      .goods-number-cal{
        width:50*@var;
        height:60*@var;
        border:1px solid @baseColor;
        .textStyle;
      }
      .goods-number-text{
        width:160*@var;
        height:58*@var;
        border-top:1px solid @baseColor;
        border-bottom:1px solid @baseColor;
        .textStyle;
      }
    }
    .goods-del{
      .btnStyle;
      width:70*@var;
      height:120*@var;
    }
  }
}

.pay-wrap{
  position:fixed;
  left:0;
  bottom:0.92rem;
  border-bottom:1px solid @bgColor;
  background:@baseColor;
  width:100%;
  height:80*@var;
  .pay-radio{
    .radioStyle;
    color:@baseColor;
    margin:26*@var 0 0 40*@var;
  }
  .goods-all{
    font-size:22*@var;
    margin:30*@var 0 0 5*@var;
  }
  .pay-radio.active{
    background:@baseRed;
  }
  .pay-m-wrap{
    margin:26*@var 10*@var 0 0;
    .pay-money{
      font-size:20*@var;
      text-align:right;
      line-height:24*@var;
      .pay-val{
        color:@baseRed;
      }
    }
  }
  .pay-btn{
    .btnStyle;
    width:160*@var;
    height:80*@var;
  }
}

@Percentage:@percent;
@percent:75%;
.no-goods-wrap{
  margin-top:@percent;
  .no-goods-icon{
    width:120*@var;
    height:120*@var;
    margin-bottom:20*@var;
  }
  .no-goods-pity{
    .textStyle;
  }
}
</style>
