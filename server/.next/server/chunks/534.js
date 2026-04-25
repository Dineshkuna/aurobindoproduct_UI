exports.id = 534;
exports.ids = [534];
exports.modules = {

/***/ 5763:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7556);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);







const defaultProps = {};

const Innerbanner = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const rawRoute = router.asPath.split("/");
  console.log("rawRoute", rawRoute);
  let pageName = rawRoute[rawRoute.length - 1];

  if (pageName.includes('?')) {
    pageName = pageName.split('?')[0];
  } else if (pageName.includes('#')) {
    pageName = pageName.split('#')[0];
  }

  console.log(pageName);
  console.log("pageName12", _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* .breadCrumbDetails */ .x[pageName]);
  const {
    bimage,
    bTitle,
    bcontent
  } = _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* .breadCrumbDetails */ .x[pageName]; // const { bimage, bTitle, bcontent } = breadCrumbDetails.default;

  const fallBackPage = ["business-overview", "sdfg", "fgh"]; // console.log('routerrouterrouter', pageName);

  const generateBreadCrumbTitle = (ind, name) => {
    const nameToDisplay = !ind ? 'home' : name;
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
      let memberName = nameToDisplay.split("=")[1];
      return "Member / " + memberName.split("-").join(" ");
    } else if (nameToDisplay.startsWith("search?searchText=")) {
      let memberName = nameToDisplay.split("=")[1];
      return "Search / " + memberName;
    } else {
      console.log(nameToDisplay + "******");
      return nameToDisplay.split("-").join(" ");
    }
  };

  const navigateOnClick = selectedPath => {
    const pathToNavigate = selectedPath === "" ? "/" : _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* .breadCrumbDetails */ .x[selectedPath].path[selectedPath];
    router.push(pathToNavigate);
  };

  const generateHref = (i, name) => {
    console.log('Path name-1', i, name);
    var path = "/";

    if (!i) {
      path = "/";
    } else if (i === rawRoute.length - 1) {
      path = router.asPath;
    } else {
      if (typeof _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* .breadCrumbDetails */ .x[pageName].path[name] !== "undefined") {
        path = _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* .breadCrumbDetails */ .x[pageName].path[name];
      }
    }

    console.log('Path itaration', i, path);
    return path;
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
      id: "page-title",
      className: "page-title-parallax page-title-dark",
      style: {
        backgroundImage: `url(${bimage})`
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container clearfix",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          dangerouslySetInnerHTML: {
            __html: bTitle
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
          dangerouslySetInnerHTML: {
            __html: bcontent
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
          className: "breadcrumb",
          children: rawRoute.map((name, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: `breadcrumb-item ${i === rawRoute.length - 1 ? 'active' : ''}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
              href: generateHref(i, name),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: `${i === rawRoute.length - 1 ? 'navactive' : ''}`,
                children: generateBreadCrumbTitle(i, name)
              })
            })
          }))
        })]
      })
    })
  });
};

Innerbanner.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (Innerbanner);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;