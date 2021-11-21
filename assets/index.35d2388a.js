import{S as Q}from"./index.fa799c77.js";import{q as j,r as c,b as x,T as W,o as _,k as P,i as b,a as L,B as V,A as Z,I as ee,l as T,t as f,y as ne,x as M,S as te,c as y,F as R,j as U,m as oe,n as $,z as ae,d as D,h as w}from"./vendor.8a125dba.js";import{c as se,e as re,b as le,f as ie}from"./components.33246c91.js";import{_ as z}from"./elevation.8f12812c.js";import{t as X,h as ce,g as de}from"./shared.61f3a471.js";import{h as ue,b as fe,s as ve,n as _e,r as me}from"./elements.6bb3d81f.js";import{C as he}from"./index.3a539e19.js";import{d as pe}from"./index.77fe3760.js";import{u as xe,a as F,_ as be,b as ye,c as ke}from"./en-US.51e06fb5.js";import{w as Ce,a as ge}from"./utils.efdc8a96.js";import"./index.bf70d0d0.js";const H=Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"),Y=Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");function Ie(){const{bindChildren:e,childProviders:r}=se(H),{length:o}=re(Y);return{length:o,indexAnchors:r,bindIndexAnchors:e}}function Te(){const{parentProvider:e,bindParent:r}=le(H),{index:o}=ie(Y);if(!e||!r)throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');return{index:o,indexBar:e,bindIndexBar:r}}const Be={index:{type:[Number,String]}};const Ee=j({name:"VarIndexAnchor",components:{VarSticky:Q},inheritAttrs:!1,props:Be,setup(e){const{index:r,indexBar:o,bindIndexBar:s}=Te(),t=c(0),d=c(!1),a=x(()=>e.index),l=c(null),{active:m,sticky:i,cssMode:E,stickyOffsetTop:N,zIndex:k}=o;return s({index:r,name:a,ownTop:t,setOwnTop:()=>{!l.value||(t.value=l.value.$el?l.value.$el.offsetTop:l.value.offsetTop)},setDisabled:C=>{d.value=C}}),{name:a,anchorEl:l,active:m,sticky:i,zIndex:k,disabled:d,cssMode:E,stickyOffsetTop:N,Transition:W}}});function Ne(e,r,o,s,t,d){return _(),P(ee(e.sticky?"var-sticky":e.Transition),{"offset-top":e.sticky?e.stickyOffsetTop:null,"z-index":e.sticky?e.zIndex:null,disabled:e.disabled&&!e.cssMode,"css-mode":e.cssMode,ref:"anchorEl"},{default:b(()=>[L("div",Z({class:"var-index-anchor"},e.$attrs),[V(e.$slots,"default",{},()=>[T(f(e.name),1)])],16)]),_:3},8,["offset-top","z-index","disabled","css-mode"])}var Ae=z(Ee,[["render",Ne]]);const Se={sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:Number,default:0},cssMode:{type:Boolean,default:!1},hideList:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},highlightColor:{type:String},duration:{type:[Number,String],default:0},onClick:{type:Function},onChange:{type:Function}};const $e=j({name:"VarIndexBar",props:Se,setup(e){const{length:r,indexAnchors:o,bindIndexAnchors:s}=Ie(),t=c(null),d=c(""),a=c(null),l=c(null),m=c([]),i=c(),E=x(()=>e.sticky),N=x(()=>e.cssMode),k=x(()=>e.stickyOffsetTop),A=x(()=>e.zIndex);s({active:i,sticky:E,cssMode:N,stickyOffsetTop:k,zIndex:A});const S=n=>{var v;const u=de(n)?n.name.value:n;u!==i.value&&(i.value=u,(v=e.onChange)==null||v.call(e,u))},C=()=>{const{scrollTop:n,scrollHeight:u}=t.value,{offsetTop:v}=l.value;o.forEach((h,p)=>{const g=h.ownTop.value,I=n-g+k.value-v,J=p===o.length-1?u:o[p+1].ownTop.value-h.ownTop.value;I>=0&&I<J&&!d.value&&(p&&!e.cssMode&&o[p-1].setDisabled(!0),h.setDisabled(!1),S(h))})},O=async(n,u)=>{var g;if(u&&((g=e.onClick)==null||g.call(e,n)),n===i.value)return;const v=o.find(({name:I})=>n===I.value);if(!v)return;const h=v.ownTop.value,p=fe(t.value);d.value=n,S(n),await ve(t.value,{left:p,top:h,animation:ce,duration:X(e.duration)}),_e(()=>{d.value=""})},G=n=>{me(()=>O(n,!0))};return ne(()=>r.value,()=>ae(()=>{o.forEach(({name:n,setOwnTop:u})=>{n.value&&m.value.push(n.value),u()})})),M(()=>{var n;a.value=ue(l.value),t.value=a.value===window?a.value.document.documentElement:a.value,(n=a.value)==null||n.addEventListener("scroll",C)}),te(()=>{var n;(n=a.value)==null||n.removeEventListener("scroll",C)}),{barEl:l,active:i,zIndex:A,anchorNameList:m,toNumber:X,scrollTo:G,anchorClick:O}}}),De={class:"var-index-bar",ref:"barEl"},we=["onClick"];function ze(e,r,o,s,t,d){return _(),y("div",De,[V(e.$slots,"default"),L("ul",{class:"var-index-bar__anchor-list",style:$({zIndex:e.toNumber(e.zIndex)+2,display:e.hideList?"none":"block"})},[(_(!0),y(R,null,U(e.anchorNameList,a=>(_(),y("li",{key:a,class:oe(["var-index-bar__anchor-item",{"var-index-bar__anchor-item--active":e.active===a}]),style:$({color:e.active===a&&e.highlightColor?e.highlightColor:""}),onClick:l=>e.anchorClick(a)},f(a),15,we))),128))],4)],512)}var B=z($e,[["render",ze]]);B.install=function(e){e.component(B.name,B)};var Oe={title:"\u6807\u9898",text:"\u6587\u672C"},je={title:"Title",text:"Text"};const{add:K,use:Pe,pack:Le,packs:Ze,merge:en}=xe(),Ve=e=>{ke(e),Pe(e)};F("zh-CN",be);F("en-US",ye);K("zh-CN",Oe);K("en-US",je);const Me={name:"IndexBarExample",components:{VarIndexBar:B,VarIndexAnchor:Ae,VarCell:he},setup(){const e=c([]),r=c("#e7edf7"),o=c("#2e67ba");M(()=>{for(let t=0;t<26;t++)e.value.push(String.fromCharCode(65+t))});const s=t=>{console.log(t)};return Ce(Ve),ge(pe,t=>{r.value=t==="darkThemes"?"rgb(41 42 45)":"#e7edf7",o.value=t==="darkThemes"?"#3980e8":"#2e67ba"}),{color:o,bgColor:r,list:e,pack:Le,change:s}}};function Re(e,r,o,s,t,d){const a=D("var-index-anchor"),l=D("var-cell"),m=D("var-index-bar");return _(),P(m,{onChange:s.change,duration:"300","sticky-offset-top":54},{default:b(()=>[(_(!0),y(R,null,U(s.list,i=>(_(),y("div",{key:i},[w(a,{index:i,class:"var-index-anchor__example",style:$({background:s.bgColor,color:s.color})},{default:b(()=>[T(f(s.pack.title)+" "+f(i),1)]),_:2},1032,["index","style"]),w(l,null,{default:b(()=>[T(f(i)+" "+f(s.pack.text),1)]),_:2},1024),w(l,null,{default:b(()=>[T(f(i)+" "+f(s.pack.text),1)]),_:2},1024)]))),128))]),_:1},8,["onChange"])}var nn=z(Me,[["render",Re]]);export{nn as default};