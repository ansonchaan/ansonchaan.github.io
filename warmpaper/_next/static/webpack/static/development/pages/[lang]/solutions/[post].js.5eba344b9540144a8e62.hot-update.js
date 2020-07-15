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
  console.log(roundedNumber);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsRnVuYy5qcyJdLCJuYW1lcyI6WyJwcmludCIsInN0YXRlIiwiY29sb3IiLCJ0ZXh0IiwibXNnIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJhZGp1c3RGb250U2l6ZSIsImJhc2VGb250UmF0aW8iLCJmb250TXVsdGlwbGllciIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJvdW5kZWROdW1iZXIiLCJNYXRoIiwicm91bmQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiZm9udFNpemUiLCJnZXREZXZpY2UiLCJ3IiwiZCIsImJvZHkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsaWVudFdpZHRoIiwiZGV2aWNlVHlwZSIsImEiLCJ0ZXN0Iiwic3Vic3RyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJlIiwiaXNNb2JpbGUiLCJoYXNDbGFzcyIsImVsIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJtYXRjaCIsIlJlZ0V4cCIsImFkZENsYXNzIiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJpc05vZGVsaXN0IiwibGVuZ3RoIiwiaXRlbSIsImVscyIsImkiLCJyZW1vdmUiLCJyZWciLCJyZXBsYWNlIiwiYWRkRXZlbnQiLCJvYmoiLCJ0eXBlIiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJyZW1vdmVFdmVudCIsImZ1bmMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VHJhbnNsYXRlIiwiZWxlbSIsIngiLCJ5IiwieiIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiRnJhbWVJbXB1bHNlIiwidmVuZG9ycyIsInIiLCJsaXN0ZW5lcnMiLCJudW1MaXN0ZW5lcnMiLCJ0b1JlbW92ZSIsIm51bVRvUmVtb3ZlIiwibGFzdFRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIm1heCIsImlkIiwic2V0VGltZW91dCIsInJ1biIsImRlbHRhVGltZSIsImNhbGwiLCJpbmRleFRvUmVtb3ZlIiwiaiIsInB1c2giLCJzcGxpY2UiLCJvbiIsImYiLCJzY3JvbGxUbyIsImluZGV4T2YiLCJvZmYiLCJnZXRMaXN0ZW5lcnMiLCJWaXJ0dWFsU2Nyb2xsIiwidnMiLCJpbml0aWFsaXplZCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJ0b3VjaE11bHQiLCJmaXJlZm94TXVsdCIsImtleVN0ZXAiLCJtb3VzZU11bHQiLCJib2R5VG91Y2hBY3Rpb24iLCJoYXNXaGVlbEV2ZW50IiwiaGFzTW91c2VXaGVlbEV2ZW50IiwiaGFzVG91Y2giLCJoYXNLZXlEb3duIiwiaGFzVG91Y2hXaW4iLCJtc01heFRvdWNoUG9pbnRzIiwiaGFzUG9pbnRlciIsIm1zUG9pbnRlckVuYWJsZWQiLCJpc0ZpcmVmb3giLCJldmVudCIsImRlbHRhWCIsImRlbHRhWSIsIm9yaWdpbmFsRXZlbnQiLCJrIiwibGVmdCIsInJpZ2h0IiwidXAiLCJkb3duIiwiaW5pdExpc3RlbmVycyIsIm9wdGlvbnMiLCJvcHQiLCJkZXN0cm95TGlzdGVuZXJzIiwibG9ja1RvdWNoIiwicHJldmVudERlZmF1bHQiLCJub3RpZnkiLCJvbldoZWVsIiwid2hlZWxEZWx0YVgiLCJ3aGVlbERlbHRhWSIsImRlbHRhTW9kZSIsIm9uTW91c2VXaGVlbCIsIndoZWVsRGVsdGEiLCJvblRvdWNoU3RhcnQiLCJ0IiwidGFyZ2V0VG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJvblRvdWNoTW92ZSIsIm9uS2V5RG93biIsImtleUNvZGUiLCJtc1RvdWNoQWN0aW9uIiwiU21vb3RoU2Nyb2xsIiwic2Nyb2xsRnVuYyIsIl90aGlzIiwiZnVsbEVsZW1IZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJwYXJlbnRIZWlnaHQiLCJwYXJlbnROb2RlIiwib2Zmc2V0SGVpZ2h0IiwiZWxlbVdpZHRoIiwiZWxlbUhlaWdodCIsImVhc2UiLCJtdWx0IiwidGFyZ2V0WCIsInRhcmdldFkiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwic2hvd1Njcm9sbEJhciIsImRpc2FibGUiLCJpc1NlbGYiLCJvblNjcm9sbCIsIm1pbiIsIm9uQW5pbSIsInRvRml4ZWQiLCJyZWZyZXNoIiwicmVQb3NpdGlvblNjcm9sbEJhciIsImluaXRTY3JvbGxCYXIiLCJvbGRNb3VzZVkiLCJzY3JvbGxCYXJPdXRlcldyYXAiLCJjcmVhdGVFbGVtZW50Iiwic2Nyb2xsQmFyV3JhcCIsInNjcm9sbEJhciIsInNldEF0dHJpYnV0ZSIsIm9uTW91c2VEb3duU2Nyb2xsQmFyIiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxCYXJIZWlnaHQiLCJzY3JvbGxCYXJZIiwiY2xpY2tlZFNjcm9sbEJhciIsIm9uTW92ZVNjcm9sbEJhciIsIm9uTW91c2VVcFNjcm9sbEJhciIsInJlc2V0Iiwib2Zmc2V0V2lkdGgiLCJ0byIsInNldCIsImZpIiwiaXNPbiIsIm9uUmVzaXplIiwib25TaG93U2Nyb2xsQmFyIiwib25IaWRlU2Nyb2xsQmFyIiwiZGVzdHJveSIsIm9uRW5hYmxlIiwib25EaXNhYmxlIiwiaW5pdCIsImVuYWJsZSIsImhpZGVTY3JvbGxCYXIiLCJ1c2VQcmV2aW91cyIsInZhbHVlIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWVDLElBQWYsRUFBdUI7QUFDMUMsWUFBb0I7QUFDbEIsUUFBTUMsR0FBRyxHQUFJLE9BQU9ELElBQVAsSUFBZSxRQUFoQixHQUEyQkUsSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWYsQ0FBM0IsR0FBa0RBLElBQUksSUFB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R0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNwQyxNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLEVBQWxCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixPQUFHLENBQUNHLE9BQUosR0FBY0osS0FBZDtBQUNELEdBRlEsQ0FBVDtBQUdBLFNBQU9DLEdBQUcsQ0FBQ0csT0FBWDtBQUNELENBTk07O0dBQU1MLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFtsYW5nXVxcc29sdXRpb25zXFxbcG9zdF0uanMuNWViYTM0NGI5NTQwMTQ0YThlNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmICwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1xyXG4vL1x0c3R5bGluZyBjb25zb2xlLmxvZ1xyXG4vL1xyXG5leHBvcnQgY29uc3QgcHJpbnQgPSAoc3RhdGUsIGNvbG9yLCB0ZXh0KSA9PntcclxuICBpZihwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGNvbnN0IG1zZyA9ICh0eXBlb2YgdGV4dCA9PSAnb2JqZWN0Jyk/IEpTT04uc3RyaW5naWZ5KHRleHQpIDogdGV4dCB8fCAnJztcclxuICAgIGNvbnNvbGUubG9nKCclYycrc3RhdGUrJyVjICVzJywnY29sb3I6d2hpdGU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXNpemU6MTBweDtmb250LXdlaWdodDpib2xkO2JhY2tncm91bmQ6Jytjb2xvcisnO3BhZGRpbmc6NHB4IDZweCAzcHggNXB4O2JvcmRlci1yYWRpdXM6M3B4OycsICcnLCBtc2cpO1xyXG4gIH1cclxufVxyXG5cclxuLy9cclxuLy8gZW5sYXJnZSBmb250IHNpemUgb24gbGFyZ2Ugc2NyZWVuXHJcbi8vXHJcbmV4cG9ydCBjb25zdCBhZGp1c3RGb250U2l6ZSA9IChiYXNlRm9udFJhdGlvID0gMTYgLyAxNDQwLCBmb250TXVsdGlwbGllciA9IDAuODQzNzUpID0+IHtcclxuICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNvbnN0IHJvdW5kZWROdW1iZXIgPSBNYXRoLnJvdW5kKFxyXG4gICAgYmFzZUZvbnRSYXRpbyAqIHdpZHRoICogZm9udE11bHRpcGxpZXJcclxuICApO1xyXG5cclxuICBpZiAocm91bmRlZE51bWJlciA+PSAxNilcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gcm91bmRlZE51bWJlciArIFwicHhcIjtcclxuICBlbHNlIFxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBcIlwiO1xyXG5cclxuICAgICAgY29uc29sZS5sb2cocm91bmRlZE51bWJlcilcclxufTtcclxuXHJcbi8vXHJcbi8vIGdldCBkZXZpY2UgdHlwZVxyXG4vL1xyXG5leHBvcnQgY29uc3QgZ2V0RGV2aWNlID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdyA9IHdpbmRvdyxcclxuICAgICAgICBkID0gZG9jdW1lbnQsXHJcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50ID0gZC5kb2N1bWVudEVsZW1lbnQsXHJcbiAgICAgICAgYm9keSA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xyXG4gICAgICBsZXQgd2lkdGggPVxyXG4gICAgICAgIHcuaW5uZXJXaWR0aCB8fCBkb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aDtcclxuICAgICAgbGV0IGRldmljZVR5cGUgPSBcIlwiO1xyXG5cclxuICAgICAgKGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChcclxuICAgICAgICAgICAgYVxyXG4gICAgICAgICAgKSB8fFxyXG4gICAgICAgICAgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHMtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YnctKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG0tfGNlbGx8Y2h0bXxjbGRjfGNtZC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGMtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2YtNXxnLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGQtKG18cHx0KXxoZWktfGhpKHB0fHRhKXxocCggaXxpcCl8aHMtY3xodChjKC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2MtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fC1bYS13XSl8bGlid3xseW54fG0xLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKS18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG4tMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0LWd8cWEtYXxxYygwN3wxMnwyMXwzMnw2MHwtWzItN118aS0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoLXxvb3xwLSl8c2RrXFwvfHNlKGMoLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2gtfHNoYXJ8c2llKC18bSl8c2stMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoLXx2LXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbC18dGRnLXx0ZWwoaXxtKXx0aW0tfHQtbW98dG8ocGx8c2gpfHRzKDcwfG0tfG0zfG01KXx0eC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYygtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzLXx5b3VyfHpldG98enRlLS9pLnRlc3QoXHJcbiAgICAgICAgICAgIGEuc3Vic3RyKDAsIDQpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAod2lkdGggPiA3MDApIGRldmljZVR5cGUgPSBcInRhYmxldFwiO1xyXG4gICAgICAgICAgZWxzZSBkZXZpY2VUeXBlID0gXCJtb2JpbGVcIjtcclxuICAgICAgICB9IGVsc2UgZGV2aWNlVHlwZSA9IFwiZGVza3RvcFwiO1xyXG4gICAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcclxuXHJcbiAgICAgIHJldHVybiBkZXZpY2VUeXBlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gXCJkZXNrdG9wXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGlzTW9iaWxlID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMjQ7XHJcbn07XHJcblxyXG5jb25zdCBoYXNDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcclxuICBpZiAoZWwuY2xhc3NMaXN0KSByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XHJcbiAgZWxzZVxyXG4gICAgcmV0dXJuICEhZWwuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoXCIoXFxcXHN8XilcIiArIGNsYXNzTmFtZSArIFwiKFxcXFxzfCQpXCIpKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZENsYXNzID0gZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xyXG4gIGlmIChlbC5jbGFzc0xpc3QpIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICBlbHNlIGlmICghaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xyXG4gIGNvbnN0IGlzTm9kZWxpc3QgPVxyXG4gICAgdHlwZW9mIGVsLmxlbmd0aCAhPSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBlbC5pdGVtICE9IFwidW5kZWZpbmVkXCI7XHJcbiAgaWYgKGlzTm9kZWxpc3QpIHtcclxuICAgIGNvbnN0IGVscyA9IGVsO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBlbHNbaV07IGkrKykge1xyXG4gICAgICBpZiAoZWxzW2ldLmNsYXNzTGlzdCkgZWxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgZWxzZSBpZiAoaGFzQ2xhc3MoZWxzW2ldLCBjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgbGV0IHJlZyA9IG5ldyBSZWdFeHAoXCIoXFxcXHN8XilcIiArIGNsYXNzTmFtZSArIFwiKFxcXFxzfCQpXCIpO1xyXG4gICAgICAgIGVsc1tpXS5jbGFzc05hbWUgPSBlbHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UocmVnLCBcIiBcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgZWxzZSBpZiAoaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcclxuICAgICAgbGV0IHJlZyA9IG5ldyBSZWdFeHAoXCIoXFxcXHN8XilcIiArIGNsYXNzTmFtZSArIFwiKFxcXFxzfCQpXCIpO1xyXG4gICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShyZWcsIFwiIFwiKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vL1xyXG4vLyBBZGQgYW5kIFJlbW92ZSBFdmVudFxyXG4vL1xyXG5jb25zdCBhZGRFdmVudCA9IGZ1bmN0aW9uKG9iaiwgdHlwZSwgY2FsbGJhY2spIHtcclxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcclxuXHJcbiAgaWYgKG9iai5hZGRFdmVudExpc3RlbmVyKSBvYmouYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG4gIGVsc2UgaWYgKG9iai5hdHRhY2hFdmVudCkgb2JqLmF0dGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGNhbGxiYWNrKTtcclxuICBlbHNlIG9ialtcIm9uXCIgKyB0eXBlXSA9IGNhbGxiYWNrO1xyXG59O1xyXG5jb25zdCByZW1vdmVFdmVudCA9IGZ1bmN0aW9uKG9iaiwgdHlwZSwgZnVuYykge1xyXG4gIGlmIChvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcikgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZnVuYywgZmFsc2UpO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0VHJhbnNsYXRlID0gZnVuY3Rpb24oZWxlbSwgeCwgeSwgeikge1xyXG4gIGVsZW0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcIixcIiArIHkgKyBcIixcIiArIHogKyBcIilcIjtcclxuICBlbGVtLnN0eWxlLm1zVHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcIixcIiArIHkgKyBcIixcIiArIHogKyBcIilcIjtcclxuICBlbGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIsXCIgKyB6ICsgXCIpXCI7XHJcbn07XHJcblxyXG5cclxuXHJcbmNvbnN0IEZyYW1lSW1wdWxzZSA9IGZ1bmN0aW9uKCl7XHJcbiAgdmFyIHZlbmRvcnMgPSBbXCJ3ZWJraXRcIiwgXCJtb3pcIl07XHJcblxyXG4gIHZhciByID0ge307XHJcbiAgdmFyIGxpc3RlbmVycyA9IFtdLFxyXG4gICAgbnVtTGlzdGVuZXJzID0gMCxcclxuICAgIHRvUmVtb3ZlID0gW10sXHJcbiAgICBudW1Ub1JlbW92ZTtcclxuICB2YXIgbGFzdFRpbWUgPSAwO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK2kpIHtcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArIFwiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xyXG4gICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xyXG4gICAgICB9LCB0aW1lVG9DYWxsKTtcclxuICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XHJcbiAgICAgIHJldHVybiBpZDtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB2YXIgcnVuID0gZnVuY3Rpb24oZGVsdGFUaW1lKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuKTtcclxuXHJcbiAgICBpZiAobnVtTGlzdGVuZXJzID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1MaXN0ZW5lcnM7IGkrKykge1xyXG4gICAgICBsaXN0ZW5lcnNbaV0uY2FsbChkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChudW1Ub1JlbW92ZSA+IDApIHtcclxuICAgICAgdmFyIGluZGV4VG9SZW1vdmUgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdG9SZW1vdmUubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0gPT09IHRvUmVtb3ZlW2pdKSBpbmRleFRvUmVtb3ZlLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4VG9SZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4VG9SZW1vdmVbaV0sIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBudW1MaXN0ZW5lcnMgPSBsaXN0ZW5lcnMubGVuZ3RoO1xyXG4gICAgICB0b1JlbW92ZSA9IFtdO1xyXG4gICAgICBudW1Ub1JlbW92ZSA9IDA7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgci5vbiA9IGZ1bmN0aW9uKGYpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICBpZiAobGlzdGVuZXJzLmluZGV4T2YoZikgPiAtMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsaXN0ZW5lcnMucHVzaChmKTtcclxuICAgIG51bUxpc3RlbmVycyA9IGxpc3RlbmVycy5sZW5ndGg7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZyYW1lSW1wdWxzZSA+IG5ldyBsaXN0ZW5lciA+IHRvdGFsIDpcIiwgbnVtTGlzdGVuZXJzKTtcclxuICB9O1xyXG5cclxuICByLm9mZiA9IGZ1bmN0aW9uKGYpIHtcclxuICAgIC8vdG9SZW1vdmUucHVzaChmKTtcclxuICAgIC8vbnVtVG9SZW1vdmUgPSB0b1JlbW92ZS5sZW5ndGg7XHJcbiAgICB2YXIgaSA9IGxpc3RlbmVycy5pbmRleE9mKGYpO1xyXG4gICAgaWYgKGkgPT09IC0xKSByZXR1cm47XHJcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgbnVtTGlzdGVuZXJzID0gbGlzdGVuZXJzLmxlbmd0aDtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRnJhbWVJbXB1bHNlID4gc2NoZWR1bGVkIHJlbW92YWwgPiB0b3RhbCA6XCIsIG51bUxpc3RlbmVycyk7XHJcbiAgfTtcclxuXHJcbiAgci5nZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBsaXN0ZW5lcnM7XHJcbiAgfTtcclxuXHJcbiAgcnVuKCk7XHJcbiAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5cclxudmFyIFZpcnR1YWxTY3JvbGwgPSBmdW5jdGlvbigpe1xyXG4gIHZhciB2cyA9IHt9O1xyXG5cclxuICB2YXIgbnVtTGlzdGVuZXJzLFxyXG4gICAgbGlzdGVuZXJzID0gW10sXHJcbiAgICBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgdG91Y2hTdGFydFgsIHRvdWNoU3RhcnRZO1xyXG5cclxuICAvLyBbIFRoZXNlIHNldHRpbmdzIGNhbiBiZSBjdXN0b21pemVkIHdpdGggdGhlIG9wdGlvbnMoKSBmdW5jdGlvbiBiZWxvdyBdXHJcbiAgLy8gTXV0aXBseSB0aGUgdG91Y2ggYWN0aW9uIGJ5IHR3byBtYWtpbmcgdGhlIHNjcm9sbCBhIGJpdCBmYXN0ZXIgdGhhbiBmaW5nZXIgbW92ZW1lbnRcclxuICB2YXIgdG91Y2hNdWx0ID0gMjtcclxuICAvLyBGaXJlZm94IG9uIFdpbmRvd3MgbmVlZHMgYSBib29zdCwgc2luY2Ugc2Nyb2xsaW5nIGlzIHZlcnkgc2xvd1xyXG4gIHZhciBmaXJlZm94TXVsdCA9IDE1O1xyXG4gIC8vIEhvdyBtYW55IHBpeGVscyB0byBtb3ZlIHdpdGggZWFjaCBrZXkgcHJlc3NcclxuICB2YXIga2V5U3RlcCA9IDEyMDtcclxuICAvLyBHZW5lcmFsIG11bHRpcGxpZXIgZm9yIGFsbCBtb3VzZWh3ZWVsIGluY2x1ZGluZyBGRlxyXG4gIHZhciBtb3VzZU11bHQgPSAxO1xyXG5cclxuICB2YXIgYm9keVRvdWNoQWN0aW9uO1xyXG5cclxuICB2YXIgaGFzV2hlZWxFdmVudCA9IFwib253aGVlbFwiIGluIGRvY3VtZW50O1xyXG4gIHZhciBoYXNNb3VzZVdoZWVsRXZlbnQgPSBcIm9ubW91c2V3aGVlbFwiIGluIGRvY3VtZW50O1xyXG4gIHZhciBoYXNUb3VjaCA9IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQ7XHJcbiAgdmFyIGhhc0tleURvd24gPSBcIm9ua2V5ZG93blwiIGluIGRvY3VtZW50O1xyXG5cclxuICB2YXIgaGFzVG91Y2hXaW4gPVxyXG4gICAgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgJiYgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxO1xyXG4gIHZhciBoYXNQb2ludGVyID0gISF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XHJcblxyXG4gIHZhciBpc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJGaXJlZm94XCIpID4gLTE7XHJcblxyXG4gIHZhciBldmVudCA9IHtcclxuICAgIHk6IDAsXHJcbiAgICB4OiAwLFxyXG4gICAgZGVsdGFYOiAwLFxyXG4gICAgZGVsdGFZOiAwLFxyXG4gICAgb3JpZ2luYWxFdmVudDogbnVsbFxyXG4gIH07XHJcblxyXG4gIHZhciBrID0ge1xyXG4gICAgbGVmdDogMzcsXHJcbiAgICByaWdodDogMzksXHJcbiAgICB1cDogMzgsXHJcbiAgICBkb3duOiA0MFxyXG4gIH07XHJcblxyXG4gIHZzLm9uID0gZnVuY3Rpb24oZikge1xyXG4gICAgaWYgKCFpbml0aWFsaXplZCkgaW5pdExpc3RlbmVycygpO1xyXG5cclxuICAgIHZhciBpID0gbGlzdGVuZXJzLmluZGV4T2YoZik7XHJcbiAgICBpZiAoaSAhPT0gLTEpIHJldHVybjtcclxuXHJcbiAgICBsaXN0ZW5lcnMucHVzaChmKTtcclxuICAgIG51bUxpc3RlbmVycyA9IGxpc3RlbmVycy5sZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICpcdEBtZXRob2Qgb3B0aW9uc1xyXG4gICAqXHRAbWVtYmVyb2YgVmlydHVhbFNjcm9sbFxyXG4gICAqXHRAc3RhdGljXHJcbiAgICpcclxuICAgKlx0QHBhcmFtIHtPYmplY3R9IG9wdCAtIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgb3B0aW9ucyBmcm9tIHRoZSBsaXN0IGFib3ZlLCBzcGVjaWZpZWQgYXMgcHJvcGVydGllcy5cclxuICAgKlxyXG4gICAqXHRAZGVzY3JpcHRpb24gU2V0cyBjdXN0b20gcGFyYW1ldGVycyB0byB0aGUgVmlydHVhbFNjcm9sbCAoZ2xvYmFsbHkpLiBUaGUgZm9sbG93aW5nIG9wdGlvbnMgYXJlIHN1cHBvcnRlZDpcclxuICAgKlxyXG4gICAqXHQ8dWw+XHJcbiAgICpcdDxsaT50b3VjaE11bHQgKGRlZmF1bHQ6IDIpIC0gbXV0aXBseSB0aGUgdG91Y2ggYWN0aW9uIHRvIG1ha2UgdGhlIHNjcm9sbCBhIGZhc3Rlci9zbG93ZXIgdGhhbiBmaW5nZXIgbW92ZW1lbnQ8L2xpPlxyXG4gICAqXHQ8bGk+ZmlyZWZveE11bHQgKGRlZmFpbHQ6IDE1KS0gRmlyZWZveCBvbiBXaW5kb3dzIG5lZWRzIGEgYm9vc3QsIHNpbmNlIHNjcm9sbGluZyBpcyB2ZXJ5IHNsb3c8L2xpPlxyXG4gICAqXHQ8bGk+a2V5U3RlcCAoZGVmYXVsdDogMTIwKSAtIHNwZWNpZmllZCBob3cgbWFueSBwaXhlbHMgdG8gbW92ZSB3aXRoIGVhY2gga2V5IHByZXNzPC9saT5cclxuICAgKlx0PGxpPm1vdXNlTXVsdCAoZGVmYXVsdDogMSkgLSBnZW5lcmFsIG11bHRpcGxpZXIgZm9yIGFsbCBtb3VzZWh3ZWVsIGV2ZW50cyBpbmNsdWRpbmcgRkY8L2xpPlxyXG4gICAqXHQ8L3VsPlxyXG4gICAqL1xyXG4gIHZzLm9wdGlvbnMgPSBmdW5jdGlvbihvcHQpIHtcclxuICAgIGtleVN0ZXAgPSBvcHQua2V5U3RlcCB8fCAxMjA7XHJcbiAgICBmaXJlZm94TXVsdCA9IG9wdC5maXJlZm94TXVsdCB8fCAxNTtcclxuICAgIHRvdWNoTXVsdCA9IG9wdC50b3VjaE11bHQgfHwgMjtcclxuICAgIG1vdXNlTXVsdCA9IG9wdC5tb3VzZU11bHQgfHwgMTtcclxuICB9O1xyXG5cclxuICB2cy5vZmYgPSBmdW5jdGlvbihmKSB7XHJcbiAgICB2YXIgaSA9IGxpc3RlbmVycy5pbmRleE9mKGYpO1xyXG4gICAgaWYgKGkgPT09IC0xKSByZXR1cm47XHJcblxyXG4gICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcclxuICAgIG51bUxpc3RlbmVycyA9IGxpc3RlbmVycy5sZW5ndGg7XHJcbiAgICBpZiAobnVtTGlzdGVuZXJzIDw9IDApIGRlc3Ryb3lMaXN0ZW5lcnMoKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKlx0QG1ldGhvZCBsb2NrVG91Y2hcclxuICAgKlx0QG1lbWJlcm9mIFZpcnR1YWxTY3JvbGxcclxuICAgKlx0QHN0YXRpY1xyXG4gICAqXHJcbiAgICpcdEBkZXNjcmlwdGlvbiBGb3IgVmlydHVhbFNjcm9sbCB0byB3b3JrIG9uIG1vYmlsZSwgdGhlIGRlZmF1bHQgc3dpcGUtdG8tc2Nyb2xsIGJlaGF2aW9yIG5lZWRzIHRvIGJlIHR1cm5lZCBvZmYuXHJcbiAgICpcdFRoaXMgZnVuY3Rpb24gd2lsbCB0YWtlIGNhcmUgb2YgdGhhdCwgaG93ZXZlciBpdCdzIGEgZmFpbHQgc2ltcGxlIG1lY2hhbmlzbSAtIHNlZSBpbiB0aGUgc291cmNlIGNvZGUsIGxpbmtlZCBiZWxvdy5cclxuICAgKi9cclxuICB2cy5sb2NrVG91Y2ggPSBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB2YXIgbm90aWZ5ID0gZnVuY3Rpb24oZSkge1xyXG4gICAgZXZlbnQueCArPSBldmVudC5kZWx0YVg7XHJcbiAgICBldmVudC55ICs9IGV2ZW50LmRlbHRhWTtcclxuICAgIGV2ZW50Lm9yaWdpbmFsRXZlbnQgPSBlO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtTGlzdGVuZXJzOyBpKyspIHtcclxuICAgICAgbGlzdGVuZXJzW2ldKGV2ZW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgb25XaGVlbCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vIEluIENocm9tZSBhbmQgaW4gRmlyZWZveCAoYXQgbGVhc3QgdGhlIG5ldyBvbmUpXHJcbiAgICBldmVudC5kZWx0YVggPSAoZS53aGVlbERlbHRhWCB8fCBlLmRlbHRhWCkgfHwgKGUud2hlZWxEZWx0YVkgfHwgZS5kZWx0YVkpICogLTE7XHJcbiAgICBldmVudC5kZWx0YVkgPSBlLndoZWVsRGVsdGFZIHx8IGUuZGVsdGFZICogLTE7XHJcblxyXG4gICAgLy8gZm9yIG91ciBwdXJwb3NlIGRlbHRhbW9kZSA9IDEgbWVhbnMgdXNlciBpcyBvbiBhIHdoZWVsIG1vdXNlLCBub3QgdG91Y2ggcGFkXHJcbiAgICAvLyByZWFsIG1lYW5pbmc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaGVlbEV2ZW50I0RlbHRhX21vZGVzXHJcbiAgICBpZiAoaXNGaXJlZm94ICYmIGUuZGVsdGFNb2RlID09PSAxKSB7XHJcbiAgICAgIGV2ZW50LmRlbHRhWCAqPSBmaXJlZm94TXVsdDtcclxuICAgICAgZXZlbnQuZGVsdGFZICo9IGZpcmVmb3hNdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LmRlbHRhWCAqPSBtb3VzZU11bHQ7XHJcbiAgICBldmVudC5kZWx0YVkgKj0gbW91c2VNdWx0O1xyXG5cclxuICAgIG5vdGlmeShlKTtcclxuICB9O1xyXG5cclxuICB2YXIgb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gSW4gU2FmYXJpLCBJRSBhbmQgaW4gQ2hyb21lIGlmICd3aGVlbCcgaXNuJ3QgZGVmaW5lZFxyXG4gICAgZXZlbnQuZGVsdGFYID0gZS53aGVlbERlbHRhWCA/IGUud2hlZWxEZWx0YVggOiAwO1xyXG4gICAgZXZlbnQuZGVsdGFZID0gZS53aGVlbERlbHRhWSA/IGUud2hlZWxEZWx0YVkgOiBlLndoZWVsRGVsdGE7XHJcblxyXG4gICAgbm90aWZ5KGUpO1xyXG4gIH07XHJcblxyXG4gIHZhciBvblRvdWNoU3RhcnQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgdCA9IGUudGFyZ2V0VG91Y2hlcyA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XHJcbiAgICB0b3VjaFN0YXJ0WCA9IHQucGFnZVg7XHJcbiAgICB0b3VjaFN0YXJ0WSA9IHQucGFnZVk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyA8IFRoaXMgbmVlZHMgdG8gYmUgbWFuYWdlZCBleHRlcm5hbGx5XHJcbiAgICB2YXIgdCA9IGUudGFyZ2V0VG91Y2hlcyA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XHJcblxyXG4gICAgZXZlbnQuZGVsdGFYID0gKHQucGFnZVggLSB0b3VjaFN0YXJ0WCkgKiB0b3VjaE11bHQ7XHJcbiAgICBldmVudC5kZWx0YVkgPSAodC5wYWdlWSAtIHRvdWNoU3RhcnRZKSAqIHRvdWNoTXVsdDtcclxuXHJcbiAgICB0b3VjaFN0YXJ0WCA9IHQucGFnZVg7XHJcbiAgICB0b3VjaFN0YXJ0WSA9IHQucGFnZVk7XHJcblxyXG4gICAgbm90aWZ5KGUpO1xyXG4gIH07XHJcblxyXG4gIHZhciBvbktleURvd24gPSBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAzNyBsZWZ0IGFycm93LCAzOCB1cCBhcnJvdywgMzkgcmlnaHQgYXJyb3csIDQwIGRvd24gYXJyb3dcclxuICAgIGV2ZW50LmRlbHRhWCA9IGV2ZW50LmRlbHRhWSA9IDA7XHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIGsubGVmdDpcclxuICAgICAgICBldmVudC5kZWx0YVggPSAta2V5U3RlcDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBrLnJpZ2h0OlxyXG4gICAgICAgIGV2ZW50LmRlbHRhWCA9IGtleVN0ZXA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugay51cDpcclxuICAgICAgICBldmVudC5kZWx0YVkgPSBrZXlTdGVwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGsuZG93bjpcclxuICAgICAgICBldmVudC5kZWx0YVkgPSAta2V5U3RlcDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnkoZSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGluaXRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChoYXNXaGVlbEV2ZW50KSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgb25XaGVlbCk7XHJcbiAgICBpZiAoaGFzTW91c2VXaGVlbEV2ZW50KVxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBvbk1vdXNlV2hlZWwpO1xyXG5cclxuICAgIC8vIGlmIChoYXNUb3VjaCkge1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBvblRvdWNoU3RhcnQpO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG9uVG91Y2hNb3ZlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoaGFzUG9pbnRlciAmJiBoYXNUb3VjaFdpbikge1xyXG4gICAgICBib2R5VG91Y2hBY3Rpb24gPSBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb247XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLCBvblRvdWNoU3RhcnQsIHRydWUpO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyTW92ZVwiLCBvblRvdWNoTW92ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhc0tleURvd24pIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XHJcblxyXG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIHZhciBkZXN0cm95TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoaGFzV2hlZWxFdmVudCkgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG9uV2hlZWwpO1xyXG4gICAgaWYgKGhhc01vdXNlV2hlZWxFdmVudClcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgb25Nb3VzZVdoZWVsKTtcclxuXHJcbiAgICAvLyBpZiAoaGFzVG91Y2gpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgb25Ub3VjaFN0YXJ0KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBvblRvdWNoTW92ZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaWYgKGhhc1BvaW50ZXIgJiYgaGFzVG91Y2hXaW4pIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gYm9keVRvdWNoQWN0aW9uO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLCBvblRvdWNoU3RhcnQsIHRydWUpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyTW92ZVwiLCBvblRvdWNoTW92ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhc0tleURvd24pIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XHJcblxyXG4gICAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gdnM7XHJcbn07XHJcblxyXG5cclxuLy9cclxuLy8gIFZpcnR1YWwgU2Nyb2xsXHJcbi8vXHJcbmV4cG9ydCBjb25zdCBTbW9vdGhTY3JvbGwgPSBmdW5jdGlvbihlbGVtLCBzY3JvbGxGdW5jKSB7XHJcbiAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgLy8gR3JhYiBib3RoIHJlZCBib3hlc1xyXG4gIHRoaXMuZWxlbSA9IGVsZW07XHJcblxyXG4gIC8vIENoZWNrIGhvdyBtdWNoIHdlIGNhbiBzY3JvbGwuIFRoaXMgdmFsdWUgaXMgdGhlXHJcbiAgLy8gaGVpZ2h0IG9mIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgbWludXMgdGhlIGhlaWdodCBvZiB0aGUgd2lkb3dcclxuICB2YXIgZnVsbEVsZW1IZWlnaHQgPSB0aGlzLmVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gIHZhciBwYXJlbnRIZWlnaHQgPSB0aGlzLmVsZW0ucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ7XHJcbiAgdmFyIGVsZW1XaWR0aDsvLyA9IHRoaXMuZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHRoaXMuZWxlbS47XHJcbiAgdmFyIGVsZW1IZWlnaHQ7Ly8gPSB0aGlzLmVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAvLyBBZGQgZWFzaW5nIHRvIHRoZSBzY3JvbGwuIFBsYXkgd2l0aCB0aGlzIHZhbHVlIHRvIGZpbmQgYSBzZXR0aW5nIHRoYXQgeW91IGxpa2UuXHJcbiAgdmFyIGVhc2UgPSAwLjE7XHJcbiAgdmFyIG11bHQgPSAwLjc7XHJcblxyXG4gIC8vIFN0b3JlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgdmFyIHRhcmdldFggPSAwLFxyXG4gICAgICB0YXJnZXRZID0gMDtcclxuICB2YXIgY3VycmVudFggPSAwLFxyXG4gICAgICBjdXJyZW50WSA9IDA7XHJcblxyXG4gIHZhciBzaG93U2Nyb2xsQmFyID0gZmFsc2U7XHJcblxyXG4gIHZhciBkaXNhYmxlID0gZmFsc2U7XHJcbiAgdmFyIGlzU2VsZiA9IHRydWU7XHJcblxyXG4gIHZhciBvblNjcm9sbCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmICghZGlzYWJsZSAmJiBpc1NlbGYpIHtcclxuICAgICAgLy8gQWNjdW11bGF0ZSBkZWx0YSB2YWx1ZSBvbiBlYWNoIHNjcm9sbCBldmVudFxyXG4gICAgICB0YXJnZXRZICs9IGUuZGVsdGFZICogbXVsdDtcclxuICAgICAgdGFyZ2V0WCArPSBlLmRlbHRhWCAqIG11bHQ7XHJcblxyXG4gICAgICAvLyBDbGFtcCB0aGUgdmFsdWUgc28gaXQgZG9lc24ndCBnbyB0b28gZmFyIHVwIG9yIGRvd25cclxuICAgICAgLy8gVGhlIHZhbHVlIG5lZWRzIHRvIGJlIGJldHdlZW4gMCBhbmQgLWVsZW1IZWlnaHRcclxuICAgICAgdGFyZ2V0WCA9IE1hdGgubWF4KC1lbGVtV2lkdGgsIHRhcmdldFgpO1xyXG4gICAgICB0YXJnZXRYID0gTWF0aC5taW4oMCwgdGFyZ2V0WCk7XHJcbiAgICAgIHRhcmdldFkgPSBNYXRoLm1heCgtZWxlbUhlaWdodCwgdGFyZ2V0WSk7XHJcbiAgICAgIHRhcmdldFkgPSBNYXRoLm1pbigwLCB0YXJnZXRZKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgb25BbmltID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBNYWtlIHN1cmUgdGhpcyB3b3JrcyBhY3Jvc3MgZGlmZmVyZW50IGJyb3dzZXJzICh1c2UgdGhlIHNoaW0gb3Igc29tZXRoaW5nKVxyXG5cclxuICAgIC8vIGtlZXAgYXQgYm90dG9tIHdoaWxlIHJlc2l6aW5nXHJcbiAgICBpZiAoLXRhcmdldFggPiBlbGVtV2lkdGggJiYgdGFyZ2V0WCA8IDApIHRhcmdldFggPSAtZWxlbVdpZHRoICsgMTtcclxuICAgIGlmICgtdGFyZ2V0WSA+IGVsZW1IZWlnaHQgJiYgdGFyZ2V0WSA8IDApIHRhcmdldFkgPSAtZWxlbUhlaWdodCArIDE7XHJcbiAgICBpZihfdGhpcy5lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCA8IF90aGlzLmVsZW0ucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQpXHJcbiAgICAgIHRhcmdldFkgPSAwO1xyXG5cclxuICAgIC8vIEdldCBjbG9zZXIgdG8gdGhlIHRhcmdldCB2YWx1ZSBhdCBlYWNoIGZyYW1lLCB1c2luZyBlYXNlLlxyXG4gICAgLy8gT3RoZXIgZWFzaW5nIG1ldGhvZHMgYXJlIGFsc28gb2suXHJcbiAgICBjdXJyZW50WCArPSAodGFyZ2V0WCAtIGN1cnJlbnRYKSAqIGVhc2U7XHJcbiAgICBjdXJyZW50WSArPSAodGFyZ2V0WSAtIGN1cnJlbnRZKSAqIGVhc2U7XHJcblxyXG5cclxuICAgIC8vIFVuY29tbWVudCB0aGlzIGxpbmUgdG8gc2Nyb2xsIGhvcml6b250YWxseVxyXG4gICAgLy8gY3VycmVudFggKz0gKHRhcmdldFggLSBjdXJyZW50WCkgKiBlYXNlO1xyXG5cclxuICAgIC8vIEFwcGx5IENTUyBzdHlsZVxyXG4gICAgc2V0VHJhbnNsYXRlKFxyXG4gICAgICBfdGhpcy5lbGVtLFxyXG4gICAgICBjdXJyZW50WC50b0ZpeGVkKDQpICsgXCJweFwiLFxyXG4gICAgICBjdXJyZW50WS50b0ZpeGVkKDQpICsgXCJweFwiLFxyXG4gICAgICAwICsgXCJweFwiXHJcbiAgICApO1xyXG5cclxuICAgIHJlZnJlc2goKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsRnVuYykgc2Nyb2xsRnVuYyhjdXJyZW50WSAvIGVsZW1IZWlnaHQsIGN1cnJlbnRZLCBlbGVtSGVpZ2h0KTtcclxuXHJcbiAgICBpZiAoc2hvd1Njcm9sbEJhcilcclxuICAgICAgaWYgKGZ1bGxFbGVtSGVpZ2h0ID4gX3RoaXMuZWxlbS5wYXJlbnROb2RlLm9mZnNldEhlaWdodClcclxuICAgICAgICByZVBvc2l0aW9uU2Nyb2xsQmFyKGN1cnJlbnRZKTtcclxuXHJcbiAgICAvLyBsYXp5TG9hZC5jaGVja0FuZFNob3dJbWcoKTtcclxuICB9O1xyXG5cclxuICAvLyBkZXRlY3QgdGhhdCBpZiBob3ZlcmVkIHNjcm9sbCBjb250YWluZXJcclxuICBhZGRFdmVudChfdGhpcy5lbGVtLCBcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpc1NlbGYgPSB0cnVlO1xyXG4gIH0pO1xyXG4gIGFkZEV2ZW50KF90aGlzLmVsZW0sIFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcclxuICAgIGlzU2VsZiA9IGZhbHNlO1xyXG4gIH0pO1xyXG4gIGFkZEV2ZW50KF90aGlzLmVsZW0sIFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbigpIHtcclxuICAgIGlzU2VsZiA9IHRydWU7XHJcbiAgfSk7XHJcbiAgYWRkRXZlbnQoX3RoaXMuZWxlbSwgXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIGlzU2VsZiA9IGZhbHNlO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgaW5pdFNjcm9sbEJhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX3RoaXMub2xkTW91c2VZID0gMDtcclxuICAgIF90aGlzLnNjcm9sbEJhck91dGVyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBfdGhpcy5zY3JvbGxCYXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIF90aGlzLnNjcm9sbEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgX3RoaXMuc2Nyb2xsQmFyT3V0ZXJXcmFwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2Nyb2xsQmFyT3V0ZXJXcmFwXCIpO1xyXG4gICAgX3RoaXMuc2Nyb2xsQmFyV3JhcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNjcm9sbEJhcldyYXBcIik7XHJcbiAgICBfdGhpcy5zY3JvbGxCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzY3JvbGxCYXJcIik7XHJcblxyXG4gICAgYWRkRXZlbnQoX3RoaXMuc2Nyb2xsQmFyLCBcIm1vdXNlZG93blwiLCBvbk1vdXNlRG93blNjcm9sbEJhcik7XHJcblxyXG4gICAgX3RoaXMuc2Nyb2xsQmFyV3JhcC5hcHBlbmRDaGlsZChfdGhpcy5zY3JvbGxCYXIpO1xyXG4gICAgX3RoaXMuc2Nyb2xsQmFyT3V0ZXJXcmFwLmFwcGVuZENoaWxkKF90aGlzLnNjcm9sbEJhcldyYXApO1xyXG4gICAgX3RoaXMuZWxlbS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKF90aGlzLnNjcm9sbEJhck91dGVyV3JhcCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIHJlUG9zaXRpb25TY3JvbGxCYXIgPSBmdW5jdGlvbih5KSB7XHJcbiAgICB2YXIgc2Nyb2xsQmFySGVpZ2h0ID0gKDEgLSBlbGVtSGVpZ2h0IC8gZnVsbEVsZW1IZWlnaHQpICogMTAwO1xyXG4gICAgX3RoaXMuc2Nyb2xsQmFyLnN0eWxlLmhlaWdodCA9IHNjcm9sbEJhckhlaWdodCArIFwiJVwiO1xyXG4gICAgX3RoaXMuc2Nyb2xsQmFyWSA9IChfdGhpcy5zY3JvbGxCYXJXcmFwLm9mZnNldEhlaWdodCAtIF90aGlzLnNjcm9sbEJhci5vZmZzZXRIZWlnaHQpICogKHkgLyBlbGVtSGVpZ2h0KTtcclxuXHJcbiAgICBzZXRUcmFuc2xhdGUoIF90aGlzLnNjcm9sbEJhciwgJy01MCUnLCAtX3RoaXMuc2Nyb2xsQmFyWS50b0ZpeGVkKDQpICsgXCJweFwiLCAwICsgXCJweFwiKTtcclxuICB9O1xyXG5cclxuICB2YXIgb25Nb3VzZURvd25TY3JvbGxCYXIgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBfdGhpcy5vbGRNb3VzZVkgPSBlLnBhZ2VZO1xyXG4gICAgX3RoaXMuY2xpY2tlZFNjcm9sbEJhciA9IHRydWU7XHJcbiAgICBhZGRDbGFzcyh0aGlzLCBcImFjdGl2ZVwiKTtcclxuICAgIFxyXG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsIFwibW91c2Vtb3ZlXCIsIG9uTW92ZVNjcm9sbEJhcik7XHJcbiAgICBhZGRFdmVudChkb2N1bWVudCwgXCJtb3VzZXVwXCIsIG9uTW91c2VVcFNjcm9sbEJhcik7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uTW92ZVNjcm9sbEJhciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmIChfdGhpcy5jbGlja2VkU2Nyb2xsQmFyKSB7XHJcbiAgICAgIHZhciB5ID0gX3RoaXMub2xkTW91c2VZIC0gZS5wYWdlWTtcclxuICAgICAgdGFyZ2V0WSArPSB5ICogKGZ1bGxFbGVtSGVpZ2h0IC8gX3RoaXMuZWxlbS5wYXJlbnROb2RlLm9mZnNldEhlaWdodCk7XHJcblxyXG4gICAgICB0YXJnZXRZID0gTWF0aC5tYXgoLWVsZW1IZWlnaHQsIHRhcmdldFkpO1xyXG4gICAgICB0YXJnZXRZID0gTWF0aC5taW4oMCwgdGFyZ2V0WSk7XHJcblxyXG4gICAgICBfdGhpcy5vbGRNb3VzZVkgPSBlLnBhZ2VZO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZhciBvbk1vdXNlVXBTY3JvbGxCYXIgPSBmdW5jdGlvbigpIHtcclxuICAgIF90aGlzLmNsaWNrZWRTY3JvbGxCYXIgPSBmYWxzZTtcclxuICAgIHJlbW92ZUNsYXNzKF90aGlzLnNjcm9sbEJhciwgXCJhY3RpdmVcIik7XHJcbiAgICBcclxuICAgIHJlbW92ZUV2ZW50KGRvY3VtZW50LCBcIm1vdXNlbW92ZVwiLCBvbk1vdmVTY3JvbGxCYXIpO1xyXG4gICAgcmVtb3ZlRXZlbnQoZG9jdW1lbnQsIFwibW91c2V1cFwiLCBvbk1vdXNlVXBTY3JvbGxCYXIpO1xyXG4gIH07XHJcblxyXG4gIHZhciByZXNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY3VycmVudFkgPSAwO1xyXG4gICAgdGFyZ2V0WSA9IDA7XHJcbiAgfTtcclxuXHJcbiAgdmFyIHJlZnJlc2ggPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChfdGhpcy5lbGVtLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICBmdWxsRWxlbUhlaWdodCA9IF90aGlzLmVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgICBlbGVtV2lkdGggPSBfdGhpcy5lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gX3RoaXMuZWxlbS5wYXJlbnROb2RlLm9mZnNldFdpZHRoO1xyXG4gICAgICBlbGVtSGVpZ2h0ID0gX3RoaXMuZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSBfdGhpcy5lbGVtLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKHNob3dTY3JvbGxCYXIpIHtcclxuICAgICAgICBpZiAoZnVsbEVsZW1IZWlnaHQgPiBwYXJlbnRIZWlnaHQpIHtcclxuICAgICAgICAgIGlmIChoYXNDbGFzcyhfdGhpcy5zY3JvbGxCYXJPdXRlcldyYXAsIFwiaGlkZVwiKSlcclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoX3RoaXMuc2Nyb2xsQmFyT3V0ZXJXcmFwLCBcImhpZGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghaGFzQ2xhc3MoX3RoaXMuc2Nyb2xsQmFyT3V0ZXJXcmFwLCBcImhpZGVcIikpXHJcbiAgICAgICAgICAgIGFkZENsYXNzKF90aGlzLnNjcm9sbEJhck91dGVyV3JhcCwgXCJoaWRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZhciB0byA9IGZ1bmN0aW9uKHkpIHtcclxuICAgIGVsZW1IZWlnaHQgPVxyXG4gICAgICBfdGhpcy5lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtXHJcbiAgICAgIF90aGlzLmVsZW0ucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0YXJnZXRZID0gTWF0aC5tYXgoLWVsZW1IZWlnaHQsIHkpO1xyXG4gIH07XHJcbiAgdmFyIHNldCA9IGZ1bmN0aW9uKHkpIHtcclxuICAgIGN1cnJlbnRZID0geTtcclxuICAgIHRhcmdldFkgPSB5O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZzID0gVmlydHVhbFNjcm9sbCgpO1xyXG4gIGNvbnN0IGZpID0gRnJhbWVJbXB1bHNlKCk7XHJcbiAgdmFyIGlzT24gPSBmYWxzZTtcclxuICB2YXIgb24gPSBmdW5jdGlvbigpIHtcclxuICAgIGlzT24gPSB0cnVlO1xyXG4gICAgcmVmcmVzaCgpO1xyXG4gICAgb25SZXNpemUoKTtcclxuICAgIGluaXRTY3JvbGxCYXIoKTtcclxuICAgIG9uU2hvd1Njcm9sbEJhcigpO1xyXG4gICAgdnMub24ob25TY3JvbGwpO1xyXG4gICAgZmkub24ob25BbmltKTtcclxuICB9O1xyXG5cclxuICB2YXIgb2ZmID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpc09uID0gZmFsc2U7XHJcbiAgICB2cy5vZmYob25TY3JvbGwpO1xyXG4gICAgZmkub2ZmKG9uQW5pbSk7XHJcbiAgICBvbkhpZGVTY3JvbGxCYXIoKTtcclxuICAgIGRlc3Ryb3koKTtcclxuICB9O1xyXG4gIFxyXG4gIHZhciBkZXN0cm95ID0gZnVuY3Rpb24oKXtcclxuICAgIC8vIHJlbW92ZUV2ZW50KHdpbmRvdywgXCJyZXNpemVcIiwgb25SZXNpemUpO1xyXG4gICAgaWYoX3RoaXMuc2Nyb2xsQmFyT3V0ZXJXcmFwKXtcclxuICAgICAgcmVtb3ZlRXZlbnQoX3RoaXMuc2Nyb2xsQmFyLCBcIm1vdXNlZG93blwiLCBvbk1vdXNlRG93blNjcm9sbEJhcik7XHJcbiAgICAgIF90aGlzLnNjcm9sbEJhck91dGVyV3JhcC5yZW1vdmUoKTtcclxuICAgICAgX3RoaXMuc2Nyb2xsQmFyT3V0ZXJXcmFwID0gbnVsbDtcclxuICAgICAgX3RoaXMuc2Nyb2xsQmFyV3JhcCA9IG51bGw7XHJcbiAgICAgIF90aGlzLnNjcm9sbEJhciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgb25SZXNpemUgPSBmdW5jdGlvbigpIHtcclxuICAgIHBhcmVudEhlaWdodCA9IF90aGlzLmVsZW0ucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgaWYoaXNNb2JpbGUoKSkge1xyXG4gICAgICBpZihpc09uKSB7XHJcbiAgICAgICAgb2ZmKCk7XHJcbiAgICAgICAgc2V0VHJhbnNsYXRlKF90aGlzLmVsZW0sIDAgKyBcInB4XCIsIDAgKyBcInB4XCIsIDAgKyBcInB4XCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZighaXNPbikge1xyXG4gICAgICAgIGluaXRTY3JvbGxCYXIoKTtcclxuICAgICAgICBvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGRpc2FibGUpIG9uRW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB2YXIgb25EaXNhYmxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBkaXNhYmxlID0gdHJ1ZTtcclxuICB9O1xyXG4gIHZhciBvbkVuYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZGlzYWJsZSA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIHZhciBvblNob3dTY3JvbGxCYXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHNob3dTY3JvbGxCYXIgPSB0cnVlO1xyXG4gICAgcmVtb3ZlQ2xhc3MoX3RoaXMuc2Nyb2xsQmFyV3JhcCwnaGlkZScpO1xyXG4gIH07XHJcbiAgdmFyIG9uSGlkZVNjcm9sbEJhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgc2hvd1Njcm9sbEJhciA9IGZhbHNlO1xyXG4gICAgaWYoX3RoaXMuc2Nyb2xsQmFyV3JhcCkgYWRkQ2xhc3MoX3RoaXMuc2Nyb2xsQmFyV3JhcCwnaGlkZScpO1xyXG4gIH07XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZighaXNNb2JpbGUoKSl7XHJcbiAgICAgIG9uKCk7XHJcbiAgICB9XHJcbiAgICBhZGRFdmVudCh3aW5kb3csIFwicmVzaXplXCIsIG9uUmVzaXplKTtcclxuICB9O1xyXG5cclxuICBpbml0KCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXNldDogcmVzZXQsXHJcbiAgICByZWZyZXNoOiByZWZyZXNoLFxyXG4gICAgb25SZXNpemU6IG9uUmVzaXplLFxyXG4gICAgc2V0OiBzZXQsXHJcbiAgICB0bzogdG8sXHJcbiAgICBvbjogb24sXHJcbiAgICBvZmY6IG9mZixcclxuICAgIGRpc2FibGU6IG9uRGlzYWJsZSxcclxuICAgIGVuYWJsZTogb25FbmFibGUsXHJcbiAgICBzaG93U2Nyb2xsQmFyOiBvblNob3dTY3JvbGxCYXIsXHJcbiAgICBoaWRlU2Nyb2xsQmFyOiBvbkhpZGVTY3JvbGxCYXIsXHJcbiAgICBkZXN0cm95OiBkZXN0cm95XHJcbiAgfTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlUHJldmlvdXMgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcclxuICB9KTtcclxuICByZXR1cm4gcmVmLmN1cnJlbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9