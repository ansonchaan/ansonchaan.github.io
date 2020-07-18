webpackHotUpdate("static\\development\\pages\\[lang].js",{

/***/ "./pages/[lang]/index.js":
/*!*******************************!*\
  !*** ./pages/[lang]/index.js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/next-server/server/router */ "./node_modules/next/dist/next-server/server/router.js");
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\NYT\\Desktop\\me\\warmpaper\\pages\\[lang]\\index.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Flickity = true ? __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js") : undefined;

var Home = function Home(props) {
  _s();

  var language = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.language;
  }); // const dispatch = useDispatch();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      basePath = _useRouter.basePath;

  var gallery = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
      gsap__WEBPACK_IMPORTED_MODULE_6__["default"].set(elem.querySelector('#imgWrap'), {
        rotate: Math.random() * 20 - 10
      });
    }

    return function () {
      flkty.destroy();
      flkty = null;
    };
  }, []);
  var data = props.data;
  return __jsx("div", {
    id: "home",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "banner",
    className: "jsx-3633757701" + " " + "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3633757701" + " " + "bigTitle b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "A Digital Agency."), __jsx("div", {
    id: "slogan",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "wrap",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("div", {
    id: "time",
    className: "jsx-3633757701" + " " + "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "13:06")), __jsx("h2", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "We make digital Experiences because we are ", __jsx("u", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 58
    }
  }, "designer"), "."), __jsx("h5", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Scroll to explore")), __jsx("div", {
    id: "bg",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }))), __jsx("div", {
    id: "h_projects",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "wrap",
    className: "jsx-3633757701" + " " + "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "left",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-3633757701" + " " + "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "A digital agency for brands that want more."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/[lang]/projects",
    as: "/".concat(language, "/projects"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-3633757701" + " " + "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 72
    }
  }, __jsx("u", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 90
    }
  }, "View all projects >")))), __jsx("div", {
    id: "right",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("ul", {
    ref: gallery,
    id: "gallery",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "imgWrap",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/[lang]/projects/[post]",
    as: "/".concat(language, "/projects/a"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, __jsx("a", {
    id: "img",
    style: {
      backgroundImage: "url('".concat(basePath, "/images/project1.png')")
    },
    className: "jsx-3633757701" + " " + "corner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  })))), __jsx("li", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "imgWrap",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/[lang]/projects/[post]",
    as: "/".concat(language, "/projects/a"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx("a", {
    id: "img",
    style: {
      backgroundImage: "url('".concat(basePath, "/images/project1.png')")
    },
    className: "jsx-3633757701" + " " + "corner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  })))), __jsx("li", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "imgWrap",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/[lang]/projects/[post]",
    as: "/".concat(language, "/projects/a"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, __jsx("a", {
    id: "img",
    style: {
      backgroundImage: "url('".concat(basePath, "/images/project1.png')")
    },
    className: "jsx-3633757701" + " " + "corner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  })))))))), __jsx("div", {
    id: "h_solutions",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("h3", {
    id: "title",
    className: "jsx-3633757701" + " " + "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, "Solutions"), __jsx("ul", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3633757701" + " " + "corner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-3633757701" + " " + "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 39
    }
  }), __jsx("h5", {
    className: "jsx-3633757701" + " " + "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 67
    }
  }, "Web", __jsx("br", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 88
    }
  }), "Design"), __jsx("p", {
    className: "jsx-3633757701" + " " + "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 104
    }
  }, "A digital agency for brands that want more. The future of open meeting places for."))), __jsx("li", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3633757701" + " " + "corner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-3633757701" + " " + "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 39
    }
  }), __jsx("h5", {
    className: "jsx-3633757701" + " " + "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 67
    }
  }, "Management & ", __jsx("br", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 98
    }
  }), "Communication"), __jsx("p", {
    className: "jsx-3633757701" + " " + "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 121
    }
  }, "A digital agency for brands that want more. The future of open meeting places for."))), __jsx("li", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3633757701" + " " + "corner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-3633757701" + " " + "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 39
    }
  }), __jsx("h5", {
    className: "jsx-3633757701" + " " + "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 67
    }
  }, "Business", __jsx("br", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 93
    }
  }), "Analytic"), __jsx("p", {
    className: "jsx-3633757701" + " " + "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 111
    }
  }, "A digital agency for brands that want more. The future of open meeting places for."))), __jsx("li", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3633757701" + " " + "corner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-3633757701" + " " + "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 39
    }
  }), __jsx("h5", {
    className: "jsx-3633757701" + " " + "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 67
    }
  }, "Consultant & ", __jsx("br", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 98
    }
  }), "User Experience"), __jsx("p", {
    className: "jsx-3633757701" + " " + "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 123
    }
  }, "A digital agency for brands that want more. The future of open meeting places for.")))), __jsx("div", {
    id: "bgWrap",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "bg",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  })))), __jsx("div", {
    id: "h_about",
    className: "jsx-3633757701" + " " + "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "icon",
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), __jsx("h2", {
    className: "jsx-3633757701" + " " + "b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, "About", __jsx("br", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 32
    }
  }), "Warmpaper"), __jsx("h4", {
    className: "jsx-3633757701",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, "One of the first things you should know about us is that we don\u2019t do everything. But what we do, we do well.One of the first things you should know about us is that we don\u2019t do everything. But what we do, we do well.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3633757701",
    __self: _this
  }, ".bigTitle.jsx-3633757701{font-size:4.375rem;line-height:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTllUXFxEZXNrdG9wXFxtZVxcd2FybXBhcGVyXFxwYWdlc1xcW2xhbmddXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSWtCLEFBRXNCLG1CQUNGLGlCQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTllUXFxEZXNrdG9wXFxtZVxcd2FybXBhcGVyXFxwYWdlc1xcW2xhbmddXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi8uLi9zcmMvc3RvcmUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyByb3V0ZSB9IGZyb20gJ25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyJztcclxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XHJcblxyXG5jb25zdCBGbGlja2l0eSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyByZXF1aXJlKCdmbGlja2l0eScpIDogbnVsbFxyXG5cclxuY29uc3QgSG9tZSA9IHByb3BzID0+IHtcclxuICBjb25zdCBsYW5ndWFnZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmxhbmd1YWdlKTtcclxuICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qge2Jhc2VQYXRofSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBnYWxsZXJ5ID0gdXNlUmVmKG51bGwpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgbGV0IGZsa3R5ID0gbmV3IEZsaWNraXR5KCBnYWxsZXJ5LmN1cnJlbnQsIHtjZWxsQWxpZ246J2xlZnQnLCBwYWdlRG90czogZmFsc2V9KTtcclxuICAgIGZsa3R5LnJlcG9zaXRpb24oKTtcclxuXHJcbiAgICBjb25zdCBsdGggPSBmbGt0eS5zbGlkZXMubGVuZ3RoO1xyXG4gICAgZmxrdHkub24oICdzY3JvbGwnLCBmdW5jdGlvbiggcHJvZ3Jlc3MgKSB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IE1hdGgubWF4KDAsIE1hdGguY2VpbChwcm9ncmVzcyAvIChsdGgvMi0xKSkgLTEpO1xyXG4gICAgICBmb3IobGV0IGk9MDsgaTxsdGg7IGkrKyl7XHJcbiAgICAgICAgaWYoaWR4ID09PSBpKXtcclxuICAgICAgICAgIGNvbnN0IGVsZW0gPSBmbGt0eS5zbGlkZXNbaV0uY2VsbHNbMF0uZWxlbWVudDtcclxuICAgICAgICAgIGNvbnN0IHggPSAoaWR4LShwcm9ncmVzcyAvIChsdGgvMi0xKSkpICogKGx0aCoxMDApO1xyXG4gICAgICAgICAgZWxlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt4fSUsMCwwKWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTxsdGg7IGkrKyl7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSBmbGt0eS5zbGlkZXNbaV0uY2VsbHNbMF0uZWxlbWVudDtcclxuICAgICAgZWxlbS5zdHlsZS56SW5kZXggPSBsdGgtaTtcclxuICAgICAgZ3NhcC5zZXQoZWxlbS5xdWVyeVNlbGVjdG9yKCcjaW1nV3JhcCcpLHtyb3RhdGU6IE1hdGgucmFuZG9tKCkgKiAyMCAtIDEwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGZsa3R5LmRlc3Ryb3koKTtcclxuICAgICAgZmxrdHkgPSBudWxsO1xyXG4gICAgfVxyXG4gIH0sW10pO1xyXG5cclxuICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJob21lXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJiYW5uZXJcIiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZ1RpdGxlIGJcIj5BIERpZ2l0YWwgQWdlbmN5LjwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJzbG9nYW5cIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aW1lXCIgY2xhc3NOYW1lPVwiYlwiPjEzOjA2PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMj5XZSBtYWtlIGRpZ2l0YWwgRXhwZXJpZW5jZXMgYmVjYXVzZSB3ZSBhcmUgPHU+ZGVzaWduZXI8L3U+LjwvaDI+XHJcbiAgICAgICAgICA8aDU+U2Nyb2xsIHRvIGV4cGxvcmU8L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJiZ1wiPlxyXG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImhfcHJvamVjdHNcIj5cclxuICAgICAgICA8ZGl2IGlkPVwid3JhcFwiIGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImxlZnRcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJcIj5BIGRpZ2l0YWwgYWdlbmN5IGZvciBicmFuZHMgdGhhdCB3YW50IG1vcmUuPC9oMj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9bbGFuZ10vcHJvamVjdHNcIiBhcz17YC8ke2xhbmd1YWdlfS9wcm9qZWN0c2B9PjxhIGNsYXNzTmFtZT1cImg1XCI+PHU+VmlldyBhbGwgcHJvamVjdHMgPjwvdT48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgPHVsIHJlZj17Z2FsbGVyeX0gaWQ9XCJnYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImltZ1dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9bbGFuZ10vcHJvamVjdHMvW3Bvc3RdXCIgYXM9e2AvJHtsYW5ndWFnZX0vcHJvamVjdHMvYWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGlkPVwiaW1nXCIgY2xhc3NOYW1lPVwiY29ybmVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgnJHtiYXNlUGF0aH0vaW1hZ2VzL3Byb2plY3QxLnBuZycpYH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwidGFnNyBoMyBiXCI+V2Vic2l0ZXM8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9bbGFuZ10vcHJvamVjdHMvW3Bvc3RdXCIgYXM9e2AvJHtsYW5ndWFnZX0vcHJvamVjdHMvYWB9PjxhIGlkPVwibmFtZVwiIGNsYXNzTmFtZT1cImg0XCI+Q2l0dGFwYXJ0bmVyPGJyLz4gUG9ydGZvbGlvIFdlYnNpdGU8L2E+PC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWdXcmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvW2xhbmddL3Byb2plY3RzL1twb3N0XVwiIGFzPXtgLyR7bGFuZ3VhZ2V9L3Byb2plY3RzL2FgfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBpZD1cImltZ1wiIGNsYXNzTmFtZT1cImNvcm5lclwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJyR7YmFzZVBhdGh9L2ltYWdlcy9wcm9qZWN0MS5wbmcnKWB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cInRhZzcgaDMgYlwiPldlYnNpdGVzPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvW2xhbmddL3Byb2plY3RzL1twb3N0XVwiIGFzPXtgLyR7bGFuZ3VhZ2V9L3Byb2plY3RzL2FgfT48YSBpZD1cIm5hbWVcIiBjbGFzc05hbWU9XCJoNFwiPkNpdHRhcGFydG5lcjxici8+IFBvcnRmb2xpbyBXZWJzaXRlPC9hPjwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW1nV3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1tsYW5nXS9wcm9qZWN0cy9bcG9zdF1cIiBhcz17YC8ke2xhbmd1YWdlfS9wcm9qZWN0cy9hYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJpbWdcIiBjbGFzc05hbWU9XCJjb3JuZXJcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCcke2Jhc2VQYXRofS9pbWFnZXMvcHJvamVjdDEucG5nJylgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJ0YWc3IGgzIGJcIj5XZWJzaXRlczwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL1tsYW5nXS9wcm9qZWN0cy9bcG9zdF1cIiBhcz17YC8ke2xhbmd1YWdlfS9wcm9qZWN0cy9hYH0+PGEgaWQ9XCJuYW1lXCIgY2xhc3NOYW1lPVwiaDRcIj5DaXR0YXBhcnRuZXI8YnIvPiBQb3J0Zm9saW8gV2Vic2l0ZTwvYT48L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImhfc29sdXRpb25zXCI+XHJcbiAgICAgICAgPGgzIGlkPVwidGl0bGVcIiBjbGFzc05hbWU9XCJiXCI+U29sdXRpb25zPC9oMz5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGRpdiBjbGFzc05hbWU9XCJjb3JuZXJcIj48ZGl2IGNsYXNzTmFtZT1cImljb25cIj48L2Rpdj48aDUgY2xhc3NOYW1lPVwiYlwiPldlYjxici8+RGVzaWduPC9oNT48cCBjbGFzc05hbWU9XCJzbWFsbFwiPkEgZGlnaXRhbCBhZ2VuY3kgZm9yIGJyYW5kcyB0aGF0IHdhbnQgbW9yZS4gVGhlIGZ1dHVyZSBvZiBvcGVuIG1lZXRpbmcgcGxhY2VzIGZvci48L3A+PC9kaXY+PC9saT5cclxuICAgICAgICAgIDxsaT48ZGl2IGNsYXNzTmFtZT1cImNvcm5lclwiPjxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPjwvZGl2PjxoNSBjbGFzc05hbWU9XCJiXCI+TWFuYWdlbWVudCAmIDxici8+Q29tbXVuaWNhdGlvbjwvaDU+PHAgY2xhc3NOYW1lPVwic21hbGxcIj5BIGRpZ2l0YWwgYWdlbmN5IGZvciBicmFuZHMgdGhhdCB3YW50IG1vcmUuIFRoZSBmdXR1cmUgb2Ygb3BlbiBtZWV0aW5nIHBsYWNlcyBmb3IuPC9wPjwvZGl2PjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGRpdiBjbGFzc05hbWU9XCJjb3JuZXJcIj48ZGl2IGNsYXNzTmFtZT1cImljb25cIj48L2Rpdj48aDUgY2xhc3NOYW1lPVwiYlwiPkJ1c2luZXNzPGJyLz5BbmFseXRpYzwvaDU+PHAgY2xhc3NOYW1lPVwic21hbGxcIj5BIGRpZ2l0YWwgYWdlbmN5IGZvciBicmFuZHMgdGhhdCB3YW50IG1vcmUuIFRoZSBmdXR1cmUgb2Ygb3BlbiBtZWV0aW5nIHBsYWNlcyBmb3IuPC9wPjwvZGl2PjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGRpdiBjbGFzc05hbWU9XCJjb3JuZXJcIj48ZGl2IGNsYXNzTmFtZT1cImljb25cIj48L2Rpdj48aDUgY2xhc3NOYW1lPVwiYlwiPkNvbnN1bHRhbnQgJiA8YnIvPlVzZXIgRXhwZXJpZW5jZTwvaDU+PHAgY2xhc3NOYW1lPVwic21hbGxcIj5BIGRpZ2l0YWwgYWdlbmN5IGZvciBicmFuZHMgdGhhdCB3YW50IG1vcmUuIFRoZSBmdXR1cmUgb2Ygb3BlbiBtZWV0aW5nIHBsYWNlcyBmb3IuPC9wPjwvZGl2PjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2IGlkPVwiYmdXcmFwXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiYmdcIj5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImhfYWJvdXRcIiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwiaWNvblwiPjwvZGl2PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJiXCI+QWJvdXQ8YnIvPldhcm1wYXBlcjwvaDI+XHJcbiAgICAgICAgPGg0Pk9uZSBvZiB0aGUgZmlyc3QgdGhpbmdzIHlvdSBzaG91bGQga25vdyBhYm91dCB1cyBpcyB0aGF0IHdlIGRvbuKAmXQgZG8gZXZlcnl0aGluZy4gQnV0IHdoYXQgd2UgZG8sIHdlIGRvIHdlbGwuT25lIG9mIHRoZSBmaXJzdCB0aGluZ3MgeW91IHNob3VsZCBrbm93IGFib3V0IHVzIGlzIHRoYXQgd2UgZG9u4oCZdCBkbyBldmVyeXRoaW5nLiBCdXQgd2hhdCB3ZSBkbywgd2UgZG8gd2VsbC48L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYmlnVGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQuMzc1cmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gd3JhcHBlci5nZXRTdGF0aWNQcm9wcyggYXN5bmMgKHsgc3RvcmUsIHBhcmFtcyB9KSA9PiB7XHJcbiAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6J1VQREFURV9MQU5HVUFHRScsIGxhbmd1YWdlOiBwYXJhbXMubGFuZ30pXHJcbiAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6J1VQREFURV9QQUdFJywgcGFnZTonaG9tZSd9KVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGxhbmcgPSBbJ2VuJ107XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gbGFuZy5tYXAoKHYpPT4oe1xyXG4gICAgICBwYXJhbXM6IHsgbGFuZzogdiB9XHJcbiAgfSkpXHJcblxyXG4gIHJldHVybnsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\NYT\\\\Desktop\\\\me\\\\warmpaper\\\\pages\\\\[lang]\\\\index.js */"));
};

_s(Home, "9ebKPSlzdn/yuDSDv1UvuaKrA7s=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbGFuZ10vaW5kZXguanMiXSwibmFtZXMiOlsiRmxpY2tpdHkiLCJyZXF1aXJlIiwiSG9tZSIsInByb3BzIiwibGFuZ3VhZ2UiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlUm91dGVyIiwiYmFzZVBhdGgiLCJnYWxsZXJ5IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZmxrdHkiLCJjdXJyZW50IiwiY2VsbEFsaWduIiwicGFnZURvdHMiLCJyZXBvc2l0aW9uIiwibHRoIiwic2xpZGVzIiwibGVuZ3RoIiwib24iLCJwcm9ncmVzcyIsImlkeCIsIk1hdGgiLCJtYXgiLCJjZWlsIiwiaSIsImVsZW0iLCJjZWxscyIsImVsZW1lbnQiLCJ4Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJnc2FwIiwic2V0IiwicXVlcnlTZWxlY3RvciIsInJvdGF0ZSIsInJhbmRvbSIsImRlc3Ryb3kiLCJkYXRhIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLE9BQWtDQyxtQkFBTyxDQUFDLHFEQUFELENBQXpDLEdBQXdELFNBQXpFOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUNwQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0YsUUFBVjtBQUFBLEdBQU4sQ0FBNUIsQ0FEb0IsQ0FFcEI7O0FBRm9CLG1CQUdERyw2REFBUyxFQUhSO0FBQUEsTUFHYkMsUUFIYSxjQUdiQSxRQUhhOztBQUtwQixNQUFNQyxPQUFPLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF0QjtBQUVBQyx5REFBUyxDQUFDLFlBQUk7QUFDWixRQUFJQyxLQUFLLEdBQUcsSUFBSVosUUFB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RyxDQUFKLENBSkYsQ0FGRixFQVFFO0FBQUssTUFBRSxFQUFDLFFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxNQUFFLEVBQUMsSUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixDQVJGLENBMURGLEVBMEVFO0FBQUssTUFBRSxFQUFDLFNBQVI7QUFBQSx3Q0FBNEIsUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBLHdDQUFjLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdkIsY0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwT0FIRixDQTFFRjtBQUFBO0FBQUE7QUFBQSwwZ1RBREY7QUF5RkQsQ0E5SEQ7O0dBQU1OLEk7VUFDYUcsdUQsRUFFRUUscUQ7OztLQUhmTCxJOztBQStJU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFtsYW5nXS5qcy5mZGE2NzVlYzJiYzIyZjc4YTkzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uLy4uL3NyYy9zdG9yZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSAnbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXInO1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcclxuXHJcbmNvbnN0IEZsaWNraXR5ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHJlcXVpcmUoJ2ZsaWNraXR5JykgOiBudWxsXHJcblxyXG5jb25zdCBIb21lID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGxhbmd1YWdlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubGFuZ3VhZ2UpO1xyXG4gIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7YmFzZVBhdGh9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGdhbGxlcnkgPSB1c2VSZWYobnVsbCk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBsZXQgZmxrdHkgPSBuZXcgRmxpY2tpdHkoIGdhbGxlcnkuY3VycmVudCwge2NlbGxBbGlnbjonbGVmdCcsIHBhZ2VEb3RzOiBmYWxzZX0pO1xyXG4gICAgZmxrdHkucmVwb3NpdGlvbigpO1xyXG5cclxuICAgIGNvbnN0IGx0aCA9IGZsa3R5LnNsaWRlcy5sZW5ndGg7XHJcbiAgICBmbGt0eS5vbiggJ3Njcm9sbCcsIGZ1bmN0aW9uKCBwcm9ncmVzcyApIHtcclxuICAgICAgY29uc3QgaWR4ID0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKHByb2dyZXNzIC8gKGx0aC8yLTEpKSAtMSk7XHJcbiAgICAgIGZvcihsZXQgaT0wOyBpPGx0aDsgaSsrKXtcclxuICAgICAgICBpZihpZHggPT09IGkpe1xyXG4gICAgICAgICAgY29uc3QgZWxlbSA9IGZsa3R5LnNsaWRlc1tpXS5jZWxsc1swXS5lbGVtZW50O1xyXG4gICAgICAgICAgY29uc3QgeCA9IChpZHgtKHByb2dyZXNzIC8gKGx0aC8yLTEpKSkgKiAobHRoKjEwMCk7XHJcbiAgICAgICAgICBlbGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3h9JSwwLDApYDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvcihsZXQgaT0wOyBpPGx0aDsgaSsrKXtcclxuICAgICAgY29uc3QgZWxlbSA9IGZsa3R5LnNsaWRlc1tpXS5jZWxsc1swXS5lbGVtZW50O1xyXG4gICAgICBlbGVtLnN0eWxlLnpJbmRleCA9IGx0aC1pO1xyXG4gICAgICBnc2FwLnNldChlbGVtLnF1ZXJ5U2VsZWN0b3IoJyNpbWdXcmFwJykse3JvdGF0ZTogTWF0aC5yYW5kb20oKSAqIDIwIC0gMTAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZmxrdHkuZGVzdHJveSgpO1xyXG4gICAgICBmbGt0eSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfSxbXSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImhvbWVcIj5cclxuICAgICAgPGRpdiBpZD1cImJhbm5lclwiIGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnVGl0bGUgYlwiPkEgRGlnaXRhbCBBZ2VuY3kuPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInNsb2dhblwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRpbWVcIiBjbGFzc05hbWU9XCJiXCI+MTM6MDY8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyPldlIG1ha2UgZGlnaXRhbCBFeHBlcmllbmNlcyBiZWNhdXNlIHdlIGFyZSA8dT5kZXNpZ25lcjwvdT4uPC9oMj5cclxuICAgICAgICAgIDxoNT5TY3JvbGwgdG8gZXhwbG9yZTwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImJnXCI+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiaF9wcm9qZWN0c1wiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ3cmFwXCIgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibGVmdFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYlwiPkEgZGlnaXRhbCBhZ2VuY3kgZm9yIGJyYW5kcyB0aGF0IHdhbnQgbW9yZS48L2gyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1tsYW5nXS9wcm9qZWN0c1wiIGFzPXtgLyR7bGFuZ3VhZ2V9L3Byb2plY3RzYH0+PGEgY2xhc3NOYW1lPVwiaDVcIj48dT5WaWV3IGFsbCBwcm9qZWN0cyA+PC91PjwvYT48L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICA8dWwgcmVmPXtnYWxsZXJ5fSBpZD1cImdhbGxlcnlcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW1nV3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1tsYW5nXS9wcm9qZWN0cy9bcG9zdF1cIiBhcz17YC8ke2xhbmd1YWdlfS9wcm9qZWN0cy9hYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJpbWdcIiBjbGFzc05hbWU9XCJjb3JuZXJcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCcke2Jhc2VQYXRofS9pbWFnZXMvcHJvamVjdDEucG5nJylgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJ0YWc3IGgzIGJcIj5XZWJzaXRlczwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL1tsYW5nXS9wcm9qZWN0cy9bcG9zdF1cIiBhcz17YC8ke2xhbmd1YWdlfS9wcm9qZWN0cy9hYH0+PGEgaWQ9XCJuYW1lXCIgY2xhc3NOYW1lPVwiaDRcIj5DaXR0YXBhcnRuZXI8YnIvPiBQb3J0Zm9saW8gV2Vic2l0ZTwvYT48L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImltZ1dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9bbGFuZ10vcHJvamVjdHMvW3Bvc3RdXCIgYXM9e2AvJHtsYW5ndWFnZX0vcHJvamVjdHMvYWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGlkPVwiaW1nXCIgY2xhc3NOYW1lPVwiY29ybmVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgnJHtiYXNlUGF0aH0vaW1hZ2VzL3Byb2plY3QxLnBuZycpYH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwidGFnNyBoMyBiXCI+V2Vic2l0ZXM8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9bbGFuZ10vcHJvamVjdHMvW3Bvc3RdXCIgYXM9e2AvJHtsYW5ndWFnZX0vcHJvamVjdHMvYWB9PjxhIGlkPVwibmFtZVwiIGNsYXNzTmFtZT1cImg0XCI+Q2l0dGFwYXJ0bmVyPGJyLz4gUG9ydGZvbGlvIFdlYnNpdGU8L2E+PC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWdXcmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvW2xhbmddL3Byb2plY3RzL1twb3N0XVwiIGFzPXtgLyR7bGFuZ3VhZ2V9L3Byb2plY3RzL2FgfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBpZD1cImltZ1wiIGNsYXNzTmFtZT1cImNvcm5lclwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJyR7YmFzZVBhdGh9L2ltYWdlcy9wcm9qZWN0MS5wbmcnKWB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cInRhZzcgaDMgYlwiPldlYnNpdGVzPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvW2xhbmddL3Byb2plY3RzL1twb3N0XVwiIGFzPXtgLyR7bGFuZ3VhZ2V9L3Byb2plY3RzL2FgfT48YSBpZD1cIm5hbWVcIiBjbGFzc05hbWU9XCJoNFwiPkNpdHRhcGFydG5lcjxici8+IFBvcnRmb2xpbyBXZWJzaXRlPC9hPjwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiaF9zb2x1dGlvbnNcIj5cclxuICAgICAgICA8aDMgaWQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImJcIj5Tb2x1dGlvbnM8L2gzPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48ZGl2IGNsYXNzTmFtZT1cImNvcm5lclwiPjxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPjwvZGl2PjxoNSBjbGFzc05hbWU9XCJiXCI+V2ViPGJyLz5EZXNpZ248L2g1PjxwIGNsYXNzTmFtZT1cInNtYWxsXCI+QSBkaWdpdGFsIGFnZW5jeSBmb3IgYnJhbmRzIHRoYXQgd2FudCBtb3JlLiBUaGUgZnV0dXJlIG9mIG9wZW4gbWVldGluZyBwbGFjZXMgZm9yLjwvcD48L2Rpdj48L2xpPlxyXG4gICAgICAgICAgPGxpPjxkaXYgY2xhc3NOYW1lPVwiY29ybmVyXCI+PGRpdiBjbGFzc05hbWU9XCJpY29uXCI+PC9kaXY+PGg1IGNsYXNzTmFtZT1cImJcIj5NYW5hZ2VtZW50ICYgPGJyLz5Db21tdW5pY2F0aW9uPC9oNT48cCBjbGFzc05hbWU9XCJzbWFsbFwiPkEgZGlnaXRhbCBhZ2VuY3kgZm9yIGJyYW5kcyB0aGF0IHdhbnQgbW9yZS4gVGhlIGZ1dHVyZSBvZiBvcGVuIG1lZXRpbmcgcGxhY2VzIGZvci48L3A+PC9kaXY+PC9saT5cclxuICAgICAgICAgIDxsaT48ZGl2IGNsYXNzTmFtZT1cImNvcm5lclwiPjxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPjwvZGl2PjxoNSBjbGFzc05hbWU9XCJiXCI+QnVzaW5lc3M8YnIvPkFuYWx5dGljPC9oNT48cCBjbGFzc05hbWU9XCJzbWFsbFwiPkEgZGlnaXRhbCBhZ2VuY3kgZm9yIGJyYW5kcyB0aGF0IHdhbnQgbW9yZS4gVGhlIGZ1dHVyZSBvZiBvcGVuIG1lZXRpbmcgcGxhY2VzIGZvci48L3A+PC9kaXY+PC9saT5cclxuICAgICAgICAgIDxsaT48ZGl2IGNsYXNzTmFtZT1cImNvcm5lclwiPjxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPjwvZGl2PjxoNSBjbGFzc05hbWU9XCJiXCI+Q29uc3VsdGFudCAmIDxici8+VXNlciBFeHBlcmllbmNlPC9oNT48cCBjbGFzc05hbWU9XCJzbWFsbFwiPkEgZGlnaXRhbCBhZ2VuY3kgZm9yIGJyYW5kcyB0aGF0IHdhbnQgbW9yZS4gVGhlIGZ1dHVyZSBvZiBvcGVuIG1lZXRpbmcgcGxhY2VzIGZvci48L3A+PC9kaXY+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJiZ1dyYXBcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJiZ1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiaF9hYm91dFwiIGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJpY29uXCI+PC9kaXY+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJcIj5BYm91dDxici8+V2FybXBhcGVyPC9oMj5cclxuICAgICAgICA8aDQ+T25lIG9mIHRoZSBmaXJzdCB0aGluZ3MgeW91IHNob3VsZCBrbm93IGFib3V0IHVzIGlzIHRoYXQgd2UgZG9u4oCZdCBkbyBldmVyeXRoaW5nLiBCdXQgd2hhdCB3ZSBkbywgd2UgZG8gd2VsbC5PbmUgb2YgdGhlIGZpcnN0IHRoaW5ncyB5b3Ugc2hvdWxkIGtub3cgYWJvdXQgdXMgaXMgdGhhdCB3ZSBkb27igJl0IGRvIGV2ZXJ5dGhpbmcuIEJ1dCB3aGF0IHdlIGRvLCB3ZSBkbyB3ZWxsLjwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5iaWdUaXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNC4zNzVyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSB3cmFwcGVyLmdldFN0YXRpY1Byb3BzKCBhc3luYyAoeyBzdG9yZSwgcGFyYW1zIH0pID0+IHtcclxuICBzdG9yZS5kaXNwYXRjaCh7dHlwZTonVVBEQVRFX0xBTkdVQUdFJywgbGFuZ3VhZ2U6IHBhcmFtcy5sYW5nfSlcclxuICBzdG9yZS5kaXNwYXRjaCh7dHlwZTonVVBEQVRFX1BBR0UnLCBwYWdlOidob21lJ30pXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbGFuZyA9IFsnZW4nXTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBsYW5nLm1hcCgodik9Pih7XHJcbiAgICAgIHBhcmFtczogeyBsYW5nOiB2IH1cclxuICB9KSlcclxuXHJcbiAgcmV0dXJueyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9