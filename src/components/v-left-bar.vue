<template>
  <ul class="tag-list">
    <li v-for="(item,index) in tagList" v-text="item.name" :class="{cur:item.iscur}" @click="setCur(index)">
    </li>
  </ul>
</template>
<script>
// 一开始用import导入，报错，最后用的是require引入
require('../assets/css/Classfy.less');
export default {
  name: 'classfyLeftBar',
  data () {
    return {
      tagList:[
        {
          name:'宝宝奶粉',
          id:22,
          iscur:true
        },
        {
          name:'纸尿裤',
          id:2,
          iscur:false
        },
        {
          name:'辅食营养',
          id:1,
          iscur:false
        },
        {
          name:'母婴专区',
          id:4,
          iscur:false
        },
        {
          name:'护肤美体',
          id:5,
          iscur:false
        },
        {
          name:'营养保健',
          id:3,
          iscur:false
        },
        {
          name:'居家日用',
          id:7,
          iscur:false
        },
        {
          name:'进口美食',
          id:8,
          iscur:false
        },
        {
          name:'轻奢女装',
          id:12,
          iscur:false
        },
        {
          name:'秒杀清仓',
          id:10,
          iscur:false
        },
        {
          name:'时尚箱包',
          id:11,
          iscur:false
        }
      ]
    }
  },

  methods:{
    setCur:function(index){
      var _this = this;
      _this.tagList.map(function(val,i){
        if(i == index){
          val.iscur = true;
          // 事件监听(中转站)传递给父组件一个自定义changeTab事件 并且把i索引值带过去
          _this.$emit('changeTab', i)
        }else{
          val.iscur = false;
        }
      })

    }
  }
}
</script>
