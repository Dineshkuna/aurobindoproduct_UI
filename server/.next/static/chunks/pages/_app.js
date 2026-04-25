(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./components/Layout/Footer.jsx":
/*!**************************************!*\
  !*** ./components/Layout/Footer.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Achievers IT\\aurobindoproduct_UI\\client\\components\\Layout\\Footer.jsx",
    _this = undefined,
    _s = $RefreshSig$();



var propTypes = {};
var defaultProps = {};

var Footer = function Footer() {
  _s();

  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies)(['cookie-consent']),
      _useCookies2 = (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2];

  var acceptCookie = function acceptCookie(e) {
    setCookie("cookie-consent", true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      id: "footer",
      className: "dark",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "copyrights",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-5",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "copyright-area-content",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: "\xA9 Copyright 2022 Aurobindo Pharma. All Rights Reserved."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "d-flex justify-content-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "https://x.com/aurobindoglobal",
                  className: "social-icon si-small si-twitter",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "icon-twitter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "https://www.linkedin.com/company/aurobindopharma/",
                  className: "social-icon si-small si-gplus",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "icon-linkedin2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "copyright-area-content",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "text-right",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "/privacy-policy",
                    children: "Privacy Policy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "copyline",
                    children: "|"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "/site-map",
                    children: "Site Map"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "gotoTop",
      className: "icon-angle-up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modal fade bs-example-modal-fs",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "fsModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modal-dialog modal-fullscreen",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-header",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "popup-close btn-sm",
              "data-bs-dismiss": "modal",
              "aria-hidden": "true",
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/img/close.png",
                alt: "Aurobindo close"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 105
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "search-overlay-form",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                action: "/search",
                method: "GET",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  className: "input-search",
                  id: "searchText",
                  name: "searchText",
                  placeholder: "Enter text to search"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "icon-line-search"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, _this), cookies.length === 0 || cookies['cookie-consent'] == undefined || cookies['cookie-consent'] != "true" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "cookie-notice",
      className: "text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "cookie-notice-container",
        style: {
          "color": "#fff"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          id: "cn-notice-text",
          className: "cn-text-container",
          children: "This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          id: "cn-notice-buttons",
          className: "cn-buttons-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            onClick: acceptCookie,
            id: "cn-accept-cookie",
            "data-cookie-set": "accept",
            className: "cn-set-cookie cn-button bootstrap button",
            "aria-label": "I Accept",
            children: "I Accept"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 8
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "http://3.232.144.124:8090/privacy-policy/#cookies",
            target: "_blank",
            id: "cn-more-info",
            className: "cn-more-info cn-button bootstrap button",
            "aria-label": "Cookie policy",
            children: "Cookie policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 8
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          onClick: acceptCookie,
          id: "cn-close-notice",
          "data-cookie-set": "accept",
          className: "cn-close-icon button",
          "aria-label": "I Accept"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 6
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 112
    }, _this) : ""]
  }, void 0, true);
};

_s(Footer, "CNPRx2yWTCxM3rIcIUTwJbky37I=", false, function () {
  return [react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies];
});

_c = Footer;
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/Layout/Innerbanner.jsx":
/*!*******************************************!*\
  !*** ./components/Layout/Innerbanner.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumbs */ "./components/Layout/breadcrumbs.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Achievers IT\\aurobindoproduct_UI\\client\\components\\Layout\\Innerbanner.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var propTypes = {};
var defaultProps = {};

var Innerbanner = function Innerbanner() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var rawRoute = router.asPath.split("/");
  console.log("rawRoute", rawRoute);
  var pageName = rawRoute[rawRoute.length - 1];

  if (pageName.includes('?')) {
    pageName = pageName.split('?')[0];
  } else if (pageName.includes('#')) {
    pageName = pageName.split('#')[0];
  }

  console.log(pageName);
  console.log("pageName12", _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__.breadCrumbDetails[pageName]);
  var _breadCrumbDetails$pa = _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__.breadCrumbDetails[pageName],
      bimage = _breadCrumbDetails$pa.bimage,
      bTitle = _breadCrumbDetails$pa.bTitle,
      bcontent = _breadCrumbDetails$pa.bcontent; // const { bimage, bTitle, bcontent } = breadCrumbDetails.default;

  var fallBackPage = ["business-overview", "sdfg", "fgh"]; // console.log('routerrouterrouter', pageName);

  var generateBreadCrumbTitle = function generateBreadCrumbTitle(ind, name) {
    var nameToDisplay = !ind ? 'home' : name;
    console.log('Breadcrumb', nameToDisplay);

    if (nameToDisplay == 'rd') {
      return 'R&D';
    } else if (nameToDisplay == 'api') {
      return 'API';
    } else if (nameToDisplay == 'mr-k-raghunathan') {
      return 'Mr. K. Ragunathan';
    } else if (nameToDisplay == 'mr-k-nityananda-reddy') {
      return 'Mr. K. Nityananda Reddy';
    } else if (nameToDisplay == 'mr-p-v-ram-prasad-reddy') {
      return 'Mr. P. V Ram Prasad Reddy';
    } else if (nameToDisplay == 'dr-m-sivakumaran') {
      return 'Dr. M. Sivakumaran';
    } else if (nameToDisplay == 'mr-m-madan-mohan-reddy') {
      return 'Mr. M. Madan Mohan Reddy';
    } else if (nameToDisplay == 'mr-p-sarath-chandra-reddy') {
      return 'Mr. P. Sarath Chandra Reddy';
    } else if (nameToDisplay == 'dr-(mrs)-avnit-bimal-singh') {
      return 'Dr. (Mrs.) Avnit Bimal Singh';
    } else if (nameToDisplay == 'mrs-savita-mahajan') {
      return 'Mrs. Savita Mahajan';
    } else if (nameToDisplay == 'mr-girish-paman-vanvari') {
      return 'Mr. Girish Paman Vanvari';
    } else if (nameToDisplay == 'hr-mission-and-vision') {
      return 'HR Mission and Vision';
    } else if (nameToDisplay == '2021-2') {
      return '2021';
    } else if (nameToDisplay == '2019-2020') {
      return '2019-2020';
    } else if (nameToDisplay == '670-2') {
      return '2017-2018';
    } else if (nameToDisplay == '2014-16') {
      return '2014 -2016';
    } else if (nameToDisplay == '2013-2') {
      return '2010-2011';
    } else if (nameToDisplay == '2009-12') {
      return '2007-2008';
    } else if (nameToDisplay == '2006-08') {
      return '2005-2006';
    } else if (nameToDisplay == '1992-2006') {
      return '2004-2005';
    } else if (nameToDisplay == '2003-2004') {
      return '2003-2004';
    } else if (nameToDisplay == '2001-2002-2') {
      return '2001-2002';
    } else if (nameToDisplay == '1999-2000') {
      return '1999-2000';
    } else if (nameToDisplay == '1997-1998') {
      return '1997-1998';
    } else if (nameToDisplay == '1994-1995') {
      return '1994-1995';
    } else if (nameToDisplay == '1992-1993') {
      return '1992-1993';
    } else if (nameToDisplay == '1988-189') {
      return '1988-1989';
    } else if (nameToDisplay == '1988-189') {
      return '1988-1989';
    } else if (nameToDisplay == '1986-2') {
      return '1986';
    } else if (nameToDisplay.startsWith("member?member=")) {
      var memberName = nameToDisplay.split("=")[1];
      return "Member / " + memberName.split("-").join(" ");
    } else if (nameToDisplay.startsWith("search?searchText=")) {
      var _memberName = nameToDisplay.split("=")[1];
      return "Search / " + _memberName;
    } else {
      console.log(nameToDisplay + "******");
      return nameToDisplay.split("-").join(" ");
    }
  };

  var navigateOnClick = function navigateOnClick(selectedPath) {
    var pathToNavigate = selectedPath === "" ? "/" : _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__.breadCrumbDetails[selectedPath].path[selectedPath];
    router.push(pathToNavigate);
  };

  var generateHref = function generateHref(i, name) {
    console.log('Path name-1', i, name);
    var path = "/";

    if (!i) {
      path = "/";
    } else if (i === rawRoute.length - 1) {
      path = router.asPath;
    } else {
      if (typeof _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__.breadCrumbDetails[pageName].path[name] !== "undefined") {
        path = _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__.breadCrumbDetails[pageName].path[name];
      }
    }

    console.log('Path itaration', i, path);
    return path;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      id: "page-title",
      className: "page-title-parallax page-title-dark",
      style: {
        backgroundImage: "url(".concat(bimage, ")")
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container clearfix",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          dangerouslySetInnerHTML: {
            __html: bTitle
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          dangerouslySetInnerHTML: {
            __html: bcontent
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
          className: "breadcrumb",
          children: rawRoute.map(function (name, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "breadcrumb-item ".concat(i === rawRoute.length - 1 ? 'active' : ''),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: generateHref(i, name),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "".concat(i === rawRoute.length - 1 ? 'navactive' : ''),
                  children: generateBreadCrumbTitle(i, name)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 8
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(Innerbanner, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Innerbanner;
Innerbanner.propTypes = propTypes;
Innerbanner.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Innerbanner);

var _c;

$RefreshReg$(_c, "Innerbanner");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/Layout/Layout.jsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar */ "./components/Layout/NavBar.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Layout/Footer.jsx");
/* harmony import */ var _Innerbanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Innerbanner */ "./components/Layout/Innerbanner.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Achievers IT\\aurobindoproduct_UI\\client\\components\\Layout\\Layout.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var propTypes = {};
var defaultProps = {};

var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  console.log("/////////////////////");
  console.log('dfghjk', router, children, "===");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "wrapper",
      className: "clearfix",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, _this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Layout, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = Layout;
Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/Layout/NavBar.jsx":
/*!**************************************!*\
  !*** ./components/Layout/NavBar.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Achievers IT\\aurobindoproduct_UI\\client\\components\\Layout\\NavBar.jsx",
    _this = undefined;




var propTypes = {};
var defaultProps = {};

var NavBar = function NavBar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      id: "header",
      className: "full-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "header-wrap",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "header-row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              id: "logo",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "/",
                className: "standard-logo",
                "data-dark-logo": "/img/aurobindo-logo.png",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "/img/aurobindo-logo.png",
                  alt: "Aurobindo Logo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 9
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 8
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 10
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              id: "primary-menu-trigger",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                className: "svg-trigger",
                viewBox: "0 0 100 100",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 59
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "m 30,50 h 40"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 178
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 208
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 8
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 7
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
              className: "primary-menu",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                className: "menu-container",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "menu-item",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "menu-link",
                    href: "/product-list",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      children: "Products"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 55
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 9
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 8
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 28
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 7
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 6
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 4
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "header-wrap-clone"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }, _this);
};

_c = NavBar;
NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/Layout/breadcrumbs.js":
/*!******************************************!*\
  !*** ./components/Layout/breadcrumbs.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breadCrumbDetails": function() { return /* binding */ breadCrumbDetails; }
/* harmony export */ });
/* harmony import */ var C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _breadCrumbDetails;

var breadCrumbDetails = (_breadCrumbDetails = {
  "default": {
    bimage: "/img/banners/Investors-Banner-Img.jpg",
    bTitle: "DELIVERING SUSTAINED GROWTH",
    bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do"
  },
  "search": {
    bimage: "/img/banners/Investors-Banner-Img.jpg",
    bTitle: "DELIVERING SUSTAINED GROWTH",
    bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do"
  },
  "google-map": {
    bimage: "/img/banners/Investors-Banner-Img.jpg",
    bTitle: "DELIVERING SUSTAINED GROWTH",
    bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do"
  },
  "about-us": {
    bimage: "/img/banners/aboutbanner.png",
    bTitle: "DELIVERING SUSTAINED GROWTH",
    bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
    path: {
      "about-us": "/about-us"
    }
  },
  "at-a-glance": {
    bimage: "/img/banners/Investors-Banner-Img.jpg",
    bTitle: "DELIVERING SUSTAINED GROWTH",
    bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
    path: {
      "at-a-glance": "/about-us/at-a-glance/business-overview",
      "about-us": "/about-us"
    }
  },
  "business-overview": {
    bimage: "/img/banners/aboutbanner.png",
    bTitle: "DELIVERING SUSTAINED GROWTH",
    bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
    path: {
      "at-a-glance": "/about-us/at-a-glance/business-overview",
      "about-us": "/about-us"
    }
  },
  "timeline-and-history": {
    bimage: "/img/banners/aboutbanner.png",
    bTitle: "DELIVERING SUSTAINED GROWTH",
    bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
    path: {
      "at-a-glance": "/about-us/at-a-glance/business-overview",
      "about-us": "/about-us"
    }
  },
  "global-operations-map": {
    bimage: "/img/banners/aboutbanner.png",
    bTitle: "DELIVERING SUSTAINED GROWTH",
    bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
    path: {
      "at-a-glance": "/about-us/at-a-glance/business-overview",
      "about-us": "/about-us"
    }
  }
}, (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "google-map", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "at-a-glance": "/about-us/at-a-glance/business-overview",
    "about-us": "/about-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "business-units", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "business-units": "/about-us/business-units/formulations",
    "about-us": "/about-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "formulations", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "business-units": "/about-us/business-units/formulations",
    "about-us": "/about-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "custom-synthesis", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "business-units": "/about-us/business-units/formulations",
    "about-us": "/about-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "peptides", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "business-units": "/about-us/business-units/formulations",
    "about-us": "/about-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "aurozymes", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "business-units": "/about-us/business-units/formulations",
    "about-us": "/about-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "rd", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "business-units": "/about-us/business-units/formulations",
    "about-us": "/about-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "api", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "business-units": "/about-us/business-units/formulations",
    "about-us": "/about-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "corporate-governance", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are bringing excellence in all that <br/>we do diligently and sustainably",
  path: {
    "about-us": "/about-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "board-of-directors", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "board-committees", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "governance-policies", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "sustainability", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are bringing excellence in all that <br/> we do diligently and sustainably",
  path: {
    "sustainability": "/sustainability"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "social-accountability-standards", {
  bimage: "/img/banners/Social-Accountability-Standards-banner.jpg",
  bTitle: "PROGRESS TOWARDS ADOPTION OF <br/> SOCIAL COMPLIANCE STANDARDS <br/> IN LINE WITH OECD GUIDELINES",
  bcontent: "",
  path: {
    "sustainability": "/sustainability"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "our-commitment", {
  bimage: "/img/banners/sustainability-img.png",
  bTitle: "A BLEND FOR STRATEGIC AND RESPONSIVE CSR <br/> FOR SUSTAINABLE DEVELOPMENT",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "our-commitment": "/sustainability/our-commitment/csr-policy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "csr-policy", {
  bimage: "/img/banners/13.jpg",
  bTitle: "A BLEND FOR STRATEGIC AND RESPONSIVE CSR <br/> FOR SUSTAINABLE DEVELOPMENT",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "our-commitment": "/sustainability/our-commitment/csr-policy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "annual-action-plan", {
  bimage: "/img/banners/14.jpg",
  bTitle: "AUROBINDO IMPACTING LIVES AND <br/> LIVELIHOODS",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "our-commitment": "/sustainability/our-commitment/csr-policy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "csr-committee", {
  bimage: "/img/banners/4.jpg",
  bTitle: "DRIVING CSR TOWARDS <br/> SUSTAINABILITY",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "our-commitment": "/sustainability/our-commitment/csr-policy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "key-message", {
  bimage: "/img/banners/15.jpg",
  bTitle: "WE CULTIVATE EMPLOYEES TOWARDS <br/>  CSR CULTURE",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "our-commitment": "/sustainability/our-commitment/csr-policy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "focus-areas", {
  bimage: "/img/banners/csr-banner2.jpg",
  bTitle: "ALIGNING CSR <br/>  WITH STATE GOALS AND SDGS",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "our-commitment": "/sustainability/our-commitment/csr-policy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "implementing-partners", {
  bimage: "/img/banners/csr-banner3.jpg",
  bTitle: "COMMUNITIES BONDING THROUGH <br/> AUROBINDO CSR",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "our-commitment": "/sustainability/our-commitment/csr-policy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "flagship-programs", {
  bimage: "/img/banners/csr-banner5.jpg",
  bTitle: "AUROBINDO CONSISTENT DEEDS FOR <br/> COMMUNITY NEEDS",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "our-commitment": "/sustainability/our-commitment/csr-policy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "reports", {
  bimage: "/img/banners/3.jpg",
  bTitle: "AUROBINDO CSR TRACTION FOR <br/> BUSINESS EXCELLENCE",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "reports": "/sustainability/reports/annual-csr-report"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "annual-csr-report", {
  bimage: "/img/banners/sustainability-img.png",
  bTitle: "SHAPING HOLISTIC COMMUNITY WELL-BEING",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "sustainability": "/sustainability",
    "reports": "/sustainability/reports/annual-csr-report"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "csr-publications", {
  bimage: "/img/banners/20.jpg",
  bTitle: "WE CONSTANTLY LISTEN TO <br/> COMMUNITY VOICES",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "reports": "/sustainability/reports/annual-csr-report"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "resources", {
  bimage: "/img/banners/csr-banner4.jpg",
  bTitle: "SOCIAL INVESTMENT LEADS TO <br/> AUROBINDO'S SUSTAINABLE BUSINESS",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "reports": "/sustainability/reports/annual-csr-report"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "stakeholder-reports", {
  bimage: "/img/banners/5.jpg",
  bTitle: "RECIPE FOR OUR CSR SUCCESS IS <br/> PASSION AND COMMITMENT",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "reports": "/sustainability/reports/annual-csr-report"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "impact-assessment", {
  bimage: "/img/banners/Impact-Assessment-Reports-Banner1.jpg",
  bTitle: "WE CONSTANTLY LISTEN TO <br/> COMMUNITY VOICES",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "reports": "/sustainability/reports/annual-csr-report"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "investors", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/> and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "testimonials", {
  bimage: "/img/banners/17.jpg",
  bTitle: "CONVERTING CHANCES, CHALLENGES AND <br/> OPPORTUNITIES INTO CSR POSSIBILITIES",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "testimonials": "/sustainability/testimonials/awards-recognition"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "awards-recognition", {
  bimage: "/img/banners/17.jpg",
  bTitle: "CONVERTING CHANCES, CHALLENGES AND <br/> OPPORTUNITIES INTO CSR POSSIBILITIES",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "testimonials": "/sustainability/testimonials/awards-recognition"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "documentaries", {
  bimage: "/img/banners/csr-banner1.jpg",
  bTitle: "CONVERTING FELT NEEDS IN TO MEANINGFUL <br/> ACTIONS IS OUR CSR SPIRIT",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "testimonials": "/sustainability/testimonials/awards-recognition"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "media-news", {
  bimage: "/img/banners/6.jpg",
  bTitle: "OUR CSR FOLLOWS OUTPUT-OUTCOME-IMPACT <br/> BASED APPROACH",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "testimonials": "/sustainability/testimonials/awards-recognition"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "gallery", {
  bimage: "/img/banners/5.jpg",
  bTitle: "PROPELLING SOCIAL CHANGE THROUGH <br/> INNOVATIVE CSR",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "testimonials": "/sustainability/testimonials/awards-recognition"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "beneficiaries-stories", {
  bimage: "/img/banners/Beneficiaries-Stories-Banner.jpg",
  bTitle: "WE CONSTANTLY LISTEN TO <br/> COMMUNITY VOICES",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "testimonials": "/sustainability/testimonials/awards-recognition"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "aurobindo-foundation", {
  bimage: "/img/banners/csr-banner.jpg",
  bTitle: "AUROBINDO REMAINS TO BE <br/> A CSR EPITOME",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "aurobindo-foundation": "/sustainability/aurobindo-foundation/about-apf"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "about-apf", {
  bimage: "/img/banners/csr-banner.jpg",
  bTitle: "AUROBINDO REMAINS TO BE <br/> A CSR EPITOME",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "aurobindo-foundation": "/sustainability/aurobindo-foundation/about-apf"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "our-metamorphosis", {
  bimage: "/img/banners/3.jpg",
  bTitle: "CSR METAMORPHOSIS THROUGH AUROBINDO <br/> RURAL INNOVATIONS",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "aurobindo-foundation": "/sustainability/aurobindo-foundation/about-apf"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "our-community-outreaches", {
  bimage: "/img/banners/16.jpg",
  bTitle: "EXPANDING CSR SPHERE OF INFLUENCE",
  bcontent: "",
  path: {
    "sustainability": "/sustainability",
    "aurobindo-foundation": "/sustainability/aurobindo-foundation/about-apf"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "access-to-healthcare", {
  bimage: "/img/banners/sustainability-img.png",
  bTitle: "SHAPING HOLISTIC COMMUNITY WELL-BEING",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "sustainability": "/sustainability"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "pepfar-program", {
  bimage: "/img/banners/sustainability-img.png",
  bTitle: "SHAPING HOLISTIC COMMUNITY WELL-BEING",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "sustainability": "/sustainability",
    "access-to-healthcare": "/sustainability/access-to-healthcare"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "sustainability-key-highlights", {
  bimage: "/img/sustainability-keyhighlights/environ-banner.jpg",
  bTitle: "SUSTAINABILITY AT AUROBINDO PHARMA",
  bcontent: "Committed to a Healthier Ecosystem",
  path: {
    "sustainability": "/sustainability",
    "sustainability-key-highlights": "/sustainability/sustainability-key-highlights"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "environment", {
  bimage: "/img/sustainability-keyhighlights/environ-banner.jpg",
  bTitle: "SHAPING HOLISTIC COMMUNITY WELL-BEING",
  bcontent: "We are diligently and sustainably achieving <br/>excellence in all that we do",
  path: {
    "sustainability": "/sustainability",
    "sustainability-key-highlights": "/sustainability/sustainability-key-highlights"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "social", {
  bimage: "/img/sustainability-keyhighlights/environ-banner.jpg",
  bTitle: "SUSTAINABILITY AT AUROBINDO PHARMA",
  bcontent: "Committed to a Healthier Ecosystem",
  path: {
    "sustainability": "/sustainability",
    "sustainability-key-highlights": "/sustainability/sustainability-key-highlights"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "governance", {
  bimage: "/img/sustainability-keyhighlights/environ-banner.jpg",
  bTitle: "COMMITTED TO A HEALTHIER ECOSYSTEM",
  bcontent: "We are committed to providing affordable healthcare and <br/>sustainably achieving excellence in all that we do",
  path: {
    "sustainability": "/sustainability",
    "sustainability-key-highlights": "/sustainability/sustainability-key-highlights"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "report-2020-2021", {
  bimage: "/img/sustainability-keyhighlights/Report-innerbanner.jpg",
  bTitle: "SUSTAINABILITY REPORT 2020-2021",
  bcontent: "We are committed to providing affordable healthcare and <br/>sustainably achieving excellence in all that we do",
  path: {
    "sustainability": "/sustainability",
    "sustainability-key-highlights": "/sustainability/sustainability-key-highlights"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "community", {
  bimage: "/img/banners/sustainability-img.png",
  bTitle: "SHAPING HOLISTIC COMMUNITY WELL-BEING",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "sustainability": "/sustainability"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "investors", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "results-reports-presentations", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "results-announcements", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "annual-reports", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "team", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are bringing excellence in all that we do diligently and sustainably",
  path: {
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "member", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are bringing excellence in all that we do diligently and sustainably",
  path: {
    "member": "/team/[member]",
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "investor-presentations", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "conference-call-transcripts", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "financials-subsidiaries", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "credit-rating", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "disclosure-of-events-or-information", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "related-party-transactions", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "annual-returns", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "annual-secretarial-compliance-report", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "results-announcements", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "results-reports-presentations": "/results-reports-presentations/results-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "shareholder-information", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "shareholder-information": "/shareholder-information/shareholder-structure"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "shareholder-structure", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "shareholder-information": "/shareholder-information/shareholder-structure"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "share-performance", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "shareholder-information": "/shareholder-information/shareholder-structure"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "financial-highlights", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "shareholder-information": "/shareholder-information/shareholder-structure"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "notice-of-board-meeting", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "shareholder-information": "/shareholder-information/shareholder-structure"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "general-meetings", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "shareholder-information": "/shareholder-information/shareholder-structure"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "dividend-records", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "shareholder-information": "/shareholder-information/shareholder-structure"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "scheme-of-arrangements", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "shareholder-information": "/shareholder-information/shareholder-structure"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "unpaid-dividend-account-details", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "shareholder-information": "/shareholder-information/shareholder-structure"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "registrar-and-share-transfer-agent", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "shareholder-information": "/shareholder-information/shareholder-structure"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "general", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "shareholder-information": "/shareholder-information/shareholder-structure"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "corporate-governance", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "corporate-governance": "/investors/corporate-governance"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "board-of-directors", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/>excellence in all that we do",
  path: {
    "investors": "/investors",
    "corporate-governance": "/investors/corporate-governance"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "board-committees", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/>excellence in all that we do",
  path: {
    "investors": "/investors",
    "corporate-governance": "/investors/corporate-governance"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "governance-policies", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "investors": "/investors",
    "corporate-governance": "/investors/corporate-governance"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "code-of-conduct", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "corporate-governance": "/investors/corporate-governance"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "code-of-practices-and-procedures-for-fair-disclosure", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "corporate-governance": "/investors/corporate-governance"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "appointment-and-resignation-of-directors", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "corporate-governance": "/investors/corporate-governance"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "ir-contacts", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "ir-contacts": "/ir-contacts/phone-numbers-email-addresses"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "phone-numbers-email-addresses", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "ir-contacts": "/ir-contacts/phone-numbers-email-addresses"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "media", {
  bimage: "/img/banners/Media-Banner-Img.jpg",
  bTitle: "REINFORCING A CULTURE OF OWNERSHIP",
  bcontent: "Focus on innovative science in key therapy areas <br/> and inorganic growth",
  path: {
    "media": "/media"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "press-releases", {
  bimage: "/img/banners/Media-Banner-Img.jpg",
  bTitle: "REINFORCING A CULTURE OF OWNERSHIP",
  bcontent: "Focus on innovative science in key therapy areas <br/> and inorganic growth",
  path: {
    "media": "/media",
    "press-releases": "/media/press-releases/corporate-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "corporate-announcements", {
  bimage: "/img/banners/Media-Banner-Img1.jpg",
  bTitle: "REINFORCING A CULTURE OF OWNERSHIP",
  bcontent: "Focus on innovative science in key therapy areas <br/> and inorganic growth",
  path: {
    "media": "/media",
    "press-releases": "/media/press-releases/corporate-announcements"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "media-kit", {
  bimage: "/img/banners/Media-Banner-Img.jpg",
  bTitle: "REINFORCING A CULTURE OF OWNERSHIP",
  bcontent: "Focus on innovative science in key therapy areas <br/> and inorganic growth",
  path: {
    "media": "/media",
    "media-kit": "/media/media-kit/fact-sheet"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "fact-sheet", {
  bimage: "/img/banners/Media-Banner-Img1.jpg",
  bTitle: "REINFORCING A CULTURE OF OWNERSHIP",
  bcontent: "Focus on innovative science in key therapy areas <br/> and inorganic growth",
  path: {
    "media": "/media",
    "media-kit": "/media/media-kit/fact-sheet"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "videos", {
  bimage: "/img/banners/Media-Banner-Img1.jpg",
  bTitle: "REINFORCING A CULTURE OF OWNERSHIP",
  bcontent: "Focus on innovative science in key therapy areas <br/> and inorganic growth",
  path: {
    "media": "/media",
    "media-kit": "/media/media-kit/fact-sheet"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "official-logos", {
  bimage: "/img/banners/Media-Banner-Img1.jpg",
  bTitle: "REINFORCING A CULTURE OF OWNERSHIP",
  bcontent: "Focus on innovative science in key therapy areas <br/> and inorganic growth",
  path: {
    "media": "/media",
    "media-kit": "/media/media-kit/fact-sheet"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "careers", {
  bimage: "/img/banners/Careers-Banner-Img2.jpg",
  bTitle: "DRIVING A PEOPLE FOCUSED CULTURE",
  bcontent: "Ensure effective organization, leadership, <br/> talent management and recruitment",
  path: {
    "careers": "/careers"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "hr-mission-and-vision", {
  bimage: "/img/banners/Careers-Banner-Img.jpg",
  bTitle: "DRIVING A PEOPLE FOCUSED CULTURE",
  bcontent: "Ensure effective organization, leadership, <br/> talent management and recruitment",
  path: {
    "careers": "/careers"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "contact-us", {
  bimage: "/img/banners/Contact-Banner-Img44.jpg",
  bTitle: "BUILDING THE FUTURE",
  bcontent: "We value your feedback as we are committed <br/> to continuously improving our products and services",
  path: {
    "contact-us": "/contact-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "group-division-offices", {
  bimage: "/img/banners/Contact-Banner-Img44.jpg",
  bTitle: "BUILDING THE FUTURE",
  bcontent: "We value your feedback as we are committed <br/> to continuously improving our products and services",
  path: {
    "contact-us": "/contact-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "general-inquiries", {
  bimage: "/img/banners/Contact-Banner-Img44.jpg",
  bTitle: "BUILDING THE FUTURE",
  bcontent: "We value your feedback as we are committed <br/> to continuously improving our products and services",
  path: {
    "contact-us": "/contact-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "adverse-event-reporting", {
  bimage: "/img/banners/Contact-Banner-Img44.jpg",
  bTitle: "BUILDING THE FUTURE",
  bcontent: "We value your feedback as we are committed <br/> to continuously improving our products and services",
  path: {
    "contact-us": "/contact-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "enquiry", {
  bimage: "/img/banners/Contact-Banner-Img44.jpg",
  bTitle: "BUILDING THE FUTURE",
  bcontent: "We value your feedback as we are committed <br/> to continuously improving our products and services",
  path: {
    "contact-us": "/contact-us"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "privacy-policy", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are bringing excellence in all that <br/> we do diligently and sustainably",
  path: {
    "privacy-policy": "/privacy-policy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "site-map", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are bringing excellence in all that <br/> we do diligently and sustainably",
  path: {
    "site-map": "/site-map"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "404", {
  bimage: "/img/banners/Careers-Banner-Img2.jpg",
  bTitle: "BUILDING THE FUTURE",
  bcontent: "We value your feedback as we are committed <br/> to continuously improving our products and services",
  path: {}
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "500", {
  bimage: "/img/banners/Careers-Banner-Img2.jpg",
  bTitle: "BUILDING THE FUTURE",
  bcontent: "We value your feedback as we are committed <br/> to continuously improving our products and services",
  path: {}
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "our-commitment", {
  bimage: "/img/banners/sustainability-img.png",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "sustainability": "/sustainability",
    "our-commitment": "/sustainability/our-commitment"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "aurobindo-foundation", {
  bimage: "/img/banners/sustainability-img.png",
  bTitle: "SHAPING HOLISTIC COMMUNITY WELL-BEING",
  bcontent: "We are diligently and sustainably achieving <br/>excellence in all that we do",
  path: {
    "sustainability": "/sustainability",
    "aurobindo-foundation": "/sustainability/aurobindo-foundation"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "annual-action-plan", {
  bimage: "/img/banners/sustainability-img.png",
  bTitle: "SHAPING HOLISTIC COMMUNITY WELL-BEING",
  bcontent: "We are diligently and sustainably achieving <br/>excellence in all that we do",
  path: {
    "sustainability": "/sustainability",
    "annual-action-plan": "/sustainability/annual-action-plan"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "csrgallery", {
  bimage: "/img/banners/sustainability-img.png",
  bTitle: "SHAPING HOLISTIC COMMUNITY WELL-BEING",
  bcontent: "We are diligently and sustainably achieving <br/>excellence in all that we do",
  path: {
    "sustainability": "/sustainability",
    "csrgallery": "/sustainability/csrgallery"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "mr-k-ragunathan", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "mrkragunathan", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "2021-2", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "2021-2": "/announcement/2021-2"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "2019-2020", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "2019-2020": "/announcement/2019-2020"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "2014-16", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "2014-16": "/announcement/2014-16"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "2013-2", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "2013-2": "/announcement/2013-2"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "2009-12", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "2009-12": "/announcement/2009-12"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "2006-08", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "2006-08": "/announcement/2006-08"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "2003-2004", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "2003-2004": "/announcement/2003-2004"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "2001-2002-2", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "2001-2002-2": "/announcement/2001-2002-2"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "1999-2000", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "1999-2000": "/announcement/1999-2000"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "1997-1998", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "1997-1998": "/announcement/1997-1998"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "1994-1995", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "1994-1995": "/announcement/1994-1995"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "1992-2006", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "1992-2006": "/announcement/1992-2006"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "1992-1993", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "1992-1993": "/announcement/1992-1993"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "1988-189", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "1988-189": "/announcement/1988-189"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "1986-2", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "announcement": "/",
    "1986-2": "/announcement/1986-2"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "670-2", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "670-2": "/announcement/670-2"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "search", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "search": "/search"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "[member]", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us",
    "board-committees": "/board-committees"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "mr-k-nityananda-reddy", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us",
    "board-committees": "/board-committees"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "mr-k-raghunathan", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "mr-k-nityananda-reddy", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "mr-p-v-ram-prasad-reddy", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/",
    "mr-k-nityananda-reddy": "/about-us/corporate-governance/board-of-directors/mr-k-nityananda-reddy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "dr-m-sivakumaran", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/",
    "mr-k-nityananda-reddy": "/about-us/corporate-governance/board-of-directors/mr-k-nityananda-reddy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "mr-m-madan-mohan-reddy", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/",
    "mr-k-nityananda-reddy": "/about-us/corporate-governance/board-of-directors/mr-k-nityananda-reddy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "mr-p-sarath-chandra-reddy", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/",
    "mr-k-nityananda-reddy": "/about-us/corporate-governance/board-of-directors/mr-k-nityananda-reddy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "dr-(mrs)-avnit-bimal-singh", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/",
    "mr-k-nityananda-reddy": "/about-us/corporate-governance/board-of-directors/mr-k-nityananda-reddy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "mrs-savita-mahajan", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/",
    "mr-k-nityananda-reddy": "/about-us/corporate-governance/board-of-directors/mr-k-nityananda-reddy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "mr-girish-paman-vanvari", {
  bimage: "/img/banners/aboutbanner.png",
  bTitle: "DELIVERING SUSTAINED GROWTH",
  bcontent: "We are diligently and sustainably achieving <br/> excellence in all that we do",
  path: {
    "corporate-governance": "/about-us/corporate-governance",
    "about-us": "/about-us",
    "board-of-directors": "/about-us/corporate-governance/board-of-directors/",
    "mr-k-nityananda-reddy": "/about-us/corporate-governance/board-of-directors/mr-k-nityananda-reddy"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "enquiry-website", {
  bimage: "/img/banners/Contact-Banner-Img44.jpg",
  bTitle: "BUILDING THE FUTURE",
  bcontent: "We value your feedback as we are committed <br/> to continuously improving our products and services",
  path: {
    "enquiry-website": "/enquiry-website"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "contact-details-of-kmps", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "investors": "/investors",
    "corporate-governance": "/investors/corporate-governance"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "products", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "DELIVERING ROBUST FINANCIALS",
  bcontent: "We believe that execution is everything <br/>and always challenge ourselves to deliver superior performance",
  path: {
    "products": "/products"
  }
}), (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_breadCrumbDetails, "product-list", {
  bimage: "/img/banners/Investors-Banner-Img.jpg",
  bTitle: "",
  bcontent: "",
  path: {
    "products": "/product-list"
  }
}), _breadCrumbDetails);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

var prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale,
    scroll: scroll
  });
}

function Link(props) {
  _s();

  if (true) {
    var createPropError = function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + ( true ? "\nOpen your browser's console to view the Component stack trace." : 0));
    }; // TypeScript trick for type-guarding:


    var requiredPropsGuard = {
      href: true
    };
    var requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(function (key) {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // TypeScript trick for type-guarding:

    var optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    var optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(function (key) {
      var valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key: key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key: key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var hasWarned = _react["default"].useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  var p = props.prefetch !== false;
  var router = (0, _router2.useRouter)();
  var pathname = router && router.asPath || '/';

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _ref = (0, _router.resolveHref)(pathname, props.href, true),
        _ref2 = _slicedToArray(_ref, 2),
        resolvedHref = _ref2[0],
        resolvedAs = _ref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child = _react.Children.only(children);

  var childRef = child && typeof child === 'object' && child.ref;

  var _ref3 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  }),
      _ref4 = _slicedToArray(_ref3, 2),
      setIntersectionRef = _ref4[0],
      isVisible = _ref4[1];

  var setRef = _react["default"].useCallback(function (el) {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(function () {
    var shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = function (e) {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

_s(Link, "7cX92ILFgstKFyzTMH+g73G4t5k=");

_c = Link;
var _default = Link;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Link");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.jsx");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Achievers IT\\aurobindoproduct_UI\\client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Achievers_IT_aurobindoproduct_UI_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_3__.CookiesProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(';')
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var index = pair.indexOf('=')

    // skip things that don't look like key=value
    if (index < 0) {
      continue;
    }

    var key = pair.substring(0, index).trim()

    // only assign once
    if (undefined == obj[key]) {
      var val = pair.substring(index + 1, pair.length).trim()

      // quoted values
      if (val[0] === '"') {
        val = val.slice(1, -1)
      }

      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-cookie/es6/Cookies.js":
/*!**************************************************!*\
  !*** ./node_modules/react-cookie/es6/Cookies.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");

/* harmony default export */ __webpack_exports__["default"] = (universal_cookie__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./node_modules/react-cookie/es6/CookiesContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-cookie/es6/CookiesContext.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Provider": function() { return /* binding */ Provider; },
/* harmony export */   "Consumer": function() { return /* binding */ Consumer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cookies */ "./node_modules/react-cookie/es6/Cookies.js");


var CookiesContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(new _Cookies__WEBPACK_IMPORTED_MODULE_1__.default());
var Provider = CookiesContext.Provider, Consumer = CookiesContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (CookiesContext);


/***/ }),

/***/ "./node_modules/react-cookie/es6/CookiesProvider.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-cookie/es6/CookiesProvider.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var _CookiesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CookiesContext */ "./node_modules/react-cookie/es6/CookiesContext.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CookiesProvider = /** @class */ (function (_super) {
    __extends(CookiesProvider, _super);
    function CookiesProvider(props) {
        var _this = _super.call(this, props) || this;
        if (props.cookies) {
            _this.cookies = props.cookies;
        }
        else {
            _this.cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_1__.default();
        }
        return _this;
    }
    CookiesProvider.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CookiesContext__WEBPACK_IMPORTED_MODULE_2__.Provider, { value: this.cookies }, this.props.children);
    };
    return CookiesProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ __webpack_exports__["default"] = (CookiesProvider);


/***/ }),

/***/ "./node_modules/react-cookie/es6/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-cookie/es6/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cookies": function() { return /* reexport safe */ _Cookies__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "CookiesProvider": function() { return /* reexport safe */ _CookiesProvider__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "withCookies": function() { return /* reexport safe */ _withCookies__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "useCookies": function() { return /* reexport safe */ _useCookies__WEBPACK_IMPORTED_MODULE_3__.default; }
/* harmony export */ });
/* harmony import */ var _Cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cookies */ "./node_modules/react-cookie/es6/Cookies.js");
/* harmony import */ var _CookiesProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookiesProvider */ "./node_modules/react-cookie/es6/CookiesProvider.js");
/* harmony import */ var _withCookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withCookies */ "./node_modules/react-cookie/es6/withCookies.js");
/* harmony import */ var _useCookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useCookies */ "./node_modules/react-cookie/es6/useCookies.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./node_modules/react-cookie/es6/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_4__) if(["default","Cookies","CookiesProvider","withCookies","useCookies"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);







/***/ }),

/***/ "./node_modules/react-cookie/es6/types.js":
/*!************************************************!*\
  !*** ./node_modules/react-cookie/es6/types.js ***!
  \************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-cookie/es6/useCookies.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-cookie/es6/useCookies.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useCookies; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CookiesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookiesContext */ "./node_modules/react-cookie/es6/CookiesContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-cookie/es6/utils.js");



function useCookies(dependencies) {
    var cookies = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_CookiesContext__WEBPACK_IMPORTED_MODULE_1__.default);
    if (!cookies) {
        throw new Error('Missing <CookiesProvider>');
    }
    var initialCookies = cookies.getAll();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialCookies), allCookies = _a[0], setCookies = _a[1];
    var previousCookiesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(allCookies);
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isInBrowser)()) {
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
            function onChange() {
                var newCookies = cookies.getAll();
                if (shouldUpdate(dependencies || null, newCookies, previousCookiesRef.current)) {
                    setCookies(newCookies);
                }
                previousCookiesRef.current = newCookies;
            }
            cookies.addChangeListener(onChange);
            return function () {
                cookies.removeChangeListener(onChange);
            };
        }, [cookies]);
    }
    var setCookie = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return cookies.set.bind(cookies); }, [cookies]);
    var removeCookie = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return cookies.remove.bind(cookies); }, [cookies]);
    return [allCookies, setCookie, removeCookie];
}
function shouldUpdate(dependencies, newCookies, oldCookies) {
    if (!dependencies) {
        return true;
    }
    for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
        var dependency = dependencies_1[_i];
        if (newCookies[dependency] !== oldCookies[dependency]) {
            return true;
        }
    }
    return false;
}


/***/ }),

/***/ "./node_modules/react-cookie/es6/utils.js":
/*!************************************************!*\
  !*** ./node_modules/react-cookie/es6/utils.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInBrowser": function() { return /* binding */ isInBrowser; }
/* harmony export */ });
function isInBrowser() {
    return (typeof window !== 'undefined' &&
        typeof window.document !== 'undefined' &&
        typeof window.document.createElement !== 'undefined');
}


/***/ }),

/***/ "./node_modules/react-cookie/es6/withCookies.js":
/*!******************************************************!*\
  !*** ./node_modules/react-cookie/es6/withCookies.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ withCookies; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CookiesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CookiesContext */ "./node_modules/react-cookie/es6/CookiesContext.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



function withCookies(WrappedComponent) {
    // @ts-ignore
    var name = WrappedComponent.displayName || WrappedComponent.name;
    var CookieWrapper = /** @class */ (function (_super) {
        __extends(CookieWrapper, _super);
        function CookieWrapper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.onChange = function () {
                // Make sure to update children with new values
                _this.forceUpdate();
            };
            return _this;
        }
        CookieWrapper.prototype.listen = function () {
            this.props.cookies.addChangeListener(this.onChange);
        };
        CookieWrapper.prototype.unlisten = function (cookies) {
            (cookies || this.props.cookies).removeChangeListener(this.onChange);
        };
        CookieWrapper.prototype.componentDidMount = function () {
            this.listen();
        };
        CookieWrapper.prototype.componentDidUpdate = function (prevProps) {
            if (prevProps.cookies !== this.props.cookies) {
                this.unlisten(prevProps.cookies);
                this.listen();
            }
        };
        CookieWrapper.prototype.componentWillUnmount = function () {
            this.unlisten();
        };
        CookieWrapper.prototype.render = function () {
            var _a = this.props, forwardedRef = _a.forwardedRef, cookies = _a.cookies, restProps = __rest(_a, ["forwardedRef", "cookies"]);
            var allCookies = cookies.getAll();
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, __assign({}, restProps, { ref: forwardedRef, cookies: cookies, allCookies: allCookies })));
        };
        CookieWrapper.displayName = "withCookies(" + name + ")";
        CookieWrapper.WrappedComponent = WrappedComponent;
        return CookieWrapper;
    }(react__WEBPACK_IMPORTED_MODULE_0__.Component));
    var ForwardedComponent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CookiesContext__WEBPACK_IMPORTED_MODULE_2__.Consumer, null, function (cookies) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CookieWrapper, __assign({ cookies: cookies }, props, { forwardedRef: ref }))); }));
    });
    ForwardedComponent.displayName = CookieWrapper.displayName;
    ForwardedComponent.WrappedComponent = CookieWrapper.WrappedComponent;
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(ForwardedComponent, WrappedComponent);
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/universal-cookie/es6/Cookies.js":
/*!******************************************************!*\
  !*** ./node_modules/universal-cookie/es6/Cookies.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/universal-cookie/es6/utils.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var Cookies = /** @class */ (function () {
    function Cookies(cookies, options) {
        var _this = this;
        this.changeListeners = [];
        this.HAS_DOCUMENT_COOKIE = false;
        this.cookies = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(cookies, options);
        new Promise(function () {
            _this.HAS_DOCUMENT_COOKIE = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.hasDocumentCookie)();
        }).catch(function () { });
    }
    Cookies.prototype._updateBrowserValues = function (parseOptions) {
        if (!this.HAS_DOCUMENT_COOKIE) {
            return;
        }
        this.cookies = cookie__WEBPACK_IMPORTED_MODULE_0__.parse(document.cookie, parseOptions);
    };
    Cookies.prototype._emitChange = function (params) {
        for (var i = 0; i < this.changeListeners.length; ++i) {
            this.changeListeners[i](params);
        }
    };
    Cookies.prototype.get = function (name, options, parseOptions) {
        if (options === void 0) { options = {}; }
        this._updateBrowserValues(parseOptions);
        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.readCookie)(this.cookies[name], options);
    };
    Cookies.prototype.getAll = function (options, parseOptions) {
        if (options === void 0) { options = {}; }
        this._updateBrowserValues(parseOptions);
        var result = {};
        for (var name_1 in this.cookies) {
            result[name_1] = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.readCookie)(this.cookies[name_1], options);
        }
        return result;
    };
    Cookies.prototype.set = function (name, value, options) {
        var _a;
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        this.cookies = __assign(__assign({}, this.cookies), (_a = {}, _a[name] = value, _a));
        if (this.HAS_DOCUMENT_COOKIE) {
            document.cookie = cookie__WEBPACK_IMPORTED_MODULE_0__.serialize(name, value, options);
        }
        this._emitChange({ name: name, value: value, options: options });
    };
    Cookies.prototype.remove = function (name, options) {
        var finalOptions = (options = __assign(__assign({}, options), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 }));
        this.cookies = __assign({}, this.cookies);
        delete this.cookies[name];
        if (this.HAS_DOCUMENT_COOKIE) {
            document.cookie = cookie__WEBPACK_IMPORTED_MODULE_0__.serialize(name, '', finalOptions);
        }
        this._emitChange({ name: name, value: undefined, options: options });
    };
    Cookies.prototype.addChangeListener = function (callback) {
        this.changeListeners.push(callback);
    };
    Cookies.prototype.removeChangeListener = function (callback) {
        var idx = this.changeListeners.indexOf(callback);
        if (idx >= 0) {
            this.changeListeners.splice(idx, 1);
        }
    };
    return Cookies;
}());
/* harmony default export */ __webpack_exports__["default"] = (Cookies);


/***/ }),

/***/ "./node_modules/universal-cookie/es6/index.js":
/*!****************************************************!*\
  !*** ./node_modules/universal-cookie/es6/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cookies */ "./node_modules/universal-cookie/es6/Cookies.js");

/* harmony default export */ __webpack_exports__["default"] = (_Cookies__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./node_modules/universal-cookie/es6/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/universal-cookie/es6/utils.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasDocumentCookie": function() { return /* binding */ hasDocumentCookie; },
/* harmony export */   "cleanCookies": function() { return /* binding */ cleanCookies; },
/* harmony export */   "parseCookies": function() { return /* binding */ parseCookies; },
/* harmony export */   "isParsingCookie": function() { return /* binding */ isParsingCookie; },
/* harmony export */   "readCookie": function() { return /* binding */ readCookie; }
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");

function hasDocumentCookie() {
    // Can we get/set cookies on document.cookie?
    return typeof document === 'object' && typeof document.cookie === 'string';
}
function cleanCookies() {
    document.cookie.split(';').forEach(function (c) {
        document.cookie = c
            .replace(/^ +/, '')
            .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
}
function parseCookies(cookies, options) {
    if (typeof cookies === 'string') {
        return cookie__WEBPACK_IMPORTED_MODULE_0__.parse(cookies, options);
    }
    else if (typeof cookies === 'object' && cookies !== null) {
        return cookies;
    }
    else {
        return {};
    }
}
function isParsingCookie(value, doNotParse) {
    if (typeof doNotParse === 'undefined') {
        // We guess if the cookie start with { or [, it has been serialized
        doNotParse =
            !value || (value[0] !== '{' && value[0] !== '[' && value[0] !== '"');
    }
    return !doNotParse;
}
function readCookie(value, options) {
    if (options === void 0) { options = {}; }
    var cleanValue = cleanupCookieValue(value);
    if (isParsingCookie(cleanValue, options.doNotParse)) {
        try {
            return JSON.parse(cleanValue);
        }
        catch (e) {
            // At least we tried
        }
    }
    // Ignore clean value if we failed the deserialization
    // It is not relevant anymore to trim those values
    return value;
}
function cleanupCookieValue(value) {
    // express prepend j: before serializing a cookie
    if (value && value[0] === 'j' && value[1] === ':') {
        return value.substr(2);
    }
    return value;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXIuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9Jbm5lcmJhbm5lci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L05hdkJhci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L2JyZWFkY3J1bWJzLmpzIiwid2VicGFjazovL19OX0UvLi9saW5rLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvYW1wLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvYW1wLnRzIiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQudHN4Iiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL3NpZGUtZWZmZWN0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nvb2tpZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1jb29raWUvZXM2L0Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1jb29raWUvZXM2L0Nvb2tpZXNDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29va2llL2VzNi9Db29raWVzUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1jb29raWUvZXM2L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29va2llL2VzNi91c2VDb29raWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29va2llL2VzNi91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNvb2tpZS9lczYvd2l0aENvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLWNvb2tpZS9lczYvQ29va2llcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VuaXZlcnNhbC1jb29raWUvZXM2L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLWNvb2tpZS9lczYvdXRpbHMuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiRm9vdGVyIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJyZW1vdmVDb29raWUiLCJhY2NlcHRDb29raWUiLCJlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiSW5uZXJiYW5uZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyYXdSb3V0ZSIsImFzUGF0aCIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsInBhZ2VOYW1lIiwiaW5jbHVkZXMiLCJicmVhZENydW1iRGV0YWlscyIsImJpbWFnZSIsImJUaXRsZSIsImJjb250ZW50IiwiZmFsbEJhY2tQYWdlIiwiZ2VuZXJhdGVCcmVhZENydW1iVGl0bGUiLCJpbmQiLCJuYW1lIiwibmFtZVRvRGlzcGxheSIsInN0YXJ0c1dpdGgiLCJtZW1iZXJOYW1lIiwiam9pbiIsIm5hdmlnYXRlT25DbGljayIsInNlbGVjdGVkUGF0aCIsInBhdGhUb05hdmlnYXRlIiwicGF0aCIsInB1c2giLCJnZW5lcmF0ZUhyZWYiLCJpIiwiYmFja2dyb3VuZEltYWdlIiwiX19odG1sIiwibWFwIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJOYXZCYXIiLCJwcmVmZXRjaGVkIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic2hhbGxvdyIsImxvY2FsZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFjdHVhbCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwiQW1wU3RhdGVDb250ZXh0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsImlzSW5BbXBNb2RlIiwiaW5BbXBNb2RlIiwiaGVhZCIsImxpc3QiLCJmcmFnbWVudExpc3QiLCJNRVRBVFlQRVMiLCJrZXlzIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5IiwibGVuIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwiaGVhZEVsZW1lbnQiLCJkZWZhdWx0SGVhZCIsInVuaXF1ZSIsImMiLCJwcm9jZXNzIiwiYW1wU3RhdGUiLCJoZWFkTWFuYWdlciIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsIkhlYWQiLCJpc1NlcnZlciIsImNvbnN0cnVjdG9yIiwiX2hhc0hlYWRNYW5hZ2VyIiwiZW1pdENoYW5nZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJNeUFwcCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmU7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdCQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7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NkNBQWdCO0FBQzlDO0FBQ0EsMEJBQTBCLDZDQUE2QztBQUN2RTtBQUNBO0FBQ0EsMERBQTBELGFBQWEsb0RBQW9EO0FBQzNILGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsOEJBQThCLDZDQUFnQjtBQUM5QztBQUNBLDBCQUEwQixpREFBaUQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCwrREFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDL0VTO0FBQ2hDLCtEQUFlLDZDQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RVO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUCw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLCtCQUErQix5Q0FBeUM7QUFDeEUsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBLGVBQWUseUNBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJpbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmNvbnN0IHByb3BUeXBlcyA9IHt9O1xyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuXHJcblx0Y29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoWydjb29raWUtY29uc2VudCddKTtcclxuXHRjb25zdCBhY2NlcHRDb29raWUgPSAoZSkgPT4ge1xyXG5cdFx0c2V0Q29va2llKFwiY29va2llLWNvbnNlbnRcIiwgdHJ1ZSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxmb290ZXIgaWQ9XCJmb290ZXJcIiBjbGFzc05hbWU9XCJkYXJrXCI+XHJcblx0XHRcdFx0PGRpdiBpZD1cImNvcHlyaWdodHNcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodC1hcmVhLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+wqkgQ29weXJpZ2h0IDIwMjIgQXVyb2JpbmRvIFBoYXJtYS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly94LmNvbS9hdXJvYmluZG9nbG9iYWxcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbiBzaS1zbWFsbCBzaS10d2l0dGVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiaWNvbi10d2l0dGVyXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvYXVyb2JpbmRvcGhhcm1hL1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uIHNpLXNtYWxsIHNpLWdwbHVzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiaWNvbi1saW5rZWRpbjJcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0LWFyZWEtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9wcml2YWN5LXBvbGljeVwiPlByaXZhY3kgUG9saWN5PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvcHlsaW5lXCI+fDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL3NpdGUtbWFwXCI+U2l0ZSBNYXA8L2E+PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvb3Rlcj5cclxuXHRcdFx0XHJcblxyXG5cdFx0XHQ8ZGl2IGlkPVwiZ290b1RvcFwiIGNsYXNzTmFtZT1cImljb24tYW5nbGUtdXBcIj48L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZSBicy1leGFtcGxlLW1vZGFsLWZzXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJmc01vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1mdWxsc2NyZWVuXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJwb3B1cC1jbG9zZSBidG4tc21cIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiA8aW1nIHNyYz1cIi9pbWcvY2xvc2UucG5nXCIgYWx0PSdBdXJvYmluZG8gY2xvc2UnLz48L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLW92ZXJsYXktZm9ybVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0gYWN0aW9uPVwiL3NlYXJjaFwiIG1ldGhvZD1cIkdFVFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJpbnB1dC1zZWFyY2hcIiBpZD1cInNlYXJjaFRleHRcIiBuYW1lPVwic2VhcmNoVGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGV4dCB0byBzZWFyY2hcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJpY29uLWxpbmUtc2VhcmNoXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHtcclxuXHRcdFx0XHQoY29va2llcy5sZW5ndGggPT09IDAgfHwgY29va2llc1snY29va2llLWNvbnNlbnQnXSA9PSB1bmRlZmluZWQgfHwgY29va2llc1snY29va2llLWNvbnNlbnQnXSAhPSBcInRydWVcIikgPyAoPGRpdiBpZD1cImNvb2tpZS1ub3RpY2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb29raWUtbm90aWNlLWNvbnRhaW5lclwiIHN0eWxlPXt7IFwiY29sb3JcIjogXCIjZmZmXCIgfX0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGlkPVwiY24tbm90aWNlLXRleHRcIiBjbGFzc05hbWU9XCJjbi10ZXh0LWNvbnRhaW5lclwiPlRoaXMgc2l0ZSB1c2VzIGNvb2tpZXMuIEJ5IGNvbnRpbnVpbmcgdG8gYnJvd3NlIHRoZSBzaXRlIHlvdSBhcmUgYWdyZWVpbmcgdG8gb3VyIHVzZSBvZiBjb29raWVzLiA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGlkPVwiY24tbm90aWNlLWJ1dHRvbnNcIiBjbGFzc05hbWU9XCJjbi1idXR0b25zLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgb25DbGljaz17YWNjZXB0Q29va2llfSBpZD1cImNuLWFjY2VwdC1jb29raWVcIiBkYXRhLWNvb2tpZS1zZXQ9XCJhY2NlcHRcIiBjbGFzc05hbWU9XCJjbi1zZXQtY29va2llIGNuLWJ1dHRvbiBib290c3RyYXAgYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkkgQWNjZXB0XCI+SSBBY2NlcHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHA6Ly8zLjIzMi4xNDQuMTI0OjgwOTAvcHJpdmFjeS1wb2xpY3kvI2Nvb2tpZXNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBpZD1cImNuLW1vcmUtaW5mb1wiIGNsYXNzTmFtZT1cImNuLW1vcmUtaW5mbyBjbi1idXR0b24gYm9vdHN0cmFwIGJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDb29raWUgcG9saWN5XCI+Q29va2llIHBvbGljeTwvYT5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXthY2NlcHRDb29raWV9IGlkPVwiY24tY2xvc2Utbm90aWNlXCIgZGF0YS1jb29raWUtc2V0PVwiYWNjZXB0XCIgY2xhc3NOYW1lPVwiY24tY2xvc2UtaWNvbiBidXR0b25cIiBhcmlhLWxhYmVsPVwiSSBBY2NlcHRcIj48L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj4pIDogXCJcIlxyXG5cdFx0XHR9XHJcblx0XHQ8Lz5cclxuXHJcblxyXG5cdCk7XHJcbn1cclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcbkZvb3Rlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJyZWFkQ3J1bWJEZXRhaWxzIH0gZnJvbSAnLi9icmVhZGNydW1icyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgcHJvcFR5cGVzID0ge307XHJcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuY29uc3QgSW5uZXJiYW5uZXIgPSAoKSA9PiB7XHJcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcblx0Y29uc3QgcmF3Um91dGUgPSByb3V0ZXIuYXNQYXRoLnNwbGl0KFwiL1wiKTtcclxuXHRjb25zb2xlLmxvZyhcInJhd1JvdXRlXCIsIHJhd1JvdXRlKTtcclxuXHRsZXQgcGFnZU5hbWUgPSByYXdSb3V0ZVtyYXdSb3V0ZS5sZW5ndGggLSAxXTtcclxuXHRpZiAocGFnZU5hbWUuaW5jbHVkZXMoJz8nKSkge1xyXG5cdFx0cGFnZU5hbWUgID0gcGFnZU5hbWUuc3BsaXQoJz8nKVswXTtcclxuXHR9IGVsc2UgaWYgKHBhZ2VOYW1lLmluY2x1ZGVzKCcjJykpIHtcclxuXHRcdHBhZ2VOYW1lICA9IHBhZ2VOYW1lLnNwbGl0KCcjJylbMF07XHJcblx0fVxyXG5cdGNvbnNvbGUubG9nKHBhZ2VOYW1lKVxyXG5cdGNvbnNvbGUubG9nKFwicGFnZU5hbWUxMlwiLCBicmVhZENydW1iRGV0YWlsc1twYWdlTmFtZV0pO1xyXG5cdGNvbnN0IHsgYmltYWdlLCBiVGl0bGUsIGJjb250ZW50IH0gPSBicmVhZENydW1iRGV0YWlsc1twYWdlTmFtZV07XHJcblx0Ly8gY29uc3QgeyBiaW1hZ2UsIGJUaXRsZSwgYmNvbnRlbnQgfSA9IGJyZWFkQ3J1bWJEZXRhaWxzLmRlZmF1bHQ7XHJcbiAgICBjb25zdCBmYWxsQmFja1BhZ2UgPSBbXCJidXNpbmVzcy1vdmVydmlld1wiLCBcInNkZmdcIiwgXCJmZ2hcIl07XHJcblx0Ly8gY29uc29sZS5sb2coJ3JvdXRlcnJvdXRlcnJvdXRlcicsIHBhZ2VOYW1lKTtcclxuXHJcblx0Y29uc3QgZ2VuZXJhdGVCcmVhZENydW1iVGl0bGUgPSAoaW5kLCBuYW1lKSA9PiB7XHJcblx0XHRjb25zdCBuYW1lVG9EaXNwbGF5ID0gKCFpbmQgPyAnaG9tZScgOiBuYW1lKTtcclxuXHRcdGNvbnNvbGUubG9nKCdCcmVhZGNydW1iJywgbmFtZVRvRGlzcGxheSk7XHJcblx0XHRpZihuYW1lVG9EaXNwbGF5PT0ncmQnKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gJ1ImRCdcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYobmFtZVRvRGlzcGxheT09J2FwaScpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAnQVBJJ1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihuYW1lVG9EaXNwbGF5PT0nbXItay1yYWdodW5hdGhhbicpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAnTXIuIEsuIFJhZ3VuYXRoYW4nXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PSdtci1rLW5pdHlhbmFuZGEtcmVkZHknKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gJ01yLiBLLiBOaXR5YW5hbmRhIFJlZGR5J1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihuYW1lVG9EaXNwbGF5PT0nbXItcC12LXJhbS1wcmFzYWQtcmVkZHknKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gJ01yLiBQLiBWIFJhbSBQcmFzYWQgUmVkZHknXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PSdkci1tLXNpdmFrdW1hcmFuJylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICdEci4gTS4gU2l2YWt1bWFyYW4nXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PSdtci1tLW1hZGFuLW1vaGFuLXJlZGR5JylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICdNci4gTS4gTWFkYW4gTW9oYW4gUmVkZHknXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PSdtci1wLXNhcmF0aC1jaGFuZHJhLXJlZGR5JylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICdNci4gUC4gU2FyYXRoIENoYW5kcmEgUmVkZHknXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PSdkci0obXJzKS1hdm5pdC1iaW1hbC1zaW5naCcpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAnRHIuIChNcnMuKSBBdm5pdCBCaW1hbCBTaW5naCdcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYobmFtZVRvRGlzcGxheT09J21ycy1zYXZpdGEtbWFoYWphbicpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAnTXJzLiBTYXZpdGEgTWFoYWphbidcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYobmFtZVRvRGlzcGxheT09J21yLWdpcmlzaC1wYW1hbi12YW52YXJpJylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICdNci4gR2lyaXNoIFBhbWFuIFZhbnZhcmknXHJcblx0XHR9XHJcblxyXG5cdFx0ZWxzZSBpZihuYW1lVG9EaXNwbGF5PT0naHItbWlzc2lvbi1hbmQtdmlzaW9uJylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICdIUiBNaXNzaW9uIGFuZCBWaXNpb24nXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PScyMDIxLTInKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gJzIwMjEnXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PScyMDE5LTIwMjAnKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gJzIwMTktMjAyMCdcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYobmFtZVRvRGlzcGxheT09JzY3MC0yJylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICcyMDE3LTIwMTgnXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PScyMDE0LTE2JylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICcyMDE0IC0yMDE2J1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihuYW1lVG9EaXNwbGF5PT0nMjAxMy0yJylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICcyMDEwLTIwMTEnXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PScyMDA5LTEyJylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICcyMDA3LTIwMDgnXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PScyMDA2LTA4JylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICcyMDA1LTIwMDYnXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PScxOTkyLTIwMDYnKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gJzIwMDQtMjAwNSdcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYobmFtZVRvRGlzcGxheT09JzIwMDMtMjAwNCcpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAnMjAwMy0yMDA0J1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihuYW1lVG9EaXNwbGF5PT0nMjAwMS0yMDAyLTInKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gJzIwMDEtMjAwMidcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYobmFtZVRvRGlzcGxheT09JzE5OTktMjAwMCcpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAnMTk5OS0yMDAwJ1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihuYW1lVG9EaXNwbGF5PT0nMTk5Ny0xOTk4JylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICcxOTk3LTE5OTgnXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PScxOTk0LTE5OTUnKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gJzE5OTQtMTk5NSdcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYobmFtZVRvRGlzcGxheT09JzE5OTItMTk5MycpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAnMTk5Mi0xOTkzJ1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihuYW1lVG9EaXNwbGF5PT0nMTk4OC0xODknKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gJzE5ODgtMTk4OSdcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYobmFtZVRvRGlzcGxheT09JzE5ODgtMTg5JylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICcxOTg4LTE5ODknXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG5hbWVUb0Rpc3BsYXk9PScxOTg2LTInKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gJzE5ODYnXHJcblx0XHR9IFxyXG5cdFx0ZWxzZSBpZiAobmFtZVRvRGlzcGxheS5zdGFydHNXaXRoKFwibWVtYmVyP21lbWJlcj1cIikpIHtcclxuXHRcdFx0bGV0IG1lbWJlck5hbWUgPSBuYW1lVG9EaXNwbGF5LnNwbGl0KFwiPVwiKVsxXTtcclxuXHRcdFx0cmV0dXJuIFwiTWVtYmVyIC8gXCIgKyBtZW1iZXJOYW1lLnNwbGl0KFwiLVwiKS5qb2luKFwiIFwiKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG5hbWVUb0Rpc3BsYXkuc3RhcnRzV2l0aChcInNlYXJjaD9zZWFyY2hUZXh0PVwiKSkge1xyXG5cdFx0XHRsZXQgbWVtYmVyTmFtZSA9IG5hbWVUb0Rpc3BsYXkuc3BsaXQoXCI9XCIpWzFdO1xyXG5cdFx0XHRyZXR1cm4gXCJTZWFyY2ggLyBcIiArIG1lbWJlck5hbWU7XHJcblx0XHR9XHJcblx0XHRcclxuXHJcblxyXG5cdFx0ZWxzZXtcclxuXHRcdGNvbnNvbGUubG9nKG5hbWVUb0Rpc3BsYXkgKyBcIioqKioqKlwiKVxyXG5cdFx0cmV0dXJuIG5hbWVUb0Rpc3BsYXkuc3BsaXQoXCItXCIpLmpvaW4oXCIgXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgbmF2aWdhdGVPbkNsaWNrID0gKHNlbGVjdGVkUGF0aCkgPT4ge1xyXG5cdGNvbnN0IHBhdGhUb05hdmlnYXRlID0gc2VsZWN0ZWRQYXRoID09PSBcIlwiID8gXCIvXCIgOiBicmVhZENydW1iRGV0YWlsc1tzZWxlY3RlZFBhdGhdLnBhdGhbc2VsZWN0ZWRQYXRoXTtcclxuXHRcdHJvdXRlci5wdXNoKHBhdGhUb05hdmlnYXRlKTtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBnZW5lcmF0ZUhyZWYgPSAoaSwgbmFtZSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ1BhdGggbmFtZS0xJywgaSwgbmFtZSlcclxuXHRcdHZhciBwYXRoPVwiL1wiXHJcblx0XHRpZighaSkge1xyXG5cdFx0XHRwYXRoID0gXCIvXCI7XHJcblx0XHR9IGVsc2UgaWYoaSA9PT0gcmF3Um91dGUubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRwYXRoID0gcm91dGVyLmFzUGF0aDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0eXBlb2YgYnJlYWRDcnVtYkRldGFpbHNbcGFnZU5hbWVdLnBhdGhbbmFtZV0gIT09IFwidW5kZWZpbmVkXCIgKSB7XHJcblx0XHRcdFx0cGF0aCA9IGJyZWFkQ3J1bWJEZXRhaWxzW3BhZ2VOYW1lXS5wYXRoW25hbWVdXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKCdQYXRoIGl0YXJhdGlvbicsIGksIHBhdGgpXHJcblx0XHRyZXR1cm4gcGF0aFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHsvKiA8c2VjdGlvbiBpZD1cInBhZ2UtdGl0bGVcIiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlLXBhcmFsbGF4IHBhZ2UtdGl0bGUtZGFya1wiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybChyZXF1aXJlKCR7YmltYWdlfSlgIH19ID4gKi99XHJcblx0XHRcdDxzZWN0aW9uIGlkPVwicGFnZS10aXRsZVwiIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGUtcGFyYWxsYXggcGFnZS10aXRsZS1kYXJrXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmltYWdlfSlgIH19ID5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbGVhcmZpeFwiPiBcclxuXHRcdFx0XHRcdDxoMSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGJUaXRsZSB9fT48L2gxPlxyXG5cdFx0XHRcdFx0PGg2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYmNvbnRlbnQgfX0+PC9oNj5cclxuXHRcdFx0XHRcdDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcblx0XHRcdFx0XHRcdHtyYXdSb3V0ZS5tYXAoKG5hbWUsIGkpID0+IFxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2BicmVhZGNydW1iLWl0ZW0gJHsoaSA9PT0gcmF3Um91dGUubGVuZ3RoIC0gMSkgPyAnYWN0aXZlJyA6ICcnfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyoge25hbWUgPT09IFwiXCIgPyBcIi9cIiA6IGJyZWFkQ3J1bWJEZXRhaWxzW25hbWVdLnBhdGhbbmFtZV19ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17Z2VuZXJhdGVIcmVmKGksbmFtZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e2AkeyhpID09PSByYXdSb3V0ZS5sZW5ndGggLSAxKSA/ICduYXZhY3RpdmUnIDogJyd9YH0gPntnZW5lcmF0ZUJyZWFkQ3J1bWJUaXRsZShpLCBuYW1lKX08L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L29sPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG5cclxuSW5uZXJiYW5uZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5Jbm5lcmJhbm5lci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbm5lcmJhbm5lcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9OYXZCYXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcbmltcG9ydCBJbm5lcmJhbm5lciBmcm9tICcuL0lubmVyYmFubmVyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHt9O1xyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7fTtcclxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc29sZS5sb2coXCIvLy8vLy8vLy8vLy8vLy8vLy8vLy9cIilcclxuICAgIGNvbnNvbGUubG9nKCdkZmdoamsnLCByb3V0ZXIsY2hpbGRyZW4sIFwiPT09XCIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPiAgXHJcbiAgICAgICAgey8qIEZhdmljb24gKi99XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICB7Lyoge3JvdXRlci5wYXRobmFtZSAhPT0gJy8nICYmIDxJbm5lcmJhbm5lci8+fSAqL31cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbkxheW91dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcbkxheW91dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7IFxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7fTtcclxuY29uc3QgZGVmYXVsdFByb3BzID0ge307XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPVwiZnVsbC1oZWFkZXJcIj5cclxuXHRcdFx0PGRpdiBpZD1cImhlYWRlci13cmFwXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJvd1wiPlxyXG5cclxuXHRcdFx0XHRcdCAgICA8ZGl2IGlkPVwibG9nb1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwic3RhbmRhcmQtbG9nb1wiIGRhdGEtZGFyay1sb2dvPVwiL2ltZy9hdXJvYmluZG8tbG9nby5wbmdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ltZy9hdXJvYmluZG8tbG9nby5wbmdcIiBhbHQ9XCJBdXJvYmluZG8gTG9nb1wiLz48L2E+IFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4gXHJcblx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJwcmltYXJ5LW1lbnUtdHJpZ2dlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLXRyaWdnZXJcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj48cGF0aCBkPVwibSAzMCwzMyBoIDQwIGMgMy43MjI4MzksMCA3LjUsMy4xMjY0NjggNy41LDguNTc4NDI3IDAsNS40NTE5NTkgLTIuNzI3MDI5LDguNDIxNTczIC03LjUsOC40MjE1NzMgaCAtMjBcIj48L3BhdGg+PHBhdGggZD1cIm0gMzAsNTAgaCA0MFwiPjwvcGF0aD48cGF0aCBkPVwibSA3MCw2NyBoIC00MCBjIDAsMCAtNy41LC0wLjgwMjExOCAtNy41LC04LjM2NTc0NyAwLC03LjU2MzYyOSA3LjUsLTguNjM0MjUzIDcuNSwtOC42MzQyNTMgaCAyMFwiPjwvcGF0aD48L3N2Zz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cInByaW1hcnktbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJtZW51LWxpbmtcIiBocmVmPVwiL3Byb2R1Y3QtbGlzdFwiPjxkaXY+UHJvZHVjdHM8L2Rpdj48L2E+IFxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHJcblx0XHRcdFx0XHRcdDwvbmF2PlxyXG5cclxuXHRcdFx0XHRcdCBcclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXAtY2xvbmVcIj48L2Rpdj5cclxuXHRcdDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbk5hdkJhci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcbk5hdkJhci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyIsImV4cG9ydCBjb25zdCBicmVhZENydW1iRGV0YWlscyA9IHtcclxuICAgIFwiZGVmYXVsdFwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICB9LFxyXG4gICAgXCJzZWFyY2hcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvSW52ZXN0b3JzLUJhbm5lci1JbWcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgfSxcclxuICAgIFwiZ29vZ2xlLW1hcFwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICB9LFxyXG4gICAgXCJhYm91dC11c1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImFib3V0LXVzXCI6IFwiL2Fib3V0LXVzXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiYXQtYS1nbGFuY2VcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvSW52ZXN0b3JzLUJhbm5lci1JbWcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJhdC1hLWdsYW5jZVwiIDogXCIvYWJvdXQtdXMvYXQtYS1nbGFuY2UvYnVzaW5lc3Mtb3ZlcnZpZXdcIixcclxuICAgICAgICAgICAgXCJhYm91dC11c1wiOiBcIi9hYm91dC11c1wiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImJ1c2luZXNzLW92ZXJ2aWV3XCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiYXQtYS1nbGFuY2VcIiA6IFwiL2Fib3V0LXVzL2F0LWEtZ2xhbmNlL2J1c2luZXNzLW92ZXJ2aWV3XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJ0aW1lbGluZS1hbmQtaGlzdG9yeVwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImF0LWEtZ2xhbmNlXCIgOiBcIi9hYm91dC11cy9hdC1hLWdsYW5jZS9idXNpbmVzcy1vdmVydmlld1wiLFxyXG4gICAgICAgICAgICBcImFib3V0LXVzXCI6IFwiL2Fib3V0LXVzXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiZ2xvYmFsLW9wZXJhdGlvbnMtbWFwXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiYXQtYS1nbGFuY2VcIiA6IFwiL2Fib3V0LXVzL2F0LWEtZ2xhbmNlL2J1c2luZXNzLW92ZXJ2aWV3XCIsIFxyXG4gICAgICAgICAgICBcImFib3V0LXVzXCI6IFwiL2Fib3V0LXVzXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSwgXHJcbiAgICBcImdvb2dsZS1tYXBcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJhdC1hLWdsYW5jZVwiIDogXCIvYWJvdXQtdXMvYXQtYS1nbGFuY2UvYnVzaW5lc3Mtb3ZlcnZpZXdcIiwgXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LCBcclxuICAgIFwiYnVzaW5lc3MtdW5pdHNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJidXNpbmVzcy11bml0c1wiIDogXCIvYWJvdXQtdXMvYnVzaW5lc3MtdW5pdHMvZm9ybXVsYXRpb25zXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJmb3JtdWxhdGlvbnNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJidXNpbmVzcy11bml0c1wiIDogXCIvYWJvdXQtdXMvYnVzaW5lc3MtdW5pdHMvZm9ybXVsYXRpb25zXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJjdXN0b20tc3ludGhlc2lzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiYnVzaW5lc3MtdW5pdHNcIiA6IFwiL2Fib3V0LXVzL2J1c2luZXNzLXVuaXRzL2Zvcm11bGF0aW9uc1wiLFxyXG4gICAgICAgICAgICBcImFib3V0LXVzXCI6IFwiL2Fib3V0LXVzXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwicGVwdGlkZXNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJidXNpbmVzcy11bml0c1wiIDogXCIvYWJvdXQtdXMvYnVzaW5lc3MtdW5pdHMvZm9ybXVsYXRpb25zXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJhdXJvenltZXNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJidXNpbmVzcy11bml0c1wiIDogXCIvYWJvdXQtdXMvYnVzaW5lc3MtdW5pdHMvZm9ybXVsYXRpb25zXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJyZFwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImJ1c2luZXNzLXVuaXRzXCIgOiBcIi9hYm91dC11cy9idXNpbmVzcy11bml0cy9mb3JtdWxhdGlvbnNcIixcclxuICAgICAgICAgICAgXCJhYm91dC11c1wiOiBcIi9hYm91dC11c1wiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImFwaVwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImJ1c2luZXNzLXVuaXRzXCIgOiBcIi9hYm91dC11cy9idXNpbmVzcy11bml0cy9mb3JtdWxhdGlvbnNcIixcclxuICAgICAgICAgICAgXCJhYm91dC11c1wiOiBcIi9hYm91dC11c1wiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImNvcnBvcmF0ZS1nb3Zlcm5hbmNlXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgYnJpbmdpbmcgZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCA8YnIvPndlIGRvIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5XCIsICAgICAgICBcclxuICAgICAgICBwYXRoOiB7IFxyXG4gICAgICAgICAgICBcImFib3V0LXVzXCI6IFwiL2Fib3V0LXVzXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiYm9hcmQtb2YtZGlyZWN0b3JzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiY29ycG9yYXRlLWdvdmVybmFuY2VcIiA6IFwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJib2FyZC1jb21taXR0ZWVzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiY29ycG9yYXRlLWdvdmVybmFuY2VcIiA6IFwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJnb3Zlcm5hbmNlLXBvbGljaWVzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiY29ycG9yYXRlLWdvdmVybmFuY2VcIiA6IFwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJzdXN0YWluYWJpbGl0eVwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGJyaW5naW5nIGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgPGJyLz4gd2UgZG8gZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHlcIixcclxuICAgICAgICBwYXRoOiB7IFxyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwic29jaWFsLWFjY291bnRhYmlsaXR5LXN0YW5kYXJkc1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9Tb2NpYWwtQWNjb3VudGFiaWxpdHktU3RhbmRhcmRzLWJhbm5lci5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiUFJPR1JFU1MgVE9XQVJEUyBBRE9QVElPTiBPRiA8YnIvPiBTT0NJQUwgQ09NUExJQU5DRSBTVEFOREFSRFMgPGJyLz4gSU4gTElORSBXSVRIIE9FQ0QgR1VJREVMSU5FU1wiLCAgICAgIFxyXG4gICAgICAgIGJjb250ZW50OiBcIlwiLFxyXG4gICAgICAgIHBhdGg6IHsgXHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJvdXItY29tbWl0bWVudFwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9zdXN0YWluYWJpbGl0eS1pbWcucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkEgQkxFTkQgRk9SIFNUUkFURUdJQyBBTkQgUkVTUE9OU0lWRSBDU1IgPGJyLz4gRk9SIFNVU1RBSU5BQkxFIERFVkVMT1BNRU5UXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsICBcclxuICAgICAgICAgICAgXCJvdXItY29tbWl0bWVudFwiOiBcIi9zdXN0YWluYWJpbGl0eS9vdXItY29tbWl0bWVudC9jc3ItcG9saWN5XCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiY3NyLXBvbGljeVwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy8xMy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiQSBCTEVORCBGT1IgU1RSQVRFR0lDIEFORCBSRVNQT05TSVZFIENTUiA8YnIvPiBGT1IgU1VTVEFJTkFCTEUgREVWRUxPUE1FTlRcIixcclxuICAgICAgICBiY29udGVudDogXCJcIixcclxuICAgICAgICBwYXRoOiB7IFxyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsIFxyXG4gICAgICAgICAgICBcIm91ci1jb21taXRtZW50XCI6IFwiL3N1c3RhaW5hYmlsaXR5L291ci1jb21taXRtZW50L2Nzci1wb2xpY3lcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJhbm51YWwtYWN0aW9uLXBsYW5cIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvMTQuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkFVUk9CSU5ETyBJTVBBQ1RJTkcgTElWRVMgQU5EIDxici8+IExJVkVMSUhPT0RTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgcGF0aDogeyBcclxuICAgICAgICAgICAgXCJzdXN0YWluYWJpbGl0eVwiOiBcIi9zdXN0YWluYWJpbGl0eVwiLCBcclxuICAgICAgICAgICAgXCJvdXItY29tbWl0bWVudFwiOiBcIi9zdXN0YWluYWJpbGl0eS9vdXItY29tbWl0bWVudC9jc3ItcG9saWN5XCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiY3NyLWNvbW1pdHRlZVwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy80LmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJEUklWSU5HIENTUiBUT1dBUkRTIDxici8+IFNVU1RBSU5BQklMSVRZXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgcGF0aDogeyBcclxuICAgICAgICAgICAgXCJzdXN0YWluYWJpbGl0eVwiOiBcIi9zdXN0YWluYWJpbGl0eVwiLCBcclxuICAgICAgICAgICAgXCJvdXItY29tbWl0bWVudFwiOiBcIi9zdXN0YWluYWJpbGl0eS9vdXItY29tbWl0bWVudC9jc3ItcG9saWN5XCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwia2V5LW1lc3NhZ2VcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvMTUuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIldFIENVTFRJVkFURSBFTVBMT1lFRVMgVE9XQVJEUyA8YnIvPiAgQ1NSIENVTFRVUkVcIixcclxuICAgICAgICBiY29udGVudDogXCJcIixcclxuICAgICAgICBwYXRoOiB7IFxyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsIFxyXG4gICAgICAgICAgICBcIm91ci1jb21taXRtZW50XCI6IFwiL3N1c3RhaW5hYmlsaXR5L291ci1jb21taXRtZW50L2Nzci1wb2xpY3lcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBcImZvY3VzLWFyZWFzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Nzci1iYW5uZXIyLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJBTElHTklORyBDU1IgPGJyLz4gIFdJVEggU1RBVEUgR09BTFMgQU5EIFNER1NcIixcclxuICAgICAgICBiY29udGVudDogXCJcIixcclxuICAgICAgICBwYXRoOiB7IFxyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsIFxyXG4gICAgICAgICAgICBcIm91ci1jb21taXRtZW50XCI6IFwiL3N1c3RhaW5hYmlsaXR5L291ci1jb21taXRtZW50L2Nzci1wb2xpY3lcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiaW1wbGVtZW50aW5nLXBhcnRuZXJzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Nzci1iYW5uZXIzLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJDT01NVU5JVElFUyBCT05ESU5HIFRIUk9VR0ggPGJyLz4gQVVST0JJTkRPIENTUlwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIlwiLFxyXG4gICAgICAgIHBhdGg6IHsgXHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIiwgXHJcbiAgICAgICAgICAgIFwib3VyLWNvbW1pdG1lbnRcIjogXCIvc3VzdGFpbmFiaWxpdHkvb3VyLWNvbW1pdG1lbnQvY3NyLXBvbGljeVwiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImZsYWdzaGlwLXByb2dyYW1zXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Nzci1iYW5uZXI1LmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJBVVJPQklORE8gQ09OU0lTVEVOVCBERUVEUyBGT1IgPGJyLz4gQ09NTVVOSVRZIE5FRURTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgcGF0aDogeyBcclxuICAgICAgICAgICAgXCJzdXN0YWluYWJpbGl0eVwiOiBcIi9zdXN0YWluYWJpbGl0eVwiLCBcclxuICAgICAgICAgICAgXCJvdXItY29tbWl0bWVudFwiOiBcIi9zdXN0YWluYWJpbGl0eS9vdXItY29tbWl0bWVudC9jc3ItcG9saWN5XCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcInJlcG9ydHNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvMy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiQVVST0JJTkRPIENTUiBUUkFDVElPTiBGT1IgPGJyLz4gQlVTSU5FU1MgRVhDRUxMRU5DRVwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIlwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJzdXN0YWluYWJpbGl0eVwiOiBcIi9zdXN0YWluYWJpbGl0eVwiLCAgXHJcbiAgICAgICAgICAgIFwicmVwb3J0c1wiOiBcIi9zdXN0YWluYWJpbGl0eS9yZXBvcnRzL2FubnVhbC1jc3ItcmVwb3J0XCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImFubnVhbC1jc3ItcmVwb3J0XCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL3N1c3RhaW5hYmlsaXR5LWltZy5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiU0hBUElORyBIT0xJU1RJQyBDT01NVU5JVFkgV0VMTC1CRUlOR1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJzdXN0YWluYWJpbGl0eVwiOiBcIi9zdXN0YWluYWJpbGl0eVwiLCAgXHJcbiAgICAgICAgICAgIFwicmVwb3J0c1wiOiBcIi9zdXN0YWluYWJpbGl0eS9yZXBvcnRzL2FubnVhbC1jc3ItcmVwb3J0XCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImNzci1wdWJsaWNhdGlvbnNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvMjAuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIldFIENPTlNUQU5UTFkgTElTVEVOIFRPIDxici8+IENPTU1VTklUWSBWT0lDRVNcIixcclxuICAgICAgICBiY29udGVudDogXCJcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIiwgIFxyXG4gICAgICAgICAgICBcInJlcG9ydHNcIjogXCIvc3VzdGFpbmFiaWxpdHkvcmVwb3J0cy9hbm51YWwtY3NyLXJlcG9ydFwiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJyZXNvdXJjZXNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvY3NyLWJhbm5lcjQuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIlNPQ0lBTCBJTlZFU1RNRU5UIExFQURTIFRPIDxici8+IEFVUk9CSU5ETydTIFNVU1RBSU5BQkxFIEJVU0lORVNTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsICBcclxuICAgICAgICAgICAgXCJyZXBvcnRzXCI6IFwiL3N1c3RhaW5hYmlsaXR5L3JlcG9ydHMvYW5udWFsLWNzci1yZXBvcnRcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwic3Rha2Vob2xkZXItcmVwb3J0c1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy81LmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJSRUNJUEUgRk9SIE9VUiBDU1IgU1VDQ0VTUyBJUyA8YnIvPiBQQVNTSU9OIEFORCBDT01NSVRNRU5UXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsICBcclxuICAgICAgICAgICAgXCJyZXBvcnRzXCI6IFwiL3N1c3RhaW5hYmlsaXR5L3JlcG9ydHMvYW5udWFsLWNzci1yZXBvcnRcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJpbXBhY3QtYXNzZXNzbWVudFwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbXBhY3QtQXNzZXNzbWVudC1SZXBvcnRzLUJhbm5lcjEuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIldFIENPTlNUQU5UTFkgTElTVEVOIFRPIDxici8+IENPTU1VTklUWSBWT0lDRVNcIixcclxuICAgICAgICBiY29udGVudDogXCJcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIiwgIFxyXG4gICAgICAgICAgICBcInJlcG9ydHNcIjogXCIvc3VzdGFpbmFiaWxpdHkvcmVwb3J0cy9hbm51YWwtY3NyLXJlcG9ydFwiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImludmVzdG9yc1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPiBhbmQgYWx3YXlzIGNoYWxsZW5nZSBvdXJzZWx2ZXMgdG8gZGVsaXZlciBzdXBlcmlvciBwZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJpbnZlc3RvcnNcIjogXCIvaW52ZXN0b3JzXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwidGVzdGltb25pYWxzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzLzE3LmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJDT05WRVJUSU5HIENIQU5DRVMsIENIQUxMRU5HRVMgQU5EIDxici8+IE9QUE9SVFVOSVRJRVMgSU5UTyBDU1IgUE9TU0lCSUxJVElFU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIlwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJzdXN0YWluYWJpbGl0eVwiOiBcIi9zdXN0YWluYWJpbGl0eVwiLCAgXHJcbiAgICAgICAgICAgIFwidGVzdGltb25pYWxzXCI6IFwiL3N1c3RhaW5hYmlsaXR5L3Rlc3RpbW9uaWFscy9hd2FyZHMtcmVjb2duaXRpb25cIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJhd2FyZHMtcmVjb2duaXRpb25cIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvMTcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkNPTlZFUlRJTkcgQ0hBTkNFUywgQ0hBTExFTkdFUyBBTkQgPGJyLz4gT1BQT1JUVU5JVElFUyBJTlRPIENTUiBQT1NTSUJJTElUSUVTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsICBcclxuICAgICAgICAgICAgXCJ0ZXN0aW1vbmlhbHNcIjogXCIvc3VzdGFpbmFiaWxpdHkvdGVzdGltb25pYWxzL2F3YXJkcy1yZWNvZ25pdGlvblwiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImRvY3VtZW50YXJpZXNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvY3NyLWJhbm5lcjEuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkNPTlZFUlRJTkcgRkVMVCBORUVEUyBJTiBUTyBNRUFOSU5HRlVMIDxici8+IEFDVElPTlMgSVMgT1VSIENTUiBTUElSSVRcIixcclxuICAgICAgICBiY29udGVudDogXCJcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIiwgIFxyXG4gICAgICAgICAgICBcInRlc3RpbW9uaWFsc1wiOiBcIi9zdXN0YWluYWJpbGl0eS90ZXN0aW1vbmlhbHMvYXdhcmRzLXJlY29nbml0aW9uXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwibWVkaWEtbmV3c1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy82LmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJPVVIgQ1NSIEZPTExPV1MgT1VUUFVULU9VVENPTUUtSU1QQUNUIDxici8+IEJBU0VEIEFQUFJPQUNIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsICBcclxuICAgICAgICAgICAgXCJ0ZXN0aW1vbmlhbHNcIjogXCIvc3VzdGFpbmFiaWxpdHkvdGVzdGltb25pYWxzL2F3YXJkcy1yZWNvZ25pdGlvblwiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImdhbGxlcnlcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvNS5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiUFJPUEVMTElORyBTT0NJQUwgQ0hBTkdFIFRIUk9VR0ggPGJyLz4gSU5OT1ZBVElWRSBDU1JcIixcclxuICAgICAgICBiY29udGVudDogXCJcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIiwgIFxyXG4gICAgICAgICAgICBcInRlc3RpbW9uaWFsc1wiOiBcIi9zdXN0YWluYWJpbGl0eS90ZXN0aW1vbmlhbHMvYXdhcmRzLXJlY29nbml0aW9uXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiYmVuZWZpY2lhcmllcy1zdG9yaWVzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0JlbmVmaWNpYXJpZXMtU3Rvcmllcy1CYW5uZXIuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIldFIENPTlNUQU5UTFkgTElTVEVOIFRPIDxici8+IENPTU1VTklUWSBWT0lDRVNcIixcclxuICAgICAgICBiY29udGVudDogXCJcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIiwgIFxyXG4gICAgICAgICAgICBcInRlc3RpbW9uaWFsc1wiOiBcIi9zdXN0YWluYWJpbGl0eS90ZXN0aW1vbmlhbHMvYXdhcmRzLXJlY29nbml0aW9uXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiYXVyb2JpbmRvLWZvdW5kYXRpb25cIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvY3NyLWJhbm5lci5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiQVVST0JJTkRPIFJFTUFJTlMgVE8gQkUgPGJyLz4gQSBDU1IgRVBJVE9NRVwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIlwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJzdXN0YWluYWJpbGl0eVwiOiBcIi9zdXN0YWluYWJpbGl0eVwiLCAgXHJcbiAgICAgICAgICAgIFwiYXVyb2JpbmRvLWZvdW5kYXRpb25cIjogXCIvc3VzdGFpbmFiaWxpdHkvYXVyb2JpbmRvLWZvdW5kYXRpb24vYWJvdXQtYXBmXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiYWJvdXQtYXBmXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Nzci1iYW5uZXIuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkFVUk9CSU5ETyBSRU1BSU5TIFRPIEJFIDxici8+IEEgQ1NSIEVQSVRPTUVcIixcclxuICAgICAgICBiY29udGVudDogXCJcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIiwgIFxyXG4gICAgICAgICAgICBcImF1cm9iaW5kby1mb3VuZGF0aW9uXCI6IFwiL3N1c3RhaW5hYmlsaXR5L2F1cm9iaW5kby1mb3VuZGF0aW9uL2Fib3V0LWFwZlwiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIm91ci1tZXRhbW9ycGhvc2lzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzLzMuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkNTUiBNRVRBTU9SUEhPU0lTIFRIUk9VR0ggQVVST0JJTkRPIDxici8+IFJVUkFMIElOTk9WQVRJT05TXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsICBcclxuICAgICAgICAgICAgXCJhdXJvYmluZG8tZm91bmRhdGlvblwiOiBcIi9zdXN0YWluYWJpbGl0eS9hdXJvYmluZG8tZm91bmRhdGlvbi9hYm91dC1hcGZcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJvdXItY29tbXVuaXR5LW91dHJlYWNoZXNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvMTYuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkVYUEFORElORyBDU1IgU1BIRVJFIE9GIElORkxVRU5DRVwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIlwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJzdXN0YWluYWJpbGl0eVwiOiBcIi9zdXN0YWluYWJpbGl0eVwiLCAgXHJcbiAgICAgICAgICAgIFwiYXVyb2JpbmRvLWZvdW5kYXRpb25cIjogXCIvc3VzdGFpbmFiaWxpdHkvYXVyb2JpbmRvLWZvdW5kYXRpb24vYWJvdXQtYXBmXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImFjY2Vzcy10by1oZWFsdGhjYXJlXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL3N1c3RhaW5hYmlsaXR5LWltZy5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiU0hBUElORyBIT0xJU1RJQyBDT01NVU5JVFkgV0VMTC1CRUlOR1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHsgXHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICBcclxuXHJcbiAgICBcInBlcGZhci1wcm9ncmFtXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL3N1c3RhaW5hYmlsaXR5LWltZy5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiU0hBUElORyBIT0xJU1RJQyBDT01NVU5JVFkgV0VMTC1CRUlOR1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHsgXHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIixcclxuICAgICAgICAgICAgXCJhY2Nlc3MtdG8taGVhbHRoY2FyZVwiOiBcIi9zdXN0YWluYWJpbGl0eS9hY2Nlc3MtdG8taGVhbHRoY2FyZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSwgIFxyXG4gICAgXCJzdXN0YWluYWJpbGl0eS1rZXktaGlnaGxpZ2h0c1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvc3VzdGFpbmFiaWxpdHkta2V5aGlnaGxpZ2h0cy9lbnZpcm9uLWJhbm5lci5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiU1VTVEFJTkFCSUxJVFkgQVQgQVVST0JJTkRPIFBIQVJNQVwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIkNvbW1pdHRlZCB0byBhIEhlYWx0aGllciBFY29zeXN0ZW1cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIixcclxuICAgICAgICAgICAgXCJzdXN0YWluYWJpbGl0eS1rZXktaGlnaGxpZ2h0c1wiOiBcIi9zdXN0YWluYWJpbGl0eS9zdXN0YWluYWJpbGl0eS1rZXktaGlnaGxpZ2h0c1wiICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuIFxyXG4gICAgXCJlbnZpcm9ubWVudFwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvc3VzdGFpbmFiaWxpdHkta2V5aGlnaGxpZ2h0cy9lbnZpcm9uLWJhbm5lci5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiU0hBUElORyBIT0xJU1RJQyBDT01NVU5JVFkgV0VMTC1CRUlOR1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz5leGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsXHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHkta2V5LWhpZ2hsaWdodHNcIjogXCIvc3VzdGFpbmFiaWxpdHkvc3VzdGFpbmFiaWxpdHkta2V5LWhpZ2hsaWdodHNcIiAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJzb2NpYWxcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL3N1c3RhaW5hYmlsaXR5LWtleWhpZ2hsaWdodHMvZW52aXJvbi1iYW5uZXIuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIlNVU1RBSU5BQklMSVRZIEFUIEFVUk9CSU5ETyBQSEFSTUFcIixcclxuICAgICAgICBiY29udGVudDogXCJDb21taXR0ZWQgdG8gYSBIZWFsdGhpZXIgRWNvc3lzdGVtXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsXHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHkta2V5LWhpZ2hsaWdodHNcIjogXCIvc3VzdGFpbmFiaWxpdHkvc3VzdGFpbmFiaWxpdHkta2V5LWhpZ2hsaWdodHNcIiAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJnb3Zlcm5hbmNlXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9zdXN0YWluYWJpbGl0eS1rZXloaWdobGlnaHRzL2Vudmlyb24tYmFubmVyLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJDT01NSVRURUQgVE8gQSBIRUFMVEhJRVIgRUNPU1lTVEVNXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGNvbW1pdHRlZCB0byBwcm92aWRpbmcgYWZmb3JkYWJsZSBoZWFsdGhjYXJlIGFuZCA8YnIvPnN1c3RhaW5hYmx5IGFjaGlldmluZyBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsXHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHkta2V5LWhpZ2hsaWdodHNcIjogXCIvc3VzdGFpbmFiaWxpdHkvc3VzdGFpbmFiaWxpdHkta2V5LWhpZ2hsaWdodHNcIiAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJyZXBvcnQtMjAyMC0yMDIxXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9zdXN0YWluYWJpbGl0eS1rZXloaWdobGlnaHRzL1JlcG9ydC1pbm5lcmJhbm5lci5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiU1VTVEFJTkFCSUxJVFkgUkVQT1JUIDIwMjAtMjAyMVwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBjb21taXR0ZWQgdG8gcHJvdmlkaW5nIGFmZm9yZGFibGUgaGVhbHRoY2FyZSBhbmQgPGJyLz5zdXN0YWluYWJseSBhY2hpZXZpbmcgZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJzdXN0YWluYWJpbGl0eVwiOiBcIi9zdXN0YWluYWJpbGl0eVwiLFxyXG4gICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5LWtleS1oaWdobGlnaHRzXCI6IFwiL3N1c3RhaW5hYmlsaXR5L3N1c3RhaW5hYmlsaXR5LWtleS1oaWdobGlnaHRzXCIgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBcImNvbW11bml0eVwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9zdXN0YWluYWJpbGl0eS1pbWcucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIlNIQVBJTkcgSE9MSVNUSUMgQ09NTVVOSVRZIFdFTEwtQkVJTkdcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiaW52ZXN0b3JzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0ludmVzdG9ycy1CYW5uZXItSW1nLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFJPQlVTVCBGSU5BTkNJQUxTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYmVsaWV2ZSB0aGF0IGV4ZWN1dGlvbiBpcyBldmVyeXRoaW5nIDxici8+YW5kIGFsd2F5cyBjaGFsbGVuZ2Ugb3Vyc2VsdmVzIHRvIGRlbGl2ZXIgc3VwZXJpb3IgcGVyZm9ybWFuY2VcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiaW52ZXN0b3JzXCI6IFwiL2ludmVzdG9yc1wiLCAgXHJcbiAgICAgICAgICAgIFwicmVzdWx0cy1yZXBvcnRzLXByZXNlbnRhdGlvbnNcIjogXCIvcmVzdWx0cy1yZXBvcnRzLXByZXNlbnRhdGlvbnMvcmVzdWx0cy1hbm5vdW5jZW1lbnRzXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwicmVzdWx0cy1yZXBvcnRzLXByZXNlbnRhdGlvbnNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvSW52ZXN0b3JzLUJhbm5lci1JbWcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgUk9CVVNUIEZJTkFOQ0lBTFNcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBiZWxpZXZlIHRoYXQgZXhlY3V0aW9uIGlzIGV2ZXJ5dGhpbmcgPGJyLz5hbmQgYWx3YXlzIGNoYWxsZW5nZSBvdXJzZWx2ZXMgdG8gZGVsaXZlciBzdXBlcmlvciBwZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJpbnZlc3RvcnNcIjogXCIvaW52ZXN0b3JzXCIsICBcclxuICAgICAgICAgICAgXCJyZXN1bHRzLXJlcG9ydHMtcHJlc2VudGF0aW9uc1wiOiBcIi9yZXN1bHRzLXJlcG9ydHMtcHJlc2VudGF0aW9ucy9yZXN1bHRzLWFubm91bmNlbWVudHNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwicmVzdWx0cy1hbm5vdW5jZW1lbnRzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0ludmVzdG9ycy1CYW5uZXItSW1nLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFJPQlVTVCBGSU5BTkNJQUxTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYmVsaWV2ZSB0aGF0IGV4ZWN1dGlvbiBpcyBldmVyeXRoaW5nIDxici8+YW5kIGFsd2F5cyBjaGFsbGVuZ2Ugb3Vyc2VsdmVzIHRvIGRlbGl2ZXIgc3VwZXJpb3IgcGVyZm9ybWFuY2VcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiaW52ZXN0b3JzXCI6IFwiL2ludmVzdG9yc1wiLCAgXHJcbiAgICAgICAgICAgIFwicmVzdWx0cy1yZXBvcnRzLXByZXNlbnRhdGlvbnNcIjogXCIvcmVzdWx0cy1yZXBvcnRzLXByZXNlbnRhdGlvbnMvcmVzdWx0cy1hbm5vdW5jZW1lbnRzXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiYW5udWFsLXJlcG9ydHNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvSW52ZXN0b3JzLUJhbm5lci1JbWcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgUk9CVVNUIEZJTkFOQ0lBTFNcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBiZWxpZXZlIHRoYXQgZXhlY3V0aW9uIGlzIGV2ZXJ5dGhpbmcgPGJyLz5hbmQgYWx3YXlzIGNoYWxsZW5nZSBvdXJzZWx2ZXMgdG8gZGVsaXZlciBzdXBlcmlvciBwZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJpbnZlc3RvcnNcIjogXCIvaW52ZXN0b3JzXCIsICBcclxuICAgICAgICAgICAgXCJyZXN1bHRzLXJlcG9ydHMtcHJlc2VudGF0aW9uc1wiOiBcIi9yZXN1bHRzLXJlcG9ydHMtcHJlc2VudGF0aW9ucy9yZXN1bHRzLWFubm91bmNlbWVudHNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJ0ZWFtXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgYnJpbmdpbmcgZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkbyBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseVwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJhYm91dC11c1wiOlwiL2Fib3V0LXVzXCIsICBcclxuICAgICAgICAgICAgXCJib2FyZC1vZi1kaXJlY3RvcnNcIjpcIi9hYm91dC11cy9jb3Jwb3JhdGUtZ292ZXJuYW5jZS9ib2FyZC1vZi1kaXJlY3RvcnMvXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJtZW1iZXJcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBicmluZ2luZyBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5XCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcIm1lbWJlclwiOiBcIi90ZWFtL1ttZW1iZXJdXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjpcIi9hYm91dC11c1wiLCAgXHJcbiAgICAgICAgICAgIFwiYm9hcmQtb2YtZGlyZWN0b3JzXCI6XCIvYWJvdXQtdXMvY29ycG9yYXRlLWdvdmVybmFuY2UvYm9hcmQtb2YtZGlyZWN0b3JzL1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiaW52ZXN0b3ItcHJlc2VudGF0aW9uc1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPmFuZCBhbHdheXMgY2hhbGxlbmdlIG91cnNlbHZlcyB0byBkZWxpdmVyIHN1cGVyaW9yIHBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcInJlc3VsdHMtcmVwb3J0cy1wcmVzZW50YXRpb25zXCI6IFwiL3Jlc3VsdHMtcmVwb3J0cy1wcmVzZW50YXRpb25zL3Jlc3VsdHMtYW5ub3VuY2VtZW50c1wiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImNvbmZlcmVuY2UtY2FsbC10cmFuc2NyaXB0c1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPmFuZCBhbHdheXMgY2hhbGxlbmdlIG91cnNlbHZlcyB0byBkZWxpdmVyIHN1cGVyaW9yIHBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcInJlc3VsdHMtcmVwb3J0cy1wcmVzZW50YXRpb25zXCI6IFwiL3Jlc3VsdHMtcmVwb3J0cy1wcmVzZW50YXRpb25zL3Jlc3VsdHMtYW5ub3VuY2VtZW50c1wiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImZpbmFuY2lhbHMtc3Vic2lkaWFyaWVzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0ludmVzdG9ycy1CYW5uZXItSW1nLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFJPQlVTVCBGSU5BTkNJQUxTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYmVsaWV2ZSB0aGF0IGV4ZWN1dGlvbiBpcyBldmVyeXRoaW5nIDxici8+YW5kIGFsd2F5cyBjaGFsbGVuZ2Ugb3Vyc2VsdmVzIHRvIGRlbGl2ZXIgc3VwZXJpb3IgcGVyZm9ybWFuY2VcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiaW52ZXN0b3JzXCI6IFwiL2ludmVzdG9yc1wiLCAgXHJcbiAgICAgICAgICAgIFwicmVzdWx0cy1yZXBvcnRzLXByZXNlbnRhdGlvbnNcIjogXCIvcmVzdWx0cy1yZXBvcnRzLXByZXNlbnRhdGlvbnMvcmVzdWx0cy1hbm5vdW5jZW1lbnRzXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiY3JlZGl0LXJhdGluZ1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPmFuZCBhbHdheXMgY2hhbGxlbmdlIG91cnNlbHZlcyB0byBkZWxpdmVyIHN1cGVyaW9yIHBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcInJlc3VsdHMtcmVwb3J0cy1wcmVzZW50YXRpb25zXCI6IFwiL3Jlc3VsdHMtcmVwb3J0cy1wcmVzZW50YXRpb25zL3Jlc3VsdHMtYW5ub3VuY2VtZW50c1wiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImRpc2Nsb3N1cmUtb2YtZXZlbnRzLW9yLWluZm9ybWF0aW9uXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0ludmVzdG9ycy1CYW5uZXItSW1nLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFJPQlVTVCBGSU5BTkNJQUxTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYmVsaWV2ZSB0aGF0IGV4ZWN1dGlvbiBpcyBldmVyeXRoaW5nIDxici8+YW5kIGFsd2F5cyBjaGFsbGVuZ2Ugb3Vyc2VsdmVzIHRvIGRlbGl2ZXIgc3VwZXJpb3IgcGVyZm9ybWFuY2VcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiaW52ZXN0b3JzXCI6IFwiL2ludmVzdG9yc1wiLCAgXHJcbiAgICAgICAgICAgIFwicmVzdWx0cy1yZXBvcnRzLXByZXNlbnRhdGlvbnNcIjogXCIvcmVzdWx0cy1yZXBvcnRzLXByZXNlbnRhdGlvbnMvcmVzdWx0cy1hbm5vdW5jZW1lbnRzXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwicmVsYXRlZC1wYXJ0eS10cmFuc2FjdGlvbnNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgUk9CVVNUIEZJTkFOQ0lBTFNcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBiZWxpZXZlIHRoYXQgZXhlY3V0aW9uIGlzIGV2ZXJ5dGhpbmcgPGJyLz5hbmQgYWx3YXlzIGNoYWxsZW5nZSBvdXJzZWx2ZXMgdG8gZGVsaXZlciBzdXBlcmlvciBwZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJpbnZlc3RvcnNcIjogXCIvaW52ZXN0b3JzXCIsICBcclxuICAgICAgICAgICAgXCJyZXN1bHRzLXJlcG9ydHMtcHJlc2VudGF0aW9uc1wiOiBcIi9yZXN1bHRzLXJlcG9ydHMtcHJlc2VudGF0aW9ucy9yZXN1bHRzLWFubm91bmNlbWVudHNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJhbm51YWwtcmV0dXJuc1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPmFuZCBhbHdheXMgY2hhbGxlbmdlIG91cnNlbHZlcyB0byBkZWxpdmVyIHN1cGVyaW9yIHBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcInJlc3VsdHMtcmVwb3J0cy1wcmVzZW50YXRpb25zXCI6IFwiL3Jlc3VsdHMtcmVwb3J0cy1wcmVzZW50YXRpb25zL3Jlc3VsdHMtYW5ub3VuY2VtZW50c1wiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImFubnVhbC1zZWNyZXRhcmlhbC1jb21wbGlhbmNlLXJlcG9ydFwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPmFuZCBhbHdheXMgY2hhbGxlbmdlIG91cnNlbHZlcyB0byBkZWxpdmVyIHN1cGVyaW9yIHBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcInJlc3VsdHMtcmVwb3J0cy1wcmVzZW50YXRpb25zXCI6IFwiL3Jlc3VsdHMtcmVwb3J0cy1wcmVzZW50YXRpb25zL3Jlc3VsdHMtYW5ub3VuY2VtZW50c1wiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcInJlc3VsdHMtYW5ub3VuY2VtZW50c1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPmFuZCBhbHdheXMgY2hhbGxlbmdlIG91cnNlbHZlcyB0byBkZWxpdmVyIHN1cGVyaW9yIHBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcInJlc3VsdHMtcmVwb3J0cy1wcmVzZW50YXRpb25zXCI6IFwiL3Jlc3VsdHMtcmVwb3J0cy1wcmVzZW50YXRpb25zL3Jlc3VsdHMtYW5ub3VuY2VtZW50c1wiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcInNoYXJlaG9sZGVyLWluZm9ybWF0aW9uXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0ludmVzdG9ycy1CYW5uZXItSW1nLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFJPQlVTVCBGSU5BTkNJQUxTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYmVsaWV2ZSB0aGF0IGV4ZWN1dGlvbiBpcyBldmVyeXRoaW5nIDxici8+YW5kIGFsd2F5cyBjaGFsbGVuZ2Ugb3Vyc2VsdmVzIHRvIGRlbGl2ZXIgc3VwZXJpb3IgcGVyZm9ybWFuY2VcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiaW52ZXN0b3JzXCI6IFwiL2ludmVzdG9yc1wiLCAgXHJcbiAgICAgICAgICAgIFwic2hhcmVob2xkZXItaW5mb3JtYXRpb25cIjogXCIvc2hhcmVob2xkZXItaW5mb3JtYXRpb24vc2hhcmVob2xkZXItc3RydWN0dXJlXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwic2hhcmVob2xkZXItc3RydWN0dXJlXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0ludmVzdG9ycy1CYW5uZXItSW1nLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFJPQlVTVCBGSU5BTkNJQUxTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYmVsaWV2ZSB0aGF0IGV4ZWN1dGlvbiBpcyBldmVyeXRoaW5nIDxici8+YW5kIGFsd2F5cyBjaGFsbGVuZ2Ugb3Vyc2VsdmVzIHRvIGRlbGl2ZXIgc3VwZXJpb3IgcGVyZm9ybWFuY2VcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiaW52ZXN0b3JzXCI6IFwiL2ludmVzdG9yc1wiLCAgXHJcbiAgICAgICAgICAgIFwic2hhcmVob2xkZXItaW5mb3JtYXRpb25cIjogXCIvc2hhcmVob2xkZXItaW5mb3JtYXRpb24vc2hhcmVob2xkZXItc3RydWN0dXJlXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwic2hhcmUtcGVyZm9ybWFuY2VcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvSW52ZXN0b3JzLUJhbm5lci1JbWcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgUk9CVVNUIEZJTkFOQ0lBTFNcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBiZWxpZXZlIHRoYXQgZXhlY3V0aW9uIGlzIGV2ZXJ5dGhpbmcgPGJyLz5hbmQgYWx3YXlzIGNoYWxsZW5nZSBvdXJzZWx2ZXMgdG8gZGVsaXZlciBzdXBlcmlvciBwZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJpbnZlc3RvcnNcIjogXCIvaW52ZXN0b3JzXCIsICBcclxuICAgICAgICAgICAgXCJzaGFyZWhvbGRlci1pbmZvcm1hdGlvblwiOiBcIi9zaGFyZWhvbGRlci1pbmZvcm1hdGlvbi9zaGFyZWhvbGRlci1zdHJ1Y3R1cmVcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJmaW5hbmNpYWwtaGlnaGxpZ2h0c1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPmFuZCBhbHdheXMgY2hhbGxlbmdlIG91cnNlbHZlcyB0byBkZWxpdmVyIHN1cGVyaW9yIHBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcInNoYXJlaG9sZGVyLWluZm9ybWF0aW9uXCI6IFwiL3NoYXJlaG9sZGVyLWluZm9ybWF0aW9uL3NoYXJlaG9sZGVyLXN0cnVjdHVyZVwiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIm5vdGljZS1vZi1ib2FyZC1tZWV0aW5nXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0ludmVzdG9ycy1CYW5uZXItSW1nLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFJPQlVTVCBGSU5BTkNJQUxTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYmVsaWV2ZSB0aGF0IGV4ZWN1dGlvbiBpcyBldmVyeXRoaW5nIDxici8+YW5kIGFsd2F5cyBjaGFsbGVuZ2Ugb3Vyc2VsdmVzIHRvIGRlbGl2ZXIgc3VwZXJpb3IgcGVyZm9ybWFuY2VcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiaW52ZXN0b3JzXCI6IFwiL2ludmVzdG9yc1wiLCAgXHJcbiAgICAgICAgICAgIFwic2hhcmVob2xkZXItaW5mb3JtYXRpb25cIjogXCIvc2hhcmVob2xkZXItaW5mb3JtYXRpb24vc2hhcmVob2xkZXItc3RydWN0dXJlXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiZ2VuZXJhbC1tZWV0aW5nc1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPmFuZCBhbHdheXMgY2hhbGxlbmdlIG91cnNlbHZlcyB0byBkZWxpdmVyIHN1cGVyaW9yIHBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcInNoYXJlaG9sZGVyLWluZm9ybWF0aW9uXCI6IFwiL3NoYXJlaG9sZGVyLWluZm9ybWF0aW9uL3NoYXJlaG9sZGVyLXN0cnVjdHVyZVwiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImRpdmlkZW5kLXJlY29yZHNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvSW52ZXN0b3JzLUJhbm5lci1JbWcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgUk9CVVNUIEZJTkFOQ0lBTFNcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBiZWxpZXZlIHRoYXQgZXhlY3V0aW9uIGlzIGV2ZXJ5dGhpbmcgPGJyLz5hbmQgYWx3YXlzIGNoYWxsZW5nZSBvdXJzZWx2ZXMgdG8gZGVsaXZlciBzdXBlcmlvciBwZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJpbnZlc3RvcnNcIjogXCIvaW52ZXN0b3JzXCIsICBcclxuICAgICAgICAgICAgXCJzaGFyZWhvbGRlci1pbmZvcm1hdGlvblwiOiBcIi9zaGFyZWhvbGRlci1pbmZvcm1hdGlvbi9zaGFyZWhvbGRlci1zdHJ1Y3R1cmVcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJzY2hlbWUtb2YtYXJyYW5nZW1lbnRzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0ludmVzdG9ycy1CYW5uZXItSW1nLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFJPQlVTVCBGSU5BTkNJQUxTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYmVsaWV2ZSB0aGF0IGV4ZWN1dGlvbiBpcyBldmVyeXRoaW5nIDxici8+YW5kIGFsd2F5cyBjaGFsbGVuZ2Ugb3Vyc2VsdmVzIHRvIGRlbGl2ZXIgc3VwZXJpb3IgcGVyZm9ybWFuY2VcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiaW52ZXN0b3JzXCI6IFwiL2ludmVzdG9yc1wiLCAgXHJcbiAgICAgICAgICAgIFwic2hhcmVob2xkZXItaW5mb3JtYXRpb25cIjogXCIvc2hhcmVob2xkZXItaW5mb3JtYXRpb24vc2hhcmVob2xkZXItc3RydWN0dXJlXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwidW5wYWlkLWRpdmlkZW5kLWFjY291bnQtZGV0YWlsc1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPmFuZCBhbHdheXMgY2hhbGxlbmdlIG91cnNlbHZlcyB0byBkZWxpdmVyIHN1cGVyaW9yIHBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcInNoYXJlaG9sZGVyLWluZm9ybWF0aW9uXCI6IFwiL3NoYXJlaG9sZGVyLWluZm9ybWF0aW9uL3NoYXJlaG9sZGVyLXN0cnVjdHVyZVwiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcInJlZ2lzdHJhci1hbmQtc2hhcmUtdHJhbnNmZXItYWdlbnRcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvSW52ZXN0b3JzLUJhbm5lci1JbWcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgUk9CVVNUIEZJTkFOQ0lBTFNcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBiZWxpZXZlIHRoYXQgZXhlY3V0aW9uIGlzIGV2ZXJ5dGhpbmcgPGJyLz5hbmQgYWx3YXlzIGNoYWxsZW5nZSBvdXJzZWx2ZXMgdG8gZGVsaXZlciBzdXBlcmlvciBwZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJpbnZlc3RvcnNcIjogXCIvaW52ZXN0b3JzXCIsICBcclxuICAgICAgICAgICAgXCJzaGFyZWhvbGRlci1pbmZvcm1hdGlvblwiOiBcIi9zaGFyZWhvbGRlci1pbmZvcm1hdGlvbi9zaGFyZWhvbGRlci1zdHJ1Y3R1cmVcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJnZW5lcmFsXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFJPQlVTVCBGSU5BTkNJQUxTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYmVsaWV2ZSB0aGF0IGV4ZWN1dGlvbiBpcyBldmVyeXRoaW5nIDxici8+YW5kIGFsd2F5cyBjaGFsbGVuZ2Ugb3Vyc2VsdmVzIHRvIGRlbGl2ZXIgc3VwZXJpb3IgcGVyZm9ybWFuY2VcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiaW52ZXN0b3JzXCI6IFwiL2ludmVzdG9yc1wiLCAgXHJcbiAgICAgICAgICAgIFwic2hhcmVob2xkZXItaW5mb3JtYXRpb25cIjogXCIvc2hhcmVob2xkZXItaW5mb3JtYXRpb24vc2hhcmVob2xkZXItc3RydWN0dXJlXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiY29ycG9yYXRlLWdvdmVybmFuY2VcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgUk9CVVNUIEZJTkFOQ0lBTFNcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBiZWxpZXZlIHRoYXQgZXhlY3V0aW9uIGlzIGV2ZXJ5dGhpbmcgPGJyLz5hbmQgYWx3YXlzIGNoYWxsZW5nZSBvdXJzZWx2ZXMgdG8gZGVsaXZlciBzdXBlcmlvciBwZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJpbnZlc3RvcnNcIjogXCIvaW52ZXN0b3JzXCIsICBcclxuICAgICAgICAgICAgXCJjb3Jwb3JhdGUtZ292ZXJuYW5jZVwiOiBcIi9pbnZlc3RvcnMvY29ycG9yYXRlLWdvdmVybmFuY2VcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJib2FyZC1vZi1kaXJlY3RvcnNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz5leGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcImNvcnBvcmF0ZS1nb3Zlcm5hbmNlXCI6IFwiL2ludmVzdG9ycy9jb3Jwb3JhdGUtZ292ZXJuYW5jZVwiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImJvYXJkLWNvbW1pdHRlZXNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz5leGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcImNvcnBvcmF0ZS1nb3Zlcm5hbmNlXCI6IFwiL2ludmVzdG9ycy9jb3Jwb3JhdGUtZ292ZXJuYW5jZVwiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAgXHJcbiAgICBcImdvdmVybmFuY2UtcG9saWNpZXNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJpbnZlc3RvcnNcIjogXCIvaW52ZXN0b3JzXCIsICBcclxuICAgICAgICAgICAgXCJjb3Jwb3JhdGUtZ292ZXJuYW5jZVwiOiBcIi9pbnZlc3RvcnMvY29ycG9yYXRlLWdvdmVybmFuY2VcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJjb2RlLW9mLWNvbmR1Y3RcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvSW52ZXN0b3JzLUJhbm5lci1JbWcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgUk9CVVNUIEZJTkFOQ0lBTFNcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBiZWxpZXZlIHRoYXQgZXhlY3V0aW9uIGlzIGV2ZXJ5dGhpbmcgPGJyLz5hbmQgYWx3YXlzIGNoYWxsZW5nZSBvdXJzZWx2ZXMgdG8gZGVsaXZlciBzdXBlcmlvciBwZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJpbnZlc3RvcnNcIjogXCIvaW52ZXN0b3JzXCIsICBcclxuICAgICAgICAgICAgXCJjb3Jwb3JhdGUtZ292ZXJuYW5jZVwiOiBcIi9pbnZlc3RvcnMvY29ycG9yYXRlLWdvdmVybmFuY2VcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJjb2RlLW9mLXByYWN0aWNlcy1hbmQtcHJvY2VkdXJlcy1mb3ItZmFpci1kaXNjbG9zdXJlXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0ludmVzdG9ycy1CYW5uZXItSW1nLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFJPQlVTVCBGSU5BTkNJQUxTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYmVsaWV2ZSB0aGF0IGV4ZWN1dGlvbiBpcyBldmVyeXRoaW5nIDxici8+YW5kIGFsd2F5cyBjaGFsbGVuZ2Ugb3Vyc2VsdmVzIHRvIGRlbGl2ZXIgc3VwZXJpb3IgcGVyZm9ybWFuY2VcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiaW52ZXN0b3JzXCI6IFwiL2ludmVzdG9yc1wiLCAgXHJcbiAgICAgICAgICAgIFwiY29ycG9yYXRlLWdvdmVybmFuY2VcIjogXCIvaW52ZXN0b3JzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiYXBwb2ludG1lbnQtYW5kLXJlc2lnbmF0aW9uLW9mLWRpcmVjdG9yc1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPmFuZCBhbHdheXMgY2hhbGxlbmdlIG91cnNlbHZlcyB0byBkZWxpdmVyIHN1cGVyaW9yIHBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcImNvcnBvcmF0ZS1nb3Zlcm5hbmNlXCI6IFwiL2ludmVzdG9ycy9jb3Jwb3JhdGUtZ292ZXJuYW5jZVwiIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImlyLWNvbnRhY3RzXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0ludmVzdG9ycy1CYW5uZXItSW1nLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFJPQlVTVCBGSU5BTkNJQUxTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYmVsaWV2ZSB0aGF0IGV4ZWN1dGlvbiBpcyBldmVyeXRoaW5nIDxici8+YW5kIGFsd2F5cyBjaGFsbGVuZ2Ugb3Vyc2VsdmVzIHRvIGRlbGl2ZXIgc3VwZXJpb3IgcGVyZm9ybWFuY2VcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiaW52ZXN0b3JzXCI6IFwiL2ludmVzdG9yc1wiLCAgXHJcbiAgICAgICAgICAgIFwiaXItY29udGFjdHNcIjogXCIvaXItY29udGFjdHMvcGhvbmUtbnVtYmVycy1lbWFpbC1hZGRyZXNzZXNcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJwaG9uZS1udW1iZXJzLWVtYWlsLWFkZHJlc3Nlc1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPmFuZCBhbHdheXMgY2hhbGxlbmdlIG91cnNlbHZlcyB0byBkZWxpdmVyIHN1cGVyaW9yIHBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImludmVzdG9yc1wiOiBcIi9pbnZlc3RvcnNcIiwgIFxyXG4gICAgICAgICAgICBcImlyLWNvbnRhY3RzXCI6IFwiL2lyLWNvbnRhY3RzL3Bob25lLW51bWJlcnMtZW1haWwtYWRkcmVzc2VzXCIgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwibWVkaWFcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvTWVkaWEtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiUkVJTkZPUkNJTkcgQSBDVUxUVVJFIE9GIE9XTkVSU0hJUFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIkZvY3VzIG9uIGlubm92YXRpdmUgc2NpZW5jZSBpbiBrZXkgdGhlcmFweSBhcmVhcyA8YnIvPiBhbmQgaW5vcmdhbmljIGdyb3d0aFwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJtZWRpYVwiOiBcIi9tZWRpYVwiICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJwcmVzcy1yZWxlYXNlc1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9NZWRpYS1CYW5uZXItSW1nLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJSRUlORk9SQ0lORyBBIENVTFRVUkUgT0YgT1dORVJTSElQXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiRm9jdXMgb24gaW5ub3ZhdGl2ZSBzY2llbmNlIGluIGtleSB0aGVyYXB5IGFyZWFzIDxici8+IGFuZCBpbm9yZ2FuaWMgZ3Jvd3RoXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcIm1lZGlhXCI6IFwiL21lZGlhXCIsICBcclxuICAgICAgICAgICAgXCJwcmVzcy1yZWxlYXNlc1wiOiBcIi9tZWRpYS9wcmVzcy1yZWxlYXNlcy9jb3Jwb3JhdGUtYW5ub3VuY2VtZW50c1wiICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJjb3Jwb3JhdGUtYW5ub3VuY2VtZW50c1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9NZWRpYS1CYW5uZXItSW1nMS5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiUkVJTkZPUkNJTkcgQSBDVUxUVVJFIE9GIE9XTkVSU0hJUFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIkZvY3VzIG9uIGlubm92YXRpdmUgc2NpZW5jZSBpbiBrZXkgdGhlcmFweSBhcmVhcyA8YnIvPiBhbmQgaW5vcmdhbmljIGdyb3d0aFwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJtZWRpYVwiOiBcIi9tZWRpYVwiLCAgXHJcbiAgICAgICAgICAgIFwicHJlc3MtcmVsZWFzZXNcIjogXCIvbWVkaWEvcHJlc3MtcmVsZWFzZXMvY29ycG9yYXRlLWFubm91bmNlbWVudHNcIiAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwibWVkaWEta2l0XCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL01lZGlhLUJhbm5lci1JbWcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIlJFSU5GT1JDSU5HIEEgQ1VMVFVSRSBPRiBPV05FUlNISVBcIixcclxuICAgICAgICBiY29udGVudDogXCJGb2N1cyBvbiBpbm5vdmF0aXZlIHNjaWVuY2UgaW4ga2V5IHRoZXJhcHkgYXJlYXMgPGJyLz4gYW5kIGlub3JnYW5pYyBncm93dGhcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwibWVkaWFcIjogXCIvbWVkaWFcIiwgIFxyXG4gICAgICAgICAgICBcIm1lZGlhLWtpdFwiOiBcIi9tZWRpYS9tZWRpYS1raXQvZmFjdC1zaGVldFwiICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgIFwiZmFjdC1zaGVldFwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9NZWRpYS1CYW5uZXItSW1nMS5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiUkVJTkZPUkNJTkcgQSBDVUxUVVJFIE9GIE9XTkVSU0hJUFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIkZvY3VzIG9uIGlubm92YXRpdmUgc2NpZW5jZSBpbiBrZXkgdGhlcmFweSBhcmVhcyA8YnIvPiBhbmQgaW5vcmdhbmljIGdyb3d0aFwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJtZWRpYVwiOiBcIi9tZWRpYVwiLCAgXHJcbiAgICAgICAgICAgIFwibWVkaWEta2l0XCI6IFwiL21lZGlhL21lZGlhLWtpdC9mYWN0LXNoZWV0XCIgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcInZpZGVvc1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9NZWRpYS1CYW5uZXItSW1nMS5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiUkVJTkZPUkNJTkcgQSBDVUxUVVJFIE9GIE9XTkVSU0hJUFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIkZvY3VzIG9uIGlubm92YXRpdmUgc2NpZW5jZSBpbiBrZXkgdGhlcmFweSBhcmVhcyA8YnIvPiBhbmQgaW5vcmdhbmljIGdyb3d0aFwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJtZWRpYVwiOiBcIi9tZWRpYVwiLCAgXHJcbiAgICAgICAgICAgIFwibWVkaWEta2l0XCI6IFwiL21lZGlhL21lZGlhLWtpdC9mYWN0LXNoZWV0XCIgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIm9mZmljaWFsLWxvZ29zXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL01lZGlhLUJhbm5lci1JbWcxLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJSRUlORk9SQ0lORyBBIENVTFRVUkUgT0YgT1dORVJTSElQXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiRm9jdXMgb24gaW5ub3ZhdGl2ZSBzY2llbmNlIGluIGtleSB0aGVyYXB5IGFyZWFzIDxici8+IGFuZCBpbm9yZ2FuaWMgZ3Jvd3RoXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcIm1lZGlhXCI6IFwiL21lZGlhXCIsICBcclxuICAgICAgICAgICAgXCJtZWRpYS1raXRcIjogXCIvbWVkaWEvbWVkaWEta2l0L2ZhY3Qtc2hlZXRcIiAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiY2FyZWVyc1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9DYXJlZXJzLUJhbm5lci1JbWcyLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJEUklWSU5HIEEgUEVPUExFIEZPQ1VTRUQgQ1VMVFVSRVwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIkVuc3VyZSBlZmZlY3RpdmUgb3JnYW5pemF0aW9uLCBsZWFkZXJzaGlwLCA8YnIvPiB0YWxlbnQgbWFuYWdlbWVudCBhbmQgcmVjcnVpdG1lbnRcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiY2FyZWVyc1wiOiBcIi9jYXJlZXJzXCIgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImhyLW1pc3Npb24tYW5kLXZpc2lvblwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9DYXJlZXJzLUJhbm5lci1JbWcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRSSVZJTkcgQSBQRU9QTEUgRk9DVVNFRCBDVUxUVVJFXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiRW5zdXJlIGVmZmVjdGl2ZSBvcmdhbml6YXRpb24sIGxlYWRlcnNoaXAsIDxici8+IHRhbGVudCBtYW5hZ2VtZW50IGFuZCByZWNydWl0bWVudFwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJjYXJlZXJzXCI6IFwiL2NhcmVlcnNcIiAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiY29udGFjdC11c1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9Db250YWN0LUJhbm5lci1JbWc0NC5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiQlVJTERJTkcgVEhFIEZVVFVSRVwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIHZhbHVlIHlvdXIgZmVlZGJhY2sgYXMgd2UgYXJlIGNvbW1pdHRlZCA8YnIvPiB0byBjb250aW51b3VzbHkgaW1wcm92aW5nIG91ciBwcm9kdWN0cyBhbmQgc2VydmljZXNcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiY29udGFjdC11c1wiOiBcIi9jb250YWN0LXVzXCIgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImdyb3VwLWRpdmlzaW9uLW9mZmljZXNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvQ29udGFjdC1CYW5uZXItSW1nNDQuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkJVSUxESU5HIFRIRSBGVVRVUkVcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSB2YWx1ZSB5b3VyIGZlZWRiYWNrIGFzIHdlIGFyZSBjb21taXR0ZWQgPGJyLz4gdG8gY29udGludW91c2x5IGltcHJvdmluZyBvdXIgcHJvZHVjdHMgYW5kIHNlcnZpY2VzXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImNvbnRhY3QtdXNcIjogXCIvY29udGFjdC11c1wiICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJnZW5lcmFsLWlucXVpcmllc1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9Db250YWN0LUJhbm5lci1JbWc0NC5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiQlVJTERJTkcgVEhFIEZVVFVSRVwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIHZhbHVlIHlvdXIgZmVlZGJhY2sgYXMgd2UgYXJlIGNvbW1pdHRlZCA8YnIvPiB0byBjb250aW51b3VzbHkgaW1wcm92aW5nIG91ciBwcm9kdWN0cyBhbmQgc2VydmljZXNcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiY29udGFjdC11c1wiOiBcIi9jb250YWN0LXVzXCIgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImFkdmVyc2UtZXZlbnQtcmVwb3J0aW5nXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0NvbnRhY3QtQmFubmVyLUltZzQ0LmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJCVUlMRElORyBUSEUgRlVUVVJFXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgdmFsdWUgeW91ciBmZWVkYmFjayBhcyB3ZSBhcmUgY29tbWl0dGVkIDxici8+IHRvIGNvbnRpbnVvdXNseSBpbXByb3Zpbmcgb3VyIHByb2R1Y3RzIGFuZCBzZXJ2aWNlc1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJjb250YWN0LXVzXCI6IFwiL2NvbnRhY3QtdXNcIiAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiZW5xdWlyeVwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9Db250YWN0LUJhbm5lci1JbWc0NC5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiQlVJTERJTkcgVEhFIEZVVFVSRVwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIHZhbHVlIHlvdXIgZmVlZGJhY2sgYXMgd2UgYXJlIGNvbW1pdHRlZCA8YnIvPiB0byBjb250aW51b3VzbHkgaW1wcm92aW5nIG91ciBwcm9kdWN0cyBhbmQgc2VydmljZXNcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiY29udGFjdC11c1wiOiBcIi9jb250YWN0LXVzXCIgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIFwicHJpdmFjeS1wb2xpY3lcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBicmluZ2luZyBleGNlbGxlbmNlIGluIGFsbCB0aGF0IDxici8+IHdlIGRvIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5XCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcInByaXZhY3ktcG9saWN5XCI6IFwiL3ByaXZhY3ktcG9saWN5XCIgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJzaXRlLW1hcFwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGJyaW5naW5nIGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgPGJyLz4gd2UgZG8gZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHlcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwic2l0ZS1tYXBcIjogXCIvc2l0ZS1tYXBcIiAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiNDA0XCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL0NhcmVlcnMtQmFubmVyLUltZzIuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkJVSUxESU5HIFRIRSBGVVRVUkVcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSB2YWx1ZSB5b3VyIGZlZWRiYWNrIGFzIHdlIGFyZSBjb21taXR0ZWQgPGJyLz4gdG8gY29udGludW91c2x5IGltcHJvdmluZyBvdXIgcHJvZHVjdHMgYW5kIHNlcnZpY2VzXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIjUwMFwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9DYXJlZXJzLUJhbm5lci1JbWcyLmpwZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJCVUlMRElORyBUSEUgRlVUVVJFXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgdmFsdWUgeW91ciBmZWVkYmFjayBhcyB3ZSBhcmUgY29tbWl0dGVkIDxici8+IHRvIGNvbnRpbnVvdXNseSBpbXByb3Zpbmcgb3VyIHByb2R1Y3RzIGFuZCBzZXJ2aWNlc1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwib3VyLWNvbW1pdG1lbnRcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvc3VzdGFpbmFiaWxpdHktaW1nLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFJPQlVTVCBGSU5BTkNJQUxTXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYmVsaWV2ZSB0aGF0IGV4ZWN1dGlvbiBpcyBldmVyeXRoaW5nIDxici8+YW5kIGFsd2F5cyBjaGFsbGVuZ2Ugb3Vyc2VsdmVzIHRvIGRlbGl2ZXIgc3VwZXJpb3IgcGVyZm9ybWFuY2VcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgXCJzdXN0YWluYWJpbGl0eVwiOiBcIi9zdXN0YWluYWJpbGl0eVwiLCAgXHJcbiAgICAgICAgICAgIFwib3VyLWNvbW1pdG1lbnRcIjogXCIvc3VzdGFpbmFiaWxpdHkvb3VyLWNvbW1pdG1lbnRcIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiYXVyb2JpbmRvLWZvdW5kYXRpb25cIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvc3VzdGFpbmFiaWxpdHktaW1nLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJTSEFQSU5HIEhPTElTVElDIENPTU1VTklUWSBXRUxMLUJFSU5HXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPmV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgXCJzdXN0YWluYWJpbGl0eVwiOiBcIi9zdXN0YWluYWJpbGl0eVwiLCAgXHJcbiAgICAgICAgICAgIFwiYXVyb2JpbmRvLWZvdW5kYXRpb25cIjogXCIvc3VzdGFpbmFiaWxpdHkvYXVyb2JpbmRvLWZvdW5kYXRpb25cIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiYW5udWFsLWFjdGlvbi1wbGFuXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL3N1c3RhaW5hYmlsaXR5LWltZy5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiU0hBUElORyBIT0xJU1RJQyBDT01NVU5JVFkgV0VMTC1CRUlOR1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz5leGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgIFwic3VzdGFpbmFiaWxpdHlcIjogXCIvc3VzdGFpbmFiaWxpdHlcIiwgIFxyXG4gICAgICAgICAgICBcImFubnVhbC1hY3Rpb24tcGxhblwiOiBcIi9zdXN0YWluYWJpbGl0eS9hbm51YWwtYWN0aW9uLXBsYW5cIiBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiY3NyZ2FsbGVyeVwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9zdXN0YWluYWJpbGl0eS1pbWcucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIlNIQVBJTkcgSE9MSVNUSUMgQ09NTVVOSVRZIFdFTEwtQkVJTkdcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+ZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICBcInN1c3RhaW5hYmlsaXR5XCI6IFwiL3N1c3RhaW5hYmlsaXR5XCIsICBcclxuICAgICAgICAgICAgXCJjc3JnYWxsZXJ5XCI6IFwiL3N1c3RhaW5hYmlsaXR5L2NzcmdhbGxlcnlcIiBcclxuICAgICAgICB9XHJcbiAgICB9LCAgXHJcbiBcclxuICAgIFwibXItay1yYWd1bmF0aGFuXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjpcIi9hYm91dC11c1wiLCAgXHJcbiAgICAgICAgICAgIFwiYm9hcmQtb2YtZGlyZWN0b3JzXCI6XCIvYWJvdXQtdXMvY29ycG9yYXRlLWdvdmVybmFuY2UvYm9hcmQtb2YtZGlyZWN0b3JzL1wiICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwibXJrcmFndW5hdGhhblwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImFib3V0LXVzXCI6IFwiL2Fib3V0LXVzXCIsXHJcbiAgICAgICAgICAgIFwiYm9hcmQtb2YtZGlyZWN0b3JzXCI6XCIvYWJvdXQtdXMvY29ycG9yYXRlLWdvdmVybmFuY2UvYm9hcmQtb2YtZGlyZWN0b3JzL1wiXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcIjIwMjEtMlwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImFubm91bmNlbWVudFwiOiBcIi9cIiwgIFxyXG4gICAgICAgICAgICBcIjIwMjEtMlwiOiBcIi9hbm5vdW5jZW1lbnQvMjAyMS0yXCIgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiMjAxOS0yMDIwXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiYW5ub3VuY2VtZW50XCI6IFwiL1wiLCAgXHJcbiAgICAgICAgICAgIFwiMjAxOS0yMDIwXCI6IFwiL2Fubm91bmNlbWVudC8yMDE5LTIwMjBcIiBcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCIyMDE0LTE2XCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7IFxyXG4gICAgICAgICAgICBcIjIwMTQtMTZcIjogXCIvYW5ub3VuY2VtZW50LzIwMTQtMTZcIiBcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCIyMDEzLTJcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJhbm5vdW5jZW1lbnRcIjogXCIvXCIsICBcclxuICAgICAgICAgICAgXCIyMDEzLTJcIjogXCIvYW5ub3VuY2VtZW50LzIwMTMtMlwiIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIjIwMDktMTJcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJhbm5vdW5jZW1lbnRcIjogXCIvXCIsICBcclxuICAgICAgICAgICAgXCIyMDA5LTEyXCI6IFwiL2Fubm91bmNlbWVudC8yMDA5LTEyXCIgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiMjAwNi0wOFwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImFubm91bmNlbWVudFwiOiBcIi9cIiwgIFxyXG4gICAgICAgICAgICBcIjIwMDYtMDhcIjogXCIvYW5ub3VuY2VtZW50LzIwMDYtMDhcIiBcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCIyMDAzLTIwMDRcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJhbm5vdW5jZW1lbnRcIjogXCIvXCIsICBcclxuICAgICAgICAgICAgXCIyMDAzLTIwMDRcIjogXCIvYW5ub3VuY2VtZW50LzIwMDMtMjAwNFwiIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIjIwMDEtMjAwMi0yXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiYW5ub3VuY2VtZW50XCI6IFwiL1wiLCAgXHJcbiAgICAgICAgICAgIFwiMjAwMS0yMDAyLTJcIjogXCIvYW5ub3VuY2VtZW50LzIwMDEtMjAwMi0yXCIgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcIjE5OTktMjAwMFwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImFubm91bmNlbWVudFwiOiBcIi9cIiwgIFxyXG4gICAgICAgICAgICBcIjE5OTktMjAwMFwiOiBcIi9hbm5vdW5jZW1lbnQvMTk5OS0yMDAwXCIgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiMTk5Ny0xOTk4XCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiYW5ub3VuY2VtZW50XCI6IFwiL1wiLCAgXHJcbiAgICAgICAgICAgIFwiMTk5Ny0xOTk4XCI6IFwiL2Fubm91bmNlbWVudC8xOTk3LTE5OThcIiBcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiMTk5NC0xOTk1XCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiYW5ub3VuY2VtZW50XCI6IFwiL1wiLCAgXHJcbiAgICAgICAgICAgIFwiMTk5NC0xOTk1XCI6IFwiL2Fubm91bmNlbWVudC8xOTk0LTE5OTVcIiBcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCIxOTkyLTIwMDZcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJhbm5vdW5jZW1lbnRcIjogXCIvXCIsICBcclxuICAgICAgICAgICAgXCIxOTkyLTIwMDZcIjogXCIvYW5ub3VuY2VtZW50LzE5OTItMjAwNlwiIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCIxOTkyLTE5OTNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJhbm5vdW5jZW1lbnRcIjogXCIvXCIsICBcclxuICAgICAgICAgICAgXCIxOTkyLTE5OTNcIjogXCIvYW5ub3VuY2VtZW50LzE5OTItMTk5M1wiIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCIxOTg4LTE4OVwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcImFubm91bmNlbWVudFwiOiBcIi9cIiwgIFxyXG4gICAgICAgICAgICBcIjE5ODgtMTg5XCI6IFwiL2Fubm91bmNlbWVudC8xOTg4LTE4OVwiICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiMTk4Ni0yXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiYW5ub3VuY2VtZW50XCI6IFwiL1wiLCAgXHJcbiAgICAgICAgICAgIFwiMTk4Ni0yXCI6IFwiL2Fubm91bmNlbWVudC8xOTg2LTJcIiAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcIjY3MC0yXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7IFxyXG4gICAgICAgICAgICBcIjY3MC0yXCI6IFwiL2Fubm91bmNlbWVudC82NzAtMlwiICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwic2VhcmNoXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7ICBcclxuICAgICAgICAgICAgXCJzZWFyY2hcIjogXCIvc2VhcmNoXCIgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJbbWVtYmVyXVwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDogeyAgXHJcbiAgICAgICAgICAgICBcImNvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIgOiBcIi9hYm91dC11cy9jb3Jwb3JhdGUtZ292ZXJuYW5jZVwiLFxyXG4gICAgICAgICAgICBcImFib3V0LXVzXCI6IFwiL2Fib3V0LXVzXCIgLFxyXG4gICAgICAgICAgICBcImJvYXJkLWNvbW1pdHRlZXNcIjpcIi9ib2FyZC1jb21taXR0ZWVzXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwibXItay1uaXR5YW5hbmRhLXJlZGR5XCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7ICBcclxuICAgICAgICAgICAgIFwiY29ycG9yYXRlLWdvdmVybmFuY2VcIiA6IFwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiAsXHJcbiAgICAgICAgICAgIFwiYm9hcmQtY29tbWl0dGVlc1wiOlwiL2JvYXJkLWNvbW1pdHRlZXNcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJtci1rLXJhZ2h1bmF0aGFuXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7ICBcclxuICAgICAgICAgICAgIFwiY29ycG9yYXRlLWdvdmVybmFuY2VcIiA6IFwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiAsICAgICAgICAgICBcclxuICAgICAgICAgICAgXCJib2FyZC1vZi1kaXJlY3RvcnNcIjpcIi9hYm91dC11cy9jb3Jwb3JhdGUtZ292ZXJuYW5jZS9ib2FyZC1vZi1kaXJlY3RvcnMvXCJcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcIm1yLWstbml0eWFuYW5kYS1yZWRkeVwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgYmNvbnRlbnQ6IFwiV2UgYXJlIGRpbGlnZW50bHkgYW5kIHN1c3RhaW5hYmx5IGFjaGlldmluZyA8YnIvPiBleGNlbGxlbmNlIGluIGFsbCB0aGF0IHdlIGRvXCIsXHJcbiAgICAgICAgcGF0aDogeyAgXHJcbiAgICAgICAgICAgICBcImNvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIgOiBcIi9hYm91dC11cy9jb3Jwb3JhdGUtZ292ZXJuYW5jZVwiLFxyXG4gICAgICAgICAgICBcImFib3V0LXVzXCI6IFwiL2Fib3V0LXVzXCIgLCAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFwiYm9hcmQtb2YtZGlyZWN0b3JzXCI6XCIvYWJvdXQtdXMvY29ycG9yYXRlLWdvdmVybmFuY2UvYm9hcmQtb2YtZGlyZWN0b3JzL1wiICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwibXItcC12LXJhbS1wcmFzYWQtcmVkZHlcIjoge1xyXG4gICAgICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICAgICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgICAgICBwYXRoOiB7ICBcclxuICAgICAgICAgICAgICAgICBcImNvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIgOiBcIi9hYm91dC11cy9jb3Jwb3JhdGUtZ292ZXJuYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhYm91dC11c1wiOiBcIi9hYm91dC11c1wiICwgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXCJib2FyZC1vZi1kaXJlY3RvcnNcIjpcIi9hYm91dC11cy9jb3Jwb3JhdGUtZ292ZXJuYW5jZS9ib2FyZC1vZi1kaXJlY3RvcnMvXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1yLWstbml0eWFuYW5kYS1yZWRkeVwiOlwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlL2JvYXJkLW9mLWRpcmVjdG9ycy9tci1rLW5pdHlhbmFuZGEtcmVkZHlcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImRyLW0tc2l2YWt1bWFyYW5cIjoge1xyXG4gICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9hYm91dGJhbm5lci5wbmdcIixcclxuICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgcGF0aDogeyAgXHJcbiAgICAgICAgIFwiY29ycG9yYXRlLWdvdmVybmFuY2VcIiA6IFwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIsXHJcbiAgICAgICAgXCJhYm91dC11c1wiOiBcIi9hYm91dC11c1wiICwgICAgICAgICAgIFxyXG4gICAgICAgIFwiYm9hcmQtb2YtZGlyZWN0b3JzXCI6XCIvYWJvdXQtdXMvY29ycG9yYXRlLWdvdmVybmFuY2UvYm9hcmQtb2YtZGlyZWN0b3JzL1wiLFxyXG4gICAgICAgIFwibXItay1uaXR5YW5hbmRhLXJlZGR5XCI6XCIvYWJvdXQtdXMvY29ycG9yYXRlLWdvdmVybmFuY2UvYm9hcmQtb2YtZGlyZWN0b3JzL21yLWstbml0eWFuYW5kYS1yZWRkeVwiLFxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgLFxyXG4gICAgXCJtci1tLW1hZGFuLW1vaGFuLXJlZGR5XCI6IHtcclxuICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICBiVGl0bGU6IFwiREVMSVZFUklORyBTVVNUQUlORUQgR1JPV1RIXCIsXHJcbiAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgIHBhdGg6IHsgIFxyXG4gICAgICAgICBcImNvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIgOiBcIi9hYm91dC11cy9jb3Jwb3JhdGUtZ292ZXJuYW5jZVwiLFxyXG4gICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiAsICAgICAgICAgICBcclxuICAgICAgICBcImJvYXJkLW9mLWRpcmVjdG9yc1wiOlwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlL2JvYXJkLW9mLWRpcmVjdG9ycy9cIixcclxuICAgICAgICBcIm1yLWstbml0eWFuYW5kYS1yZWRkeVwiOlwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlL2JvYXJkLW9mLWRpcmVjdG9ycy9tci1rLW5pdHlhbmFuZGEtcmVkZHlcIixcclxuICAgIH1cclxuICAgIH0sXHJcbiAgICBcIm1yLXAtc2FyYXRoLWNoYW5kcmEtcmVkZHlcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHsgIFxyXG4gICAgICAgICAgICAgXCJjb3Jwb3JhdGUtZ292ZXJuYW5jZVwiIDogXCIvYWJvdXQtdXMvY29ycG9yYXRlLWdvdmVybmFuY2VcIixcclxuICAgICAgICAgICAgXCJhYm91dC11c1wiOiBcIi9hYm91dC11c1wiICwgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcImJvYXJkLW9mLWRpcmVjdG9yc1wiOlwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlL2JvYXJkLW9mLWRpcmVjdG9ycy9cIixcclxuICAgICAgICAgICAgXCJtci1rLW5pdHlhbmFuZGEtcmVkZHlcIjpcIi9hYm91dC11cy9jb3Jwb3JhdGUtZ292ZXJuYW5jZS9ib2FyZC1vZi1kaXJlY3RvcnMvbXItay1uaXR5YW5hbmRhLXJlZGR5XCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIFwiZHItKG1ycyktYXZuaXQtYmltYWwtc2luZ2hcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvYWJvdXRiYW5uZXIucG5nXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgU1VTVEFJTkVEIEdST1dUSFwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGFyZSBkaWxpZ2VudGx5IGFuZCBzdXN0YWluYWJseSBhY2hpZXZpbmcgPGJyLz4gZXhjZWxsZW5jZSBpbiBhbGwgdGhhdCB3ZSBkb1wiLFxyXG4gICAgICAgIHBhdGg6IHsgIFxyXG4gICAgICAgICAgICAgXCJjb3Jwb3JhdGUtZ292ZXJuYW5jZVwiIDogXCIvYWJvdXQtdXMvY29ycG9yYXRlLWdvdmVybmFuY2VcIixcclxuICAgICAgICAgICAgXCJhYm91dC11c1wiOiBcIi9hYm91dC11c1wiICwgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcImJvYXJkLW9mLWRpcmVjdG9yc1wiOlwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlL2JvYXJkLW9mLWRpcmVjdG9ycy9cIixcclxuICAgICAgICAgICAgXCJtci1rLW5pdHlhbmFuZGEtcmVkZHlcIjpcIi9hYm91dC11cy9jb3Jwb3JhdGUtZ292ZXJuYW5jZS9ib2FyZC1vZi1kaXJlY3RvcnMvbXItay1uaXR5YW5hbmRhLXJlZGR5XCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIFwibXJzLXNhdml0YS1tYWhhamFuXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7ICBcclxuICAgICAgICAgICAgIFwiY29ycG9yYXRlLWdvdmVybmFuY2VcIiA6IFwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiAsICAgICAgICAgICBcclxuICAgICAgICAgICAgXCJib2FyZC1vZi1kaXJlY3RvcnNcIjpcIi9hYm91dC11cy9jb3Jwb3JhdGUtZ292ZXJuYW5jZS9ib2FyZC1vZi1kaXJlY3RvcnMvXCIsXHJcbiAgICAgICAgICAgIFwibXItay1uaXR5YW5hbmRhLXJlZGR5XCI6XCIvYWJvdXQtdXMvY29ycG9yYXRlLWdvdmVybmFuY2UvYm9hcmQtb2YtZGlyZWN0b3JzL21yLWstbml0eWFuYW5kYS1yZWRkeVwiLFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBcIm1yLWdpcmlzaC1wYW1hbi12YW52YXJpXCI6IHtcclxuICAgICAgICBiaW1hZ2U6IFwiL2ltZy9iYW5uZXJzL2Fib3V0YmFubmVyLnBuZ1wiLFxyXG4gICAgICAgIGJUaXRsZTogXCJERUxJVkVSSU5HIFNVU1RBSU5FRCBHUk9XVEhcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBhcmUgZGlsaWdlbnRseSBhbmQgc3VzdGFpbmFibHkgYWNoaWV2aW5nIDxici8+IGV4Y2VsbGVuY2UgaW4gYWxsIHRoYXQgd2UgZG9cIixcclxuICAgICAgICBwYXRoOiB7ICBcclxuICAgICAgICAgICAgIFwiY29ycG9yYXRlLWdvdmVybmFuY2VcIiA6IFwiL2Fib3V0LXVzL2NvcnBvcmF0ZS1nb3Zlcm5hbmNlXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXQtdXNcIjogXCIvYWJvdXQtdXNcIiAsICAgICAgICAgICBcclxuICAgICAgICAgICAgXCJib2FyZC1vZi1kaXJlY3RvcnNcIjpcIi9hYm91dC11cy9jb3Jwb3JhdGUtZ292ZXJuYW5jZS9ib2FyZC1vZi1kaXJlY3RvcnMvXCIsXHJcbiAgICAgICAgICAgIFwibXItay1uaXR5YW5hbmRhLXJlZGR5XCI6XCIvYWJvdXQtdXMvY29ycG9yYXRlLWdvdmVybmFuY2UvYm9hcmQtb2YtZGlyZWN0b3JzL21yLWstbml0eWFuYW5kYS1yZWRkeVwiLFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBcImVucXVpcnktd2Vic2l0ZVwiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9Db250YWN0LUJhbm5lci1JbWc0NC5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiQlVJTERJTkcgVEhFIEZVVFVSRVwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIHZhbHVlIHlvdXIgZmVlZGJhY2sgYXMgd2UgYXJlIGNvbW1pdHRlZCA8YnIvPiB0byBjb250aW51b3VzbHkgaW1wcm92aW5nIG91ciBwcm9kdWN0cyBhbmQgc2VydmljZXNcIixcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIFwiZW5xdWlyeS13ZWJzaXRlXCI6IFwiL2VucXVpcnktd2Vic2l0ZVwiICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiY29udGFjdC1kZXRhaWxzLW9mLWttcHNcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvSW52ZXN0b3JzLUJhbm5lci1JbWcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIkRFTElWRVJJTkcgUk9CVVNUIEZJTkFOQ0lBTFNcIixcclxuICAgICAgICBiY29udGVudDogXCJXZSBiZWxpZXZlIHRoYXQgZXhlY3V0aW9uIGlzIGV2ZXJ5dGhpbmcgPGJyLz5hbmQgYWx3YXlzIGNoYWxsZW5nZSBvdXJzZWx2ZXMgdG8gZGVsaXZlciBzdXBlcmlvciBwZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJpbnZlc3RvcnNcIjogXCIvaW52ZXN0b3JzXCIsICBcclxuICAgICAgICAgICAgXCJjb3Jwb3JhdGUtZ292ZXJuYW5jZVwiOiBcIi9pbnZlc3RvcnMvY29ycG9yYXRlLWdvdmVybmFuY2VcIiAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJwcm9kdWN0c1wiOiB7XHJcbiAgICAgICAgYmltYWdlOiBcIi9pbWcvYmFubmVycy9JbnZlc3RvcnMtQmFubmVyLUltZy5qcGdcIixcclxuICAgICAgICBiVGl0bGU6IFwiREVMSVZFUklORyBST0JVU1QgRklOQU5DSUFMU1wiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIldlIGJlbGlldmUgdGhhdCBleGVjdXRpb24gaXMgZXZlcnl0aGluZyA8YnIvPmFuZCBhbHdheXMgY2hhbGxlbmdlIG91cnNlbHZlcyB0byBkZWxpdmVyIHN1cGVyaW9yIHBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBcInByb2R1Y3RzXCI6IFwiL3Byb2R1Y3RzXCIgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJwcm9kdWN0LWxpc3RcIjoge1xyXG4gICAgICAgIGJpbWFnZTogXCIvaW1nL2Jhbm5lcnMvSW52ZXN0b3JzLUJhbm5lci1JbWcuanBnXCIsXHJcbiAgICAgICAgYlRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGJjb250ZW50OiBcIlwiLFxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgXCJwcm9kdWN0c1wiOiBcIi9wcm9kdWN0LWxpc3RcIiAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxufSIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5hc1BhdGgpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBBbXBTdGF0ZUNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8YW55PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEFtcFN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdBbXBTdGF0ZUNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJbkFtcE1vZGUoe1xuICBhbXBGaXJzdCA9IGZhbHNlLFxuICBoeWJyaWQgPSBmYWxzZSxcbiAgaGFzUXVlcnkgPSBmYWxzZSxcbn0gPSB7fSk6IGJvb2xlYW4ge1xuICByZXR1cm4gYW1wRmlyc3QgfHwgKGh5YnJpZCAmJiBoYXNRdWVyeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFtcCgpOiBib29sZWFuIHtcbiAgLy8gRG9uJ3QgYXNzaWduIHRoZSBjb250ZXh0IHZhbHVlIHRvIGEgdmFyaWFibGUgdG8gc2F2ZSBieXRlc1xuICByZXR1cm4gaXNJbkFtcE1vZGUoUmVhY3QudXNlQ29udGV4dChBbXBTdGF0ZUNvbnRleHQpKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZmZlY3QgZnJvbSAnLi9zaWRlLWVmZmVjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuL2hlYWQtbWFuYWdlci1jb250ZXh0J1xuaW1wb3J0IHsgaXNJbkFtcE1vZGUgfSBmcm9tICcuL2FtcCdcblxudHlwZSBXaXRoSW5BbXBNb2RlID0ge1xuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGUgPSBmYWxzZSk6IEpTWC5FbGVtZW50W10ge1xuICBjb25zdCBoZWFkID0gWzxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XVxuICBpZiAoIWluQW1wTW9kZSkge1xuICAgIGhlYWQucHVzaCg8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz4pXG4gIH1cbiAgcmV0dXJuIGhlYWRcbn1cblxuZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChcbiAgbGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBjaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+IHtcbiAgLy8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBsaXN0XG4gIH1cbiAgLy8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuICBpZiAoY2hpbGQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQoXG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoXG4gICAgICAgIChcbiAgICAgICAgICBmcmFnbWVudExpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICAgICAgICBmcmFnbWVudENoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4gICAgICAgICk6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ251bWJlcidcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3RcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZClcbiAgICAgICAgfSxcbiAgICAgICAgW11cbiAgICAgIClcbiAgICApXG4gIH1cbiAgcmV0dXJuIGxpc3QuY29uY2F0KGNoaWxkKVxufVxuXG5jb25zdCBNRVRBVFlQRVMgPSBbJ25hbWUnLCAnaHR0cEVxdWl2JywgJ2NoYXJTZXQnLCAnaXRlbVByb3AnXVxuXG4vKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi9cbmZ1bmN0aW9uIHVuaXF1ZSgpIHtcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKVxuICBjb25zdCB0YWdzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFUeXBlcyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhQ2F0ZWdvcmllczogeyBbbWV0YXR5cGU6IHN0cmluZ106IFNldDxzdHJpbmc+IH0gPSB7fVxuXG4gIHJldHVybiAoaDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICBsZXQgaXNVbmlxdWUgPSB0cnVlXG4gICAgbGV0IGhhc0tleSA9IGZhbHNlXG5cbiAgICBpZiAoaC5rZXkgJiYgdHlwZW9mIGgua2V5ICE9PSAnbnVtYmVyJyAmJiBoLmtleS5pbmRleE9mKCckJykgPiAwKSB7XG4gICAgICBoYXNLZXkgPSB0cnVlXG4gICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKCckJykgKyAxKVxuICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cy5hZGQoa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICBzd2l0Y2ggKGgudHlwZSkge1xuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgIGlmICh0YWdzLmhhcyhoLnR5cGUpKSB7XG4gICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZ3MuYWRkKGgudHlwZSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWV0YSc6XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNRVRBVFlQRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtZXRhdHlwZSA9IE1FVEFUWVBFU1tpXVxuICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpIGNvbnRpbnVlXG5cbiAgICAgICAgICBpZiAobWV0YXR5cGUgPT09ICdjaGFyU2V0Jykge1xuICAgICAgICAgICAgaWYgKG1ldGFUeXBlcy5oYXMobWV0YXR5cGUpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1ldGFUeXBlcy5hZGQobWV0YXR5cGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV1cbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gfHwgbmV3IFNldCgpXG4gICAgICAgICAgICBpZiAoKG1ldGF0eXBlICE9PSAnbmFtZScgfHwgIWhhc0tleSkgJiYgY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KVxuICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVW5pcXVlXG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqL1xuZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhcbiAgaGVhZEVsZW1lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIHByb3BzOiBXaXRoSW5BbXBNb2RlXG4pIHtcbiAgcmV0dXJuIGhlYWRFbGVtZW50c1xuICAgIC5yZWR1Y2UoXG4gICAgICAobGlzdDogUmVhY3QuUmVhY3RDaGlsZFtdLCBoZWFkRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICAgICAgY29uc3QgaGVhZEVsZW1lbnRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoXG4gICAgICAgICAgaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gbGlzdC5jb25jYXQoaGVhZEVsZW1lbnRDaGlsZHJlbilcbiAgICAgIH0sXG4gICAgICBbXVxuICAgIClcbiAgICAucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsIFtdKVxuICAgIC5yZXZlcnNlKClcbiAgICAuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpXG4gICAgLmZpbHRlcih1bmlxdWUoKSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLm1hcCgoYzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYy5rZXkgfHwgaVxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgICBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiZcbiAgICAgICAgIXByb3BzLmluQW1wTW9kZVxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2hyZWYnXSAmJlxuICAgICAgICAgIC8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuICAgICAgICAgIFtcbiAgICAgICAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzcycsXG4gICAgICAgICAgICAnaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvJyxcbiAgICAgICAgICBdLnNvbWUoKHVybCkgPT4gYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLihjLnByb3BzIHx8IHt9KSB9XG4gICAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICAgIG5ld1Byb3BzWydocmVmJ10gPSB1bmRlZmluZWRcblxuICAgICAgICAgIC8vIEFkZCB0aGlzIGF0dHJpYnV0ZSB0byBtYWtlIGl0IGVhc3kgdG8gaWRlbnRpZnkgb3B0aW1pemVkIHRhZ3NcbiAgICAgICAgICBuZXdQcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSA9IHRydWVcblxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgeyBrZXkgfSlcbiAgICB9KVxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovXG5mdW5jdGlvbiBIZWFkKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgYW1wU3RhdGUgPSB1c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dClcbiAgY29uc3QgaGVhZE1hbmFnZXIgPSB1c2VDb250ZXh0KEhlYWRNYW5hZ2VyQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICA8RWZmZWN0XG4gICAgICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZT17cmVkdWNlQ29tcG9uZW50c31cbiAgICAgIGhlYWRNYW5hZ2VyPXtoZWFkTWFuYWdlcn1cbiAgICAgIGluQW1wTW9kZT17aXNJbkFtcE1vZGUoYW1wU3RhdGUpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0VmZmVjdD5cbiAgKVxufVxuXG4vLyBUT0RPOiBSZW1vdmUgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxuSGVhZC5yZXdpbmQgPSAoKSA9PiB7fVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxudHlwZSBTdGF0ZSA9IEpTWC5FbGVtZW50W10gfCB1bmRlZmluZWRcblxudHlwZSBTaWRlRWZmZWN0UHJvcHMgPSB7XG4gIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlOiA8VD4oXG4gICAgY29tcG9uZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgIHByb3BzOiBUXG4gICkgPT4gU3RhdGVcbiAgaGFuZGxlU3RhdGVDaGFuZ2U/OiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkXG4gIGhlYWRNYW5hZ2VyOiBhbnlcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudDxTaWRlRWZmZWN0UHJvcHM+IHtcbiAgcHJpdmF0ZSBfaGFzSGVhZE1hbmFnZXI6IGJvb2xlYW5cblxuICBlbWl0Q2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci51cGRhdGVIZWFkKFxuICAgICAgICB0aGlzLnByb3BzLnJlZHVjZUNvbXBvbmVudHNUb1N0YXRlKFxuICAgICAgICAgIFsuLi50aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNdLFxuICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLl9oYXNIZWFkTWFuYWdlciA9XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyICYmIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc1xuXG4gICAgaWYgKGlzU2VydmVyICYmIHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCdcclxuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgPExheW91dD5cclxuICAgIDxDb29raWVzUHJvdmlkZXI+ICBcclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Db29raWVzUHJvdmlkZXI+XHJcbiAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiLyohXG4gKiBjb29raWVcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZXhwb3J0cy5zZXJpYWxpemUgPSBzZXJpYWxpemU7XG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGRlY29kZSA9IGRlY29kZVVSSUNvbXBvbmVudDtcbnZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIGZpZWxkLWNvbnRlbnQgaW4gUkZDIDcyMzAgc2VjIDMuMlxuICpcbiAqIGZpZWxkLWNvbnRlbnQgPSBmaWVsZC12Y2hhciBbIDEqKCBTUCAvIEhUQUIgKSBmaWVsZC12Y2hhciBdXG4gKiBmaWVsZC12Y2hhciAgID0gVkNIQVIgLyBvYnMtdGV4dFxuICogb2JzLXRleHQgICAgICA9ICV4ODAtRkZcbiAqL1xuXG52YXIgZmllbGRDb250ZW50UmVnRXhwID0gL15bXFx1MDAwOVxcdTAwMjAtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl0rJC87XG5cbi8qKlxuICogUGFyc2UgYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFBhcnNlIHRoZSBnaXZlbiBjb29raWUgaGVhZGVyIHN0cmluZyBpbnRvIGFuIG9iamVjdFxuICogVGhlIG9iamVjdCBoYXMgdGhlIHZhcmlvdXMgY29va2llcyBhcyBrZXlzKG5hbWVzKSA9PiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICB2YXIgb2JqID0ge31cbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnOycpXG4gIHZhciBkZWMgPSBvcHQuZGVjb2RlIHx8IGRlY29kZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICB2YXIgaW5kZXggPSBwYWlyLmluZGV4T2YoJz0nKVxuXG4gICAgLy8gc2tpcCB0aGluZ3MgdGhhdCBkb24ndCBsb29rIGxpa2Uga2V5PXZhbHVlXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IHBhaXIuc3Vic3RyaW5nKDAsIGluZGV4KS50cmltKClcblxuICAgIC8vIG9ubHkgYXNzaWduIG9uY2VcbiAgICBpZiAodW5kZWZpbmVkID09IG9ialtrZXldKSB7XG4gICAgICB2YXIgdmFsID0gcGFpci5zdWJzdHJpbmcoaW5kZXggKyAxLCBwYWlyLmxlbmd0aCkudHJpbSgpXG5cbiAgICAgIC8vIHF1b3RlZCB2YWx1ZXNcbiAgICAgIGlmICh2YWxbMF0gPT09ICdcIicpIHtcbiAgICAgICAgdmFsID0gdmFsLnNsaWNlKDEsIC0xKVxuICAgICAgfVxuXG4gICAgICBvYmpba2V5XSA9IHRyeURlY29kZSh2YWwsIGRlYyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgZGF0YSBpbnRvIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBTZXJpYWxpemUgdGhlIGEgbmFtZSB2YWx1ZSBwYWlyIGludG8gYSBjb29raWUgc3RyaW5nIHN1aXRhYmxlIGZvclxuICogaHR0cCBoZWFkZXJzLiBBbiBvcHRpb25hbCBvcHRpb25zIG9iamVjdCBzcGVjaWZpZWQgY29va2llIHBhcmFtZXRlcnMuXG4gKlxuICogc2VyaWFsaXplKCdmb28nLCAnYmFyJywgeyBodHRwT25seTogdHJ1ZSB9KVxuICogICA9PiBcImZvbz1iYXI7IGh0dHBPbmx5XCJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShuYW1lLCB2YWwsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBlbmMgPSBvcHQuZW5jb2RlIHx8IGVuY29kZTtcblxuICBpZiAodHlwZW9mIGVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBlbmNvZGUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChuYW1lKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IG5hbWUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gZW5jKHZhbCk7XG5cbiAgaWYgKHZhbHVlICYmICFmaWVsZENvbnRlbnRSZWdFeHAudGVzdCh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCB2YWwgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHN0ciA9IG5hbWUgKyAnPScgKyB2YWx1ZTtcblxuICBpZiAobnVsbCAhPSBvcHQubWF4QWdlKSB7XG4gICAgdmFyIG1heEFnZSA9IG9wdC5tYXhBZ2UgLSAwO1xuXG4gICAgaWYgKGlzTmFOKG1heEFnZSkgfHwgIWlzRmluaXRlKG1heEFnZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBtYXhBZ2UgaXMgaW52YWxpZCcpXG4gICAgfVxuXG4gICAgc3RyICs9ICc7IE1heC1BZ2U9JyArIE1hdGguZmxvb3IobWF4QWdlKTtcbiAgfVxuXG4gIGlmIChvcHQuZG9tYWluKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQuZG9tYWluKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGRvbWFpbiBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IERvbWFpbj0nICsgb3B0LmRvbWFpbjtcbiAgfVxuXG4gIGlmIChvcHQucGF0aCkge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LnBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gcGF0aCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IFBhdGg9JyArIG9wdC5wYXRoO1xuICB9XG5cbiAgaWYgKG9wdC5leHBpcmVzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGV4cGlyZXMgaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBFeHBpcmVzPScgKyBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdC5odHRwT25seSkge1xuICAgIHN0ciArPSAnOyBIdHRwT25seSc7XG4gIH1cblxuICBpZiAob3B0LnNlY3VyZSkge1xuICAgIHN0ciArPSAnOyBTZWN1cmUnO1xuICB9XG5cbiAgaWYgKG9wdC5zYW1lU2l0ZSkge1xuICAgIHZhciBzYW1lU2l0ZSA9IHR5cGVvZiBvcHQuc2FtZVNpdGUgPT09ICdzdHJpbmcnXG4gICAgICA/IG9wdC5zYW1lU2l0ZS50b0xvd2VyQ2FzZSgpIDogb3B0LnNhbWVTaXRlO1xuXG4gICAgc3dpdGNoIChzYW1lU2l0ZSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXgnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9TGF4JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpY3QnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdub25lJzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPU5vbmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBzYW1lU2l0ZSBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBUcnkgZGVjb2RpbmcgYSBzdHJpbmcgdXNpbmcgYSBkZWNvZGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkZWNvZGVcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHJ5RGVjb2RlKHN0ciwgZGVjb2RlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsImltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5leHBvcnQgZGVmYXVsdCBDb29raWVzO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJy4vQ29va2llcyc7XHJcbnZhciBDb29raWVzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobmV3IENvb2tpZXMoKSk7XHJcbmV4cG9ydCB2YXIgUHJvdmlkZXIgPSBDb29raWVzQ29udGV4dC5Qcm92aWRlciwgQ29uc3VtZXIgPSBDb29raWVzQ29udGV4dC5Db25zdW1lcjtcclxuZXhwb3J0IGRlZmF1bHQgQ29va2llc0NvbnRleHQ7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJy4vQ29va2llc0NvbnRleHQnO1xyXG52YXIgQ29va2llc1Byb3ZpZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENvb2tpZXNQcm92aWRlciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvb2tpZXNQcm92aWRlcihwcm9wcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xyXG4gICAgICAgIGlmIChwcm9wcy5jb29raWVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmNvb2tpZXMgPSBwcm9wcy5jb29raWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX3RoaXMuY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIENvb2tpZXNQcm92aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFByb3ZpZGVyLCB7IHZhbHVlOiB0aGlzLmNvb2tpZXMgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvb2tpZXNQcm92aWRlcjtcclxufShSZWFjdC5Db21wb25lbnQpKTtcclxuZXhwb3J0IGRlZmF1bHQgQ29va2llc1Byb3ZpZGVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENvb2tpZXMgfSBmcm9tICcuL0Nvb2tpZXMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvb2tpZXNQcm92aWRlciB9IGZyb20gJy4vQ29va2llc1Byb3ZpZGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoQ29va2llcyB9IGZyb20gJy4vd2l0aENvb2tpZXMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUNvb2tpZXMgfSBmcm9tICcuL3VzZUNvb2tpZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llc0NvbnRleHQgZnJvbSAnLi9Db29raWVzQ29udGV4dCc7XHJcbmltcG9ydCB7IGlzSW5Ccm93c2VyIH0gZnJvbSAnLi91dGlscyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNvb2tpZXMoZGVwZW5kZW5jaWVzKSB7XHJcbiAgICB2YXIgY29va2llcyA9IHVzZUNvbnRleHQoQ29va2llc0NvbnRleHQpO1xyXG4gICAgaWYgKCFjb29raWVzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIDxDb29raWVzUHJvdmlkZXI+Jyk7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5pdGlhbENvb2tpZXMgPSBjb29raWVzLmdldEFsbCgpO1xyXG4gICAgdmFyIF9hID0gdXNlU3RhdGUoaW5pdGlhbENvb2tpZXMpLCBhbGxDb29raWVzID0gX2FbMF0sIHNldENvb2tpZXMgPSBfYVsxXTtcclxuICAgIHZhciBwcmV2aW91c0Nvb2tpZXNSZWYgPSB1c2VSZWYoYWxsQ29va2llcyk7XHJcbiAgICBpZiAoaXNJbkJyb3dzZXIoKSkge1xyXG4gICAgICAgIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld0Nvb2tpZXMgPSBjb29raWVzLmdldEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZShkZXBlbmRlbmNpZXMgfHwgbnVsbCwgbmV3Q29va2llcywgcHJldmlvdXNDb29raWVzUmVmLmN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29va2llcyhuZXdDb29raWVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzQ29va2llc1JlZi5jdXJyZW50ID0gbmV3Q29va2llcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb29raWVzLmFkZENoYW5nZUxpc3RlbmVyKG9uQ2hhbmdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvb2tpZXMucmVtb3ZlQ2hhbmdlTGlzdGVuZXIob25DaGFuZ2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sIFtjb29raWVzXSk7XHJcbiAgICB9XHJcbiAgICB2YXIgc2V0Q29va2llID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiBjb29raWVzLnNldC5iaW5kKGNvb2tpZXMpOyB9LCBbY29va2llc10pO1xyXG4gICAgdmFyIHJlbW92ZUNvb2tpZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkgeyByZXR1cm4gY29va2llcy5yZW1vdmUuYmluZChjb29raWVzKTsgfSwgW2Nvb2tpZXNdKTtcclxuICAgIHJldHVybiBbYWxsQ29va2llcywgc2V0Q29va2llLCByZW1vdmVDb29raWVdO1xyXG59XHJcbmZ1bmN0aW9uIHNob3VsZFVwZGF0ZShkZXBlbmRlbmNpZXMsIG5ld0Nvb2tpZXMsIG9sZENvb2tpZXMpIHtcclxuICAgIGlmICghZGVwZW5kZW5jaWVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGRlcGVuZGVuY2llc18xID0gZGVwZW5kZW5jaWVzOyBfaSA8IGRlcGVuZGVuY2llc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBkZXBlbmRlbmN5ID0gZGVwZW5kZW5jaWVzXzFbX2ldO1xyXG4gICAgICAgIGlmIChuZXdDb29raWVzW2RlcGVuZGVuY3ldICE9PSBvbGRDb29raWVzW2RlcGVuZGVuY3ldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNJbkJyb3dzZXIoKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnKTtcclxufVxyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcclxuaW1wb3J0IHsgQ29uc3VtZXIgfSBmcm9tICcuL0Nvb2tpZXNDb250ZXh0JztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aENvb2tpZXMoV3JhcHBlZENvbXBvbmVudCkge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdmFyIG5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZTtcclxuICAgIHZhciBDb29raWVXcmFwcGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgICAgIF9fZXh0ZW5kcyhDb29raWVXcmFwcGVyLCBfc3VwZXIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIENvb2tpZVdyYXBwZXIoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgICAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0byB1cGRhdGUgY2hpbGRyZW4gd2l0aCBuZXcgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvb2tpZVdyYXBwZXIucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb29raWVzLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMub25DaGFuZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ29va2llV3JhcHBlci5wcm90b3R5cGUudW5saXN0ZW4gPSBmdW5jdGlvbiAoY29va2llcykge1xyXG4gICAgICAgICAgICAoY29va2llcyB8fCB0aGlzLnByb3BzLmNvb2tpZXMpLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMub25DaGFuZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ29va2llV3JhcHBlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBDb29raWVXcmFwcGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmV2UHJvcHMuY29va2llcyAhPT0gdGhpcy5wcm9wcy5jb29raWVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVubGlzdGVuKHByZXZQcm9wcy5jb29raWVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIENvb2tpZVdyYXBwZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnVubGlzdGVuKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBDb29raWVXcmFwcGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGZvcndhcmRlZFJlZiA9IF9hLmZvcndhcmRlZFJlZiwgY29va2llcyA9IF9hLmNvb2tpZXMsIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wiZm9yd2FyZGVkUmVmXCIsIFwiY29va2llc1wiXSk7XHJcbiAgICAgICAgICAgIHZhciBhbGxDb29raWVzID0gY29va2llcy5nZXRBbGwoKTtcclxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9fYXNzaWduKHt9LCByZXN0UHJvcHMsIHsgcmVmOiBmb3J3YXJkZWRSZWYsIGNvb2tpZXM6IGNvb2tpZXMsIGFsbENvb2tpZXM6IGFsbENvb2tpZXMgfSkpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIENvb2tpZVdyYXBwZXIuZGlzcGxheU5hbWUgPSBcIndpdGhDb29raWVzKFwiICsgbmFtZSArIFwiKVwiO1xyXG4gICAgICAgIENvb2tpZVdyYXBwZXIuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XHJcbiAgICAgICAgcmV0dXJuIENvb2tpZVdyYXBwZXI7XHJcbiAgICB9KFJlYWN0LkNvbXBvbmVudCkpO1xyXG4gICAgdmFyIEZvcndhcmRlZENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcclxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb29raWVzKSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChDb29raWVXcmFwcGVyLCBfX2Fzc2lnbih7IGNvb2tpZXM6IGNvb2tpZXMgfSwgcHJvcHMsIHsgZm9yd2FyZGVkUmVmOiByZWYgfSkpKTsgfSkpO1xyXG4gICAgfSk7XHJcbiAgICBGb3J3YXJkZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBDb29raWVXcmFwcGVyLmRpc3BsYXlOYW1lO1xyXG4gICAgRm9yd2FyZGVkQ29tcG9uZW50LldyYXBwZWRDb21wb25lbnQgPSBDb29raWVXcmFwcGVyLldyYXBwZWRDb21wb25lbnQ7XHJcbiAgICByZXR1cm4gaG9pc3RTdGF0aWNzKEZvcndhcmRlZENvbXBvbmVudCwgV3JhcHBlZENvbXBvbmVudCk7XHJcbn1cclxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0ICogYXMgY29va2llIGZyb20gJ2Nvb2tpZSc7XHJcbmltcG9ydCB7IGhhc0RvY3VtZW50Q29va2llLCBwYXJzZUNvb2tpZXMsIHJlYWRDb29raWUgfSBmcm9tICcuL3V0aWxzJztcclxudmFyIENvb2tpZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb29raWVzKGNvb2tpZXMsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5IQVNfRE9DVU1FTlRfQ09PS0lFID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb29raWVzID0gcGFyc2VDb29raWVzKGNvb2tpZXMsIG9wdGlvbnMpO1xyXG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuSEFTX0RPQ1VNRU5UX0NPT0tJRSA9IGhhc0RvY3VtZW50Q29va2llKCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH1cclxuICAgIENvb2tpZXMucHJvdG90eXBlLl91cGRhdGVCcm93c2VyVmFsdWVzID0gZnVuY3Rpb24gKHBhcnNlT3B0aW9ucykge1xyXG4gICAgICAgIGlmICghdGhpcy5IQVNfRE9DVU1FTlRfQ09PS0lFKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb29raWVzID0gY29va2llLnBhcnNlKGRvY3VtZW50LmNvb2tpZSwgcGFyc2VPcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBDb29raWVzLnByb3RvdHlwZS5fZW1pdENoYW5nZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hhbmdlTGlzdGVuZXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzW2ldKHBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENvb2tpZXMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zLCBwYXJzZU9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUJyb3dzZXJWYWx1ZXMocGFyc2VPcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gcmVhZENvb2tpZSh0aGlzLmNvb2tpZXNbbmFtZV0sIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIENvb2tpZXMucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uIChvcHRpb25zLCBwYXJzZU9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUJyb3dzZXJWYWx1ZXMocGFyc2VPcHRpb25zKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZV8xIGluIHRoaXMuY29va2llcykge1xyXG4gICAgICAgICAgICByZXN1bHRbbmFtZV8xXSA9IHJlYWRDb29raWUodGhpcy5jb29raWVzW25hbWVfMV0sIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIENvb2tpZXMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb29raWVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuY29va2llcyksIChfYSA9IHt9LCBfYVtuYW1lXSA9IHZhbHVlLCBfYSkpO1xyXG4gICAgICAgIGlmICh0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLnNlcmlhbGl6ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2VtaXRDaGFuZ2UoeyBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9wdGlvbnM6IG9wdGlvbnMgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29va2llcy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgZmluYWxPcHRpb25zID0gKG9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZXhwaXJlczogbmV3IERhdGUoMTk3MCwgMSwgMSwgMCwgMCwgMSksIG1heEFnZTogMCB9KSk7XHJcbiAgICAgICAgdGhpcy5jb29raWVzID0gX19hc3NpZ24oe30sIHRoaXMuY29va2llcyk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuY29va2llc1tuYW1lXTtcclxuICAgICAgICBpZiAodGhpcy5IQVNfRE9DVU1FTlRfQ09PS0lFKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5zZXJpYWxpemUobmFtZSwgJycsIGZpbmFsT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2VtaXRDaGFuZ2UoeyBuYW1lOiBuYW1lLCB2YWx1ZTogdW5kZWZpbmVkLCBvcHRpb25zOiBvcHRpb25zIH0pO1xyXG4gICAgfTtcclxuICAgIENvb2tpZXMucHJvdG90eXBlLmFkZENoYW5nZUxpc3RlbmVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XHJcbiAgICB9O1xyXG4gICAgQ29va2llcy5wcm90b3R5cGUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgaWR4ID0gdGhpcy5jaGFuZ2VMaXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XHJcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29va2llcztcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgQ29va2llcztcclxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSAnLi9Db29raWVzJztcclxuZXhwb3J0IGRlZmF1bHQgQ29va2llcztcclxuIiwiaW1wb3J0ICogYXMgY29va2llIGZyb20gJ2Nvb2tpZSc7XHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNEb2N1bWVudENvb2tpZSgpIHtcclxuICAgIC8vIENhbiB3ZSBnZXQvc2V0IGNvb2tpZXMgb24gZG9jdW1lbnQuY29va2llP1xyXG4gICAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGRvY3VtZW50LmNvb2tpZSA9PT0gJ3N0cmluZyc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuQ29va2llcygpIHtcclxuICAgIGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eICsvLCAnJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoLz0uKi8sICc9O2V4cGlyZXM9JyArIG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSArICc7cGF0aD0vJyk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKGNvb2tpZXMsIG9wdGlvbnMpIHtcclxuICAgIGlmICh0eXBlb2YgY29va2llcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gY29va2llLnBhcnNlKGNvb2tpZXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIGNvb2tpZXMgPT09ICdvYmplY3QnICYmIGNvb2tpZXMgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gY29va2llcztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNQYXJzaW5nQ29va2llKHZhbHVlLCBkb05vdFBhcnNlKSB7XHJcbiAgICBpZiAodHlwZW9mIGRvTm90UGFyc2UgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gV2UgZ3Vlc3MgaWYgdGhlIGNvb2tpZSBzdGFydCB3aXRoIHsgb3IgWywgaXQgaGFzIGJlZW4gc2VyaWFsaXplZFxyXG4gICAgICAgIGRvTm90UGFyc2UgPVxyXG4gICAgICAgICAgICAhdmFsdWUgfHwgKHZhbHVlWzBdICE9PSAneycgJiYgdmFsdWVbMF0gIT09ICdbJyAmJiB2YWx1ZVswXSAhPT0gJ1wiJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIWRvTm90UGFyc2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRDb29raWUodmFsdWUsIG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgY2xlYW5WYWx1ZSA9IGNsZWFudXBDb29raWVWYWx1ZSh2YWx1ZSk7XHJcbiAgICBpZiAoaXNQYXJzaW5nQ29va2llKGNsZWFuVmFsdWUsIG9wdGlvbnMuZG9Ob3RQYXJzZSkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShjbGVhblZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gQXQgbGVhc3Qgd2UgdHJpZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZ25vcmUgY2xlYW4gdmFsdWUgaWYgd2UgZmFpbGVkIHRoZSBkZXNlcmlhbGl6YXRpb25cclxuICAgIC8vIEl0IGlzIG5vdCByZWxldmFudCBhbnltb3JlIHRvIHRyaW0gdGhvc2UgdmFsdWVzXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuZnVuY3Rpb24gY2xlYW51cENvb2tpZVZhbHVlKHZhbHVlKSB7XHJcbiAgICAvLyBleHByZXNzIHByZXBlbmQgajogYmVmb3JlIHNlcmlhbGl6aW5nIGEgY29va2llXHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWVbMF0gPT09ICdqJyAmJiB2YWx1ZVsxXSA9PT0gJzonKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cigyKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9