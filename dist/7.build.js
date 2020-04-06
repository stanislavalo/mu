webpackJsonp([7],{

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(236)

/* template */
var __vue_template__ = __webpack_require__(237)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['crumps'],
  data: function data() {
    return {
      crumpsShape: this.crumps,
      divider: '&nbsp;&nbsp;/&nbsp;&nbsp;'
    };
  },
  created: function created() {
    if (this.$vuetify.breakpoint.xsOnly) {
      var filters = this.$options.filters;
      var crumpsShapeData = this.crumps;
      crumpsShapeData.forEach(function (element) {
        element.text = filters.shape(element.text, 36);
      });
      this.crumpsShape = crumpsShapeData;
    }
  }
});

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-layout', {
    staticClass: "mx-0 my-0 py-0",
    attrs: {
      "row": "",
      "wrap": ""
    }
  }, [_c('v-flex', {
    staticClass: "mx-0 px-1 my-0 py-0",
    attrs: {
      "xs12": ""
    }
  }, _vm._l((_vm.crumpsShape), function(item, index) {
    return _c('span', {
      key: index
    }, [(item.disabled) ? _c('span', {
      staticClass: "caption grey--text text--darken-2 mx-0 px-0",
      domProps: {
        "innerHTML": _vm._s(item.text)
      }
    }) : (item.disableTranslated) ? _c('span', {
      staticClass: "caption grey--text text--darken-2 mx-0 px-0"
    }, [_vm._v("\n      " + _vm._s(_vm.$t(item.text)) + " " + _vm._s(item.textAdded) + "\n    ")]) : _c('router-link', {
      staticClass: "body-1 blue--text text--darken-4 mx-0 px-0",
      attrs: {
        "to": {
          name: item.href,
          params: item.params
        }
      }
    }, [_vm._v("\n      " + _vm._s(_vm.$t(item.text)) + "  " + _vm._s(item.textAdded) + "\n    ")]), _vm._v(" "), (index != _vm.crumpsShape.length - 1) ? _c('span', {
      domProps: {
        "innerHTML": _vm._s(_vm.divider)
      }
    }) : _vm._e()], 1)
  }), 0)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  "entity_id": "2420",
  "field_seminar_title_value": "Cohomology in algebra, geometry, physics and statistics",
  "field_usualy_date_seminar_value": "every Wednesday at 11:30 AM",
  "field_usualy_place_seminar_value": "Institute of Mathematics of ASCR, Žitná 25, Praha 1, konírna",
  "field_chairmen_value": "Anton Galaev, Roman Golovko, Igor Khavkine, Alexei Kotov, Hong Van Le and Petr Somberg",
  "text": "<br \/>\r\nIn this seminar we shall discuss topics concerning constructions and applications of cohomology theory in algebra, geometry, physics and statistics. In particular we shall discuss in first four seminars the relations between vertex algebras and foliations on manifolds, Gelfand-Fuks cohomology on singular spaces, cohomology of homotopy Lie algebras. The expositions should be accessible for all participants."
}, {
  "entity_id": "460",
  "field_seminar_title_value": "Complexity seminar",
  "field_usualy_date_seminar_value": "each Friday  at  13:30",
  "field_usualy_place_seminar_value": "in IM, rear building, ground floor",
  "field_chairmen_value": "Michal Koucky, Pavel Pudlak",
  "text": "The programme is announced via the &nbsp; <a href=\"https:\/\/list.math.cas.cz\/listinfo\/complexity-seminar\"> mailing list<\/a>."
}, {
  "entity_id": "664",
  "field_seminar_title_value": "Current Problems in Numerical Analysis",
  "field_usualy_date_seminar_value": "each Friday,  at  09:00",
  "field_usualy_place_seminar_value": "in IM, front building, third floor",
  "field_chairmen_value": "Michal Křížek, Pavel Kůs, Jakub Šístek, Tomáš Vejchodský",
  "text": "Old web page with the seminar history: <a class=\"moz-txt-link-freetext\" href=\"http:\/\/users.math.cas.cz\/~okmma\/\">http:\/\/users.math.cas.cz\/~okmma\/<\/a>"
}, {
  "entity_id": "470",
  "field_seminar_title_value": "Functional Analysis",
  "field_usualy_date_seminar_value": "each Tuesday  at  10:00",
  "field_usualy_place_seminar_value": "in MÚ AV ČR, Žitná 25, konírna",
  "field_chairmen_value": "Vladimir Muller",
  "text": null
}, {
  "entity_id": "338",
  "field_seminar_title_value": "Logic seminar",
  "field_usualy_date_seminar_value": "each Monday at 14:00",
  "field_usualy_place_seminar_value": "in IM, rear building, ground floor",
  "field_chairmen_value": "Pavel Pudlak,  Neil Thapen",
  "text": "More information on the&nbsp;<a href=\"http:\/\/www.math.cas.cz\/~thapen\/seminar.html\">old seminar web page<\/a>. The programme is announced via the <a href=\"http:\/\/list.math.cas.cz\/listinfo\/logic-seminar\"> mailing list<\/a>."
}, {
  "entity_id": "711",
  "field_seminar_title_value": "Mathematical-Biological seminar",
  "field_usualy_date_seminar_value": "each Tuesday, check time in the calendar",
  "field_usualy_place_seminar_value": "in IM, front building, third floor",
  "field_chairmen_value": "Milan Kučera, Jindřich Brejcha, Tomáš Vejchodský",
  "text": null
}, {
  "entity_id": "534",
  "field_seminar_title_value": "Seminar on Differential Equations and Integration Theory",
  "field_usualy_date_seminar_value": "each Thursday  at  10:00",
  "field_usualy_place_seminar_value": "in IM, front building, third floor",
  "field_chairmen_value": "Giselle Antunes Monteiro, Antonín Slavík",
  "text": null
}, {
  "entity_id": "356",
  "field_seminar_title_value": "Seminar on Partial Differential Equations",
  "field_usualy_date_seminar_value": "each Tuesday  at  09:00",
  "field_usualy_place_seminar_value": "in IM, rear building, ground floor",
  "field_chairmen_value": "Šárka Nečasová, Milan Pokorný",
  "text": null
}, {
  "entity_id": "665",
  "field_seminar_title_value": "Seminar on Qualitative Theory of Ordinary and Functional Differential Equations",
  "field_usualy_date_seminar_value": "usually Wednesday at 10:00",
  "field_usualy_place_seminar_value": "in branch in Brno, Žižkova 22, Brno, 5th Floor, Lecture Room",
  "field_chairmen_value": "Alexander Lomtatidze",
  "text": null
}, {
  "entity_id": "1522",
  "field_seminar_title_value": "Seminar on Reckoning",
  "field_usualy_date_seminar_value": "Wednesday  at  11:00",
  "field_usualy_place_seminar_value": "in Institute of Mathematics AS CR, Zitna 25, seminar room, 3rd floor, front building",
  "field_chairmen_value": "David Chodounsky, Bohuslav Balcar",
  "text": null
}, {
  "entity_id": "465",
  "field_seminar_title_value": "Seminar on theory of function spaces",
  "field_usualy_date_seminar_value": "Every Wednesday 10:00",
  "field_usualy_place_seminar_value": "Department of Mathematical Analysis, Faculty of Mathematics and Physics, Sokolovská 83",
  "field_chairmen_value": "Bohumír Opic, Luboš Pick",
  "text": null
}, {
  "entity_id": "344",
  "field_seminar_title_value": "Set Theory and Analysis",
  "field_usualy_date_seminar_value": "Every Tuesday 10:00 ",
  "field_usualy_place_seminar_value": "IM, konírna",
  "field_chairmen_value": "Martin Dolezal, Michal Doucha, Wieslaw Kubis",
  "text": null
}]);

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(334)

/* script */
__vue_exports__ = __webpack_require__(336)

/* template */
var __vue_template__ = __webpack_require__(337)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b5bf6e6c"

module.exports = __vue_exports__


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(335);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-b5bf6e6c&scoped=true!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SeminarInfo.vue", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-b5bf6e6c&scoped=true!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SeminarInfo.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".justify[data-v-b5bf6e6c]{text-align:justify}.date[data-v-b5bf6e6c]{border-left-color:orange;border-left-width:2pt;border-left-style:groove}", ""]);

// exports


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      type: Object
    },
    detail: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      getChair: 'Chair: ' + this.item.field_chairmen_value
    };
  }
});

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-card', {
    attrs: {
      "tile": "",
      "elevation": "3",
      "min-width": "100%"
    }
  }, [_c('div', {
    class: [_vm.detail ? 'headline' : 'subheading', 'ml-3', 'mt-1',
      _vm.detail ? 'font-weight-regular' : 'font-weight-bold'
    ]
  }, [(_vm.detail) ? _c('span', {
    staticClass: "blue--text text--darken-4"
  }, [_vm._v(_vm._s(_vm.item.field_seminar_title_value) + "  ")]) : _c('router-link', {
    staticClass: "blue--text text--darken-4",
    attrs: {
      "to": {
        name: 'seminar',
        params: {
          id: _vm.item.entity_id
        }
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.item.field_seminar_title_value) + " \n    ")]), _vm._v(" "), _c('p', {
    staticClass: "body-2 font-weight-regular pt-1"
  }, [(_vm.detail) ? _c('span', {
    staticClass: "pr-1"
  }, [_vm._v("usually takes place ")]) : _vm._e(), _vm._v(" "), _c('span', {
    class: {
      'font-weight-bold': _vm.detail
    }
  }, [_vm._v(_vm._s(_vm.item.field_usualy_date_seminar_value))])]), _vm._v(" "), _c('div', {
    staticClass: "row body-2 font-weight-regular ml-0 mt-1 grey--text text--darken-2"
  }, [_vm._v("\n      " + _vm._s(_vm.item.field_usualy_place_seminar_value) + "\n    ")]), _vm._v(" "), _c('p', {
    staticClass: "row body-2 font-weight-bold ml-0 mt-1 "
  }, [(_vm.detail) ? _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.getChair)
    }
  }) : _c('span', [_vm._v(_vm._s(_vm.item.field_chairmen_valu))])]), _vm._v(" "), (_vm.detail) ? _c('div', {
    staticClass: "row body-2 font-weight-regular ml-0 mr-1 pt-0 mt-0 justify",
    domProps: {
      "innerHTML": _vm._s(_vm.item.text)
    }
  }) : _vm._e()], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_events_seminars_seminars_js__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SeminarPage_vue__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SeminarPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SeminarPage_vue__);
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      seminar: null
    };
  },
  created: function created() {
    var id_seminar = this.$route.params.id;
    var seminarData = null;
    __WEBPACK_IMPORTED_MODULE_0__data_events_seminars_seminars_js__["a" /* default */].forEach(function (element) {
      if (element.entity_id == id_seminar) {
        seminarData = element;
      }
    });
    this.seminar = seminarData;
  },
  components: {
    AppSeminarPage: __WEBPACK_IMPORTED_MODULE_1__SeminarPage_vue___default.a
  }
});

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(479)

/* template */
var __vue_template__ = __webpack_require__(490)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SelectYearSeminars_vue__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SelectYearSeminars_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SelectYearSeminars_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SeminarInfo_vue__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SeminarInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SeminarInfo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Programme_vue__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Programme_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Programme_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sharing_Crumps_vue__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sharing_Crumps_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__sharing_Crumps_vue__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['seminar'],
  data: function data() {
    return {
      detail: true,
      crumps: []
    };
  },
  components: {
    AppSelectYearSeminars: __WEBPACK_IMPORTED_MODULE_1__SelectYearSeminars_vue___default.a,
    AppSeminarInfo: __WEBPACK_IMPORTED_MODULE_2__SeminarInfo_vue___default.a,
    AppProgramme: __WEBPACK_IMPORTED_MODULE_3__Programme_vue___default.a,
    appCrumps: __WEBPACK_IMPORTED_MODULE_4__sharing_Crumps_vue___default.a
  },
  created: function created() {
    //crumbs
    this.crumps.push({
      text: "Home",
      disabled: false,
      href: 'home'
    }), this.crumps.push({
      text: "Seminars",
      disabled: false,
      href: 'seminars'
    }), this.crumps.push({
      text: this.seminar.field_seminar_title_value,
      disabled: true,
      href: ''
    });
  },
  computed: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('header', {
    language: 'language',
    smAndDown: 'smAndDown'
  }))
});

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(481)

/* template */
var __vue_template__ = __webpack_require__(482)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  data: function data() {
    return {
      selectedYear: 2100,
      years: []
    };
  },
  created: function created() {
    this.years = this.getYears(2010);
  },
  computed: _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('header', {
    smAndDown: 'smAndDown'
  })),
  methods: {
    onChange: function onChange() {
      //todo
      var yy = this.selectedYear;
    },
    getYears: function getYears(start) {
      var options = [{
        value: 2100,
        label: 'upcoming'
      }];
      var yyyy = new Date().getFullYear();

      for (var i = yyyy; i >= start; i--) {
        options.push({
          value: i,
          label: i.toString()
        });
      }

      options.push({
        value: 0,
        label: 'All'
      });
      return options;
    }
  }
});

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my-2 px-0 custom-control ",
    class: {
      'custom-control-inline': _vm.smAndDown
    }
  }, [_vm._m(0), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedYear),
      expression: "selectedYear"
    }],
    staticClass: " custom-select body-1 mt-0",
    attrs: {
      "id": "inputYear"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.selectedYear = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, function($event) {
        return _vm.onChange()
      }]
    }
  }, _vm._l((_vm.years), function(year, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": year.value
      }
    }, [_vm._v(_vm._s(year.label))])
  }), 0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "mt-1 mb-0 ml-1 mr-2 ",
    attrs: {
      "for": "inputYear"
    }
  }, [_c('span', {
    staticClass: "body-1"
  }, [_vm._v("Select")])])
}]}

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(484)

/* script */
__vue_exports__ = __webpack_require__(486)

/* template */
var __vue_template__ = __webpack_require__(489)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a4cd8a32"

module.exports = __vue_exports__


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(485);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a4cd8a32&scoped=true!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Programme.vue", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a4cd8a32&scoped=true!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Programme.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".justify[data-v-a4cd8a32]{text-align:justify}.date[data-v-a4cd8a32]{border-left-color:orange;border-left-width:2pt;border-left-style:groove}.read-more-button[data-v-a4cd8a32]{margin-top:0!important;padding-top:.1em!important}", ""]);

// exports


/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_read_more_smooth__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_read_more_smooth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_read_more_smooth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_events_seminars_complexity2019_js__ = __webpack_require__(488);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['entity_id'],
  data: function data() {
    return {
      date_from: "2018-12-14T13:30:00+01:00",
      date_to: "2018-12-14T15:00:00+01:00",
      programmes: __WEBPACK_IMPORTED_MODULE_1__data_events_seminars_complexity2019_js__["a" /* default */],
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
  },
  components: {
    VueReadMoreSmooth: __WEBPACK_IMPORTED_MODULE_0_vue_read_more_smooth___default.a
  }
});

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4d93":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".text-overflow-content[data-v-72c03b2a]{--nlines:3;--lineHeight:1.5;max-height:calc(var(--nlines)*var(--lineHeight));overflow:hidden;-webkit-transition:max-height .3s ease;transition:max-height .3s ease}.text-overflow[data-v-72c03b2a]{position:relative}.no-overflow .text-overflow-content[data-v-72c03b2a]{max-height:100%;overflow:visible}.no-overflow .button-read-more[data-v-72c03b2a],.no-overflow .hide-text[data-v-72c03b2a]{display:none}.read-more-button[data-v-72c03b2a]{cursor:pointer;display:block;position:relative;border-top:1px solid #dbdbdb;height:.1em;margin:2em auto;width:95%;text-align:center}.read-more-button span[data-v-72c03b2a]{background:#fff;color:#b5b5b5;display:inline-block;font-size:.75em;padding:.4em .8em;-webkit-transform:translateY(-1.1em);transform:translateY(-1.1em);text-align:center}.hide-text[data-v-72c03b2a]{--nlines:6;--lineHeight:1.5;background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),color-stop(90%,#fff),to(#fff));background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 0,#fff 90%,#fff);width:100%;height:calc(var(--nlines)*var(--lineHeight));position:absolute;-webkit-transform:translateY(calc(var(--nlines)*-1*var(--lineHeight)));transform:translateY(calc(var(--nlines)*-1*var(--lineHeight)))}.hide-text[data-v-72c03b2a],.read-more-button[data-v-72c03b2a]{-webkit-transition:opacity .3s ease,margin .3s ease;transition:opacity .3s ease,margin .3s ease;opacity:1}.expanded .hide-text[data-v-72c03b2a],.expanded .read-more-button[data-v-72c03b2a]:not(.show-less){opacity:0;margin-top:0;margin-bottom:0;pointer-events:none}", ""]);

// exports


/***/ }),

/***/ "6099":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4d93");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("e6468484", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6b0e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadMore_vue_vue_type_style_index_0_id_72c03b2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6099");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadMore_vue_vue_type_style_index_0_id_72c03b2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadMore_vue_vue_type_style_index_0_id_72c03b2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadMore_vue_vue_type_style_index_0_id_72c03b2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f797f57-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/ReadMore.vue?vue&type=template&id=72c03b2a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-overflow",class:{ expanded: _vm.expanded, 'no-overflow': _vm.inMaxRange }},[_c('div',{ref:"to",staticClass:"text-overflow-content"},[_vm._t("default")],2),(!_vm.noShadow)?_c('div',{ref:"ht",staticClass:"hide-text"}):_vm._e(),(!_vm.noButton)?_c('div',{staticClass:"button-read-more",on:{"click":_vm.toggle}},[_vm._t("more",[_c('div',{staticClass:"read-more-button",class:{ 'show-less': !_vm.noLess }},[_c('span',[_vm._v(_vm._s(_vm.expanded ? _vm.textLess : _vm.text))])])],{"open":_vm.expanded})],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/ReadMore.vue?vue&type=template&id=72c03b2a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/ReadMore.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ReadMorevue_type_script_lang_js_ = ({
  name: "vue-read-more-smooth",
  props: {
    lines: {
      type: Number,
      default: 3
    },
    gLines: {
      type: Number,
      default: null
    },
    maxLines: {
      type: Number,
      default: null
    },
    text: {
      type: String,
      default: "Read more"
    },
    textLess: {
      type: String,
      default: "Read less"
    },
    noLess: {
      type: Boolean,
      default: false
    },
    openByDefault: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: null
    },
    noButton: {
      type: Boolean,
      default: false
    },
    noShadow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      readmore: false,
      expanded: false,
      inMaxRange: false,
      localMaxLines: 1
    };
  },
  watch: {
    open(v) {
      if (v !== this.expanded) {
        this.toggle(!v);
      }
    }
  },
  created() {
    if (this.lines && !this.maxLines) {
      this.localMaxLines = this.lines + 1;
    } else {
      this.localMaxLines = this.maxLines - 1;
    }

    if (this.open === true) {
      this.expanded = true;
    }
  },
  mounted() {
    const lh = this.getLineHeight(this.$refs.to);

    if (this.lines) {
      this.$refs.to.style.setProperty("--nlines", this.lines);
    }
    let gLines = 2;
    if (this.gLines) {
      gLines = this.gLines;
    } else if (this.lines > 12) {
      gLines = 4;
    } else if (this.lines > 6) {
      gLines = 3;
    }

    if (this.$refs.ht) {
      this.$refs.ht.style.setProperty("--nlines", gLines);
    }

    if (this.open === true) {
      this.$refs.to.style.setProperty("max-height", "100%");
    }

    setTimeout(() => {
      this.readmore = this.$refs.to.offsetHeight < this.$refs.to.scrollHeight;

      if (this.$refs.to.scrollHeight <= this.localMaxLines * lh) {
        this.inMaxRange = true;
      }

      this.$refs.to.style.setProperty("--lineHeight", lh + "px");
      if (this.$refs.ht) {
        this.$refs.ht.style.setProperty("--lineHeight", lh + "px");
      }

      if (this.open === true) {
        this.$refs.to.style.setProperty(
          "max-height",
          this.$refs.to.scrollHeight + "px"
        );
      }
    });
  },
  methods: {
    toggle(val) {
      const valExp = typeof val === "boolean" ? val : this.expanded;

      if (valExp) {
        if (!this.noLess) {
          this.$refs.to.style.removeProperty("max-height");
          this.expanded = false;
          this.$emit("update:open", false);
        }
      } else {
        this.expanded = true;
        this.$emit("update:open", true);
        this.$refs.to.style.setProperty(
          "max-height",
          this.$refs.to.scrollHeight + "px"
        );
      }
    },
    getLineHeight(element) {
      let temp = document.createElement(element.children[0].nodeName);
      const cpStyle = getComputedStyle(element.children[0]);
      temp.setAttribute(
        "style",
        "position:absolute;left:-999em;margin:0px;padding:0px;font-family:" +
          cpStyle.fontFamily +
          ";font-size:" +
          cpStyle.fontSize
      );
      temp.innerHTML = "test";
      temp = document.body.appendChild(temp);
      const ret = temp.clientHeight;
      temp.parentNode.removeChild(temp);
      return ret;
    }
  }
});

// CONCATENATED MODULE: ./src/ReadMore.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ReadMorevue_type_script_lang_js_ = (ReadMorevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/ReadMore.vue?vue&type=style&index=0&id=72c03b2a&scoped=true&lang=scss&
var ReadMorevue_type_style_index_0_id_72c03b2a_scoped_true_lang_scss_ = __webpack_require__("6b0e");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/ReadMore.vue






/* normalize component */

var component = normalizeComponent(
  src_ReadMorevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "72c03b2a",
  null
  
)

/* harmony default export */ var ReadMore = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (ReadMore);



/***/ })

/******/ })["default"];
//# sourceMappingURL=vue-read-more-smooth.common.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  "entity_id": "2832",
  "title": "A Logical Characteristic of Read-Once Branching Programs",
  "speaker": "Stanislav Žák",
  "affiliation": "Institute of Computer Science, CAS",
  "date_from": "2020-01-31 13:30:00",
  "date_to": "2020-01-31 15:00:00",
  "place": "in IM, rear building, ground floor",
  "text": "We present a mathematical model of the intuitive notions such as the knowledge or the information arising at different stages of computations on branching programs (b.p.). The model has two appropriate properties:<br \/>\r\n<br \/>\r\ni) The \"knowledge\" arising at a stage of computation in question is derivable from the \"knowledge\" arising at the previous stage according to the rules of the model and according to the local arrangement of the b.p.<br \/>\r\n<br \/>\r\nii) The model confirms the intuitively well-known fact that the knowledge arising at a node of a computation depends not only on it but in some cases also on a \"mystery\" information. (I. e. different computations reaching the same node may have different knowledge(s) arisen at it.)<br \/>\r\n<br \/>\r\nWe prove that with respect to our model no such information exists in read-once b.p.`s but on the other hand in b. p.`s which are not read-once such information must be present. The read-once property forms a frontier. More concretely, we may see the instances of our models as a systems $S=(U,D)$ where $U$ is a universe of knowledge and $D$ arederivation rules. We say that a b.p. $P$ is compatible with a system $S$ iff along each computation in $P$ $S$ derives $F$ ($false$) or $T$ ($true$) at the end correctly according to the label of the reached sink. This key notion modifies the classic paradigm according to which the computational complexity is defined with respect to different classes of restricted b.p.`s (e.g. read-once b.p.`s, k-b.p.`s, b.p.`s computing in limited time etc.). Now, the restriction is defined by a subset of systems and only these programs are taken into account which are compatible with at least one of the chosen systems. Further&nbsp; we may understand the sets $U$ of knowledge(s) as a sets of admissible logical formulae.&nbsp; More rich&nbsp; sets $U$`s imply the larger (= more free) restrictions on b.p.`s and consequently the smaller complexities of Boolean functions are detected. More rich logical equipment implies stronger computational effectiveness."
}, {
  "entity_id": "2808",
  "title": "Some Results in Property Testing",
  "speaker": "Alexander Belov",
  "affiliation": "University of Latvia ",
  "date_from": "2019-12-20 13:30:00",
  "date_to": "2019-12-20 15:00:00",
  "place": "in IM, rear building, ground floor",
  "text": "The field of property testing deals with the following question. Given an object, detect whether it satisfies some property or is far from doing so. Usually, the object is modelled as a bit-string, and the distance is (relative) Hamming distance. The goal is to develop an algorithm whose complexity is very small: much smaller than the size of the object.<br \/>\r\n<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2805",
  "title": "Does the existence of a complete problem for TFNP class imply the existence of an optimal proof system or vice versa? Part II.",
  "speaker": "Erfan Khaniki",
  "affiliation": "IM",
  "date_from": "2019-12-13 13:30:00",
  "date_to": "2019-12-13 15:00:00",
  "place": "in IM, rear building, ground floor",
  "text": "In this lecture we will construct an oracle with respect to which:<br \/>\r\n&nbsp;&nbsp;&nbsp;&nbsp; a. There is no optimal proof system for propositional tautologies.<br \/>\r\n&nbsp; &nbsp; &nbsp;b. TFNP=FP.<br \/>\r\nThe existence of this oracle and the one constructed in the previous lecture shows that TFNP_c and CON^N are independent<br \/>\r\nof each other in relativized worlds.<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2799",
  "title": "Does the existence of a complete problem for TFNP class imply the existence of an optimal proof system or vice versa? ",
  "speaker": "Erfan Khaniki",
  "affiliation": "IM",
  "date_from": "2019-12-06 13:30:00",
  "date_to": "2019-12-06 15:00:00",
  "place": "in IM, rear building, 1st floor (!)",
  "text": "In this talk, we will investigate the relationship between proof complexity conjectures that are mentioned in the \"Incompleteness in the finite domain\" paper. In particular, we are interested in the relationship between the nonexistence of a complete problem for TFNP class (TFNP_c)&nbsp; and the nonexistence of an optimal proof system for propositional tautologies (CON^N). For this matter,&nbsp; we will construct two oracles V and W such that:<br \/>\r\n<br \/>\r\n1. With respect to the V<br \/>\r\n&nbsp; &nbsp; &nbsp;a. There is no complete problem for disjoint NP-pairs.<br \/>\r\n&nbsp; &nbsp; &nbsp;b. E=NE.<br \/>\r\n2. With respect to the W<br \/>\r\n&nbsp; &nbsp; &nbsp;a. There is no optimal proof system for propositional tautologies.<br \/>\r\n&nbsp; &nbsp; &nbsp;b. TFNP=FP.<br \/>\r\nThe existence of these oracles shows that TFNP_c and CON^N are independent of each other in the relativized worlds.<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2784",
  "title": "Grassmann meets Macaulay: From Algebra to Algorithms and back",
  "speaker": "Cornelius Brand",
  "affiliation": "MFF",
  "date_from": "2019-11-29 13:30:00",
  "date_to": "2019-11-29 15:00:00",
  "place": "in IM, rear building, ground floor",
  "text": "In this talk, I will give an introduction to two recent algebraic techniques in (parameterized) algorithms for hard problems: One is the exterior-algebra based approach of Brand, Dell and Husfeldt (STOC'18) and Brand (ESA'19), the other is the one by Pratt (FOCS'19) and Brand and Pratt (submitted), based on a symbolic calculus of differential operators.<br \/>\r\n<br \/>\r\nBoth techniques will be gently introduced in the context of their flagship application problem: Detecting squarefree monomials in polynomials computed by arithmetic circuits, where they each yield the state-of-the-art in certain settings. I then proceed to show how these seemingly unrelated algorithmic techniques both arise from an underlying isomorphism of algebraic structures. This is of independent interest, and gives lower bounds on the symmetric rank of a specific symmetric tensor, namely the determinant of generic Hankel matrices, and extends recent work in commutative algebra (Shafiei 2015, J. Commut. Alg.).<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2770",
  "title": "Adventures in Monotone Complexity and TFNP ",
  "speaker": "Lukáš Folwarczný",
  "affiliation": "IM CAS",
  "date_from": "2019-11-15 13:30:00",
  "date_to": "2019-11-15 15:00:00",
  "place": "in IM, rear building, ground floor",
  "text": "In this talk, I present the main ideas from the paper Adventures in Monotone Complexity and TFNP&nbsp;by Mika Göös, Pritish Kamath, Robert Robere, and Dmitry Sokolov. The main focus of the talk will be on the relations between monotone computational models and communication complexity (going from Karchmer-Wigderson (formulas) and Razborov (circuits) to this paper (span programs)).<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2759",
  "title": "Presburger meets Cambridge Analytica",
  "speaker": "Martin Koutecký",
  "affiliation": "IUUK MFF UK",
  "date_from": "2019-11-01 13:30:00",
  "date_to": "2019-11-01 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "Cambridge Analytica is an infamous and now bankrupt (but sure to survive in some other way) company which helped manipulate elections all over the world (including the Brexit and Trump campaigns) through targeted advertising on social networks. We want to analyze such tasks and events from the perspective of computational complexity, asking questions such as: what is the cheapest bribery which makes my candidate win? what if opinion diffusion happens in the underlying social network? what if manipulation happens simultaneously by multiple agents? Answering these questions is helpful not only to a potential briber, but also to observers wishing to detect bribery or have meaningful measures of the (surprisingly elusive) notion of margin of victory.<br \/>\r\n<br \/>\r\nPresburger arithmetic (PrA) is the first-order theory of the natural numbers with addition, named in honor of Mojżesz Presburger who introduced it in 1929 and proved its decidability. While the questions posed above are hard in general, we show that when the number of candidates and\/or voter types is small, the problems can be formulated as model checking of short PrA sentences, and already Presburger's proof gives a fixed-parameter tractable algorithm. In this talk, I will present Cooper's algorithm from the 1970's which is faster than Presburger's original procedure. Still, many interesting questions remain open.<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2744",
  "title": "Beyond Natural Proofs",
  "speaker": "Jan Pich",
  "affiliation": "IM",
  "date_from": "2019-10-18 13:30:00",
  "date_to": "2019-10-18 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "Hardness magnification reduces major complexity separations to proving lower bounds for some natural problem Q against weak circuit models. Several recent works have established results of this form. In the most intriguing cases, the required lower bound is known for problems that appear to be significantly easier than Q, while Q itself is susceptible to lower bounds but these are not yet sufficient for magnification. In this work, we provide more examples of this phenomenon, and investigate the prospects of proving new lower bounds using this approach. In particular, we consider the following essential questions associated with the hardness magnification program:<br \/>\r\n<br \/>\r\n- Does hardness magnification avoid the natural proofs barrier of Razborov and Rudich?<br \/>\r\n- Can we adapt known lower bound techniques to establish the desired lower bound for Q?<br \/>\r\n<br \/>\r\nWe establish that some instantiations of hardness magnification overcome the natural proofs barrier in the following sense: slightly superlinear-size circuit lower bounds for certain versions of the minimum circuit size problem MCSP imply the non-existence of natural proofs. As a corollary of our result, we show that certain magnification theorems not only imply strong worst-case circuit lower bounds but also rule out the existence of efficient learning algorithms.<br \/>\r\n<br \/>\r\nHardness magnification might sidestep natural proofs, but we identify a source of difficulty when trying to adapt existing lower bound techniques to prove strong lower bounds via magnification. This is captured by a locality barrier: existing magnification theorems unconditionally show that the problems Q considered above admit highly efficient circuits extended with small fan-in oracle gates, while lower bound techniques against weak circuit models quite often easily extend to circuits containing such oracles. This explains why direct adaptations of certain lower bounds are unlikely to yield strong complexity separations via hardness magnification.<br \/>\r\n<br \/>\r\nThis is a joint work with Lijie Chen, Shuichi Hirahara, Igor C. Oliveira, Ninad Rajgopal and Rahul Santhanam."
}, {
  "entity_id": "2737",
  "title": "On the distribution of runners on a circle",
  "speaker": "Pavel Hrubes",
  "affiliation": "IM",
  "date_from": "2019-10-11 13:30:00",
  "date_to": "2019-10-11 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "I will discuss the following problem: consider runners on a circular track, running with constant speeds such that k of the speeds are distinct. Does it have to be the case that, at some point in time, their distribution on the circle is far from uniform? I will give an almost optimal solution, as a function of k. This has an interesting application to the distribution of complex arguments of roots of univariate polynomials, and the Real Tau Conjecture in arithmetic circuit complexity."
}, {
  "entity_id": "2731",
  "title": "Solving connectivity problems via basic Linear Algebra",
  "speaker": "Anish Mukherjee",
  "affiliation": "MFF UK",
  "date_from": "2019-10-04 13:30:00",
  "date_to": "2019-10-04 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "We consider some classical graph connectivity problems like reachability,<br \/>\r\nshortest path and disjoint paths in this talk. For the first two problems,<br \/>\r\nwe show efficient parallel (dynamic AC^0) algorithms in the dynamic model,<br \/>\r\nconfirming a conjecture of Patnaik and Immerman ’94 for directed<br \/>\r\nreachability. Recently, we have been able to extend this for batch updates<br \/>\r\nalso. For the optimization version of the disjoint paths problem, we show<br \/>\r\nefficient sequential and parallel algorithms in planar graphs where all the<br \/>\r\nterminals lie on a single face. This partly answers an open question of<br \/>\r\nColin De Verdière and Schrijver ’08. Interestingly the basic idea behind<br \/>\r\nthese algorithms is to compute some linear algebraic property of the matrix<br \/>\r\nassociated with the given graph, which I shall try to convey in this talk.<br \/>\r\n<br \/>\r\nBased on joint works with Samir Datta, Raghav Kulkarni, Siddharth Iyer,<br \/>\r\nThomas Schwentick, and Thomas Zeume.<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2715",
  "title": "Who needs category theory?",
  "speaker": "Yuri Gurevich",
  "affiliation": "University of Michigan",
  "date_from": "2019-09-13 13:30:00",
  "date_to": "2019-09-13 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "Mathematicians use category theory, at least some of them do. In fact category theory<br \/>\r\nis instrumental in some branches of mathematics, e.g. algebraic topology. But what<br \/>\r\nabout computer scientists or physicists? Do they need category theory?<br \/>\r\n<br \/>\r\nIf category theory is your hammer, some computing problems look like appropriate<br \/>\r\nnails. However the speaker was not impressed and remained skeptical about the use of<br \/>\r\ncategory theory in computer science. When he learned that the generally accepted<br \/>\r\nmathematical basis for topological quantum computing is sophisticated category theory,<br \/>\r\nhe proposed to his long-time collaborator Andreas Blass to \"decategorize\" topological<br \/>\r\nquantum computing.<br \/>\r\n<br \/>\r\nIt turned out, surprisingly, that category theory or something like it is necessary<br \/>\r\nfor topological quantum computing. Moreover the root cause of the necessity is not<br \/>\r\nspecific to topological quantum computing. There should be numerous other computing<br \/>\r\nproblems where something like category theory is necessary. Understanding the root<br \/>\r\ncause allowed us to simplify the mathematical basis for the topological quantum<br \/>\r\ncomputing and to decategorize it to the extent possible.<br \/>\r\n<br \/>\r\nIn the main part of the talk, without assuming any knowledge of category theory or<br \/>\r\nquantum computing, we illustrate, on a simplified example, why category theory or<br \/>\r\nsomething like it is necessary for topological quantum computing.<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2693",
  "title": "Exponential Separation between Quantum Communication and Logarithm of Approximate Rank",
  "speaker": "Makrand Sinha",
  "affiliation": "CWI Amsterdam",
  "date_from": "2019-06-07 13:30:00",
  "date_to": "2019-06-07 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "Chattopadhyay, Mande and Sherif (to appear in STOC 2019) recently<br \/>\r\nexhibited a total Boolean function, the sink function, that has polynomial<br \/>\r\napproximate rank and polynomial randomized communication complexity. This gives<br \/>\r\nan exponential separation between randomized communication complexity and<br \/>\r\nlogarithm of the approximate rank, refuting the log-approximate-rank conjecture.<br \/>\r\nWe show that even the quantum communication complexity of the sink function is<br \/>\r\npolynomial, thus also refuting the quantum log-approximate-rank conjecture.<br \/>\r\n<br \/>\r\nOur lower bound is based on the fooling distribution method introduced by Rao<br \/>\r\nand Sinha (Theory of Computing 2018) for the classical case and extended by<br \/>\r\nAnshu, Touchette, Yao and Yu (STOC 2017) for the quantum case. We also give a<br \/>\r\nnew proof of the classical lower bound using the fooling distribution method.<br \/>\r\n<br \/>\r\nJoint work with Ronald de Wolf."
}, {
  "entity_id": "2685",
  "title": "Finding a Nash Equilibrium Is No Easier Than Breaking Fiat-Shamir",
  "speaker": "Pavel Hubacek",
  "affiliation": "MFF UK",
  "date_from": "2019-05-24 13:30:00",
  "date_to": "2019-05-24 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "The Fiat-Shamir heuristic transforms a public-coin interactive proof into a non-interactive argument,<br \/>\r\nby replacing the verifier’s random coins with a cryptographic hash function that is applied to the<br \/>\r\nprotocol's transcript. Constructing hash functions for which this transformation is sound is a<br \/>\r\ncentral and long-standing open question in cryptography. We show that solving the End-Of-Metered-Line<br \/>\r\nproblem is no easier than breaking the soundness of the Fiat-Shamir transformation when applied to<br \/>\r\nthe sumcheck protocol. In particular, if the transformed protocol is sound, then any hard problem in<br \/>\r\n#P gives rise to a hard distribution in the class CLS. Since CLS is contained in PPAD for which the<br \/>\r\nproblem of finding a Nash equilibrium is complete, our results show existence of a distribution of<br \/>\r\nstrategic games for which it is not possible to find a Nash equilibrium in polynomial time.<br \/>\r\n<br \/>\r\nOur main technical contribution is a stateful incrementally verifiable procedure that, given a SAT<br \/>\r\ninstance over n variables, counts the number of satisfying assignments. This is accomplished via an<br \/>\r\nexponential sequence of small steps, each computable in time poly(n). Incremental verifiability means<br \/>\r\nthat each intermediate state includes a sumcheck-based proof of its correctness, and the proof can be<br \/>\r\nupdated and verified in time poly(n).<br \/>\r\n<br \/>\r\nJoint work with Arka Rai Choudhuri, Chethan Kamath, Krzysztof Pietrzak, Alon Rosen and Guy N.<br \/>\r\nRothblum.<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2678",
  "title": "Constant factor approximations to edit distance on far input pairs in nearly linear time",
  "speaker": "Michal Koucky",
  "affiliation": "MFF UK",
  "date_from": "2019-05-17 13:30:00",
  "date_to": "2019-05-17 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "We will present an algorithm that runs in time n^{1+eps} and computes a<br \/>\r\nconstant factor approximation to edit distance of two input strings, given that<br \/>\r\ntheir edit distance is at least n^{1-delta} for some delta&gt;0 dependening on eps&gt;0.<br \/>\r\nJoint work with Mike Saks."
}, {
  "entity_id": "2671",
  "title": "Lower bounds on balancing families",
  "speaker": "Pavel Hrubes",
  "affiliation": "IM CAS",
  "date_from": "2019-05-03 13:30:00",
  "date_to": "2019-05-03 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "A family of proper non-empty subsets S<sub>1<\/sub>, . . . , S<sub>k<\/sub> ⊂ [n] is called<br \/>\r\nbalancing if for every subset X ⊂ [n] of size n\/2, there is i ∈ [k] so that<br \/>\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |S<sub>i<\/sub> ∩ X| = |S<sub>i<\/sub>|\/2.<br \/>\r\nI will show that, for n even, the size of a balancing family must be at least<br \/>\r\nn(1-o(1))\/2. A similar reasoning can be applied to prove lower bounds on certain<br \/>\r\ntypes of depth-two circuits computing the majority function.&nbsp;<br \/>\r\n<br \/>\r\nJoint work with S.Ramamoorthy, A. Rao, and A. Yehudayoff."
}, {
  "entity_id": "2652",
  "title": "A separator theorem for hypergraphs and a CSP-SAT algorithm",
  "speaker": "Navid Talebanfard",
  "affiliation": "IM",
  "date_from": "2019-04-12 13:30:00",
  "date_to": "2019-04-12 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "I'll show how to remove a small number of edges from a uniform hypergraph of small vertex degree to break it<br \/>\r\ninto small connected components. I'll use it to give a CSP-SAT algorithm for CSPs with small variable frequency.<br \/>\r\n<br \/>\r\nThis is joint work with&nbsp;Vojtěch Rödl."
}, {
  "entity_id": "2638",
  "title": "Attribute-Based Encryption and Information-Theoretic Crypto",
  "speaker": "Hoeteck Wee",
  "affiliation": "CNRS and ENS",
  "date_from": "2019-03-29 13:30:00",
  "date_to": "2019-03-29 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "Can we encrypt data while enabling fine-grained access control, as is necessary to protect big, complex data? In this talk, we will survey how addressing this question led to new lower and upper bounds in information-theoretic cryptography and secret sharing, which in turn came from building new connections to communication complexity and private information-retrieval."
}, {
  "entity_id": "2622",
  "title": "Circuit lower bounds via non-negative rank",
  "speaker": "Pavel Hrubeš",
  "affiliation": "IM CAS",
  "date_from": "2019-03-15 13:30:00",
  "date_to": "2019-03-15 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "The non-negative rank of a matrix is a quantity which has found several applications in communication<br \/>\r\ncomplexity and extension complexity of polytopes. We will show that certain lower bounds on non-negative rank<br \/>\r\nimply, at least in principle, circuit lower bounds. With a Boolean function $f$ and $\\epsilon&gt;0$, we associate<br \/>\r\nan explicit matrix $M_\\epsilon(f)$ so that the circuit size of $f$ is at least the non-negative rank of<br \/>\r\n$M_{\\epsilon}(f)$, for $\\epsilon$ sufficiently small. We also discuss continuity properties of the<br \/>\r\nnon-negative rank. &nbsp;<br \/>\r\n<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2600",
  "title": "Stronger Lower Bounds for Online ORAM",
  "speaker": "Veronika Slivova",
  "affiliation": "MFF UK",
  "date_from": "2019-03-01 13:30:00",
  "date_to": "2019-03-01 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "Oblivious RAM (ORAM), introduced in the context of software protection<br \/>\r\nby Goldreich and Ostrovsky [JACM’96], aims at obfuscating the memory<br \/>\r\naccess pattern induced by a RAM computation. We will show that every<br \/>\r\nimplementation of Online Oblivious RAM has logarthmic overhead.<br \/>\r\n<br \/>\r\nJoint work with P. Hubacek, M. Koucky and K. Kral.<br \/>\r\n<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2587",
  "title": "Deterministic indeterminacy of CHSH-solving protocols",
  "speaker": "Dmitri Gavinsky",
  "affiliation": "IM",
  "date_from": "2019-02-15 13:30:00",
  "date_to": "2019-02-15 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "How unpredicatble is the behaviour of efficient entagled players in the CHSH game?<br \/>\r\nWe will discuss this question from both qualitative and quantitative point viewpoints."
}, {
  "entity_id": "2580",
  "title": "How to compute random Boolean function over the reals.",
  "speaker": "Pavel Hrubeš",
  "affiliation": "IM",
  "date_from": "2019-02-01 13:30:00",
  "date_to": "2019-02-01 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "We consider the problem of defining a Boolean function by means of a first-order formula over the reals. We discuss the connection of this problem with other questions in computational complexity. We also outline some bounds on the size of formulas computing a random Boolean function. &nbsp;<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2574",
  "title": "Entropy extractors for small zero-fixing sources, part III",
  "speaker": "Pavel Pudlák",
  "affiliation": "IM",
  "date_from": "2019-01-25 13:30:00",
  "date_to": "2019-01-25 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "I will finish the first construction by presenting the skeleton-fixing procedure and start the second construction."
}, {
  "entity_id": "2570",
  "title": "Entropy extractors for small zero fixing sources, part II",
  "speaker": "Pavel Pudlák",
  "affiliation": "IM ",
  "date_from": "2019-01-18 13:30:00",
  "date_to": "2019-01-18 15:00:00",
  "place": "in IM, rear building, ground floor<br \/>\r\n&nbsp; ",
  "text": "I will continue with the construction of an extractor for zero fixing sources of triple logarithmic size.<br \/>\r\n&nbsp;"
}, {
  "entity_id": "2566",
  "title": "Entropy extractors for small zero fixing sources",
  "speaker": "Pavel Pudlák",
  "affiliation": "IM",
  "date_from": "2019-01-11 13:30:00",
  "date_to": "2019-01-11 15:00:00",
  "place": "in IM, rear building, ground floor",
  "text": "A (k,n)-zero fixing source X is given by a subset S of [n] of size k. The source X produces 0-1 vectors that are zero outside of S each with probability 2^{-k}. An extractor for a (k,n)-zero fixing source is a mapping F:{0,1}^n\\to {0,1}^l such that F(X) is close to the uniform distribution on {0,1}^l. Such extractors are known for k down to log log n with l=k-O(1). In this talk we will show some constructions for k << log log n and some upper bounds on the amount of entropy that is possible to extract for small k.\r\n\r\nThese problems are closely connected with Ramsey theory.\r\n\r\nJoint work with Vojtěch Rodl.\r\n"
}, {
  "entity_id": "2556",
  "title": "The layer complexity of Arthur-Merlin-like communication",
  "speaker": "Dmitry Gavinsky",
  "affiliation": "IM CAS",
  "date_from": "2019-01-04 13:30:00",
  "date_to": "2019-01-04 15:00:00",
  "place": "in IM, rear building, ground floor ",
  "text": "In communication complexity the Arthur-Merlin (AM) model is the most natural one that allows both randomness\r\nand non-determinism. Presently we do not have any super-logarithmic lower bound for the AM-complexity of an\r\nexplicit function. Obtaining such a bound is a fundamental challenge to our understanding of communication\r\nphenomena. In this work we explore the gap between the known techniques and the complexity class AM.\r\n\r\nIn the first part we define a new natural class Small-advantage Layered Arthur-Merlin (SLAM) that have the\r\nfollowing properties:\r\n    - SLAM is (strictly) included in AM and includes all previously known sub-AM classes with non-trivial\r\nlower bounds.\r\n    - SLAM is qualitatively stronger than the union of those classes.\r\n    - SLAM is a subject to the discrepancy bound: in particular, the inner product function does not have an\r\nefficient SLAM-protocol.\r\n\r\nStructurally this can be summarised as\r\nSBP ∪ UAM ⊂ SLAM ⊆ AM ∩ PP.\r\n\r\nIn the second part we ask why proving a lower bound of ω(√n) on the MA-complexity of an explicit function\r\nseems to be difficult.\r\n\r\nBoth of these results are related to the notion of layer complexity, which is, informally, the number of\r\n“layers of non-determinism” used by a protocol. We believe that further investigation of this concept may\r\nlead to better understanding of the communication model AM and to non-trivial lower bounds against it.\r\n"
}]);

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-flex', {
    attrs: {
      "xs12": ""
    }
  }, _vm._l((_vm.programmes), function(programme, index) {
    return _c('v-card', {
      key: index,
      staticClass: "mx-0 my-2",
      attrs: {
        "width": "100%"
      }
    }, [_c('v-card-title', [_c('div', [_c('span', {
      staticClass: "subheading font-weight-bold  mx-0 mt-1"
    }, [_vm._v("\n         " + _vm._s(programme.title) + "\n       ")]), _vm._v(" "), _c('p', {
      staticClass: "orange--text text--darken-3 mt-1"
    }, [_vm._v(_vm._s(programme.speaker))]), _vm._v(" "), _c('p', {
      staticClass: "body-2 font-weight-regular ml-0  grey--text text--darken-2"
    }, [_vm._v(" " + _vm._s(programme.affiliation) + " ")]), _vm._v(" "), _c('p', {
      staticClass: "date pl-1 body-2 mt-1"
    }, [_vm._v(_vm._s(_vm._f("dateEU")(programme.date_from, 'dddd, DD.MMMM YYYY - HH:mm')) + " to \n         " + _vm._s(_vm._f("dateEU")(programme.date_to, 'HH:mm')) + " \n       ")]), _c('p', {
      staticClass: "date body-2 font-weight-regular pl-1  grey--text text--darken-2 "
    }, [_vm._v("\n       " + _vm._s(programme.place) + "\n       ")]), _vm._v(" "), (index == 0) ? _c('div', {
      staticClass: "justify body-2 font-weight-regular ml-0 mt-1 mr-2 black--text",
      domProps: {
        "innerHTML": _vm._s(programme.text)
      }
    }) : _c('vue-read-more-smooth', {
      attrs: {
        "text": "More!",
        "text-less": "Less!"
      }
    }, [_c('div', {
      staticClass: "justify body-2 font-weight-regular ml-0 mt-1 mr-2 black--text",
      domProps: {
        "innerHTML": _vm._s(programme.text)
      }
    })])], 1)])], 1)
  }), 1)
},staticRenderFns: []}

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-layout', {
    staticClass: "my-0 mx-1",
    attrs: {
      "row": "",
      "wrap": ""
    }
  }, [_c('v-flex', {
    attrs: {
      "xs12": ""
    }
  }, [_c('app-crumps', {
    attrs: {
      "crumps": _vm.crumps
    }
  })], 1), _vm._v(" "), _c('v-flex', {
    staticClass: "hidden-md-and-down grey lighten-2",
    attrs: {
      "lg1": "",
      "xl1": ""
    }
  }, [_c('app-select-year-seminars', {
    staticClass: "ml-5"
  })], 1), _vm._v(" "), _c('v-spacer', {
    staticClass: "hidden-md-and-down grey lighten-2"
  }), _vm._v(" "), _c('v-flex', {
    attrs: {
      "xs12": "",
      "sm12": "",
      "md12": "",
      "lg10": "",
      "xl10": ""
    }
  }, [_c('app-seminar-info', {
    attrs: {
      "item": _vm.seminar,
      "detail": _vm.detail
    }
  })], 1), _vm._v(" "), _c('v-flex', {
    staticClass: "hidden-lg-and-up mx-0",
    attrs: {
      "xl2": "",
      "md12": ""
    }
  }, [_c('app-select-year-seminars')], 1), _vm._v(" "), _c('app-programme', {
    attrs: {
      "entity_id": _vm.seminar.entity_id
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('app-seminar-page', {
    attrs: {
      "seminar": _vm.seminar
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(477)

/* template */
var __vue_template__ = __webpack_require__(491)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ })

});
//# sourceMappingURL=7.build.js.map