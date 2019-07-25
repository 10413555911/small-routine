<template>
  <div class="wrap">
    <span class="back" @click="back">返回</span>
    <div class="header">历史今日</div>
    <div class="client">
      <div class="block" v-for="(item,index) in list" :key="index">
        <div class="imgs" v-if="item.pic">
          <img :src="item.pic" alt>
        </div>
        <div class="imgs" v-if="!item.pic">
          <img src="http://www.sucaijishi.com/uploadfile/2017/0510/20170510104938727.gif" alt>
        </div>
        <div>
          <div class="lunar">{{item.lunar}}</div>
          <div class="title">{{item.title}}</div>
          <div class="des">{{item.des}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: "",
      month: "",
      list: ""
    };
  },
  methods: {
    back: function() {
      wx.navigateBack({
        delta: 1
      });
    }
  },
  mounted() {
    this.date = this.$store.state.date;
    this.month = this.$store.state.month;
    wx.request({
      url:
        "http://api.juheapi.com/japi/toh?key=72185ca95c1f457f69ccda467c85ae06&v=1.0&month=" +
        this.month +
        "&day=" +
        this.date,
      success: res => {
        this.list = res.data.result;
      }
    });
  }
};
</script>

<style>
.client {
  overflow-x: auto;
  flex: 1;
  width: 90%;
  background: rgb(243, 239, 239);
  margin: 0 auto;
}
.block {
  margin-top: 15px;
  width: 98%;
  background: #ffffff;
  display: flex;
  border: 1px solid #ccc;
}
.des {
  font-size: 12px;
  word-wrap: break-word;
  text-indent: 0.5rem;
}
.lunar {
  font-size: 15px;
}
.title {
  font-size: 15px;
}
.block div {
  flex: 1;
  flex-direction: column;
}
.imgs {
  height: 180px;
  width: 45%;
}
.back {
  position: absolute;
  width: 30px;
  height: 18px;
  border: 1px solid #000000;
  z-index: 999;
  left: 10px;
  text-align: center;
  top: 15px;
}
.header {
  position: relative;
  height: 50px;
  width: 100%;
  display: flex;
  font-size: 20px;
  background: pink;
  text-indent: 145px;
  line-height: 50px;
}
</style>
