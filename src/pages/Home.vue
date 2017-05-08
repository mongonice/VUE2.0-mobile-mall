<template>
  <div id="Home">
    <!--    头部轮播图    -->
    <div class="block">
      <!-- <span class="demonstration">Click 指示器触发</span> -->
      <el-carousel trigger="click" height="2.8rem">
        <el-carousel-item v-for="item in items">
          <a :href="item.url" class="h-header-tab">{{ item.title }}</a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 分类  -->
    <div>
      <h2 class="h-second-tit">主题馆</h2>
      <ul class="h-theme-list clearfix">
        <li v-for="(theme, index) in themeList"><a href="##"> {{ theme.name }}</a></li>
      </ul>
    </div>
    <div>
    </div>
    <div>
      <h2 class="h-second-tit">折扣区</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created () {
    this.$http.get('http://localhost:8080/static/theme.json').then((response) => {
      // 成功
      console.log(response)
      var json = eval('('+response.bodyText+')')
      this.themeList = json.data;
    }, (response) => {
      // 失败
      console.log('error')
    })
  },
  data () {
    return {
      items:[
        {
          title:'Vue.js',
          url:'https://www.baidu.com'
        },
        {
          title:'Node.js',
          url:'https://www.baidu.com'
        },
        {
          title:'Webpack',
          url:'https://www.baidu.com'
        },
        {
          title:'ES6',
          url:'https://www.baidu.com'
        }
      ],
      themeList:null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@baseFontSize:0.1rem;
@var: @distance;
@distance: 0.01rem;
@length:0.01rem;
.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
.h-header-tab{
  display:block;
  line-height:2.8rem;
}
.h-second-tit{
  font-size:3*@baseFontSize;
  text-align:left;
  border-left:10*@length solid red;
  margin:1*@baseFontSize 0;
  padding-left:1*@baseFontSize;
}
.h-theme-list{
  li{
    float:left;
    width:50%;
    height:200*@length;
  }
  li:nth-child(3n){
    background:#390;
  }
  li:nth-child(3n+1){
    background:pink;
  }
  li:nth-child(3n+2){
    background:blue;
  }
}

</style>
