<template>
  <div class="block">
    <el-carousel trigger="click">
      <el-carousel-item v-for="(item, index) in items" :key="item.id">
        <a :href="item.url" class="h-header-tab"><img :src="item.proUrl" alt=""></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'vSlider',
  data () {
    return {
      items:[
        {
          title: 'Vue.js',
          id: 1,
          proUrl: require('../assets/images/slide1.jpg'),
          url: 'https://www.baidu.com'
        },
        {
          title: 'Node.js',
          id: 2,
          proUrl: require('../assets/images/slide2.jpg'),
          url: 'https://www.baidu.com'
        },
        {
          title: 'Webpack',
          id: 3,
          proUrl: require('../assets/images/slide3.jpg'),
          url: 'https://www.baidu.com'
        },
        {
          title: 'ES6',
          id: 4,
          proUrl: require('../assets/images/slide4.jpg'),
          url: 'https://www.baidu.com'
        }
      ]
    }
  }
}
</script>
<style>
.el-carousel{
  overflow-y:hidden;
}
.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
</style>
