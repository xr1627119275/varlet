import{T as d,u as p,p as u,g as m}from"./index.996f2d17.js";import{d as h}from"./index.77fe3760.js";import{w as f,a as v}from"./utils.72e4e7bc.js";import{_ as g}from"./elevation.332a41cd.js";import{e as _,o as l,l as k,j as i,a as e,t,r as B,i as F,c as x,k as V,F as w}from"./vendor.9810b84e.js";import"./index.6af3eebe.js";import{P as C}from"./Pagination.094612f5.js";const E={name:"BasicExample",components:{VarTable:d},setup(){return f(p,"pc"),v(h),{pack:u}}},P=e("td",null,"124",-1),S=e("td",null,"38",-1),T=e("td",null,"100",-1),D=e("td",null,"135",-1);function L(n,s,r,a,b,y){const c=_("var-table");return l(),k(c,{class:"reset"},{default:i(()=>[e("thead",null,[e("tr",null,[e("th",null,t(a.pack.name),1),e("th",null,t(a.pack.math),1),e("th",null,t(a.pack.english),1)])]),e("tbody",null,[e("tr",null,[e("td",null,t(a.pack.jerry),1),P,S]),e("tr",null,[e("td",null,t(a.pack.tom),1),T,D])])]),_:1})}var K=g(E,[["render",L]]);const N={name:"BasicExample",components:{VarTable:d,VarPagination:C},setup(){const n=B(m(1,10)),s=(r,a)=>{n.value=m(r,a)};return f(p,"pc"),v(h),{pack:u,get:s,list:n}}},z={class:"footer"};function I(n,s,r,a,b,y){const c=_("var-pagination"),j=_("var-table");return l(),k(j,{class:"reset"},{footer:i(()=>[e("div",z,[F(c,{simple:!1,current:1,total:100,"size-option":[5,10],onChange:a.get},null,8,["onChange"])])]),default:i(()=>[e("thead",null,[e("tr",null,[e("th",null,t(a.pack.name),1),e("th",null,t(a.pack.math),1),e("th",null,t(a.pack.english),1)])]),e("tbody",null,[(l(!0),x(w,null,V(a.list,o=>(l(),x("tr",{key:o.name},[e("td",null,t(o.name),1),e("td",null,t(o.math),1),e("td",null,t(o.english),1)]))),128))])]),_:1})}var O=g(N,[["render",I],["__scopeId","data-v-decaf4f8"]]);export{K as B,O as F};