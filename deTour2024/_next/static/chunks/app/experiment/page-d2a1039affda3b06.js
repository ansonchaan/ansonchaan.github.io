(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[631],{5966:function(t,e,i){Promise.resolve().then(i.bind(i,4186))},357:function(t,e,i){"use strict";var s,o;t.exports=(null==(s=i.g.process)?void 0:s.env)&&"object"==typeof(null==(o=i.g.process)?void 0:o.env)?i.g.process:i(8081)},8081:function(t){!function(){var e={229:function(t){var e,i,s,o=t.exports={};function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function l(t){if(e===setTimeout)return setTimeout(t,0);if((e===n||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(i){try{return e.call(null,t,0)}catch(i){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:n}catch(t){e=n}try{i="function"==typeof clearTimeout?clearTimeout:r}catch(t){i=r}}();var h=[],a=!1,c=-1;function u(){a&&s&&(a=!1,s.length?h=s.concat(h):c=-1,h.length&&d())}function d(){if(!a){var t=l(u);a=!0;for(var e=h.length;e;){for(s=h,h=[];++c<e;)s&&s[c].run();c=-1,e=h.length}s=null,a=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===r||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];h.push(new p(t,e)),1!==h.length||a||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},i={};function s(t){var o=i[t];if(void 0!==o)return o.exports;var n=i[t]={exports:{}},r=!0;try{e[t](n,n.exports,s),r=!1}finally{r&&delete i[t]}return n.exports}s.ab="//";var o=s(229);t.exports=o}()},7359:function(t,e,i){"use strict";i.d(e,{pi:function(){return w},ZP:function(){return w},LZ:function(){return g}});var s=i(7437),o="undefined"!=typeof window&&new class{constructor(){this.raf=t=>{requestAnimationFrame(this.raf);let e=t-this.now;this.now=t;for(let i=0;i<this.callbacks.length;i++)this.callbacks[i].callback(t,e)},this.callbacks=[],this.now=performance.now(),requestAnimationFrame(this.raf)}add(t,e=0){return this.callbacks.push({callback:t,priority:e}),this.callbacks.sort((t,e)=>t.priority-e.priority),()=>this.remove(t)}remove(t){this.callbacks=this.callbacks.filter(({callback:e})=>t!==e)}};function n(t,e,i){return Math.max(t,Math.min(e,i))}class r{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.currentTime=0}advance(t){var e,i,s,o;if(!this.isRunning)return;let r=!1;if(this.duration&&this.easing){this.currentTime+=t;let e=n(0,this.currentTime/this.duration,1),i=(r=e>=1)?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=(i=this.value,s=this.to,(1-(o=1-Math.exp(-(60*this.lerp)*t)))*i+o*s),Math.round(this.value)===this.to&&(this.value=this.to,r=!0)):(this.value=this.to,r=!0);r&&this.stop(),null===(e=this.onUpdate)||void 0===e||e.call(this,this.value,r)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i,duration:s,easing:o,onStart:n,onUpdate:r}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,null==n||n(),this.onUpdate=r}}class l{constructor(t,e,{autoResize:i=!0,debounce:s=250}={}){var o;let n;this.wrapper=t,this.content=e,this.width=0,this.height=0,this.scrollHeight=0,this.scrollWidth=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},i&&(this.debouncedResize=(o=this.resize,function(...t){let e=this;clearTimeout(n),n=setTimeout(()=>{n=void 0,o.apply(e,t)},s)}),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;null===(t=this.wrapperResizeObserver)||void 0===t||t.disconnect(),null===(e=this.contentResizeObserver)||void 0===e||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class h{constructor(){this.events={}}emit(t,...e){var i;let s=this.events[t]||[];for(let t=0,o=s.length;t<o;t++)null===(i=s[t])||void 0===i||i.call(s,...e)}on(t,e){var i;return(null===(i=this.events[t])||void 0===i?void 0:i.push(e))||(this.events[t]=[e]),()=>{var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter(t=>e!==t)}}off(t,e){var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter(t=>e!==t)}destroy(){this.events={}}}let a=100/6,c={passive:!1};class u{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){this.element=t,this.options=e,this.touchStart={x:0,y:0},this.lastDelta={x:0,y:0},this.window={width:0,height:0},this.emitter=new h,this.onTouchStart=t=>{let{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})},this.onTouchMove=t=>{let{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.options.touchMultiplier,o=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:o},this.emitter.emit("scroll",{deltaX:s,deltaY:o,event:t})},this.onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})},this.onWheel=t=>{let{deltaX:e,deltaY:i,deltaMode:s}=t;e*=1===s?a:2===s?this.window.width:1,i*=1===s?a:2===s?this.window.height:1,e*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})},this.onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}},window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,c),this.element.addEventListener("touchstart",this.onTouchStart,c),this.element.addEventListener("touchmove",this.onTouchMove,c),this.element.addEventListener("touchend",this.onTouchEnd,c)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,c),this.element.removeEventListener("touchstart",this.onTouchStart,c),this.element.removeEventListener("touchmove",this.onTouchMove,c),this.element.removeEventListener("touchend",this.onTouchEnd,c)}}class d{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:i=t,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:n=.075,touchInertiaMultiplier:a=35,duration:c,easing:d=t=>Math.min(1,1.001-Math.pow(2,-10*t)),lerp:p=.1,infinite:m=!1,orientation:v="vertical",gestureOrientation:f="vertical",touchMultiplier:g=1,wheelMultiplier:w=1,autoResize:S=!0,prevent:y,virtualScroll:b,__experimental__naiveDimensions:T=!1}={}){this._isScrolling=!1,this._isStopped=!1,this._isLocked=!1,this._preventNextNativeScrollEvent=!1,this._resetVelocityTimeout=null,this.time=0,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.animate=new r,this.emitter=new h,this.onPointerDown=t=>{1===t.button&&this.reset()},this.onVirtualScroll=t=>{if("function"==typeof this.options.virtualScroll&&!1===this.options.virtualScroll(t))return;let{deltaX:e,deltaY:i,event:s}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:i,event:s}),s.ctrlKey)return;let o=s.type.includes("touch"),n=s.type.includes("wheel");if(this.isTouching="touchstart"===s.type||"touchmove"===s.type,this.options.syncTouch&&o&&"touchstart"===s.type&&!this.isStopped&&!this.isLocked)return void this.reset();let r=0===e&&0===i,l="vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===e;if(r||l)return;let h=s.composedPath();h=h.slice(0,h.indexOf(this.rootElement));let a=this.options.prevent;if(h.find(t=>{var e,i,s,r,l;return t instanceof HTMLElement&&("function"==typeof a&&(null==a?void 0:a(t))||(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,"data-lenis-prevent"))||o&&(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,"data-lenis-prevent-touch"))||n&&(null===(s=t.hasAttribute)||void 0===s?void 0:s.call(t,"data-lenis-prevent-wheel"))||(null===(r=t.classList)||void 0===r?void 0:r.contains("lenis"))&&!(null===(l=t.classList)||void 0===l?void 0:l.contains("lenis-stopped")))}))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(!(this.options.syncTouch&&o||this.options.smoothWheel&&n))return this.isScrolling="native",void this.animate.stop();s.preventDefault();let c=i;"both"===this.options.gestureOrientation?c=Math.abs(i)>Math.abs(e)?i:e:"horizontal"===this.options.gestureOrientation&&(c=e);let u=o&&this.options.syncTouch,d=o&&"touchend"===s.type&&Math.abs(c)>5;d&&(c=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+c,Object.assign({programmatic:!1},u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(null!==this._resetVelocityTimeout&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(!1===this.isScrolling||"native"===this.isScrolling){let t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isScrolling="native",this.emit(),0!==this.velocity&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}},window.lenisVersion="1.1.13",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,eventsTarget:i,smoothWheel:s,syncTouch:o,syncTouchLerp:n,touchInertiaMultiplier:a,duration:c,easing:d,lerp:p,infinite:m,gestureOrientation:f,orientation:v,touchMultiplier:g,wheelMultiplier:w,autoResize:S,prevent:y,virtualScroll:b,__experimental__naiveDimensions:T},this.dimensions=new l(t,e,{autoResize:S}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new u(i,{touchMultiplier:g,wheelMultiplier:w}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){let e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:s=!1,duration:o=this.options.duration,easing:r=this.options.easing,lerp:l=this.options.lerp,onStart:h,onComplete:a,force:c=!1,programmatic:u=!0,userData:d}={}){if(!this.isStopped&&!this.isLocked||c){if("string"==typeof t&&["top","left","start"].includes(t))t=0;else if("string"==typeof t&&["bottom","right","end"].includes(t))t=this.limit;else{let i;if("string"==typeof t?i=document.querySelector(t):t instanceof HTMLElement&&(null==t?void 0:t.nodeType)&&(i=t),i){if(this.options.wrapper!==window){let t=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?t.left:t.top}let s=i.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof t){if(t+=e,t=Math.round(t),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):t=n(0,t,this.limit),t===this.targetScroll)return null==h||h(this),void(null==a||a(this));if(this.userData=null!=d?d:{},i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),null==a||a(this),void(this.userData={});u||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:r,lerp:l,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",null==h||h(this)},onUpdate:(t,e)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),u&&(this.targetScroll=t),e||this.emit(),e&&(this.reset(),this.emit(),null==a||a(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){var t;return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return"smooth"===this.isScrolling}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),"smooth"===this.isScrolling&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}var p=i(2265);let m=(0,p.createContext)(null),v=new class{constructor(t){this.state=t,this.listeners=[]}set(t){for(let e of(this.state=t,this.listeners))e(this.state)}subscribe(t){return this.listeners=[...this.listeners,t],()=>{this.listeners=this.listeners.filter(e=>e!==t)}}get(){return this.state}}(null),f={};function g(t,e=[],i=0){var s;let o=(0,p.useContext)(m),n=function(t){let[e,i]=(0,p.useState)(t.get());return(0,p.useEffect)(()=>t.subscribe(t=>i(t)),[t]),e}(v),{lenis:r,addCallback:l,removeCallback:h}=null!==(s=null!=o?o:n)&&void 0!==s?s:f;return(0,p.useEffect)(()=>{if(t&&l&&h&&r)return l(t,i),t(r),()=>{h(t)}},[r,l,h,i,...e]),r}let w=(0,p.forwardRef)(({children:t,root:e=!1,options:i={},autoRaf:n=!0,rafPriority:r=0,className:l,props:h},a)=>{let c=(0,p.useRef)(null),u=(0,p.useRef)(null),[f,g]=(0,p.useState)(void 0);(0,p.useImperativeHandle)(a,()=>({wrapper:c.current,content:u.current,lenis:f}),[f]),(0,p.useEffect)(()=>{let t=new d(Object.assign(Object.assign({},i),!e&&{wrapper:c.current,content:u.current}));return g(t),()=>{t.destroy(),g(void 0)}},[e,JSON.stringify(i)]),(0,p.useEffect)(()=>{if(f&&n)return o.add(t=>f.raf(t),r)},[f,n,r]);let w=(0,p.useRef)([]),S=(0,p.useCallback)((t,e)=>{w.current.push({callback:t,priority:e}),w.current.sort((t,e)=>t.priority-e.priority)},[]),y=(0,p.useCallback)(t=>{w.current=w.current.filter(e=>e.callback!==t)},[]);return(0,p.useEffect)(()=>{if(e&&f)return v.set({lenis:f,addCallback:S,removeCallback:y}),()=>v.set(null)},[e,f,S,y]),(0,p.useEffect)(()=>{if(!f)return;let t=t=>{for(let e=0;e<w.current.length;e++)w.current[e].callback(t)};return f.on("scroll",t),()=>{f.off("scroll",t)}},[f]),(0,s.jsx)(m.Provider,{value:{lenis:f,addCallback:S,removeCallback:y},children:e?t:(0,s.jsx)("div",Object.assign({ref:c,className:l},h,{children:(0,s.jsx)("div",{ref:u,children:t})}))})})}},function(t){t.O(0,[689,723,858,742,922,256,186,971,23,744],function(){return t(t.s=5966)}),_N_E=t.O()}]);