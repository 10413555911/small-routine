<template>
  <div class="classify">
    <div class="tab_1">
      <span
        :class="ind==index?'active':'' "
        @click="click(index)"
        v-for="(item,index) in list"
        :key="index"
      >{{item.title}}</span>
    </div>
    <div class="block">
      <div class="user_1" v-for="(i,ever) in list[ind].child" :key="ever">
        <div class="img_1">
          <img :src="i.url" alt>
        </div>
        <div class="text">
          <div class="name_1">作者:{{i.name}}</div>
          <div @click="click_to(ever)" :class="i.flag?'iconfont icon-faxian':'iconfont icon-aixin'"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "搞怪趣味",
          id: 0,
          child: [
            {
              flag: false,
              url:
                "http://img04.sogoucdn.com/app/a/100520021/7673f027075e5386becd1942e7914ef3",
              name: "万年盒子耿",
              ids: 0
            },
            {
              flag: false,
              url:
                "http://img01.sogoucdn.com/app/a/100520021/26a182a9c591b845a5866d6a6a83363b",
              name: "可能是神农",
              ids: 1
            },
            {
              flag: false,
              url:
                "http://img02.sogoucdn.com/app/a/100520021/37942f835646c99cf37e2f875b47d1c6",
              name: "背鱼爱吃猫",
              ids: 2
            },
            {
              flag: false,
              url:
                "http://img02.sogoucdn.com/app/a/100520021/fde5bdb6dc19a75279fdd0206b18eaf0",
              name: "哈哈一号",
              ids: 3
            },
            {
              flag: false,
              url:
                "http://img03.sogoucdn.com/app/a/100520021/50cb95fb74a19e69d4598511794761ec",
              name: "司马东西",
              ids: 4
            },
            {
              flag: false,
              url:
                "http://img02.sogoucdn.com/app/a/100520021/9e7184553519a1f0162a7d8df1d2642d",
              name: "诸葛村夫",
              ids: 5
            },
            {
              flag: false,
              url:
                "http://img02.sogoucdn.com/app/a/100520021/7f1739478cc6a322230f289718872e72",
              name: "莫言酱",
              ids: 6
            }
          ]
        },
        {
          title: "日常囧图",
          id: 1,
          child: [
            {
              flag: false,
              url: "https://i01piccdn.sogoucdn.com/5461d3f89fcafb4a",
              name: "万年盒子耿",
              ids: 0
            },
            {
              flag: false,
              url: "https://i04piccdn.sogoucdn.com/1d89e78c72f479b1",
              name: "可能是神农",
              ids: 1
            },
            {
              flag: false,
              url: "https://i04piccdn.sogoucdn.com/db8bde871605aa5c",
              name: "背鱼爱吃猫",
              ids: 2
            },
            {
              flag: false,
              url: "https://i03piccdn.sogoucdn.com/5f3124372b548a56",
              name: "哈哈一号",
              ids: 3
            }
          ]
        },
        {
          title: "内涵趣图",
          id: 2,
          child: [
            {
              flag: false,
              url: "https://i02piccdn.sogoucdn.com/5994f114b9654c4d",
              name: "万年盒子耿",
              ids: 0
            },
            {
              flag: false,
              url: "https://i04piccdn.sogoucdn.com/412a90e5603ef896",
              name: "可能是神农",
              ids: 1
            },
            {
              flag: false,
              url: "https://i03piccdn.sogoucdn.com/70e617c63e5df2a1",
              name: "哈哈一号",
              ids: 3
            },
            {
              flag: false,
              url: "https://i01piccdn.sogoucdn.com/9ec6a143c2b99aef",
              name: "司马东西",
              ids: 4
            },
            {
              flag: false,
              url: "https://i04piccdn.sogoucdn.com/d7c0263dbd23fe4c",
              name: "诸葛村夫",
              ids: 5
            },
            {
              flag: false,
              url: "https://i04piccdn.sogoucdn.com/36028780a2514b43",
              name: "莫言酱",
              ids: 6
            }
          ]
        }
      ],
      ind: 0
    };
  },
  methods: {
    click: function(index) {
      this.ind = index;
      this.$store.commit("list_big", this.list[index]);
    },
    click_to: function(ever) {
      this.$store.commit("list_detal", ever);
    }
  },
  mounted() {
    this.$store.commit("list_big", this.list[0]);
  },
  updated() {
    this.$store.commit("push_1");
  }
};
</script>

<style>
.block {
  overflow-y: auto;
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.classify {
  width: 80%;
  margin: 0 auto;
  background: #ffffff;
  height: 500px;
  display: flex;
  flex-direction: column;
}
.tab_1 {
  height: 50px;
  display: flex;
  text-align: center;
  width: 100%;
  line-height: 50px;
}

.tab_1 span {
  flex: 1;
  border-bottom: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
}
.active {
  background: rgb(48, 173, 148);
  color: #ffffff;
}

.user_1 {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 90%;
  margin-top: 20px;
  border: 1px solid #000000;
}
.img_1 {
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
.text {
  flex: 1;
  display: flex;
  width: 40%;
  margin-left: 50%;
  color: rgb(48, 173, 148);
}
.iconfont {
  color: black;
  height: 30px;
  line-height: 30px;
}
.name_1 {
  line-height: 30px;
}
</style>
