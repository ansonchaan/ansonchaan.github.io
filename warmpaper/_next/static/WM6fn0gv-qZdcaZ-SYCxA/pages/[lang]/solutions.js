(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"6/rv":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/solutions",function(){return n("pxQk")}])},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),i=n("i2R6"),a=n("48fX"),o=n("tCBg"),s=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)}}var c=n("AroE"),u=n("7KCV");t.__esModule=!0,t.default=void 0;var f,d=u(n("q1tI")),p=n("QmWs"),g=n("g/15"),h=c(n("nOHt")),v=n("elyg");function m(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var b=new Map,y=window.IntersectionObserver,w={};function x(){return f||(y?f=new y((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var E=function(e){a(o,e);var t=l(o);function o(e){var n;return r(this,o),(n=t.call(this,e)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(i,a){if(r&&i===t&&a===n)return r;var o=e(i,a);return t=i,n=a,r=o,o}}((function(e,t){return{href:(0,v.addBasePath)(m(e)),as:t?(0,v.addBasePath)(m(t)):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,i=t.target;if("A"!==r||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),o=a.href,s=a.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,g.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var l=window.location.pathname;o=(0,p.resolve)(l,o),s=s?(0,p.resolve)(l,s):o,e.preventDefault();var c=n.props.scroll;null==c&&(c=s.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](o,s,{shallow:n.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return i(o,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,i=(0,p.resolve)(e,n);return[i,r?(0,p.resolve)(e,r):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),i=r.href,a=r.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=a||i);var l=n("P5f7").rewriteUrlForNextExport;return s.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=l(s.href)),d.default.cloneElement(o,s)}}]),o}(d.Component);t.default=E},pxQk:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return u}));var r=n("q1tI"),i=n.n(r),a=n("/MKj"),o=n("nOHt"),s=n("YFqc"),l=n.n(s),c=i.a.createElement,u=!0;t.default=function(){var e=Object(a.c)((function(e){return e.language})),t=Object(o.useRouter)().basePath;Object(r.useEffect)((function(){}),[]);var n=function(e){e.currentTarget.style.zIndex=i++},i=10;return c("div",{id:"solutions"},c("div",{id:"pageTitle",className:"bigTitle b center"},"Solutions"),c("div",{id:"description",className:"center"},c("div",{id:"wrap"},c("p",{className:"h2"},"Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data."),c("div",{id:"icon"})),c("div",{id:"bgWrap"},c("div",{id:"bg"},c("span",null)))),c("div",{id:"outerWrap"},c("div",{id:"listWrap",className:"center"},c("ul",null,c("li",{onMouseEnter:function(e){return n(e)}},c(l.a,{href:"/[lang]/solutions/[post]",as:"/".concat(e,"/solutions/test")},c("a",{style:{backgroundImage:"url(".concat(t,"/images/solutionsimg1.jpg)")}},c("div",{id:"front"},c("div",{id:"wrap"},c("h1",{className:"b"},"Management & ",c("br",null),"Communication"),c("h6",null,"Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data."),c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30.024",height:"21.912",viewBox:"0 0 30.024 21.912"},c("g",{transform:"translate(-1.893 -10.026)"},c("g",{transform:"translate(1.893 10.026)"},c("path",{fill:"#a6c3be",fillRule:"evenodd",d:"M24.307,23.1H4.105a2.174,2.174,0,0,1-2.144-1.577A2.04,2.04,0,0,1,3.081,19.13a2.693,2.693,0,0,1,1.083-.238q9.883-.02,19.765-.01H24.3c-.1-.1-.165-.174-.234-.24-1.738-1.67-3.48-3.334-5.211-5.009a2.067,2.067,0,0,1,.94-3.509,2.159,2.159,0,0,1,2.165.5q4.692,4.455,9.363,8.933a2.027,2.027,0,0,1-.028,2.889c-.3.3-.618.593-.928.89q-4.159,3.971-8.32,7.939a2.272,2.272,0,0,1-3.583-.486,2.054,2.054,0,0,1,.432-2.517q2.574-2.463,5.155-4.92C24.126,23.286,24.194,23.214,24.307,23.1Z",transform:"translate(-1.893 -10.026)"})))))),c("div",{id:"back"})))),c("li",{onMouseEnter:function(e){return n(e)}},c(l.a,{href:"/[lang]/solutions/[post]",as:"/".concat(e,"/solutions/test")},c("a",{style:{backgroundImage:"url(".concat(t,"/images/solutionsimg2.jpg)")}},c("div",{id:"front"},c("div",{id:"wrap"},c("h6",null,"Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data."),c("h2",{className:"b"},"WEB Design"),c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30.024",height:"21.912",viewBox:"0 0 30.024 21.912"},c("g",{transform:"translate(-1.893 -10.026)"},c("g",{transform:"translate(1.893 10.026)"},c("path",{fill:"#a6c3be",fillRule:"evenodd",d:"M24.307,23.1H4.105a2.174,2.174,0,0,1-2.144-1.577A2.04,2.04,0,0,1,3.081,19.13a2.693,2.693,0,0,1,1.083-.238q9.883-.02,19.765-.01H24.3c-.1-.1-.165-.174-.234-.24-1.738-1.67-3.48-3.334-5.211-5.009a2.067,2.067,0,0,1,.94-3.509,2.159,2.159,0,0,1,2.165.5q4.692,4.455,9.363,8.933a2.027,2.027,0,0,1-.028,2.889c-.3.3-.618.593-.928.89q-4.159,3.971-8.32,7.939a2.272,2.272,0,0,1-3.583-.486,2.054,2.054,0,0,1,.432-2.517q2.574-2.463,5.155-4.92C24.126,23.286,24.194,23.214,24.307,23.1Z",transform:"translate(-1.893 -10.026)"}))))))))),c("li",{onMouseEnter:function(e){return n(e)}},c("a",{style:{backgroundImage:"url(".concat(t,"/images/solutionsimg3.jpg)")}},c("div",{id:"front"}))),c("li",{onMouseEnter:function(e){return n(e)}},c(l.a,{href:"/[lang]/solutions/[post]",as:"/".concat(e,"/solutions/test")},c("a",{style:{backgroundColor:"#dcddcd"}},c("div",{id:"front"},c("div",{id:"wrap"},c("h2",{className:"b"},"Business Analytic"),c("h6",null,"Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data."),c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30.024",height:"21.912",viewBox:"0 0 30.024 21.912"},c("g",{transform:"translate(-1.893 -10.026)"},c("g",{transform:"translate(1.893 10.026)"},c("path",{fill:"#a6c3be",fillRule:"evenodd",d:"M24.307,23.1H4.105a2.174,2.174,0,0,1-2.144-1.577A2.04,2.04,0,0,1,3.081,19.13a2.693,2.693,0,0,1,1.083-.238q9.883-.02,19.765-.01H24.3c-.1-.1-.165-.174-.234-.24-1.738-1.67-3.48-3.334-5.211-5.009a2.067,2.067,0,0,1,.94-3.509,2.159,2.159,0,0,1,2.165.5q4.692,4.455,9.363,8.933a2.027,2.027,0,0,1-.028,2.889c-.3.3-.618.593-.928.89q-4.159,3.971-8.32,7.939a2.272,2.272,0,0,1-3.583-.486,2.054,2.054,0,0,1,.432-2.517q2.574-2.463,5.155-4.92C24.126,23.286,24.194,23.214,24.307,23.1Z",transform:"translate(-1.893 -10.026)"}))))))))),c("li",{className:"hasBack",onMouseEnter:function(e){return n(e)}},c(l.a,{href:"/[lang]/solutions/[post]",as:"/".concat(e,"/solutions/test")},c("a",{style:{backgroundColor:"#eff0ea"}},c("div",{id:"front"},c("div",{id:"wrap"},c("div",{id:"title"},c("h2",{className:"b"},"Consultant & User Experiences"),c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30.024",height:"21.912",viewBox:"0 0 30.024 21.912"},c("g",{transform:"translate(-1.893 -10.026)"},c("g",{transform:"translate(1.893 10.026)"},c("path",{fill:"#a6c3be",fillRule:"evenodd",d:"M24.307,23.1H4.105a2.174,2.174,0,0,1-2.144-1.577A2.04,2.04,0,0,1,3.081,19.13a2.693,2.693,0,0,1,1.083-.238q9.883-.02,19.765-.01H24.3c-.1-.1-.165-.174-.234-.24-1.738-1.67-3.48-3.334-5.211-5.009a2.067,2.067,0,0,1,.94-3.509,2.159,2.159,0,0,1,2.165.5q4.692,4.455,9.363,8.933a2.027,2.027,0,0,1-.028,2.889c-.3.3-.618.593-.928.89q-4.159,3.971-8.32,7.939a2.272,2.272,0,0,1-3.583-.486,2.054,2.054,0,0,1,.432-2.517q2.574-2.463,5.155-4.92C24.126,23.286,24.194,23.214,24.307,23.1Z",transform:"translate(-1.893 -10.026)"}))))),c("h6",null,"Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data."))),c("div",{id:"back"},c("h2",{className:"b cap"},"Consultant & User Experiences"),c("ul",{id:"numoflist",className:"h4 b"},c("li",null,"Ready to use"),c("li",null,"Easy to adopt"),c("li",null,"Data analysis")),c("h6",null,"Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data.Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data.Our capabilities are defined by our imagination and refined by our experience. Built on strategy, driven by data."))))),c("li",{onMouseEnter:function(e){return n(e)}},c("a",{style:{backgroundImage:"url(".concat(t,"/images/solutionsimg4.jpg)")}},c("div",{id:"front"}))))),c("div",{id:"ourpartners"},c("h4",{className:"b"},"Our Partners"),c("div",{id:"marquee"},c("ul",null,c("li",null,c("img",{src:"".concat(t,"/images/icons/starbucks.png")})),c("li",null,c("img",{src:"".concat(t,"/images/icons/sidley.png")})),c("li",null,c("img",{src:"".concat(t,"/images/icons/littler.png")})),c("li",null,c("img",{src:"".concat(t,"/images/icons/nespresso.png")})),c("li",null,c("img",{src:"".concat(t,"/images/icons/starbucks.png")})),c("li",null,c("img",{src:"".concat(t,"/images/icons/sidley.png")})),c("li",null,c("img",{src:"".concat(t,"/images/icons/littler.png")})),c("li",null,c("img",{src:"".concat(t,"/images/icons/nespresso.png")})),c("li",null,c("img",{src:"".concat(t,"/images/icons/starbucks.png")})),c("li",null,c("img",{src:"".concat(t,"/images/icons/sidley.png")})),c("li",null,c("img",{src:"".concat(t,"/images/icons/littler.png")})),c("li",null,c("img",{src:"".concat(t,"/images/icons/nespresso.png")})))))))}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},tCBg:function(e,t,n){var r=n("C+bE"),i=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?i(e):t}}},[["6/rv",1,2,0,3]]]);