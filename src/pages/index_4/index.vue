<template>
  <div class="wrap">
    <div class="header">我的</div>
    <div class="letter">
      <div class="prode">
        <img src="https://i04picsos.sogoucdn.com/a257afc0348b8b6d" alt>
      </div>
      <div class="name">昵称:{{name}}</div>
    </div>
    <div class="likes">我喜欢的</div>
    <div class="client_1">
      <div class="client" v-if="list.length">
        <div class="block">
          <div class="user_1" v-for="(i,ever) in list" :key="ever">
            <div class="img_1">
              <img :src="i.url" alt>
            </div>
            <div class="text">
              <div class>作者:{{i.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="client" v-if="!list.length">
        <div class="block">
          <div class="user_1">无</div>
        </div>
      </div>
    </div>

    <div class="foot">
      <div
        @click="tab(0)"
        :class="ind==0?'iconfont icon-xiazai45 active':'iconfont icon-xiazai45 '"
      >
        <p>首页</p>
      </div>
      <div class="iconfont icon-faxian">
        <p>发现</p>
      </div>
      <div class="iconfont icon-shenhe">
        <p>审核</p>
      </div>
      <div @click="tab(3)" :class="ind==3?'iconfont icon-wode active':'iconfont icon-wode '">
        <p>我的</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "万年盒子耿",
      ind: 3,
      list: []
    };
  },
  mounted() {
    this.list = this.$store.state.push_1;
  },
  methods: {
    tab: function(id) {
      this.ind = id;
      if (this.ind == 0) {
        wx.navigateTo({
          url: "../index_2/main"
        });
      }
    }
  }
};
</script>

<style>
.wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  background: rgb(241, 241, 241);
}

.letter {
  width: 100%;
  height: 20%;
  background: pink;
  display: flex;
}
.prode {
  overflow: hidden;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px 0 0 10px;
}
.prode img {
  width: 100%;
  height: 100%;
}
.name {
  font-size: 18px;
  flex: 1;
  height: 30px;
  margin-top: 30px;
  text-indent: 10px;
}
.foot {
  height: 50px;
  width: 100%;
  display: flex;
  border-top: 1px solid #cccccc;
  justify-content: space-around;
}
.foot div {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 25px;
}
.foot div p {
  font-size: 13px;
  color: black;
}
.client {
  width: 95%;
  flex: 1;
  margin: 0 auto;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  margin-top: 8px;
}

.user_1 {
  flex-shrink: 0;
  display: flex;
  width: 97%;
  height: 150px;
  flex-direction: column;
  margin-top: 20px;
  border: 1px solid #000000;
}
.img_1 {
  width: 90%;
  height: 120px !important;
  margin: 0 auto;
}
.block {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.likes {
  width: 100%;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
}
.client_1 {
  flex: 1;
  overflow-y: auto;
}
</style>
