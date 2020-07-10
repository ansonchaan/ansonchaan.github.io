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
      noise.destroy();
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
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, getTitle()), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  })), __jsx("div", {
    id: "bodyWrap",
    className: language,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "mainWrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx("div", {
    ref: scrollWrap,
    id: "scrollWrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    featuredImageElem: featuredImageElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  })), currentpage !== 'contact' && __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    footerElem: footerElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 55
    }
  }))), __jsx(_src_components_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    logonameElem: logonameElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }), __jsx("canvas", {
    ref: canvasElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsInByZXZQYWdlIiwidXNlUHJldmlvdXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibGFuZ3VhZ2UiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY3VycmVudHBhZ2UiLCJyb3V0ZSIsInVzZVJvdXRlciIsImFzUGF0aCIsInBhdGhuYW1lIiwiYmFzZVBhdGgiLCJsb2dvbmFtZUVsZW0iLCJ1c2VSZWYiLCJmZWF0dXJlZEltYWdlRWxlbSIsImZvb3RlckVsZW0iLCJzbW9vdGgiLCJzY3JvbGxXcmFwIiwiY2FudmFzRWxlbSIsInVzZUVmZmVjdCIsInVybEFycmF5Iiwic3BsaXQiLCJzcGxpY2UiLCJpc1NlY3Rpb24iLCJtYXRjaCIsImlzUG9zdCIsInR5cGUiLCJjdXJyZW50IiwicmVzZXQiLCJub2lzZSIsIk5vaXNlIiwiaW5pdCIsImFkanVzdEZvbnRTaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU21vb3RoU2Nyb2xsIiwicyIsInkiLCJoIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjbGFzc05hbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJpbm5lckhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9mZiIsImdldFRpdGxlIiwidGl0bGUiLCJyZXBsYWNlIiwiaSIsImxlbmd0aCIsImRlY29kZVVSSUNvbXBvbmVudCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyZXZlcnNlIiwiam9pbiIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFD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UUFBUSxFQUFoQixDQURKLEVBRUk7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixhQUFTLEVBQUU5QyxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVjLFVBQVY7QUFBc0IsTUFBRSxFQUFDLFlBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQseUZBQWV0QixTQUFmO0FBQTBCLHFCQUFpQixFQUFFbUIsaUJBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixFQUVLUixXQUFXLEtBQUssU0FBaEIsSUFBNkIsTUFBQyw4REFBRDtBQUFRLGNBQVUsRUFBRVMsVUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZsQyxDQURKLENBREosRUFPSSxNQUFDLDJEQUFEO0FBQUssZ0JBQVksRUFBRUgsWUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUk7QUFBUSxPQUFHLEVBQUVNLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLENBTEosQ0FESjtBQWtCSCxDQXJHRDs7R0FBTXpCLEs7VUFHZU8sMkQsRUFDQUUsdUQsRUFDQUUsdUQsRUFDR0EsdUQsRUFDTkkscUQ7OztLQVBaZixLO0FBdUdTLHFFQUFBbUUsa0RBQU8sQ0FBQ0MsU0FBUixDQUFrQnBFLEtBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNWMzN2EzYTAxMjFmN2EzMTY0MGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgU21vb3RoU2Nyb2xsLCB1c2VQcmV2aW91cywgYWRqdXN0Rm9udFNpemUgfSBmcm9tICcuLi9zcmMvZ2xvYmFsRnVuYydcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL3NyYy9zdG9yZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHtOb2lzZX0gZnJvbSAnLi4vc3JjL2pzL25vaXNlJ1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL05hdidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb290ZXInXHJcblxyXG4vLyBzY3NzXHJcbmltcG9ydCAnLi4vc3JjL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHByZXZQYWdlID0gdXNlUHJldmlvdXMocGFnZSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmxhbmd1YWdlKTtcclxuICAgIGNvbnN0IGN1cnJlbnRwYWdlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGFnZSk7XHJcbiAgICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2FzUGF0aCwgcGF0aG5hbWUsIGJhc2VQYXRofSA9IHJvdXRlO1xyXG5cclxuICAgIGNvbnN0IGxvZ29uYW1lRWxlbSA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGZlYXR1cmVkSW1hZ2VFbGVtID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZm9vdGVyRWxlbSA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHNtb290aCA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHNjcm9sbFdyYXAgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBjYW52YXNFbGVtID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHVybEFycmF5ID0gcGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuICAgICAgICB1cmxBcnJheS5zcGxpY2UoMCwxKTtcclxuICAgICAgICBpZignLycrdXJsQXJyYXlbMF0gPT09IGJhc2VQYXRoKXtcclxuICAgICAgICAgICAgdXJsQXJyYXkuc3BsaWNlKDAsMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzU2VjdGlvbiA9IHVybEFycmF5WzJdID8gdXJsQXJyYXlbMl0ubWF0Y2goL3NlY3Rpb24vZykgOiBmYWxzZTtcclxuICAgICAgICBsZXQgaXNQb3N0O1xyXG5cclxuICAgICAgICBpc1NlY3Rpb24gPyBcclxuICAgICAgICAgICAgaXNQb3N0ID0gdXJsQXJyYXlbM10gPyB1cmxBcnJheVszXS5tYXRjaCgvcG9zdC9nKSA6IGZhbHNlXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICBpc1Bvc3QgPSB1cmxBcnJheVsyXSA/IHVybEFycmF5WzJdLm1hdGNoKC9wb3N0L2cpIDogZmFsc2VcclxuICAgICAgICBzZXRQYWdlKGlzUG9zdCA/IHVybEFycmF5WzFdKyctcG9zdCcgOiB1cmxBcnJheVsxXSA/IHVybEFycmF5WzFdIDogJ2hvbWUnKTtcclxuICAgIH0sW3BhdGhuYW1lXSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYocGFnZSAhPT0gcHJldlBhZ2UgJiYgcGFnZSAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOidVUERBVEVfUEFHRScsIHBhZ2U6cGFnZX0pO1xyXG4gICAgICAgICAgICBpZihzbW9vdGguY3VycmVudClcclxuICAgICAgICAgICAgICAgIHNtb290aC5jdXJyZW50LnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbcGFnZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3Qgbm9pc2UgPSBuZXcgTm9pc2UoY2FudmFzRWxlbS5jdXJyZW50KTtcclxuICAgICAgICBub2lzZS5pbml0KCk7XHJcblxyXG4gICAgICAgIGFkanVzdEZvbnRTaXplKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT5hZGp1c3RGb250U2l6ZSgpKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBub2lzZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKT0+YWRqdXN0Rm9udFNpemUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNtb290aC5jdXJyZW50ID0gbmV3IFNtb290aFNjcm9sbChzY3JvbGxXcmFwLmN1cnJlbnQsKHMsIHksIGgpID0+IHtcclxuICAgICAgICAgICAgbG9nb25hbWVFbGVtLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsJHt5fXB4LDApYDtcclxuICAgICAgICAgICAgaWYoZmVhdHVyZWRJbWFnZUVsZW0uY3VycmVudClcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkSW1hZ2VFbGVtLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsJHsteSouNX1weCwwKWA7XHJcblxyXG4gICAgICAgICAgICBpZighZm9vdGVyRWxlbS5jdXJyZW50LmNsYXNzTmFtZSl7XHJcbiAgICAgICAgICAgICAgICBpZihmb290ZXJFbGVtLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gd2luZG93LmlubmVySGVpZ2h0IDwgLWZvb3RlckVsZW0uY3VycmVudC5vZmZzZXRIZWlnaHQvMil7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyRWxlbS5jdXJyZW50LmNsYXNzTmFtZSA9ICdhY3RpdmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgXHJcbiAgICAgICAgICAgIHNtb290aC5jdXJyZW50Lm9mZigpO1xyXG4gICAgICAgICAgICBzbW9vdGguY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGFzUGF0aC5yZXBsYWNlKGJhc2VQYXRoLCAnJykucmVwbGFjZSgvXFw/LisvZywnJykuc3BsaXQoJy8nKTtcclxuICAgICAgICB0aXRsZS5zcGxpY2UoMCwyKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGl0bGUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aXRsZVtpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh0aXRsZVtpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRpdGxlW2ldLnNsaWNlKDEpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aXRsZS5sZW5ndGggPyB0aXRsZS5yZXZlcnNlKCkuam9pbignIHwgJykgOiAnQmFyd28nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e2dldFRpdGxlKCl9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYm9keVdyYXBcIiBjbGFzc05hbWU9e2xhbmd1YWdlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluV3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtzY3JvbGxXcmFwfSBpZD1cInNjcm9sbFdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBmZWF0dXJlZEltYWdlRWxlbT17ZmVhdHVyZWRJbWFnZUVsZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50cGFnZSAhPT0gJ2NvbnRhY3QnICYmIDxGb290ZXIgZm9vdGVyRWxlbT17Zm9vdGVyRWxlbX0gLz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2IGxvZ29uYW1lRWxlbT17bG9nb25hbWVFbGVtfS8+XHJcbiAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17Y2FudmFzRWxlbX0+PC9jYW52YXM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7Il0sInNvdXJjZVJvb3QiOiIifQ==