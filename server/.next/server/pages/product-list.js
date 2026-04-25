(function() {
var exports = {};
exports.id = 936;
exports.ids = [936];
exports.modules = {

/***/ 1040:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ product_list; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "styled-jsx/style"
var style_namespaceObject = require("styled-jsx/style");;
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/product-list.js






function productlist({
  productsData
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        className: "jsx-2919625409",
        children: "Product List | Aurobindo Pharma APIs, Formulations & Portfolio"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Browse the complete list of Aurobindo Pharma products including APIs, formulations, and therapeutic solutions available across global markets.",
        className: "jsx-2919625409"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "keywords",
        content: "Aurobindo Pharma product list, pharmaceutical APIs, drug formulations, therapeutic portfolio, Aurobindo Pharma catalog, healthcare solutions",
        className: "jsx-2919625409"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "robots",
        content: "index, follow",
        className: "jsx-2919625409"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "canonical",
        href: "https://products.aurobindo.com/product-list",
        className: "jsx-2919625409"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      id: "page-title",
      style: {
        "background-image": "url(/img/banners/aboutbanner.png);"
      },
      className: "jsx-2919625409" + " " + "page-title-parallax page-title-dark",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-2919625409" + " " + "container clearfix",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ol", {
          className: "jsx-2919625409" + " " + "breadcrumb",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "jsx-2919625409" + " " + "breadcrumb-item",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              className: "jsx-2919625409",
              children: "Home"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            "aria-current": "page",
            className: "jsx-2919625409" + " " + "breadcrumb-item active",
            children: "Products"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      id: "content",
      className: "jsx-2919625409",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-2919625409" + " " + "content-wrap",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2919625409" + " " + "container",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-2919625409" + " " + "head-title mrb-40",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "jsx-2919625409",
              children: "Pharmaceutical Products"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "jsx-2919625409",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "jsx-2919625409" + " " + "spancolor",
                children: "Please click the product title for more information."
              })
            })]
          }), (productsData === null || productsData === void 0 ? void 0 : productsData.error) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              padding: '15px',
              background: '#ffe0e0',
              color: '#d23c3c',
              borderRadius: '4px',
              marginBottom: '20px'
            },
            className: "jsx-2919625409",
            children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
              className: "jsx-2919625409",
              children: "Error loading products:"
            }), " ", productsData.error]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-2919625409" + " " + "table-responsive",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
              className: "jsx-2919625409" + " " + "table table-bordered",
              children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
                className: "jsx-2919625409",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  className: "jsx-2919625409",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                    className: "jsx-2919625409",
                    children: "Product Name"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    className: "jsx-2919625409",
                    children: "Item Code"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    className: "jsx-2919625409",
                    children: "Strength"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    className: "jsx-2919625409",
                    children: "Dosage Form"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    className: "jsx-2919625409",
                    children: "Market"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    className: "jsx-2919625409",
                    children: "GTIN"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    className: "jsx-2919625409",
                    children: "Pack Insert (SmPC+PIL)"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
                className: "jsx-2919625409",
                children: productsData !== null && productsData !== void 0 && productsData.data && productsData.data.length > 0 ? productsData.data.map(product => {
                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                    className: "jsx-2919625409",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                      className: "jsx-2919625409",
                      children: product.productName
                    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                      className: "jsx-2919625409",
                      children: product.itemCode
                    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                      className: "jsx-2919625409",
                      children: product.strength
                    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                      className: "jsx-2919625409",
                      children: product.dosageForm
                    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                      className: "jsx-2919625409",
                      children: product.market
                    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                      className: "jsx-2919625409",
                      children: product.gtin
                    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                      className: "jsx-2919625409",
                      children: product.packInsertUrl ? /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: product.packInsertUrl,
                        target: "_blank",
                        style: {
                          color: '#017eb6',
                          'text-align': 'center'
                        },
                        className: "jsx-2919625409",
                        children: "View/Download"
                      }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "jsx-2919625409",
                        children: "N/A"
                      })
                    })]
                  }, product._id);
                }) : /*#__PURE__*/jsx_runtime_.jsx("tr", {
                  className: "jsx-2919625409",
                  children: /*#__PURE__*/jsx_runtime_.jsx("td", {
                    colSpan: "7",
                    style: {
                      textAlign: 'center',
                      padding: '20px'
                    },
                    className: "jsx-2919625409",
                    children: "No products available"
                  })
                })
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2919625409",
      children: [".breadcrumb.jsx-2919625409{top:45%! important;}"]
    })]
  });
}

async function getServerSideProps() {
  try {
    console.log('Fetching products from admin-server...');
    const response1 = await fetch(`http://your-ec2-public-ip:8080/pharma/getPharma`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Response status:', response1.status);

    if (!response1.ok) {
      throw new Error(`Failed to fetch: ${response1.status} ${response1.statusText}`);
    }

    const productsData = await response1.json();
    console.log('Fetched products:', productsData); // Transform admin product data to match client format

    const transformedData = {
      success: true,
      data: productsData.data || []
    };
    return {
      props: {
        productsData: transformedData
      }
    };
  } catch (error) {
    console.error('Error fetching products:', error.message); // Fallback to empty data if fetch fails

    return {
      props: {
        productsData: {
          success: false,
          data: [],
          error: error.message
        }
      }
    };
  }
}
/* harmony default export */ var product_list = (productlist);

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = (__webpack_exec__(1040));
module.exports = __webpack_exports__;

})();