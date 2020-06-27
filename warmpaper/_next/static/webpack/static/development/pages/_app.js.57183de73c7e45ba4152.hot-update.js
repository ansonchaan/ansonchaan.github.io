webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\NYT\\Desktop\\me\\warmpaper\\src\\components\\Nav.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import { useRouter } from 'next/router';

var Nav = function Nav(props) {
  _s();

  var language = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.language;
  });
  var page = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.page;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      activeMenu = _useState[0],
      setActiveMenu = _useState[1]; // const dispatch = useDispatch();
  // const route = useRouter();


  var pages = [['projects', 'Projects'], ['solutions', 'Solutions'], ['about', 'About'], ['contact', 'Contact']];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var menuText = document.querySelectorAll('#menu a');
    var menuBrush = document.querySelectorAll('#menu a span');

    var updateBrush = function updateBrush() {
      for (var i = 0; i < menuText.length; i++) {
        var text = menuText[i];
        var brush = menuBrush[i];
        brush.style.backgroundSize = text.offsetWidth * 1.09 + 'px';
      }
    };

    updateBrush();
    window.addEventListener('resize', updateBrush, false);
    return function () {
      window.removeEventListener('resize', updateBrush, false);
    };
  }, []);

  var onOpenMenu = function onOpenMenu(bool) {
    setActiveMenu(bool);
    var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();

    if (bool) {
      tl.to('#menuBtn #default > span > span', 1, {
        y: '-400%',
        stagger: .1,
        ease: 'power4.inOut'
      });
      tl.set('#default', {
        autoAlpha: 0
      });
      tl.set('#active', {
        autoAlpha: 1
      });
      tl.fromTo('#menuBtn #active > span > span', 1, {
        y: '-200%'
      }, {
        y: 0,
        stagger: .1,
        ease: 'power4.out'
      });
      tl.fromTo('#menuBtn #active .line span', 1, {
        scaleX: 0
      }, {
        scaleX: 1,
        stagger: .3,
        ease: 'power4.out'
      }, '-=.5');
    } else {
      tl.to('#menuBtn #active > span > span', 1, {
        y: '-200%',
        stagger: .1,
        ease: 'power4.inOut'
      });
      tl.set('#active', {
        autoAlpha: 0
      });
      tl.set('#default', {
        autoAlpha: 1
      });
      tl.fromTo('#menuBtn #default > span > span', 1, {
        y: '-400%'
      }, {
        y: 0,
        stagger: .1,
        ease: 'power4.out'
      });
    }
  };

  var onClickMenuItem = function onClickMenuItem() {
    onOpenMenu(false);
  };

  return __jsx("div", {
    id: "nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/[lang]",
    as: "/".concat(language),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("a", {
    id: "logo",
    className: "h3 b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 54
    }
  }, __jsx("span", {
    ref: props.logonameElem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 84
    }
  }, "Warmpaper Design"))), __jsx("div", {
    id: "menuBtn",
    className: activeMenu ? 'active' : '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "default",
    onClick: function onClick() {
      return !activeMenu && onOpenMenu(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 27
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 27
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 27
    }
  }))), __jsx("div", {
    id: "active",
    onClick: function onClick() {
      return activeMenu && onOpenMenu(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 52
    }
  })), __jsx("span", {
    className: "line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 52
    }
  })))), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 27
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 27
    }
  })))), __jsx("div", {
    id: "menu",
    className: "".concat(activeMenu ? 'active' : '', " big b"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, pages.map(function (v, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: i,
      href: "/[lang]/".concat(v[0]),
      as: "/".concat(language, "/").concat(v[0]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 32
      }
    }, __jsx("a", {
      className: page === v[0] ? 'active' : '',
      onClick: onClickMenuItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, __jsx("span", {
      id: "text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 100
      }
    }, v[1]), __jsx("span", {
      id: "line",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 129
      }
    })));
  })));
};

_s(Nav, "P8yQ/fYVFsNh+MWZjliJGaY50oI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJsYW5ndWFnZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwYWdlIiwidXNlU3RhdGUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsInBhZ2VzIiwidXNlRWZmZWN0IiwibWVudVRleHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZW51QnJ1c2giLCJ1cGRhdGVCcnVzaCIsImkiLCJsZW5ndGgiLCJ0ZXh0IiwiYnJ1c2giLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwib2Zmc2V0V2lkdGgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uT3Blbk1lbnUiLCJib29sIiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJ0byIsInkiLCJzdGFnZ2VyIiwiZWFzZSIsInNldCIsImF1dG9BbHBoYSIsImZyb21UbyIsInNjYWxlWCIsIm9uQ2xpY2tNZW51SXRlbSIsImxvZ29uYW1lRWxlbSIsIm1hcCIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ25CLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRixRQUFWO0FBQUEsR0FBTixDQUE1QjtBQUNBLE1BQU1HLElBQUksR0FBR0YsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUF4Qjs7QUFGbUIsa0JBSWlCQyxzREFBUSxDQUFDLEtBQUQsQ0FKekI7QUFBQSxNQUlaQyxVQUpZO0FBQUEsTUFJQUMsYUFKQSxpQkFLbkI7QUFDQTs7O0FBRUEsTUFBTUMsS0FB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QUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFFLEtBQUssQ0FBQ2dDLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUcxQixDQUFILEVBQU87QUFDYixXQUFPLE1BQUMsZ0RBQUQ7QUFBTSxTQUFHLEVBQUVBLENBQVg7QUFBYyxVQUFJLG9CQUFhMEIsQ0FBQyxDQUFDLENBQUQsQ0FBZCxDQUFsQjtBQUF1QyxRQUFFLGFBQU14QyxRQUFOLGNBQWtCd0MsQ0FBQyxDQUFDLENBQUQsQ0FBbkIsQ0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNIO0FBQUcsZUFBUyxFQUFFckMsSUFBSSxLQUFLcUMsQ0FBQyxDQUFDLENBQUQsQ0FBVixHQUFnQixRQUFoQixHQUEyQixFQUF6QztBQUE2QyxhQUFPLEVBQUVILGVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUU7QUFBTSxRQUFFLEVBQUMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCRyxDQUFDLENBQUMsQ0FBRCxDQUFsQixDQUF2RSxFQUFvRztBQUFNLFFBQUUsRUFBQyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBcEcsQ0FERyxDQUFQO0FBR0gsR0FKRCxDQUZSLENBbkJKLENBREo7QUErQkgsQ0FuRkQ7O0dBQU0xQyxHO1VBQ2VHLHVELEVBQ0pBLHVEOzs7S0FGWEgsRztBQXFGU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNTcxODNkZTczYzdlNDViYTQxNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBOYXYgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubGFuZ3VhZ2UpO1xyXG4gICAgY29uc3QgcGFnZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBhZ2UpO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVNZW51LCBzZXRBY3RpdmVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIC8vIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgcGFnZXMgPSBbWydwcm9qZWN0cycsJ1Byb2plY3RzJ10sWydzb2x1dGlvbnMnLCdTb2x1dGlvbnMnXSxbJ2Fib3V0JywnQWJvdXQnXSxbJ2NvbnRhY3QnLCdDb250YWN0J11dO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21lbnUgYScpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVCcnVzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZW51IGEgc3BhbicpO1xyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGVCcnVzaCA9ICgpID0+IHtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bWVudVRleHQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IG1lbnVUZXh0W2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnJ1c2ggPSBtZW51QnJ1c2hbaV07XHJcbiAgICAgICAgICAgICAgICBicnVzaC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IHRleHQub2Zmc2V0V2lkdGgqMS4wOSsncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVCcnVzaCgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVCcnVzaCwgZmFsc2UpO1xyXG4gICAgICAgIHJldHVybigpPT57XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVCcnVzaCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IG9uT3Blbk1lbnUgPSAoYm9vbCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZU1lbnUoYm9vbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xyXG4gICAgICAgIGlmKGJvb2wpe1xyXG4gICAgICAgICAgICB0bC50bygnI21lbnVCdG4gI2RlZmF1bHQgPiBzcGFuID4gc3BhbicsIDEsIHt5OictNDAwJScsIHN0YWdnZXI6LjEsIGVhc2U6J3Bvd2VyNC5pbk91dCd9KTtcclxuICAgICAgICAgICAgdGwuc2V0KCcjZGVmYXVsdCcsIHthdXRvQWxwaGE6MH0pO1xyXG4gICAgICAgICAgICB0bC5zZXQoJyNhY3RpdmUnLCB7YXV0b0FscGhhOjF9KTtcclxuICAgICAgICAgICAgdGwuZnJvbVRvKCcjbWVudUJ0biAjYWN0aXZlID4gc3BhbiA+IHNwYW4nLCAxLCB7eTonLTIwMCUnfSx7eTowLCBzdGFnZ2VyOi4xLCBlYXNlOidwb3dlcjQub3V0J30pO1xyXG4gICAgICAgICAgICB0bC5mcm9tVG8oJyNtZW51QnRuICNhY3RpdmUgLmxpbmUgc3BhbicsIDEsIHtzY2FsZVg6MH0sIHtzY2FsZVg6MSwgc3RhZ2dlcjouMywgZWFzZToncG93ZXI0Lm91dCd9LCctPS41Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRsLnRvKCcjbWVudUJ0biAjYWN0aXZlID4gc3BhbiA+IHNwYW4nLCAxLCB7eTonLTIwMCUnLCBzdGFnZ2VyOi4xLCBlYXNlOidwb3dlcjQuaW5PdXQnfSk7XHJcbiAgICAgICAgICAgIHRsLnNldCgnI2FjdGl2ZScsIHthdXRvQWxwaGE6MH0pO1xyXG4gICAgICAgICAgICB0bC5zZXQoJyNkZWZhdWx0Jywge2F1dG9BbHBoYToxfSk7XHJcbiAgICAgICAgICAgIHRsLmZyb21UbygnI21lbnVCdG4gI2RlZmF1bHQgPiBzcGFuID4gc3BhbicsIDEsIHt5OictNDAwJSd9LCB7eTowLCBzdGFnZ2VyOi4xLCBlYXNlOidwb3dlcjQub3V0J30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrTWVudUl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgb25PcGVuTWVudShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJuYXZcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9bbGFuZ11cIiBhcz17YC8ke2xhbmd1YWdlfWB9PjxhIGlkPVwibG9nb1wiIGNsYXNzTmFtZT1cImgzIGJcIj48c3BhbiByZWY9e3Byb3BzLmxvZ29uYW1lRWxlbX0+V2FybXBhcGVyIERlc2lnbjwvc3Bhbj48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWVudUJ0blwiIGNsYXNzTmFtZT17YWN0aXZlTWVudSA/ICdhY3RpdmUnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImRlZmF1bHRcIiBvbkNsaWNrPXsoKT0+IWFjdGl2ZU1lbnUgJiYgb25PcGVuTWVudSh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhY3RpdmVcIiBvbkNsaWNrPXsoKT0+YWN0aXZlTWVudSAmJiBvbk9wZW5NZW51KGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZVwiPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lXCI+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51XCIgY2xhc3NOYW1lPXtgJHthY3RpdmVNZW51ID8gJ2FjdGl2ZScgOiAnJ30gYmlnIGJgfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlcy5tYXAoKHYsaSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rIGtleT17aX0gaHJlZj17YC9bbGFuZ10vJHt2WzBdfWB9IGFzPXtgLyR7bGFuZ3VhZ2V9LyR7dlswXX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cGFnZSA9PT0gdlswXSA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9e29uQ2xpY2tNZW51SXRlbX0+PHNwYW4gaWQ9XCJ0ZXh0XCI+e3ZbMV19PC9zcGFuPjxzcGFuIGlkPVwibGluZVwiPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2OyJdLCJzb3VyY2VSb290IjoiIn0=