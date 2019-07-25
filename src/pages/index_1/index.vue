<template>
  <div class="wrap">
    <div class="banner">
      <img src="http://img01.sogoucdn.com/app/a/100520021/5a0d929ca3b0aa7c20a72d886435fa8a" alt>
    </div>
    <div class="foont">
      <div class="log">
        <img src="http://cdn2.ettoday.net/images/1385/1385802.jpg" alt>
      </div>
      <div class="dome_1" @click="click_1">段子</div>
      <div class="dome_2" @click="click_2">图片</div>
      <div class="dome_3" @click="click_3">视频</div>
    </div>
    <div class="buttom">
      <span class="yi">唯一客服:</span>
      <span style="color:red">17611790602</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    click_1: function() {
      wx.navigateTo({
        url: "../index_2/main"
      });
    },
    click_2: function() {
      wx.navigateTo({
        url: "../index_5/main"
      });
    },
    click_3: function() {
      wx.navigateTo({
        url: "../index_6/main"
      });
    }
  }
};
</script>

<style>
.banner {
  width: 100%;
  height: 70%;
}
.foont {
  flex: 1;
  display: flex;
  margin-top: 50px;
}
.log {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 5%;
}
.dome_1,
.dome_2,
.dome_3 {
  width: 60px;
  height: 40px;
  border: 1px solid #ade70c;
  font-size: 16px;
  border-radius: 35%;
  text-align: center;
  line-height: 40px;
  margin: 10px 0 0 30px;
}
</style>
