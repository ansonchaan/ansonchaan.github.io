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
    var noise = new _src_js_noise__WEBPACK_IMPORTED_MODULE_7__["Noise"](canvasElem.current);
    noise.init();
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
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, getTitle()), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  })), __jsx("div", {
    id: "bodyWrap",
    className: language,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "mainWrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx("div", {
    ref: scrollWrap,
    id: "scrollWrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    featuredImageElem: featuredImageElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  })), currentpage !== 'contact' && __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    footerElem: footerElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 55
    }
  }))), __jsx(_src_components_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    logonameElem: logonameElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }), __jsx("canvas", {
    ref: canvasElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsInByZXZQYWdlIiwidXNlUHJldmlvdXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibGFuZ3VhZ2UiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY3VycmVudHBhZ2UiLCJyb3V0ZSIsInVzZVJvdXRlciIsImFzUGF0aCIsInBhdGhuYW1lIiwiYmFzZVBhdGgiLCJsb2dvbmFtZUVsZW0iLCJ1c2VSZWYiLCJmZWF0dXJlZEltYWdlRWxlbSIsImZvb3RlckVsZW0iLCJzbW9vdGgiLCJzY3JvbGxXcmFwIiwiY2FudmFzRWxlbSIsInVzZUVmZmVjdCIsInVybEFycmF5Iiwic3BsaXQiLCJzcGxpY2UiLCJpc1NlY3Rpb24iLCJtYXRjaCIsImlzUG9zdCIsInR5cGUiLCJjdXJyZW50IiwicmVzZXQiLCJub2lzZSIsIk5vaXNlIiwiaW5pdCIsImFkanVzdEZvbnRTaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJTbW9vdGhTY3JvbGwiLCJzIiwieSIsImgiLCJzdHlsZSIsInRyYW5zZm9ybSIsImNsYXNzTmFtZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImlubmVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2ZmIiwiZ2V0VGl0bGUiLCJ0aXRsZSIsInJlcGxhY2UiLCJpIiwibGVuZ3RoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJldmVyc2UiLCJqb2luIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0NBR0E7O0FB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QyxVQUFYO0FBQXNCLFdBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLSTtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQW1CLGFBQVMsRUFBRTdDLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRWMsVUFBVjtBQUFzQixNQUFFLEVBQUMsWUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRCx5RkFBZXRCLFNBQWY7QUFBMEIscUJBQWlCLEVBQUVtQixpQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLEVBRUtSLFdBQVcsS0FBSyxTQUFoQixJQUE2QixNQUFDLDhEQUFEO0FBQVEsY0FBVSxFQUFFUyxVQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRmxDLENBREosQ0FESixFQU9JLE1BQUMsMkRBQUQ7QUFBSyxnQkFBWSxFQUFFSCxZQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFRSTtBQUFRLE9BQUcsRUFBRU0sVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FMSixDQURKO0FBa0JILENBcEdEOztHQUFNekIsSztVQUdlTywyRCxFQUNBRSx1RCxFQUNBRSx1RCxFQUNHQSx1RCxFQUNOSSxxRDs7O0tBUFpmLEs7QUFzR1MscUVBQUFrRSxrREFBTyxDQUFDQyxTQUFSLENBQWtCbkUsS0FBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5lOGVkZGY0YTZkMzQ4OTNjMDFjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBTbW9vdGhTY3JvbGwsIHVzZVByZXZpb3VzLCBhZGp1c3RGb250U2l6ZSB9IGZyb20gJy4uL3NyYy9nbG9iYWxGdW5jJ1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vc3JjL3N0b3JlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge05vaXNlfSBmcm9tICcuLi9zcmMvanMvbm9pc2UnXHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTmF2J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvb3RlcidcclxuXHJcbi8vIHNjc3NcclxuaW1wb3J0ICcuLi9zcmMvc2Nzcy9zdHlsZS5zY3NzJztcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgcHJldlBhZ2UgPSB1c2VQcmV2aW91cyhwYWdlKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubGFuZ3VhZ2UpO1xyXG4gICAgY29uc3QgY3VycmVudHBhZ2UgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wYWdlKTtcclxuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7YXNQYXRoLCBwYXRobmFtZSwgYmFzZVBhdGh9ID0gcm91dGU7XHJcblxyXG4gICAgY29uc3QgbG9nb25hbWVFbGVtID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZmVhdHVyZWRJbWFnZUVsZW0gPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBmb290ZXJFbGVtID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgc21vb3RoID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgc2Nyb2xsV3JhcCA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGNhbnZhc0VsZW0gPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgdXJsQXJyYXkgPSBwYXRobmFtZS5zcGxpdCgnLycpO1xyXG4gICAgICAgIHVybEFycmF5LnNwbGljZSgwLDEpO1xyXG4gICAgICAgIGlmKCcvJyt1cmxBcnJheVswXSA9PT0gYmFzZVBhdGgpe1xyXG4gICAgICAgICAgICB1cmxBcnJheS5zcGxpY2UoMCwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNTZWN0aW9uID0gdXJsQXJyYXlbMl0gPyB1cmxBcnJheVsyXS5tYXRjaCgvc2VjdGlvbi9nKSA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc1Bvc3Q7XHJcblxyXG4gICAgICAgIGlzU2VjdGlvbiA/IFxyXG4gICAgICAgICAgICBpc1Bvc3QgPSB1cmxBcnJheVszXSA/IHVybEFycmF5WzNdLm1hdGNoKC9wb3N0L2cpIDogZmFsc2VcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIGlzUG9zdCA9IHVybEFycmF5WzJdID8gdXJsQXJyYXlbMl0ubWF0Y2goL3Bvc3QvZykgOiBmYWxzZVxyXG4gICAgICAgIHNldFBhZ2UoaXNQb3N0ID8gdXJsQXJyYXlbMV0rJy1wb3N0JyA6IHVybEFycmF5WzFdID8gdXJsQXJyYXlbMV0gOiAnaG9tZScpO1xyXG4gICAgfSxbcGF0aG5hbWVdKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihwYWdlICE9PSBwcmV2UGFnZSAmJiBwYWdlICE9PSBudWxsKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J1VQREFURV9QQUdFJywgcGFnZTpwYWdlfSk7XHJcbiAgICAgICAgICAgIGlmKHNtb290aC5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgc21vb3RoLmN1cnJlbnQucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtwYWdlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBub2lzZSA9IG5ldyBOb2lzZShjYW52YXNFbGVtLmN1cnJlbnQpO1xyXG4gICAgICAgIG5vaXNlLmluaXQoKTtcclxuXHJcbiAgICAgICAgYWRqdXN0Rm9udFNpemUoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCk9PmFkanVzdEZvbnRTaXplKCkpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKT0+YWRqdXN0Rm9udFNpemUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNtb290aC5jdXJyZW50ID0gbmV3IFNtb290aFNjcm9sbChzY3JvbGxXcmFwLmN1cnJlbnQsKHMsIHksIGgpID0+IHtcclxuICAgICAgICAgICAgbG9nb25hbWVFbGVtLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsJHt5fXB4LDApYDtcclxuICAgICAgICAgICAgaWYoZmVhdHVyZWRJbWFnZUVsZW0uY3VycmVudClcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkSW1hZ2VFbGVtLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsJHsteSouNX1weCwwKWA7XHJcblxyXG4gICAgICAgICAgICBpZighZm9vdGVyRWxlbS5jdXJyZW50LmNsYXNzTmFtZSl7XHJcbiAgICAgICAgICAgICAgICBpZihmb290ZXJFbGVtLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gd2luZG93LmlubmVySGVpZ2h0IDwgLWZvb3RlckVsZW0uY3VycmVudC5vZmZzZXRIZWlnaHQvMil7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyRWxlbS5jdXJyZW50LmNsYXNzTmFtZSA9ICdhY3RpdmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgXHJcbiAgICAgICAgICAgIHNtb290aC5jdXJyZW50Lm9mZigpO1xyXG4gICAgICAgICAgICBzbW9vdGguY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGFzUGF0aC5yZXBsYWNlKGJhc2VQYXRoLCAnJykucmVwbGFjZSgvXFw/LisvZywnJykuc3BsaXQoJy8nKTtcclxuICAgICAgICB0aXRsZS5zcGxpY2UoMCwyKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGl0bGUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aXRsZVtpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh0aXRsZVtpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRpdGxlW2ldLnNsaWNlKDEpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aXRsZS5sZW5ndGggPyB0aXRsZS5yZXZlcnNlKCkuam9pbignIHwgJykgOiAnQmFyd28nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e2dldFRpdGxlKCl9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYm9keVdyYXBcIiBjbGFzc05hbWU9e2xhbmd1YWdlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluV3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtzY3JvbGxXcmFwfSBpZD1cInNjcm9sbFdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBmZWF0dXJlZEltYWdlRWxlbT17ZmVhdHVyZWRJbWFnZUVsZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50cGFnZSAhPT0gJ2NvbnRhY3QnICYmIDxGb290ZXIgZm9vdGVyRWxlbT17Zm9vdGVyRWxlbX0gLz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2IGxvZ29uYW1lRWxlbT17bG9nb25hbWVFbGVtfS8+XHJcbiAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17Y2FudmFzRWxlbX0+PC9jYW52YXM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7Il0sInNvdXJjZVJvb3QiOiIifQ==