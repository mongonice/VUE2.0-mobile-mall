<template>
  <div id="my-header">
    <h1 class="header-title">{{ headTitle[$route.name] }}</h1>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
      headTitle:{
        'Home': '环球小镇',
        'Classfy': '分类',
        'Buy': '购物车',
        'My': '我的'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-title{
  background:#333;
  font-size:0.26rem;
  line-height:0.6rem;
  color:#fff;
}
</style>
