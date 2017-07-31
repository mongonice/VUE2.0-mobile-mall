<template>
  <div id="Classfy">
    <el-row>
      <el-col :span="8">
        <classfy-left-bar @changeTab="changeContent"></classfy-left-bar>
      </el-col>
      <el-col :span="16">
        <ul class="brand-list">
          <li v-for="(item, index) in content">
            <a :href="item.url">
              <img :src="item.brandLogo" />
              <i>{{ item.brandName }}</i>
            </a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ClassfyLeftBar from '../components/classfyLeftBar.vue'
export default {
  name: 'Classfy',
  created () {
    this.$http.get('http://localhost:8080/static/classfyData.json').then((response) => {
      // 成功返回来的data
      console.log(response.data.data)
      var arr = response.data.data;
      console.log(arr)
      this.wholeCont = arr;
      this.content = arr[0];
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
      console.log(this.wholeCont[index])
      this.content = this.wholeCont[index];
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@length:0.01rem;
.brand-list{
  padding:10*@length 15*@length;
  li{
    float:left;
    width:30%;
    height:80*@length;
    margin:0 2% 60*@length 0;
    a{
      display:block;
      img{
        width:60%;
        vertical-align: middle;
      }
      i{
        display:block;
        font-size:20*@length;
        line-height:32*@length;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space: nowrap;
      }
    }
  }
}
</style>
