require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(28);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0900fe76_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(29)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0900fe76_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index_4\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0900fe76", Component.options)
  } else {
    hotAPI.reload("data-v-0900fe76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
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
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
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
    tab: function (id) {
      this.ind = id;
      if (this.ind == 0) {
        wx.navigateTo({
          url: "../index_2/main"
        });
      }
    }
  }
});

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("我的")]), _vm._v(" "), _c('div', {
    staticClass: "letter"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("昵称:" + _vm._s(_vm.name))])]), _vm._v(" "), _c('div', {
    staticClass: "likes"
  }, [_vm._v("我喜欢的")]), _vm._v(" "), _c('div', {
    staticClass: "client_1"
  }, [(_vm.list.length) ? _c('div', {
    staticClass: "client"
  }, [_c('div', {
    staticClass: "block"
  }, _vm._l((_vm.list), function(i, ever) {
    return _c('div', {
      key: ever,
      staticClass: "user_1"
    }, [_c('div', {
      staticClass: "img_1"
    }, [_c('img', {
      attrs: {
        "src": i.url,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "text"
    }, [_c('div', {}, [_vm._v("作者:" + _vm._s(i.name))])])])
  }))]) : _vm._e(), _vm._v(" "), (!_vm.list.length) ? _c('div', {
    staticClass: "client"
  }, [_vm._m(1)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "foot"
  }, [_c('div', {
    class: _vm.ind == 0 ? 'iconfont icon-xiazai45 active' : 'iconfont icon-xiazai45 ',
    attrs: {
      "eventid": '0'
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
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.tab(3)
      }
    }
  }, [_c('p', [_vm._v("我的")])], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "prode"
  }, [_c('img', {
    attrs: {
      "src": "https://i04picsos.sogoucdn.com/a257afc0348b8b6d",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "block"
  }, [_c('div', {
    staticClass: "user_1"
  }, [_vm._v("无")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0900fe76", esExports)
  }
}

/***/ })

},[27]);