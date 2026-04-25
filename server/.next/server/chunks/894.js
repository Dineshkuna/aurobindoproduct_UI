exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 1894:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Googlemap = ({
  locations
}) => {
  const googleMapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  let googleMap = null; // list of the marker object along with icon

  let markerList = [];

  if (locations) {
    markerList = locations.map(location => {
      return {
        lat: location.latitude,
        lng: location.longitude,
        icon: location.section === 'Representive Offices' ? '/img/green-map.png' : location.section === 'Global Head Quarters' ? '/img/hq-map.png' : '/img/blue-map.png'
      };
    });
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    markerList.map(x => {
      const marker = createMarker(x);
      bounds.extend(marker.position);
    });

    if (markerList.length === 1) {
      bounds.extend({
        lat: markerList[0].lat - 2,
        lng: markerList[0].lng - 2
      });
      bounds.extend({
        lat: markerList[0].lat + 2,
        lng: markerList[0].lng + 2
      });
    } else if (markerList.length > 1) {
      bounds.extend({
        lat: markerList[0].lat - 2,
        lng: markerList[0].lng - 2
      });
      bounds.extend({
        lat: markerList[markerList.length - 1].lat + 2,
        lng: markerList[markerList.length - 1].lng + 2
      });
    } else {
      bounds.extend({
        lat: -90,
        lng: -90
      });
      bounds.extend({
        lat: 90,
        lng: 90
      });
    }

    googleMap.fitBounds(bounds); // the map to contain all markers
  }, []); // initialize the google map

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  }; // create marker on google map


  const createMarker = markerObj => new window.google.maps.Marker({
    position: {
      lat: markerObj.lat,
      lng: markerObj.lng
    },
    map: googleMap,
    icon: {
      url: markerObj.icon,
      // set marker width and height
      scaledSize: new window.google.maps.Size(30, 30)
    }
  });

  const createDummyMarker = markerObj => new window.google.maps.Marker({
    position: {
      lat: markerObj.lat,
      lng: markerObj.lng
    },
    map: googleMap
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    ref: googleMapRef,
    style: {
      width: "100%",
      height: 500
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Googlemap);

/***/ })

};
;