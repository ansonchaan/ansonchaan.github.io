webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/[lang]/index.js":
/*!*******************************!*\
  !*** ./pages/[lang]/index.js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/next-server/server/router */ "./node_modules/next/dist/next-server/server/router.js");
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\NYT\\Desktop\\me\\warmpaper\\pages\\[lang]\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Flickity = true ? __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js") : undefined;

var Home = function Home() {
  _s();

  var language = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.language;
  }); // const dispatch = useDispatch();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      basePath = _useRouter.basePath;

  var gallery = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var flkty = new Flickity(gallery.current, {
      cellAlign: 'left',
      pageDots: false
    });
    flkty.reposition();
    var lth = flkty.slides.length;
    flkty.on('scroll', function (progress) {
      var idx = Math.max(0, Math.ceil(progress / (lth / 2 - 1)) - 1);

      for (var i = 0; i < lth; i++) {
        if (idx === i) {
          var elem = flkty.slides[i].cells[0].element;
          var x = (idx - progress / (lth / 2 - 1)) * (lth * 100);
          elem.style.transform = "translate3d(".concat(x, "%,0,0)");
        }
      }
    });

    for (var i = 0; i < lth; i++) {
      var elem = flkty.slides[i].cells[0].element;
      elem.style.zIndex = lth - i;
      gsap__WEBPACK_IMPORTED_MODULE_5__["default"].set(elem.querySelector('#imgWrap'), {
        rotate: Math.random() * 20 - 10
      });
    }

    return function () {
      flkty.destroy();
      flkty = null;
    };
  }, []);
  return __jsx("div", {
    id: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "banner",
    className: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "bigTitle b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "A Digital Agency."), __jsx("div", {
    id: "slogan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("div", {
    id: "time",
    className: "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "13:06")), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "We make digital Experiences because we are ", __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 58
    }
  }, "designer"), "."), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Scroll to explore")), __jsx("div", {
    id: "bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }))), __jsx("div", {
    id: "h_projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "wrap",
    className: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "A digital agency for brands that want more."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]/projects",
    as: "/".concat(language, "/projects"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 72
    }
  }, __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 90
    }
  }, "View all projects >")))), __jsx("div", {
    id: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("ul", {
    ref: gallery,
    id: "gallery",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "imgWrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]/projects/[post]",
    as: "/".concat(language, "/projects/a"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, __jsx("a", {
    id: "img",
    className: "corner",
    style: {
      backgroundImage: "url('".concat(basePath, "/images/project1.png')")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  })))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "imgWrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]/projects/[post]",
    as: "/".concat(language, "/projects/a"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, __jsx("a", {
    id: "img",
    className: "corner",
    style: {
      backgroundImage: "url('".concat(basePath, "/images/project1.png')")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  })))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "imgWrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]/projects/[post]",
    as: "/".concat(language, "/projects/a"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx("a", {
    id: "img",
    className: "corner",
    style: {
      backgroundImage: "url('".concat(basePath, "/images/project1.png')")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  })))))))), __jsx("div", {
    id: "h_solutions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("h3", {
    id: "title",
    className: "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, "Solutions"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "corner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 39
    }
  }), __jsx("h5", {
    className: "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 67
    }
  }, "Web", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 88
    }
  }), "Design"), __jsx("p", {
    className: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 104
    }
  }, "A digital agency for brands that want more. The future of open meeting places for.")), __jsx("div", {
    className: "cornercorner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 217
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 247
    }
  }))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "corner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 39
    }
  }), __jsx("h5", {
    className: "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 67
    }
  }, "Management & ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 98
    }
  }), "Communication"), __jsx("p", {
    className: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 121
    }
  }, "A digital agency for brands that want more. The future of open meeting places for."))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "corner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 39
    }
  }), __jsx("h5", {
    className: "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 67
    }
  }, "Business", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 93
    }
  }), "Analytic"), __jsx("p", {
    className: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 111
    }
  }, "A digital agency for brands that want more. The future of open meeting places for."))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "corner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 39
    }
  }), __jsx("h5", {
    className: "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 67
    }
  }, "Consultant & ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 98
    }
  }), "User Experience"), __jsx("p", {
    className: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 123
    }
  }, "A digital agency for brands that want more. The future of open meeting places for.")))), __jsx("div", {
    id: "bgWrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  })))), __jsx("div", {
    id: "h_about",
    className: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }), __jsx("h2", {
    className: "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, "About", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 32
    }
  }), "Warmpaper"), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, "One of the first things you should know about us is that we don\u2019t do everything. But what we do, we do well.One of the first things you should know about us is that we don\u2019t do everything. But what we do, we do well.")));
};

_s(Home, "9ebKPSlzdn/yuDSDv1UvuaKrA7s=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbGFuZ10vaW5kZXguanMiXSwibmFtZXMiOlsiRmxpY2tpdHkiLCJyZXF1aXJlIiwiSG9tZSIsImxhbmd1YWdlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVJvdXRlciIsImJhc2VQYXRoIiwiZ2FsbGVyeSIsInVzZVJlZiIsInVzZUVmZmVjdCIsImZsa3R5IiwiY3VycmVudCIsImNlbGxBbGlnbiIsInBhZ2VEb3RzIiwicmVwb3NpdGlvbiIsImx0aCIsInNsaWRlcyIsImxlbmd0aCIsIm9uIiwicHJvZ3Jlc3MiLCJpZHgiLCJNYXRoIiwibWF4IiwiY2VpbCIsImkiLCJlbGVtIiwiY2VsbHMiLCJlbGVtZW50IiwieCIsInN0eWxlIiwidHJhbnNmb3JtIiwiekluZGV4IiwiZ3NhcCIsInNldCIsInF1ZXJ5U2VsZWN0b3IiLCJyb3RhdGUiLCJyYW5kb20iLCJkZXN0cm95IiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLE9BQWtDQyxtQkFBTyxDQUFDLHFEQUFELENBQXpDLEdBQXdELFNBQXpFOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNGLFFBQVY7QUFBQSxHQUFOLENBQTVCLENBRGlCLENBRWpCOztBQUZpQixtQkFHRUcsNkRBQVMsRUFIWDtBQUFBLE1BR1ZDLFFBSFUsY0FHVkEsUUFIVTs7QUFLakIsTUFBTUMsT0FBTyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdEI7QUFFQUMseURBQVMsQ0FBQyxZQUFJO0FBQ1osUUFBSUMsS0FBSyxHQUFHLElBQUlYLFFBQUosQ0FBY1EsT0FBTyxDQUFDSSxPQUF0QixFQUEr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RixFQVFFO0FBQUssTUFBRSxFQUFDLFFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLElBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLENBUkYsQ0ExREYsRUEwRUU7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixhQUFTLEVBQUMsUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdkIsY0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsME9BSEYsQ0ExRUYsQ0FERjtBQWtGRCxDQXJIRDs7R0FBTUwsSTtVQUNhRSx1RCxFQUVFRSxxRDs7O0tBSGZKLEk7O0FBc0lTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzZhN2E0OWYxZTRiMzY5Y2E2ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi8uLi9zcmMvc3RvcmUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyByb3V0ZSB9IGZyb20gJ25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyJztcclxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XHJcblxyXG5jb25zdCBGbGlja2l0eSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyByZXF1aXJlKCdmbGlja2l0eScpIDogbnVsbFxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBsYW5ndWFnZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmxhbmd1YWdlKTtcclxuICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qge2Jhc2VQYXRofSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBnYWxsZXJ5ID0gdXNlUmVmKG51bGwpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgbGV0IGZsa3R5ID0gbmV3IEZsaWNraXR5KCBnYWxsZXJ5LmN1cnJlbnQsIHtjZWxsQWxpZ246J2xlZnQnLCBwYWdlRG90czogZmFsc2V9KTtcclxuICAgIGZsa3R5LnJlcG9zaXRpb24oKTtcclxuXHJcbiAgICBjb25zdCBsdGggPSBmbGt0eS5zbGlkZXMubGVuZ3RoO1xyXG4gICAgZmxrdHkub24oICdzY3JvbGwnLCBmdW5jdGlvbiggcHJvZ3Jlc3MgKSB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IE1hdGgubWF4KDAsIE1hdGguY2VpbChwcm9ncmVzcyAvIChsdGgvMi0xKSkgLTEpO1xyXG4gICAgICBmb3IobGV0IGk9MDsgaTxsdGg7IGkrKyl7XHJcbiAgICAgICAgaWYoaWR4ID09PSBpKXtcclxuICAgICAgICAgIGNvbnN0IGVsZW0gPSBmbGt0eS5zbGlkZXNbaV0uY2VsbHNbMF0uZWxlbWVudDtcclxuICAgICAgICAgIGNvbnN0IHggPSAoaWR4LShwcm9ncmVzcyAvIChsdGgvMi0xKSkpICogKGx0aCoxMDApO1xyXG4gICAgICAgICAgZWxlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt4fSUsMCwwKWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTxsdGg7IGkrKyl7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSBmbGt0eS5zbGlkZXNbaV0uY2VsbHNbMF0uZWxlbWVudDtcclxuICAgICAgZWxlbS5zdHlsZS56SW5kZXggPSBsdGgtaTtcclxuICAgICAgZ3NhcC5zZXQoZWxlbS5xdWVyeVNlbGVjdG9yKCcjaW1nV3JhcCcpLHtyb3RhdGU6IE1hdGgucmFuZG9tKCkgKiAyMCAtIDEwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGZsa3R5LmRlc3Ryb3koKTtcclxuICAgICAgZmxrdHkgPSBudWxsO1xyXG4gICAgfVxyXG4gIH0sW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImhvbWVcIj5cclxuICAgICAgPGRpdiBpZD1cImJhbm5lclwiIGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnVGl0bGUgYlwiPkEgRGlnaXRhbCBBZ2VuY3kuPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInNsb2dhblwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRpbWVcIiBjbGFzc05hbWU9XCJiXCI+MTM6MDY8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyPldlIG1ha2UgZGlnaXRhbCBFeHBlcmllbmNlcyBiZWNhdXNlIHdlIGFyZSA8dT5kZXNpZ25lcjwvdT4uPC9oMj5cclxuICAgICAgICAgIDxoNT5TY3JvbGwgdG8gZXhwbG9yZTwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImJnXCI+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiaF9wcm9qZWN0c1wiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ3cmFwXCIgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibGVmdFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYlwiPkEgZGlnaXRhbCBhZ2VuY3kgZm9yIGJyYW5kcyB0aGF0IHdhbnQgbW9yZS48L2gyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1tsYW5nXS9wcm9qZWN0c1wiIGFzPXtgLyR7bGFuZ3VhZ2V9L3Byb2plY3RzYH0+PGEgY2xhc3NOYW1lPVwiaDVcIj48dT5WaWV3IGFsbCBwcm9qZWN0cyA+PC91PjwvYT48L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICA8dWwgcmVmPXtnYWxsZXJ5fSBpZD1cImdhbGxlcnlcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW1nV3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1tsYW5nXS9wcm9qZWN0cy9bcG9zdF1cIiBhcz17YC8ke2xhbmd1YWdlfS9wcm9qZWN0cy9hYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJpbWdcIiBjbGFzc05hbWU9XCJjb3JuZXJcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCcke2Jhc2VQYXRofS9pbWFnZXMvcHJvamVjdDEucG5nJylgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJ0YWc3IGgzIGJcIj5XZWJzaXRlczwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL1tsYW5nXS9wcm9qZWN0cy9bcG9zdF1cIiBhcz17YC8ke2xhbmd1YWdlfS9wcm9qZWN0cy9hYH0+PGEgaWQ9XCJuYW1lXCIgY2xhc3NOYW1lPVwiaDRcIj5DaXR0YXBhcnRuZXI8YnIvPiBQb3J0Zm9saW8gV2Vic2l0ZTwvYT48L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImltZ1dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9bbGFuZ10vcHJvamVjdHMvW3Bvc3RdXCIgYXM9e2AvJHtsYW5ndWFnZX0vcHJvamVjdHMvYWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGlkPVwiaW1nXCIgY2xhc3NOYW1lPVwiY29ybmVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgnJHtiYXNlUGF0aH0vaW1hZ2VzL3Byb2plY3QxLnBuZycpYH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwidGFnNyBoMyBiXCI+V2Vic2l0ZXM8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9bbGFuZ10vcHJvamVjdHMvW3Bvc3RdXCIgYXM9e2AvJHtsYW5ndWFnZX0vcHJvamVjdHMvYWB9PjxhIGlkPVwibmFtZVwiIGNsYXNzTmFtZT1cImg0XCI+Q2l0dGFwYXJ0bmVyPGJyLz4gUG9ydGZvbGlvIFdlYnNpdGU8L2E+PC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWdXcmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvW2xhbmddL3Byb2plY3RzL1twb3N0XVwiIGFzPXtgLyR7bGFuZ3VhZ2V9L3Byb2plY3RzL2FgfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBpZD1cImltZ1wiIGNsYXNzTmFtZT1cImNvcm5lclwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJyR7YmFzZVBhdGh9L2ltYWdlcy9wcm9qZWN0MS5wbmcnKWB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cInRhZzcgaDMgYlwiPldlYnNpdGVzPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvW2xhbmddL3Byb2plY3RzL1twb3N0XVwiIGFzPXtgLyR7bGFuZ3VhZ2V9L3Byb2plY3RzL2FgfT48YSBpZD1cIm5hbWVcIiBjbGFzc05hbWU9XCJoNFwiPkNpdHRhcGFydG5lcjxici8+IFBvcnRmb2xpbyBXZWJzaXRlPC9hPjwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiaF9zb2x1dGlvbnNcIj5cclxuICAgICAgICA8aDMgaWQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImJcIj5Tb2x1dGlvbnM8L2gzPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48ZGl2IGNsYXNzTmFtZT1cImNvcm5lclwiPjxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPjwvZGl2PjxoNSBjbGFzc05hbWU9XCJiXCI+V2ViPGJyLz5EZXNpZ248L2g1PjxwIGNsYXNzTmFtZT1cInNtYWxsXCI+QSBkaWdpdGFsIGFnZW5jeSBmb3IgYnJhbmRzIHRoYXQgd2FudCBtb3JlLiBUaGUgZnV0dXJlIG9mIG9wZW4gbWVldGluZyBwbGFjZXMgZm9yLjwvcD48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImNvcm5lcmNvcm5lclwiPjxzcGFuPjwvc3Bhbj48L2Rpdj48L2xpPlxyXG4gICAgICAgICAgPGxpPjxkaXYgY2xhc3NOYW1lPVwiY29ybmVyXCI+PGRpdiBjbGFzc05hbWU9XCJpY29uXCI+PC9kaXY+PGg1IGNsYXNzTmFtZT1cImJcIj5NYW5hZ2VtZW50ICYgPGJyLz5Db21tdW5pY2F0aW9uPC9oNT48cCBjbGFzc05hbWU9XCJzbWFsbFwiPkEgZGlnaXRhbCBhZ2VuY3kgZm9yIGJyYW5kcyB0aGF0IHdhbnQgbW9yZS4gVGhlIGZ1dHVyZSBvZiBvcGVuIG1lZXRpbmcgcGxhY2VzIGZvci48L3A+PC9kaXY+PC9saT5cclxuICAgICAgICAgIDxsaT48ZGl2IGNsYXNzTmFtZT1cImNvcm5lclwiPjxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPjwvZGl2PjxoNSBjbGFzc05hbWU9XCJiXCI+QnVzaW5lc3M8YnIvPkFuYWx5dGljPC9oNT48cCBjbGFzc05hbWU9XCJzbWFsbFwiPkEgZGlnaXRhbCBhZ2VuY3kgZm9yIGJyYW5kcyB0aGF0IHdhbnQgbW9yZS4gVGhlIGZ1dHVyZSBvZiBvcGVuIG1lZXRpbmcgcGxhY2VzIGZvci48L3A+PC9kaXY+PC9saT5cclxuICAgICAgICAgIDxsaT48ZGl2IGNsYXNzTmFtZT1cImNvcm5lclwiPjxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPjwvZGl2PjxoNSBjbGFzc05hbWU9XCJiXCI+Q29uc3VsdGFudCAmIDxici8+VXNlciBFeHBlcmllbmNlPC9oNT48cCBjbGFzc05hbWU9XCJzbWFsbFwiPkEgZGlnaXRhbCBhZ2VuY3kgZm9yIGJyYW5kcyB0aGF0IHdhbnQgbW9yZS4gVGhlIGZ1dHVyZSBvZiBvcGVuIG1lZXRpbmcgcGxhY2VzIGZvci48L3A+PC9kaXY+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJiZ1dyYXBcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJiZ1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiaF9hYm91dFwiIGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJpY29uXCI+PC9kaXY+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJcIj5BYm91dDxici8+V2FybXBhcGVyPC9oMj5cclxuICAgICAgICA8aDQ+T25lIG9mIHRoZSBmaXJzdCB0aGluZ3MgeW91IHNob3VsZCBrbm93IGFib3V0IHVzIGlzIHRoYXQgd2UgZG9u4oCZdCBkbyBldmVyeXRoaW5nLiBCdXQgd2hhdCB3ZSBkbywgd2UgZG8gd2VsbC5PbmUgb2YgdGhlIGZpcnN0IHRoaW5ncyB5b3Ugc2hvdWxkIGtub3cgYWJvdXQgdXMgaXMgdGhhdCB3ZSBkb27igJl0IGRvIGV2ZXJ5dGhpbmcuIEJ1dCB3aGF0IHdlIGRvLCB3ZSBkbyB3ZWxsLjwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSB3cmFwcGVyLmdldFN0YXRpY1Byb3BzKCBhc3luYyAoeyBzdG9yZSwgcGFyYW1zIH0pID0+IHtcclxuICBzdG9yZS5kaXNwYXRjaCh7dHlwZTonVVBEQVRFX0xBTkdVQUdFJywgbGFuZ3VhZ2U6IHBhcmFtcy5sYW5nfSlcclxuICBzdG9yZS5kaXNwYXRjaCh7dHlwZTonVVBEQVRFX1BBR0UnLCBwYWdlOidob21lJ30pXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbGFuZyA9IFsnZW4nXTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBsYW5nLm1hcCgodik9Pih7XHJcbiAgICAgIHBhcmFtczogeyBsYW5nOiB2IH1cclxuICB9KSlcclxuXHJcbiAgcmV0dXJueyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9