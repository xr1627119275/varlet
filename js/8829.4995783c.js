(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[8829],{7245:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});const r={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},10:{name:"October",abbr:"OCT"},11:{name:"November",abbr:"NOV"},12:{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"}},9486:(n,e,t)=>{"use strict";t.d(e,{bU:()=>c,P2:()=>s,IH:()=>d,D$:()=>f});var r=t(641),a=t(8732);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(){var n={},e=(0,r.iH)({}),t=function(t){if(!n[t])return console.warn("The ".concat(t," does not exist. You can mount a language package using the add method")),{};e.value=n[t]};return{packs:n,pack:e,add:function(e,t){t.lang=e,n[e]=t},use:t,merge:function(e,r){n[e]?(n[e]=i(i({},n[e]),r),t(e)):console.warn("The ".concat(e," does not exist. You can mount a language package using the add method"))}}}var u=c(),s=(u.packs,u.pack),d=u.add,f=u.use;u.merge,d("zh-CN",a.Z),f("zh-CN")},8732:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});const r={dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",monthDictionary:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},weekDictionary:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},selected:"个被选择"}},4268:(n,e,t)=>{"use strict";t.d(e,{vF:()=>l,cx:()=>c,vj:()=>u,IS:()=>s,UD:()=>d,R6:()=>p,xj:()=>m,Ak:()=>b,I:()=>g,uA:()=>w,gI:()=>y,U7:()=>x,Wx:()=>S,xX:()=>_,X5:()=>j,ez:()=>z});var r=t(8442);function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function o(n,e,t,r,a,o,i){try{var l=n[o](i),c=l.value}catch(n){return void t(n)}l.done?e(c):Promise.resolve(c).then(r,a)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function l(n){o(i,r,a,l,c,"next",n)}function c(n){o(i,r,a,l,c,"throw",n)}l(void 0)}))}}function l(n){return n.getBoundingClientRect().top+(document.body.scrollTop||document.documentElement.scrollTop)}function c(n){var e="scrollTop"in n?n.scrollTop:n.pageYOffset;return Math.max(e,0)}function u(n){var e="scrollLeft"in n?n.scrollLeft:n.pageXOffset;return Math.max(e,0)}function s(n){return n.getBoundingClientRect().left+(document.body.scrollLeft||document.documentElement.scrollLeft)}function d(n){return f.apply(this,arguments)}function f(){return(f=i(regeneratorRuntime.mark((function n(e){var t,r,a,o,i,l,c,u,s,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T();case 2:return t=e.getBoundingClientRect(),r=t.top,a=t.bottom,o=t.left,i=t.right,l=window,c=l.innerWidth,u=l.innerHeight,s=o<=c&&i>=0,d=r<=u&&a>=0,n.abrupt("return",s&&d);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){var e=window.getComputedStyle(n).transform;return+e.slice(e.lastIndexOf(",")+2,e.length-1)}function m(n){var e=n.getBoundingClientRect(),t=e.width,r=e.height;return 0===t&&0===r}function b(n){for(var e=n;e&&e.parentNode&&(e=e.parentNode)!==document.body&&e!==document.documentElement;){var t=/(scroll|auto)/,r=window.getComputedStyle(e),a=r.overflowY,o=r.overflow;if(t.test(a)||t.test(o))return e}return window}function g(n){for(var e=[],t=n;t!==window;)t=b(t),e.push(t);return e}var v=function(n){return(0,r.HD)(n)&&n.endsWith("rem")},h=function(n){return(0,r.HD)(n)&&n.endsWith("vw")},k=function(n){return(0,r.HD)(n)&&n.endsWith("vh")},w=function(n){if((0,r.hj)(n))return n;if(function(n){return(0,r.HD)(n)&&n.endsWith("px")||(0,r.hj)(n)}(n))return+n.replace("px","");if(h(n))return+n.replace("vw","")*window.innerWidth/100;if(k(n))return+n.replace("vh","")*window.innerHeight/100;if(v(n)){var e=+n.replace("rem",""),t=window.getComputedStyle(document.documentElement).fontSize;return e*parseFloat(t)}return(0,r.HD)(n)?(0,r.He)(n):0},y=function(n){return null==n?null:function(n){return(0,r.HD)(n)&&n.endsWith("%")}(n)||h(n)||k(n)||v(n)?n:"".concat(w(n),"px")};function x(n){return window.requestAnimationFrame?window.requestAnimationFrame(n):window.setTimeout(n,16)}function S(n){window.cancelAnimationFrame?window.cancelAnimationFrame(n):window.clearTimeout(n)}function _(n){x((function(){x(n)}))}function T(){return new Promise((function(n){x((function(){x(n)}))}))}function j(n,e){var t=e.top,r=void 0===t?0:t,a=e.left,o=void 0===a?0:a,i=e.duration,l=void 0===i?300:i,s=e.animation,d=Date.now(),f=c(n),p=u(n);return new Promise((function(e){x((function t(){var a=(Date.now()-d)/l;if(a<1){var i=f+(r-f)*s(a),c=p+(o-p)*s(a);n.scrollTo(c,i),x(t)}else n.scrollTo(o,r),e()}))}))}function z(n){return Object.entries(n).reduce((function(n,e){var t,o,i=(o=2,function(n){if(Array.isArray(n))return n}(t=e)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(n){l=!0,a=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(t,o)||function(n,e){if(n){if("string"==typeof n)return a(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(n,e):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],c=i[1];return n[l.startsWith("--")?l:"--".concat((0,r.GL)(l))]=c,n}),{})}},8442:(n,e,t)=>{"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t.d(e,{He:()=>a,QM:()=>o,MW:()=>i,HD:()=>l,Bl:()=>c,hj:()=>u,PO:()=>s,kJ:()=>d,PX:()=>f,xb:()=>p,cl:()=>m,P2:()=>b,Df:()=>g,GE:()=>v,qb:()=>k,Ou:()=>w,dt:()=>y,_f:()=>x,jj:()=>S,GL:()=>_});var a=function(n){return null==n?0:l(n)?(n=parseFloat(n),n=Number.isNaN(n)?0:n):c(n)?Number(n):n},o=function(n){return n.startsWith("data:image")||/\.(png|jpg|gif|jpeg|svg)$/.test(n)},i=function(n){return n.startsWith("data:video")||/\.(mp4|webm|ogg)$/.test(n)},l=function(n){return"string"==typeof n},c=function(n){return"boolean"==typeof n},u=function(n){return"number"==typeof n},s=function(n){return"[object Object]"===Object.prototype.toString.call(n)},d=function(n){return Array.isArray(n)},f=function(n){return/^(http)|(\.*\/)/.test(n)},p=function(n){return null==n||""===n||Array.isArray(n)&&!n.length},m=function(n,e){if(n.length){var t=n.indexOf(e);if(t>-1)return n.splice(t,1)}},b=function(n){var e,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return function a(){for(var o=this,i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];var u=Date.now();t||(t=u),e&&window.clearTimeout(e),u-t>=r?(n.apply(this,l),t=u):e=window.setTimeout((function(){a.apply(o,l)}),50)}},g=function(n){var e=[];return{cache:e,has:function(n){return this.cache.includes(n)},add:function(t){this.has(t)||(this.cache.length===n&&e.shift(),this.cache.push(t))},remove:function(n){this.has(n)&&m(this.cache,n)},clear:function(){this.cache.length=0}}},v=function(n){return n},h=function(n){return Math.pow(n,3)},k=function(n){return n<.5?h(2*n)/2:1-h(2*(1-n))/2};function w(n,e){var t=Object.values(e),r=[24,60,60,1e3];if(["DD","HH","mm","ss"].forEach((function(e,a){n.includes(e)?n=n.replace(e,String(t[a]).padStart(2,"0")):t[a+1]+=t[a]*r[a]})),n.includes("S")){var a=String(t[t.length-1]).padStart(3,"0");n=n.includes("SSS")?n.replace("SSS",a):n.includes("SS")?n.replace("SS",a.slice(0,2)):n.replace("S",a.slice(0,1))}return n}var y=function(n,e){return null==n?e:n},x="undefined"!=typeof window,S=function(n){return function(n){return function(n){if(Array.isArray(n))return r(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(new Set(n))};function _(n){var e=/([^-])([A-Z])/g;return n.replace(e,"$1-$2").replace(e,"$1-$2").toLowerCase()}},6209:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(2609),a=t.n(r)()((function(n){return n[1]}));a.push([n.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]);const o=a},8154:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(2609),a=t.n(r)()((function(n){return n[1]}));a.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n:root {\n  --skeleton-content-padding: 16px;\n  --skeleton-card-height: 160px;\n  --skeleton-card-border-radius: 4px;\n  --skeleton-card-margin-bottom: 16px;\n  --skeleton-card-background-color: rgba(0, 0, 0, 0.12);\n  --skeleton-animation-background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0));\n  --skeleton-avatar-size: 34px;\n  --skeleton-avatar-margin-right: 16px;\n  --skeleton-avatar-background-color: rgba(0, 0, 0, 0.12);\n  --skeleton-title-width: 50%;\n  --skeleton-title-border-radius: 10px;\n  --skeleton-title-background-color: rgba(0, 0, 0, 0.12);\n  --skeleton-row-height: 12px;\n  --skeleton-row-border-radius: 10px;\n  --skeleton-row-margin-top: 10px;\n}\n@-webkit-keyframes var-skeleton-animation {\nfrom {\n    transform: translateX(-100%);\n}\nto {\n    transform: translateX(100%);\n}\n}\n@keyframes var-skeleton-animation {\nfrom {\n    transform: translateX(-100%);\n}\nto {\n    transform: translateX(100%);\n}\n}\n.var-skeleton {\n  width: 100%;\n}\n.var-skeleton__content {\n  padding: var(--skeleton-content-padding);\n}\n.var-skeleton__card {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: var(--skeleton-card-height);\n  background-color: var(--skeleton-card-background-color);\n  margin-bottom: var(--skeleton-card-margin-bottom);\n  border-radius: var(--skeleton-card-border-radius);\n}\n.var-skeleton__article {\n  display: flex;\n  width: 100%;\n}\n.var-skeleton__avatar {\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n  width: var(--skeleton-avatar-size);\n  height: var(--skeleton-avatar-size);\n  border-radius: 50%;\n  background-color: var(--skeleton-avatar-background-color);\n  margin-right: var(--skeleton-avatar-margin-right);\n}\n.var-skeleton__section {\n  width: 100%;\n  padding-top: 8px;\n}\n.var-skeleton__title {\n  position: relative;\n  overflow: hidden;\n  width: var(--skeleton-title-width);\n  height: var(--skeleton-row-height);\n  background-color: var(--skeleton-title-background-color);\n  border-radius: var(--skeleton-title-border-radius);\n}\n.var-skeleton__row {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: var(--skeleton-row-height);\n  background-color: var(--skeleton-title-background-color);\n  margin-top: var(--skeleton-row-margin-top);\n  border-radius: var(--skeleton-row-border-radius);\n}\n.var-skeleton__fullscreen {\n  position: fixed;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: var(--skeleton-title-background-color);\n}\n.var-skeleton--animation::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  -webkit-animation: var-skeleton-animation 1s infinite;\n          animation: var-skeleton-animation 1s infinite;\n  background: var(--skeleton-animation-background);\n}\n",""]);const o=a},4902:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(2609),a=t.n(r)()((function(n){return n[1]}));a.push([n.id,".var-button[data-v-595114a2] {\n  position: relative;\n  z-index: 10;\n  margin-bottom: 10px;\n}\n",""]);const o=a},9800:(n,e,t)=>{"use strict";t.d(e,{Z:()=>u});var r=t(7875),a={class:"app-type"};const o=(0,r.aZ)({name:"AppType"});var i=t(6062),l=t.n(i),c=t(6209);l()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,o.render=function(n,e,t,o,i,l){return(0,r.wg)(),(0,r.j4)("div",a,[(0,r.WI)(n.$slots,"default")])};const u=o},8829:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>E});var r=t(7875),a=t(349),o=(0,r.HX)("data-v-595114a2"),i=o((function(n,e,t,i,l,c){var u=(0,r.up)("app-type"),s=(0,r.up)("var-skeleton"),d=(0,r.up)("var-button");return(0,r.wg)(),(0,r.j4)(r.HY,null,[(0,r.Wm)(u,null,{default:o((function(){return[(0,r.Uk)((0,a.zw)(i.pack.basicUsage),1)]})),_:1}),(0,r.Wm)(s,{loading:i.loading},{default:o((function(){return[(0,r.Uk)((0,a.zw)(i.pack.loadingData),1)]})),_:1},8,["loading"]),(0,r.Wm)(u,null,{default:o((function(){return[(0,r.Uk)((0,a.zw)(i.pack.displayTitle),1)]})),_:1}),(0,r.Wm)(s,{title:"",loading:i.loading},{default:o((function(){return[(0,r.Uk)((0,a.zw)(i.pack.loadingData),1)]})),_:1},8,["loading"]),(0,r.Wm)(u,null,{default:o((function(){return[(0,r.Uk)((0,a.zw)(i.pack.customRowsHeight),1)]})),_:1}),(0,r.Wm)(s,{title:"",rows:3,loading:i.loading,"rows-width":["200px","100px","50px"]},{default:o((function(){return[(0,r.Uk)((0,a.zw)(i.pack.loadingData),1)]})),_:1},8,["loading"]),(0,r.Wm)(u,null,{default:o((function(){return[(0,r.Uk)((0,a.zw)(i.pack.displayAvatar),1)]})),_:1}),(0,r.Wm)(s,{title:"",avatar:"",rows:3,loading:i.loading},{default:o((function(){return[(0,r.Uk)((0,a.zw)(i.pack.loadingData),1)]})),_:1},8,["loading"]),(0,r.Wm)(u,null,{default:o((function(){return[(0,r.Uk)((0,a.zw)(i.pack.displayCard),1)]})),_:1}),(0,r.Wm)(s,{title:"",avatar:"",card:"",rows:3,loading:i.loading},{default:o((function(){return[(0,r.Uk)((0,a.zw)(i.pack.loadingData),1)]})),_:1},8,["loading"]),(0,r.Wm)(u,null,{default:o((function(){return[(0,r.Uk)((0,a.zw)(i.pack.fullscreenMode),1)]})),_:1}),(0,r.Wm)(d,{type:"danger",class:"button",onClick:e[1]||(e[1]=function(n){return i.fullscreenLoading=!i.fullscreenLoading})},{default:o((function(){return[(0,r.Uk)((0,a.zw)(i.pack.toggleFullscreenMode),1)]})),_:1}),(0,r.Wm)(s,{fullscreen:"",loading:i.fullscreenLoading},null,8,["loading"])],64)})),l={class:"var--box var-skeleton"},c={key:0,class:"var-skeleton__data"},u={key:1,class:"var-skeleton__content"},s=(0,r.Wm)("div",{class:"var-skeleton--animation"},null,-1),d={class:"var-skeleton__article"},f=(0,r.Wm)("div",{class:"var-skeleton--animation"},null,-1),p={class:"var-skeleton__section"},m=(0,r.Wm)("div",{class:"var-skeleton--animation"},null,-1),b=(0,r.Wm)("div",{class:"var-skeleton--animation"},null,-1),g={key:2,class:"var-skeleton__fullscreen"},v=(0,r.Wm)("div",{class:"var-skeleton--animation"},null,-1),h={loading:{type:Boolean,default:!0},title:{type:Boolean,default:!1},card:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},titleWidth:{type:[Number,String]},cardHeight:{type:[Number,String]},avatarSize:{type:[Number,String]},rows:{type:[Number,String],default:3},rowsWidth:{type:Array,default:function(){return[]}}},k=t(4268),w=t(8442);const y=(0,r.aZ)({name:"VarSkeleton",props:h,setup:function(){return{toSizeUnit:k.gI,toNumber:w.He}}});var x=t(6062),S=t.n(x),_=t(8154);S()(_.Z,{insert:"head",singleton:!1}),_.Z.locals,y.render=function(n,e,t,a,o,i){return(0,r.wg)(),(0,r.j4)("div",l,[n.loading?(0,r.kq)("v-if",!0):((0,r.wg)(),(0,r.j4)("div",c,[(0,r.WI)(n.$slots,"default")])),n.loading&&!n.fullscreen?((0,r.wg)(),(0,r.j4)("div",u,[n.card?((0,r.wg)(),(0,r.j4)("div",{key:0,class:"var-skeleton__card",style:{height:n.toSizeUnit(n.cardHeight)}},[s],4)):(0,r.kq)("v-if",!0),(0,r.Wm)("div",d,[n.avatar?((0,r.wg)(),(0,r.j4)("div",{key:0,class:"var-skeleton__avatar",style:{width:n.toSizeUnit(n.avatarSize),height:n.toSizeUnit(n.avatarSize)}},[f],4)):(0,r.kq)("v-if",!0),(0,r.Wm)("div",p,[n.title?((0,r.wg)(),(0,r.j4)("div",{key:0,class:"var-skeleton__title",style:{width:n.toSizeUnit(n.titleWidth)}},[m],4)):(0,r.kq)("v-if",!0),((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(n.toNumber(n.rows),(function(e,t){return(0,r.wg)(),(0,r.j4)("div",{class:"var-skeleton__row",key:e,style:{width:n.toSizeUnit(n.rowsWidth[t])}},[b],4)})),128))])])])):(0,r.kq)("v-if",!0),n.loading&&n.fullscreen?((0,r.wg)(),(0,r.j4)("div",g,[v])):(0,r.kq)("v-if",!0)])};const T=y;T.install=function(n){n.component(T.name,T)};const j=T;var z,W=t(9521),A=t(9800),D=t(641),O=t(6125),C=t(8732),U=t(7245),H=t(9486),M=(0,H.bU)(),N=M.add,P=M.use,Z=M.pack,B=(M.packs,M.merge,function(n){(0,H.D$)(n),P(n)});function F(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}(0,H.IH)("zh-CN",C.Z),(0,H.IH)("en-US",U.Z),N("zh-CN",{basicUsage:"基本使用",displayTitle:"显示标题",customRowsHeight:"自定义段落高度",displayAvatar:"显示头像",displayCard:"显示卡片",fullscreenMode:"全屏模式",toggleFullscreenMode:"切换全屏模式",loadingData:"加载的数据"}),N("en-US",{basicUsage:"Basic Usage",displayTitle:"Display Title",customRowsHeight:"Custom Row Heights",displayAvatar:"Display Avatar",displayCard:"Display Card",fullscreenMode:"Fullscreen Mode",toggleFullscreenMode:"Toggle Fullscreen Mode",loadingData:"Loading Data"});const I={name:"SkeletonExample",components:(z={},F(z,j.name,j),F(z,W.Z.name,W.Z),F(z,"AppType",A.Z),z),setup:function(){var n=(0,D.iH)(!0),e=(0,D.iH)(!1);return(0,O.jS)(B),{pack:Z,loading:n,fullscreenLoading:e}}};var L=t(4902);S()(L.Z,{insert:"head",singleton:!1}),L.Z.locals,I.render=i,I.__scopeId="data-v-595114a2";const E=I}}]);