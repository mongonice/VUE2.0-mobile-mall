<template>
  <div class="block">
    <el-carousel trigger="click" arrow="never">
      <el-carousel-item v-for="(item, index) in items" :key="item.id">
        <a :href="item.url" class="h-header-tab">
          <img :src="item.proUrl" class="carousel-img" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'vSlider',
  mounted () {
    var wrapper = document.getElementsByClassName('el-carousel__container')[0];
    var imgH = document.getElementsByClassName('carousel-img')[0];
    console.log(imgH.height)
    wrapper.height = imgH.height + 'px';
    console.log(wrapper.height)
  },
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
<style lang="less" scoped>
.el-carousel{
  overflow-y:hidden;
}
.el-carousel__container{
  height: 100px !important;
}
.h-header-tab{
  display: block;
}
.h-header-tab img{
  width: 7.2rem;
  height: 3.22rem;
}
</style>
