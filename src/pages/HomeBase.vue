<template>
  <div id="HomeDefault">
    <!--    头部轮播图    -->
    <header-slider></header-slider>
    <!-- 分类  -->
    <div>
      <h2 class="h-second-tit">主题馆</h2>
      <ul class="h-theme-list clearfix">
        <li v-for="(theme, index) in themeList" :key="theme.classId">
          <router-link :to="{name: 'List', params: {classId: theme.classId, classTitle: theme.classTitle}}">
            <img class="theme-pic" :src="theme.imgUrl" alt=""/>
          </router-link>
        </li>
      </ul>
    </div>
   <!--  <div>
    </div>
    <div>
      <h2 class="h-second-tit">折扣区</h2>
      <ul class="h-theme-list clearfix">
        <li v-for="(theme, index) in themeList"><a href="##"><img class="theme-pic" :src="theme.imgUrl" alt=""/></a></li>
      </ul>
    </div> -->
  </div>
</template>
<script>
import headerSlider from '../components/homeHeaderSlider.vue'
export default {
  name: 'HomeBase',
  created () {
    this.$http.get('http://localhost:8080/static/theme.json').then((response) => {
      // 成功
      console.log(response)
      var json = eval('('+ response.bodyText +')')
      this.themeList = json.data;
    }, (response) => {
      // 失败
      console.log('error')
    })
  },
  data () {
    return {
      themeList:null
    }
  },
  components:{
    headerSlider
  }
}
</script>
<style lang="less" scoped>
@baseFontSize:0.1rem;
@var: @distance;
@distance: 0.01rem;
@length:0.01rem;
.h-header-tab{
  display:block;
  line-height:2.8rem;
}
.h-second-tit{
  font-size:2.6*@baseFontSize;
  text-align:left;
  border-left:10*@length solid #f9f027;
  margin:1*@baseFontSize 0;
  padding-left:1*@baseFontSize;
}
.h-theme-list{
  padding:0 2%;
  li{
    float:left;
    width:49%;
    margin-bottom:10*@length;
    a{
      display:block;
      .theme-pic{
        display:block;
        width:100%;
      }
    }
  }
  li:nth-child(2n+1){
    margin-right:2%;
  }
}

</style>

