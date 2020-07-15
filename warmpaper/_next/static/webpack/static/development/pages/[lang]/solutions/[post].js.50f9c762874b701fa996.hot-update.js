webpackHotUpdate("static\\development\\pages\\[lang]\\solutions\\[post].js",{

/***/ "./src/globalFunc.js":
/*!***************************!*\
  !*** ./src/globalFunc.js ***!
  \***************************/
/*! exports provided: print, adjustFontSize, getDevice, SmoothScroll, usePrevious */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustFontSize", function() { return adjustFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevice", function() { return getDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothScroll", function() { return SmoothScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();

 //
//	styling console.log
//

var print = function print(state, color, text) {
  if (true) {
    var msg = typeof text == 'object' ? JSON.stringify(text) : text || '';
    console.log('%c' + state + '%c %s', 'color:white;font-family:sans-serif;font-size:10px;font-weight:bold;background:' + color + ';padding:4px 6px 3px 5px;border-radius:3px;', '', msg);
  }
}; //
// enlarge font size on large screen
//

var adjustFontSize = function adjustFontSize() {
  var baseFontRatio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16 / 1440;
  var fontMultiplier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.84375;
  var width = window.innerWidth;
  var roundedNumber = Math.round(baseFontRatio * width * fontMultiplier);
  if (roundedNumber >= 16) document.documentElement.style.fontSize = roundedNumber + "px";else document.documentElement.style.fontSize = "";
}; //
// get device type
//

var getDevice = function getDevice() {
  try {
    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName("body")[0];
    var width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    var deviceType = "";

    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4))) {
        if (width > 700) deviceType = "tablet";else deviceType = "mobile";
      } else deviceType = "desktop";
    })(navigator.userAgent || navigator.vendor || window.opera);

    return deviceType;
  } catch (e) {
    return "desktop";
  }
};

var isMobile = function isMobile() {
  return window.innerWidth <= 1024;
};

var hasClass = function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
};

var addClass = function addClass(el, className) {
  if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += " " + className;
};

var removeClass = function removeClass(el, className) {
  var isNodelist = typeof el.length != "undefined" && typeof el.item != "undefined";

  if (isNodelist) {
    var els = el;

    for (var i = 0; els[i]; i++) {
      if (els[i].classList) els[i].classList.remove(className);else if (hasClass(els[i], className)) {
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        els[i].className = els[i].className.replace(reg, " ");
      }
    }
  } else {
    if (el.classList) el.classList.remove(className);else if (hasClass(el, className)) {
      var _reg = new RegExp("(\\s|^)" + className + "(\\s|$)");

      el.className = el.className.replace(_reg, " ");
    }
  }
}; //
// Add and Remove Event
//


var addEvent = function addEvent(obj, type, callback) {
  if (obj === null || typeof obj === "undefined") return;
  if (obj.addEventListener) obj.addEventListener(type, callback, false);else if (obj.attachEvent) obj.attachEvent("on" + type, callback);else obj["on" + type] = callback;
};

var removeEvent = function removeEvent(obj, type, func) {
  if (obj.removeEventListener) obj.removeEventListener(type, func, false);
};

var setTranslate = function setTranslate(elem, x, y, z) {
  elem.style.webkitTransform = "translate3d(" + x + "," + y + "," + z + ")";
  elem.style.msTransform = "translate3d(" + x + "," + y + "," + z + ")";
  elem.style.transform = "translate3d(" + x + "," + y + "," + z + ")";
};

var FrameImpulse = function FrameImpulse() {
  var vendors = ["webkit", "moz"];
  var r = {};
  var listeners = [],
      numListeners = 0,
      toRemove = [],
      numToRemove;
  var lastTime = 0;

  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    window.requestAnimationFrame = window[vendors[i] + "RequestAnimationFrame"];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  var run = function run(deltaTime) {
    requestAnimationFrame(run);
    if (numListeners === 0) return;

    for (var i = 0; i < numListeners; i++) {
      listeners[i].call(deltaTime);
    }

    if (numToRemove > 0) {
      var indexToRemove = [];

      for (var _i = listeners.length - 1; _i >= 0; _i--) {
        for (var j = 0; j < toRemove.length; j++) {
          if (listeners[_i] === toRemove[j]) indexToRemove.push(_i);
        }
      }

      for (var _i2 = 0; _i2 < indexToRemove.length; _i2++) {
        listeners.splice(indexToRemove[_i2], 1);
      }

      numListeners = listeners.length;
      toRemove = [];
      numToRemove = 0;
    }
  };

  r.on = function (f) {
    document.body.scrollTo(0, 0);

    if (listeners.indexOf(f) > -1) {
      return;
    }

    listeners.push(f);
    numListeners = listeners.length; // console.log("FrameImpulse > new listener > total :", numListeners);
  };

  r.off = function (f) {
    //toRemove.push(f);
    //numToRemove = toRemove.length;
    var i = listeners.indexOf(f);
    if (i === -1) return;
    listeners.splice(i, 1);
    numListeners = listeners.length; // console.log("FrameImpulse > scheduled removal > total :", numListeners);
  };

  r.getListeners = function () {
    return listeners;
  };

  run();
  return r;
};

_c = FrameImpulse;

var VirtualScroll = function VirtualScroll() {
  var vs = {};
  var numListeners,
      listeners = [],
      initialized = false;
  var touchStartX, touchStartY; // [ These settings can be customized with the options() function below ]
  // Mutiply the touch action by two making the scroll a bit faster than finger movement

  var touchMult = 2; // Firefox on Windows needs a boost, since scrolling is very slow

  var firefoxMult = 15; // How many pixels to move with each key press

  var keyStep = 120; // General multiplier for all mousehweel including FF

  var mouseMult = 1;
  var bodyTouchAction;
  var hasWheelEvent = ("onwheel" in document);
  var hasMouseWheelEvent = ("onmousewheel" in document);
  var hasTouch = ("ontouchstart" in document);
  var hasKeyDown = ("onkeydown" in document);
  var hasTouchWin = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1;
  var hasPointer = !!window.navigator.msPointerEnabled;
  var isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
  var event = {
    y: 0,
    x: 0,
    deltaX: 0,
    deltaY: 0,
    originalEvent: null
  };
  var k = {
    left: 37,
    right: 39,
    up: 38,
    down: 40
  };

  vs.on = function (f) {
    if (!initialized) initListeners();
    var i = listeners.indexOf(f);
    if (i !== -1) return;
    listeners.push(f);
    numListeners = listeners.length;
  };
  /**
   *	@method options
   *	@memberof VirtualScroll
   *	@static
   *
   *	@param {Object} opt - object literal containing one or more options from the list above, specified as properties.
   *
   *	@description Sets custom parameters to the VirtualScroll (globally). The following options are supported:
   *
   *	<ul>
   *	<li>touchMult (default: 2) - mutiply the touch action to make the scroll a faster/slower than finger movement</li>
   *	<li>firefoxMult (defailt: 15)- Firefox on Windows needs a boost, since scrolling is very slow</li>
   *	<li>keyStep (default: 120) - specified how many pixels to move with each key press</li>
   *	<li>mouseMult (default: 1) - general multiplier for all mousehweel events including FF</li>
   *	</ul>
   */


  vs.options = function (opt) {
    keyStep = opt.keyStep || 120;
    firefoxMult = opt.firefoxMult || 15;
    touchMult = opt.touchMult || 2;
    mouseMult = opt.mouseMult || 1;
  };

  vs.off = function (f) {
    var i = listeners.indexOf(f);
    if (i === -1) return;
    listeners.splice(i, 1);
    numListeners = listeners.length;
    if (numListeners <= 0) destroyListeners();
  };
  /**
   *	@method lockTouch
   *	@memberof VirtualScroll
   *	@static
   *
   *	@description For VirtualScroll to work on mobile, the default swipe-to-scroll behavior needs to be turned off.
   *	This function will take care of that, however it's a failt simple mechanism - see in the source code, linked below.
   */


  vs.lockTouch = function () {
    document.addEventListener("touchmove", function (e) {
      e.preventDefault();
    });
  };

  var notify = function notify(e) {
    event.x += event.deltaX;
    event.y += event.deltaY;
    event.originalEvent = e;

    for (var i = 0; i < numListeners; i++) {
      listeners[i](event);
    }
  };

  var onWheel = function onWheel(e) {
    // In Chrome and in Firefox (at least the new one)
    event.deltaX = e.wheelDeltaX || e.deltaX || (e.wheelDeltaY || e.deltaY) * -1;
    event.deltaY = e.wheelDeltaY || e.deltaY * -1; // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
    // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes

    if (isFirefox && e.deltaMode === 1) {
      event.deltaX *= firefoxMult;
      event.deltaY *= firefoxMult;
    }

    event.deltaX *= mouseMult;
    event.deltaY *= mouseMult;
    notify(e);
  };

  var onMouseWheel = function onMouseWheel(e) {
    // In Safari, IE and in Chrome if 'wheel' isn't defined
    event.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
    event.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;
    notify(e);
  };

  var onTouchStart = function onTouchStart(e) {
    var t = e.targetTouches ? e.targetTouches[0] : e;
    touchStartX = t.pageX;
    touchStartY = t.pageY;
  };

  var onTouchMove = function onTouchMove(e) {
    // e.preventDefault(); // < This needs to be managed externally
    var t = e.targetTouches ? e.targetTouches[0] : e;
    event.deltaX = (t.pageX - touchStartX) * touchMult;
    event.deltaY = (t.pageY - touchStartY) * touchMult;
    touchStartX = t.pageX;
    touchStartY = t.pageY;
    notify(e);
  };

  var onKeyDown = function onKeyDown(e) {
    // 37 left arrow, 38 up arrow, 39 right arrow, 40 down arrow
    event.deltaX = event.deltaY = 0;

    switch (e.keyCode) {
      case k.left:
        event.deltaX = -keyStep;
        break;

      case k.right:
        event.deltaX = keyStep;
        break;

      case k.up:
        event.deltaY = keyStep;
        break;

      case k.down:
        event.deltaY = -keyStep;
        break;
    }

    notify(e);
  };

  var initListeners = function initListeners() {
    if (hasWheelEvent) document.addEventListener("wheel", onWheel);
    if (hasMouseWheelEvent) document.addEventListener("mousewheel", onMouseWheel); // if (hasTouch) {

    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchmove", onTouchMove); // }

    if (hasPointer && hasTouchWin) {
      bodyTouchAction = document.body.style.msTouchAction;
      document.body.style.msTouchAction = "none";
      document.addEventListener("MSPointerDown", onTouchStart, true);
      document.addEventListener("MSPointerMove", onTouchMove, true);
    }

    if (hasKeyDown) document.addEventListener("keydown", onKeyDown);
    initialized = true;
  };

  var destroyListeners = function destroyListeners() {
    if (hasWheelEvent) document.removeEventListener("wheel", onWheel);
    if (hasMouseWheelEvent) document.removeEventListener("mousewheel", onMouseWheel); // if (hasTouch) {

    document.removeEventListener("touchstart", onTouchStart);
    document.removeEventListener("touchmove", onTouchMove); // }

    if (hasPointer && hasTouchWin) {
      document.body.style.msTouchAction = bodyTouchAction;
      document.removeEventListener("MSPointerDown", onTouchStart, true);
      document.removeEventListener("MSPointerMove", onTouchMove, true);
    }

    if (hasKeyDown) document.removeEventListener("keydown", onKeyDown);
    initialized = false;
  };

  return vs;
}; //
//  Virtual Scroll
//


_c2 = VirtualScroll;
var SmoothScroll = function SmoothScroll(elem, scrollFunc) {
  var _this = this; // Grab both red boxes


  this.elem = elem; // Check how much we can scroll. This value is the
  // height of the scrollable element minus the height of the widow

  var fullElemHeight = this.elem.getBoundingClientRect().height;
  var parentHeight = this.elem.parentNode.offsetHeight;
  var elemWidth; // = this.elem.getBoundingClientRect().width - this.elem.;

  var elemHeight; // = this.elem.getBoundingClientRect().height - window.innerHeight;
  // Add easing to the scroll. Play with this value to find a setting that you like.

  var ease = 0.1;
  var mult = 0.7; // Store current scroll position

  var targetX = 0,
      targetY = 0;
  var currentX = 0,
      currentY = 0;
  var showScrollBar = false;
  var disable = false;
  var isSelf = true;

  var onScroll = function onScroll(e) {
    if (!disable && isSelf) {
      // Accumulate delta value on each scroll event
      targetY += e.deltaY * mult;
      targetX += e.deltaX * mult; // Clamp the value so it doesn't go too far up or down
      // The value needs to be between 0 and -elemHeight

      targetX = Math.max(-elemWidth, targetX);
      targetX = Math.min(0, targetX);
      targetY = Math.max(-elemHeight, targetY);
      targetY = Math.min(0, targetY);
    }
  };

  var onAnim = function onAnim() {
    // Make sure this works across different browsers (use the shim or something)
    // keep at bottom while resizing
    if (-targetX > elemWidth && targetX < 0) targetX = -elemWidth + 1;
    if (-targetY > elemHeight && targetY < 0) targetY = -elemHeight + 1;
    if (_this.elem.getBoundingClientRect().height < _this.elem.parentNode.offsetHeight) targetY = 0; // Get closer to the target value at each frame, using ease.
    // Other easing methods are also ok.

    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease; // Uncomment this line to scroll horizontally
    // currentX += (targetX - currentX) * ease;
    // Apply CSS style

    setTranslate(_this.elem, currentX.toFixed(4) + "px", currentY.toFixed(4) + "px", 0 + "px");
    refresh();
    if (scrollFunc) scrollFunc(currentY / elemHeight, currentY, elemHeight);
    if (showScrollBar) if (fullElemHeight > _this.elem.parentNode.offsetHeight) rePositionScrollBar(currentY); // lazyLoad.checkAndShowImg();
  }; // detect that if hovered scroll container


  addEvent(_this.elem, "mouseenter", function () {
    isSelf = true;
  });
  addEvent(_this.elem, "mouseleave", function () {
    isSelf = false;
  });
  addEvent(_this.elem, "touchstart", function () {
    isSelf = true;
  });
  addEvent(_this.elem, "touchend", function () {
    isSelf = false;
  });

  var initScrollBar = function initScrollBar() {
    _this.oldMouseY = 0;
    _this.scrollBarOuterWrap = document.createElement("div");
    _this.scrollBarWrap = document.createElement("div");
    _this.scrollBar = document.createElement("div");

    _this.scrollBarOuterWrap.setAttribute("id", "scrollBarOuterWrap");

    _this.scrollBarWrap.setAttribute("id", "scrollBarWrap");

    _this.scrollBar.setAttribute("id", "scrollBar");

    addEvent(_this.scrollBar, "mousedown", onMouseDownScrollBar);

    _this.scrollBarWrap.appendChild(_this.scrollBar);

    _this.scrollBarOuterWrap.appendChild(_this.scrollBarWrap);

    _this.elem.parentNode.appendChild(_this.scrollBarOuterWrap);
  };

  var rePositionScrollBar = function rePositionScrollBar(y) {
    var scrollBarHeight = (1 - elemHeight / fullElemHeight) * 100;
    _this.scrollBar.style.height = scrollBarHeight + "%";
    _this.scrollBarY = (_this.scrollBarWrap.offsetHeight - _this.scrollBar.offsetHeight) * (y / elemHeight);
    setTranslate(_this.scrollBar, '-50%', -_this.scrollBarY.toFixed(4) + "px", 0 + "px");
  };

  var onMouseDownScrollBar = function onMouseDownScrollBar(e) {
    e.preventDefault();
    _this.oldMouseY = e.pageY;
    _this.clickedScrollBar = true;
    addClass(this, "active");
    addEvent(document, "mousemove", onMoveScrollBar);
    addEvent(document, "mouseup", onMouseUpScrollBar);
  };

  var onMoveScrollBar = function onMoveScrollBar(e) {
    if (_this.clickedScrollBar) {
      var y = _this.oldMouseY - e.pageY;
      targetY += y * (fullElemHeight / _this.elem.parentNode.offsetHeight);
      targetY = Math.max(-elemHeight, targetY);
      targetY = Math.min(0, targetY);
      _this.oldMouseY = e.pageY;
    }
  };

  var onMouseUpScrollBar = function onMouseUpScrollBar() {
    _this.clickedScrollBar = false;
    removeClass(_this.scrollBar, "active");
    removeEvent(document, "mousemove", onMoveScrollBar);
    removeEvent(document, "mouseup", onMouseUpScrollBar);
  };

  var reset = function reset() {
    currentY = 0;
    targetY = 0;
  };

  var refresh = function refresh() {
    if (_this.elem.parentNode != null) {
      fullElemHeight = _this.elem.getBoundingClientRect().height;
      elemWidth = _this.elem.getBoundingClientRect().width - _this.elem.parentNode.offsetWidth;
      elemHeight = _this.elem.getBoundingClientRect().height - _this.elem.parentNode.offsetHeight;

      if (showScrollBar) {
        if (fullElemHeight > parentHeight) {
          if (hasClass(_this.scrollBarOuterWrap, "hide")) removeClass(_this.scrollBarOuterWrap, "hide");
        } else {
          if (!hasClass(_this.scrollBarOuterWrap, "hide")) addClass(_this.scrollBarOuterWrap, "hide");
        }
      }
    }
  };

  var to = function to(y) {
    elemHeight = _this.elem.getBoundingClientRect().height - _this.elem.parentNode.offsetHeight;
    targetY = Math.max(-elemHeight, y);
  };

  var set = function set(y) {
    currentY = y;
    targetY = y;
  };

  var vs = VirtualScroll();
  var fi = FrameImpulse();
  var isOn = false;

  var on = function on() {
    isOn = true;
    refresh();
    onResize();
    initScrollBar();
    onShowScrollBar();
    vs.on(onScroll);
    fi.on(onAnim);
  };

  var off = function off() {
    isOn = false;
    vs.off(onScroll);
    fi.off(onAnim);
    onHideScrollBar();
    destroy();
  };

  var destroy = function destroy() {
    // removeEvent(window, "resize", onResize);
    if (_this.scrollBarOuterWrap) {
      removeEvent(_this.scrollBar, "mousedown", onMouseDownScrollBar);

      _this.scrollBarOuterWrap.remove();

      _this.scrollBarOuterWrap = null;
      _this.scrollBarWrap = null;
      _this.scrollBar = null;
    }
  };

  var onResize = function onResize() {
    parentHeight = _this.elem.parentNode.offsetHeight;

    if (isMobile()) {
      if (isOn) {
        off();
        setTranslate(_this.elem, 0 + "px", 0 + "px", 0 + "px");
      }
    } else {
      if (!isOn) {
        initScrollBar();
        on();
      }

      if (disable) onEnable();
    }
  };

  var onDisable = function onDisable() {
    disable = true;
  };

  var onEnable = function onEnable() {
    disable = false;
  };

  var onShowScrollBar = function onShowScrollBar() {
    showScrollBar = true;
    removeClass(_this.scrollBarWrap, 'hide');
  };

  var onHideScrollBar = function onHideScrollBar() {
    showScrollBar = false;
    if (_this.scrollBarWrap) addClass(_this.scrollBarWrap, 'hide');
  };

  var init = function init() {
    if (!isMobile()) {
      on();
    }

    addEvent(window, "resize", onResize);
  };

  init();
  return {
    reset: reset,
    refresh: refresh,
    onResize: onResize,
    set: set,
    to: to,
    on: on,
    off: off,
    disable: onDisable,
    enable: onEnable,
    showScrollBar: onShowScrollBar,
    hideScrollBar: onHideScrollBar,
    destroy: destroy
  };
};
_c3 = SmoothScroll;
var usePrevious = function usePrevious(value) {
  _s();

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  });
  return ref.current;
};

_s(usePrevious, "8uVE59eA/r6b92xF80p7sH8rXLk=");

var _c, _c2, _c3;

$RefreshReg$(_c, "FrameImpulse");
$RefreshReg$(_c2, "VirtualScroll");
$RefreshReg$(_c3, "SmoothScroll");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsRnVuYy5qcyJdLCJuYW1lcyI6WyJwcmludCIsInN0YXRlIiwiY29sb3IiLCJ0ZXh0IiwibXNnIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJhZGp1c3RGb250U2l6ZSIsImJhc2VGb250UmF0aW8iLCJmb250TXVsdGlwbGllciIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJvdW5kZWROdW1iZXIiLCJNYXRoIiwicm91bmQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiZm9udFNpemUiLCJnZXREZXZpY2UiLCJ3IiwiZCIsImJvZHkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsaWVudFdpZHRoIiwiZGV2aWNlVHlwZSIsImEiLCJ0ZXN0Iiwic3Vic3RyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJlIiwiaXNNb2JpbGUiLCJoYXNDbGFzcyIsImVsIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJtYXRjaCIsIlJlZ0V4cCIsImFkZENsYXNzIiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJpc05vZGVsaXN0IiwibGVuZ3RoIiwiaXRlbSIsImVscyIsImkiLCJyZW1vdmUiLCJyZWciLCJyZXBsYWNlIiwiYWRkRXZlbnQiLCJvYmoiLCJ0eXBlIiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJyZW1vdmVFdmVudCIsImZ1bmMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VHJhbnNsYXRlIiwiZWxlbSIsIngiLCJ5IiwieiIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiRnJhbWVJbXB1bHNlIiwidmVuZG9ycyIsInIiLCJsaXN0ZW5lcnMiLCJudW1MaXN0ZW5lcnMiLCJ0b1JlbW92ZSIsIm51bVRvUmVtb3ZlIiwibGFzdFRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIm1heCIsImlkIiwic2V0VGltZW91dCIsInJ1biIsImRlbHRhVGltZSIsImNhbGwiLCJpbmRleFRvUmVtb3ZlIiwiaiIsInB1c2giLCJzcGxpY2UiLCJvbiIsImYiLCJzY3JvbGxUbyIsImluZGV4T2YiLCJvZmYiLCJnZXRMaXN0ZW5lcnMiLCJWaXJ0dWFsU2Nyb2xsIiwidnMiLCJpbml0aWFsaXplZCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJ0b3VjaE11bHQiLCJmaXJlZm94TXVsdCIsImtleVN0ZXAiLCJtb3VzZU11bHQiLCJib2R5VG91Y2hBY3Rpb24iLCJoYXNXaGVlbEV2ZW50IiwiaGFzTW91c2VXaGVlbEV2ZW50IiwiaGFzVG91Y2giLCJoYXNLZXlEb3duIiwiaGFzVG91Y2hXaW4iLCJtc01heFRvdWNoUG9pbnRzIiwiaGFzUG9pbnRlciIsIm1zUG9pbnRlckVuYWJsZWQiLCJpc0ZpcmVmb3giLCJldmVudCIsImRlbHRhWCIsImRlbHRhWSIsIm9yaWdpbmFsRXZlbnQiLCJrIiwibGVmdCIsInJpZ2h0IiwidXAiLCJkb3duIiwiaW5pdExpc3RlbmVycyIsIm9wdGlvbnMiLCJvcHQiLCJkZXN0cm95TGlzdGVuZXJzIiwibG9ja1RvdWNoIiwicHJldmVudERlZmF1bHQiLCJub3RpZnkiLCJvbldoZWVsIiwid2hlZWxEZWx0YVgiLCJ3aGVlbERlbHRhWSIsImRlbHRhTW9kZSIsIm9uTW91c2VXaGVlbCIsIndoZWVsRGVsdGEiLCJvblRvdWNoU3RhcnQiLCJ0IiwidGFyZ2V0VG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJvblRvdWNoTW92ZSIsIm9uS2V5RG93biIsImtleUNvZGUiLCJtc1RvdWNoQWN0aW9uIiwiU21vb3RoU2Nyb2xsIiwic2Nyb2xsRnVuYyIsIl90aGlzIiwiZnVsbEVsZW1IZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJwYXJlbnRIZWlnaHQiLCJwYXJlbnROb2RlIiwib2Zmc2V0SGVpZ2h0IiwiZWxlbVdpZHRoIiwiZWxlbUhlaWdodCIsImVhc2UiLCJtdWx0IiwidGFyZ2V0WCIsInRhcmdldFkiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwic2hvd1Njcm9sbEJhciIsImRpc2FibGUiLCJpc1NlbGYiLCJvblNjcm9sbCIsIm1pbiIsIm9uQW5pbSIsInRvRml4ZWQiLCJyZWZyZXNoIiwicmVQb3NpdGlvblNjcm9sbEJhciIsImluaXRTY3JvbGxCYXIiLCJvbGRNb3VzZVkiLCJzY3JvbGxCYXJPdXRlcldyYXAiLCJjcmVhdGVFbGVtZW50Iiwic2Nyb2xsQmFyV3JhcCIsInNjcm9sbEJhciIsInNldEF0dHJpYnV0ZSIsIm9uTW91c2VEb3duU2Nyb2xsQmFyIiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxCYXJIZWlnaHQiLCJzY3JvbGxCYXJZIiwiY2xpY2tlZFNjcm9sbEJhciIsIm9uTW92ZVNjcm9sbEJhciIsIm9uTW91c2VVcFNjcm9sbEJhciIsInJlc2V0Iiwib2Zmc2V0V2lkdGgiLCJ0byIsInNldCIsImZpIiwiaXNPbiIsIm9uUmVzaXplIiwib25TaG93U2Nyb2xsQmFyIiwib25IaWRlU2Nyb2xsQmFyIiwiZGVzdHJveSIsIm9uRW5hYmxlIiwib25EaXNhYmxlIiwiaW5pdCIsImVuYWJsZSIsImhpZGVTY3JvbGxCYXIiLCJ1c2VQcmV2aW91cyIsInZhbHVlIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWVDLElBQWYsRUFBdUI7QUFDMUMsWUFBb0I7QUFDbEIsUUFBTUMsR0FBRyxHQUFJLE9BQU9ELElBQVAsSUFBZSxRQUFoQixHQUEyQkUsSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWYsQ0FBM0IsR0FBa0RBLElBQUksSUFB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QUFBOztBQUNwQyxNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLEVBQWxCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixPQUFHLENBQUNHLE9BQUosR0FBY0osS0FBZDtBQUNELEdBRlEsQ0FBVDtBQUdBLFNBQU9DLEdBQUcsQ0FBQ0csT0FBWDtBQUNELENBTk07O0dBQU1MLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFtsYW5nXVxcc29sdXRpb25zXFxbcG9zdF0uanMuNTBmOWM3NjI4NzRiNzAxZmE5OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmICwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1xyXG4vL1x0c3R5bGluZyBjb25zb2xlLmxvZ1xyXG4vL1xyXG5leHBvcnQgY29uc3QgcHJpbnQgPSAoc3RhdGUsIGNvbG9yLCB0ZXh0KSA9PntcclxuICBpZihwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGNvbnN0IG1zZyA9ICh0eXBlb2YgdGV4dCA9PSAnb2JqZWN0Jyk/IEpTT04uc3RyaW5naWZ5KHRleHQpIDogdGV4dCB8fCAnJztcclxuICAgIGNvbnNvbGUubG9nKCclYycrc3RhdGUrJyVjICVzJywnY29sb3I6d2hpdGU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXNpemU6MTBweDtmb250LXdlaWdodDpib2xkO2JhY2tncm91bmQ6Jytjb2xvcisnO3BhZGRpbmc6NHB4IDZweCAzcHggNXB4O2JvcmRlci1yYWRpdXM6M3B4OycsICcnLCBtc2cpO1xyXG4gIH1cclxufVxyXG5cclxuLy9cclxuLy8gZW5sYXJnZSBmb250IHNpemUgb24gbGFyZ2Ugc2NyZWVuXHJcbi8vXHJcbmV4cG9ydCBjb25zdCBhZGp1c3RGb250U2l6ZSA9IChiYXNlRm9udFJhdGlvID0gMTYgLyAxNDQwLCBmb250TXVsdGlwbGllciA9IDAuODQzNzUpID0+IHtcclxuICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNvbnN0IHJvdW5kZWROdW1iZXIgPSBNYXRoLnJvdW5kKFxyXG4gICAgYmFzZUZvbnRSYXRpbyAqIHdpZHRoICogZm9udE11bHRpcGxpZXJcclxuICApO1xyXG5cclxuICBpZiAocm91bmRlZE51bWJlciA+PSAxNilcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gcm91bmRlZE51bWJlciArIFwicHhcIjtcclxuICBlbHNlIFxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBcIlwiO1xyXG59O1xyXG5cclxuLy9cclxuLy8gZ2V0IGRldmljZSB0eXBlXHJcbi8vXHJcbmV4cG9ydCBjb25zdCBnZXREZXZpY2UgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB3ID0gd2luZG93LFxyXG4gICAgICAgIGQgPSBkb2N1bWVudCxcclxuICAgICAgICBkb2N1bWVudEVsZW1lbnQgPSBkLmRvY3VtZW50RWxlbWVudCxcclxuICAgICAgICBib2R5ID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XHJcbiAgICAgIGxldCB3aWR0aCA9XHJcbiAgICAgICAgdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgICBsZXQgZGV2aWNlVHlwZSA9IFwiXCI7XHJcblxyXG4gICAgICAoZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KFxyXG4gICAgICAgICAgICBhXHJcbiAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298cy0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8LW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxidy0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbS18Y2VsbHxjaHRtfGNsZGN8Y21kLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkYy1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZi01fGctbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZC0obXxwfHQpfGhlaS18aGkocHR8dGEpfGhwKCBpfGlwKXxocy1jfGh0KGMoLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGktKDIwfGdvfG1hKXxpMjMwfGlhYyggfC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Yy18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8LVthLXddKXxsaWJ3fGx5bnh8bTEtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG0tY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8LShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwbi0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHQtZ3xxYS1hfHFjKDA3fDEyfDIxfDMyfDYwfC1bMi03XXxpLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGgtfG9vfHAtKXxzZGtcXC98c2UoYygtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaC18c2hhcnxzaWUoLXxtKXxzay0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGgtfHYtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsLXx0ZGctfHRlbChpfG0pfHRpbS18dC1tb3x0byhwbHxzaCl8dHMoNzB8bS18bTN8bTUpfHR4LTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXMtfHlvdXJ8emV0b3x6dGUtL2kudGVzdChcclxuICAgICAgICAgICAgYS5zdWJzdHIoMCwgNClcclxuICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmICh3aWR0aCA+IDcwMCkgZGV2aWNlVHlwZSA9IFwidGFibGV0XCI7XHJcbiAgICAgICAgICBlbHNlIGRldmljZVR5cGUgPSBcIm1vYmlsZVwiO1xyXG4gICAgICAgIH0gZWxzZSBkZXZpY2VUeXBlID0gXCJkZXNrdG9wXCI7XHJcbiAgICAgIH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmEpO1xyXG5cclxuICAgICAgcmV0dXJuIGRldmljZVR5cGU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBcImRlc2t0b3BcIjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgaXNNb2JpbGUgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPD0gMTAyNDtcclxufTtcclxuXHJcbmNvbnN0IGhhc0NsYXNzID0gZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xyXG4gIGlmIChlbC5jbGFzc0xpc3QpIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcclxuICBlbHNlXHJcbiAgICByZXR1cm4gISFlbC5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cChcIihcXFxcc3xeKVwiICsgY2xhc3NOYW1lICsgXCIoXFxcXHN8JClcIikpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XHJcbiAgaWYgKGVsLmNsYXNzTGlzdCkgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIGVsc2UgaWYgKCFoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSkgZWwuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XHJcbiAgY29uc3QgaXNOb2RlbGlzdCA9XHJcbiAgICB0eXBlb2YgZWwubGVuZ3RoICE9IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGVsLml0ZW0gIT0gXCJ1bmRlZmluZWRcIjtcclxuICBpZiAoaXNOb2RlbGlzdCkge1xyXG4gICAgY29uc3QgZWxzID0gZWw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGVsc1tpXTsgaSsrKSB7XHJcbiAgICAgIGlmIChlbHNbaV0uY2xhc3NMaXN0KSBlbHNbaV0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICBlbHNlIGlmIChoYXNDbGFzcyhlbHNbaV0sIGNsYXNzTmFtZSkpIHtcclxuICAgICAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cChcIihcXFxcc3xeKVwiICsgY2xhc3NOYW1lICsgXCIoXFxcXHN8JClcIik7XHJcbiAgICAgICAgZWxzW2ldLmNsYXNzTmFtZSA9IGVsc1tpXS5jbGFzc05hbWUucmVwbGFjZShyZWcsIFwiIFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICBlbHNlIGlmIChoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSkge1xyXG4gICAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cChcIihcXFxcc3xeKVwiICsgY2xhc3NOYW1lICsgXCIoXFxcXHN8JClcIik7XHJcbiAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKHJlZywgXCIgXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8vXHJcbi8vIEFkZCBhbmQgUmVtb3ZlIEV2ZW50XHJcbi8vXHJcbmNvbnN0IGFkZEV2ZW50ID0gZnVuY3Rpb24ob2JqLCB0eXBlLCBjYWxsYmFjaykge1xyXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xyXG5cclxuICBpZiAob2JqLmFkZEV2ZW50TGlzdGVuZXIpIG9iai5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgZWxzZSBpZiAob2JqLmF0dGFjaEV2ZW50KSBvYmouYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgY2FsbGJhY2spO1xyXG4gIGVsc2Ugb2JqW1wib25cIiArIHR5cGVdID0gY2FsbGJhY2s7XHJcbn07XHJcbmNvbnN0IHJlbW92ZUV2ZW50ID0gZnVuY3Rpb24ob2JqLCB0eXBlLCBmdW5jKSB7XHJcbiAgaWYgKG9iai5yZW1vdmVFdmVudExpc3RlbmVyKSBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jLCBmYWxzZSk7XHJcbn07XHJcblxyXG5jb25zdCBzZXRUcmFuc2xhdGUgPSBmdW5jdGlvbihlbGVtLCB4LCB5LCB6KSB7XHJcbiAgZWxlbS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwiLFwiICsgeSArIFwiLFwiICsgeiArIFwiKVwiO1xyXG4gIGVsZW0uc3R5bGUubXNUcmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwiLFwiICsgeSArIFwiLFwiICsgeiArIFwiKVwiO1xyXG4gIGVsZW0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcIixcIiArIHkgKyBcIixcIiArIHogKyBcIilcIjtcclxufTtcclxuXHJcblxyXG5cclxuY29uc3QgRnJhbWVJbXB1bHNlID0gZnVuY3Rpb24oKXtcclxuICB2YXIgdmVuZG9ycyA9IFtcIndlYmtpdFwiLCBcIm1velwiXTtcclxuXHJcbiAgdmFyIHIgPSB7fTtcclxuICB2YXIgbGlzdGVuZXJzID0gW10sXHJcbiAgICBudW1MaXN0ZW5lcnMgPSAwLFxyXG4gICAgdG9SZW1vdmUgPSBbXSxcclxuICAgIG51bVRvUmVtb3ZlO1xyXG4gIHZhciBsYXN0VGltZSA9IDA7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsraSkge1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XHJcbiAgfVxyXG5cclxuICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XHJcbiAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XHJcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xyXG4gICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcclxuICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHZhciBydW4gPSBmdW5jdGlvbihkZWx0YVRpbWUpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShydW4pO1xyXG5cclxuICAgIGlmIChudW1MaXN0ZW5lcnMgPT09IDApIHJldHVybjtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUxpc3RlbmVyczsgaSsrKSB7XHJcbiAgICAgIGxpc3RlbmVyc1tpXS5jYWxsKGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG51bVRvUmVtb3ZlID4gMCkge1xyXG4gICAgICB2YXIgaW5kZXhUb1JlbW92ZSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0b1JlbW92ZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgaWYgKGxpc3RlbmVyc1tpXSA9PT0gdG9SZW1vdmVbal0pIGluZGV4VG9SZW1vdmUucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhUb1JlbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXhUb1JlbW92ZVtpXSwgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG51bUxpc3RlbmVycyA9IGxpc3RlbmVycy5sZW5ndGg7XHJcbiAgICAgIHRvUmVtb3ZlID0gW107XHJcbiAgICAgIG51bVRvUmVtb3ZlID0gMDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByLm9uID0gZnVuY3Rpb24oZikge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUbygwLCAwKTtcclxuICAgIGlmIChsaXN0ZW5lcnMuaW5kZXhPZihmKSA+IC0xKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxpc3RlbmVycy5wdXNoKGYpO1xyXG4gICAgbnVtTGlzdGVuZXJzID0gbGlzdGVuZXJzLmxlbmd0aDtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRnJhbWVJbXB1bHNlID4gbmV3IGxpc3RlbmVyID4gdG90YWwgOlwiLCBudW1MaXN0ZW5lcnMpO1xyXG4gIH07XHJcblxyXG4gIHIub2ZmID0gZnVuY3Rpb24oZikge1xyXG4gICAgLy90b1JlbW92ZS5wdXNoKGYpO1xyXG4gICAgLy9udW1Ub1JlbW92ZSA9IHRvUmVtb3ZlLmxlbmd0aDtcclxuICAgIHZhciBpID0gbGlzdGVuZXJzLmluZGV4T2YoZik7XHJcbiAgICBpZiAoaSA9PT0gLTEpIHJldHVybjtcclxuICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICBudW1MaXN0ZW5lcnMgPSBsaXN0ZW5lcnMubGVuZ3RoO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJGcmFtZUltcHVsc2UgPiBzY2hlZHVsZWQgcmVtb3ZhbCA+IHRvdGFsIDpcIiwgbnVtTGlzdGVuZXJzKTtcclxuICB9O1xyXG5cclxuICByLmdldExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGxpc3RlbmVycztcclxuICB9O1xyXG5cclxuICBydW4oKTtcclxuICByZXR1cm4gcjtcclxufTtcclxuXHJcblxyXG52YXIgVmlydHVhbFNjcm9sbCA9IGZ1bmN0aW9uKCl7XHJcbiAgdmFyIHZzID0ge307XHJcblxyXG4gIHZhciBudW1MaXN0ZW5lcnMsXHJcbiAgICBsaXN0ZW5lcnMgPSBbXSxcclxuICAgIGluaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gIHZhciB0b3VjaFN0YXJ0WCwgdG91Y2hTdGFydFk7XHJcblxyXG4gIC8vIFsgVGhlc2Ugc2V0dGluZ3MgY2FuIGJlIGN1c3RvbWl6ZWQgd2l0aCB0aGUgb3B0aW9ucygpIGZ1bmN0aW9uIGJlbG93IF1cclxuICAvLyBNdXRpcGx5IHRoZSB0b3VjaCBhY3Rpb24gYnkgdHdvIG1ha2luZyB0aGUgc2Nyb2xsIGEgYml0IGZhc3RlciB0aGFuIGZpbmdlciBtb3ZlbWVudFxyXG4gIHZhciB0b3VjaE11bHQgPSAyO1xyXG4gIC8vIEZpcmVmb3ggb24gV2luZG93cyBuZWVkcyBhIGJvb3N0LCBzaW5jZSBzY3JvbGxpbmcgaXMgdmVyeSBzbG93XHJcbiAgdmFyIGZpcmVmb3hNdWx0ID0gMTU7XHJcbiAgLy8gSG93IG1hbnkgcGl4ZWxzIHRvIG1vdmUgd2l0aCBlYWNoIGtleSBwcmVzc1xyXG4gIHZhciBrZXlTdGVwID0gMTIwO1xyXG4gIC8vIEdlbmVyYWwgbXVsdGlwbGllciBmb3IgYWxsIG1vdXNlaHdlZWwgaW5jbHVkaW5nIEZGXHJcbiAgdmFyIG1vdXNlTXVsdCA9IDE7XHJcblxyXG4gIHZhciBib2R5VG91Y2hBY3Rpb247XHJcblxyXG4gIHZhciBoYXNXaGVlbEV2ZW50ID0gXCJvbndoZWVsXCIgaW4gZG9jdW1lbnQ7XHJcbiAgdmFyIGhhc01vdXNlV2hlZWxFdmVudCA9IFwib25tb3VzZXdoZWVsXCIgaW4gZG9jdW1lbnQ7XHJcbiAgdmFyIGhhc1RvdWNoID0gXCJvbnRvdWNoc3RhcnRcIiBpbiBkb2N1bWVudDtcclxuICB2YXIgaGFzS2V5RG93biA9IFwib25rZXlkb3duXCIgaW4gZG9jdW1lbnQ7XHJcblxyXG4gIHZhciBoYXNUb3VjaFdpbiA9XHJcbiAgICBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAmJiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDE7XHJcbiAgdmFyIGhhc1BvaW50ZXIgPSAhIXdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZDtcclxuXHJcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIikgPiAtMTtcclxuXHJcbiAgdmFyIGV2ZW50ID0ge1xyXG4gICAgeTogMCxcclxuICAgIHg6IDAsXHJcbiAgICBkZWx0YVg6IDAsXHJcbiAgICBkZWx0YVk6IDAsXHJcbiAgICBvcmlnaW5hbEV2ZW50OiBudWxsXHJcbiAgfTtcclxuXHJcbiAgdmFyIGsgPSB7XHJcbiAgICBsZWZ0OiAzNyxcclxuICAgIHJpZ2h0OiAzOSxcclxuICAgIHVwOiAzOCxcclxuICAgIGRvd246IDQwXHJcbiAgfTtcclxuXHJcbiAgdnMub24gPSBmdW5jdGlvbihmKSB7XHJcbiAgICBpZiAoIWluaXRpYWxpemVkKSBpbml0TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgdmFyIGkgPSBsaXN0ZW5lcnMuaW5kZXhPZihmKTtcclxuICAgIGlmIChpICE9PSAtMSkgcmV0dXJuO1xyXG5cclxuICAgIGxpc3RlbmVycy5wdXNoKGYpO1xyXG4gICAgbnVtTGlzdGVuZXJzID0gbGlzdGVuZXJzLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKlx0QG1ldGhvZCBvcHRpb25zXHJcbiAgICpcdEBtZW1iZXJvZiBWaXJ0dWFsU2Nyb2xsXHJcbiAgICpcdEBzdGF0aWNcclxuICAgKlxyXG4gICAqXHRAcGFyYW0ge09iamVjdH0gb3B0IC0gb2JqZWN0IGxpdGVyYWwgY29udGFpbmluZyBvbmUgb3IgbW9yZSBvcHRpb25zIGZyb20gdGhlIGxpc3QgYWJvdmUsIHNwZWNpZmllZCBhcyBwcm9wZXJ0aWVzLlxyXG4gICAqXHJcbiAgICpcdEBkZXNjcmlwdGlvbiBTZXRzIGN1c3RvbSBwYXJhbWV0ZXJzIHRvIHRoZSBWaXJ0dWFsU2Nyb2xsIChnbG9iYWxseSkuIFRoZSBmb2xsb3dpbmcgb3B0aW9ucyBhcmUgc3VwcG9ydGVkOlxyXG4gICAqXHJcbiAgICpcdDx1bD5cclxuICAgKlx0PGxpPnRvdWNoTXVsdCAoZGVmYXVsdDogMikgLSBtdXRpcGx5IHRoZSB0b3VjaCBhY3Rpb24gdG8gbWFrZSB0aGUgc2Nyb2xsIGEgZmFzdGVyL3Nsb3dlciB0aGFuIGZpbmdlciBtb3ZlbWVudDwvbGk+XHJcbiAgICpcdDxsaT5maXJlZm94TXVsdCAoZGVmYWlsdDogMTUpLSBGaXJlZm94IG9uIFdpbmRvd3MgbmVlZHMgYSBib29zdCwgc2luY2Ugc2Nyb2xsaW5nIGlzIHZlcnkgc2xvdzwvbGk+XHJcbiAgICpcdDxsaT5rZXlTdGVwIChkZWZhdWx0OiAxMjApIC0gc3BlY2lmaWVkIGhvdyBtYW55IHBpeGVscyB0byBtb3ZlIHdpdGggZWFjaCBrZXkgcHJlc3M8L2xpPlxyXG4gICAqXHQ8bGk+bW91c2VNdWx0IChkZWZhdWx0OiAxKSAtIGdlbmVyYWwgbXVsdGlwbGllciBmb3IgYWxsIG1vdXNlaHdlZWwgZXZlbnRzIGluY2x1ZGluZyBGRjwvbGk+XHJcbiAgICpcdDwvdWw+XHJcbiAgICovXHJcbiAgdnMub3B0aW9ucyA9IGZ1bmN0aW9uKG9wdCkge1xyXG4gICAga2V5U3RlcCA9IG9wdC5rZXlTdGVwIHx8IDEyMDtcclxuICAgIGZpcmVmb3hNdWx0ID0gb3B0LmZpcmVmb3hNdWx0IHx8IDE1O1xyXG4gICAgdG91Y2hNdWx0ID0gb3B0LnRvdWNoTXVsdCB8fCAyO1xyXG4gICAgbW91c2VNdWx0ID0gb3B0Lm1vdXNlTXVsdCB8fCAxO1xyXG4gIH07XHJcblxyXG4gIHZzLm9mZiA9IGZ1bmN0aW9uKGYpIHtcclxuICAgIHZhciBpID0gbGlzdGVuZXJzLmluZGV4T2YoZik7XHJcbiAgICBpZiAoaSA9PT0gLTEpIHJldHVybjtcclxuXHJcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgbnVtTGlzdGVuZXJzID0gbGlzdGVuZXJzLmxlbmd0aDtcclxuICAgIGlmIChudW1MaXN0ZW5lcnMgPD0gMCkgZGVzdHJveUxpc3RlbmVycygpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqXHRAbWV0aG9kIGxvY2tUb3VjaFxyXG4gICAqXHRAbWVtYmVyb2YgVmlydHVhbFNjcm9sbFxyXG4gICAqXHRAc3RhdGljXHJcbiAgICpcclxuICAgKlx0QGRlc2NyaXB0aW9uIEZvciBWaXJ0dWFsU2Nyb2xsIHRvIHdvcmsgb24gbW9iaWxlLCB0aGUgZGVmYXVsdCBzd2lwZS10by1zY3JvbGwgYmVoYXZpb3IgbmVlZHMgdG8gYmUgdHVybmVkIG9mZi5cclxuICAgKlx0VGhpcyBmdW5jdGlvbiB3aWxsIHRha2UgY2FyZSBvZiB0aGF0LCBob3dldmVyIGl0J3MgYSBmYWlsdCBzaW1wbGUgbWVjaGFuaXNtIC0gc2VlIGluIHRoZSBzb3VyY2UgY29kZSwgbGlua2VkIGJlbG93LlxyXG4gICAqL1xyXG4gIHZzLmxvY2tUb3VjaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHZhciBub3RpZnkgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBldmVudC54ICs9IGV2ZW50LmRlbHRhWDtcclxuICAgIGV2ZW50LnkgKz0gZXZlbnQuZGVsdGFZO1xyXG4gICAgZXZlbnQub3JpZ2luYWxFdmVudCA9IGU7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1MaXN0ZW5lcnM7IGkrKykge1xyXG4gICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZhciBvbldoZWVsID0gZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gSW4gQ2hyb21lIGFuZCBpbiBGaXJlZm94IChhdCBsZWFzdCB0aGUgbmV3IG9uZSlcclxuICAgIGV2ZW50LmRlbHRhWCA9IChlLndoZWVsRGVsdGFYIHx8IGUuZGVsdGFYKSB8fCAoZS53aGVlbERlbHRhWSB8fCBlLmRlbHRhWSkgKiAtMTtcclxuICAgIGV2ZW50LmRlbHRhWSA9IGUud2hlZWxEZWx0YVkgfHwgZS5kZWx0YVkgKiAtMTtcclxuXHJcbiAgICAvLyBmb3Igb3VyIHB1cnBvc2UgZGVsdGFtb2RlID0gMSBtZWFucyB1c2VyIGlzIG9uIGEgd2hlZWwgbW91c2UsIG5vdCB0b3VjaCBwYWRcclxuICAgIC8vIHJlYWwgbWVhbmluZzogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1doZWVsRXZlbnQjRGVsdGFfbW9kZXNcclxuICAgIGlmIChpc0ZpcmVmb3ggJiYgZS5kZWx0YU1vZGUgPT09IDEpIHtcclxuICAgICAgZXZlbnQuZGVsdGFYICo9IGZpcmVmb3hNdWx0O1xyXG4gICAgICBldmVudC5kZWx0YVkgKj0gZmlyZWZveE11bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQuZGVsdGFYICo9IG1vdXNlTXVsdDtcclxuICAgIGV2ZW50LmRlbHRhWSAqPSBtb3VzZU11bHQ7XHJcblxyXG4gICAgbm90aWZ5KGUpO1xyXG4gIH07XHJcblxyXG4gIHZhciBvbk1vdXNlV2hlZWwgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyBJbiBTYWZhcmksIElFIGFuZCBpbiBDaHJvbWUgaWYgJ3doZWVsJyBpc24ndCBkZWZpbmVkXHJcbiAgICBldmVudC5kZWx0YVggPSBlLndoZWVsRGVsdGFYID8gZS53aGVlbERlbHRhWCA6IDA7XHJcbiAgICBldmVudC5kZWx0YVkgPSBlLndoZWVsRGVsdGFZID8gZS53aGVlbERlbHRhWSA6IGUud2hlZWxEZWx0YTtcclxuXHJcbiAgICBub3RpZnkoZSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciB0ID0gZS50YXJnZXRUb3VjaGVzID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcclxuICAgIHRvdWNoU3RhcnRYID0gdC5wYWdlWDtcclxuICAgIHRvdWNoU3RhcnRZID0gdC5wYWdlWTtcclxuICB9O1xyXG5cclxuICB2YXIgb25Ub3VjaE1vdmUgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7IC8vIDwgVGhpcyBuZWVkcyB0byBiZSBtYW5hZ2VkIGV4dGVybmFsbHlcclxuICAgIHZhciB0ID0gZS50YXJnZXRUb3VjaGVzID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcclxuXHJcbiAgICBldmVudC5kZWx0YVggPSAodC5wYWdlWCAtIHRvdWNoU3RhcnRYKSAqIHRvdWNoTXVsdDtcclxuICAgIGV2ZW50LmRlbHRhWSA9ICh0LnBhZ2VZIC0gdG91Y2hTdGFydFkpICogdG91Y2hNdWx0O1xyXG5cclxuICAgIHRvdWNoU3RhcnRYID0gdC5wYWdlWDtcclxuICAgIHRvdWNoU3RhcnRZID0gdC5wYWdlWTtcclxuXHJcbiAgICBub3RpZnkoZSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uS2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vIDM3IGxlZnQgYXJyb3csIDM4IHVwIGFycm93LCAzOSByaWdodCBhcnJvdywgNDAgZG93biBhcnJvd1xyXG4gICAgZXZlbnQuZGVsdGFYID0gZXZlbnQuZGVsdGFZID0gMDtcclxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2Ugay5sZWZ0OlxyXG4gICAgICAgIGV2ZW50LmRlbHRhWCA9IC1rZXlTdGVwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGsucmlnaHQ6XHJcbiAgICAgICAgZXZlbnQuZGVsdGFYID0ga2V5U3RlcDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBrLnVwOlxyXG4gICAgICAgIGV2ZW50LmRlbHRhWSA9IGtleVN0ZXA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugay5kb3duOlxyXG4gICAgICAgIGV2ZW50LmRlbHRhWSA9IC1rZXlTdGVwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeShlKTtcclxuICB9O1xyXG5cclxuICB2YXIgaW5pdExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGhhc1doZWVsRXZlbnQpIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvbldoZWVsKTtcclxuICAgIGlmIChoYXNNb3VzZVdoZWVsRXZlbnQpXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG9uTW91c2VXaGVlbCk7XHJcblxyXG4gICAgLy8gaWYgKGhhc1RvdWNoKSB7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIG9uVG91Y2hTdGFydCk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgb25Ub3VjaE1vdmUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmIChoYXNQb2ludGVyICYmIGhhc1RvdWNoV2luKSB7XHJcbiAgICAgIGJvZHlUb3VjaEFjdGlvbiA9IGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbjtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gXCJub25lXCI7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJEb3duXCIsIG9uVG91Y2hTdGFydCwgdHJ1ZSk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJNb3ZlXCIsIG9uVG91Y2hNb3ZlLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGFzS2V5RG93bikgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcclxuXHJcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGRlc3Ryb3lMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChoYXNXaGVlbEV2ZW50KSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgb25XaGVlbCk7XHJcbiAgICBpZiAoaGFzTW91c2VXaGVlbEV2ZW50KVxyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBvbk1vdXNlV2hlZWwpO1xyXG5cclxuICAgIC8vIGlmIChoYXNUb3VjaCkge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBvblRvdWNoU3RhcnQpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG9uVG91Y2hNb3ZlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoaGFzUG9pbnRlciAmJiBoYXNUb3VjaFdpbikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSBib2R5VG91Y2hBY3Rpb247XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJEb3duXCIsIG9uVG91Y2hTdGFydCwgdHJ1ZSk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJNb3ZlXCIsIG9uVG91Y2hNb3ZlLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGFzS2V5RG93bikgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcclxuXHJcbiAgICBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB2cztcclxufTtcclxuXHJcblxyXG4vL1xyXG4vLyAgVmlydHVhbCBTY3JvbGxcclxuLy9cclxuZXhwb3J0IGNvbnN0IFNtb290aFNjcm9sbCA9IGZ1bmN0aW9uKGVsZW0sIHNjcm9sbEZ1bmMpIHtcclxuICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAvLyBHcmFiIGJvdGggcmVkIGJveGVzXHJcbiAgdGhpcy5lbGVtID0gZWxlbTtcclxuXHJcbiAgLy8gQ2hlY2sgaG93IG11Y2ggd2UgY2FuIHNjcm9sbC4gVGhpcyB2YWx1ZSBpcyB0aGVcclxuICAvLyBoZWlnaHQgb2YgdGhlIHNjcm9sbGFibGUgZWxlbWVudCBtaW51cyB0aGUgaGVpZ2h0IG9mIHRoZSB3aWRvd1xyXG4gIHZhciBmdWxsRWxlbUhlaWdodCA9IHRoaXMuZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgdmFyIHBhcmVudEhlaWdodCA9IHRoaXMuZWxlbS5wYXJlbnROb2RlLm9mZnNldEhlaWdodDtcclxuICB2YXIgZWxlbVdpZHRoOy8vID0gdGhpcy5lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gdGhpcy5lbGVtLjtcclxuICB2YXIgZWxlbUhlaWdodDsvLyA9IHRoaXMuZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gIC8vIEFkZCBlYXNpbmcgdG8gdGhlIHNjcm9sbC4gUGxheSB3aXRoIHRoaXMgdmFsdWUgdG8gZmluZCBhIHNldHRpbmcgdGhhdCB5b3UgbGlrZS5cclxuICB2YXIgZWFzZSA9IDAuMTtcclxuICB2YXIgbXVsdCA9IDAuNztcclxuXHJcbiAgLy8gU3RvcmUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cclxuICB2YXIgdGFyZ2V0WCA9IDAsXHJcbiAgICAgIHRhcmdldFkgPSAwO1xyXG4gIHZhciBjdXJyZW50WCA9IDAsXHJcbiAgICAgIGN1cnJlbnRZID0gMDtcclxuXHJcbiAgdmFyIHNob3dTY3JvbGxCYXIgPSBmYWxzZTtcclxuXHJcbiAgdmFyIGRpc2FibGUgPSBmYWxzZTtcclxuICB2YXIgaXNTZWxmID0gdHJ1ZTtcclxuXHJcbiAgdmFyIG9uU2Nyb2xsID0gZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKCFkaXNhYmxlICYmIGlzU2VsZikge1xyXG4gICAgICAvLyBBY2N1bXVsYXRlIGRlbHRhIHZhbHVlIG9uIGVhY2ggc2Nyb2xsIGV2ZW50XHJcbiAgICAgIHRhcmdldFkgKz0gZS5kZWx0YVkgKiBtdWx0O1xyXG4gICAgICB0YXJnZXRYICs9IGUuZGVsdGFYICogbXVsdDtcclxuXHJcbiAgICAgIC8vIENsYW1wIHRoZSB2YWx1ZSBzbyBpdCBkb2Vzbid0IGdvIHRvbyBmYXIgdXAgb3IgZG93blxyXG4gICAgICAvLyBUaGUgdmFsdWUgbmVlZHMgdG8gYmUgYmV0d2VlbiAwIGFuZCAtZWxlbUhlaWdodFxyXG4gICAgICB0YXJnZXRYID0gTWF0aC5tYXgoLWVsZW1XaWR0aCwgdGFyZ2V0WCk7XHJcbiAgICAgIHRhcmdldFggPSBNYXRoLm1pbigwLCB0YXJnZXRYKTtcclxuICAgICAgdGFyZ2V0WSA9IE1hdGgubWF4KC1lbGVtSGVpZ2h0LCB0YXJnZXRZKTtcclxuICAgICAgdGFyZ2V0WSA9IE1hdGgubWluKDAsIHRhcmdldFkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZhciBvbkFuaW0gPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIE1ha2Ugc3VyZSB0aGlzIHdvcmtzIGFjcm9zcyBkaWZmZXJlbnQgYnJvd3NlcnMgKHVzZSB0aGUgc2hpbSBvciBzb21ldGhpbmcpXHJcblxyXG4gICAgLy8ga2VlcCBhdCBib3R0b20gd2hpbGUgcmVzaXppbmdcclxuICAgIGlmICgtdGFyZ2V0WCA+IGVsZW1XaWR0aCAmJiB0YXJnZXRYIDwgMCkgdGFyZ2V0WCA9IC1lbGVtV2lkdGggKyAxO1xyXG4gICAgaWYgKC10YXJnZXRZID4gZWxlbUhlaWdodCAmJiB0YXJnZXRZIDwgMCkgdGFyZ2V0WSA9IC1lbGVtSGVpZ2h0ICsgMTtcclxuICAgIGlmKF90aGlzLmVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IDwgX3RoaXMuZWxlbS5wYXJlbnROb2RlLm9mZnNldEhlaWdodClcclxuICAgICAgdGFyZ2V0WSA9IDA7XHJcblxyXG4gICAgLy8gR2V0IGNsb3NlciB0byB0aGUgdGFyZ2V0IHZhbHVlIGF0IGVhY2ggZnJhbWUsIHVzaW5nIGVhc2UuXHJcbiAgICAvLyBPdGhlciBlYXNpbmcgbWV0aG9kcyBhcmUgYWxzbyBvay5cclxuICAgIGN1cnJlbnRYICs9ICh0YXJnZXRYIC0gY3VycmVudFgpICogZWFzZTtcclxuICAgIGN1cnJlbnRZICs9ICh0YXJnZXRZIC0gY3VycmVudFkpICogZWFzZTtcclxuXHJcblxyXG4gICAgLy8gVW5jb21tZW50IHRoaXMgbGluZSB0byBzY3JvbGwgaG9yaXpvbnRhbGx5XHJcbiAgICAvLyBjdXJyZW50WCArPSAodGFyZ2V0WCAtIGN1cnJlbnRYKSAqIGVhc2U7XHJcblxyXG4gICAgLy8gQXBwbHkgQ1NTIHN0eWxlXHJcbiAgICBzZXRUcmFuc2xhdGUoXHJcbiAgICAgIF90aGlzLmVsZW0sXHJcbiAgICAgIGN1cnJlbnRYLnRvRml4ZWQoNCkgKyBcInB4XCIsXHJcbiAgICAgIGN1cnJlbnRZLnRvRml4ZWQoNCkgKyBcInB4XCIsXHJcbiAgICAgIDAgKyBcInB4XCJcclxuICAgICk7XHJcblxyXG4gICAgcmVmcmVzaCgpO1xyXG5cclxuICAgIGlmIChzY3JvbGxGdW5jKSBzY3JvbGxGdW5jKGN1cnJlbnRZIC8gZWxlbUhlaWdodCwgY3VycmVudFksIGVsZW1IZWlnaHQpO1xyXG5cclxuICAgIGlmIChzaG93U2Nyb2xsQmFyKVxyXG4gICAgICBpZiAoZnVsbEVsZW1IZWlnaHQgPiBfdGhpcy5lbGVtLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0KVxyXG4gICAgICAgIHJlUG9zaXRpb25TY3JvbGxCYXIoY3VycmVudFkpO1xyXG5cclxuICAgIC8vIGxhenlMb2FkLmNoZWNrQW5kU2hvd0ltZygpO1xyXG4gIH07XHJcblxyXG4gIC8vIGRldGVjdCB0aGF0IGlmIGhvdmVyZWQgc2Nyb2xsIGNvbnRhaW5lclxyXG4gIGFkZEV2ZW50KF90aGlzLmVsZW0sIFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcclxuICAgIGlzU2VsZiA9IHRydWU7XHJcbiAgfSk7XHJcbiAgYWRkRXZlbnQoX3RoaXMuZWxlbSwgXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgaXNTZWxmID0gZmFsc2U7XHJcbiAgfSk7XHJcbiAgYWRkRXZlbnQoX3RoaXMuZWxlbSwgXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgaXNTZWxmID0gdHJ1ZTtcclxuICB9KTtcclxuICBhZGRFdmVudChfdGhpcy5lbGVtLCBcInRvdWNoZW5kXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgaXNTZWxmID0gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBpbml0U2Nyb2xsQmFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfdGhpcy5vbGRNb3VzZVkgPSAwO1xyXG4gICAgX3RoaXMuc2Nyb2xsQmFyT3V0ZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIF90aGlzLnNjcm9sbEJhcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgX3RoaXMuc2Nyb2xsQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBfdGhpcy5zY3JvbGxCYXJPdXRlcldyYXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzY3JvbGxCYXJPdXRlcldyYXBcIik7XHJcbiAgICBfdGhpcy5zY3JvbGxCYXJXcmFwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2Nyb2xsQmFyV3JhcFwiKTtcclxuICAgIF90aGlzLnNjcm9sbEJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNjcm9sbEJhclwiKTtcclxuXHJcbiAgICBhZGRFdmVudChfdGhpcy5zY3JvbGxCYXIsIFwibW91c2Vkb3duXCIsIG9uTW91c2VEb3duU2Nyb2xsQmFyKTtcclxuXHJcbiAgICBfdGhpcy5zY3JvbGxCYXJXcmFwLmFwcGVuZENoaWxkKF90aGlzLnNjcm9sbEJhcik7XHJcbiAgICBfdGhpcy5zY3JvbGxCYXJPdXRlcldyYXAuYXBwZW5kQ2hpbGQoX3RoaXMuc2Nyb2xsQmFyV3JhcCk7XHJcbiAgICBfdGhpcy5lbGVtLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoX3RoaXMuc2Nyb2xsQmFyT3V0ZXJXcmFwKTtcclxuICB9O1xyXG5cclxuICB2YXIgcmVQb3NpdGlvblNjcm9sbEJhciA9IGZ1bmN0aW9uKHkpIHtcclxuICAgIHZhciBzY3JvbGxCYXJIZWlnaHQgPSAoMSAtIGVsZW1IZWlnaHQgLyBmdWxsRWxlbUhlaWdodCkgKiAxMDA7XHJcbiAgICBfdGhpcy5zY3JvbGxCYXIuc3R5bGUuaGVpZ2h0ID0gc2Nyb2xsQmFySGVpZ2h0ICsgXCIlXCI7XHJcbiAgICBfdGhpcy5zY3JvbGxCYXJZID0gKF90aGlzLnNjcm9sbEJhcldyYXAub2Zmc2V0SGVpZ2h0IC0gX3RoaXMuc2Nyb2xsQmFyLm9mZnNldEhlaWdodCkgKiAoeSAvIGVsZW1IZWlnaHQpO1xyXG5cclxuICAgIHNldFRyYW5zbGF0ZSggX3RoaXMuc2Nyb2xsQmFyLCAnLTUwJScsIC1fdGhpcy5zY3JvbGxCYXJZLnRvRml4ZWQoNCkgKyBcInB4XCIsIDAgKyBcInB4XCIpO1xyXG4gIH07XHJcblxyXG4gIHZhciBvbk1vdXNlRG93blNjcm9sbEJhciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIF90aGlzLm9sZE1vdXNlWSA9IGUucGFnZVk7XHJcbiAgICBfdGhpcy5jbGlja2VkU2Nyb2xsQmFyID0gdHJ1ZTtcclxuICAgIGFkZENsYXNzKHRoaXMsIFwiYWN0aXZlXCIpO1xyXG4gICAgXHJcbiAgICBhZGRFdmVudChkb2N1bWVudCwgXCJtb3VzZW1vdmVcIiwgb25Nb3ZlU2Nyb2xsQmFyKTtcclxuICAgIGFkZEV2ZW50KGRvY3VtZW50LCBcIm1vdXNldXBcIiwgb25Nb3VzZVVwU2Nyb2xsQmFyKTtcclxuICB9O1xyXG5cclxuICB2YXIgb25Nb3ZlU2Nyb2xsQmFyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKF90aGlzLmNsaWNrZWRTY3JvbGxCYXIpIHtcclxuICAgICAgdmFyIHkgPSBfdGhpcy5vbGRNb3VzZVkgLSBlLnBhZ2VZO1xyXG4gICAgICB0YXJnZXRZICs9IHkgKiAoZnVsbEVsZW1IZWlnaHQgLyBfdGhpcy5lbGVtLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0KTtcclxuXHJcbiAgICAgIHRhcmdldFkgPSBNYXRoLm1heCgtZWxlbUhlaWdodCwgdGFyZ2V0WSk7XHJcbiAgICAgIHRhcmdldFkgPSBNYXRoLm1pbigwLCB0YXJnZXRZKTtcclxuXHJcbiAgICAgIF90aGlzLm9sZE1vdXNlWSA9IGUucGFnZVk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uTW91c2VVcFNjcm9sbEJhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX3RoaXMuY2xpY2tlZFNjcm9sbEJhciA9IGZhbHNlO1xyXG4gICAgcmVtb3ZlQ2xhc3MoX3RoaXMuc2Nyb2xsQmFyLCBcImFjdGl2ZVwiKTtcclxuICAgIFxyXG4gICAgcmVtb3ZlRXZlbnQoZG9jdW1lbnQsIFwibW91c2Vtb3ZlXCIsIG9uTW92ZVNjcm9sbEJhcik7XHJcbiAgICByZW1vdmVFdmVudChkb2N1bWVudCwgXCJtb3VzZXVwXCIsIG9uTW91c2VVcFNjcm9sbEJhcik7XHJcbiAgfTtcclxuXHJcbiAgdmFyIHJlc2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjdXJyZW50WSA9IDA7XHJcbiAgICB0YXJnZXRZID0gMDtcclxuICB9O1xyXG5cclxuICB2YXIgcmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKF90aGlzLmVsZW0ucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgIGZ1bGxFbGVtSGVpZ2h0ID0gX3RoaXMuZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgIGVsZW1XaWR0aCA9IF90aGlzLmVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBfdGhpcy5lbGVtLnBhcmVudE5vZGUub2Zmc2V0V2lkdGg7XHJcbiAgICAgIGVsZW1IZWlnaHQgPSBfdGhpcy5lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtIF90aGlzLmVsZW0ucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoc2hvd1Njcm9sbEJhcikge1xyXG4gICAgICAgIGlmIChmdWxsRWxlbUhlaWdodCA+IHBhcmVudEhlaWdodCkge1xyXG4gICAgICAgICAgaWYgKGhhc0NsYXNzKF90aGlzLnNjcm9sbEJhck91dGVyV3JhcCwgXCJoaWRlXCIpKVxyXG4gICAgICAgICAgICByZW1vdmVDbGFzcyhfdGhpcy5zY3JvbGxCYXJPdXRlcldyYXAsIFwiaGlkZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCFoYXNDbGFzcyhfdGhpcy5zY3JvbGxCYXJPdXRlcldyYXAsIFwiaGlkZVwiKSlcclxuICAgICAgICAgICAgYWRkQ2xhc3MoX3RoaXMuc2Nyb2xsQmFyT3V0ZXJXcmFwLCBcImhpZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIHRvID0gZnVuY3Rpb24oeSkge1xyXG4gICAgZWxlbUhlaWdodCA9XHJcbiAgICAgIF90aGlzLmVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC1cclxuICAgICAgX3RoaXMuZWxlbS5wYXJlbnROb2RlLm9mZnNldEhlaWdodDtcclxuICAgIHRhcmdldFkgPSBNYXRoLm1heCgtZWxlbUhlaWdodCwgeSk7XHJcbiAgfTtcclxuICB2YXIgc2V0ID0gZnVuY3Rpb24oeSkge1xyXG4gICAgY3VycmVudFkgPSB5O1xyXG4gICAgdGFyZ2V0WSA9IHk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdnMgPSBWaXJ0dWFsU2Nyb2xsKCk7XHJcbiAgY29uc3QgZmkgPSBGcmFtZUltcHVsc2UoKTtcclxuICB2YXIgaXNPbiA9IGZhbHNlO1xyXG4gIHZhciBvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaXNPbiA9IHRydWU7XHJcbiAgICByZWZyZXNoKCk7XHJcbiAgICBvblJlc2l6ZSgpO1xyXG4gICAgaW5pdFNjcm9sbEJhcigpO1xyXG4gICAgb25TaG93U2Nyb2xsQmFyKCk7XHJcbiAgICB2cy5vbihvblNjcm9sbCk7XHJcbiAgICBmaS5vbihvbkFuaW0pO1xyXG4gIH07XHJcblxyXG4gIHZhciBvZmYgPSBmdW5jdGlvbigpIHtcclxuICAgIGlzT24gPSBmYWxzZTtcclxuICAgIHZzLm9mZihvblNjcm9sbCk7XHJcbiAgICBmaS5vZmYob25BbmltKTtcclxuICAgIG9uSGlkZVNjcm9sbEJhcigpO1xyXG4gICAgZGVzdHJveSgpO1xyXG4gIH07XHJcbiAgXHJcbiAgdmFyIGRlc3Ryb3kgPSBmdW5jdGlvbigpe1xyXG4gICAgLy8gcmVtb3ZlRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XHJcbiAgICBpZihfdGhpcy5zY3JvbGxCYXJPdXRlcldyYXApe1xyXG4gICAgICByZW1vdmVFdmVudChfdGhpcy5zY3JvbGxCYXIsIFwibW91c2Vkb3duXCIsIG9uTW91c2VEb3duU2Nyb2xsQmFyKTtcclxuICAgICAgX3RoaXMuc2Nyb2xsQmFyT3V0ZXJXcmFwLnJlbW92ZSgpO1xyXG4gICAgICBfdGhpcy5zY3JvbGxCYXJPdXRlcldyYXAgPSBudWxsO1xyXG4gICAgICBfdGhpcy5zY3JvbGxCYXJXcmFwID0gbnVsbDtcclxuICAgICAgX3RoaXMuc2Nyb2xsQmFyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcGFyZW50SGVpZ2h0ID0gX3RoaXMuZWxlbS5wYXJlbnROb2RlLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICBpZihpc01vYmlsZSgpKSB7XHJcbiAgICAgIGlmKGlzT24pIHtcclxuICAgICAgICBvZmYoKTtcclxuICAgICAgICBzZXRUcmFuc2xhdGUoX3RoaXMuZWxlbSwgMCArIFwicHhcIiwgMCArIFwicHhcIiwgMCArIFwicHhcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmKCFpc09uKSB7XHJcbiAgICAgICAgaW5pdFNjcm9sbEJhcigpO1xyXG4gICAgICAgIG9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoZGlzYWJsZSkgb25FbmFibGUoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHZhciBvbkRpc2FibGUgPSBmdW5jdGlvbigpIHtcclxuICAgIGRpc2FibGUgPSB0cnVlO1xyXG4gIH07XHJcbiAgdmFyIG9uRW5hYmxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBkaXNhYmxlID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uU2hvd1Njcm9sbEJhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgc2hvd1Njcm9sbEJhciA9IHRydWU7XHJcbiAgICByZW1vdmVDbGFzcyhfdGhpcy5zY3JvbGxCYXJXcmFwLCdoaWRlJyk7XHJcbiAgfTtcclxuICB2YXIgb25IaWRlU2Nyb2xsQmFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICBzaG93U2Nyb2xsQmFyID0gZmFsc2U7XHJcbiAgICBpZihfdGhpcy5zY3JvbGxCYXJXcmFwKSBhZGRDbGFzcyhfdGhpcy5zY3JvbGxCYXJXcmFwLCdoaWRlJyk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmKCFpc01vYmlsZSgpKXtcclxuICAgICAgb24oKTtcclxuICAgIH1cclxuICAgIGFkZEV2ZW50KHdpbmRvdywgXCJyZXNpemVcIiwgb25SZXNpemUpO1xyXG4gIH07XHJcblxyXG4gIGluaXQoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2V0OiByZXNldCxcclxuICAgIHJlZnJlc2g6IHJlZnJlc2gsXHJcbiAgICBvblJlc2l6ZTogb25SZXNpemUsXHJcbiAgICBzZXQ6IHNldCxcclxuICAgIHRvOiB0byxcclxuICAgIG9uOiBvbixcclxuICAgIG9mZjogb2ZmLFxyXG4gICAgZGlzYWJsZTogb25EaXNhYmxlLFxyXG4gICAgZW5hYmxlOiBvbkVuYWJsZSxcclxuICAgIHNob3dTY3JvbGxCYXI6IG9uU2hvd1Njcm9sbEJhcixcclxuICAgIGhpZGVTY3JvbGxCYXI6IG9uSGlkZVNjcm9sbEJhcixcclxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQcmV2aW91cyA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xyXG4gIH0pO1xyXG4gIHJldHVybiByZWYuY3VycmVudDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=