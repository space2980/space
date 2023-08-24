import{g as k,h as P,_ as V,i as I,r as j,o as S,c as E,a as _,d as b,u as h,j as U,p as B,f as C}from"./index-f9c70d71.js";var L={exports:{}};(function(M,v){(function(c,f){M.exports=f()})(k,function(){function c(e){var l=[];return e.AMapUI&&l.push(f(e.AMapUI)),e.Loca&&l.push(m(e.Loca)),Promise.all(l)}function f(e){return new Promise(function(l,u){var t=[];if(e.plugins)for(var i=0;i<e.plugins.length;i+=1)o.AMapUI.plugins.indexOf(e.plugins[i])==-1&&t.push(e.plugins[i]);if(a.AMapUI===n.failed)u("前次请求 AMapUI 失败");else if(a.AMapUI===n.notload){a.AMapUI=n.loading,o.AMapUI.version=e.version||o.AMapUI.version,i=o.AMapUI.version;var r=document.body||document.head,d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/ui/"+i+"/main.js",d.onerror=function(s){a.AMapUI=n.failed,u("请求 AMapUI 失败")},d.onload=function(){if(a.AMapUI=n.loaded,t.length)window.AMapUI.loadUI(t,function(){for(var s=0,A=t.length;s<A;s++){var g=t[s].split("/").slice(-1)[0];window.AMapUI[g]=arguments[s]}for(l();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()});else for(l();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()},r.appendChild(d)}else a.AMapUI===n.loaded?e.version&&e.version!==o.AMapUI.version?u("不允许多个版本 AMapUI 混用"):t.length?window.AMapUI.loadUI(t,function(){for(var s=0,A=t.length;s<A;s++){var g=t[s].split("/").slice(-1)[0];window.AMapUI[g]=arguments[s]}l()}):l():e.version&&e.version!==o.AMapUI.version?u("不允许多个版本 AMapUI 混用"):p.AMapUI.push(function(s){s?u(s):t.length?window.AMapUI.loadUI(t,function(){for(var A=0,g=t.length;A<g;A++){var x=t[A].split("/").slice(-1)[0];window.AMapUI[x]=arguments[A]}l()}):l()})})}function m(e){return new Promise(function(l,u){if(a.Loca===n.failed)u("前次请求 Loca 失败");else if(a.Loca===n.notload){a.Loca=n.loading,o.Loca.version=e.version||o.Loca.version;var t=o.Loca.version,i=o.AMap.version.startsWith("2"),r=t.startsWith("2");if(i&&!r||!i&&r)u("JSAPI 与 Loca 版本不对应！！");else{i=o.key,r=document.body||document.head;var d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/loca?v="+t+"&key="+i,d.onerror=function(s){a.Loca=n.failed,u("请求 AMapUI 失败")},d.onload=function(){for(a.Loca=n.loaded,l();p.Loca.length;)p.Loca.splice(0,1)[0]()},r.appendChild(d)}}else a.Loca===n.loaded?e.version&&e.version!==o.Loca.version?u("不允许多个版本 Loca 混用"):l():e.version&&e.version!==o.Loca.version?u("不允许多个版本 Loca 混用"):p.Loca.push(function(s){s?u(s):u()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var n;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(n||(n={}));var o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},a={AMap:n.notload,AMapUI:n.notload,Loca:n.notload},p={AMap:[],AMapUI:[],Loca:[]},w=[],y=function(e){typeof e=="function"&&(a.AMap===n.loaded?e(window.AMap):w.push(e))};return{load:function(e){return new Promise(function(l,u){if(a.AMap==n.failed)u("");else if(a.AMap==n.notload){var t=e.key,i=e.version,r=e.plugins;t?(window.AMap&&location.host!=="lbs.amap.com"&&u("禁止多种API加载方式混用"),o.key=t,o.AMap.version=i||o.AMap.version,o.AMap.plugins=r||o.AMap.plugins,a.AMap=n.loading,i=document.body||document.head,window.___onAPILoaded=function(s){if(delete window.___onAPILoaded,s)a.AMap=n.failed,u(s);else for(a.AMap=n.loaded,c(e).then(function(){l(window.AMap)}).catch(u);w.length;)w.splice(0,1)[0]()},r=document.createElement("script"),r.type="text/javascript",r.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+o.AMap.version+"&key="+t+"&plugin="+o.AMap.plugins.join(","),r.onerror=function(s){a.AMap=n.failed,u(s)},i.appendChild(r)):u("请填写key")}else if(a.AMap==n.loaded)if(e.key&&e.key!==o.key)u("多个不一致的 key");else if(e.version&&e.version!==o.AMap.version)u("不允许多个版本 JSAPI 混用");else{if(t=[],e.plugins)for(i=0;i<e.plugins.length;i+=1)o.AMap.plugins.indexOf(e.plugins[i])==-1&&t.push(e.plugins[i]);t.length?window.AMap.plugin(t,function(){c(e).then(function(){l(window.AMap)}).catch(u)}):c(e).then(function(){l(window.AMap)}).catch(u)}else if(e.key&&e.key!==o.key)u("多个不一致的 key");else if(e.version&&e.version!==o.AMap.version)u("不允许多个版本 JSAPI 混用");else{var d=[];if(e.plugins)for(i=0;i<e.plugins.length;i+=1)o.AMap.plugins.indexOf(e.plugins[i])==-1&&d.push(e.plugins[i]);y(function(){d.length?window.AMap.plugin(d,function(){c(e).then(function(){l(window.AMap)}).catch(u)}):c(e).then(function(){l(window.AMap)}).catch(u)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},a={AMap:n.notload,AMapUI:n.notload,Loca:n.notload},p={AMap:[],AMapUI:[],Loca:[]}}}})})(L);var J=L.exports;const O=P(J);const D=M=>(B("data-v-89f4f4b6"),M=M(),C(),M),N={class:"main-box"},T=D(()=>_("div",{id:"container"},null,-1)),W={class:"aside"},q={__name:"space-map",setup(M){let v=I(!1),c=I(!1),f=I(!1);function m(){O.load({key:"a5321ed6661e47aed36b8f5d8a8c4e86",version:"2.0"}).then(n=>{console.log("amap对象",n);const o=new n.Map("container",{viewMode:"2D",zoom:11,center:[116.397428,39.90923]});let a;n.plugin(["AMap.ToolBar","AMap.Scale"],function(){a=new n.ToolBar,o.addControl(a)})})}return m(),(n,o)=>{const a=j("el-checkbox");return S(),E("div",N,[T,_("div",W,[b(a,{label:"比例尺",modelValue:h(v),"onUpdate:modelValue":o[0]||(o[0]=p=>U(v)?v.value=p:v=p)},null,8,["modelValue"]),b(a,{label:"工具条",modelValue:h(c),"onUpdate:modelValue":o[1]||(o[1]=p=>U(c)?c.value=p:c=p)},null,8,["modelValue"]),b(a,{label:"工具条方向盘",modelValue:h(f),"onUpdate:modelValue":o[2]||(o[2]=p=>U(f)?f.value=p:f=p)},null,8,["modelValue"])])])}}},F=V(q,[["__scopeId","data-v-89f4f4b6"]]);export{F as default};
