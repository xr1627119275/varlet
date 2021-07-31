(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[4491],{9947:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var a=t(641),i={locks:{},zIndex:2e3,touchmoveForbid:!0};(0,a.qj)(i);const r=(0,a.qj)(i)},2106:(n,e,t)=>{"use strict";t.d(e,{Z:()=>f});var a=t(7875),i=t(4825),r=t(349),o={key:0,class:"var-form-details"},l={class:"var-form-details__message"},c={class:"var-form-details__length"},s={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const d=(0,a.aZ)({name:"VarFormDetails",props:s});var u=t(6062),p=t.n(u),m=t(1216);p()(m.Z,{insert:"head",singleton:!1}),m.Z.locals,d.render=function(n,e,t,s,d,u){return(0,a.wg)(),(0,a.j4)(i.uT,{name:"var-form-details"},{default:(0,a.w5)((function(){return[n.errorMessage||n.maxlengthText?((0,a.wg)(),(0,a.j4)("div",o,[(0,a.Wm)("div",l,(0,r.zw)(n.errorMessage),1),(0,a.Wm)("div",c,(0,r.zw)(n.maxlengthText),1)])):(0,a.kq)("v-if",!0)]})),_:1})};const v=d;v.install=function(n){n.component(v.name,v)};const f=v},9347:(n,e,t)=>{"use strict";t.d(e,{cI:()=>r,y8:()=>o});var a=t(9838),i=Symbol("FORM_BIND_FORM_ITEM_KEY");function r(){var n=(0,a.NB)(i);return{bindForm:n.bindParent,form:n.parentProvider}}function o(){var n=(0,a.$E)(i),e=n.bindChildren;return{formItems:n.childProviders,bindFormItems:e}}},9383:(n,e,t)=>{"use strict";t.d(e,{Z:()=>m});var a=t(7875),i={class:"var--box var-loading"},r={key:0,class:"var-loading__circle"},o=(0,a.Wm)("svg",{viewBox:"25 25 50 50"},[(0,a.Wm)("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1),l=t(4538);const c=(0,a.aZ)({name:"VarLoading",props:l.NQ,setup:function(){return{loadingTypeDict:{wave:5,cube:4,rect:8,disappear:3}}}});var s=t(6062),d=t.n(s),u=t(6252);d()(u.Z,{insert:"head",singleton:!1}),u.Z.locals,c.render=function(n,e,t,l,c,s){return(0,a.wg)(),(0,a.j4)("div",i,["circle"===n.type?((0,a.wg)(),(0,a.j4)("div",r,[(0,a.Wm)("span",{class:"var-loading__circle-block",style:{width:2*n.radius+"px",height:2*n.radius+"px"}},[o],4)])):(0,a.kq)("v-if",!0),((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(n.loadingTypeDict,(function(e,t){return(0,a.wg)(),(0,a.j4)(a.HY,{key:t},[n.type===t?((0,a.wg)(),(0,a.j4)("div",{key:0,class:"var-loading__".concat(t," var-loading__").concat(t,"-").concat(n.size)},[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e,(function(e){return(0,a.wg)(),(0,a.j4)("div",{key:e+t,style:{backgroundColor:n.color},class:"var-loading__".concat(t,"-item var-loading__").concat(t,"-item-").concat(n.size)},null,6)})),128))],2)):(0,a.kq)("v-if",!0)],64)})),128))])};const p=c;p.install=function(n){n.component(p.name,p)};const m=p},4538:(n,e,t)=>{"use strict";t.d(e,{NQ:()=>a});var a={type:{type:String,default:"circle",validator:function(n){return["circle","wave","cube","rect","disappear"].includes(n)}},radius:{type:[String,Number],default:15},size:{type:String,default:"normal",validator:function(n){return["normal","mini","small","large"].includes(n)}},color:{type:String,default:"currentColor"}}},7245:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});const a={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},10:{name:"October",abbr:"OCT"},11:{name:"November",abbr:"NOV"},12:{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"}},9486:(n,e,t)=>{"use strict";t.d(e,{bU:()=>c,P2:()=>d,IH:()=>u,D$:()=>p});var a=t(641),i=t(8732);function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(){var n={},e=(0,a.iH)({}),t=function(t){if(!n[t])return console.warn("The ".concat(t," does not exist. You can mount a language package using the add method")),{};e.value=n[t]};return{packs:n,pack:e,add:function(e,t){t.lang=e,n[e]=t},use:t,merge:function(e,a){n[e]?(n[e]=o(o({},n[e]),a),t(e)):console.warn("The ".concat(e," does not exist. You can mount a language package using the add method"))}}}var s=c(),d=(s.packs,s.pack),u=s.add,p=s.use;s.merge,u("zh-CN",i.Z),p("zh-CN")},8732:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});const a={dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",monthDictionary:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},weekDictionary:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},selected:"个被选择"}},2986:(n,e,t)=>{"use strict";t.d(e,{Z:()=>v});var a=t(9947),i=t(6062),r=t.n(i),o=t(526);r()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var l=t(4352);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){d(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n){var e=this,t=this._ripple;t.removeRipple(),t.disabled||t.tasker||(t.tasker=window.setTimeout((function(){var a;t.tasker=null;var i,r,o,l,c=function(n,e){var t=n.getBoundingClientRect(),a=t.top,i=t.left,r=n.clientWidth,o=n.clientHeight,l=Math.sqrt(Math.pow(r,2)+Math.pow(o,2))/2,c=2*l;return{x:e.touches[0].clientX-i-l,y:e.touches[0].clientY-a-l,centerX:(r-2*l)/2,centerY:(o-2*l)/2,size:c}}(e,n),s=c.x,d=c.y,u=c.centerX,p=c.centerY,m=c.size,v=document.createElement("div");v.classList.add("var-ripple"),v.style.opacity="0",v.style.transform="translate(".concat(s,"px, ").concat(d,"px) scale3d(.3, .3, .3)"),v.style.width="".concat(m,"px"),v.style.height="".concat(m,"px"),v.style.backgroundColor=null!==(a=t.color)&&void 0!==a?a:"currentColor",v.dataset.createdAt=String(performance.now()),i=e,o=(r=window.getComputedStyle(i)).zIndex,l=r.position,i.style.overflow="hidden",i.style.overflowX="hidden",i.style.overflowY="hidden","static"===l&&(i.style.position="relative"),"auto"===o&&(i.style.zIndex="1"),e.appendChild(v),window.setTimeout((function(){v.style.transform="translate(".concat(u,"px, ").concat(p,"px) scale3d(1, 1, 1)"),v.style.opacity=".25"}),20)}),60))}function p(){var n=this,e=function(){var e=n.querySelectorAll(".var-ripple");if(e.length){var t=e[e.length-1],a=250-performance.now()+Number(t.dataset.createdAt);setTimeout((function(){t.style.opacity="0",setTimeout((function(){var n;return null===(n=t.parentNode)||void 0===n?void 0:n.removeChild(t)}),250)}),a)}};this._ripple.tasker?setTimeout(e,60):e()}function m(){var n=this._ripple;n.touchmoveForbid&&(n.tasker&&window.clearTimeout(n.tasker),n.tasker=null)}r()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;const v={mounted:function(n,e){var t,i,r;n._ripple=s(s({tasker:null},null!==(t=e.value)&&void 0!==t?t:{}),{},{touchmoveForbid:null!==(i=null===(r=e.value)||void 0===r?void 0:r.touchmoveForbid)&&void 0!==i?i:a.Z.touchmoveForbid,removeRipple:p.bind(n)}),n.addEventListener("touchstart",u,{passive:!0}),n.addEventListener("touchmove",m,{passive:!0}),n.addEventListener("dragstart",p,{passive:!0}),document.addEventListener("touchend",n._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",n._ripple.removeRipple,{passive:!0})},unmounted:function(n){n.removeEventListener("touchstart",u),n.removeEventListener("touchmove",m),n.removeEventListener("dragstart",p),document.removeEventListener("touchend",n._ripple.removeRipple),document.removeEventListener("touchcancel",n._ripple.removeRipple)},updated:function(n,e){var t,i,r;n._ripple=s(s(s({},n._ripple),null!==(t=e.value)&&void 0!==t?t:{}),{},{touchmoveForbid:null!==(i=null===(r=e.value)||void 0===r?void 0:r.touchmoveForbid)&&void 0!==i?i:a.Z.touchmoveForbid,tasker:null})},install:function(n){n.directive("ripple",this)}}},9838:(n,e,t)=>{"use strict";t.d(e,{H6:()=>v,Jr:()=>b,nN:()=>h,wn:()=>g,$E:()=>y,NB:()=>w,V$:()=>_,hO:()=>k,Mc:()=>O});var a=t(4825),i=t(7875),r=t(641),o=t(8442),l=["collect","clear"];function c(n,e,t,a,i,r,o){try{var l=n[r](o),c=l.value}catch(n){return void t(n)}l.done?e(c):Promise.resolve(c).then(a,i)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(a,i){var r=n.apply(e,t);function o(n){c(r,a,i,o,l,"next",n)}function l(n){c(r,a,i,o,l,"throw",n)}o(void 0)}))}}function d(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){m(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function m(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function v(n,e){return Array.isArray(e)?e.reduce((function(e,t){return e[t]=n[t],e}),{}):n[e]}function f(n){var e=(0,a.ri)(n),t=document.createElement("div");return document.body.appendChild(t),{instance:e.mount(t),unmount:function(){e.unmount(),document.body.removeChild(t)}}}function b(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a={setup:function(){return function(){return(0,i.h)(n,p(p({},e),t))}}},r=f(a),o=r.unmount;return{unmountInstance:o}}function h(n){var e=(0,r.qj)([]),t=(0,i.FN)();return(0,i.JJ)(n,{collect:function(n){var a;e.push(n),a=function(n){var e=[];return function n(t){null!=t&&t.component?n(null==t?void 0:t.component.subTree):Array.isArray(null==t?void 0:t.children)&&t.children.forEach((function(t){(0,i.lA)(t)&&(e.push(t),n(t))}))}(n),e}(t.subTree),e.sort((function(n,e){return a.indexOf(n.vnode)-a.indexOf(e.vnode)}))},clear:function(n){(0,o.cl)(e,n)},instances:e}),{length:(0,i.Fl)((function(){return e.length}))}}function g(n){if(!x(n))return{index:null};var e=(0,i.f3)(n),t=e.collect,a=e.clear,r=e.instances,o=(0,i.FN)();return(0,i.bv)((function(){(0,i.Y3)().then((function(){return t(o)}))})),(0,i.Ah)((function(){(0,i.Y3)().then((function(){return a(o)}))})),{index:(0,i.Fl)((function(){return r.indexOf(o)}))}}function y(n){var e=[],t=function(n){e.push(n)},a=function(n){(0,o.cl)(e,n)};return{childProviders:e,bindChildren:function(e){(0,i.JJ)(n,p({collect:t,clear:a},e))}}}function w(n){if(!x(n))return{parentProvider:null,bindParent:null};var e=(0,i.f3)(n),t=e.collect,a=e.clear;return{parentProvider:d(e,l),bindParent:function(n){(0,i.bv)((function(){return t(n)})),(0,i.Jd)((function(){return a(n)}))}}}function x(n){return n in(0,i.FN)().provides}function _(){var n=(0,r.iH)(""),e=function(){var e=s(regeneratorRuntime.mark((function e(t,a,i){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,o.kJ)(t)&&t.length){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,Promise.all(t.map((function(n){return n(a,i)})));case 4:return r=e.sent,e.abrupt("return",!r.some((function(e){return!0!==e&&(n.value=String(e),!0)})));case 6:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}(),t=function(){var t=s(regeneratorRuntime.mark((function t(a,i,r,o,l){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.includes(i)){t.next=7;break}return t.next=4,e(r,o,l);case 4:if(t.t0=t.sent,!t.t0){t.next=7;break}n.value="";case 7:case"end":return t.stop()}}),t)})));return function(n,e,a,i,r){return t.apply(this,arguments)}}();return{errorMessage:n,validate:e,resetValidation:function(){n.value=""},validateWithTrigger:t}}function k(n){(0,i.bv)((function(){window.addEventListener("hashchange",n),window.addEventListener("popstate",n)})),(0,i.Ah)((function(){window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n)}))}function O(){var n=(0,r.iH)(!1);return(0,i.dl)((function(){n.value=!1})),(0,i.se)((function(){n.value=!0})),{disabled:n}}},526:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var a=t(2609),i=t.n(a)()((function(n){return n[1]}));i.push([n.id,".var-ripple {\n  position: absolute;\n  transition: transform 0.2s cubic-bezier(0.68, 0.01, 0.62, 0.6), opacity 0.08s linear;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  opacity: 0;\n  will-change: transform, opacity;\n  pointer-events: none;\n  z-index: 100;\n}\n",""]);const r=i},4352:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var a=t(2609),i=t.n(a)()((function(n){return n[1]}));i.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n",""]);const r=i},6209:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var a=t(2609),i=t.n(a)()((function(n){return n[1]}));i.push([n.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]);const r=i},1216:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var a=t(2609),i=t.n(a)()((function(n){return n[1]}));i.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n:root {\n  --form-details-error-color: var(--color-danger);\n  --form-details-length-color: #888;\n  --form-details-margin-top: 6px;\n  --form-details-font-size: 12px;\n  --form-details-message-margin-right: 4px;\n}\n.var-form-details-enter-from,\n.var-form-details-leave-to {\n  opacity: 0;\n  margin-top: 2px !important;\n}\n.var-form-details-enter-active,\n.var-form-details-leave-active {\n  transition: 0.2s all var(--cubic-bezier);\n}\n.var-form-details {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--form-details-font-size);\n  margin-top: var(--form-details-margin-top);\n}\n.var-form-details__message {\n  flex-grow: 1;\n  color: var(--form-details-error-color);\n  margin-right: var(--form-details-message-margin-right);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-align: left;\n}\n.var-form-details__length {\n  flex-shrink: 0;\n  color: var(--form-details-length-color);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-align: right;\n}\n",""]);const r=i},6252:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var a=t(2609),i=t.n(a)()((function(n){return n[1]}));i.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.var-loading__circle {\n  display: flex;\n}\n.var-loading__circle-block {\n  display: inline-block;\n  -webkit-animation: circle 1.8s linear infinite;\n          animation: circle 1.8s linear infinite;\n}\n.var-loading__circle-block svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.var-loading__circle-block svg circle {\n  -webkit-animation: circular 1.5s ease-in-out infinite;\n          animation: circular 1.5s ease-in-out infinite;\n  stroke: currentColor;\n  stroke-width: 3;\n  stroke-linecap: round;\n}\n@-webkit-keyframes circle {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@keyframes circle {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes circular {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -40;\n}\n100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -120;\n}\n}\n@keyframes circular {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -40;\n}\n100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -120;\n}\n}\n.var-loading__wave {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.var-loading__wave-large {\n  width: 64px;\n  height: 18px;\n}\n.var-loading__wave-normal {\n  width: 50px;\n  height: 16px;\n}\n.var-loading__wave-small {\n  width: 36px;\n  height: 14px;\n}\n.var-loading__wave-mini {\n  width: 22px;\n  height: 12px;\n}\n.var-loading__wave-item {\n  height: 100%;\n  display: inline-block;\n  -webkit-animation: 1.2s ease-in-out infinite wave;\n          animation: 1.2s ease-in-out infinite wave;\n}\n.var-loading__wave-item:nth-child(1) {\n  -webkit-animation-delay: -1.2s;\n          animation-delay: -1.2s;\n  margin-left: 0;\n}\n.var-loading__wave-item:nth-child(2) {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n.var-loading__wave-item:nth-child(3) {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n.var-loading__wave-item:nth-child(4) {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n.var-loading__wave-item:nth-child(5) {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n.var-loading__wave-item-large {\n  width: 5px;\n  margin-left: 5px;\n}\n.var-loading__wave-item-normal {\n  width: 4px;\n  margin-left: 4px;\n}\n.var-loading__wave-item-small {\n  width: 3px;\n  margin-left: 3px;\n}\n.var-loading__wave-item-mini {\n  width: 2px;\n  margin-left: 2px;\n}\n@-webkit-keyframes wave {\n0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n}\n20% {\n    transform: scaleY(1);\n}\n}\n@keyframes wave {\n0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n}\n20% {\n    transform: scaleY(1);\n}\n}\n.var-loading__cube {\n  display: flex;\n  align-items: center;\n}\n.var-loading__cube-large {\n  width: 64px;\n  height: 18px;\n}\n.var-loading__cube-normal {\n  width: 50px;\n  height: 16px;\n}\n.var-loading__cube-small {\n  width: 36px;\n  height: 14px;\n}\n.var-loading__cube-mini {\n  width: 22px;\n  height: 12px;\n}\n.var-loading__cube-item {\n  display: inline-block;\n  transform-origin: right bottom;\n  -webkit-animation: 1.5s ease infinite cube;\n          animation: 1.5s ease infinite cube;\n}\n.var-loading__cube-item:nth-child(1) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n  margin-left: 0;\n}\n.var-loading__cube-item:nth-child(2) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.var-loading__cube-item:nth-child(3) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.var-loading__cube-item:nth-child(4) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n.var-loading__cube-item-large {\n  height: 10px;\n  width: 10px;\n  margin-left: 5px;\n}\n.var-loading__cube-item-normal {\n  height: 8px;\n  width: 8px;\n  margin-left: 4px;\n}\n.var-loading__cube-item-small {\n  height: 6px;\n  width: 6px;\n  margin-left: 3px;\n}\n.var-loading__cube-item-mini {\n  height: 4px;\n  width: 4px;\n  margin-left: 2px;\n}\n@-webkit-keyframes cube {\n0% {\n    opacity: 1;\n    transform: scale(1);\n}\n100% {\n    opacity: 0;\n    transform: rotate(90deg) scale(0.3);\n}\n}\n@keyframes cube {\n0% {\n    opacity: 1;\n    transform: scale(1);\n}\n100% {\n    opacity: 0;\n    transform: rotate(90deg) scale(0.3);\n}\n}\n.var-loading__rect {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n}\n.var-loading__rect-large {\n  width: 64px;\n  height: 18px;\n}\n.var-loading__rect-normal {\n  width: 50px;\n  height: 16px;\n}\n.var-loading__rect-small {\n  width: 36px;\n  height: 14px;\n}\n.var-loading__rect-mini {\n  width: 22px;\n  height: 12px;\n}\n.var-loading__rect-item {\n  -webkit-animation: 2s ease-in-out infinite rect;\n          animation: 2s ease-in-out infinite rect;\n}\n.var-loading__rect-item:nth-child(1) {\n  -webkit-animation-delay: 1.75s;\n          animation-delay: 1.75s;\n}\n.var-loading__rect-item:nth-child(2) {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\n.var-loading__rect-item:nth-child(3) {\n  -webkit-animation-delay: 1.25s;\n          animation-delay: 1.25s;\n}\n.var-loading__rect-item:nth-child(4) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n.var-loading__rect-item:nth-child(5) {\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s;\n}\n.var-loading__rect-item:nth-child(6) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.var-loading__rect-item:nth-child(7) {\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\n.var-loading__rect-item:nth-child(8) {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.var-loading__rect-item-large {\n  height: 100%;\n  width: 8px;\n}\n.var-loading__rect-item-normal {\n  height: 90%;\n  width: 6.4px;\n}\n.var-loading__rect-item-small {\n  height: 80%;\n  width: 4.8px;\n}\n.var-loading__rect-item-mini {\n  height: 70%;\n  width: 3.2px;\n}\n@-webkit-keyframes rect {\n0% {\n    opacity: 0.3;\n}\n25% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.3;\n}\n65% {\n    opacity: 1;\n}\n100% {\n    opacity: 0.3;\n}\n}\n@keyframes rect {\n0% {\n    opacity: 0.3;\n}\n25% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.3;\n}\n65% {\n    opacity: 1;\n}\n100% {\n    opacity: 0.3;\n}\n}\n.var-loading__disappear {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-flow: nowrap;\n}\n.var-loading__disappear-large {\n  width: 64px;\n  height: 18px;\n}\n.var-loading__disappear-normal {\n  width: 50px;\n  height: 16px;\n}\n.var-loading__disappear-small {\n  width: 36px;\n  height: 14px;\n}\n.var-loading__disappear-mini {\n  width: 22px;\n  height: 12px;\n}\n.var-loading__disappear-item {\n  border-radius: 50%;\n  -webkit-animation: 0.5s ease-in-out infinite alternate disappear;\n          animation: 0.5s ease-in-out infinite alternate disappear;\n}\n.var-loading__disappear-item:nth-child(1) {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n}\n.var-loading__disappear-item:nth-child(2) {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s;\n}\n.var-loading__disappear-item:nth-child(3) {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.var-loading__disappear-item-large {\n  height: 15px;\n  width: 15px;\n}\n.var-loading__disappear-item-normal {\n  height: 12px;\n  width: 12px;\n}\n.var-loading__disappear-item-small {\n  height: 9px;\n  width: 9px;\n}\n.var-loading__disappear-item-mini {\n  height: 6px;\n  width: 6px;\n}\n@-webkit-keyframes disappear {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes disappear {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n",""]);const r=i},2654:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var a=t(2609),i=t.n(a)()((function(n){return n[1]}));i.push([n.id,".var-switch__example-block[data-v-6a5c75cc] {\n  display: flex;\n  align-items: center;\n}\n.var-switch[data-v-6a5c75cc] {\n  margin-right: 30px;\n}\n",""]);const r=i},9800:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var a=t(7875),i={class:"app-type"};const r=(0,a.aZ)({name:"AppType"});var o=t(6062),l=t.n(o),c=t(6209);l()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,r.render=function(n,e,t,r,o,l){return(0,a.wg)(),(0,a.j4)("div",i,[(0,a.WI)(n.$slots,"default")])};const s=r},4092:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>S});var a=t(7875),i=t(349),r=(0,a.HX)("data-v-6a5c75cc");(0,a.dD)("data-v-6a5c75cc");var o={class:"var-switch__example-block"},l={class:"var-switch__example-block"},c={class:"var-switch__example-block"},s={class:"var-switch__example-block"},d={class:"var-switch__example-block"};(0,a.Cn)();var u=r((function(n,e,t,u,p,m){var v=(0,a.up)("app-type"),f=(0,a.up)("var-switch");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)(v,null,{default:r((function(){return[(0,a.Uk)((0,i.zw)(u.pack.basicUsage),1)]})),_:1}),(0,a.Wm)("div",o,[(0,a.Wm)(f,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=function(e){return n.value=e})},null,8,["modelValue"])]),(0,a.Wm)(v,null,{default:r((function(){return[(0,a.Uk)((0,i.zw)(u.pack.notAvailable),1)]})),_:1}),(0,a.Wm)("div",l,[(0,a.Wm)(f,{modelValue:n.value1,"onUpdate:modelValue":e[2]||(e[2]=function(e){return n.value1=e}),disabled:""},null,8,["modelValue"]),(0,a.Wm)(f,{modelValue:n.value1,"onUpdate:modelValue":e[3]||(e[3]=function(e){return n.value1=e}),readonly:""},null,8,["modelValue"])]),(0,a.Wm)(v,null,{default:r((function(){return[(0,a.Uk)((0,i.zw)(u.pack.customColor),1)]})),_:1}),(0,a.Wm)("div",c,[(0,a.Wm)(f,{modelValue:n.value2,"onUpdate:modelValue":e[4]||(e[4]=function(e){return n.value2=e}),ripple:!1},null,8,["modelValue"]),(0,a.Wm)(f,{modelValue:n.value2,"onUpdate:modelValue":e[5]||(e[5]=function(e){return n.value2=e}),color:"#ff9f00","close-color":"#f5cb90"},null,8,["modelValue"])]),(0,a.Wm)(v,null,{default:r((function(){return[(0,a.Uk)((0,i.zw)(u.pack.size),1)]})),_:1}),(0,a.Wm)("div",s,[(0,a.Wm)(f,{modelValue:n.value3,"onUpdate:modelValue":e[6]||(e[6]=function(e){return n.value3=e}),size:"15"},null,8,["modelValue"]),(0,a.Wm)(f,{modelValue:n.value3,"onUpdate:modelValue":e[7]||(e[7]=function(e){return n.value3=e})},null,8,["modelValue"]),(0,a.Wm)(f,{modelValue:n.value3,"onUpdate:modelValue":e[8]||(e[8]=function(e){return n.value3=e}),size:"25"},null,8,["modelValue"])]),(0,a.Wm)(v,null,{default:r((function(){return[(0,a.Uk)((0,i.zw)(u.pack.loading),1)]})),_:1}),(0,a.Wm)("div",d,[(0,a.Wm)(f,{"model-value":!0,loading:""}),(0,a.Wm)(f,{"model-value":!0,size:"25",loading:"","loading-color":"#ff9f00"})]),(0,a.Wm)(v,null,{default:r((function(){return[(0,a.Uk)((0,i.zw)(u.pack.validateValue),1)]})),_:1}),(0,a.Wm)(f,{modelValue:n.value4,"onUpdate:modelValue":e[9]||(e[9]=function(e){return n.value4=e}),rules:[function(n){return!0===n||u.pack.state}]},null,8,["modelValue","rules"])],64)})),p=t(641),m=t(9800),v=t(5891),f=t(1825),b=t(8732),h=t(7245),g=t(9486),y=(0,g.bU)(),w=y.add,x=y.use,_=y.pack,k=(y.packs,y.merge,function(n){(0,g.D$)(n),x(n)});(0,g.IH)("zh-CN",b.Z),(0,g.IH)("en-US",h.Z),w("zh-CN",{basicUsage:"基本使用",customColor:"自定义颜色",notAvailable:"不可用",size:"不同大小",loading:"加载状态",validateValue:"值的校验",text:"是否打开开关",state:"错误！"}),w("en-US",{basicUsage:"Basic Usage",customColor:"Custom Color",notAvailable:"Not Available",size:"Size",loading:"Loading",validateValue:"Validate Value",text:"Whether to open the switch",state:"Error!"});var O,j=t(6125);function z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function P(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?z(Object(t),!0).forEach((function(e){T(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function T(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}const C={name:"SwitchExample",components:(O={},T(O,v.Z.name,v.Z),T(O,f.Z.name,f.Z),T(O,"AppType",m.Z),O),setup:function(){var n=(0,p.qj)({value:!0,value1:!0,value2:!0,value3:!0,value4:!0});return(0,j.jS)(k),P(P({},(0,p.BK)(n)),{},{pack:_})}};var Z=t(6062),E=t.n(Z),V=t(2654);E()(V.Z,{insert:"head",singleton:!1}),V.Z.locals,C.render=u,C.__scopeId="data-v-6a5c75cc";const S=C}}]);