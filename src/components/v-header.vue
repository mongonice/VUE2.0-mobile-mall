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
      headTitle:[
        '环球小镇',
        '分类',
        '购物车',
        '我的'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header-title{
  background:#ccc;
  font-size:0.26rem;
  line-height:0.6rem;
}
</style>
