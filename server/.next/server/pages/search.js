(function() {
var exports = {};
exports.id = 45;
exports.ids = [45,754];
exports.modules = {

/***/ 7314:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7556);






var stringSimilarity = __webpack_require__(6443);

const defaultProps = {};

const index = ({
  searchText
}) => {
  if (searchText == null || searchText === '') {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
      style: "color:red",
      children: "Please enter some search text"
    });
  }

  let selectedTemp = [];
  Object.keys(_components_Layout_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* .breadCrumbDetails */ .x).forEach(element => {
    _components_Layout_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* .breadCrumbDetails */ .x[element].name = element;

    try {
      _components_Layout_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* .breadCrumbDetails */ .x[element].pathTemp = Object.values(_components_Layout_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* .breadCrumbDetails */ .x[element]['path'])[0];
    } catch (error) {
      _components_Layout_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* .breadCrumbDetails */ .x[element].pathTemp = "#";
    }

    _components_Layout_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* .breadCrumbDetails */ .x[element].similarity = stringSimilarity.compareTwoStrings(searchText, element);

    if (stringSimilarity.compareTwoStrings(searchText, element) > 0) {
      selectedTemp.push(_components_Layout_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* .breadCrumbDetails */ .x[element]);
    }
  });
  selectedTemp.sort((a, b) => a.similarity - b.similarity);
  selectedTemp.reverse();
  const {
    0: selectedItems,
    1: setSelectedItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedTemp);
  console.log(selectedItems.length);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container clearfix",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row gutter-40 col-mb-80",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "postcontent col-lg-12",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            children: ["Searched Pages for ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                children: searchText
              })
            })]
          }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container clearfix",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row gutter-40 col-mb-80",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "postcontent col-lg-12",
          children: selectedItems !== null && selectedItems !== undefined ? selectedItems.map(item => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                children: [item.name, " "]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                  href: item.pathTemp,
                  children: [" Read more ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "icon-line-chevron-right"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider divider-border divider-right"
              })]
            });
          }) : ""
        })
      })
    })]
  });
};

index.defaultProps = defaultProps; // #endregion

index.getInitialProps = async ({
  query
}) => {
  const {
    searchText
  } = query;
  return {
    searchText
  };
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 6443:
/***/ (function(module) {

"use strict";
module.exports = require("string-similarity");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [556], function() { return __webpack_exec__(7314); });
module.exports = __webpack_exports__;

})();