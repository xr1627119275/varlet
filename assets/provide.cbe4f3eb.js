import{q as i,o as r,k as m,i as c,c as d,a,t as o,f as l,T as _}from"./vendor.8a125dba.js";import{_ as f}from"./elevation.8f12812c.js";import{b as p,c as u}from"./components.33246c91.js";const v={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const g=i({name:"VarFormDetails",props:v}),h={key:0,class:"var-form-details"},F={class:"var-form-details__message"},M={class:"var-form-details__length"};function b(e,s,x,y,I,T){return r(),m(_,{name:"var-form-details"},{default:c(()=>[e.errorMessage||e.maxlengthText?(r(),d("div",h,[a("div",F,o(e.errorMessage),1),a("div",M,o(e.maxlengthText),1)])):l("v-if",!0)]),_:1})}var t=f(g,[["render",b]]);t.install=function(e){e.component(t.name,t)};const n=Symbol("FORM_BIND_FORM_ITEM_KEY");function C(){const{bindParent:e,parentProvider:s}=p(n);return{bindForm:e,form:s}}function E(){const{bindChildren:e,childProviders:s}=u(n);return{formItems:s,bindFormItems:e}}export{t as F,E as a,C as u};