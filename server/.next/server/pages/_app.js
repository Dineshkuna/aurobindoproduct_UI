(function() {
var exports = {};
exports.id = 888;
exports.ids = [888,754];
exports.modules = {

/***/ 8683:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Layout/NavBar.jsx




const defaultProps = {};

const NavBar = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      id: "header",
      className: "full-header",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "header-wrap",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "header-row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              id: "logo",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/",
                className: "standard-logo",
                "data-dark-logo": "/img/aurobindo-logo.png",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/img/aurobindo-logo.png",
                  alt: "Aurobindo Logo"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              id: "primary-menu-trigger",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                className: "svg-trigger",
                viewBox: "0 0 100 100",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "m 30,50 h 40"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
              className: "primary-menu",
              children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                className: "menu-container",
                children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "menu-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "menu-link",
                    href: "/product-list",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      children: "Products"
                    })
                  })
                })
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header-wrap-clone"
      })]
    })
  });
};

NavBar.defaultProps = defaultProps;
/* harmony default export */ var Layout_NavBar = (NavBar);
;// CONCATENATED MODULE: external "react-cookie"
var external_react_cookie_namespaceObject = require("react-cookie");;
;// CONCATENATED MODULE: ./components/Layout/Footer.jsx




const Footer_defaultProps = {};

const Footer = () => {
  const [cookies, setCookie, removeCookie] = (0,external_react_cookie_namespaceObject.useCookies)(['cookie-consent']);

  const acceptCookie = e => {
    setCookie("cookie-consent", true);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("footer", {
      id: "footer",
      className: "dark",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "copyrights",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-5",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "copyright-area-content",
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "\xA9 Copyright 2022 Aurobindo Pharma. All Rights Reserved."
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-3",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "d-flex justify-content-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://x.com/aurobindoglobal",
                  className: "social-icon si-small si-twitter",
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-twitter"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://www.linkedin.com/company/aurobindopharma/",
                  className: "social-icon si-small si-gplus",
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-linkedin2"
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-4",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "copyright-area-content",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  className: "text-right",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "/privacy-policy",
                    children: "Privacy Policy"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "copyline",
                    children: "|"
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "/site-map",
                    children: "Site Map"
                  })]
                })
              })
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "gotoTop",
      className: "icon-angle-up"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade bs-example-modal-fs",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "fsModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-dialog modal-fullscreen",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "modal-header",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              type: "button",
              className: "popup-close btn-sm",
              "data-bs-dismiss": "modal",
              "aria-hidden": "true",
              children: [" ", /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/close.png",
                alt: "Aurobindo close"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "modal-body",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "search-overlay-form",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                action: "/search",
                method: "GET",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  className: "input-search",
                  id: "searchText",
                  name: "searchText",
                  placeholder: "Enter text to search"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  type: "submit",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-line-search"
                  })
                })]
              })
            })
          })]
        })
      })
    }), cookies.length === 0 || cookies['cookie-consent'] == undefined || cookies['cookie-consent'] != "true" ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "cookie-notice",
      className: "text-center",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "cookie-notice-container",
        style: {
          "color": "#fff"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          id: "cn-notice-text",
          className: "cn-text-container",
          children: "This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies. "
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          id: "cn-notice-buttons",
          className: "cn-buttons-container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            onClick: acceptCookie,
            id: "cn-accept-cookie",
            "data-cookie-set": "accept",
            className: "cn-set-cookie cn-button bootstrap button",
            "aria-label": "I Accept",
            children: "I Accept"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "http://3.232.144.124:8090/privacy-policy/#cookies",
            target: "_blank",
            id: "cn-more-info",
            className: "cn-more-info cn-button bootstrap button",
            "aria-label": "Cookie policy",
            children: "Cookie policy"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          onClick: acceptCookie,
          id: "cn-close-notice",
          "data-cookie-set": "accept",
          className: "cn-close-icon button",
          "aria-label": "I Accept"
        })]
      })
    }) : ""]
  });
};

Footer.defaultProps = Footer_defaultProps;
/* harmony default export */ var Layout_Footer = (Footer);
// EXTERNAL MODULE: ./components/Layout/Innerbanner.jsx
var Innerbanner = __webpack_require__(5763);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Layout/Layout.jsx









const Layout_defaultProps = {};

const Layout = ({
  children
}) => {
  const router = (0,router_.useRouter)();
  console.log("/////////////////////");
  console.log('dfghjk', router, children, "===");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.png"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "wrapper",
      className: "clearfix",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Layout_NavBar, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Layout_Footer, {})]
    })]
  });
};

Layout.defaultProps = Layout_defaultProps;
/* harmony default export */ var Layout_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_cookie_namespaceObject.CookiesProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [75,664,556,534], function() { return __webpack_exec__(8683); });
module.exports = __webpack_exports__;

})();