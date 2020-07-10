webpackHotUpdate("static\\development\\pages\\_app.js",{

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
    console.log(123);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbm9pc2UuanMiXSwibmFtZXMiOlsiTm9pc2UiLCJpbml0IiwiZWxlbSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJub2lzZURhdGEiLCJmcmFtZSIsImxvb3BUaW1lb3V0IiwicmVzaXplVGhyb3R0bGUiLCJzZXR1cCIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInQiLCJjcmVhdGVOb2lzZSIsImxvb3AiLCJjcmVhdGVJbWFnZURhdGEiLCJlIiwiVWludDMyQXJyYXkiLCJkYXRhIiwiYnVmZmVyIiwiYSIsImxlbmd0aCIsIm4iLCJNYXRoIiwicmFuZG9tIiwicHVzaCIsInBhaW50Tm9pc2UiLCJwdXRJbWFnZURhdGEiLCJzZXRUaW1lb3V0IiwiYmluZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlc3Ryb3kiLCJyZXNldCIsImRvY3VtZW50IiwicmVtb3ZlQ2hpbGQiLCIkZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBVTtBQUMzQixPQUFLQyxJQUFMLEdBQVksVUFBU0MsSUFBVCxFQUFlO0FBQ3ZCLFNBQUtDLE1BQUwsR0FBY0QsSUFBZCxFQUNBLEtBQUtFLEdBQUwsR0FBVyxLQUFLRCxNQUFMLENBQVlFLFVBQVosQ0FBdUIsSUFBdkIsQ0FEWCxFQUVBLEtBQUtDLFNBQUwsR0FBaUIsRUFGakIsRUFHQSxLQUFLQyxLQUFMLEdBQWEsQ0FIYixFQUlBLEtBQUtDLFdBQUwsR0FBbUIsSUFKbkIsRUFLQSxLQUFLQyxjQUFMLEdBQXNCLElBTHRCLEVBTUEsS0FBS0MsS0FBTCxFQU5BO0FBT0gsR0FSRCxFQVNBLEtBQUtBLEtBQUwsR0FBYSxZQUFXO0FBQUNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDckIsU0FBS04sU0FBTCxHQUFpQixFQUFqQixFQUNBLEtBQUtILE1BQUwsQ0FBWVUsS0FBWixHQUFvQkMsTUFBTSxDQUFDQyxVQUQzQixFQUVBLEtBQUtaLE1BQUwsQ0FBWWEsTUFBWixHQUFxQkYsTUFBTSxDQUFDRyxXQUY1Qjs7QUFHQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsSUFBSSxDQUE3QjtBQUNJLFdBQUtDLFdBQUw7QUFESjs7QUFFQSxTQUFLQyxJQUFMO0FBQ0gsR0FoQkQsRUFpQkEsS0FBS0QsV0FBTCxHQUFtQixZQUFXO0FBQzFCLFNBQUssSUFBSUQsQ0FBQyxHQUFHLEtBQUtkLEdBQUwsQ0FBU2lCLGVBQVQsQ0FBeUJQLE1BQU0sQ0FBQ0MsVUFBaEMsRUFBNENELE1BQU0sQ0FBQ0csV0FBbkQsQ0FBUixFQUF5RUssQ0FBQyxHQUFHLElBQUlDLFdBQUosQ0FBZ0JMLENBQUMsQ0FBQ00sSUFBRixDQUFPQyxNQUF2QixDQUE3RSxFQUE2R0MsQ0FBQyxHQUFHSixDQUFDLENBQUNLLE1BQW5ILEVBQTJIQyxDQUFDLEdBQUcsQ0FBcEksRUFBdUlBLENBQUMsR0FBR0YsQ0FBM0ksRUFBOElFLENBQUMsSUFBSSxDQUFuSjtBQUNJQyxVQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBaEIsS0FBdUJSLENBQUMsQ0FBQ00sQ0FBRCxDQUFELEdBQU8sVUFBOUI7QUFESjs7QUFFQSxTQUFLdEIsU0FBTCxDQUFleUIsSUFBZixDQUFvQmIsQ0FBcEI7QUFDSCxHQXJCRCxFQXNCQSxLQUFLYyxVQUFMLEdBQWtCLFlBQVc7QUFDekIsVUFBTSxLQUFLekIsS0FBWCxHQUFtQixLQUFLQSxLQUFMLEdBQWEsQ0FBaEMsR0FBb0MsS0FBS0EsS0FBTCxHQUFhLEtBQUtBLEtBQUwsR0FBYSxDQUE5RCxFQUNBLEtBQUtILEdBQUwsQ0FBUzZCLFlBQVQsQ0FBc0IsS0FBSzNCLFNBQUwsQ0FBZSxLQUFLQyxLQUFwQixDQUF0QixFQUFrRCxDQUFsRCxFQUFxRCxDQUFyRCxDQURBO0FBRUgsR0F6QkQsRUEwQkEsS0FBS2EsSUFBTCxHQUFZLFlBQVc7QUFDbkIsUUFBSUYsQ0FBQyxHQUFHLElBQVI7QUFDQSxTQUFLYyxVQUFMLENBQWdCLEtBQUt6QixLQUFyQixHQUNBLEtBQUtDLFdBQUwsR0FBbUJNLE1BQU0sQ0FBQ29CLFVBQVAsQ0FBa0IsWUFBVztBQUM1Q2hCLE9BQUMsQ0FBQ0UsSUFBRixHQUFTRixDQUFDLENBQUNFLElBQUYsQ0FBT2UsSUFBUCxDQUFZakIsQ0FBWixDQUFULEVBQ0FKLE1BQU0sQ0FBQ3NCLHFCQUFQLENBQTZCbEIsQ0FBQyxDQUFDRSxJQUEvQixDQURBO0FBRUgsS0FIa0IsRUFHaEIsR0FIZ0IsQ0FEbkI7QUFLSCxHQWpDRCxFQWtDQSxLQUFLaUIsT0FBTCxHQUFlLFlBQVc7QUFDdEIsU0FBS0MsS0FBTCxJQUNBLEtBQUs5QixXQUFMLEdBQW1CLENBRG5CLEVBRUErQixRQUFRLENBQUNDLFdBQVQsQ0FBcUIsS0FBS0MsR0FBMUIsQ0FGQTtBQUdILEdBdENEO0FBdUNILENBeENNO0tBQU16QyxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmJmMjdmODgzMWJkMTBkOTQ1YmI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTm9pc2UgPSBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZWxlbSxcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuICAgICAgICB0aGlzLm5vaXNlRGF0YSA9IFtdLFxyXG4gICAgICAgIHRoaXMuZnJhbWUgPSAwLFxyXG4gICAgICAgIHRoaXMubG9vcFRpbWVvdXQgPSBudWxsLFxyXG4gICAgICAgIHRoaXMucmVzaXplVGhyb3R0bGUgPSBudWxsLFxyXG4gICAgICAgIHRoaXMuc2V0dXAoKVxyXG4gICAgfSxcclxuICAgIHRoaXMuc2V0dXAgPSBmdW5jdGlvbigpIHtjb25zb2xlLmxvZygxMjMpXHJcbiAgICAgICAgdGhpcy5ub2lzZURhdGEgPSBbXSxcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDEwOyB0ICs9IDEpXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTm9pc2UoKTtcclxuICAgICAgICB0aGlzLmxvb3AoKVxyXG4gICAgfSxcclxuICAgIHRoaXMuY3JlYXRlTm9pc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IgKHZhciB0ID0gdGhpcy5jdHguY3JlYXRlSW1hZ2VEYXRhKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpLCBlID0gbmV3IFVpbnQzMkFycmF5KHQuZGF0YS5idWZmZXIpLCBhID0gZS5sZW5ndGgsIG4gPSAwOyBuIDwgYTsgbiArPSAxKVxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpIDwgLjUgJiYgKGVbbl0gPSA0Mjc4MTkwMDgwKTtcclxuICAgICAgICB0aGlzLm5vaXNlRGF0YS5wdXNoKHQpXHJcbiAgICB9LFxyXG4gICAgdGhpcy5wYWludE5vaXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgOSA9PT0gdGhpcy5mcmFtZSA/IHRoaXMuZnJhbWUgPSAwIDogdGhpcy5mcmFtZSA9IHRoaXMuZnJhbWUgKyAxLFxyXG4gICAgICAgIHRoaXMuY3R4LnB1dEltYWdlRGF0YSh0aGlzLm5vaXNlRGF0YVt0aGlzLmZyYW1lXSwgMCwgMClcclxuICAgIH0sXHJcbiAgICB0aGlzLmxvb3AgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wYWludE5vaXNlKHRoaXMuZnJhbWUpLFxyXG4gICAgICAgIHRoaXMubG9vcFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdC5sb29wID0gdC5sb29wLmJpbmQodCksXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodC5sb29wKVxyXG4gICAgICAgIH0sIDEyMClcclxuICAgIH0sXHJcbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCksXHJcbiAgICAgICAgdGhpcy5sb29wVGltZW91dCA9IDAsXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlQ2hpbGQodGhpcy4kZWwpXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9