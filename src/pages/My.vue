<template>
  <div id="my">
    <div class="my-info">
      <div class="my-info-wrap">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <p class="user-name">{{ userName }}</p>
      </div>
    </div>
    <ul class="my-list">
      <li class="clearfix" v-for="(item, index) in items">
        <img class="fl" :src="item.iconUrl" />
        <i class="fl m-a1">{{ item.text }}</i>
        <i class="fr m-t el-icon-arrow-right"></i>
        <i :class="['fr', 'm-a2', 'number-style',{'move': index == 0} ]" v-if="item.typeNumber">{{ item.typeNumber }}</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'My',
  mounted () {
    var move = document.getElementsByClassName('move')[0];
  },
  data () {
    return {
      imageUrl: require('../assets/images/my-icon.jpg'),
      userName:'手机尾号0808',
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
  },
  methods:{
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG&png 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}

function move(){
  setInerval(function(){

  }, 1000)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.my-info{
  width:100%;
  height:2.8rem;
  background:#f9f027;
  display:table;
  .my-info-wrap{
    display:table-cell;
    vertical-align: middle;
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      position: relative;
      overflow: hidden;
      .avatar{
        border-radius:50%;
        width:1.2rem;
        height:1.2rem;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 1.78rem;
        height: 1.78rem;
        line-height:  1.78rem;
        text-align: center;
      }
    }
  }
  .user-name{
    font-size:0.2rem;
    margin-top:0.2rem;
  }
}

.my-list{
  width:90%;
  margin:0.2rem auto 0;
  padding-bottom:2rem;
  li{
    font-size:0.24rem;
    border-bottom:1px solid #ccc;
    padding:0.26rem 0;
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
    @keyframes upandown { 
      0% { 
        transform:translateY(0.06rem);
        -webkit-transform:translateY(0.06rem);
      } 
      5% { 
        transform:translateY(-0.06rem);
        -webkit-transform:translateY(-0.06rem);
      } 
      10% { 
        transform:translateY(0.06rem);
        -webkit-transform:translateY(0.06rem);
      } 
      15% { 
        transform:translateY(-0.06rem);
        -webkit-transform:translateY(-0.06rem);
      } 
      20% { 
        transform:translateY(0.06rem);
        -webkit-transform:translateY(0.06rem);
      } 
      100% { 
        transform:translateY(0.06rem);
        -webkit-transform:translateY(0.06rem);
      } 
    }
    @-webkit-keyframes upandown { 
      0% { 
        transform:translateY(0.06rem);
        -webkit-transform:translateY(0.06rem);
      } 
      5% { 
        transform:translateY(-0.06rem);
        -webkit-transform:translateY(-0.06rem);
      } 
      10% { 
        transform:translateY(0.06rem);
        -webkit-transform:translateY(0.06rem);
      } 
      15% { 
        transform:translateY(-0.06rem);
        -webkit-transform:translateY(-0.06rem);
      } 
      20% { 
        transform:translateY(0.06rem);
        -webkit-transform:translateY(0.06rem);
      } 
      100% { 
        transform:translateY(0.06rem);
        -webkit-transform:translateY(0.06rem);
      } 
    }
    .move{
      animation: upandown linear 3s infinite;
    }
  }
}
</style>
