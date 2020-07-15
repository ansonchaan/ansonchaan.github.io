webpackHotUpdate("static\\development\\pages\\_app.js",{

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
  if (roundedNumber >= 16) // if(!isMobile())
    document.documentElement.style.fontSize = roundedNumber + "px";else document.documentElement.style.fontSize = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsRnVuYy5qcyJdLCJuYW1lcyI6WyJwcmludCIsInN0YXRlIiwiY29sb3IiLCJ0ZXh0IiwibXNnIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJhZGp1c3RGb250U2l6ZSIsImJhc2VGb250UmF0aW8iLCJmb250TXVsdGlwbGllciIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJvdW5kZWROdW1iZXIiLCJNYXRoIiwicm91bmQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiZm9udFNpemUiLCJnZXREZXZpY2UiLCJ3IiwiZCIsImJvZHkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsaWVudFdpZHRoIiwiZGV2aWNlVHlwZSIsImEiLCJ0ZXN0Iiwic3Vic3RyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJlIiwiaXNNb2JpbGUiLCJoYXNDbGFzcyIsImVsIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJtYXRjaCIsIlJlZ0V4cCIsImFkZENsYXNzIiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJpc05vZGVsaXN0IiwibGVuZ3RoIiwiaXRlbSIsImVscyIsImkiLCJyZW1vdmUiLCJyZWciLCJyZXBsYWNlIiwiYWRkRXZlbnQiLCJvYmoiLCJ0eXBlIiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJyZW1vdmVFdmVudCIsImZ1bmMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VHJhbnNsYXRlIiwiZWxlbSIsIngiLCJ5IiwieiIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiRnJhbWVJbXB1bHNlIiwidmVuZG9ycyIsInIiLCJsaXN0ZW5lcnMiLCJudW1MaXN0ZW5lcnMiLCJ0b1JlbW92ZSIsIm51bVRvUmVtb3ZlIiwibGFzdFRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIm1heCIsImlkIiwic2V0VGltZW91dCIsInJ1biIsImRlbHRhVGltZSIsImNhbGwiLCJpbmRleFRvUmVtb3ZlIiwiaiIsInB1c2giLCJzcGxpY2UiLCJvbiIsImYiLCJzY3JvbGxUbyIsImluZGV4T2YiLCJvZmYiLCJnZXRMaXN0ZW5lcnMiLCJWaXJ0dWFsU2Nyb2xsIiwidnMiLCJpbml0aWFsaXplZCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJ0b3VjaE11bHQiLCJmaXJlZm94TXVsdCIsImtleVN0ZXAiLCJtb3VzZU11bHQiLCJib2R5VG91Y2hBY3Rpb24iLCJoYXNXaGVlbEV2ZW50IiwiaGFzTW91c2VXaGVlbEV2ZW50IiwiaGFzVG91Y2giLCJoYXNLZXlEb3duIiwiaGFzVG91Y2hXaW4iLCJtc01heFRvdWNoUG9pbnRzIiwiaGFzUG9pbnRlciIsIm1zUG9pbnRlckVuYWJsZWQiLCJpc0ZpcmVmb3giLCJldmVudCIsImRlbHRhWCIsImRlbHRhWSIsIm9yaWdpbmFsRXZlbnQiLCJrIiwibGVmdCIsInJpZ2h0IiwidXAiLCJkb3duIiwiaW5pdExpc3RlbmVycyIsIm9wdGlvbnMiLCJvcHQiLCJkZXN0cm95TGlzdGVuZXJzIiwibG9ja1RvdWNoIiwicHJldmVudERlZmF1bHQiLCJub3RpZnkiLCJvbldoZWVsIiwid2hlZWxEZWx0YVgiLCJ3aGVlbERlbHRhWSIsImRlbHRhTW9kZSIsIm9uTW91c2VXaGVlbCIsIndoZWVsRGVsdGEiLCJvblRvdWNoU3RhcnQiLCJ0IiwidGFyZ2V0VG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJvblRvdWNoTW92ZSIsIm9uS2V5RG93biIsImtleUNvZGUiLCJtc1RvdWNoQWN0aW9uIiwiU21vb3RoU2Nyb2xsIiwic2Nyb2xsRnVuYyIsIl90aGlzIiwiZnVsbEVsZW1IZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJwYXJlbnRIZWlnaHQiLCJwYXJlbnROb2RlIiwib2Zmc2V0SGVpZ2h0IiwiZWxlbVdpZHRoIiwiZWxlbUhlaWdodCIsImVhc2UiLCJtdWx0IiwidGFyZ2V0WCIsInRhcmdldFkiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwic2hvd1Njcm9sbEJhciIsImRpc2FibGUiLCJpc1NlbGYiLCJvblNjcm9sbCIsIm1pbiIsIm9uQW5pbSIsInRvRml4ZWQiLCJyZWZyZXNoIiwicmVQb3NpdGlvblNjcm9sbEJhciIsImluaXRTY3JvbGxCYXIiLCJvbGRNb3VzZVkiLCJzY3JvbGxCYXJPdXRlcldyYXAiLCJjcmVhdGVFbGVtZW50Iiwic2Nyb2xsQmFyV3JhcCIsInNjcm9sbEJhciIsInNldEF0dHJpYnV0ZSIsIm9uTW91c2VEb3duU2Nyb2xsQmFyIiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxCYXJIZWlnaHQiLCJzY3JvbGxCYXJZIiwiY2xpY2tlZFNjcm9sbEJhciIsIm9uTW92ZVNjcm9sbEJhciIsIm9uTW91c2VVcFNjcm9sbEJhciIsInJlc2V0Iiwib2Zmc2V0V2lkdGgiLCJ0byIsInNldCIsImZpIiwiaXNPbiIsIm9uUmVzaXplIiwib25TaG93U2Nyb2xsQmFyIiwib25IaWRlU2Nyb2xsQmFyIiwiZGVzdHJveSIsIm9uRW5hYmxlIiwib25EaXNhYmxlIiwiaW5pdCIsImVuYWJsZSIsImhpZGVTY3JvbGxCYXIiLCJ1c2VQcmV2aW91cyIsInZhbHVlIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWVDLElBQWYsRUFBdUI7QUFDMUMsWUFBb0I7QUFDbEIsUUFBTUMsR0FBRyxHQUFJLE9BQU9ELElBQVAsSUFBZSxRQUFoQixHQUEyQkUsSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWYsQ0FBM0IsR0FBa0RBLElBQUksSUFB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QUFXO0FBQUE7O0FBQ3BDLE1BQU1DLEdBQUcsR0FBR0Msb0RBQU0sRUFBbEI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLE9BQUcsQ0FBQ0csT0FBSixHQUFjSixLQUFkO0FBQ0QsR0FGUSxDQUFUO0FBR0EsU0FBT0MsR0FBRyxDQUFDRyxPQUFYO0FBQ0QsQ0FOTTs7R0FBTUwsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy42N2Q0MGJkZWE5ZWEzZDkzNjk2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWYgLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vXHJcbi8vXHRzdHlsaW5nIGNvbnNvbGUubG9nXHJcbi8vXHJcbmV4cG9ydCBjb25zdCBwcmludCA9IChzdGF0ZSwgY29sb3IsIHRleHQpID0+e1xyXG4gIGlmKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY29uc3QgbXNnID0gKHR5cGVvZiB0ZXh0ID09ICdvYmplY3QnKT8gSlNPTi5zdHJpbmdpZnkodGV4dCkgOiB0ZXh0IHx8ICcnO1xyXG4gICAgY29uc29sZS5sb2coJyVjJytzdGF0ZSsnJWMgJXMnLCdjb2xvcjp3aGl0ZTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7YmFja2dyb3VuZDonK2NvbG9yKyc7cGFkZGluZzo0cHggNnB4IDNweCA1cHg7Ym9yZGVyLXJhZGl1czozcHg7JywgJycsIG1zZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vL1xyXG4vLyBlbmxhcmdlIGZvbnQgc2l6ZSBvbiBsYXJnZSBzY3JlZW5cclxuLy9cclxuZXhwb3J0IGNvbnN0IGFkanVzdEZvbnRTaXplID0gKGJhc2VGb250UmF0aW8gPSAxNiAvIDE0NDAsIGZvbnRNdWx0aXBsaWVyID0gMC44NDM3NSkgPT4ge1xyXG4gIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY29uc3Qgcm91bmRlZE51bWJlciA9IE1hdGgucm91bmQoXHJcbiAgICBiYXNlRm9udFJhdGlvICogd2lkdGggKiBmb250TXVsdGlwbGllclxyXG4gICk7XHJcblxyXG4gIGlmIChyb3VuZGVkTnVtYmVyID49IDE2KVxyXG4gIC8vIGlmKCFpc01vYmlsZSgpKVxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSByb3VuZGVkTnVtYmVyICsgXCJweFwiO1xyXG4gIGVsc2UgXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwiXCI7XHJcbn07XHJcblxyXG4vL1xyXG4vLyBnZXQgZGV2aWNlIHR5cGVcclxuLy9cclxuZXhwb3J0IGNvbnN0IGdldERldmljZSA9ICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHcgPSB3aW5kb3csXHJcbiAgICAgICAgZCA9IGRvY3VtZW50LFxyXG4gICAgICAgIGRvY3VtZW50RWxlbWVudCA9IGQuZG9jdW1lbnRFbGVtZW50LFxyXG4gICAgICAgIGJvZHkgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcclxuICAgICAgbGV0IHdpZHRoID1cclxuICAgICAgICB3LmlubmVyV2lkdGggfHwgZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgIGxldCBkZXZpY2VUeXBlID0gXCJcIjtcclxuXHJcbiAgICAgIChmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pLnRlc3QoXHJcbiAgICAgICAgICAgIGFcclxuICAgICAgICAgICkgfHxcclxuICAgICAgICAgIC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3LShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtLXxjZWxsfGNodG18Y2xkY3xjbWQtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8LWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseSgtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmLTV8Zy1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkLShtfHB8dCl8aGVpLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzLWN8aHQoYygtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aS0oMjB8Z298bWEpfGkyMzB8aWFjKCB8LXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHwtW2Etd10pfGxpYnd8bHlueHxtMS13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bS1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dCgtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSktfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3wtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdC1nfHFhLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8LVsyLTddfGktKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aC18b298cC0pfHNka1xcL3xzZShjKC18MHwxKXw0N3xtY3xuZHxyaSl8c2doLXxzaGFyfHNpZSgtfG0pfHNrLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aC18di18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2wtfHRkZy18dGVsKGl8bSl8dGltLXx0LW1vfHRvKHBsfHNoKXx0cyg3MHxtLXxtM3xtNSl8dHgtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118LXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhcy18eW91cnx6ZXRvfHp0ZS0vaS50ZXN0KFxyXG4gICAgICAgICAgICBhLnN1YnN0cigwLCA0KVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKHdpZHRoID4gNzAwKSBkZXZpY2VUeXBlID0gXCJ0YWJsZXRcIjtcclxuICAgICAgICAgIGVsc2UgZGV2aWNlVHlwZSA9IFwibW9iaWxlXCI7XHJcbiAgICAgICAgfSBlbHNlIGRldmljZVR5cGUgPSBcImRlc2t0b3BcIjtcclxuICAgICAgfSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSk7XHJcblxyXG4gICAgICByZXR1cm4gZGV2aWNlVHlwZTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIFwiZGVza3RvcFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBpc01vYmlsZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDI0O1xyXG59O1xyXG5cclxuY29uc3QgaGFzQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XHJcbiAgaWYgKGVsLmNsYXNzTGlzdCkgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xyXG4gIGVsc2VcclxuICAgIHJldHVybiAhIWVsLmNsYXNzTmFtZS5tYXRjaChuZXcgUmVnRXhwKFwiKFxcXFxzfF4pXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKSk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcclxuICBpZiAoZWwuY2xhc3NMaXN0KSBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgZWxzZSBpZiAoIWhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcclxuICBjb25zdCBpc05vZGVsaXN0ID1cclxuICAgIHR5cGVvZiBlbC5sZW5ndGggIT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgZWwuaXRlbSAhPSBcInVuZGVmaW5lZFwiO1xyXG4gIGlmIChpc05vZGVsaXN0KSB7XHJcbiAgICBjb25zdCBlbHMgPSBlbDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgZWxzW2ldOyBpKyspIHtcclxuICAgICAgaWYgKGVsc1tpXS5jbGFzc0xpc3QpIGVsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgIGVsc2UgaWYgKGhhc0NsYXNzKGVsc1tpXSwgY2xhc3NOYW1lKSkge1xyXG4gICAgICAgIGxldCByZWcgPSBuZXcgUmVnRXhwKFwiKFxcXFxzfF4pXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKTtcclxuICAgICAgICBlbHNbaV0uY2xhc3NOYW1lID0gZWxzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKHJlZywgXCIgXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QpIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgIGVsc2UgaWYgKGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XHJcbiAgICAgIGxldCByZWcgPSBuZXcgUmVnRXhwKFwiKFxcXFxzfF4pXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKTtcclxuICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UocmVnLCBcIiBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy9cclxuLy8gQWRkIGFuZCBSZW1vdmUgRXZlbnRcclxuLy9cclxuY29uc3QgYWRkRXZlbnQgPSBmdW5jdGlvbihvYmosIHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XHJcblxyXG4gIGlmIChvYmouYWRkRXZlbnRMaXN0ZW5lcikgb2JqLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuICBlbHNlIGlmIChvYmouYXR0YWNoRXZlbnQpIG9iai5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBjYWxsYmFjayk7XHJcbiAgZWxzZSBvYmpbXCJvblwiICsgdHlwZV0gPSBjYWxsYmFjaztcclxufTtcclxuY29uc3QgcmVtb3ZlRXZlbnQgPSBmdW5jdGlvbihvYmosIHR5cGUsIGZ1bmMpIHtcclxuICBpZiAob2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIpIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMsIGZhbHNlKTtcclxufTtcclxuXHJcbmNvbnN0IHNldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGVsZW0sIHgsIHksIHopIHtcclxuICBlbGVtLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIsXCIgKyB6ICsgXCIpXCI7XHJcbiAgZWxlbS5zdHlsZS5tc1RyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIsXCIgKyB6ICsgXCIpXCI7XHJcbiAgZWxlbS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwiLFwiICsgeSArIFwiLFwiICsgeiArIFwiKVwiO1xyXG59O1xyXG5cclxuXHJcblxyXG5jb25zdCBGcmFtZUltcHVsc2UgPSBmdW5jdGlvbigpe1xyXG4gIHZhciB2ZW5kb3JzID0gW1wid2Via2l0XCIsIFwibW96XCJdO1xyXG5cclxuICB2YXIgciA9IHt9O1xyXG4gIHZhciBsaXN0ZW5lcnMgPSBbXSxcclxuICAgIG51bUxpc3RlbmVycyA9IDAsXHJcbiAgICB0b1JlbW92ZSA9IFtdLFxyXG4gICAgbnVtVG9SZW1vdmU7XHJcbiAgdmFyIGxhc3RUaW1lID0gMDtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKytpKSB7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcclxuICB9XHJcblxyXG4gIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcclxuICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcclxuICAgICAgfSwgdGltZVRvQ2FsbCk7XHJcbiAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xyXG4gICAgICByZXR1cm4gaWQ7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdmFyIHJ1biA9IGZ1bmN0aW9uKGRlbHRhVGltZSkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bik7XHJcblxyXG4gICAgaWYgKG51bUxpc3RlbmVycyA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtTGlzdGVuZXJzOyBpKyspIHtcclxuICAgICAgbGlzdGVuZXJzW2ldLmNhbGwoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnVtVG9SZW1vdmUgPiAwKSB7XHJcbiAgICAgIHZhciBpbmRleFRvUmVtb3ZlID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRvUmVtb3ZlLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldID09PSB0b1JlbW92ZVtqXSkgaW5kZXhUb1JlbW92ZS5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleFRvUmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleFRvUmVtb3ZlW2ldLCAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbnVtTGlzdGVuZXJzID0gbGlzdGVuZXJzLmxlbmd0aDtcclxuICAgICAgdG9SZW1vdmUgPSBbXTtcclxuICAgICAgbnVtVG9SZW1vdmUgPSAwO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHIub24gPSBmdW5jdGlvbihmKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgaWYgKGxpc3RlbmVycy5pbmRleE9mKGYpID4gLTEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGlzdGVuZXJzLnB1c2goZik7XHJcbiAgICBudW1MaXN0ZW5lcnMgPSBsaXN0ZW5lcnMubGVuZ3RoO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJGcmFtZUltcHVsc2UgPiBuZXcgbGlzdGVuZXIgPiB0b3RhbCA6XCIsIG51bUxpc3RlbmVycyk7XHJcbiAgfTtcclxuXHJcbiAgci5vZmYgPSBmdW5jdGlvbihmKSB7XHJcbiAgICAvL3RvUmVtb3ZlLnB1c2goZik7XHJcbiAgICAvL251bVRvUmVtb3ZlID0gdG9SZW1vdmUubGVuZ3RoO1xyXG4gICAgdmFyIGkgPSBsaXN0ZW5lcnMuaW5kZXhPZihmKTtcclxuICAgIGlmIChpID09PSAtMSkgcmV0dXJuO1xyXG4gICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcclxuICAgIG51bUxpc3RlbmVycyA9IGxpc3RlbmVycy5sZW5ndGg7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZyYW1lSW1wdWxzZSA+IHNjaGVkdWxlZCByZW1vdmFsID4gdG90YWwgOlwiLCBudW1MaXN0ZW5lcnMpO1xyXG4gIH07XHJcblxyXG4gIHIuZ2V0TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gbGlzdGVuZXJzO1xyXG4gIH07XHJcblxyXG4gIHJ1bigpO1xyXG4gIHJldHVybiByO1xyXG59O1xyXG5cclxuXHJcbnZhciBWaXJ0dWFsU2Nyb2xsID0gZnVuY3Rpb24oKXtcclxuICB2YXIgdnMgPSB7fTtcclxuXHJcbiAgdmFyIG51bUxpc3RlbmVycyxcclxuICAgIGxpc3RlbmVycyA9IFtdLFxyXG4gICAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHRvdWNoU3RhcnRYLCB0b3VjaFN0YXJ0WTtcclxuXHJcbiAgLy8gWyBUaGVzZSBzZXR0aW5ncyBjYW4gYmUgY3VzdG9taXplZCB3aXRoIHRoZSBvcHRpb25zKCkgZnVuY3Rpb24gYmVsb3cgXVxyXG4gIC8vIE11dGlwbHkgdGhlIHRvdWNoIGFjdGlvbiBieSB0d28gbWFraW5nIHRoZSBzY3JvbGwgYSBiaXQgZmFzdGVyIHRoYW4gZmluZ2VyIG1vdmVtZW50XHJcbiAgdmFyIHRvdWNoTXVsdCA9IDI7XHJcbiAgLy8gRmlyZWZveCBvbiBXaW5kb3dzIG5lZWRzIGEgYm9vc3QsIHNpbmNlIHNjcm9sbGluZyBpcyB2ZXJ5IHNsb3dcclxuICB2YXIgZmlyZWZveE11bHQgPSAxNTtcclxuICAvLyBIb3cgbWFueSBwaXhlbHMgdG8gbW92ZSB3aXRoIGVhY2gga2V5IHByZXNzXHJcbiAgdmFyIGtleVN0ZXAgPSAxMjA7XHJcbiAgLy8gR2VuZXJhbCBtdWx0aXBsaWVyIGZvciBhbGwgbW91c2Vod2VlbCBpbmNsdWRpbmcgRkZcclxuICB2YXIgbW91c2VNdWx0ID0gMTtcclxuXHJcbiAgdmFyIGJvZHlUb3VjaEFjdGlvbjtcclxuXHJcbiAgdmFyIGhhc1doZWVsRXZlbnQgPSBcIm9ud2hlZWxcIiBpbiBkb2N1bWVudDtcclxuICB2YXIgaGFzTW91c2VXaGVlbEV2ZW50ID0gXCJvbm1vdXNld2hlZWxcIiBpbiBkb2N1bWVudDtcclxuICB2YXIgaGFzVG91Y2ggPSBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50O1xyXG4gIHZhciBoYXNLZXlEb3duID0gXCJvbmtleWRvd25cIiBpbiBkb2N1bWVudDtcclxuXHJcbiAgdmFyIGhhc1RvdWNoV2luID1cclxuICAgIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICYmIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMTtcclxuICB2YXIgaGFzUG9pbnRlciA9ICEhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkO1xyXG5cclxuICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSA+IC0xO1xyXG5cclxuICB2YXIgZXZlbnQgPSB7XHJcbiAgICB5OiAwLFxyXG4gICAgeDogMCxcclxuICAgIGRlbHRhWDogMCxcclxuICAgIGRlbHRhWTogMCxcclxuICAgIG9yaWdpbmFsRXZlbnQ6IG51bGxcclxuICB9O1xyXG5cclxuICB2YXIgayA9IHtcclxuICAgIGxlZnQ6IDM3LFxyXG4gICAgcmlnaHQ6IDM5LFxyXG4gICAgdXA6IDM4LFxyXG4gICAgZG93bjogNDBcclxuICB9O1xyXG5cclxuICB2cy5vbiA9IGZ1bmN0aW9uKGYpIHtcclxuICAgIGlmICghaW5pdGlhbGl6ZWQpIGluaXRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICB2YXIgaSA9IGxpc3RlbmVycy5pbmRleE9mKGYpO1xyXG4gICAgaWYgKGkgIT09IC0xKSByZXR1cm47XHJcblxyXG4gICAgbGlzdGVuZXJzLnB1c2goZik7XHJcbiAgICBudW1MaXN0ZW5lcnMgPSBsaXN0ZW5lcnMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqXHRAbWV0aG9kIG9wdGlvbnNcclxuICAgKlx0QG1lbWJlcm9mIFZpcnR1YWxTY3JvbGxcclxuICAgKlx0QHN0YXRpY1xyXG4gICAqXHJcbiAgICpcdEBwYXJhbSB7T2JqZWN0fSBvcHQgLSBvYmplY3QgbGl0ZXJhbCBjb250YWluaW5nIG9uZSBvciBtb3JlIG9wdGlvbnMgZnJvbSB0aGUgbGlzdCBhYm92ZSwgc3BlY2lmaWVkIGFzIHByb3BlcnRpZXMuXHJcbiAgICpcclxuICAgKlx0QGRlc2NyaXB0aW9uIFNldHMgY3VzdG9tIHBhcmFtZXRlcnMgdG8gdGhlIFZpcnR1YWxTY3JvbGwgKGdsb2JhbGx5KS4gVGhlIGZvbGxvd2luZyBvcHRpb25zIGFyZSBzdXBwb3J0ZWQ6XHJcbiAgICpcclxuICAgKlx0PHVsPlxyXG4gICAqXHQ8bGk+dG91Y2hNdWx0IChkZWZhdWx0OiAyKSAtIG11dGlwbHkgdGhlIHRvdWNoIGFjdGlvbiB0byBtYWtlIHRoZSBzY3JvbGwgYSBmYXN0ZXIvc2xvd2VyIHRoYW4gZmluZ2VyIG1vdmVtZW50PC9saT5cclxuICAgKlx0PGxpPmZpcmVmb3hNdWx0IChkZWZhaWx0OiAxNSktIEZpcmVmb3ggb24gV2luZG93cyBuZWVkcyBhIGJvb3N0LCBzaW5jZSBzY3JvbGxpbmcgaXMgdmVyeSBzbG93PC9saT5cclxuICAgKlx0PGxpPmtleVN0ZXAgKGRlZmF1bHQ6IDEyMCkgLSBzcGVjaWZpZWQgaG93IG1hbnkgcGl4ZWxzIHRvIG1vdmUgd2l0aCBlYWNoIGtleSBwcmVzczwvbGk+XHJcbiAgICpcdDxsaT5tb3VzZU11bHQgKGRlZmF1bHQ6IDEpIC0gZ2VuZXJhbCBtdWx0aXBsaWVyIGZvciBhbGwgbW91c2Vod2VlbCBldmVudHMgaW5jbHVkaW5nIEZGPC9saT5cclxuICAgKlx0PC91bD5cclxuICAgKi9cclxuICB2cy5vcHRpb25zID0gZnVuY3Rpb24ob3B0KSB7XHJcbiAgICBrZXlTdGVwID0gb3B0LmtleVN0ZXAgfHwgMTIwO1xyXG4gICAgZmlyZWZveE11bHQgPSBvcHQuZmlyZWZveE11bHQgfHwgMTU7XHJcbiAgICB0b3VjaE11bHQgPSBvcHQudG91Y2hNdWx0IHx8IDI7XHJcbiAgICBtb3VzZU11bHQgPSBvcHQubW91c2VNdWx0IHx8IDE7XHJcbiAgfTtcclxuXHJcbiAgdnMub2ZmID0gZnVuY3Rpb24oZikge1xyXG4gICAgdmFyIGkgPSBsaXN0ZW5lcnMuaW5kZXhPZihmKTtcclxuICAgIGlmIChpID09PSAtMSkgcmV0dXJuO1xyXG5cclxuICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICBudW1MaXN0ZW5lcnMgPSBsaXN0ZW5lcnMubGVuZ3RoO1xyXG4gICAgaWYgKG51bUxpc3RlbmVycyA8PSAwKSBkZXN0cm95TGlzdGVuZXJzKCk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICpcdEBtZXRob2QgbG9ja1RvdWNoXHJcbiAgICpcdEBtZW1iZXJvZiBWaXJ0dWFsU2Nyb2xsXHJcbiAgICpcdEBzdGF0aWNcclxuICAgKlxyXG4gICAqXHRAZGVzY3JpcHRpb24gRm9yIFZpcnR1YWxTY3JvbGwgdG8gd29yayBvbiBtb2JpbGUsIHRoZSBkZWZhdWx0IHN3aXBlLXRvLXNjcm9sbCBiZWhhdmlvciBuZWVkcyB0byBiZSB0dXJuZWQgb2ZmLlxyXG4gICAqXHRUaGlzIGZ1bmN0aW9uIHdpbGwgdGFrZSBjYXJlIG9mIHRoYXQsIGhvd2V2ZXIgaXQncyBhIGZhaWx0IHNpbXBsZSBtZWNoYW5pc20gLSBzZWUgaW4gdGhlIHNvdXJjZSBjb2RlLCBsaW5rZWQgYmVsb3cuXHJcbiAgICovXHJcbiAgdnMubG9ja1RvdWNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG5vdGlmeSA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGV2ZW50LnggKz0gZXZlbnQuZGVsdGFYO1xyXG4gICAgZXZlbnQueSArPSBldmVudC5kZWx0YVk7XHJcbiAgICBldmVudC5vcmlnaW5hbEV2ZW50ID0gZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUxpc3RlbmVyczsgaSsrKSB7XHJcbiAgICAgIGxpc3RlbmVyc1tpXShldmVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uV2hlZWwgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyBJbiBDaHJvbWUgYW5kIGluIEZpcmVmb3ggKGF0IGxlYXN0IHRoZSBuZXcgb25lKVxyXG4gICAgZXZlbnQuZGVsdGFYID0gKGUud2hlZWxEZWx0YVggfHwgZS5kZWx0YVgpIHx8IChlLndoZWVsRGVsdGFZIHx8IGUuZGVsdGFZKSAqIC0xO1xyXG4gICAgZXZlbnQuZGVsdGFZID0gZS53aGVlbERlbHRhWSB8fCBlLmRlbHRhWSAqIC0xO1xyXG5cclxuICAgIC8vIGZvciBvdXIgcHVycG9zZSBkZWx0YW1vZGUgPSAxIG1lYW5zIHVzZXIgaXMgb24gYSB3aGVlbCBtb3VzZSwgbm90IHRvdWNoIHBhZFxyXG4gICAgLy8gcmVhbCBtZWFuaW5nOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2hlZWxFdmVudCNEZWx0YV9tb2Rlc1xyXG4gICAgaWYgKGlzRmlyZWZveCAmJiBlLmRlbHRhTW9kZSA9PT0gMSkge1xyXG4gICAgICBldmVudC5kZWx0YVggKj0gZmlyZWZveE11bHQ7XHJcbiAgICAgIGV2ZW50LmRlbHRhWSAqPSBmaXJlZm94TXVsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5kZWx0YVggKj0gbW91c2VNdWx0O1xyXG4gICAgZXZlbnQuZGVsdGFZICo9IG1vdXNlTXVsdDtcclxuXHJcbiAgICBub3RpZnkoZSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uTW91c2VXaGVlbCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vIEluIFNhZmFyaSwgSUUgYW5kIGluIENocm9tZSBpZiAnd2hlZWwnIGlzbid0IGRlZmluZWRcclxuICAgIGV2ZW50LmRlbHRhWCA9IGUud2hlZWxEZWx0YVggPyBlLndoZWVsRGVsdGFYIDogMDtcclxuICAgIGV2ZW50LmRlbHRhWSA9IGUud2hlZWxEZWx0YVkgPyBlLndoZWVsRGVsdGFZIDogZS53aGVlbERlbHRhO1xyXG5cclxuICAgIG5vdGlmeShlKTtcclxuICB9O1xyXG5cclxuICB2YXIgb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIHQgPSBlLnRhcmdldFRvdWNoZXMgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xyXG4gICAgdG91Y2hTdGFydFggPSB0LnBhZ2VYO1xyXG4gICAgdG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xyXG4gIH07XHJcblxyXG4gIHZhciBvblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTsgLy8gPCBUaGlzIG5lZWRzIHRvIGJlIG1hbmFnZWQgZXh0ZXJuYWxseVxyXG4gICAgdmFyIHQgPSBlLnRhcmdldFRvdWNoZXMgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xyXG5cclxuICAgIGV2ZW50LmRlbHRhWCA9ICh0LnBhZ2VYIC0gdG91Y2hTdGFydFgpICogdG91Y2hNdWx0O1xyXG4gICAgZXZlbnQuZGVsdGFZID0gKHQucGFnZVkgLSB0b3VjaFN0YXJ0WSkgKiB0b3VjaE11bHQ7XHJcblxyXG4gICAgdG91Y2hTdGFydFggPSB0LnBhZ2VYO1xyXG4gICAgdG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xyXG5cclxuICAgIG5vdGlmeShlKTtcclxuICB9O1xyXG5cclxuICB2YXIgb25LZXlEb3duID0gZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gMzcgbGVmdCBhcnJvdywgMzggdXAgYXJyb3csIDM5IHJpZ2h0IGFycm93LCA0MCBkb3duIGFycm93XHJcbiAgICBldmVudC5kZWx0YVggPSBldmVudC5kZWx0YVkgPSAwO1xyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBrLmxlZnQ6XHJcbiAgICAgICAgZXZlbnQuZGVsdGFYID0gLWtleVN0ZXA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugay5yaWdodDpcclxuICAgICAgICBldmVudC5kZWx0YVggPSBrZXlTdGVwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGsudXA6XHJcbiAgICAgICAgZXZlbnQuZGVsdGFZID0ga2V5U3RlcDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBrLmRvd246XHJcbiAgICAgICAgZXZlbnQuZGVsdGFZID0gLWtleVN0ZXA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5KGUpO1xyXG4gIH07XHJcblxyXG4gIHZhciBpbml0TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoaGFzV2hlZWxFdmVudCkgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG9uV2hlZWwpO1xyXG4gICAgaWYgKGhhc01vdXNlV2hlZWxFdmVudClcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgb25Nb3VzZVdoZWVsKTtcclxuXHJcbiAgICAvLyBpZiAoaGFzVG91Y2gpIHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgb25Ub3VjaFN0YXJ0KTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBvblRvdWNoTW92ZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaWYgKGhhc1BvaW50ZXIgJiYgaGFzVG91Y2hXaW4pIHtcclxuICAgICAgYm9keVRvdWNoQWN0aW9uID0gZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSBcIm5vbmVcIjtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckRvd25cIiwgb25Ub3VjaFN0YXJ0LCB0cnVlKTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlck1vdmVcIiwgb25Ub3VjaE1vdmUsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNLZXlEb3duKSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xyXG5cclxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICB2YXIgZGVzdHJveUxpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGhhc1doZWVsRXZlbnQpIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvbldoZWVsKTtcclxuICAgIGlmIChoYXNNb3VzZVdoZWVsRXZlbnQpXHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG9uTW91c2VXaGVlbCk7XHJcblxyXG4gICAgLy8gaWYgKGhhc1RvdWNoKSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIG9uVG91Y2hTdGFydCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgb25Ub3VjaE1vdmUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmIChoYXNQb2ludGVyICYmIGhhc1RvdWNoV2luKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9IGJvZHlUb3VjaEFjdGlvbjtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckRvd25cIiwgb25Ub3VjaFN0YXJ0LCB0cnVlKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlck1vdmVcIiwgb25Ub3VjaE1vdmUsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNLZXlEb3duKSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xyXG5cclxuICAgIGluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHZzO1xyXG59O1xyXG5cclxuXHJcbi8vXHJcbi8vICBWaXJ0dWFsIFNjcm9sbFxyXG4vL1xyXG5leHBvcnQgY29uc3QgU21vb3RoU2Nyb2xsID0gZnVuY3Rpb24oZWxlbSwgc2Nyb2xsRnVuYykge1xyXG4gIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gIC8vIEdyYWIgYm90aCByZWQgYm94ZXNcclxuICB0aGlzLmVsZW0gPSBlbGVtO1xyXG5cclxuICAvLyBDaGVjayBob3cgbXVjaCB3ZSBjYW4gc2Nyb2xsLiBUaGlzIHZhbHVlIGlzIHRoZVxyXG4gIC8vIGhlaWdodCBvZiB0aGUgc2Nyb2xsYWJsZSBlbGVtZW50IG1pbnVzIHRoZSBoZWlnaHQgb2YgdGhlIHdpZG93XHJcbiAgdmFyIGZ1bGxFbGVtSGVpZ2h0ID0gdGhpcy5lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICB2YXIgcGFyZW50SGVpZ2h0ID0gdGhpcy5lbGVtLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0O1xyXG4gIHZhciBlbGVtV2lkdGg7Ly8gPSB0aGlzLmVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSB0aGlzLmVsZW0uO1xyXG4gIHZhciBlbGVtSGVpZ2h0Oy8vID0gdGhpcy5lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgLy8gQWRkIGVhc2luZyB0byB0aGUgc2Nyb2xsLiBQbGF5IHdpdGggdGhpcyB2YWx1ZSB0byBmaW5kIGEgc2V0dGluZyB0aGF0IHlvdSBsaWtlLlxyXG4gIHZhciBlYXNlID0gMC4xO1xyXG4gIHZhciBtdWx0ID0gMC43O1xyXG5cclxuICAvLyBTdG9yZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxyXG4gIHZhciB0YXJnZXRYID0gMCxcclxuICAgICAgdGFyZ2V0WSA9IDA7XHJcbiAgdmFyIGN1cnJlbnRYID0gMCxcclxuICAgICAgY3VycmVudFkgPSAwO1xyXG5cclxuICB2YXIgc2hvd1Njcm9sbEJhciA9IGZhbHNlO1xyXG5cclxuICB2YXIgZGlzYWJsZSA9IGZhbHNlO1xyXG4gIHZhciBpc1NlbGYgPSB0cnVlO1xyXG5cclxuICB2YXIgb25TY3JvbGwgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoIWRpc2FibGUgJiYgaXNTZWxmKSB7XHJcbiAgICAgIC8vIEFjY3VtdWxhdGUgZGVsdGEgdmFsdWUgb24gZWFjaCBzY3JvbGwgZXZlbnRcclxuICAgICAgdGFyZ2V0WSArPSBlLmRlbHRhWSAqIG11bHQ7XHJcbiAgICAgIHRhcmdldFggKz0gZS5kZWx0YVggKiBtdWx0O1xyXG5cclxuICAgICAgLy8gQ2xhbXAgdGhlIHZhbHVlIHNvIGl0IGRvZXNuJ3QgZ28gdG9vIGZhciB1cCBvciBkb3duXHJcbiAgICAgIC8vIFRoZSB2YWx1ZSBuZWVkcyB0byBiZSBiZXR3ZWVuIDAgYW5kIC1lbGVtSGVpZ2h0XHJcbiAgICAgIHRhcmdldFggPSBNYXRoLm1heCgtZWxlbVdpZHRoLCB0YXJnZXRYKTtcclxuICAgICAgdGFyZ2V0WCA9IE1hdGgubWluKDAsIHRhcmdldFgpO1xyXG4gICAgICB0YXJnZXRZID0gTWF0aC5tYXgoLWVsZW1IZWlnaHQsIHRhcmdldFkpO1xyXG4gICAgICB0YXJnZXRZID0gTWF0aC5taW4oMCwgdGFyZ2V0WSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uQW5pbSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gTWFrZSBzdXJlIHRoaXMgd29ya3MgYWNyb3NzIGRpZmZlcmVudCBicm93c2VycyAodXNlIHRoZSBzaGltIG9yIHNvbWV0aGluZylcclxuXHJcbiAgICAvLyBrZWVwIGF0IGJvdHRvbSB3aGlsZSByZXNpemluZ1xyXG4gICAgaWYgKC10YXJnZXRYID4gZWxlbVdpZHRoICYmIHRhcmdldFggPCAwKSB0YXJnZXRYID0gLWVsZW1XaWR0aCArIDE7XHJcbiAgICBpZiAoLXRhcmdldFkgPiBlbGVtSGVpZ2h0ICYmIHRhcmdldFkgPCAwKSB0YXJnZXRZID0gLWVsZW1IZWlnaHQgKyAxO1xyXG4gICAgaWYoX3RoaXMuZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgPCBfdGhpcy5lbGVtLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0KVxyXG4gICAgICB0YXJnZXRZID0gMDtcclxuXHJcbiAgICAvLyBHZXQgY2xvc2VyIHRvIHRoZSB0YXJnZXQgdmFsdWUgYXQgZWFjaCBmcmFtZSwgdXNpbmcgZWFzZS5cclxuICAgIC8vIE90aGVyIGVhc2luZyBtZXRob2RzIGFyZSBhbHNvIG9rLlxyXG4gICAgY3VycmVudFggKz0gKHRhcmdldFggLSBjdXJyZW50WCkgKiBlYXNlO1xyXG4gICAgY3VycmVudFkgKz0gKHRhcmdldFkgLSBjdXJyZW50WSkgKiBlYXNlO1xyXG5cclxuXHJcbiAgICAvLyBVbmNvbW1lbnQgdGhpcyBsaW5lIHRvIHNjcm9sbCBob3Jpem9udGFsbHlcclxuICAgIC8vIGN1cnJlbnRYICs9ICh0YXJnZXRYIC0gY3VycmVudFgpICogZWFzZTtcclxuXHJcbiAgICAvLyBBcHBseSBDU1Mgc3R5bGVcclxuICAgIHNldFRyYW5zbGF0ZShcclxuICAgICAgX3RoaXMuZWxlbSxcclxuICAgICAgY3VycmVudFgudG9GaXhlZCg0KSArIFwicHhcIixcclxuICAgICAgY3VycmVudFkudG9GaXhlZCg0KSArIFwicHhcIixcclxuICAgICAgMCArIFwicHhcIlxyXG4gICAgKTtcclxuXHJcbiAgICByZWZyZXNoKCk7XHJcblxyXG4gICAgaWYgKHNjcm9sbEZ1bmMpIHNjcm9sbEZ1bmMoY3VycmVudFkgLyBlbGVtSGVpZ2h0LCBjdXJyZW50WSwgZWxlbUhlaWdodCk7XHJcblxyXG4gICAgaWYgKHNob3dTY3JvbGxCYXIpXHJcbiAgICAgIGlmIChmdWxsRWxlbUhlaWdodCA+IF90aGlzLmVsZW0ucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQpXHJcbiAgICAgICAgcmVQb3NpdGlvblNjcm9sbEJhcihjdXJyZW50WSk7XHJcblxyXG4gICAgLy8gbGF6eUxvYWQuY2hlY2tBbmRTaG93SW1nKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gZGV0ZWN0IHRoYXQgaWYgaG92ZXJlZCBzY3JvbGwgY29udGFpbmVyXHJcbiAgYWRkRXZlbnQoX3RoaXMuZWxlbSwgXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgaXNTZWxmID0gdHJ1ZTtcclxuICB9KTtcclxuICBhZGRFdmVudChfdGhpcy5lbGVtLCBcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpc1NlbGYgPSBmYWxzZTtcclxuICB9KTtcclxuICBhZGRFdmVudChfdGhpcy5lbGVtLCBcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpc1NlbGYgPSB0cnVlO1xyXG4gIH0pO1xyXG4gIGFkZEV2ZW50KF90aGlzLmVsZW0sIFwidG91Y2hlbmRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpc1NlbGYgPSBmYWxzZTtcclxuICB9KTtcclxuXHJcbiAgdmFyIGluaXRTY3JvbGxCYXIgPSBmdW5jdGlvbigpIHtcclxuICAgIF90aGlzLm9sZE1vdXNlWSA9IDA7XHJcbiAgICBfdGhpcy5zY3JvbGxCYXJPdXRlcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgX3RoaXMuc2Nyb2xsQmFyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBfdGhpcy5zY3JvbGxCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIF90aGlzLnNjcm9sbEJhck91dGVyV3JhcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNjcm9sbEJhck91dGVyV3JhcFwiKTtcclxuICAgIF90aGlzLnNjcm9sbEJhcldyYXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzY3JvbGxCYXJXcmFwXCIpO1xyXG4gICAgX3RoaXMuc2Nyb2xsQmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2Nyb2xsQmFyXCIpO1xyXG5cclxuICAgIGFkZEV2ZW50KF90aGlzLnNjcm9sbEJhciwgXCJtb3VzZWRvd25cIiwgb25Nb3VzZURvd25TY3JvbGxCYXIpO1xyXG5cclxuICAgIF90aGlzLnNjcm9sbEJhcldyYXAuYXBwZW5kQ2hpbGQoX3RoaXMuc2Nyb2xsQmFyKTtcclxuICAgIF90aGlzLnNjcm9sbEJhck91dGVyV3JhcC5hcHBlbmRDaGlsZChfdGhpcy5zY3JvbGxCYXJXcmFwKTtcclxuICAgIF90aGlzLmVsZW0ucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChfdGhpcy5zY3JvbGxCYXJPdXRlcldyYXApO1xyXG4gIH07XHJcblxyXG4gIHZhciByZVBvc2l0aW9uU2Nyb2xsQmFyID0gZnVuY3Rpb24oeSkge1xyXG4gICAgdmFyIHNjcm9sbEJhckhlaWdodCA9ICgxIC0gZWxlbUhlaWdodCAvIGZ1bGxFbGVtSGVpZ2h0KSAqIDEwMDtcclxuICAgIF90aGlzLnNjcm9sbEJhci5zdHlsZS5oZWlnaHQgPSBzY3JvbGxCYXJIZWlnaHQgKyBcIiVcIjtcclxuICAgIF90aGlzLnNjcm9sbEJhclkgPSAoX3RoaXMuc2Nyb2xsQmFyV3JhcC5vZmZzZXRIZWlnaHQgLSBfdGhpcy5zY3JvbGxCYXIub2Zmc2V0SGVpZ2h0KSAqICh5IC8gZWxlbUhlaWdodCk7XHJcblxyXG4gICAgc2V0VHJhbnNsYXRlKCBfdGhpcy5zY3JvbGxCYXIsICctNTAlJywgLV90aGlzLnNjcm9sbEJhclkudG9GaXhlZCg0KSArIFwicHhcIiwgMCArIFwicHhcIik7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uTW91c2VEb3duU2Nyb2xsQmFyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgX3RoaXMub2xkTW91c2VZID0gZS5wYWdlWTtcclxuICAgIF90aGlzLmNsaWNrZWRTY3JvbGxCYXIgPSB0cnVlO1xyXG4gICAgYWRkQ2xhc3ModGhpcywgXCJhY3RpdmVcIik7XHJcbiAgICBcclxuICAgIGFkZEV2ZW50KGRvY3VtZW50LCBcIm1vdXNlbW92ZVwiLCBvbk1vdmVTY3JvbGxCYXIpO1xyXG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsIFwibW91c2V1cFwiLCBvbk1vdXNlVXBTY3JvbGxCYXIpO1xyXG4gIH07XHJcblxyXG4gIHZhciBvbk1vdmVTY3JvbGxCYXIgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoX3RoaXMuY2xpY2tlZFNjcm9sbEJhcikge1xyXG4gICAgICB2YXIgeSA9IF90aGlzLm9sZE1vdXNlWSAtIGUucGFnZVk7XHJcbiAgICAgIHRhcmdldFkgKz0geSAqIChmdWxsRWxlbUhlaWdodCAvIF90aGlzLmVsZW0ucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQpO1xyXG5cclxuICAgICAgdGFyZ2V0WSA9IE1hdGgubWF4KC1lbGVtSGVpZ2h0LCB0YXJnZXRZKTtcclxuICAgICAgdGFyZ2V0WSA9IE1hdGgubWluKDAsIHRhcmdldFkpO1xyXG5cclxuICAgICAgX3RoaXMub2xkTW91c2VZID0gZS5wYWdlWTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgb25Nb3VzZVVwU2Nyb2xsQmFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfdGhpcy5jbGlja2VkU2Nyb2xsQmFyID0gZmFsc2U7XHJcbiAgICByZW1vdmVDbGFzcyhfdGhpcy5zY3JvbGxCYXIsIFwiYWN0aXZlXCIpO1xyXG4gICAgXHJcbiAgICByZW1vdmVFdmVudChkb2N1bWVudCwgXCJtb3VzZW1vdmVcIiwgb25Nb3ZlU2Nyb2xsQmFyKTtcclxuICAgIHJlbW92ZUV2ZW50KGRvY3VtZW50LCBcIm1vdXNldXBcIiwgb25Nb3VzZVVwU2Nyb2xsQmFyKTtcclxuICB9O1xyXG5cclxuICB2YXIgcmVzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgIGN1cnJlbnRZID0gMDtcclxuICAgIHRhcmdldFkgPSAwO1xyXG4gIH07XHJcblxyXG4gIHZhciByZWZyZXNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoX3RoaXMuZWxlbS5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgZnVsbEVsZW1IZWlnaHQgPSBfdGhpcy5lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgICAgZWxlbVdpZHRoID0gX3RoaXMuZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIF90aGlzLmVsZW0ucGFyZW50Tm9kZS5vZmZzZXRXaWR0aDtcclxuICAgICAgZWxlbUhlaWdodCA9IF90aGlzLmVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gX3RoaXMuZWxlbS5wYXJlbnROb2RlLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgIGlmIChzaG93U2Nyb2xsQmFyKSB7XHJcbiAgICAgICAgaWYgKGZ1bGxFbGVtSGVpZ2h0ID4gcGFyZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICBpZiAoaGFzQ2xhc3MoX3RoaXMuc2Nyb2xsQmFyT3V0ZXJXcmFwLCBcImhpZGVcIikpXHJcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKF90aGlzLnNjcm9sbEJhck91dGVyV3JhcCwgXCJoaWRlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoIWhhc0NsYXNzKF90aGlzLnNjcm9sbEJhck91dGVyV3JhcCwgXCJoaWRlXCIpKVxyXG4gICAgICAgICAgICBhZGRDbGFzcyhfdGhpcy5zY3JvbGxCYXJPdXRlcldyYXAsIFwiaGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgdG8gPSBmdW5jdGlvbih5KSB7XHJcbiAgICBlbGVtSGVpZ2h0ID1cclxuICAgICAgX3RoaXMuZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLVxyXG4gICAgICBfdGhpcy5lbGVtLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGFyZ2V0WSA9IE1hdGgubWF4KC1lbGVtSGVpZ2h0LCB5KTtcclxuICB9O1xyXG4gIHZhciBzZXQgPSBmdW5jdGlvbih5KSB7XHJcbiAgICBjdXJyZW50WSA9IHk7XHJcbiAgICB0YXJnZXRZID0geTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2cyA9IFZpcnR1YWxTY3JvbGwoKTtcclxuICBjb25zdCBmaSA9IEZyYW1lSW1wdWxzZSgpO1xyXG4gIHZhciBpc09uID0gZmFsc2U7XHJcbiAgdmFyIG9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpc09uID0gdHJ1ZTtcclxuICAgIHJlZnJlc2goKTtcclxuICAgIG9uUmVzaXplKCk7XHJcbiAgICBpbml0U2Nyb2xsQmFyKCk7XHJcbiAgICBvblNob3dTY3JvbGxCYXIoKTtcclxuICAgIHZzLm9uKG9uU2Nyb2xsKTtcclxuICAgIGZpLm9uKG9uQW5pbSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9mZiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaXNPbiA9IGZhbHNlO1xyXG4gICAgdnMub2ZmKG9uU2Nyb2xsKTtcclxuICAgIGZpLm9mZihvbkFuaW0pO1xyXG4gICAgb25IaWRlU2Nyb2xsQmFyKCk7XHJcbiAgICBkZXN0cm95KCk7XHJcbiAgfTtcclxuICBcclxuICB2YXIgZGVzdHJveSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAvLyByZW1vdmVFdmVudCh3aW5kb3csIFwicmVzaXplXCIsIG9uUmVzaXplKTtcclxuICAgIGlmKF90aGlzLnNjcm9sbEJhck91dGVyV3JhcCl7XHJcbiAgICAgIHJlbW92ZUV2ZW50KF90aGlzLnNjcm9sbEJhciwgXCJtb3VzZWRvd25cIiwgb25Nb3VzZURvd25TY3JvbGxCYXIpO1xyXG4gICAgICBfdGhpcy5zY3JvbGxCYXJPdXRlcldyYXAucmVtb3ZlKCk7XHJcbiAgICAgIF90aGlzLnNjcm9sbEJhck91dGVyV3JhcCA9IG51bGw7XHJcbiAgICAgIF90aGlzLnNjcm9sbEJhcldyYXAgPSBudWxsO1xyXG4gICAgICBfdGhpcy5zY3JvbGxCYXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG9uUmVzaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICBwYXJlbnRIZWlnaHQgPSBfdGhpcy5lbGVtLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIGlmKGlzTW9iaWxlKCkpIHtcclxuICAgICAgaWYoaXNPbikge1xyXG4gICAgICAgIG9mZigpO1xyXG4gICAgICAgIHNldFRyYW5zbGF0ZShfdGhpcy5lbGVtLCAwICsgXCJweFwiLCAwICsgXCJweFwiLCAwICsgXCJweFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYoIWlzT24pIHtcclxuICAgICAgICBpbml0U2Nyb2xsQmFyKCk7XHJcbiAgICAgICAgb24oKTtcclxuICAgICAgfVxyXG4gICAgICBpZihkaXNhYmxlKSBvbkVuYWJsZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdmFyIG9uRGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZGlzYWJsZSA9IHRydWU7XHJcbiAgfTtcclxuICB2YXIgb25FbmFibGUgPSBmdW5jdGlvbigpIHtcclxuICAgIGRpc2FibGUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICB2YXIgb25TaG93U2Nyb2xsQmFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICBzaG93U2Nyb2xsQmFyID0gdHJ1ZTtcclxuICAgIHJlbW92ZUNsYXNzKF90aGlzLnNjcm9sbEJhcldyYXAsJ2hpZGUnKTtcclxuICB9O1xyXG4gIHZhciBvbkhpZGVTY3JvbGxCYXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHNob3dTY3JvbGxCYXIgPSBmYWxzZTtcclxuICAgIGlmKF90aGlzLnNjcm9sbEJhcldyYXApIGFkZENsYXNzKF90aGlzLnNjcm9sbEJhcldyYXAsJ2hpZGUnKTtcclxuICB9O1xyXG5cclxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYoIWlzTW9iaWxlKCkpe1xyXG4gICAgICBvbigpO1xyXG4gICAgfVxyXG4gICAgYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XHJcbiAgfTtcclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzZXQ6IHJlc2V0LFxyXG4gICAgcmVmcmVzaDogcmVmcmVzaCxcclxuICAgIG9uUmVzaXplOiBvblJlc2l6ZSxcclxuICAgIHNldDogc2V0LFxyXG4gICAgdG86IHRvLFxyXG4gICAgb246IG9uLFxyXG4gICAgb2ZmOiBvZmYsXHJcbiAgICBkaXNhYmxlOiBvbkRpc2FibGUsXHJcbiAgICBlbmFibGU6IG9uRW5hYmxlLFxyXG4gICAgc2hvd1Njcm9sbEJhcjogb25TaG93U2Nyb2xsQmFyLFxyXG4gICAgaGlkZVNjcm9sbEJhcjogb25IaWRlU2Nyb2xsQmFyLFxyXG4gICAgZGVzdHJveTogZGVzdHJveVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVByZXZpb3VzID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==