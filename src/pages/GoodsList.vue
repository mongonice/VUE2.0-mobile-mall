<template>
  <div id="my">
    <div class="my-info">
      <div class="my-info-wrap">
      	<img class="my-icon" src="../assets/images/my-icon.png" height="78" width="78" alt="">
      	<p class="user-name">手机尾号0808</p>
      </div>
    </div>
    <ul class="my-list">
      <li class="clearfix" v-for="item in items">
        <img class="fl" :src="item.iconUrl" />
        <i class="fl m-a1">{{ item.text }}</i>
        <i class="fr m-t el-icon-arrow-right"></i>
        <i class="fr m-a2 number-style" v-if="item.typeNumber">{{ item.typeNumber }}</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'My',
  data () {
    return {
      items:[
        {
          iconUrl:require('../assets/images/my-order.png'),
          text:'我的订单',
          typeNumber:2
        },
        {
          iconUrl:require('../assets/images/my-card.png'),
          text:'我的代金券'
        },
        {
          iconUrl:require('../assets/images/my-order.png'),
          text:'我的拼团',
          typeNumber:1
        },
        {
          iconUrl:require('../assets/images/my-order.png'),
          text:'收货地址管理'
        },
        {
          iconUrl:require('../assets/images/my-order.png'),
          text:'联系客服'
        },
        {
          iconUrl:require('../assets/images/my-help.png'),
          text:'常见问题'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-info{
  width:100%;
  height:2.8rem;
  background:#f9f027;
  display:table;
}
.my-info-wrap{
	display:table-cell;
	vertical-align: middle;
}
.my-icon{
  border-radius:50%;
  width:1rem;
  height:1rem;
}
.user-name{
	font-size:0.2rem;
	margin-top:0.2rem;
}
.my-list{
  width:90%;
  margin:0.2rem auto 0;
  padding-bottom:2rem;

}
.my-list>li{
  font-size:0.24rem;
  border-bottom:1px solid #ccc;
  padding:0.26rem 0;
}
.m-a1{
	margin:0.12rem 0 0 0.05rem;
}
.m-a2{
	margin:0.12rem 0.16rem 0 0;
}
.m-t{
	margin-top:0.16rem;
}
.number-style{
	background:red;
	border-radius:50%;
	width:0.36rem;
	line-height:0.36rem;
	text-align:center;
	color:#fff;
}
</style>
