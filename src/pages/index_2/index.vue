<template>
  <div class="wrap">
    <div class="header">
      <div class="log">搞笑段子</div>
      <div class="log_1">
        <p class="time">{{nowTime}}</p>
        <p class="time_1" @click="navTo">往时今日</p>
      </div>
    </div>
    <div class="client">
      <scroll-view scroll-y style="height: 100%" @scroll="getScroll" @scrolltolower="lower">
        <div class="block" v-for="(item,index) in list" :key="index">
          <div class="peak">
            <p>耿增发的帖子</p>
            <p>举报</p>
          </div>
          <div class="subject">{{item.content}}</div>
          <div class="client_fot">
            <div @click="touch(index)" class="iconfont icon-dianzan active"></div>
            <div class="iconfont icon-cai"></div>
            <div class="iconfont icon-zhuanfa"></div>
            <div class="iconfont icon-pinglun"></div>
          </div>
        </div>
      </scroll-view>
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
      scrollTop: "",
      ind: 0,
      page: 1,
      pagesize: 5,
      nowTime: "",
      list: "",
      time: {
        month: "",
        date: ""
      }
    };
  },
  methods: {
    getScroll(e) {
      this.scrollTop = e.target.scrollTop;
      console.log(e.target.scrollTop);
    },
    watch: {
      scrollTop(curVal, oldVal) {
        if (this.scrollTop < 100) {
          console.log(1);
        }
      }
    },

    lower: function() {
      this.pagesize = this.pagesize + 10;
      wx.request({
        url:
          "http://v.juhe.cn/joke/content/list.php?key=c09bbb20b216121070fe0a3e7f80765a&page=" +
          this.page +
          "&pagesize=" +
          this.pagesize +
          "&sort=asc&time=1418745237",
        success: res => {
          this.list = res.data.result.data;
        }
      });
    },
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      this.nowTime = year + "年" + month + "月" + date + "日";
      this.time.month = month;
      this.time.date = date;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 24 * 24 * 60000);
    },
    navTo: function() {
      this.$store.commit("addmonth", this.time);
      wx.navigateTo({
        url: "../index_3/main"
      });
    },
    tab: function(id) {
      this.ind = id;
      if (this.ind == 3) {
        wx.navigateTo({
          url: "../index_4/main"
        });
      }
    }
  },
  created() {},
  mounted() {
    this.nowTimes();
    wx.request({
      url:
        "http://v.juhe.cn/joke/content/list.php?key=c09bbb20b216121070fe0a3e7f80765a&page=" +
        this.page +
        "&pagesize=" +
        this.pagesize +
        "&sort=asc&time=1418745237",
      success: res => {
        this.list = res.data.result.data;
      }
    });
  }
};
</script>

<style>
.wrap {
  display: flex;
  flex-direction: column;
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
.header {
  height: 50px;
  width: 100%;
  display: flex;
  font-size: 20px;
  background: pink;
}
.log {
  height: 100%;
  width: 75%;
  text-indent: 150px;
  line-height: 50px;
}
.log_1 {
  flex: 1;
  flex-direction: column;
}
.client {
  flex: 1;
  width: 90%;
  background: rgb(243, 239, 239);
  margin: 0 auto;
  overflow-y: auto;
}
.time {
  font-size: 10px;
  margin-top: 10px;
}
.time_1 {
  font-size: 13px;
  text-indent: 10px;
  width: 80%;
  border: 1px solid black;
}
.block {
  margin-top: 15px;
  width: 98%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
}
.peak {
  height: 30%;
  display: flex;
  color: #666666;
}
.peak p:nth-child(1) {
  margin-left: 10px;
  font-size: 14px;
}
.peak p:nth-child(2) {
  margin-left: 60%;
  color: black;
}
.subject {
  flex: 1;
  width: 80%;
  margin-top: 5px;

  margin: 0 auto;
  word-wrap: break-word;
  text-indent: 0.5rem;
  margin-top: 3px;
}
.client_fot {
  display: flex;
  margin-top: 10px;
  flex: 2;
  justify-content: space-around;
}
scroll-view {
  height: 100%;
}
</style>
