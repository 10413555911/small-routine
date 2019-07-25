<template>
  <div class="wrap">
    <div class="header">
      图库
      <span class="back" @click="back">我的</span>
    </div>
    <Banner></Banner>
    <Classify></Classify>
  </div>
</template>

<script>
import Banner from "../../components/banner";
import Classify from "../../components/classify";
export default {
  data() {
    return {};
  },
  components: {
    Banner,
    Classify
  },

  destroyed() {
    console.log(1);
  },
  methods: {
    back: function() {
      wx.navigateTo({
        url: "../index_4/main"
      });
    }
  }
};
</script>
<style>
.wrap {
  background: pink;
}
.header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  position: relative;
}

.banner {
  width: 100%;
  height: 30%;
}
.back {
  position: absolute;
  font-size: 13px;
  width: 40px;
  height: 18px;
  border: 1px solid #000000;
  z-index: 999;
  right: 10px;
  text-align: center;
  top: 10px;
  line-height: 17px;
}
</style>
