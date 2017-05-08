<template>
  <div id="Classfy">
    <el-row>
      <el-col :span="8">
        <classfy-left-bar @changeTab="changeContent"></classfy-left-bar>
      </el-col>
      <el-col :span="16">
        <div v-html="content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ClassfyLeftBar from '../components/v-left-bar.vue'
export default {
  name: 'Classfy',
  created () {
    this.$http.get('http://localhost:8080/static/classfyData.json').then((response) => {
      // 成功返回来的data
      var arr = response.bodyText.substring(1,response.bodyText.length-1).split(',');
      this.wholeCont = arr;
      this.content = arr[0].replace(/'/g,'');
    },(data, status, request)=>{
      // 失败之后
      console.log('fail' + status + "," + request);
    })
  },
  data(){
    return {
      wholeCont:'',
      content:''
    }
  },
  components:{
    ClassfyLeftBar
  },
  methods:{
    changeContent:function(index){
      console.log('点击的第'+index)
      this.content = this.wholeCont[index].replace(/'/g,'')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
