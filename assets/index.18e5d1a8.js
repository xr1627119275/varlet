import{R as m}from"./index.23ced9c1.js";import{A as v}from"./AppType.8af12281.js";import{c as i}from"./index.789f7251.js";import{b as f,w as b}from"./utils.faa57f31.js";import{u as k,a as u,_ as h,b as C,c as x}from"./en-US.51e06fb5.js";import{_ as F}from"./elevation.7a86b580.js";import{H as U,d as S,e as g,o as B,c as N,h as r,i as l,w as n,a as d,l as a,t as o,F as j}from"./vendor.8a125dba.js";var y={click:"\u70B9\u51FB",basicUsage:"\u57FA\u672C\u4F7F\u7528",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",disabledStatus:"\u7981\u7528\u72B6\u6001"},w={click:"Click",basicUsage:"Basic Usage",customColor:"Custom Color",disabledStatus:"Disabled Status"};const{add:_,use:A,pack:z,packs:W,merge:X}=k(),D=s=>{x(s),A(s)};u("zh-CN",h);u("en-US",C);_("zh-CN",y);_("en-US",w);const E={name:"RippleExample",components:{AppType:v},directives:{Ripple:m},setup(){const s=i.touchmoveForbid;return f(p=>{p==="pc"&&(i.touchmoveForbid=!1)}),b(D),U(()=>{i.touchmoveForbid=s}),{pack:z}}},T={class:"block var-elevation--2"},R={class:"block var-elevation--2"},V={class:"block var-elevation--2"};function L(s,p,H,e,I,P){const t=S("app-type"),c=g("ripple");return B(),N(j,null,[r(t,null,{default:l(()=>[a(o(e.pack.basicUsage),1)]),_:1}),n(d("div",T,[a(o(e.pack.click),1)],512),[[c]]),r(t,null,{default:l(()=>[a(o(e.pack.customColor),1)]),_:1}),n(d("div",R,[a(o(e.pack.click),1)],512),[[c,{color:"#2979ff"}]]),r(t,null,{default:l(()=>[a(o(e.pack.disabledStatus),1)]),_:1}),n(d("div",V,[a(o(e.pack.click),1)],512),[[c,{disabled:!0}]])],64)}var Y=F(E,[["render",L],["__scopeId","data-v-f5e05bac"]]);export{Y as default};