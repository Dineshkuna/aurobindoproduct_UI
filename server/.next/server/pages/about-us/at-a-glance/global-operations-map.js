(function() {
var exports = {};
exports.id = 591;
exports.ids = [591,754];
exports.modules = {

/***/ 7665:
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
/* harmony import */ var _google_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1894);




 // API key of the google map

const GOOGLE_MAP_API_KEY = 'AIzaSyDL1Xs264nIq1NoVhqtdBThrBa9da3f52k'; // load google map script

const loadGoogleMapScript = callback => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', callback);
  }
};

const defaultProps = {};

const Globaloperationsmap = ({
  locations
}) => {
  const getCountryInitialState = () => {
    return "";
  };

  const getInitialLocationsState = () => {
    return locations;
  };

  const selectedLocationState = () => {
    return locations;
  };

  const {
    0: country,
    1: setCountry
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getCountryInitialState);
  const {
    0: allLocations,
    1: setAllLocations
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getInitialLocationsState);
  const {
    0: selectedLocations,
    1: setSelectedLocations
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedLocationState);

  const handleSectionClick = e => {
    console.log(e);
    const tempLocations = allLocations.filter(entry => {
      console.log(entry);
      console.log(e.target.innerText);
      return entry.section.toLowerCase() === e.target.innerText.toLowerCase();
    });
    setLoadMap(false);
    setTimeout(() => {
      setSelectedLocations(tempLocations);
    }, 500);
  };

  const handleChange = e => {
    setCountry(e.target.value);
    const tempLocations = allLocations.filter(entry => {
      return entry.country === e.target.value;
    });
    setLoadMap(false);
    setTimeout(() => {
      setSelectedLocations(tempLocations);
    }, 500);
  };

  const {
    0: loadMap,
    1: setLoadMap
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadGoogleMapScript(() => {
      if (selectedLocations.length > 0) {
        setLoadMap(true);
      }
    });
  }, [selectedLocations]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card1 mt-3 tab-card",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "tab-content",
              id: "myTabContent",
              children: !loadMap ? selectedLocations.length === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "No locations present..."
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "Loading..."
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_google_map__WEBPACK_IMPORTED_MODULE_2__.default, {
                locations: selectedLocations
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "card-header tab-card-header",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "col-md-8",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "nav",
                    id: "myTab",
                    role: "tablist",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "nav-link",
                        onClick: handleSectionClick,
                        id: "one-tab",
                        "data-toggle": "tab",
                        href: "#one",
                        role: "tab",
                        "aria-controls": "One",
                        "aria-selected": "true",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                          src: "/img/blue-map.png",
                          alt: ""
                        }), "Internationals Subsidiaries"]
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "nav-link",
                        onClick: handleSectionClick,
                        id: "two-tab",
                        "data-toggle": "tab",
                        href: "#two",
                        role: "tab",
                        "aria-controls": "Two",
                        "aria-selected": "false",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                          src: "/img/green-map.png",
                          alt: ""
                        }), "Representive Offices"]
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "nav-link",
                        onClick: handleSectionClick,
                        i: true,
                        id: "three-tab",
                        "data-toggle": "tab",
                        href: "#three",
                        role: "tab",
                        "aria-controls": "Three",
                        "aria-selected": "false",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                          src: "/img/hq-map.png",
                          alt: ""
                        }), "Global Head Quarters"]
                      })
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "col-md-4 form-group",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "listing",
                    className: "locationicons",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                      value: country,
                      onChange: handleChange,
                      name: "countries",
                      id: "countries",
                      className: "sm-form-control",
                      onchange: "search2()",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "",
                        children: "Select Countries"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Brazil",
                        children: " Brazil"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Canada",
                        children: " Canada"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "China",
                        children: " China"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Colombia",
                        children: " Colombia"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Czech Republic",
                        children: " Czech Republic"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Ethiopia",
                        children: " Ethiopia"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "France",
                        children: " France"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Germany",
                        children: " Germany"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Hong Kong",
                        children: " Hong Kong"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "India",
                        children: " India"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Ireland",
                        children: " Ireland"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Italy",
                        children: " Italy"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Japan",
                        children: " Japan"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Kenya",
                        children: " Kenya"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Malta",
                        children: " Malta"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Mexico",
                        children: " Mexico"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Netherlands",
                        children: " Netherlands"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Nigeria",
                        children: " Nigeria"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Poland",
                        children: " Poland"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Portugal",
                        children: " Portugal"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Romania",
                        children: " Romania"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Russia",
                        children: " Russia"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "South Africa",
                        children: " South Africa"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Spain",
                        children: " Spain"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Tanzania",
                        children: " Tanzania"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Thailand",
                        children: " Thailand"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Ukraine",
                        children: " Ukraine"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "United Kingdom",
                        children: " United Kingdom"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "USA",
                        children: " USA"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "Vietnam",
                        children: " Vietnam"
                      })]
                    })
                  })
                })]
              })
            })]
          })
        })
      })
    })
  });
};

Globaloperationsmap.defaultProps = defaultProps; // #endregion

async function getServerSideProps() {
  const res = await fetch('http://97.74.81.11:8080' + '/api/apiRoutersinternationalsusidiaries');
  const locations = await res.json();
  return {
    props: {
      locations
    }
  };
}
;
/* harmony default export */ __webpack_exports__["default"] = (Globaloperationsmap);

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
var __webpack_exports__ = __webpack_require__.X(0, [894], function() { return __webpack_exec__(7665); });
module.exports = __webpack_exports__;

})();