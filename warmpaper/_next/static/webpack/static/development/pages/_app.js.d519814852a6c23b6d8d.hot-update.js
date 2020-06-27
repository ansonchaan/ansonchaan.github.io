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
        lineNumber: 82,
        columnNumber: 99
      }
    }, v[1], __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 176
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJsYW5ndWFnZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwYWdlIiwidXNlU3RhdGUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsInBhZ2VzIiwidXNlRWZmZWN0IiwibWVudVRleHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZW51QnJ1c2giLCJ1cGRhdGVCcnVzaCIsImkiLCJsZW5ndGgiLCJ0ZXh0IiwiYnJ1c2giLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwib2Zmc2V0V2lkdGgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uT3Blbk1lbnUiLCJib29sIiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJ0byIsInkiLCJzdGFnZ2VyIiwiZWFzZSIsInNldCIsImF1dG9BbHBoYSIsImZyb21UbyIsInNjYWxlWCIsIm9uQ2xpY2tNZW51SXRlbSIsImxvZ29uYW1lRWxlbSIsIm1hcCIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ25CLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRixRQUFWO0FBQUEsR0FBTixDQUE1QjtBQUNBLE1BQU1HLElBQUksR0FBR0YsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUF4Qjs7QUFGbUIsa0JBSWlCQyxzREFBUSxDQUFDLEtBQUQsQ0FKekI7QUFBQSxNQUlaQyxVQUpZO0FBQUEsTUFJQUMsYUFKQSxpQkFLbkI7QUFDQTs7O0FBRUEsTUFBTUMsS0FB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QUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFFLEtBQUssQ0FBQ2dDLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUcxQixDQUFILEVBQU87QUFDYixXQUFPLE1BQUMsZ0RBQUQ7QUFBTSxTQUFHLEVBQUVBLENBQVg7QUFBYyxVQUFJLG9CQUFhMEIsQ0FBQyxDQUFDLENBQUQsQ0FBZCxDQUFsQjtBQUF1QyxRQUFFLGFBQU14QyxRQUFOLGNBQWtCd0MsQ0FBQyxDQUFDLENBQUQsQ0FBbkIsQ0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtRTtBQUFHLGVBQVMsRUFBRXJDLElBQUksS0FBS3FDLENBQUMsQ0FBQyxDQUFELENBQVYsR0FBZ0IsUUFBaEIsR0FBMkIsRUFBekM7QUFBNkMsYUFBTyxFQUFFSCxlQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdFRyxDQUFDLENBQUMsQ0FBRCxDQUF6RSxFQUE2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTdFLENBQW5FLENBQVA7QUFDSCxHQUZELENBRlIsQ0FuQkosQ0FESjtBQTZCSCxDQWpGRDs7R0FBTTFDLEc7VUFDZUcsdUQsRUFDSkEsdUQ7OztLQUZYSCxHO0FBbUZTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5kNTE5ODE0ODUyYTZjMjNiNmQ4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXHJcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IE5hdiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5sYW5ndWFnZSk7XHJcbiAgICBjb25zdCBwYWdlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGFnZSk7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgLy8gY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBwYWdlcyA9IFtbJ3Byb2plY3RzJywnUHJvamVjdHMnXSxbJ3NvbHV0aW9ucycsJ1NvbHV0aW9ucyddLFsnYWJvdXQnLCdBYm91dCddLFsnY29udGFjdCcsJ0NvbnRhY3QnXV07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVudSBhJyk7XHJcbiAgICAgICAgY29uc3QgbWVudUJydXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21lbnUgYSBzcGFuJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUJydXNoID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxtZW51VGV4dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gbWVudVRleHRbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBicnVzaCA9IG1lbnVCcnVzaFtpXTtcclxuICAgICAgICAgICAgICAgIGJydXNoLnN0eWxlLmJhY2tncm91bmRTaXplID0gdGV4dC5vZmZzZXRXaWR0aCoxLjA5KydweCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZUJydXNoKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUJydXNoLCBmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuKCk9PntcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUJydXNoLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3Qgb25PcGVuTWVudSA9IChib29sKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlTWVudShib29sKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XHJcbiAgICAgICAgaWYoYm9vbCl7XHJcbiAgICAgICAgICAgIHRsLnRvKCcjbWVudUJ0biAjZGVmYXVsdCA+IHNwYW4gPiBzcGFuJywgMSwge3k6Jy00MDAlJywgc3RhZ2dlcjouMSwgZWFzZToncG93ZXI0LmluT3V0J30pO1xyXG4gICAgICAgICAgICB0bC5zZXQoJyNkZWZhdWx0Jywge2F1dG9BbHBoYTowfSk7XHJcbiAgICAgICAgICAgIHRsLnNldCgnI2FjdGl2ZScsIHthdXRvQWxwaGE6MX0pO1xyXG4gICAgICAgICAgICB0bC5mcm9tVG8oJyNtZW51QnRuICNhY3RpdmUgPiBzcGFuID4gc3BhbicsIDEsIHt5OictMjAwJSd9LHt5OjAsIHN0YWdnZXI6LjEsIGVhc2U6J3Bvd2VyNC5vdXQnfSk7XHJcbiAgICAgICAgICAgIHRsLmZyb21UbygnI21lbnVCdG4gI2FjdGl2ZSAubGluZSBzcGFuJywgMSwge3NjYWxlWDowfSwge3NjYWxlWDoxLCBzdGFnZ2VyOi4zLCBlYXNlOidwb3dlcjQub3V0J30sJy09LjUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGwudG8oJyNtZW51QnRuICNhY3RpdmUgPiBzcGFuID4gc3BhbicsIDEsIHt5OictMjAwJScsIHN0YWdnZXI6LjEsIGVhc2U6J3Bvd2VyNC5pbk91dCd9KTtcclxuICAgICAgICAgICAgdGwuc2V0KCcjYWN0aXZlJywge2F1dG9BbHBoYTowfSk7XHJcbiAgICAgICAgICAgIHRsLnNldCgnI2RlZmF1bHQnLCB7YXV0b0FscGhhOjF9KTtcclxuICAgICAgICAgICAgdGwuZnJvbVRvKCcjbWVudUJ0biAjZGVmYXVsdCA+IHNwYW4gPiBzcGFuJywgMSwge3k6Jy00MDAlJ30sIHt5OjAsIHN0YWdnZXI6LjEsIGVhc2U6J3Bvd2VyNC5vdXQnfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tNZW51SXRlbSA9ICgpID0+IHtcclxuICAgICAgICBvbk9wZW5NZW51KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZD1cIm5hdlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1tsYW5nXVwiIGFzPXtgLyR7bGFuZ3VhZ2V9YH0+PGEgaWQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwiaDMgYlwiPjxzcGFuIHJlZj17cHJvcHMubG9nb25hbWVFbGVtfT5XYXJtcGFwZXIgRGVzaWduPC9zcGFuPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51QnRuXCIgY2xhc3NOYW1lPXthY3RpdmVNZW51ID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZGVmYXVsdFwiIG9uQ2xpY2s9eygpPT4hYWN0aXZlTWVudSAmJiBvbk9wZW5NZW51KHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFjdGl2ZVwiIG9uQ2xpY2s9eygpPT5hY3RpdmVNZW51ICYmIG9uT3Blbk1lbnUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lXCI+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmVcIj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1lbnVcIiBjbGFzc05hbWU9e2Ake2FjdGl2ZU1lbnUgPyAnYWN0aXZlJyA6ICcnfSBiaWcgYmB9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLm1hcCgodixpKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpbmsga2V5PXtpfSBocmVmPXtgL1tsYW5nXS8ke3ZbMF19YH0gYXM9e2AvJHtsYW5ndWFnZX0vJHt2WzBdfWB9PjxhIGNsYXNzTmFtZT17cGFnZSA9PT0gdlswXSA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9e29uQ2xpY2tNZW51SXRlbX0+e3ZbMV19PHNwYW4+PC9zcGFuPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjsiXSwic291cmNlUm9vdCI6IiJ9