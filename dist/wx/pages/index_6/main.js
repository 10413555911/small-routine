require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(46);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_2548e647_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(49);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_2548e647_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index_6\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2548e647", Component.options)
  } else {
    hotAPI.reload("data-v-2548e647", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      none: "none",
      urls: ""
    };
  },
  methods: {
    touch: function () {
      if (this.none == "none") {
        this.none = "block";
      } else {
        this.none = "none";
      }
    }
    // shop: function() {
    //   wx.request({
    //     url: ""
    //   });
    // }
  }
});

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("视频")]), _vm._v(" "), _c('div', {
    staticClass: "section"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "client"
  }, [_c('button', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.touch
    }
  }, [_vm._v("获取更多视频")]), _vm._v(" "), _c('div', {
    staticClass: "bodys",
    style: ({
      display: _vm.none
    })
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)]), _vm._v(" "), _c('div', [_vm._v("非wifi状态下会消耗大量流量")]), _vm._v(" "), _c('div', {
    staticClass: "shoop",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.shop
    }
  }, [_c('span', {
    staticClass: "shoop"
  }, [_vm._v("点击购买电影票")])])], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vido"
  }, [_c('video', {
    staticClass: "vid",
    attrs: {
      "vslide-gesture": "true",
      "show-fullscreen-btn": "true",
      "object-fit": "fill",
      "src": "../../auido/首页.mp4"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bodys_1"
  }, [_c('video', {
    attrs: {
      "vslide-gesture": "true",
      "show-fullscreen-btn": "true",
      "src": "../../auido/123.mp4"
    }
  }), _vm._v(" "), _c('span', [_vm._v("大狗:你在扒拉我一下？")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bodys_1"
  }, [_c('video', {
    attrs: {
      "vslide-gesture": "true",
      "show-fullscreen-btn": "true",
      "src": "../../auido/徐俊聪.mp4"
    }
  }), _vm._v(" "), _c('span', [_vm._v("黄胶鞋 七分裤 职业法师刘海柱")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bodys_1"
  }, [_c('video', {
    attrs: {
      "vslide-gesture": "true",
      "show-fullscreen-btn": "true",
      "src": "../../auido/111.mp4"
    }
  }), _vm._v(" "), _c('span')])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bodys_1"
  }, [_c('video', {
    attrs: {
      "vslide-gesture": "true",
      "show-fullscreen-btn": "true",
      "src": "../../auido/1234.mp4"
    }
  }), _vm._v(" "), _c('span')])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2548e647", esExports)
  }
}

/***/ })

},[45]);