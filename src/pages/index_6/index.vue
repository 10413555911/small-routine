<template>
  <div class="wrap">
    <div class="header">视频</div>
    <div class="section">
      <div class="vido">
        <video
          class="vid"
          vslide-gesture="true"
          show-fullscreen-btn="true"
          object-fit="fill"
          src="../../auido/首页.mp4"
        ></video>
      </div>
      <div class="client">
        <button @click="touch">获取更多视频</button>
        <div class="bodys" :style="{display:none}">
          <div class="bodys_1">
            <video vslide-gesture="true" show-fullscreen-btn="true" src="../../auido/123.mp4"></video>
            <span>大狗:你在扒拉我一下？</span>
          </div>
          <div class="bodys_1">
            <video vslide-gesture="true" show-fullscreen-btn="true" src="../../auido/徐俊聪.mp4"></video>
            <span>黄胶鞋 七分裤 职业法师刘海柱</span>
          </div>

          <div class="bodys_1">
            <video vslide-gesture="true" show-fullscreen-btn="true" src="../../auido/111.mp4"></video>
            <span></span>
          </div>
          <div class="bodys_1">
            <video vslide-gesture="true" show-fullscreen-btn="true" src="../../auido/1234.mp4"></video>
            <span></span>
          </div>
        </div>
        <div>非wifi状态下会消耗大量流量</div>
        <div class="shoop" @click="shop">
          <!-- <web-view :src='h'>点击购买</web-view> -->
          <span class='shoop'>点击购买电影票</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      none: "none",
      urls: ""
    };
  },
  methods: {
    touch: function() {
      if (this.none == "none") {
        this.none = "block";
      } else {
        this.none = "none";
      }
    },
    // shop: function() {
    //   wx.request({
    //     url: ""
    //   });
    // }
  }
};
</script>

<style>
.wrap {
  position: relative;
}
.section video {
  width: 100%;
}
.header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  background: rgb(241, 241, 241);
}

.vido {
  height: 200px;
  background: red;
}
.section {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.client {
  text-align: center;
}
.bodys {
  width: 100%;
  height: 270px;
  border: red;
  overflow-y: auto;
  border: 1px solid #cccc;
}
.shoop {
  font-size: 13px;
  border: 1px dashed black;
  width: 90px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 9999;
}
button {
  margin-top: 5px;
}
.bodys_1 {
  width: 100%;
  margin-top: 20px;
  height: 270px;
  border-bottom: 1px solid pink;
  background: #000;
}
.bodys_1 span {
  color: #ffffff;
  margin-top: 3px;
  height: 20px;
  margin-right: 10px;
  font-size: 16px;
}
.vid {
  padding: 10px;
}
</style>
