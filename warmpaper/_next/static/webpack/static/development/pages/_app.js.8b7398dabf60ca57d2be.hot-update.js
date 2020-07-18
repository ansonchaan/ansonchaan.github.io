webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\NYT\\Desktop\\me\\warmpaper\\src\\components\\Nav.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // import { useRouter } from 'next/router';

var Nav = function Nav(props) {
  _s();

  var language = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.language;
  });
  var page = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.page;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      activeMenu = _useState[0],
      setActiveMenu = _useState[1]; // const dispatch = useDispatch();
  // const route = useRouter();


  var pages = [['projects', 'Projects'], ['solutions', 'Solutions'], ['about', 'About'], ['contact', 'Contact']];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var menuText = document.querySelectorAll('#menu #text');
    var menuBrush = document.querySelectorAll('#menu #brush');

    var updateBrush = function updateBrush() {
      for (var i = 0; i < menuText.length; i++) {
        var text = menuText[i];
        var brush = menuBrush[i];
        brush.style.backgroundSize = text.offsetWidth * 1.2 + 'px';
      }
    };

    setTimeout(function () {
      updateBrush();
    }, 1000);
    window.addEventListener('resize', updateBrush, false);
    return function () {
      window.removeEventListener('resize', updateBrush, false);
    };
  }, []);

  var onOpenMenu = function onOpenMenu(bool) {
    setActiveMenu(bool);
    var tl = gsap__WEBPACK_IMPORTED_MODULE_4__["default"].timeline();

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
    className: "jsx-2494119853" + " " + (page || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]",
    as: "/".concat(language),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("a", {
    ref: props.logonameElem,
    id: "logo",
    className: "jsx-2494119853" + " " + "h3 b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 54
    }
  }, __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 109
    }
  }, "Warmpaper Design"))), __jsx("div", {
    id: "menuBtn",
    className: "jsx-2494119853" + " " + ((activeMenu ? 'active' : '') || ""),
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
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 27
    }
  })), __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 27
    }
  })), __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2494119853",
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
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "jsx-2494119853" + " " + "line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 52
    }
  })), __jsx("span", {
    className: "jsx-2494119853" + " " + "line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 52
    }
  })))), __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 27
    }
  })), __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2494119853",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 27
    }
  })))), __jsx("div", {
    id: "menu",
    className: "jsx-2494119853" + " " + "".concat(activeMenu ? 'active' : '', " big b"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, pages.map(function (v, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-2494119853",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 32
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/[lang]/".concat(v[0]),
      as: "/".concat(language, "/").concat(v[0]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 45
      }
    }, __jsx("a", {
      onClick: onClickMenuItem,
      className: "jsx-2494119853" + " " + ((page === v[0] ? 'active' : '') || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, __jsx("span", {
      id: "text",
      className: "jsx-2494119853",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 100
      }
    }, v[1], __jsx("span", {
      id: "brush",
      className: "jsx-2494119853",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 122
      }
    })))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2494119853",
    __self: _this
  }, "#menu.jsx-2494119853{-webkit-transform:translate3d(23.75rem,-130vh,0) rotate(5deg);-ms-transform:translate3d(23.75rem,-130vh,0) rotate(5deg);transform:translate3d(23.75rem,-130vh,0) rotate(5deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTllUXFxEZXNrdG9wXFxtZVxcd2FybXBhcGVyXFxzcmNcXGNvbXBvbmVudHNcXE5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RndCLEFBRTJELDhLQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTllUXFxEZXNrdG9wXFxtZVxcd2FybXBhcGVyXFxzcmNcXGNvbXBvbmVudHNcXE5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBOYXYgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubGFuZ3VhZ2UpO1xyXG4gICAgY29uc3QgcGFnZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBhZ2UpO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVNZW51LCBzZXRBY3RpdmVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIC8vIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgcGFnZXMgPSBbWydwcm9qZWN0cycsJ1Byb2plY3RzJ10sWydzb2x1dGlvbnMnLCdTb2x1dGlvbnMnXSxbJ2Fib3V0JywnQWJvdXQnXSxbJ2NvbnRhY3QnLCdDb250YWN0J11dO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21lbnUgI3RleHQnKTtcclxuICAgICAgICBjb25zdCBtZW51QnJ1c2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVudSAjYnJ1c2gnKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlQnJ1c2ggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPG1lbnVUZXh0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBtZW51VGV4dFtpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJydXNoID0gbWVudUJydXNoW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJ1c2guc3R5bGUuYmFja2dyb3VuZFNpemUgPSB0ZXh0Lm9mZnNldFdpZHRoKjEuMisncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57dXBkYXRlQnJ1c2goKX0sMTAwMCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUJydXNoLCBmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuKCk9PntcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUJydXNoLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3Qgb25PcGVuTWVudSA9IChib29sKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlTWVudShib29sKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XHJcbiAgICAgICAgaWYoYm9vbCl7XHJcbiAgICAgICAgICAgIHRsLnRvKCcjbWVudUJ0biAjZGVmYXVsdCA+IHNwYW4gPiBzcGFuJywgMSwge3k6Jy00MDAlJywgc3RhZ2dlcjouMSwgZWFzZToncG93ZXI0LmluT3V0J30pO1xyXG4gICAgICAgICAgICB0bC5zZXQoJyNkZWZhdWx0Jywge2F1dG9BbHBoYTowfSk7XHJcbiAgICAgICAgICAgIHRsLnNldCgnI2FjdGl2ZScsIHthdXRvQWxwaGE6MX0pO1xyXG4gICAgICAgICAgICB0bC5mcm9tVG8oJyNtZW51QnRuICNhY3RpdmUgPiBzcGFuID4gc3BhbicsIDEsIHt5OictMjAwJSd9LHt5OjAsIHN0YWdnZXI6LjEsIGVhc2U6J3Bvd2VyNC5vdXQnfSk7XHJcbiAgICAgICAgICAgIHRsLmZyb21UbygnI21lbnVCdG4gI2FjdGl2ZSAubGluZSBzcGFuJywgMSwge3NjYWxlWDowfSwge3NjYWxlWDoxLCBzdGFnZ2VyOi4zLCBlYXNlOidwb3dlcjQub3V0J30sJy09LjUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGwudG8oJyNtZW51QnRuICNhY3RpdmUgPiBzcGFuID4gc3BhbicsIDEsIHt5OictMjAwJScsIHN0YWdnZXI6LjEsIGVhc2U6J3Bvd2VyNC5pbk91dCd9KTtcclxuICAgICAgICAgICAgdGwuc2V0KCcjYWN0aXZlJywge2F1dG9BbHBoYTowfSk7XHJcbiAgICAgICAgICAgIHRsLnNldCgnI2RlZmF1bHQnLCB7YXV0b0FscGhhOjF9KTtcclxuICAgICAgICAgICAgdGwuZnJvbVRvKCcjbWVudUJ0biAjZGVmYXVsdCA+IHNwYW4gPiBzcGFuJywgMSwge3k6Jy00MDAlJ30sIHt5OjAsIHN0YWdnZXI6LjEsIGVhc2U6J3Bvd2VyNC5vdXQnfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tNZW51SXRlbSA9ICgpID0+IHtcclxuICAgICAgICBvbk9wZW5NZW51KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZD1cIm5hdlwiIGNsYXNzTmFtZT17cGFnZX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvW2xhbmddXCIgYXM9e2AvJHtsYW5ndWFnZX1gfT48YSByZWY9e3Byb3BzLmxvZ29uYW1lRWxlbX0gaWQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwiaDMgYlwiPjxzcGFuPldhcm1wYXBlciBEZXNpZ248L3NwYW4+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1lbnVCdG5cIiBjbGFzc05hbWU9e2FjdGl2ZU1lbnUgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkZWZhdWx0XCIgb25DbGljaz17KCk9PiFhY3RpdmVNZW51ICYmIG9uT3Blbk1lbnUodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWN0aXZlXCIgb25DbGljaz17KCk9PmFjdGl2ZU1lbnUgJiYgb25PcGVuTWVudShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmVcIj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZVwiPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWVudVwiIGNsYXNzTmFtZT17YCR7YWN0aXZlTWVudSA/ICdhY3RpdmUnIDogJyd9IGJpZyBiYH0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMubWFwKCh2LGkpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aX0+PExpbmsgaHJlZj17YC9bbGFuZ10vJHt2WzBdfWB9IGFzPXtgLyR7bGFuZ3VhZ2V9LyR7dlswXX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cGFnZSA9PT0gdlswXSA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9e29uQ2xpY2tNZW51SXRlbX0+PHNwYW4gaWQ9XCJ0ZXh0XCI+e3ZbMV19PHNwYW4gaWQ9XCJicnVzaFwiPjwvc3Bhbj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAjbWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMy43NXJlbSwgLTEzMHZoLCAwKSByb3RhdGUoNWRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\NYT\\\\Desktop\\\\me\\\\warmpaper\\\\src\\\\components\\\\Nav.js */"));
};

_s(Nav, "P8yQ/fYVFsNh+MWZjliJGaY50oI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJsYW5ndWFnZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwYWdlIiwidXNlU3RhdGUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsInBhZ2VzIiwidXNlRWZmZWN0IiwibWVudVRleHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZW51QnJ1c2giLCJ1cGRhdGVCcnVzaCIsImkiLCJsZW5ndGgiLCJ0ZXh0IiwiYnJ1c2giLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwib2Zmc2V0V2lkdGgiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbk9wZW5NZW51IiwiYm9vbCIsInRsIiwiZ3NhcCIsInRpbWVsaW5lIiwidG8iLCJ5Iiwic3RhZ2dlciIsImVhc2UiLCJzZXQiLCJhdXRvQWxwaGEiLCJmcm9tVG8iLCJzY2FsZVgiLCJvbkNsaWNrTWVudUl0ZW0iLCJsb2dvbmFtZUVsZW0iLCJtYXAiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNuQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0YsUUFBVjtBQUFBLEdBQU4sQ0FBNUI7QUFDQSxNQUFNRyxJQUFJLEdBQUdGLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0FBeEI7O0FBRm1CLGtCQUlpQkMsc0RBQVEsQ0FBQyxLQUFELENBSnpCO0FBQUEsTUFJWkMsVUFKWTtBQUFBLE1BSUFDLGFBSkEsaUJBS25CO0FBQ0E7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YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjhiNzM5OGRhYmY2MGNhNTdkMmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCdcclxuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTmF2ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmxhbmd1YWdlKTtcclxuICAgIGNvbnN0IHBhZ2UgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wYWdlKTtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICAvLyBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHBhZ2VzID0gW1sncHJvamVjdHMnLCdQcm9qZWN0cyddLFsnc29sdXRpb25zJywnU29sdXRpb25zJ10sWydhYm91dCcsJ0Fib3V0J10sWydjb250YWN0JywnQ29udGFjdCddXTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZW51ICN0ZXh0Jyk7XHJcbiAgICAgICAgY29uc3QgbWVudUJydXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21lbnUgI2JydXNoJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUJydXNoID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxtZW51VGV4dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gbWVudVRleHRbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBicnVzaCA9IG1lbnVCcnVzaFtpXTtcclxuICAgICAgICAgICAgICAgIGJydXNoLnN0eWxlLmJhY2tncm91bmRTaXplID0gdGV4dC5vZmZzZXRXaWR0aCoxLjIrJ3B4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e3VwZGF0ZUJydXNoKCl9LDEwMDApO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVCcnVzaCwgZmFsc2UpO1xyXG4gICAgICAgIHJldHVybigpPT57XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVCcnVzaCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IG9uT3Blbk1lbnUgPSAoYm9vbCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZU1lbnUoYm9vbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xyXG4gICAgICAgIGlmKGJvb2wpe1xyXG4gICAgICAgICAgICB0bC50bygnI21lbnVCdG4gI2RlZmF1bHQgPiBzcGFuID4gc3BhbicsIDEsIHt5OictNDAwJScsIHN0YWdnZXI6LjEsIGVhc2U6J3Bvd2VyNC5pbk91dCd9KTtcclxuICAgICAgICAgICAgdGwuc2V0KCcjZGVmYXVsdCcsIHthdXRvQWxwaGE6MH0pO1xyXG4gICAgICAgICAgICB0bC5zZXQoJyNhY3RpdmUnLCB7YXV0b0FscGhhOjF9KTtcclxuICAgICAgICAgICAgdGwuZnJvbVRvKCcjbWVudUJ0biAjYWN0aXZlID4gc3BhbiA+IHNwYW4nLCAxLCB7eTonLTIwMCUnfSx7eTowLCBzdGFnZ2VyOi4xLCBlYXNlOidwb3dlcjQub3V0J30pO1xyXG4gICAgICAgICAgICB0bC5mcm9tVG8oJyNtZW51QnRuICNhY3RpdmUgLmxpbmUgc3BhbicsIDEsIHtzY2FsZVg6MH0sIHtzY2FsZVg6MSwgc3RhZ2dlcjouMywgZWFzZToncG93ZXI0Lm91dCd9LCctPS41Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRsLnRvKCcjbWVudUJ0biAjYWN0aXZlID4gc3BhbiA+IHNwYW4nLCAxLCB7eTonLTIwMCUnLCBzdGFnZ2VyOi4xLCBlYXNlOidwb3dlcjQuaW5PdXQnfSk7XHJcbiAgICAgICAgICAgIHRsLnNldCgnI2FjdGl2ZScsIHthdXRvQWxwaGE6MH0pO1xyXG4gICAgICAgICAgICB0bC5zZXQoJyNkZWZhdWx0Jywge2F1dG9BbHBoYToxfSk7XHJcbiAgICAgICAgICAgIHRsLmZyb21UbygnI21lbnVCdG4gI2RlZmF1bHQgPiBzcGFuID4gc3BhbicsIDEsIHt5OictNDAwJSd9LCB7eTowLCBzdGFnZ2VyOi4xLCBlYXNlOidwb3dlcjQub3V0J30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrTWVudUl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgb25PcGVuTWVudShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJuYXZcIiBjbGFzc05hbWU9e3BhZ2V9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1tsYW5nXVwiIGFzPXtgLyR7bGFuZ3VhZ2V9YH0+PGEgcmVmPXtwcm9wcy5sb2dvbmFtZUVsZW19IGlkPVwibG9nb1wiIGNsYXNzTmFtZT1cImgzIGJcIj48c3Bhbj5XYXJtcGFwZXIgRGVzaWduPC9zcGFuPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51QnRuXCIgY2xhc3NOYW1lPXthY3RpdmVNZW51ID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZGVmYXVsdFwiIG9uQ2xpY2s9eygpPT4hYWN0aXZlTWVudSAmJiBvbk9wZW5NZW51KHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFjdGl2ZVwiIG9uQ2xpY2s9eygpPT5hY3RpdmVNZW51ICYmIG9uT3Blbk1lbnUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lXCI+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmVcIj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1lbnVcIiBjbGFzc05hbWU9e2Ake2FjdGl2ZU1lbnUgPyAnYWN0aXZlJyA6ICcnfSBiaWcgYmB9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLm1hcCgodixpKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9PjxMaW5rIGhyZWY9e2AvW2xhbmddLyR7dlswXX1gfSBhcz17YC8ke2xhbmd1YWdlfS8ke3ZbMF19YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3BhZ2UgPT09IHZbMF0gPyAnYWN0aXZlJyA6ICcnfSBvbkNsaWNrPXtvbkNsaWNrTWVudUl0ZW19PjxzcGFuIGlkPVwidGV4dFwiPnt2WzFdfTxzcGFuIGlkPVwiYnJ1c2hcIj48L3NwYW4+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgI21lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjMuNzVyZW0sIC0xMzB2aCwgMCkgcm90YXRlKDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjsiXSwic291cmNlUm9vdCI6IiJ9