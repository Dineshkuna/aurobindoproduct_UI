(function() {
var exports = {};
exports.id = 851;
exports.ids = [851,754];
exports.modules = {

/***/ 3246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const defaultProps = {};

const Governancepolicies = ({
  gpolicies
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
      id: "content",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "content-wrap",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-12",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "head-title",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                  children: "Governance Policies"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  children: "The Board has a good mix of pharmaceutical experience and professional management. Decision-making is decentralized, with accountability and freedom to operate.Under the leadership and supervision of the Board of Directors assisted by a qualified and experienced team of professionals in the fields of production, research and development, marketing, HR, finance, purchase and administration, Aurobindo Pharma has successfully integrated its operations. All projects have been implemented with no cost or time overruns.All major decisions are made globally after consultation with experienced professionals in their specific areas of activity. Decisions and execution are targeted to derive value addition in everything that the company does.Operations are conducted with utmost financial discipline. The management follows up to ensure that trust in employees is reciprocated with fairness in all dealings.All decisions are taken in the interest of shareholders. The Board and management are aware and conscious of the interests of minority shareholders and do everything to enhance shareholder value in totality.The company is keen to share its gains and has a decent dividend record. The company has also been issuing bonus shares from time to time. Value creation for shareowners is a cornerstone and is consistently managed.Committees of directors are appointed to focus on specific areas. Aurobindo Pharma is undergoing a process of transformation in a professional environment.The Board of Directors meets as often as business demands, and all meetings are well attended."
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "w-100"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "w-100"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-12",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "head-title top-pdf",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                  className: "govrce_plcy",
                  children: gpolicies.map(gpolicie => {
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: 'http://97.74.81.11:8080' + '/uploads/' + gpolicie.pdf,
                        target: "_blank",
                        rel: "noopener",
                        children: [gpolicie.title, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                          className: "pull-right",
                          children: ["Download ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fa fa-file-pdf-o"
                          })]
                        })]
                      })
                    });
                  })
                })
              })
            })]
          })
        })
      })
    })
  });
};

Governancepolicies.defaultProps = defaultProps; // #endregion

async function getServerSideProps() {
  const res = await fetch('http://97.74.81.11:8080' + '/api/apiRoutergovernancepolicies');
  const policies = await res.json();
  return {
    props: {
      gpolicies: policies
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Governancepolicies);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(3246));
module.exports = __webpack_exports__;

})();