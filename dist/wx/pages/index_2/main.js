require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(18);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5c93c97a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(21);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(19)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5c93c97a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index_2\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c93c97a", Component.options)
  } else {
    hotAPI.reload("data-v-5c93c97a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
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

    lower: function () {
      this.pagesize = this.pagesize + 10;
      wx.request({
        url: "http://v.juhe.cn/joke/content/list.php?key=c09bbb20b216121070fe0a3e7f80765a&page=" + this.page + "&pagesize=" + this.pagesize + "&sort=asc&time=1418745237",
        success: res => {
          this.list = res.data.result.data;
        }
      });
    },
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1;
      let date = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp).getDate();
      this.nowTime = year + "年" + month + "月" + date + "日";
      this.time.month = month;
      this.time.date = date;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 24 * 24 * 60000);
    },
    navTo: function () {
      this.$store.commit("addmonth", this.time);
      wx.navigateTo({
        url: "../index_3/main"
      });
    },
    tab: function (id) {
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
      url: "http://v.juhe.cn/joke/content/list.php?key=c09bbb20b216121070fe0a3e7f80765a&page=" + this.page + "&pagesize=" + this.pagesize + "&sort=asc&time=1418745237",
      success: res => {
        this.list = res.data.result.data;
      }
    });
  }
});

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "log"
  }, [_vm._v("搞笑段子")]), _vm._v(" "), _c('div', {
    staticClass: "log_1"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.nowTime))]), _vm._v(" "), _c('p', {
    staticClass: "time_1",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.navTo
    }
  }, [_vm._v("往时今日")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "client"
  }, [_c('scroll-view', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "scroll-y": "",
      "eventid": '2'
    },
    on: {
      "scroll": _vm.getScroll,
      "scrolltolower": _vm.lower
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "block"
    }, [_c('div', {
      staticClass: "peak"
    }, [_c('p', [_vm._v("耿增发的帖子")]), _vm._v(" "), _c('p', [_vm._v("举报")])], 1), _vm._v(" "), _c('div', {
      staticClass: "subject"
    }, [_vm._v(_vm._s(item.content))]), _vm._v(" "), _c('div', {
      staticClass: "client_fot"
    }, [_c('div', {
      staticClass: "iconfont icon-dianzan active",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.touch(index)
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "iconfont icon-cai"
    }), _vm._v(" "), _c('div', {
      staticClass: "iconfont icon-zhuanfa"
    }), _vm._v(" "), _c('div', {
      staticClass: "iconfont icon-pinglun"
    })])])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "foot"
  }, [_c('div', {
    class: _vm.ind == 0 ? 'iconfont icon-xiazai45 active' : 'iconfont icon-xiazai45 ',
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.tab(0)
      }
    }
  }, [_c('p', [_vm._v("首页")])], 1), _vm._v(" "), _c('div', {
    staticClass: "iconfont icon-faxian"
  }, [_c('p', [_vm._v("发现")])], 1), _vm._v(" "), _c('div', {
    staticClass: "iconfont icon-shenhe"
  }, [_c('p', [_vm._v("审核")])], 1), _vm._v(" "), _c('div', {
    class: _vm.ind == 3 ? 'iconfont icon-wode active' : 'iconfont icon-wode ',
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.tab(3)
      }
    }
  }, [_c('p', [_vm._v("我的")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5c93c97a", esExports)
  }
}

/***/ })

},[17]);