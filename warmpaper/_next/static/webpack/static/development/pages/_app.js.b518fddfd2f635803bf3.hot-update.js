webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_globalFunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/globalFunc */ "./src/globalFunc.js");
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/store */ "./src/store/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_js_noise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/js/noise */ "./src/js/noise.js");
/* harmony import */ var _src_components_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_scss_style_scss__WEBPACK_IMPORTED_MODULE_10__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\NYT\\Desktop\\me\\warmpaper\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






 // Components


 // scss



var MyApp = function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      page = _useState[0],
      setPage = _useState[1];

  var prevPage = Object(_src_globalFunc__WEBPACK_IMPORTED_MODULE_3__["usePrevious"])(page);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var language = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.language;
  });
  var currentpage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.page;
  });
  var route = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var asPath = route.asPath,
      pathname = route.pathname,
      basePath = route.basePath;
  var logonameElem = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var featuredImageElem = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var footerElem = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var smooth = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var scrollWrap = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var canvasElem = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var urlArray = pathname.split('/');
    urlArray.splice(0, 1);

    if ('/' + urlArray[0] === basePath) {
      urlArray.splice(0, 1);
    }

    var isSection = urlArray[2] ? urlArray[2].match(/section/g) : false;
    var isPost;
    isSection ? isPost = urlArray[3] ? urlArray[3].match(/post/g) : false : isPost = urlArray[2] ? urlArray[2].match(/post/g) : false;
    setPage(isPost ? urlArray[1] + '-post' : urlArray[1] ? urlArray[1] : 'home');
  }, [pathname]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (page !== prevPage && page !== null) {
      dispatch({
        type: 'UPDATE_PAGE',
        page: page
      });
      if (smooth.current) smooth.current.reset();
    }
  }, [page]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    new _src_js_noise__WEBPACK_IMPORTED_MODULE_7__["Noise"](canvasElem.current);
    Object(_src_globalFunc__WEBPACK_IMPORTED_MODULE_3__["adjustFontSize"])();
    window.addEventListener('resize', function () {
      return Object(_src_globalFunc__WEBPACK_IMPORTED_MODULE_3__["adjustFontSize"])();
    });
    return function () {
      window.removeEventListener('resize', function () {
        return Object(_src_globalFunc__WEBPACK_IMPORTED_MODULE_3__["adjustFontSize"])();
      });
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    smooth.current = new _src_globalFunc__WEBPACK_IMPORTED_MODULE_3__["SmoothScroll"](scrollWrap.current, function (s, y, h) {
      logonameElem.current.style.transform = "translate3d(0,".concat(y, "px,0)");
      if (featuredImageElem.current) featuredImageElem.current.style.transform = "translate3d(0,".concat(-y * .5, "px,0)");

      if (!footerElem.current.className) {
        if (footerElem.current.getBoundingClientRect().top - window.innerHeight < -footerElem.current.offsetHeight / 2) {
          footerElem.current.className = 'active';
        }
      }
    });
    return function () {
      smooth.current.off();
      smooth.current = null;
    };
  }, []);

  var getTitle = function getTitle() {
    var title = asPath.replace(basePath, '').replace(/\?.+/g, '').split('/');
    title.splice(0, 2);

    for (var i = 0; i < title.length; i++) {
      title[i] = decodeURIComponent(title[i].charAt(0).toUpperCase() + title[i].slice(1));
    }

    return title.length ? title.reverse().join(' | ') : 'Barwo';
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, getTitle()), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  })), __jsx("div", {
    id: "bodyWrap",
    className: language,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "mainWrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("div", {
    ref: scrollWrap,
    id: "scrollWrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    featuredImageElem: featuredImageElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  })), currentpage !== 'contact' && __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    footerElem: footerElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 55
    }
  }))), __jsx(_src_components_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    logonameElem: logonameElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }), __jsx("canvas", {
    ref: canvasElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  })));
};

_s(MyApp, "ztghYliwyrcdyo6QSdL6WTFCB0U=", false, function () {
  return [_src_globalFunc__WEBPACK_IMPORTED_MODULE_3__["usePrevious"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = _src_store__WEBPACK_IMPORTED_MODULE_4__["wrapper"].withRedux(MyApp));

var _c, _c2;

$RefreshReg$(_c, "MyApp");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/js/noise.js":
/*!*************************!*\
  !*** ./src/js/noise.js ***!
  \*************************/
/*! exports provided: Noise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Noise", function() { return Noise; });
var Noise = function Noise() {
  this.init = function (elem) {
    this.canvas = elem, this.ctx = this.canvas.getContext("2d"), this.noiseData = [], this.frame = 0, this.loopTimeout = null, this.resizeThrottle = null, this.setup();
  }, this.setup = function () {
    this.noiseData = [], this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight;

    for (var t = 0; t < 10; t += 1) {
      this.createNoise();
    }

    this.loop();
  }, this.createNoise = function () {
    for (var t = this.ctx.createImageData(window.innerWidth, window.innerHeight), e = new Uint32Array(t.data.buffer), a = e.length, n = 0; n < a; n += 1) {
      Math.random() < .5 && (e[n] = 4278190080);
    }

    this.noiseData.push(t);
  }, this.paintNoise = function () {
    9 === this.frame ? this.frame = 0 : this.frame = this.frame + 1, this.ctx.putImageData(this.noiseData[this.frame], 0, 0);
  }, this.loop = function () {
    var t = this;
    this.paintNoise(this.frame), this.loopTimeout = window.setTimeout(function () {
      t.loop = t.loop.bind(t), window.requestAnimationFrame(t.loop);
    }, 120);
  }, this.destroy = function () {
    this.reset(), this.loopTimeout = 0, document.removeChild(this.$el);
  };
};
_c = Noise;

var _c;

$RefreshReg$(_c, "Noise");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ub2lzZS5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJwcmV2UGFnZSIsInVzZVByZXZpb3VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxhbmd1YWdlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImN1cnJlbnRwYWdlIiwicm91dGUiLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJwYXRobmFtZSIsImJhc2VQYXRoIiwibG9nb25hbWVFbGVtIiwidXNlUmVmIiwiZmVhdHVyZWRJbWFnZUVsZW0iLCJmb290ZXJFbGVtIiwic21vb3RoIiwic2Nyb2xsV3JhcCIsImNhbnZhc0VsZW0iLCJ1c2VFZmZlY3QiLCJ1cmxBcnJheSIsInNwbGl0Iiwic3BsaWNlIiwiaXNTZWN0aW9uIiwibWF0Y2giLCJpc1Bvc3QiLCJ0eXBlIiwiY3VycmVudCIsInJlc2V0IiwiTm9pc2UiLCJhZGp1c3RGb250U2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU21vb3RoU2Nyb2xsIiwicyIsInkiLCJoIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjbGFzc05hbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJpbm5lckhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9mZiIsImdldFRpdGxlIiwidGl0bGUiLCJyZXBsYWNlIiwiaSIsImxlbmd0aCIsImRlY29kZVVSSUNvbXBvbmVudCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyZXZlcnNlIiwiam9pbiIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJpbml0IiwiZWxlbSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJub2lzZURhdGEiLCJmcmFtZSIsImxvb3BUaW1lb3V0IiwicmVzaXplVGhyb3R0bGUiLCJzZXR1cCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsInQiLCJjcmVhdGVOb2lzZSIsImxvb3AiLCJjcmVhdGVJbWFnZURhdGEiLCJlIiwiVWludDMyQXJyYXkiLCJkYXRhIiwiYnVmZmVyIiwiYSIsIm4iLCJNYXRoIiwicmFuZG9tIiwicHVzaCIsInBhaW50Tm9pc2UiLCJwdXRJbWFnZURhdGEiLCJzZXRUaW1lb3V0IiwiYmluZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlc3Ryb3kiLCJkb2N1bWVudCIsInJlbW92ZUNoaWxkIiwiJGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLGtCQUNoQkMsc0RBQVEsQ0FBQyxJQUFELENBRFE7QUFBQSxNQUNqQ0MsSUFEaUM7QUFBQSxNQUMzQkMsT0FEMkI7O0FBR3hDLE1BQU1DLFFBQVEsR0FBR0MsbUVBQVcsQ0FBQ0gsSUFBRCxDQUE1QjtBQUNBLE1BQU1JLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0YsUUFBVjtBQUFBLEdBQU4sQ0FBNUI7QUFDQSxNQUFNRyxXQUFXLEdBQUdGLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ1IsSUFBVjtBQUFBLEdBQU4sQ0FBL0I7QUFDQSxNQUFNVSxLQUFLLEdBQUdDLDZEQUFTLEVBQXZCO0FBUHdDLE1BUWpDQyxNQVJpQyxHQVFIRixLQVJHLENBUWpDRSxNQVJpQztBQUFBLE1BUXpCQyxRQVJ5QixHQVFISCxLQVJHLENBUXpCRyxRQVJ5QjtBQUFBLE1BUWZDLFFBUmUsR0FRSEosS0FSRyxDQVFmSSxRQVJlO0FBVXhDLE1BQU1DLFlBQVksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTNCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFoQztBQUNBLE1BQU1FLFVBQVUsR0FBR0Ysb0RBQU0sQ0FBQyxJQUFELENBQXpCO0FBQ0EsTUFBTUcsTUFBTSxHQUFHSCxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQSxNQUFNSSxVQUFVLEdBQUdKLG9EQUFNLENBQUMsSUFBRCxDQUF6QjtBQUNBLE1BQU1LLFVBQVUsR0FBR0wsb0RBQU0sQ0FBQyxJQUFELENBQXpCO0FBRUFNLHlEQUFTLENBQUMsWUFBSTtBQUNWLFFBQU1DLFFBQVEsR0FBR1YsUUFBUSxDQUFDVyxLQUFULENBQWUsR0FBZixDQUFqQjtBQUNBRCxZQUFRLENBQUNFLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEI7O0FBQ0EsUUFBRyxNQUFJRixRQUFRLENBQUMsQ0FBRCxDQUFaLEtBQW9CVCxRQUF2QixFQUFnQztBQUM1QlMsY0FBUSxDQUFDRSxNQUFULENBQWdCLENBQWhCLEVBQWtCLENBQWxCO0FBQ0g7O0FBQ0QsUUFBTUMsU0FBUyxHQUFHSCxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWNBLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUksS0FBWixDQUFrQixVQUFsQixDQUFkLEdBQThDLEtBQWhFO0FBQ0EsUUFBSUMsTUFBSjtBQUVBRixhQUFTLEdBQ0xFLE1BQU0sR0FBR0wsUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFjQSxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlJLEtBQVosQ0FBa0IsT0FBbEIsQ0FBZCxHQUEyQyxLQUQvQyxHQUdMQyxNQUFNLEdBQUdMLFFBQVEsQ0FBQyxDQUFELENBQVIsR0FBY0EsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZSSxLQUFaLENBQWtCLE9BQWxCLENBQWQsR0FBMkMsS0FIeEQ7QUFJQTFCLFdBQU8sQ0FBQzJCLE1BQU0sR0FBR0wsUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFZLE9BQWYsR0FBeUJBLFFBQVEsQ0FBQyxDQUFELENBQVIsR0FBY0EsUUFBUSxDQUFDLENBQUQsQ0FBdEIsR0FBNEIsTUFBNUQsQ0FBUDtBQUNILEdBZFEsRUFjUCxDQUFDVixRQUFELENBZE8sQ0FBVDtBQWdCQVMseURBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBR3RCLElBQUksS0FBS0UsUUFBVCxJQUFxQkYsSUFBSSxLQUFLLElBQWpDLEVBQXNDO0FBQ2xDSSxjQUFRLENBQUM7QUFBQ3lCLFlBQUksRUFBQyxhQUFOO0FBQXFCN0IsWUFBSSxFQUFDQTtBQUExQixPQUFELENBQVI7QUFDQSxVQUFHbUIsTUFBTSxDQUFDVyxPQUFWLEVBQ0lYLE1BQU0sQ0FBQ1csT0FBUCxDQUFlQyxLQUFmO0FBQ1A7QUFDSixHQU5RLEVBTVAsQ0FBQy9CLElBQUQsQ0FOTyxDQUFUO0FBUUFzQix5REFBUyxDQUFDLFlBQUk7QUFDVixRQUFJVSxtREFBSixDQUFVWCxVQUFVLENBQUNTLE9BQXJCO0FBRUFHLDBFQUFjO0FBQ2RDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0M7QUFBQSxhQUFJRixzRUFBYyxFQUFsQjtBQUFBLEtBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1RDLFlBQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUM7QUFBQSxlQUFJSCxzRUFBYyxFQUFsQjtBQUFBLE9BQXJDO0FBQ0gsS0FGRDtBQUdILEdBUlEsRUFRUCxFQVJPLENBQVQ7QUFXQVgseURBQVMsQ0FBQyxZQUFJO0FBQ1ZILFVBQU0sQ0FBQ1csT0FBUCxHQUFpQixJQUFJTyw0REFBSixDQUFpQmpCLFVBQVUsQ0FBQ1UsT0FBNUIsRUFBb0MsVUFBQ1EsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBYTtBQUM5RHpCLGtCQUFZLENBQUNlLE9BQWIsQ0FBcUJXLEtBQXJCLENBQTJCQyxTQUEzQiwyQkFBd0RILENBQXhEO0FBQ0EsVUFBR3RCLGlCQUFpQixDQUFDYSxPQUFyQixFQUNJYixpQkFBaUIsQ0FBQ2EsT0FBbEIsQ0FBMEJXLEtBQTFCLENBQWdDQyxTQUFoQywyQkFBNkQsQ0FBQ0gsQ0FBRCxHQUFHLEVBQWhFOztBQUVKLFVBQUcsQ0FBQ3JCLFVBQVUsQ0FBQ1ksT0FBWCxDQUFtQmEsU0FBdkIsRUFBaUM7QUFDN0IsWUFBR3pCLFVBQVUsQ0FBQ1ksT0FBWCxDQUFtQmMscUJBQW5CLEdBQTJDQyxHQUEzQyxHQUFpRFgsTUFBTSxDQUFDWSxXQUF4RCxHQUFzRSxDQUFDNUIsVUFBVSxDQUFDWSxPQUFYLENBQW1CaUIsWUFBcEIsR0FBaUMsQ0FBMUcsRUFBNEc7QUFDeEc3QixvQkFBVSxDQUFDWSxPQUFYLENBQW1CYSxTQUFuQixHQUErQixRQUEvQjtBQUNIO0FBQ0o7QUFDSixLQVZnQixDQUFqQjtBQVdBLFdBQU8sWUFBTTtBQUNUeEIsWUFBTSxDQUFDVyxPQUFQLENBQWVrQixHQUFmO0FBQ0E3QixZQUFNLENBQUNXLE9BQVAsR0FBaUIsSUFBakI7QUFDSCxLQUhEO0FBSUgsR0FoQlEsRUFnQlAsRUFoQk8sQ0FBVDs7QUFrQkEsTUFBTW1CLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsUUFBTUMsS0FBSyxHQUFHdEMsTUFBTSxDQUFDdUMsT0FBUCxDQUFlckMsUUFBZixFQUF5QixFQUF6QixFQUE2QnFDLE9BQTdCLENBQXFDLE9BQXJDLEVBQTZDLEVBQTdDLEVBQWlEM0IsS0FBakQsQ0FBdUQsR0FBdkQsQ0FBZDtBQUNBMEIsU0FBSyxDQUFDekIsTUFBTixDQUFhLENBQWIsRUFBZSxDQUFmOztBQUVBLFNBQUksSUFBSTJCLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0YsS0FBSyxDQUFDRyxNQUFyQixFQUE2QkQsQ0FBQyxFQUE5QixFQUFpQztBQUM3QkYsV0FBSyxDQUFDRSxDQUFELENBQUwsR0FBV0Usa0JBQWtCLENBQUNKLEtBQUssQ0FBQ0UsQ0FBRCxDQUFMLENBQVNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUJDLFdBQW5CLEtBQW1DTixLQUFLLENBQUNFLENBQUQsQ0FBTCxDQUFTSyxLQUFULENBQWUsQ0FBZixDQUFwQyxDQUE3QjtBQUNIOztBQUVELFdBQU9QLEtBQUssQ0FBQ0csTUFBTixHQUFlSCxLQUFLLENBQUNRLE9BQU4sR0FBZ0JDLElBQWhCLENBQXFCLEtBQXJCLENBQWYsR0FBNkMsT0FBcEQ7QUFDSCxHQVREOztBQVdBLFNBQ0ksbUVBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRVixRQUFRLEVBQWhCLENBREosRUFFSTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLSTtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQW1CLGFBQVMsRUFBRTNDLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRWMsVUFBVjtBQUFzQixNQUFFLEVBQUMsWUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRCx5RkFBZXRCLFNBQWY7QUFBMEIscUJBQWlCLEVBQUVtQixpQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLEVBRUtSLFdBQVcsS0FBSyxTQUFoQixJQUE2QixNQUFDLDhEQUFEO0FBQVEsY0FBVSxFQUFFUyxVQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRmxDLENBREosQ0FESixFQU9JLE1BQUMsMkRBQUQ7QUFBSyxnQkFBWSxFQUFFSCxZQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFRSTtBQUFRLE9BQUcsRUFBRU0sVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FMSixDQURKO0FBa0JILENBbkdEOztHQUFNekIsSztVQUdlTywyRCxFQUNBRSx1RCxFQUNBRSx1RCxFQUNHQSx1RCxFQUNOSSxxRDs7O0tBUFpmLEs7QUFxR1MscUVBQUFnRSxrREFBTyxDQUFDQyxTQUFSLENBQWtCakUsS0FBbEIsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFBQTtBQUFPLElBQU1vQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFVO0FBQzNCLE9BQUs4QixJQUFMLEdBQVksVUFBU0MsSUFBVCxFQUFlO0FBQ3ZCLFNBQUtDLE1BQUwsR0FBY0QsSUFBZCxFQUNBLEtBQUtFLEdBQUwsR0FBVyxLQUFLRCxNQUFMLENBQVlFLFVBQVosQ0FBdUIsSUFBdkIsQ0FEWCxFQUVBLEtBQUtDLFNBQUwsR0FBaUIsRUFGakIsRUFHQSxLQUFLQyxLQUFMLEdBQWEsQ0FIYixFQUlBLEtBQUtDLFdBQUwsR0FBbUIsSUFKbkIsRUFLQSxLQUFLQyxjQUFMLEdBQXNCLElBTHRCLEVBTUEsS0FBS0MsS0FBTCxFQU5BO0FBT0gsR0FSRCxFQVNBLEtBQUtBLEtBQUwsR0FBYSxZQUFXO0FBQ3BCLFNBQUtKLFNBQUwsR0FBaUIsRUFBakIsRUFDQSxLQUFLSCxNQUFMLENBQVlRLEtBQVosR0FBb0J0QyxNQUFNLENBQUN1QyxVQUQzQixFQUVBLEtBQUtULE1BQUwsQ0FBWVUsTUFBWixHQUFxQnhDLE1BQU0sQ0FBQ1ksV0FGNUI7O0FBR0EsU0FBSyxJQUFJNkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxJQUFJLENBQTdCO0FBQ0ksV0FBS0MsV0FBTDtBQURKOztBQUVBLFNBQUtDLElBQUw7QUFDSCxHQWhCRCxFQWlCQSxLQUFLRCxXQUFMLEdBQW1CLFlBQVc7QUFDMUIsU0FBSyxJQUFJRCxDQUFDLEdBQUcsS0FBS1YsR0FBTCxDQUFTYSxlQUFULENBQXlCNUMsTUFBTSxDQUFDdUMsVUFBaEMsRUFBNEN2QyxNQUFNLENBQUNZLFdBQW5ELENBQVIsRUFBeUVpQyxDQUFDLEdBQUcsSUFBSUMsV0FBSixDQUFnQkwsQ0FBQyxDQUFDTSxJQUFGLENBQU9DLE1BQXZCLENBQTdFLEVBQTZHQyxDQUFDLEdBQUdKLENBQUMsQ0FBQzFCLE1BQW5ILEVBQTJIK0IsQ0FBQyxHQUFHLENBQXBJLEVBQXVJQSxDQUFDLEdBQUdELENBQTNJLEVBQThJQyxDQUFDLElBQUksQ0FBbko7QUFDSUMsVUFBSSxDQUFDQyxNQUFMLEtBQWdCLEVBQWhCLEtBQXVCUCxDQUFDLENBQUNLLENBQUQsQ0FBRCxHQUFPLFVBQTlCO0FBREo7O0FBRUEsU0FBS2pCLFNBQUwsQ0FBZW9CLElBQWYsQ0FBb0JaLENBQXBCO0FBQ0gsR0FyQkQsRUFzQkEsS0FBS2EsVUFBTCxHQUFrQixZQUFXO0FBQ3pCLFVBQU0sS0FBS3BCLEtBQVgsR0FBbUIsS0FBS0EsS0FBTCxHQUFhLENBQWhDLEdBQW9DLEtBQUtBLEtBQUwsR0FBYSxLQUFLQSxLQUFMLEdBQWEsQ0FBOUQsRUFDQSxLQUFLSCxHQUFMLENBQVN3QixZQUFULENBQXNCLEtBQUt0QixTQUFMLENBQWUsS0FBS0MsS0FBcEIsQ0FBdEIsRUFBa0QsQ0FBbEQsRUFBcUQsQ0FBckQsQ0FEQTtBQUVILEdBekJELEVBMEJBLEtBQUtTLElBQUwsR0FBWSxZQUFXO0FBQ25CLFFBQUlGLENBQUMsR0FBRyxJQUFSO0FBQ0EsU0FBS2EsVUFBTCxDQUFnQixLQUFLcEIsS0FBckIsR0FDQSxLQUFLQyxXQUFMLEdBQW1CbkMsTUFBTSxDQUFDd0QsVUFBUCxDQUFrQixZQUFXO0FBQzVDZixPQUFDLENBQUNFLElBQUYsR0FBU0YsQ0FBQyxDQUFDRSxJQUFGLENBQU9jLElBQVAsQ0FBWWhCLENBQVosQ0FBVCxFQUNBekMsTUFBTSxDQUFDMEQscUJBQVAsQ0FBNkJqQixDQUFDLENBQUNFLElBQS9CLENBREE7QUFFSCxLQUhrQixFQUdoQixHQUhnQixDQURuQjtBQUtILEdBakNELEVBa0NBLEtBQUtnQixPQUFMLEdBQWUsWUFBVztBQUN0QixTQUFLOUQsS0FBTCxJQUNBLEtBQUtzQyxXQUFMLEdBQW1CLENBRG5CLEVBRUF5QixRQUFRLENBQUNDLFdBQVQsQ0FBcUIsS0FBS0MsR0FBMUIsQ0FGQTtBQUdILEdBdENEO0FBdUNILENBeENNO0tBQU1oRSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmI1MThmZGRmZDJmNjM1ODAzYmYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IFNtb290aFNjcm9sbCwgdXNlUHJldmlvdXMsIGFkanVzdEZvbnRTaXplIH0gZnJvbSAnLi4vc3JjL2dsb2JhbEZ1bmMnXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9zcmMvc3RvcmUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7Tm9pc2V9IGZyb20gJy4uL3NyYy9qcy9ub2lzZSdcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9OYXYnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5cclxuLy8gc2Nzc1xyXG5pbXBvcnQgJy4uL3NyYy9zY3NzL3N0eWxlLnNjc3MnO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBwcmV2UGFnZSA9IHVzZVByZXZpb3VzKHBhZ2UpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5sYW5ndWFnZSk7XHJcbiAgICBjb25zdCBjdXJyZW50cGFnZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBhZ2UpO1xyXG4gICAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHthc1BhdGgsIHBhdGhuYW1lLCBiYXNlUGF0aH0gPSByb3V0ZTtcclxuXHJcbiAgICBjb25zdCBsb2dvbmFtZUVsZW0gPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBmZWF0dXJlZEltYWdlRWxlbSA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGZvb3RlckVsZW0gPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBzbW9vdGggPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBzY3JvbGxXcmFwID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgY2FudmFzRWxlbSA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB1cmxBcnJheSA9IHBhdGhuYW1lLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgdXJsQXJyYXkuc3BsaWNlKDAsMSk7XHJcbiAgICAgICAgaWYoJy8nK3VybEFycmF5WzBdID09PSBiYXNlUGF0aCl7XHJcbiAgICAgICAgICAgIHVybEFycmF5LnNwbGljZSgwLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc1NlY3Rpb24gPSB1cmxBcnJheVsyXSA/IHVybEFycmF5WzJdLm1hdGNoKC9zZWN0aW9uL2cpIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzUG9zdDtcclxuXHJcbiAgICAgICAgaXNTZWN0aW9uID8gXHJcbiAgICAgICAgICAgIGlzUG9zdCA9IHVybEFycmF5WzNdID8gdXJsQXJyYXlbM10ubWF0Y2goL3Bvc3QvZykgOiBmYWxzZVxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgaXNQb3N0ID0gdXJsQXJyYXlbMl0gPyB1cmxBcnJheVsyXS5tYXRjaCgvcG9zdC9nKSA6IGZhbHNlXHJcbiAgICAgICAgc2V0UGFnZShpc1Bvc3QgPyB1cmxBcnJheVsxXSsnLXBvc3QnIDogdXJsQXJyYXlbMV0gPyB1cmxBcnJheVsxXSA6ICdob21lJyk7XHJcbiAgICB9LFtwYXRobmFtZV0pXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHBhZ2UgIT09IHByZXZQYWdlICYmIHBhZ2UgIT09IG51bGwpe1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTonVVBEQVRFX1BBR0UnLCBwYWdlOnBhZ2V9KTtcclxuICAgICAgICAgICAgaWYoc21vb3RoLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICBzbW9vdGguY3VycmVudC5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3BhZ2VdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIG5ldyBOb2lzZShjYW52YXNFbGVtLmN1cnJlbnQpO1xyXG5cclxuICAgICAgICBhZGp1c3RGb250U2l6ZSgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKT0+YWRqdXN0Rm9udFNpemUoKSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT5hZGp1c3RGb250U2l6ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc21vb3RoLmN1cnJlbnQgPSBuZXcgU21vb3RoU2Nyb2xsKHNjcm9sbFdyYXAuY3VycmVudCwocywgeSwgaCkgPT4ge1xyXG4gICAgICAgICAgICBsb2dvbmFtZUVsZW0uY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwke3l9cHgsMClgO1xyXG4gICAgICAgICAgICBpZihmZWF0dXJlZEltYWdlRWxlbS5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRJbWFnZUVsZW0uY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwkey15Ki41fXB4LDApYDtcclxuXHJcbiAgICAgICAgICAgIGlmKCFmb290ZXJFbGVtLmN1cnJlbnQuY2xhc3NOYW1lKXtcclxuICAgICAgICAgICAgICAgIGlmKGZvb3RlckVsZW0uY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgPCAtZm9vdGVyRWxlbS5jdXJyZW50Lm9mZnNldEhlaWdodC8yKXtcclxuICAgICAgICAgICAgICAgICAgICBmb290ZXJFbGVtLmN1cnJlbnQuY2xhc3NOYW1lID0gJ2FjdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBcclxuICAgICAgICAgICAgc21vb3RoLmN1cnJlbnQub2ZmKCk7XHJcbiAgICAgICAgICAgIHNtb290aC5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gYXNQYXRoLnJlcGxhY2UoYmFzZVBhdGgsICcnKS5yZXBsYWNlKC9cXD8uKy9nLCcnKS5zcGxpdCgnLycpO1xyXG4gICAgICAgIHRpdGxlLnNwbGljZSgwLDIpO1xyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aXRsZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRpdGxlW2ldID0gZGVjb2RlVVJJQ29tcG9uZW50KHRpdGxlW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGl0bGVbaV0uc2xpY2UoMSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRpdGxlLmxlbmd0aCA/IHRpdGxlLnJldmVyc2UoKS5qb2luKCcgfCAnKSA6ICdCYXJ3byc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57Z2V0VGl0bGUoKX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJib2R5V3JhcFwiIGNsYXNzTmFtZT17bGFuZ3VhZ2V9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW5XcmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e3Njcm9sbFdyYXB9IGlkPVwic2Nyb2xsV3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGZlYXR1cmVkSW1hZ2VFbGVtPXtmZWF0dXJlZEltYWdlRWxlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRwYWdlICE9PSAnY29udGFjdCcgJiYgPEZvb3RlciBmb290ZXJFbGVtPXtmb290ZXJFbGVtfSAvPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxOYXYgbG9nb25hbWVFbGVtPXtsb2dvbmFtZUVsZW19Lz5cclxuICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNFbGVtfT48L2NhbnZhcz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTsiLCJleHBvcnQgY29uc3QgTm9pc2UgPSBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZWxlbSxcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICB0aGlzLm5vaXNlRGF0YSA9IFtdLFxyXG4gICAgICAgIHRoaXMuZnJhbWUgPSAwLFxyXG4gICAgICAgIHRoaXMubG9vcFRpbWVvdXQgPSBudWxsLFxyXG4gICAgICAgIHRoaXMucmVzaXplVGhyb3R0bGUgPSBudWxsLFxyXG4gICAgICAgIHRoaXMuc2V0dXAoKVxyXG4gICAgfSxcclxuICAgIHRoaXMuc2V0dXAgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm5vaXNlRGF0YSA9IFtdLFxyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgMTA7IHQgKz0gMSlcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVOb2lzZSgpO1xyXG4gICAgICAgIHRoaXMubG9vcCgpXHJcbiAgICB9LFxyXG4gICAgdGhpcy5jcmVhdGVOb2lzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvciAodmFyIHQgPSB0aGlzLmN0eC5jcmVhdGVJbWFnZURhdGEod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksIGUgPSBuZXcgVWludDMyQXJyYXkodC5kYXRhLmJ1ZmZlciksIGEgPSBlLmxlbmd0aCwgbiA9IDA7IG4gPCBhOyBuICs9IDEpXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPCAuNSAmJiAoZVtuXSA9IDQyNzgxOTAwODApO1xyXG4gICAgICAgIHRoaXMubm9pc2VEYXRhLnB1c2godClcclxuICAgIH0sXHJcbiAgICB0aGlzLnBhaW50Tm9pc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICA5ID09PSB0aGlzLmZyYW1lID8gdGhpcy5mcmFtZSA9IDAgOiB0aGlzLmZyYW1lID0gdGhpcy5mcmFtZSArIDEsXHJcbiAgICAgICAgdGhpcy5jdHgucHV0SW1hZ2VEYXRhKHRoaXMubm9pc2VEYXRhW3RoaXMuZnJhbWVdLCAwLCAwKVxyXG4gICAgfSxcclxuICAgIHRoaXMubG9vcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICB0aGlzLnBhaW50Tm9pc2UodGhpcy5mcmFtZSksXHJcbiAgICAgICAgdGhpcy5sb29wVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0Lmxvb3AgPSB0Lmxvb3AuYmluZCh0KSxcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0Lmxvb3ApXHJcbiAgICAgICAgfSwgMTIwKVxyXG4gICAgfSxcclxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKSxcclxuICAgICAgICB0aGlzLmxvb3BUaW1lb3V0ID0gMCxcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVDaGlsZCh0aGlzLiRlbClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=