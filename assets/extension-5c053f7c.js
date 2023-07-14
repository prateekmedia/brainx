function x(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k={exports:{}},c={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),D=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),A=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),C=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,j={};function p(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||$}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function F(){}F.prototype=p.prototype;function v(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||$}var S=v.prototype=new F;S.constructor=v;b(S,p.prototype);S.isPureReactComponent=!0;var E=Array.isArray,T=Object.prototype.hasOwnProperty,g={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,u={},o=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)T.call(t,n)&&!O.hasOwnProperty(n)&&(u[n]=t[n]);var l=arguments.length-2;if(l===1)u.children=r;else if(1<l){for(var s=Array(l),f=0;f<l;f++)s[f]=arguments[f+2];u.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)u[n]===void 0&&(u[n]=l[n]);return{$$typeof:y,type:e,key:o,ref:i,props:u,_owner:g.current}}function W(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function w(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function G(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var R=/\/+/g;function _(e,t){return typeof e=="object"&&e!==null&&e.key!=null?G(""+e.key):t.toString(36)}function m(e,t,r,n,u){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case y:case D:i=!0}}if(i)return i=e,u=u(i),e=n===""?"."+_(i,0):n,E(u)?(r="",e!=null&&(r=e.replace(R,"$&/")+"/"),m(u,t,r,"",function(f){return f})):u!=null&&(w(u)&&(u=W(u,r+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+e)),t.push(u)),1;if(i=0,n=n===""?".":n+":",E(e))for(var l=0;l<e.length;l++){o=e[l];var s=n+_(o,l);i+=m(o,t,r,s,u)}else if(s=H(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=n+_(o,l++),i+=m(o,t,r,s,u);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function d(e,t,r){if(e==null)return e;var n=[],u=0;return m(e,n,"","",function(o){return t.call(r,o,u++)}),n}function J(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var a={current:null},h={transition:null},K={ReactCurrentDispatcher:a,ReactCurrentBatchConfig:h,ReactCurrentOwner:g};c.Children={map:d,forEach:function(e,t,r){d(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};c.Component=p;c.Fragment=I;c.Profiler=M;c.PureComponent=v;c.StrictMode=L;c.Suspense=N;c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K;c.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=b({},e.props),u=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=g.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)T.call(t,s)&&!O.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];n.children=l}return{$$typeof:y,type:e.type,key:u,ref:o,props:n,_owner:i}};c.createContext=function(e){return e={$$typeof:A,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:U,_context:e},e.Consumer=e};c.createElement=P;c.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t};c.createRef=function(){return{current:null}};c.forwardRef=function(e){return{$$typeof:V,render:e}};c.isValidElement=w;c.lazy=function(e){return{$$typeof:B,_payload:{_status:-1,_result:e},_init:J}};c.memo=function(e,t){return{$$typeof:z,type:e,compare:t===void 0?null:t}};c.startTransition=function(e){var t=h.transition;h.transition={};try{e()}finally{h.transition=t}};c.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};c.useCallback=function(e,t){return a.current.useCallback(e,t)};c.useContext=function(e){return a.current.useContext(e)};c.useDebugValue=function(){};c.useDeferredValue=function(e){return a.current.useDeferredValue(e)};c.useEffect=function(e,t){return a.current.useEffect(e,t)};c.useId=function(){return a.current.useId()};c.useImperativeHandle=function(e,t,r){return a.current.useImperativeHandle(e,t,r)};c.useInsertionEffect=function(e,t){return a.current.useInsertionEffect(e,t)};c.useLayoutEffect=function(e,t){return a.current.useLayoutEffect(e,t)};c.useMemo=function(e,t){return a.current.useMemo(e,t)};c.useReducer=function(e,t,r){return a.current.useReducer(e,t,r)};c.useRef=function(e){return a.current.useRef(e)};c.useState=function(e){return a.current.useState(e)};c.useSyncExternalStore=function(e,t,r){return a.current.useSyncExternalStore(e,t,r)};c.useTransition=function(){return a.current.useTransition()};c.version="18.2.0";k.exports=c;var q=k.exports;const te=x(q);function Q(e,t){const r=n=>/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d{1,5})?\/?$/.test(n);if(t){let n,u;if(r(t))try{u=`https://api.screenshotmachine.com?key=c9c337&url=${encodeURIComponent(t)}&dimension=150x150`,n=t}catch(l){console.log("Error fetching screenshot:",l)}else n=t;let o=Array(0);n.split(" ").length>5&&(o=ee(n,5,e));const i={id:new Date().getTime(),content:n,thumbnail:u,tags:o};return[...e,i]}return e}function Y(e,t){const r=e.toLowerCase().split(" ");return r.filter(o=>o===t.toLowerCase()).length/r.length}function X(e,t){const r=e.length,n=e.filter(o=>o.toLowerCase().split(" ").includes(t.toLowerCase())).length;return Math.log(r/(1+n))}function Z(e,t){const r=e.map(o=>Y(o,t)),n=X(e,t);return r.map(o=>o*n)}function ee(e,t,r){const n=[...r.map(s=>s.content),e.replace(/[^\w\s\d]|_/g,"").replace(/\s+/g," ")],u=e.replace(/[^\w\s\d]|_/g,"").replace(/\s+/g," ").toLowerCase().split(" ").filter(s=>s.length>2),o={};return u.forEach(s=>{const f=Z(n,s);o[s]=f[0]}),Object.keys(o).sort((s,f)=>o[f]-o[s]).slice(0,t)}function re(e,t){q.useEffect(()=>{const r=(n,u,o)=>{const i=Q(e,n);t(i)};return chrome&&chrome.runtime&&chrome.runtime.onMessage&&chrome.runtime.onMessage.addListener(r),()=>{chrome&&chrome.runtime&&chrome.runtime.onMessage&&chrome.runtime.onMessage.removeListener(r)}},[e,t])}export{te as R,Q as h,q as r,re as u};