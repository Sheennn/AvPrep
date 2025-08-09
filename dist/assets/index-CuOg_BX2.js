function Mh(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function Vl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kl={exports:{}},La={},zl={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=Symbol.for("react.element"),Ph=Symbol.for("react.portal"),Oh=Symbol.for("react.fragment"),Dh=Symbol.for("react.strict_mode"),Fh=Symbol.for("react.profiler"),qh=Symbol.for("react.provider"),Bh=Symbol.for("react.context"),Uh=Symbol.for("react.forward_ref"),Gh=Symbol.for("react.suspense"),Wh=Symbol.for("react.memo"),Hh=Symbol.for("react.lazy"),ks=Symbol.iterator;function jh(e){return e===null||typeof e!="object"?null:(e=ks&&e[ks]||e["@@iterator"],typeof e=="function"?e:null)}var Yl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jl=Object.assign,$l={};function St(e,n,t){this.props=e,this.context=n,this.refs=$l,this.updater=t||Yl}St.prototype.isReactComponent={};St.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};St.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zl(){}Zl.prototype=St.prototype;function Ii(e,n,t){this.props=e,this.context=n,this.refs=$l,this.updater=t||Yl}var Ei=Ii.prototype=new Zl;Ei.constructor=Ii;Jl(Ei,St.prototype);Ei.isPureReactComponent=!0;var Ss=Array.isArray,Xl=Object.prototype.hasOwnProperty,xi={current:null},eu={key:!0,ref:!0,__self:!0,__source:!0};function nu(e,n,t){var r,a={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Xl.call(n,r)&&!eu.hasOwnProperty(r)&&(a[r]=n[r]);var s=arguments.length-2;if(s===1)a.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:Ar,type:e,key:o,ref:i,props:a,_owner:xi.current}}function Qh(e,n){return{$$typeof:Ar,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function _i(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar}function Vh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Is=/\/+/g;function Xa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Vh(""+e.key):n.toString(36)}function Kr(e,n,t,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ar:case Ph:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+Xa(i,0):r,Ss(a)?(t="",e!=null&&(t=e.replace(Is,"$&/")+"/"),Kr(a,n,t,"",function(u){return u})):a!=null&&(_i(a)&&(a=Qh(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Is,"$&/")+"/")+e)),n.push(a)),1;if(i=0,r=r===""?".":r+":",Ss(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Xa(o,s);i+=Kr(o,n,t,l,a)}else if(l=jh(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Xa(o,s++),i+=Kr(o,n,t,l,a);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function xr(e,n,t){if(e==null)return e;var r=[],a=0;return Kr(e,r,"","",function(o){return n.call(t,o,a++)}),r}function Kh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},zr={transition:null},zh={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:zr,ReactCurrentOwner:xi};function tu(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:xr,forEach:function(e,n,t){xr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return xr(e,function(){n++}),n},toArray:function(e){return xr(e,function(n){return n})||[]},only:function(e){if(!_i(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=St;P.Fragment=Oh;P.Profiler=Fh;P.PureComponent=Ii;P.StrictMode=Dh;P.Suspense=Gh;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zh;P.act=tu;P.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Jl({},e.props),a=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=xi.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)Xl.call(n,l)&&!eu.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ar,type:e.type,key:a,ref:o,props:r,_owner:i}};P.createContext=function(e){return e={$$typeof:Bh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qh,_context:e},e.Consumer=e};P.createElement=nu;P.createFactory=function(e){var n=nu.bind(null,e);return n.type=e,n};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:Uh,render:e}};P.isValidElement=_i;P.lazy=function(e){return{$$typeof:Hh,_payload:{_status:-1,_result:e},_init:Kh}};P.memo=function(e,n){return{$$typeof:Wh,type:e,compare:n===void 0?null:n}};P.startTransition=function(e){var n=zr.transition;zr.transition={};try{e()}finally{zr.transition=n}};P.unstable_act=tu;P.useCallback=function(e,n){return de.current.useCallback(e,n)};P.useContext=function(e){return de.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return de.current.useDeferredValue(e)};P.useEffect=function(e,n){return de.current.useEffect(e,n)};P.useId=function(){return de.current.useId()};P.useImperativeHandle=function(e,n,t){return de.current.useImperativeHandle(e,n,t)};P.useInsertionEffect=function(e,n){return de.current.useInsertionEffect(e,n)};P.useLayoutEffect=function(e,n){return de.current.useLayoutEffect(e,n)};P.useMemo=function(e,n){return de.current.useMemo(e,n)};P.useReducer=function(e,n,t){return de.current.useReducer(e,n,t)};P.useRef=function(e){return de.current.useRef(e)};P.useState=function(e){return de.current.useState(e)};P.useSyncExternalStore=function(e,n,t){return de.current.useSyncExternalStore(e,n,t)};P.useTransition=function(){return de.current.useTransition()};P.version="18.3.1";zl.exports=P;var w=zl.exports;const Ri=Vl(w),Yh=Mh({__proto__:null,default:Ri},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh=w,$h=Symbol.for("react.element"),Zh=Symbol.for("react.fragment"),Xh=Object.prototype.hasOwnProperty,ed=Jh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nd={key:!0,ref:!0,__self:!0,__source:!0};function ru(e,n,t){var r,a={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Xh.call(n,r)&&!nd.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:$h,type:e,key:o,ref:i,props:a,_owner:ed.current}}La.Fragment=Zh;La.jsx=ru;La.jsxs=ru;Kl.exports=La;var h=Kl.exports,xo={},au={exports:{}},ke={},ou={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(k,L){var M=k.length;k.push(L);e:for(;0<M;){var V=M-1>>>1,Z=k[V];if(0<a(Z,L))k[V]=L,k[M]=Z,M=V;else break e}}function t(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var L=k[0],M=k.pop();if(M!==L){k[0]=M;e:for(var V=0,Z=k.length,Ir=Z>>>1;V<Ir;){var _n=2*(V+1)-1,Za=k[_n],Rn=_n+1,Er=k[Rn];if(0>a(Za,M))Rn<Z&&0>a(Er,Za)?(k[V]=Er,k[Rn]=M,V=Rn):(k[V]=Za,k[_n]=M,V=_n);else if(Rn<Z&&0>a(Er,M))k[V]=Er,k[Rn]=M,V=Rn;else break e}}return L}function a(k,L){var M=k.sortIndex-L.sortIndex;return M!==0?M:k.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],c=1,d=null,g=3,A=!1,T=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(k){for(var L=t(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=k)r(u),L.sortIndex=L.expirationTime,n(l,L);else break;L=t(u)}}function b(k){if(y=!1,p(k),!T)if(t(l)!==null)T=!0,$n(v);else{var L=t(u);L!==null&&Te(b,L.startTime-k)}}function v(k,L){T=!1,y&&(y=!1,f(x),x=-1),A=!0;var M=g;try{for(p(L),d=t(l);d!==null&&(!(d.expirationTime>L)||k&&!F());){var V=d.callback;if(typeof V=="function"){d.callback=null,g=d.priorityLevel;var Z=V(d.expirationTime<=L);L=e.unstable_now(),typeof Z=="function"?d.callback=Z:d===t(l)&&r(l),p(L)}else r(l);d=t(l)}if(d!==null)var Ir=!0;else{var _n=t(u);_n!==null&&Te(b,_n.startTime-L),Ir=!1}return Ir}finally{d=null,g=M,A=!1}}var E=!1,I=null,x=-1,_=5,R=-1;function F(){return!(e.unstable_now()-R<_)}function le(){if(I!==null){var k=e.unstable_now();R=k;var L=!0;try{L=I(!0,k)}finally{L?ue():(E=!1,I=null)}}else E=!1}var ue;if(typeof m=="function")ue=function(){m(le)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,Ie=Ge.port2;Ge.port1.onmessage=le,ue=function(){Ie.postMessage(null)}}else ue=function(){N(le,0)};function $n(k){I=k,E||(E=!0,ue())}function Te(k,L){x=N(function(){k(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){T||A||(T=!0,$n(v))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(k){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var M=g;g=L;try{return k()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,L){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var M=g;g=k;try{return L()}finally{g=M}},e.unstable_scheduleCallback=function(k,L,M){var V=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?V+M:V):M=V,k){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=M+Z,k={id:c++,callback:L,priorityLevel:k,startTime:M,expirationTime:Z,sortIndex:-1},M>V?(k.sortIndex=M,n(u,k),t(l)===null&&k===t(u)&&(y?(f(x),x=-1):y=!0,Te(b,M-V))):(k.sortIndex=Z,n(l,k),T||A||(T=!0,$n(v))),k},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(k){var L=g;return function(){var M=g;g=L;try{return k.apply(this,arguments)}finally{g=M}}}})(iu);ou.exports=iu;var td=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=w,ve=td;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var su=new Set,Xt={};function Vn(e,n){yt(e,n),yt(e+"Capture",n)}function yt(e,n){for(Xt[e]=n,e=0;e<n.length;e++)su.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_o=Object.prototype.hasOwnProperty,ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Es={},xs={};function od(e){return _o.call(xs,e)?!0:_o.call(Es,e)?!1:ad.test(e)?xs[e]=!0:(Es[e]=!0,!1)}function id(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sd(e,n,t,r){if(n===null||typeof n>"u"||id(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,a,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Li=/[\-:]([a-z])/g;function Mi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Li,Mi);re[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Li,Mi);re[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Li,Mi);re[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pi(e,n,t,r){var a=re.hasOwnProperty(n)?re[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(sd(n,t,a,r)&&(t=null),r||a===null?od(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var an=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_r=Symbol.for("react.element"),et=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),Oi=Symbol.for("react.strict_mode"),Ro=Symbol.for("react.profiler"),lu=Symbol.for("react.provider"),uu=Symbol.for("react.context"),Di=Symbol.for("react.forward_ref"),Lo=Symbol.for("react.suspense"),Mo=Symbol.for("react.suspense_list"),Fi=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),mu=Symbol.for("react.offscreen"),_s=Symbol.iterator;function Rt(e){return e===null||typeof e!="object"?null:(e=_s&&e[_s]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,eo;function Bt(e){if(eo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);eo=n&&n[1]||""}return`
`+eo+e}var no=!1;function to(e,n){if(!e||no)return"";no=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=r.stack.split(`
`),i=a.length-1,s=o.length-1;1<=i&&0<=s&&a[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==o[s]){var l=`
`+a[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{no=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Bt(e):""}function ld(e){switch(e.tag){case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 2:case 15:return e=to(e.type,!1),e;case 11:return e=to(e.type.render,!1),e;case 1:return e=to(e.type,!0),e;default:return""}}function Po(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nt:return"Fragment";case et:return"Portal";case Ro:return"Profiler";case Oi:return"StrictMode";case Lo:return"Suspense";case Mo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uu:return(e.displayName||"Context")+".Consumer";case lu:return(e._context.displayName||"Context")+".Provider";case Di:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fi:return n=e.displayName||null,n!==null?n:Po(e.type)||"Memo";case sn:n=e._payload,e=e._init;try{return Po(e(n))}catch{}}return null}function ud(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Po(n);case 8:return n===Oi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function md(e){var n=hu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Rr(e){e._valueTracker||(e._valueTracker=md(e))}function du(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=hu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,n){var t=n.checked;return j({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Rs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=vn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function cu(e,n){n=n.checked,n!=null&&Pi(e,"checked",n,!1)}function Do(e,n){cu(e,n);var t=vn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Fo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Fo(e,n.type,vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ls(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Fo(e,n,t){(n!=="number"||ia(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ut=Array.isArray;function dt(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+vn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function qo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return j({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ms(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(Ut(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:vn(t)}}function fu(e,n){var t=vn(n.value),r=vn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ps(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function gu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?gu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,pu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function er(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hd=["Webkit","ms","Moz","O"];Object.keys(Ht).forEach(function(e){hd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ht[n]=Ht[e]})});function wu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ht.hasOwnProperty(e)&&Ht[e]?(""+n).trim():n+"px"}function yu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=wu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var dd=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uo(e,n){if(n){if(dd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function Go(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wo=null;function qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ho=null,ct=null,ft=null;function Os(e){if(e=br(e)){if(typeof Ho!="function")throw Error(C(280));var n=e.stateNode;n&&(n=Fa(n),Ho(e.stateNode,e.type,n))}}function Au(e){ct?ft?ft.push(e):ft=[e]:ct=e}function Tu(){if(ct){var e=ct,n=ft;if(ft=ct=null,Os(e),n)for(e=0;e<n.length;e++)Os(n[e])}}function Nu(e,n){return e(n)}function bu(){}var ro=!1;function Cu(e,n,t){if(ro)return e(n,t);ro=!0;try{return Nu(e,n,t)}finally{ro=!1,(ct!==null||ft!==null)&&(bu(),Tu())}}function nr(e,n){var t=e.stateNode;if(t===null)return null;var r=Fa(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var jo=!1;if(Xe)try{var Lt={};Object.defineProperty(Lt,"passive",{get:function(){jo=!0}}),window.addEventListener("test",Lt,Lt),window.removeEventListener("test",Lt,Lt)}catch{jo=!1}function cd(e,n,t,r,a,o,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var jt=!1,sa=null,la=!1,Qo=null,fd={onError:function(e){jt=!0,sa=e}};function gd(e,n,t,r,a,o,i,s,l){jt=!1,sa=null,cd.apply(fd,arguments)}function pd(e,n,t,r,a,o,i,s,l){if(gd.apply(this,arguments),jt){if(jt){var u=sa;jt=!1,sa=null}else throw Error(C(198));la||(la=!0,Qo=u)}}function Kn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function vu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ds(e){if(Kn(e)!==e)throw Error(C(188))}function wd(e){var n=e.alternate;if(!n){if(n=Kn(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===t)return Ds(a),e;if(o===r)return Ds(a),n;o=o.sibling}throw Error(C(188))}if(t.return!==r.return)t=a,r=o;else{for(var i=!1,s=a.child;s;){if(s===t){i=!0,t=a,r=o;break}if(s===r){i=!0,r=a,t=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===t){i=!0,t=o,r=a;break}if(s===r){i=!0,r=o,t=a;break}s=s.sibling}if(!i)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function ku(e){return e=wd(e),e!==null?Su(e):null}function Su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Su(e);if(n!==null)return n;e=e.sibling}return null}var Iu=ve.unstable_scheduleCallback,Fs=ve.unstable_cancelCallback,yd=ve.unstable_shouldYield,Ad=ve.unstable_requestPaint,K=ve.unstable_now,Td=ve.unstable_getCurrentPriorityLevel,Bi=ve.unstable_ImmediatePriority,Eu=ve.unstable_UserBlockingPriority,ua=ve.unstable_NormalPriority,Nd=ve.unstable_LowPriority,xu=ve.unstable_IdlePriority,Ma=null,Qe=null;function bd(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Ma,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:kd,Cd=Math.log,vd=Math.LN2;function kd(e){return e>>>=0,e===0?32:31-(Cd(e)/vd|0)|0}var Mr=64,Pr=4194304;function Gt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ma(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~a;s!==0?r=Gt(s):(o&=i,o!==0&&(r=Gt(o)))}else i=t&~a,i!==0?r=Gt(i):o!==0&&(r=Gt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,o=n&-n,a>=o||a===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-qe(n),a=1<<t,r|=e[t],n&=~a;return r}function Sd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Id(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-qe(o),s=1<<i,l=a[i];l===-1?(!(s&t)||s&r)&&(a[i]=Sd(s,n)):l<=n&&(e.expiredLanes|=s),o&=~s}}function Vo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _u(){var e=Mr;return Mr<<=1,!(Mr&4194240)&&(Mr=64),e}function ao(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Tr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-qe(n),e[n]=t}function Ed(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-qe(t),o=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~o}}function Ui(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-qe(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var D=0;function Ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lu,Gi,Mu,Pu,Ou,Ko=!1,Or=[],gn=null,pn=null,wn=null,tr=new Map,rr=new Map,un=[],xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,n){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":tr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(n.pointerId)}}function Mt(e,n,t,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},n!==null&&(n=br(n),n!==null&&Gi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function _d(e,n,t,r,a){switch(n){case"focusin":return gn=Mt(gn,e,n,t,r,a),!0;case"dragenter":return pn=Mt(pn,e,n,t,r,a),!0;case"mouseover":return wn=Mt(wn,e,n,t,r,a),!0;case"pointerover":var o=a.pointerId;return tr.set(o,Mt(tr.get(o)||null,e,n,t,r,a)),!0;case"gotpointercapture":return o=a.pointerId,rr.set(o,Mt(rr.get(o)||null,e,n,t,r,a)),!0}return!1}function Du(e){var n=On(e.target);if(n!==null){var t=Kn(n);if(t!==null){if(n=t.tag,n===13){if(n=vu(t),n!==null){e.blockedOn=n,Ou(e.priority,function(){Mu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=zo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Wo=r,t.target.dispatchEvent(r),Wo=null}else return n=br(t),n!==null&&Gi(n),e.blockedOn=t,!1;n.shift()}return!0}function Bs(e,n,t){Yr(e)&&t.delete(n)}function Rd(){Ko=!1,gn!==null&&Yr(gn)&&(gn=null),pn!==null&&Yr(pn)&&(pn=null),wn!==null&&Yr(wn)&&(wn=null),tr.forEach(Bs),rr.forEach(Bs)}function Pt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ko||(Ko=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,Rd)))}function ar(e){function n(a){return Pt(a,e)}if(0<Or.length){Pt(Or[0],e);for(var t=1;t<Or.length;t++){var r=Or[t];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&Pt(gn,e),pn!==null&&Pt(pn,e),wn!==null&&Pt(wn,e),tr.forEach(n),rr.forEach(n),t=0;t<un.length;t++)r=un[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(t=un[0],t.blockedOn===null);)Du(t),t.blockedOn===null&&un.shift()}var gt=an.ReactCurrentBatchConfig,ha=!0;function Ld(e,n,t,r){var a=D,o=gt.transition;gt.transition=null;try{D=1,Wi(e,n,t,r)}finally{D=a,gt.transition=o}}function Md(e,n,t,r){var a=D,o=gt.transition;gt.transition=null;try{D=4,Wi(e,n,t,r)}finally{D=a,gt.transition=o}}function Wi(e,n,t,r){if(ha){var a=zo(e,n,t,r);if(a===null)go(e,n,r,da,t),qs(e,r);else if(_d(a,e,n,t,r))r.stopPropagation();else if(qs(e,r),n&4&&-1<xd.indexOf(e)){for(;a!==null;){var o=br(a);if(o!==null&&Lu(o),o=zo(e,n,t,r),o===null&&go(e,n,r,da,t),o===a)break;a=o}a!==null&&r.stopPropagation()}else go(e,n,r,null,t)}}var da=null;function zo(e,n,t,r){if(da=null,e=qi(r),e=On(e),e!==null)if(n=Kn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=vu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return da=e,null}function Fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Td()){case Bi:return 1;case Eu:return 4;case ua:case Nd:return 16;case xu:return 536870912;default:return 16}default:return 16}}var dn=null,Hi=null,Jr=null;function qu(){if(Jr)return Jr;var e,n=Hi,t=n.length,r,a="value"in dn?dn.value:dn.textContent,o=a.length;for(e=0;e<t&&n[e]===a[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===a[o-r];r++);return Jr=a.slice(e,1<r?1-r:void 0)}function $r(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function Us(){return!1}function Se(e){function n(t,r,a,o,i){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Dr:Us,this.isPropagationStopped=Us,this}return j(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),n}var It={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=Se(It),Nr=j({},It,{view:0,detail:0}),Pd=Se(Nr),oo,io,Ot,Pa=j({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ot&&(Ot&&e.type==="mousemove"?(oo=e.screenX-Ot.screenX,io=e.screenY-Ot.screenY):io=oo=0,Ot=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:io}}),Gs=Se(Pa),Od=j({},Pa,{dataTransfer:0}),Dd=Se(Od),Fd=j({},Nr,{relatedTarget:0}),so=Se(Fd),qd=j({},It,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=Se(qd),Ud=j({},It,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gd=Se(Ud),Wd=j({},It,{data:0}),Ws=Se(Wd),Hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Qd[e])?!!n[e]:!1}function Qi(){return Vd}var Kd=j({},Nr,{key:function(e){if(e.key){var n=Hd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qi,charCode:function(e){return e.type==="keypress"?$r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zd=Se(Kd),Yd=j({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hs=Se(Yd),Jd=j({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qi}),$d=Se(Jd),Zd=j({},It,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=Se(Zd),ec=j({},Pa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nc=Se(ec),tc=[9,13,27,32],Vi=Xe&&"CompositionEvent"in window,Qt=null;Xe&&"documentMode"in document&&(Qt=document.documentMode);var rc=Xe&&"TextEvent"in window&&!Qt,Bu=Xe&&(!Vi||Qt&&8<Qt&&11>=Qt),js=" ",Qs=!1;function Uu(e,n){switch(e){case"keyup":return tc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tt=!1;function ac(e,n){switch(e){case"compositionend":return Gu(n);case"keypress":return n.which!==32?null:(Qs=!0,js);case"textInput":return e=n.data,e===js&&Qs?null:e;default:return null}}function oc(e,n){if(tt)return e==="compositionend"||!Vi&&Uu(e,n)?(e=qu(),Jr=Hi=dn=null,tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bu&&n.locale!=="ko"?null:n.data;default:return null}}var ic={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ic[e.type]:n==="textarea"}function Wu(e,n,t,r){Au(r),n=ca(n,"onChange"),0<n.length&&(t=new ji("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Vt=null,or=null;function sc(e){Xu(e,0)}function Oa(e){var n=ot(e);if(du(n))return e}function lc(e,n){if(e==="change")return n}var Hu=!1;if(Xe){var lo;if(Xe){var uo="oninput"in document;if(!uo){var Ks=document.createElement("div");Ks.setAttribute("oninput","return;"),uo=typeof Ks.oninput=="function"}lo=uo}else lo=!1;Hu=lo&&(!document.documentMode||9<document.documentMode)}function zs(){Vt&&(Vt.detachEvent("onpropertychange",ju),or=Vt=null)}function ju(e){if(e.propertyName==="value"&&Oa(or)){var n=[];Wu(n,or,e,qi(e)),Cu(sc,n)}}function uc(e,n,t){e==="focusin"?(zs(),Vt=n,or=t,Vt.attachEvent("onpropertychange",ju)):e==="focusout"&&zs()}function mc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oa(or)}function hc(e,n){if(e==="click")return Oa(n)}function dc(e,n){if(e==="input"||e==="change")return Oa(n)}function cc(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ue=typeof Object.is=="function"?Object.is:cc;function ir(e,n){if(Ue(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!_o.call(n,a)||!Ue(e[a],n[a]))return!1}return!0}function Ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Js(e,n){var t=Ys(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ys(t)}}function Qu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vu(){for(var e=window,n=ia();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ia(e.document)}return n}function Ki(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function fc(e){var n=Vu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Qu(t.ownerDocument.documentElement,t)){if(r!==null&&Ki(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=Js(t,o);var i=Js(t,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gc=Xe&&"documentMode"in document&&11>=document.documentMode,rt=null,Yo=null,Kt=null,Jo=!1;function $s(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Jo||rt==null||rt!==ia(r)||(r=rt,"selectionStart"in r&&Ki(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kt&&ir(Kt,r)||(Kt=r,r=ca(Yo,"onSelect"),0<r.length&&(n=new ji("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=rt)))}function Fr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var at={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},mo={},Ku={};Xe&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete at.animationend.animation,delete at.animationiteration.animation,delete at.animationstart.animation),"TransitionEvent"in window||delete at.transitionend.transition);function Da(e){if(mo[e])return mo[e];if(!at[e])return e;var n=at[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ku)return mo[e]=n[t];return e}var zu=Da("animationend"),Yu=Da("animationiteration"),Ju=Da("animationstart"),$u=Da("transitionend"),Zu=new Map,Zs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,n){Zu.set(e,n),Vn(n,[e])}for(var ho=0;ho<Zs.length;ho++){var co=Zs[ho],pc=co.toLowerCase(),wc=co[0].toUpperCase()+co.slice(1);Sn(pc,"on"+wc)}Sn(zu,"onAnimationEnd");Sn(Yu,"onAnimationIteration");Sn(Ju,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn($u,"onTransitionEnd");yt("onMouseEnter",["mouseout","mouseover"]);yt("onMouseLeave",["mouseout","mouseover"]);yt("onPointerEnter",["pointerout","pointerover"]);yt("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wt));function Xs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,pd(r,n,void 0,e),e.currentTarget=null}function Xu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&a.isPropagationStopped())break e;Xs(a,s,u),o=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&a.isPropagationStopped())break e;Xs(a,s,u),o=l}}}if(la)throw e=Qo,la=!1,Qo=null,e}function B(e,n){var t=n[ni];t===void 0&&(t=n[ni]=new Set);var r=e+"__bubble";t.has(r)||(em(n,e,2,!1),t.add(r))}function fo(e,n,t){var r=0;n&&(r|=4),em(t,e,r,n)}var qr="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[qr]){e[qr]=!0,su.forEach(function(t){t!=="selectionchange"&&(yc.has(t)||fo(t,!1,e),fo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[qr]||(n[qr]=!0,fo("selectionchange",!1,n))}}function em(e,n,t,r){switch(Fu(n)){case 1:var a=Ld;break;case 4:a=Md;break;default:a=Wi}t=a.bind(null,n,t,e),a=void 0,!jo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function go(e,n,t,r,a){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;i=i.return}for(;s!==null;){if(i=On(s),i===null)return;if(l=i.tag,l===5||l===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Cu(function(){var u=o,c=qi(t),d=[];e:{var g=Zu.get(e);if(g!==void 0){var A=ji,T=e;switch(e){case"keypress":if($r(t)===0)break e;case"keydown":case"keyup":A=zd;break;case"focusin":T="focus",A=so;break;case"focusout":T="blur",A=so;break;case"beforeblur":case"afterblur":A=so;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=$d;break;case zu:case Yu:case Ju:A=Bd;break;case $u:A=Xd;break;case"scroll":A=Pd;break;case"wheel":A=nc;break;case"copy":case"cut":case"paste":A=Gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Hs}var y=(n&4)!==0,N=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var m=u,p;m!==null;){p=m;var b=p.stateNode;if(p.tag===5&&b!==null&&(p=b,f!==null&&(b=nr(m,f),b!=null&&y.push(lr(m,b,p)))),N)break;m=m.return}0<y.length&&(g=new A(g,T,null,t,c),d.push({event:g,listeners:y}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",g&&t!==Wo&&(T=t.relatedTarget||t.fromElement)&&(On(T)||T[en]))break e;if((A||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,A?(T=t.relatedTarget||t.toElement,A=u,T=T?On(T):null,T!==null&&(N=Kn(T),T!==N||T.tag!==5&&T.tag!==6)&&(T=null)):(A=null,T=u),A!==T)){if(y=Gs,b="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=Hs,b="onPointerLeave",f="onPointerEnter",m="pointer"),N=A==null?g:ot(A),p=T==null?g:ot(T),g=new y(b,m+"leave",A,t,c),g.target=N,g.relatedTarget=p,b=null,On(c)===u&&(y=new y(f,m+"enter",T,t,c),y.target=p,y.relatedTarget=N,b=y),N=b,A&&T)n:{for(y=A,f=T,m=0,p=y;p;p=Zn(p))m++;for(p=0,b=f;b;b=Zn(b))p++;for(;0<m-p;)y=Zn(y),m--;for(;0<p-m;)f=Zn(f),p--;for(;m--;){if(y===f||f!==null&&y===f.alternate)break n;y=Zn(y),f=Zn(f)}y=null}else y=null;A!==null&&el(d,g,A,y,!1),T!==null&&N!==null&&el(d,N,T,y,!0)}}e:{if(g=u?ot(u):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var v=lc;else if(Vs(g))if(Hu)v=dc;else{v=mc;var E=uc}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(v=hc);if(v&&(v=v(e,u))){Wu(d,v,t,c);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Fo(g,"number",g.value)}switch(E=u?ot(u):window,e){case"focusin":(Vs(E)||E.contentEditable==="true")&&(rt=E,Yo=u,Kt=null);break;case"focusout":Kt=Yo=rt=null;break;case"mousedown":Jo=!0;break;case"contextmenu":case"mouseup":case"dragend":Jo=!1,$s(d,t,c);break;case"selectionchange":if(gc)break;case"keydown":case"keyup":$s(d,t,c)}var I;if(Vi)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else tt?Uu(e,t)&&(x="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(x="onCompositionStart");x&&(Bu&&t.locale!=="ko"&&(tt||x!=="onCompositionStart"?x==="onCompositionEnd"&&tt&&(I=qu()):(dn=c,Hi="value"in dn?dn.value:dn.textContent,tt=!0)),E=ca(u,x),0<E.length&&(x=new Ws(x,e,null,t,c),d.push({event:x,listeners:E}),I?x.data=I:(I=Gu(t),I!==null&&(x.data=I)))),(I=rc?ac(e,t):oc(e,t))&&(u=ca(u,"onBeforeInput"),0<u.length&&(c=new Ws("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=I))}Xu(d,n)})}function lr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ca(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=nr(e,t),o!=null&&r.unshift(lr(e,o,a)),o=nr(e,n),o!=null&&r.push(lr(e,o,a))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function el(e,n,t,r,a){for(var o=n._reactName,i=[];t!==null&&t!==r;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,a?(l=nr(t,o),l!=null&&i.unshift(lr(t,l,s))):a||(l=nr(t,o),l!=null&&i.push(lr(t,l,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Ac=/\r\n?/g,Tc=/\u0000|\uFFFD/g;function nl(e){return(typeof e=="string"?e:""+e).replace(Ac,`
`).replace(Tc,"")}function Br(e,n,t){if(n=nl(n),nl(e)!==n&&t)throw Error(C(425))}function fa(){}var $o=null,Zo=null;function Xo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ei=typeof setTimeout=="function"?setTimeout:void 0,Nc=typeof clearTimeout=="function"?clearTimeout:void 0,tl=typeof Promise=="function"?Promise:void 0,bc=typeof queueMicrotask=="function"?queueMicrotask:typeof tl<"u"?function(e){return tl.resolve(null).then(e).catch(Cc)}:ei;function Cc(e){setTimeout(function(){throw e})}function po(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),ar(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);ar(n)}function yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function rl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Et=Math.random().toString(36).slice(2),je="__reactFiber$"+Et,ur="__reactProps$"+Et,en="__reactContainer$"+Et,ni="__reactEvents$"+Et,vc="__reactListeners$"+Et,kc="__reactHandles$"+Et;function On(e){var n=e[je];if(n)return n;for(var t=e.parentNode;t;){if(n=t[en]||t[je]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=rl(e);e!==null;){if(t=e[je])return t;e=rl(e)}return n}e=t,t=e.parentNode}return null}function br(e){return e=e[je]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ot(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Fa(e){return e[ur]||null}var ti=[],it=-1;function In(e){return{current:e}}function U(e){0>it||(e.current=ti[it],ti[it]=null,it--)}function q(e,n){it++,ti[it]=e.current,e.current=n}var kn={},se=In(kn),we=In(!1),Gn=kn;function At(e,n){var t=e.type.contextTypes;if(!t)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in t)a[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function ye(e){return e=e.childContextTypes,e!=null}function ga(){U(we),U(se)}function al(e,n,t){if(se.current!==kn)throw Error(C(168));q(se,n),q(we,t)}function nm(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(C(108,ud(e)||"Unknown",a));return j({},t,r)}function pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Gn=se.current,q(se,e),q(we,we.current),!0}function ol(e,n,t){var r=e.stateNode;if(!r)throw Error(C(169));t?(e=nm(e,n,Gn),r.__reactInternalMemoizedMergedChildContext=e,U(we),U(se),q(se,e)):U(we),q(we,t)}var Ye=null,qa=!1,wo=!1;function tm(e){Ye===null?Ye=[e]:Ye.push(e)}function Sc(e){qa=!0,tm(e)}function En(){if(!wo&&Ye!==null){wo=!0;var e=0,n=D;try{var t=Ye;for(D=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ye=null,qa=!1}catch(a){throw Ye!==null&&(Ye=Ye.slice(e+1)),Iu(Bi,En),a}finally{D=n,wo=!1}}return null}var st=[],lt=0,wa=null,ya=0,Ee=[],xe=0,Wn=null,Je=1,$e="";function Ln(e,n){st[lt++]=ya,st[lt++]=wa,wa=e,ya=n}function rm(e,n,t){Ee[xe++]=Je,Ee[xe++]=$e,Ee[xe++]=Wn,Wn=e;var r=Je;e=$e;var a=32-qe(r)-1;r&=~(1<<a),t+=1;var o=32-qe(n)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Je=1<<32-qe(n)+a|t<<a|r,$e=o+e}else Je=1<<o|t<<a|r,$e=e}function zi(e){e.return!==null&&(Ln(e,1),rm(e,1,0))}function Yi(e){for(;e===wa;)wa=st[--lt],st[lt]=null,ya=st[--lt],st[lt]=null;for(;e===Wn;)Wn=Ee[--xe],Ee[xe]=null,$e=Ee[--xe],Ee[xe]=null,Je=Ee[--xe],Ee[xe]=null}var Ce=null,be=null,G=!1,Fe=null;function am(e,n){var t=_e(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function il(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ce=e,be=yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ce=e,be=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Wn!==null?{id:Je,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=_e(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ce=e,be=null,!0):!1;default:return!1}}function ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ai(e){if(G){var n=be;if(n){var t=n;if(!il(e,n)){if(ri(e))throw Error(C(418));n=yn(t.nextSibling);var r=Ce;n&&il(e,n)?am(r,t):(e.flags=e.flags&-4097|2,G=!1,Ce=e)}}else{if(ri(e))throw Error(C(418));e.flags=e.flags&-4097|2,G=!1,Ce=e}}}function sl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Ur(e){if(e!==Ce)return!1;if(!G)return sl(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Xo(e.type,e.memoizedProps)),n&&(n=be)){if(ri(e))throw om(),Error(C(418));for(;n;)am(e,n),n=yn(n.nextSibling)}if(sl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){be=yn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}be=null}}else be=Ce?yn(e.stateNode.nextSibling):null;return!0}function om(){for(var e=be;e;)e=yn(e.nextSibling)}function Tt(){be=Ce=null,G=!1}function Ji(e){Fe===null?Fe=[e]:Fe.push(e)}var Ic=an.ReactCurrentBatchConfig;function Dt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,e));var a=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var s=a.refs;i===null?delete s[o]:s[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function Gr(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ll(e){var n=e._init;return n(e._payload)}function im(e){function n(f,m){if(e){var p=f.deletions;p===null?(f.deletions=[m],f.flags|=16):p.push(m)}}function t(f,m){if(!e)return null;for(;m!==null;)n(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function a(f,m){return f=bn(f,m),f.index=0,f.sibling=null,f}function o(f,m,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<m?(f.flags|=2,m):p):(f.flags|=2,m)):(f.flags|=1048576,m)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,m,p,b){return m===null||m.tag!==6?(m=vo(p,f.mode,b),m.return=f,m):(m=a(m,p),m.return=f,m)}function l(f,m,p,b){var v=p.type;return v===nt?c(f,m,p.props.children,b,p.key):m!==null&&(m.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===sn&&ll(v)===m.type)?(b=a(m,p.props),b.ref=Dt(f,m,p),b.return=f,b):(b=aa(p.type,p.key,p.props,null,f.mode,b),b.ref=Dt(f,m,p),b.return=f,b)}function u(f,m,p,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=ko(p,f.mode,b),m.return=f,m):(m=a(m,p.children||[]),m.return=f,m)}function c(f,m,p,b,v){return m===null||m.tag!==7?(m=Un(p,f.mode,b,v),m.return=f,m):(m=a(m,p),m.return=f,m)}function d(f,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=vo(""+m,f.mode,p),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _r:return p=aa(m.type,m.key,m.props,null,f.mode,p),p.ref=Dt(f,null,m),p.return=f,p;case et:return m=ko(m,f.mode,p),m.return=f,m;case sn:var b=m._init;return d(f,b(m._payload),p)}if(Ut(m)||Rt(m))return m=Un(m,f.mode,p,null),m.return=f,m;Gr(f,m)}return null}function g(f,m,p,b){var v=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return v!==null?null:s(f,m,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _r:return p.key===v?l(f,m,p,b):null;case et:return p.key===v?u(f,m,p,b):null;case sn:return v=p._init,g(f,m,v(p._payload),b)}if(Ut(p)||Rt(p))return v!==null?null:c(f,m,p,b,null);Gr(f,p)}return null}function A(f,m,p,b,v){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(p)||null,s(m,f,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _r:return f=f.get(b.key===null?p:b.key)||null,l(m,f,b,v);case et:return f=f.get(b.key===null?p:b.key)||null,u(m,f,b,v);case sn:var E=b._init;return A(f,m,p,E(b._payload),v)}if(Ut(b)||Rt(b))return f=f.get(p)||null,c(m,f,b,v,null);Gr(m,b)}return null}function T(f,m,p,b){for(var v=null,E=null,I=m,x=m=0,_=null;I!==null&&x<p.length;x++){I.index>x?(_=I,I=null):_=I.sibling;var R=g(f,I,p[x],b);if(R===null){I===null&&(I=_);break}e&&I&&R.alternate===null&&n(f,I),m=o(R,m,x),E===null?v=R:E.sibling=R,E=R,I=_}if(x===p.length)return t(f,I),G&&Ln(f,x),v;if(I===null){for(;x<p.length;x++)I=d(f,p[x],b),I!==null&&(m=o(I,m,x),E===null?v=I:E.sibling=I,E=I);return G&&Ln(f,x),v}for(I=r(f,I);x<p.length;x++)_=A(I,f,x,p[x],b),_!==null&&(e&&_.alternate!==null&&I.delete(_.key===null?x:_.key),m=o(_,m,x),E===null?v=_:E.sibling=_,E=_);return e&&I.forEach(function(F){return n(f,F)}),G&&Ln(f,x),v}function y(f,m,p,b){var v=Rt(p);if(typeof v!="function")throw Error(C(150));if(p=v.call(p),p==null)throw Error(C(151));for(var E=v=null,I=m,x=m=0,_=null,R=p.next();I!==null&&!R.done;x++,R=p.next()){I.index>x?(_=I,I=null):_=I.sibling;var F=g(f,I,R.value,b);if(F===null){I===null&&(I=_);break}e&&I&&F.alternate===null&&n(f,I),m=o(F,m,x),E===null?v=F:E.sibling=F,E=F,I=_}if(R.done)return t(f,I),G&&Ln(f,x),v;if(I===null){for(;!R.done;x++,R=p.next())R=d(f,R.value,b),R!==null&&(m=o(R,m,x),E===null?v=R:E.sibling=R,E=R);return G&&Ln(f,x),v}for(I=r(f,I);!R.done;x++,R=p.next())R=A(I,f,x,R.value,b),R!==null&&(e&&R.alternate!==null&&I.delete(R.key===null?x:R.key),m=o(R,m,x),E===null?v=R:E.sibling=R,E=R);return e&&I.forEach(function(le){return n(f,le)}),G&&Ln(f,x),v}function N(f,m,p,b){if(typeof p=="object"&&p!==null&&p.type===nt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case _r:e:{for(var v=p.key,E=m;E!==null;){if(E.key===v){if(v=p.type,v===nt){if(E.tag===7){t(f,E.sibling),m=a(E,p.props.children),m.return=f,f=m;break e}}else if(E.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===sn&&ll(v)===E.type){t(f,E.sibling),m=a(E,p.props),m.ref=Dt(f,E,p),m.return=f,f=m;break e}t(f,E);break}else n(f,E);E=E.sibling}p.type===nt?(m=Un(p.props.children,f.mode,b,p.key),m.return=f,f=m):(b=aa(p.type,p.key,p.props,null,f.mode,b),b.ref=Dt(f,m,p),b.return=f,f=b)}return i(f);case et:e:{for(E=p.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){t(f,m.sibling),m=a(m,p.children||[]),m.return=f,f=m;break e}else{t(f,m);break}else n(f,m);m=m.sibling}m=ko(p,f.mode,b),m.return=f,f=m}return i(f);case sn:return E=p._init,N(f,m,E(p._payload),b)}if(Ut(p))return T(f,m,p,b);if(Rt(p))return y(f,m,p,b);Gr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(t(f,m.sibling),m=a(m,p),m.return=f,f=m):(t(f,m),m=vo(p,f.mode,b),m.return=f,f=m),i(f)):t(f,m)}return N}var Nt=im(!0),sm=im(!1),Aa=In(null),Ta=null,ut=null,$i=null;function Zi(){$i=ut=Ta=null}function Xi(e){var n=Aa.current;U(Aa),e._currentValue=n}function oi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function pt(e,n){Ta=e,$i=ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function Le(e){var n=e._currentValue;if($i!==e)if(e={context:e,memoizedValue:n,next:null},ut===null){if(Ta===null)throw Error(C(308));ut=e,Ta.dependencies={lanes:0,firstContext:e}}else ut=ut.next=e;return n}var Dn=null;function es(e){Dn===null?Dn=[e]:Dn.push(e)}function lm(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,es(n)):(t.next=a.next,a.next=t),n.interleaved=t,nn(e,r)}function nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ln=!1;function ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function um(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function An(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,nn(e,t)}return a=r.interleaved,a===null?(n.next=n,es(r)):(n.next=a.next,a.next=n),r.interleaved=n,nn(e,t)}function Zr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ui(e,t)}}function ul(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?a=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?a=o=n:o=o.next=n}else a=o=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Na(e,n,t,r){var a=e.updateQueue;ln=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?o=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=a.baseState;i=0,c=u=l=null,s=o;do{var g=s.lane,A=s.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:A,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var T=e,y=s;switch(g=n,A=t,y.tag){case 1:if(T=y.payload,typeof T=="function"){d=T.call(A,d,g);break e}d=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=y.payload,g=typeof T=="function"?T.call(A,d,g):T,g==null)break e;d=j({},d,g);break e;case 2:ln=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[s]:g.push(s))}else A={eventTime:A,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=A,l=d):c=c.next=A,i|=g;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;g=s,s=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(c===null&&(l=d),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=c,n=a.shared.interleaved,n!==null){a=n;do i|=a.lane,a=a.next;while(a!==n)}else o===null&&(a.shared.lanes=0);jn|=i,e.lanes=i,e.memoizedState=d}}function ml(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(C(191,a));a.call(r)}}}var Cr={},Ve=In(Cr),mr=In(Cr),hr=In(Cr);function Fn(e){if(e===Cr)throw Error(C(174));return e}function ts(e,n){switch(q(hr,n),q(mr,e),q(Ve,Cr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Bo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Bo(n,e)}U(Ve),q(Ve,n)}function bt(){U(Ve),U(mr),U(hr)}function mm(e){Fn(hr.current);var n=Fn(Ve.current),t=Bo(n,e.type);n!==t&&(q(mr,e),q(Ve,t))}function rs(e){mr.current===e&&(U(Ve),U(mr))}var W=In(0);function ba(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var yo=[];function as(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var Xr=an.ReactCurrentDispatcher,Ao=an.ReactCurrentBatchConfig,Hn=0,H=null,J=null,X=null,Ca=!1,zt=!1,dr=0,Ec=0;function ae(){throw Error(C(321))}function os(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ue(e[t],n[t]))return!1;return!0}function is(e,n,t,r,a,o){if(Hn=o,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Xr.current=e===null||e.memoizedState===null?Lc:Mc,e=t(r,a),zt){o=0;do{if(zt=!1,dr=0,25<=o)throw Error(C(301));o+=1,X=J=null,n.updateQueue=null,Xr.current=Pc,e=t(r,a)}while(zt)}if(Xr.current=va,n=J!==null&&J.next!==null,Hn=0,X=J=H=null,Ca=!1,n)throw Error(C(300));return e}function ss(){var e=dr!==0;return dr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?H.memoizedState=X=e:X=X.next=e,X}function Me(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=X===null?H.memoizedState:X.next;if(n!==null)X=n,J=e;else{if(e===null)throw Error(C(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},X===null?H.memoizedState=X=e:X=X.next=e}return X}function cr(e,n){return typeof n=="function"?n(e):n}function To(e){var n=Me(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=J,a=r.baseQueue,o=t.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,t.pending=null}if(a!==null){o=a.next,r=r.baseState;var s=i=null,l=null,u=o;do{var c=u.lane;if((Hn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,i=r):l=l.next=d,H.lanes|=c,jn|=c}u=u.next}while(u!==null&&u!==o);l===null?i=r:l.next=s,Ue(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do o=a.lane,H.lanes|=o,jn|=o,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function No(e){var n=Me(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,o=n.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);Ue(o,n.memoizedState)||(pe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function hm(){}function dm(e,n){var t=H,r=Me(),a=n(),o=!Ue(r.memoizedState,a);if(o&&(r.memoizedState=a,pe=!0),r=r.queue,ls(gm.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||X!==null&&X.memoizedState.tag&1){if(t.flags|=2048,fr(9,fm.bind(null,t,r,a,n),void 0,null),ee===null)throw Error(C(349));Hn&30||cm(t,n,a)}return a}function cm(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function fm(e,n,t,r){n.value=t,n.getSnapshot=r,pm(n)&&wm(e)}function gm(e,n,t){return t(function(){pm(n)&&wm(e)})}function pm(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ue(e,t)}catch{return!0}}function wm(e){var n=nn(e,1);n!==null&&Be(n,e,1,-1)}function hl(e){var n=He();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},n.queue=e,e=e.dispatch=Rc.bind(null,H,e),[n.memoizedState,e]}function fr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ym(){return Me().memoizedState}function ea(e,n,t,r){var a=He();H.flags|=e,a.memoizedState=fr(1|n,t,void 0,r===void 0?null:r)}function Ba(e,n,t,r){var a=Me();r=r===void 0?null:r;var o=void 0;if(J!==null){var i=J.memoizedState;if(o=i.destroy,r!==null&&os(r,i.deps)){a.memoizedState=fr(n,t,o,r);return}}H.flags|=e,a.memoizedState=fr(1|n,t,o,r)}function dl(e,n){return ea(8390656,8,e,n)}function ls(e,n){return Ba(2048,8,e,n)}function Am(e,n){return Ba(4,2,e,n)}function Tm(e,n){return Ba(4,4,e,n)}function Nm(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bm(e,n,t){return t=t!=null?t.concat([e]):null,Ba(4,4,Nm.bind(null,n,e),t)}function us(){}function Cm(e,n){var t=Me();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&os(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function vm(e,n){var t=Me();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&os(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function km(e,n,t){return Hn&21?(Ue(t,n)||(t=_u(),H.lanes|=t,jn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function xc(e,n){var t=D;D=t!==0&&4>t?t:4,e(!0);var r=Ao.transition;Ao.transition={};try{e(!1),n()}finally{D=t,Ao.transition=r}}function Sm(){return Me().memoizedState}function _c(e,n,t){var r=Nn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Im(e))Em(n,t);else if(t=lm(e,n,t,r),t!==null){var a=he();Be(t,e,r,a),xm(t,n,r)}}function Rc(e,n,t){var r=Nn(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Im(e))Em(n,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,s=o(i,t);if(a.hasEagerState=!0,a.eagerState=s,Ue(s,i)){var l=n.interleaved;l===null?(a.next=a,es(n)):(a.next=l.next,l.next=a),n.interleaved=a;return}}catch{}finally{}t=lm(e,n,a,r),t!==null&&(a=he(),Be(t,e,r,a),xm(t,n,r))}}function Im(e){var n=e.alternate;return e===H||n!==null&&n===H}function Em(e,n){zt=Ca=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function xm(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ui(e,t)}}var va={readContext:Le,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Lc={readContext:Le,useCallback:function(e,n){return He().memoizedState=[e,n===void 0?null:n],e},useContext:Le,useEffect:dl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ea(4194308,4,Nm.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ea(4194308,4,e,n)},useInsertionEffect:function(e,n){return ea(4,2,e,n)},useMemo:function(e,n){var t=He();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=He();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=_c.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=He();return e={current:e},n.memoizedState=e},useState:hl,useDebugValue:us,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=hl(!1),n=e[0];return e=xc.bind(null,e[1]),He().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,a=He();if(G){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),ee===null)throw Error(C(349));Hn&30||cm(r,n,t)}a.memoizedState=t;var o={value:t,getSnapshot:n};return a.queue=o,dl(gm.bind(null,r,o,e),[e]),r.flags|=2048,fr(9,fm.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=He(),n=ee.identifierPrefix;if(G){var t=$e,r=Je;t=(r&~(1<<32-qe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=dr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ec++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Mc={readContext:Le,useCallback:Cm,useContext:Le,useEffect:ls,useImperativeHandle:bm,useInsertionEffect:Am,useLayoutEffect:Tm,useMemo:vm,useReducer:To,useRef:ym,useState:function(){return To(cr)},useDebugValue:us,useDeferredValue:function(e){var n=Me();return km(n,J.memoizedState,e)},useTransition:function(){var e=To(cr)[0],n=Me().memoizedState;return[e,n]},useMutableSource:hm,useSyncExternalStore:dm,useId:Sm,unstable_isNewReconciler:!1},Pc={readContext:Le,useCallback:Cm,useContext:Le,useEffect:ls,useImperativeHandle:bm,useInsertionEffect:Am,useLayoutEffect:Tm,useMemo:vm,useReducer:No,useRef:ym,useState:function(){return No(cr)},useDebugValue:us,useDeferredValue:function(e){var n=Me();return J===null?n.memoizedState=e:km(n,J.memoizedState,e)},useTransition:function(){var e=No(cr)[0],n=Me().memoizedState;return[e,n]},useMutableSource:hm,useSyncExternalStore:dm,useId:Sm,unstable_isNewReconciler:!1};function Oe(e,n){if(e&&e.defaultProps){n=j({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ii(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:j({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ua={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=he(),a=Nn(e),o=Ze(r,a);o.payload=n,t!=null&&(o.callback=t),n=An(e,o,a),n!==null&&(Be(n,e,a,r),Zr(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=he(),a=Nn(e),o=Ze(r,a);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=An(e,o,a),n!==null&&(Be(n,e,a,r),Zr(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),r=Nn(e),a=Ze(t,r);a.tag=2,n!=null&&(a.callback=n),n=An(e,a,r),n!==null&&(Be(n,e,r,t),Zr(n,e,r))}};function cl(e,n,t,r,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!ir(t,r)||!ir(a,o):!0}function _m(e,n,t){var r=!1,a=kn,o=n.contextType;return typeof o=="object"&&o!==null?o=Le(o):(a=ye(n)?Gn:se.current,r=n.contextTypes,o=(r=r!=null)?At(e,a):kn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ua,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),n}function fl(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ua.enqueueReplaceState(n,n.state,null)}function si(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},ns(e);var o=n.contextType;typeof o=="object"&&o!==null?a.context=Le(o):(o=ye(n)?Gn:se.current,a.context=At(e,o)),a.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ii(e,n,o,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Ua.enqueueReplaceState(a,a.state,null),Na(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ct(e,n){try{var t="",r=n;do t+=ld(r),r=r.return;while(r);var a=t}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:a,digest:null}}function bo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function li(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Oc=typeof WeakMap=="function"?WeakMap:Map;function Rm(e,n,t){t=Ze(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Sa||(Sa=!0,yi=r),li(e,n)},t}function Lm(e,n,t){t=Ze(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){li(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){li(e,n),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function gl(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Oc;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=Yc.bind(null,e,n,t),n.then(e,e))}function pl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function wl(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ze(-1,1),n.tag=2,An(t,n,1))),t.lanes|=1),e)}var Dc=an.ReactCurrentOwner,pe=!1;function me(e,n,t,r){n.child=e===null?sm(n,null,t,r):Nt(n,e.child,t,r)}function yl(e,n,t,r,a){t=t.render;var o=n.ref;return pt(n,a),r=is(e,n,t,r,o,a),t=ss(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,tn(e,n,a)):(G&&t&&zi(n),n.flags|=1,me(e,n,r,a),n.child)}function Al(e,n,t,r,a){if(e===null){var o=t.type;return typeof o=="function"&&!ws(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Mm(e,n,o,r,a)):(e=aa(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:ir,t(i,r)&&e.ref===n.ref)return tn(e,n,a)}return n.flags|=1,e=bn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Mm(e,n,t,r,a){if(e!==null){var o=e.memoizedProps;if(ir(o,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,tn(e,n,a)}return ui(e,n,t,r,a)}function Pm(e,n,t){var r=n.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(ht,Ne),Ne|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,q(ht,Ne),Ne|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,q(ht,Ne),Ne|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,q(ht,Ne),Ne|=r;return me(e,n,a,t),n.child}function Om(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ui(e,n,t,r,a){var o=ye(t)?Gn:se.current;return o=At(n,o),pt(n,a),t=is(e,n,t,r,o,a),r=ss(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,tn(e,n,a)):(G&&r&&zi(n),n.flags|=1,me(e,n,t,a),n.child)}function Tl(e,n,t,r,a){if(ye(t)){var o=!0;pa(n)}else o=!1;if(pt(n,a),n.stateNode===null)na(e,n),_m(n,t,r),si(n,t,r,a),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var l=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=ye(t)?Gn:se.current,u=At(n,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&fl(n,i,r,u),ln=!1;var g=n.memoizedState;i.state=g,Na(n,r,i,a),l=n.memoizedState,s!==r||g!==l||we.current||ln?(typeof c=="function"&&(ii(n,t,c,r),l=n.memoizedState),(s=ln||cl(n,t,s,r,g,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,um(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:Oe(n.type,s),i.props=u,d=n.pendingProps,g=i.context,l=t.contextType,typeof l=="object"&&l!==null?l=Le(l):(l=ye(t)?Gn:se.current,l=At(n,l));var A=t.getDerivedStateFromProps;(c=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||g!==l)&&fl(n,i,r,l),ln=!1,g=n.memoizedState,i.state=g,Na(n,r,i,a);var T=n.memoizedState;s!==d||g!==T||we.current||ln?(typeof A=="function"&&(ii(n,t,A,r),T=n.memoizedState),(u=ln||cl(n,t,u,r,g,T,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,T,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,T,l)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=T),i.props=r,i.state=T,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return mi(e,n,t,r,o,a)}function mi(e,n,t,r,a,o){Om(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return a&&ol(n,t,!1),tn(e,n,o);r=n.stateNode,Dc.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Nt(n,e.child,null,o),n.child=Nt(n,null,s,o)):me(e,n,s,o),n.memoizedState=r.state,a&&ol(n,t,!0),n.child}function Dm(e){var n=e.stateNode;n.pendingContext?al(e,n.pendingContext,n.pendingContext!==n.context):n.context&&al(e,n.context,!1),ts(e,n.containerInfo)}function Nl(e,n,t,r,a){return Tt(),Ji(a),n.flags|=256,me(e,n,t,r),n.child}var hi={dehydrated:null,treeContext:null,retryLane:0};function di(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fm(e,n,t){var r=n.pendingProps,a=W.current,o=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),q(W,a&1),e===null)return ai(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ha(i,r,0,null),e=Un(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=di(t),n.memoizedState=hi,e):ms(n,i));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return Fc(e,n,i,r,s,a,t);if(o){o=r.fallback,i=n.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:r.children};return!(i&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=bn(a,l),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?o=bn(s,o):(o=Un(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?di(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=hi,r}return o=e.child,e=o.sibling,r=bn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ms(e,n){return n=Ha({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Wr(e,n,t,r){return r!==null&&Ji(r),Nt(n,e.child,null,t),e=ms(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Fc(e,n,t,r,a,o,i){if(t)return n.flags&256?(n.flags&=-257,r=bo(Error(C(422))),Wr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,a=n.mode,r=Ha({mode:"visible",children:r.children},a,0,null),o=Un(o,a,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Nt(n,e.child,null,i),n.child.memoizedState=di(i),n.memoizedState=hi,o);if(!(n.mode&1))return Wr(e,n,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(C(419)),r=bo(o,r,void 0),Wr(e,n,i,r)}if(s=(i&e.childLanes)!==0,pe||s){if(r=ee,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,nn(e,a),Be(r,e,a,-1))}return ps(),r=bo(Error(C(421))),Wr(e,n,i,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Jc.bind(null,e),a._reactRetry=n,null):(e=o.treeContext,be=yn(a.nextSibling),Ce=n,G=!0,Fe=null,e!==null&&(Ee[xe++]=Je,Ee[xe++]=$e,Ee[xe++]=Wn,Je=e.id,$e=e.overflow,Wn=n),n=ms(n,r.children),n.flags|=4096,n)}function bl(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),oi(e.return,n,t)}function Co(e,n,t,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=a)}function qm(e,n,t){var r=n.pendingProps,a=r.revealOrder,o=r.tail;if(me(e,n,r.children,t),r=W.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bl(e,t,n);else if(e.tag===19)bl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(W,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&ba(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Co(n,!1,a,t,o);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&ba(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Co(n,!0,t,null,o);break;case"together":Co(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function na(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),jn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=bn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=bn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function qc(e,n,t){switch(n.tag){case 3:Dm(n),Tt();break;case 5:mm(n);break;case 1:ye(n.type)&&pa(n);break;case 4:ts(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;q(Aa,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(q(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?Fm(e,n,t):(q(W,W.current&1),e=tn(e,n,t),e!==null?e.sibling:null);q(W,W.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return qm(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(W,W.current),r)break;return null;case 22:case 23:return n.lanes=0,Pm(e,n,t)}return tn(e,n,t)}var Bm,ci,Um,Gm;Bm=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ci=function(){};Um=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,Fn(Ve.current);var o=null;switch(t){case"input":a=Oo(e,a),r=Oo(e,r),o=[];break;case"select":a=j({},a,{value:void 0}),r=j({},r,{value:void 0}),o=[];break;case"textarea":a=qo(e,a),r=qo(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fa)}Uo(t,r);var i;t=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xt.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(t||(t={}),t[i]=l[i])}else t||(o||(o=[]),o.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xt.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Gm=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ft(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Bc(e,n,t){var r=n.pendingProps;switch(Yi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(n),null;case 1:return ye(n.type)&&ga(),oe(n),null;case 3:return r=n.stateNode,bt(),U(we),U(se),as(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ur(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Fe!==null&&(Ni(Fe),Fe=null))),ci(e,n),oe(n),null;case 5:rs(n);var a=Fn(hr.current);if(t=n.type,e!==null&&n.stateNode!=null)Um(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(C(166));return oe(n),null}if(e=Fn(Ve.current),Ur(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[je]=n,r[ur]=o,e=(n.mode&1)!==0,t){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(a=0;a<Wt.length;a++)B(Wt[a],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Rs(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":Ms(r,o),B("invalid",r)}Uo(t,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),a=["children",""+s]):Xt.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&B("scroll",r)}switch(t){case"input":Rr(r),Ls(r,o,!0);break;case"textarea":Rr(r),Ps(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=fa)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[je]=n,e[ur]=r,Bm(e,n,!1,!1),n.stateNode=e;e:{switch(i=Go(t,r),t){case"dialog":B("cancel",e),B("close",e),a=r;break;case"iframe":case"object":case"embed":B("load",e),a=r;break;case"video":case"audio":for(a=0;a<Wt.length;a++)B(Wt[a],e);a=r;break;case"source":B("error",e),a=r;break;case"img":case"image":case"link":B("error",e),B("load",e),a=r;break;case"details":B("toggle",e),a=r;break;case"input":Rs(e,r),a=Oo(e,r),B("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=j({},r,{value:void 0}),B("invalid",e);break;case"textarea":Ms(e,r),a=qo(e,r),B("invalid",e);break;default:a=r}Uo(t,a),s=a;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?yu(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pu(e,l)):o==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&er(e,l):typeof l=="number"&&er(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xt.hasOwnProperty(o)?l!=null&&o==="onScroll"&&B("scroll",e):l!=null&&Pi(e,o,l,i))}switch(t){case"input":Rr(e),Ls(e,r,!1);break;case"textarea":Rr(e),Ps(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dt(e,!!r.multiple,o,!1):r.defaultValue!=null&&dt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=fa)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return oe(n),null;case 6:if(e&&n.stateNode!=null)Gm(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(C(166));if(t=Fn(hr.current),Fn(Ve.current),Ur(n)){if(r=n.stateNode,t=n.memoizedProps,r[je]=n,(o=r.nodeValue!==t)&&(e=Ce,e!==null))switch(e.tag){case 3:Br(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[je]=n,n.stateNode=r}return oe(n),null;case 13:if(U(W),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&be!==null&&n.mode&1&&!(n.flags&128))om(),Tt(),n.flags|=98560,o=!1;else if(o=Ur(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[je]=n}else Tt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;oe(n),o=!1}else Fe!==null&&(Ni(Fe),Fe=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?$===0&&($=3):ps())),n.updateQueue!==null&&(n.flags|=4),oe(n),null);case 4:return bt(),ci(e,n),e===null&&sr(n.stateNode.containerInfo),oe(n),null;case 10:return Xi(n.type._context),oe(n),null;case 17:return ye(n.type)&&ga(),oe(n),null;case 19:if(U(W),o=n.memoizedState,o===null)return oe(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)Ft(o,!1);else{if($!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=ba(e),i!==null){for(n.flags|=128,Ft(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return q(W,W.current&1|2),n.child}e=e.sibling}o.tail!==null&&K()>vt&&(n.flags|=128,r=!0,Ft(o,!1),n.lanes=4194304)}else{if(!r)if(e=ba(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ft(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!G)return oe(n),null}else 2*K()-o.renderingStartTime>vt&&t!==1073741824&&(n.flags|=128,r=!0,Ft(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=K(),n.sibling=null,t=W.current,q(W,r?t&1|2:t&1),n):(oe(n),null);case 22:case 23:return gs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ne&1073741824&&(oe(n),n.subtreeFlags&6&&(n.flags|=8192)):oe(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function Uc(e,n){switch(Yi(n),n.tag){case 1:return ye(n.type)&&ga(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return bt(),U(we),U(se),as(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return rs(n),null;case 13:if(U(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));Tt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(W),null;case 4:return bt(),null;case 10:return Xi(n.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var Hr=!1,ie=!1,Gc=typeof WeakSet=="function"?WeakSet:Set,S=null;function mt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Q(e,n,r)}else t.current=null}function fi(e,n,t){try{t()}catch(r){Q(e,n,r)}}var Cl=!1;function Wc(e,n){if($o=ha,e=Vu(),Ki(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,s=-1,l=-1,u=0,c=0,d=e,g=null;n:for(;;){for(var A;d!==t||a!==0&&d.nodeType!==3||(s=i+a),d!==o||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(A=d.firstChild)!==null;)g=d,d=A;for(;;){if(d===e)break n;if(g===t&&++u===a&&(s=i),g===o&&++c===r&&(l=i),(A=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=A}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Zo={focusedElem:e,selectionRange:t},ha=!1,S=n;S!==null;)if(n=S,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,S=e;else for(;S!==null;){n=S;try{var T=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var y=T.memoizedProps,N=T.memoizedState,f=n.stateNode,m=f.getSnapshotBeforeUpdate(n.elementType===n.type?y:Oe(n.type,y),N);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(b){Q(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,S=e;break}S=n.return}return T=Cl,Cl=!1,T}function Yt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&fi(n,t,o)}a=a.next}while(a!==r)}}function Ga(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function gi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wm(e){var n=e.alternate;n!==null&&(e.alternate=null,Wm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[je],delete n[ur],delete n[ni],delete n[vc],delete n[kc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hm(e){return e.tag===5||e.tag===3||e.tag===4}function vl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=fa));else if(r!==4&&(e=e.child,e!==null))for(pi(e,n,t),e=e.sibling;e!==null;)pi(e,n,t),e=e.sibling}function wi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wi(e,n,t),e=e.sibling;e!==null;)wi(e,n,t),e=e.sibling}var ne=null,De=!1;function on(e,n,t){for(t=t.child;t!==null;)jm(e,n,t),t=t.sibling}function jm(e,n,t){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Ma,t)}catch{}switch(t.tag){case 5:ie||mt(t,n);case 6:var r=ne,a=De;ne=null,on(e,n,t),ne=r,De=a,ne!==null&&(De?(e=ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ne.removeChild(t.stateNode));break;case 18:ne!==null&&(De?(e=ne,t=t.stateNode,e.nodeType===8?po(e.parentNode,t):e.nodeType===1&&po(e,t),ar(e)):po(ne,t.stateNode));break;case 4:r=ne,a=De,ne=t.stateNode.containerInfo,De=!0,on(e,n,t),ne=r,De=a;break;case 0:case 11:case 14:case 15:if(!ie&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&fi(t,n,i),a=a.next}while(a!==r)}on(e,n,t);break;case 1:if(!ie&&(mt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){Q(t,n,s)}on(e,n,t);break;case 21:on(e,n,t);break;case 22:t.mode&1?(ie=(r=ie)||t.memoizedState!==null,on(e,n,t),ie=r):on(e,n,t);break;default:on(e,n,t)}}function kl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Gc),n.forEach(function(r){var a=$c.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Pe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var o=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,De=!1;break e;case 3:ne=s.stateNode.containerInfo,De=!0;break e;case 4:ne=s.stateNode.containerInfo,De=!0;break e}s=s.return}if(ne===null)throw Error(C(160));jm(o,i,a),ne=null,De=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){Q(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Qm(n,e),n=n.sibling}function Qm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(n,e),We(e),r&4){try{Yt(3,e,e.return),Ga(3,e)}catch(y){Q(e,e.return,y)}try{Yt(5,e,e.return)}catch(y){Q(e,e.return,y)}}break;case 1:Pe(n,e),We(e),r&512&&t!==null&&mt(t,t.return);break;case 5:if(Pe(n,e),We(e),r&512&&t!==null&&mt(t,t.return),e.flags&32){var a=e.stateNode;try{er(a,"")}catch(y){Q(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&cu(a,o),Go(s,i);var u=Go(s,o);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?yu(a,d):c==="dangerouslySetInnerHTML"?pu(a,d):c==="children"?er(a,d):Pi(a,c,d,u)}switch(s){case"input":Do(a,o);break;case"textarea":fu(a,o);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var A=o.value;A!=null?dt(a,!!o.multiple,A,!1):g!==!!o.multiple&&(o.defaultValue!=null?dt(a,!!o.multiple,o.defaultValue,!0):dt(a,!!o.multiple,o.multiple?[]:"",!1))}a[ur]=o}catch(y){Q(e,e.return,y)}}break;case 6:if(Pe(n,e),We(e),r&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(y){Q(e,e.return,y)}}break;case 3:if(Pe(n,e),We(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ar(n.containerInfo)}catch(y){Q(e,e.return,y)}break;case 4:Pe(n,e),We(e);break;case 13:Pe(n,e),We(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(cs=K())),r&4&&kl(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(ie=(u=ie)||c,Pe(n,e),ie=u):Pe(n,e),We(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(S=e,c=e.child;c!==null;){for(d=S=c;S!==null;){switch(g=S,A=g.child,g.tag){case 0:case 11:case 14:case 15:Yt(4,g,g.return);break;case 1:mt(g,g.return);var T=g.stateNode;if(typeof T.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,T.props=n.memoizedProps,T.state=n.memoizedState,T.componentWillUnmount()}catch(y){Q(r,t,y)}}break;case 5:mt(g,g.return);break;case 22:if(g.memoizedState!==null){Il(d);continue}}A!==null?(A.return=g,S=A):Il(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{a=d.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=wu("display",i))}catch(y){Q(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Q(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pe(n,e),We(e),r&4&&kl(e);break;case 21:break;default:Pe(n,e),We(e)}}function We(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Hm(t)){var r=t;break e}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(er(a,""),r.flags&=-33);var o=vl(e);wi(e,o,a);break;case 3:case 4:var i=r.stateNode.containerInfo,s=vl(e);pi(e,s,i);break;default:throw Error(C(161))}}catch(l){Q(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hc(e,n,t){S=e,Vm(e)}function Vm(e,n,t){for(var r=(e.mode&1)!==0;S!==null;){var a=S,o=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Hr;if(!i){var s=a.alternate,l=s!==null&&s.memoizedState!==null||ie;s=Hr;var u=ie;if(Hr=i,(ie=l)&&!u)for(S=a;S!==null;)i=S,l=i.child,i.tag===22&&i.memoizedState!==null?El(a):l!==null?(l.return=i,S=l):El(a);for(;o!==null;)S=o,Vm(o),o=o.sibling;S=a,Hr=s,ie=u}Sl(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,S=o):Sl(e)}}function Sl(e){for(;S!==null;){var n=S;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ie||Ga(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ie)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Oe(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ml(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ml(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ar(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ie||n.flags&512&&gi(n)}catch(g){Q(n,n.return,g)}}if(n===e){S=null;break}if(t=n.sibling,t!==null){t.return=n.return,S=t;break}S=n.return}}function Il(e){for(;S!==null;){var n=S;if(n===e){S=null;break}var t=n.sibling;if(t!==null){t.return=n.return,S=t;break}S=n.return}}function El(e){for(;S!==null;){var n=S;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ga(4,n)}catch(l){Q(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(l){Q(n,a,l)}}var o=n.return;try{gi(n)}catch(l){Q(n,o,l)}break;case 5:var i=n.return;try{gi(n)}catch(l){Q(n,i,l)}}}catch(l){Q(n,n.return,l)}if(n===e){S=null;break}var s=n.sibling;if(s!==null){s.return=n.return,S=s;break}S=n.return}}var jc=Math.ceil,ka=an.ReactCurrentDispatcher,hs=an.ReactCurrentOwner,Re=an.ReactCurrentBatchConfig,O=0,ee=null,z=null,te=0,Ne=0,ht=In(0),$=0,gr=null,jn=0,Wa=0,ds=0,Jt=null,fe=null,cs=0,vt=1/0,ze=null,Sa=!1,yi=null,Tn=null,jr=!1,cn=null,Ia=0,$t=0,Ai=null,ta=-1,ra=0;function he(){return O&6?K():ta!==-1?ta:ta=K()}function Nn(e){return e.mode&1?O&2&&te!==0?te&-te:Ic.transition!==null?(ra===0&&(ra=_u()),ra):(e=D,e!==0||(e=window.event,e=e===void 0?16:Fu(e.type)),e):1}function Be(e,n,t,r){if(50<$t)throw $t=0,Ai=null,Error(C(185));Tr(e,t,r),(!(O&2)||e!==ee)&&(e===ee&&(!(O&2)&&(Wa|=t),$===4&&mn(e,te)),Ae(e,r),t===1&&O===0&&!(n.mode&1)&&(vt=K()+500,qa&&En()))}function Ae(e,n){var t=e.callbackNode;Id(e,n);var r=ma(e,e===ee?te:0);if(r===0)t!==null&&Fs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Fs(t),n===1)e.tag===0?Sc(xl.bind(null,e)):tm(xl.bind(null,e)),bc(function(){!(O&6)&&En()}),t=null;else{switch(Ru(r)){case 1:t=Bi;break;case 4:t=Eu;break;case 16:t=ua;break;case 536870912:t=xu;break;default:t=ua}t=eh(t,Km.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Km(e,n){if(ta=-1,ra=0,O&6)throw Error(C(327));var t=e.callbackNode;if(wt()&&e.callbackNode!==t)return null;var r=ma(e,e===ee?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ea(e,r);else{n=r;var a=O;O|=2;var o=Ym();(ee!==e||te!==n)&&(ze=null,vt=K()+500,Bn(e,n));do try{Kc();break}catch(s){zm(e,s)}while(!0);Zi(),ka.current=o,O=a,z!==null?n=0:(ee=null,te=0,n=$)}if(n!==0){if(n===2&&(a=Vo(e),a!==0&&(r=a,n=Ti(e,a))),n===1)throw t=gr,Bn(e,0),mn(e,r),Ae(e,K()),t;if(n===6)mn(e,r);else{if(a=e.current.alternate,!(r&30)&&!Qc(a)&&(n=Ea(e,r),n===2&&(o=Vo(e),o!==0&&(r=o,n=Ti(e,o))),n===1))throw t=gr,Bn(e,0),mn(e,r),Ae(e,K()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(C(345));case 2:Mn(e,fe,ze);break;case 3:if(mn(e,r),(r&130023424)===r&&(n=cs+500-K(),10<n)){if(ma(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ei(Mn.bind(null,e,fe,ze),n);break}Mn(e,fe,ze);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var i=31-qe(r);o=1<<i,i=n[i],i>a&&(a=i),r&=~o}if(r=a,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jc(r/1960))-r,10<r){e.timeoutHandle=ei(Mn.bind(null,e,fe,ze),r);break}Mn(e,fe,ze);break;case 5:Mn(e,fe,ze);break;default:throw Error(C(329))}}}return Ae(e,K()),e.callbackNode===t?Km.bind(null,e):null}function Ti(e,n){var t=Jt;return e.current.memoizedState.isDehydrated&&(Bn(e,n).flags|=256),e=Ea(e,n),e!==2&&(n=fe,fe=t,n!==null&&Ni(n)),e}function Ni(e){fe===null?fe=e:fe.push.apply(fe,e)}function Qc(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],o=a.getSnapshot;a=a.value;try{if(!Ue(o(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mn(e,n){for(n&=~ds,n&=~Wa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-qe(n),r=1<<t;e[t]=-1,n&=~r}}function xl(e){if(O&6)throw Error(C(327));wt();var n=ma(e,0);if(!(n&1))return Ae(e,K()),null;var t=Ea(e,n);if(e.tag!==0&&t===2){var r=Vo(e);r!==0&&(n=r,t=Ti(e,r))}if(t===1)throw t=gr,Bn(e,0),mn(e,n),Ae(e,K()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Mn(e,fe,ze),Ae(e,K()),null}function fs(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(vt=K()+500,qa&&En())}}function Qn(e){cn!==null&&cn.tag===0&&!(O&6)&&wt();var n=O;O|=1;var t=Re.transition,r=D;try{if(Re.transition=null,D=1,e)return e()}finally{D=r,Re.transition=t,O=n,!(O&6)&&En()}}function gs(){Ne=ht.current,U(ht)}function Bn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Nc(t)),z!==null)for(t=z.return;t!==null;){var r=t;switch(Yi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ga();break;case 3:bt(),U(we),U(se),as();break;case 5:rs(r);break;case 4:bt();break;case 13:U(W);break;case 19:U(W);break;case 10:Xi(r.type._context);break;case 22:case 23:gs()}t=t.return}if(ee=e,z=e=bn(e.current,null),te=Ne=n,$=0,gr=null,ds=Wa=jn=0,fe=Jt=null,Dn!==null){for(n=0;n<Dn.length;n++)if(t=Dn[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=a,r.next=i}t.pending=r}Dn=null}return e}function zm(e,n){do{var t=z;try{if(Zi(),Xr.current=va,Ca){for(var r=H.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Ca=!1}if(Hn=0,X=J=H=null,zt=!1,dr=0,hs.current=null,t===null||t.return===null){$=1,gr=n,z=null;break}e:{var o=e,i=t.return,s=t,l=n;if(n=te,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var A=pl(i);if(A!==null){A.flags&=-257,wl(A,i,s,o,n),A.mode&1&&gl(o,u,n),n=A,l=u;var T=n.updateQueue;if(T===null){var y=new Set;y.add(l),n.updateQueue=y}else T.add(l);break e}else{if(!(n&1)){gl(o,u,n),ps();break e}l=Error(C(426))}}else if(G&&s.mode&1){var N=pl(i);if(N!==null){!(N.flags&65536)&&(N.flags|=256),wl(N,i,s,o,n),Ji(Ct(l,s));break e}}o=l=Ct(l,s),$!==4&&($=2),Jt===null?Jt=[o]:Jt.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=Rm(o,l,n);ul(o,f);break e;case 1:s=l;var m=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Tn===null||!Tn.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var b=Lm(o,s,n);ul(o,b);break e}}o=o.return}while(o!==null)}$m(t)}catch(v){n=v,z===t&&t!==null&&(z=t=t.return);continue}break}while(!0)}function Ym(){var e=ka.current;return ka.current=va,e===null?va:e}function ps(){($===0||$===3||$===2)&&($=4),ee===null||!(jn&268435455)&&!(Wa&268435455)||mn(ee,te)}function Ea(e,n){var t=O;O|=2;var r=Ym();(ee!==e||te!==n)&&(ze=null,Bn(e,n));do try{Vc();break}catch(a){zm(e,a)}while(!0);if(Zi(),O=t,ka.current=r,z!==null)throw Error(C(261));return ee=null,te=0,$}function Vc(){for(;z!==null;)Jm(z)}function Kc(){for(;z!==null&&!yd();)Jm(z)}function Jm(e){var n=Xm(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,n===null?$m(e):z=n,hs.current=null}function $m(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Uc(t,n),t!==null){t.flags&=32767,z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$=6,z=null;return}}else if(t=Bc(t,n,Ne),t!==null){z=t;return}if(n=n.sibling,n!==null){z=n;return}z=n=e}while(n!==null);$===0&&($=5)}function Mn(e,n,t){var r=D,a=Re.transition;try{Re.transition=null,D=1,zc(e,n,t,r)}finally{Re.transition=a,D=r}return null}function zc(e,n,t,r){do wt();while(cn!==null);if(O&6)throw Error(C(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Ed(e,o),e===ee&&(z=ee=null,te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||jr||(jr=!0,eh(ua,function(){return wt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var i=D;D=1;var s=O;O|=4,hs.current=null,Wc(e,t),Qm(t,e),fc(Zo),ha=!!$o,Zo=$o=null,e.current=t,Hc(t),Ad(),O=s,D=i,Re.transition=o}else e.current=t;if(jr&&(jr=!1,cn=e,Ia=a),o=e.pendingLanes,o===0&&(Tn=null),bd(t.stateNode),Ae(e,K()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Sa)throw Sa=!1,e=yi,yi=null,e;return Ia&1&&e.tag!==0&&wt(),o=e.pendingLanes,o&1?e===Ai?$t++:($t=0,Ai=e):$t=0,En(),null}function wt(){if(cn!==null){var e=Ru(Ia),n=Re.transition,t=D;try{if(Re.transition=null,D=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,Ia=0,O&6)throw Error(C(331));var a=O;for(O|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(S=u;S!==null;){var c=S;switch(c.tag){case 0:case 11:case 15:Yt(8,c,o)}var d=c.child;if(d!==null)d.return=c,S=d;else for(;S!==null;){c=S;var g=c.sibling,A=c.return;if(Wm(c),c===u){S=null;break}if(g!==null){g.return=A,S=g;break}S=A}}}var T=o.alternate;if(T!==null){var y=T.child;if(y!==null){T.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yt(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,S=f;break e}S=o.return}}var m=e.current;for(S=m;S!==null;){i=S;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,S=p;else e:for(i=m;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ga(9,s)}}catch(v){Q(s,s.return,v)}if(s===i){S=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,S=b;break e}S=s.return}}if(O=a,En(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Ma,e)}catch{}r=!0}return r}finally{D=t,Re.transition=n}}return!1}function _l(e,n,t){n=Ct(t,n),n=Rm(e,n,1),e=An(e,n,1),n=he(),e!==null&&(Tr(e,1,n),Ae(e,n))}function Q(e,n,t){if(e.tag===3)_l(e,e,t);else for(;n!==null;){if(n.tag===3){_l(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){e=Ct(t,e),e=Lm(n,e,1),n=An(n,e,1),e=he(),n!==null&&(Tr(n,1,e),Ae(n,e));break}}n=n.return}}function Yc(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,ee===e&&(te&t)===t&&($===4||$===3&&(te&130023424)===te&&500>K()-cs?Bn(e,0):ds|=t),Ae(e,n)}function Zm(e,n){n===0&&(e.mode&1?(n=Pr,Pr<<=1,!(Pr&130023424)&&(Pr=4194304)):n=1);var t=he();e=nn(e,n),e!==null&&(Tr(e,n,t),Ae(e,t))}function Jc(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Zm(e,t)}function $c(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(n),Zm(e,t)}var Xm;Xm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||we.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,qc(e,n,t);pe=!!(e.flags&131072)}else pe=!1,G&&n.flags&1048576&&rm(n,ya,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;na(e,n),e=n.pendingProps;var a=At(n,se.current);pt(n,t),a=is(null,n,r,e,a,t);var o=ss();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(r)?(o=!0,pa(n)):o=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ns(n),a.updater=Ua,n.stateNode=a,a._reactInternals=n,si(n,r,e,t),n=mi(null,n,r,!0,o,t)):(n.tag=0,G&&o&&zi(n),me(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(na(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=Xc(r),e=Oe(r,e),a){case 0:n=ui(null,n,r,e,t);break e;case 1:n=Tl(null,n,r,e,t);break e;case 11:n=yl(null,n,r,e,t);break e;case 14:n=Al(null,n,r,Oe(r.type,e),t);break e}throw Error(C(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Oe(r,a),ui(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Oe(r,a),Tl(e,n,r,a,t);case 3:e:{if(Dm(n),e===null)throw Error(C(387));r=n.pendingProps,o=n.memoizedState,a=o.element,um(e,n),Na(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){a=Ct(Error(C(423)),n),n=Nl(e,n,r,t,a);break e}else if(r!==a){a=Ct(Error(C(424)),n),n=Nl(e,n,r,t,a);break e}else for(be=yn(n.stateNode.containerInfo.firstChild),Ce=n,G=!0,Fe=null,t=sm(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Tt(),r===a){n=tn(e,n,t);break e}me(e,n,r,t)}n=n.child}return n;case 5:return mm(n),e===null&&ai(n),r=n.type,a=n.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,Xo(r,a)?i=null:o!==null&&Xo(r,o)&&(n.flags|=32),Om(e,n),me(e,n,i,t),n.child;case 6:return e===null&&ai(n),null;case 13:return Fm(e,n,t);case 4:return ts(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Nt(n,null,r,t):me(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Oe(r,a),yl(e,n,r,a,t);case 7:return me(e,n,n.pendingProps,t),n.child;case 8:return me(e,n,n.pendingProps.children,t),n.child;case 12:return me(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,o=n.memoizedProps,i=a.value,q(Aa,r._currentValue),r._currentValue=i,o!==null)if(Ue(o.value,i)){if(o.children===a.children&&!we.current){n=tn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ze(-1,t&-t),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),oi(o.return,t,n),s.lanes|=t;break}l=l.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(C(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),oi(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}me(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,pt(n,t),a=Le(a),r=r(a),n.flags|=1,me(e,n,r,t),n.child;case 14:return r=n.type,a=Oe(r,n.pendingProps),a=Oe(r.type,a),Al(e,n,r,a,t);case 15:return Mm(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Oe(r,a),na(e,n),n.tag=1,ye(r)?(e=!0,pa(n)):e=!1,pt(n,t),_m(n,r,a),si(n,r,a,t),mi(null,n,r,!0,e,t);case 19:return qm(e,n,t);case 22:return Pm(e,n,t)}throw Error(C(156,n.tag))};function eh(e,n){return Iu(e,n)}function Zc(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,n,t,r){return new Zc(e,n,t,r)}function ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xc(e){if(typeof e=="function")return ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Di)return 11;if(e===Fi)return 14}return 2}function bn(e,n){var t=e.alternate;return t===null?(t=_e(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function aa(e,n,t,r,a,o){var i=2;if(r=e,typeof e=="function")ws(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case nt:return Un(t.children,a,o,n);case Oi:i=8,a|=8;break;case Ro:return e=_e(12,t,n,a|2),e.elementType=Ro,e.lanes=o,e;case Lo:return e=_e(13,t,n,a),e.elementType=Lo,e.lanes=o,e;case Mo:return e=_e(19,t,n,a),e.elementType=Mo,e.lanes=o,e;case mu:return Ha(t,a,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lu:i=10;break e;case uu:i=9;break e;case Di:i=11;break e;case Fi:i=14;break e;case sn:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=_e(i,t,n,a),n.elementType=e,n.type=r,n.lanes=o,n}function Un(e,n,t,r){return e=_e(7,e,r,n),e.lanes=t,e}function Ha(e,n,t,r){return e=_e(22,e,r,n),e.elementType=mu,e.lanes=t,e.stateNode={isHidden:!1},e}function vo(e,n,t){return e=_e(6,e,null,n),e.lanes=t,e}function ko(e,n,t){return n=_e(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ef(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ao(0),this.expirationTimes=ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ys(e,n,t,r,a,o,i,s,l){return e=new ef(e,n,t,s,l),n===1?(n=1,o===!0&&(n|=8)):n=0,o=_e(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ns(o),e}function nf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:et,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function nh(e){if(!e)return kn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(ye(t))return nm(e,t,n)}return n}function th(e,n,t,r,a,o,i,s,l){return e=ys(t,r,!0,e,a,o,i,s,l),e.context=nh(null),t=e.current,r=he(),a=Nn(t),o=Ze(r,a),o.callback=n??null,An(t,o,a),e.current.lanes=a,Tr(e,a,r),Ae(e,r),e}function ja(e,n,t,r){var a=n.current,o=he(),i=Nn(a);return t=nh(t),n.context===null?n.context=t:n.pendingContext=t,n=Ze(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=An(a,n,i),e!==null&&(Be(e,a,i,o),Zr(e,a,i)),i}function xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function As(e,n){Rl(e,n),(e=e.alternate)&&Rl(e,n)}function tf(){return null}var rh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ts(e){this._internalRoot=e}Qa.prototype.render=Ts.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));ja(e,n,null,null)};Qa.prototype.unmount=Ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Qn(function(){ja(null,e,null,null)}),n[en]=null}};function Qa(e){this._internalRoot=e}Qa.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<un.length&&n!==0&&n<un[t].priority;t++);un.splice(t,0,e),t===0&&Du(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ll(){}function rf(e,n,t,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var u=xa(i);o.call(u)}}var i=th(n,r,e,0,null,!1,!1,"",Ll);return e._reactRootContainer=i,e[en]=i.current,sr(e.nodeType===8?e.parentNode:e),Qn(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var u=xa(l);s.call(u)}}var l=ys(e,0,!1,null,null,!1,!1,"",Ll);return e._reactRootContainer=l,e[en]=l.current,sr(e.nodeType===8?e.parentNode:e),Qn(function(){ja(n,l,t,r)}),l}function Ka(e,n,t,r,a){var o=t._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var s=a;a=function(){var l=xa(i);s.call(l)}}ja(n,i,e,a)}else i=rf(t,n,e,a,r);return xa(i)}Lu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Gt(n.pendingLanes);t!==0&&(Ui(n,t|1),Ae(n,K()),!(O&6)&&(vt=K()+500,En()))}break;case 13:Qn(function(){var r=nn(e,1);if(r!==null){var a=he();Be(r,e,1,a)}}),As(e,1)}};Gi=function(e){if(e.tag===13){var n=nn(e,134217728);if(n!==null){var t=he();Be(n,e,134217728,t)}As(e,134217728)}};Mu=function(e){if(e.tag===13){var n=Nn(e),t=nn(e,n);if(t!==null){var r=he();Be(t,e,n,r)}As(e,n)}};Pu=function(){return D};Ou=function(e,n){var t=D;try{return D=e,n()}finally{D=t}};Ho=function(e,n,t){switch(n){case"input":if(Do(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=Fa(r);if(!a)throw Error(C(90));du(r),Do(r,a)}}}break;case"textarea":fu(e,t);break;case"select":n=t.value,n!=null&&dt(e,!!t.multiple,n,!1)}};Nu=fs;bu=Qn;var af={usingClientEntryPoint:!1,Events:[br,ot,Fa,Au,Tu,fs]},qt={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},of={bundleType:qt.bundleType,version:qt.version,rendererPackageName:qt.rendererPackageName,rendererConfig:qt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ku(e),e===null?null:e.stateNode},findFiberByHostInstance:qt.findFiberByHostInstance||tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Ma=Qr.inject(of),Qe=Qr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;ke.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(n))throw Error(C(200));return nf(e,n,null,t)};ke.createRoot=function(e,n){if(!Ns(e))throw Error(C(299));var t=!1,r="",a=rh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=ys(e,1,!1,null,null,t,!1,r,a),e[en]=n.current,sr(e.nodeType===8?e.parentNode:e),new Ts(n)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=ku(n),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Qn(e)};ke.hydrate=function(e,n,t){if(!Va(n))throw Error(C(200));return Ka(null,e,n,!0,t)};ke.hydrateRoot=function(e,n,t){if(!Ns(e))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,a=!1,o="",i=rh;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=th(n,null,e,1,t??null,a,!1,o,i),e[en]=n.current,sr(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Qa(n)};ke.render=function(e,n,t){if(!Va(n))throw Error(C(200));return Ka(null,e,n,!1,t)};ke.unmountComponentAtNode=function(e){if(!Va(e))throw Error(C(40));return e._reactRootContainer?(Qn(function(){Ka(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};ke.unstable_batchedUpdates=fs;ke.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Va(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ka(e,n,t,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function ah(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ah)}catch(e){console.error(e)}}ah(),au.exports=ke;var sf=au.exports,Ml=sf;xo.createRoot=Ml.createRoot,xo.hydrateRoot=Ml.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pr(){return pr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pr.apply(this,arguments)}var fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(fn||(fn={}));const Pl="popstate";function lf(e){e===void 0&&(e={});function n(r,a){let{pathname:o,search:i,hash:s}=r.location;return bi("",{pathname:o,search:i,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:_a(a)}return mf(n,t,null,e)}function Y(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function oh(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function uf(){return Math.random().toString(36).substr(2,8)}function Ol(e,n){return{usr:e.state,key:e.key,idx:n}}function bi(e,n,t,r){return t===void 0&&(t=null),pr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?xt(n):n,{state:t,key:n&&n.key||r||uf()})}function _a(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function xt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function mf(e,n,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,i=a.history,s=fn.Pop,l=null,u=c();u==null&&(u=0,i.replaceState(pr({},i.state,{idx:u}),""));function c(){return(i.state||{idx:null}).idx}function d(){s=fn.Pop;let N=c(),f=N==null?null:N-u;u=N,l&&l({action:s,location:y.location,delta:f})}function g(N,f){s=fn.Push;let m=bi(y.location,N,f);u=c()+1;let p=Ol(m,u),b=y.createHref(m);try{i.pushState(p,"",b)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;a.location.assign(b)}o&&l&&l({action:s,location:y.location,delta:1})}function A(N,f){s=fn.Replace;let m=bi(y.location,N,f);u=c();let p=Ol(m,u),b=y.createHref(m);i.replaceState(p,"",b),o&&l&&l({action:s,location:y.location,delta:0})}function T(N){let f=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof N=="string"?N:_a(N);return m=m.replace(/ $/,"%20"),Y(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let y={get action(){return s},get location(){return e(a,i)},listen(N){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Pl,d),l=N,()=>{a.removeEventListener(Pl,d),l=null}},createHref(N){return n(a,N)},createURL:T,encodeLocation(N){let f=T(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:A,go(N){return i.go(N)}};return y}var Dl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dl||(Dl={}));function hf(e,n,t){return t===void 0&&(t="/"),df(e,n,t)}function df(e,n,t,r){let a=typeof n=="string"?xt(n):n,o=bs(a.pathname||"/",t);if(o==null)return null;let i=ih(e);cf(i);let s=null;for(let l=0;s==null&&l<i.length;++l){let u=kf(o);s=bf(i[l],u)}return s}function ih(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(o,i,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Cn([r,l.relativePath]),c=t.concat(l);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ih(o.children,n,c,u)),!(o.path==null&&!o.index)&&n.push({path:u,score:Tf(u,o.index),routesMeta:c})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))a(o,i);else for(let l of sh(o.path))a(o,i,l)}),n}function sh(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let i=sh(r.join("/")),s=[];return s.push(...i.map(l=>l===""?o:[o,l].join("/"))),a&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function cf(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Nf(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const ff=/^:[\w-]+$/,gf=3,pf=2,wf=1,yf=10,Af=-2,Fl=e=>e==="*";function Tf(e,n){let t=e.split("/"),r=t.length;return t.some(Fl)&&(r+=Af),n&&(r+=pf),t.filter(a=>!Fl(a)).reduce((a,o)=>a+(ff.test(o)?gf:o===""?wf:yf),r)}function Nf(e,n){return e.length===n.length&&e.slice(0,-1).every((r,a)=>r===n[a])?e[e.length-1]-n[n.length-1]:0}function bf(e,n,t){let{routesMeta:r}=e,a={},o="/",i=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,c=o==="/"?n:n.slice(o.length)||"/",d=Cf({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),g=l.route;if(!d)return null;Object.assign(a,d.params),i.push({params:a,pathname:Cn([o,d.pathname]),pathnameBase:xf(Cn([o,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(o=Cn([o,d.pathnameBase]))}return i}function Cf(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=vf(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:g,isOptional:A}=c;if(g==="*"){let y=s[d]||"";i=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const T=s[d];return A&&!T?u[g]=void 0:u[g]=(T||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function vf(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),oh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),r]}function kf(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return oh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function bs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Sf(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:a=""}=typeof e=="string"?xt(e):e;return{pathname:t?t.startsWith("/")?t:If(t,n):n,search:_f(r),hash:Rf(a)}}function If(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function So(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ef(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function lh(e,n){let t=Ef(e);return n?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function uh(e,n,t,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=xt(e):(a=pr({},e),Y(!a.pathname||!a.pathname.includes("?"),So("?","pathname","search",a)),Y(!a.pathname||!a.pathname.includes("#"),So("#","pathname","hash",a)),Y(!a.search||!a.search.includes("#"),So("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,s;if(i==null)s=t;else{let d=n.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),d-=1;a.pathname=g.join("/")}s=d>=0?n[d]:"/"}let l=Sf(a,s),u=i&&i!=="/"&&i.endsWith("/"),c=(o||i===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),xf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_f=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Rf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Lf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const mh=["post","put","patch","delete"];new Set(mh);const Mf=["get",...mh];new Set(Mf);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr(){return wr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wr.apply(this,arguments)}const Cs=w.createContext(null),Pf=w.createContext(null),zn=w.createContext(null),za=w.createContext(null),Yn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),hh=w.createContext(null);function Of(e,n){let{relative:t}=n===void 0?{}:n;vr()||Y(!1);let{basename:r,navigator:a}=w.useContext(zn),{hash:o,pathname:i,search:s}=ch(e,{relative:t}),l=i;return r!=="/"&&(l=i==="/"?r:Cn([r,i])),a.createHref({pathname:l,search:s,hash:o})}function vr(){return w.useContext(za)!=null}function kr(){return vr()||Y(!1),w.useContext(za).location}function dh(e){w.useContext(zn).static||w.useLayoutEffect(e)}function Ya(){let{isDataRoute:e}=w.useContext(Yn);return e?zf():Df()}function Df(){vr()||Y(!1);let e=w.useContext(Cs),{basename:n,future:t,navigator:r}=w.useContext(zn),{matches:a}=w.useContext(Yn),{pathname:o}=kr(),i=JSON.stringify(lh(a,t.v7_relativeSplatPath)),s=w.useRef(!1);return dh(()=>{s.current=!0}),w.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=uh(u,JSON.parse(i),o,c.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Cn([n,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[n,r,i,o,e])}function ch(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=w.useContext(zn),{matches:a}=w.useContext(Yn),{pathname:o}=kr(),i=JSON.stringify(lh(a,r.v7_relativeSplatPath));return w.useMemo(()=>uh(e,JSON.parse(i),o,t==="path"),[e,i,o,t])}function Ff(e,n){return qf(e,n)}function qf(e,n,t,r){vr()||Y(!1);let{navigator:a}=w.useContext(zn),{matches:o}=w.useContext(Yn),i=o[o.length-1],s=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let u=kr(),c;if(n){var d;let N=typeof n=="string"?xt(n):n;l==="/"||(d=N.pathname)!=null&&d.startsWith(l)||Y(!1),c=N}else c=u;let g=c.pathname||"/",A=g;if(l!=="/"){let N=l.replace(/^\//,"").split("/");A="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let T=hf(e,{pathname:A}),y=Hf(T&&T.map(N=>Object.assign({},N,{params:Object.assign({},s,N.params),pathname:Cn([l,a.encodeLocation?a.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?l:Cn([l,a.encodeLocation?a.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,t,r);return n&&y?w.createElement(za.Provider,{value:{location:wr({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:fn.Pop}},y):y}function Bf(){let e=Kf(),n=Lf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},n),t?w.createElement("pre",{style:a},t):null,null)}const Uf=w.createElement(Bf,null);class Gf extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?w.createElement(Yn.Provider,{value:this.props.routeContext},w.createElement(hh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wf(e){let{routeContext:n,match:t,children:r}=e,a=w.useContext(Cs);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Yn.Provider,{value:n},r)}function Hf(e,n,t,r){var a;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,s=(a=t)==null?void 0:a.errors;if(s!=null){let c=i.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);c>=0||Y(!1),i=i.slice(0,Math.min(i.length,c+1))}let l=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let c=0;c<i.length;c++){let d=i[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:g,errors:A}=t,T=d.route.loader&&g[d.route.id]===void 0&&(!A||A[d.route.id]===void 0);if(d.route.lazy||T){l=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((c,d,g)=>{let A,T=!1,y=null,N=null;t&&(A=s&&d.route.id?s[d.route.id]:void 0,y=d.route.errorElement||Uf,l&&(u<0&&g===0?(Yf("route-fallback"),T=!0,N=null):u===g&&(T=!0,N=d.route.hydrateFallbackElement||null)));let f=n.concat(i.slice(0,g+1)),m=()=>{let p;return A?p=y:T?p=N:d.route.Component?p=w.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=c,w.createElement(Wf,{match:d,routeContext:{outlet:c,matches:f,isDataRoute:t!=null},children:p})};return t&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?w.createElement(Gf,{location:t.location,revalidation:t.revalidation,component:y,error:A,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var fh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fh||{}),gh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gh||{});function jf(e){let n=w.useContext(Cs);return n||Y(!1),n}function Qf(e){let n=w.useContext(Pf);return n||Y(!1),n}function Vf(e){let n=w.useContext(Yn);return n||Y(!1),n}function ph(e){let n=Vf(),t=n.matches[n.matches.length-1];return t.route.id||Y(!1),t.route.id}function Kf(){var e;let n=w.useContext(hh),t=Qf(),r=ph();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function zf(){let{router:e}=jf(fh.UseNavigateStable),n=ph(gh.UseNavigateStable),t=w.useRef(!1);return dh(()=>{t.current=!0}),w.useCallback(function(a,o){o===void 0&&(o={}),t.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,wr({fromRouteId:n},o)))},[e,n])}const ql={};function Yf(e,n,t){ql[e]||(ql[e]=!0)}function Jf(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pn(e){Y(!1)}function $f(e){let{basename:n="/",children:t=null,location:r,navigationType:a=fn.Pop,navigator:o,static:i=!1,future:s}=e;vr()&&Y(!1);let l=n.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:o,static:i,future:wr({v7_relativeSplatPath:!1},s)}),[l,s,o,i]);typeof r=="string"&&(r=xt(r));let{pathname:c="/",search:d="",hash:g="",state:A=null,key:T="default"}=r,y=w.useMemo(()=>{let N=bs(c,l);return N==null?null:{location:{pathname:N,search:d,hash:g,state:A,key:T},navigationType:a}},[l,c,d,g,A,T,a]);return y==null?null:w.createElement(zn.Provider,{value:u},w.createElement(za.Provider,{children:t,value:y}))}function Zf(e){let{children:n,location:t}=e;return Ff(Ci(n),t)}new Promise(()=>{});function Ci(e,n){n===void 0&&(n=[]);let t=[];return w.Children.forEach(e,(r,a)=>{if(!w.isValidElement(r))return;let o=[...n,a];if(r.type===w.Fragment){t.push.apply(t,Ci(r.props.children,o));return}r.type!==Pn&&Y(!1),!r.props.index||!r.props.children||Y(!1);let i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Ci(r.props.children,o)),t.push(i)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vi(){return vi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},vi.apply(this,arguments)}function Xf(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function eg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ng(e,n){return e.button===0&&(!n||n==="_self")&&!eg(e)}const tg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rg="6";try{window.__reactRouterVersion=rg}catch{}const ag="startTransition",Bl=Yh[ag];function og(e){let{basename:n,children:t,future:r,window:a}=e,o=w.useRef();o.current==null&&(o.current=lf({window:a,v5Compat:!0}));let i=o.current,[s,l]=w.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},c=w.useCallback(d=>{u&&Bl?Bl(()=>l(d)):l(d)},[l,u]);return w.useLayoutEffect(()=>i.listen(c),[i,c]),w.useEffect(()=>Jf(r),[r]),w.createElement($f,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:i,future:r})}const ig=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xn=w.forwardRef(function(n,t){let{onClick:r,relative:a,reloadDocument:o,replace:i,state:s,target:l,to:u,preventScrollReset:c,viewTransition:d}=n,g=Xf(n,tg),{basename:A}=w.useContext(zn),T,y=!1;if(typeof u=="string"&&sg.test(u)&&(T=u,ig))try{let p=new URL(window.location.href),b=u.startsWith("//")?new URL(p.protocol+u):new URL(u),v=bs(b.pathname,A);b.origin===p.origin&&v!=null?u=v+b.search+b.hash:y=!0}catch{}let N=Of(u,{relative:a}),f=lg(u,{replace:i,state:s,target:l,preventScrollReset:c,relative:a,viewTransition:d});function m(p){r&&r(p),p.defaultPrevented||f(p)}return w.createElement("a",vi({},g,{href:T||N,onClick:y||o?r:m,ref:t,target:l}))});var Ul;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ul||(Ul={}));var Gl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gl||(Gl={}));function lg(e,n){let{target:t,replace:r,state:a,preventScrollReset:o,relative:i,viewTransition:s}=n===void 0?{}:n,l=Ya(),u=kr(),c=ch(e,{relative:i});return w.useCallback(d=>{if(ng(d,t)){d.preventDefault();let g=r!==void 0?r:_a(u)===_a(c);l(e,{replace:g,state:a,preventScrollReset:o,relative:i,viewTransition:s})}},[u,l,c,r,a,t,e,o,i,s])}let ug={data:""},mg=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ug,hg=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,dg=/\/\*[^]*?\*\/|  +/g,Wl=/\n+/g,hn=(e,n)=>{let t="",r="",a="";for(let o in e){let i=e[o];o[0]=="@"?o[1]=="i"?t=o+" "+i+";":r+=o[1]=="f"?hn(i,o):o+"{"+hn(i,o[1]=="k"?"":n)+"}":typeof i=="object"?r+=hn(i,n?n.replace(/([^,])+/g,s=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):o):i!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=hn.p?hn.p(o,i):o+":"+i+";")}return t+(n&&a?n+"{"+a+"}":a)+r},Ke={},wh=e=>{if(typeof e=="object"){let n="";for(let t in e)n+=t+wh(e[t]);return n}return e},cg=(e,n,t,r,a)=>{let o=wh(e),i=Ke[o]||(Ke[o]=(l=>{let u=0,c=11;for(;u<l.length;)c=101*c+l.charCodeAt(u++)>>>0;return"go"+c})(o));if(!Ke[i]){let l=o!==e?e:(u=>{let c,d,g=[{}];for(;c=hg.exec(u.replace(dg,""));)c[4]?g.shift():c[3]?(d=c[3].replace(Wl," ").trim(),g.unshift(g[0][d]=g[0][d]||{})):g[0][c[1]]=c[2].replace(Wl," ").trim();return g[0]})(e);Ke[i]=hn(a?{["@keyframes "+i]:l}:l,t?"":"."+i)}let s=t&&Ke.g?Ke.g:null;return t&&(Ke.g=Ke[i]),((l,u,c,d)=>{d?u.data=u.data.replace(d,l):u.data.indexOf(l)===-1&&(u.data=c?l+u.data:u.data+l)})(Ke[i],n,r,s),i},fg=(e,n,t)=>e.reduce((r,a,o)=>{let i=n[o];if(i&&i.call){let s=i(t),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;i=l?"."+l:s&&typeof s=="object"?s.props?"":hn(s,""):s===!1?"":s}return r+a+(i??"")},"");function Ja(e){let n=this||{},t=e.call?e(n.p):e;return cg(t.unshift?t.raw?fg(t,[].slice.call(arguments,1),n.p):t.reduce((r,a)=>Object.assign(r,a&&a.call?a(n.p):a),{}):t,mg(n.target),n.g,n.o,n.k)}let yh,ki,Si;Ja.bind({g:1});let rn=Ja.bind({k:1});function gg(e,n,t,r){hn.p=n,yh=e,ki=t,Si=r}function xn(e,n){let t=this||{};return function(){let r=arguments;function a(o,i){let s=Object.assign({},o),l=s.className||a.className;t.p=Object.assign({theme:ki&&ki()},s),t.o=/ *go\d+/.test(l),s.className=Ja.apply(t,r)+(l?" "+l:"");let u=e;return e[0]&&(u=s.as||e,delete s.as),Si&&u[0]&&Si(s),yh(u,s)}return a}}var pg=e=>typeof e=="function",Ra=(e,n)=>pg(e)?e(n):e,wg=(()=>{let e=0;return()=>(++e).toString()})(),Ah=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let n=matchMedia("(prefers-reduced-motion: reduce)");e=!n||n.matches}return e}})(),yg=20,Th=(e,n)=>{switch(n.type){case 0:return{...e,toasts:[n.toast,...e.toasts].slice(0,yg)};case 1:return{...e,toasts:e.toasts.map(o=>o.id===n.toast.id?{...o,...n.toast}:o)};case 2:let{toast:t}=n;return Th(e,{type:e.toasts.find(o=>o.id===t.id)?1:0,toast:t});case 3:let{toastId:r}=n;return{...e,toasts:e.toasts.map(o=>o.id===r||r===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return n.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==n.toastId)};case 5:return{...e,pausedAt:n.time};case 6:let a=n.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+a}))}}},oa=[],qn={toasts:[],pausedAt:void 0},Jn=e=>{qn=Th(qn,e),oa.forEach(n=>{n(qn)})},Ag={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Tg=(e={})=>{let[n,t]=w.useState(qn),r=w.useRef(qn);w.useEffect(()=>(r.current!==qn&&t(qn),oa.push(t),()=>{let o=oa.indexOf(t);o>-1&&oa.splice(o,1)}),[]);let a=n.toasts.map(o=>{var i,s,l;return{...e,...e[o.type],...o,removeDelay:o.removeDelay||((i=e[o.type])==null?void 0:i.removeDelay)||(e==null?void 0:e.removeDelay),duration:o.duration||((s=e[o.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||Ag[o.type],style:{...e.style,...(l=e[o.type])==null?void 0:l.style,...o.style}}});return{...n,toasts:a}},Ng=(e,n="blank",t)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:n,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...t,id:(t==null?void 0:t.id)||wg()}),Sr=e=>(n,t)=>{let r=Ng(n,e,t);return Jn({type:2,toast:r}),r.id},ge=(e,n)=>Sr("blank")(e,n);ge.error=Sr("error");ge.success=Sr("success");ge.loading=Sr("loading");ge.custom=Sr("custom");ge.dismiss=e=>{Jn({type:3,toastId:e})};ge.remove=e=>Jn({type:4,toastId:e});ge.promise=(e,n,t)=>{let r=ge.loading(n.loading,{...t,...t==null?void 0:t.loading});return typeof e=="function"&&(e=e()),e.then(a=>{let o=n.success?Ra(n.success,a):void 0;return o?ge.success(o,{id:r,...t,...t==null?void 0:t.success}):ge.dismiss(r),a}).catch(a=>{let o=n.error?Ra(n.error,a):void 0;o?ge.error(o,{id:r,...t,...t==null?void 0:t.error}):ge.dismiss(r)}),e};var bg=(e,n)=>{Jn({type:1,toast:{id:e,height:n}})},Cg=()=>{Jn({type:5,time:Date.now()})},Zt=new Map,vg=1e3,kg=(e,n=vg)=>{if(Zt.has(e))return;let t=setTimeout(()=>{Zt.delete(e),Jn({type:4,toastId:e})},n);Zt.set(e,t)},Sg=e=>{let{toasts:n,pausedAt:t}=Tg(e);w.useEffect(()=>{if(t)return;let o=Date.now(),i=n.map(s=>{if(s.duration===1/0)return;let l=(s.duration||0)+s.pauseDuration-(o-s.createdAt);if(l<0){s.visible&&ge.dismiss(s.id);return}return setTimeout(()=>ge.dismiss(s.id),l)});return()=>{i.forEach(s=>s&&clearTimeout(s))}},[n,t]);let r=w.useCallback(()=>{t&&Jn({type:6,time:Date.now()})},[t]),a=w.useCallback((o,i)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:u}=i||{},c=n.filter(A=>(A.position||u)===(o.position||u)&&A.height),d=c.findIndex(A=>A.id===o.id),g=c.filter((A,T)=>T<d&&A.visible).length;return c.filter(A=>A.visible).slice(...s?[g+1]:[0,g]).reduce((A,T)=>A+(T.height||0)+l,0)},[n]);return w.useEffect(()=>{n.forEach(o=>{if(o.dismissed)kg(o.id,o.removeDelay);else{let i=Zt.get(o.id);i&&(clearTimeout(i),Zt.delete(o.id))}})},[n]),{toasts:n,handlers:{updateHeight:bg,startPause:Cg,endPause:r,calculateOffset:a}}},Ig=rn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Eg=rn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xg=rn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_g=xn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ig} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Eg} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${xg} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Rg=rn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Lg=xn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Rg} 1s linear infinite;
`,Mg=rn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Pg=rn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Og=xn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Mg} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Pg} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Dg=xn("div")`
  position: absolute;
`,Fg=xn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,qg=rn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Bg=xn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${qg} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ug=({toast:e})=>{let{icon:n,type:t,iconTheme:r}=e;return n!==void 0?typeof n=="string"?w.createElement(Bg,null,n):n:t==="blank"?null:w.createElement(Fg,null,w.createElement(Lg,{...r}),t!=="loading"&&w.createElement(Dg,null,t==="error"?w.createElement(_g,{...r}):w.createElement(Og,{...r})))},Gg=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Wg=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Hg="0%{opacity:0;} 100%{opacity:1;}",jg="0%{opacity:1;} 100%{opacity:0;}",Qg=xn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Vg=xn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Kg=(e,n)=>{let t=e.includes("top")?1:-1,[r,a]=Ah()?[Hg,jg]:[Gg(t),Wg(t)];return{animation:n?`${rn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${rn(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},zg=w.memo(({toast:e,position:n,style:t,children:r})=>{let a=e.height?Kg(e.position||n||"top-center",e.visible):{opacity:0},o=w.createElement(Ug,{toast:e}),i=w.createElement(Vg,{...e.ariaProps},Ra(e.message,e));return w.createElement(Qg,{className:e.className,style:{...a,...t,...e.style}},typeof r=="function"?r({icon:o,message:i}):w.createElement(w.Fragment,null,o,i))});gg(w.createElement);var Yg=({id:e,className:n,style:t,onHeightUpdate:r,children:a})=>{let o=w.useCallback(i=>{if(i){let s=()=>{let l=i.getBoundingClientRect().height;r(e,l)};s(),new MutationObserver(s).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return w.createElement("div",{ref:o,className:n,style:t},a)},Jg=(e,n)=>{let t=e.includes("top"),r=t?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ah()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${n*(t?1:-1)}px)`,...r,...a}},$g=Ja`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Vr=16,Zg=({reverseOrder:e,position:n="top-center",toastOptions:t,gutter:r,children:a,containerStyle:o,containerClassName:i})=>{let{toasts:s,handlers:l}=Sg(t);return w.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:Vr,left:Vr,right:Vr,bottom:Vr,pointerEvents:"none",...o},className:i,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map(u=>{let c=u.position||n,d=l.calculateOffset(u,{reverseOrder:e,gutter:r,defaultPosition:n}),g=Jg(c,d);return w.createElement(Yg,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?$g:"",style:g},u.type==="custom"?Ra(u.message,u):a?a(u):w.createElement(zg,{toast:u,position:c}))}))};function Xg({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"}))}const ep=w.forwardRef(Xg);function np({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))}const tp=w.forwardRef(np);function rp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"}))}const ap=w.forwardRef(rp);function op({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const ip=w.forwardRef(op);function sp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"}))}const lp=w.forwardRef(sp);function up({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"}))}const Nh=w.forwardRef(up);function mp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}const hp=w.forwardRef(mp);function dp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"}))}const bh=w.forwardRef(dp);function cp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))}const Ch=w.forwardRef(cp);function fp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}const vh=w.forwardRef(fp);function gp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"}))}const pp=w.forwardRef(gp);function wp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"}))}const yp=w.forwardRef(wp);function Ap({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"}))}const Tp=w.forwardRef(Ap);function Np({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const bp=w.forwardRef(Np);function Cp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"}))}const Io=w.forwardRef(Cp);function vp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"}))}const kp=w.forwardRef(vp);function Sp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 5.25v13.5m-7.5-13.5v13.5"}))}const Ip=w.forwardRef(Sp);function Ep({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"}))}const xp=w.forwardRef(Ep);function _p({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}const Rp=w.forwardRef(_p);function Lp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const Mp=w.forwardRef(Lp);function Pp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}const Op=w.forwardRef(Pp);function Dp({title:e,titleId:n,...t},r){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},t),e?w.createElement("title",{id:n},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const Fp=w.forwardRef(Dp),qp={},Hl=e=>{let n;const t=new Set,r=(c,d)=>{const g=typeof c=="function"?c(n):c;if(!Object.is(g,n)){const A=n;n=d??(typeof g!="object"||g===null)?g:Object.assign({},n,g),t.forEach(T=>T(n,A))}},a=()=>n,l={setState:r,getState:a,getInitialState:()=>u,subscribe:c=>(t.add(c),()=>t.delete(c)),destroy:()=>{(qp?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},u=n=e(r,a,l);return l},Bp=e=>e?Hl(e):Hl;var kh={exports:{}},Sh={},Ih={exports:{}},Eh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kt=w;function Up(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Gp=typeof Object.is=="function"?Object.is:Up,Wp=kt.useState,Hp=kt.useEffect,jp=kt.useLayoutEffect,Qp=kt.useDebugValue;function Vp(e,n){var t=n(),r=Wp({inst:{value:t,getSnapshot:n}}),a=r[0].inst,o=r[1];return jp(function(){a.value=t,a.getSnapshot=n,Eo(a)&&o({inst:a})},[e,t,n]),Hp(function(){return Eo(a)&&o({inst:a}),e(function(){Eo(a)&&o({inst:a})})},[e]),Qp(t),t}function Eo(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Gp(e,t)}catch{return!0}}function Kp(e,n){return n()}var zp=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Kp:Vp;Eh.useSyncExternalStore=kt.useSyncExternalStore!==void 0?kt.useSyncExternalStore:zp;Ih.exports=Eh;var Yp=Ih.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=w,Jp=Yp;function $p(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zp=typeof Object.is=="function"?Object.is:$p,Xp=Jp.useSyncExternalStore,e0=$a.useRef,n0=$a.useEffect,t0=$a.useMemo,r0=$a.useDebugValue;Sh.useSyncExternalStoreWithSelector=function(e,n,t,r,a){var o=e0(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=t0(function(){function l(A){if(!u){if(u=!0,c=A,A=r(A),a!==void 0&&i.hasValue){var T=i.value;if(a(T,A))return d=T}return d=A}if(T=d,Zp(c,A))return T;var y=r(A);return a!==void 0&&a(T,y)?(c=A,T):(c=A,d=y)}var u=!1,c,d,g=t===void 0?null:t;return[function(){return l(n())},g===null?void 0:function(){return l(g())}]},[n,t,r,a]);var s=Xp(e,o[0],o[1]);return n0(function(){i.hasValue=!0,i.value=s},[s]),r0(s),s};kh.exports=Sh;var a0=kh.exports;const o0=Vl(a0),xh={},{useDebugValue:i0}=Ri,{useSyncExternalStoreWithSelector:s0}=o0;let jl=!1;const l0=e=>e;function u0(e,n=l0,t){(xh?"production":void 0)!=="production"&&t&&!jl&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),jl=!0);const r=s0(e.subscribe,e.getState,e.getServerState||e.getInitialState,n,t);return i0(r),r}const Ql=e=>{(xh?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const n=typeof e=="function"?Bp(e):e,t=(r,a)=>u0(n,r,a);return Object.assign(t,n),t},vs=e=>e?Ql(e):Ql,m0={};function h0(e,n){let t;try{t=e()}catch{return}return{getItem:a=>{var o;const i=l=>l===null?null:JSON.parse(l,void 0),s=(o=t.getItem(a))!=null?o:null;return s instanceof Promise?s.then(i):i(s)},setItem:(a,o)=>t.setItem(a,JSON.stringify(o,void 0)),removeItem:a=>t.removeItem(a)}}const yr=e=>n=>{try{const t=e(n);return t instanceof Promise?t:{then(r){return yr(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return yr(r)(t)}}}},d0=(e,n)=>(t,r,a)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:N=>N,version:0,merge:(N,f)=>({...f,...N}),...n},i=!1;const s=new Set,l=new Set;let u;try{u=o.getStorage()}catch{}if(!u)return e((...N)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),t(...N)},r,a);const c=yr(o.serialize),d=()=>{const N=o.partialize({...r()});let f;const m=c({state:N,version:o.version}).then(p=>u.setItem(o.name,p)).catch(p=>{f=p});if(f)throw f;return m},g=a.setState;a.setState=(N,f)=>{g(N,f),d()};const A=e((...N)=>{t(...N),d()},r,a);let T;const y=()=>{var N;if(!u)return;i=!1,s.forEach(m=>m(r()));const f=((N=o.onRehydrateStorage)==null?void 0:N.call(o,r()))||void 0;return yr(u.getItem.bind(u))(o.name).then(m=>{if(m)return o.deserialize(m)}).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==o.version){if(o.migrate)return o.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var p;return T=o.merge(m,(p=r())!=null?p:A),t(T,!0),d()}).then(()=>{f==null||f(T,void 0),i=!0,l.forEach(m=>m(T))}).catch(m=>{f==null||f(void 0,m)})};return a.persist={setOptions:N=>{o={...o,...N},N.getStorage&&(u=N.getStorage())},clearStorage:()=>{u==null||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>y(),hasHydrated:()=>i,onHydrate:N=>(s.add(N),()=>{s.delete(N)}),onFinishHydration:N=>(l.add(N),()=>{l.delete(N)})},y(),T||A},c0=(e,n)=>(t,r,a)=>{let o={storage:h0(()=>localStorage),partialize:y=>y,version:0,merge:(y,N)=>({...N,...y}),...n},i=!1;const s=new Set,l=new Set;let u=o.storage;if(!u)return e((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),t(...y)},r,a);const c=()=>{const y=o.partialize({...r()});return u.setItem(o.name,{state:y,version:o.version})},d=a.setState;a.setState=(y,N)=>{d(y,N),c()};const g=e((...y)=>{t(...y),c()},r,a);a.getInitialState=()=>g;let A;const T=()=>{var y,N;if(!u)return;i=!1,s.forEach(m=>{var p;return m((p=r())!=null?p:g)});const f=((N=o.onRehydrateStorage)==null?void 0:N.call(o,(y=r())!=null?y:g))||void 0;return yr(u.getItem.bind(u))(o.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==o.version){if(o.migrate)return[!0,o.migrate(m.state,m.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,m.state];return[!1,void 0]}).then(m=>{var p;const[b,v]=m;if(A=o.merge(v,(p=r())!=null?p:g),t(A,!0),b)return c()}).then(()=>{f==null||f(A,void 0),A=r(),i=!0,l.forEach(m=>m(A))}).catch(m=>{f==null||f(void 0,m)})};return a.persist={setOptions:y=>{o={...o,...y},y.storage&&(u=y.storage)},clearStorage:()=>{u==null||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>T(),hasHydrated:()=>i,onHydrate:y=>(s.add(y),()=>{s.delete(y)}),onFinishHydration:y=>(l.add(y),()=>{l.delete(y)})},o.skipHydration||T(),A||g},f0=(e,n)=>"getStorage"in n||"serialize"in n||"deserialize"in n?((m0?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),d0(e,n)):c0(e,n),_h=f0,Rh=vs()(_h((e,n)=>({theme:"light",sidebarOpen:!1,fullscreen:!1,showTimer:!0,showProgress:!0,notifications:[],setTheme:t=>{e({theme:t}),t==="dark"||t==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},toggleSidebar:()=>e(t=>({sidebarOpen:!t.sidebarOpen})),setFullscreen:t=>e({fullscreen:t}),setShowTimer:t=>e({showTimer:t}),setShowProgress:t=>e({showProgress:t}),addNotification:t=>{const{notifications:r}=n();e({notifications:[...r,t]}),t.duration&&setTimeout(()=>{n().removeNotification(t.id)},t.duration)},removeNotification:t=>{const{notifications:r}=n();e({notifications:r.filter(a=>a.id!==t)})},clearNotifications:()=>e({notifications:[]})}),{name:"ui-storage",partialize:e=>({theme:e.theme,showTimer:e.showTimer,showProgress:e.showProgress})})),_t=vs(e=>({subjects:[{id:"air-law",name:"Air Law",description:"Regulations and legal aspects of aviation",questionCount:150,icon:"⚖️",color:"blue",categories:["Regulations","Legal","International Law"]},{id:"aircraft-general-knowledge",name:"Aircraft General Knowledge",description:"Aircraft systems, structures, and principles",questionCount:200,icon:"✈️",color:"green",categories:["Systems","Structures","Principles"]},{id:"flight-planning",name:"Flight Planning & Monitoring",description:"Route planning, fuel planning, and monitoring",questionCount:180,icon:"🗺️",color:"purple",categories:["Planning","Navigation","Monitoring"]},{id:"human-performance",name:"Human Performance & Limitations",description:"Human factors in aviation",questionCount:120,icon:"🧠",color:"orange",categories:["Psychology","Physiology","Limitations"]},{id:"meteorology",name:"Meteorology",description:"Weather theory and practical applications",questionCount:160,icon:"🌤️",color:"cyan",categories:["Weather","Atmosphere","Forecasting"]},{id:"navigation",name:"Navigation",description:"Navigation principles and techniques",questionCount:140,icon:"🧭",color:"indigo",categories:["Navigation","Instruments","Techniques"]},{id:"operational-procedures",name:"Operational Procedures",description:"Standard operating procedures and safety",questionCount:130,icon:"📋",color:"red",categories:["Procedures","Safety","Operations"]},{id:"principles-of-flight",name:"Principles of Flight",description:"Aerodynamics and flight theory",questionCount:170,icon:"🛩️",color:"teal",categories:["Aerodynamics","Theory","Physics"]}],studyModes:[{id:"study",name:"Study Mode",description:"Learn with immediate feedback and explanations",icon:"📚",features:["Immediate feedback on answers","Detailed explanations","Mark questions for review","Progress tracking","No time pressure"]},{id:"exam",name:"Exam Mode",description:"Simulate real exam conditions",icon:"📝",features:["Timed sessions","No immediate feedback","Real exam conditions","Score calculation","Performance analysis"]}],selectedSubject:null,selectedMode:null,setSelectedSubject:n=>e({selectedSubject:n}),setSelectedMode:n=>e({selectedMode:n})})),g0=()=>{const e=kr(),{theme:n,setTheme:t,sidebarOpen:r,toggleSidebar:a}=Rh(),{selectedSubject:o,selectedMode:i}=_t(),[s,l]=w.useState(!1),[u,c]=w.useState(!1),d=[{name:"Dashboard",href:"/"},{name:"Test",href:"/test"},{name:"Saved Tests",href:"/save-test"},{name:"Search",href:"/search"},{name:"Contact Us",href:"/contact"}],g=()=>{t(n==="light"?"dark":"light")},A=e.pathname==="/test";return h.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700",children:[h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:h.jsxs("div",{className:"flex justify-between items-center h-16",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsxs(Xn,{to:"/",className:"flex items-center space-x-2",children:[h.jsx("div",{className:"w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center",children:h.jsx("span",{className:"text-white font-bold text-sm",children:"A"})}),h.jsx("span",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"ATPL Questions"})]}),A&&o&&i&&h.jsxs("div",{className:"ml-6 flex items-center space-x-4 text-sm",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:"text-lg",children:o.icon}),h.jsx("span",{className:"text-gray-700 dark:text-gray-300 font-medium",children:o.name})]}),h.jsx("div",{className:"w-px h-4 bg-gray-300 dark:bg-gray-600"}),h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:"text-lg",children:i.icon}),h.jsx("span",{className:"text-gray-700 dark:text-gray-300 font-medium",children:i.name})]})]})]}),h.jsx("nav",{className:"hidden md:flex space-x-8",children:d.map(T=>h.jsx(Xn,{to:T.href,className:`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${e.pathname===T.href?"text-primary-600 bg-primary-50 dark:bg-primary-900/20":"text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"}`,children:T.name},T.name))}),h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsx("button",{onClick:g,className:"p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",children:n==="dark"?h.jsx(Rp,{className:"h-5 w-5"}):h.jsx(kp,{className:"h-5 w-5"})}),h.jsxs("div",{className:"relative",children:[h.jsx("button",{onClick:()=>c(!u),className:"p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",children:h.jsx(lp,{className:"h-5 w-5"})}),u&&h.jsx("div",{className:"absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2",children:h.jsx("div",{className:"px-4 py-2 text-sm text-gray-500 dark:text-gray-400",children:"No new notifications"})})]}),h.jsxs("div",{className:"relative",children:[h.jsxs("button",{onClick:()=>l(!s),className:"flex items-center space-x-2 p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",children:[h.jsx(Mp,{className:"h-5 w-5"}),h.jsx("span",{className:"hidden sm:block text-sm font-medium",children:"User"})]}),s&&h.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2",children:[h.jsx(Xn,{to:"/profile",className:"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",children:"My Profile"}),h.jsx(Xn,{to:"/packages",className:"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",children:"My Packages"}),h.jsx(Xn,{to:"/settings",className:"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",children:"Settings"}),h.jsx("hr",{className:"my-2 border-gray-200 dark:border-gray-700"}),h.jsx("button",{className:"block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",children:"Logout"})]})]}),h.jsx("button",{onClick:a,className:"md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",children:r?h.jsx(Fp,{className:"h-5 w-5"}):h.jsx(ip,{className:"h-5 w-5"})})]})]})}),r&&h.jsx("div",{className:"md:hidden",children:h.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:d.map(T=>h.jsx(Xn,{to:T.href,className:`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${e.pathname===T.href?"text-primary-600 bg-primary-50 dark:bg-primary-900/20":"text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"}`,onClick:()=>a(),children:T.name},T.name))})})]})},p0=()=>{const{subjects:e,setSelectedSubject:n}=_t(),t=Ya(),r=o=>{n(o),t("/mode-selection")},a=o=>({blue:"bg-blue-500 hover:bg-blue-600 border-blue-500",green:"bg-green-500 hover:bg-green-600 border-green-500",purple:"bg-purple-500 hover:bg-purple-600 border-purple-500",orange:"bg-orange-500 hover:bg-orange-600 border-orange-500",cyan:"bg-cyan-500 hover:bg-cyan-600 border-cyan-500",indigo:"bg-indigo-500 hover:bg-indigo-600 border-indigo-500",red:"bg-red-500 hover:bg-red-600 border-red-500",teal:"bg-teal-500 hover:bg-teal-600 border-teal-500"})[o]||"bg-gray-500 hover:bg-gray-600 border-gray-500";return h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[h.jsxs("div",{className:"mb-8",children:[h.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Choose a Subject"}),h.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:"Select a subject to start studying or take an exam"})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:e.map(o=>h.jsxs("div",{onClick:()=>r(o),className:`card p-6 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-${o.color}-500`,children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("div",{className:"text-3xl",children:o.icon}),h.jsxs("div",{className:`px-2 py-1 rounded-full text-xs font-medium text-white ${a(o.color)}`,children:[o.questionCount," questions"]})]}),h.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:o.name}),h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-4",children:o.description}),h.jsxs("div",{className:"flex flex-wrap gap-1",children:[o.categories.slice(0,2).map((i,s)=>h.jsx("span",{className:"px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded",children:i},s)),o.categories.length>2&&h.jsxs("span",{className:"px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded",children:["+",o.categories.length-2," more"]})]})]},o.id))})]})},w0=()=>h.jsx(p0,{}),y0=({testName:e,currentQuestion:n,totalQuestions:t,questionNumber:r,timeRemaining:a,onFlagQuestion:o,onPrevious:i,onNext:s})=>{const l=c=>{const d=Math.floor(c/3600),g=Math.floor(c%3600/60),A=c%60;return`${d.toString().padStart(2,"0")} : ${g.toString().padStart(2,"0")} : ${A.toString().padStart(2,"0")}`},u=[{type:"mark",icon:Nh,title:"Mark Question",color:"text-blue-600"},{type:"review",icon:bp,title:"For Review",color:"text-yellow-600"},{type:"hide",icon:Tp,title:"Do not show me",color:"text-gray-600"},{type:"green",icon:Io,title:"Green Flag",color:"text-green-600"},{type:"yellow",icon:Io,title:"Yellow Flag",color:"text-yellow-600"},{type:"red",icon:Io,title:"Red Flag",color:"text-red-600"}];return h.jsxs("div",{className:"bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700",children:[h.jsx("div",{className:"text-center py-3 border-b border-gray-200 dark:border-gray-700",children:h.jsx("h1",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:e})}),h.jsx("div",{className:"px-4 py-3",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("button",{onClick:i,disabled:n<=1,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200",title:"Previous Question",children:h.jsx(bh,{className:"h-6 w-6 text-gray-600 dark:text-gray-400"})}),h.jsxs("div",{className:"flex-1 flex items-center justify-center space-x-8",children:[h.jsxs("div",{className:"text-sm font-medium text-gray-900 dark:text-white",children:[n," / ",t]}),h.jsx("div",{className:"flex items-center space-x-2",children:u.map(c=>{const d=c.icon;return h.jsx("button",{onClick:()=>o(c.type),className:`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${c.color}`,title:c.title,children:h.jsx(d,{className:"h-4 w-4"})},c.type)})}),h.jsxs("div",{className:"flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white",children:[h.jsx(vh,{className:"h-4 w-4"}),h.jsx("span",{children:l(a)})]}),h.jsxs("div",{className:"text-sm font-medium text-gray-600 dark:text-gray-400",children:["No: ",r]})]}),h.jsx("button",{onClick:s,disabled:n>=t,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200",title:"Next Question",children:h.jsx(Ch,{className:"h-6 w-6 text-gray-600 dark:text-gray-400"})})]})})]})},A0=({question:e,selectedAnswer:n,onAnswerSelect:t,showCorrectAnswer:r=!1})=>{const[a,o]=w.useState("question"),{selectedMode:i}=_t();w.useEffect(()=>{(i==null?void 0:i.id)==="study"&&n!==void 0&&e.explanation&&o("explanation")},[n,i,e.explanation]);const s=c=>{let d="question-option";return n===c&&(d+=" selected"),r&&(c===e.correctAnswer?d+=" correct":n===c&&c!==e.correctAnswer&&(d+=" incorrect")),d},l=[{id:"question",label:"Question"},{id:"explanation",label:"Explanation"},{id:"note",label:"Note"},{id:"exam",label:"Exam Question"},{id:"comments",label:"Comments"}],u=["A","B","C","D"];return h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-sm",children:[h.jsx("div",{className:"border-b border-gray-200 dark:border-gray-700",children:h.jsx("div",{className:"flex overflow-x-auto",children:l.map(c=>h.jsx("button",{onClick:()=>o(c.id),className:`px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${a===c.id?"border-primary-500 text-primary-600 dark:text-primary-400":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`,children:c.label},c.id))})}),h.jsxs("div",{className:"p-6",children:[a==="question"&&h.jsxs("div",{className:"space-y-6",children:[h.jsx("div",{className:"questionText",children:h.jsx("p",{className:"text-gray-900 dark:text-white text-base leading-relaxed",children:e.text})}),e.imageUrls&&e.imageUrls.length>0&&h.jsx("div",{className:"space-y-3",children:e.imageUrls.map((c,d)=>h.jsx("img",{src:c,alt:`Question image ${d+1}`,className:"max-h-96 rounded border border-gray-200 dark:border-gray-700"},d))}),h.jsx("ul",{className:"space-y-3",children:e.options.map((c,d)=>h.jsx("li",{children:h.jsx("button",{onClick:()=>t(d),className:`w-full text-left ${s(d)}`,disabled:r,children:h.jsxs("div",{className:"flex items-start space-x-4",children:[h.jsx("span",{className:"text-2xl font-light text-gray-400 mt-1",children:u[d]}),h.jsx("div",{className:"flex-1",children:h.jsx("p",{className:"text-gray-900 dark:text-white text-sm leading-relaxed",children:c})})]})})},d))}),(i==null?void 0:i.id)==="study"&&n===void 0&&h.jsx("div",{className:"mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg",children:h.jsxs("p",{className:"text-sm text-blue-700 dark:text-blue-300",children:["💡 ",h.jsx("strong",{children:"Study Mode:"})," Select an answer to see immediate feedback and explanation."]})})]}),a==="explanation"&&h.jsxs("div",{className:"space-y-4",children:[h.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:e.explanation?h.jsxs("div",{className:"space-y-3",children:[h.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Explanation:"}),h.jsx("p",{className:"text-sm leading-relaxed",children:e.explanation})]}):h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-500 italic",children:"No explanation available for this question."})}),n!==void 0&&h.jsxs("div",{className:"mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg",children:[h.jsx("h4",{className:"font-semibold text-green-800 dark:text-green-200 mb-2",children:"Correct Answer:"}),h.jsxs("p",{className:"text-sm text-green-700 dark:text-green-300",children:[h.jsx("strong",{children:u[e.correctAnswer]}),": ",e.options[e.correctAnswer]]})]}),e.explanationImageUrls&&e.explanationImageUrls.length>0&&h.jsx("div",{className:"space-y-3",children:e.explanationImageUrls.map((c,d)=>h.jsx("img",{src:c,alt:`Explanation image ${d+1}`,className:"max-h-96 rounded border border-gray-200 dark:border-gray-700"},d))})]}),a==="note"&&h.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-500 italic",children:"No notes available for this question."})}),a==="exam"&&h.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-500 italic",children:"This question may appear in official exams."})}),a==="comments"&&h.jsx("div",{className:"text-gray-600 dark:text-gray-400 space-y-3",children:e.commentsText?h.jsx("pre",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:e.commentsText}):h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-500 italic",children:"No comments available for this question."})})]})]})},T0=({totalQuestions:e,currentQuestion:n,answers:t,flags:r,onQuestionSelect:a})=>{const[o,i]=w.useState(1),s=100,l=Math.ceil(e/s),u=g=>{const A=t[g]!==void 0,T=r[g],y=g===n;let N="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white";return y?N="bg-primary-500 text-white":A?N="bg-success-100 dark:bg-success-900/20 text-success-700 dark:text-success-400":T&&(N="bg-warning-100 dark:bg-warning-900/20 text-warning-700 dark:text-warning-400"),N},c=g=>{const A=r[g];if(!A)return null;const T={mark:"text-blue-600",review:"text-yellow-600",hide:"text-gray-600",green:"text-green-600",yellow:"text-yellow-600",red:"text-red-600"};return h.jsx("div",{className:`absolute -top-1 -right-1 w-2 h-2 rounded-full ${T[A.flagType]||"text-gray-600"}`})},d=()=>{const g=(o-1)*s,A=Math.min(g+s,e),T=[];for(let y=g;y<A;y++){const N=y+1;T.push(h.jsxs("button",{onClick:()=>a(N),className:`relative w-8 h-8 rounded text-xs font-medium transition-colors duration-200 ${u(N)}`,children:[N,c(N)]},N))}return T};return h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4",children:[h.jsxs("div",{className:"mb-4",children:[h.jsx("h3",{className:"text-sm font-medium text-gray-900 dark:text-white mb-2",children:"Questions"}),h.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Click on a question number to navigate"})]}),h.jsx("div",{className:"grid grid-cols-10 gap-1 mb-4",children:d()}),l>1&&h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("button",{onClick:()=>i(Math.max(1,o-1)),disabled:o<=1,className:"p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200",children:h.jsx(bh,{className:"h-4 w-4"})}),h.jsxs("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:["Page ",o," of ",l]}),h.jsx("button",{onClick:()=>i(Math.min(l,o+1)),disabled:o>=l,className:"p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200",children:h.jsx(Ch,{className:"h-4 w-4"})})]}),h.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"text-xs text-gray-500 dark:text-gray-400 space-y-1",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("div",{className:"w-3 h-3 bg-primary-500 rounded"}),h.jsx("span",{children:"Current"})]}),h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("div",{className:"w-3 h-3 bg-success-100 dark:bg-success-900/20 rounded"}),h.jsx("span",{children:"Answered"})]}),h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("div",{className:"w-3 h-3 bg-gray-100 dark:bg-gray-700 rounded"}),h.jsx("span",{children:"Unanswered"})]})]})})]})},N0=({initialTime:e,onTimeUp:n,isPaused:t=!1,onPauseToggle:r})=>{const[a,o]=w.useState(e),[i,s]=w.useState(!0);w.useEffect(()=>{let d;return i&&!t&&a>0&&(d=setInterval(()=>{o(g=>g<=1?(n(),0):g-1)},1e3)),()=>{d&&clearInterval(d)}},[i,t,a,n]);const l=d=>{const g=Math.floor(d/3600),A=Math.floor(d%3600/60),T=d%60;return`${g.toString().padStart(2,"0")} : ${A.toString().padStart(2,"0")} : ${T.toString().padStart(2,"0")}`},u=()=>a<=300?"text-red-600":a<=600?"text-yellow-600":"text-gray-900 dark:text-white",c=()=>{r?r():s(!i)};return h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx(vh,{className:"h-4 w-4 text-gray-600 dark:text-gray-400"}),h.jsx("span",{className:`text-sm font-medium ${u()}`,children:l(a)}),r&&h.jsx("button",{onClick:c,className:"p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",title:t?"Resume":"Pause",children:t?h.jsx(xp,{className:"h-4 w-4 text-gray-600 dark:text-gray-400"}):h.jsx(Ip,{className:"h-4 w-4 text-gray-600 dark:text-gray-400"})})]})},Lh=vs()(_h((e,n)=>({currentTest:null,currentSession:null,currentQuestionIndex:0,answers:{},flags:{},timeRemaining:0,isPaused:!1,isCompleted:!1,startTest:t=>{const r={testId:t.id,userId:"current-user",startTime:new Date,answers:[],flags:[],currentQuestion:0,isPaused:!1,timeRemaining:t.timeLimit?t.timeLimit*60:0};e({currentTest:t,currentSession:r,currentQuestionIndex:0,answers:{},flags:{},timeRemaining:r.timeRemaining,isPaused:!1,isCompleted:!1})},endTest:()=>{const{currentTest:t}=n();t&&e({isCompleted:!0,currentSession:{...n().currentSession,endTime:new Date}})},pauseTest:()=>e({isPaused:!0}),resumeTest:()=>e({isPaused:!1}),goToQuestion:t=>{const{currentTest:r}=n();!r||t<0||t>=r.questions.length||e({currentQuestionIndex:t})},nextQuestion:()=>{const{currentTest:t,currentQuestionIndex:r}=n();!t||r>=t.questions.length-1||e({currentQuestionIndex:r+1})},previousQuestion:()=>{const{currentQuestionIndex:t}=n();t<=0||e({currentQuestionIndex:t-1})},answerQuestion:(t,r)=>{const{answers:a}=n();e({answers:{...a,[t]:r}})},flagQuestion:(t,r)=>{const{flags:a}=n(),o={questionId:t,flagType:r,timestamp:new Date};e({flags:{...a,[t]:o}})},clearFlag:t=>{const{flags:r}=n(),a={...r};delete a[t],e({flags:a})},updateTimer:t=>{e({timeRemaining:t}),t<=0&&n().endTest()},resetTest:()=>{e({currentTest:null,currentSession:null,currentQuestionIndex:0,answers:{},flags:{},timeRemaining:0,isPaused:!1,isCompleted:!1})}}),{name:"test-storage",partialize:e=>({currentTest:e.currentTest,currentSession:e.currentSession,currentQuestionIndex:e.currentQuestionIndex,answers:e.answers,flags:e.flags,timeRemaining:e.timeRemaining,isPaused:e.isPaused,isCompleted:e.isCompleted})})),b0=`Question Number: AT00001\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
In the figure, all fuel figures are in kg. For this flight, how does the fuel consumption from top of climb to TORDU compare to the planned fuel consumption? The actual fuel consumption is…\r
\r
Images:\r
- images/AT00001_img_1.png\r
\r
Explanation:\r
The aircraft according to the planned fuel calculations should burn from Top of Climb to TORDU: 360 - 241 = 119 kg in 19:45 - 18:52 = 53 min.\r
Thus, its planned fuel consumption is: 119 kg / (53/60) hr = 134.7 kg/hr.\r
But, actually the aircraft burns 375 kg - 360 kg = 15 kg less, so at TORDU the actual remaining fuel after the pilot's fuel check will be: 241 kg + 15 kg = 256 kg.\r
Thus, the aircraft will burn from Top of Climb to TORDU: 375 kg - 256 kg = 119 kg in 19:42 - 18:52 = 50 min.\r
So, its actual fuel consumption will be: 119 kg / (50/60) = 142.8 kg/hr.\r
Therefore, its actual fuel consumption will be: 142.8 kg/hr - 134.7 kg/hr = 8.1 kg/hr higher than planned.\r
\r
Options:\r
A. A\r
The same as planned.\r
B. C\r
3 kg/h lower than planned.\r
C. D\r
5 kg/h higher than planned.\r
D. B\r
8 kg/h higher than planned. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00002\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Which selection best describes the Point of Safe Return (PSR)? The furthest point along a planned route…\r
\r
Explanation:\r
Time to PSR (Point of Safe Return):\r
The Point of Safe Return (PSR) is the last point on a route at which it is possible to return to the departure airfield arriving back with the required fuel reserves still available in the tanks. Continuing passed the PSR you are now committed to landing at your destination.\r
Time (to PSR) = E x H / (O + H)\r
E = Safe Endurance based on available fuel\r
H = Ground speed Home\r
O = Ground speed Out\r
Correct Answer: to which an aircraft can fly to destination or back to the departure, or alternate with reserves intact.\r
\r
Note: Safe return means arriving at the departure aerodrome with reserves.\r
\r
Options:\r
A. A\r
to which an aircraft can fly to destination or back to the departure, or alternate in the same time.\r
B. B\r
to which an aircraft can fly to destination or back to the departure, or alternate with no reserves intact.\r
C. D\r
to which an aircraft can fly to destination or back to the departure, or alternate with safe endurance.\r
D. C\r
to which an aircraft can fly to destination or back to the departure, or alternate with reserves intact. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00003\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
What statement below is correct regarding the difference between an RNAV STAR and an RNAV STAR overlay?\r
\r
Explanation:\r
The conventional Standard Arrival Route procedures (STARs) use ground navigational aids, while the RNAV STARs use Fly-by and Fly-over waypoints and are followed by the FMS.\r
RNAV equipment tends to be more accurate than basic fixing and can be based on either VOR/DME information, satellite systems, inertial systems or combinations of these.\r
An RNAV STAR overlay is a traditional STAR that allows pilots to use GPS equipment to fly existing, conventional STAR procedures, without replacing it. It follows the same route as the conventional procedure, with waypoints defined by coordinates instead of bearings and distances from ground navigation aids. In most cases, each ground navigation aid or intersection point of the conventional STAR, corresponds to an RNAV waypoint. Additionally, some RNAV waypoints (Fly-by or Fly-over) may be added, non-existing in the conventional STAR, to facilitate the turns.\r
An RNAV STAR overlay may be either shorter or longer in distance than an RNAV STAR, depending on the design.\r
\r
Options:\r
A. B\r
An RNAV STAR overlay CANNOT follow the same route as a STAR that is defined by ground based navigation aids.\r
B. C\r
An RNAV STAR overlay will have a longer route distance than an RNAV STAR as it has less constraints.\r
C. D\r
An RNAV STAR overlay will have a shorter route distance than an RNAV STAR as it has less constraints.\r
D. A\r
An RNAV STAR overlay will follow the same route as a STAR that is defined by ground based navigation aids. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00004\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
If the actual in-flight wind produces a greater headwind than the forecast wind input into the FMC, what should be expected?\r
\r
Explanation:\r
The Flight Management Computer (FMC) contains two databases:\r
A navigation database, which is updated every 28 days, including waypoints, airways, SIDs, STARs, approach procedures, runway lengths and minimum altitudes.\r
A performance database, which is updated only when rquired and is able to calculate maximum and optimum cruise altitudes, the optimum speeds for climb, cruise and descent and the required thrust settings for different phases of flight.\r
The FMC has, also, the ability to calculate speeds to arrive over a waypoint at a defined time, a selection known as RTA (Required Time of Arrival). In case the wind component is not as expected and input into the FMC, then it adjusts the speed so as to maintain the desired ETAs.\r
Thus, in case the actual in-flight wind produces a greater headwind than the forecast wind input into the FMC, then speeds will be increased to maintain ETAs.\r
\r
Options:\r
A. A\r
Earlier ETAs will be generated by the FMC.\r
B. B\r
A new cruise level will be generated by the FMC.\r
C. D\r
The optimum level will be lowered.\r
D. C\r
Speeds will be increased to maintain ETAs. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00005\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
The flight crew has 1 hour flight time remaining of a 4 hours flight towards the destination aerodrome. The FMS displays the message DEST EFOB BELOW MIN and the Commander looks at the FMS data to see that there is an estimated 0.3 tonnes less fuel than required when arriving at the destination. Under NORMAL circumstances for a commercial Air transport flight with one destination alternate nominated, what is the minimum fuel to be expected on board when arriving at the destination aerodrome?\r
\r
Explanation:\r
Final Reserve Fuel is a quantity of fuel that should never be used, but is carried in order to provide a final safety net. You should always land with Final Reserve Fuel intact in the tanks.\r
Alternate fuel is the fuel required from the missed approach point to the nominated alternate, including the fuel required for climb, cruise, descent, approach and landing.\r
According to the OPS 1.375 "In-flight fuel management":\r
The flight must be conducted so that the expected usable fuel remaining on arrival at the destination aerodrome is not less than:\r
(i) the required alternate fuel plus final reserve fuel, or\r
(ii) the final reserve fuel, if no alternate aerodrome is required.\r
\r
Options:\r
A. A\r
Contingency fuel plus alternate fuel plus final reserve fuel.\r
B. B\r
Final reserve fuel only.\r
C. D\r
Contingency fuel plus final reserve fuel.\r
D. C\r
Alternate fuel plus final reserve fuel. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00006\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
An IFR flight has been given descent instructions below the Minimum Safe Altitude (MSA) but above the Minimum Vectoring Altitude (MVA). The temperature is ISA -10°C. Who is responsible for terrain separation?\r
\r
Explanation:\r
Radar vectoring is when ATC gives instructions for heading and altitude in order for an aircraft to follow a specific path, for example so that it can achieve VFR or join a procedure. ATC also makes sure to direct the aircraft to avoid conflicting traffic. When under radar vectors, ATC is fully responsible for separation with terrain and other traffic.\r
The Minimum Vectoring Altitude (MVA), also known as the Minimum Radar Vectoring Altitude (MRVA), is the lowest altitude, expressed in feet AMSL, to which a radar controller may issue aircraft altitude clearances during vectoring. It may be below the MSA and when under radar vectors the PIC can safely accept the routing.\r
This question does not specifically mention that the pilot is under radar vectors and as such the PIC is fully responsible for any terrain separation. Since the pilot is not being radar vectored, they should also not descend below the MSA, unless they are following a published procedure like a STAR (which does not appear to be the case in this question).\r
If a descent clearance places the aircraft below the Minimum Safe Altitude (MSA), the PIC must ensure terrain clearance by applying temperature corrections to account for ISA deviations, however there is no reason to descend below the MSA unless being vectored or following a published procedure. MSA includes a buffer for terrain clearance, but it does not account for lower-than-standard temperatures unless corrected by the pilot.\r
\r
Options:\r
A. A\r
The PIC and the PIC should accept the routing.\r
B. B\r
The Controller and the PIC should not accept the routing.\r
C. C\r
The Controller and the PIC should accept the routing.\r
D. D\r
The PIC and the routing should not be accepted. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00007\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to GSPRM Jeppesen E(LO)2.\r
You want to fly from POLE HILL POL 112.1 (N53 45 W002 06) to OTBED (N53 18 E000 02). Which route would you select?\r
\r
Images:\r
- images/AT00007_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
"POL N57 DESIG L975 GOLES Y70 OTBED" Incorrect.\r
DESIG is not a point on airway N57.\r
"POL Y70 GOLES Y70 OTBED" Incorrect.\r
Y70 is a one way airway, direction GOLES to POLE.\r
"POL N601 DESIG L60 OTBED" Incorrect.\r
N601 is a one way airway northbound and does not connect with DESIG.\r
\r
Explanation Images:\r
- images/explanation_AT00007_img_1.png\r
\r
Options:\r
A. B\r
POL N57 DESIG L975 GOLES Y70 OTBED\r
B. C\r
POL N601 DESIG L60 OTBED\r
C. D\r
POL Y70 GOLES Y70 OTBED\r
D. A\r
POL N57 DENBY L975 GOLES Y70 OTBED ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00008\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to Stuttgart 12-2 chart from Jeppesen GSPRM 2017.\r
If you carry out an RNP approach to runway 25 at Stuttgart airport, what will be the distance covered from the Initial Approach Fix (IAF) to the Rwy 25 threshold?\r
\r
Images:\r
- images/AT00008_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Initial Approach Fix (IAF) is a fix that marks the beginning of the initial approach segment and the end of the arrival segment (STAR), if applicable, i.e. it is a common fix point for both a STAR and an Approach procedure.\r
The approach chart depicts the "RNP Rwy 25" approach procedure, which begins from the IAF "LBU" RNAV waypoint. Information for the ground distance of each flight leg of the approach procedure, can be extracted from both the Approach Planview and the Approach Profile View.\r
Thus, the total distance from the IAF to the runway's threshold is:\r
5.3 NM (IAF LBU - DSS518) + 4.0 NM (DS518 - DS511) + 4.0 NM (DS511 - IF DS512) + 4.0 NM (IF DS512 - UNSER) + 4.0 NM + 4.7 NM (UNSER - RW25 threshold) = 26 NM.\r
NOTE: The distance from the Final Approach Fix "UNSER" to the runway's threshold is depicted on the Approach Profile View.\r
\r
Explanation Images:\r
- images/explanation_AT00008_img_1.png\r
\r
Options:\r
A. A\r
21.3 NM\r
B. B\r
12.7 NM\r
C. D\r
20.4 NM\r
D. C\r
26 NM ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00009\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to E(LO)6 chart from the Jeppesen GSPRM 2017. An aircraft is flying from VALENCIA (VLC) VOR/DME (39° 29'N, 000° 29'W) to ALMERIA (AMR) VOR/DME (36° 49'N, 002° 15'W) with the LE(R)-63 activated, using a conventional ATS route. What is the best route to avoid passing through this area?\r
\r
Images:\r
- images/AT00009_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
First of all, find the position of VALENCIA (VLC) VOR/DME and ALMERIA (AMR) VOR/DME, using the coordinates given and locate, also, the LE(R)-63 airspace.\r
LE(R)-63 is a restricted airspace of defined dimensions with its boundaries as depicted in the figure in purple colour, probably activated by a NOTAM, which restricts any aircraft to pass through.\r
After examining each route carefully, the only route that sidesteps the LE(R)-63 is: VLC - B28 - VIBAS - N865 - AMR. All the other routes partially pass through the restricted area.\r
\r
Explanation Images:\r
- images/explanation_AT00009_img_1.png\r
\r
Options:\r
A. B\r
VLC - B28 - BAZAS - M192 - AMR\r
B. C\r
VLC - A34 - ALT - W810 - VSJ - W820 - AMR\r
C. D\r
VLC - G850 - AMR\r
D. A\r
VLC - B28 - VIBAS - N865 - AMR ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00010\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure or to VFR chart ED-4 from the Jeppesen GSPRM 2017.\r
You are planning a VFR flight from Schärding Süben (LOLS) (48°24'11"N, 013°26'53"E) to Pfarrkirchen (EDNP) (48°25'12"N, 012°51'53"E) aerodromes, which of the following statements are true?\r
1. The cruising altitude should be 5500 ft\r
2. Your route follows the river "Rott" Westwards\r
3. The cruising altitude should be 6500 ft\r
4. You will enter class F airspace during the final approach\r
5. Your route follows the A3 motorway Northwards\r
6. You will enter class E airspace during the final approach\r
\r
Images:\r
- images/AT00010_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Firstly, find the exact position of the two aerodromes, using the coordinates given and examine each statement carefully.\r
The aircraft follows a Westerly magnetic track from Schärding Süben (LOLS) to Pfarrkirchen (EDNP) aerodromes. According to the ICAO VFR semi-circular rule, for a westerly magnetic track, Even FLs/Altitudes + 500 ft should be flown (2 500 ft, 4 500 ft, 6 500 ft, etc.). So, a cruise altitude of 6 500 ft can be followed, which apart from being according to the ICAO rule, it provides obstacle clearance too. It is a bit higher than you might usually use for this route, but it is perfectly acceptable nonetheless.\r
Line features (rivers, motorways, railways, etc.) are highly recommended for navigation in VFR flights. The Rott river, as a line feature, is very helpful, because it is aligned with the Westerly flight direction and runs very close to the route. The A3 motorway does not follow the route.\r
The aircraft during its descent towards Pfarrkirchen (EDNP) destination aerodrome, will be within a Class F airspace with vertical limits from 1 500 ft AGL - 2500 ft AGL, initially, and as approaching to the destination aerodrome will remain within a Class F airspace with vertical limits from GND - 2500 ft AGL.\r
\r
Explanation Images:\r
- images/explanation_AT00010_img_1.png\r
\r
Options:\r
A. A\r
3, 4 and 5.\r
B. C\r
1, 2 and 5.\r
C. D\r
3, 4 and 6.\r
D. B\r
2, 3 and 4. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00011\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Given the following information, calculate the maximum attainable flight time and range.\r
Average fuel flow: 9.6 US gal/h\r
Available fuel: 50 US gal\r
TAS: 100 kt\r
Wind component: 15 kt tailwind\r
The flight time is (1) _____ and the range is (2) _____.\r
\r
Explanation:\r
With an Average fuel flow of 9.6 US gal/h and Available fuel of 50 US gal, the maximum flight time is: 50 US gal / 9.6 US gal/h = 5.20 hr or 5 hr 12 minutes, which is very close to 5 hours 13 minutes.\r
Because of the 15 kts tailwind, the Groundspeed is: TAS + tailwind velocity = 100 kt + 15 kt = 115 kt.\r
Thus, the range covered will be: Groundspeed x Flight time = 115 kt x 5.20 hr = 598 NM, which is close to 599 NM.\r
\r
Options:\r
A. A\r
(1) 5 hours 20 minutes; (2) 521 NM\r
B. C\r
(1) 5 hours 13 minutes; (2) 521 NM\r
C. D\r
(1) 5 hours 20 minutes: (2) 599 NM\r
D. B\r
(1) 5 hours 13 minutes; (2) 599 NM ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00012\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Which temperature correction must be applied during an instrument approach?\r
\r
Explanation:\r
When doing an approach in cold conditions, a temperature error correction must be applied since your aircraft will be lower than the indicated altitude. This is very dangerous, as it reduces vertical separation between your aircraft and obstacles. In warm conditions (>ISA), this is not as much of an issue since your aircraft will be at a higher altitude than the one indicated and you will have greater vertical separation from obstacles, however it is still good to make the correction to get an accurate altitude.\r
A good mnemonic to remember is "high to low lookout below". This mnemonic works for both temperature and pressure. If your aircraft is going from a high temperature/pressure area to a low temperature/pressure area, your altimeter will show you an indication that is higher than your true altitude. This means that you will be lower than desired, your vertical separation will be reduced and hence you must "lookout below".\r
In cold conditions, you must add a temperature error correction to the DH, MDH or MDA.\r
The temperature correction must be applied at the aerodrome level. This is because approach altitudes, such as the MDA or DA, are directly related to the aerodrome's elevation. Conditions are taken at the aerodrome level in order to get accurate altimeter readings and ensure terrain and obstacle clearance during landing. Altitudes at TOD are higher and less critical for terrain clearance.\r
\r
Options:\r
A. B\r
Warmer than the temperature at the Top of Descent.\r
B. C\r
Warmer than the temperature at aerodrome level.\r
C. D\r
Colder than the temperature at the Top of Descent.\r
D. A\r
Colder than the temperature at aerodrome level. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00013\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
A piston-engined aeroplane on an IFR Commercial Air Transport flight arrives at its destination with the minimum fuel on board. During the approach procedure, the aircraft is forced to divert from the missed approach point to the alternate. Given the following information:\r
Trip Fuel: 235 litres\r
Alternate Fuel: 38 litres\r
Fuel for go around and one approach: 22 litres\r
Fuel flow at cruise speed: 80 l/h\r
Fuel flow at holding speed: 60 l/h\r
The minimum fuel required at the destination is (1) _____ and the minimum fuel required at the alternate is (2) _____.\r
\r
Explanation:\r
Final Reserve Fuel is a quantity of fuel that should never be used, but is carried in order to provide a final safety net. You should always land with Final Reserve Fuel intact in the tanks.\r
According to the OPS 1.375 "In-flight fuel management-Aeroplane":\r
The flight must be conducted so that the expected usable fuel remaining on arrival at the destination aerodrome is not less than:\r
(i) the required alternate fuel plus final reserve fuel, or\r
(ii) the final reserve fuel, if no alternate aerodrome is required.\r
Final reserve fuel for a piston-engined aeroplane is the minimum fuel required to fly for 45 minutes: 45/60 hr x Holding Fuel flow = 45/60 hr x 60 l/h = 45 l.\r
Thus, the minimum fuel required at the:\r
Destination is: Final Reserve Fuel + Alternate Fuel = 45 litres + 38 litres = 83 litres.\r
Alternate is: Final Reserve Fuel = 45 litres.\r
NOTE:\r
Regarding the Final Reserve Fuel, for an aircraft with reciprocating engine, the definition just says that "It is equal with an amount of fuel to fly for 45 minutes". The selection between the Cruise Fuel Flow and the Holding Fuel Flow is according to the correct answer provided by feedback. Any feedback with the exact wording would be appreciated so as to make clear which fuel flow must be applied in each case.\r
\r
Options:\r
A. A\r
(1) 100 litres; (2) 40 litres\r
B. B\r
(1) 98 litres; (2) 60 litres\r
C. C\r
(1) 95 litres; (2) 57 litres\r
D. D\r
(1) 83 litres; (2) 45 litres ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00014\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
An aircraft flies from airport A to airport B, covering a total distance of 460 NM. After 1 h 11 min, it has covered a distance of 183 NM, and its remaining fuel is equal to 780 lb plus reserves. Determine the remaining fuel at airport B, assuming conditions remain the same and given:\r
TAS: 185 kt\r
Headwind: 30 kt\r
Trip fuel: 1 098 lb\r
Fuel flow: 370 lb/h\r
\r
Explanation:\r
Note: Question asks us to assume that conditions remain the same, meaning that we should calculate the actual fuel consumption and groound speed during the first 183 NM (disregarding the Fuel Flow/GS provided by the question).\r
1) Determine Fuel consumed and fuel consumption during the first 183 NM:\r
Fuel Consumed = 1 098 lb - 780 lb = 318 lb\r
Fuel Consumption = (318 lb / 71 min) x 60 min/h\r
Fuel Consumption = 269 lb/h\r
2) Calculate actual Ground Speed during the first 183 NM:\r
Ground Speed = (183 NM / 71 min) x 60 min/h = 155 kt\r
3) Calculate remaining distance and flight time:\r
Remaining distance = 460 NM - 183 NM = 277 NM\r
Remaining Flight time = 277 NM / 155 kt = 1.79 h\r
4) Calculate fuel consumed during the remaining distance:\r
Fuel Consumed = 1.79 h x 269 lb/h = 481.5 lb\r
5) Remaining fuel at airport B:\r
780 lb - 481.5 lb = 298.5 lb = 299 lb + reserves\r
\r
Options:\r
A. A\r
235 lb + reserves\r
B. B\r
119 lb + reserves\r
C. C\r
385 lb + reserves\r
D. D\r
299 lb + reserves ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00015\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
During the pre-flight preparation on 19th April 2021, the crew discuss NANU messages. The only currently applicable message is shown below.\r
GPS SATELLITE SVN65 (PRN24) WILL BE UNUSABLE ON JDAY 102 (12 APR 2021) BEGINNING 1545 ZULU UNTIL JDAY 116 (26 APR 2021) ENDING 1545 ZULU.\r
What impact does this message have on the flight?\r
\r
Explanation:\r
GPS SATELLITE SVN65 (PRN24) WILL BE UNUSABLE ON JDAY 102 (12 APR 2021) BEGINNING 1545 ZULU UNTIL JDAY 116 (26 APR 2021) ENDING 1545 ZULU.\r
GPS Satellite SVN65 (PRN24) will be unusable from the 102nd day of the year (12 April) at 1545 z until the 116th day of the year (26 April) at 1545 z.\r
On April 19th, the GPS satellite SVN65 (PRN24) will not be available for the flight, but GNSS remains operational.\r
\r
Options:\r
A. A\r
EGNOS SBAS will only use one of the two available satellites, and the range of GNSS services is reduced.\r
B. C\r
A new satellite will be added to the GPS constellation, but this has NO impact on the flight.\r
C. D\r
There is a major outage of GPS, greatly reducing GNSS achievability and therefore significantly impacting the flight.\r
D. B\r
There is an outage of a particular GPS satellite, but GNSS should still be fully achievable. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00016\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Who is responsible for terrain separation during an IFR flight on an ATS route?\r
\r
Explanation:\r
At all times, whether flying inside or outside controlled airspace in IFR, the Pilot-In-Command (PIC) remains responsible for terrain and collision avoidance.\r
When "under vectors", it means that a radar control service is being provided, i.e. the PIC must do what he is told by the radar unit and the ATC assumes responsibility for separation and terrain clearance in flight, providing bearing, distance and height information.\r
Therefore, the Pilot-In-Command is responsible for terrain separation in flight at all times, unless under vectors by radar.\r
\r
Options:\r
A. B\r
The Operator.\r
B. C\r
Air Traffic Control service.\r
C. D\r
The aircraft owner.\r
D. A\r
The Pilot-in-Command. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00017\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to Nantes/Atlantique Chart 19-2 from Jeppesen GSPRM 2017.\r
You are taking-off from RWY 03, abeam holding point B. What is the take-off length available?\r
\r
Images:\r
- images/AT00017_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Plate 19-2 provides the aerodrome layout, including the runway and taxiways. The full runway length is marked as 2900 metres. Taxiway B is clearly shown on the diagram, and the information box in the bottom-left corner states that if an aircraft enters Runway 03 via Taxiway B, without backtracking, the available runway length is 2000 metres.\r
\r
Explanation Images:\r
- images/explanation_AT00017_img_1.png\r
\r
Options:\r
A. B\r
2900 ft\r
B. C\r
2690 m\r
C. D\r
2900 m\r
D. A\r
2000 m ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00018\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to ALICANTE - chart 11-1 from Jeppesen GSPRM 2017.What is the elevation of the highest obstacle - natural or man-made on the chart?\r
\r
Images:\r
- images/AT00018_img_1.png\r
\r
Explanation:\r
Definition of Arrow in the manual : "Arrow indicates the highest of the portrayed high points within the planview area only."\r
The highest obstacle (4 252') is marked by a bigger bold arrow in the chart.\r
\r
Options:\r
A. A\r
625 ft\r
B. B\r
7000 ft\r
C. D\r
3718 ft\r
D. C\r
4252 ft ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00019\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
What is the lower limit for the temporarily-established restricted area (ZRT)?\r
\r
Images:\r
- images/AT00019_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Temporary restricted area from MELUM AD (LFPM), so it extend from aerodrome level (ground) upwards.\r
\r
Explanation Images:\r
- images/explanation_AT00019_img_1.png\r
\r
Options:\r
A. A\r
1500 ft AMSL\r
B. C\r
500 ft AGL\r
C. D\r
3500 ft AMSL\r
D. B\r
Ground ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00020\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
An aircraft is making a 2D (LNAV) approach under IMC, to an aerodrome where the temperature is significantly different from ISA. Which of the following is correct regarding temperature corrections to the MDA?\r
\r
Explanation:\r
If the temperature is lower or colder than ISA, then the aircraft's true altitude will be lower than the indicated altitude and a correction needs to be made to all minimum altitudes/heights to maintain the required separation from terrain.\r
LNAV is a GNSS (RNAV) approach using internal aids (GPS) for a non-precision (2D) approach, where no vertical guidance is provided, only lateral. The pilot must calculate a rate of descent and normally use a Continuous Descent Final Approach (CDFA) method.\r
Therefore, the pilot is responsible for temperature error corrections and cannot rely on ATC.\r
\r
Options:\r
A. A\r
The Pilot-In-Command is responsible for making a correction if the temperature is much higher than ISA.\r
B. B\r
The Controller will pass on a correction when the temperature is much higher than ISA.\r
C. D\r
The Controller will pass on a correction when the temperature is much lower than ISA.\r
D. C\r
The Pilot-In-Command is responsible for making a correction if the temperature is much lower than ISA. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00021\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Given the following information, what is the Ground Speed of the aircraft?\r
TAS: 300 kt\r
Heading: 090°\r
Wind: 330°/46 kt\r
\r
Explanation:\r
Refer to figure.\r
CALCULATING GROUND SPEED using the Flight computer (Knowing HDG, TAS and WV):\r
Set wind direction under True Index – 330º\r
Mark windspeed down from centre point – let’s say, set centre point over TAS and mark 46 kt down => in this case, 254\r
Set True Heading under True Index - 090º\r
Slide centre point to True airspeed of 300 kts.\r
You can directly read GS => 325 kts\r
\r
Explanation Images:\r
- images/explanation_AT00021_img_1.png\r
\r
Options:\r
A. A\r
330 kt\r
B. B\r
320 kt\r
C. D\r
280 kt\r
D. C\r
325 kt ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00022\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
Given: Planned and actual data as shown in the Flight Log excerpt.\r
Provided that flight conditions on the leg GAMMA to DELTA remain unchanged and fuel consumption remains unchanged, what fuel remaining should be expected at waypoint DELTA?\r
\r
Images:\r
- images/AT00022_img_1.png\r
\r
Explanation:\r
First Step: Calculate the actual fuel consumption BETA - GAMMA\r
Fuel consumed BETA - GAMMA = Actual Fuel remaining at BETA - Actual Fuel Remaining at GAMMA\r
5200 kg – 4850 kg = 350 kg\r
Time BETA – GAMMA = 2:18 – 1:53 = 25 min\r
Fuel Consumption = 350 / 25 = 14 kg/min\r
Second Step: Calculate fuel consumed GAMMA - DELTA\r
Note: provided that the flight conditions will not change, the ATA over DELTA will be equal to ETA => 3:03.\r
TIME GAMMA - DELTA = 3:03 - 2:18 = 45 min\r
Fuel consumed: 45 min x 14 kg/min = 630 kg\r
Third Step: Calculate Fuel remaining at DELTA\r
FUEL at DELTA = Actual Fuel over GAMMA - Fuel Consumed (GAMMA - DELTA)\r
FUEL at DELTA = 4850 kg – 630 kg = 4220 kg\r
\r
Options:\r
A. B\r
4340 kg\r
B. C\r
4430 kg\r
C. D\r
3800 kg\r
D. A\r
4220 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00023\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
The annex shows the fuel breakdown for a flight from VOGO (Goa) to EGCC (Manchester). The pilots decide to carry an extra 1500 kg of fuel due to weather at the destination. Using a fuel flow of 4.6 tonnes per hour, how much extra holding time in minutes will this extra fuel give at the destination of EGCC, if required?\r
\r
Images:\r
- images/AT00023_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Fuel flow of 4600 kg per hour is given.\r
If you check the table extra 1000 kg of fuel has a penalty of 236 kg fuel. This means it costs 236 kg of fuel to carry an extra 1000 kg of fuel.\r
Therefore extra 1500 kg of fuel will cause 1.5 x 236 = 354 kg fuel penalty.\r
It will leave us 1500 - 354 = 1146 kg of usable fuel for holding.\r
1146/4600 = 0.25 hours, which, when multiplied by 60, equates to 15 min of fuel burn.\r
\r
Explanation Images:\r
- images/explanation_AT00023_img_1.png\r
\r
Options:\r
A. A\r
24 min\r
B. B\r
28 min\r
C. D\r
20 min\r
D. C\r
15 min ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00024\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
You are flying a heading of 020° with a TAS of 180 kt. If the wind is from 060° at 30 kt, what will be your drift angle and ground speed?\r
\r
Explanation:\r
Refer to figures.\r
For this question using your Navigation/Flight computer, apply the following steps:\r
Place the centre dot over TAS 180 kt.\r
Rotate the disk until wind direction 060o is under the True index.\r
Mark wind velocity 30 kt below the centre dot.\r
Rotate the disc until the heading 020o is under the True index.\r
The mark shows a drift 7o left and Groundspeed 158 kt.\r
\r
Explanation Images:\r
- images/explanation_AT00024_img_1.png\r
- images/explanation_AT00024_img_2.png\r
\r
Options:\r
A. A\r
6ºL; 155 kt\r
B. C\r
8ºL; 158 kt\r
C. D\r
6°L; 157 kt\r
D. B\r
7°L; 158 kt ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00025\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
If the Pre determined Point PDP procedure has to be applied for a Commercial Air Transport flight, the remaining fuel at the PDP must be sufficient for continuation to\r
\r
Explanation:\r
Predetermined point (PDP)\r
This procedure is used when there is not enough fuel tank capacity to fly first to the destination airport and then to the alternate airport and still have final reserve fuel on board. A predetermined point is selected along the route at which the crew decides whether continuing to the intended destination reasonably assures successful landing or whether the alternate destination is a safer choice.\r
Regulation (EU) No 965/2012\r
AMC1 CAT.OP.MPA.150(b) Fuel policy\r
(c) Predetermined point (PDP) procedure\r
If the operator’s fuel policy includes planning to a destination alternate aerodrome where the distance between the destination aerodrome and the destination alternate aerodrome is such that a flight can only be routed via a predetermined point to one of these aerodromes, the amount of usable fuel, on board for departure, should be the greater of (c)(1) or (c)(2):\r
(1) The sum of:\r
(i) taxi fuel;\r
(ii) trip fuel from the departure aerodrome to the destination aerodrome, via the predetermined point;\r
(iii) contingency fuel calculated in accordance with (a)(3);\r
(iv) additional fuel if required, but not less than:\r
(A) for aeroplanes with reciprocating engines, fuel to fly for 45 minutes plus 15 % of the flight time planned to be spent at cruising level or 2 hours, whichever is less; or\r
(B) for aeroplanes with turbine engines, fuel to fly for 2 hours at normal cruise consumption above the destination aerodrome, this should not be less than final reserve fuel; and\r
(v) extra fuel if required by the commander.\r
(2) The sum of:\r
(i) taxi fuel;\r
(ii) trip fuel from the departure aerodrome to the destination alternate aerodrome, via the predetermined point;\r
(iii) contingency fuel calculated in accordance with (a)(3);\r
(iv) additional fuel if required, but not less than:\r
(A) for aeroplanes with reciprocating engines: fuel to fly for 45 minutes; or\r
(B) for aeroplanes with turbine engines: fuel to fly for 30 minutes at holding speed at 1 500 ft (450 m) above the destination alternate aerodrome elevation in standard conditions, this should not be less than final reserve fuel; and\r
(v) extra fuel if required by the commander.\r
\r
Options:\r
A. A\r
the destination and afterwards to the departure.\r
B. C\r
either the destination or the departure.\r
C. D\r
the destination and afterwards to the alternate.\r
D. B\r
either the destination or the alternate. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00026\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to VFR Chart ED-4 from the Jeppesen GSPRM 2017.\r
For an aircraft flying VFR from Straubing (EDMS) aerodrome (N48°54.0’ E012°31.1’) to Linz International (LOWL) aerodrome (N48°14.1’ E014°11.3’), what is the ideal cruise level between the following options?\r
\r
Images:\r
- images/AT00026_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Firstly, find the exact position of the two aerodromes, using the coordinates given, draw a straight line as a route between them and examine each statement carefully. Before the route is recorded on the flight plan, we need to consider the altitude to fly at. The Minimum Grid Area Altitudes along the route are 5 400 ft, 7 200 ft and 4 100 ft. For this VFR flight, the minimum safe altitude along the whole route is 7 200 ft. But, we have to also consider the ICAO VFR cruising altitudes and select an appropriate altitude for this easterly magnetic track. According to the ICAO VFR semi-circular rule, for an easterly magnetic track, Odd FLs/Altitudes + 500 ft must be followed (3 500 ft, 5 500 ft, 7 500 ft, 9 500 ft etc.). So, a cruise altitude of 9 500 ft can be followed, which apart from being according to the ICAO rule, it provides enough obstacle clearance too. The entire route can be flown at a lower altitude, such as 7 500 ft, but 9 500 ft is the altitude that provides the minimum obstacle clearance appropriate to the destination between the available options.\r
\r
Explanation Images:\r
- images/explanation_AT00026_img_1.png\r
\r
Options:\r
A. A\r
FL090\r
B. C\r
FL105\r
C. D\r
FL070\r
D. B\r
FL095 ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00027\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
You are flying an ILS approach with a course of 245º(M) and an approach speed of 115 kt. The tower gives a wind of 280º/18 kt. In order to maintain the approach track, the nose of the aircraft has to be corrected (1)_____ with a corresponding groundspeed of (2)_____.\r
\r
Explanation:\r
Refer to figure.\r
The Drift and Groundspeed can be found using the wind side of a suitable flight computer.\r
First, set the wind vector and TAS\r
Set wind direction 280º(M) under the "TRUE INDEX" index at the top.\r
Mark the wind velocity 18 kt above from the centre point. (Any speed can be at the center point as long as you mark the point on the display 18 kts above the center.)\r
The ground speed is 100 kt and the wind correction angle is 5 degrees to the right.\r
\r
Explanation Images:\r
- images/explanation_AT00027_img_1.png\r
\r
Options:\r
A. A\r
(1) 6° to the right; (2) 129 kt\r
B. C\r
(1) 5° to the left; (2) 133 kt\r
C. D\r
(1) 6° to the left; (2) 108 kt\r
D. B\r
(1) 5° to the right; (2) 100 kt ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00028\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
The sector time from WPT C to DEST in line 4 of the Navigation Plan is (1) _____, and the accumulated time to the ALTN in line 5 is (2) _____.\r
\r
Images:\r
- images/AT00028_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
The question asks for the estimated (planned) sector and accumulated times, because all the given times until WPT C are based on estimated (planned) Groundspeeds.\r
Sector time from C to DEST: Sector distance from C to DEST / Est. GS = 15 NM/80 kt x 60 = 11 min.\r
Sector time from DEST to ALTN: Sector distance from DEST to ALTN / Est GS = 20 NM/60 kt x 60 = 20 min. Thus, the accumulated time at ALTN will be: Accumulated time at B + Sector time from B to C + Sector time from C to DEST + Sector time from DEST to ALTN = 29 min + 25 min + 11 min + 20 min = 85 min or 1hr and 25 min.\r
\r
Explanation Images:\r
- images/explanation_AT00028_img_1.png\r
\r
Options:\r
A. B\r
(1) 8 minutes; (2) 46 minutes\r
B. C\r
(1) 8 minutes; (2) 1 hour and 15 minutes\r
C. D\r
(1) 11 minutes; (2) 56 minutes\r
D. A\r
(1) 11 minutes; (2) 1 hour and 25 minutes ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00029\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Given the following information for a Commercial Air Transport operation, calculate the maximum possible Extra Fuel, including any fuel penalty, that can be uplifted.\r
MTOM: 233 000 kg\r
MLM: 182 000 kg\r
MZFM: 170 000 kg\r
DOM: 122 550 kg\r
Traffic Load: 43217 kg\r
Trip Fuel: 45854 kg\r
Planned T/O Fuel: 51616 kg\r
Taxi Fuel: 300 kg\r
Fuel penalty for carrying Extra Fuel: 394 kg per 1000 kg of Extra Fuel\r
Fuel tank capacity: 110 000 kg\r
\r
Explanation:\r
In order to find out the amount of fuel which can be uplifted you have to calculate the MTOM, MLM and tank capacity limitation\r
Note: MZFM does not limit fuel.\r
BASED ON MTOM:\r
MTOM – (ATOM) = 233 000 kg - 217 383 kg = 15 617 kg\r
ATOM = DOM + Traffic Load + Take Off fuel = 122 550 kg + 43 217 kg + 51 616 kg = 217 383 kg\r
BASED ON MLM:\r
MLM – Landing mass = 182 000 kg - 171 529 kg = 10 471 kg\r
LM = ATOM - Trip fuel = 217 383 kg - 45 854 kg = 171 529 kg\r
On top of this calculation, for the MLM limitation we have to apply the fuel penalty - which will be burned off during the flight\r
Rule of thumb: to calculate fuel penalty, use the following formula:\r
(MLM extra / 1000) x Y\r
- where "Y" is the variable given by the question, in this case = 394\r
(10 471/1000) x 394 = 4126 kg\r
Extra fuel that can be loaded is the sum of MLM extra (10 471 lb) and fuel penalty:\r
10 471 kg + 4126 kg = 14 597 kg\r
=> The most restricting value in based on MLM 14 597 kg\r
\r
Options:\r
A. A\r
10471 kg\r
B. B\r
4233 kg\r
C. D\r
15617 kg\r
D. C\r
14597 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00030\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
When completing an ATC flight plan for a flight commencing under IFR but possibly changing to VFR, the letters entered in Item 8 (FLIGHT RULES) would be:\r
\r
Explanation:\r
Refer to figure.\r
(Source ICAO Doc 4444)\r
Contents of a Flight Plan\r
Item 8 - FLIGHT RULES AND TYPE OF FLIGHT (2 characters)\r
Insert in item 8 one of the following letters to denote the category of flight rules with which the pilot intends to comply:\r
I if it is intended that the entire flight will be operated under the IFR\r
V if it is intended that the entire flight will be operated under the VFR\r
Y if the flight initially will be operated under the IFR, followed by one or more subsequent changes of flight rules\r
Z if the flight initially will be operated under the VFR, followed by one or more subsequent changes of flight rules\r
\r
Explanation Images:\r
- images/explanation_AT00030_img_1.png\r
- images/explanation_AT00030_img_2.png\r
- images/explanation_AT00030_img_3.png\r
\r
Options:\r
A. A\r
N/S\r
B. B\r
G\r
C. D\r
X\r
D. C\r
Y ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00031\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Which option is correct as regards checking the availability of the GNSS service for flights that will rely on GNSS information for guidance?\r
\r
Explanation:\r
Global Navigation Satellite System (GNSS) refers to a constellation of satellites providing signals from space that transmit positioning and timing data to GNSS receivers. The receivers then use this data to determine location.\r
The GNSS system requires a "notional" constellation, a design minimum to make the system work.\r
Thus, it is important, before flight, to check that there will be enough satellites visible for an accurate position at all stages of the flight.\r
This GNSS achievability can be verified by checking NOTAMs and the notice advisory to NANU messages, which provide updates on the GPS constellation.\r
\r
Options:\r
A. B\r
The availability of satellites is dependent on ground-based navigation aids.\r
B. C\r
The availability of satellites is dependent on the aircraft's equipment.\r
C. D\r
Satellites may NOT be available due to terrain and/or antenna masking.\r
D. A\r
Satellites may NOT be available due to the status of the constellation. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00032\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
You are flying local at EDNA Airport and the radio station is unserviceable there. You need to know the height of the cloud base, visibility, and runway in use at Munich. What is the best frequency to use for this information?\r
\r
Images:\r
- images/AT00032_img_1.png\r
\r
Explanation:\r
The ATIS (Automatic Terminal Information Service) is a continuous broadcast of recorded aeronautical information at airports. It provides pilots with essential information, including weather conditions, runway in use, available approaches, and any other pertinent information that may affect flight operations.\r
The cloud base information is obtained from the ATIS. In this case, Munich ATIS.\r
\r
Options:\r
A. A\r
Erding Tower, 122.10\r
B. B\r
Munich Info, 120.65\r
C. C\r
Munich Weather Radar, 121.20\r
D. D\r
Munich ATIS, 123.12 ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00033\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure or CAP file 4.3.1.a.\r
Using the simplified Flight Planning Charts, given the following information:\r
Trip distance: 300 NM\r
ISA deviation: +10ºC\r
Average wind: 75 kt headwind\r
Pressure altitude: 29 000 ft\r
Estimated Landing Weight: 40 000 kg\r
Long Range Cruise\r
Determine the fuel required.\r
\r
Images:\r
- images/AT00033_img_1.png\r
\r
Explanation:\r
The Simplified Planning Charts can be used to determine the estimated trip time and the fuel required from the brakes release point:\r
1. Start with the trip distance (300 NM).\r
2. Travel vertically to the wind component reference line.\r
3. Follow the grid lines to reach the appropriate wind component (75 kt headwind).\r
4. From this point continue vertically to intercept the appropriate Cruise Pressure Altitude grid line (29 000 ft).\r
5. From this intersection, travel right horizontally to the Landing Weight grid reference line.\r
6. Travel from the reference line to intersect the Landing Weight input (40 000 kg).\r
7. Continue horizontally right to the right vertical axis to read the fuel required (2480 kg)\r
\r
Explanation Images:\r
- images/explanation_AT00033_img_1.png\r
\r
Options:\r
A. A\r
2000 kg\r
B. B\r
2580 kg\r
C. D\r
1700 kg\r
D. C\r
2480 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00034\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
When reviewing the wind charts in the briefing room, you notice that the average wind in cruise will be 25 kt tailwind. Given following data, what will be the flight time to destination?\r
Time to top of climb: 30 min\r
Cruise leg: 740 NM\r
FL380\r
TAS: 460 kt\r
ISA: -10°C\r
Time to from top of descent to landing: 22 minutes\r
\r
Explanation:\r
Let's begin by finding the cruise groundspeed:\r
Cruise GS = TAS + tailwind = 460 kt + 25 kt = 485 kt\r
Now, with the groundspeed determined, we can compute the cruising flight time:\r
Time = (Distance ÷ GS)\r
Time = 740 NM ÷ 485 kt = 1.52577 hours = 91.55 minutes\r
Finally, we can calculate the flight time to the destination:\r
Flight time to destination = Time to top of climb + cruise + Time from top of descent to landing\r
Flight time to destination = 30 minutes + 91.55 minutes + 22 minutes = 143.8 minutes\r
Flight time to destination = 2 hours 24 minutes\r
\r
Options:\r
A. A\r
1 h 36 mins\r
B. B\r
1 h 42 mins\r
C. D\r
2 h 34 mins\r
D. C\r
2 h 24 mins ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00035\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to DUBROVNIK - charts 19-1 and 19-2 from Jeppesen GSPRM 2017. How many VFR arrivals to Dubrovnik are published?\r
\r
Images:\r
- images/AT00035_img_1.png\r
- images/AT00035_img_2.png\r
\r
Explanation:\r
There are 5 reporting points in the chart refer to A2, F2, C2, D2 and E5, all published to reporting point B2.\r
\r
Options:\r
A. B\r
4\r
B. C\r
1\r
C. D\r
8\r
D. A\r
5 ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00036\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Given the following NOTAM information, what operational restriction can be expected for ENTRY/EXIT N4W?\r
>>> EGLL LONDON HEATHROW RWY 09RL/27LR <<< MLS SERVING RUNWAY 09R IS NOW CAT 1: NOTAM EG/A0513/16 RWY 09R/27L ENTRY/EXIT N4W CLOSED DUE TO WIP: NOTAM EG/A0506/16 >>> END OF BULLETIN <<<\r
\r
Explanation:\r
This question refers to this section: "CLOSED DUE TO WIP".\r
WIP means Work in Progress\r
\r
Options:\r
A. A\r
Clearance is required due to Work in Progress.\r
B. B\r
Out of service due to Water in Patches.\r
C. D\r
Clearance is required due to Water in Patches.\r
D. C\r
Out of service due to Work in Progress. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00037\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
Due to operational requirements, fuel must be tankered on departure from the aerodrome.\r
Given a departure/destination fuel price ratio of 0.93 and the provided data, determine the optimum amount of fuel that can be tankered:\r
Cruise flight level: FL350\r
Air distance to be covered: 2 000 NM\r
Planned Take-Off Mass: 180 000 kg (with a minimum prescribed fuel quantity of 30 000 kg that includes a Trip Fuel of 22 000 kg)\r
Maximum Landing Mass: 170 000 kg\r
Maximum Take-Off Mass: 210 000 kg\r
Maximum tank capacity: 40 000 kg\r
\r
Images:\r
- images/AT00037_img_1.png\r
- images/AT00037_img_2.png\r
\r
Explanation:\r
Refer to figure.\r
[1] Enter the graph with the fuel price ratio set at 0.93.\r
[2] Move horizontally to the Air distance of 2 000 NM.\r
[3] Then, drop vertically to locate the Optimum weight at 184 000 kg. The Planned Takeoff Mass (TOM) is specified as 180 000 kg. Therefore, this indicates that they may be able to tanker 4 000 kg of fuel.\r
Next, we need to assess the feasibility of tankering an additional 4 000 kg of fuel by considering tank capacity, Maximum Takeoff Mass (MTOM), and Maximum Landing Mass (MLM) limitations:\r
The tank capacity is 40 000 kg, and the planned fuel is 30 000 kg, indicating that tankering 4 000 kg is feasible.\r
Considering the MTOM of 210 000 kg, tankering is also permissible within this constraint.\r
Calculating the Planned Landing Mass (PLM) as 180 000 kg - 22 000 kg (trip fuel) = 158 000 kg. The MLM is 170 000 kg, indicating that tankering 4 000 kg is within limits.\r
\r
Explanation Images:\r
- images/explanation_AT00037_img_1.png\r
\r
Options:\r
A. A\r
10 000 kg\r
B. B\r
12 000 kg\r
C. C\r
30 000 kg\r
D. D\r
4 000 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00038\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to Alicante (LEAL) chart 13-4 from the Jeppesen GSPRM 2017.\r
An aircraft is approaching aerodrome Alicante (LEAL) following the 243° radial onto the ALT VOR/DME and receives clearance for the VOR Y Rwy 28 procedure. What is the Minimum Safe (Sector) Altitude (MSA)?\r
\r
Images:\r
- images/AT00038_img_1.png\r
\r
Explanation:\r
Refer to figures.\r
The Minimum Safe (Sector) Altitude (MSA) is printed on the instrument approach charts. It identifies the minimum altitude that provides a 1 000 ft vertical clearance above obstacles within 25 NM of the navigational facility. It may be given as one value or could be divided into sectors, each sector having a different value.\r
The MSA is for emergency use only and on the approach charts, it is depicted at the top right corner.\r
For this approach chart, the MSA is with reference to the ALT VOR/DME. Between the inbound magnetic bearings 060º and 175º, or between Radial 240º and Radial 355º correspondingly, the MSA is 5 900 ft within 25 NM.\r
Since the aircraft is approaching from Radial 243° (between R240º and R355º) , then the MSA is 5 900 ft.\r
\r
Explanation Images:\r
- images/explanation_AT00038_img_1.png\r
- images/explanation_AT00038_img_2.png\r
\r
Options:\r
A. B\r
3 500 ft\r
B. C\r
6 900 ft\r
C. D\r
3 000 ft\r
D. A\r
5 900 ft ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00039\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
What does the following NOTAM indicate?\r
Q EUAD/QOLAS/IV/M/E/000/004/5626N00214W001 A EUAD B FROM: 26 Jan 2016 17:32C TO: 26 Feb 2016 23:59 E AIR NAV OBST UK0150J492F BLDG INCH CAPE O/S MET MAST SINGLE LGT U/S, PSN 562624.274N 0021429.366W, ELEV 381FT AMSL\r
\r
Explanation:\r
This question refers to the following section of the NOTAM:\r
"Q EUAD/QOLAS/IV/M/E/000/004/5626N00214W001 A EUAD B FROM: 26 Jan 2016 17:32C TO: 26 Feb 2016 23:59 E AIR NAV OBST UK0150J492F BLDG INCH CAPE O/S MET MAST SINGLE LGT U/S, PSN 562624.274N 0021429.366W, ELEV 381FT AMSL"\r
Obstacle with light unserviceable.\r
Alternatively,\r
Here is the decoded information:\r
Q: This is a NOTAM identifier code.\r
EUAD: This refers to the area of the United Kingdom (FIR where the affected place, equipment or service is located).\r
QOLAS: This is the type of NOTAM, which stands for "Obstacle Limitation Surface."\r
IV: Traffic affected, in this case, IFR and VFR.\r
M: Purpose or significance of the NOTAM - Miscellaneous, not subject for a briefing, but available on request.\r
E: Flight phase affected - En-route.\r
000/004: The vertical limit of the obstacle is from 0 feet to 400 feet above ground level (AGL).\r
5626N00214W001: Coordinates and radius, indicates the coodinates and radius of the centre and size of the lateral limits of the place affectes by the NOTAM.\r
Item A) affected location: EUAD (four-letter ICAO aerodrome or FIR).\r
Item B) valid from: 26 Jan 2016 17:32.\r
Item C) valid to: 26 Feb 2016 23:59.\r
Item E) NOTAM message (AIR NAV OBST UK0150J492F BLDG INCH CAPE O/S MET MAST SINGLE LGT U/S, PSN 562624.274N 0021429.366W, ELEV 381FT AMSL): This is the description of the obstacle. It is a building located outside of the meteorological mast (MET MAST) at Inch Cape, with a single light (SINGLE LGT) out of service (U/S). The location of the building is specified in latitude and longitude coordinates, and the height of the obstacle is given as 381 feet above mean sea level (AMSL).\r
\r
Options:\r
A. A\r
A building has been removed.\r
B. B\r
A building has been put in place.\r
C. C\r
A lighted mast has been placed on a building.\r
D. D\r
An obstacle light is unserviceable. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00040\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
You are flying VFR to an aerodrome which only has GNSS procedures available. You check the availability of the satellites before departure. From what time must you ensure that you have full satellite availability so that you can proceed with your flight?\r
\r
Explanation:\r
Since you are flying VFR, it is not necessary to have GNSS availability during take-off or cruise as you are going to be navigating visually. The main concern in this scenario is making sure that you will have GNSS availability when you actually need it which is during the approach phase. Since the approach phase starts at the IAF, this is the time from which we must ensure we have full satellite availability.\r
Flying a GNSS approach as a VFR flight, still requires you to have visual reference to the ground and the runway. It still demands that you meet the requirements in terms of visibility and separation from clouds.\r
\r
Options:\r
A. A\r
Before the planned ToD (14:40)\r
B. C\r
1 hour before your flight (12:00)\r
C. D\r
Before taking-off (13:00)\r
D. B\r
At the planned IAF (14:50) ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00041\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
An aircraft is flying at FL035 above an airfield with an elevation of 1416 ft. If the airfield QNH is 1025 hPa, and the temperature is 12°C below ISA, what is the true height above the aerodrome datum?\r
(Assume 30 ft per hPa.)\r
\r
Explanation:\r
Refer to figure.\r
In this question, we are given a pressure altitude (in the form of a flight level) and are asked for the terrain clearance, therefore we need to determine the corresponding true altitude.\r
The first step is to compute the pressure correction by considering the deviation from the standard mean sea level pressure of 1013 hPa: 1025 hPa - 1013 hPa = 12 hPa. The question provides a barometric lapse rate near the surface of 30 ft/hPa, the pressure correction can be calculated as follows: Pressure correction = 12 hPa x 30 ft/hPa = ­­­360 ft. This value needs to be added to the pressure altitude as per the rules below:\r
Indicated altitude = 3500 ft + 360 ft = 3860 ft.\r
Next, we need to determine the temperature correction. The ISA deviation is ISA -12°C. For temperature correction, the airfield elevation must be taken into account: 3860 ft - 1416 ft = 2444 ft. Based on the 4% rule and its calculation mentioned in the rules below, the height correction for the temperature can be calculated as follows: Height correction for temperature = 4 × (-12) × (2444/1000) = 117 ft.\r
The temperature correction is subtracted from the indicated altitude as per the rules below, to give a true altitude of 3860 ft - 117 ft = 3743 ft.\r
Thus, the true height of the aircraft above the airfield datum will be: True Altitude - Airfield datum elevation = 3743 ft - 1416 ft = 2327 ft, which is very close to 2330 ft.\r
RULES. The following rules should be considered for altimetry calculations:\r
All calculations are based on rounded pressure values to the nearest lower hPa.\r
The value for the barometric lapse rate between MSL and 500 hPa to be used is 30 ft/hPa as an acceptable approximation of the barometric lapse rate.\r
To determine the true altitude/height, the following rule of thumb, called the ‘4 %-rule’, shall be used: the altitude/height changes by 4% for each 10°C temperature deviation from ISA.\r
For simplification: Height correction for the temp = 4 × (ISA DEV) × Indicated alt/1000 = ___ ft\r
If no further information is given, the deviation of the outside-air temperature from ISA is considered to be the same throughout the whole layer.\r
The elevation of the aerodrome has to be taken into account. The temperature correction has to be considered for the layer between the station (usually an aerodrome) and the position of the aircraft.\r
IF\r
THEN\r
Higher pressure\r
Indicated Altitude > Pressure Altitude\r
Lower pressure\r
Indicated Altitude < Pressure Altitude\r
Warmer than ISA\r
True Altitude > Indicated Altitude\r
Colder than ISA\r
True Altitude < Indicated Altitude\r
Definitions\r
Pressure Altitude: The altimeter indication with standard pressure (1013.2 hPa) set.\r
Indicated Altitude: The altimeter indication with local QNH set.\r
True altitude: The actual altitude of the aircraft above mean sea level.\r
\r
Explanation Images:\r
- images/explanation_AT00041_img_1.png\r
\r
Options:\r
A. A\r
3680 ft\r
B. B\r
1640 ft\r
C. C\r
4050 ft\r
D. D\r
2330 ft ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00042\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
The annex depicts a pilot's flight plan/log from LPFR to LEMG extracted by a flight planning software. When approaching VJF, the pilots realizes abnormal airframe vibrations and reduces speed from VJF. When overhead Tarifa, the pilot calculates that according to the new speed, the flight time from Tarifa to LEMG will be 47 minutes. Taking into account the latest fuel flow after VJF, the fuel consumption will be...\r
\r
Images:\r
- images/AT00042_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
The Planned Remaining fuel at LEMG is: Planned Block fuel - Planned Fuel Consumed = 430 kg - 309.6 kg = 120.4 kg.\r
Actual Fuel Flow from VJF to Tarifa: 40 kg in 17 min = 141 kg/hr.\r
Fuel consumption from Tarifa to LEMG: Revised Time from Tarifa to LEMG x Actual Fuel Flow from VJF to Tarifa = 47/60 hr x 141 kg/h = 111 kg.\r
Actual Remaining fuel at LEMG: Actual Fuel On-Board at Tarifa - Fuel consumption from Tarifa to LEMG = 207 kg - 111 kg = 96 kg.\r
Thus, the fuel flow may be less, due to the decreased speed, but the fuel consumption will be greater, since the fuel remaining at LEMG will be: Planned Remaining fuel at LEMG - Actual Remaining fuel at LEMG = 120.4 kg - 96 kg = 24 kg Less than planned.\r
\r
Explanation Images:\r
- images/explanation_AT00042_img_1.png\r
\r
Options:\r
A. A\r
lower since the lower speed gives a lower fuel flow which results in landing with 24 kg more fuel than planned in LEMG.\r
B. C\r
lower since the fuel flow has reduced to 141 kg/h giving 120 kg fuel remaining when landing in LEMG.\r
C. D\r
greater since the fuel flow has increased to 163 kg/h giving 120 kg fuel remaining when landing in LEMG.\r
D. B\r
greater since the effect of the reduced fuel flow is offset by the lower speed giving 24 kg less fuel than planned in LEMG. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00043\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
The minimum altitude for the route being flown is 7000 ft. Considering headwinds ranging from 9 to 16 knots, you need to determine the highest ground mileage per gallon of fuel. The true airspeeds (TAS) provided range between 169 and 175 knots, and the fuel flow is constant at 15.5 GPH at all altitudes. Which altitude provides the highest ground mileage per GPH?\r
\r
Explanation:\r
Let's calculate all of the options to find the nautical miles covered per gallon of fuel at the different altitudes:\r
"6000 ft - TAS: 175 knots, Headwind: 9 knots"\r
175 kt - 9 kt = 166 kt\r
166 kt / 15.5 GPH = 10.7 NM per gallon\r
"7000 ft - TAS: 173 knots, Headwind: 10 knots"\r
173 kt - 10 kt = 163 kt\r
163 kt / 15.5 GPH = 10.5 NM per gallon\r
"8000 ft - TAS: 171 knots, Headwind: 12 knots"\r
171 kt - 12 kt = 159 kt\r
159 kt / 15.5 GPH = 10.3 NM per gallon\r
"9000 ft - TAS: 169 knots, Headwind: 16 knots"\r
169 kt - 16 kt = 153 kt\r
153 kt / 15.5 GPH = 9.9 NM per gallon\r
From this we can see that the altitude that provides the highest ground mileage per gallon is 6000 ft. This is the correct answer.\r
Note: The question states that the minimum altitude for the route is 7000 ft, so it is very strange that correct answer is below that altitude. Please report the correct answer to us, if you get this question in your exam.\r
\r
Options:\r
A. A\r
7000 ft - TAS: 173 knots, Headwind: 10 knots\r
B. B\r
8000 ft - TAS: 171 knots, Headwind: 12 knots\r
C. C\r
9000 ft - TAS: 169 knots, Headwind: 16 knots\r
D. D\r
6000 ft - TAS: 175 knots, Headwind: 9 knots ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00044\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to Jeppesen GSPRM Training Route Manual - Chart "E LO 2".\r
On a flight on airway P600 you are passing TURNBERRY VOR (TRN, N55°19' W004° 47') and intersections GIRVA, TUNSO and BLACA. What is the MOCA between GIRVA and TUNSO?\r
\r
Images:\r
- images/AT00044_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
5000T (with suffix “T”) is the Minimum Obstruction Clearance Altitude (MOCA).\r
FL60 (no prefix or suffix) is the Minimum Enroute Altitude (MEA).\r
Note: Both the MEA and MOCA provide the same obstruction clearance.\r
The only difference is that the Nav aid signal coverage is provided for the entire airway segment at the MEA.\r
But the MOCA provides signal coverage only within 22 nm of the nav aid.\r
\r
Explanation Images:\r
- images/explanation_AT00044_img_1.png\r
\r
Options:\r
A. A\r
FL60\r
B. B\r
6000 ft\r
C. D\r
FL70\r
D. C\r
5000 ft ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00045\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to Jeppesen GSPRM Training Route Manual - Chart "E LO 2".\r
The section of a routing is via airway Y96 from NORBO to TALLA (TLA, N55°30' W003°21'). Find the true course to TLA?\r
\r
Images:\r
- images/AT00045_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Courses on the chart are Magnetic tracks.\r
Read Magnetic track 099° from NORBO\r
Compass to true - add East.\r
Magnetic Variation line running through the middle of the Airway = 003° W\r
099° - 003° = 096°\r
See annex for location of this data.\r
\r
Explanation Images:\r
- images/explanation_AT00045_img_1.png\r
\r
Options:\r
A. A\r
095º\r
B. B\r
099°\r
C. D\r
102°\r
D. C\r
096° ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00046\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
Given the following information, calculate Taxi fuel required for a Commercial Air Transport flight?\r
Planned APU usage at the parking position: 25 minutes prior to taxi\r
Planned taxi time: 10 minutes at the departure aerodrome and 5 minutes at the destination aerodrome\r
\r
Images:\r
- images/AT00046_img_1.png\r
\r
Explanation:\r
In the regulation below, it is stated that the taxi fuel is calculated for the departure aerodrome only, therefore don't get confused by the question which also mentions taxi time at destination. Additionally we have to consider APU fuel:\r
In the attached document we can see that the taxi fuel is 11 kg/min and that the APU consumes 115 kg/h:\r
10 minutes × 11 kg/min = 110 kg\r
115 kg / 25 min = 48 kg\r
110 kg + 48 kg = 158 kg\r
EASA AIR OPS - Part-CAT AMC1 CAT.OP.MPA.150(b) Fuel policy - Planning Criteria - Aeroplanes\r
The operator should base the defined fuel policy, including calculation of the amount of fuel to be on board for departure, on the following planning\r
criteria:\r
(a) Basic procedure\r
The usable fuel to be on board for departure should be the sum of the following:\r
(1) Taxi fuel, which should not be less than the amount expected to be used prior to take-off. Local conditions at the departure aerodrome and auxiliary power unit (APU) consumption should be taken into account. [...]\r
\r
Options:\r
A. A\r
165 kg\r
B. C\r
110 kg\r
C. D\r
213 kg\r
D. B\r
158 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00047\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to Jeppesen GSPRM Training Route Manual - ALICANTE - Chart 10-2B.\r
The distance from KOVAM to BESOR is:\r
\r
Images:\r
- images/AT00047_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Let's start by locating KOVAN (non-compulsory waypoint) and BESOR (compulsory waypoint).\r
The distance from KOVAN to BESOR can be taken directly from the chart => about half way through this route, you can read "61" which means 61 NM.\r
"FL70", underneath "61", indicates the Minimum En-route Altitude (MEA) for the route.\r
\r
Explanation Images:\r
- images/explanation_AT00047_img_1.png\r
\r
Options:\r
A. B\r
70 NM\r
B. C\r
82 NM\r
C. D\r
37 NM\r
D. A\r
61 NM ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00048\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to ALICANTE - charts 19-1, 19-2 and 19-3 from Jeppesen GSPRM 2017. Along which route do you proceed if you experience a communication failure?\r
\r
Images:\r
- images/AT00048_img_1.png\r
- images/AT00048_img_2.png\r
- images/AT00048_img_3.png\r
\r
Explanation:\r
Refer to figures.\r
According to the VFR chart ALICANTE 19-1, a flight path with a dotted line is depicted for "ACFT with Radio Failure", which lies East off the South Route, with a maximum altitude of 800 ft.\r
Also, according to the Notes on page 19-3, it states that: ACFT with communication failure must proceed via REPs SW to S at 800' MAX ALT and expect visual signals clearance from TWR. The fore mentioned flight path from REP "SW" to REP "S", passes East off the South Route.\r
\r
Explanation Images:\r
- images/explanation_AT00048_img_1.png\r
- images/explanation_AT00048_img_2.png\r
\r
Options:\r
A. A\r
Tabarca route\r
B. C\r
North corridor\r
C. D\r
North route\r
D. B\r
East of South route ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00049\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Given the following information for a Commercial Air Transport operation, calculate the maximum possible Extra Fuel to be uplifted.\r
Maximum Zero Fuel Mass MZFM: 2000 kg\r
Actual Zero Fuel Mass AZFM: 2000 kg\r
Regulated Take-Off Mass RTOM: 3000 kg\r
Maximum Landing Mass MLM: 2200 kg\r
Fuel Tank Capacity: 550 kg\r
Trip Fuel TF: 190 kg\r
Minimum Block Fuel (BF): 300 kg\r
\r
Explanation:\r
In order to find out the amount of fuel which can be uplifted you have to calculate the MTOM, MLM and tank capacity limitation\r
Note: MZFM does not limit fuel.\r
BASED ON RTOM:\r
RTOM – (ATOM) = 3000 kg - 2300 kg = 700 kg\r
ATOM = AZFM + Take Off fuel = 2000 kg + 300 kg = 2300 kg\r
Since we are not provided with taxi fuel => we will assume our take off fuel equals our block fuel.\r
BASED ON MLM:\r
MLM – Landing mass = 2200 kg - 2110 kg = 90kg\r
LM = ATOM - Trip fuel = 2300 kg - 190 kg = 2110 kg\r
BASED ON TANK CAPACITY:\r
550 kg - 300 kg = 250 kg\r
=> The most restricting value in based on MLM 90 kg.\r
\r
Options:\r
A. A\r
Not able to carry Extra Fuel.\r
B. C\r
250 kg.\r
C. D\r
60 kg.\r
D. B\r
90 kg. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00050\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
According to the following NOTAM, what is the maximum height of the balloon involved?\r
Q) EUAD/QWCLW/IV/M/W/000/004/5339N00135W001 A) EUAD B) FROM: 15/12/14 13:48C) TO: 16/03/06 18:30 E) UNMANNED CAPTIVE BALLOON IN LOW FLYING AREA AVOIDANCE AREA WI 1NM RADIUS. MAX HEIGHT 200FT AGL/324FT AMSL. 15/12/06/OPSLF. LOWER: Surface, UPPER: 324 Feet AMSL SCHEDULE: DEC 14 1348-1600, DEC 15-31 0700-1600, JAN 01-31 0700-1630, FEB 01-29 0700-1730, MAR 01-06 0600-1830\r
\r
Explanation:\r
The NOTAM below:\r
Q) EUAD/QWCLW/IV/M/W/000/004/5339N00135W001 A) EUAD B) FROM: 15/12/14 13:48C) TO: 16/03/06 18:30 E) UNMANNED CAPTIVE BALLOON IN LOW FLYING AREA AVOIDANCE AREA WI 1NM RADIUS. MAX HEIGHT 200FT AGL/324FT AMSL. 15/12/06/OPSLF. LOWER: Surface, UPPER: 324 Feet AMSL SCHEDULE: DEC 14 1348-1600, DEC 15-31 0700-1600, JAN 01-31 0700-1630, FEB 01-29 0700-1730, MAR 01-06 0600-1830.\r
Correct Answer: 324 feet AMSL.\r
\r
Options:\r
A. A\r
The height is variable.\r
B. B\r
324 feet AGL.\r
C. C\r
200 feet AMSL.\r
D. D\r
324 feet AMSL. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00051\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Consider the following NOTAM. Which of the following statements correctly describes the content of item E?\r
QEDGG/QIXLT/I/BO/A/000/999/5002N00834E005 B FROM: 13/10/24 09:21 E ILS 25C LO, IDENT FR, 297KHZ, RANGE LIMITED TO 10NM. REF AIP AD2 EDDF 1-10 The range of the\r
\r
Explanation:\r
QEDGG/QIXLT/I/BO/A/000/999/5002N00834E005 B FROM: 13/10/24 09:21 E ILS 25C LO, IDENT FR, 297KHZ, RANGE LIMITED TO 10NM.\r
LLZ - localiser\r
LOC - localizer\r
LO - locator, outer\r
LM - locator, middle\r
Furthermore, given the frequency "297kHz" => this has to be a LOCATOR\r
Note: LCA - Local or locally or location or located.\r
\r
Options:\r
A. A\r
identification is limited to 10 NM.\r
B. B\r
localiser is limited to 10 NM.\r
C. C\r
ILS is limited to 10 NM.\r
D. D\r
locator is limited to 10 NM. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00052\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Given the following information, calculate the maximum attainable flight time and range.\r
Average fuel flow: 31.5 kg/h\r
Available fuel: 76 kg\r
TAS: 85 kt\r
Wind component: 20 kt tailwind\r
The flight time is (1) __ and the range is (2) __.\r
\r
Explanation:\r
Flight time = ((Available fuel)/(Average fuel flow) = (76 kg)/(31.5 kg/h) = 2.41 hrs = 2 hr and 25 min)\r
Ground speed = 85 + 20 (Tail wind) = 105 kts\r
Ground range = Flight time x GS\r
= 2.41 X 105 = 253 NM\r
\r
Options:\r
A. A\r
(1) 2 hours 41 minutes; (2) 282 NM\r
B. C\r
(1) 2 hours 41 minutes; (2) 157 NM\r
C. D\r
(1) 2 hours 25 minutes; (2) 205 NM\r
D. B\r
(1) 2 hours 25 minutes; (2) 253 NM ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00053\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure or CAP 697 Figure 3.4.\r
Given the following conditions and in order to complete a navigation plan, calculate the True Air Speed TAS during cruise, for a VFR flight with a multi engined piston aeroplane at FL075.\r
OAT: +10° C\r
Power: Economy\r
\r
Images:\r
- images/AT00053_img_1.png\r
\r
Explanation:\r
Vertical Line up from OAT +10° to FL75\r
Economy Power setting - Top right corner of the chart = 65%\r
Plot line across to 65%\r
Vertical Line down to read 171 kts\r
\r
Explanation Images:\r
- images/explanation_AT00053_img_1.png\r
\r
Options:\r
A. A\r
140 kt\r
B. B\r
156 kt\r
C. D\r
189 kt\r
D. C\r
171 kt ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00054\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
A Commercial Air Transport operator has a fleet of turbine engine aeroplanes. For this operator, an isolated aerodrome is one for which the alternate and final fuel reserve required to the nearest adequate destination alternate aerodrome is more than the fuel to fly for\r
\r
Explanation:\r
Statement from the regulation:\r
EASA PART CAT OP.MPA.183 - Fuel Scheme for Isolated aerodromes:\r
“Use of isolated aerodromes — aeroplanes (a) Using an isolated aerodrome as destination aerodrome with aeroplanes requires the prior approval by the competent authority.\r
An isolated aerodrome is one for which the alternate and final fuel reserve required to the nearest adequate destination alternate aerodrome is more than:\r
(1) for aeroplanes with reciprocating engines, fuel to fly for 45 minutes plus 15 % of the flying time planned to be spent at cruising level or 2 hours, whichever is less; or\r
(2) for aeroplanes with turbine engines, fuel to fly for 2 hours at normal cruise consumption above the destination aerodrome, including final reserve fuel. “\r
\r
Options:\r
A. B\r
45 minutes plus 15% of the flying time planned to be spent at cruising level or 2 hours, whichever is more.\r
B. C\r
2 hours at normal cruise consumption above the destination aerodrome, excluding Final Reserve Fuel.\r
C. D\r
45 minutes plus 15% of the flying time planned to be spent at cruising level or 2 hours, whichever is less.\r
D. A\r
2 hours at normal cruise consumption above the destination aerodrome, including Final Reserve Fuel. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00055\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
You are cruising at FL380 with a twin-engined jet aeroplane. Due to airspace restrictions ATC instructs you to reduce speed to Mach .786. Given the following information, what is the fuel you will use for the remainder of the cruise time?\r
Distance to Top-of-Descent: 310 NM\r
Aircraft mass: 60 000 kg\r
TAT: -22°C\r
Average wind component: 25 kt headwind\r
Consider a constant aircraft of mass 60 000 kg for calculation purposes.\r
\r
Images:\r
- images/AT00055_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Actual TAT at FL380 is -22o C, so it is above the standard TAT -32o C, given in the table, by 10o C.\r
According to the table given, at FL380 with .786 Mach speed, 60 000 kg mass and TAT -32o C, the TAS is 451 kt and the Fuel Flow per engine is 1 087 kg/hr.\r
To calculate the fuel flow required for the ground distance 310 NM, the actual time flown is required:\r
Actual time= Ground distance / Ground speed.\r
With a 25 kt headwind, the groundspeed will be 451 - 25 = 426 kt. Applying the note, the TAS must be increased by 1 kts for each degree above standard TAT. So, it becomes: 426 + 10 = 436 kt\r
The a/c will cover the ground distance 310 NM with 436 kt groundspeed in: 310/436 = 0.71 hour.\r
For 0.71 hr flight time, the a/c will burn: 1 087 x 0.71 = 772 kg per engine, so both engines will burn: 772 x 2 = 1 544 kg.\r
Applying the note, the fuel flow must be increased by 3% per 10o C above standard TAT. So, it becomes: 1 544 + (3% x 1 544) = 1 590 kg.\r
\r
Explanation Images:\r
- images/explanation_AT00055_img_1.png\r
\r
Options:\r
A. A\r
1 544 kg\r
B. B\r
837 kg\r
C. C\r
1 196 kg\r
D. D\r
1 590 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00056\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
An aircraft is flying under IFR using its FMS for area navigation. According to its FMS, the Estimated Time Over (ETO) a waypoint is 1443, but ATC has cleared the aircraft at 1446. After decreasing the groundspeed accordingly, what is the appropriate way of checking that the new speed is suitable to arrive overhead the waypoint at 1446?\r
\r
Explanation:\r
The FMC contains two main databases:\r
The navigation database, which among others includes the position of beacons, waypoints and airways.\r
The performance database, which is able to calculate maximum and optimum cruise altitudes, optimum speeds for climb, cruise and descent and the required thrust settings for each phase of flight.\r
The FMC has the ability to calculate speeds to arrive over a waypoint at a defined time, a selection known as Required Time of Arrival (RTA).\r
Using the two databases in combination, the FMC will give running estimates of time and fuel remaining over waypoints and at destination.\r
For this question, the Estimated Time Overhead (ETO) prediction is calculated based on the groundspeed and distance from the active waypoint, so the FMS will calculate a new ETO with the new groundspeed and distance to go, which can be compared against the time of the ATC clearance.\r
\r
Options:\r
A. A\r
The FMS gives a new transit time for the leg, which can be used to calculate the ETO.\r
B. B\r
The FMS gives a new speed and distance which can be used to calculate the ETO.\r
C. C\r
The FMS will give a new GS which can be compared against the ATC clearance.\r
D. D\r
The FMS will give a new ETO which can be compared against the ATC clearance. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00057\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to ALICANTE - charts 10-2D, 13-3 from Jeppesen GSPRM 2017.\r
An aircraft is flying on airway A-34 to Alicante / Spain (LEAL) and arrives at MAGAL for an approach on runway 28. What is the distance from the IAF to ALICANTE VOR?\r
\r
Images:\r
- images/AT00057_img_1.png\r
- images/AT00057_img_2.png\r
\r
Explanation:\r
Refer to figure.\r
Refer to 10-2D (STAR). Check note 4 denotes: "IAF for runway 28 when arriving via airways A-34, (U)L-150 and UP-34 northbound."\r
We are looking for runway 28, IAF = MAGAL. Below MAGAL you can find the answer: "(ATE R128/D21.1)"\r
Distance is 21.1 NM.\r
Note: The distance of 19.9 NM pertains solely to the segment from MAGAL to the initial VOR ALT (ALTET). However, please take into account that the question specifically refers to ATE (ALICANTE), so be sure to carefully consider note 4.\r
\r
Explanation Images:\r
- images/explanation_AT00057_img_1.png\r
\r
Options:\r
A. B\r
26 NM\r
B. C\r
45.4 NM\r
C. D\r
19.9 NM\r
D. A\r
21.1 NM ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00058\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
At 14:58 ATC instructs you to fly directly to OAL VOR/DME and reduce speed to M 0.76, for traffic separation purposes. Given the following information, what is the Revised ETA at OAL?\r
Distance to OAL via the flight-planned route: 120 NM\r
Direct distance to OAL: 90 NM\r
Magnetic Track to OAL from present position: 053°\r
Variation: 2°E\r
Pre-flight planned Mach: 0.80\r
Forecast Wind: 350°/40 kt\r
Actual Wind: 045°/65 kt\r
OAT: -35°C\r
ETA at OAL: 15:08\r
\r
Explanation:\r
Refer to figures.\r
This question asks for the Revised or Actual time of arrival at OAL VOR/DME, so use the actual data given below the answer:\r
1. Following the rhyme "Variation East, Magnetic Least", the True Track from present position to OAL is: 053o(M) + 2oE = 055o(T).\r
2. Using your Flight/Navigation computer find the actual TAS:\r
Rotate the inner dial until you see the "Mach No. Index" inside the airspeed correction window on the inner dial.\r
Line up the OAT -35°C opposite to the "Mach No. Index".\r
Reduded Mach number 0.76(76) on the inner scale, reads opposite TAS 456 kt.\r
3. Using again your Flight/Navigation computer find the Groundspeed:\r
Set wind direction to 045º under the "TRUE HEADING" index at the top.\r
Set the center point on the True Airspeed (TAS) of 456 kt.\r
Mark the wind velocity 65 kt down from the centre point.\r
Initially, set the True Track to 055º under the "TRUE HEADING" index.\r
Note that this heading would result in 2ºR drift and a track of 057º.\r
Reduce the heading value under the index until the heading plus the drift gives a track of 055º. This occurs at a heading of 053º with 1ºR drift.\r
The groundspeed for this track is approximately 395 kt.\r
4. The Revised flight time to OAL VOR/DME is given by the formula: Time = Direct Distance to OAL / Grounspeed = 90 NM / 395 KT = 0.23 hr or 13.8 min , rounded 14 min.\r
Therefore, the Revised ETA at OAL will be: 14:58 + 14 min = 15:12.\r
\r
Explanation Images:\r
- images/explanation_AT00058_img_1.png\r
- images/explanation_AT00058_img_2.png\r
\r
Options:\r
A. A\r
15:14\r
B. B\r
15:10\r
C. C\r
15:16\r
D. D\r
15:12 ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00059\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Given the following data, what is the TAS of the aeroplane?\r
FL390\r
OAT: ISA -10 C\r
Mach number : M 0.82\r
Wind component : -42 kt\r
\r
Explanation:\r
- METHOD 1: FORMULA\r
ISA temperature at FL390 = -56.5ºC\r
ISA - 10ºC\r
Therefore, OAT at FL390 = -66.5ºC\r
M = TAS / LSS\r
LSS = 38.95 x √ OAT (KELVIN)\r
TAS = M x 38.95 √ OAT (KELVIN)\r
TAS = 0.82 x 38.95 √ (-66.5 + 273) = 459 kt (Closest Option: 460 kt)\r
- METHOD 2: FLIGHT COMPUTER\r
(1) Airspeed window - Rotate to see "MACH No Index". Set OAT (-66.5ºC).\r
(2) Inner scale, find 8.2 (Mach 0.82).\r
(3) Read TAS on outer scale 460 kts.\r
\r
Options:\r
A. B\r
452 kt\r
B. C\r
440 kt\r
C. D\r
482 kt\r
D. A\r
460 kt ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00060\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
During the pre-flight preparation, the pilot calculates a take-off fuel of 53 US gallons. Considering a fuel density of 6 lb per US gallon, this equals…\r
\r
Explanation:\r
1 USG       6 lb\r
53 USG       x\r
X= 6*53 /1 =318 lb\r
1kg = 2.2 lb\r
So, 318 lb / 2.2  equals 144 kg.\r
\r
Options:\r
A. A\r
701 kg.\r
B. B\r
318 kg.\r
C. D\r
24 kg.\r
D. C\r
144 kg. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00061\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
You are flying from Ajaccio, Corsica to Grosseto, Italy. Using the in-flight actual groundspeed, what are the new ETAs for ELB and UPADU?\r
\r
Images:\r
- images/AT00061_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
The ATA at LIBLO is at 13:19 and the ATA at BTA is 13:31. So, the aircraft needs 12 minutes to cover a distance of 35 NM.\r
So, its Actual GS will be: Distance from LIBLO to BTA / Sector time = 35 NM/12 min x 60 = 175 kt.\r
Thus:\r
The new ETA at ELB will be: Sector time from BTA to ELB + ATA at BTA = 14 min (41 NM / 175 kt x 60) + 13:31 = 13:45\r
The new ETA at UPADU will be: Sector time from ELB to UPADU + ATA at ELB = 2 min (5 NM / 175 kt x 60) +13:45 = 13:47.\r
\r
Explanation Images:\r
- images/explanation_AT00061_img_1.png\r
\r
Options:\r
A. A\r
ELB 13:42 and UPADU 13:44\r
B. C\r
ELB 13:44 and UPADU 13:46\r
C. D\r
ELB 13:46 and UPADU 13:48\r
D. B\r
ELB 13:45 and UPADU 13:47 ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00062\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
An IFR flight is planned across terrain where the maximum elevation is 4385 ft. The forecast temperature is ISA +12° C, and the Minimum Obstacle Clearance required is 1500 ft. A nearby aerodrome elevation 875 ft reports a QNH of 1025 hPa.\r
What is the minimum flight level that could be planned for the cruise?\r
\r
Explanation:\r
Refer to figure.\r
The aircraft must fly at 5 885 ft (4 385 ft + 1 500 ft). This altitude must be the true altitude of the aircraft. This altitude must be corrected for any temperature ISA deviation and then any difference in pressure from standard (1013 hPa), to get the pressure altitude, allowing us to work out the lowest usable flight level.\r
The first step is to determine the temperature correction. The ISA deviation is ISA +12ºC. For the temperature correction, the airfield elevation must be taken into account: 5 885 ft - 875 ft = 5 010 ft. Based on the 4% rule and its calculation mentioned in the rules below, the height correction for the temperature can be calculated as follows: Height correction for temperature = 4 × (12) × (5 010/1 000) = 240 ft.\r
In this case, the temperature correction is subtracted from the true altitude as per the rules below (refer to the table below), to give an indicated altitude of 5 645 ft.\r
Next, we need to compute the pressure correction by considering the deviation from the standard mean sea level pressure of 1013 hPa: 1025 hPa - 1013 hPa = 12 hPa. Since the barometric lapse rate near the surface is 30 ft/hPa, the pressure correction can be calculated as follows: Pressure correction = 12 hPa x 30 ft/hPa = 360 ft. This value needs to be subtracted from the indicated altitude as per the rules below:\r
Pressure Altitude = 5 645 ft - 360 ft = 5 285 ft.\r
The Minimum Flight Level, which provides obstacle clearance, after both pressure and temperature correction, that must be selected is: FL60.\r
RULES. The following rules should be considered for altimetry calculations:\r
All calculations are based on rounded pressure values to the nearest lower hPa.\r
The value for the barometric lapse rate between MSL and 500 hPa to be used is 30 ft/hPa as an acceptable approximation of the barometric lapse rate.\r
To determine the true altitude/height, the following rule of thumb, called the ‘4 %-rule’, shall be used: the altitude/height changes by 4% for each 10°C temperature deviation from ISA.\r
For simplification: Height correction for the temp = 4 × (ISA DEV) × Indicated alt/1000 = ___ ft\r
If no further information is given, the deviation of the outside-air temperature from ISA is considered to be the same throughout the whole layer.\r
The elevation of the aerodrome has to be taken into account. The temperature correction has to be considered for the layer between the station (usually an aerodrome) and the position of the aircraft.\r
IF\r
THEN\r
Higher pressure\r
Indicated Altitude > Pressure Altitude\r
Lower pressure\r
Indicated Altitude < Pressure Altitude\r
Warmer than ISA\r
True Altitude > Indicated Altitude\r
Colder than ISA\r
True Altitude < Indicated Altitude\r
Definitions\r
Pressure Altitude: The altimeter indication with standard pressure (1013.2 hPa) set.\r
Indicated Altitude: The altimeter indication with local QNH set.\r
True altitude: The actual altitude of the aircraft above mean sea level.\r
\r
Explanation Images:\r
- images/explanation_AT00062_img_1.png\r
\r
Options:\r
A. A\r
FL50\r
B. B\r
FL40\r
C. C\r
FL80\r
D. D\r
FL60 ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00063\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to AMSTERDAM 10-2 chart from Jeppesen GSPRM 2017. An aircraft is departing from EDDG and is heading west. The aircraft experiences a critical fuel situation and cannot return to its departure airport. The crew decide to land at Amsterdam Airport. Which STAR should the crew expect? Choose the shortest STARs and the ones closest to the departure airport.\r
\r
Images:\r
- images/AT00063_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
The 2 STARs which are closest to Munster/Osnabruck airport and that have the shortest and most direct routing to Amsterdam airport are NORKU 2A and REKEN 2A.\r
The red line represents the routing via NORKU 2A. The green line represents the routing via REKKEN 2A.\r
The length of the STARs are:\r
NORKU 2A - 56.2 NM (Red line)\r
NORKU 2B - 77.4 NM\r
REKKEN 2A - 51.4 NM (Green line)\r
REKKEN 2B - 78 NM\r
\r
Explanation Images:\r
- images/explanation_AT00063_img_1.png\r
\r
Options:\r
A. A\r
NORKU 2B, REKKEN 2A\r
B. B\r
NORKU 2A, REKKEN 2B\r
C. D\r
NORKU 2B, REKKEN 2B\r
D. C\r
NORKU 2A, REKKEN 2A ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00064\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
A flight has been diverted off the planned route due to the bad weather. ATC clears the flight to re-join the planned route at TUSKA. The pilot wishes to decide early, if there is enough fuel to safely complete the flight or if a fuel diversion is needed, so he/she checks the fuel at 18:06 UTC. Following the data, what is minimum fuel required at 18:06 UTC to complete the planned flight?\r
Minimum fuel at TUSKA to complete the flight: 144 litres\r
Average fuel flow: 45 kg/h\r
ETO TUSKA: 18:43 UTC\r
Fuel density: 0.72 kg/lt\r
\r
Explanation:\r
You want to be at TUSKA 18:43 with 144 litres fuel on board. The time now is 18:06. You need 37 minutes of flight from now to TUSKA.\r
With Fuel flow = 45 kg/hour or 0.75 kg/min, you must have 0.75 x 37=27,75 kg of fuel or 28 kg.\r
With a fuel density of 0,72 kg/lt, the 28 kg = 38,5 litres.\r
So 144+39=183 litres.\r
\r
Options:\r
A. B\r
105 litres\r
B. C\r
172 litres\r
C. D\r
164 litres\r
D. A\r
183 litres ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00065\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to chart "E LO 2" from Jeppesen GSPRM 2017.\r
Find the distance and magnetic track of the waypoint TIPIL by flying out of TRENT VOR/DME (TNT): (Note: when using the original chart from GSPRM both locations can be found in chart section 7 C)\r
\r
Images:\r
- images/AT00065_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
You can find a black solid circle with a white letter "C" on the airway between TRENT and TIPIL. The designator "C" indicates that there is a box on the chart which contains some more information. You can find box C in the upper right corner. It contains all information about this part of the airway:\r
Airway M868 (MEA FL90)\r
Airway N57 (MEA FL80)\r
Course 341°\r
Distance 7 NM\r
\r
Explanation Images:\r
- images/explanation_AT00065_img_1.png\r
\r
Options:\r
A. A\r
161° / 23 NM\r
B. B\r
329° / 13 NM\r
C. D\r
340° / 5 NM\r
D. C\r
341° / 7 NM ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00066\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
For pre-flight planning purposes what is the total fuel required for a Commercial Air Transport flight in a Long-Range Jet Transport (LRJT) aeroplane? Assume the Basic Fuel Scheme WITHOUT variations applies.\r
Taxi Fuel: 235 kg\r
Trip Fuel: 52 319 kg\r
Additional Fuel: 2 700 kg\r
Contingency Fuel: 5% of the Trip Fuel\r
Destination Alternate Fuel: 1 550 kg\r
Final Reserve Fuel: 1 850 kg\r
Extra Fuel: 0 kg\r
Discretionary Fuel: 0 kg\r
\r
Explanation:\r
Please Note: This conforms to the Basic Fuel scheme WITHOUT variations under the new fuel/energy regulations. The primary difference if variations are included is the ability to use lesser amounts of contingency fuel, such as 3% if a suitable ERA is provided.\r
AMC1 CAT.OP.MPA.181 Fuel/energy scheme - fuel/energy planning and in-flight re-planning policy — aeroplane\r
PLANNING CRITERIA — AEROPLANES\r
The operator should base the defined fuel policy, including calculation of the amount of fuel to be on board for departure, on the following planning criteria:\r
(refer to the last paragraph of the explanation for full Regulation details)\r
(a) Basic Fuel Scheme\r
The usable fuel to be on board for dispatch should be the sum of the following:\r
(1) Taxi fuel In this case, as stated in the question text. 235 kg\r
(2) Trip fuel In this case, as stated in the question text. 52 319 kg\r
(3) Contingency Fuel In this case, as stated in the question text. 5% x 52 319 kg = 2 616 kg\r
(4) Alternate Fuel In this case, as stated in the question text. 1 550 kg\r
(5) Final Reserve Fuel In this case, as stated in the question text. 1 850 kg\r
(6) Additional Fuel In this case, as stated in the question text. 2 700 kg\r
(7) Extra Fuel For if there are anticipated delays or specific operational constraints. N/A\r
(8) Discretionary Fuel This is a new addition to the regulations in 2022, and is the “Commander’s discretionary fuel”. N/A\r
TOTAL\r
---------------------------------------------------------------------------------------------------------------------------------------\r
61 270 kg\r
Closest answer = 61 270 kg\r
Regulation (EU) No 965/2012\r
AMC1 CAT.OP.MPA.181 Fuel/energy scheme - fuel/energy planning and in-flight re-planning policy — aeroplane\r
BASIC FUEL SCHEME — PRE-FLIGHT CALCULATION OF USABLE FUEL FOR PERFORMANCE CLASS A AEROPLANES\r
For the pre-flight calculation of the usable fuel in accordance with point CAT.OP.MPA.181, the operator should:\r
(a) for taxi fuel, take into account the local conditions at the departure aerodrome and the APU consumption;\r
(b) for trip fuel, include:\r
(1) fuel for take-off and climb from the aerodrome elevation to the initial cruising level/altitude, taking into account the expected departure routing;\r
(2) fuel from the top of climb to the top of descent, including any step climb/descent;\r
(3) fuel from the top of descent to the point where the approach procedure is initiated, taking into account the expected arrival routing; and\r
(4) fuel for making an approach and landing at the destination aerodrome;\r
(c) for contingency fuel, calculate for unforeseen factors either:\r
(1) 5 % of the planned trip fuel or, in the event of in-flight re-planning, 5 % of the trip fuel for the remainder of the flight; or\r
(2) an amount to fly for 5 minutes at holding speed at 1 500 ft (450 m) above the destination aerodrome in standard conditions,\r
whichever is the higher;\r
(d) for destination alternate fuel, include:\r
(1) when the aircraft is operated with one destination alternate aerodrome:\r
(i) fuel for a missed approach from the applicable DA/H or MDA/H at the destination aerodrome to the missed-approach altitude, taking into account the complete missed-approach procedure;\r
(ii) fuel for climb from the missed-approach altitude to the cruising level/altitude, taking into account the expected departure routing;\r
(iii) fuel for cruising from the top of climb to the top of descent, taking into account the expected routing;\r
(iv) fuel for descent from the top of descent to the point where the approach is initiated, taking into account the expected arrival routing; and\r
(v) fuel for making an approach and landing at the destination alternate aerodrome; and\r
(2) when the aircraft is operated with two destination alternate aerodromes, the amount of fuel that is calculated in accordance with point (d)(1), based on the destination alternate aerodrome that requires the greater amount of fuel;\r
(e) for FRF, comply with point CAT.OP.MPA.181(c);\r
...(c) final reserve fuel/energy that shall be the amount of fuel/energy that is calculated at holding speed at 1 500ft (450 m) above the aerodrome elevation in standard conditions according to the aeroplane estimated mass on arrival at the destination alternate aerodrome, or destination aerodrome when no destination alternate aerodrome is required, and shall not be less than:\r
(i) for aeroplanes with reciprocating engines, the fuel/energy to fly for 45 minutes; or\r
(ii) for turbine-engined aeroplanes, the fuel/energy to fly for 30 minutes;...\r
(f) for additional fuel, include an amount of fuel that allows the aeroplane to proceed, in the event of an engine failure or loss of pressurisation, from the most critical point along the route to a fuel en route alternate (fuel ERA) aerodrome in the relevant aircraft configuration, hold there for 15 minutes at 1 500 ft (450 m) above the aerodrome elevation in standard conditions, make an approach, and land;\r
(g) for extra fuel, include anticipated delays or specific operational constraints that can be predicted; and\r
(h) for discretionary fuel, include a quantity at the sole discretion of the commander.\r
\r
Options:\r
A. A\r
61 035 kg\r
B. B\r
58 654 kg\r
C. C\r
58 570 kg\r
D. D\r
61 270 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00067\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to Stuttgart SID chart 10-3P from the Jeppesen GSPRM 2017.\r
An aircraft taking-off from Stuttgart has received clearance for the DKB4H RNAV SID. Traditional IFR equipment is required to continue the flight in case the GNSS integrity is lost. Which of the following equipment must be available in order to execute the RNAV SID?\r
1. Aircraft VOR and DME receivers\r
2. Aircraft GPS receivers\r
3. Aircraft ADF receiver\r
4. STG and LBU navigational aids\r
5. STG and DKB navigational aids\r
\r
Images:\r
- images/AT00067_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Area Navigation (RNAV) is defined as a method of navigation which permitts aircraft operation on any desired flight path within the coverage of station - referenced navigation aids or within the limits of the capability of self-contained aids, or a combination of these. In simple words, the ability to fly from point to point, rather than following VOR radials or NDB bearings.\r
The conventional Standard Instrument Departure procedures (SIDs) use ground navigational aids, while the RNAV SIDs use Fly-by and Fly-over waypoints and are followed by the FMS.\r
RNAV equipment tends to be more accurate than basic fixing and can be based on either VOR/DME information, satellite systems, inertial systems or combinations of these.\r
GNSS/GPS receiver is an essential part of the RNAV system, as many of the waypoints will rely upon GPS coordinates.\r
The FMS takes navigational inputs from GPS, IRS and ground navigational aids. If GPS signal is lost, then IRS and ground navigational aids still work, as a back-up option.\r
Thus, the aircraft's GPS receiver must be always available for the RNAV SID procedure and the others are required in case of problem with the GNSS.\r
Obviously, the aircraft's VOR and DME receivers must be serviceable, since the DKB4H RNAV SID procedure uses the ground navigational aids STG and DKB VOR/DMEs for guidance, which must be serviceable too.\r
\r
Explanation Images:\r
- images/explanation_AT00067_img_1.png\r
\r
Options:\r
A. A\r
2, 3, and 4\r
B. B\r
2 only\r
C. D\r
1, 3, and 4\r
D. C\r
1, 2, and 5 ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00068\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure or CAP 697 Figure 2.2, Table 2.2.1.\r
Given the following information, what is the fuel flow?\r
Power setting: Full throttle / 2500 RPM\r
Altitude: 11 000 ft\r
OAT: -7°C\r
\r
Images:\r
- images/AT00068_img_1.png\r
\r
Explanation:\r
ISA at 11000 ft: -7˚C\r
OAT = ISA\r
Interpolate in the middle schedule (ISA deviation = zero) between 10000 ft and 12000 ft to get the fuel flow: 70.55 lb / h\r
\r
Explanation Images:\r
- images/explanation_AT00068_img_1.png\r
\r
Options:\r
A. A\r
11.30 lb/h\r
B. B\r
11.75 lb/h\r
C. C\r
73.30 lb/h\r
D. D\r
70.55 lb/h ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00069\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
When planning to fly through a mountaineous area, the minimum safe altitude (MSA) is 8 000 ft. The QNH from an airport in the vicinity, elevation 0 ft, is 990 hPa and the temperature at FL100 is -25°C. Determine the lowest usable flight level.\r
(Assume 1 hPa = 27 ft)\r
\r
Explanation:\r
Refer to figure.\r
The aircraft must fly at 8 000 ft (MSA). This altitude must be the true altitude of the aircraft. This altitude must be corrected for any temperature ISA deviation and then any difference in pressure from standard (1013 hPa), to get the pressure altitude, allowing us to work out the lowest usable flight level.\r
To compute the temperature correction, it is necessary to have knowledge of the ISA air temperature. In the International Standard Atmosphere (ISA), the air temperature at sea level is 15ºC, and the temperature lapse rate is -2ºC/1 000 ft. The formula to calculate the ISA temperature is: ISA temperature = 15ºC - (10 000/1 000) x 2, giving an ISA temperature of ­­­-5ºC. The actual temperature is ­­­-25ºC, which is an ISA deviation of ISA -20ºC.\r
The first step is to determine the temperature correction. The ISA deviation is ISA -20ºC. Based on the 4% rule and its calculation mentioned in the rules below, the height correction for the temperature can be calculated as follows: Height correction for temperature = 4 × (-20) × (8 000/1000) = -640 ft.\r
In this case, the temperature correction is added to the true altitude as per the rules below (refer to the table below), to give an indicated altitude of ­­8 640 ft.\r
Next, we need to compute the pressure correction by considering the deviation from the standard mean sea level pressure of 1013 hPa: 1013 hPa - 990 hPa = 23 hPa. The question provides a barometric lapse rate of 27 ft/hPa, the pressure correction can be calculated as follows: Pressure correction = 23 hPa x 27 ft/hPa = 621 ft. This value needs to be added to the indicated altitude as per the rules below:\r
Pressure Altitude = 8 640 ft + 621 ft = 9 261 ft.\r
The Minimum Flight Level, which provides obstacle clearance, after both pressure and temperature correction, that must be selected is: FL100.\r
RULES. The following rules should be considered for altimetry calculations:\r
All calculations are based on rounded pressure values to the nearest lower hPa.\r
The value for the barometric lapse rate between MSL and 500 hPa to be used is 30 ft/hPa as an acceptable approximation of the barometric lapse rate.\r
To determine the true altitude/height, the following rule of thumb, called the ‘4 %-rule’, shall be used: the altitude/height changes by 4% for each 10°C temperature deviation from ISA.\r
For simplification: Height correction for the temp = 4 × (ISA DEV) × Indicated alt/1000 = ___ ft\r
If no further information is given, the deviation of the outside-air temperature from ISA is considered to be the same throughout the whole layer.\r
The elevation of the aerodrome has to be taken into account. The temperature correction has to be considered for the layer between the station (usually an aerodrome) and the position of the aircraft.\r
IF\r
THEN\r
Higher pressure\r
Indicated Altitude > Pressure Altitude\r
Lower pressure\r
Indicated Altitude < Pressure Altitude\r
Warmer than ISA\r
True Altitude > Indicated Altitude\r
Colder than ISA\r
True Altitude < Indicated Altitude\r
Definitions\r
Pressure Altitude: The altimeter indication with standard pressure (1013.2 hPa) set.\r
Indicated Altitude: The altimeter indication with local QNH set.\r
True altitude: The actual altitude of the aircraft above mean sea level.\r
\r
Explanation Images:\r
- images/explanation_AT00069_img_1.png\r
\r
Options:\r
A. A\r
FL090\r
B. C\r
FL120\r
C. D\r
FL080\r
D. B\r
FL100 ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00070\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
An aircraft is flying at FL180, OAT -11°C, QNH 1003. What is the true altitude?\r
\r
Explanation:\r
Refer to figure.\r
True altitude calculation from a Flight Level:\r
In this question, we are given a pressure altitude (in the form of a flight level) and are asked for the terrain clearance, therefore we need to determine the corresponding true altitude.\r
The first step is to compute the pressure correction by considering the deviation from the standard mean sea level pressure of 1013 hPa: 1013 hPa - 1003 hPa = 10 hPa. Since the barometric lapse rate near the surface is 30 ft/hPa, the pressure correction can be calculated as follows: Pressure correction = 10 hPa x 30 ft/hPa = ­­­300 ft. This value needs to be subtracted from the pressure altitude as per the rules below:\r
Indicated altitude = 18 000 ft - 300 ft = 17 700 ft.\r
To determine the temperature correction, it is necessary to have knowledge of the ISA air temperature for the given flight level/altitude (FL250). In the International Standard Atmosphere (ISA), the air temperature at sea level is 15ºC, and the temperature lapse rate is -2ºC/1 000 ft. The formula to calculate the ISA temperature is therefore: ISA temperature = 15ºC - (18 000/1 000) x 2, giving an ISA temperature of ­­­-21 ºC. The actual outside air temperature is ­­­-11 ºC, which means we have an ISA deviation of ISA +10ºC.\r
Next, we need to determine the temperature correction. The ISA deviation is ISA +10ºC. Based on the 4% rule and its calculation mentioned in the rules below, the height correction for the temperature can be calculated as follows: Height correction for temperature = 4 × (+10) × (17 700/1000) = + 708 ft.\r
The temperature correction is added to the indicated altitude as per the rules below, to give a true altitude of 17 700 ft + 708 ft = 18 408 ft\r
RULES. The following rules should be considered for altimetry calculations:\r
All calculations are based on rounded pressure values to the nearest lower hPa.\r
The value for the barometric lapse rate between MSL and 500 hPa to be used is 30 ft/hPa as an acceptable approximation of the barometric lapse rate (if not provided by the question).\r
To determine the true altitude/height, the following rule of thumb, called the ‘4 %-rule’, shall be used: the altitude/height changes by 4% for each 10°C temperature deviation from ISA.\r
For simplification: Height correction for the temp = 4 × (ISA DEV) × Indicated alt/1000 = ___ ft\r
If no further information is given, the deviation of the outside-air temperature from ISA is considered to be the same throughout the whole layer.\r
The elevation of the aerodrome has to be taken into account. The temperature correction has to be considered for the layer between the station (usually an aerodrome) and the position of the aircraft.\r
HIGHER PRESSURE; INDICATED ALTITUDE > PRESSURE ALTITUDE\r
LOWER PRESSURE; INDICATED ALTITUDE < PRESSURE ALTITUDE WARMER THAN ISA; TRUE ALTITUDE > INDICATED ALTITUDE\r
COLDER THAN ISA; TRUE ALTITUDE < INDICATED ALTITUDE\r
DEFINITIONS.\r
Pressure Altitude: The altimeter indication with standard pressure (1013.2 hPa) set.\r
Indicated Altitude: The altimeter indication with local QNH set.\r
True altitude: The actual altitude of the aircraft above mean sea level.\r
\r
Explanation Images:\r
- images/explanation_AT00070_img_1.png\r
\r
Options:\r
A. A\r
18 000 ft\r
B. C\r
16 992 ft\r
C. D\r
17 500 ft\r
D. B\r
18 408 ft ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00071\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to ALICANTE - charts 19-1, 19-2 and 19-3 from Jeppesen GSPRM 2017.\r
On a VFR flight, you need to overfly Alicante CTR from NE1 and exit at SW. Who shall you be in contact with to get transit clearance and what would be an appropriate altitude?\r
\r
Images:\r
- images/AT00071_img_1.png\r
- images/AT00071_img_2.png\r
- images/AT00071_img_3.png\r
\r
Explanation:\r
Refer to Alicante 19-3. The instructions for VFR overflights read:\r
“Except other ATC clearance, ACFT overflying CTR have to use VFR corridors “NORTH CORRIDOR” and “SOUTH CORRIDOR” as described above. Two-way radio contact with Valencia Control must be maintained to get transit clearance. MAX ALT is FL75 and MNM ALT is 4 500’.”\r
\r
Options:\r
A. A\r
Alicante Tower, 4 000 ft\r
B. B\r
Valencia Control, 1 000 ft\r
C. C\r
Alicante Tower, 2 000 ft\r
D. D\r
Valencia Control, 5 000 ft ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00072\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
What Type and Category of approach is a 2D APCH with a MDH of 350 ft?\r
\r
Explanation:\r
Refer to figure.\r
According to ICAO Annex 6, Annex 10 and Annex 14, there are two types of classification for approach operations, dependent upon the achieved minima at the end of the approach:\r
Type A: may be either 2D or 3D operations; 2D will only have a lateral path defined for the approach operation where 3D will have both a lateral and vertical path defined for that operation. A Type A operation will permit aircraft operations down to a minimum height or altitude of 250 ft. All NPAs and Approcahes with Vertical guidance (APV) using Barometric altimetry are Type A approach operations.\r
Type B: are 3D operations; a lateral and vertical path is defined and guidance along this path is provided either from GPS with SBAS (APV SBAS) or by a precision approach system.\r
Only the Type B (3D) approaches are further divided into the following categories of approach:\r
Category I (CAT I)\r
Category II (CAT II)\r
Category IIIA (CAT IIIA)\r
Category IIIB (CAT IIIB)\r
Category IIIC (CAT IIIC)\r
\r
Explanation Images:\r
- images/explanation_AT00072_img_1.png\r
\r
Options:\r
A. A\r
Type A, CAT I.\r
B. C\r
Type B, no category.\r
C. D\r
Type B, Cat II.\r
D. B\r
Type A, no category. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00073\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Considering the following NOTAM, which of the following statements is correct?\r
Q EGTT/QNMAS/IV/BO/E/000/999/5129N00113W025 B FROM: 16/04/29 09:59 C TO: 16/05/27 18:00 E COMPTON DVOR ‘CPT’ FREQ 114.35 MHZ/COMPTON DME ‘CPT’ CHANNEL 090Y BOTH U/S. PLEASE NOTE BETWEEN 03 MAY AND 12 MAY DUE TO TEST ACTIVITIES TAKING PLACE AT COMPTON, DVOR TEST VOICE MESSAGES MAY BE TRANSMITTED FOR SHORT PERIODS ON THE CPT DVOR FREQUENCY 114.35 MHZ. IF SUCH TRANSMISSIONS ARE INTERCEPTED BY AIRSPACE USERS THE CONTENT OF THESE MESSAGES SHOULD BE IGNORED\r
\r
Explanation:\r
This question refers to the following section of the NOTAM:\r
"Q EGTT/QNMAS/IV/BO/E/000/999/5129N00113W025 B FROM: 16/04/29 09:59 C TO: 16/05/27 18:00 E COMPTON DVOR ‘CPT’ FREQ 114.35 MHZ/COMPTON DME ‘CPT’ CHANNEL 090Y BOTH U/S. PLEASE NOTE BETWEEN 03 MAY AND 12 MAY DUE TO TEST ACTIVITIES TAKING PLACE AT COMPTON, DVOR TEST VOICE MESSAGES MAY BE TRANSMITTED FOR SHORT PERIODS ON THE CPT DVOR FREQUENCY 114.35 MHZ. IF SUCH TRANSMISSIONS ARE INTERCEPTED BY AIRSPACE USERS THE CONTENT OF THESE MESSAGES SHOULD BE IGNORED"\r
From 09:59 of the 29th of April 2016 to 18:00 of the 25th of May 2016 CPT DVOR/DME are both U/S => Unserviceable\r
\r
Options:\r
A. A\r
CPT DVOR is unserviceable during the stated period except when the test transmissions are being made.\r
B. C\r
The voice test messages can be heard on VHF RT equipment.\r
C. D\r
The range information from the DME is still usable during the stated period.\r
D. B\r
CPT DVOR/DME is unserviceable during the stated period. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00074\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
(For this question use CAP 697 Figure 3.4). An aeroplane is flying at FL90 at the economy power setting. What is the TAS if the OAT is ISA -10C?\r
\r
Images:\r
- images/AT00074_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
The graph at Figure 3.4 is used to determine the true airspeed for the various combinations of ambient temperature, Pressure Altitude and power settings in the cruise configuration:\r
Enter from the bottom left side with Outside Air Temperature: OAT = ISA deviation + ISA temperature at FL90 = -10°C + (15°C - 2°C x 9000ft /1000) = -13°C.\r
Move vertically up to 9000 ft pressure altitude.\r
Then, continue horizontally until intersecting the economy power setting (65%) line.\r
Finally, vertically down and read the TAS 170 kt.\r
\r
Explanation Images:\r
- images/explanation_AT00074_img_1.png\r
\r
Options:\r
A. A\r
175 kt\r
B. C\r
179 kt\r
C. D\r
143 kt\r
D. B\r
170 kt ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00075\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Given the following information for a Commercial Air Transport operation, calculate the maximum possible Extra Fuel to be uplifted.\r
Maximum Zero Fuel Mass: 62 731 kg\r
Actual Zero Fuel Mass: 55 031 kg\r
Regulated Take-Off Mass: 76 000 kg\r
Maximum Landing Mass: 66 360 kg\r
Fuel Tank Capacity: 16 000 kg\r
Taxi Fuel: 240 kg\r
Trip Fuel: 7 931 kg\r
Minimum Block Fuel: 16 000 kg\r
\r
Explanation:\r
The tank capacity corresponds to the minimum block fuel => Therefore, no extra fuel can be uplifted.\r
\r
Options:\r
A. A\r
4751 kg.\r
B. B\r
240 kg.\r
C. C\r
4991 kg.\r
D. D\r
Not able to carry Extra Fuel. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00076\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
When reviewing the wind charts in the briefing room, you notice that the average wind in cruise will be 25 kt headwind.Given following data, what will be the flight time to destination?\r
Time to top of climb : 30 min\r
Cruise leg: 740 NM\r
FL380\r
TAS: 460 kt\r
ISA -10°C\r
Time to from top of descent to landing : 22 minutes\r
\r
Explanation:\r
Cruise GS = 460-25 = 435.\r
Distance 740/GS 435 = 1 hr 42 minutes = 102 minutes.\r
So 30 (Time to climb)+ 102 (Cruise)+ 22( Time to descent) = 154 minutes = 2 hr 34 mins.\r
\r
Options:\r
A. A\r
1 h 36 mins\r
B. B\r
1 h 42 mins\r
C. C\r
2 h 28 mins\r
D. D\r
2 h 34 mins ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00077\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figures and/or to chart E(LO)13 from the Jeppesen GSPRM 2017.\r
You are planning a flight from Ajaccio (LFKJ) to Marina di Campo (LIRJ), routing along airways A9 and L146. Extract the information from the chart and complete the navigation plan. What will be the total distance and estimated flight time?\r
\r
Images:\r
- images/AT00077_img_1.png\r
- images/AT00077_img_2.png\r
\r
Explanation:\r
Refer to figures.\r
Identify the route on the chart, then to fill in the gaps in the navigation plan, we need the true track of BTA to MOULE and MOULE to XOPTA. Both of these tracks are the same, and the magnetic track is 075º, so with magnetic variation of 2ºE, the true track is 077º.\r
Then using the CRP-5 or other navigation computer, calculate the required heading to fly 077º track. The true heading of 076º equals a magnetic heading of 074º. The navigation computer gives a groundspeed of 150 kt.\r
The missing distances from the navigation plan can be found next to the airway line on the chart, 13 nm from BTA to MOULE and 5nm from MOULE to XOPTA.\r
At 150 kt groundspeed, the time from BTA to MOULE is (13/150) x 60 = 5.2 minutes (round to 5 minutes). The time from MOULE to XOPTA is (5/150) x 60 = 2 minutes.\r
Adding up the distances for each leg gives us a total of 123 nm and adding up the times gives a total of 57 minutes\r
\r
Explanation Images:\r
- images/explanation_AT00077_img_1.png\r
- images/explanation_AT00077_img_2.png\r
\r
Options:\r
A. A\r
18 nm and 7 minutes\r
B. C\r
135 nm and 52 minutes\r
C. D\r
118 nm and 55 minutes\r
D. B\r
123 nm and 57 minutes ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00078\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
An Aircraft is planned to fly from Blaubeuren aerodrome (EDMC) (N 48°25’,E009°48’) to Schwenningen at Neckaraerodrom (EDTS) (N 48°04’, E008°34’) following the most direct routing. The route can include any airspace at these two airports, but the remaining portions of the route shall remain clear of any airspaces classes D, E or F and any danger or restricted areas. Which of the following is the most suitable visual turning point for the route?\r
\r
Images:\r
- images/AT00078_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Only using the mast SW of BALINGEN avoids controlled airspac and ED R 132 A/B.\r
NOTE: We received feedback from students who encountered this question in the Polish authorities that the current answer and "Münsingen Eisberg gliding site" answer are incorrect. The current answer is the one we believe to be most correct, therefore we also consider the possibility that they may have encountered one of the different versions of this question. So please send us anything you can remember from the exam via the comments, the feedback section of the website, or by email to info@atplquestions.com, thank you!\r
\r
Explanation Images:\r
- images/explanation_AT00078_img_1.png\r
\r
Options:\r
A. B\r
Albstadt Degerfeld (EDSA) airfield (N 48°15’, E009°04’)\r
B. C\r
Münsingen Eisberg gliding site (N 48°25’, E009°26’)\r
C. D\r
Hayingen gliding site (N 48°17’, E009°28’)\r
D. A\r
The mast south-west of Balingen (N 48°13’, E 008°49’) ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00079\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure High_5_AT. Refer to Jeppesen GSPRM Training Route Manual - Chart "AT HI 5".\r
Find the initial magnetic course from BENBECULA (N57°27.9' W007°23') to KEFLAVÍK (N63°59.1' W022°36.3')?\r
\r
Images:\r
- images/AT00079_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
1- Locate both locations (Benbecula and Keflavik).\r
2- Connect them by drawing a line.\r
3- Measure the initial true course angle.\r
The true course is approximately 360 - 43 = 317˚.\r
Look for the isogonal line (dashed line). The local Magnetic Variation equals 5°W. Therefore, the Magnetic North is 5°W of True North: Magnetic course = True course + 005° = 317° + 005° = 322°.\r
\r
Explanation Images:\r
- images/explanation_AT00079_img_1.png\r
\r
Options:\r
A. B\r
302º\r
B. C\r
303º\r
C. D\r
317º\r
D. A\r
322º ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00080\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
How much additional fuel should be carried based on the following critical points along your flight?\r
ETP1: FOB: 8100 kg, CFS: 8260 kg\r
ETP2: FOB: 6250 kg, CFS: 6360 kg\r
\r
Explanation:\r
Additional fuel is essential for ensuring the safety of a flight in case of emergencies. It is calculated to allow an aircraft to reach an alternate airport from the most critical point along its route. In the event of an emergency, the aircraft should have enough fuel to fly to the alternate, hold at an altitude of 1500 feet AGL for 15 minutes, and then safely execute an approach and landing.\r
To calculate this, you must find the difference between the block fuel and critical fuel scenario. If the fuel required for the trip is greater than the fuel required for the critical fuel scenario, there is no need to take additional fuel, however if it is not enough, the difference between must then be added as additional fuel.\r
ETP stands for estimated time of passage, for example estimated time of passing over waypoint 1 e.g. ETP1.\r
For this scenario, there are 2 critical points along the flight. At ETP1, you would have 8100 kg of fuel left to reach your destination but in case of an emergency you would need 8260 kg to reach your alternate airport, hold and land. In this case, the difference in fuel (8260 - 8100 = 160 kg) should be added as additional fuel.\r
The same calculation should be done for ETP2: 6360 - 6250 = 110 kg.\r
The higher of the two differences (160 kg from ETP1) should be used for the additional fuel, ensuring that the aircraft will have enough fuel to handle either emergency scenario and safely reach the alternate airport.\r
\r
Options:\r
A. A\r
110 kg\r
B. B\r
8260 kg\r
C. C\r
6360 kg\r
D. D\r
160 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00081\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to Jeppesen GSPRM Training Route Manual - Chart "E LO 2".\r
On an IFR flight close to airfleld LELYSTAD (EHLE, N52°28' E005° 32') you need to determine the distance to the corresponding DME station. Which of the following is the correct frequency and identier?\r
\r
Images:\r
- images/AT00081_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Locate Lelystad airfield in the bottom right corner of the ELO 2 chart.\r
Read DME station 111.4mhz, identifier FRO.\r
See annex for location of this data.\r
\r
Explanation Images:\r
- images/explanation_AT00081_img_1.png\r
\r
Options:\r
A. A\r
Channel 51, FRO\r
B. B\r
326 kHz, LLS\r
C. D\r
123.67 MHz, AFIS\r
D. C\r
111.4 MHz, FRO ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00082\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figures.\r
What does an entry of G mean in ITEM 10 EQUIPMENT of the ICAO Flight Plan form?\r
\r
Images:\r
- images/AT00082_img_1.png\r
- images/AT00082_img_2.png\r
\r
Explanation:\r
ICAO Doc 4444\r
Appendix 2\r
ITEM 10: EQUIPMENT AND CAPABILITIES\r
Radiocommunication, navigation and approach aid equipment and capabilities\r
INSERT one letter as follows:\r
N if no COM/NAV/approach aid equipment for the route to be flown is carried, or the equipment is unserviceable,\r
OR S if standard COM/NAV/approach aid equipment for the route to be flown is carried and serviceable (see Note 1),\r
AND/OR INSERT one or more of the following letters to indicate the serviceable COM/NAV/approach aid equipment and capabilities available:\r
A - (Not allocated)\r
M - Omega\r
B - (Not allocated)\r
O - VOR\r
C - LORAN C\r
P - (Not allocated)\r
D - DME\r
Q - (Not allocated)\r
E - (Not allocated)\r
R - RNP type certification (see Note 5)\r
F - ADF\r
T - TACAN\r
G - GNSS. If any portion of the flight is planned to be conducted under IFR, it refers to GNSS receivers that comply with the requirements of Annex 10, Volume I (See Note 2)\r
U - UHF RTF\r
H - HF RTF\r
V - VHF RTF\r
I - Inertial Navigation\r
W - RVSM approved\r
J - Data Link (see Note 3)\r
X - MPNS approved\r
K - MLS\r
Y - VHF (with 8.33 kHz channel spacing capability)\r
L - ILS\r
Z - Other equipment carried (see Note 2)\r
\r
Note 1.— If the letter S is used, standard equipment is considered to be VHF RTF, VOR and ILS, unless another combination is prescribed by the appropriate ATS authority.\r
Note 2.— If the letter G is used, the types of external GNSS augmentation, if any, are specified in Item 18 following the indicator NAV/ and separated by a space.\r
\r
Options:\r
A. B\r
The aircraft is suitably equipped for any published GNSS procedure.\r
B. C\r
A GPS receiver that complies with the requirements of ICAO Annex 10 is fitted.\r
C. D\r
A GPS receiver that can be augmented by Galileo is fitted.\r
D. A\r
A GNSS receiver that complies with the requirements of ICAO Annex 10 is fitted. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00083\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
(For this question use the VFR chart ED-4 from the Jeppesen GSPRM 2017). An aircraft is flying a direct course from Straubing aerodrome (EDMS) (N48°54', E012°31') to Sonnen aerodrome (EDPS) (N48°41', E013°42').\r
What is the highest obstacle within 5 NM off the course?\r
\r
Images:\r
- images/AT00083_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
When planning a VFR route, among other considerations, you should also take into account the height of the obstacles within a band of 5 NM on each side of your planned route, so as to establish the highest terrain.\r
First of all, find the position of the Straubing (EDMS) and Sonnen (EDPS) aerodromes, using the coordinates given and connect them by drawing a line with your pencil.\r
Using your plotter and the appropriate scale on it (1:500 000), draw a band of 5 NM on each side off the route line and mark all the natural or man-made obstacles within the band.\r
The highest obstacle within the 5 NM band off the course line, is the lighted obstacle with an elevation 3754 ft AMSL.\r
\r
Explanation Images:\r
- images/explanation_AT00083_img_1.png\r
\r
Options:\r
A. A\r
1540 ft\r
B. B\r
3111 ft\r
C. C\r
7200 ft\r
D. D\r
3754 ft ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00084\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
A crew finds that the actual headwind is stronger than the forecast wind, and so flies at 140 kt TAS instead of the planned 130 kt TAS to minimise the delay to arrival. Determine the increase in fuel use for the flight leg, given:\r
Fuel flow at 130 kt TAS: 162 kg/h\r
Fuel flow at 140 kt TAS: 188 kg/h\r
Forecast headwind component: 10 kt\r
Actual headwind component: 25 kt\r
Leg distance: 166 NM\r
\r
Explanation:\r
1) Determine the planned fuel consumed flying at 130 kt TAS:\r
Planned TAS: 130 kt\r
Forecast headwind: 10 kt\r
Therefore, the planned ground speed = 120 kt\r
Planned flight time (to cover 166 NM) = 166 NM / 120 kt = 1 h 23 min\r
Fuel flow at 130 kt TAS = 162 kg/h\r
Planned fuel consumed = 162 kg/h x 1 h 23 min = 224 kg\r
2) Determine the actual fuel consumed flying at 140 kt TAS:\r
Actual TAS: 140 kt\r
Actual headwind: 25 kt\r
Therefore, the actual ground speed = 115 kt\r
Actual flight time (to cover 166 NM) = 166 NM / 115 kt = 1 h 26 min\r
Fuel flow at 140 kt TAS = 188 kg/h\r
Actual fuel consumed = 188 kg/h x 1 h 26 min = 271 kg\r
3) Determine the fuel increase:\r
271 kg - 224 kg = 47 kg\r
\r
Options:\r
A. A\r
15 kg\r
B. B\r
25 kg\r
C. D\r
11 kg\r
D. C\r
47 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00085\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
How much is the clearance passing the highest obstacle in the following scenario? An aircraft is flying at FL170 in mountainous terrain on the northern side of the alps and the charted minimum grid-area altitude is 16200 feet.\r
The outside air temperature at FL170 is -29°C\r
The QNH is 1000.25 hPa given by a meteorological station with elevation 13500 feet.\r
Assume 1hPa = 30 feet\r
\r
Explanation:\r
Refer to figure.\r
In this question, we are given a pressure altitude (in the form of a flight level) and are asked for the terrain clearance, therefore we need to determine the corresponding true altitude.\r
The first step is to compute the pressure correction by considering the deviation from the standard mean sea level pressure of 1013 hPa: 1013 hPa - 1000 hPa = 13 hPa. Since the barometric lapse rate near the surface is 30 ft/hPa, the pressure correction can be calculated as follows: Pressure correction = 13 hPa x 30 ft/hPa = ­­­390 ft. This value needs to be subtracted from the pressure altitude as per the rules below:\r
Indicated altitude = 17 000 ft - 390 ft = 16 610 ft.\r
To determine the temperature correction, it is necessary to have knowledge of the ISA air temperature for the given flight level/altitude (FL170). In the International Standard Atmosphere (ISA), the air temperature at sea level is 15ºC, and the temperature lapse rate is -2ºC/1 000 ft. The formula to calculate the ISA temperature is therefore: ISA temperature = 15ºC - (17 000/1 000) x 2, giving an ISA temperature of ­­­-19 ºC. The actual outside air temperature is ­­­-29 ºC, which means we have an ISA deviation of ISA -10ºC.\r
Next, we need to determine the temperature correction. The ISA deviation is ISA -10ºC. The elevation of the aerodrome has to be taken into account: 16 610 ft - 13 500 ft = 3 110 ft. Based on the 4% rule and its calculation mentioned in the rules below, the height correction for the temperature can be calculated as follows: Height correction for temperature = 4 × (-10) × (3 110/1000) = 124 ft.\r
The temperature correction is subtracted from the indicated altitude as per the rules below, to give a true altitude of 16 610 ft - 124 ft = ­­­­­16 486 ft.\r
The charted minimum grid altitude 16 200 ft in a mountainous terrain means that, an aircraft flying within this grid clears the highest obstacle by 2 000 ft. Thus, the highest obstacle is at: 16 200 ft - 2 000 ft = 14 200 ft.\r
Therefore, the aircraft clears the obstacle by: 16 486 ft - 14 200 ft = 2 286 ft.\r
RULES. The following rules should be considered for altimetry calculations:\r
All calculations are based on rounded pressure values to the nearest lower hPa.\r
The value for the barometric lapse rate between MSL and 500 hPa to be used is 30 ft/hPa as an acceptable approximation of the barometric lapse rate.\r
To determine the true altitude/height, the following rule of thumb, called the ‘4 %-rule’, shall be used: the altitude/height changes by 4% for each 10°C temperature deviation from ISA.\r
For simplification: Height correction for the temp = 4 × (ISA DEV) × Indicated alt/1000 = ___ ft\r
If no further information is given, the deviation of the outside-air temperature from ISA is considered to be the same throughout the whole layer.\r
The elevation of the aerodrome has to be taken into account. The temperature correction has to be considered for the layer between the station (usually an aerodrome) and the position of the aircraft.\r
IF\r
THEN\r
Higher pressure\r
Indicated Altitude > Pressure Altitude\r
Lower pressure\r
Indicated Altitude < Pressure Altitude\r
Warmer than ISA\r
True Altitude > Indicated Altitude\r
Colder than ISA\r
True Altitude < Indicated Altitude\r
Definitions\r
Pressure Altitude: The altimeter indication with standard pressure (1013.2 hPa) set.\r
Indicated Altitude: The altimeter indication with local QNH set.\r
True altitude: The actual altitude of the aircraft above mean sea level.\r
\r
Explanation Images:\r
- images/explanation_AT00085_img_1.png\r
\r
Options:\r
A. A\r
286 ft\r
B. C\r
2676 ft\r
C. D\r
2120 ft\r
D. B\r
2286 ft ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00086\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to Stuttgart charts 10-3C, 10-3D, 10-3F and 10-3L from the Jeppesen GSPRM.\r
Which SID procedures would be suitable for a flight of a jet aircraft from Stuttgart aerodrome (EDDS) N48°41'24 E009°13'19 to Saarbrucken aerodrome (EDDR) N49°12'52 E007°06'34?\r
\r
Images:\r
- images/AT00086_img_1.png\r
- images/AT00086_img_2.png\r
- images/AT00086_img_3.png\r
- images/AT00086_img_4.png\r
\r
Explanation:\r
Refer to figure.\r
Standard Instrument Departure (SID) is a designated route linking the aerodrome or a specified runway of the aerodrome with a specified significant point, normally on a designated ATS route, at which the en-route phase of a flight commences.\r
Examine each SID chart carefully:\r
The SID procedures ETASA FOUR BRAVO and ETASA TWO HOTEL are only for flights to EDDF, EDFC, EDFE and ETOU.\r
The SID procedures SULZ THREE BRAVO and SULZ THREE HOTEL are only for flights to EDNY, EDTL, LSZH and LSZR.\r
The SID procedures KARLSRUHE 5B and KARLSRUHE 2H are only for flights to EDDR, EDRZ, EDSB and ETAR.\r
The SID procedures DINKELSBUHL NINE BRAVO and DINKELSBUHL FOUR HOTEL are only for flights to continue via airway N869 NEbound or with destinations EDDN, EDTY, EDQ*.\r
Therefore, the only SID procedures, which are suitable for a flight of a jet aircraft from Stuttgart aerodrome (EDDS) to Saarbrucken aerodrome (EDDR), are: KARLSRUHE 5B and KARLSRUHE 2H.\r
\r
Explanation Images:\r
- images/explanation_AT00086_img_1.png\r
\r
Options:\r
A. B\r
DINKELSBUHL NINE BRAVO or DINKELSBUHL FOUR HOTEL\r
B. C\r
KARLSRUHE 5B, DINKELSBUHL NINE BRAVO or ETASA FOUR BRAVO\r
C. D\r
ETASA FOUR BRAVO, ETASA TWO HOTEL, SULZ THREE BRAVO, or SULZ THREE HOTEL\r
D. A\r
KARLSRUHE 5B or KARLSRUHE 2H ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00087\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to Chart "E LO 2" from Jeppesen GSPRM 2017.\r
ATC instructs you to follow the routing from POLE HILL (POL, N53°45' W002°06') via airway P17 to IPSIR, OBOXA, GASKO and then to continue via P18 to the north. What is the true track from OBOXA to GASKO?\r
\r
Images:\r
- images/AT00087_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
1- Locate OBOXA and GASKO north from POLE HILL VOR.\r
2- notice that the Magnetic track written on the arrow the opposite way from GASKO to OBOXA is 150˚.\r
Tracks over the arrows are magnetic, however if you measure track on this map will be true track and you will need to apply variation to get the magnetic track.\r
3- Magnetic Track form OBOXA to GASKO = 150 + 180 = 330˚ M\r
4- True Track = 330 - 2 = 328˚T\r
Subtract 2˚ as variation is west.\r
\r
Explanation Images:\r
- images/explanation_AT00087_img_1.png\r
\r
Options:\r
A. A\r
150°\r
B. B\r
332°\r
C. C\r
225°\r
D. D\r
328° ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00088\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figures or to Stuttgart charts 10-3P and 10-3C from the Jeppesen GSPRM 2017.\r
The pilot is advised by ATC to expect either DKB 9B RNAV SID (OVERLAY) or DKB 9B SID. Which of the following applies to DKB 9B RNAV SID (OVERLAY)?\r
\r
Images:\r
- images/AT00088_img_1.png\r
- images/AT00088_img_2.png\r
\r
Explanation:\r
In this case, from looking at the charts in question, the departure can be done using conventional nav aids, but there is a RNAV overlay departure, where the intended departure is programmed to be flown by the aircraft's lateral navigation system instead of using the conventional nav aids.\r
This mostly uses GPS, as that is the most reliable and accurate source of navigation that an aircraft usually has available, and this system makes the pilots jobs much easier than a conventional departure.\r
As for the other options;\r
The DKB 9B RNAV SID (OVERLAY) departure may only be flown as RNAV, as per the chart in use. It cannot be flown using conventional navaids only.\r
It does not mention what RNAV certification is required on the plate, and might not be RNAV 1.\r
The ADF is not required to be serviceable\r
\r
Options:\r
A. A\r
It may be flown only with reference to VOR and DME.\r
B. B\r
It requires both the pilots and the aircraft to have an RNAV 1 certification.\r
C. C\r
It requires the on-board ADF to be serviceable.\r
D. D\r
It utilises on-board GPS to fly the DKB 9B SID. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00089\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
An aeroplane with reciprocating engines is planning to depart for an isolated destination Aerodrome as a Commercial Air Transport operation. Calculate the minimum amount of fuel required (to the nearest 10 kg), when overhead the isolated aerodrome, considering the following details.\r
Flight time: 2 hours and 30 minutes\r
Top of climb to top of descent time: 2 hours\r
Normal fuel consumption cruise: 780 kg per hour\r
Alternate fuel: to fly for 45 minutes plus 15% of the flying time planned to be spent at cruising level\r
\r
Explanation:\r
Isolated aerodrome is one for which the alternate and final fuel reserve required to the nearest adequate destination alternate aerodrome is more than:\r
for aeroplanes with reciprocating engines, fuel to fly for 45 minutes plus 15% of the flying time planned to be spent at cruising level or two hours, whichever is less or\r
for aeroplanes with turbine engines, fuel to fly for two hours at normal cruise consumption above the destination aerodrome, including final reserve fuel.\r
1) Fuel to fly for 45 minutes plus 15% of the planned flight time at cruising level is:\r
45 min at 780 kg/hr: 45/60 hr x 780 kg/hr = 585 kg\r
15% of 2 hours cruise with 780 kg/hr: 15% x (2 hr x 780 kg/hr) = 234 kg\r
Totally, 585 kg + 234 kg = 819 kg, rounded to nearest 10 kg, becomes 820 kg.\r
2) And, fuel to fly for 2 hours is: 2 hr x 780 kg/hr = 1560 kg.\r
Therefore, the minimum amount of fuel required when overhead the Isolated aerodrome is the lower between 1) and 2); 820 kg.\r
\r
Options:\r
A. B\r
540 kg\r
B. C\r
760 kg\r
C. D\r
1440 kg\r
D. A\r
820 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00090\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
Determine the amount of the Final Reserve Fuel (FINRES) for this Commercial Air Transport jet aircraft.\r
\r
Images:\r
- images/AT00090_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Take-off fuel (T/OFF FUEL) = Trip fuel + Contingency fuel (CONT) + Alternate (ALTN) + Final Reserve fuel (FINRES) + Extra fuel (EXTRA)\r
Therefore:\r
Final Reserve fuel (FINRES) = T/OFF FUEL - (TRIP + CONT + ALTN + EXTRA)\r
In order to make the above calculation, we must determine the Contingency Fuel:\r
Fuel flow at holding speed is not given, therefore we will assume contingency to be 5% of trip fuel\r
Contingency Fuel = 5% x 15 320 kg = 766 kg\r
We can now calculate the Final reserve fuel:\r
Final Reserve fuel (FINRES) = 19 764 kg - (15 320 kg + 766 kg + 1 504 kg + 1 000 kg)\r
Final Reserve fuel (FINRES) = 1 174 kg\r
\r
Explanation Images:\r
- images/explanation_AT00090_img_1.png\r
\r
Options:\r
A. A\r
1611 kg\r
B. B\r
1714 kg\r
C. C\r
2417 kg\r
D. D\r
1174 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00091\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to AMSTERDAM - Chart 10-2B from Jeppesen GSPRM 2017.\r
An aircraft is flying from MOLIX to the IAF. Assuming the ground speed is constant and the same as the maximum allowed airspeed at the IAF, how long will it take the aircraft to reach the clearance limit?\r
\r
Images:\r
- images/AT00091_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
At the top right of the plate, in the instructions box, you can find key information needed to solve this exercise:\r
Clearance limit is SUGOL;\r
Unless otherwise instructed, MAX 250 kt at IAF.\r
The distance from MOLIX to SUGAL equals:\r
MOLIX ⇒ LUTEX (17 NM)\r
+ LUTEX ⇒ ROBVI (13 NM)\r
+ ROBVI ⇒ SUGOL (7.5 NM)\r
= 37.5 NM\r
The ground speed is 250 kt. Therefore, the time taken to cover 37.5 NM is: (37.5 NM ÷ 250 kt) x 60 = 9 minutes.\r
\r
Explanation Images:\r
- images/explanation_AT00091_img_1.png\r
\r
Options:\r
A. B\r
11 minutes\r
B. C\r
18 minutes\r
C. D\r
7 minutes\r
D. A\r
9 minutes ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00092\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
Given the following information and based on the actual time overhead B, what will be the Estimated Time of Overflight (ETO) and estimated remaining fuel at waypoint C? Fuel flow: 900 lb/h\r
\r
Images:\r
- images/AT00092_img_1.png\r
\r
Explanation:\r
Estimated flight time from Departure to "B" = 30 min (ATO 1140 - ETO 1210)\r
Estimated fuel burn = 450 lb (2800 lb - 2350 lb)\r
Actual flight time = 34 min (ATO 1140 - ATO 1214)\r
Actual fuel burn = 510 lb (2800 lb - 2290 lb)\r
Which gives a fuel consumption of 510 lb / 34 min = 900 lb/h\r
Second leg "B - C" is twice as long (distance) as the first leg (departure - B):\r
Flight time = 2 x 34 min = 68 min = 1h 08\r
ETO = 12h 14 + 1h 08 = 13h 22\r
Fuel burn = 1h 08 x 900 lb/h = 1020 lb\r
Fuel remaining = 2290 lb - 1020 lb = 1270 lb\r
\r
Options:\r
A. B\r
ETO 13:10, and estimated remaining fuel 1450 lb.\r
B. C\r
ETO 13:22, and estimated remaining fuel 1450 lb.\r
C. D\r
ETO 13:10, and estimated remaining fuel 1270 lb.\r
D. A\r
ETO 13:22, and estimated remaining fuel 1270 lb. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00093\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to ALICANTE - charts 19-1, 19-2 and 19-3 from Jeppesen GSPRM 2017.\r
An aircraft is flying VFR along the coastline, approaching Alicante Aerodrome (LEAL) from the southwest with plans to enter via the South Route and land at the airport. What is the latest point at which two-way radio contact with Alicante Tower must be established?\r
\r
Images:\r
- images/AT00093_img_1.png\r
- images/AT00093_img_2.png\r
- images/AT00093_img_3.png\r
\r
Explanation:\r
Refer to figure.\r
Chart 19-3\r
Arrivals\r
VFR ACFT, before entering ATZ, shall establish radio contact with Alicante TWR at or before reaching VFR REPs NE, SE or SW and request clearane before entering.\r
Note: Question states "flying near the coast", hence SW (and not SE).\r
\r
Explanation Images:\r
- images/explanation_AT00093_img_1.png\r
\r
Options:\r
A. A\r
At reporting point SE.\r
B. C\r
When crossing the ATZ boundary.\r
C. D\r
Overhead ALT VOR.\r
D. B\r
At reporting point SW. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00094\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
A pilot of a Commercial Air Transport operations company is planning to conduct an IFR flight from Departure aerodrome A, where a VOR approach can be only conducted with visibility below the landing minima, to a Destination aerodrome B above the planning minima but in IMC. Which considerations must be taken into account by the pilot during the pre-flight planning procedure, so as to determine the minimum fuel required, regarding that the above forecast conditions at both aerodromes are expected to remain the same?\r
\r
Explanation:\r
The weather at destination aerodrome is above the operating minima and is expected to remain the same.\r
Operating Mimima means minima for the IFR approach available, i.e. CAT ILS.\r
Planning Mimima for a destination aerodrome are effectively the applicable approach operating minima. The RVR or visibility should be the same as or greater than the minima for the actual approach for a non-precision approach.\r
Planning minima for alternate aerodromes are not the same as the aerodrome operating minima. Generally, higher cloud bases and visibilities are required than the minima. Thus, an alternate aerodrome with a CAT II approach allowing an RVR of 300 m would not be suitable for use as an alternate, unless the weather conditions were CAT I, 550 m RVR or better (allowing a safety margin).\r
During the pre-flight planning procedure, the pilot must consider:\r
Weather at Destination above Operating minima at ETA ± 1 hour.\r
Weather at Destination Alternate above Planning minima at ETA ± 1 hour.\r
Weather at Take-off Alternate Operating minima at ETA ± 1 hour.\r
And after Take-off:\r
Weather at Destination must be above Operating minima at ETA.\r
Weather at Destination Alternate must be above Planning minima at ETA.\r
Also, for a twin-engine aircraft, a Take-off alternate within 60 minutes flying time of the Deparure aerodrome with One-Engine-Inoperative must be considered.\r
Therefore, the destination aerodrome can be considered as the Take-off alternate, thus no Additional fuel is required.\r
\r
Options:\r
A. A\r
The pilot must select a destination alternate aerodrome that is within 1 hour's flight time from the destination aerodrome, and carry sufficient Alternate Fuel to reach that following an approach at the destination.\r
B. B\r
The pilot must select two destination alternate aerodromes and carry sufficient Alternate Fuel to reach both aerodromes following an approach at the destination.\r
C. C\r
NO destination alternate aerodrome is required as the weather at the destination aerodrome is forecast to remain above the planning minima, avoiding the need for Alternate Fuel.\r
D. D\r
The pilot must select a take-off alternate aerodrome, which could be the destination aerodrome if operational minima permit, avoiding the need for Additional Fuel. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00095\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
During a navigation flight, the pilot makes in-flight checks to monitor the progress of the flight. During the last leg, he/she notices that the planned timings overhead the chosen waypoints are NOT corresponding to the actual timings, and that the aircraft is getting behind the timings. Both the planned and actual airspeed are 160 kt. What is the main reason for the deviation from the planned timings?\r
\r
Explanation:\r
If the planned and actual airspeed are both 160 kt, and the pilot notices that the planned timings overhead the chosen waypoints are not corresponding to the actual timings, and that the aircraft is getting behind the timings, the main reason for the deviation from the planned timings is likely to be a headwind or tailwind component.\r
Wind is a major factor that affects the progress of a flight, and it can cause a deviation from the planned timings. A headwind component will slow down the aircraft and increase the flight time, while a tailwind component will speed up the aircraft and decrease the flight time.\r
The pilot should check the current wind conditions and make the necessary adjustments to the flight plan, such as adjusting the planned ground speed, fuel consumption, and arrival time. If the wind conditions are significantly different from those forecasted, the pilot may also consider diverting to an alternate airport or requesting a new clearance from ATC.\r
\r
Options:\r
A. A\r
The actual fuel consumption is different to the planned consumption.\r
B. B\r
The increase in aerodynamic drag resulting in a slower groundspeed.\r
C. D\r
The actual groundspeed is faster than that calculated during the planning phase.\r
D. C\r
The actual wind (direction or speed) is different to the forecast wind. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00096\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Which statement is correct regarding the altimeter temperature error correction during a final approach to an aerodrome?\r
\r
Explanation:\r
The altimeter is calibrated to standard atmosphere conditions and most of the time the environment is close enough to standard for any temperature induced errors to be minimal.\r
When the environment is warmer than standard, the aircraft will be higher than indicated, usually a safe error.\r
When the environment is colder than standard, the aircraft will be lower than indicated and this potentially a dangerous error. Temperature errors need to be taken into account when landing in very cold conditions. A temperature correction to the DH/DA or MDA/MDH and step-down fixes inside the Final Approach Fix (FAF) must be added in this case.\r
According to ICAO-Doc 8168-Vol.1-Flight Procedures-Part 1-Section 4-Ch. 1:\r
The flight crew is responsible for any necessary Temperature Error Correction to all all published minimum altitudes/heights including the altitudes/heights for the initial and intermediate segments; the DA/DH and subsequent missed approach altitudes/heights except for APV/BARO-VNAV approach procedures.\r
NOTE: The pilot is not responsible for temperature error corrections, when being radar vectored by ATC or when issued a direct routing. But this does not relieve the pilot of the responsibilty that any clearances issued by ATC are safe.\r
\r
Options:\r
A. A\r
Temperature error correction should be applied when the aerodrome temperature is much lower than ISA and subtracted from the DH/DA or MDH/MDA and step-down fixes inside the FAF.\r
B. B\r
Temperature error correction should be applied when the aerodrome temperature is ISA and below and subtracted only from the DH/DA or MDH/MDA.\r
C. D\r
Temperature error correction should be applied when the aerodrome temperature is ISA and below and added only to the DH/DA and MDH/MDA.\r
D. C\r
Temperature error correction should be applied when the aerodrome temperature is much lower than ISA and added to the DH/DA or MDH/MDA and step-down fixes inside the FAF. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00097\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
An aircraft is routing in IMC towards Aberdeen aerodrome from the south-east, where the Minimum Sector Altitude (MSA) is 2500 feet. While routing towards the ATF NDB at 3000 feet on the Aberdeen QNH, the following instruction is received by the pilot from the Approach Radar controller:\r
‘’Turn left, heading 285 degrees, descend 2300 feet. Radar vectors for the ILS Runway 34’’.\r
The pilot should…\r
\r
Explanation:\r
Radar vectoring means giving the pilot specific headings to maintain the desired track. When "under vectors" or "under radar control", it means that a radar control service is being provided, i.e. the PIC must do what he is told by the radar unit and the ATC assumes responsibility for separation and terrain clearance in flight, providing bearing, distance and height information on known conflicting traffic. Some services will also provide advisory avoiding action.\r
Thus, the PIC when "under vectors", should follow the ATC's instructions.\r
In a radar environment, heading information given by the pilot and heading instructions given by the controllers are in degrees magnetic.\r
Minimum Radar Vectoring Altitude (MRVA), also known as Minimum Vectoring Altitude (MVA), is the lowest alltitude, expressed in feet AMSL, to which a radar controller may issue aircraft altitude clearances during vectoring. MRVA allows the ATC to vector and descent an aircraft below MSA to achieve VFR or to join a procedure.\r
Therefore, the pilot should turn left to head 285°(M) and descend to 2300 feet. The minimum radar vectoring altitude may be below MSA.\r
\r
Options:\r
A. A\r
Maintain heading and altitude, and request new descent instructions, because 2300 feet is below MSA.\r
B. C\r
Turn left to head 285°(M) but maintain 3000 feet and request new descent instructions, because 2300 feet is below MSA.\r
C. D\r
Turn left to head 285°(T) and descend to 2500 feet altitude, because this is the MSA. Inform the controller about the change.\r
D. B\r
Turn left to head 285°(M) and descend to 2300 feet. The minimum radar vectoring altitude may be below MSA. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00098\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
(For this question use chart E(LO)1 from the Jeppesen GSPRM 2017).\r
For an IFR flight from KIRKWALL VOR(KWL)(N58°57', W002°54') to ABERDEEN VOR(ADN) (N57°18',W002°16'), via WICK VOR(WIK) (N58°27', W003°06'), following airways N560 and Y904, the magnetic track directions are respectively…\r
\r
Images:\r
- images/AT00098_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
On the leg from KWL to WIK, the opposite direction track is 015⁰(M) and, over such a short leg, the direction is not expected to change, so add 180⁰ and the reciprocal track 195⁰ (M) can be used.\r
From WIK to AND, the track is directly written as 161⁰ (M). All airways are magnetic tracks, unless expressly stated.\r
\r
Explanation Images:\r
- images/explanation_AT00098_img_1.png\r
\r
Options:\r
A. B\r
195° and 341°\r
B. C\r
015° and 161°\r
C. D\r
015° and 341°\r
D. A\r
195° and 161° ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00099\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
In an ATS flight plan item 15 (route), in terms of latitude and longitude, a significant point at 41°35'N 4°15'E should be entered as:\r
\r
Images:\r
- images/AT00099_img_1.png\r
\r
Explanation:\r
ICAO Doc 4444\r
Appendix 2\r
ITEM 15: ROUTE\r
(2) Significant point (2 to 11 characters)\r
The coded designator (2 to 5 characters) assigned to the point (e.g. LN, MAY, HADDY),\r
or, if no coded designator has been assigned, one of the following ways:\r
(...)\r
— Degrees and minutes (11 characters):\r
4 figures describing latitude in degrees and tens and units of minutes followed by “N” (North) or “S” (South), followed by 5 figures describing longitude in degrees and tens and units of minutes, followed by “E” (East) or “W” (West). Make up the correct number of figures, where necessary, by insertion of zeros, e.g. 4620N07805W.\r
\r
Options:\r
A. A\r
N04135E0415\r
B. B\r
N4135 E00415\r
C. D\r
41°35' N 04° 15'E\r
D. C\r
4135N00415E ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00100\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
What will be the effect of an incorrect cruise level entry into the FMC?\r
\r
Explanation:\r
Although the use of GNSS/FMC equipment has resulted in IFR navigation being much more accurate and less time consuming for the pilots, the systems can still suffer from errors and inaccuracies due to limitations such as the information and calculations provided by these systems are dependent upon the accurate input of data from the pilots and/or navigation database. Therefore, it is vital to ensure that the information input into the system is correct, especially when rerouting.\r
The Flight Management Computer (FMC) restricts the input of a cruising altitude that is not achievable based on the aircraft's weight and the prevailing temperature conditions. However, while in cruise, the FMC continuously recalculates the aircraft's performance data based on the air data and weight to determine if a climb to a higher altitude is feasible.\r
Entering an incorrect cruise level into the FMC can have significant consequences. The FMC uses the entered cruise level to calculate various parameters, including speeds, times, and fuel flows. If the cruise level is incorrect, these calculations will be based on inaccurate information. This can lead to incorrect flight performance predictions and affect the efficiency and accuracy of the aircraft's operation.\r
\r
Options:\r
A. A\r
The incorrect entry will be detected and the input will be prevented.\r
B. B\r
The aircraft will NOT be able to reach the ATC assigned cruise level.\r
C. C\r
There will be NO effect as the FMC will make an automatic correction.\r
D. D\r
The FMC will calculate incorrect speeds, times and fuel flows. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00101\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
What is the vertical distance flown for a climb from a departure aerodrome with elevation 3 500 ft and QNH 1030 hPa until a cruise altitude at FL250?\r
(Assume 30 ft per 1 hPa)\r
\r
Explanation:\r
Refer to figure.\r
In this question, we are given a pressure altitude (in the form of a flight level) and are asked for the terrain clearance, therefore we need to determine the corresponding true altitude.\r
The first step is to compute the pressure correction by considering the deviation from the standard mean sea level pressure of 1013 hPa: 1030 hPa - 1013 hPa = 17 hPa. The question provides a barometric lapse rate near the surface of 30 ft/hPa, the pressure correction can be calculated as follows: Pressure correction = 17 hPa x 30 ft/hPa = ­­­510 ft. This value needs to be added to the pressure altitude as per the rules below:\r
Indicated altitude = 25 000 ft + 510 ft = 25 510 ft.\r
Next, we need to determine the temperature correction. In this case, the temperature is not provided, therefore we will assume ISA conditions.\r
Thus, the height of the aircraft above airfield datum will be: True Altitude - Airfield datum elevation = 25 510 - 3 500 ft = 22 010 ft.\r
RULES. The following rules should be considered for altimetry calculations:\r
All calculations are based on rounded pressure values to the nearest lower hPa.\r
The value for the barometric lapse rate between MSL and 500 hPa to be used is 30 ft/hPa as an acceptable approximation of the barometric lapse rate.\r
To determine the true altitude/height, the following rule of thumb, called the ‘4 %-rule’, shall be used: the altitude/height changes by 4% for each 10°C temperature deviation from ISA.\r
For simplification: Height correction for the temp = 4 × (ISA DEV) × Indicated alt/1000 = ___ ft\r
If no further information is given, the deviation of the outside-air temperature from ISA is considered to be the same throughout the whole layer.\r
The elevation of the aerodrome has to be taken into account. The temperature correction has to be considered for the layer between the station (usually an aerodrome) and the position of the aircraft.\r
IF\r
THEN\r
Higher pressure\r
Indicated Altitude > Pressure Altitude\r
Lower pressure\r
Indicated Altitude < Pressure Altitude\r
Warmer than ISA\r
True Altitude > Indicated Altitude\r
Colder than ISA\r
True Altitude < Indicated Altitude\r
Definitions\r
Pressure Altitude: The altimeter indication with standard pressure (1013.2 hPa) set.\r
Indicated Altitude: The altimeter indication with local QNH set.\r
True altitude: The actual altitude of the aircraft above mean sea level.\r
\r
Explanation Images:\r
- images/explanation_AT00101_img_1.png\r
\r
Options:\r
A. A\r
29 000 ft\r
B. C\r
24 500 ft\r
C. D\r
25 500 ft\r
D. B\r
22 000 ft ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00102\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to E(LO)2 chart from Jeppesen GSPRM 2017.\r
You are flying a Commercial Air Transport operation close to LELYSTAD aerodrome (EHLE, N52°28' E005°32'). To get your distance from the aerodrome, you want to tune in to the radio navigation aid at the aerodrome. What value do you to tune into and what is the identifier of this aid?\r
\r
Images:\r
- images/AT00102_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Lelystad Aerodrome (EHLE) has a DME with a frequency of 111.4 MHZ and Identifier FRO. This would provide the pilot with a slant range to the beacon located on the aerodrome. The information of being a Commercial Air Transport operation is irrelevant as this is applicable regardless of aircraft type.\r
\r
Explanation Images:\r
- images/explanation_AT00102_img_1.png\r
\r
Options:\r
A. A\r
The channel is 51, and the identifier is FRO\r
B. B\r
The frequency is 123.67 MHz, and the identifier is AFIS\r
C. D\r
The frequency is 326 kHz, and the identifier is LLS\r
D. C\r
The frequency is 111.4 MHz, and the identifier is FRO. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00103\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure or to Amsterdam chart 10-3C from the Jeppesen GSPRM 2017.\r
An aircraft is cleared for the ANDIK2F SID to an altitude of 6000 ft and is then is reauthorized to climb to FL330. You are climbing with an average TAS of 381 kts and a 20 kt tailwind. The climb is 103 NAM (Nautical Air Miles). What is the total distance covered after waypoint ANDIK until top-of-climb?\r
\r
Images:\r
- images/AT00103_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
The distance from take-off until ANDIK is 2.4 + 1 + 9 + 20 = 32.4 NGM. (There is no indication for the distance from take-off until EH019)\r
We must first calculate how much distance we will cover to reach FL330:\r
NAM = NGM x (TAS/GS)\r
NGM = NAM x (GS/TAS)\r
NGM = 103 x (401/381)\r
NGM = 108.4 NGM\r
We can now calculate how far after ANDIK the aircraft will reach FL330:\r
108.4 NGM - 32.4 NGM = 76 NGM\r
The aircraft will reach FL330 76 NGM after ANDIK.\r
Note: This question is based on incomplete feedback. If you encounter this question in your exam, please send us your feedback. Thank you!\r
\r
Explanation Images:\r
- images/explanation_AT00103_img_1.png\r
\r
Options:\r
A. A\r
100 NGM\r
B. B\r
70 NAM\r
C. C\r
90 NGM\r
D. D\r
76 NGM ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00104\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Given the following data for the pre-flight calculations, determine the Contingency Fuel for a Commercial Air Transport flight with a Performance Class A aeroplane. Assume the Basic Fuel Scheme WITHOUT variations applies.\r
Trip Fuel: 2300 lb\r
Alternate Fuel: 950 lb\r
Taxi Fuel: 180 lb\r
Reserve Fuel: 480 lb\r
En-route alternate: NOT applicable\r
Fuel to fly 5 minutes at 1500 ft above destination: 80 lb\r
Extra Fuel: 0 lb\r
Discretionary Fuel: 0 lb\r
\r
Explanation:\r
Please Note: This conforms to the Basic Fuel scheme WITHOUT variations under the new fuel/energy regulations. The primary difference if variations are included is the ability to use lesser amounts of contingency fuel, such as 3% if a suitable ERA is provided.\r
Regulation (EU) No 965/2012\r
AMC1 CAT.OP.MPA.181 Fuel/energy scheme - fuel/energy planning and in-flight re-planning policy — aeroplane\r
BASIC FUEL SCHEME — PRE-FLIGHT CALCULATION OF USABLE FUEL FOR PERFORMANCE CLASS A AEROPLANES\r
For the pre-flight calculation of the usable fuel in accordance with point CAT.OP.MPA.181, the operator should:\r
(c) for contingency fuel, calculate for unforeseen factors either:\r
(1) 5 % of the planned trip fuel or, in the event of in-flight re-planning, 5 % of the trip fuel for the remainder of the flight; or\r
(2) an amount to fly for 5 minutes at holding speed at 1 500 ft (450 m) above the destination aerodrome in standard conditions,\r
whichever is the higher;\r
(c) Contingency Fuel the higher of:\r
(A) 5 % of the planned trip fuel (...);\r
OR\r
(ii) or an amount to fly for 5 minutes at holding speed at 1 500 ft (450 m), (A) 5% x 2300 lb = 115 lb.\r
\r
\r
(ii) 80 lbs\r
\r
Options:\r
A. A\r
80 lb\r
B. B\r
69 lb\r
C. C\r
230 lb\r
D. D\r
115 lb ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00105\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
For the purposes of Item 9 (Wake turbulence category) of the ATC flight plan, an aircraft with a maximum certificated take-off mass of 62000 kg is:\r
\r
Explanation:\r
ICAO Doc 4444\r
Air Traffic Management (PANS-ATM)\r
4.9.1 Wake turbulence categories of aircraft\r
4.9.1.1 Wake turbulence separation minima shall be based on a grouping of aircraft types into three categories according to the maximum certificated take-off mass as follows:\r
a) HEAVY (H) — all aircraft types of 136 000 kg or more;\r
b) MEDIUM (M) — aircraft types less than 136 000 kg but more than 7 000 kg; and\r
c) LIGHT (L) — aircraft types of 7 000 kg or less.\r
\r
Options:\r
A. A\r
heavy ”H”\r
B. B\r
unclassified “U”\r
C. C\r
light “L”\r
D. D\r
medium “M” ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00106\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
A Commercial Air Transport flight of 3 hours total flight time is planned to an aerodrome where no alternate is required. 1.5 hours after take-off, the pilot is informed that there will be a delay due to traffic on arriving at destination, thus he/she has to use 8 minutes out of the 15 minutes additional fuel. What action should be done in this case?\r
\r
Explanation:\r
Additional fuel is an amount of fuel which is only applicable to some operations and it can cater for the “what ifs” at the most critical point.\r
1. According to EASA AIR OPS - CAT.OP.MPA.280 In-flight fuel management – aeroplanes:\r
The operator shall establish a procedure to ensure that in-flight fuel checks and fuel management are carried out according to the following criteria.\r
(b) In-flight fuel management\r
(1) The flight shall be conducted so that the expected usable fuel remaining on arrival at the destination aerodrome is not less than:\r
(i) the required alternate fuel plus final reserve fuel; or\r
(ii) the final reserve fuel if no alternate aerodrome is required.\r
(2) If an in-flight fuel check shows that the expected usable fuel remaining on arrival at the destination aerodrome is less than:\r
(ii) the final reserve fuel if no alternate aerodrome is required, the commander shall take appropriate action and proceed to an adequate aerodrome so as to perform a safe landing with not less than final reserve fuel.\r
2. According to AMC1-CAT.OP.MPA.150(b)-Fuel Policy Planning Criteria-Aeroplanes:\r
(6) The minimum additional fuel, which should permit:\r
(ii) holding for 15 minutes at 1 500 ft (450 m) above destination aerodrome elevation in standard conditions, when a flight is operated without a destination alternate aerodrome.\r
Since it is expected that only 8 out of the 15 minutes will be burnt on arriving at destination due to traffic, that means that the aircraft is expected to land with the final reserve fuel in tanks.\r
Thus, the best action is to proceed to the destination given that the aircraft can land with final reserve fuel intact.\r
\r
Options:\r
A. A\r
Check the weather and if within minima proceed to the destination.\r
B. B\r
Proceed to an in-flight re-planning at a destination alternate.\r
C. C\r
Declare an emergency when arriving at destination and ask for a priority clearance.\r
D. D\r
Proceed to the destination given that the aircraft can land with final reserve fuel intact. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00107\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
A crew is planning a flight from an airfield with NO ICAO designator and NO IFR procedures. Due to the weather and preferred routing, they intend to join airway L975 at point MALUD soon after departure. The route section of item 15 on the ATS Flight Plan should begin with...\r
\r
Explanation:\r
Refer to figures.\r
ICAO Doc 4444\r
Appendix 2 FLIGHT PLAN\r
ITEM 15: ROUTE\r
(c) Route (including changes of speed, level and/or flight rules)\r
Flights along designated ATS routes\r
INSERT, if the departure aerodrome is located on or connected to the ATS route, the designator of the first ATS route,\r
OR, if the departure aerodrome is not on or connected to the ATS route, the letters DCT followed by the point of joining the first ATS route, followed by the designator of the ATS route.\r
THEN\r
INSERT each point at which either a change of speed and/or level is planned to commence, or a change of ATS route, and/or a change of flight rules is planned,\r
\r
Explanation Images:\r
- images/explanation_AT00107_img_1.png\r
- images/explanation_AT00107_img_2.png\r
- images/explanation_AT00107_img_3.png\r
\r
Options:\r
A. B\r
MALUD L975...\r
B. C\r
ZZZZ MALUD L975...\r
C. D\r
DCT L975 VIA MALUD\r
D. A\r
DCT MALUD L975... ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00108\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure or chart E(HI)2 from the Jeppesen GSPRM 2017.\r
You have been requested to perform a flight overflying the Rennes VOR (REN) (N48°04' W001°45') and the ORIST waypoint (N50°00' W001°51'). Which airway would you file in your flight plan?\r
\r
Images:\r
- images/AT00108_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
After Rennes VOR (REN) three airways follow: UP87, UY110 and UN862. Examine the waypoints that each one airway intersects and decide which one crosses ORIST RNAV waypoint.\r
The airway UP87 after REVTU RNAV waypoint diverts to BOLRO RNAV waypoint.\r
The airway UN862 after UPALO waypoint diverts to SKESO waypoint.\r
The airway UY110 after REVTU RNAV waypoint diverts to ORIST RNAV waypoint.\r
Therefore, to perform a flight overflying the Rennes VOR (REN) and the ORIST waypoint, the only airway filed in your flight plan must be the UY110.\r
\r
Explanation Images:\r
- images/explanation_AT00108_img_1.png\r
\r
Options:\r
A. A\r
UP87\r
B. B\r
UT 507\r
C. C\r
UN862\r
D. D\r
UY110 ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00109\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
The annex depicts a pilot's flight log from LPFR to LEMG extracted by a flight planning software. When approaching VJF, the pilots feels abnormal airframe vibrations and reduces speed from VJF. Their IAS and TAS both decrease by 30 kt. What will be the new leg times of Tarifa to Estepona and Estepona to Benalmaneda?\r
\r
Images:\r
- images/AT00109_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
Keeping this as simple as possible, if the TAS decreases by 30 kt then the GS will decrease by 30 kt also, which gives us an expected GS of 87 kt to Estepona, 85 kt to TOD then 88 kt to Benalmadena. There are more precise methods to do this, but given the spread of the options, this is absolutely the fastest way to get the correct answer\r
To Estepona\r
With a GS of 87 kt, the 32.6 nm leg to Estepona will now take (32.6/87) x 60 = 22.5 minutes.\r
To TOD\r
With a GS of 85 kt, the 30.9 nm leg to TOD will now take (30.9/85) x 60 = 21.8 minutes.\r
To Benalmadena\r
With a GS of 88 kt the 0.9 nm leg to Benalmadena will now take (0.9/88) x 60 = 0.6 minutes.\r
Tarifa to Estepona 22.5 min.\r
Estepona To Benalmadena 21.8 + 0.6 = 22.4 min.\r
The closest answer here is 23 min and 23 min.\r
\r
Explanation Images:\r
- images/explanation_AT00109_img_1.png\r
\r
Options:\r
A. B\r
13 minutes to Estepona then 19 minutes to Benalmadena.\r
B. C\r
19 minutes to Estepona then 20 minutes to Benalmadena.\r
C. D\r
20 minutes to Estepona then 20 minutes to Benalmadena.\r
D. A\r
23 minutes to Estepona then 23 minutes to Benalmadena. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00110\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Which of the following circumstances would be considered suitable for fuel tankering?\r
1. The estimated landing mass is equal to the maximum landing mass.\r
2. The weather at the destination is below landing minima.\r
3. Unable to climb to the Minimum Obstacle Clearance Altitude (MOCA) should an engine fail.\r
4. There is no fuel available at the destination aerodrome.\r
\r
Explanation:\r
Aviation is a very competitive market and each airline needs to minimise operating costs, in order to keep its ticket prices as competitive as possible. Fuel tankering is a practice whereby an aircraft carries more fuel than required for its next flight (trip fuel + reserve) in order to reduce or avoid refuelling at the destination airport. However, the additional fuel carried when doing fuel tankering increases the aircraft's weight and therefore increases its fuel consumption, resulting in additional CO2 emissions.\r
Fuel tankering provides financial savings mainly due to fuel price differences at airports. It is done in 90% of cases for fuel price reasons, and only in 10% of cases for social disruption, technical failures at the refuelling facility, fuel shortages, risks of delays, or contaminated fuel at destination airports. For fuel tankering to be economical the fuel price at the destination must be greater than the break even fuel price.\r
You may tanker fuel in case of/if: You will not tanker fuel if:\r
Adverse destination weather The cost of fuel is higher at the Departure than destination aerodrome\r
Fuel shortages at destination\r
Low performance – not sufficient to clear MOCA with one engine inop\r
The cost of fuel at destination is higher than at the departure aerodrome Estimated landing mass at destination equals maximum landing mass\r
\r
Options:\r
A. A\r
1 and 2\r
B. C\r
2 and 3\r
C. D\r
1 and 4\r
D. B\r
2 and 4 ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00111\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
The figure depicts a fuel plan as created by a flight planning tool for a return flight LFPG-EIDW-LFPG. During the pre-flight preparations, the Operations Department calls the pilot and advises him/her to refuel at LFPG, due to some fuel-supply issues at EIDW. In order to reduce the environmental impact, the pilot will consider the least possible fuel tankering. What is the MINIMUM amount of fuel tankering to ensure the target fuel for EIDW-LFPG remains on board after landing at EIDW?\r
\r
Images:\r
- images/AT00111_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
The Minimum Block Fuel that is required at EIDW to return to LFPG is: 7 100 kg.\r
We will assume that trip, contingency* and taxi fuel will be burnt: 230 kg + 2 933 kg + 157 kg = 3 320 kg.\r
* We should assume contingency is burnt, because if we do use it, we will below minimum block fuel for the return.\r
For the flight LFPG-EIDW, the crew have loaded a total of 5 226 kg. This means they will land at EIDW with 1 906 kg onboard (after burning taxi, contingency and trip fuel).\r
For the flight back (EIDW - LFPG), the crew needs a minimum block fuel of 7 100 kg. Therefore, at LFPG, they should load 7 100 kg - 1 906 kg = 5 194 kg extra.\r
However, carrying more fuel, adds weight to the aircraft and increases the fuel consumption. So, the fuel penalty from LFPG to EIDW must be applied. For every weight change per 1 000 kg, add 60 Kg to the Total fuel: 5 194 kg / 1 000 x 60 kg = 312 kg.\r
Therefore, the Minimum fuel amount that must be tankered, after applying the Fuel Penalty at LFPG must be: 5 194 kg + 312 kg = 5 506 kg.\r
\r
Explanation Images:\r
- images/explanation_AT00111_img_1.png\r
\r
Options:\r
A. A\r
4432 kg\r
B. B\r
7526 kg\r
C. C\r
3495 kg\r
D. D\r
5506 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00112\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
A flight from aerodrome A to aerodrome B is planned using the Reduced Contingency Fuel Procedure. The decision point along the route is DP and aerodrome C is the optional refuelling destination. Given the following data calculate the minimum fuel required for the flight from A to B.\r
Taxi Fuel: 250 kg\r
Alternate Fuel: 2000 kg\r
Final Reserve Fuel: 1500\r
Trip Fuel A to B via DP: 13000 kg\r
Trip Fuel A to C via DP: 11000 kg\r
Trip Fuel DP to B: 5000 kg\r
\r
Explanation:\r
Refer to figure.\r
When an operator's fuel policy includes pre-flight using Reduced Contingency Fuel (RCF) procedure to a Destination 1 aerodrome (commercial destination), a Decision Point (DP) will be defined enroute along with a Destination 2 aerodrome (optional refuelling destination), the amount of usable fuel, on board for departure, shall be the greater of (1) or (2) below:\r
(1) The sum of:\r
Taxi fuel: 250 kg\r
Trip fuel to the destination B aerodrome, via the decision point: 13000 kg\r
Contingency fuel equal to not less than 5 % of the estimated fuel consumption from the decision point to the destination 1 aerodrome: 5% x 5000 kg = 250 kg\r
Alternate fuel: 2000 kg\r
Final reserve fuel: 1500 kg\r
Additional fuel: 0\r
Extra fuel: 0\r
RCF1: 17 000 kg\r
(2) The sum of:\r
Taxi fuel: 250 kg\r
Trip fuel to the destination C aerodrome, via the decision point: 11000 kg\r
Contingency fuel equal to not less than the amount that is calculated in accordance with point (c)* of this AMC, from the departure aerodrome to the destination 2 aerodrome; 11000 kg x 5% = 550 kg\r
or\r
an amount to fly for 5 minutes at holding speed at 1 500 ft (450 m), above the destination aerodrome in standard conditions: In this case, the question does not provide fuel flow, so we are unable to calculate this.\r
Alternate fuel: 2000 kg\r
Final reserve fuel: 1500 kg,\r
Additional fuel: 0\r
Extra fuel: 0\r
RCF2: 15 300kg\r
The greater sum between RCF1 and RCF2 is RCF1: 17 000 kg.\r
Note: 95 % of the time RCF 1 (A to B) will require the largest total fuel. However, always calculate RCF 2, because there are questions where that is the largest.\r
\r
Explanation Images:\r
- images/explanation_AT00112_img_1.png\r
\r
Options:\r
A. B\r
15300 kg\r
B. C\r
16700 kg\r
C. D\r
17400 kg\r
D. A\r
17000 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00113\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure or to Stuttgart (EDDS) chart 12-2 RNP Rwy 25 from the Jeppesen GSPRM 2017.\r
The LNAV/VNAV decision altitude for the RNP approach to runway 25 for aircraft approach categories A, B or C is:\r
\r
Images:\r
- images/AT00113_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
The decision altitude for the RNP approach to runway 25, using LNAV/VNAV, can be found at the bottom of the plate. Look for the LNAV/VNAV Decision Altitude (DA), which is specified as 1590 feet (with a Decision Height, DH, of 409 feet).\r
\r
Explanation Images:\r
- images/explanation_AT00113_img_1.png\r
\r
Options:\r
A. A\r
1590 m\r
B. C\r
409 ft\r
C. D\r
1 620 ft\r
D. B\r
1 590 ft ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00114\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
The flight crew of a turbojet aeroplane prepares a flight using the following data.\r
Flight leg distance: 4 000 NM\r
Flight level FL 310\r
True airspeed: 450 kt\r
Headwind component at this level: 50 kt\r
Initially planned take-off mass (without extra fuel on board): 170 000 kg\r
Fuel price: 0.27 Euro/l at departure 0.30 Euro/l at destination\r
To maximize savings, the commander chooses to carry extra fuel in addition to that which is necessary. Using the appended annex, the optimum quantity of fuel which should be carried in addition to the prescribed quantity is:\r
\r
Images:\r
- images/AT00114_img_1.png\r
- images/AT00114_img_2.png\r
\r
Explanation:\r
Refer to figure.\r
To enter the table we first need to know fuel/price ratio and distance in NAM:\r
Calculate the fuel/price ratio. Use the formula: fuel/price ratio = Fuel price at departure/Fuel price at destination\r
Fuel/price ratio = 0.27 ÷ 0.30 = 0.9\r
Convert NGM into NAM. Use the formula: NAM = NGM x TAS ÷ GS\r
NAM = 4 000 x 450/400 = 4500 NAM\r
Using the table provided, find your optimum aircraft mass for tankering purposes:\r
1. Enter the table on the left-hand side with your fuel price ratio of 0.90.\r
2. Draw a horizontal line to the right, intersect with the Air Distance Covered: 4500 NM.\r
3. From this point, continue downwards and read an optimum aircraft mass of 178 000 kg.\r
With regards to this question, planned take-off mass: 170 000 kg => from this result we could say that tankering would be beneficial => an additional 8 000 kg (178 000 kg - 170 000 kg) should be carried.\r
Note: If the actual Take-off Mass is higher, there would be no economic benefit in tankering.\r
\r
Explanation Images:\r
- images/explanation_AT00114_img_1.png\r
\r
Options:\r
A. A\r
18 000 kg\r
B. B\r
32 000 kg\r
C. C\r
The fuel transport operation is not recommended in this case.\r
D. D\r
8 000 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00115\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
What is the difference between GNSS planned and unplanned outages?\r
\r
Explanation:\r
Notice Advisory to Navstar Users (NANU) is an advisory message to inform users of a change in the GPS constellation. These messages are released 72 hours in advance of planned maintenance. These messages are also used to notify users of unscheduled outages. General NANUs can be used to disseminate general GPS information.\r
Outages come in two varieties: planned and unplanned.\r
Planned are all the activities/events that have been scheduled and that could potentially have an impact on the Signal-in-Space (SiS) and/or the performance levels. Planned NAGUs aim to inform users about the activity/event with a reasonable advance notice, ahead of their occurrence. The planned outages, in space or ground segment, can potentially cause an outage of the broadcast satellite SiS. A planned outage will be announced ahead of time and usually means some sort of maintenance is taking place.\r
Unplanned are all the activities/events that have an impact on the SiS and/or the performance levels that have not been scheduled and could not be foreseen in advance, before their occurrence. The aim of unplanned NAGUs is to inform users about the activity/event within a reasonable time, after their occurrence.\r
The difference between the planned and unplanned outages of GPS is that a planned outage is well recognisable during flight preparation, because relevant monitoring tools and NOTAMs will most probably indicate some problems. On the other hand, in case of unplanned outage, it is possible that the pilot will become aware mid-flight that integrity is lost. Therefore, the pilot should develop and maintain good practise in using backup conventional navigation whenever possible.\r
\r
Options:\r
A. A\r
Unplanned outages are notified weekly.\r
B. B\r
Unplanned outages are NOT notified.\r
C. D\r
Planned outages are not notified.\r
D. C\r
Planned outages are notified in advance. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00116\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to chart E(LO)2 from Jeppesen GSPRM 2017.\r
Find the magnetic bearing and distance from Trent (TNT) VOR/DME (53°03'N, 001°40'W) to waypoint AMVEL (53°11'N, 000° 02'W).\r
\r
Images:\r
- images/AT00116_img_1.png\r
\r
Explanation:\r
Refer to figure.\r
For this question you need a plotter to find the true bearing initially and a ruler to measure the distance between Trent (TNT) VOR/DME and waypoint AMVEL.\r
Firstly, find the exact position of Trent (TNT) VOR/DME and waypoint AMVEL on your E(LO)2 chart, using the coordinates given and draw a line with your pencil to connect these two points.\r
Center your plotter at the centre of Trent (TNT) VOR/DME symbol, since the question asks for the magnetic bearing from Trent (TNT) VOR/DME.\r
Align the upper section of your plotter with the drawn line which connects the two points.\r
Rotate the plotter’s disc, until its arrows are parallel with the chart’s meridians and indicate the True North.\r
The course arrow indicates the true bearing from Trent (TNT) VOR/DME to waypoint AMVEL: 082oT.\r
Variation is 001oW, thus the magnetic bearing from Trent (TNT) VOR/DME to waypoint AMVEL is: 082oT+ 1o = 083o M(Variation West, Magnetic Best).\r
Furthermore, it is known that the E(LO)2 chart's scale is "1 INCH = 15 NM", depicted on the upper section of the chart. So, using a ruler, you will find that the distance in inches between Trent (TNT) VOR/DME and waypoint AMVEL is 37/8 inches. Thus, the distance in nautical miles is approximately 58.1 NM.\r
Therefore, the closest to the above findings option is: 084°M / 59 NM.\r
\r
Explanation Images:\r
- images/explanation_AT00116_img_1.png\r
\r
Options:\r
A. A\r
080°M / 51 NM\r
B. B\r
264°M / 58 NM\r
C. C\r
260°M / 52 NM\r
D. D\r
084°M / 59 NM ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00117\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to figure.\r
After the pre-flight preparation, the flight plan log shown in the annex was completed, taking into account the meteorological conditions for the scheduled Estimated Time of Departure at 07:30 UTC. Due to the passage of a cold front, a delay is expected for 3 hours. What will be the revised Groundspeed between WPT B and WPT C because of the expected delay?\r
\r
Images:\r
- images/AT00117_img_1.png\r
\r
Explanation:\r
Refer to figures.\r
Because of the 3-hour delay, the Estimated Time of Departure will be at 10:30 UTC. Thus, the right hand wind and temperature forecast table should be taken into account. So, there will be differentiation to the TAS and as a consequence to the Groundspeed from Waypoint B to C, because of the new OAT (M25).\r
Using your Flight/Nav computer, find the new TAS at FL100:\r
In the Airspeed correction window, align FL100 with OAT -25ºC.\r
Opposite CAS 155 kt on inner scale, read TAS 173 kt on outer scale.\r
Using again your Flight/Nav computer, find the new Groundspeed: TAS 173 kt, Wind 165°(T)/55kt, True Track 245° from the flight plan/log:\r
Set wind direction 165º under the True index.\r
Mark wind velocity 55 kt up from the centre dot.\r
Rotate the disc until the true course 245º is under the True index.\r
Slide wind velocity mark to TAS 173 kt.\r
New Goundspeed 155 kt reads under the centre dot.\r
\r
Explanation Images:\r
- images/explanation_AT00117_img_1.png\r
- images/explanation_AT00117_img_2.png\r
- images/explanation_AT00117_img_3.png\r
- images/explanation_AT00117_img_4.png\r
\r
Options:\r
A. A\r
181 knots\r
B. C\r
164 knots\r
C. D\r
149 knots\r
D. B\r
155 knots ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00118\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
For pre-flight planning purposes, what is the minimum Fuel required for the Commercial Air Transport flight with a Jet aircraft, given the following information? Assume the Basic Fuel Scheme WITHOUT variations applies.\r
Trip Fuel: 3 780 kg\r
Fuel to alternate: 987 kg\r
Taxi Fuel: 120 kg\r
Fuel flow at 1 500 feet above destination alternate aerodrome: 2 232 kg/h\r
Extra Fuel: 0 kg\r
Discretionary Fuel: 0 kg\r
\r
Explanation:\r
Please Note: This conforms to the Basic Fuel scheme WITHOUT variations under the new fuel/energy regulations. The primary difference if variations are included is the ability to use lesser amounts of contingency fuel, such as 3% if a suitable ERA is provided.\r
AMC1 CAT.OP.MPA.181 Fuel/energy scheme - fuel/energy planning and in-flight re-planning policy — aeroplane\r
PLANNING CRITERIA — AEROPLANES\r
The operator should base the defined fuel policy, including calculation of the amount of fuel to be on board for departure, on the following planning criteria:\r
(refer to the last paragraph of the explanation for full Regulation details)\r
(a) Basic Fuel Scheme\r
The usable fuel to be on board for dispatch should be the sum of the following:\r
(1) Taxi fuel\r
Taxi fuel including APU usage\r
In this case, as stated in the question text.\r
120 kg\r
(2) Trip fuel In this case, as stated in the question text. 3780 kg\r
(3) Contingency Fuel In this case, the higher of:\r
(A) 5 % of the planned trip fuel;\r
OR\r
(ii) or an amount to fly for 5 minutes at holding speed at 1 500 ft (450 m), (A) 5% x 3 780 kg = 189 kg\r
\r
\r
(ii) 5 min x 2 232 kg/h = 186 kg\r
(4) Alternate Fuel\r
In this case, as stated in the question text.\r
The fuel to reach the destination alternate from the destination, based on the destination alternate aerodrome that requires the greater amount of fuel.\r
987 kg\r
(5) Final Reserve Fuel “for aeroplanes with turbine engines, fuel to fly for 30 minutes at holding speed at 1 500 ft (450 m) above aerodrome elevation in standard conditions” 30 min x 2232 kg/h = 1116 kg\r
(6) Additional Fuel N/A\r
(7) Extra Fuel N/A\r
(8) Discretionary Fuel (This is a new addition to the regulations in 2022, and is the “Commander’s discretionary fuel”) N/A\r
TOTAL\r
-----------------------------\r
6192 kg\r
Regulation (EU) No 965/2012\r
AMC1 CAT.OP.MPA.181 Fuel/energy scheme - fuel/energy planning and in-flight re-planning policy — aeroplane\r
BASIC FUEL SCHEME — PRE-FLIGHT CALCULATION OF USABLE FUEL FOR PERFORMANCE CLASS A AEROPLANES\r
For the pre-flight calculation of the usable fuel in accordance with point CAT.OP.MPA.181, the operator should:\r
(a) for taxi fuel, take into account the local conditions at the departure aerodrome and the APU consumption;\r
(b) for trip fuel, include:\r
(1) fuel for take-off and climb from the aerodrome elevation to the initial cruising level/altitude, taking into account the expected departure routing;\r
(2) fuel from the top of climb to the top of descent, including any step climb/descent;\r
(3) fuel from the top of descent to the point where the approach procedure is initiated, taking into account the expected arrival routing; and\r
(4) fuel for making an approach and landing at the destination aerodrome;\r
(c) for contingency fuel, calculate for unforeseen factors either:\r
(1) 5 % of the planned trip fuel or, in the event of in-flight re-planning, 5 % of the trip fuel for the remainder of the flight; or\r
(2) an amount to fly for 5 minutes at holding speed at 1 500 ft (450 m) above the destination aerodrome in standard conditions,\r
whichever is the higher;\r
(d) for destination alternate fuel, include:\r
(1) when the aircraft is operated with one destination alternate aerodrome:\r
(i) fuel for a missed approach from the applicable DA/H or MDA/H at the destination aerodrome to the missed-approach altitude, taking into account the complete missed-approach procedure;\r
(ii) fuel for climb from the missed-approach altitude to the cruising level/altitude, taking into account the expected departure routing;\r
(iii) fuel for cruising from the top of climb to the top of descent, taking into account the expected routing;\r
(iv) fuel for descent from the top of descent to the point where the approach is initiated, taking into account the expected arrival routing; and\r
(v) fuel for making an approach and landing at the destination alternate aerodrome; and\r
(2) when the aircraft is operated with two destination alternate aerodromes, the amount of fuel that is calculated in accordance with point (d)(1), based on the destination alternate aerodrome that requires the greater amount of fuel;\r
(e) for FRF, comply with point CAT.OP.MPA.181(c);\r
...(c) final reserve fuel/energy that shall be the amount of fuel/energy that is calculated at holding speed at 1 500ft (450 m) above the aerodrome elevation in standard conditions according to the aeroplane estimated mass on arrival at the destination alternate aerodrome, or destination aerodrome when no destination alternate aerodrome is required, and shall not be less than:\r
(i) for aeroplanes with reciprocating engines, the fuel/energy to fly for 45 minutes; or\r
(ii) for turbine-engined aeroplanes, the fuel/energy to fly for 30 minutes;...\r
(f) for additional fuel, include an amount of fuel that allows the aeroplane to proceed, in the event of an engine failure or loss of pressurisation, from the most critical point along the route to a fuel en route alternate (fuel ERA) aerodrome in the relevant aircraft configuration, hold there for 15 minutes at 1 500 ft (450 m) above the aerodrome elevation in standard conditions, make an approach, and land;\r
(g) for extra fuel, include anticipated delays or specific operational constraints that can be predicted; and\r
(h) for discretionary fuel, include a quantity at the sole discretion of the commander.\r
\r
Options:\r
A. A\r
7119 kg\r
B. B\r
6003 kg\r
C. D\r
4887 kg\r
D. C\r
6192 kg ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
Question Number: AT00119\r
Subject: ATPL(A) (EASA 2020) | 033 - Flight Planning Monitoring\r
\r
Refer to VFR chart ED(4) from GSPRM 2017.\r
While planning a day VFR flight between Freistadt aerodrome LOLF (N48°31', E014°25') to Dingolfing aerodrome EDPD (N48°40', E012°30'), you need to select visually conspicuous point for the sector West of the E013°45' to record the progress of the flight. Which of the following is the best waypoint?\r
\r
Images:\r
- images/AT00119_img_1.png\r
- images/AT00119_img_2.png\r
\r
Explanation:\r
Refer to figure.\r
During VFR flying it is important to mark the route with some visual points to check the progress of your flight, those visual points can be lakes, mountain to be crossed, railway, big road, etc.\r
1- Locate the location of both airports.\r
2- Draw a line between them.\r
3- you will find that after crossing 13˚45’E that the first visual location that can be checkpoint is the motorway bridge at N48˚36’,E13˚22’.\r
\r
Explanation Images:\r
- images/explanation_AT00119_img_1.png\r
\r
Options:\r
A. B\r
The lighted mass at N48°47', E012°53'.\r
B. C\r
Vilshofen aerodrome (EDMV) at N48°38', E013°12'.\r
C. D\r
The mast at N48°32', E013°36'.\r
D. A\r
The motorway bridge at N48°36', E13°22'. ✓ (CORRECT)\r
\r
Correct Answer: D.\r
\r
--------------------\r
\r
`,C0=`Question Number: AT00001\r
- Name: Alsanafi\r
  Comment: I like to solve it Step by step :\r
\r
1) Fuel difference = 360-241=119\r
\r
2) ETO difference = 18:52-19:45=53min\r
Fuel/Time = 119/(53/60)=134.7 kg/h\r
\r
3) ATO difference= 18:52-19:42=50min\r
Fuel Time= 119/(50/60)=142.8 kg/h\r
\r
4) Fuel consumption difference = 142.8-134.7=8.1kg/h\r
- Name: piceric\r
  Comment: same amount of fuel, in shorter amount of time\r
-> fuel ratio increases\r
\r
good luck ;)\r
- Name: Nordpolcamper\r
  Comment: 15kg less consumption for the PAST leg is completely irrelevant.\r
- Name: imisanyi\r
  Comment: So on 15NM we save 15kg and the following 139NM we don't save anything but that 15kg?\r
- Name: Segundo\r
  Comment: Will never understand why the next question has a different value with the same data, amazing\r
- Name: Teekee\r
  Comment: From a mathematics point of view, this is exactly like asking : you're at this position and it's 12:00pm, what's your speed?\r
I might need an initial time and position to tell you how fast I'm going...\r
- Name: BennyB\r
  Comment: IMO theres not enough info to categorically say the consumption is higher with only the one actual fuel check figure, theres some big assumption being made no? Question No 337587 is a perfect example of this, and actually has exactly the same figures as this annex, where the fuel consumption actually remains the same and the GS is higher than planned, so they burn less total fuel, but the consumption is the same. Also for this question, you can't really assume that they will have 15kg less again at the waypoint because the GS is clearly different to planned if you look at the ETO vs ATO. Surely this is an appealable question?\r
- Name: pablot\r
  Comment: Fuel Check NOT GIVEN at TORDU -> 8kg/h\r
Fuel Check GIVEN at TORDU -> 5kg/h\r
- Name: TopGun81\r
  Comment: Confirmed - I flagged it now but obviously the exam date wasn't today :)\r
- Name: TopGun81\r
  Comment: Seen today in Rome, only it was asking to calculate the remaining fuel over tordu\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @TopGun81, thank you for your feedback. The question you are referring to is similar to question 337587 in our database. Please check this question and compare it with the one you encountered in the official exam.\r
- Name: AntonB\r
  Comment: The logic behind the "correct" answer to this question is absolutely ridiculous. Nothing in the question indicates that we fly at a higher speed or lower altitude than planned, so the only reason as to why we arrive at TORDU earlier than planned is that we have a stronger tailwind than expected. The wind is the only factor we don't control. Our TAS and altitude remain unchanged, thus our fuel flow is also unchanged but our GS is higher than planned, therefore our actual fuel consumption must be lower than planned!\r
- Name: Ianmchale\r
  Comment: 360-241=119 kg\r
Estimated takes 53 minutes therefore 119/53 x 60=134.7\r
Actual takes 50 minutes therefore 119 / 50 x 60=142.8\r
142.8-134.7=8.1kg\r
- Name: avilex\r
  Comment: @robinrooster what do you mean?\r
- Name: klappan\r
  Comment: One of the most difficult questions in the entire DB. You need to assume an identical fuel consumption of planned vs. actual (119 kg) between TOC and TORDU, but nothing in the question gives a clue about this. You simply need to know it to solve the Q, then it's easy.\r
- Name: robinrooster\r
  Comment: giVen fuel -> V = 5kg\r
not given -> 8kg\r
- Name: TB20Sam\r
  Comment: This question is ridiculous. It's basically expecting us (without telling us) to assume that the fuel consumption per unit ground distance is exactly the same as planned, despite the fact that we're travelling at a faster groundspeed than planned and our fuel burn on the flight so far has been less than planned. This is unrealistic and not how fuel planning and monitoring works in the real world.\r
\r
In the real world you would do another fuel check at SOPET or TORDU and calculate the actual fuel consumption from that. Not guess it based on pie-in-the-sky imaginary assumptions.\r
\r
What's the point of even asking a question like this; what are they hoping that we learn from it?\r
- Name: Manjitha\r
  Comment: Do planned fuel and actual fuel burn.\r
\r
1. planned fuel burn 360 - 241 = 119 in 53 minutes , in 60 minutes --> 53/119 X 60 = 134.7\r
2.Actual fuel burn is 15 kgs less that is given at top of climb 375 compared to planned 360 (375-360 = 15 )\r
\r
Therefore actual fuel left at TORDU 241 + 15 = 256 kgs and fuel burned in 50 minutes (19:42 - 18:42) is 119\r
\r
Actual fuel consumption 119 / 50 X 60 = 142.8\r
\r
Fuel left 142.8 - 134.7 = 8.1\r
- Name: Anezka\r
  Comment: These questions should be easy ones but for some reason I keep struggling to solve them correctly. So I am giving up:\r
3 Q about TORDU in the database.\r
\r
TORDU at 19:42 -> 263 kg\r
TORDU with 1 figure in Fuel Check column -> 8kg/h higher\r
TORDU with 2 figures in Fuel Check column -> 5kg/h higher\r
- Name: SHOKS\r
  Comment: U consume same fuel but reach 3 minute earlier hence u have consumed an extra 3 min of fuel which amounts to approx 7.1 kg of fuel in 50 min. That is about an 8 kg per hour extra fuel consumption rate.\r
- Name: Fern14\r
  Comment: Agree with Erich that to compare actual and plan fuel, you need at least two actual fuel values to compare. Without that, you can try the smartest calculation, it is wrong no matter what. This question is terrible, on top of being inaccurate in its solution logic. Your questions bank is very good in general, but be careful what you try to teach to young pilots. I am doing those exams to convert FAAto EASA, and those type of questions with unrealistic explanations should be avoided. Other than that, great job.\r
- Name: P210N\r
  Comment: We start with 15 kg more fuel then planed in the race and have obviously a higher Groundspeed, less airtime and thus less consumption. No way the actual consumption can be 8,1 higher than the panned - one do not need a calculator to see this, as long as there no hint, that the poweer setting has changed in between and we are now burning more fuel.\r
- Name: NADER\r
  Comment: Over toc we have extera 15kg of fuel so IF we arrive at each point at exact ETO we should end up having +15kg of fuel.\r
But we arrive over Sopet and Tordu at earlier times , which means we are faster.\r
For simplicity forget the +15kg as it is confusing.\r
Between TOC and Tordu according to ETO(53min) and PLANING FUEL REMAINING (119kg) we should burn 134.7kg/hr.\r
BUT\r
According to ATO we are faster and are burning 119kg in 50min which is a fuel burn of 142.8kg/hr\r
\r
142.8 - 134.7 =8.1 kg\r
\r
Its a bit confusing but you can memorize it this way to pass the test !\r
- Name: SyedAta\r
  Comment: in Q No 337587 almost same condition and fuel was saved by 7 Kg, how the consumption could be more right in the next question without change of values ? please reply\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @SyedAta, thank you for your comment. In question 337587, fuel calculation was based on the planned fuel flow instead of the actual fuel flow as stated in the text of this question. That is;\r
Fuel flow = (Planned fuel remaining at ToC - Planned fuel remaining at TORDU) / Planned flight time from ToC to TORDU = [(360 kg - 241 kg) / 53] x 60 = 135 kg/hr.\r
In question 335104, the actual fuel flow was compared with the planned fuel flow and here the planned fuel flow is also the same as the question 337587.\r
As a result, fuel consumption varies depending on whether the fuel flow used in the fuel calculation is actual or planned.\r
- Name: jonathonjames\r
  Comment: Ive seen a few interesting comments here that it isnt solvable, I solved it but in a different manner to the explanation:\r
\r
The expected fuel burn between TOC and TORDU is 119 in 53 minutes giving a fuel burn of 2.245kg/min.\r
The actual time between TOC and TORDU is 50 minutes, giving 112kg at the same rate of burn as above.\r
\r
The difference between them is about 7kg, (plus / minus a few decimal points) however if we look at the fuel at TOC it is 15kg higher than expected, so add the 15 back on: we get 127kg. 127-119 = 8kg more than we expected to have.\r
\r
I have no idea whether this is the correct method, but mathematically it makes sense and it did get me the correct answer.. .. ..\r
- Name: MarkoM\r
  Comment: If we somehow end up with more fuel than planned we are burning more fuel ?\r
- Name: Mrspoun\r
  Comment: This question is really nonsense, if the fuel flow is different we cannot simply assume that the difference btw planned and actual remains 15 kg?!\r
- Name: GhaithGarraoui\r
  Comment: Those 15 kg could be gained in a 10 minute, 15 minute, 20 minute climb, etc. How can we suppose the aircraft hasn't gain even more in the cruise between TOD and TORDU when we don't have the fuel check figure at TORDU?\r
- Name: chesl\r
  Comment: how is it possible to assume that we will have the same extra 15 kg at TORDU if our flight time and conditions (eg GS, wind cond, whatever) are different? it is vague as hell! god help us\r
- Name: Spaceman\r
  Comment: In this one it is 8kg/h as the do not give you the information about how much fuel you have used.\r
\r
There is another similar one where it is 5kg/h and they give you the fuel information.\r
\r
Helps if you are short on time. Good luck!\r
- Name: Anaaaaa\r
  Comment: so far ive seen 2 types of this question:\r
- there is a given value of fuel check at TORDU = 5kg/h higher than planned\r
- there is NO given value for fuel check at TORDU = 8kg/h higher than planned\r
- Name: rmocholi\r
  Comment: I had the question 337587 just before this one. It asks the actual fuel remaining whith the same exact annex. I tried to extract it with the method of this question and it were wrong, now i use the method of that question on this one and it's wrong. There the correct answer for the same thing (Fuel remaining at TORDU) is 263kg and here is 256. If there is no consistency between the methods i would use in every case i don't know what tf im studying, it feels more like a lottery than an evaluation of knowledge.\r
- Name: Matej\r
  Comment: so far ive seen 2 types of this question:\r
- there is a given value of fuel check at TORDU = 5kg/h higher than planned\r
- there is NO given value for fuel check at TORDU = 8kg/h higher than planned\r
- Name: cskpe\r
  Comment: Anac today, diff values, and there was a fuel check on 3rd line.\r
\r
the 375 fuel check, minus the value on the 3rd check, would give the same amout of used fuel as per the planned.\r
on the flying there was just 15L more of fuel on the tanks. both would be 119 less than the first line\r
\r
I've contested it arguing that it's not specified if the 'planned fuel consumption' they mention is just for the fisrt 3 legs, or for the whole flight.\r
\r
for the first 3 legs, no change, for the whole flight it would've raised..\r
- Name: Nikko\r
  Comment: So, how do you calculate actual fuel consumption without any actual fuel figures for the leg in question? Maybe this is just another case of a really badly worded question - shouldnt the question be asking what the replanned fuel consumption is rather than actual consumption? With the only ACTUAL figure being the fuel check after the climb, there is absolutely no information about actual cruise consumption, which is what you would need in order to answer this question. Am I missing something?\r
- Name: Nacho7\r
  Comment: Question 337587 said that in TORIDU is 263 no 256, and is the same anexx\r
- Name: JoaoD\r
  Comment: @Stijn you found this question then -> 336533\r
- Name: Stijn\r
  Comment: I had this question at Austro NL today BUT there was now a value written down for the fuel at TORDU: 258 kg. And that made the correct answer 5 kg/h more.\r
- Name: Czajnik\r
  Comment: @Michael you are just guessing that you burned 119kg of fuel in 50 minutes. There is no clue in the question/annex to confirm this.\r
- Name: Michael\r
  Comment: Got it first try, here is how: Planned FF = 119 kg / 53 min = 135 kg/hr.\r
Actual FF = 119 kg/50 min = 142.8 kg/hr - 135 kg/hr = 8 kg/hr higher.\r
- Name: Maverickopoulos\r
  Comment: This should not even be solvable with the provided data. Why are we here assuming random numbers. (Yes, assuming you will still burn 119 kg without any reason/evidence is random)\r
- Name: PedroL FINISHEDATPL\r
  Comment: 119 * 60 / 53 = 134.7\r
119 * 60 / 50 = 142.8\r
\r
142.8 - 134.7 = 8.1kg/h higher\r
= 167 GS needed to reach 3 minutes earlier at TORDU, the aircraft consumed more fuel, which, in fact, TAS remains constant as it doesn't vary with change in wind, but GS does. Might some info in the table be wrong? Assuming you can't have an increase in fuel flow without changing GS (with TAS constant)\r
\r
Cheers\r
- Name: Jifi68\r
  Comment: I think that there is a problem. So according to the plan we should have taken 53 min and consume 119kg of fuel to fly the leg.\r
During the actual flight, we only took 50 min to fly the leg, but no fuel check has been done at TORDU, so how can we assume that we also consume 119kg of fuel ?? Maybe we consume more fuel, or may be less fuel. Or maybe we just flew faster because of tailwind with the same fuel consumption ?\r
\r
What I want to say is, without a real fuel check, we don't know how many fuel we still have in the tank at TORDU, so we can't calculate a consumption.\r
Are you sure that the annex is complete ?\r
- Name: Putinisaknob\r
  Comment: This awful question has me confused on two points. One, how are we able to assume that whilst we used less fuel than intended on the first leg, the rest of the legs will go to plan. And secondly, if it has actually used less fuel on the first leg, how does the answer come out that we end up using more fuel than intended?\r
- Name: Sam\r
  Comment: Had this on 24/4/23 UK CAA, there was an additional '258kg' stated in the AFOB for TORDU which meant the calculation came out to roughly +5kg/h higher than planned\r
- Name: Thomas\r
  Comment: Seen in Sweden 22/04/23.\r
\r
Different numbers. The correct answer was 5kg higher.\r
- Name: Usamakhan\r
  Comment: How can you just -magically- assume that the fuel consumed is always 15 kg less. One way only, Id assume that throughout the journey it has used 15 kg less, and somehow the consumption becomes higher.\r
Lets just disregard the entire journey, right?.\r
\r
One thing we all can agree upon for sure, the CAA exam creators are either drunk or high 24/7.\r
- Name: HullCity\r
  Comment: This came up in my GNAV exam, UKCAA March\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Ryan, thank you for your feedback! We have copied this question to General Navigation (061).\r
- Name: NeilAquilina\r
  Comment: In the first 8 minutes you burnt 15 kg LESS than expected and somehow we have a higher fuel consumption per hour.\r
- Name: Livia\r
  Comment: @atplq got this in my exam Rome, Italy 22.02.2023\r
In the annex the fuel check at Tordu was already given and it was 258kg, so the fuel flow was 140kg/hr and the difference between the planned consumption(135kg/hr) was 5kg/hr higher . I assume that was the correct answer.\r
- Name: Hannes\r
  Comment: You can't assume that the fuel consumed from TOC to TORDU stays the same if the ATO's change. Of course the fuel consumption per hour will be higher if you consume the fuel in less time. The question makes no sense.\r
- Name: Ferdiwagner\r
  Comment: What the explanation does it is assumes same fuel consumed per NGM as planned, but we have no reason to believe that to be true, since it obviously was not up to our only fuel check.\r
What i would do here is assume the leg to TOC is our only leg so far, and we have used 15kg less fuel than planned up to this point.\r
It has taken us 8 minutes to get here, so 15kg less than planned per 8 minutes, which is 112.5kg/h less than planned.\r
The answer is obviously extremely high, but without a second fuel check i have no idea how else one would calculate it.\r
Let's just hope we have a second fuel check on exam, as some people have commented.\r
- Name: Radoslaw\r
  Comment: where is logic again ? Why you point out that we have used 15 kg less at the beginning if you dont use in calculations later? Its non essential information then and misleading. You simply took same fuel burn and calculated for 50 and 53 minutes of trip. Why you confuse us ?\r
- Name: Marcelo\r
  Comment: So we just need to *assume* that the amount of fuel consumed in that distance (119 Kg) will be the same, despite having consumed 15 Kg less than expected until TOC. Very poor question indeed.\r
- Name: mariamaria\r
  Comment: 360-241=119 kg\r
ETO: 53min => 119:53x60=134.7\r
ATO: 50min => 119:50x60=142.8\r
\r
142.8-134.7=8.1kg\r
- Name: UNCLEPIP\r
  Comment: Yesterday I had this question in UK CAA with the exact same wording but they gave the actual fuel remaining at tordu which I remember roughly about 215 remaining. That figure most likely wont be right but its a guess.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi guys, the current correct option has been confirmed by students. The explanation translates how we assume EASA solved this exercise. Unfortunately, there is no link between us and the authority, so there is no way we can refute this question. All we can suggest is that you leave a comment explaining why you do not agree with it.\r
In the meantime, we would highly appreciate any further feedback.\r
- Name: Camelia\r
  Comment: @ATPL Q : the question asks about the fuel consumption, and in the answers we have fuel flows. This is unexpected. You then consider, in the calculation, that the fuel consumption remains the same from TOC to TORDU, as you consider that we still have 15kg extra when reaching TORDU. Nowhere it is stated that we have the same consumption, this is a huge assumption. And by using the same fuel consumption, you actually answer the question. Could you please check the wording? And whether the actual fuel check wasnt provided, because this is a very unclear question making us make a big assumption based on no information provided !\r
- Name: Michael\r
  Comment: @ATPLQ I cant follow your calculation. The first fuel check indicates that we burned 15 less than planned. So how comes that we burn more fuel than planned in the end?\r
- Name: Erich\r
  Comment: @ATPLQ I understand how you worked this out.. but really, one fuel check at ToC is really not how you work out average fuel flow. You need at least one more fuel check after that at cruise conditions to get any real idea of what's going on\r
- Name: ATPL QUESTIONS\r
  Comment: @Erich, you are right about this. But we have only one data in this question and according to feedback this is how the question has appeared in the exam.\r
\r
Question Number: AT00002\r
- Name: CristianoRonaldo\r
  Comment: PDP = "Plan what to do at this spot"\r
PSR = "No turning back after this spot"\r
\r
siuu\r
- Name: Sarim\r
  Comment: I see intact, I click intact\r
- Name: AlexSL\r
  Comment: Should always have reserves intact.\r
- Name: CaptainMarius\r
  Comment: Distance to PET= D x H/ O+H, you can remember the distance as: Distance to PET the dog( DHOH) like in an Dutch accent\r
Distance to pet is required for the Time to PET calculation.\r
Time to PET= Distance to pet/ O(GS out)\r
\r
Distwnce to PSR= Endurance x O x H/ O+H ( you can remember it like someone calling your attention ( EOH) then O+H\r
Distance to PSR is required for the Time to Psr calculation\r
psr= e+h/o+h ( the same as the distance to pet, but just swap the d(distance) for e(endurance)\r
- Name: SHOKS\r
  Comment: I think u got it exactly opposite of what it is\r
\r
Flight plan endurance is without reserves because that is when ur tanks run dry and SAR is launched\r
Safe endurance means endurance with reserves available\r
- Name: Ariia\r
  Comment: ,,with safe endurance,, is also correct!\r
- Name: AnuBoswell\r
  Comment: with reserves intact\r
- Name: Nikko\r
  Comment: Considering safe endurance means having reserves intact, landing with reserves intact means the same as landing with safe endurance.. So there are 2 correct answers, here.\r
- Name: Legion\r
  Comment: Had the same 2 options as @Gonzaloog in CZ Caa. But in the other two options, there were no words 'reserves intact'. So I choose option with safe endurance.\r
- Name: Gonzaloog\r
  Comment: seen today at Austro reworded, in the line of\r
- to which an aircraft can fly to destination or back to the departure , or alternate with safe endurance\r
- to which an aircraft can fly to destination or back to the departure , or alternate in the same time\r
I dont remember the other 2 options, a game of words at the end.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Gonzaloog. We have updated the options accordingly. Thank you for your valuable feedback.\r
- Name: GGeri\r
  Comment: intact = untouched\r
- Name: Hossein123\r
  Comment: How to remember: PSR = POINT OF SAFE RETURN. It is not safe if we return with no reserves intact, so pick reserves intact option. Now, PSR is not POINT OF EQUAL TIME so do not pick the option that has something to do with EQUAL TIME. rest to remember is, return back to dest, alt or dep.\r
- Name: Marlboro\r
  Comment: @bozhidar, .wind is a factor. If you have equal flight time in the air, but a strong headwind back to departure, you may fly for 1hr, but cover a small distance. Based on GS out, home, we establish a point where sufficient fuel is there to either return or proceed to destination.\r
- Name: George\r
  Comment: It wouldn't be a safe return if you had no fuel upon arrival. Also not in the same time, that is associated with the Point of Equal Time. Use process of elimination.\r
- Name: Bozhidar\r
  Comment: Isnt it endurance= equals flight time in the air ..\r
So why the option for the same time is wrong?\r
- Name: btehere\r
  Comment: SEEN DGAC FRANCE yesterday but answers were different @atplq, answers were more like this :\r
- to which an aircraft can fly to destination or back to the departure , or alternate with reserves intact\r
- to which an aircraft can fly to destination or back to the departure , or alternate with no reserves intact\r
- to which an aircraft can fly to destination or back to the departure, or alternate in the same time with reserves intact\r
- to which an aircraft can fly to destination or back to the departure, or alternate in the same time with no reserves intact\r
- Name: ATPL QUESTIONS\r
  Comment: @Tehere, thank you for your feedback! Options have been updated.\r
- Name: Lorenzo\r
  Comment: SENASA SPAIN TODAY 04/07/22 dale bro!!\r
- Name: Omani\r
  Comment: I got this question yesterday Austro control but there is nothing ( safe endurance )\r
I got - with planned reserve fuel intact\r
Or -with reserve fuel intact ( something like that )\r
- Name: Hussam Razzaq Anbooree\r
  Comment: Imagine we have line from point (A)……………………………[B]……………(C)\r
\r
(A) departure airport\r
[B] The safety point that allows me to return to the airport from which I departed without a problem , it’s know (PSR)\r
(C) destination airport\r
\r
[B] Here we must have safety if something happens on the road, in fuel, or at the destination airport\r
- Name: Arthur\r
  Comment: formula is based on the safe endurance:\r
PSR = (SAFE ENDURANCE x Gs home) / (Gs home + Gs out)\r
- Name: Karin\r
  Comment: Keyword: endurance\r
- Name: EASA\r
  Comment: Keep it safe whatever you are doing\r
- Name: Dmytro\r
  Comment: Today at Polish CAA\r
- Name: Robert\r
  Comment: @ATPL QUESTIONS: Please check your answer options, correct answer and explanation.\r
\r
PSR = furthest point along planned route, where an aircraft can fly to and then make a return to DEPARTURE airfield or departure alternate. it does not consider destination alternate.\r
\r
this is important to correct asap!!\r
- Name: Evghenii\r
  Comment: @Daniel - easier to remember: Safe - Safe\r
- Name: tk\r
  Comment: greek HCA - July 22 2020\r
\r
Question Number: AT00003\r
- Name: CristianoRonaldo\r
  Comment: An Overlay Approach is a GPS (RNAV) version of an existing approach that was originally designed using ground-based navaids (like VOR, NDB, or ILS).\r
An overlay is defined by ground-based navigational aids, but flown using GPS.\r
- Name: Weiszs\r
  Comment: Today Austro Vienna: Similar question but different answers, the correct answer was: RNAV information is provided for a conventional route or something like that.. -RNAV information- were the keywords for me.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Weiszs,Thanks for the feedback! If anyone comes across this question—or one similar to what Weiszs described—please let us know, along with as many details as you can recall. That will help us gather enough information to create a new version of this question. Thanks in advance!\r
- Name: JYFoong\r
  Comment: Overlay = defined by ground-based navigational aids = click\r
- Name: SvenJ\r
  Comment: RNAV STAR is basically a completely new procedure. RNAV STAR OVERLAY is an ''old/groundbased'' STAR converted to make it usable for RNAV ops, aka LNAV.\r
- Name: reecered\r
  Comment: Something overlayed will follow same route\r
- Name: Denys\r
  Comment: So question is about RNAV STAR vs. overlay and the answer is about overlay vs. conventional STAR. Brilliant\r
- Name: tomas3008\r
  Comment: @ATPL Q New Question:\r
\r
- FL250\r
- QNH 1030\r
- Elevation 3500\r
- what is your true altitude above the ground?\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Tomas, thanks a lot! A new question has been added based on your feedback (333138).\r
\r
Question Number: AT00004\r
- Name: lijaker\r
  Comment: Hicould you please confirm if this answer is correct? In my opinion the early ETA is the correct one?\r
Thanks\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @lijaker, thank you for your comment. Please take a look at our previous comments.\r
We appreciate it if anyone who has encountered this question could provide information about the answer. Thanks in advance.\r
- Name: kevinckcheung\r
  Comment: nothing happen other than later ETA\r
- Name: Domino093\r
  Comment: I dont think this is right. You have to deliberately select RTA over waypoint. Only after that, the FMS will increase speed to meet the required ETA. If not, the FMS will just keep the speed required by selected Cost Index.\r
- Name: ATPL QUESTIONS\r
  Comment: @Anezka Thank you for your feedback! Could you please provide some more information regarding the question text and answer options?\r
- Name: Anezka\r
  Comment: IAA today but heavily reworded.\r
Something similar to what Mayahuel298 described below. In my case I had a route from one coordinates to another (flying westwards but not enough info provided to find out an actual track) and the wind changed from something like 295/60 to 225/60 (not sure about exact values).\r
\r
I had 3 Qs in my exam about FMC. Unfortunately I cant find them in the bank.\r
Exam was around 50% Irish bank, only few questions that I havent seen before, the rest was ok, just different numbers but same principles. Its passable but I recommend to do full bank, not only the Irish one.\r
- Name: Daffy\r
  Comment: At the same CI speed increases, but not necessarily to maintain ETAs. Its about performance and range.\r
- Name: FlyingLegend\r
  Comment: This would increase our cost index, that we set before the flight, it just doesn's make any sense. The FMS would suggest a different optimum flight level and calculate a different ETA\r
- Name: Mayahuel298\r
  Comment: i had this on austro but they didn't mention a headwind directly but a flight from Germany to Spain and a wind change from 330/30 to 220/30 (so still headwind) and the other answers where different. current correct was one of them but I picked another one.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Mayahuel298, thank you for your feedback. We kindly ask that anyone who encounters the question you stated provide feedback in detail so that we can add a new one. Thanks in advance.\r
- Name: eeleuu\r
  Comment: In my personal opinion, this question doesnt make any sense! You have to understand in which situation you are! But my option doesnt count\r
- Name: Aviatorasdfg\r
  Comment: Till the time RTA is not forced in the FMS, aircraft will not increase / decrease speed to meet ETA. In question nothing mention of enforcing RTA in FMS\r
- Name: jonathonjames\r
  Comment: Thats not ideal if youre already operating at the limit of of Vno\r
- Name: Engevik\r
  Comment: Got something simular in norway. Question was something about a flight from Amsterdam to Alicante, and then you got more tailwind then forcasted. How will the FMC reacct\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Engevik, thank you for your feedback. We will continue to follow the feedback to create a question very similar, preferably identical, to the one you encountered in your official exam. Therefore, we appreciate it if anyone who has encountered that question could provide more detailed information, especially related to the options. Thanks in advance.\r
- Name: AT8O6VSE\r
  Comment: Got this question heavily reworded yesterday on my exam.. answer the aircraft will manage FMC and automatically speed up. - Austro Portugal\r
- Name: RotorRider\r
  Comment: -> instrumentation Q\r
- Name: PaulVlad\r
  Comment: check question 333957\r
\r
There the question and answer imply that the wind is modifying the ETA\r
\r
Here you say that speed will increase to compensate for ETA\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @PaulVlad. According to the feedback we received, this question appears in official exams in this way. Therefore, we kindly ask anyone who comes across this question to let us know so that we can update it appropriately.\r
Please see our previous comment for detailed information on wind input into the FMS. Thank you for your comment.\r
- Name: Pipinho\r
  Comment: None of the options here are 100 correct\r
Id appeal. And if it appears on the exam just think about performance when we are suppose to increase speed for a headwind\r
- Name: Chris\r
  Comment: AVEX says "the optimum level will be lowered"\r
- Name: ATPL QUESTIONS\r
  Comment: Greetings everyone! I greatly appreciate all of your comments and feedback. As a Boeing 737 pilot myself, I must admit that I have some reservations about the currently accepted correct option. However, it has been reported by students that this answer was deemed correct in their exams. In such cases, I would encourage you to challenge this question if you encounter it in your own examinations.\r
Now, let's discuss the behavior of the Flight Management System (FMS) when there is a variance between the actual wind and the wind entered into the FMS:\r
If the FMS detects a difference in wind, it will calculate a new optimal speed based on the updated wind data and the entered cost index. However, this adjustment is applicable only when the VNAV mode is set to ECON. If a fixed speed is selected, the FMS will continue flying at that speed regardless of the wind conditions. In such cases, the FMS will continuously recalculate the Estimated Time of Arrival (ETA) based on the current time, position, actual wind for the current leg, and inserted winds for other legs.\r
Most FMS systems provide a feature that allows pilots to reach a specific waypoint at a predetermined ETA. When this mode is activated, the FMS will continuously recalculate and adjust the speed to achieve the desired ETA at the specified waypoint. It's worth noting that this mode is not a standard operating mode.\r
Thank you once again for your valuable contributions!\r
- Name: Adam\r
  Comment: I fly the 737-800, I can tell you the "correct" answer is wrong. It does not work like this. FMC will maintain the ECON cruise speed regardless of wind errors.\r
- Name: Putinisaknob\r
  Comment: Having just spoken with a thirty year and 22,000 hour training captain, this is absolute cobblers. Whilst you can set an ETA it is almost never used. Can you imagine using this going across the pond? ATC would do their fruit. Another example of being taught stuff incorrectly...\r
- Name: Victor\r
  Comment: Can confirm this is the correct answer\r
Senasa 15-03-2023\r
Vamos que si se puede!!\r
Vy\r
- Name: Veronika\r
  Comment: @ATPLQ, I totally agree with Hassib on the idea, that FMS will just give you new estimates. The function of maintaining the preset point crossing time is an option and needs to be programmed by pilots additionally, sometimes it even exceeds the AC capability and FMS will state that. So in general, it just shows you what changes are there based on wind. Though, thats digging too deep into FMS functions and apparently Its not what EASA wants. So lets just assume, that FMS does some magic and always keeps the AC arriving on time. Haha. Other answers are more ridiculous though.\r
- Name: SMU\r
  Comment: I might not agree with the correct answer but the other options are way more incorrect\r
- Name: Hassib\r
  Comment: @ATPLQ Regarding this specific question, your explanation is incorrect, FMS calculations are based on crew input, lets say actual wind at FL350 is 150/80 and mistakenly it is entered by crew as 050/80, FMS will do all its calculation based on 050/80 and provides ETA and fuel Calculation based on wrong inserted wind. RTA is a completely different function in FMS and has nothing to do with what the question asks. If actual wind differs with inserted wind in the FMS, ETA will be shown either early or late based on what wind direction and velocity inserted in contradiction with actual wind. Thank you!\r
- Name: James\r
  Comment: The FMS will only increase your speed to attain a RTA (required time of arrival). This has to be inserted into the FMS by the crew. If this is not done all that happens is that your actual time of arrival at waypoints will be later than your estimated time of arrival at said waypoints.\r
- Name: Nenad\r
  Comment: HCAA Greece 05/12/2022\r
- Name: Radoslaw\r
  Comment: the question is - is the FMS doing by itself as its suggested in the question or needs pilots action ?\r
- Name: NikosKantikas\r
  Comment: easy appeal, RTA has to be selected by the pilot, the FMS alone can only show a different optimum flt lvl\r
- Name: Mathew\r
  Comment: Dont think this is in the flight planning learning objectives.. similar questions are apparently in ops/ instruments\r
(Next module for us)\r
\r
Question Number: AT00005\r
- Name: TRUMP88\r
  Comment: Arriving at DESTINATION = FINAL reserve + ALTERNATE fuel\r
Arriving at ALTERNATE = FINAL reserve ONLY\r
- Name: Thordur\r
  Comment: Also fell for it, contigency is not added as the question is asking, what MINIMUM fuel is to be expected to have remained onboard after landing under NORMAL circumstances - contigency fuel is and shall be used under normal circumstances, thus the MINIMUM fuel to be expected is ALTN and final reserve fuel.\r
- Name: Nikko\r
  Comment: Contingency not included as a minimum because it exists as a buffer for unforeseen, minor changes en route. It exists so that when you have to detour, change altitude or speed because of unexpected ATC or weather issues you have a buffer. If it was a minimum requirement at destination then that would mean you could not use it en route - which contradicts its purpose.\r
- Name: Rad07\r
  Comment: Seen IAA, but it was reworded, Final reserve fuel was stated as (RSF) but concept the exact same.\r
- Name: Vafut\r
  Comment: Not true. Based on weather forecast if it is sure that weather will improve at Dest., the PIC can decide not to go to alternate and use the ALTN in hold over Dest..\r
- Name: Serkan\r
  Comment: @jonathan @SariCizmeli contingency is carried for additional fuel consumption enroute due to wind and etc so you can use that fuel and assume that it is used in questions like this\r
- Name: jonathanlaukner\r
  Comment: In M&B i just had a question asking about the fuel and it states: "The Landing Mass at Dest. is DEFINED with the ZFM + Cont. + Alternate + Final Reserve Fuel"\r
\r
So if the Mass is defined that way, why not add the cont?\r
- Name: CookieMonsta\r
  Comment: pretty weird how it emphasizes NORMAL which in that case i would also add contingency fuel but then says minimum so alternate + final would be correct\r
- Name: HarryPotter\r
  Comment: Tricky Question and there's a few in the bank like this. The EASA examiner never considers\r
the contingency fuel as an "EXPECTED MINIMUM FUEL". I know this is technically incorrect, we don't plan to use the contingency fuel but the examiner assumes the pilots "expect" or "plan" to use it.\r
\r
So the answer will either be: Final Reserve + Alternate Fuel = Destination\r
OR Final Reserve = Alternate\r
- Name: kikopereira\r
  Comment: ARRIVING AT DESTINATION= final reserve + alternate fuel,,--\r
ARRIVING AT ALTERNATE= final reserve only,,--\r
- Name: BoeingDoorPlug\r
  Comment: So the first 2 sentences are irrelevant.\r
- Name: Coca3\r
  Comment: Seen today Madrid 21/2/23\r
- Name: Ivelin\r
  Comment: Guys I believe I got it Normal conditions is the usual, so don't get misled by it.\r
\r
-If it says MINIMUM REQUIRED - then exclude the contingency from the expected LM as it is not a requirement,\r
\r
-If it doesn't mention anything about minimum required - then Include it.\r
\r
GL & "HF"\r
- Name: Radoslaw\r
  Comment: The whole stupid story is to mislead you\r
- Name: Sydney\r
  Comment: As everyone else is saying - the question stresses "normal conditions" and "expected" fuel (not required). Expected would include contingency. Required would only be Alternate & Final Reserve (at destination). Very badly written.\r
- Name: 737spacecadet\r
  Comment: APPEAL!! The fact that the emphasis is on normal conditions means that nothing unforseen has occurred and thus contingency would not have been used. One to memorise\r
- Name: Harry\r
  Comment: Totally unnecessary diatribe, EASA seem to find it impossible to keep things simple\r
- Name: Lukas\r
  Comment: Why is NORMAL in all cap and minimum not. Why are they playing such dirty tricks.\r
- Name: FedericofinishedATPL\r
  Comment: I guess because it says minimum,if it says minimum do not include contingency as the absolute minimum is final reserve+alternate\r
- Name: Robin\r
  Comment: Why is Contingency not included despite the question stating NORMAL conditions (= nothing unforeseen)?\r
\r
Question Number: AT00006\r
- Name: George8264\r
  Comment: Normally if a controller gives you instructions it's a vector around HIS/HER airspace. They should be defo responsible!\r
- Name: MayorTom\r
  Comment: This question does not specifically mention that the pilot is under radar vectors and as such the PIC is fully responsible for any terrain separation..? Really but half of the subject moves around implications , this is why I cant stand EASA the you appeal one q , and they say youre wording wasnt clear , give me a freaking break\r
- Name: LuxairCadet1\r
  Comment: Same question today in Luxembourg but it was clearly mentionned being *radar vectored*.\r
I answered: Controller responsible but Pic should not accept if it is unsafe due to low temperature\r
Not sure if correct\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @LuxairCadet1, thank you for your feedback. The question you are referring to is similar to question 336167 in our database. Please check this question and compare it with the one you encountered in the official exam.\r
- Name: CptBelt\r
  Comment: too many assumptions in on equestion. Basically all the answers could be a good answer. I hope this will get clarified better.\r
- Name: RicardoMSR\r
  Comment: looks pretty clear to me that the aircraft is being vectored, why isnt the controller responsible?\r
- Name: AlexPopescu\r
  Comment: Austro Vienna today, "being vectored" was mentioned in the question, and the answers were a bit more developed.\r
- "the controller, but the PIC should NOT accept it if it's unsafe" was one of the answers. Chose this one but don't know if it was correct or not\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @AlexPopescu, thank you for your feedback. We believe the question you are referring to can be question 336167 in our database. Please check this question and compare it with the one you encountered in the official exam.\r
- Name: JdjCanFly2\r
  Comment: This question is too vague if real. Luckily in all my exams thus far (10) there have been almost no questions as vague as this, so I imagine it will specify in the real exam.\r
- Name: ATPL QUESTIONS\r
  Comment: @Uffhansa There are 2 very similar questions: 333260 (this question) and 336167. The 2 questions are almost identical however, in one of them the pilot is being radar vectored, whilst in the other the pilot is not being radar vectored.\r
@Noworries The 2 questions do not contradict, they are referring to 2 different scenarios. The issue is that in question 333260 it is not made clear that the pilot is not being radar vectored.\r
- Name: Noworries\r
  Comment: the question 336167 contradict\r
- Name: Nikkos\r
  Comment: Vectoring altitude means the aircraft is being vectored.\r
So why is not the controller responsible;\r
- Name: Uffhansa\r
  Comment: Had this question today in switzerland and question stated being under radar vectors\r
- Name: SladkayaVata\r
  Comment: Aircraft under vectors or pilot just flying? Its not clear q\r
- Name: ATPL QUESTIONS\r
  Comment: @Furkan28 Thank you for letting us know. The question has been updated. Could you please confirm it now accurately reflects what you encountered in the exam?\r
- Name: Furkan28\r
  Comment: Same for me I had this question in Austro today and it was false\r
- Name: SofianB95\r
  Comment: I add this one today in Autro and it was wrong !!\r
\r
Question Number: AT00007\r
- Name: Kokki\r
  Comment: Desig is fly by thats why its not mentioned\r
- Name: FINISHEDATPL\r
  Comment: then it will be DEN BY\r
- Name: agentesmith\r
  Comment: @Bartosz N601 is a one way route, can't use it\r
- Name: easadepression\r
  Comment: N57 - DENBY - L975 - DESIG - L603 - MOGMO - L60 - OTBED is shorter but who cares about the correct answers in easa..\r
- Name: Jonathan\r
  Comment: focus on L975 that would eliminate some options already\r
- Name: Rahman1550\r
  Comment: DENBY\r
- Name: Alex28043\r
  Comment: How are we supposed to read those letters?\r
- Name: ATPL QUESTIONS\r
  Comment: @Alejandro, can you please open the annexe on a new tab? Use the zoom-in and zoom-out buttons in the toolbox located on the right side of the page. If your problem will not be solved please send an e-mail to info@atplquestions.com specifying your problem/device etc.\r
- Name: Kadham\r
  Comment: All routs here https://ibb.co/swwY5nb\r
- Name: Orlando\r
  Comment: I found everything and it makes sense you cant go direct on the Y70 because its a one way so you gotta go down to DENBY, but where does "N57" come from?\r
- Name: zanna90\r
  Comment: you go to otbed to a derby (denby) and you score a goal (gol)\r
- Name: Bisocai NMSL\r
  Comment: Seen today at cz CAA but from POL to DCS\r
- Name: ATPL QUESTIONS\r
  Comment: New figure has been added to this question. We apologise for any inconvenience caused! 🙂\r
- Name: Michael\r
  Comment: 'My friend from Denby is called Mamul'\r
- Name: Toni\r
  Comment: Guess for this one we need to apply the „too long to be wrong“ procedure\r
- Name: Michael\r
  Comment: Gatwick today however answer spread was much different, including the correct one given here. don't think DESIG was an option in it\r
- Name: Adrian\r
  Comment: Damn... I didn’t check the comments before... I looked for it for 2 hours....\r
- Name: FLIGHT\r
  Comment: legends say that some are still looking for it :D\r
- Name: Nicholas\r
  Comment: been trying to find OTBED for the past 5 minutes...well i am still looking\r
- Name: Marcin\r
  Comment: @Damian below the back ;)\r
- Name: Adrian\r
  Comment: Where is odbyt?\r
- Name: Michael\r
  Comment: This was the worst question in the exam. Took forever to figure it out. And the answer spread in the real exam isn't as easy as the one given here !!!\r
- Name: Hubert\r
  Comment: how to find L70??\r
\r
Question Number: AT00008\r
- Name: PaulVlad\r
  Comment: Is it normal though to find the distance only by checking the vertical profile? Or it has been erased from plan view to overcomplicate for examination purpose? Genuine question ?\r
- Name: Arkadiusz\r
  Comment: Only one answer doesnt have numbers after the decimal point. 5.3 + 4.7 equals a full number, and the rest of the distances are also full numbers, not really much time saved but there you go\r
- Name: Benkemalgeliyorumchp\r
  Comment: Unser is also ours\r
- Name: Victor\r
  Comment: Senasa 15-03-2023\r
Vamos que si se puede!!\r
Vy\r
- Name: Armada367\r
  Comment: SEEN IN SENASA, exact\r
- Name: Irene\r
  Comment: seen in spain 30/09/22\r
- Name: Doge01\r
  Comment: pay attention, after UNSER go below the chart to read the distances\r
\r
Question Number: AT00009\r
- Name: Fl0rian\r
  Comment: 3 q like these. I have a memo tips for French people sorry For LE(R)-63 NOT ACTIVE (ALT34) when a program on the computer does not work, ALT F4 For LE(R)-63 ACTIVE, good think so drink VINAS (wine of poor quality) For LE(R)-63 ACTIVE ON Condition, like to become pilot; condition to have money (g850) in french j ai 850 in english i have\r
- Name: CptAlex\r
  Comment: there is 3 question to memorize 333847, 337893, 331004\r
\r
63 Active so we will drive 6.3 AMG with webasto (VIBAS)\r
\r
63 not active ON CONDITION we have money for fuel - G wagon (G850)\r
\r
63 not active we got left only short A35 (A34)\r
- Name: Timothy\r
  Comment: How does N865 qualify as a conventional ATS route (as per the question)?\r
- Name: HansJuergen\r
  Comment: Seen in Austria word by word.\r
But I was confused because "N" is not a conventional airway, it's a RNAV airway! I lost a lot of time with it and at the end I was wrong :-(\r
Conventional Airways: A,B,G,R,H,J,V,W\r
RNAV Airways: L,M,N,P,Q,T,Y,Z\r
- Name: philipkozlovv\r
  Comment: there is 3 question to memorize 333847, 337893, 331004\r
\r
63 Active so we will drive 6.3 AMG with webasto (VIBAS)\r
\r
63 not active ON CONDITION we have money for fuel - G wagon (G850)\r
\r
63 not active we got left only short A35 (A34)\r
- Name: LBurn04\r
  Comment: For people who just want to memorise these bs questions rather than waste time:\r
V - VIBAS\r
A - ALT - D (BEST ROUTE)\r
R - RODRA\r
M - MITOS\r
L - L42\r
G - G850 (CONDITIONAL Route)\r
\r
Works for all choose the best route questions i've come across.\r
- Name: Nordsweet\r
  Comment: Seen Poland 07.02.2025 but reworded. LE(R)-63 wasnt active and They were asking about conditional route. Correct Answer was VLC - G850 - AMR.\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Nordsweet, thank you for your feedback. The question you mentioned is available in our database, question number 337893.\r
- Name: Anezka\r
  Comment: Q with LE(R)-63 NOT activated\r
Best route: VLC - A34 - ALT - D AMR\r
ATS conditional route: VLC - G850 - AMR\r
\r
Q with LE(R)-63 ACTIVE\r
Best route: VLC - B28 - VIBAS - N865 - amr\r
- Name: Leonardo\r
  Comment: B112 is literally inside the restricted zone so I dont think it would be correct in the exam\r
- Name: Kangaxx\r
  Comment: @Remusthegreatest VIBAS is on VOR radials BLN181 and AMR298\r
- Name: Marco\r
  Comment: VIVA VALENCIA, (ViBas VALENCIA)\r
It may help remenber if you have no time in the exam\r
- Name: Umberto\r
  Comment: seen today at enac but with a different option ( through a32, alt, b112, amr). It is shorter and should stay out of the restricted zone, correct me if Im wrong\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Umberto, thank you for your feedback! Could you kindly confirm that the question text was exactly the same? Thank you!\r
- Name: Bgordge04\r
  Comment: Seen Uk today and it was not activated\r
- Name: Javier47\r
  Comment: CONVENTIONAL u can't cross LER 63\r
CONDITIONAL U can cross area LER 63\r
- Name: Remusthegreatest\r
  Comment: N865 is Rnav route and they want us to find conventional so technically all answers are wrong 😑\r
- Name: Mika17810\r
  Comment: look like "where is charly?" game.....\r
- Name: Gianluca\r
  Comment: it can be done in under 1 minute:\r
\r
a) vlc - b28 - bazas - m192 - amr --> NO because it crosses the restricted area\r
\r
b) vlc - b28 - vibas - n865 - amr --> OK\r
\r
c) vlc - g850 - amr --> NO because it crosses the restricted area\r
\r
d) vlc - a34 - alt - w810 - vsj - w820 - amr --> NO because it crosses the restricted area\r
- Name: Monica\r
  Comment: Do they know this is a time limited exam?\r
- Name: gdtyrael1\r
  Comment: these kind of questions are horrible, they are easy but you lose like 5 minutes just to find everything in these convoluted charts\r
- Name: Gianluca\r
  Comment: @Shane\r
\r
GSP symbols - 7 --> https://ibb.co/Qnth5nQ\r
\r
The '' E > '' is an Even and Odd indicator, which indicates even and/or odd altitudes are used in the indicated direction\r
- Name: Razva\r
  Comment: Vibas - Vipass by the side of the LE-R\r
- Name: Franco\r
  Comment: Tip: You have to fly over VIBAS (like in Spanish "vivir") so you dont get shot\r
- Name: Martin\r
  Comment: "Examining each route carefully" Just memorise, you dont have 40 min to examine this.\r
- Name: Subzero\r
  Comment: Just memorize those two routes cause i got it wrong in the CAA & you will waste alot of time calculating the distance in the end they just cherry pick the correct answer.\r
\r
- LE(R)-63 Activated => VLC - B28 - VIBAS - N865 - AMR.\r
- LE(R)-63 Not Activated => VLC - A34 - ALT - D - AMR.\r
- Name: Bobio\r
  Comment: Same question (DGAC France) but with LE(R)-63 "Not" Active, be careful guys\r
- Name: ATPL QUESTIONS\r
  Comment: @Edvin, we have question 331004 matches with your description. Thanks for your feedback!\r
- Name: MohamedEwas\r
  Comment: @ATPLQ seen in greece but i believe the wording was le( r )63 is not active what is the best ats route and the options was\r
1 - vlc -a34- alt- d - amr\r
2- vlc -g850- amr\r
3- vlc - b28- r47- bln- m192- amr\r
4- vlc - a34 -alt - w810 - vsj - w820 - amr\r
\r
Question Number: AT00010\r
- Name: 19MaWa98\r
  Comment: Its called Suben not Sueben\r
- Name: EmmanuelHEGE\r
  Comment: Too poor explanation concerning the cruise altitude. I found the right answer thanks to Rott river and Class-F airspace. It's clear that we are in VFR in a West direction, meaning an even FL + 500 ft. But why not 4500, or 8500 ? Why 6500 ?\r
- Name: AdamSz\r
  Comment: Guys,\r
1st statement false = flying westwarsd so can't be odd altitude.\r
2nd statement true= river Rott is on the map.\r
only one possible answer!\r
- Name: user123\r
  Comment: By elimination, number 5 CAN NOT BE (bc you're NOT following A3), and num.2 has to be in your answer (because you're following the river in a west direction).\r
So just one possible answer :)\r
- Name: Mackenzie\r
  Comment: its "should" not be anything, it can be but it shouldn't necessarily be\r
- Name: zeymahse\r
  Comment: It's 6'500ft because we are VFR and we are going westward.\r
Routes EAST - least - ODD FL +500ft if VFR\r
Routes WEST -best - EVEN FL +500ft if VFR\r
- Name: Flywithme\r
  Comment: Impossible to print the annex , does anyone have a link ? thanks\r
- Name: Wiberus\r
  Comment: Foxt ROTT 6500\r
- Name: somethingmika\r
  Comment: Process of elimination. You follow the river and you enter class F airspace on final approach. 1 option remains.\r
- Name: Fabio\r
  Comment: Seen today in Sweden. Can Confirm that answer C is correct but the options were different.\r
There was another option with 1, 2 & 4 instead of 1, 2 & 5 which could cause confusion.\r
- Name: SebastianTheCrab\r
  Comment: 6500 for a 24nm flight, sounds great yes please\r
- Name: ram\r
  Comment: Seen today Finland, also had a statement for "6. You will enter class E airspace during the final approach"\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Ram, thank you for your feedback! We have updated the question text accordingly.\r
- Name: Maksym\r
  Comment: Guys!\r
Read first 2 statements.\r
1 - definitely NO\r
2 - definitely YES.\r
Only one choice.\r
- Name: Benjamin\r
  Comment: I got an official question from my exam thats not in this bank. VFR map thats also in this annex. ATPLH Seen in Norway 11.23.\r
\r
You are at 9000ft at position 47.30N 014.00E and destination is LOXA Aigen Im Ennstal, somethingsomething what do you have to do when approaching LOXA?\r
A- Contact Wien Information 124,40 for clearance\r
B- Immediately decend to 5000ft and contact 130,00 (This was what I picked, cant confirm, but cant see the others being correct)\r
C- fly Inbound Trautenfels at same level.\r
D- Contact tower after entered through Trautenfels\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Benjamin, thank you for your feedback! We have forwarded this information to our Helicopter instructors. A new question will be added as soon as it is ready. Thank you for your patience!\r
- Name: Antoniorosado94\r
  Comment: Maybe it is 6,500ft because the grid altitude at EDNP is the same grid altitude of the grid above which is 5,400 ft.\r
I think it could be, since every grid has a grid altitude in red, except for this one, and maybe this means that it has the same grid altitude than the upper grid.\r
\r
I DO NOT KNOW MAN I AM TIRED\r
- Name: Tam\r
  Comment: only the river option and class F option make sense. The crz alt is conditionally correct.\r
- Name: Ralle400\r
  Comment: yeah - of course I fly 6500 ft for a 20 NM leg. RIDICULOUS\r
- Name: Fietje\r
  Comment: I am pretty sure Class F airspace does not exist in Germany (anymore). Love those up-to-date questions by EASA .. :)\r
- Name: Davids Davis\r
  Comment: I want to see the clever geek who wrote this fly 6500ft in this short of a flight.\r
- Name: migel34\r
  Comment: Will we reach the destination by following A3 motorway?? Im not even surprised with EASA.\r
- Name: szabobalazs9401\r
  Comment: Minimum safe altitude should be 4500 ft. Why 6500?\r
- Name: Benkemalgeliyorumchp\r
  Comment: F 6500 rott\r
- Name: Julien\r
  Comment: @Lucas i love you\r
- Name: wy101\r
  Comment: @ATPLQ I found this question in my GNAV EXAM 2 weeks ago\r
Austro Control\r
- Name: Subzero\r
  Comment: we are going to west direction so the so we are ''180 - 359'' range and one extra help for those stupid questions flip into the map first page and you will see the crusing level for vfr\r
- Name: valerio\r
  Comment: this ones gets me every time.\r
- Name: javi\r
  Comment: Always got me with the EVEN/ODD rule..\r
\r
Question Number: AT00011\r
- Name: TRUMP88\r
  Comment: Time = Fuel / fuel flow = 50 / 9.6 = 5,20 ( 0,20 x 60 = 12 ) = 5 hours 12 min\r
GS = TAS +- WS = 100 + 15 = 115 KT\r
Distance = Time / GS = 5,20 x 115 = 598 NM\r
- Name: RotorRider\r
  Comment: Time: 50/9.6 = 05:12:30 & Distance: (50/9.6) x (100 + 15) = 598,9\r
- Name: BoeingOrAirbus\r
  Comment: EASA: Real answers are 5h12 and 598NM ? Just put as answer option 5h13 and 599NM. WHYYY?\r
- Name: HullCity\r
  Comment: similar uk today, drop down,\r
\r
43 litres per hour is the FF and there is 53 litres in tanks.\r
TAS 95kts\r
25kt Tailwind\r
\r
Question asks for the time that you can fly for and the range available\r
- Name: Tom\r
  Comment: Seen uk caa same numbers, drop down 16/12\r
- Name: Alpha\r
  Comment: similar today drop-down different figures UKCAA\r
- Name: Calum\r
  Comment: @the drop down\r
- Name: Jim\r
  Comment: UK CAA (Remember to come back and mark as seen after your exams).\r
- Name: Calin\r
  Comment: GNav, Romanian CAA\r
- Name: mrpropre\r
  Comment: Range >>> NGM\r
\r
Question Number: AT00012\r
- Name: maplewings\r
  Comment: I can't make any sense of the wording. Which temperature correction must be applied? A temperature correction colder than the temperature at aerodrome level. What the hell does that mean?\r
- Name: JesusBenito\r
  Comment: You do it from aerodrome altitude because is where you are going to land\r
- Name: klappan\r
  Comment: Colder than the ISA temperature, with corrections applied at the aerodrome level\r
- Name: Yannick\r
  Comment: High to low, lookout below!\r
\r
Question Number: AT00013\r
- Name: AdamSz\r
  Comment: For piston you need to land with final reserve = 45 min. (60x0,75=45)\r
Only one option with 45 liters at alternate.\r
- Name: Adrian726\r
  Comment: Well, if we talk about the minimum at alternate which should be 45 liters, there is only one option with 45 liters, if you are short of time click that.\r
- Name: ZakMartin\r
  Comment: The Final Reserve for Piston Engine is 45 minutes flying (cruise) unless when given holding fuel flow then use that - which is the situation here.\r
\r
Jet Engine is 30 minutes holding at 1500ft above aerodrome level at ALTERNATE (unless there is no alterate given then use DESTINATION)\r
- Name: craft0000\r
  Comment: @bonus 15% of cruise + 45 min holding is for isolated ad\r
- Name: Bonus\r
  Comment: Why we don't add 15% in this case ? Thx for info.\r
- Name: Typhoon\r
  Comment: guys the question is very poorly written but what it is saying is:\r
the a/c minimum fuel at the alternate must be at leas the FRF. so 45mins of holding FF gives us a FRF=45liters.\r
this means that at destination our minimum fuel must be FRF+alternate fuel= 45+38= 83liters.\r
\r
so when the aircraft arrives at destination he still has its "minimum fuel at destination which is 83liters.\r
- Name: FoxKiloAlpha\r
  Comment: I'm pretty sure Final reserve is derived from the holding FF rather than Cruise?\r
- Name: Aurel\r
  Comment: Seen in SENASA SPAIN yesterday, answer was the same they use holding fuel comsumption for final reserve calculation\r
- Name: Benedek\r
  Comment: @Alexander because the question says you arriving with the MINIMU required fuel on board. So we can assume that the contingency has been used up during the flight.\r
- Name: Ranieri\r
  Comment: More easy than what you think.\r
You have to land with a minimum quantity of fuel at:\r
\r
-DESTINATION: ALTERNATE FUEL + FINAL RESERVE (30mn jet - 45mn prop)\r
\r
-ALTERNATE: FINAL RESERVE (30mn jet - 45mn prop)\r
- Name: KeepGoing\r
  Comment: Please let me know if my understanding is wrong?\r
\r
\r
*Reserve for Piston= 45Min - Question says that fuel flow is 80L/h -> how much it will be in 45Min? 45Min x 80L/h /60= 60L Arriving at destination 60L + 22L of Go Around (when you arrive at your destination you will have it on board) = 82L at Destination\r
\r
\r
* To fly to Alternate you will use 38L -> 60L - 38L= 44L at Alternate\r
- Name: JoaoD\r
  Comment: Use holding fuel consumption for Final Reserve\r
\r
Padpilot -> https://photos.app.goo.gl/NDKfyRhVbbZGisB27\r
- Name: FoxtrotSierra\r
  Comment: 45 minutes holding\r
\r
CAT.OP.MPA.181 (c) (5)\r
\r
final reserve fuel/energy that shall be the amount of fuel/energy that is calculated at\r
holding speed at 1 500ft (450 m) above the aerodrome elevation in standard conditions\r
according to the aeroplane estimated mass on arrival at the destination alternate\r
aerodrome, or destination aerodrome when no destination alternate aerodrome is\r
required, and shall not be less than:\r
(i) for aeroplanes with reciprocating engines, the fuel/energy to fly for 45 minutes; or\r
(ii) for turbine-engined aeroplanes, the fuel/energy to fly for 30 minutes\r
\r
Honestly this should have been in the explanation instead of saying it is not known..\r
- Name: Phoebe\r
  Comment: Can someone confirm whether this is holding or cruise speed? Personally would have said it was 45 mins at CRUISE speed (as many others have too). If it is at holding speed, would you say this was appealable?\r
\r
Thanks!!\r
- Name: Alexandros\r
  Comment: is it still confirmed 83/45 for Austro? As according to the theory, it should be 98/60 as you are supposed to use cruise consumption for a piston engine and NOT holding.\r
Would love a quick response!\r
- Name: Roman\r
  Comment: I suppose that find final reserve fuel for 45 min (45L) is enough to pass it and proceed ahead.\r
- Name: Antoniorosado94\r
  Comment: So, this question is actually incorrect, because its fuel to flow for 45 min, not at holding speed. Then, what should we do? Memorize this answer? Appeal in the exam if we get it wrong? Actually, I dont have any idea on how to face these exams where the answers are wrong and sometimes you have to give the right answer and sometimes the wrong us the right one. I wanna die\r
- Name: Veronika\r
  Comment: Austro today. 83 and 45 correct answer.\r
- Name: Blessed\r
  Comment: @atplq check explanation since you wrote 45L/h instead of 60L/h..\r
- Name: ATPL QUESTIONS\r
  Comment: Thank you, @Edoardo, for bringing the error to our attention! We apologize for the mistake in the holding fuel consumption that was initially provided. Nonetheless, we are pleased to inform you that the final result was accurate, and we have since corrected the error.\r
- Name: Arttu\r
  Comment: Seen in Finland and correct was 83l and 45l\r
- Name: Sander\r
  Comment: Final reserve\r
\r
Piston = 45min at normal operating (cruise) speed\r
\r
Jet = 30min at holding speed 1500ft above (alternate) aerodrome level\r
- Name: Alex\r
  Comment: In the question hold speed fuel flow is given as 60l/h and cuise speed fuel flow as 80l/h. In the explaination it says calulate it as 45/60 x holding speed fuel flow = 45/60 x 80, but 80 is cruise flow, so it says use hold fuel flow but then youve used cruise fuel flow. Confused.\r
- Name: PietroEletto\r
  Comment: @atpl question number 333233 you give us the opposite answer (98 USG ; 60 USG ). Match the questions please and correct them!!\r
Anyway, I dont know the feedback from EASA, but PadPilot says specifically for reciprocating engine we should use 45 min at cruise level. So damn absurd..\r
- Name: ATPL QUESTIONS\r
  Comment: Hi everyone, thank you for all your comments!\r
This question has been reviewed and updated. The regulation is quite ambiguous, it says that for reciprocating engines, the final reserve equals the fuel required to fly for 45 minutes and it doesn't specify if it's at holding or cruising speed.\r
If anyone comes across this question, please let us know! :)\r
- Name: MaxterPilot\r
  Comment: Hope it's help to visualize the scenario\r
\r
https://ibb.co/pRST9zH\r
- Name: ATPL QUESTIONS\r
  Comment: @Filippo, alternate fuel already includes "go around and one approach" fuel. Hope it helps!\r
- Name: Bushflyer\r
  Comment: Reciprocating engine: fuel to fly for 45min at MOST ECONOMICAL SPEED.\r
- Name: felipediniz\r
  Comment: @ATPLQuestion Why we don't consider Contingency of 5% Trip in this case ? Thank you.\r
- Name: ATPL QUESTIONS\r
  Comment: @Felipe, question asks for the minimum fuel required at the destination and the alternate. So we assume that contingency fuel is already consumed.\r
- Name: Lorenz\r
  Comment: @ATPLQ The Padpilot book stated 30 min at holding speed 1500ft for jet and ''FUEL TO FLY'' without mentioning HOLDING speed for 45 minutes for the reciprocating engine (CAT.OP.MPA.150).\r
Would you mind posting the official document?\r
- Name: ATPL QUESTIONS\r
  Comment: @Lorenz, "fuel to fly" is exactly what is written. It does not have to be cruising. Therefore holding conditions can be used.\r
- Name: Stefano\r
  Comment: @ATPLQ can you please check if 45 minutes for final reserve should be calculated with the cruise or holding fuel consumption? PadPilot says cruise\r
- Name: mazur\r
  Comment: shouldn't final reserve fuel for pistons be 45 min of CRUISE?\r
\r
Question Number: AT00014\r
- Name: AlexG2005\r
  Comment: Why do they give us the fuel flow if its incorrect? Im actually so confused..\r
- Name: Markos\r
  Comment: Seen in Poland ULC, different headwind component and TAS, and different numbers I think both 332393 and 333086 on my exam. both are for 3 points\r
- Name: ManuAile\r
  Comment: Q 339940 - AVERAGE tas - so we use the given tas &wind\r
Current Q - tas Only - calculate from distance/time\r
- Name: Mihailalexandris\r
  Comment: Keep it easy! 183 NM ..-> Consumed 318 // 277 NM ..-> ?? // 277 : 183 x 318 = 481 // You take Fuel 780 - 481 = 299 CORRECT ANSWER\r
- Name: svilella\r
  Comment: found in ENAC Italy today, word for word, answer is right. Got two q of this kind, and these were the only 3-pointers in the entire test - which I think is kind of crazy, as there are much more difficult q out there, but I will not complain, 3 easy points.\r
- Name: CJLEE\r
  Comment: At point 183nm : 154GS\r
Current FF 71min 318l used so FF: 269l/h\r
Need to go 277nm remaining dist.\r
current GS: 155kts, 110mins to dest. 481l will be burned\r
780-481 = 299\r
\r
THOSE NUMBERS BELOW GIVEN IS WRONG!\r
- Name: Natterjacktoad\r
  Comment: um excuse me everyone they should call it 'Planned fuel flow' rather than 'Fuel Flow' as this is super misleading when it is a lie :( Sincerely ~NatterjackToad\r
- Name: DrPilot\r
  Comment: - "..assuming conditions the same as give."\r
- correct option takes into account different conditions.\r
- Name: Pawcio\r
  Comment: For what is that confusing fuel flow 370 lb/h given?!\r
Is it hunting or examination?!\r
- Name: ErinSal\r
  Comment: Fuel Burnt: 1098 — 780 = 318 lb\r
Distance covered burning the fuel above: 183 NM\r
Distance remaining to go to B: 460 — 183 = 277 NM\r
\r
If we burnt:\r
183 NM = 318 lb\r
277 NM = ? lb\r
\r
277 x 318 / 183 = 481 lb\r
\r
Remaining fuel at airport B: 780 — 481 = 299 lb\r
- Name: Hello\r
  Comment: I got this UK 21/10/24.\r
\r
I found FP not so banky, I would suggest examining yourself so timing won't be an issue. I literary passed it by one mark.\r
\r
But if I can do it, so can you!! Thank you for all the comments made, I honestly learned the most from the comments! Good luck everyone! You got this!!\r
- Name: MarkW\r
  Comment: Fuel burnt so far after 183 NM: 1098 - 780 = 318 lbs\r
We will burn in total: 460 NM / 183 NM = 799 lbs\r
We had 1098 lbs, so we end with 1098 lbs - 799 lbs = 299 lbs (plus reserves)\r
- Name: Qasimmohmammed\r
  Comment: 318lb burned in 183NM\r
SO 318/183 =1.73lb/NM\r
TOTAL distance is 460NM\r
Fuel consumption is 460NM multiple by 1.73lb/NM=799\r
Feul remaining is 1098-799=299\r
- Name: Tim07\r
  Comment: "assuming conditions remain the same" refer to the conditions we have now, as they're listed before. But instead of writing "and given" they should mark it as planned or something. Pretty confusing wording.\r
- Name: NicoH\r
  Comment: this should be appealed because its not stated as "planned fuel flow". but as fuel flow directly\r
- Name: josselintixier\r
  Comment: from A, you covered 183 Nm and burnt 318lbs\r
460 (total distance) /183 = 2.51\r
2.51 x 318 = 799.34 (fuel burnt for 460Nm)\r
1098 (trip fuel) - 799 = 299l\r
- Name: RajHamsaXAir\r
  Comment: I think that fuel flow given in the question should say ''PLANNED average fuel flow'', or ''planned fuel flow'', so as to avoid confusion by the students.\r
- Name: Paul82\r
  Comment: The wording is terrible. The question part, ie the sentence with colon at the end, instructs you to use the following data. There is no arguing that that's what it says. Then you go ahead and use the following data and they go "aha! you used the wrong data". This is not even funny anymore.\r
- Name: Monica\r
  Comment: Friends, don't overcomplicate it. Consider that at 183 NM, they consumed 318 lbs, so at 460 NM they will consume 799 pounds. This leaves them with a remaining fuel of 299 lbs. Enjoy the 3 free points\r
- Name: SHIYU\r
  Comment: should say 'PLN FF' instead of FF, the trick of this type of question is to correct the FF given the actual data\r
- Name: AhmadFaiz\r
  Comment: look at last sentence that stated assume everything is same as data given and now fuel flow is change?.. very nice one\r
- Name: Tomistr\r
  Comment: Senasa 7/11 different numbers but still the same question and the planned fuel consumption doesnt work, you have to calculate it.\r
3 points\r
- Name: Ozzzy\r
  Comment: If it said "planned fuel flow", everything would be fine.\r
- Name: Razinzaki\r
  Comment: So how do I specifically know when to use the fuel flow given when if it says "planned fuel flow" I should ignore but with just "fuel flow" it would presumably mean that that is the correct fuel flow for the remainder of the given sector..\r
- Name: Cano2020\r
  Comment: I calculate it like:\r
total trip- remaining fuel\r
\r
1098 lb - 780 lb = 318 lb\r
\r
318 lb / 183 NM = 1,73 lb / Nm\r
\r
1,737 Nm x 277 Nm = 481 lb\r
\r
Remaining fuel = 799 lb - 481 lb = 299\r
- Name: ZTaylor\r
  Comment: How can they give a value that is incorrect. Surely this is an appealable question?\r
- Name: shuauli\r
  Comment: 1098-780=318Ib\r
318/1:11=268.7Ib/h\r
460-183=227NM\r
227/(185-30HW)=1:47\r
1:47*268.7=480\r
780-480=299\r
- Name: pierinocolombo\r
  Comment: https://media.tenor.com/1WCp9SjaCFQAAAAC/peter-petercapusotto.gif\r
- Name: mohamio\r
  Comment: Can anybody explain the difference between fuel flow and fuel flow?\r
- Name: Flfon\r
  Comment: The examiners have long forgotten what is purpose of exams. Straight up entrapment for the fun of it.\r
- Name: marcos\r
  Comment: TRIP- REMAINING FUEL 1098-780 = 318 Lb in 183 NM\r
\r
318 Lb -- 183 Nm\r
X=799Lb -- 460 Nm\r
\r
1098Lb - 799Lb= 299 Lb\r
- Name: Alex\r
  Comment: This can not be correct! Trip fuel is not the total take off fuel. You can not just subtract the remaining from trip fuel. This is insane! If 1098 would be the take off fuel, then yes. But this is completely wrong in my opinion.\r
- Name: Franco\r
  Comment: I just imagine the comments a retired pilot who has flown DC3, DC6, BAC-111, DC-8, 727, 737.. .has to say when he sees these type of dumb questions (to be polite) and the way EASA and Flight Schools are making money.\r
- Name: Michal\r
  Comment: so basically statement "conditions remain the same AND GIVEN:" is a lie? hahah I have no words about how ridiculous this quesiton is. I honestly can do all of these calculation but I still chose the wrong answer casue I thought that the actual conditions are given so there's no need to calculate them again. It's also disgusting that this questions appeared so many times in official exams.\r
- Name: LAWRENCE\r
  Comment: Just a note to those who are sitting the UK CAA version of this Flight Planning exam. This sort of question is a trap, the comments whihc state you should appeal this may not have taken the actual exam and realised there are some issues with that approach. First of all you do not know if you are wrong at the point where you can comment on the question. You don't get the result until the end of the sitting which may be days later and even then if you have more than one question incorrect from the same learning objective you don't know exactly which one is incorrect.\r
Those who have sat this exam on the CAA system will know that the change to the title of the paper for 2020 syllabus means the title now occupies two lines at the top of the screen covering the comments button. If you need to comment you need to hand a written note to the examiner. How would you know at the point of sitting the exam that this or any question is ambiguous? Lastly, if you are on UK CAA and request a paper to be reviewed (Appeal) there is a significant fee.\r
The Moral of the story is simple, without resources like ATPLQ we would simply carry on failing these exams and have no idea why.\r
- Name: Elliot\r
  Comment: They are literally straight up lying to us now and we have to suffer because of it\r
- Name: kmkmll\r
  Comment: why the hell would you tell me conditions remain the same when in fact they do not\r
- Name: Radoslaw\r
  Comment: who estimates 370 lb/h but actually uses 100 lbs/h less?\r
- Name: Carlos\r
  Comment: why do they give us fuel flow if it is useless?? At least they can add the word "calculated" so i know it is not accurate\r
- Name: Fradel\r
  Comment: Make it easy !\r
We burn (1098-780) 318lb for a distance of 183 NM\r
So for a distance of 460 NM = (318/183) x 460 = 799lb burnt\r
Then 1098 - 799 = 299lb\r
Hope it helps ;)\r
- Name: Damian\r
  Comment: Seen today, ULC. Luckily for us question has been given with additional fuel at A! So no assuming about fuel that we actually start with. All in all, the same answers and the same question. As we see EASA shows some mercy from time to time to make our lives easier :)\r
- Name: Alberto\r
  Comment: Seen in ENAC Rome, 3 points question but with different values, 299 plus reserves it wasn't an answers, I think the values in the question were different. About the answers there were 260lb (highest value provided in the 4 answers) ,154lb and other two values that I don't remember. I choose 154 lb plus reserves\r
- Name: George\r
  Comment: Seen UK CAA but they say planned fuel flow\r
- Name: ATPL QUESTIONS\r
  Comment: Hi guys, thank you for your comments!\r
\r
This question is without doubt unfortunate. Here are my conclusions:\r
It seems that there is a similar question to this in our database which uses the fuel flow provided instead of calculating the fuel flow in the first leg. I believe that the difference which leads to different approaches is the wording. In this question, we can see that the examiner states "assuming conditions remain the same" => this leads us to calculate the actual fuel flow for the first leg, disregarding the provided fuel flow for the remaining calculations.\r
The other question states "assuming the data below" => we are prompted to use the fuel flow provided and not calculate the fuel flow used for the first leg.\r
\r
I would like to add that we have received several feedback from students confirming the current correct options for both questions. We can only advise you to report this questions in your official examinations, as different people can interpret them differently as the differences are minimal and the solution changes significantly.\r
- Name: JayDEE\r
  Comment: I was also lost with this question. But in the end I managed to simplify it.\r
1) Actual fuel burn: 1.73 lb/ NM\r
2) 277 NM x 1.73 = 481\r
3) 780 - 481 = 299\r
\r
Because:\r
I consumed 318 lb of fuel to travel 183 NM (1.73lb/N)\r
So if I want to travel 277 NM I will consume 277 x 1.73 = 481 lbs\r
If I had 780 left; upon arrival I have 780- 481 = 299 lbs.\r
- Name: Milan\r
  Comment: seen austro control vienna (2021/09/03), different values were given (trip fuel something like 1051 ib) and correct answer was 385 + reserve fuel!\r
- Name: LaiaLahiguera\r
  Comment: Hey! @lodovico @Zoltan Felix I had today this question in my exam, and the correct answers is correct here. The fuel flow that they are giving you is the planned, you have to calculate the actual fuel flow with the distanca, the ground speed (Which in both cases is the same), then you calculate the time and with that you calculate the actual fuel flow, which is the one that you will need in the end of the exercise\r
\r
Seen in AustroControl 5th of July 2021\r
- Name: Zoltan Felix\r
  Comment: "The fuel flow is 370 lb/h. But hey, don't use it!"\r
Ridiculous.\r
- Name: Joey\r
  Comment: You would assume if the TAS and headwind conditions remained the same, the fuel flow would too.\r
Awful question\r
- Name: Lodovico\r
  Comment: how are we supposed to know that the actual fuel flow is wrong?\r
\r
Question Number: AT00015\r
- Name: TheFastMario\r
  Comment: This is how all NOTAM q should be: easy to understand and answer, and not worded to deliberately trick you and make you fail\r
- Name: Mayahuel298\r
  Comment: i had a similar austro question. Notam stated that GPS positioning is jamming but available, they asked if you can plan a RNAV approach. I picked yes, but with possibility to revert to conventional approach.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Mayahuel298, thank you for your feedback. We appreciate it if you or anyone who has encountered the question you stated could provide more detailed information. Thanks in advance.\r
- Name: Plnakl\r
  Comment: rnav ?\r
- Name: Matej\r
  Comment: @Samandar only one particular satellite is out of service. There is many more to take its place\r
- Name: Vafut\r
  Comment: Finding another Satellite in with a good position to replace it. It is done automatically by your GNSS. But you need to know that redundancy is reduced (if another sats. fail, you may have a problem)\r
- Name: Samandar\r
  Comment: if its out of service, how the gns will be available\r
\r
Question Number: AT00016\r
- Name: piperguy66\r
  Comment: Vectors: ATC responsability\r
No vectors : Pilot responsability\r
- Name: Ahmet\r
  Comment: Austro 19-4-2023\r
- Name: Maksym\r
  Comment: Seen in Greece HCAA, exactly the same\r
- Name: Marcus\r
  Comment: Seen Norway CAA 09.02.23 // same same\r
- Name: Gregory\r
  Comment: U.K. CAA 07.02.2023 instead has of PIC it mentioned commander\r
- Name: UA12Y\r
  Comment: Pilot in command at all times unless under "radar vectors" which in that case ATC ensures terrain clearance.\r
- Name: felipediniz\r
  Comment: Austrocontrol 09/Nov/2022\r
- Name: MaxterPilot\r
  Comment: @Nicole thank you for the valuable feedback, it's a pleasure to read comment like this when studying..\r
- Name: Nicole\r
  Comment: Seen in Senasa on 28/09/22 but the text was longer, it included tat the aircraft was flying in airspace G and and among the answers one mentioned that atc is responsible because the aircraft is being vectored\r
- Name: hello545\r
  Comment: Not radar vectored = PIC responsability !\r
- Name: Mazsola\r
  Comment: Austro 13/05/2022\r
\r
Question Number: AT00017\r
- Name: RotorBoat\r
  Comment: @FuturePilot the 2900m refers to the whole runway, if you're taking off from B it'll be 2000m instead\r
- Name: Cam787\r
  Comment: The annex provided here is Nantes 19-2 not 10-9\r
It is a lot easier to see on 19-2\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Cam787, thank you for your comment! We've updated the plate reference at the top of the question. After checking, it appears thate 19-2 is the one used in the official exam. Much appreciated!\r
- Name: Frictionlayer\r
  Comment: You need to reword the q saying plate 19-2 as per the annex given\r
- Name: AbzHat123\r
  Comment: UK CAA 23/06 word for word. This annex isnt entirely correct. In the jeppesen it literally says TWY B 2000m in a box underneath airport or something to give u the answer\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @AbzHat123, thanks for pointing it out! We have now updated this question. Thanks\r
- Name: NiclasH\r
  Comment: How do I know that the (1) from the table of Additional Runway Information belongs to the holding point B?\r
- Name: FuturePilot\r
  Comment: Im confused but what does 2900m refer to then?\r
- Name: sanhytol\r
  Comment: Got the same damn question but that wasn't the same annex don't know why (also about Nantes and TWY B so I think it's also 2000m because the annex was like "take of roll by TWY B = 2000m" in the right bottom corner)\r
- Name: Benhoward\r
  Comment: Asked IAA, however referred to chart 19-2\r
- Name: GeorgeEZY\r
  Comment: seen UKCAA today, different plate but same answer 2000\r
- Name: Toaster\r
  Comment: Austro copy and paste. Only about 4 questions in mine, a lot reworked with same answers as in here but they're the wrong ones as they've changed the question to trap you into the answers. Be careful\r
- Name: davidos\r
  Comment: ULC Poland similar chart, distance noted near arrow.\r
- Name: Shihab\r
  Comment: CZ CAA, Same answer i assume but it was a VFR chart (different chart)\r
- Name: Czajnik\r
  Comment: @Carlo for acft up to 5,7 metric tons\r
- Name: CarloCarlo\r
  Comment: @dear community,\r
does anyone know what is "5.7 mt"? It is length or wingspan or what it is??\r
Thanks for every answer.\r
Good luck!\r
- Name: Joey\r
  Comment: UKCAA different chart but may more clear answer is 2000m\r
- Name: MaximumFlaps\r
  Comment: If you read it from the NANTES VFR CHART (19-2) it is easier to spot. TORA At point B = 2000m\r
- Name: Ibrahim\r
  Comment: Under the box which says taxi restrictions for AN124 theres a scale just use your ruler I had to use it and add 1500 and then measure again 500 but it works this way too.\r
- Name: andersatpl\r
  Comment: @karel mt = metric ton\r
- Name: Joshua\r
  Comment: seen uk caa yesterday, type in. marked\r
- Name: BobbieBrink\r
  Comment: Senasa 17/01 exact\r
- Name: Karel\r
  Comment: What does the _mt_ stand for? The 2000m restriction is for aircraft up to 5.7mt - and in VMC only. So shouldn't the correct answer be 2900m?\r
- Name: PilatusFinder\r
  Comment: I've been there for a touchdown as part of my PPL and controller asked me to hold on the runway for some minutes because a Beluga just took off from the same runway.\r
\r
Nice memory, now let's go back to this ATPL and hopefully we will all be in this Beluga in some years :)\r
- Name: Arkadiusz\r
  Comment: A bit Different annex in Poland. It was without - i. But 2000m was correct\r
- Name: Jim\r
  Comment: UK CAA type in (Remember to come back and mark as seen after your exams).\r
- Name: Martin\r
  Comment: If you have a ruler or something similar you can figure out that 2000m is the only logical answer pretty quickly.\r
- Name: Robin\r
  Comment: Alternatively, you can measure it with the scale given (--> 2000m)\r
\r
Question Number: AT00018\r
- Name: Shippers\r
  Comment: What's the difference between the Arrow & Surrounded by a box? Or are they interchangeable for no real reason?\r
- Name: Lucasb134\r
  Comment: arrow points to highest object on chart\r
- Name: RyanJ\r
  Comment: Similar question in UK CAA exam asking for the highest obstacle on the Dubrovnik 19-1 chart.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @RyanJ. The question you are referring to is already available in our database: 332893. Thank you for your feedback.\r
- Name: Marguez\r
  Comment: Highest obstacle in the chart is either pointed by an arrow like here or surrounded by a box\r
- Name: Max\r
  Comment: Theres a giant arrow on these types of charts that point to the highest obstacle elevation\r
- Name: Michael\r
  Comment: Gatwick today word for word 2 marks\r
\r
Question Number: AT00019\r
- Name: Gakew\r
  Comment: Don't be stupid like me and read SFC as - specific fuel consumption\r
- Name: bartek\r
  Comment: What is SFC in altitude?\r
SFC means the airspace starts at the 'surface. '\r
- Name: RotorRider\r
  Comment: seen HCAA, I am not sure if it was this exact question, but its the same concept. The answer was also Ground.\r
- Name: pcavaco\r
  Comment: I believe the snip in the explanation should be highlighting point F) SFC as that is the actual identification of the lower limit.\r
Please correct this.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @pcavaco. We have updated the annex in the explanation. Thank you for your feedback.\r
- Name: whychangenick\r
  Comment: Maybe Im wrong but if it is from ground it should be zone not area.\r
- Name: Hongyu\r
  Comment: I did call this number in NOTAM\r
- Name: Akaash\r
  Comment: UK CAA 10/10/22\r
- Name: Mohamed\r
  Comment: SFC= ground= surface , so it is lower than 500 ft above ground level\r
- Name: David Fernandez\r
  Comment: The restriction starts at a surface level until 500 ft above the ground within a radius of 6NM\r
- Name: Artur\r
  Comment: Bartlomiej has right ))\r
F) SFC surface - this is lower limit\r
G) 5000 upper limit\r
- Name: barsro\r
  Comment: SFC - surface\r
\r
Question Number: AT00020\r
- Name: chico2perdido\r
  Comment: Had today in Austro a question like: temperature -15°C below ISA, airport surface temperature -10°C below - how ist MDA affected.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @chico2perdido, thank you for your comment. We appreciate if you or anyone who has encountered the question you stated could provide more information about the options. Thanks in advance.\r
- Name: yusimon180\r
  Comment: and here INSTRUMENT\r
cold temp glideslope shallow\r
- Name: ThrustTruster\r
  Comment: Unless you are under Radar Vectors it's always the PIC!\r
- Name: BobbieBrink\r
  Comment: Senasa, dont think it mentions the 2D approach specifically tho, otherwise question and answers the same\r
- Name: bierf2122\r
  Comment: The correct mnemonic is following\r
\r
''from high to low, look out below''\r
- Name: lyane\r
  Comment: HIGH to LOW, watch out BELOW !\r
- Name: FREEOFATPLSHACKLES\r
  Comment: Whip out that CRP-5 and do some altimetry on final to just make sure you good\r
- Name: erica\r
  Comment: Seen RNAV - Austrocontrol Wien 22/12/2022\r
- Name: DanafinishedATPL\r
  Comment: I had a very similar or even the same question at RNAV. Hungarian CAA\r
- Name: Guillefdb2008\r
  Comment: SENASA SPAIN 25/11\r
- Name: Mula\r
  Comment: HOT to COLD, don't be Bold!\r
- Name: Sondre\r
  Comment: I get the entire "Pilot in command responsibility" thing, but ATC makes the correction in the real world..\r
- Name: Daniel\r
  Comment: Hey @atplq I had the same question in RNAV (Austro)\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Budlight, thanks for letting us know! I hope your exam went well.\r
This question has been copied to RNAV.\r
- Name: Henry Sebastian\r
  Comment: I think this is correct but when the aircraft is receiving vectors from Atc, its down to ATC.\r
\r
Question Number: AT00021\r
- Name: Marty\r
  Comment: question 337797: they give u HEADING, if you do the exercise with the heading without converting it to ''TRACK'' you are wrong, you will find a wrong wca of 10° instead of a 8°. So LESSON LEARNED: convert the heading to the track! 1) find the crosswind 2) find the drift, everything else remain the same.\r
THIS EXERCISE:\r
convert heading to track: 1) xc: 46 x cos (90 -330) = 39.8 2) drift: XC x 60 : TAS => 39.8 X 60 : 300 = 8 drift Right\r
3) track = heading + drift= 90 + 8 =98°\r
4) find GS: 46 x cos (98-330) = -28.3 (tailwind) --> Gs: 300 of tas + 28.3 of tw = 328.3 !!\r
if u completely ignore the fact that u have a heading instead of a track, and use the heading ( which is wrong ) the result is 323!\r
46 x cos (90-330) = 23 tailwind, gs= 323!!\r
how should i choose between 320, 325 and 330 idk\r
- Name: noeftn27\r
  Comment: GS = TAS +/- (Wind speed x COS (°))\r
- Name: Joris31\r
  Comment: tail wind component: cos(60) * 46 = 23 kts\r
cross wind component: sin(60) * 45 = 39.8 kts\r
so ground speed components are [300+23, 39.8] kts, which norm is 325 kts\r
- Name: danwen\r
  Comment: What some here are calculating with cosine to get a tailwind component is not fully true. even an exact crosswind increases the groundspeed because that drift adds to it slightly\r
- Name: Lince01\r
  Comment: @MondegoTwoTwoTwo no need to correct for drift because they\`re not giving you any track\r
- Name: Domino093\r
  Comment: Even marking the correct WV with 46 kts is super tricky, and then, they give you options to so close together. This question was probably made by some jaleous guy, who wasnt good enough to became a pilot, so he ended up creating questions for pilot exam, with pure intetion to fail all of us.\r
- Name: ZakMartin\r
  Comment: when given a course correct CRP for heading and GS\r
when given heading, no need to correct CRP just read the GS = 325 kt\r
- Name: VASILEIOS\r
  Comment: He is not apply the heading change to counteract for the wind. Thats why in crp5 we find 320kt and he finds 325. The thing is that in some questions it applies correction and in some others dont.. Usually when it says Course you have to apply the heading correction for the wind, but when it says heading you dont have to.\r
- Name: omarr\r
  Comment: I got 320kt on my Crp-5 thought maybe im wrong so i tried again and made sure im accurate.\r
Doubted my crappy Crp-5 as its been through Gnav already (you can imagine the rage).\r
So I paid for a Crp-5 app right now for 3 euros, and did it as accurate as physically possible.\r
i still got exactly 320kt.\r
so my question is, what in the genuine fuvk am i supposed to do? sometimes its using the flight computer, and sometimes were expected to use the formula.\r
on top of all that the formula doesnt even give you 325kt.\r
So my question to Easa is, what the genuine fvck are you expecting from us to learn exactly, cuz this is genuinely disappointing for an authority with a 300M euro ANNUAL budget is not able to produce questions that actually make sense.\r
What a shame.\r
- Name: HUSSEIN\r
  Comment: COS ( 330 - 90) x 46 = - 23 t\r
(23 tail wind)\r
gs = tas + tailwind\r
gs = 300 + 23 = 323\r
approx = 325 kt\r
- Name: Wiberus\r
  Comment: CRP-5W gives me exactly 325 KT on H side.\r
- Name: SyedAta\r
  Comment: remember acft is maintaining Hdg not track. so the GS will be 325 kts and not 320.\r
If it was forcefully maintaining track, then the tail wind component will reduce further and the answer would have been 320 kts. its always better to use manual computer\r
- Name: StevenSperlich\r
  Comment: what i have found out during my time doing there questions and even g-nav, when you are between two answers go for the higher one, in my experience its 90% right\r
- Name: Musto\r
  Comment: Men. I really need to learn to read the question. I was calculating with 300 degrees (cause 300 TAS) not 330..\r
- Name: TheFrode\r
  Comment: With calculator I got 323 what the fuck do I choose there is no right answers\r
- Name: Aboude\r
  Comment: CRP-5 I have an exact 320kts\r
- Name: FlyMax1993\r
  Comment: I would appeal this question in the exam. The results are too close together. Impossible to see the difference between 320 and 325.\r
- Name: Sabrur\r
  Comment: Okay i'll let y'all know my trade of knowledge since my days back in Gnav and everything.\r
\r
Scenerio 1: With FPL subject, if the question strictly asks you to find GS or TAS or WCA or drift by giving the 4 other information, basically questions like this, --> ALWAYS use a flight computer and the answer you get in it will be the correct answer provided here.\r
\r
Scenerio 2: With questions where you have a lot of calculation, specially fuel calculation, they give you TAS and W/V component, and you need to find time, or ff or anything else, use\r
Wind component = Cos (wind direction - track) x Wind speed (since this method is faster, you use the result to determine your GS.\r
And you will get correct answers and thus you save time)\r
\r
I know it's a lot to read but those of you who understands what I'm saying, try it, and you will NEVER get these questions wrong and will save time with the bigger calculation questions.\r
- Name: NicoH\r
  Comment: @skipper man, i just discovered that we use the other side as well!\r
- Name: TomMorris\r
  Comment: I hope this helps:\r
- If the question states HEADING, you DON'T need to correct for DRIFT as you're flying a HEADING.\r
- If the question states TRACK, you DO need to correct for DRIFT as you're flying a TRACK. WCA is required to follow a TRK\r
- Name: maelslun\r
  Comment: IWA 11 092 : 320kts GS\r
- Name: Cristiano91\r
  Comment: how do i solve this with a cr3? shall I skip and use trigonometry instead?\r
- Name: Hutchy\r
  Comment: surely this would be a type in, very similar the gnat questions. the answers are too close\r
- Name: Lindstad\r
  Comment: https://www.youtube.com/watch?v=d0l-W08h...\r
works, just read if it is T or Heading.\r
- Name: Maverickk\r
  Comment: Better be done without CRP5\r
\r
TWC = Cos (330-90) x 46 = 23 => GS=300+23=323\r
Closest answer is 325\r
- Name: Matt94\r
  Comment: Don't fall for the trap and adjust your CRP-5 for drift. They've given you the heading so you don't need to worry about the drift angle!\r
- Name: Adrian\r
  Comment: With CRP5 = 320 or 321. There is no way this is 325\r
- Name: NicoBella\r
  Comment: a= TAS sin(TH)-Wind V sin(Wind direction)\r
b=TAS cos(TH)-Wind V cos(Wind direction)\r
GS=Square root(a^2+b^2)\r
- Name: Gmalaufesse\r
  Comment: With COS : 323\r
With Computer 326\r
\r
I always do with COS and Computer. Always found the good result.\r
- Name: Dawid\r
  Comment: Polish ulc, 07.11.2023 exactly the same question, same answer.\r
- Name: Mladena\r
  Comment: @Phoebe, in this case we mark the wind DOWN because we have HDG given. If we had TRK given, we would mark the wind UP.\r
\r
quick summary for whoever isn't sure about it:\r
1) HDG given , TAS - Wind speed, mark it DOWN\r
2) TRK given, TAS + Wind speed, mark it UP\r
- Name: Phoebe\r
  Comment: why do you mark wind down on this one??\r
- Name: Nathan\r
  Comment: Given Heading ..NOT track. Therefore don't apply wind down technique - literally line up heading on CRP5 and read off Ground speed.\r
- Name: Jan737\r
  Comment: In these questions you have to count with true TRACK, not heading. If true heading is 090 (with wind correction), true TRACK will be around 097 due to wind. Now count it again (or use E6B) and you will get slightly above 325.\r
\r
Hope it helps, good luck :)\r
- Name: Christian\r
  Comment: Put this in your calculator:\r
COS(330-090)X 46 =-23(Negative means tailwind here because we're using the COS function).\r
Add 23 to your TAS to get your groundspeed, and round up.\r
- Name: TANGUY\r
  Comment: cosinus\r
- Name: Alberto\r
  Comment: If you do it with the calc you gonna get 323.\r
- Name: Mariotrash\r
  Comment: Use instruments the least possible. Math = Accurate\r
- Name: Hossein123\r
  Comment: That moment ur whole pencil mark is covering 320 and 325..\r
- Name: AbuFra\r
  Comment: E6B:\r
- when True track is known and you are looking for True heading put the dot up from center;\r
- when True Heading is known and you are looking for True Track put the dot down from center.\r
- Name: Kamil\r
  Comment: ULC POLAND 16/09/2022 answer: 325\r
- Name: Josemisansal\r
  Comment: Seen in Senasa spain 30/08/2022, exact same and same answer 325!\r
- Name: WillB\r
  Comment: On CRP5, keep HEADING. Do not adjust for drift to get track.\r
- Name: Mohammed\r
  Comment: 323 by formula\r
- Name: Clement\r
  Comment: @atplq seen in france with this value : TAS 150, Track 90, wind 050 46kt\r
- Name: Filippo\r
  Comment: E6B - def not 325 :/\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @hilmi, it depends on whether your given a track/course or heading. For a heading, you should mark wind speed downwards and for a track, wind speed is marked upwards.\r
There are other ways of solving this exercises on your flight computer though. The method shown here is one of them.\r
\r
I hope this helps! 🙂\r
- Name: Jose Alberto\r
  Comment: CRP-5:\r
1- Align TAS(300 kts) with the middle hole;\r
2 - Align wind direction(330º) with the outer scale TH mark;\r
3 - Point the dot DOWN of the middle hole for the wind speed(46kts);\r
4- Align the TH given(090º) with the outer scale TH;\r
5 - Read the ground speed on the right under the dot.\r
- Name: Krystof\r
  Comment: On the CRP5,\r
when it says TRACK you make the wind intensity line towards up (towards to the wind direction that you have selected on top)\r
\r
When it says HEADING, you make the wind intensity line towards the bottom.\r
- Name: waqas\r
  Comment: question states "heading" not track therefore you do not need to correct for drift\r
- Name: Aviator\r
  Comment: 46*cos120= -23 kt\r
23 tailwind\r
300+23= 323kt\r
- Name: Fuat\r
  Comment: In the question the HEADING is given NOT TRACK, so do your GS calculations accordingly.\r
- Name: Tasos\r
  Comment: E6B gives 320 kts GS.... της μανουλας τους....\r
- Name: Palko\r
  Comment: Use correct way of finding GS and True track here, when using E6B\r
Heading = 090\r
True track (course) = 097 ! (Right drift of 7 degrees (into 104), == Heading 090 is opposit to drift)\r
GS = 325 kt (fits perfectly)\r
- Name: Sebastian\r
  Comment: EB6 - 320 :(\r
\r
Question Number: AT00022\r
- Name: Davidd\r
  Comment: Same conditions BETA TO GAMMA NOT GAMMA TO DELTA\r
- Name: ErezBM\r
  Comment: 20.1.25 - CZ CAA - Similar Annex and question\r
Annex had ATA & Actual Remaining Fuel only for Alpha and Beta (+ different numbers).\r
Question stated that conditions remain unchanged between Beta and Gamma. Asked for the remaining fuel at Delta\r
- Name: Fiaum\r
  Comment: Same conditions than BETA - GAMMA not GAMMA - DELTA r?\r
- Name: ATPL QUESTIONS\r
  Comment: Greetings everyone! We would like to express our gratitude for your valuable comments and for bringing our attention to this question. We acknowledge that there was an error in the annex, and we have taken immediate action to rectify it. The correct figure has been uploaded to the question. We fully recognize the implications of this mistake on your studies and sincerely apologize for any inconvenience it may have caused. We greatly appreciate your understanding and cooperation. Thank you!\r
- Name: james\r
  Comment: please review the annex\r
- Name: benekf\r
  Comment: wrong picture attached?\r
- Name: flyingaua\r
  Comment: Austro Vienna same table but the question asked about how much safe endurance is left at gamma. The actual fuel at beta was 3531 and at gamma 2907. The reserve fuel was 350lb and you had to calculate the fuel flow in order to find the safe endurance with 350 lb remaining in the tank. The question was easily solvable when you know how to solve these kind of questions - 31.05.2023\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Gabriel, thank you for your feedback! A new question has been created based on the information you shared: 331100.\r
- Name: kmkmll\r
  Comment: Alpha to Gama takes 1 hour.\r
\r
Starting at Alpha we have 5690 and after 1 hour of travel reaching Gama we have 4850.\r
\r
Meaning we wasted 840kg per hour.\r
\r
Then just see how much it takes us to delta => 45min\r
\r
45/60 x 840= 630kg take away 4850-630= 4220\r
- Name: Bryn\r
  Comment: Same question, some different figures, seen 20/10/2020 - Austro\r
- Name: Zuber\r
  Comment: B-G 01:53 to 02:18 = 25 MIN\r
\r
B-G 5200KG- 4850 = 350 KG\r
\r
350KG/ 25 MIN = 14KG FLOW\r
\r
G-D 02:18 TO 03:03 = 45 MIN\r
\r
45 MIN X 14KG = 630 KG\r
\r
4850-630= 4220\r
\r
Question Number: AT00023\r
- Name: Pork01\r
  Comment: I know that there is the fuel penalty and there is a right method to solve it, but I'm solving these q in a simple way, using proportions.\r
Take from the table the contigency ==> fuel and time\r
Do the proportion ==> 1261 : 13 = 1500 : X\r
X = 1500 x 13 / 1261\r
X ≈ 15\r
\r
I don't know If it works every time, but at the time being it works\r
- Name: Meladkylian\r
  Comment: 1500kg = 15 mints\r
2300kg = 23 mints\r
- Name: ATPL QUESTIONS\r
  Comment: @Olie2 Thank you for your feedback! The question has been updated to have a fuel flow of 4.6 tonnes instead of 4.5.\r
- Name: Olie2\r
  Comment: Got the same question on the Swedish CAA, however instead of 4.5 tonnes it was 4.6\r
- Name: Antoine2024\r
  Comment: Saw a question today in France like this except it asked how trip fuel changes if we increase mach to 0,82 and if 150kg worth of passangers didn't get on the aircraft.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Antoine2024, thank you for your feedback. We appreciate it if anyone who has encountered the question you stated could provide more detailed information. Thanks in advance.\r
- Name: EsemeffSMF\r
  Comment: What means when we decrease weight for 1 tonne? Then we have M 0232 kg. Means we have more fuel durnig end of trip?\r
\r
I understand that adding 1 tonne we have penalty ( P 0236 kg).\r
\r
Appreciate your help.\r
- Name: GeorgeEZY\r
  Comment: UK CAA today but it was not 1500kg extra but 2300, i think the answer came in around 23 minutes. This was a type in and worth 2 marks if i remember correctly.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @GeorgeEZY. We have added a new question based on the information you've shared: 334143. Thank you for your feedback.\r
- Name: 23097PAM\r
  Comment: Add similar today, but Passengers did not show -1500Kg and M increased. Calculate Trip fuel.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @23097PAM, thank you for your feedback! If anyone encounters this question or a similar one, please share any details you can remember so we can create a new question. Thank you!\r
- Name: Typhoon\r
  Comment: the annex says that every 1000kg added, the trip fuel increases by 236kg. which means that every 1000kg added i burn 236kg more.\r
so if i add 1500kg, i will burn 354kg more of trip fuel. so trip fuel increases by 354kg.\r
so we have two possible answers. the first one is that if i want to have 1500kg extra usable, other than trip, i will need to add 1500kg+354kg to compensate fro fuel penalty.\r
the other one is that, if i dont compensate, of the 1500kg i add, 354kg will be lost as trip fuel burnt.\r
so here our actual extra fuel usable for holding will be 1500kg-354kg=1146kg.\r
with a FF=4500kg/h i get an extra time of 1146/4500=15mins\r
- Name: detonation\r
  Comment: How do we know we need longer holding time without knowing the MLAM. It can be larger than the weight with the added fuel. No?\r
- Name: Domdc3\r
  Comment: Seen UK CAA today\r
4.6 tonnes instead of 4.5\r
same answer\r
- Name: Matej\r
  Comment: 1500kg with given fuel flow is 20min\r
If you add fuel - there is a fuel penalty which will reduce these 20 min\r
Only one answer is less than 20min\r
- Name: Mihnea\r
  Comment: I had a very similar question today in the UKCAA. The annex was the same but it had different numbers and can't remember which ones. The question stated that when the commander got to the plane he was informed extra cargo weighing 600kg was loaded and they could not fly at the original altitude anymore and had to fly 2000ft lower. You had to find the final trip fuel.\r
- Name: Noorebasirat\r
  Comment: It would've saved my time if they could just bother adding a highlighted picture in the explanation.\r
- Name: ATPL QUESTIONS\r
  Comment: A figure has been added to the explanation. I hope it helps! Thank you.\r
- Name: FutureHendrix\r
  Comment: Can you add a labeled chart in the explanation\r
- Name: BMUHSEN\r
  Comment: The same exact question seen today in Austrocontrol but the value was 4.6 tonnes instead of 4.5 but it gives the same answer\r
- Name: BRAVOJ\r
  Comment: HCAA(marked) today, fuel flow was 4.6 tonnes per hour\r
- Name: flyingaua\r
  Comment: Austro Vienna but it was 4600kg/h consumption, otherwise exactly the same 31.05.2023\r
- Name: Ahsan\r
  Comment: Same question in vienna today. Only difference 4.6 tonnes instead of 4.5.\r
- Name: Menard\r
  Comment: With no fuel penalty: 1500/4500*60 = 20min\r
With fuel penalty: You know you will have less endurance, so only one answer possible => 15 min\r
- Name: SierraAlphaXray\r
  Comment: 1500 Kg include the penalty from additional fuel. So, 1500/1.236 = 1214Kg as real extra fuel. Thus 1214/4500 = 0.2697h ~=16 min. Closest answer 15 min.\r
- Name: btehere\r
  Comment: Seen DGAC FRANCE TODAY, same answers but it was 4,6tonnes instead of 4,5!\r
- Name: Fabian\r
  Comment: For People who never seen that kind of Loadsheet before i recommend you add a picture referencing the Value in the Table to the denominator at the bottom and the right line in the Operational Impacts section. Just makes it easier to understand if you never seen it before. Just like with all the other Charts where you visualized it.\r
- Name: Piotr\r
  Comment: This can actually be done without calculation, just by logic. If FF=4500 kg/h and they load 1500kg that's 20 min flight time. Except you have to consider operational impact of heavier plane -> more fuel burn. There's only one answer with lower hold time than 20min\r
- Name: Javier\r
  Comment: Because you are adding more FUEL so your plane will be heavier and you have a fuel penalty due to that.\r
- Name: Aris\r
  Comment: stated positive but why suddenly minus? the impact operational is positive 354 for trip fuel, but why you minus the extra fuel?\r
- Name: Michal\r
  Comment: so what these others increases or decreases mean? like this minus 232 or plus 448? Why weare supposed to look at the plus 236kg in the operational impacts section?\r
- Name: Kadham\r
  Comment: Detailed explanation:\r
\r
Penalty meant when you increase your fuel on board you are increasing the weight of the plane as well, so some of that extra fuel going tobe loss because of wieght increasment.\r
\r
Here in this question for 1000 kg of weight increase you are going to burn 236 kg and this is the penalty\r
\r
To calculate the penalty this is the formula to use : extra fuel/1000 x fuel panelty\r
\r
So 1500/1000 x 236 = 345 and this is going to be a useless amount of fuel . Means going to be burn because of increasment of plane weight\r
\r
So now to calculate the endurance of useful fuel from the 1500 we have to subtract the panelty\r
1500- 236=1146 and this is the useful fuel\r
\r
To calculate the endurance of it devide it by the fuel flow\r
\r
1146 / 4500= 15 mints\r
- Name: Abdul\r
  Comment: @ATPLQ sorry where in the annex does it say fuel penalty is 236kg per 1000kg\r
- Name: ATPL QUESTIONS\r
  Comment: @Abdul, you can see it in the operational impacts section (weight change)\r
- Name: Tom\r
  Comment: Seen UK CAA, fuel flow was 4.6 tonnes\r
- Name: Federico\r
  Comment: I agree with Wayne ( and logic). How are we supposed to appeal a question like this one before ending the exam if the correct answer is there to be selected and is impossible to think they are mistaken?\r
- Name: ATPL QUESTIONS\r
  Comment: Hi guys, correct answer and explanation is updated. Thanks for the feedback!\r
- Name: WAYNE\r
  Comment: Hmmmmmm. One has to consider the extra burn due to the 1500kg extra fuel carried. You can't just carry extra fuel weight without a penalty??In the operational impacts column it is 236kg extra burn per 1000kg= 348kg. >> 1500kg-348kg= 1152kg left. This will only give you 15min of holding at destination..\r
\r
Question Number: AT00024\r
- Name: diogog\r
  Comment: https://ibb.co/DDXpmYXT for those that dislike me comment\r
- Name: mariabo\r
  Comment: idk why but it works, if you use formulas and answers are really close together think that heading is a little bit more than your result and track a little less. Usually works.\r
- Name: TOMCYPRUS\r
  Comment: When it give you Heading instead of course always plot the wind speed below your TAS.\r
\r
1) Mark your TAS with the dot\r
2) Set the wind direction and then mark the wind speed below\r
3)Rotate to get your heading and KEEP IT THERE. Dont lift it like you would when adding the wind speed above the TAS.\r
- Name: Danielgr11\r
  Comment: Can someone from Spain can confirm the answers, because I get a totally different answer using trigo\r
- Name: quicoteca\r
  Comment: Guys if they do not give you Track you have to do it with CRP-5, when they give you Track you can use the Formulas.\r
To do it with the CRP-5 you put all the values in it except the Heading that is the last thing to put.\r
- Name: Federico00\r
  Comment: I got 6,4° and 157kt precisely\r
- Name: matant01\r
  Comment: Polish ULC 13.03.2025, different values maybe? I don't remember but the answer was 6L and 156GS for 100% I had it correct\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @matant01, thank you for your feedback. There is a similar question to the one you mentioned in our database, question number 337947.\r
- Name: kotasz\r
  Comment: Guys. I have 4 different navigation computers. CRP 5: 7 degrees left, GS=158. ASA E6-B: 7 degrees left, GS=158. AVIAT 617: 7 degrees left, GS=158. COMPUTADOR DE VOO from Brazil, EA-2: 7 degrees left, GS=158. I really dont get how you can get any other value on any of the existing flight computers. This type of question, with HDG provided, is the most straight-forward one. You put the wind point under the circle, then you set the heading and TAS and you are done. You can only encounter difficulties when the track is given instead of HDG. In this case, do not use the traditional wind down method with its iterative process. Rather, mark the wind point ABOVE the middle circle and set track under the heading. Then you set TAS under the wind point. And you always get a very accurate result.\r
- Name: URIRO\r
  Comment: what's the diffrence between this qustion to qustion number 337947 ?\r
- Name: N4318D\r
  Comment: sin 40 x 30 = 19,28 XC\r
\r
sin-1 x (19,28/180) = 6,14 left drift\r
\r
cos 40 x 30 = 22,98 HWC\r
\r
180TAS - 22,98 HWC = 157GS\r
\r
So 6L 157 GS for me\r
- Name: AlexPopescu\r
  Comment: Had it today Austro Vienna, but instead of 2L 155kt, the 4th answer was 6L 157kt. The rest all the same\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @AlexPopescu, thank you for your feedback. We have updated the relevant option accordingly.\r
- Name: Mackenzie\r
  Comment: WIND FC METHODS :\r
\r
TRACK provided : start with wind direction, mark wind UP, turn to track, slide mark till TAS speed, center dot is GS and mark is WCA\r
\r
HEADING provided : start with wind direction, mark wind DOWN, turn to heading, GS and DRIFT at the mark\r
\r
the answer is correct, make sure you use the right method :)\r
- Name: Manjitha\r
  Comment: I'm actually get 7L and 157 kts as GS from my CRP 5 - its just good to remember this one\r
- Name: ACaviatrix7700\r
  Comment: how do we know which method to use. I get 6L and 157 kts using the formula. surely this can't be fair on the exam??\r
- Name: Carlospas\r
  Comment: With CRP-5 I got 7L and then used the formula to get the speed for more accuracy, i got 157kts\r
- Name: Zanny\r
  Comment: Using trigonometry, the drift is 6,14 DEG Left. because CWC = 19,28kts (lets say 19kts)\r
HWC is 23 kts. (precisly 22,98 kts).\r
so the only correct GS= 157 kts. but not a single option of that?\r
Even on back side of E6B on the bottom, if you look 40 deg in horizontal row and 30 kts in vertical row for windspeed it says 23 KTS for HWC and 19 kts for CWC..sad :(\r
\r
The correct option is: 6 DEG drift to LEFT and GS=157 kts.\r
- Name: Musto\r
  Comment: This is very frustrating since there are many different answers. Using Pooley CRP-5 gives you 156kts and 6L.. Using E6B Online Calculator you will get the same value.. In this question you have to choose the wrong answer to pass imo\r
- Name: EgonKowalski\r
  Comment: With the Pooleys Aviat 617 I get exactly 7°L Drift and 158kt GS\r
- Name: Thordur\r
  Comment: Watch out - TH is given - not TT\r
- Name: Nick654\r
  Comment: It's quite easy but you have to pay attention to a few things. Since they're giving us Heading, we have to go down from TAS. From there it's really easy, just turn from wind 060 to heading 020 and you can directly read 7L and groundspeed 158. Made the same mistake at first but once you got it, it's not that difficult anymore. Keep going\r
- Name: Leonardo\r
  Comment: Cr3 got 6,4 drift and with etas I got 156gs lol\r
- Name: lippillowtech\r
  Comment: APPEAL CRP CANT BE THAT CLOSE\r
- Name: pcavaco\r
  Comment: In my CRP-5 I get Drift = 6L and GS= 156kts\r
- Name: Papa777x\r
  Comment: Why wind speed below, not above TAS?\r
- Name: Marco\r
  Comment: @Richard we are not supposed to balance drift cause they are giving as a heading already, that is the one you put directly in crp and dont correct or balance the drift, you only balnce it when you are given a track or a course, hope it helps, good luck!\r
- Name: Typhoon\r
  Comment: Appeal. Two answers too close together. With cr 3 you get in between 7L 158 and 6L 155. Here it has 7L 158 as correct but drift should be 6 not 7. They ask u to be precise but they are imprecise in the answer. Easa as always. You know already\r
- Name: RotorRider\r
  Comment: trigonometry says (drift = 6.4) & (GS = 157) very bad question. what to choose between "drift" or "speed"?\r
- Name: Michael\r
  Comment: sin(40)*60*30/180=6.427876\r
180-cos(40)*30 = 157.01866\r
\r
How shold you make a desition? It is neither 158 nor 7\r
- Name: Oliverinio\r
  Comment: With formula\r
GS 157kt Drift 6,4\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Mohammadhadi, thank you for your comment. In question 337947 we use the true track for calculation. However, we use heading in this question. So it is normal for questions and answers to be different. Good luck with your studies.\r
- Name: Shahin\r
  Comment: Q no 337947 , the same but different answer!\r
- Name: flywithTobi\r
  Comment: You have to calculate your real drive using XWC and thereafter XWC x 60 / TAS now you apply the drift on your heading -> 20-6 = 14. Now you can use your Aviation Calculator. Don't get tricked when they give you a Heading!!\r
- Name: CaptainAngel\r
  Comment: ok ok ok! I got something here!\r
\r
Personally i always use the method written on my E6B. Using this method with HDG i got WCA=6R, Drift 6L, which means a track (track made good) of 014. Doing it again with Track 014, it got me the answer that has as correct, GS=158 kts and WCA=7R exactly, which means Drift=7L.\r
\r
For me it works and im going to keep it as a tip, hope it helps!\r
\r
Generally appealing on that kind of questions,is a good strategy cause in any way, answers are so close and appealing them makes me them dissappear from the exam generators of the competent authorities.\r
\r
Peace\r
- Name: OwenB\r
  Comment: All your crp5 drift calculations using the dot up method? isn't this method only accepted up to ppl level since the drifts cannot be balanced and the answer is not accurate? the answer is wrong using the dot down method!\r
\r
the following is a message on the crp5 handbook pg 33\r
\r
A WORD OF WARNING FOR CPL/ATPL STUDENTS\r
\r
An alternative way of solving this problem has its advocates who claim that their method is easier because it does not require any moving of the computer to balance the drifts. unfortunately their method requires the wv to be marked on the window in reverse and the learning of a completely new set of rules. furthermore, unlike the professionals' method described above, their method cannot be used to solve all other types of problems. the cpl/atpl student is strongly advised to stick with the methods in this handbook and avoid getting involved with limited use short-cuts, particularly if they require committing non-standard procedures to memory.\r
\r
END OF WARNING -\r
- Name: agentesmith\r
  Comment: Just had this one today in Austro Brasil, I chose the correct answer shown here but I'm pretty sure that thats the only one question I got wrong in the test. Obviously there’s no way to check if my presumption is correct.\r
- Name: jimbee\r
  Comment: please review this question\r
\r
1. effective TAS: cos(sin-1(wind/TAS)) x TAS = 177.48\r
2. GS: cos(40) x wind (30) = -22.98 (HWC) + 177.48 = 154.49\r
3. XWC using CR-3: sin(40) x 30 (wind) = 19.28 --> closest Drift: 6 deg\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Jimmy, I appreciate your input! Typically, EASA anticipates the use of the flight computer for these types of questions, unless the question explicitly states otherwise. Hence, I recommend adhering to the provided explanation steps. Thanks!\r
- Name: Ramiro\r
  Comment: Hello , should be possible to get this answer with the cr3??cause i cannot\r
- Name: avioanaa\r
  Comment: Using the formulas Drift is 6,4L and GS is 157..\r
Using The CRP 5 Drift is 7L and GS 158\r
- Name: Flapless\r
  Comment: Using CRP-5:\r
\r
GS= 156KT\r
Drift= 6deg LEFT\r
- Name: givme5whiskey\r
  Comment: 6L 156 is the answer this is wrong\r
- Name: Max\r
  Comment: @Emmanuel you put in the course, you have to put in the heading at the site you mentioned it is in the below section to the left\r
- Name: Emmanuel\r
  Comment: 7L is not correct. using https://e6bx.com/e6b/ and also manually 6L and 156 Gs is the right answer.\r
- Name: ACardoso\r
  Comment: Poland ULC 19.JUN.2023 - Exact same question and values but different answers.\r
All the answers were pretty close and all had drifted to the left. So you really need to be precise\r
I don't remember the ground speeds.\r
A - 6L\r
B - 7L 90% sure this was the *CORRECT* answer\r
C - 8L\r
D - 2L\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @ACardoso, thank you for your feedback! We have updated the available options accordingly.\r
- Name: ATPLAGAIN\r
  Comment: If you are using a formula, first you will have to get TRACK from the given heading value.\r
30xsin40=19x16/180=6.5\r
Heading 20-6.5=13.5 TRK\r
-\r
30xsin46.5x60/180=7.2537(drift angle 7L)\r
180xcos7.2537=178.5kt ETAS\r
30xcos46.5=20.6 HWC\r
178.5-20.6=157.8=158kt GS\r
- Name: Pies\r
  Comment: CRP-5 marking in wind,\r
if, TRK/CRS mark UP from TAS\r
if, HDG mark Down from TAS\r
- Name: Ralph\r
  Comment: Made the same mistake. You're flying a heading (not track where you're trying to find the WCA), so wind on the other side and TAS under the hole, gives you pure drift at 7L and GS 158kts.\r
- Name: André222\r
  Comment: 6L 156KTS\r
- Name: Eren\r
  Comment: We are given a HEADING not a course hence why no correction necessary\r
- Name: BlueArrow17C\r
  Comment: Because they have different results, and when the options offered as possible answers are close enough to each other, you can loose the point just by a click\r
- Name: BlueArrow17C\r
  Comment: You just never know when to use CRP and when to use trig..this is NOT a fair game by EASA\r
- Name: Radoslaw\r
  Comment: i see.. lotto again Correct results 6L and 156GS so perfectly in the middle LOW BALLERS\r
\r
Question Number: AT00025\r
- Name: CaptainChris\r
  Comment: so the final reserve is called additional fuel here and includes the final reserve?\r
- Name: Ali\r
  Comment: Theres no going back after that point\r
- Name: DZPILOT\r
  Comment: iaa march 2021\r
\r
Question Number: AT00026\r
- Name: Karlvajs\r
  Comment: Sometimes we look at otacles+500ft and sometimes only grid altitude+500ft\r
- Name: Dihan\r
  Comment: Don't need to see the map for this one, you can see the E longitude is higher. So destination is to the east, so odd + vfr.\r
FL095 is the only valid option\r
- Name: Kangaxx\r
  Comment: FL105 is not good because Airspace E ends at FL100 as we can see near N 48°30 E 13°30\r
- Name: somethingmika\r
  Comment: Odd flight level + VFR on top.\r
- Name: Marco\r
  Comment: just think it this way: ODD + VFR = FL90 + 500ft = FL95\r
- Name: Antoniorosado94\r
  Comment: Flying east = odd FL\r
According to the ICAO VFR semi-circular rule, for an easterly magnetic track, Odd FLs/Altitudes + 500 ft must be followed.\r
minimum safe altitude along the whole route is 7 200 ft. But that would be FL750. But that is not an option, so let’s find which one is:\r
\r
It has to be Odd, so:\r
\r
Even / Odd\r
FL650 / FL750\r
FL850 / FL950\r
\r
Only option FL950\r
\r
Question Number: AT00027\r
- Name: Gregor\r
  Comment: Only draw a sketch and you will know the result\r
- Name: aahill\r
  Comment: DRIFT= XW x 60/TAS = 5.38. wind coming from right= left drift correct to right\r
HW = COS 35 X 18 = 14.7 = so 100 gs\r
the formula to calculate dont work on some questions which gives heading instead of track, but it works for all track questions.\r
- Name: SILLYEASA\r
  Comment: Cos 35 x 18= 14.7 kts HD, 100kts done move on\r
- Name: baltoxyz\r
  Comment: Adrian, you don't need to convert to True as long as heading and wind are both Magnetic\r
- Name: Pipinho\r
  Comment: And we all know that this question wont be in our exams for sure.\r
- Name: jimbee\r
  Comment: No calculation needed\r
\r
1. we have a headwind and the wind is coming from the right\r
2. the nose must be corrected to the right\r
3. Groundspeed must be less\r
\r
one answer left\r
\r
Question Number: AT00029\r
- Name: hahahahaha\r
  Comment: The solution is incorrect.\r
\r
Considering the case of MLM\r
- DOM + Traffic + Fuel on board - Fuel penalty= 122550+43217 +(51616-45854)-(51616-45854)/1000*394 = 169258\r
\r
The loadable weight considering MLM = 182000-169258 = 12741\r
-> considering the fuel penalty, the full fuel = 12741/1000*394+12741 = 17760\r
\r
Loadable weight under MTOM = 233000 - 43127 - 51616 = 15617 < 17760\r
\r
so the answer is 15617 kgs, not 14597 kgs.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @hahahahaha. The explanation and option are correct.\r
Maximum landing mass (MLM) - Actual landing mass = MLM - (Actual take-off mass - trip fuel) = MLM - (Dry operating mass + Traffic load + Planned take-off fuel - Trip fuel) = 182 000 kg - (122 550 kg + 43 217 kg + 51 616kg - 45 854 kg) = 182 000 kg - 171 529 kg = 10 471 kg\r
Increased Trip Fuel = 394 x (10 471 / 1 000) = 4 125 kg\r
10 471 + 4 125 = 14 597 kg\r
- Name: moczymorda\r
  Comment: calculated it twice, i would go for 15617. It is within limits.\r
- Name: Jor117\r
  Comment: 15617kg is correct, as it's within MLM after the extra full penalty\r
- Name: dichko\r
  Comment: Just try with 15617 kg:\r
New ATOM = DOM + TL + TOF (initial) + EF\r
New ATOM = 122550 + 43217 + 51616 + 15617 = 233000 (right into the limits)\r
New Fuel Penalty (FP) = 15617/1000x394 = 6153 => New Trip Fuel (TF) = 45854 + 6153 = 52007 kg\r
LM = ATOM - TF = 233000 - 52007 = 180993 kg (MLM = 182000 kg)\r
I think Fuel Penalty should apply on what is extra compared to the initial plan. In our case only Extra Fuel.\r
- Name: RicardoMSR\r
  Comment: @babgon94 u wanna know about fuel so why use maximum ZERO fuel\r
- Name: Babgon94\r
  Comment: Why don't we also use the MZFM limitation here?\r
- Name: arpr11\r
  Comment: @b747enthusiast yes its also possible but the questions wants the MAX possible so 14597\r
- Name: thepilotg\r
  Comment: @joey98 You can calculate it. But you can take a look at the Capacity and the planned takeoff fuel, which is 58.384kg. Without any calculation, it is obvious, that this is not going to be the answer.\r
- Name: Joey98\r
  Comment: Why isnt the fuel tank capacity the Most Limiting one ?\r
- Name: AlessandroB\r
  Comment: please have a look to olivier comment, because the method you use is wrong since you apply the correction to the remaining extra fuel at destination and not the one you have at takeoff. Is this answer based on actual feedback ?\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @AlessandroB. Yes, this answer is based on actual feedback. We apply the correction to the difference between the maximum landing mass and the actual landing mass, not to the extra fuel at the destination. Because the maximum amount of discretionary fuel is limited by the maximum landing mass (MLM) in this question. Thank you for your comment.\r
- Name: albertbabu\r
  Comment: My school tought me one method, aviation exam tought me another, here i am learning another method. And every method gives a different answer..\r
- Name: arbeloa17\r
  Comment: @Alpha You will exceed the Maximum Landing Mass but its a penalty so this fuel will burn in the air.\r
- Name: Alpha\r
  Comment: What happens if it exceeded MTOW after adding fuel penalty?\r
- Name: yahya777\r
  Comment: All Comments Are not understandable to me\r
\r
** we have to find most limited Tom**\r
\r
1- Tom from landing mass ( MLM + trip )=227854 ==> smaller then Mtom\r
2- find actual tom ( Dom+TL+ToF)=217383\r
\r
** we can take-off and land with tom from landing mass (227854kg)**\r
** but actual tom that is currently available is less then then that we get from LM**\r
** so we can carry extra fuel or any load that is (LM tom - Actual tom )= 10471kg\r
\r
3- We will get 10471kg By subtracting Limited Tom Getting from LM with Actual TOM\r
\r
** Apply penalty on 10471 kg\r
\r
4- Penalty on 10000 => ( 10X394 = 3940kg , and for remaining 470kg that will be less then the Half of 394 =>186\r
5- Total penalty 3940+186=4126\r
Penalty of extra load + Extra load ( 4126+10471)=14588kg\r
- Name: jonathanlaukner\r
  Comment: but with that amount of extra fuel, we are way above our Regulated TOM (RTOM) with MLM+TF.. so why is it correct if it is not allowed to Take off with that amount of fuel?\r
- Name: Adolph\r
  Comment: @Pawel when they ask for maximum possible extra fuel, MZFM is never limiting, so the only 3 values that limit your fuel will be MTOM, MLM, and maximum possible fuel according to the tank capacity.\r
Keep in mind that fuel penalty is ONLY applied to the extra fuel possible at from LANDING calculations; then you just select the most limiting value from the 3 numbers you get\r
- Name: Pawel\r
  Comment: Could You explain why in some quiestions (like No. 338671) we have to calcuate the most limiting MTOM and other questions like this one, we just skip this part and move to calculations for extra fuel? And also if we check the most limiting MTOM why don't we check the option MZFM+ T/O fuel? Thanks in advance\r
- Name: iloveeasa69\r
  Comment: Hi , please check your answer again. If we bring 15,617 kgs of extra fuel at take-off, my fuel burn penalty is 15,617/1,000 x 394 = 6,153. Then at landing, my landing mass will be DOM+Traffic Load+Planned T/O Fuel + Extra Fuel (15,617) - Planned Trip - Fuel Penalty = 122550 + 51616 + 43217 + 15617 - 45854 - 6153 = 180993, which is LESS than the maximum landing weight.\r
- Name: Milos\r
  Comment: I passed M&B with 89% but I feel like a beginner when I do this..\r
- Name: winaol\r
  Comment: The proposed method to calculate the fuel penalty is not correct. A simple cross-check: applying the fuel penalty of 394 kg/ton to the 14956 kg of extra fuel gives a penalty of 5750 kg, so the landing fuel will be 8845 kg, which is lower than our target max landing fuel of 10471 kg. This is because the extra fuel of 4125 kg used to carry the 10471 kg will in turn generate a fuel penalty of 1625 kg, which will cause an extra burn of 640 kg, and so on (252, 99, 39, 15, 6, 2, 1), for a total of 6804 kg.\r
So, the max extra fuel limited by MLM is 17275 kg, which could have been calculated directly so : 10471/(1-0,394) as described by Paolo in an earlier message.\r
As this exceeds the 15617 kg allowed by the MTOM limit, that value becomes the max allowable tanker on take-off.\r
- Name: mazur\r
  Comment: does keyword "uplifted" always mean take-off fuel? this time there was no 300kg heavier option but in case there was - can i be sure not to choose it?\r
- Name: Jordan\r
  Comment: Can anyone explain when to use MLM+Trip and when jst to use MLM? these seems to be questions asking the same thing yet seems to apply a different rule and i can work out which one to apply to which scenario's. any help much appreciated.\r
- Name: Andrija\r
  Comment: The answer is wrong because when you put 14 516 kg extra your MLM wili be more than that has been given in guestion. Please be kind correct answer. Thank you\r
Prof dr of Math at Belagrade university\r
- Name: Nicolas\r
  Comment: @Viktor, you will, if you survive through this mess\r
- Name: Viktor\r
  Comment: I probably will never fly such a big plane)\r
- Name: Paolo\r
  Comment: @atplq I think this answer is wrong, I leaned that for fuel penalty you should calculate it this way:\r
\r
FP= 1000-394/1000 = 0,606 (every extra fuel I carry at landing I would have 0,606 kg)\r
maximum extra fuel at landing/FP\r
\r
If you apply this formula you should get 17278,8\r
Is this an old question? has it appeared recently?\r
- Name: Pawel\r
  Comment: Here you should not exceed MTOM while starting (with penalty fuel still not burnt) and MLM while landing (when penalty is burnt, additionaly to planned Trip Fuel).\r
\r
Limit (A) => MTOM - Actual Take Off gives underload = 15 617 kg (penalty not burnt)\r
Limit (B) => MLM - Actual LM gives underload = 10 471 kg (penalty burnt)\r
\r
Our weight sums are:\r
1. DOM: 122 550 kg\r
2. Traffic Load: 43 217 kg\r
3. Remaing of planned T/O Fuel (T/O Fuel - Trip Fuel) 51 616 kg - 45 854 kg = 5 762 kg\r
4. Extra fuel after burining penalty, one of two options:\r
\r
(A) For Take Off limited Underload*: 15 617 kg*_______After burining penalty______=> 11 202 kg\r
(B) Landing limited Underload*: 14 597 kg _______After burining penalty______=> 10 471 kg*\r
\r
While both variants don't exceed MTOM (233 000kg), for MLM (182 000):\r
- (A) 122 550 + 43 217 + 5 762 + 11 202 = 182 731\r
- (B) 122 550 + 43 217 + 5 762 + 10 417 = 181 946\r
Only (B) fits, so maximum Extra Fuel including any penalty that can be load without exceeding limits is:\r
\r
14 597 kg.\r
- Name: Jon\r
  Comment: DOM + TRAFFIC LOAD + TAKE OFF FUEL = TOM\r
122550 + 43217 + 51616 = 217383\r
\r
Find the Take Off Underload by subtracting this from MTOM:\r
233000 - 217383 = 15617\r
\r
TOM - TRIP FUEL = LM\r
217383 - 45854 = 171529\r
\r
Landing Underload = MLM - LM\r
182000 - 171529 = 10471\r
\r
Take the lowest of our Take Off or Landing Underload. In this case 10471 as it's smaller than 15617.\r
\r
Apply the fuel penalty = (10471/1000)*394 = 4125.57\r
\r
Add this to our Landing Underload. 10471 + 4125.57 = 14597.\r
\r
Double check this fits in the tank - yes loads of room. So 14597 is the answer\r
- Name: Cuong\r
  Comment: Could anyone explain me please how we can end with this answer? :((((((\r
\r
Question Number: AT00030\r
- Name: RedPowerRanger\r
  Comment: seen UK CAA however, in the question it stated "will be operated under the VFR, followed by one or more subsequent changes of flight rule" so i went with Z\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @RedPowerRanger, thanks for the feedback! We have added a new question based on your input: 339869. Best of luck with your studies!\r
- Name: chambel\r
  Comment: In austro control portugal (idk about the others) you can take the jeppesen an check this out in the atc part.\r
- Name: Eagle1\r
  Comment: IFR - VFR = Y (Yoke)\r
VFR - IFR = Z (Zigzag - in VFR you are flying in Zigzag)\r
- Name: mrJunior\r
  Comment: I made a memo witch works fine for me, maybe for you too :)\r
\r
In alphabet X stands before Y\r
We learn to fly first VFR, then IFR\r
\r
So accordingly:\r
If the first part of the flight is VFR - it's a "first" letter X\r
If we start with IFR then Y.\r
\r
Good luck!\r
- Name: TommyCigar\r
  Comment: me rushing to the comments to share the IVY mnemonic i thought of, only to be faced with disappointment similar to "how big is a grain of sand" - also, never forget pp is required for disappointment\r
- Name: Prapanch\r
  Comment: IVY\r
- Name: ALI747\r
  Comment: GSP-466 ITEM 8 GOOD LUCK\r
- Name: Domino093\r
  Comment: YFR\r
- Name: JakeH20\r
  Comment: IFR = I\r
VFR = V\r
\r
I -> V = Y\r
\r
(imagine the I then add the V on top to make Y)\r
- Name: MertAir\r
  Comment: Y like --> yes you can fly IFR after that than VFR !! Z like Zulu the last used letter in the alphabet --> like the last used Rule by Airlinepilots VFR --> IFR\r
- Name: Krisztian\r
  Comment: (Y)eet the IFR clearance for a VFR one.\r
- Name: Edmund\r
  Comment: I=IFR\r
V=VFR\r
Y sounds like I(FR to VFR)\r
Z sounds like V(FR to IFR)\r
- Name: Janek7\r
  Comment: Letter Y\r
lower part(Initially) = I (IFR)\r
upper part(then) = V (VFR)\r
- Name: JakubMG\r
  Comment: Austro today\r
- Name: Kacper\r
  Comment: Seen yesterday in Polish ULC (10.11.2022). Correct answer as here. Remaining options were: X, I, Z\r
- Name: Andrea\r
  Comment: IFR TO VFR --> Y\r
VFR TO IFR --> Z\r
IFR --> I\r
VFR --> V\r
- Name: Lorenzo\r
  Comment: YFR sounds like IFR\r
- Name: Afonso\r
  Comment: Mnemonic:\r
\r
Y would you change to vfr???\r
- Name: Sam\r
  Comment: IVY (IFR to VFR = Y)\r
VIZ (VFR to IFR = Z)\r
- Name: gary\r
  Comment: WHY (Y) would you want to change from ifr to vfr....\r
- Name: Maximilian\r
  Comment: VIS\r
IVY\r
\r
Question Number: AT00031\r
- Name: yahseen\r
  Comment: Seen this in RNAV austro Spain, remembered the word constellation- saved my butt.\r
- Name: joaobteixeira\r
  Comment: Lockheed Constellation\r
\r
It doesn't get much better then this when it comes to memorize\r
- Name: AlexPopescu\r
  Comment: Austro Vienna today, similar to this but it was something like:\r
When is a pilot notified about the unserviceability of the GNSS?\r
- way before the flight (like a few days)\r
- during briefing\r
- during flight and a backup option might be necessary (chose this one)\r
- something else\r
\r
Don't remember the exact phraseology, it was more clear and straightforward during the exam, no confusion between "NANU/NOTAM" and "During flight"\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @AlexPopescu and thanks for your comment. We would appreciate any further feedback on the question @AlexPopescu describes so that we may create the new question accurately. Thank you!\r
- Name: Toaster\r
  Comment: My FP exam seemed to be 50/50 RNAV and GNAV. About 9 , 2 point questions and all GNAV based.\r
- Name: SufferingATPL\r
  Comment: They should change Flight planning to RNAV 2.0\r
WHY are there so many RNAV questions? I understand having a bit of other subjects here but the amount of RNAV questions is a joke.\r
Why bother having an RNAV exam if you chock FLP full of RNAV questions. I've already passed RNAV!\r
- Name: Tsvetomir900\r
  Comment: You cant talk when you have CONSTIPATION/CONSTELLATION\r
- Name: HaddamSussein\r
  Comment: Sorry babe can't talk right now, the satellites aren't in retrograde\r
- Name: Martim0522\r
  Comment: be my very own CONSTELLATION\r
- Name: Putinisaknob\r
  Comment: Just about had enough of this crappy wordplay\r
- Name: StefanZ\r
  Comment: Juan, read the corresponding answer carefully. It says that the "availability" of satellites depends on the aircraft equipment. This is of course not true because the satellites are still available even if your aircraft has no equipment to make use of them. Their information would not be available in your plane but the satellites will still be there and operational.\r
- Name: Juan\r
  Comment: so if I'm flying an aircraft with no gps equipment I can still use gnss? of course it depends on the equipment..\r
- Name: Jim\r
  Comment: UK CAA (Remember to come back and mark as seen after your exams).\r
\r
Question Number: AT00032\r
- Name: thepilotg\r
  Comment: Today at Austro Control Vienna, but the answer was Munich Atis 123.12, so please add the frequencies. The other options were with other frequencies. One option was called Munich Weather Radar on xxx.xxx\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @thepilotg, thank you for your feedback. We have updated the options accordingly.\r
- Name: Lennart\r
  Comment: Shouldn't the question state the coordinates for EDNA?\r
- Name: FlyingLegend\r
  Comment: When I'm already flying, I would be on Langen Information and ask them, depending on whre I am and how high I'm flying, I could not receive the ATIS\r
- Name: CharlieFoxGolf\r
  Comment: Need to read the question/answers first before searching for ages for that damn aerodrome\r
- Name: Beech\r
  Comment: Seen at austro control, slightly reworded. They asked about the cloud height, visibility and rwys in use at Munich. You are flying local at EDNA but there radio station is unserviceable\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Beech. We have updated the question text accordingly. Please check this question and compare it with the one you encountered in the official exam. Thank you for your valuable feedback.\r
- Name: Udidit\r
  Comment: The cloud base information is obtained from the ATIS\r
\r
Question Number: AT00033\r
- Name: Spaceflight\r
  Comment: From CAP 697:\r
\r
3.2\r
f) Interpolate between the trade-lines for the appropriate Cruise Pressure Altitude\r
and travel along this line from the reference-line to intersect the Landing Weight\r
input.\r
- Name: ricardgalisteo\r
  Comment: the 33 and above is the pressure altitude of what?\r
- Name: Ando1\r
  Comment: UK CAA\r
\r
Trip distance: 300 NM\r
ISA deviation: +10C\r
Average wind: 75 kt headwind\r
Pressure altitude: 33000ft\r
Estimated Landing Weight: 50000 kg\r
Long Range Cruise\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Ando1. We have added a new question based on the information you've shared: 335188. Please check this question and compare it with the one you encountered in the official exam. Thank you for your feedback.\r
- Name: Matthieu\r
  Comment: @Zokir this is the Pressure altitude x1,000ft\r
Actually there is there are two area in the graph where the pressure altitude is taken in account.\r
If you are at or above 33,000ft you take the dash line.\r
if you are at 10,000ft you take the solid line\r
if you are in between ==> Interpolation (with the given graph scale, a quick and dirty visual rule of thumb is good enough)\r
- Name: Zokir\r
  Comment: is it possible to clarify what does 33 or above and 10 signify in graph?\r
- Name: FabiooOooooo\r
  Comment: bro is departing with 75kt headwind\r
- Name: hudson\r
  Comment: Do we follow the 33 & above dashed line or solid black Line? It appears here to be solid ? Why?\r
- Name: scottmacbain87\r
  Comment: Why does the line in the answer parallel the 10 and not an interpolation?\r
- Name: Ahmet\r
  Comment: I had this chart a Austro Control yesterday. They were asking about the time with ISA +5 or ISA +10\r
- Name: badabimbadabum\r
  Comment: Had 2 Questions with this chart today, 1 asked time and other one fuel. Different numbers.\r
- Name: Armada367\r
  Comment: SEEN IN SENASA, exact\r
- Name: FREEOFATPLSHACKLES\r
  Comment: SEEN UKCAA type in\r
- Name: Guillefdb2008\r
  Comment: Very similar but same answer Senasa Spain\r
- Name: Daniell\r
  Comment: Senasa Madrid today!!\r
- Name: Peter\r
  Comment: Seen UK CAA type in 2450kg marked as correct\r
- Name: Javier\r
  Comment: Yes, interpolate in the same random way as the person who created the question, in some exercises to get the correct answer you have to draw a parallel line, in others you interpolate...\r
- Name: Mula\r
  Comment: @ATPL\r
pressure alt 33 & above we follow the dashed curve, in right side section of graph.\r
please clarify the figure 10 parallel to solid line ??\r
- Name: Calin\r
  Comment: Sorry to bother you with this, @ATPLQ, but I think it would really be useful for the questions which were seen in an official exam, but have no comments (so that we are able to make an idea if it was recent or not), we also had the approximate date when they have been reported.\r
- Name: ATPL QUESTIONS\r
  Comment: @Calin, when you are on real exam tab of a question, if you click on numbers on the left side indicating how many times it has appeared for a country there should be a window that is showing the dates of appearance.\r
\r
Question Number: AT00034\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @zeymahse, thank you for your feedback. The question you mentioned is available in our database, question number 334359.\r
- Name: thepilotg\r
  Comment: Austro Vienna today, not sure about the values, but same concepts\r
- Name: zeymahse\r
  Comment: DISTANCE (in NM) : SPEED (GS in kt) = TIME\r
Can't get easier than this.\r
- Name: Gibon3m\r
  Comment: maybe some of you would like to impress themselves with what they already know and end up with a wrong answer. remember ICET. a looked at given data, spotted flight level (felt like a winner already) and treated TAS like IAS and applied 2%/1000ft correction. EASA anticipated and gave the result of my way of thinking as one of the answers! obviously wrong. good luck and keep it simple ;)\r
- Name: Carlospas\r
  Comment: 143,8 mins = 2,4 hours (143,8 / 60 = 2,3967..)\r
0,4 hours = 24 mins (0,4 * 60 = 24)\r
So: 143,8 mins are 2 Hours and 24 Minutes\r
- Name: AlessandroP\r
  Comment: Isn't the category wrong? I am doing VFR 033-01-01\r
- Name: AlvaroPerez\r
  Comment: Very similar SENASA correct result 2h 29min\r
\r
Question Number: AT00035\r
- Name: RoAlexandru\r
  Comment: PROCEDURES 10 letters\r
ARRIVE shorter 5\r
move on\r
- Name: zeymahse\r
  Comment: It's 10 procedures in total, or 5 for arrivals and 5 for departures.\r
Unless you are at your 1st EASA exam, you should probably already know that EASA likes to wordplay with us.\r
- Name: patgol\r
  Comment: ULC 14/05/2024 was 10.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi guys. This question only asks for “VFR arrivals to Dubrovnik” and the correct answer is 5. We believe that the question you encountered in your official exams and whose answer is 10 is the question in the database with question number 337414, which asks “How many visual procedures are published?”\r
We also believe that your feedback on the options may be related to question 337414. We will therefore continue to monitor your feedback to update relevant questions. Thank you all for your valuable feedback.\r
- Name: reecered\r
  Comment: UK CAA. Same question only different options.\r
\r
2 options were something like '5 bi-directional at 1500' or '10 bidirectional at 1500'' and another one '10 total, 1500' altitude for departure and 1000' if flying inbound'.\r
\r
I chose the '5 bi-directional at 1500'.\r
- Name: Housie\r
  Comment: Seen UK CAA - Reworded answers with altitudes included as well. I selected 5 procedures for arrival and departure at an altitude of 1500ft. Other answers included 1000ft and 2000ft. Sorry cant remember the specifics.\r
- Name: Avi8or\r
  Comment: Seen in the Czech Republic. 5 was not a correct answer\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Evgenii, thank you! I believe you've come across question 337414, not this one. Could you kindly confirm? Thank you!\r
- Name: Gonzalo\r
  Comment: How many VFR procedures are publised?\r
seen in spain\r
(Dubrovnik chart)\r
answer ''10''\r
- Name: Tiberiu Cristian\r
  Comment: In Romania the question was\r
How many vfr procedures to Dubrovnik are published?\r
Answers 5, 10, 0, 4\r
- Name: Martin\r
  Comment: Count the solid inbound arrows.\r
- Name: Akaash\r
  Comment: UK CAA 10/10/22\r
- Name: Jacopo\r
  Comment: Due to EASA exams, now i doubt myself even about choosing my preferite food.\r
- Name: Flylindborg\r
  Comment: SENASA 15/07/22 question was asking for total VFR procedures. The confusing answers were 5 or 10\r
- Name: ALAJMI\r
  Comment: Arrivals 5\r
Departures 5\r
Total 10\r
- Name: Dominika\r
  Comment: The same. But answers was 10 ( both way)\r
- Name: Martin\r
  Comment: Where's the trap? EASA I'm disappointed, I know you can put a trap even in 2+2.\r
- Name: Krzysztof\r
  Comment: Andrew, B2 is a point only. The arrivals, are between points. Due to this you have 5 arrivals.\r
\r
Question Number: AT00036\r
- Name: SeldomFlying\r
  Comment: There's an MLS at Heathrow?!\r
- Name: Marguez\r
  Comment: WIP= Work In Progress\r
- Name: Adrian\r
  Comment: microwave landing system something never used\r
- Name: Tom\r
  Comment: Only knew the answer to this because of Carhartt\r
- Name: Guillefdb2008\r
  Comment: SENASA SPAIN TODAY\r
- Name: Andre\r
  Comment: LBA Germany\r
23.03.2022\r
\r
Same wording, same answers!\r
- Name: Banuma\r
  Comment: the all might JEP has all the answers, go to VFR, GENERAL PART (en) 1.5-7 page 323 and you will find the definition for WIP\r
- Name: Mohammed\r
  Comment: Today Austro\r
- Name: kamil\r
  Comment: water in patches XD\r
- Name: DanTheMan1\r
  Comment: WIP ---> means "work in progress "\r
\r
Question Number: AT00037\r
- Name: Urslaan\r
  Comment: The intersection is definitely at 185,000 kg. The answer option should be updated to 5000 kg\r
- Name: SimonC\r
  Comment: I dont believe it was different, but Ill give you the benefit of the doubt. Nonetheless for the UK it was clear 5000kg , which was marked correct.\r
- Name: ATPL QUESTIONS\r
  Comment: @SimonC with the numbers given in the question, there is no doubt that the correct answer is 4000 kg. The graph is more than clear and not even an interpolation is required. Of course, a combination of different numbers may lead to a 5000 kg answer. We are looking forward to receiving further feedback.\r
- Name: SimonC\r
  Comment: I saw this in UK Today, type in. As another comment said the intersection was bang on 185,000kg optimum so I put 5000kg. It seemed more accurate vs 4000kg.\r
- Name: ATPL QUESTIONS\r
  Comment: @SimonC the question has been reviewed by the team and it is correct. Probably, you might had one or more different number(s), which lead(s) to a different result.\r
- Name: Nickyp1982\r
  Comment: I cant seem to find this graph in CAP697 or am I missing something? How are you supposed to practice this?\r
- Name: AlexPopescu\r
  Comment: Similar today Austro Vienna, but Trip Fuel 18000 and 8000 instead of 4000 in the answers\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @AlexPopescu, thank you for the feedback. If possible, we would appreciate any further feedback on whether any of the other details in the question were changed, such as the fuel price ratio, trip distance or planned TOM. Thank you!\r
- Name: adamb\r
  Comment: Seen UK CAA (04 Dec 24) as a type in graph made it look like the intersection was at 185,000kg for optimum weight so I went with 5000kg\r
- Name: nickname1\r
  Comment: Next, we need to assess the feasibility of tankering an additional 4 000 kg..\r
4000 is the smallest answer.. DONE\r
- Name: Billy\r
  Comment: @lenny1 you missed the keyword.. optimum\r
- Name: Lenny1\r
  Comment: I had this exact question in germany I don't know what is correct, but I pressed 10000kg, because ,,can be tankered,,\r
means maximum in my opinion.\r
- Name: Cristiano91\r
  Comment: the quality of the annex, considering the precision that the question requires, is abysmal\r
- Name: GhaithGarraoui\r
  Comment: No need to calculate anything after finding 4000kg from the graph because 4000kg is already the lowest value in the possible answers. It is both the more restricting and the optimal tankering value.\r
- Name: PaulVlad\r
  Comment: Max is 10.000, Optimum 4.000\r
- Name: Imran289\r
  Comment: please check this. The question asked specifically for the MAXIMUM amount that can be tankered, that would be 10,000kg. Not the optimum tankering of 4000kg. Taking the already 30T onboard to 40T (the max capacity). This is also within MLM limits.\r
- Name: ATPL QUESTIONS\r
  Comment: Hey guys, thank you for your comments! We have updated the question text. If anyone comes across this question in their official exam, kindly let us know where they ask for the optimum or maximum amount of fuel which may be tankered. Thank you and best of luck with your exams!\r
- Name: Hossein123\r
  Comment: basically, this is just 1 new step to what you already know if you finished the previous fuel section\r
\r
find the limit in, and take the lowest:\r
MTM - ATM\r
MLM - ALM\r
F.T - fuel.total\r
\r
but now our new step is to use the graph and apply fuel ratio from the left, go right to our NM and go down to our optimum weight\r
subtract optimum weight and our take off mass = 4000\r
\r
so, find the lowest in:\r
MTM - ATM\r
MLM - ALM\r
FC - FL\r
OW - ATM\r
- Name: Toast\r
  Comment: question says maximum? 4000kg is the optimum tankering weight\r
\r
Question Number: AT00038\r
- Name: PilotRaman\r
  Comment: following the radial 243 torward the VOR, so our QDR is 243 but our QDM is 63. We need to know where are we (QDR) to determine which MSA to use.\r
- Name: Gibon3m\r
  Comment: SKYBRARY:\r
Minimum Safe Altitude (MSA) is a generic expression, used in various cases to denote an altitude below which it is unsafe to fly owing to presence of terrain or obstacles. An ICAO definition of the term "minimum safe altitude" as such does not exist.\r
- Name: tecnamodi\r
  Comment: Comment from @rixii really solved all MSA questions from me. Just add/subtract 180 to the radial and it makes it much simpler when trying to find which direction you're coming from. Big credits to him\r
- Name: Toaster\r
  Comment: Also if you're not sure which side of 60° to go, remember headings clockwise from north so 63 will be in 5900 sector not 3500.\r
- Name: Toaster\r
  Comment: I like others kept getting this wrong but then realised it's actually quite easy, you just add or subtract 180° to get the radial and match it to a sector. I think I got this on my first attempt and it was 2 points in austro.\r
- Name: AnuBoswell\r
  Comment: This one got me, 243 radial. -180 = 63 degrees! Which puts you in the 5900' side! Be careful!\r
- Name: SergioTuga\r
  Comment: one of the best questions in here ! actualy tests your knowledge ! GG\r
- Name: CommandantSharma\r
  Comment: It wasn't logic until I read Marcelis comment, thanks man !!\r
- Name: Tarik\r
  Comment: Radial is QDR = From the station. TO the station is +-180. In this case 243 - 180 = 63 magnetic.\r
- Name: JWMG\r
  Comment: now we can see the real interest of EASA, to confuse pilots\r
- Name: Razva\r
  Comment: just convert the MSA to QDR then decide where to put the one given by question\r
- Name: PabloPIC\r
  Comment: Does anybody else understands from the question that the aircraft is tracking radial 243 TO the VOR? Or am I getting confused with the question wording?\r
- Name: Kokoszka17\r
  Comment: To everyone saying it should be 3500 - unfortunately not and I was thinking the same thing as you until I studied the MSA picture a bit more. If you look at the approach following R175 and R355 you'll notice that they are 180 degrees apart which divides the circle in two. HOWEVER radials 60 and 245 are NOT 180 degrees apart but 185 degrees which makes the 2 halves of the circle uneven. Therefore R243 is a reciprocal of R63 which is unfortunately still in the 5900 MSA sector.\r
\r
This chart was carefully chosen by EASA because of the tricky MSA sector divide which probably fooled many pilots.\r
- Name: rixii\r
  Comment: Maybe try to convert it to headings.\r
\r
R243 - 180 = 063 heading towards the VOR which places it in 5900ft sector between headings 060 to 175 degrees.\r
- Name: ATPL QUESTIONS\r
  Comment: @Ran, radial 243 is in the sector between radial 240 and 355. The sector is designated with the headings 060 and 175 respectively.\r
- Name: Dennis\r
  Comment: It should be 3500\r
- Name: The struggle\r
  Comment: The answer should be 3500ft as the 243 radial would be extending into that section. The explanation would state more than 245 degrees.\r
\r
Question Number: AT00039\r
- Name: TRUMP88\r
  Comment: U/S = UNSERVICEABLE\r
- Name: boeing757\r
  Comment: Sorry, I have difficulty understanding your sentence "It is a building located outside of the meteorological mast", how can a building be located outside of a mast?\r
- Name: Eagle1\r
  Comment: NOTAM language really sucks. It let to dangerous situations pilots having to decoding stupid letters instead of flying the aircraft and managing spacial awareness. It should be kept simple without useless information!\r
- Name: PaulVlad\r
  Comment: what is this mess you are describing here?\r
\r
It is a building located outside of the meteorological mast (MET MAST) at Inch Cape, with a single light (SINGLE LGT) out of service (U/S).\r
\r
building outside of a mast? how can the building be inside of a mast?\r
\r
The NAV AID is OBSTructed by a BUILDING, the mast is O/S out of service because the light is U/S unserviceable. And that is all!\r
- Name: Gianlu\r
  Comment: U/S = unserviceable\r
O/S = out of service or outside ?\r
- Name: ZTaylor\r
  Comment: The explanation is perfect on this question.\r
- Name: Lucas\r
  Comment: SEEN UKCAA 19/07/23. Similar wording but answer the same\r
- Name: Adrian726\r
  Comment: Why in this day and age do we tolerate the dissemination of this vital\r
information in the same ridiculous manner that weve done for decades\r
Abbreviations, codes etc are all potentially\r
unclear and / or confusing\r
And whats the point ? In the old days shortening the message was essential to save space, now theres an app that can translate these into plain English\r
- Name: Antoniorosado94\r
  Comment: MET MAST SINGLE LGT U/S\r
\r
Meteorological mast single light unserviceable\r
- Name: joaquin\r
  Comment: @ATPLQ, It would be amazing if you explain everything and not just highlight some part, I want to know the meaning of the whole sentence in case in the exam they ask other things, thank you.\r
- Name: ATPL QUESTIONS\r
  Comment: Here is the decoded information:\r
Q: This is a NOTAM identifier code.\r
EUAD: This refers to the area of the United Kingdom (FIR where the affected place, equipment or service is located).\r
QOLAS: This is the type of NOTAM, which stands for "Obstacle Limitation Surface."\r
IV: Traffic affected, in this case, IFR and VFR.\r
M: Purpose or significance of the NOTAM - Miscellaneous, not subject for a briefing, but available on request.\r
E: Flight phase affected - En-route.\r
000/004: The vertical limit of the obstacle is from 0 feet to 400 feet above ground level (AGL).\r
5626N00214W001: Coordinates and radius, indicates the coodinates and radius of the centre and size of the lateral limits of the place affectes by the NOTAM.\r
Item A) affected location: EUAD (four-letter ICAO aerodrome or FIR).\r
Item B) valid from: 26 Jan 2016 17:32.\r
Item C) valid to: 26 Feb 2016 23:59.\r
Item E) NOTAM message (AIR NAV OBST UK0150J492F BLDG INCH CAPE O/S MET MAST SINGLE LGT U/S, PSN 562624.274N 0021429.366W, ELEV 381FT AMSL): This is the description of the obstacle. It is a building located outside of the meteorological mast (MET MAST) at Inch Cape, with a single light (SINGLE LGT) out of service (U/S). The location of the building is specified in latitude and longitude coordinates, and the height of the obstacle is given as 381 feet above mean sea level (AMSL).\r
- Name: Szefu\r
  Comment: @ATPLQUESTIONS I assume that abbreviation "LGT" = light, yes ?\r
- Name: FinishedATPL\r
  Comment: INCH CAPE is website in Lithuania where you can buy used car. Used car - no light\r
- Name: Radoslaw\r
  Comment: I wonder why they use this mumbo-jumbo computer-like language instead of English actual words..\r
- Name: zanna90\r
  Comment: U/S unserviceable\r
- Name: Christopher\r
  Comment: In case you're wondering what 'INCH CAPE' means, it's actually an offshore windfarm near Scotland.\r
\r
I suppose once you know that the question and answer are much easier to understand.\r
- Name: DanTheMan1\r
  Comment: Look at that part in NOTAM:\r
MET MAST SINGLE LGT U/S -----> obstacle with light is unserviceable.\r
- Name: Michal\r
  Comment: Only one answer with U/S.\r
\r
Question Number: AT00040\r
- Name: Biggles\r
  Comment: VFR ? IAF ? since when did these to co exist\r
- Name: AC861\r
  Comment: So I think this question assumes we're already in flight? In which case at the IAF makes sense.\r
On the ground at the departure aerodrome, this would be done before departure.\r
\r
Correct me if I'm wrong\r
- Name: Fmaiate\r
  Comment: Watch out, the question 333291 state that we should check prior to departure.\r
\r
Do not confuse, the GNSS must be check before departure, when you are planning the flight, AT or FOR the time you will need to use , in this case at IAF.\r
\r
The most correct answer would be, GNSS must be check before departure FOR the time/at the time you will use.\r
- Name: ElPatron\r
  Comment: Why not before TOD ?\r
- Name: PHIAPHI\r
  Comment: Ok and if we are IFR, does it mean one hour before the flight (as that is the deadline for a flight plan)?\r
- Name: Toivonen\r
  Comment: Same as @Nilss Swedish CAA today, I took 14:45 (time of approach) but can't confirm that it's correct\r
- Name: Nilss\r
  Comment: It was basically the same, there were just the times of the different stages also given like that:\r
Time of Departure: 13:00\r
Time of Approach: 14:45\r
Time of Landing: 14:55\r
\r
Answers were just the times.\r
a)13:00\r
etc.\r
- Name: Nilss\r
  Comment: LBA Germany, times were given in the Question from Departure til landing. Was 14:45 for Approach\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Nilss, thanks for the feedback! Could you kindly share more details on the question text? Thanks!\r
- Name: Hyperaspiste\r
  Comment: Since when we talk about IAF in VFR?\r
- Name: Domino093\r
  Comment: Since when you need GPS for VFR flight?\r
- Name: Adrian726\r
  Comment: INITIAL APPROACH FIX (IAF)\r
- Name: Anezka\r
  Comment: Heavily reworded question in IAA with different times, but same principle. Read the explanation as it depends if they give you a VFR flight.\r
- Name: Pietro\r
  Comment: Its not accurate, should be before Tod, if there aeree only gnss procedures this means that the star also is gnss and I need it\r
\r
Question Number: AT00041\r
- Name: Qu4gmireGiGiDy\r
  Comment: is there not another question where you adjust the aerodrome temp for calc, that states 12 below isa, isa at 1416 feet is around 12 degrees. Could you clear up this confusion with the temperature and where to use it as the explimation although a good one is the generic one kept for altimetry. Thanks\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Qu4gmireGiGiDy. Could you please provide the other question's ID so that we can look into this? Thanks!\r
- Name: DennisBertram\r
  Comment: Could you explain when you start with the pressure correction and when you start with the temperature correction?\r
\r
This changes between each question.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @DennisBertram. It depends on whether you're converting from true altitude to pressure altitude or vice versa. You can clearly see the sequence of corrections in the figure attached to the explanation.\r
For example, if you're given a true altitude and need to convert it to pressure altitude, the steps are as follows:\r
1. Apply the temperature correction to the true altitude to get the indicated altitude.\r
2. Then apply the pressure correction to the indicated altitude to obtain the pressure altitude.\r
To go from pressure altitude to true altitude, you simply reverse the process.\r
Hope this helps!\r
- Name: RogerThat\r
  Comment: I'm shocked they didn't give 3743ft, as an option.\r
- Name: EduardVelichkov\r
  Comment: Had this question in Greece, took me a lot of time to select the correct answer because they were asking for ALTITUDE with reference to the AERODROME DATUM, I'm certain about this because I read it many times. Finally selected the one corresponding to the height, don't know if it was correct\r
- Name: Snowtam\r
  Comment: Seen Austro today with question asking for HEIGHT above aerodrome datum. Current answer is correct\r
- Name: ATPL QUESTIONS\r
  Comment: Hello guys. Thank you all for your valuable feedback. We have updated the question text accordingly.\r
- Name: Thordur\r
  Comment: They are asking for the height NOT altitude\r
- Name: Leonardo\r
  Comment: it is asking for height, i would appeal in my exam if i encounter it\r
- Name: Airhead\r
  Comment: It says altitude above the airport datum quite clearly in the question.\r
- Name: yusimon180\r
  Comment: i would appeal, it is asking altitude no height\r
- Name: lippillowtech\r
  Comment: THE question asks for true altitude not height??\r
- Name: Battistellomarco\r
  Comment: altitude = height. Simply EASA\r
- Name: larsenluis\r
  Comment: Why would they create these questions? They just want us to fail. Absolutely no sense why they ask for true altitude and the answer is true height.\r
- Name: maximeD\r
  Comment: altitude isn't height !\r
- Name: SkrrrrtPapa\r
  Comment: Same question, Norway CAA. Same wording same answers. Was lucky to study this one xD\r
- Name: SkrrrrtPapa\r
  Comment: Doesnt matter if you calculate crazy altimetry correctly, they still find a way to trick you. What is wrong with them.\r
- Name: SufferingATPL\r
  Comment: Completely changing the rules of altimetry, AGAIN.\r
- Name: pepilote\r
  Comment: seen today DGAC France:\r
Question indeed mentions *true altitude* but I can only assume it is a true HEIGHT that is requested.\r
\r
Only answer making sense is 2330.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi guys. Earlier we changed the question text to “true height” to avoid confusion. However, we continue to receive feedback, such as @pepilote's comment, that it is still seen as “true altitude” in official exams. Since you will encounter this question in this way in your official exam, we have updated the question text to “true altitude” again. We are careful to keep the questions in our database as you would encounter them in official exams. Thank you all for your feedback.\r
- Name: Baldu\r
  Comment: 2326*\r
- Name: chrissKLO\r
  Comment: This question is completely misleading. Finding out the TRUE ALTITUDE you get 3742ft. In the explanation you mention to remove the Aerodrome Elevation at the end to get the TRUE HEIGHT. FIX THE QUESTION!!\r
- Name: ATPL QUESTIONS\r
  Comment: Hey guys. Thank you all for your valuable feedback. The question text has been changed to avoid confusion, but we kindly ask that anyone who encounters this question let us know so we can update it. We appreciate your help.\r
- Name: Leo03\r
  Comment: IT MUST BE TRUE HEIGHT!! NOT ALTITUDE\r
- Name: Ludovica03\r
  Comment: What a difficult to write true HEIGHT\r
- Name: mevrick\r
  Comment: I am sorry but in what universe is True Altitude above the airfield datum a height ?? Very poor wording. True Altitude is the vertical distance of the aircraft above Main Sea Level. Now what ? True altitude above an elevation is the True Altitude if the sea was as high as the elevation ? Question should clearly ask for height or absolute altitude above ground. True Altitude should always be a refence to MSL.\r
- Name: Emaghi\r
  Comment: True altitude from airport datum = true height\r
- Name: jaroleto\r
  Comment: I really do not get the purpose of confusing the pilot with this question. True height above aerodrome datum would be clear to ask for IMHO. You can be above anything (such as above the aerodrome datum) and still ask for true altitude with respect to a reference (such as the MSL), can you not ?\r
- Name: Daniele\r
  Comment: ABOVE AERODROME DATUM\r
- Name: Maksym\r
  Comment: The target of the question is to confuse the pilot with terms ALTITUDE/HEIGHT. Altitude AAE = Height.\r
- Name: Hendrik02\r
  Comment: This question is wrong. It asks about True Altitude but the right solution is about height?!\r
- Name: Niklas2002\r
  Comment: i think you misunderstood me here a bit. The question you created did not appear in my exam. It actually was exactly this question, the only difference was the wording.\r
\r
Instead of asking: What is the approximate height above the airfield datum?\r
The LBA question asked: what is the true altitude above the aerodrome datum?\r
\r
One possible answer was: 2330ft\r
The other possible answer was: 3680ft (which can be close enough to T.Alt, especially when using 27ft/hp)\r
\r
I appealed the question but i dont know which answer they consider as correct\r
\r
Question #339881 is unnecessary. Sorry if i wasnt clear in my original comment\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Nicklas, thank you once again for all the info! I have removed question 339881 which was a misunderstanding. We have now updated this question's wording. Thank you!\r
- Name: Niklas2002\r
  Comment: LBA today but wording in question was: what is the true altitude above the aerodrome datum? Both answers for height and altitude were given. Dont know which answer is correct.\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Nicklas, thank you for your feedback! We have created a new question based on the info you shared: 339881. Thank you!\r
- Name: Catia\r
  Comment: I saw this question in France today and the text is: altitude above the airport datum.\r
- Name: ATPL QUESTIONS\r
  Comment: Dear all,\r
Thank you for your valuable comments and feedback. We would like to inform you that our team has been working diligently to address the inconsistencies in solving altimetry exercises. We understand the importance of a standardized approach, and we are committed to rectifying the issue.\r
One area of concern has been the lack of consistency in the method used for temperature corrections when determining the minimum usable flight level above an obstacle. The learning objectives clearly state that the elevation of the aerodrome must be taken into account, and the temperature correction should be applied to the column of air between the aerodrome and the aircraft's altitude. In cases where airfield elevation information is not provided, we will assume the aerodrome is at mean sea level (MSL). In this case, the airfield elevation is said to be 1 416 ft, and it must be taken into account for the temperature correction.\r
We are in the process of updating all explanations for questions of this nature, and the revised content will be available within the next few days. We appreciate your patience and understanding as we strive to improve the clarity and consistency of our materials.\r
Explanation for this question updated.\r
Thank you once again for your contributions and support.\r
- Name: ChrisScholl\r
  Comment: Shouldnt they ask for True Height?\r
- Name: Stephane\r
  Comment: Why did you apply the temperature correction on the total altitude\r
We have to apply the correction on the column of air over the airfield no.\r
- Name: Ben\r
  Comment: UKCAA today. Multiple choice.\r
- Name: Heiko\r
  Comment: UK 14.03.2023\r
Type in answer.\r
- Name: Coca3\r
  Comment: Seen today Madrid, 21/2/23\r
- Name: Subzero\r
  Comment: CZ CAA today copy paste.\r
- Name: btehere\r
  Comment: Seen DGAC FRANCE TODAY, cant remember the QNH but it was quite like this one!\r
- Name: crashlanding\r
  Comment: you should state in the question FL035 to avoid confusion :)\r
- Name: NeilCole\r
  Comment: Im a bit confused by this one. I understand the word *altitude* to mean vertical distance to the QNH.\r
\r
If it wants vertical distance to the aerodrome level, should it not be asking for a *height* not an altitude?\r
\r
Question Number: AT00042\r
- Name: MeanYugene\r
  Comment: Now I got it, they subtracted the estimated total fuel consumption and the actual one from the block fuel which is 430kg. The difference is 24kg. Took me half an Hour to understand where the 24kg came from.\r
- Name: Maverick437\r
  Comment: Seen in Astrol Vienna with same annex but reworded the question which has been asked for time due to CAS change as well as TAS by same values\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Maverick437, thank you for your feedback. There is a similar question to the one you mentioned in our database, question number 337233. You may have encountered that question or another version of it. Please compare it with the one you encountered in the official exam.\r
- Name: Sander93\r
  Comment: I Saw 12 min for 40kg, everyone else ?\r
- Name: Natterjacktoad\r
  Comment: doesn't block fuel include taxi fuel? it seems like the question didn't account for that\r
- Name: Harrison\r
  Comment: Did this a different way and got the same answer.\r
\r
1. Calculate new TAS by comparing new leg times. 36 mins (old total for everything post failure) divided by 47 mins gives 0.766. 0.766 X 130 (planned TAS) gives 100 knots.\r
\r
2. Compare new fuel flow. 207/211.7 gives 97.78%.\r
\r
So we are flying a lot slower for approximately the same fuel consumption.\r
- Name: DrPilot\r
  Comment: Roll a dice..chances are higher if you pick an option blindfolded than if you calculate, and it takes less time. Too bad this one is a 2-3 pointer one, right?\r
- Name: HansK\r
  Comment: spent 30mins looking it over and over and im happy to say Math aint Mathing ladys and gents Senasa\r
- Name: craft0000\r
  Comment: spent half an hour and gave me the perfect result for D.. it was C\r
- Name: EduardVelichkov\r
  Comment: why 40 kg in 17 min but not in 12??\r
- Name: Skywalker\r
  Comment: I want to thank everyone , the comment section you were my true colleagues through night and day and lay overs that made me go throughthose mnemonics those tips and tricks , those 3 line calaculations , , I want to thankyou all for supporting me . I only kept moving forward but you guys kept pushing and now today Ive completedall papers , May you all have success\r
- Name: CaptainChris\r
  Comment: But the whole calculation doesn't sum up. Even if we had not slowed down beween VJF and Tarifa, with the current FF we would have landed with 83kg in the Tanks, not 120kg. It's not clear what this Q wants from us. I calculated different scenarios but had the A/C not decreased speed, the FF would have been bigger (164kg/h) and with remaining 48 minutes before VJF we would have landed with 75,8 kg or with remaining 36 minutes after Tarifa we would have landed with 108,5 kg. All of this is less than the estimated 120kg. So with our revised FF of 141 kg/h we will land with 97kg which is in the middle of the 3 calculated values.\r
- Name: CharlieBravo\r
  Comment: please correct\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @CharlieBravo. We need the actual values of consumption and not the estimated ones. The beginning and ending times of the period when 40 kg of actual fuel was consumed are indicated in red boxes in the annex in the explanation section. These times are 15:51 and 16:08 and the difference between them is 17 minutes. Therefore, the explanation is correct. Thank you for your comment.\r
- Name: SkrrrrtPapa\r
  Comment: By the end of reading the question i already forgot what was first part saying. Mess as always\r
- Name: davidos\r
  Comment: keyword: OFFSET\r
- Name: FlightLevel350\r
  Comment: from position vjf to tariff 17 minutes flight time and fuel used 40 kg ,\r
\r
so 40 divided 17 minutes , 2.35 kg per minute ,\r
\r
2.35 x 47 =110 kg, now add all the fuel legs equal 223 plus 110 equals 333 kg,\r
\r
now subtract (actual after speed slow) 333 with (estimated) 309 we will have 24 kg difference and yes here is the answer.. ..\r
\r
Pakistan International Airlines\r
777\r
- Name: MarcB\r
  Comment: This log is such bs, why on earth would the estimated fuel column give values of fuel consumed while the actual fuel column give fuel remaining?? Flight logs are supposed to make planning easier, not confuse pilots even more!!\r
- Name: MahmoudG1\r
  Comment: what does EST TOT stand for?\r
- Name: Ezequiel\r
  Comment: As the last comment said, use the logic! The question states that from Tarifa to LEMG now it's estimated in 47 mins, add those 47 mins to the last WPT ATO (16:08), it will give an ETA to LEMG at 16:55. NOW, compare this ETA to the original planned umsing the T/O time, this result will give you 16:37 PLANNED ETA, you will now see that your flight time will be LONGER! There's one possible answer. Hope it helps! :)\r
- Name: Pascal\r
  Comment: Just remember "24 less", like the % you can have less on your exam to pass\r
- Name: Berni\r
  Comment: This exercice has it all:\r
- Awful OFP format (Insanelty crowded of numbers, very missleading and confusing).\r
- Very lengthy to understand what is going on, and once you made yourself an idea of what you want to do, you got no more time left xd.\r
\r
Good luck to those of you who get this one reworded in the exam!\r
- Name: Monica\r
  Comment: 5 minutes of solving this question goes to trying to understand what in the world is going on, the other 5 minutes goes to do all the needed calculations.. do they know this is a time limited exam?\r
- Name: JackFINISHEDATPL\r
  Comment: it may be an idea to add in 430-309 to the last part of the explanation to show expected RFOB\r
- Name: EASAfammocc\r
  Comment: Sorry but theres no way Im gonna do all that. -greater offset- thats it\r
Im glad I kept FPL for last\r
- Name: Benjamin\r
  Comment: LBA Germany asked for the time from Tarifa to Estepona and from Estepona to Benalmadena, whereby TAS decreases by 10kts due to engine problems. I cannot confirm the correct answer.\r
- Name: Mahmood0x\r
  Comment: It says block fuel that includes TAXI !! The worst subject so far to get the answer right u need to be inside the person who wrote the exams head\r
- Name: konstantinos94\r
  Comment: today in Austro Vienna, exactly the same question/answers 3points. without even looking the question press the correct one\r
- Name: Oliver\r
  Comment: I just don't even understand the flight log os no clue as to where I start\r
- Name: Pier92\r
  Comment: Actually you don't need calculation for this exercise. If you check the time from VJF to LEMG from the fligh plan is actually 35 minutes. We are flying 47 minutes now, and the FF is the same as before. So just one answer is right.\r
- Name: Razva\r
  Comment: Really Pain of a question explanation tried to be satisfy but not at all\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Alberto, @Alexander and @Taner, thanks for the feedback, we have added the new question as Q337233. Thanks again.\r
- Name: Taner\r
  Comment: It was like Aleksander say i Also made 23 min but not sure\r
- Name: Alexander\r
  Comment: Seen AUSTRO VIENNA 16.6.2023; Question said IAS and TAS both decrease 30kt from VJF until end of flight (= TAS 100 for rest of flight) and asked about the time it takes to fly between Tarifa-Estepona & Estepona-Benalmadena (i got for both distances 23 minutes and this was a possible answer)\r
All 4 answers gave different times for both sectors i just mentioned. one of the answers was 23 minutes for both distances (thats what i took) and no answer was even close to 23 minutes.. all of them like 11 or 7 minutes or something like that..\r
All in all i would say about 75% ATPL Q coverage but with the knowledge of these examples here absolutely doable.\r
Keep pushing!\r
- Name: Jurgen\r
  Comment: Where does the explanation get the 47 minutes from that would be from Tarifa to LEMG?\r
- Name: ChrisScholl\r
  Comment: I mean, sure, it seems to be a lot..\r
But there is really an easy way to solve it:\r
Only 2 answers (with increased FF possible) because you see in the annex that your leg fuel got increased.\r
And now calculate the FF/h, see it is below the 163 kg/hr and take the other answer :)\r
- Name: Alberto\r
  Comment: Annex Seen in ANAC Portugal 23/05/2023, but they asked the accumulated time if your TAS had decreased by 30 knots after vibrations from VJF and Tarifa.\r
- Name: Putinisaknob\r
  Comment: FFS, they do realise we only have two hours for this exam don't they?\r
- Name: Thomas\r
  Comment: Seen in Sweden 22/04/23.\r
\r
Different numbers and situation, but still the same basics behind the calculations.\r
- Name: Lennox\r
  Comment: mate, at this point just remember the answer.\r
- Name: joaquin\r
  Comment: Isn't it 12 min instead of 17 min?\r
- Name: Nadiatoni90\r
  Comment: Shouldn't it be 40/12' x60 = 200 kg/Hr?(Instead of 17 minutes, it looks more like the leg from Tarifa to Estepona..)\r
\r
Question Number: AT00043\r
- Name: Muhammedkasem\r
  Comment: Shouldn't we select FL 7000, and this is where the trick lies. FL 6000 would certainly provide the greatest SGR (Specific Ground Range), but it is not among the permitted flight levels. The next altitude that gives the highest SGR is FL 7000, which is within the allowed flight levels, so it should be selected.\r
\r
I would appreciate any feedback from the exam or the team.e\r
- Name: Ilaymad\r
  Comment: No need to calculate, look for the highest GS.\r
I chose 7,000 ft because there is a minimum height requirement. Surely appealable!\r
- Name: AC861\r
  Comment: IAA 26/06/2025 only 10,000 was listed as the maximum altitude as well as the 7000ft minimum.\r
Believe I got it wrong because 6000 was an option and did give the greatest TAS but I ignored it because of the 7000ft minimum.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @AC861, thanks for the feedback! The question figures were the same? If anyone else comes across this question, please let us know. Thank you!\r
- Name: Qu4gmireGiGiDy\r
  Comment: has there been a question made for alex44's feedback?\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Qu4gmireGiGiDy, unfortunately, we haven’t been able to collect enough details to create a question similar to the one alex44 mentioned. If anyone happens to find a similar question, please share it with us. Thanks in advance!\r
- Name: DRMode\r
  Comment: The only way I can see an appeal for 7000' failing is because the question states "What altitude provides the highest ground milage per GPH?" and does not imply that you actually have to fly at that altitude, just calculate the figure.\r
\r
In real life I would not even consider calculating an altitude I cannot fly at, but it is EASA asking here and we all know that their thinking is not logical.\r
\r
Keep pushing friends :)\r
- Name: Adam18479\r
  Comment: WHAT THE f is this bull\r
min alt is 7000 but we will fly lower?\r
- Name: goshkoden\r
  Comment: I think here it is easy. Greatest TAS ,lowest headwind and go on\r
- Name: RickyPas\r
  Comment: Feedbacks from Austro? Still 6000?\r
- Name: Federico00\r
  Comment: The least is the headwind and greater is GS so distance flown\r
- Name: CaptainMarius\r
  Comment: SAR= TAS/FUEL FLOW\r
SGR=GS/FUEL FLOW\r
SAR= SPECIFIC AIR RANGE\r
SGR= SPecific ground range\r
- Name: Suki91\r
  Comment: Is this question straight up teaching us how to crash in to terrain or what am I missing ?\r
- Name: mathisschwarz\r
  Comment: I guess 6000ft is correct because the question doesn't explicitly say that we should give a usable altitude\r
- Name: AntonB\r
  Comment: Technically the question only asks for the altitude with the highest ground mileage per GPH, not which altitude you should fly for the highest ground mileage per GPH. It's still stupid that the correct answer is below the minimum altitude\r
- Name: AlGhelani\r
  Comment: I had this question in austro but the answers were the question it was up side down I was confused\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @AlGhelani, thank you for your feedback! What do you mean by "up side down"? Many thanks!\r
- Name: MayorTom\r
  Comment: The minimum altitude for the route being flown is 7000 ft. Me my first day ( Ok so lets fly 6000 ) nex one sending my curriculum\r
- Name: Clemens\r
  Comment: I am lost - where do I get to know about the altitudes available? Do I miss an annex? (I don't see one)\r
- Name: DrPilot\r
  Comment: SInce the Fuel Flow of 15.5GPH is the same at all altitudes, as the question itself is telling us, yes, as @SKyDweller said, we just need to search for the highest GS since it will give us the best "milleage" on a specific consumption. (Not neccesarly the lowest headwind as we could have a higher TAS to compensate!) If the FF were to vary between altitudes, then we would divide the GS by the appropriate FF to find the miles flown with that specific consumption at that specific speed.\r
- Name: Ludwik\r
  Comment: Can anyone confirm that the correct answer is actually 6000? Especially someone from Poland?\r
- Name: Adrian726\r
  Comment: You are not allowed ty fly bellow 7000 ft, so the option with 6000 ft is not right unless you want to lose your licence or you life.\r
- Name: Alex44\r
  Comment: @CarloRomaFlyPe\r
\r
I personally did not need it in the FP exam. Got everything for my questions printet on Din A3 from the Examination Centre. Think it depends where you plan to write your exam, so check that, and if you are unsure, take it with you.\r
For Performance and Mass/Balance i recommend, take CAP698 and CAP696 with you if you are allowed.\r
Good Luck for your exams!\r
- Name: GlebS\r
  Comment: With same fuel flow for each option choose one with the highest GS.\r
Don't look for the lowest HW because you can have differnet values of TAS on the exam, you need to look at the GS\r
- Name: SkyDweller\r
  Comment: Lowest headwind, highest GS.\r
- Name: JHaagensH\r
  Comment: question states that fuelflow is constant at all altitudes, subtract the headwind and find the biggest ground speed. higher speed with the same fuel flow will take you further.\r
- Name: ZakMartin\r
  Comment: Work out GS (TAS -Head/+tail wind) / GPH = NM per Gallons for all four options and select the highest.\r
- Name: CarloRomaFlyPe\r
  Comment: and some one Dont understand the trap and why so simple this question because only need make simple to calculate TAS/FF and yes the biggest TAS the biggest ground milage\r
- Name: Alex44\r
  Comment: the Annex was not in the CAP 697. It was clearly made especially for that Question. I only remember what i already wrote about the Question itself. Maybe someone else can give more precise information about the annex itself.\r
Sorry about that.\r
- Name: ATPL QUESTIONS\r
  Comment: Thank you for your contribution @Alex44. We appreciate it if anyone who has encountered the question you stated could provide more detailed information about the official annex via the comments, the feedback section of the website, or by email to info@atplquestions.com. Thanks in advance!\r
- Name: ATPL QUESTIONS\r
  Comment: @Alex44 Thank you for your feedback! Could you please tell us more about the annex? Was it in the CAP697?\r
- Name: Frapiero\r
  Comment: I also found exactly the same question of Alex44 on my exam with Austro today 6 November 24\r
- Name: Alex44\r
  Comment: Austro Vienna Update 05.11.24 (2 Pointer Question)\r
The Minimum Altitude is 4000 ft not 6000ft!\r
\r
The question is different than here. First of all you get a table Annex with different power settings ( 75%, 65% and 55%) the question asked about the 75%. So choose that table. Then you have 3 Headwinds:\r
4000 feet 3 kt\r
6000 feet 6kt\r
8000 feet 9kt\r
\r
The TAS you find in the Table. But you only get 6000feet and 8000feet straight. For 5000 feet and 7000 feet you need to interpolate.\r
\r
I got those:\r
5000 feet ( dont remeber but was clearly lower)\r
6000 feet GS 174 kt\r
7000 feet GS 173,5kt\r
8000 feet GS 173,5 kt\r
\r
The Answers were\r
A: 5000 feet\r
B: 6000 feet ( correct one like marked here)\r
C: 7000 feet\r
D: 8000 feet\r
So now i think the question is good to go.\r
\r
By the way the Flight Planning subject was very Banky. I had 4-5 new questions but the Calculations were like in training, nothing bad to expect. Good Luck!\r
- Name: cptmario97\r
  Comment: guys someone saw this question in the real exams . could you pls let me know pls thank you\r
- Name: StevenSperlich\r
  Comment: This can not be correct? The minimum altitude is 7000 ft, but how can we be able to fly at 6000 ft ? Can this question please be checked.\r
- Name: Alex44\r
  Comment: I dont get it how we can fly at 6000 feet if the question clearly says, the minimum altitude for the route is 7000 feet. For me B is correct.. Can someone confirm answer A is correct ? Thank you!\r
- Name: HardDrive\r
  Comment: At least I was very efficient whilst flying illegal altitudes\r
- Name: Niquet\r
  Comment: Guys the one with the highest GS will take you further in the least amount of time, meaning that for a same fuel consumption you will fly further. Save time and just find the biggest GS.\r
- Name: matalobosh\r
  Comment: *crashes into the mountains*\r
- Name: daffyduck\r
  Comment: the one with less headwind\r
- Name: Hodor\r
  Comment: Go 1 by 1 and subtract the headwind with the TAS.\r
The answer that gives you the highest GS value is correct.\r
\r
Question Number: AT00044\r
- Name: ABA0912\r
  Comment: Had this one today Swedish CAA, 4100 ft option was changed with 6000ft\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @ABA0912, thank you for your feedback. We have updated the option accordingly.\r
- Name: Karlvajs\r
  Comment: How do we know that FL70 is not applicable here?\r
- Name: Timothy\r
  Comment: Is the MOCA valid for the whole route (P600)?\r
- Name: Meladkylian\r
  Comment: 5,000 (MOCA).\r
FL60 (MEA).\r
- Name: Gibbo\r
  Comment: UK CAA, asked for the MEA not the MOCA, tick box too\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Gibbo. We have added a new question based on the information you've shared: 335139. Thank you for your feedback.\r
- Name: RotorBoat\r
  Comment: After your cup of MOCA you enjoy some nice (T)ea\r
- Name: 737Ramairturbine\r
  Comment: 5000T T for terrain. Works for me\r
- Name: easaez\r
  Comment: minimum obsTacle clearance altitude T SUFFIX\r
- Name: Augustin\r
  Comment: MOKKA is a type of T(ea)\r
Yes coffee but that's the way our instructor found the way to memorize\r
- Name: Loulouu\r
  Comment: MOCAT\r
- Name: HafraSvin\r
  Comment: Jeppesen introduction, ENROUTE-6\r
there you see a map and the one listed nr 35 show an example of this.\r
- Name: Piotr\r
  Comment: if you could what would be the answer if they were asking about MEA here and not MOCA? FL60 or FL70?\r
- Name: Joel\r
  Comment: Seen UK CAA. 27/02/2023\r
- Name: Razvan\r
  Comment: Austro 21/12/2022, same question\r
- Name: Harry\r
  Comment: Seen UK - 23/8/22 (Ticked too)\r
- Name: ALAJMI\r
  Comment: MOCA tea ☕️\r
- Name: Jonathan\r
  Comment: Answer also available in Jeppesen GSPRM under the INTRODUCTION chapter, "(GSP) ENROUTE-7" shows the legend for E(LO)2\r
\r
Item 10 - Directional MEAs refers to FL50 on the opposite page (So FL60 incorrect answer for this question)\r
Item 35 - MOCA refers to 4500T on the opposite page (So 5000T correct answer for this question)\r
- Name: MattMad\r
  Comment: Explanation is wrong!\r
Find Jeppesen Introduction pdf for free. Page 61.\r
\r
MOCA is Minimum Obstruction Clearance Altitude, example 5000T\r
I remember it as C like Clearance to obsTruction, so it's about T letter accent.\r
\r
MORA is Minimum Off-Route Altitude, example 4000a\r
I remember it as MORAAA, so the little "a" after the altitude.\r
\r
MEA is Minimum Enroute Altitude, example 6000\r
It's without anything more.\r
\r
MAA is Maximum Authorised Altitude, example MAA7000\r
Its with MAA letters, so no problem.\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Matt, thank you for your comment, I have updated the explanation!\r
\r
Question Number: AT00045\r
- Name: Lm922\r
  Comment: tvmdc\r
given magnetic track 3w need to go back to find true so add\r
t ? v 3w m 99\r
99 less 3w 96T\r
- Name: Vladyboi\r
  Comment: All charts are based on true north, be it vfr or ifr if you try drawing lines on it. If you see a heading already written on the map then its always in magnetic, be it vfr or ifr\r
- Name: SimonC\r
  Comment: These airways are all magnetic, they are referenced to the VORs and Other naviads which use Magnetic tracks. If you use the meridians on these then it will be true (going to the north pole)\r
- Name: MatteoFlyby\r
  Comment: Watch out 4W is not the Variation, its the meridian\r
- Name: ahsan\r
  Comment: This question with slight change in wording today, Pakistan. Same waypoints, same chart but said : with strong southerly winds find the True Course from Wpt NORBO to TALLA\r
Answer choices were also same. 096 being the correct ans\r
- Name: ricardgalisteo\r
  Comment: For people who can't memorize:\r
All charts are oriented to true north, which means that IFR and VFR charts will point in that direction, so the chart does not need to "rotate" over time, now for a HEADING GIVEN in a chart they are all MAGNETIC\r
\r
More context:\r
VORs are built heading true north, but potentiometer adjustment is used to make its radials match with magnetic north. ALL headings in JEPPSEN or IFR routes are like this. Look for charts oriented to magnetic north, it's hard to find any because that'd split Canada in half. This also doesn't make all charts de facto "obsolete" every time magnetic north changes, and so it is only needed to apply the correction. Also because not all aircraft have the ability to follow true headings or even if you have the ability, for most utility airplanes is not that precise\r
- Name: Nickyp1982\r
  Comment: @olie2 oh dear I can see it now cheers\r
- Name: Olie2\r
  Comment: @Nickyp1982 I made the same mistake. W004 is NOT the variation, its the longtitude. 3W is the variation! Look out for the difference. Unfortunatly they make it the same colour, which makes it harder to distinguish.\r
- Name: Nickyp1982\r
  Comment: Can someone please explain why the variation is 3w and not 4w? In the explaination it says the variation is running straight through the airway where actually w004 is running through the centre. Also Norbo is close to 5w and Talla is close to 3w (on the 4w side) so I took the average which would be 4w. many thanks\r
- Name: MarkoM\r
  Comment: T = M + var\r
T = 99 + (- 3 W)\r
T = 96\r
West variation (-)\r
East variation (+)\r
IFR charts show Magnetic Course\r
- Name: KurtC\r
  Comment: @Backflip I think it's because the bearings/radials are with relation to VORs, which are magnetic by nature.\r
- Name: Backflip\r
  Comment: The big question is why the fuck are ifr charts magnetic and vfr true\r
- Name: Shayelo\r
  Comment: Austro Control Vienna 19/4/2024 same question, word by word, and same answers options.\r
- Name: YebacTecnamy\r
  Comment: Poland 16.04.24 same question but more complicated, correct answer correct.\r
Begging the same but it states that crew is briefing and along this route Y96 from NORBO to TALLA there will be strong southerly wind. What is the true course that crew must use for wind calculations?\r
So same answers, wind direction just to fool you.\r
- Name: MrATPL\r
  Comment: The course on the chart is given as magnetic.\r
\r
Since we APPLY THE VARIATION AT THE VOR, and not at the A/C we do the following.\r
\r
1. On the chart read of the variation in the area of the VOR (which is 3W).\r
2. Apply the variation on the magnetic course given on the map from NORBO (TH = MH + Var -> TH = 99 + -3 = 96).\r
\r
Therefore the answer is not 95 or 99 but 96.\r
- Name: Yaroslav\r
  Comment: Stupid question.. You're folowing the airway, from the VOR, magnetic. Why the course here should be true? And if if should be so, why it's not specified?\r
- Name: IcebergFINISHEDATPL\r
  Comment: My mistake for posting on this question, I commented right away after the exam and ended up commenting on this question. The exact question I got was Ref. 331632, asking about the appropriate route from NORBO to DCS!\r
- Name: IcebergFINISHEDATPL\r
  Comment: UK CAA seen 25 July 2023.\r
\r
Exact question but the choices were changed.\r
\r
a. NORBO T256 OSMEG 144 degrees, 32NM -> OSMEG T256 DCS 136 degrees, 26 NM\r
b. NORBO T265 OSMEG 144 degrees 35 NM -> OSMEG T256 dcs 136 degrees 26 Nm\r
c. norbo t265 dcs 144 degrees 61 nm\r
d. can't recall\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Iceberg, thank you for your feedback! It seems that you came across a different question. Do you by any chance remember what the question was asking for? Thank you!\r
Hello @SkyhawkPolska, thank you for your feedback! :)\r
- Name: SkyhawkPolska\r
  Comment: ULC POLAND MAY 2023;\r
\r
SAME EVERYTHING.\r
\r
96 CORRECT ANSWER.\r
- Name: hasan\r
  Comment: IFR Charts : Magnetic Heading //\r
VFR Charts : True Heading\r
- Name: WalidK\r
  Comment: There are 2 variation be careful, one with 4W and the second with 3W\r
- Name: MistaFawad\r
  Comment: Remember when converting from magnetic heading to true heading west is least and east is best\r
\r
When converting from true to magnetic east is least west is best\r
- Name: Filipek\r
  Comment: hahah 95 Vs 96 so close !! ridiculous , easa its a joke\r
- Name: Hassan\r
  Comment: Fro memories people in the question y96\r
Answer 096\r
- Name: Itaylan\r
  Comment: Polish Caa 13-1-2021\r
- Name: Chris\r
  Comment: Magnetic variation is already applied at the VOR.\r
- Name: Robboone\r
  Comment: Seen BGS/Austro 21.10.20 but the answer options were; 099, 096, 095 and 102\r
- Name: ATPL QUESTIONS\r
  Comment: Options updated. Thank you for your feedback, @Rob! 🙂\r
- Name: JoglvanShort\r
  Comment: Just to clarify:\r
when you are using your VFR chart and make some lines on the map -> this would be True Course. But if you are using airways defined via VOR (like in this case), you are using Radials from VOR, so it has to be Magnetic Course in this case.\r
- Name: Kevin\r
  Comment: All courses you see on the charts are magnetic\r
\r
Question Number: AT00046\r
- Name: CaptainTopG\r
  Comment: The taxi fuel is calculated for the departure aerodrome ONLY, therefore don't get confused by the question which also mentions taxi time at destination. Additionally we have to consider APU fuel as Taxi fuel.\r
- Name: illSquirrel\r
  Comment: I had a similar question to this in my exam but it also included engine start fuel on the annex. Im not sure if one already exists in the bank.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @illSquirrel, thank you for your feedback. The question you are referring to is not available in our database. Therefore, we appreciate it if anyone who has encountered the question you stated could provide more detailed information. Thanks in advance.\r
- Name: ChrisScholl\r
  Comment: Taxi fuel: only at departure, incl. APU usage (at departure)\r
- Name: Subzero\r
  Comment: CZ CAA today copy paste.\r
- Name: Guillefdb2008\r
  Comment: SENASA SPAIN 25/11\r
- Name: Air Croissant\r
  Comment: do not count taxi and APU at destination airfields ;)\r
- Name: Tom\r
  Comment: Once at destintion it doesnt matter if you go into alternate fuel or what ever is left as you have already landed, so it is not included in the calculation.\r
- Name: KarolS\r
  Comment: @Mikolaj APU usage is included in TAXI fuel. What is not included in TOTAL TAXI FUEL for the trip is TAXI at a destination aerodrome. So we have 25 min APU = 48 + 10 min TAXI at departure = 110, 110 + 48 = 158\r
\r
Question Number: AT00047\r
- Name: Flyingokto\r
  Comment: seen this question today at Austro, but they asked for the minimum safe altitude 20NM inbound Besor coming from VLC\r
One answer was was 6110 and another was 6300 ( i chose this) cant remember the other answers\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Flyingokto, thank you for your feedback. We believe the question you are referring to is question 339121 in our database. Please check this question and compare it with the one you encountered in the official exam.\r
- Name: Carlotta\r
  Comment: 24/06/2024 austro control in addition it was asking also for the NGM to descend until the first reporting point, giving the NAM the TAS and the Wind component.\r
- Name: gdtyrael1\r
  Comment: 1 minute looking for a trap because, it can't be this easy.. but it was\r
- Name: Zoe\r
  Comment: Seen Uk CAA but the distance from VLC to Vilna\r
- Name: Thibault\r
  Comment: seen france today\r
- Name: BobbieBrink\r
  Comment: Senasa 17/01 same\r
- Name: Ben\r
  Comment: Uk CAA type in\r
- Name: btehere\r
  Comment: Seen DGAC FRANCE TODAY\r
- Name: CarlosPL\r
  Comment: Senasa Spain today exactly the same\r
- Name: Diogo\r
  Comment: 03 seconds to find the answer, 05 min Looking for the trap!\r
- Name: eulfen1\r
  Comment: Too good to be true\r
- Name: Oliver\r
  Comment: Norway 100% same\r
\r
Question Number: AT00048\r
- Name: shamus\r
  Comment: ICAO ELP LEVEL 100. Well done CAA\r
I believe whoever wrote this question is above 60 and appears to have martial problems.\r
- Name: Antoine14\r
  Comment: EAST of south = southwest\r
- Name: Hodor\r
  Comment: East of South corridor, as an answer makes a lot more sense. East of the South Corridor, might be along the coast. Genuinely Vage question.\r
- Name: Billy\r
  Comment: @manchora use the zoom tool provided rather than just zooming in your screen\r
- Name: manchora\r
  Comment: The pictures are extremely low quality, cant even read the text\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @manchora, thank you for your comment. Please try zooming in, as this usually improves the image quality. Let us know if you still can't read the figures. Thanks!\r
- Name: BlueArrow17C\r
  Comment: They say in Aviation the pilot never stops learning.. "East of South" .. Okay..\r
- Name: Sherminator\r
  Comment: had what I think is a new question showing this chart 19-1 but asking for the highest obstacle which is 4252.\r
- Name: Pascal\r
  Comment: New question at Austro: You are flying northbound and want to cross the Alicante CTR, which procedure should you follow?\r
Answer: Join SW in the south corridor, fly to VOR and leave via north corridor to NE1\r
- Name: ATPL QUESTIONS\r
  Comment: Hi there @Pascal, thanks a lot for your feedback! We have added a new question accordingly: 334165. Good luck with your studies!\r
- Name: Guillefdb2008\r
  Comment: SENASA SPAIN TODAY\r
- Name: Martin\r
  Comment: Its the arrow in the bottom part of the map marked "acft with radio failure" slightly east of south route.\r
- Name: Niriarisina\r
  Comment: Where is the explanation of this?\r
- Name: Archie\r
  Comment: I've been studying for this exam for 6 weeks, and I have only just realised these are at the back of the Jep.\r
- Name: Darrr\r
  Comment: where does it say east route? all it says is proceed SW to S at 800feet\r
- Name: Hussam Razzaq Anbooree\r
  Comment: Today Austro control Spain 2021/09/20\r
\r
Question Number: AT00049\r
- Name: KNekrasovs\r
  Comment: @FlyerDaniel yeah, in this subject MZFM+trip is never considered and I do not know why.\r
- Name: FlyerDaniel\r
  Comment: the question and the resolution are a joke: MZFM + TOF (assumed BF) = 2300kg. So 2300 is maximum allowed TOM. The actual TOM is also 2300, so no possible fuel!!\r
- Name: CaptainMarius\r
  Comment: The allowed take-off mass is the lowest of\r
MSTOM\r
PLTOM\r
MSLM+TRIP FUEL=2390kg\r
PLTOM+TRIP FUEL\r
MZFM+TOF(NOT USED for extra fuel calculations)\r
regulated take-off mass (rtom) is the lowest of the "performance limited" tom and "structural limited" tom.=3000kg\r
so we are taking the 2390 since is the lowest value.\r
next we calculate our actual take off mass 2000+300=2300(we would take taxi fuel out but we dont know it so we skip it)\r
therefore our extra weight we can take is 2390-2300=90 kg(in this case of fuel)\r
lets check based on our tank capacity- 550-300=250kg we can take, but we are limited by the muslim+trip fuel, so we take the lowest value which is 90kg of extra fuel we can take.\r
- Name: CaptainMarius\r
  Comment: Regulated Take-Off Mass (RTOM) is the lowest of the "performance limited" TOM and "structural limited" TOM.\r
- Name: FlyingKuba\r
  Comment: Only 200kg difference between ATOM and permitted landing mass so:\r
300 - 190 = 110 - this is value of fuel when we landed\r
200-110 = 90kg - we can only uplift 90kg because landing mass limit us.\r
- Name: Sonacapilot\r
  Comment: This type of questions for sure are a joke for us! So, now we have to assume Block fuel = TOF Fuel? why?\r
- Name: RotorRider\r
  Comment: @fly9fly, could be a helicopter or a bush plane the landed on a dirt road (no taxi fuel needed) -> so Block fuel = Take-off fuel\r
- Name: davidos\r
  Comment: ULC Poland - same as there, no taxi fuel provided. This answer is correct.\r
- Name: fly9fly\r
  Comment: taxi fuel is missing\r
- Name: Vukasin\r
  Comment: Assume assume assume\r
- Name: Hossein123\r
  Comment: do not try and make up values if they did not give you taxi fuel, just assume its a small aircraft and the taxi burn is insignificant, so you can just use the block fuel in the case for MTOM - ATOM\r
- Name: Toony\r
  Comment: There is other question : 331205. That says the MZFM is limiting. Why its not limiting in this question ?\r
- Name: Dani\r
  Comment: Seen in SENASA Spain 26/06 with slightly modified numbers.\r
RTOM 2900\r
Tank Capacity 950\r
Min Block 500\r
\r
Answer was 400kg, RTOM limited. Tank limit was 450.\r
- Name: ATPL QUESTIONS\r
  Comment: Hello, @Dani! I want to express my gratitude for your feedback. By any chance, do you remember the MLM? Additionally, was the tank capacity mentioned in the question 450 kg or 900 kg? Having this additional information will greatly assist us in creating a more accurate question. Thank you so much!\r
- Name: flyingaua\r
  Comment: Austro Vienna exactly the same 31.05.2023\r
- Name: Assan\r
  Comment: ATPLQ shouldnt we use MTOM instead of RTOM in your explanation as its more restricting?\r
\r
RTOM = 3000\r
\r
MTOM = 2390 which is MLM + Trip Fuel?\r
\r
The correct answer is still 90kg\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Assan, the maximum take-off mass would have to be provided by the question. You can't assume it like that :)\r
- Name: Aiman\r
  Comment: again with the assume\r
- Name: Luke\r
  Comment: I guess we just parked on the runway as there is no taxi fuel\r
- Name: Grant\r
  Comment: @ATPL Questions - The answer should be zero uplift due to insufficient information. It is a dangerous precedent to set, to assume BLOCK Fuel = T/O Fuel given that two of the answers are only 30kg different which is easily the taxi fuel in a light aircraft in this example and when you get to the heavy jets, taxi fuel gets into the hundreds of kilograms and sometimes into the thousands, one should NEVER assume BLOCK Fuel = T/O Fuel. This is a very poor question.\r
- Name: ATPL\r
  Comment: Appeared ULC Poland 10.11, 2 points.\r
Thanks ATPLQ a lot, today i passed this bloody subject with 94.83%.\r
RNAV, Human, Airframes and Ops to go!\r
- Name: LukaSz\r
  Comment: ZERO Fuel = 2000\r
Add 300 min fuel = 2300\r
you will burn 190 of 300 which makes you: 2300 - 190 when landing = 2110\r
2200 is your max mass for landing which allows you add extra 90 kg\r
\r
Then check 2300 TOF + 90 = 2390\r
It is not higher than RTOM 3000\r
390 in tanks is not higher than capacity 500\r
- Name: Angelina\r
  Comment: There are few steps, that can help us to calculate extra fuel, and pick the lowest value, as it limits.\r
1. Tank capacity- block fuel = 550 kg-300 kg= 250 kg, Limit 1\r
2. MLM- Actual LM= (Actual LM in our case is AZFM + TOF - Trip fuel), therefore 2200 kg - (2000+300-190)= 90 kg, Limit 2\r
3. MTOM - Actual TOM ( no data for this limit)\r
So, conclusion is 90 kg, that can be taking extra in our case.\r
\r
Hope it helps, if anyone has different way of solving it, please share.\r
- Name: Menelaos\r
  Comment: No Taxy fuel in this case! we assume that BlockFuel = Take-Off fuel\r
\r
Question Number: AT00050\r
- Name: Sander\r
  Comment: Where is the trap?\r
- Name: FREEOFATPLSHACKLES\r
  Comment: The famous Chinese meteo balloon\r
- Name: Pies\r
  Comment: USA! USA!\r
- Name: Giacomo\r
  Comment: But sorry they ask for height not altitude so should be agl\r
- Name: Chien\r
  Comment: wrong wording "high" "altitude"\r
- Name: Andrés Ramos\r
  Comment: Yeah, 200 is the height, but you know how this goes, you need to answer what they want, not what they asked.\r
- Name: Stefano\r
  Comment: 324 is altitude not height, isn't it?\r
\r
Question Number: AT00051\r
- Name: kubarybaczyk\r
  Comment: I know it's FAA, but according to them LOC means local, LLZ means localizer, FYI, that might be a small difference\r
https://www.notams.faa.gov/downloads/con...\r
- Name: ThrustTruster\r
  Comment: If unsure just check the frequency, with 297kHz its too low to be a Localizer or an ILS\r
- Name: Adrian\r
  Comment: Shorter > Locator = LO\r
Longer > Localizer = LOC\r
- Name: SaMSid\r
  Comment: GSP-44 ( Introduction)\r
- Name: FabianR\r
  Comment: @easadepression\r
The localiser is the radio aid that provides lateral guidance for an ILS (Frequencies 108-111.975MHz, first decimal odd)\r
A locater is a form of NDB with a reduced range used in the Terminal Area (200 - 1950kHz)\r
- Name: easadepression\r
  Comment: what is the difference between localiser and localizer? (it's on top of the explanation)\r
- Name: aviator786\r
  Comment: what the diff between localiser and localizer. id love to know\r
- Name: Ralle400\r
  Comment: And what does the "E ILS 25C" mean?\r
- Name: Mariotrash\r
  Comment: LO(Z) --> Locali(Z)er\r
LO --> Locator, Outer\r
- Name: Carlos\r
  Comment: Quick frequencies reminder:\r
\r
ILS:\r
LOCALISER - 108 to 112 MHz (VHF)\r
GLIDESLOPE - 329.15 to 335 MHz (UHF)\r
\r
Marker beacons (ULF):\r
Outer marker - 400 Hz\r
Middle marker - 1300 Hz\r
Inner marker - 3000 Hz\r
- Name: Ivan\r
  Comment: @atplq could i ask you a clarification regarding notam's decoding in your explanation?\r
practically the topic of my question regarding the codes about "localizer" and "local". in the explanation you wrote as code of localizer= llz while the code to indicate local = loc.\r
if you check the explanation about the question nr.339156 you can see that the code to indicate localizer is loc. could you clarify it?\r
thank you for your support.\r
- Name: ATPL QUESTIONS\r
  Comment: Dear @Ivan, thank you for bringing this to our attention! I have updated the explanation for question 339156.\r
- Name: Philip Frisch\r
  Comment: Seen Denmark July 2022\r
- Name: Calin\r
  Comment: Actually, @Tom, the abbreviation for Localisers used in NOTAM terminology would be LLZ.\r
- Name: Tom\r
  Comment: Dont get confused between locator and LOC which is localiser\r
- Name: Palko\r
  Comment: LO = locator\r
\r
Question Number: AT00052\r
- Name: Maverick437\r
  Comment: Seen in Astrol Vienna today But with different numbers\r
- Name: Vittorio\r
  Comment: Very similar today in enac italy but the results was like 3h 23min and 334NM\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Vittorio, thanks for your feedback! If anyone encounters a similar question to the one Vittorio mentioned, please share it with us along with any details you remember so we can create a new question. Thanks!\r
- Name: DrPilot\r
  Comment: @MC12345\r
NAM or Nautical AIR miles, is the amount of AIR that you cover in a specific time. Wind has no effect on NAM. It's like the distance that the air travels around/through you and it can be viewed also as endurance, the time you can be "in air."\r
NGM or Nautical ground miles, is the amount of GROUND that you cover in a specific time. Wind has an effect on NGM and it's, usually, called range. It is the range in km/miles etc. that you can cover on ground.\r
\r
NGM is dependant on your GS. So if you have a tailwind, you'll cover more ground since your GS will be higher, it will "push" you ahead. If you have headwind, you'll cover less ground, it will (literally) "slow" you down since your GS will be smaller.\r
As for the NAM, it may help you to visualize, imagine yourself in a wind tunnel. The air is flowing "onto" you. you'll be still, so you are not going to any ground miles, but the air that is flowing onto you will be traveling some air miles. I just hope it was enough, I've tried.\r
- Name: MC12345\r
  Comment: SOMEONE EXPLAIN THE DIFFERENCE BETWEEN NAM and ground miles.\r
- Name: diegordi\r
  Comment: If RANGE: wind effected so you calculate with GS and get NGM\r
If ENDURANCE: wind NOT affected so calculate with TAS and get NAM\r
- Name: Jakub\r
  Comment: They want us to calculate RANGE so NGM\r
- Name: v4rga\r
  Comment: I think a hint for them wanting NGM instead of NAM is they give you information to calculate GS which is used for NGM.\r
- Name: Flexie\r
  Comment: Shouldn't there be made distinction whether they want ground miles or air miles? Since both anwsers are an option\r
- Name: ATPL QUESTIONS\r
  Comment: @Mario, thanks for your feedback. It is corrected.\r
- Name: Air Croissant\r
  Comment: Seen UK CAA- different figures\r
- Name: Mike\r
  Comment: IT should be written if avaliable means avaliable (total in plane with FINRES) or avialable like useable). Anyway its fair enough that there is no answer if you substract FINRES from avaliable fuel. Good luck\r
\r
Question Number: AT00053\r
- Name: Jahfarkazmi\r
  Comment: New question today caa uk. Fl 90, oat 10, economy. I got isa 13.\r
\r
Options\r
171\r
175\r
179\r
186\r
\r
I went with 175\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Jahfarkazmi, thank you for your feedback. There is a similar question to the one you stated in our database: 334340.\r
- Name: CaptainChris\r
  Comment: looks like 172 to me.. 2kts per square\r
- Name: Adrian726\r
  Comment: This can not be true, probability this question is or will or will be deleted from the database and the EASA employee has been fired because it is to easy, there is no trap :)\r
- Name: HullCity\r
  Comment: seen uk caa type in , I put 170 in the exam, hope its correct\r
- Name: Pauline\r
  Comment: Tip : result (171) is almost like in the example (172) !\r
- Name: AndrewTate\r
  Comment: SEEN UK CAA TYPE IN - BUT FL090\r
- Name: Aditya\r
  Comment: @Atpl can you check the answer ?\r
right answer here is 140 . but i got 171 kt and also your explation says 171 kt .\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Aditya, thank you for your comment! I have checked and the marked correct option is 171 kt.\r
- Name: Joel\r
  Comment: Seen UK CAA. 27/02/2023. Type in. Same as Peter, went for 172.\r
- Name: Peter\r
  Comment: UK CAA type in 172 went for\r
- Name: Tiago\r
  Comment: More like this on exam pls\r
\r
Question Number: AT00054\r
- Name: omarr\r
  Comment: always include FR\r
- Name: TheGr4pe\r
  Comment: If you see including final reserve it is most likely correct\r
- Name: karolgaisser1\r
  Comment: the question basically states that:\r
\r
If ALT + FinRes > 2h cruise + Fin Res then the DEST is an isolated aerodrome\r
- Name: aviator786\r
  Comment: isolated aerodrome AKA PDP stuff\r
reciprocating aircrafts:\r
\r
45 minutes plus 15% of the flying time planned to be spent at cruising level or 2 hours whichever is less\r
\r
turbine engines: 2 hours at cruise above destination aerodrome\r
- Name: JustDoIt\r
  Comment: Hello ATPL, About explanation, it seems the rule reference is OP.MPA.106: cf: https://part-aero.com/#part-cat/CAT.OP.MPA.106\r
- Name: The struggle\r
  Comment: Is it not 2 hours or 30 minutes whichever is longer ?\r
- Name: Stephane\r
  Comment: Be careful between piston and turbine engine.\r
In this case, it's a turbine aircraft\r
- Name: Nicolas\r
  Comment: The question is asking about the destination alternate aerodrome, so why is in the right answer the destination aerodrome mentioned? The additional fuel required above the alternate aerodorme is 30 min at hoding consumption, which is not mentioned between the possible answers? Any feedback pls?\r
- Name: Joachim\r
  Comment: @Tomasz, So because this is a specific procedure "isolated aerodrome", we actually do not carry Final Reserves as we included it into the additional fuel for this procedure, which is 2h at cruise consumption over the destination aerodrome.\r
- Name: Tomasz\r
  Comment: maybe is a silly question.\r
\r
But I'm trying to fully understand PDP procedure\r
\r
what does it mean "including final reserve fuel"??\r
\r
Are we adding Final reserve fuel (30min in this case) on top of these 2h additional or those 2h additional fuel have 30min FR fuel included) so we don't need to add 30 min.\r
\r
Hopefully, I expressed myself clearly.\r
\r
Thanks in advance\r
\r
Question Number: AT00055\r
- Name: Karlvajs\r
  Comment: How to know if we are given NGM or NAM?\r
- Name: RicardoMSR\r
  Comment: why dont we calculate the TAS through the mach number we were given?\r
- Name: ATPL QUESTIONS\r
  Comment: @Szymon90 Thank you for letting us know! Could you please give us more feedback about the question text and answer options? Additionally can you describe the attached annex?\r
- Name: Szymon90\r
  Comment: Today in ULC in Poland the same questions but top of descent was 320.\r
- Name: Mahdy\r
  Comment: TAS increased by 10 = 457\r
Fuel flow increased by 3% of 1086 = 1118\r
time = ( 310 / (457 - 25) ) * 1118 * 2 (because 2 engines) = 1604 kg\r
- Name: Extrafuel\r
  Comment: This part of your explanation is NOT correct\r
\r
"With a 25 kt headwind, the groundspeed will be 451 - 25 = 426 kt. Applying the note, the TAS must be increased by 1 kts for each degree above standard TAT. So, it becomes: 426 + 10 = 436 kt"\r
\r
- It should be, the TAS given from the table "451kts" +10kts for the TAT difference. And then 461kts TAS - 25kts HWC, which will give us the GS 436kts.\r
- Name: deltaalpha\r
  Comment: @Maximus18 in the end it's completely irrelevant if you first add 10 and then substract 25 (either +10-25 or -25+10 is the same result). The same with Fuel Flow, since you multiply everything, it's irrelevant wheter you first multiply by 2 and 0.71 and then by 3% or the other way around (principle: 2x3 is the same as 3x2).\r
Yes you're approach is more structured and logical, and I recommend you to apply it like you did because if you mix a summation with a multiplication, then the result will be wrong.\r
- Name: Maximus18\r
  Comment: would you explain, why you add correction to GS, not to TAS and the same, not to FF engines , to final fuel results.\r
Thank you\r
- Name: Typhoon\r
  Comment: @Billy you get punished for a 36 seconds adjustment. Also you round up for just 6 seconds. Which means that the actual change in a real life scenario is irrelevant. So rounding up or down should still make you get the right answer. As i said, answers are too close for an actual LO.\r
- Name: Billy\r
  Comment: @typhoon because you are rounding wrong, 36 seconds should be rounded up not down\r
- Name: bradleyearl95\r
  Comment: I get 1592 everytime\r
- Name: 21Savage\r
  Comment: TAS is the number below FF/ENG btw, gl yall :)\r
- Name: SufferingATPL\r
  Comment: I though they covered up the TAS row, why isn't written in line with TAS. That's deliberate. I worked out my TAS using LSS and Mach which of course isn't the value they want you to use for calculations.\r
- Name: Typhoon\r
  Comment: i will appeal. if i round up or down it messes up. and it makes no sense to give answers so close together. i got 42 mins and 36 secs and i rounded down to 42mins and i get a answer in between. i can get a answer wrong for rounding down 30seconds.. that s fucked up. also since EASA is allowed to round up 2800kg to 3000kg in other exercises. BS\r
- Name: LucasBird\r
  Comment: UK CAA 23/05/24 word for word but it was FL370 instead.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @LucasBird, thank you for your feedback! We have added a new question based on your input: 333551. Please let us know if any adjustments are needed. Thank you!\r
- Name: PaulVlad\r
  Comment: All I can say and insist, for these calculations guys, use all the decimals the calculator gives. Do not round up or down under any circumstance. Managed to answer them accurately like that.\r
- Name: Matt94\r
  Comment: please can you explain why on this occasion we are not adjusting the flue flow by 3% before working out the fuel used? It says in the Notes on the annex to apply the 3% so id assume it needs to be done beforehand. Many Thanks\r
- Name: Hossein123\r
  Comment: It doesn't make sense why you add the fuel flow correction at the end. It clearly says correction to be applied on FUEL FLOW. the answer is FUEL BURNED. I did the correction fuel flow FF/ENGx2 and got 1592\r
- Name: Remote31\r
  Comment: Why isn't the TAS value written on the TAS line..? Very misleading\r
- Name: aviator786\r
  Comment: why do you only apply fuel flow correction after you work out the fuel. surely you must adjust the fuel flow rate using 3 percent before you workout the fuel burned. that makes more sense. because it is the changes to the fuel flow.\r
- Name: Aimeric16\r
  Comment: New question today DGAC Lille - same sort of concept, but aircraft had to decent to 37000 . Distance was 320NM to TOD and asked for fuel consumption. TAT was -22 degrees so had to apply corrections. Was 2 marks\r
- Name: benCompletedATPL\r
  Comment: New question today Austro UK - same sort of concept, but aircraft had to decent to 36000 and increase IAS. Distance was 295NM to TOD and asked for fuel consumption. TAT was -17 degrees so had to apply corrections. Was 2 marks\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Ben, thank you for your valuable feedback! A new question has been added based on the information you're provided: 331454. Thank you and best of luck with your studies!\r
- Name: Fedeperez\r
  Comment: @Will that is because youre adding the 3% factor to your original FF, I commited the same mistake..but you have to apply correction factor of 3% to your final result of 1545. Why? I dont know..as I previusly did a similar question where correction factor was to original number as we both did before and got correct\r
- Name: Will\r
  Comment: I get 1567. Between the 2 answers. Great\r
- Name: PilotMaor\r
  Comment: Isnt the ISA temp at FL380 is 56.5? What am I missing?\r
- Name: Michalispapadaks\r
  Comment: @phil it says FF/ENG meaning fuel flow per engine\r
- Name: Phil\r
  Comment: Where does it say that the fuel flow is only for 1 engine? I didnt double the answer as the table didnt indicate that the fuel flow was for 1 engine only.\r
\r
Question Number: AT00056\r
- Name: CristianoRonaldo\r
  Comment: ETO = The estimated time the aircraft will fly over a point (like a waypoint).\r
- Name: Flyingebba\r
  Comment: Saw this today, exactly the same correct answer, however one of the other options had the exact same phrasing but said the new groundspeed instead of new Eto!\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Flyingebba, thanks for the feedback! We have updated one of the available options accordingly. Many thanks!\r
- Name: CharlieBravo\r
  Comment: if the answer does not state that this is a manual action.. then I'm not guesser to guess that it is a manual action\r
- Name: Adrian\r
  Comment: Instrument question should be\r
- Name: CptJack\r
  Comment: Whats up with these new LO's.. .. .. FMS is done extensively in AGK Instrumentation and RNAV\r
why is it in Flight planning too?!\r
- Name: Andrea\r
  Comment: fms gave you first ETO, will give you the other one\r
- Name: Witryna\r
  Comment: Dont worry, you wont have to calculate anything ;) its just here at ATPL\r
\r
Question Number: AT00057\r
- Name: Kokki\r
  Comment: Ignore slant range its negligible\r
- Name: Gibon3m\r
  Comment: @cuong only the "chosen" ones. apparently 109 of them.\r
- Name: Johannes\r
  Comment: hi in Your explanation could You also state why it is not 19.9NM, propably the most obvious mistake? just for the learning?\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Johannes, thank you for your comment! We have added a note to the explanation, hope it is helpful.\r
- Name: Lorenzo\r
  Comment: guys there is a blue button to rotate all the annexes\r
- Name: Avigator\r
  Comment: IAF is the Initial Approach Fix\r
- Name: Ahmed\r
  Comment: Alicante / Spain and runway 10.\r
ANS/ 25.5 NM\r
\r
Alicante / Spain and runway 28.\r
ANS/ 21.1 NM\r
- Name: Dimitrios\r
  Comment: 19.9 -> DIST FROM ALT VOR .. another sneaky bastard in RED\r
- Name: Johnny\r
  Comment: It was a nice neck exercise, thanks mate\r
- Name: Yigit\r
  Comment: what is 19.9NM then?\r
- Name: WolfVF\r
  Comment: thanks ATPLq for the neck exercise\r
- Name: Alvaro\r
  Comment: @Tom R128 does not mean RUNWAY 28 means RADIAL 128.\r
- Name: Christopher\r
  Comment: MAGAL is the IAF when approaching for Runway 28.\r
\r
ALT is the IAF when approaching for Runway 10.\r
\r
Se also Question 332049.\r
- Name: avmick\r
  Comment: ALTET is given as an IAF on 10-2D card.\r
But the key is to begin with 13-3 which is VOR Z Rwy 28 approach!\r
Look at the DME arc and at the bottom of the map you will get: MAGAL as an IAF.\r
\r
Then you have to go back to 10-2D. The correct distance is given below MAGAL: ATE R128/D21.1\r
- Name: Cuong\r
  Comment: who rotate whole computer for that chart? =)))))\r
\r
Question Number: AT00058\r
- Name: SimonC\r
  Comment: Austro word for word. 20/05/25\r
\r
Also dont bother with the variation, makes no difference really.\r
- Name: HUSSEIN\r
  Comment: true. = magnetic heading + east variation 53+2. = 55° '\r
COS (55-45 )x 65 = 64 head\r
From CRP ' TAs = 456\r
Gs ==TAS -- headwind - 456 - 64 = 391\r
Time (h) =. Distance./ gs 90/ 391 = 0.23 h= 0.23x60 = 14 min\r
14:58 +14 min = 15:12\r
\r
jondi\r
- Name: pelao320\r
  Comment: shouldn't we mark the wind UP when it's TRUE track?\r
- Name: JDMarSal\r
  Comment: Personally, I think it's easier to answer this with equations:\r
TAS=Mach*38.95*sqr.root temp in K.\r
456.7=0.76*38.95*sqr.root (273-35)\r
\r
Then headwind component = Cos(relative wind angle)*wind velocity.\r
64=Cos(55-45)*65\r
\r
456.7-65=392.7\r
\r
90nm/392.7=0.23=13mins 45sec =approx 14mins\r
14:58 + 14mins = 15:12\r
- Name: CarloRomaFlyPe\r
  Comment: and some one east lest why add\r
- Name: ACaviatrix7700\r
  Comment: and i would have got the wrong answer just because i didn't realise the Mach number reduced to 0.76 !!\r
- Name: HUSSEIN\r
  Comment: true. = magnetic heading + east variation 53+2. = 55° '\r
COS (55-45 )x 65 = 64 head\r
From CRP ' TAs = 456\r
Gs ==TAS -- headwind - 456 - 64 = 391\r
Time (h) =. Distance./ gs 90/ 391 = 0.23 h= 0.23x60 = 14 min\r
14:58 +14 min = 15:12\r
@aljondi\r
- Name: MayorTom\r
  Comment: If look thess question and only have 30 seconds left in the exam Im gonna add the 0.4 in the Mach to the minutes just sayin\r
- Name: CaptainChris\r
  Comment: @JoaD because whenever you read the wind, it's true. If you hear it, it's magnetic. It's kind of an assumption here but since the question doesn't state that the wind is coming e.g. via radio, we have to assume it's a true vector here.\r
- Name: Kangaxx\r
  Comment: oh man I didn't realize the actual time was given in the question\r
- Name: XIAOYAO\r
  Comment: i got everything right, but i calculated our current position by revise from original ETA\r
i hope im the only stupid guy didnt read "at 14h58" but thought "before 17min now 14min so 3mins earlier"\r
that s really dumb, and luckily i failed here so maybe i can do better in real exam\r
- Name: Andrew27\r
  Comment: mevrick, wind is in degrees True, so you DO have to apply variation. Doesn't matter with such a tiny variation here, but if it was a large number, you'd get the wrong answer, especially if the answers are 2 minutes apart.\r
- Name: hudson\r
  Comment: (1)Cal both TAS from M0.76=457, M0.80=481 Difference in speed is 24kts\r
(2)Distance 90nm/24kts= 4mins\r
(3)Original ETA 15:08 + 4mins= 15:12\r
- Name: lorenzo\r
  Comment: OF course they put 12 and 10\r
- Name: Maksym\r
  Comment: All calculations were correct!\r
Just adding 14 minutes to 14:58 I failed 😂\r
- Name: Brandon\r
  Comment: FOR PEOPLE WHO DONT HAVE CRP5:\r
1. TAS = mach x LSS = 0.76 x 38.35 x square root of oat + 273. TAS= 449 - 64HW = 385 KT (GS)\r
2. TIME = 90NM/385KT = 0.23H = 14 MIN.\r
3. 14:58 H + 00:14 h = 15:12 h\r
- Name: JoaoD\r
  Comment: Why is the actual wind True instead of magnetic?\r
- Name: sidalmukhtar\r
  Comment: You must take the direct distance as you have been cleared to fly directly to OAL,,\r
- Name: Andrea\r
  Comment: @omri it is stated in the question\r
- Name: MaximumFlaps\r
  Comment: 1 min out and you could go for the wrong answer yet you know how to solve the question, nonsense.\r
- Name: Luke\r
  Comment: Answer comes out as 15:11:55.77 which rounds up to 15:12 not 15:10.\r
\r
Leave everything unrounded until the end, is the best way\r
- Name: Lachlan\r
  Comment: I too was getting a time of 13 minutes. However, I read Andre's comment and saw he used mach 0.76. I immediately disliked and said he is being ridiculous because the question clearly states mach 0.8. Then I re-read the question, and it was I who was being ridiculous. The mach is reduced to 0.76 which outputs a time of 14 minutes.\r
I'm sorry for doubting you Andre.\r
- Name: Denys\r
  Comment: I'm only wondering how did they initially plan to make 120 NM in 10 minutes, GS should be 720 kts, with M0.8 they'd have only 480 kts TAS, not a single jet stream would assist them\r
- Name: dylan69\r
  Comment: @jonathan, in these sorts of problems wind is usually giving in true. So its like using doing conversions, you have to make sure you use the same units. Either putting the magnetic track into true or the wind into magnetic will allow you to use the same units. But with such a small difference in variation, you should be able to get the correct answer either way! :)\r
- Name: Jonathan\r
  Comment: Why are we not taking the magnetic track instead of true?? 053?\r
Thanks!\r
- Name: Mary Lou\r
  Comment: sometimes it's rounded up and sometimes not. How should I know then when to do what?! It's just unfair, when we do everything right, but still get wrong results:((\r
- Name: Alpha\r
  Comment: ukcaa exactly same answer\r
- Name: StefanZ\r
  Comment: I do not understand Andre's calculation from March. He uses the unrevised Mach number and mixes magnetic track with true wind. Is it ust accidentally the correct result or is there a scheme behind that?\r
\r
When I try to do the calculations with the E6B I always end up with 13 minutes flight time as well so its a pity that the answer options are that close together to make the correct answer a matter of luck. In reality nobody would care about 1 minute error in ETA due to rounding issues as the sourrounding conditions like wind are not that constant anyway.\r
- Name: Etienne\r
  Comment: I get 15:11\r
Coin toss!\r
- Name: hello545\r
  Comment: @Antonio, if you do eveything right you should be closer to 14 (13.7 - 13.8), try to note 2, 3 decimals when performing your calculations to be as accurate as possible, Hope it helps\r
- Name: Antonio\r
  Comment: I've done the whole process ..the problem is the decimals that you accumulate during the calculations.\r
My result is 13 minutes which takes me to 15:11 !! its a problem to be able to choose after having done everything right !!\r
Its to get pissed off\r
- Name: Victoria\r
  Comment: @ATPLQ how do you know "14:58" ??\r
In the Question it is 15:08\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Victoria, the question text states "At 14:58 ATC instructs you to fly directly to OAL", you have to take into consideration the time you start flying directly to OAL, which is 14:58. I hope this makes sense!\r
- Name: Jai\r
  Comment: UK CAA 27/04 similar question, numbers changed\r
- Name: Andre\r
  Comment: 1. We have to take 90NM into account.\r
2. Calculate Speed of Sound (273,15 - 35 = SQR238,15 x 38,95 = 601,08kt)\r
3. Calculate TAS (TAS = M x a - 0,76 x 601,08 = 457kt TAS)\r
4. Calculate GS (53 - 45 = 8COS x 65kt = 64kt HWC) = 457 - 64 = 393kt GS\r
5. Calculate Time: 90/393 = 14mins\r
6. 14:58 + 14mins = 15:12\r
\r
Question Number: AT00059\r
- Name: CJLEE\r
  Comment: its unable to get same result in E6B\r
- Name: Timothy\r
  Comment: @patsorluk\r
\r
>Nothing in between 2 answers\r
\r
>Provides answer that is not the exact answer in the question\r
- Name: AdamSz\r
  Comment: 3 similar questions in the bank:\r
\r
1. If you have answer 388, go for it. (watch out this one has 460 also as an option)\r
2. If you have answer 430, go for it.\r
3. If you have neither, go for 460.\r
- Name: mackerelontoast\r
  Comment: @CarloRomaFlyPe, ISA is indeed 2 degrees per 1000ft, but only up to 36,000ft. It is assumed to remain constant at -56.5 degrees above 36,000ft.\r
\r
Lots of questions, not just in Flight Planning but all over the bank, will try catch you out like that, so worth remembering.\r
- Name: AndyLT\r
  Comment: today Poland but mach was 0.77 and everything else was the same except of course the answer for TAS\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @AndyLT. We have added a new question based on the information you've shared: 332761. Thank you for your feedback.\r
- Name: ricardgalisteo\r
  Comment: They could have trapped us so hard and it just shows how our life and death is noting more than an illusion, a mere imitation of what we believe to be reality at the mercy of EASA's will\r
- Name: Dannn\r
  Comment: -56.5 - 10 = -66.5\r
\r
0.82 x 39 sq root 273-66.5 = 459kt\r
- Name: Capybara\r
  Comment: I am so glad that EASA didn't put 417 as one of the answers..\r
- Name: MrATPL\r
  Comment: If they wanted they couldve trapped us so hard\r
- Name: JackQ\r
  Comment: 09.02.24 Polish ULC 460 was OK\r
- Name: Pilotdinos\r
  Comment: @Andrej the ISA no but the actual temp yes\r
- Name: andrejstrmiska\r
  Comment: is this correct? Can we go lower than -56.5 degreees?\r
- Name: William\r
  Comment: Uk caa today with mach being 0.86 and temp same and fl same\r
- Name: BMUHSEN\r
  Comment: Today Austrocontrol Given the following data, what is the TAS of the aeroplane?\r
\r
FL390\r
OAT: -40 C\r
Mach number : M 0.82\r
Wind component : -42 kt\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Bac, thanks a lot for your feedback! We have added a new question based on the information you shared. You can find it under: 331779. Thank you and good luck with your studies!\r
- Name: TheAngryMan\r
  Comment: Thanks rob. Good to hear, our instructors always put the fear of god into us about using anything but the sacred CRP. Stupid thing. Will stick to actual maths and the good old calculator.\r
- Name: Robbie74\r
  Comment: Lawrence, not sure about you but Ive passed Meteo and Gnav exams without a problem and had this type of question in both of them. Ive used algebra every time as I found that I occasionally make an error with the computer whereas I never seem to make an error when I use the Mach formula M = TAS/LSS (and for temp -*2 degrees per 1000ft until -56.5 for ISA). I also use trig for wind correction angles as I find the calculator to be faster than the flight computer and also less prone to errors. That leaves the computer just for calcs like compressibility, TAS -> CAS etc. Each one has his way to skin a cat but thats my way.\r
- Name: kosta\r
  Comment: at first i saw the wind component and i was like what's going on.. but then i remembered that i'm on an EASA question bank, and everything got better.\r
- Name: Laurenn\r
  Comment: Austro Greece 4/04/23\r
- Name: Kokoszka17\r
  Comment: Asking for TAS and giving W/V component in the question data.\r
I won't fall for your shenanigans EASA. Not anymore.\r
- Name: shahrzad\r
  Comment: DO NOT apply the wind! the q asks for TAS not GS\r
- Name: ATPL QUESTIONS\r
  Comment: @Ellis, ISA temperature for FL 390 is -56,5°C. As ISA temperature stops decreasing at -56,5°C.\r
- Name: Martin\r
  Comment: Its true airspeed, TAS, so wind is irrelevant. Wind is only used to find your ground speed, GS\r
- Name: majkelmbo\r
  Comment: @Filippo no, because -56,5 is minimum temp only when conditions are exactly ISA. If it's ISA -10 (10 degrees colder than ISA) it's -66,5\r
- Name: Filippo\r
  Comment: shouldn't be T= - 56.5 regardless of any isa deviation since we are in the tropopause?\r
- Name: Vittorio\r
  Comment: @Juliette TAS is indipendent from wind. You would have considered the wind if, for example, they asked for a GS.\r
- Name: hann065\r
  Comment: Assume at Flight Level 360 and above temperature started to be constant -56.6\r
- Name: Patrick\r
  Comment: Be aware of the Troppopause that's why the temp is -56,6 !!\r
- Name: Sae Yoon\r
  Comment: FL390 = -56.6\r
ISA -10\r
= 66.6\r
\r
√(273- 66.6) x 38.95 = 559.58\r
559.58 x M0.82 = 458.85\r
\r
Answer 460 kt\r
- Name: Ioannis\r
  Comment: There is not at all compressibility error when it comes to MACH NUMBER, only for CAS\r
\r
Question Number: AT00060\r
- Name: Heman\r
  Comment: 1 like = 1 dumb s who chose 701 kg\r
- Name: ThrustTruster\r
  Comment: Sneaky as usual, NOT this time!\r
- Name: IchBinLadin\r
  Comment: Iam fascinated how easa vampires count every possibly bad step and take it into answer. Instead of this they should make normal useful database.\r
- Name: AmirTaushkanov\r
  Comment: You almost caught me. I almost pressed 318, but at the last moment i realized that 318lbs, not kilos\r
- Name: Adrian726\r
  Comment: Just imagine you will fail this exam with 74% and you answer 318 at his question instead of 144 kg. The word of aviation should decide once and use just one unit of measure. It is not our fault that in the long history on mankind every nation had their own unit of measure Just pick the units that are best for the industry and let our brain do something useful instead of memorising so many formulas and units.\r
- Name: Keith\r
  Comment: Ok i picked 318\r
- Name: Bitz680\r
  Comment: 53usg * 6 lbs = 318 lbs\r
318 lbs / 2.205 = 144,21 kg\r
- Name: crashlanding\r
  Comment: x6 then divide by 2.2\r
- Name: saudalfahadd\r
  Comment: 0.72sg\r
- Name: Hassan\r
  Comment: 1) 53x6 = 318\r
2) 318/2.2 = 144\r
- Name: akhtargee786\r
  Comment: 53 US Gal x 6 lbs = 318 lbs\r
Pounds to KG : lbs x 0.454 ( CAP 697 Section 1 , General Notes , Page 1)\r
318 x 0.454 = 144 kg.\r
I hope it helps!\r
- Name: Antoine\r
  Comment: Pilots : Hey EASA how sneaky can you be ?\r
EASA : This : giving US Gal with pounds density and answers in kg.\r
\r
PS : I know it is easy but I am tired of EASA\r
- Name: robert\r
  Comment: Or use the crap5 ... 53 X 6 then convert lbs to kg on the infernal machine from hell\r
- Name: Kojo\r
  Comment: 53 us gal x 6 =318lb\r
318lb/ 2.25 =141.3\r
\r
Question Number: AT00061\r
- Name: Ilaymad\r
  Comment: Ok, but why write the wrong time in the table?\r
11 min for LIBLO to BTA..\r
Sometimes they want us to calculate and other times to take from the table..\r
I assumed that it wasn't a full minute (i.e., 11.5 min) and they rounded it down, so the whole calculation relied on it.\r
- Name: MayorTom\r
  Comment: Question (what are the new ETAs) , answer = actual GS and added to Actual time , freaking awesome this is madness\r
- Name: DrPilot\r
  Comment: The trick here is the wording. At first, you'd think that they want you to use the here already provided GS and to calculate the answer that is ALSO provided among the options, but it's wrong. They want you to use the ACTUAL IN FLIGHT (as per wording..) GS that is NOT provided, so you have to calculate it. Then, they want you to assume that, that GS, will be the same for the next leg just because they "made it clear" by putting in the corresponding box the same 190kt GS value, which is, btw, the wrong one and should not be used. Then, when you make all the necessary calculations by using every single decimal, since the precision IS important, you have to approx. by -3.43 seconds for the first choice and +13.71 seconds for the second choice.Why is this important? Because by approx. during the calculation process, you'll end up with 1 min difference and you'll end up getting the wrong option if you just "trust it." Now, already 1 min diff. is crazy but this.. I just thank God, for he has given me enough patience and strength to keep on laughing at this question even after I have failed it, twice..\r
- Name: Giordan886\r
  Comment: you know you can take the GS from LIBLO to BTA (175) because the expected GS for all 3 legs was 190\r
- Name: Scherminätor\r
  Comment: They just calculate the gs of the last leg\r
- Name: Warthog\r
  Comment: My weird way of solving those tasks:\r
Liblo to BTA =12 min for 35 NM =175 kt\r
relation between 190/175 = 1,086\r
then simply multiply Estimated travel times by 1.086\r
13 min times 1.086 =14 min\r
2 tiimes 1.086 = stil 2 min\r
- Name: AndyLT\r
  Comment: its not exactly the in flight ACTUAL GS if we change track and the GS doesn't change is it..\r
- Name: Florin90\r
  Comment: If you are really running out of time in the exam and come across with this question\r
\r
LKFG-AJO 13:05/13/05 (on time)\r
AJO-LIBLO 13:18/13:19 (1 min delay)\r
LIBLO-BTA 13:29/13:31 (2 min delay)\r
BTA-ELB 13:42/ 13:45 (3 min delay) solving for ELB you're good to go\r
ELB-UPADU 13:44/13:47 (still 3 min delay)\r
- Name: SyedAta\r
  Comment: how can the GS be same for different sectors with different headings ? This would have been true if there is no change in the track and other weather conditions.. your comments please\r
- Name: AiantasPap\r
  Comment: Sector time from BTA->ELB is 13 min\r
- Name: OtakuPilot\r
  Comment: Just in case I always use the data of the LAST LEG , in most of the cases they want it that way unless so they specify it. so GS in this cae is 175kt. V= D/T, V= 35/(12/60) .. 12 MINUTES from the last leg. ( 31-19)\r
- Name: MayorTom\r
  Comment: Using the in-flight actual groundspeed, but calculate GS anyway cause you needed?\r
- Name: Murtagh\r
  Comment: Why do they say in the question "use the in-flight groundspeed" and then we end up having to calculate a new g/s?\r
- Name: chesl\r
  Comment: this is total crap. how do we use actual GS when flying at absolutely different TRK with different wind and so on?\r
EASA at it's best\r
- Name: Konstantinos\r
  Comment: @putterund because ATA(actual time of arrival) at LIBLO is 13:19 so the next leg starts from this time\r
- Name: putterund\r
  Comment: I don't understand why we start from LIBLO at 13:19, could someone explain?\r
- Name: EGTK\r
  Comment: makes absolutely no sense how you are gonna maintain a gs of 175 when you're changing your track by 30 degrees\r
- Name: Malani01\r
  Comment: You just simply cant in some questions round up to the nearest number and others, like this one, just giving 2 correct answers one rounded up another the actual decimals. Which one Im supposed to take?\r
- Name: SergioOliva\r
  Comment: 1 min difference when working with decimals is wild\r
- Name: Maverickopoulos\r
  Comment: Normally one would fly a specific CAS/TAS, not constant GS between legs with changing tracks, but well . . .\r
- Name: avioanaa\r
  Comment: Seen today Romanian CAA. I received two questions, this one exactly like this and another one with the same table, asking about total time on the route\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Oana, thank you for your feedback! We would like some extra info if you remember, did they ask you to calculate the total time based on the actual groundspeed for the leg LIBLO - UPADU? Thank you!\r
- Name: AMAviation\r
  Comment: Doesn't the Ground speed change with the new track?\r
- Name: AAjami00\r
  Comment: no sense! another track= another GS, so how can one use the same groundspeed for different tracks??\r
- Name: Alexander\r
  Comment: seen austro vienna 16.06.2023\r
annex was partly filled out with 2 rows missing namely point moule and xopta between bta & elb. you also got another annex wich is a copy of e(lo)13 i think.question states you are flying along a9, l146 to lirs and they wanted total distance and total estimated time. you had to search the distance bta-moule and moule-xopta from the elo and with the given tas & wind calculate sector time.answers where only different nm values for total distance and different times for total time (time was 57min, however, not sure if correct)\r
- Name: ufofirstofficer\r
  Comment: How can GS be the same for the legs to ELB and UPADU as it was from LIBLO to BTA if the track changes?\r
- Name: HullCity\r
  Comment: I keep getting 13:44 for ELB?\r
- Name: Joshua\r
  Comment: @ATPLQ Please can you explain how the GS can be equal if the track changes between the points? Changing track with the same wind will give you a different GS for each leg?\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Joshua, I agree with you. I honestly believe this question should be worded differently - I think they assume that the ground speed remains unchanged and that should be specified in the question text.\r
Please let us know if you come across this question and can confirm the wording.\r
- Name: Victor\r
  Comment: SEEN IN SPAIN with this index and the chart, asking for distances between two positions and the ETAs\r
- Name: Joshua\r
  Comment: Much easier way:\r
From the leg LIBLO-BTA (where the wind is the same as to ELB and UPDADU) do:\r
Actual Time of Arrival (ATA)/Estimated Time of Arrival (ETA)=12/11=1.091. This is your ratio for how much longer each leg takes than planned.\r
So then for the legs asked: BTA-ELB Estimated leg time: 13minsx1.091 = 14 mins Atual leg time\r
Leg ELB-UPDAU = 2x1.091=2.182 (not increased enough to be significant)\r
Then new eta's: 13:31+14=13:45, +2 @elb, +2 =13:47 @upadu\r
- Name: Matthias\r
  Comment: of course you cannot use the GS of the climb as an average actual GS!\r
- Name: Amin\r
  Comment: Again, FPM and the assuming.\r
\r
They say use the groundspeed provided, yet they calculate a new one themselves and use that instead. I dont know what to say anymore.\r
- Name: Lorenz\r
  Comment: Seen in Austro. Different waypoints and time but exactly same concept.\r
- Name: Jaime\r
  Comment: GSs provided are wrong. Recalculate GS of the most recent leg, apply to the legs to ELB and UPADU. BTA to ELB is 14min (ETA 1331+14=1345). ELB to UPADU is 2min (ETA 1345+2=1347).\r
- Name: Subzero\r
  Comment: Question is asking for ETA and were calculating ATA, aviation makes no sense.\r
\r
I Never thought I'd get this question wrong lol, if we use the explaination logic than will have to check the whole table time cause maybe they are wrong but our mistake was not checking the previous leg, something very easy but they make it soo complicated damn.\r
\r
So question asked for the Actual GS, just so you can know nothing in the Table is actual so i think thats how you spot the mistake, this question has constant wind if it wasn't than you'd have to calculate GS for each leg, cause as i mentioned we are looking for actual GS.\r
\r
-If you still didn't understand just imagine all the GS given in the question are wrong, treat it this way than you'll be able to answer it fast because you know what is the error.\r
\r
Hope this helps in understanding it abit clear.\r
- Name: Ben\r
  Comment: Why do we use the groundspeed from the previous leg? The leg before that was a slower groundspeed so its clearly not a constant speed.\r
\r
Were given a TAS and a Wind, why don't we use those to calculate G/S?\r
- Name: Mario\r
  Comment: @ATPLQ but why do we assume that the GS for LIBLO-BTA , BTA-ELB and ELB-UPADU is the same ? They have different tracks and the wind stays constant at 250/20\r
- Name: ATPL QUESTIONS\r
  Comment: @Mario, on flight planning table grounspeeds are given equal.\r
- Name: Alberto\r
  Comment: why are you looking for ATA if question is asking for ETA? dont understand , thank you!\r
- Name: ATPL QUESTIONS\r
  Comment: @Alberto, ETAs may not be accurate they are planned. So you may need to revise.\r
\r
Question Number: AT00062\r
- Name: CZAID\r
  Comment: Greece 2025 January. Different in the question 4600 feet.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @CZAID, thanks a lot for your feedback! We have created a new question based on your input: 339171. Best of luck with your studies!\r
- Name: Craney\r
  Comment: Daniels explanation works!\r
- Name: Daniel\r
  Comment: since i couldn't find any proper explanation of altimetry so far, and really struggled to understand that, im gonna leave my interpretation of what ive gathered so far.\r
\r
fat pedos touch tom (fptt):\r
flight lvl -> correct pressure -> then temp -> get true altitude (to get true altitude from flight lvl)\r
-> to get the flight level from true altitude just follow it the opposite way (first temp, then pressure)\r
\r
pressure correction:\r
qnh > isa = subtract\r
qnh < isa = add\r
\r
temp. correction (only apply the value from the difference between meteo station and air column)\r
temp > isa = subtract\r
temp < isa= add\r
\r
note that the above is just for when you try to find the flight level from true altitude. if youre trying to get the true altitude from a fl, just applg the oppisite . (ex. temp > isa = add)\r
\r
In case I forgot anything, or got something wrong please correct me.\r
- Name: ATPL QUESTIONS\r
  Comment: Dear all,\r
Thank you for your valuable comments and feedback. We would like to inform you that our team has been working diligently to address the inconsistencies in solving altimetry exercises. We understand the importance of a standardized approach, and we are committed to rectifying the issue.\r
One area of concern has been the lack of consistency in the method used for temperature corrections when determining the minimum usable flight level above an obstacle. The learning objectives clearly state that the elevation of the aerodrome must be taken into account, and the temperature correction should be applied to the column of air between the aerodrome and the aircraft's altitude. In cases where airfield elevation information is not provided, we will assume the aerodrome is at mean sea level (MSL). In this case, the airfield elevation is said to be 875 ft, and it must be taken into account for the temperature correction.\r
We are in the process of updating all explanations for questions of this nature, and the revised content will be available within the next few days. We appreciate your patience and understanding as we strive to improve the clarity and consistency of our materials.\r
Explanation for this question updated.\r
Thank you once again for your contributions and support.\r
- Name: ArbreMagique\r
  Comment: To get to know the FL you need to find out the Indicated Altitude\r
- Name: CMJ\r
  Comment: Uk CAA similar, but no elevation of aerodrome given and different obstacle height. Options worked out at either FL50 or 70 depending where it was worked from\r
- Name: Carlos\r
  Comment: A very helpful key to remember which correction to apply first (seen in avex):\r
\r
From True Altitude to Indicated Altitude (FL) -> 1. Temperature Correction 2. Pressure Correction\r
From Indicated Altitude (FL) to True Altitude -> 1. Pressure Correction 2. Temperature Correction\r
Some sort of mnemonics: "IATA-PREST"\r
Good luck!\r
- Name: Ilias\r
  Comment: Is this still in the syllabus of planning? I believe it is a Meteo one right?\r
- Name: Mohammed Nader\r
  Comment: @Riccardo The way I think about it is: If ISA DEV is colder then it means that I am lower than I think. And if ISA DEV is hotter, I am higher than I think. And after that, I make a mental image of what needs to be done. Here I need to convert to FL, So if I am higher than I think I am, that means I can subtrakt the extra height because I am already higher up. Makes sense?\r
You have to be careful about when to add and when to subtract.\r
- Name: Riccardo\r
  Comment: Is there a precise rule to determine when to add and when to subctract p.a. and temperature correction?? please help\r
- Name: Nicolas\r
  Comment: at what altitude is the temp measured at?\r
- Name: Riccardo\r
  Comment: TA = 4385 + 1500 = 5885\r
\r
TA = PA + 30 x (QNH - STD PRESS.) + (4/1000 x ISA DEV x AIR COLUMN)\r
5885 = PA + 30 x ( 12 ) + ( 4/1000 x 12 x 5010 )\r
5885 - 360 - 240 = PA\r
PA = 5284\r
\r
So minimum safe FL will be FL060 because on FL050 you will be flying 284ft under your safety altitude.\r
- Name: Paolo\r
  Comment: well... at the end we all agree FL60\r
- Name: Ahmed\r
  Comment: TA = 4385 + 1500 = 5885 ft\r
QNH correction = 1025 - 1013 = 12 hpa (12*30= 360 ft)\r
TA = 5885 - 360 = 5525 ft\r
Temp correction TA = IA + or - ( 4*Delta ISA * height above elevation/1000)\r
5525 - 875 = 4650 / 1000 = 4.65 ft\r
5525 = IA + (4*12*4.65)\r
IA = 5525 - 223 = 5302 FT\r
IFR minim altitudes FL 60\r
- Name: Taras\r
  Comment: I got 5259,8 )))\r
- Name: Emre\r
  Comment: 5315\r
\r
Question Number: AT00063\r
- Name: ValentinC\r
  Comment: In the explaination, you dont passed by Norku 2A, so ?\r
- Name: Muhammedkasem\r
  Comment: How come that REKKEN 2A is the shortest, did you calculate it?\r
- Name: CaptainMarius\r
  Comment: Lets hope we get this type of clear and easy questions in the exams. Guys take your time and understand things now so when we do the exams we will not struggle with it. I know this part of the subject is not that nice,(I personally like it even tho is kinda annoying sometimes), but we are almost there. Keep pushing\r
- Name: Aithon\r
  Comment: Answers are a bit confusing - at first I thought it means NORKU 2A *and then* (instead of: *or*) REKKEN 2A, which would of course make no sense.\r
- Name: Papadancer\r
  Comment: They want shortest road. That why 2A road ( they dont have fuel/time) also rules said it must be the easiest way\r
\r
Question Number: AT00064\r
- Name: HUSSEIN\r
  Comment: 18:43 - 18:06 = 37min\r
45/0.72 =62.5 litters / h\r
62.5 / 60 = 1.04 L/min\r
37 min x 1.04 L/min = 38.5 L\r
38.5 + 144 = 182.5 = 183 L\r
- Name: DMGDragos\r
  Comment: FIRST THING, the question ask what is the Minimum fuel: ( TUSKA IS NOT THE DESTINATION)\r
\r
- if the INITIAL PLANNED FUEL FROM TUSKA TO DEST is 144 L\r
\r
-But we had a deviate from the planned track THAT MUCH that to reaching TUSKA we need 37\r
flight time ( 18:43 - 18:06= 37) at a fuel consumption of 45kg : 0.72 = 62.5 L/ h\r
\r
(62.5/60) x 37 = 38.5 l REQUIRED TO REGAIN THE TRACK and reach TUSKA\r
\r
So the minimum Fuel is = (TUSKA-> dest) + (Actual positon -> Tuska) => 144l + 38.5l = 182.5 l\r
- Name: B787MIG\r
  Comment: 18:43-18:06=37'\r
37'->27.75 kg\r
27.75/0.72=39 L\r
39+144=183 L\r
- Name: Pilotkhalid\r
  Comment: what is this wording i read this like 10 times and im wondering what is this??\r
- Name: Ginger\r
  Comment: 01/03/24 seen Irish IAA.\r
Over all exam was very fair, majority of the questions were from the restricted/last 200.\r
Work the bank and youll be all G\r
- Name: Pn414\r
  Comment: minimum fuel (final reserve etc) + trip fuel from TUSKA to DEST. Can I understand the question in this way?\r
- Name: Razinzaki\r
  Comment: I was wondering where I got wrong.. but jesus that was aids.. O.o\r
- Name: yourcaptainmatte\r
  Comment: at least this is math coherent\r
- Name: sidalmukhtar\r
  Comment: Understanding the question is a way harder than solving it\r
- Name: educhimi\r
  Comment: Im surprised of myself, of the skills im catching for understand this kind questions made in the hell, never in my life I saw a wording like that, its awful.\r
- Name: Putinisaknob\r
  Comment: This is a hard enough question to understand for someone who is fluent in English. Christ knows what non-native English speakers make of it. These question setters seriously need replacing....\r
- Name: Kokoszka17\r
  Comment: Don't get caught in EASA's tricks! Remember the fuel flow is given in kg/h and you either need to convert it to LTR or convert the available fuel to KG.\r
- Name: Victor\r
  Comment: Senasa 15-03-2023\r
this question really made me lose like 30mins on the exam.\r
Vamos que si se puede!!\r
Vy\r
- Name: Tsaqif\r
  Comment: They should have re-constructed the wording!! Its a very bad question\r
- Name: ManaSamsul69\r
  Comment: UK CAA (3 Marks)\r
- Name: Alpha\r
  Comment: ukcaa exactly the same i think 2 marks\r
- Name: MaxterPilot\r
  Comment: hope it's help :\r
\r
https://ibb.co/KL44Nb1\r
- Name: maricel\r
  Comment: Seen in spain 28/10/22 same\r
- Name: Alexab\r
  Comment: i will appeal it only for the english..\r
- Name: Maciej\r
  Comment: I think that WINA TUSKA\r
- Name: Tomasz\r
  Comment: definitely WINA TUSKA\r
- Name: Mateusz\r
  Comment: wina TUSKA\r
- Name: Waldemar\r
  Comment: Wina tuska :)\r
- Name: mikosik\r
  Comment: Wina Tuska\r
- Name: khalaf\r
  Comment: It’s easy only one step confusing\r
How we found 39\r
28 / 0.72 = 39\r
Hope it help\r
- Name: zanna90\r
  Comment: This no bueno english makes hard what in fact would be a pretty easy question\r
- Name: reverse21\r
  Comment: I don't know exactly why, but everytime I do this question I end substracting instead of sum the results sbdibfdvbsdibvafdlinlfdobnifdsjnblfdnbisndi\r
- Name: Jose Alberto\r
  Comment: They should just say: Remaining fuel at TUSKA 144 litres. It's confusing when they say 144 litres to complete the flight! It's worth appealing to this question.\r
- Name: Michael\r
  Comment: Gatwick today 2 Marks\r
- Name: Sam\r
  Comment: 37mins to TUSKA = (45kg / 60) x 37mins = 27.75kg / 0.72 = 38.54L\r
\r
144L (TUSKA ------> Dest) + 38.54 = 182.54L\r
- Name: Prosper\r
  Comment: CRP-5\r
\r
18: 43 - 18:06 = 37mins\r
\r
Align 144 (inner scale) with 0.72 of Sp.G KGS (outer scale)\r
\r
Find 37mins (inner scale) and read off 184 (outer scale)\r
\r
closest 183L\r
- Name: Kojo\r
  Comment: 18:43 - 18:06 = 37min\r
\r
45/0.72 =62.5 litters\r
\r
62.5l x 37min =39l\r
\r
144 +39=183l ( minimum fuel to complete the flight after diversion)\r
\r
hope it helped\r
- Name: Gokturk\r
  Comment: I really hope thw wording of the question is not like that at exam. Because I understand totally NOTHING.\r
- Name: d4vym\r
  Comment: can you correct the english in this as it makes zero sense.... its impossible to rejoin the planned route 'at' TUSKA if this is the destination!! he would have to join the route 'to' TUSKA for it to make any sense.\r
\r
Question Number: AT00065\r
- Name: Eduard\r
  Comment: ROCAA the answer with 5nm doesn t exist, the difference betwen the correct answer and the others are at least 10-12nm\r
- Name: Dilan\r
  Comment: IFR charts are Magnetic\r
VFR charts are True\r
- Name: Marco\r
  Comment: could you please add @MrATPL annex or similar to explanation that would help! Thanks!\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Marco. We have added a figure to the explanation. Thank you for your comment.\r
- Name: GaiusBonus\r
  Comment: LBA, same answer, different formulated question. They asked something about "bearing" between TRENT and TIPLE\r
- Name: MrATPL\r
  Comment: https://ibb.co/R03Xyzd\r
- Name: Vafut\r
  Comment: Today Austro. A bit reworded to be a little more misleading. Smth like "find the dist. and magnetic track of the TIPIL flying out of TNT VOR". If you are not reading carefully you might think that you are flying from TIPIL to TNT..\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Radu. We have updated the question text accordingly. Thank you for your valuable feedback.\r
- Name: Marguez\r
  Comment: Good explanation, short and clear. Congrats team, thank you\r
- Name: Ozzzy\r
  Comment: Just look at the other end of the airway POLE HILL. There 161 is shown. Just add 180 to get the reciprocal 341.\r
- Name: nastacs\r
  Comment: https://imgur.com/a/wGWc5mw\r
- Name: Sonidis\r
  Comment: It is written on the almost top right corner of the map in a black box\r
- Name: Johannes\r
  Comment: hi Phoebe. apparently, if You use an actual map. like paper map. 7c is the muber of the grid where to find Trent TNT.\r
\r
You dont have 7c in this annex here. :)\r
- Name: Phoebe\r
  Comment: can you explain what 7C means please?\r
- Name: LeRenardRuze\r
  Comment: If you have the ELO 2 in front of you in the exam, at the top is a scale, if you use a drawing compass and plot the distance between TRENT and TIPIL, you can put it against the scale and see that it's exactly 7NM. You can also follow the N57 airway and see that it says 161*, add 180 to that and you get 341!\r
\r
Good luck in exams everyone!\r
- Name: Bucuresti96\r
  Comment: Between TRENT (VOR) & POLE HILL (VOR) is Airway N57. It shows a total length of 44NM.\r
\r
Pole Hill - Denby = 14NM\r
Denby - Tipil = 23NM\r
(14NM + 23NM = 37NM)\r
\r
44NM (total length) - 37NM (Pole Hill-Tipil) = 7NM (Tipil-Trent)\r
\r
just another way to figure this question out, based on the nautical mile.\r
- Name: IcebergFINISHEDATPL\r
  Comment: One of the cheekiest map questions, second to finding those IFR routes that overlap each other.\r
- Name: hasan abduljalil\r
  Comment: https://www.dropbox.com/s/8zhj13q7gp4wfj5/File%2024-04-2023%2C%2018%2008%2044.jpeg?dl=0\r
- Name: bierf2122\r
  Comment: just solve for the direction and you will end up with only one answer ..\r
- Name: Luke\r
  Comment: Seen today UKCAA, only one answer was 7 miles, all the other options were 30+ miles. So it was too simple it made me suspicious haha.\r
- Name: JackH\r
  Comment: guys, check the box referring to the letter C on the right upper corner of the annex\r
- Name: mazen\r
  Comment: 7 C=7 nm\r
- Name: Alexab\r
  Comment: to find 7Nm just look in the chart, i find the dist from TIMPO to AKUPA, just measure it with something and you will see that is the same as ours, so it will be 7 NM (look also for 5nm or 11nm and you will see that are different!)\r
- Name: Daniel\r
  Comment: @ROCKETleague. If you look at the actual E(LO)2 around N54 and just between 000 and W001 there is a box with TNT -->TIPLE it says 341 and 7 nm on top of the airway.\r
- Name: Alibastaki\r
  Comment: how did you guys fin 7 nm ?\r
- Name: JoglvanShort\r
  Comment: Nasty question which I had in my AustroControl exam...\r
- Name: Babak\r
  Comment: TIP - IL. = Tip in the box\r
- Name: Sam\r
  Comment: Either use the reference to the box marked C (expanded view) and read off 341*\r
\r
Or\r
\r
The reciprocal of 161* ... 161+ 180 = 341*\r
- Name: Dave\r
  Comment: Check the black lined box above right on the map. It's referred to the letter C near Trent. It provides all the info.\r
\r
Question Number: AT00066\r
- Name: MajsPL\r
  Comment: From PadPilot, Additional Fuel has to be included if:\r
- no destination alternate nominated for procedures contingency 5% or 3%ERA. So with this case alternate fuel=additional fuel, wich is fuel for 15 min hold on 1500ft AGL on holding FF\r
- if it is anticipated that for some reason it is nesesery to include extra fuel for cases like extra fuel consumption in case of flight level drop due to engine failure or loss of cabin pressure to flight to alternate and hold there for 15 min on 1500ft AGL. This could be case for high certified ETOPS flights.\r
\r
In this example we have additional fuel enforced on us so it is required to carry on flight. This is convoluted, so If there is mistake please correct me.\r
- Name: MatteoFlyby\r
  Comment: @CarloRomaFlyPe because you must move the Aircraft from Ramp to Runway\r
- Name: Sabrur\r
  Comment: Total fuel required = RAMP mass\r
Use TTCAAFE boys, it just works. Take it from someone who is done with all the questions and revising atm.\r
- Name: Ginge\r
  Comment: Seen UK CAA. Type in and I put 61,270kg.\r
- Name: FlightLevel350\r
  Comment: please update\r
total fuel required means additional fuel must be added to system\r
\r
and minimum fuel required means no additional fuel required\r
- Name: ATPL QUESTIONS\r
  Comment: Hey guys! Additional fuel refers to the fuel necessary for specific operations such as ETOPS and is therefore mandatory and part of the fuel required. Only EXTRA fuel is not mandatory but left to the discretion of the commander.\r
- Name: 747Maverick\r
  Comment: all this while, all the other questions which were similar did not ask for additional fuel, but why is additional fuel suddenly included in the calculations here? Question 335816 is also similar, except that it is a MRJT in that question. Additional fuel was not included in the calculations there. So what exactly is the difference here? There is alternate fuel here. So far, the general rule has been that if there is alternate fuel, additional fuel is not needed - and this is also mentioned in a number of your explanations for other questions (Question 335497 couldn't make this any clearer). I really hope you can address this question because a lot of students here are also asking the same question and it is not being addressed. Thanks.\r
- Name: VleMaster\r
  Comment: LRJT = use the additional as well, for some reason.\r
- Name: Stalled on upwind\r
  Comment: the regulations states that if we have alternate fuel we dont take additional fuel but as the question states that nom variations apply it means we should account for it??\r
- Name: Joey\r
  Comment: @George because it asks for total fuel required, which is another way of saying BLOCK fuel. Which is total fuel for the flight. Take-Off fuel + taxi fuel.\r
- Name: Joel\r
  Comment: Seen UK CAA. 27/02/2023. Type in.\r
- Name: Julia98\r
  Comment: @ATPLQ, since when you have to take both ALTERNATE and ADDITIONAL fuel?\r
- Name: Spanner\r
  Comment: The FLIGHT technically begins after pushback, so your BLOCK fuel is your TOTAL flight fuel at the start of taxi\r
- Name: mariamaria\r
  Comment: @atpl in other questions are given information that we do not need to use, but they are there just to trick us. Here it doesnt say NO DESTINATION ALTERNATE REQUIRED in order to add the additional fuel. Can you pls help us?\r
- Name: Josh\r
  Comment: You man need to relax with the comments, this has got to be the easiest question on the bank. It's Lara-Proof\r
- Name: Daniel\r
  Comment: Oh my I got 61270kg, I saw 29 comments so I didn't click on 61270. I thought there is a trap\r
- Name: Mazsola\r
  Comment: AUSTRO same numbers\r
- Name: Mariana\r
  Comment: I thought we should uplift an additional fuel if we had not destination alternate. What is the reason for having both additional and alternate?\r
- Name: Delife\r
  Comment: Guys, according to the website below, the additional fuel can also be an operator (company) policy so if your airline says take 2700 kg more, you take 2700 kg more whether or not there is an alternate aerodrome :)\r
https://www.easa.europa.eu/sites/default/files/dfu/Consolidated%20unofficial%20AMC&GM_Annex%20IV%20Part-CAT.pdf\r
- Name: Martin\r
  Comment: For anybody who is confused:\r
\r
Generally, it's true that when you need additional you don't need alternate fuel, and vice versa, WITH ONE EXCEPTION:\r
\r
ETOPS flights! During ETOPS operations, you carry alternate fuel (because you might still need to go to the alternate when you're done crossing the ocean and you reach your destination) but you also may need to carry additional fuel if the ETOPS enroute alternate is far enough (it's a whole science how to calculate it, thankfully it's not in the syllabus).\r
\r
As you'll see, the question clearly states with the LONG RANGE jet transport - it's giving you a hint!\r
- Name: Mike\r
  Comment: in Question 332321....The 5% can incorporate final reserve or extra fuel....\r
WHAT IS GOING ON? Why in this question are we just adding it all together and not incorporating the reserve into other totals?\r
- Name: Mr calculator\r
  Comment: i knew this Q seems way to easy to be correct\r
- Name: Karem\r
  Comment: Ttcafae , what i know is when we have alternate we don’t use additional , but it seems wrong !\r
- Name: Scott\r
  Comment: class question because im able to answer it but feels sus when its that easy\r
- Name: Andrew\r
  Comment: You can choose to take Alternate and Additional fuel but the question says how much is “required”. There is nothing else in the question to ask us. The question is how much is REQUIRED. We are NOT NOT NOT required to take both. What is wrong with these fools?\r
- Name: David\r
  Comment: It asks REQUIRED fuel.. From the information one can not conclude that any aditional fuel is required.\r
So you can easily argue not to include it..\r
Surprise surprise, EASA get's it wrong.. again.\r
- Name: Ordynator\r
  Comment: TOTAL FUEL = Block fuel\r
- Name: Krystof\r
  Comment: After doing so many questions, and you come across this one. Start to suspect why it's so easy. Cant be true, for sure there is a trick. Damn EASA playing mind games with me.\r
- Name: Aaron\r
  Comment: @Stefano, this question is correct. You can take both Additional and Alternate if it’s given, but it’s not required. It is mandatory however, to carry *at least* one of the two.\r
- Name: stefano\r
  Comment: this is stupidly wrong, you take additional fuel if an alternate is not available, you can't take both...\r
- Name: Piotr\r
  Comment: @Federico Extra fuel is at Commader discretion\r
- Name: Dan\r
  Comment: I'm pretty sure you can take both alternate and additional\r
- Name: Dan\r
  Comment: I think Francesco you may be wrong\r
T axi\r
T rip\r
C ontingency\r
A lternate\r
A dditional\r
F inal Reserves\r
E xtra\r
\r
Seems to work for me, though I could also be wrong :)\r
- Name: Gokturk\r
  Comment: As I know for a flight you should take "Additional Fuel" -OR- "Alternate Fuel", both of them should not be taken. Am I missing something?\r
\r
Question Number: AT00067\r
- Name: somethingmika\r
  Comment: Option 5 is correct. Only 1 answer remains.\r
- Name: RajHamsaXAir\r
  Comment: Got this one right just cuz there are no NDBs in this SID, so we don't need an ADF on board.\r
- Name: Vafut\r
  Comment: For the RNAV SID you need only the GPS. That is the reality. For the conventional SID (which you will rely on in case of GNSS failure) you will need VOR and ADF etc. But for RNAV SID, just GPS. FK your wording EASA!\r
- Name: TheBatman\r
  Comment: Specifies DKB4H so no need for LBU\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Max, thank you for your comment!\r
According to ICAO Annex 10 VOL I; GNSS: Global Navigation Satellite System; A worldwide position and time determination system that includes one or more satellite constellations, aircraft receivers and system integrity monitoring, augmented as necessary to support the required navigation performance for the intended operation.\r
GNSS elements; GPS, GLONASS, ABAS, SBAS, GBAS, GRAS and aircraft GNSS receiver. (Annex 10 Vol I 3-60).GNSS is not the same as GPS. GNSS covers many components, including GPS. So you can't use GNSS but you need GPS, yes.\r
For further reading, ICAO Annex 10 Aeronautical Telecommunications VOL I.\r
- Name: Max\r
  Comment: So i cant use GPS but i need GPS?\r
- Name: Ezequiel\r
  Comment: No ADF\r
- Name: Alberto\r
  Comment: This question is not really well worded, the chart is an RNAV chart minimum equipment is GPS, that should be the equipment that must be had, the waypoints in this chart can be defined by radials and distances from the ground stations thats true off course, that does not mean the equipment i must have is also a VOR/DME, this is also an RNAV sid which means i should only fly it as retrieved from the database ( GPS COORDINATES ), the aids are there as backup they do not define this charts waypoints GPS coordinates retrieved from the database do.\r
- Name: Roman\r
  Comment: DKB4H require DKB)) it is only in 1 option.\r
- Name: Capt\r
  Comment: We execute The RNAV SID so basically we require GPS, in DKB4H RNAV SID we define the waypoints as DME distance from DKB VOR/DME so we also need Aircraft VOR and DME receivers and STG and DKB navigational aids( DKB VOR/DME ).\r
- Name: Guillefdb2008\r
  Comment: SENASA SPAIN TODAY\r
- Name: Nicolas\r
  Comment: Technically VORs are not equipment, the wording is, as expected with EASA, pretty bad.\r
- Name: picurd\r
  Comment: seen today at Austro Control (Vienna) - exact same wording\r
\r
Question Number: AT00068\r
- Name: KalafutLukas\r
  Comment: why don't you show how you did the interpolation in the explanation for each type of these q? You know, would be a lot more helpful ;)\r
- Name: Skydaddy\r
  Comment: Hcaa two answers were 3.3 usg\r
- Name: Lafiq\r
  Comment: We want a 11000 ft\r
\r
PPH 10000 ft = 73.3\r
PPH 12000 ft = 67.8\r
\r
73.3 + 67.8 =141,1 / 2 = 70.55\r
- Name: MarkM2125\r
  Comment: I had this in both Performance and Flight planning exams (UK CAA). Its word for word\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Jan, thank you for your feedback! We have copied this question to Performance: 322809. Good luck with your studies!\r
- Name: dionizos\r
  Comment: had this in performance ULC 01/2024\r
- Name: Mariel\r
  Comment: @Michal The three columns aren't OAT but ISA. So if we know that the FL is 11 000, then it is going to be 22 degrees colder than 15, which is -7. So the temperature is actually ISA and you don't need to use any numbers from the IOAT column at all.\r
- Name: FoxtrotSierra\r
  Comment: @Michal IOAT (indicated OAT) is always going to be warmer than actual OAT due to ram rise.\r
- Name: William\r
  Comment: UK CAA - LOOK BELOW - same as Lucas question. I also did 12 right drift\r
- Name: AdamF\r
  Comment: had a question on UKCAA today using this cap, gave me ISA+10 and FL70, a wind, mag track + variation and wanted the value of drift.\r
- Name: Lucas\r
  Comment: SEEN UKCAA 19/07/23. However, question ask me what was the drift. Question gave you +10 ISA and at FL70. So you have to interpolate between 0 ISA and +20 ISA. furthermore interpolate the KTAS between 6000 & 8000 ft. I got 170 TAS. They gave you wind in true, but track in mag so need to do CDMVT. Then find drift using CRAP-5. My answer was 12 degrees right. Good luck guys!!\r
- Name: michal44\r
  Comment: For what purpose there is the column IOAT? Shouldn't we use this to interpolate between -6 and -10..?\r
- Name: Denys\r
  Comment: Too easy to be true\r
- Name: Guillefdb2008\r
  Comment: SENASA SPAIN TODAY\r
- Name: Karin\r
  Comment: My dumbass had to interpolate between -20 and 0. Then realized it was ISA. Don’t make the same mistake. Cheers!\r
- Name: Robert\r
  Comment: PPH - Pounds per hour\r
GPH - Galons per hour\r
\r
Answer are lb/h not gal/h\r
- Name: Myron\r
  Comment: @sae bro it’s according to OAT\r
\r
Question Number: AT00069\r
- Name: TiagoLH\r
  Comment: I was struggling with the pressure correction part of altimetry, but Ive finally found a method that works for me. It might not be the most "official" approach, but its helped me consistently get the right answers. Hopefully, it helps someone else too!\r
\r
Step 1:What the Question Is Asking\r
In this example-> Pressure Altitude (PA).\r
The order of solving should go: PA<-IA<-TA\r
If you need to find TA, you'll go backwards through that chain: TA<-IA<-PA\r
\r
Step 2: Temperature Correction (TA->IA)\r
Given:\r
Temp at the base is -25*°C so,\r
ISa deviation at 10000 ft = isa temp = 15 - (2x10) = -5°c\r
actual temp = -25°c so isa dev =-20°c\r
formula: IA = TA - [4 x (alt /1000) x isa dev]\r
ia = 8000 - [4 x 8 x (-20)]\r
ia = 8000 - (-640)\r
ia = 8640 ft\r
step 3: pressure correction (ia -> pa)\r
here's the trick i use:\r
pa = ia + (1013 - pressure at level) x 27 (If not specified we assume 30)\r
in this case: pa = 8640 + ((1013 - 990) x 27)\r
pa = 8640 + (23 x 27)\r
pa = 8640 + 621 = 9261 ft -> fl100\r
\r
alternatively, if you go pa ia, reverse the formula:\r
\r
ia = pa + (pressure at level - 1013) x 30\r
\r
summary of the trick\r
when going from ia to pa, use:\r
pa = ia + (1013 - qnh) 30\r
when going from pa to ia, use:\r
ia = pa + (qnh - 1013) 30 - just flip the formula depending on the direction you're going.\r
- Name: BelaMCh\r
  Comment: You still have FL100 if you use -25°C instead of -20°C ISA deviation.\r
- Name: ZachLaurent\r
  Comment: TA=true alt (1.CT 2. CP)\r
CT = correction temperature\r
CP= correction Pressure\r
FL = flight level (1. CP 2. CT)\r
- Name: ZachLaurent\r
  Comment: TA -> CT -> CP -> FL\r
From TA to find FL\r
\r
Pressure correction :\r
QNH > ISA = subtract\r
QNH < ISA = add (TA = if QNH < ISA TA(add) = add = TA Temperature correction first)\r
\r
Temp correction :\r
Temp > ISA = subtract\r
Temp < ISA = add (same for Temp)\r
- Name: ZachLaurent\r
  Comment: FL -> CP -> CT -> TA\r
From FL to find TA\r
\r
Pressure correction :\r
QNH > ISA = add\r
QNH < ISA = subtract (FL = if QNH < ISA FL(low) = subtract = pressure first)\r
\r
Temp correction :\r
Temp > ISA = add\r
Temp < ISA = subtract (same for Temp)\r
- Name: FlyingLegend\r
  Comment: @MayorTom we are using FL100 to get the ISA deviation for the temperature correction, because the OAT is -25°C at FL100. The actual temperature correction is applied to the height over the aerodrome, in this case 8000ft\r
- Name: Papa777x\r
  Comment: if COLDER THAN ISA; TRUE ALTITUDE < INDICATED ALTITUDE. So why in your explanation true altitde is higher and we add ?\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Papa777x, thank you for your comment. Please check the explanation section more carefully. TRUE ALTITUDE < INDICATED ALTITUDE (8000 ft < 8640 ft) applies in there as well.\r
- Name: Dieter14\r
  Comment: No real use for this in airline ops\r
- Name: RotorRider\r
  Comment: @Vitali hello again, The [ISA deviation] will be used to find our (TA)True Altitude. Since it is colder than ISA, our TA should be lower. Using a similar formula for temp.correction 4 x (8000'ft./1000) x [-20] = -640'ft // However, 8000'ft is our MSA, so we cannot be lower than this. Instead of subtracting the value, we add it -> 8640'ft (this is NOT yet a (PA)Pressure Altitude, as we are still using a QNH 990 hPa. The final step is to correct for the pressure setting difference! 990-1013 = 23hPa x 30' = +690 -> PA 9330' or the closest FL100\r
- Name: RotorRider\r
  Comment: @Vitalii, since the 'ISA deviation' isn't provided, we need to calculate it using information given. " temperature at FL100 is -25°C we will use this as our reference point: -> in ISA conditions the expected OAT would be 15-(10x2)= [-5°C], so the [ISA deviation is -20°C]\r
- Name: Vitalii\r
  Comment: Istnt it temperature at fl100 is -20 and isa dev -5?\r
One more Q , if temp at fl is -20 why we use it for fl80? Isnt it -16 or so ) really trying to understand this . Thank you guys\r
- Name: KaiWillCry\r
  Comment: Gsp-15 for the definition of the MSA. MSA already includes the terrain clearance\r
- Name: Vladislav7\r
  Comment: I dont understand why we are not add 2000 ft for mountain area?\r
- Name: Spanner\r
  Comment: You use the temperature at FL100 to find out what the ISA deviation is and then you have to apply it for temperature correction. They could have easily given a random temperature at FL050 but the deviation would be the same in the end\r
- Name: ATPL QUESTIONS\r
  Comment: Dear all,\r
Thank you for your valuable comments and feedback. We would like to inform you that our team has been working diligently to address the inconsistencies in solving altimetry exercises. We understand the importance of a standardized approach, and we are committed to rectifying the issue.\r
One area of concern has been the lack of consistency in the method used for temperature corrections when determining the minimum usable flight level above an obstacle. The learning objectives clearly state that the elevation of the aerodrome must be taken into account, and the temperature correction should be applied to the column of air between the aerodrome and the aircraft's altitude. In cases where airfield elevation information is not provided, we will assume the aerodrome is at mean sea level (MSL).\r
We are in the process of updating all explanations for questions of this nature, and the revised content will be available within the next few days. We appreciate your patience and understanding as we strive to improve the clarity and consistency of our materials.\r
Explanation for this question updated.\r
Thank you once again for your contributions and support.\r
- Name: Radoslaw\r
  Comment: why did you calculate temp correction from 10,000' not from 8,000 ?\r
- Name: Firashmz\r
  Comment: I am a commercial pilot with 300 hours and trust me never got the altitude for the temp correction right its always wrong\r
\r
I apply the temp dev x 4 x height but this is my issue the height in this formula\r
- Name: Philip Frisch\r
  Comment: Seen Denmark July 2022\r
- Name: Enrique\r
  Comment: For those people wondering why we dont apply 2000 ft for MSA here is because its already GIVEN (probably the mountain's peak is 6000 ft and 2000ft has already been applied)\r
- Name: hello545\r
  Comment: @ATPLQ, why 27ft/hpa and not 30ft ?\r
- Name: Jules\r
  Comment: For temperature correction, you are not supposed TO take the AGL ? ,why using FL TO calculate temperature correction ?\r
- Name: Tomasz\r
  Comment: @ATPLQ Why did you apply temperature correction to 8000ft instead 8621? In other similar question you apply correction to altitude already corrected by QNH.\r
\r
Q: 333794 & 334710\r
- Name: Tom\r
  Comment: Would you not add 2000ft clearance since MSA is above 5000ft? Or is this accounted for in the MSA?\r
- Name: Federico\r
  Comment: @khalaf the question ask for the lowest usable FL. if you use FL090 you are lower than 9261ft, so the most correct answer is FL100\r
\r
Question Number: AT00070\r
- Name: FuturePilot\r
  Comment: Quick question: when determining ISA deviation, do you use Pressure Altitude or Indicated Altitude?\r
- Name: Muhammedkasem\r
  Comment: Heigh pressure: T> I > P\r
Low pressure: T < I < P\r
- Name: Manjitha\r
  Comment: For those who use the PIT strategy to calculate this;\r
the question has given us OAT which is -11C not ISA which is -21C\r
Hence we need to add the temperature correction of 10C to get the final answer\r
- Name: pilotdaniel1\r
  Comment: Guys use the CRP-5, if you are precise will be faster and easier!\r
- Name: MayorTom\r
  Comment: To determine the temperature correction, it is necessary to have knowledge of the ISA air temperature for the given flight level/altitude (FL250) its from the explanation why this FL?\r
- Name: Jenu350\r
  Comment: true altitude calculation =. QNH is higher than standard we have to add(+), if QNH is lower than standard we have to subtract (-)\r
ISA deviation is (-) we have to subtract(-) , ISA deviation is (+) we have to add\r
first find the QNH then ISA deviation\r
- Name: CarloRomaFlyPe\r
  Comment: and some one please help me\r
why now added to indicated altitude\r
- Name: SportingFr\r
  Comment: Isnt warmer than ISA and so deduct from 17 700ft? instead of adding\r
- Name: Pilott\r
  Comment: For those who get confused not knowing which correction to apply first remember PIT and its always in the same order P I T or the opposite T I P if we are given true altitude and asked for pressure altitude or indicated altitude\r
\r
P = Pressure altitude which is a flight level ( Reference 1013)\r
I = Indicated altitude which is the altitude given when QNH set\r
T = True altitude\r
Since you are given a pressure altitude and asked for true altitude you can't jump from P (pressure) to T (true) directly you have to first find I (Indicated)\r
\r
So basically apply the pressure correction from 1013 to the actual QNH to find the indicated altitude & then go for the temprature correction\r
\r
Hope this helps\r
- Name: Jawado\r
  Comment: WARMER THAN ISA& FROM LOW TO HIGH TRUE ALT INCREASE.\r
GOOD LUCk.\r
- Name: LeGendetente\r
  Comment: TA = IA + (Isa dev x 4/1000 x IA)\r
\r
TA = 17700 +(10 x 4/1000 x 17700) = 18408\r
\r
Keep it simple :)\r
- Name: sebwis\r
  Comment: @Christopher well in this case that might be true, but if you consider a higher QNH difference that might not always be the case, especially if we have a lower than standard QNH.\r
- Name: Vukasin\r
  Comment: 18000 + 30 x (1003 - 1013) + (4/1000 x 10 x 17700) = 18408\r
\r
I used this formula\r
\r
PA + 30 x (QNH - Standard Pressure) + (4/1000 x ISA DEV x Height Difference)\r
\r
Could someone tell me why this method is not favored by others? I used it in gnav quite a lot and it was always correct. I know that in some questions in Flight Planning the result might not be as close but it is close enough.\r
- Name: Michael1010\r
  Comment: Why do you calculate ISA deviation with 18 000ft and not with 17 700ft?\r
- Name: Richard\r
  Comment: What is the correct method, should we apply temperature correction first or the pressure correction?\r
I've seen a few questions where it is temperature correction first and then pressure correction, but here it is the other way around.\r
\r
In met I remember it was pressure correction first???\r
- Name: StephEDW\r
  Comment: Step by step:\r
1. Determine ISA-Deviation: 15 degress - (18x2 degrees) = - 21 degrees (=ISA) --> ISA-Deviation +10\r
\r
2. Convert PA (=FL) into IA (=QNH): QNH set 1013, actual QNH 1003 --> 10x30ft = 300 ft --> if you turn on your altimeter from 1013 to 1003, it will read less altitude, therefore: FL180-300ft= 17700ft\r
\r
3. IA to TA: IA (QNH) + Temp Error (4x Height Above Surface/100 x ISA-Dev) = 17700 + (4x17700/100x10) = 17700+708 = 18408ft\r
- Name: Witryna\r
  Comment: I swear every question different order. Im going to fail medicals even though I pass\r
- Name: Olstan\r
  Comment: 333794 + 336571 both have the temp corrections done first, neither give you the true altitude first?\r
- Name: Federico\r
  Comment: @atplq WHY WHY WHY sometimes you apply the pressure correction and THEN the temperature correction ? sometimes you do the opposite and depend on this we get different results!\r
- Name: ATPL QUESTIONS\r
  Comment: @Federico, to find true altitude from indicated altitude first pressure correction should be done then the temperature correction. If you are given the true altitude, you should do temperature correction at the beginning and then pressure correction. Hope it helps!\r
- Name: Ellis\r
  Comment: I don't know how accurately they would want this in a type-in. But using the equation 4 x ISA Dev x (H/1000) with the numbers: 4 x 9.4 x 17.7 the dev I get is 665.5, giving me a final answer of 18365.5 Would this be within the acceptable bounds do you think? I prefer not to round unless it's MDR, as you can always argue a more accurate answer.\r
- Name: AndreCamacho\r
  Comment: why sometimes we apply the temperature correction on the given value and sometimes to the value corrected already with the pressure correction?\r
I did 4 x 10 x 18 = +720\r
but in the explanation you did 4 x 10 x 17.7 = 708\r
which is slightly different. And in other exercises we apply the correction to the given value like i did, can someone explain?\r
- Name: Alexx1215\r
  Comment: @ATPLQ In some questions you first correct by temperature and in other first by pressure, which is the correct method?\r
- Name: ATPL QUESTIONS\r
  Comment: @Alessandro, to get true altitude first apply pressure correction then temperature correction. This is the correct order or the reverse when we are trying to determine a proper flight level. There can be some mistakes in explanations, we will fix those. But in the end, usually the difference is very little and can be ignored.\r
- Name: Delife\r
  Comment: @ATPLQ I might be wrong but in the explanation it says that 17 700 is the pressure altitude whereas PA is the height above 1013, in this case 18 000. 17 000 would be the height above QNH so just altitude, right ?\r
\r
Question Number: AT00071\r
- Name: Aculeus\r
  Comment: Overfly : between 4500 and FL75\r
Cross : max 1500\r
- Name: Simulacra\r
  Comment: Overfly rule found in 19-3 (Contact Valencia 4500 min FL75 max)\r
and\r
in 19-1 we can see the frequencies to contact Valencia Control at the top, Spanish and English frequencies.\r
- Name: DGfromtheUK\r
  Comment: Can also confirm UK CAA double drop down, asking for what George C98 said (2 mark question)\r
- Name: Nicewicz\r
  Comment: POLISH ULC 13.05.2025 and the answer is correct\r
- Name: GeorgeC98\r
  Comment: Seen 23/04/25 UK CAA- 2 mark drop down. Asked for both frequency and altitude.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @GeorgeC98, thank you for your feedback! If anyone else comes across this question in their exam, please let us know. We're trying to determine whether GeorgeC98's feedback applies specifically to the UK exams or if EASA has also updated the question. Thanks!\r
- Name: Tetouanmag\r
  Comment: my previous comment had a problem. I was saying, in the question, it is clearly stated - who shall you be in contact with to get transit clearance. So it is clear who you should be in contact with when you read the infos in the annex.\r
- Name: Tetouanmag\r
  Comment: Had this question in my exam. The question is more something like : (something like that, but #transit clearance# is the important idea in the question and removes other options).\r
\r
Moreover, i think one of the alicante TWR option is 4000ft, not 5000.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Tetouanmag, thank you for your feedback. We have updated the option accordingly.\r
- Name: Olie2\r
  Comment: @olivercairns Overflying the airport is when you are not entering the control zone, and most likely staying in the TMA. Crossing is when you are flying in the control zone (closer to the airport).\r
- Name: olivercairns\r
  Comment: @Olie2 what is the difference between overflight and crossing?\r
- Name: Olie2\r
  Comment: You have to OVERFLY the CTR, not CROSS it.\r
Overflying is between FL75 and 4500 ft. 5000ft is appropriate.\r
If you want to CROSS it, 1500ft is maximum. 1000ft would be appropriate.\r
- Name: BarrySeal99\r
  Comment: Seen UK - Asking for max altitude arriving at NE1\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @BarrySeal99. We have added a new question based on the information you've shared: 338351. Please check this question and compare it with the one you encountered in the official exam. Thank you for your feedback.\r
- Name: OtakuPilot\r
  Comment: Seen in SENASA Spain on 18.07.24 same. 5000ft dont get confused WITH 1000ft as I did :\`C\r
- Name: MaxRa\r
  Comment: austro 26.6.24 same same and correct answer here is correct\r
- Name: somethingmika\r
  Comment: @JJK process of elimination. It says Valencia Control so that's 2 answer gone. It also says Minimum of 4,500ft. It said you 'may' cross at 1,500ft, but there are no answers with 1,500ft. For Flight Planning, read the material 2-3 times and don't complicate things! :-)\r
- Name: JKirbs\r
  Comment: It also says "CTR may be crossed" at "MAX ALT 1500'"\r
\r
So I am confused with the conflicting instructions?\r
- Name: khalieyy\r
  Comment: CTR = Control Zone , CTA = Control Area\r
- Name: Laurenn\r
  Comment: Austro Greece 4/04/23\r
- Name: Sarah\r
  Comment: Seen today uk\r
- Name: Moha97\r
  Comment: Today in Swedish CAA. Reworded - A - Valencia Control, 1000ft, B, Alicante Tower, 2000ft, C - Valencia Control, 5000ft D - Alicante Tower, 5000ft.\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Moha, thank you so much for your feedback! Available options updated accordingly.\r
- Name: Nenad\r
  Comment: Seen HCAA Greece 05/12 2022 word for word\r
- Name: Dan\r
  Comment: SEEN UK CAA 27/07/2022\r
- Name: Clement\r
  Comment: Seen in DGAC France word for word\r
- Name: Ellie\r
  Comment: Seen austro today, exactly same\r
- Name: DZPILOT\r
  Comment: it can't be below 4500 ft the only answer is 5000ft\r
- Name: Carlos\r
  Comment: "Prior authorization by TWR, and upon request by pilots, the CTR may be crossed bla bla bla...If so, ACFT shall proceed to VFR points: N or S.\r
This question states that we want to overfly from NE, so we can rule out this one and the only possible answer is "Valencia Control, at 5000 ft"\r
- Name: Michael\r
  Comment: Gatwick today word for word 2 marks\r
- Name: Kuanysh\r
  Comment: Confirm Remi, today Irish CAA, correct answer Valencia control, 5000ft\r
- Name: Remi\r
  Comment: Question seen today Austrocontrol, answer was worded slightly differently. Valencia control at 5000ft, instead of between 4500 and FL75, and the other Valencia control option was 1000ft, instead of below 2000ft.\r
- Name: Tasos\r
  Comment: Valencia control between 4500ft and FL075 found in 19-3 at VFR overflights\r
\r
Question Number: AT00072\r
- Name: Fadecc\r
  Comment: Similar today UK CAA but the question asked What type and category of of approach is a 3D APCH With a MDH of 350ft\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @FADECC, thank you for your feedback! A new question has been added accordingly (331209). Thank you!\r
- Name: Elia\r
  Comment: Seen similar question austro control, asking what type of approach was an Ils with a 240ft minima\r
3D type B was the answer\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Elia, thank you for your valuable feedback! The question you described already exists in our database as 336237. Thank you!\r
- Name: Gooch07\r
  Comment: A above 250 3d/2d\r
B Below 250 3d only\r
- Name: omer\r
  Comment: type A - 3D / 2D\r
type B - only 3D\r
\r
Question Number: AT00073\r
- Name: RogerThat\r
  Comment: Straight Outta Compton\r
- Name: ramouellitto\r
  Comment: This is a detailed breakdown of a Notice to Airmen (NOTAM) related to the Compton DVOR/DME station:\r
1. Reference:\r
• Q EGTT/QNMAS/IV/BO/E/000/999/5129N00113W025\r
• This code provides technical classification details:\r
• QNMAS: VOR/DME facility status\r
• EGTT: London FIR (Flight Information Region)\r
• IV/BO/E: Information applies to IFR/VFR, affecting operations, and covering en-route airspace\r
• Location: Latitude 51°29’N, Longitude 001°13’W\r
• Altitude: From ground (000) to unlimited (999) up to 25 nautical miles\r
2. Valid Period:\r
• From: 29 April 2016 at 09:59 (UTC)\r
• To: 27 May 2016 at 18:00 (UTC)\r
3. Details:\r
• The Compton DVOR (‘CPT’) on frequency 114.35 MHz and Compton DME (‘CPT’) on channel 090Y are both out of service (U/S).\r
4. Test Activity Notice:\r
• Between 3 May and 12 May, due to test activities at Compton, test voice messages may be transmitted for short periods on 114.35 MHz (the CPT DVOR frequency).\r
• If airspace users hear these transmissions, the content should be ignored.\r
\r
This NOTAM informs pilots and aviation personnel about navigational aid outages and temporary test activities.\r
- Name: SamMurray\r
  Comment: @MandM its the Compton DVOR abbreviation\r
- Name: SKOURASV\r
  Comment: @ThrustTruster nope in real NOTAM its U/S\r
- Name: ThrustTruster\r
  Comment: I would not be surprised if in a real NOTAM it states 'Unserviceable' and the U/S shit is only made up by EASA to make us fail\r
- Name: chesl\r
  Comment: i'm curious how they use their free time after abreviating importing and valuable word "UNUSUABLE" and then typing whole damn sentence with plain English about possible stuff what we don't really care about\r
- Name: Bigsrockt\r
  Comment: could you please add an explanataion on why the messages will not be heard on RT equipment? I guess these start at 118 mhz? Thanks, great job!!\r
- Name: Dawid\r
  Comment: Polish ulc 07.11.2023 exactly same question and answer.\r
- Name: easadepression\r
  Comment: Why is the answer with voice messages incorrect?\r
- Name: benCompletedATPL\r
  Comment: these notam questions are so long it winds me tf up\r
- Name: Sam\r
  Comment: @MUSTAFA huh?\r
- Name: TheAngryMan\r
  Comment: Does 'RT equipment' stand for 'Radio Transmission equipment' ?\r
- Name: Banuma\r
  Comment: You can find the abbreviation U/S in the JEP (GSP) GENERAL PART (en) 1.5 - 7\r
- Name: Igor\r
  Comment: well it's not quite unservicable if it's (working) being tested more like excluded from operations that's why I chose voice messages but I guess\r
- Name: Christopher\r
  Comment: U/S - Unserviceable\r
- Name: Louis\r
  Comment: Austro Control (Spain) 23/10/2020\r
- Name: Damian\r
  Comment: DVOR/DME ...\r
\r
Question Number: AT00074\r
- Name: LucyS\r
  Comment: UK but along range cruise 45%\r
- Name: ZachLaurent\r
  Comment: 15-(9000/1000)x2 = -3°c OAT = -13°c\r
- Name: Adael\r
  Comment: In the exam the answer is 171 instead of 170\r
- Name: CaptainChris\r
  Comment: OMG I didn't consider the ISA-10 but instead OAT=-10 which is obviously wrong but I got the correct answer anyway. So much luck today!\r
- Name: DEEPEE\r
  Comment: there is a mistake on this anex it should say -13 instead of +13 could be missleading :)\r
- Name: DrRick\r
  Comment: Is It just me or should the example say -13 instead of 13?\r
- Name: Quentin\r
  Comment: Seen in France DGAC but ISA+10 instead\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Quentin, thank you for your feedback! We have recently added the question you described: 334340. Thank you!\r
- Name: William\r
  Comment: Uk CAA - was isa + 10 went with 175\r
- Name: ATPL QUESTIONS\r
  Comment: Hey everyone, thank you all for your valuable feedback! We have added a new question based on the information you shared: 334340. Thank you!\r
- Name: Sam\r
  Comment: UK CAA ISA +10 went with 175kt\r
- Name: Yulia\r
  Comment: Czech CAA, only OAT was different, correct answer was 174 kts\r
- Name: HullCity\r
  Comment: 172\r
- Name: Raul\r
  Comment: SENASA 12/4/23, but ISA +10 and the correct answer was 175kt\r
- Name: LAWRENCE\r
  Comment: If you are getting 175kt, you have worked out what ISA is at 9000' but not taken off the 10 degrees below ISA.\r
- Name: TomTab\r
  Comment: The same in Slovakia but ISA was +10 and correct answer 170kt\r
- Name: bqwertz\r
  Comment: Hungary: The same thing with ISA+10, and the correct answer is 175\r
- Name: Joshua\r
  Comment: SEEN SPAIN, SENASA @ BFS, but same as @risman, OAT ISA+10\r
- Name: Risman\r
  Comment: UKCAA 08/11/2022\r
But the temperature was ISA +10\r
makes it 175kts i guess :)\r
- Name: ATPL QUESTIONS\r
  Comment: @Alberto, it should be -13 degrees.\r
- Name: ALBERTO\r
  Comment: Why the example states "OAT +13 degrees Celsius" when they are actually drawing the line from -13 degrees?\r
- Name: Lorenzo\r
  Comment: TODAY SENASA SPAIN igualita bro 04/07/22 ;)\r
- Name: Tomas\r
  Comment: In Czech CAA, only ISA was +10\r
\r
Question Number: AT00075\r
- Name: Said1\r
  Comment: same mass and balance\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Said1, thank you for your feedback. We have copied this question to the Mass and Balance database: 313251. Please mark the authority from the “Exam Questions” tab in that question.\r
- Name: CaptainMarius\r
  Comment: The allowed take-off mass is the lowest of\r
MSTOM\r
PLTOM\r
MSLM+TRIP FUEL=\r
PLTOM+TRIP FUEL\r
MZFM+TOF(NOT USED for extra fuel calculations)\r
regulated take-off mass (rtom) is the lowest of the "performance limited" tom and "structural limited" tom.\r
after calculate the actual take off mass\r
then subtract from the allowed take off mass the actual take off mass and check how much extra weight(fuel in this case)we can take\r
if tank capacity is given check against that and chose the lowest most restricting value between them.\r
- Name: Ianmchale\r
  Comment: With extra fuel Qs always check tank capacity\r
- Name: nickname1\r
  Comment: EXTRA FUEL => check TANK CAPACITY !!\r
\r
Some reinforcement here.. just to hammer the point home..\r
\r
EXTRA FUEL => check TANK CAPACITY !!\r
EXTRA FUel => check tank capacity !!\r
extra fuel => check tank capacity !!\r
- Name: deltaalpha\r
  Comment: 4 minute calculation to see at the end that min block is the same as capacity. ARGWHH.\r
Hopefully I was not the only one wasting a bit of time here\r
- Name: PilotDave\r
  Comment: Seen UK CAA 11/03/24.\r
Answers were slightly different in that one option was 240kg, corresponding to the taxi fuel.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @PilotDave. We have updated one of the options accordingly. Thank you for your valuable feedback.\r
- Name: Pipinho\r
  Comment: Flight Planning is the subject that I find that if you are extremely lucky with the type of questions that pop up on your exam you may get a great grade but if it appears thouse 3 questions that you simply cant understand your screewd. This is one of the questions I'm praying to be in my exam.\r
- Name: Murat\r
  Comment: Seen today in Germany with min block fuel being well below max tank capacity, so I calculated something around 4991. hope thats correct\r
- Name: MaxterPilot\r
  Comment: Fuel tank Capacity = minimum block fuel\r
\r
No extra possible.\r
- Name: Ales\r
  Comment: Ah, first check tank capacity.\r
- Name: JoshieW\r
  Comment: Seen today UK CAA 31/10/22\r
\r
Probably had different numbers but Fuel Tank Capacity 16000kg and Minimum Block Fuel 16000kg were the same, which meant no extra fuel could be uplifted. Luckily spotted it before I wasted time trying to work it out!\r
- Name: IRENE\r
  Comment: when min block fuel is the same as max tank cty, no more extra fuel can be added\r
\r
Question Number: AT00076\r
- Name: pdaubin\r
  Comment: Hello, got yesterday a similar question but with a huge trap. The he cruise leg was in NAM without any clue about it.\r
We had to convert it to NGM and then do the calculation as in the question. There was also a lot parts of the trip to add to get the final result.\r
The question was asking for time between destination and alternate.\r
I don't remember the figure but the different steps were misse approach, cruise leg (in NGM but not mentioned, just XXX NM" ), descent, holding expected, approach and landing.\r
In the answers, 2 answers were possible one using NGM, one using NAM.\r
As the question was worth 2 points, I figured they wanted NAM to NGM because I had a similar question worth 1 point with only one possible answer using NGM like here.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @pdaubin, thanks so much for the feedback! If anyone else comes across this question, we’d really appreciate you letting us know so we can double-check the wording and make any needed updates. Thanks!\r
- Name: Karlvajs\r
  Comment: Exact answers and data today in Slovenia CAA exam.\r
- Name: Jamie\r
  Comment: - Had a similar question yesterday UK CAA - answer was 2 hours 29 minutes, with different figures, I think the question had a tailwind rather than a headwind. Might be worth trying to create a new question with this information.\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Jamie, thank you for your feedback. There is a different version of this question with a tailwind, question 334477. Please compare it with the one you encountered in the official exam.\r
- Name: zeymahse\r
  Comment: The moment when you convert FL380 into a GS of 355kt\r
- Name: Fucxity\r
  Comment: That moment when you forget to convert tas to g/s\r
- Name: Pameer\r
  Comment: I thought the trap was cruise leg distance as in NAM to convert to NGM and work out time. The sad thing is if you do this you will get one of the wrong answers.\r
- Name: Sol\r
  Comment: Seen today Austro Similar, one of the options was 2hr 42min\r
- Name: JoaoD\r
  Comment: @Caio they already give you the headwind , so you know the ground speed without using the crp5\r
(But its always good to double check)\r
- Name: Martim0522\r
  Comment: This was my last question from my last Austrocontrol exam today. Probably last time that I will be here .\r
\r
I am here to thank all of you for your comments and mnemonics. Good luck for you all guys. Remember, Trust the Process.\r
- Name: Jordii\r
  Comment: This is so simple, I was looking for a trap. Once you do GNAV this is free points\r
- Name: CarlosPL\r
  Comment: Senasa Spain today. Same concept but I think they changed some figures. I ended with 2h 29' and it was one of the possible options. I dont know if i got the question correct\r
- Name: Nader\r
  Comment: if you have already passed G-NAV then questions like this are gonna be a walk in the park for you .\r
- Name: Zvanok\r
  Comment: you don't need FL , you don't need Temp.\r
- Name: Calin\r
  Comment: @Lorenz, usually when they write it NM it is the equivalent of NGM. Whenever they wanna imply talking about nautical air miles, they will be using NAM.\r
- Name: Lorenz\r
  Comment: Might be a stupid question but how do we know if 740 is NAM or NGM?\r
- Name: Clement\r
  Comment: Seen in DGAC France word for word\r
- Name: Mohammed\r
  Comment: New syllables Austro control, I got same idea today but didnt give me Tail or Head wind just gave me the wind direction and speed.\r
- Name: AirBorne90\r
  Comment: VFR FL380?\r
- Name: Antoine\r
  Comment: Too much useless data -> to confuse you\r
- Name: Andrea\r
  Comment: T = D/V\r
\r
460 TAS - 25kt HWC = 435 kt GS\r
\r
740NM / 435kt = 1h42min\r
\r
+30 mins + 22 mins = 2h34\r
- Name: Sam\r
  Comment: Dont touch the temp.\r
\r
Just find the groundspeed: 740nm cruise / 435kt gs = 1 hr 42min + 52min (for climb & descent) = 2hr 34mins\r
- Name: Chris\r
  Comment: *Ave* headwind is given, so there's no calc to do on the CRP. We have a TAS, so the temp is a red herring as well.\r
TAS - Headwind = GS.\r
740/435kt = 1:42 + 0:30 + 0:22 = 2:34.\r
- Name: KarolS\r
  Comment: the temperature correction is here just to confuse us... It would be useful were we given CAS to convert. TAS is ready for GS calculation...\r
\r
Question Number: AT00077\r
- Name: SASunderland\r
  Comment: A Lat/Long would have been useful here\r
- Name: LBurn04\r
  Comment: If you just total the distance between BTA and Xopta since the track is the same anyway = 18nm\r
Speed is GS 150kts (Use CRP-5 or cos(5)x20 = 20kt HW) - this wont change because we're following the same track\r
D/S = T so 18/150 = 7mins\r
Total the distances = 123nm\r
Total the times = 57 minutes\r
- Name: ATPL QUESTIONS\r
  Comment: @Anezka Thank you for your feedback! Your question has been added to the database as question number 338304.\r
- Name: Anezka\r
  Comment: Another question from E(LO) 13 today in IAA. You are flying from Elba LBA to Bastia BTA. Whom and when do you contact for authorisation if it hasnt been provided yet? (Different wording but something like that)\r
I chose an answer Marseille 130.955 AT or BEFORE wpt Moule. - not sure if its correct\r
Another option was mentioning Xopta waypoint and another one stated when at BTA. Some options provided different frequencies from the charts. Sorry for not remembering more details.\r
- Name: George737\r
  Comment: The 2 missing waypoints to calculate it s on the same direction as the last calculated waypoint given by the problem and same wind direction so it s same ground speed .Only look on the chart the distance and only calculation the time that it will take. don t waste time\r
- Name: MatteoFlyby\r
  Comment: @Chilton it is in the second annex from ELB to LIRJ in the box Distance (NM)\r
- Name: miguel\r
  Comment: Just add 13 and 5 nm to the chart = 123nm. Done\r
- Name: Chilton\r
  Comment: Guys where is the 8 to make it up to 123NM?\r
- Name: KermitTheSnitch6\r
  Comment: I just can't do these, anything yellow is no\r
- Name: CymruT\r
  Comment: Austro Spain 30/07/2024 - New question with this annex asking which frequency to contact when travelling from ELB > MOULE > BTA > SODRI. One of the answers was at or before MOULE contact Marseille 130.955. Cant remember the others as they were really long.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @CymruT, thank you for your valuable feedback! If anyone else encounters a question similar to what CymruT described, please share as many details as you can remember. This will help us create a new and accurate question. Thank you!\r
- Name: Pimparevic\r
  Comment: please refer to @Aviator07 comment\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Pimparevic. As we mentioned in our previous response, we have added a new question referring to @Aviator07's comment. Please check question 335297.\r
- Name: CymruT\r
  Comment: CharlieBravo\r
BTA -> MOULE = 13nm\r
MOULE -> XOPTA = 5nm\r
13+5+9+29+35+24+8 = 123nm\r
- Name: CharlieBravo\r
  Comment: From where do you get 123 nm total miles in the maps are 106nm\r
- Name: Ryan1\r
  Comment: Bottom left corner of chart.\r
- Name: BausorJR\r
  Comment: UK CAA, Coordinates given\r
- Name: GuernseyGeezer\r
  Comment: How are we meant to find the airfields?\r
- Name: Leonardo\r
  Comment: Just find the distance, half of the work\r
- Name: James62\r
  Comment: UK CAA 8/4/24 - Same values, type in\r
Hardest thing was actually finding the route on the chart\r
- Name: Aviator07\r
  Comment: There was another question in Romania today, which i can not find in database. It was about tankering with annex. Fuel cost at departure 0,77$, at destination 0,87$. Planned Take-off weight 51000 kg, Max take off weight 61800 kg. Max tankering ? I only remember 2 options which were 2500kg and 10800 kg.\r
Good luck everybody\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Aviator07, thank you for your feedback! We have just added a new question based on the info you shared: 335297.\r
- Name: Aviator07\r
  Comment: Seen today In Romania. One of the options was 96 NM. All others were same as here. Good Luck everyone\r
- Name: ArbreMagique\r
  Comment: it's very pleasant to work with good quality pictures, it makes it a bit more easier especially after bad quality pictures and long tricky questions..\r
- Name: Bimo18\r
  Comment: There's a typo in the navlog, departure AD should be LFKJ instead of LKFJ\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Bimo18. We have rectified the typo in the annex. Thank you for your valuable feedback.\r
- Name: DerMarsi\r
  Comment: @Denis the 41 in this "Diamond" shaped box indicates the Distance for the whole airway between ELB and BTA.\r
- Name: Denis\r
  Comment: How to calculate the distance? Ive got 29+35+13+5+24.\r
Why did they use 41 instead of 24? If the route between Elba and xopta is shorter than LIBLO to BTA, how can it be 41nm?\r
- Name: Michael993\r
  Comment: If it is 75 (M), why it has been written 74 (M) on the chart?\r
- Name: JoaoD\r
  Comment: @Andrea , something like this -> 338862 ?\r
- Name: Andrea\r
  Comment: Seen in Austro but with a complete OFP where there was departure time and was required to fill in the missing gaps with all the data given and fine the PLANNED time of arrival. A lot infos but simply subtract ETA and Departure both given\r
- Name: Benjamin\r
  Comment: Seen in Norway 11.23. ATPLH. Was not the entire question, it was basically cut in half with same answers.\r
- Name: Benjamin\r
  Comment: Saw alot of questions from ELO 13 in my exam in Norway 10.23.\r
- Name: Jamie\r
  Comment: Shouldn't the question contain coordinates of the airfields in question?\r
- Name: easadepression\r
  Comment: No need to calculate track, groundspeed and time. Just look up the distance between these points on the chart and add them with other distances, only one answer has 123 NM.\r
- Name: BorgirBaka\r
  Comment: Fully agree with @Daniel. Only one answer with the correct Dist (123NM), all the rest are not even close, and you are not measuring anything so there is no error margin. 123NM and move on !\r
- Name: DanieleRome\r
  Comment: It would be really helpful if you could put a picture of the crp5 With the calculation when you do it. We use ATPL also to study and this would help a lot. It's too complicated otherwise.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Fran, that's been corrected, thanks for letting us know!\r
- Name: Daniel\r
  Comment: Just Look at the Distance in the Answers.. Quite far apart.. so just add all legs and you dont need to calculate anything else as 123 is given only once !! Save Time, Move On ! ;-) Good Luck everyone :-)\r
\r
Question Number: AT00078\r
- Name: Tecnam\r
  Comment: I see mast - I press mast\r
- Name: AbzHat123\r
  Comment: UK CAA 23/06 exact same question. If u see balingen mast just click it\r
- Name: RicardoLinterna\r
  Comment: What about the Gammertingeng intersection?\r
- Name: DrPilot\r
  Comment: @codfather You can not "rely" (as per theory) on EDSA airfield because it's a GRASS runway (green inside the blue circle), it could (AND WILL) blend with the terrain.\r
I've flown all my flight hours in the "country side" and quite often I found myself struggling to differentiate grass runways and fields.. I personally would have used the mast as it's high and easy to spot, or I'd have "diverted" up to the mast (3563') east of Besingen, north/west of EDSA.\r
- Name: codfather\r
  Comment: Why not the airfiled? Perfect location for turning and avoiding the restricted airspace, they ask which is a suitable point to start turning, not to fly towards. The way the question is built makes one thing that the aircraft departs straight from EDMC to EDTS and, somewhere along the way, we must find a suitable point to start a turn in order to avoid restricted airspace.\r
- Name: Ludwik\r
  Comment: does anyone know which answer is correct in Poland??\r
- Name: deltaalpha\r
  Comment: there is a space missing and the letter "e" at the end.\r
Right now in the question text, it is written "Schwenningen at Neckaraerodrom" but should be corrected to "Schwenningen at Neckar aerodrome" (with a space bewteen the word Schwenningen and the word aerodrome and an "e" at the end of the word aerodrome"\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @deltaalpha, thank you for your comment. We have rechecked the wording of the Schwenningen from the annex. Nothing to correct as it's already right.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @deltaalpha. We have deactivated question 334807. Thank you for your feedback.\r
- Name: Aarongo22\r
  Comment: when i see the balingen mast I will already be in the ED-R\r
- Name: kubarybaczyk\r
  Comment: Had this exact question today at polish ULC, I had seen it in the bank and noticed that people at ULC reported that mast is incorrect, because of that I chose Munsingen Eisberg Gliding Site as it seemed as the least wrong answer, but it turnd out to be incorrect\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @kubarybaczyk, thank you for your feedback. We've updated the "NOTE" in the explanation based on the information you shared. Please continue to provide feedback on this question. Thanks in advance.\r
- Name: mpilot2310\r
  Comment: If you turn at EDSA the problem is that you are flying in the restricted area or very very close by it. The mast is simply the best option\r
- Name: SkrrrrtPapa\r
  Comment: Dont understand why EDSA is incorrect. First of all it is an airport, secondly there is a massive mountain next to it. Its way closer to our track then mast. I feel like this whole VFR chapter is just based on guessing what examiner was thinking about.\r
- Name: kjaszi\r
  Comment: Poland ULC, 13.05.24\r
Answer with mast was wrong ;)\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @kjaszi, thank you for your feedback. We have added a note in the explanation section on this issue. Here it is;\r
"We received feedback from students who encountered this question in the Polish authorities that the current answer to this question is incorrect. The current answer is the one we believe to be most correct, therefore we also consider the possibility that they may have encountered one of the different versions of this question. So please send us anything you can remember from the exam via the comments, the feedback section of the website, or by email to info@atplquestions.com, thank you!"\r
- Name: gdtyrael1\r
  Comment: I've seen just a few questions where "mast" is not the right answer, so if in doubt, click mast.\r
- Name: Adolph\r
  Comment: Guys draw a line from EDMC to EDSA then from EDSA to EDTS.\r
Then do the same from EDMC to the mast to EDTS.\r
The question states that we want to go in the most DIRECT manner. You can clearly see that from EDSA to EDTS you will still pass through the restricted area if you follow the most direct manner. If you go to the mast, you will avoid that area.\r
Good luck!\r
- Name: PhilMcrackin\r
  Comment: You see mast, click mast\r
- Name: LuisDani\r
  Comment: its absolutly impossible that someone can pass this subject with 100%\r
- Name: WVG98\r
  Comment: It's always the tower/mast..\r
- Name: flyingaua\r
  Comment: Austro Vienna exactly the same 31.05.2023\r
- Name: Alberto\r
  Comment: Im not understanding this question, arent they asking what would be a suituble turning point from our direct route to like and offset but not really an offset because its VFR and we turn again to our original route, my first best visual turning point i would consider EDSA to turn right to then proceed to the Mast and turn left. Are they saying, that we fly direct to the mast and then turn??\r
- Name: Tiago\r
  Comment: The hardest on these questions is finding these unpronounceable places in such a cluttered chart.\r
- Name: bierf2122\r
  Comment: Just draw a line between your departure airport and the mast, then to the destination. You'll see that only flying ''through'' the mast ensures you don't violate the airspace in the rectangle. You might also prove yourself with the remainder turning points.\r
- Name: Ben\r
  Comment: UKCAA today. Had a question asking for the highest obstacle within 10nm of track between 2 aerofdromes. This was the answer. Type in. 2 marks\r
- Name: Dieter\r
  Comment: The famous Balingen mast : https://de.wikipedia.org/wiki/Fernmeldeturm_Plettenberg\r
- Name: Federico\r
  Comment: MAST IS A MUST ( not always )\r
- Name: Daniel\r
  Comment: @atplq pic in explanation would be neat to have\r
- Name: Flylindborg\r
  Comment: SENASA 15/07/22 - 2 points!!\r
- Name: Calin\r
  Comment: Clicking on "mast" is a must\r
- Name: Jonathan\r
  Comment: 17/05/22 - Austro - Exact Question\r
- Name: Jakub\r
  Comment: Wow EASA sure loves that Balingen mast :D gotta go checkitout one day\r
- Name: Fly\r
  Comment: when you see Balingen just click it.\r
- Name: Lorenzo\r
  Comment: its always Balingen mast. there is another question with the same answer. balingen\r
- Name: TKIharry\r
  Comment: what wrong with the EDSA airfield?\r
- Name: ATPL QUESTIONS\r
  Comment: EDSA might be a good landmark, however if you fly from EDSA to the destination, you'll fly through the restricted area\r
\r
Question Number: AT00079\r
- Name: Tecnam\r
  Comment: Or just use a protractor\r
- Name: Charliev\r
  Comment: seen Austrocontrol 29/07; Helicopter exam\r
- Name: taviabrudan\r
  Comment: Seen today, 17/07/25, in Austrocontrol. Check the chart legend. Good luck!\r
- Name: Cintra\r
  Comment: Correct me if im wrong, but from what I've learned:\r
\r
IFR charts themselves are still oriented to TRUE north, rather airways, radials, etc., are in MAGNETIC.\r
\r
In other words, when taking a bearing in reference to a meridian, you get true. When taking a bearing in reference to an airway or radial, you get magnetic.\r
- Name: Mariel\r
  Comment: Could you please explanation why the conversion is needed at all, since many students are already asking? Also, is "initial" referring to the chlong as it is in GNAV? The explanation is not that clear as it is.\r
- Name: ATPL QUESTIONS\r
  Comment: Hello all! There seems to be some confusion around this question, and charts in general which I will try to address.\r
Latitude and Longitude are referenced to Geographic or True North. Whenever we measure the angle between two points on a chart relative to a line of longitude, we are measuring the True Direction. This is true for the gridlines on every aeronautical chart (unless referenced to "grid North" but this is now outside the scope of ATPL Theory).\r
Airways are usually provided as Magnetic Headings. Similarly, the rose placed around VORs on charts is aligned to Magnetic North. On this chart, there is no rose OR airway to or from either NAVAID from which we can measure the angle. The best reference we have is a line of longitude (008ºW), which points to True North. There is, conveniently, a closeby Isogonal which gives us a fairly accurate idea of the variation from where we are measuring the heading.\r
Due to convergence (covered in General Navigation), the True Heading will be different at Keflavik. The variation will also be different at Keflavik. We are asked to determine the Magnetic Heading at Benbecula, so measure it here on the chart, and use the local variation. We could also measure this at Keflavik using the chart in the exact same manner - measure the angle against a local line of longitude and then apply the variation at that point.\r
As such, the current explanation is correct and provides the quickest and most accurate way to approach this question using the knowledge you should learn from Flight Planning only. I hope this is helpful!\r
- Name: zkjp48\r
  Comment: Can somebody explain why the varition. Arent these Magnetic charts anyway?\r
- Name: Arrow\r
  Comment: @MayorTom initial course is askes, so that's where take var\r
- Name: MayorTom\r
  Comment: So the huge 15 W crossing Keflavik ? We just ignore it , please of some one knows how to decide it please let me know for me looks very arbitrary from one question to another\r
- Name: Jchacon\r
  Comment: in the legend they are telling us that the grid bearing = TRUE bearing so this ifr chart is TRUE\r
- Name: SRR2024\r
  Comment: Austro today, answers like @vayasable reported\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @SRR2024. Thanks for the feedback! We've updated the available options based on the information shared by @ayasable. Many thanks to both of you!\r
- Name: Giamma\r
  Comment: @tomasao by using our plot on the chart, the number we get is automatically the true bearing. the matter you're referring to is the fact that that the heading given by the chart between two waypoints (not the one calculated by us) is magnetic.\r
- Name: Julez\r
  Comment: Chart states: Grid Bearing = True Bearing.\r
We want Magnetic Bearing.\r
-> CDMVT Rule (from T back to M)\r
West variation: from left to right "-" and opposite direction "+"\r
East variation: -> "+" and <- "-"\r
So we have to add the West variation.\r
\r
Hope it helps.\r
- Name: Walift\r
  Comment: Wrong explanation, its 317+05, not 320+5\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Walift, thank you for your feedback. We have rectified the typo in the explanation.\r
- Name: FlyingFIN\r
  Comment: I am looking at the airway UN610 (331 mag) Benbecula-Keflavik is a little less but not 10deg less\r
- Name: CalibrateTheAir\r
  Comment: This chart displays meridians aligned to true north, as we're positioned at high latitudes where a magnetic compass is unreliable. Refer to the chart legend for details. Keep going, guys!\r
- Name: vayasable\r
  Comment: ULC Poland 11/10/24. Given answers: 322(correct), 317, 302, 303.\r
- Name: Alex44\r
  Comment: @tomasao Check the box in the the right corner, it says: ' Grid Bearing= TRUE Bearing. I think they mean it here..\r
\r
I was confused too and got it wrong.\r
\r
Best Luck guys!\r
- Name: Slyuosmaz\r
  Comment: What if we measure INITIAL magnetic track and not like 50 nm along the route? Using the exact same instruments I have track of 319°. 319°+5°=324°. So I'm doing everything right and still this is not enough, EASA genius just want us to guess the answer..\r
- Name: zeymahse\r
  Comment: 320° + 005° = 322° ?? And there is also 327° among the answers.\r
- Name: tomasao\r
  Comment: Aren't this charts supposed to be magnetic? Im confused rn\r
- Name: NicoH\r
  Comment: can we appeal these?\r
\r
we must be 100% precise with the plotter since there are 2 trap answers regarding the conversion to magnetic\r
\r
Question Number: AT00080\r
- Name: DmitryLement\r
  Comment: Seen in CZ CAA 05/08/2025. Variation of the same question, but was given with all the fuel information in an Annex.\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @DmitryLement, thank you for your feedback. Please send a similar image by email to info@atplquestions.com. Thanks in advance!\r
- Name: Michiels177\r
  Comment: Saw exactly what @agusbin is describing in AUSTRO SPAIN. I cant find anything similar in the bank.\r
- Name: Muhammedkasem\r
  Comment: There is a clear contradiction between the two explanations regarding the calculation of additional fuel in CFS scenarios. The first question 338615 and its explanation state that only the smallest difference between CFS and OBF should be used, covering the nearest alternate only. However, this question requires the highest difference, covering all critical points. Unless the operational policy or the question specifically requires coverage of all critical scenarios, the correct application per EASA AMC1 CAT.OP.MPA.181 is to use the minimum required for the closest suitable alternate. Please clarify and ensure consistency.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Muhammedkasem.\r
Question 338615: Smallest difference between CFS and OBF\r
In this case, the question presents two alternate airport scenarios, but you are only required to plan for reaching one alternate, not both. So, to determine additional fuel, you only need to ensure you can reach the closer alternate.\r
Therefore, the correct method here is to take the smallest difference between the Off-Block Fuel (OBF) and the Critical Fuel Scenario (CFS), because that represents the least extra fuel needed to safely reach the required alternate.\r
Question 338327: Largest difference from multiple critical points (ETPs)\r
This question is different in nature. It involves two critical points (ETPs) along the route. Each ETP is assessed independently in terms of whether, at that specific point, you would have enough fuel to safely divert, hold, and land.\r
In this case, the correct approach is to calculate the required additional fuel at each ETP and then take the largest difference. Why? Because you don’t know at which point the emergency may occur, and you need to be prepared for the worst-case scenario.\r
I hope this makes sense!\r
- Name: Muhammedkasem\r
  Comment: There appears to be a clear contradiction in the way additional fuel is calculated between two q in the bank.\r
• In question 338615, the explanation specifically states that we should select the smallest difference between the Critical Fuel Scenario (CFS) and Off-Block Fuel (OBF), i.e., the minimum additional fuel required.\r
• However, in the question above, no such clarification is given, and the answer expects us to use the largest difference.\r
\r
Both q ask about the “additional fuel requirement” based on the OBF and CFS, but the application is inconsistent. Could you please clarify which method is correct and ensure consistency across the database?\r
\r
Thank you!\r
- Name: agusbin\r
  Comment: Saw a question similar to this concept but it was embedded within a flight plan and initially was not sure what they were expecting form me until I associated the concepts with this type of q.\r
- Name: Danimira05\r
  Comment: Imagine it in this way guys. If you are flying over the ocean and you are approaching your last ETP before leaving the ETOPS area, you may need less fuel to reach your destination than the last alternate airport. So if you need to divert to the alternate just before the last ETP you will not be able to reach it without using your final res\r
- Name: Inesvctr\r
  Comment: LBA but with annex\r
- Name: Panecas\r
  Comment: Seen Austro Control Portugal 30/06/25 slight reworded, with an annex showing 2 FOB's and 2 CFS's, right answear was the biggest difference, if i remember correctly was 154 kg\r
- Name: Kristyy\r
  Comment: Seen in Norway 17th June 2025, but the question contained an annex with a flight plan detaining fuel amounts.\r
- Name: ATPL QUESTIONS\r
  Comment: Hey everyone, thanks for the feedback! Unfortunately, we don’t have a figure like the one appearing in exams, nor enough details to recreate it yet. Please keep sharing any information you have so we can gather enough to develop an annex. Thanks a lot!\r
- Name: tims04\r
  Comment: Today at LBA with different numbers found in an annex\r
- Name: JudiRak\r
  Comment: Luxembourg different numbers that had to be found in an annex (OFP)\r
Principle remains the same, go for the largest difference.\r
- Name: Fmaiate\r
  Comment: Hey , I had this question today, the exactly values were ETP1 8619 CFS 8692, and ETP2 7706 CFS 8004, The options were A 73, B 298, C 8 thousand and something , D 8 thousand and somenthing , Correct option 298, the question state that a Cat A A/C would flight with low mass (or something like) and at high alt with an ERA (not relevant) and than asked about the add fuel and to pay particular attention to CFS, they also gave a Flight plain whith ETP 1 , 2 and the fuel requir. For the trip, with taxi, contig etc, like in the question 338109 but in the upper part the ETP infos\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Fmaiate. Thanks for the feedback! If anyone else has more details about the question Fmaiate is referring to, we’d really appreciate it if you could share them. Thanks again!\r
- Name: joaomsilval\r
  Comment: Got similar to what was described bellow. An annex with two scenarios, In the 8000 kgs ETP and then the CFS. Option were 298, 74, and the values of the ETP. Correct one 298\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @joaomsilval, thanks for the feedback! If anyone else comes across a similar question to the one described by joaomsilval, please let us know along with as many details as possible so that we may create a new question. Thanks!\r
- Name: Gatzmo\r
  Comment: Had a similiar question @wfouere Describes at Austro today. You had an annex with the ETPs and CfS fuel. Dont remember the exact numbers. The only answers that made Sense wre 116kg and 154 kg. Chose 154kg.\r
- Name: FlorianP\r
  Comment: i had the same version of the question as @wfouere stated in my austro exam yesterday.\r
- Name: wfouere\r
  Comment: Had this question in AUSTRO today. It uses the same annex as another new question, but if you know the concept of finding the FOB and CFS it's free points. Just look at the top of the Annex (Flight Log), there will be two lines with ETP1 and ETP2. Options are like 8300 - 8000, around those numbers. Largest and correct answer for me was 278 or 298 can't remember, other option was 70 something which is wrong. But the annex does say it's a CRITICAL FUEL calculation regarding additional fuel so it's hard to miss :)\r
- Name: Paulepecheur\r
  Comment: I got this question today in austrocontrol, but the number were on the flight/fuel log. So be carefull to find correctly the information ! Good lucl guys !\r
- Name: manflex68\r
  Comment: A new question at LBA yesterday. An OFP fuel page was provided as an annex and you had to determine how much additional fuel has to be added based on CFS. I found two paragraphs about two alternates and at the end for each alternate two values were provided: something like fuel required and CFS. The same concept basically. I calculated the difference between those 2 two pairs (112 kg and 152 kg) and took the highest number, something like 152 was the answer if I'm not mistaken.\r
- Name: Artyfalse\r
  Comment: Different numbers in Norway, answers were 116 and 156, went for 156, also data was in the annex, sadly can't provide info on annex\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Artyfalse, thank you for your feedback! If anyone else comes across a similar question to the one described by Artyfalse, please let us know, along with as many details as you can remember, so we can create a new question. Many thanks!\r
- Name: Fabio261\r
  Comment: Had this question on my exam but with annex\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Fabio261, thank you for your feedback. We would appreciate it if you or anyone who encountered the question you stated could send a similar annex by e-mail to info@atplquestions.com. Thanks in advance!\r
- Name: Weiszs\r
  Comment: I was referring to the two difference values at ETP1 and ETP2. Of course the higher value was the correct one.\r
- Name: Weiszs\r
  Comment: Values were something like 34kg and 249kg\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Weiszs. Are you referring to the available options? Was the current correct answer also available in your exam? Thanks!\r
- Name: Weiszs\r
  Comment: Today Austro Vienna - as others said, the information was in an annex in the top part\r
- Name: Isotope\r
  Comment: Austro Spain 14/04/25 similar q but values were provided in a OFP annex with FOB lower than CFS at the top of the OFP\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Isotope, thanks for letting us know! If anyone else comes across this question in their exam, please let us know. Many thanks!\r
- Name: michaels\r
  Comment: Austro Vienna\r
As others have stated, the ETP and CF appear in an annex. It is a flight plan (one of those operator-generated text-based flight plans). The ETP and and CF are towards the top of the flight plan, each "burried" towards the bottom of a 3-4 line block of text. The question text only asked about the additional fuel based on the flight plan.\r
- Name: antonioro\r
  Comment: ENAC Milan today. The numbers were inserted into an annex. I wish the best to the student who underlined them before me, thx bro\r
- Name: sosokress\r
  Comment: Similar question today with a flight plan and information on two ETPs and FOBs\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @sosokress, thank you for your feedback. We appreciate it if anyone who has encountered the question you stated could provide more detailed information. Thanks in advance.\r
- Name: Vittorio\r
  Comment: Very similar in enac italy today but with an annex\r
- Name: martinc\r
  Comment: Austrocontrol, same as the rest of the comments. It was reworded and came with an OFP annex. It talked about a long haul flight to EIDW with very little payload, I believe that with those exact numbers.\r
- Name: ATPL QUESTIONS\r
  Comment: Hey everyone, thanks for your feedback! We don’t have enough information to accurately recreate the annex for this question. If anyone has access to a similar annex from the exam, please share it with us so we can update the question to better match the official version. Thanks!\r
- Name: AnneCat\r
  Comment: Same in LUX, came with an annex\r
- Name: Thomasoro\r
  Comment: seen IN IAA rewritten Different values given lots of information\r
But the CFS and FOB were kinda written up top So you had to really examine it\r
with numbers like ETP2 7715 to 8004 289 ( correct answer 289!!\r
cannot remember etp1 but the answer to it was 73\r
All the best!\r
- Name: Arkady\r
  Comment: LBA Yesterday. Complete flight plan annex. Looked awful but they gave you the hint to look at FOB for ETP\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Arkady, thank you for your feedback. We appreciate it if anyone who has encountered the question you stated could provide more detailed information. Thanks in advance.\r
- Name: AlexPopescu\r
  Comment: Similar to @Tatiana, in Austro Vienna today. Annex of a FPL\r
- Name: Tatiana\r
  Comment: Had this one today, it was given in the annex looking like flight plan or something like that, just had to find FOB CFS and do the calculations like here. Numbers were different too\r
- Name: Justus1\r
  Comment: Austro Vienna today, slightly changed values and you had a complete fuel scheme were you had to find it\r
- Name: Marcolino\r
  Comment: ENAC Italy today. Much more words with even the fuel planning scheme\r
- Name: omarr\r
  Comment: *critical* more fuel, highest difference.\r
- Name: nicolashaulotte\r
  Comment: Had this kind of question yesterday, they asked about the 2 alternates so it was the smallest difference and you received an annex and had to find the FOB and CFS numbers\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @nicolashaulotte, thank you for sharing your feedback! If anyone else has additional insights regarding the question Nicolashaulotte mentioned, please feel free to share. This will help us gather enough details to develop a new and improved question. Thanks in advance!\r
- Name: LiamL\r
  Comment: Seen Austro UK today, but the question gave a flight plan with the EPT 1/2 detailed\r
- Name: CarloRomaFlyPe\r
  Comment: @Luke6 you are great how do you know this thing\r
- Name: ATPL QUESTIONS\r
  Comment: @DPERD @Luke6 has explained it very well. In Q338615, there are 2 alternates and each one has 1 CFS. Since we are only required by law to reach one alternate, we only have to have enough fuel for one of the CFS. This is why in Q338615, you choose the smallest difference between CFS and OBF.\r
In Q338327, you only have 1 alternate aerodrome. Along this route, there are 2 CFS so you must have enough fuel for both CFS to ensure that you can make the alternate aerodrome safely. As such you must take the larger difference to cover for both CFS.\r
- Name: DPERD\r
  Comment: This sais the opposite than Q338615, please clarify.\r
- Name: Luke6\r
  Comment: Hi all, I tried to find the difference between the two similar questions in the bank and might've found something:\r
\r
Q338615 - "2 Alternates & smallest difference\r
\r
This question states that we have 2 alternates whereas the legal requirement is only 1.\r
This means that you can take the smallest value corresponding to the closest alternate aerodrome to your route based on the legal requirement (and possibly use that extra gain of mass for other reasons such as more passengers, bags, etc)\r
\r
Q338327 - "2 Critical Points" & larger difference\r
\r
This question is similar but has one major difference which is that we consider 2 CRITICAL points along our route for only 1 alternate aerodrome (as opposed to 2 in the previous question).\r
Critical points indicate how much fuel you would need in different scenarios if you were faced with an emergency scenario. Here we have 2 of these, thus if we were to face any of the two, we would prefer to face the worst-case scenario in which you would need the most fuel and take the largest difference between the 2 values.\r
\r
That's how I see the way to resolve these 2 questions and hopefully, it helps!\r
- Name: Airbus380\r
  Comment: I too ask the same question why is it the higher value in this instance ?\r
- Name: TlTTENNUCKLER007\r
  Comment: Shouldnt it be the smaller difference? As stated in Q338615?\r
\r
Also today LBA, but with different values and the values were given in an Annex. Cant remember the exact values.\r
\r
Question Number: AT00081\r
- Name: NurlanB747\r
  Comment: they ask DME and only one answer have DME frequency\r
- Name: ErezBM\r
  Comment: @Fercrema use the [+] button\r
- Name: Fercrema\r
  Comment: Only charts on the explanation has good image quality, is that on purpose?\r
- Name: RotorRider\r
  Comment: 111.4 FRO DME (Distance Measuring Equipment) its meant to find ranges "slant ranges"\r
- Name: SufferingATPL\r
  Comment: Spend 5 minutes trying to find a point they deliberately tucked in the bottom corner, only to immediately get the answer once I found it. What a joke\r
- Name: Samandar\r
  Comment: 111.4 in EASA maps corresponds only to DME, they are looking for range so the only correct left answer is 111,4\r
- Name: Vafut\r
  Comment: 326 is NDB\r
- Name: whychangenick\r
  Comment: Honestly i dont get it. 111.4 Mhz is for VOR. Frequency band of DME is 962-1213 Mhz. So how on earth 111.4 Mhz now became DME frequency. Can someone explain?\r
- Name: FabiooOooooo\r
  Comment: where's wally?\r
- Name: Thomas\r
  Comment: Seen in Sweden 22/04/23.\r
- Name: Joel\r
  Comment: Seen UK CAA. 27/02/2023\r
- Name: Jonathan\r
  Comment: 17/05/22 - Austro - Exact Question\r
- Name: Paul\r
  Comment: Channel 51 isn't a DME frequency, 326 khz is an NDB, 123.67 is an AFIS (even says it in the answer), leaves you with only one option. No need to look at the chart.\r
- Name: Tarik\r
  Comment: Austro 18/11/21\r
- Name: Mr calculator\r
  Comment: my eyes are hurting\r
- Name: Louis\r
  Comment: Austro Control (Spain) 23/10/2020\r
- Name: Charlotte\r
  Comment: you had all the map to choose from..\r
- Name: Dave\r
  Comment: 111.4 botton right on the map\r
\r
Question Number: AT00082\r
- Name: MayorTom\r
  Comment: @ikount. In austro it is allowed\r
- Name: ikount\r
  Comment: Question: is the GSPRM allowed in flight planning subject?\r
- Name: Jacke44\r
  Comment: UK CAA - I has this question but it was asking what W is.\r
- Name: Julia25\r
  Comment: The flight plan questions can be answered by using the "Air Traffic Control" section in the Jeppesen\r
- Name: SierraLima\r
  Comment: @cptmario97 you can find these answers in the Jeppesen manual, ATC Part\r
- Name: cptmario97\r
  Comment: guys someone knows if they give us these annex too during the exams?\r
- Name: Elia\r
  Comment: Similar question in austro, just asking the meaning of M in field 9 (medium wake turb cat)\r
- Name: Zariff\r
  Comment: Are we supposed to be challenged?\r
- Name: N4318D\r
  Comment: Senasa Madrid word for word\r
- Name: Luca\r
  Comment: Does these type of questions appear with equipment and capabilities annexes in official exams? Would be helpful, thanks..\r
- Name: Jakub\r
  Comment: one of the annexes is missing..\r
\r
Question Number: AT00083\r
- Name: Christopher\r
  Comment: Had this one in austro one week ago, but they were asking for EDPS and EDMW, still same answer 3754ft\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Christopher. We have added a new question based on the information you've shared: 338096. Thank you for your feedback.\r
- Name: Toaster\r
  Comment: Same austro today but different airports, lowl and another I can't remember. Gives you the highest obstacles in AMSL, it was 2900 something. Airport was north of lowl anyway almost on the longitude\r
- Name: SufferingATPL\r
  Comment: I'm fairly certain that if you have a Pooley's ruler it's with is 10nm on ED-4 so going off tthe centre line gives you 5nm either side.\r
- Name: SirBeamish\r
  Comment: https://www.google.com/maps/place/Aussichtsturm+am+Brotjacklriegel/@48.8172144,13.2160845,3a,75y/data=!3m8!1e2!3m6!1sAF1QipMdRzNC4lUwFa1qRZP1zuIMjQZQ6QLeW8jDOpsA!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMdRzNC4lUwFa1qRZP1zuIMjQZQ6QLeW8jDOpsA%3Dw203-h360-k-no!7i2268!8i4032!4m18!1m8!3m7!1s0x47751dd02547d791:0x41d25a40937bdc0!2sSch%C3%B6fweg,+Germany!3b1!8m2!3d48.8389352!4d13.2300166!16s%2Fm%2F02q372r!3m8!1s0x47751c4d6d1a6931:0x75180191931dae57!8m2!3d48.8172144!4d13.2160845!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1q5bn3nc4?entry=ttu\r
- Name: maricel\r
  Comment: Seen in spain 28/10/22 same answer\r
- Name: Clement\r
  Comment: Seen in DGAC France word for word\r
- Name: Marek\r
  Comment: @Mohammed 7200ft is GRID MORA, an altitude which provides clearance from the obstacles and terrain within a marked area by four "+", so it is not an obstacle. Keep in mind that for VFR it is just a recommendation and you should use classic terrain clearance (city 1000ft AGL 600m from acft / otherwise 500ft 150m from acft)\r
\r
Question Number: AT00084\r
- Name: boeing757\r
  Comment: to avoid confusion you should add the last sentence of 333313 to this question\r
- Name: Momo86\r
  Comment: As I see it\r
162/60=2,7 HDW 10 kt 2,7x10=27\r
188/60=3,13 HDW 25 kt 3,13x25=78,25\r
78,25-27=51,25 ~47\r
- Name: Natterjacktoad\r
  Comment: um excuse me, they never asked for forecast vs actual. Should be using 25kt HW for both parts.. ~Sincerely, NatterjackToad\r
- Name: boeing757\r
  Comment: the question wants you to compare the planned fuel flow versus the actual fuel flow, in the planning stage you have only the forecasted wind, for this reason, I think that they use the forecasted wind, correct me if I am wrong\r
- Name: bluefield\r
  Comment: Distance 166 NM\r
Planned: TAS 130 GS 120 FF 162 Kg/hr Dist/ GS = 1.383 hr Fuel Consumed = 1.383 x 162 = 224\r
Actual: TAS 140 GS 115 FF 188 Kg/hr Dist/ GS = 1.443 hr Fuel Consumed = 1.443 x 188 = 271\r
Difference 47 Kg :)\r
- Name: BravoTango\r
  Comment: Awful wording for this one -> it is not clear whether we have to use forecast or actual wind conditions for the first part in the calculation, missleading :(\r
- Name: Nmaca64\r
  Comment: They didn't ask for the actual versus planned, they asked how much extra fuel you burn at 140 knots for the actual leg. so 15 is the answer. Wrongly worded Q if it appears this way\r
- Name: Leoxiao\r
  Comment: Am I wrong or if I fly 86 min ( 1h 26 at 188 kg/ hr, my consumption is of 269 not 271 kg )\r
- Name: Yorick311\r
  Comment: @Cano they talk about forecast and actual, they want to know the difference so logically you determine the difference between the actual and forecast fuel that is used rather than comparing only the actual situation.\r
- Name: Bigsrockt\r
  Comment: for this kind of questions, how can we be sure that we don't need to convert to NAM first? Thanks for your help! :-)\r
- Name: Cano2020\r
  Comment: it should be actual 15 kg, instead of 47, they are asking us for the new Fuel with 140 kt of TAS, so if we would fly with 130 kt we would still have a HWC of 25 kt, therefore our GS will be 105.\r
\r
So 166NM / 105 kt = 1,58 h x 162 kg/h = 256 kg\r
166 NM / 115 = 1,44h x 188 = 271 kg\r
a increase of 15 kg\r
- Name: YounesSebbouba\r
  Comment: @Ranieri, more simple way for me :\r
\r
Planned TAS : 130 kts\r
Planned HWC : -10kts\r
FF @ 130kts = 162 kg /h\r
\r
--> Time = Distance / Speed\r
\r
Planned TAS to Planned GS : 130 - 10 = 120\r
\r
Time = 166 / 120 = 1.38 at this point no need to convert anything just continue working as :\r
\r
FF = 162kg/h so fuel needed for 166 nm = 162 x 1.38 = 223.56\r
\r
Now, we'll work the actual TAS and Forecast :\r
\r
GS : 140 kts - 25 kts = 115\r
T = 166/115 = 1.44\r
FF @ 140 TAS = 188\r
188 x 1.44 = 270.72\r
\r
Additional fuel required : 270.72 - 223.5 = 47.22 Kg\r
- Name: Ranieri\r
  Comment: forecast:\r
tas= 130kt-> ff= 162 kg/h -> 2,7 kg/ min\r
forecast wind= 10head wind -> gs= 130-10= 120kt\r
to cover 166nm with gs of 120 we need:\r
166nm/120kt= 1h 23min, which is equal to 80min. so forecast fuel is:\r
80x2.7= 224,1 kg\r
\r
actual:\r
but the actual wind is different, so:\r
to compensate we fly at 140 tas\r
tas= 140kt-> ff= 188 kg/h -> 3,13 kg/min\r
with actual wind of 25 kt head wind.\r
tas-head wind=gs -> 140-25= 115 kt\r
to cover the same distance(166nm) at 115 kt we need:\r
166/115= 1h 26min which is equal to 86min\r
fo actual consume fuel is:\r
86x3,13= 269,18kg\r
\r
we just find the difference btw the forecast consume fuel to actual consume fuel which is:\r
\r
269,18-224,1= 45,08 kg more\r
- Name: FliegenderHollaender\r
  Comment: German guy here.. as Witryna stated he has no option to appeal, same with me, we can only write comments or suggestions when sitting in an exam session at LBA.\r
\r
Now I wonder out of curiosity; do other countrys have an explicit option to appeal a question? And do you get results of your exams where each question is clearly stated as correctly answered or incorrectly? Because I don't.\r
- Name: Witryna\r
  Comment: They should specific to which wind we should compare. Actually we burn 15 more kg than with 130TAS. Of course in my country there is not such thing as appeal but i would try anyway\r
- Name: Iiro\r
  Comment: I agree with @Caspar\r
- Name: Caspar\r
  Comment: @ATPLQ: Why Do you use the forecasted wind? It doesnt exist, so to determine the actual difference shouldnt we use the 25 for both TAS? And if not the question is to unspecific, I would appeal\r
- Name: ATPL QUESTIONS\r
  Comment: @Caspar, When we are planning we only have the forecasted wind data.\r
\r
Question Number: AT00085\r
- Name: Mihailalexandris\r
  Comment: I did 17000 - 16200 - 2000 = 2800 ft then do - Pressure Correction - Temp Correction = result\r
- Name: Fmaiate\r
  Comment: If I face some question like that I would appeal since the altimeter reported cant be accompanied by .25, its always given 1000 or 1001, never with the decimals just check the explanation of question 502020 - QNH is always a whole number, without any decimal places, and is always rounded down.\r
Please uestion correct it. Or at least put some note saying that the question was based on feedbacks etc ..\r
- Name: ATPL QUESTIONS\r
  Comment: "Hi @Fmaiate, you raise a valid point. That said, I’d recommend approaching the question using the information provided, without overanalyzing it. Just a suggestion\r
- Name: Andrew1406\r
  Comment: Grid area provide 2000 ft above highest otacle.\r
- Name: Monto\r
  Comment: You say "For simplification: Height correction for the temp = 4 (ISA DEV) Indicated alt/1000 = __ ft" but you calculate it from flight level number 17000 (pressure altitude). Which is correct? Shouldn't you first take QNH in to account and calculate ISA deviation + temperature deviation from that number?\r
- Name: zeymahse\r
  Comment: @ebek32 The clearance is already accounted for in the 16'200ft altitude. What the question is asking is the TRUE HEIGHT ABOVE THE OBSTACLE, thus, you have to subtract the 2'000ft clearance from the 16'200ft to obtain the TRUE height of the obstacle.\r
- Name: ebek32\r
  Comment: Calculate as per usual using provided values.\r
ADD 2000 clearance at the end.\r
Don't overcomplicate it.\r
- Name: eneskiziltepe\r
  Comment: why do we calculate ISA deviation temperature correction in reference to meteorology station?\r
\r
Because we are given temperature at FL170?\r
- Name: Valentin93\r
  Comment: Why isn't the plane already flying at a clearance of 2000ft in the first place?\r
- Name: Edouard\r
  Comment: Now we need to guess that meteo station = aerodrome\r
- Name: nickname1\r
  Comment: The answer 286ft is for people who forgot the 2000ft clearance (mountain), so you know its 2286ft.\r
- Name: Jamesyyy\r
  Comment: in mountainous regions, the grid MORA is highest obstacle, plus 2000'.\r
\r
therefore, we need to take the given MORA (16200) and subtract 2000', leaving us with 14,200'.\r
\r
we can then take our calculated TA of 16485 and subtract 14,200' from this to leave us with 2285'.\r
- Name: Sabrur\r
  Comment: GRID mora = 16,200\r
in mountainous area, GRID mora applies +2000 ft obstacle clearance\r
:: Actual obstacle altitude = 16,200 - 2000 = 14,200\r
ISA dev = -4 (Do on your own way)\r
:: TA = 16,485 (after calculation, do on your own way)\r
:: Clearance from mountains = 16,485 - 14,200 = 2285 ft\r
- Name: TheGr4pe\r
  Comment: Unsure if it is the right section but GSP-15 under minimum IFR altitudes it says 2000ft for mountains and 1000ft clearance for no mountain areas.\r
- Name: mpilot2310\r
  Comment: I see a lot of people struggeling with these kinds of questions, keep pushing and make them a lot. You will get it!\r
- Name: Momo86\r
  Comment: Why you are changing the rules is lower pressure , indicated altitude lower than pressure altitude should be added and colder than isa, true altitude less than indicated altitude should be added. Every question you change the rules why is my question?? Why?\r
- Name: Typhoon\r
  Comment: Clearance between aircraft and grid mora= 286ft. Therefore if grid mora= elev obstacle +2000ft then the obstacle is 2000ft shorter.\r
So clearance between aircraft and obstacle= 2286ft\r
- Name: andreasrainer\r
  Comment: Seriosly, why do we need to account for the measurement height if deviation is given for the flight level we are in? I get it, if deviation is given for AD height, but according to EASA temperature deviation is different if measured in 13000 ft than at MSL?\r
- Name: SlavovYani\r
  Comment: You should calculate temp deviation for AIR COLUMN, so we need to start with QNH not 1013 for ISA deviation. And the we get 17000 -390= 16610ft - 13500ft = 3110ft. This is AIR COLUMN for temperature calculations.\r
- Name: 777umaid\r
  Comment: 1- Remove the clearance from MIN GRID ALT as it AUTO applied So = 14200\r
\r
Do not use clearance as well with FL 170\r
\r
2- Get the Indicated .\r
ISA DEV = -10\r
3- Get the TRUE\r
\r
True = 16485.6\r
Now clearance is TRUE - MIN GRID ALT = 2285.6 ft\r
- Name: Hossein123\r
  Comment: Just so you know when to add things and subtract after using the figure in the explanation:\r
\r
P. Alt is using 1013. If we want to change it to an Indicated Alt. of 1000 hpa. Just think of what you would do in the plane, you turn the knob down from 1013 to 1000 and you can see the altitude indication dropping. So 1013-1000 = 13. 13 x 30 = 390. We subtract the P. Alt of 17'000ft by 390 to get an I. Alt of 16610.\r
\r
Now for the temperature corrections, remember Cold Kills, because your P.Alt lies to you and says you are at 17000ft but in reality your True Altitude is lower, hence the cold kills bit. So if you are going from P.Alt to True Alt. you subtract your temp. correction to the P.Alt to get True Alt.\r
- Name: DanielXP\r
  Comment: why is the temperature correction from the aerodrome at 13,500ft and not the top of the mountain at 14,200ft?\r
- Name: jonathanlaukner\r
  Comment: @Harry the QNH is always rounded to the lower value, so a pressure of 1000.9 would still be 1000hPa\r
- Name: Thibault\r
  Comment: 2292.8\r
- Name: benCompletedATPL\r
  Comment: @harry you dont need to use it as standard pressure is actually 1013.25 so the difference is exactly 13 hPa\r
- Name: Johannes\r
  Comment: I learned something. Nice. grid altitude has already a clearance included.\r
- Name: Louis\r
  Comment: Don't forget to add on the 2000' for obstacle clearance\r
- Name: SkyhawkPolska\r
  Comment: EASA pattern that I have noticed is that they will give you an option for the answer and one to 'trick' you..\r
\r
In this case we have 286 and 2286..\r
\r
It will usually be one of them if you see two similar, but don't rely on this just a gross error check of some sorts! :D\r
- Name: Faizan\r
  Comment: Not sure if this is correct way but it worked for me\r
\r
TA= PA+30(QNH-1013)+(4/1000 x ISA DEV x column of air between airport elevation and ALT)\r
\r
ISA Dev : -10 (15-(2x17) = -19 actual temp -29)\r
Column of air : 3500 (17000-13500)\r
\r
Apply formula\r
17000+30(1000-1013)+(4/1000 x -10 x 35000) = 16500\r
\r
Moca 16200 - 2000 feet clearance = 14200\r
\r
16500-14200= 2300 ~ Ans 2286\r
- Name: Kuba\r
  Comment: very good job with new explanations\r
- Name: TANGUY\r
  Comment: to me the explanation is wrong since the temperature correction has to be applied between the aircraft and the station located 13500 above MSL. Can you explain @atplq ?\r
- Name: ATPL QUESTIONS\r
  Comment: Dear all,\r
Thank you for your valuable comments and feedback. We would like to inform you that our team has been working diligently to address the inconsistencies in solving altimetry exercises. We understand the importance of a standardized approach, and we are committed to rectifying the issue.\r
One area of concern has been the lack of consistency in the method used for temperature corrections when above an obstacle. The learning objectives clearly state that the elevation of the aerodrome must be taken into account, and the temperature correction should be applied to the column of air between the aerodrome and the aircraft's altitude. In cases where airfield elevation information is not provided, we will assume the aerodrome is at mean sea level (MSL). In this case, the airfield elevation is said to be 13 500 ft, and it must be taken into account for the temperature correction.\r
We are in the process of updating all explanations for questions of this nature, and the revised content will be available within the next few days. We appreciate your patience and understanding as we strive to improve the clarity and consistency of our materials.\r
Explanation for this question updated.\r
Thank you once again for your contributions and support.\r
- Name: Armada367\r
  Comment: SEEN IN SENASA, exact, same numbers\r
- Name: Redb4ron\r
  Comment: Isnt the temperature correction applied for the air between aircraft and terrain?\r
If we are flying at F170 (minus the pressure correction = 16.610ft) and Grid MORA 16200 (with 2000ft obstacle clearance), it leaves us with: 16610 - 16200 = 410ft + 2000ft = 2410ft to apply ISA deviation to.\r
\r
Why are you using station elevation? Or am I missing something?\r
- Name: ATPL QUESTIONS\r
  Comment: @Marcel, when correcting for the temperature you should consider the air parcel between the flight level and the meteorological station.\r
- Name: Biggles\r
  Comment: uk austro\r
- Name: Spanner\r
  Comment: UK CAA 08/12\r
- Name: Bob\r
  Comment: How do we know that the temperature was measured by the station at 13500 ft if they report the ambient temperature at fl170\r
- Name: bqwertz\r
  Comment: I know the order causes a lot of confusion but, for me, finding some logic in it helped. - We can only apply the temp. correction to the height between the AC and the reporting station. This is the most important rule. So we have to do the following: When the question wants the True Altitude: Apply Pressure correction first, Temp. correction second. When the question wants the Pressure Altitude / FL: Apply Temp. correction first, Pressure correction second. To Summarise: For TA: P first, T second. For PA: T first, P second.\r
- Name: Diogo\r
  Comment: The trickiest altimetry question in the bank.\r
- Name: Martin\r
  Comment: ah, the good old MGA already includes the 2000ft clearance trick.\r
- Name: Jim\r
  Comment: UK CAA - type in. Don't forget the 2000ft. (Remember to come back and mark as seen after your exams!)\r
- Name: javi\r
  Comment: That station should be at the K2 basecamp. xD\r
- Name: hello545\r
  Comment: Tricky one but fair\r
- Name: Andre\r
  Comment: when you get the right answer but forget to add on the 2000' for obstacle clearance..\r
- Name: Kinisson\r
  Comment: Minimum Grid Altitude (MGA)\r
MGA represents the lowest safe altitude which can be flown off-track.\r
The MGA is calculated by rounding up the elevation of the highest obstruction within the respective grid area to the next 100ft and adding an increment of\r
1000ft for terrain or obstructions up to 6000ft or\r
2000ft for terrain or obstructions above 6000ft.\r
e.g. 6345ft obstacle = 6400ft rounded up + 2000ft buffer = 8400ft MGA Shown in hundreds of feet. Lowest indicated MGA is 2000ft.\r
This value is also provided for terrain and obstacles that would result in an MGA below 2000ft. Exception is over water areas where the MGA can be omitted.\r
- Name: peko\r
  Comment: @ATPLQ\r
You didn't apply the pressure correction first in your explanation that is why the result is different.\r
\r
Indicated altitude 17000 , pressure difference =13HPA x 30 ft = 390 ft\r
Altitude corrected for pressure difference = 16610 ft\r
Height of the parcel of air for the temperature correction = 16610-13500=3110 ft\r
Isa deviation -10 degrees\r
Temperature correction =0.04 x 3110=124 ft\r
True altitude= 16610-124ft=16486 ft\r
Grid area altitude provides 2000ft of clearance so the highest obstacle is at 16200-2000=14200 ft\r
Clearance = True altitude-highest possible obstacle= 16486 - 14200 = 2286 ft\r
\r
When calculating the TRUE altitude with the indicated altitude given (FL), apply the pressure correction first then the temperature correction to the height of the parcel of air adjusted for the pressure deviation.\r
When calculating the indicated altitude and knowing the true altitude (clearance or obstacle) , the order in which the corrections are made does not matter .\r
In the CAA there are type in questions so you need to be precise with your answer.\r
- Name: ATRpilot\r
  Comment: Why EASA can't provide the mathematically correct answer is beyond me. Going through your calculation only to be left with an answer which doesn't match any of the options is a dirty move and leaves students doubting themselves and, in some instances, going back and changing what was a perfectly good method. This obtuse 'closest answer' BS should be stopped as it needlessly costs us time and points..\r
- Name: Marcus\r
  Comment: Can someone explain which order we do calculations in. Some questions apply temperature correction first, some apply pressure correction first. Thank you.\r
- Name: ATPL QUESTIONS\r
  Comment: @Marcus, to get true altitude first apply pressure correction then temperature correction. This is the correct order or the reverse when we are trying to determine a proper flight level. But in the end, the difference is very little even if the correct order is not used rarely leads to a mistake. Order is corrected.\r
- Name: Banuma\r
  Comment: UK CAA type inn\r
\r
Question Number: AT00086\r
- Name: RotorBoat\r
  Comment: @Dominikm no need for coordinates as 10-3F clearly states "only for flights to EDDR, EDRZ, EDSB & ETAR"\r
- Name: Georg2024\r
  Comment: in general: if you have coordinates in this kind of q, you can figure out at which direction the Route or the Destination has to be, to better unterstand which kind of SID or STAR you could/will use.\r
- Name: ElPatron\r
  Comment: @dominiken you dont need coordinates to answer\r
- Name: Dominikm\r
  Comment: I got this question today in Austro Vienna. It is identical except they didn't give any coordinates. I appealed the question.\r
- Name: 747neo\r
  Comment: Seen at Lba however as far as I remember the Option was between dkb and karlsruhe and it did NOT mention Saarbrcken on the chart so I choose the other one\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @747neo, thank you for your feedback. We believe that you may have encountered a different version of this question. We appreciate it if you or anyone who has encountered the question you stated could provide more detailed information. Thanks in advance.\r
- Name: Meelan\r
  Comment: LBA today 29.07 - they were asking for a flight to frankfurt\r
- Name: Billy\r
  Comment: It says the airports the SIDs are valid for going to on the chart, only 10-3F is valid for EDDR, therefore only KRH5B and KRH2H\r
- Name: PilotFio11\r
  Comment: Check the chart, you can find the answer in BOX 1\r
- Name: Markentorp\r
  Comment: We are going NORTH and to the WEST\r
- Name: YuvalCo\r
  Comment: Seen in Czech Republic , January 2024\r
Same words\r
Answer correct\r
- Name: YusefBoutaleb\r
  Comment: LOOLLL I didn't see the small comment "only for flights to EDDR, EDRZ, EDSB & ETAR".. but still got the right answer because I calculated where the airports are based on the coordinates xD\r
- Name: Didi\r
  Comment: ANAC Portugal no coordinates given!\r
- Name: Ben040\r
  Comment: If we consider the coordinates, we'll notice that EDDR is in NW direction of EDDS. Karlsruhe departures are the only ones proceeding in this direction.\r
- Name: Joey\r
  Comment: Seen UKCAA coordinates not given, so had to use ED-4 even though it wasnt stated in the question we had to use that chart. Left a comment.\r
- Name: Putinisaknob\r
  Comment: Saw this on the Austro exam on 16/5. It didn't give you the lat/long coordinates of the two airports so (for Saarbrucken at least) I had to look up the coordinates on the rear of the ED4.\r
- Name: Dill\r
  Comment: Seen uk caa 27/10/22\r
- Name: Fabian\r
  Comment: I just checked where EDDR lies in reference to EDDS via the coordinates and took the only departure to the NW ^^ then the solution was like "yeah just read on the chart" :D Upsy, still got the right solution :D\r
- Name: Werner\r
  Comment: Might be quicker, might be slower, but just look at the coordinates of the airports, and you'll see EDDR is somewhere North West of EDDS. Page 10-3F was the only one with SID's towards the NW.\r
- Name: Philip Frisch\r
  Comment: Seen Denmark July 2022\r
- Name: Stefano Di\r
  Comment: Herngu just check all the chart al the top, in 10F is written KARLSRUHE 5b and 2h only valid for EDDR that is the airport that we are looking for, all the Other one are valid for other airport!\r
\r
Question Number: AT00087\r
- Name: Nicola1\r
  Comment: Guys, remember that in IFR chart, all the track indicate are always magnetic\r
- Name: Pilott\r
  Comment: Forget least & best it's confusing use this instead\r
\r
C D M V T\r
W is always Minus (-) when going this direction --> and Plus (+) when going opposite direction <--\r
The exact opposite for E\r
( This applies for deviation & variation )\r
- Name: ERMAN\r
  Comment: E is least W is best is valid from TRUE to MAG (easiest way to remember when to add or subtract)\r
- Name: Ticinese\r
  Comment: @Pilot351 That 150° on the chart is Magnetic, so the "West Best" rule has been already applied. They ask for the True one, so you have to substract.\r
- Name: Pilot351\r
  Comment: So West is not best always\r
- Name: Thecocow\r
  Comment: Saw in Austro but they were asking in the opposite direction from GASKO to OBOXA my answer was 148\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Thecocow. The question you mentioned already exists in our database: 331351. And you're right, the correct answer to that question is 148°. Thank you for your feedback.\r
- Name: ElCapitan\r
  Comment: the tracks on the ifr elo are always magnetic. thus u need to get rid of the magnetic variation for true track\r
- Name: daniqz\r
  Comment: Austro barcelona 16/01/24\r
Same annex but asking the other way, from GASKO to OBOXA. Same as Muhammad, no routing.\r
Also selected 148, but cant confirm if it was correct.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Danyal, thank you for your feedback! I believe the question you described is the same as our question 331351. Thank you and good luck with your studies!\r
- Name: Muhammad Naveed\r
  Comment: TODAY 22-04-2024 came in UK EXAM but with changes , instead of OBOXA to GASKO . They asked for true track from GAKSO TO OBOXA . options were . 1)148 . 2) 328 3 ) 146 4) 150. Option i selected was 148 true track but dont know correct or incorrect , also i think routing was not given .\r
- Name: Cirrus2\r
  Comment: @Christopher, directly under GASKO in green there is the 2W VAR marked ;)\r
- Name: givme5whiskey\r
  Comment: Cant find the variation on this chart maybe I need glasses\r
- Name: Mustafa\r
  Comment: @Jakub on IFR charts all the tracks are M , in VFR the tracks are T\r
- Name: Szefu\r
  Comment: so tracks like this "150" are all of sudden Magnetic Tracks now ?\r
- Name: MaxterPilot\r
  Comment: Spanish people: Camarero Dame Mas Vino Tinto\r
\r
C D M V T\r
330 -2W 328\r
\r
--> W - / E +\r
- Name: Daniel\r
  Comment: I already have a problem. somebody explain in human terms when he subtracts and when he adds, for example, the W or E declension\r
- Name: ATPL QUESTIONS\r
  Comment: @Daniel if you are referring to the variation, here's the explanation : \r
To get the true heading, you need to first read the magnetic compass, then either add an Easterly, or subtract a Westerly, magnetic variation; based on the isogonic lines.\r
When converting true to magnetic heading, you’d do the opposite and subtract an Easterly, or add a Westerly, magnetic variation. This is where the saying East is least, West is best stems from.\r
Hope it helps!\r
- Name: Figo\r
  Comment: @Daniel, the magnetic track from GASKO to OBOXA is 150, but the question asks for reciprocal track OBOXA to GASKO, which is 150 + 180 = 330 magnetic track. We’re asked for the true track, which is 328 because right next to Gasko you can read a variation of 2W. Magnetic Track 330 equals true track 328.\r
\r
Hope this helps.\r
- Name: Daniel\r
  Comment: why plus 180?\r
- Name: Francesco\r
  Comment: easy question,if you see 150 near Gasko,150 plus 180 is equal 330 minus 2W is on left of Gasko ... 328\r
\r
Question Number: AT00088\r
- Name: CristianoRonaldo\r
  Comment: Overlay:\r
Follows the same path as a conventional procedure, but flown using GPS/RNAV instead of ground-based navaids.\r
\r
Bypass:\r
A new GPS route that avoids or replaces the old conventional path for better efficiency.\r
\r
Overlay = same path, new tech\r
Bypass = new path, new route\r
\r
siuu\r
- Name: ilsenatore92\r
  Comment: Can you confirm that conventional means of navigation must be operative when using a RNAV overlay procedure?\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @ilsenatore92. The published NAVAIDs for the procedure must be operational and you must monitor the navigation information from them. RNAV overlay procedures allow you to use RNAV system to navigate along SIDs (and STARs) which are otherwise defined by ground-based NAVAIDs. I hope this answers your question!\r
- Name: CaptainChris\r
  Comment: RNAV is not only GPS but RNP which requires way more system features/ redundancies than the funky GPS one can buy in a tool shop..\r
- Name: Vafut\r
  Comment: Karol, it is not the same thing! You can fly RNAV SID Overlay with VOR and DME unserviceable..\r
\r
Question Number: AT00089\r
- Name: Rajkumar\r
  Comment: They said total fuel and in my head i reckoned it would include Contigency, Final Reserve, Trip and the Alternate\r
- Name: Hanifreij95\r
  Comment: - Saw this on another question comment page which scarily works - For any reciprocating engine question to an isolated aerodrome, the answer is always the fuel cruise consumption PLUS (+) 40kg.\r
- Name: Eksel\r
  Comment: For those wondering why Final Reserve is not added here... Isolated A/D additional fuel is inclusive of final reserve. i.e The alternate *and* final fuel reserve required to the nearest adequate destination alternate aerodrome is more than 45min + 15% trip or 2 hours for piston.\r
- Name: AUS407\r
  Comment: Seen today, Sweden CAA. Options were identical although the question contained the formula, as in question 332383.\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @AUS407, thank you for your feedback. We have updated the text accordingly.\r
- Name: bilal5744\r
  Comment: Read this Trick from another comment\r
For ISOLATED + Reciprocating only: Fuel Flow/h + 40kg\r
- Name: RicardoLinterna\r
  Comment: https://ibb.co/sv86g6N7\r
- Name: Esami2024nico\r
  Comment: i don't understand sometimes it's 45min+ 15% of 2 hr and sometimes 45 min + 15 minutes of ff\r
- Name: PeaKel\r
  Comment: Why bother to calculate the fuel for 2 hours flight time when you calculate that 45 minutes plus 15 percent of planned cruise time = 1.125 hours..so the fuel will always be less.\r
- Name: Timothy\r
  Comment: @Babgon94 How could 1a) ever be lower than 2)?\r
- Name: Babgon94\r
  Comment: For the minimum fuel for reciprocating engines in isolated aerodromes you compare:\r
\r
The *greater* of 1) and 2):\r
. . 1) The lesser of a) and b):\r
. . . . .a) 45min + 15% Time in Cruise, or\r
. . . . .b) 2 H time in cruise\r
. . 2) Fuel to fly 45 min\r
\r
So for example, in this question:\r
\r
The *greater* of 1) and 2) is 820 kg, since:\r
. . 1) The lesser of a) and b) is approx. 820 kg, since:\r
. . . . .a) (45min + 15% Time in Cruise) x 780 kg/h = 819 kg (approx. 820 kg)\r
. . . . .b) 2 H time in cruise x 780 kg/h = 1560 kg\r
. . 2) Fuel to fly 45 min x 780 kg/h = 585 kg (approx. 590 kg)\r
- Name: pedroramireez\r
  Comment: 45/60*780+2*780*15/100=819\r
- Name: pogorielovA\r
  Comment: (45/60 x fuel consumption "780 in this case") + (2 x fuel consumption "780 in this case" x 15%).\r
Works for this kind of questions.\r
- Name: SamuelFan\r
  Comment: **Final Reserve Fuel is included in PDP Fuel.**\r
**CONT Fuel may be used up inflight and not required when overhead DEST**\r
..\r
For reciprocating engine, PDP fuel is the LOWER of:\r
1) 45 min + 15% CRZ: 45 min + (2hr x 15%) = 63 min\r
2) 2 hr: 120 min\r
\r
Therefore, PDP Fuel = 63min x 780kg/hr = 819kg\r
- Name: LiamL\r
  Comment: @Jake201002 The additional fuel for isolated aerodromes INCLUDES the final reserve fuel\r
- Name: Jake201002\r
  Comment: The additional fuel of 819 makes sense. However you should surely be overhead with that and your final reserve, which in this case would be 45 minutes worth of fuel consumption as its a reciprocating engine. So should it not be 819 (additional) + 585 (Final reserve) to give 1404?\r
- Name: ChrisChiz\r
  Comment: aamer think the suggestion is that contingency could have been used up en route. they have asked whats the min fuel you can arrive at dest with\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @aamer. We have updated the explanation accordingly. Thank you for your feedback.\r
- Name: aamer\r
  Comment: Was there no contingency fuel?\r
- Name: Rubennhepe\r
  Comment: @Tom98 contingency fuel is to be burned during the trip in case of any deviation, it can be that you do not need it and when you arrive to your destination you still have it, but for planning we do not count it over the destination as we do not know if we will use it or not during the trip\r
- Name: Elvis\r
  Comment: Is It correct?\r
A= (45' *780) + ((15% * 2h)*780)= 819\r
or\r
B = (780 * 2h)= 1560\r
witch is less?\r
or only: C= A= (45' *780) + ((15% * 2h or cruising level witch is less)*780)= 819??\r
Thanks\r
- Name: Tom98\r
  Comment: Silly question, but why dont we have to include the contingency fuel in the minimum required fuel when overhead ? Thanks\r
- Name: FixdWingBestWing\r
  Comment: seen similar except the fuel consumption was 720 instead of 780, making the correct answer diffrent\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @FixdWingBestWing. There is a question similar to the one you stated in our database: 333375. Please check this question and compare it with the one you encountered in the official exam. Thank you for your feedback.\r
- Name: Taggy\r
  Comment: For isolated aerodrome ops, do we apply contingency fuel from A to B, normal final reserves as well as additional fuel?\r
- Name: Adrian\r
  Comment: ISOLATED AERODROME\r
\r
Piston = Less of: 45 min Cruise FF + 0,15 x Cruise Fuel //OR// 2h of Cruise FF\r
Turbine = 2h Cruise FF\r
- Name: horphi\r
  Comment: Only 3 Questions in the DB with recipr. Eng and isolated aerodrome.\r
Take normal fuel consumption in cruise +40kg --> result!\r
Just as shortener ;-)\r
- Name: whychangenick\r
  Comment: Even if you add contingency still closest answer is 820. Move on and good luck.\r
- Name: RobRoy\r
  Comment: @Nicoletta whichever is less*\r
- Name: CptJedMarshall\r
  Comment: Seen UK CAA today but 720/hr instead.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Jed, thank you for your feedback! We have a similar question to what you described in our database (332383), could you please confirm this was the question you came across? Thank you and good luck with your studies!\r
- Name: YounesSebbouba\r
  Comment: @Aurelien 819*\r
\r
45/60 x 780 = 585\r
15% x 2 x 780 = 234\r
\r
585 + 234 = 819\r
- Name: MaximeHaulotte\r
  Comment: Austro same question but fuel consumption was 720kg/h and it was mentioned that alternate fuel was 45' and 15% of the total flight time.\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Maxime, thank you for your valuable feedback! We have added a new question based on the information you shared: 332383. Thank you and best of luck with your studies!\r
- Name: Slaggi\r
  Comment: in this question, how can I decide wether they are aiming for the 15% from the PDP or at the Final reserve plus 15 min (for no alternte available)? Is it because of the terminology "Isolated aerodrome"?\r
- Name: Flywithkevin98\r
  Comment: They should advice if there was any contingency during the flight, like any deviation.. we cant assume they consumed the contingency fuel like if we were guessers\r
- Name: Bozhidar\r
  Comment: I understand everything you've written but why don't we have in this example a Final reserve Fuel ?\r
Is it because we use a pre-determined point procedure ? And in this case we have only additional fuel without the final reserve fuel?\r
- Name: ATPL QUESTIONS\r
  Comment: @IwillPassIpromise, thank you! My apologies, this has been corrected.\r
- Name: sirFaizan\r
  Comment: Seen UK CAA but fuel consumption value was changed to 780kg/hr\r
- Name: ATPL QUESTIONS\r
  Comment: Hi guys, thanks a lot for your feedback! Question updated.\r
- Name: bqwertz\r
  Comment: Hungary: Different numbers - the correct one was 820.\r
- Name: Jim\r
  Comment: UK CAA. Mentioned rounding to nearest 10. (Remember to come back and mark as seen after your exams)\r
- Name: IRENE\r
  Comment: WHY NOT ADD A FINAL RESERVE OF 45 MIN?\r
- Name: Ihor\r
  Comment: Hungary CAA, same question, fuel consumption was 780, and correct answer was 820kg\r
- Name: Ellis\r
  Comment: what about final reserve and contingency ?\r
- Name: Kadham\r
  Comment: Cruise time is different from flight time\r
\r
Cruise time is from the top of climb to top of descent\r
\r
In this question flight time is 2.5\r
Cruise time is 2\r
\r
In order to calculate the Alternate for piston 45 min + 15% of cruise time\r
- Name: javi\r
  Comment: Flying time planned is 2,5h not 2h. I dont get why its has to be 2h hour if the whole flight time lasts 2,5h. Even in the case of second one(2 hours) from the ToC to the ToD, what about the time spent from the T/O to the ToC??\r
- Name: Clement\r
  Comment: For DGAC France remember: (not in the bank yet)\r
For 810 kg/h:850kg\r
For 600kg/h:630kg\r
- Name: Aobida\r
  Comment: Why do we not calculate contingency fuel here?\r
- Name: ATHANASIOS\r
  Comment: 1 Step -> 45 min (piston) = 540kg\r
2 Step -> 15% cruise -> 15% of 1440kg = 216kg\r
3 Step -> 540kg + 216kg = 756kg\r
\r
Question Number: AT00090\r
- Name: Aculeus\r
  Comment: I don't understand something.. isn't final reserve 30 minute holding? If so, why doesn't the following work? Alternate = 1504kg in 28min so 30min holding would be 1611kg\r
- Name: ATPL QUESTIONS\r
  Comment: @Aculeus, final reserve fuel is calculated based on holding fuel flow, that is why it does not match :)\r
- Name: Eagle1\r
  Comment: Alternate or None - 5% Contingency\r
En-Route Alternate - 3% Contingency\r
- Name: Mahdy\r
  Comment: @TOGA03 If the question states "en route" use 3%, if not use 5%.\r
- Name: TOGA03\r
  Comment: Sometimes it is 3% and sometimes 5%.. You're more likely to win the lottery than know what contingency to take !\r
- Name: daffyduck\r
  Comment: Why do we count final reserve by subtracting from block fuel and not by the rule of 30 min at holding fuel flow for jet?\r
- Name: A350WBX\r
  Comment: Yes, FINRES can be get removing all calculated values from BLOCKFUEL or removing from TOFFuel.\r
From BLOCK FUEL as @JohnAKA stated = Block - trip - cont - alt - taxi - extra;\r
From TOF = Tof - (trip + cont + alt) - extra.\r
- Name: JohnAKA\r
  Comment: BE CAREFUL GUYS! in this case just obtain the fin res. by subtracting from the block fuel : ( trip+cont+alt+taxi+extra). You have to find just the contingency from the trip( 5%). Hope it helps!!\r
- Name: Slyuosmaz\r
  Comment: Why would you count contingency by taking 5% and not 3%? It is not specified whether our alternate is en-route or not, so this method cannot be right and you just want us to die trying to use random numbers from ufinnished fuel log in real life, good job EASA\r
- Name: SkrrrrtPapa\r
  Comment: Assuming Final reserve based on unfinished LOG? Great idea if you dont want to make to your destination.. . Or you make to your final destination XD\r
- Name: Typhoon\r
  Comment: why doing T/O fuel : 7h and18mins to obtain the fuel/h and then dividing by 2to obteain 30mins of flight is not correct?\r
in both cases we have to make assumptions to have a realistic result, so why isnt this method also usable? can someone explain pls\r
- Name: PaulVlad\r
  Comment: I see 1174 and 1714, I already know I have 50% chances. Becoming an EASA sniffer, knowing the psychopats all too well.\r
- Name: Baldu\r
  Comment: assume,assume,assume.. we assume not having an ERA and 5 minutes holding not being greater than our 5% contingency ..wow\r
- Name: XIAOYAO\r
  Comment: anyone else thought Trip/Time * 30min? I did\r
Wrong answer only\r
- Name: Maksym\r
  Comment: We determine FINAL RES FUEL by means of subtraction??\r
Really?\r
What a sense??\r
- Name: Flywithkevin98\r
  Comment: Dont forget contingency please, I did it\r
- Name: Bob\r
  Comment: I guess 30' rule can't be used here because we don't have fuel flow for holding at 1500 AAL or in other words, because of lower fuel flow in holding, 1174kg will be enough for final reserve\r
- Name: WolfVF\r
  Comment: "R2 activate elevator 3 1147"\r
- Name: abdulaziz\r
  Comment: UK CAA, 1/4/2021\r
\r
asked for contingency and stated "to find holding fuel flow you can use final reserve."\r
\r
I multiplied the final reserve fuel by 2 to get the holding fuel flow, because FR= 30 mins of holding for jet which also means half of the holding fuel flow is the final reserve fuel.\r
\r
then I did 5% of trip fuel and 5 mins of holding ff and found that the 5% is the bigger number so I went for it, was around 242.\r
type in btw.\r
\r
goodluck.\r
- Name: Hasan\r
  Comment: 15/3 uk caa\r
\r
they wanted contingency fuel.\r
- Name: Christopher\r
  Comment: I find this question a bit misleading.\r
\r
Usually when asked to find the Final Reserve for a jet, we have to work our 30 mins holding fuel, whereas here it wants us to find what the missing value is by deducting other values.\r
- Name: Christopher\r
  Comment: Why are we using 5% for contingency and not 3%?\r
\r
How are we supposed to know if it is an En-Route Alternate or a Destination Alternate when all it says is 'ALTN'?\r
\r
@ATPLQ ?\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Christopher, for an alternate to be considered "En-route Alternate ERA", it must check a number of requirements. Find these requirements: Regulation (EU) No 965/2012, AMC2 CAT.OP.MPA.150(b) Fuel policy, LOCATION OF THE FUEL EN-ROUTE ALTERNATE (FUEL ERA) AERODROME.\r
From personal experience, unless the question text specifically states "En-route Alternate/ERA" available, this should not be assumed and a contingency of 5% shall be used. Hope this helps!\r
- Name: Bones\r
  Comment: take off fuel 19764- trip fuel 15320- alternate fuel 1502- contingency 766- extra fuel 1000=1174\r
- Name: Kojo\r
  Comment: taxi + trip + con + alt + ext = 18817\r
\r
block - 18817 = 1174\r
\r
Question Number: AT00091\r
- Name: Joel1280\r
  Comment: @Otachu no because question states Constant max speed at the IAF which is 250kt\r
- Name: CJLEE\r
  Comment: 37.5 / 250 * 60 = 9\r
- Name: DrPilot\r
  Comment: Basic speed formula.\r
Velocity = Distance : Time\r
\r
250kt (as written in up-right corner box) = 37.5NM (17nm molix-lutex + 13nm lutex-robvi + 7.5nm robvi-sugol) : TIME\r
37.5NM : 250KT = 9 minutes\r
\r
If it is displayed as 0.15 in your calculations, just hit the "degrees/hours-minutes-seconds" (usually circla and 3 commas) button and it will give you 0h9min0sec.\r
- Name: Barflex\r
  Comment: Using the CRP-5,\r
simply - align the 60 min/h mark with 250 kt, then scroll to the calculated 37.5 NM.\r
You will find 9 below, which corresponds to 9 minutes.\r
It's simple sometimes, you just don't need to overthink it!\r
- Name: mackerelontoast\r
  Comment: @Oliverinio since the question says assume the GS is the same as the max airspeed on the chart\r
- Name: Anuar\r
  Comment: 250 indicated as a gs? Question should be appealed since at fl100 250 ias gives more at tas without wind and at isa. We do not do assumptions here\r
- Name: Joeball\r
  Comment: Seen in Sweden, but it was phrased more clearly. It said:\r
"Assuming the ground speed is constant and the same as the maximum allowed airspeed at the IAF"\r
\r
Can confirm 9 minutes is correct.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Joeball. We have updated the question text accordingly. Thank you for your valuable feedback.\r
- Name: Oliverinio\r
  Comment: Since when do we use Ground Speed as a limiting speed on charts?\r
- Name: Thunder8olt\r
  Comment: The 250 kt below 10 is indicated one. This explain is not acceptable.\r
- Name: Maksym\r
  Comment: Speed limit of 250 KTS is below FL100, which is only approaching SUGUL point. Other part of STAR we should fly BETWEEN 260 and 280 KTS. But maximum allowed is 280 KTS.\r
But this is the limit of IAS - not GS\r
- Name: LiamTG\r
  Comment: I fell into the trap. Youre flying at the MAXIMUM SPEED ALLOWED AT THE IAF, the maximum speed at the IAF is 250 even though the chart tells you (assuming youre not a jet you can fly up to 280) the question dictates that youre instead flying at 250.\r
- Name: Ralle400\r
  Comment: I calculated first for Jets - so it would be 8 minutes (in case of 280 kts)\r
- Name: Maverickopoulos\r
  Comment: EASA in theory: You can obtain GS from IAS by correcting for position, instrument, compressibility, density and wind,\r
Also EASA in exams: IAS = GS\r
- Name: Cameron\r
  Comment: Good luck to us all if we actually had to fly every procedure with groundspeed limits. Might actually be more difficult than answering these ridiculous questions!!\r
- Name: Teinonator\r
  Comment: The speed restrictions in charts are CAS, or not?\r
If we are in average at FL100, we should add 10*2% = 20% for getting TAS = 250*1,2 = 300 kt, right?\r
37.5NM / 300kt = 0,125h = 7,5 min\r
- Name: Ole\r
  Comment: Seen in Denmark 6th of July. 9 minutes was correct\r
- Name: Putinisaknob\r
  Comment: FFS, this has to be the worst informed question EVER. Firstly, the STAR speeds are IAS, not GS, so the question cannot be answered without the winds. Secondly, the 250 kts limit only applies below 10,000. We have no idea what altitude we're at and at MOLIX we could be doing a max IAS of 280 kts. Have these question setters gotten their aviation knowledge from a Cornflakes box?\r
- Name: Hasan\r
  Comment: Seen in Austro Greece April 2023, Asked if the airplane is flying from MOLIX to IAF at maximum speed permitted over IAF\r
- Name: Antoniorosado94\r
  Comment: Im with Theodore. What are we supposed to do in the exams? Learn all the questions by heart without any sense?\r
- Name: Theodore\r
  Comment: This question is terrible. First of all, these are maximum IAS, not ground speed. If you have a 30 knot tailwind you'd be going faster. Also, the 250 limit is for the IAF, the rest of the STAR can be flown up to 280 knots..\r
\r
Question Number: AT00092\r
- Name: Segundo\r
  Comment: bro is the difference between actual and estimated at this point.\r
- Name: Morerudder\r
  Comment: I just do it on distance.\r
(2800-2290) / 150 = 3.4\r
3.4 x 300 = 1020\r
2290 - 1020 = 1270\r
\r
Same method for ETO.\r
- Name: HothS\r
  Comment: so u work out actual but the question marks are under estimated?\r
- Name: EduSanjuan\r
  Comment: Guys, yeah it says "estimated", but once you actually passed the last waypoint, you base everything on that. Forget the old estimates, your new ETOs and fuel are recalculated using REAL DATA. That's literally how flight logs work in real life\r
- Name: bluefield\r
  Comment: In air imagine yourself revisiting estimates for next waypoint based on actual Ground speed and time cals.\r
- Name: Backflip\r
  Comment: my estimate was 30min for my first leg 150nm then 60min for 300nm. With 900/h equals to 1450. That is called an estimate. What you wanted is the actual\r
- Name: Papa777x\r
  Comment: you ask about estimated time and fuel, so why in explanation and answer you choose actual?\r
- Name: Alexander1\r
  Comment: okay as i promisse im back\r
1) 11:40 - 12:14= 34 min\r
2) X-->-->--60\r
150<--<--34 = 264,7 GS\r
3) 264,7-->--> 60'\r
300<--<--<--X= 68min this will be adde to 12:14 = 13:22 first answer\r
NOW\r
900lb/h-->-->60'\r
X<--<--<--<--68'= 1020lb this will be substracted from actual 2290\r
2290 - 1020=1270 final answer\r
- Name: Alexander1\r
  Comment: guys, forget about the estimated the do all the calculations on actual\r
im so frustrated at this point, im going to take a pee befor i explane this crap\r
BRB\r
- Name: aleksandra\r
  Comment: So how do we know when to work with estimated and actual numbers? Anyone has a good way of working with those questions?\r
- Name: Fab93\r
  Comment: They even put the question mark under ETO and Estimated! It couldn't be more misleading! I'm tired of this shit!\r
- Name: daiana\r
  Comment: ESTIMATED\r
- Name: FutureHendrix\r
  Comment: When we get employed do we actually get in these situations ? thought we get a computer..😔\r
- Name: bierf2122\r
  Comment: tbh there are a few questions where it is not obvious and even more, next calculations are based on previous ETAs ..\r
- Name: iZmael\r
  Comment: Keep in mind: your new estimate is BASED ON ACTUAL PREVIOUS!\r
- Name: Hassib\r
  Comment: Question asks how to make flight plan (Flight Log) on the ground not whats going on inflight, based on Estimates ETO is 1310 and EFR 1450 lbs. We need to fill the Yellow Blanks with Question Mark.\r
- Name: Jim\r
  Comment: UK CAA (Remember to come back and mark as seen after your exams). @atpl fuel actual at Dep was 3000. Estimated at 2400. Actual at B 2300. ATO at B 12:10. Distance for B 300. Distance for A 150.\r
- Name: Nou\r
  Comment: Work with the actual numbers.\r
\r
Actual time between Departure and point B is= 12'14'-11'40'=0'34'. So, the time between departure and point B is 34 minutes.\r
\r
The distance at point be is 150NM, meaning you covered this distance in 34 minutes, so get the Ground Speed. GS= 150/34 minutes= 264.70 Ground Speed.\r
\r
The distance at point C is 300 NM. Since we are using the same conditions, we will use our Ground Speed to get how long we will be able to cover this distance. To get the time we will 300/264.70= 1 Hour and 8 Minutes. Add this time to the Actual time at point B ( which is given in the table) = 1'8'+12'14'= 13'22'\r
\r
To calculate the Fuel flow, simply get the difference between the Departure and fuel remaining at point B= 2800- 2290 = 510 was burned, and since we already calculated that the time to cover between the departure and point B is 34 minutes, so we will get how much fuel we burn per minute by 510/34=15 lbs per minute.\r
\r
We have also got that at point C we will cover this distance at 1 Hour and 8 minutes or 68 minutes, so to get how much fuel we will burn at point C we will 15*68=1020 lb will be burned. Subtract 1020 from the Actual fuel remaining at point B 2290-1020= 1270 lb fuel remaining.\r
\r
Cheers\r
- Name: Grusnyj\r
  Comment: POLISH CAA 16.12.2021\r
- Name: ATPL\r
  Comment: Appeared ULC Poland 10.11, same answers, 2 points.\r
- Name: Ammar\r
  Comment: Misleading question. Have to remember Estimated values are updated throughout the flight when you get new 'real life' data.\r
\r
Using actual values can see that 150 miles was travelled in 34 minutes => speed = 265 kts\r
\r
300 miles (leg distance not accumulated distance :/) will take 68 minutes.\r
\r
1214 + 68 minutes = 1322\r
\r
Fuel flow = 900 lbs per hour\r
\r
900/60 x 68 = 1020 lbs\r
\r
2290 - 1020 = 1270 lbs remaining\r
\r
Fuel flow\r
- Name: Filip\r
  Comment: Pure evil, ETO and ATO is mixed...\r
- Name: Nikolaos\r
  Comment: ATPL questions what do you mean you understand its not very clear..??? It is not clear at all.. The question asks about estimated why would anyone care about what the easa wants to mean by using words that mean something completely different .. it clearly asks about estimated and not the revised estimated..Appeal this bullshit question!\r
- Name: Michal\r
  Comment: this is very easy..problem is that the question itself asks for a different thing than attache picture:):):):)\r
- Name: Lorenzo\r
  Comment: guys, my method is strange but, works fine. at first point is 150nm, and we have al infos. the second point is 300nm, its just the all double values of the first one. then if at point A was 34min, at second we will add 68min, and if fuel flow was 510 consumed, then at second point we will subtract 1020. ez\r
- Name: Chien\r
  Comment: why 12h10+68'=13h22???\r
- Name: Pietro\r
  Comment: Dan 900/60 x 68 is 1020\r
\r
Question Number: AT00093\r
- Name: Rabias\r
  Comment: you should have highlighted the line South route: Rep SW as well\r
- Name: SebiK\r
  Comment: austro today, didnt say reporting point VFR, just reporting point SW\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @SebiK, thank you for your feedback. We have updated the correct option accordingly.\r
- Name: Solicab\r
  Comment: Could you reply to @Mesiek please?\r
- Name: ATPL QUESTIONS\r
  Comment: Hello everyone. We have updated the question text and hope this addresses all the concerns raised.\r
- Name: Mesiek\r
  Comment: Note: Question states "flying near the coast", hence SW (and not SE).the question DOES NOT state that\r
- Name: Obstler\r
  Comment: LBA Germany new question Today. Aircraft has Radio failure. Question was which path to be followed. I guess answer was east of south corridor/route\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Obstler. We have added a new question based on the information you've shared: 333819. Thank you for your feedback.\r
- Name: skyys\r
  Comment: Today austro, answer slighty reworded to "at VFR waypoint SW".\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @skyys. We have updated the correct option accordingly. Thank you for your feedback.\r
- Name: Ando1\r
  Comment: UK CAA. Similar question with similar answers BUT coming from the North along the coast\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Ando1, thank you for your feedback. Did the official question you encountered clearly state either "north corridor" or "north route" as in this question? We appreciate it if anyone who has encountered the question @Ando1 mentioned could provide information. Thank you in advance!\r
- Name: Typhoon\r
  Comment: appeal. the annex says clearly . before reaching or at NE SE SW. so i can accept the supposition that the pilot will not get through SE since he comes from SW and then wants to go S, but the answer then should be AT SW, not before arriving at SW. because like this you are saying that the pilot is not allowed to contact frequency when AT SW, which is not true.\r
- Name: Janfelhut\r
  Comment: Slightly reworded in Norway. Question stated "Your approaching Alicante from the south west to follow the south route. You shall contact Alicante Tower at or latest at:" Same correct answer: SW\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Janfelhut. We have updated the question text accordingly. Thank you for your valuable feedback.\r
- Name: Fast\r
  Comment: Same question today in Latvia CAA just it was more clear because they noted that aircraft was approaching near the coast from south west.\r
- Name: piperguy66\r
  Comment: Guys I think the real answer lies in the Route Description ..\r
it states " South Route REP SW - S " and NOT SE (basically SE is not a reporting point according to the chart ) ..\r
REP stands for Report\r
\r
Silly question\r
- Name: Murat\r
  Comment: None of the answers states "at or before", so by just looking at the chart, you can see that contacting ATC AT SE would be to late, you would enter ATZ without getting clearance in time.\r
- Name: FREEOFATPLSHACKLES\r
  Comment: I'll trust ATPLQ's answer but this question is bad. If you approach from South you can be near the coast either at point SW or SE both are near the coast, the question needs to specify which portion of the coast we're on. Would 200% appeal this .\r
- Name: FEDERICOMAZZA\r
  Comment: ENAC ITALY 15/12 SAME WORDING\r
- Name: Joshua\r
  Comment: SEEN SPAIN, SENASA @ BFS, but same as @Arkadiusz, stating arriving from South-West\r
- Name: Riccardo\r
  Comment: Actually it says "before"\r
- Name: Arkadiusz\r
  Comment: Poland ULC. it was said the ac is coming from SW\r
- Name: Michael\r
  Comment: A coast is a line. So you can be left or right of it. So basically it i not clear where we are flying.\r
- Name: Bender\r
  Comment: Are we over land or over water? Oh my god!\r
- Name: Zvanok\r
  Comment: Should be corrected to "before reaching the point'\r
- Name: Ihor\r
  Comment: Hungary CAA same\r
- Name: Martin\r
  Comment: How near the coast do you have to be to be near the coast? we are talking about aircraft here travelling at hundreds of miles pr hour.\r
- Name: Nicholas\r
  Comment: If I'm near the coast I'm SE.\r
I'm sick of this crap from Easa. It's absolute no bearing on real life ops. Remember it and move on sadly. 2 correct answers and its' solely down to your interpretation on the day along with what kind of mood the person who sets the question is in.\r
- Name: Jakub\r
  Comment: Why DAN has so many thumbs up? It's clearly written in 19-3 in arrivals ".. shall establish radio contact with Alicante twr AT or BEFORE reaching VFR REPs..". And again EASA.... the more correct answer to "near the coast" is SW because it's closer to coast than SE.\r
- Name: Loris\r
  Comment: @atplquestions why "prior entering atz" is wrong? in the aerodrome information chart is written explicitly that aircrafts should contact the arc before arriving at REPs\r
- Name: Dan\r
  Comment: And it clearly says "before reaching VFR REPs NE, SE, SW", not "at".\r
- Name: alex321\r
  Comment: I mean, contacting tower "before entering ATZ" isn't wrong.\r
- Name: Andrew\r
  Comment: 2 correct answers\r
\r
Question Number: AT00094\r
- Name: Muhammedkasem\r
  Comment: Guys, just a heads-up: since the question clearly states that its not possible to land back at the departure aerodrome due to weather conditions, having a take-off alternate is mandatory ( option A). Also, you always need to have a destination alternate (option C). So, in this case, option A is definitely the correct choice, I compared these 2 options\r
- Name: Michiels177\r
  Comment: the correct answer was literally the first option I disregarded -.-\r
- Name: RotorBoat\r
  Comment: so, the take-off alternate is an alternate you can fly to after T/O should the need arise\r
if im understanding the question right, it states that the "take-off alternate" is the destination aerodrome?\r
\r
man that melted my brain. what a load of shakespeare just to say you're flying to your destination airport lmao\r
- Name: Aviatormonster\r
  Comment: how in the world are you choosing an alternate aerodrome for take off?\r
- Name: Papadancer\r
  Comment: Today ULC, Take-off alternete its a key, further iss simmilar but not same.\r
- Name: Typhoon\r
  Comment: @SkrrrrtPapa in my country you can appeal the question if, in your opinion there s something wrong with it. from a wrong answer, to a poor wording issue that leads to misleading questions or even if the results are too close together and dont take into account for approximations. The fact that you dont know if the question is valid or not wont make a difference. if it was valid, your appeal is negated. in the other hand, if they see you have a point, they might set your question as correct. in my last exam i appealed 4 questions and for 3 of them i was right. this increased my score from 86% to 91%. so i always suggest to appeal questions whenever they are doubtful. remember that it is your right to go against poorly made exam questions. and EASA exams are FULL of appealable questions. these are my 2cents obv. so you feel free to follow up or not. (also this question in particular appeared written differently from how it is here. that s why it s important also to know when to appeal if you know how the question should be written)\r
- Name: GhaithGarraoui\r
  Comment: The only case you can avoid the need for additional fuel is if your destination is closer than any other suitable aerodrome and is within the regulatory take off alternate distance (1 hour cruise time at the OEI or ETOPS diversion time).\r
- Name: SkrrrrtPapa\r
  Comment: @Typhoon you say appeal to many questions. How do you know if it was wrong on the exam? You dont get feedback on questions. Appeal to what?\r
- Name: Typhoon\r
  Comment: appeal for terrible wording. plus it has conflicting feedback based on authority.\r
if it was written better i would agree on needing a take off alternate. but it is hard to depct the situation with such a poor wording\r
- Name: Tsvetomir900\r
  Comment: Water always choose the path of least resistance. The author of this question is not like water.\r
- Name: PaulVlad\r
  Comment: sweet baby Jesus. I think he wrote it and died of aneurysm on the spot.\r
- Name: Nikko\r
  Comment: What if A is Heathrow and B is Sydney? I aint putting Heathrow as my alternate.. the route distance matters.\r
- Name: GhaithGarraoui\r
  Comment: What "need for additional fuel" is avoided when your T/O alternate is your destination? Is this only valid when your destination AD is within one hour at the OEI and is the nearest available AD? Because if it's further than another available AD, you need to choose that available AD without the need for additional fuel. I mean, usually, there is no need for additional fuel for a T/O alternate, right?\r
- Name: karolgaisser1\r
  Comment: Departure aerodrome: BELOW minima\r
\r
--> Take off alternate required\r
- Name: karolgaisser1\r
  Comment: Deprature aerodorme: BELOW minima\r
\r
--> Take off alternate required\r
- Name: Bronzebread\r
  Comment: 12/02/24 seen in Slovakia, can confirm that A is correct, worded almost exactly same\r
- Name: Jonirulah\r
  Comment: take-off alternate, I remember because when I first saw this question I was thinking like to depart from another airport which made non-sense to me, so when I see this question I already know the answer, i don't know if it's happening to anyone else\r
- Name: mariokart\r
  Comment: Deciphering that question felt like my brain attempted a jigsaw puzzle but ended up with a crossword on a rollercoaster\r
- Name: Vetal\r
  Comment: Seen today Latvia, the question is reworded but same meaning. Answers are the same as I remember. I chose A, but dont know if it was correct.\r
- Name: Tomistr\r
  Comment: I didnt review the exam, I just remember the number of the question and then I saw it incorrect.\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Tomas, thank you! If anyone else comes across this question in their official exam, please let us know.\r
- Name: Tomistr\r
  Comment: Senasa 7/11\r
I chose the one as here and its INCORRECT!!\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Tomas, thank you! Could you please confirm you were allowed to review your answers after the exam?\r
- Name: HarryPotter\r
  Comment: 10 minutes to just read the question..\r
- Name: TopGun81\r
  Comment: Take-off alternate is in case you cannot come back to the departing airport\r
- Name: Max\r
  Comment: So lets go, we plan a Flight from Europe to USA and we just go back because then we dont need additional fuel.. What?\r
- Name: Kimoo\r
  Comment: avoiding the need for Additional Fuel\r
- Name: Jordii\r
  Comment: Whoever wrote this must have an extra chromosome\r
- Name: Cameron\r
  Comment: ICAO Level 7\r
- Name: Castamat\r
  Comment: This question has been wrote by someone having a stroke. I know because I studied human performance.\r
- Name: Alexander\r
  Comment: the wording of this question turned my brain into liquid\r
- Name: Antoniorosado94\r
  Comment: A Take-off alternate is an aerodrome at which an aircraft would be able to land should this become necessary shortly after take-off and it is not possible to use the aerodrome of departure.\r
- Name: educhimi\r
  Comment: I will never understand the take off alternate Q, what we do with the passengers, we put them to walk to the other aerodrome or what?\r
- Name: Witryna\r
  Comment: try to pronounce this q loudly. Person who wrote this question has nice jumbo jet in head\r
- Name: Guillefdb2008\r
  Comment: SENASA SPAIN 25/11\r
- Name: lucky\r
  Comment: There is no way to know, if the Destination is within 1 hour of flight., so ti can be selected as a Take alternate.\r
- Name: Nicolas\r
  Comment: The wording of the "VOR approach and weather conditions at departure" part turned my brain into liquid\r
- Name: Martin\r
  Comment: How on earth can they call it a "take-off alternate" sounds like youre going to taxi to another airport on the ground? At least I will remember it.\r
\r
Question Number: AT00095\r
- Name: BravoTango\r
  Comment: behind -> later\r
\r
ahead -> earlier\r
\r
move on future pilots\r
- Name: Radecek\r
  Comment: Seen CZ CAA 17.6.24 - different wording and TAS 120 kt.\r
- Name: PaulVlad\r
  Comment: check question 333572\r
\r
There you say that if headwind increases, the FMS will compensate by increasing speed.\r
Here you say the ETA will fall behind. Why does it fall behind, why is it not maintained?\r
\r
Any inputs?\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @PaulVlad, thank you for your comment. These two questions indeed seem contradictory, but the problem is not in this question but in question 333572. On question 333572 we received comments similar to the one you also stated. Our response to the comments on that question is as follows:\r
"As a Boeing 737 pilot myself, I must admit that I have some reservations about the currently accepted correct option. However, it has been reported by students that this answer was deemed correct in their exams. In such cases, I would encourage you to challenge this question if you encounter it in your own examinations.\r
Now, let's discuss the behavior of the Flight Management System (FMS) when there is a variance between the actual wind and the wind entered into the FMS:\r
If the FMS detects a difference in wind, it will calculate a new optimal speed based on the updated wind data and the entered cost index. However, this adjustment is applicable only when the VNAV mode is set to ECON. If a fixed speed is selected, the FMS will continue flying at that speed regardless of the wind conditions. In such cases, the FMS will continuously recalculate the Estimated Time of Arrival (ETA) based on the current time, position, actual wind for the current leg, and inserted winds for other legs.\r
Most FMS systems provide a feature that allows pilots to reach a specific waypoint at a predetermined ETA. When this mode is activated, the FMS will continuously recalculate and adjust the speed to achieve the desired ETA at the specified waypoint. It's worth noting that this mode is not a standard operating mode."\r
- Name: Javibu\r
  Comment: @Carlos that you are arriving late in accordance to your ETAs\r
- Name: Carlos\r
  Comment: what the meaning of behind the timing?\r
\r
Question Number: AT00096\r
- Name: Thomasoro\r
  Comment: Reworded IAA. Asking about when to apply it before decent above a mountain area I went with commander should apply before decent starts mentioned mOCA\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Thomasoro, thanks for the feedback! If anyone else encounters a similar question to the one described by Thomasoro, please share it with us along with as many details as possible. Thanks!\r
- Name: eneskiziltepe\r
  Comment: keyword is: ''much lower'' than ISA + ''addition'' to DH(A).\r
\r
(bcs your altimeter is showing higher bcs it thinks colder air is higher in standard atmosphere. but we are not in standard atmosphere.)\r
- Name: Solicab\r
  Comment: Should it be added when talking about DH and MDH\r
\r
But subtracted when talking about DA and MDA ??\r
\r
Looking for clarification if possible.\r
Thanks\r
- Name: FlyingKuba\r
  Comment: final approach fix (this is the same what is FAP but non-precision app)\r
- Name: Pilotkonsta\r
  Comment: What the FAF is this?\r
- Name: MatteoFlyby\r
  Comment: Lower added FAF\r
- Name: kubarybaczyk\r
  Comment: High to low watch out below = you're lower than you think = add a margin (correction)\r
- Name: Ezequiel\r
  Comment: no only and ADD\r
- Name: jimbee\r
  Comment: Switzerland today more or less the same\r
The first part of the answer was part of the question with dots\r
- Name: sidalmukhtar\r
  Comment: Colder means you are lower so you add the correction\r
- Name: Lachlan\r
  Comment: UK CAA 25/04\r
Reworded, answer is very obvious in exam.\r
- Name: Yulia\r
  Comment: Temperature lower - then our true altitude/height is lower than indicated => we have to choose DH/DA, indicated on altimeter, higher (coz we are actually lower than indicated) => so, temperature correction must be ADDED. ( so we have margin)\r
- Name: Laurenn\r
  Comment: Austro Greece 4/04/23\r
- Name: MaxterPilot\r
  Comment: T lower & added to DH.\r
- Name: BobbieBrink\r
  Comment: Senasa 17/01\r
\r
Question Number: AT00097\r
- Name: FaridATPL\r
  Comment: you're being RADAR VECTORED\r
- Name: Vic51140\r
  Comment: ATS = responsible under radar vectoring\r
PIC = responsible in VFR or when not being radar vectored\r
- Name: ATPLisBRAINROT\r
  Comment: Whenever ATC is responsible for vectors, they are also responsible for terrain clearance.\r
- Name: SANTIAGO\r
  Comment: Just obey and crash\r
- Name: olibarke\r
  Comment: UK CAA same question, correct answer was simply : turn onto heading 285 and descend to 2300ft (no extra wording)\r
- Name: kikopereira\r
  Comment: do what they say\r
- Name: somethingmika\r
  Comment: When under vectors the ATC is responsible for terrain separation.\r
- Name: MaxterPilot\r
  Comment: just Obey the instruction ..\r
- Name: Akaash\r
  Comment: UK CAA 10/10/22. Same question, answers worded slightly different.\r
\r
Question Number: AT00098\r
- Name: niirdan\r
  Comment: for those that might be tricked with the first Magnetic Track .\r
015 is non sense since we Fly South-westerly direction (KWL to WIK) .\r
therefore you know that this is the opposite direction , add 180 => 195 and you're done\r
- Name: Marguez\r
  Comment: IFR charts are Magnetic and here they ask for the Magnetic track so is not necessary to apply variation\r
- Name: Joshua\r
  Comment: SEEN SPAIN, SENASA @ BFS, exactly the same with Kirkwall VOR even though there is no VOR there\r
- Name: Firashmz\r
  Comment: you get this question in exam a grin in ur face\r
- Name: ATPL QUESTIONS\r
  Comment: @David, can you please open the annexe in a new tab? Use the zoom-in and zoom-out buttons in the toolbox located on the right side of the page. If your problem will not be solved please send an e-mail to info@atplquestions.com specifying your problem/device etc.\r
- Name: Yusuf\r
  Comment: I swear Kirkwall is a DME station next to an NDB (KW). There's no VOR there?\r
\r
Question Number: AT00099\r
- Name: Carlospas\r
  Comment: longitude is longer (5 numbers)\r
- Name: Fabioo\r
  Comment: If you write N4135 in the flight plan, it means 4135 knots (a speed)\r
- Name: karolgaisser1\r
  Comment: For coordinates the N has to come after the number, otherwise it would resemble a speed.\r
- Name: Mikael\r
  Comment: longitude can have values over 100 degrees, THUS 5 figures for E/W instead of 4 for latitude\r
- Name: Hayderpilot\r
  Comment: 4numbers> N 5numbers> E\r
- Name: Joachim\r
  Comment: Jeppesen GSPRM under Air Traffic Control ITEM 15 : Route (Page GSP-469)\r
"2. Significant point"\r
\r
Question Number: AT00100\r
- Name: Matti\r
  Comment: BGS has exactly the same question and set of answers - word by word. But the correct answer is "There will be no effect as the FMC will make an automatic correction". Who to believe? Throw a coin and pray..\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Matti... interesting! The FMC uses the cruise altitude to compute optimum speeds (e.g., ECON speed), fuel flow estimates, estimated time of arrival (ETA), step climbs or descents. Therefore, if the cruise level is entered incorrectly, these calculations will be based on wrong assumption. We believe our current correct answer is the correct one. If anyone comes across this question in their exam, please let us know. Thank you!\r
- Name: Giordan886\r
  Comment: you have to assume that you're still on the ground doing planning and briefing, in flight if you select on MCP a lower FL then the FMC will adjust time and fuel flow based on the current data.\r
- Name: Pietro\r
  Comment: Enac today, watch out bupecause there was a lot of poor structured questions that didint have correct answer including this, in the exam there wasnt a correct answer like here unfortunately\r
- Name: FlyingLegend\r
  Comment: You are all right, the FMC will compute the right values for the entered altitude or flight level, BUT let's say you plan with FL350, but accidently type FL360 in the FMC and don't recognise the wrong level. So before the flight the FMC will calculate values that are wrong for you, but right for the level you typed in, inflight the FMC would then correct the values according to the actual flight level.\r
Take for example a fuel calculation from FPL: Let's say you have a trip fuel of 6450kg and want to calculate the 5% contigency, but you type in 6540kg instead. Your calculation is still correct, but the result is not.\r
The question is a bit tricky to understand\r
- Name: ricardgalisteo\r
  Comment: A computer is never wrong, it does whatever it is told to. If you ask FL400, you will get FL400, even if you wanted to put FL300. This question is bs like almost all the bank of this subject made buy a bunch of chimpanzees and failed careers that can't even use commas or comprehend basic language.\r
People say meteo is ambiguous, but it was not half bad as this subject is. At least half the questions are made by professional meteorologists, not like this clown subject.\r
- Name: manuela\r
  Comment: If you enter incorrect cruise level which is cleared by ATC, how can you get to the correct ATC assigned cruise level??\r
- Name: BEN10\r
  Comment: in BGS its automatic correction. What do I believe now?\r
- Name: PaulVlad\r
  Comment: What a bad choice of words:\r
\r
The calculations are correct for whichever level we INPUT. Now that it doesn't help us, different story, but the calculations are not incorrect! They are correct but for a different LEVEL.\r
- Name: FighterMan\r
  Comment: ULC POLAND 6.04 slightly reworded, but correct answer similar to one in\r
- Name: Pipinho\r
  Comment: This aint true. The wording is terrible. If the planned flight level should be FL350 and the pilot instead inserts FL370 it will give the wright values for the FL370 however it wont give you the values you where expecting on flight planning however the calculations it does for the FL370 are still coprrect.\r
- Name: Malgorzata\r
  Comment: I can confirm that answer A is correct in polish CAA -ULC\r
- Name: Oleksandr\r
  Comment: Depends on phase. FMC will 100% sure make a correction, but only in flight. On FLIGHT PLANNING phase -> speed/fuel/time calculation will be according to the inserted FL. Most probably, EASA assumed the answer should be respectful to the name of the subject))\r
- Name: Mohamad\r
  Comment: REMEMBER\r
FMC IS GARBAGE IN, GARBAGE OUT\r
- Name: ACardoso\r
  Comment: Poland ULC 19.MAY.2023 - The answer "There will be NO effect as FMC will make an automatic correction" was *WRONG*\r
- Name: ATPL QUESTIONS\r
  Comment: Greetings, @Acardoso! We appreciate your valuable feedback. After careful review, we have revised the correct option for this question. We kindly request others who come across this question to inform us, enabling us to ensure the accuracy of the correct option. Thank you for your assistance!\r
- Name: Putinisaknob\r
  Comment: Christ, and this is a new question. Things aren't getting any better are they? Are they getting kids to write these?\r
- Name: v4rga\r
  Comment: Somthing not right here.\r
- Name: Alexandros\r
  Comment: Explanation doesn't make any sense on the answer whatsoever\r
\r
Question Number: AT00101\r
- Name: Clarkey\r
  Comment: Apply qnh to airfield elevation then minus from height to climb like the vilna q\r
- Name: flextemperature\r
  Comment: If youre unsure if you should add the or subtract the 510ft, imagine what would happen with the altitude indicated when turning the QNH knob.\r
- Name: zeymahse\r
  Comment: IN A FUTURE NOT SO FAR AWAY:\r
\r
ATC: faultybird7, clear to land runway 1-5.\r
faultybird7: clear to land, runway 1-5, faultybird.\r
--\r
ATC: faultybird, you missed the runway!!\r
faultybird: It' jusEASAfied, it's only by just 10ft.\r
- Name: mariokart\r
  Comment: I have another way.\r
\r
1) 1030-1013 = 17 x 30 = 510ft\r
2) 3500 elev. - 510 = 2990 ft (because we're going from qnh to qne)\r
3) 25.000 - 2990 = 22010 ft\r
\r
closest answer 22000\r
- Name: omer\r
  Comment: TA = PA + 30 (QNH-1013)\r
TA = 25000 + 30 (1030-1013) = 25510\r
clearance = TA - elevation = 25510 - 3500 = 22010\r
\r
closest answer 22000\r
\r
Question Number: AT00102\r
- Name: Maverick437\r
  Comment: Seen in Astrol Vienna today\r
- Name: karolgaisser1\r
  Comment: @Johan Because NDBs don't provide distance information :)\r
- Name: Johan\r
  Comment: Why is the NDB with frequency 326 kHz and morse code LLS not considered as a correct answer?\r
- Name: IchBinLadin\r
  Comment: 111.4 Mhz is only one freq used for nav aids range :)\r
- Name: Kuba\r
  Comment: For anybody who is struggling to understand all available information given in the chart. The black characters "DME-51 FRO (111.4)" and the black square is the data for FRO TACAN where 51 is the TACAN channel and 111.4 (MHz) is the frequency that can be used by civilian users. The green characters "326 LLS" and the green "rose" is the data for the NDB where 326 is the frequency in kHz and LLS is the ident with the morse code underneath.\r
- Name: Joel\r
  Comment: Seen UK CAA. 27/02/2023\r
- Name: Moert\r
  Comment: seen in Vienna Austro Control 05.09.22\r
- Name: Alexab\r
  Comment: 20 minutes to find, 2 second to respond\r
- Name: mazur\r
  Comment: what does the 51 stand for in DME-51?\r
- Name: Jonathan\r
  Comment: 17/05/22 - Austro - Exact Question\r
- Name: Ryan\r
  Comment: Hard to find the aerodrome but the best way that I found to identify it, was to quickly scan the entire chart while keeping an eye out for the blue writing of any aerodrome code, then keep scanning until you come across the EHLE aerodrome code.\r
\r
Hope it helps someone.\r
Good luck!\r
- Name: Soteris\r
  Comment: Always look for the blue\r
- Name: Lorenzo\r
  Comment: No annex indication, no coordinates, nothing\r
- Name: Dawid\r
  Comment: Why you even try to find it? distance so DME. Only one fit.\r
- Name: Darren\r
  Comment: Surely in the exam, they should give us the coordinates of the aerodrome? Because wasting time trying to find a place is not fair\r
- Name: Evghenii\r
  Comment: Lelystad (EHLE) - N52°27.20' / E5°30.83'\r
- Name: Will\r
  Comment: Very bottom right of ELO (2)\r
- Name: Gizem\r
  Comment: Am I blind? How can you find easily\r
- Name: Louis\r
  Comment: Austro Control (Spain) 23/10/2020\r
- Name: Pietro\r
  Comment: bottom right , read off black words\r
- Name: Pietro\r
  Comment: E(LO)2\r
- Name: Luke\r
  Comment: For chart use annex of # 331117\r
\r
Question Number: AT00103\r
- Name: Alara\r
  Comment: Easier way to remember formula is\r
Air miles / air speed = ground miles / ground speed\r
\r
Re arrange for what you need\r
- Name: DannyTheRaccoon\r
  Comment: Agree with Arrow! Without the question saying at which point we are cleared to FL330 from 6000ft, there is NO WAY you can possibly find a definitive answer instead of just guessing like you did. If anything, you should consider the whole SID procedure up to ANDIK to be flown at 6000ft, and the climb to FL330 to only start from there (without additional information, this is surely what the question sounded to me!)\r
- Name: Arrow\r
  Comment: But what about 6000ft authorization? Until what point is it, and when does the climb do FL330 start?\r
- Name: dichko\r
  Comment: Yes, I see, but it's a distance anyway. Roughly 3 NM.\r
- Name: dichko\r
  Comment: It's not completely correct. The first leg distance from the SID (RWY to EH019) should be added as well.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @dichko. There is no indication for the distance from take-off until EH019.\r
- Name: planimike\r
  Comment: Easy way to remember the formula:\r
\r
(ground-air-ground-air) NGM = NAM x (GS/TAS)\r
(air-ground-air-ground) NAM = NGM x (TAS/GS)\r
\r
works for me, greets :)\r
- Name: CiaranT\r
  Comment: Seen 6 Feb Austro also and ANDIK2E SID. Something to do with how many miles after ANDIK you'd be but question is same idea.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @CiaranT and @MandM. Thanks for your feedback! We have created Q 337483 to reflect it.\r
- Name: MandM\r
  Comment: Seen Austro 29/02 same chart but ANDIK2E SID and tailwind was 30knot\r
\r
Question Number: AT00104\r
- Name: Manka\r
  Comment: in sweden they gave the 5 min hold to be 115kg and when u calculate the 5% i got 80lb. so highest was 5 mins\r
- Name: Matt24\r
  Comment: just\r
2300x(5/100)\r
next question\r
- Name: chaer8\r
  Comment: @Ferrandoski I saw the same question today (20.05.2025) at the LBA\r
- Name: MandM\r
  Comment: Normal condition - 5% or 5 min\r
EN route Alternate - 3% or 5 min\r
The greater\r
Credit to @Rezva\r
- Name: ZakMartin\r
  Comment: it would have been necessary to calculate 3% of trip fuel if En-Route Alternate (ERA) was available\r
- Name: vayasable\r
  Comment: I had exactly this question today in Poland, also had a second question with similar data but the trip fuel was 878lb, making 80 lb the correct answer (5 min of holding)\r
- Name: Ferrandoski\r
  Comment: Today I have this question in Autrocontrol, 2/7/24, it was similar to that one, but the trip fuel was shorter and then the 5 minutes at holding speed was 115 lb. The greater fuel was 115lb. Keep pushing!!\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Ferrandoski, thank you for your feedback. If you or anyone who has encountered the question you mentioned can provide more detailed information, we can add a new question. Thanks in advance.\r
- Name: chrp777\r
  Comment: 5% vs. 5min\r
- Name: YounesSebbouba\r
  Comment: @Edu, We have to use 3% only if the Q stands that we have a suitable En-Route Alternate (ERA) otherwise 5% or 5min holding whichever is greater.\r
- Name: Letoo\r
  Comment: Am I the only one who calculated everything?\r
- Name: Faizan\r
  Comment: My trust issues really came out in this question\r
- Name: Dana\r
  Comment: @Edu hi calculation with 3% is only done provided you have an ERA (en route alternate)\r
- Name: Luke\r
  Comment: Simple fuel calculations in FPL scare me\r
- Name: Akaash\r
  Comment: UK CAA 10/10/22\r
- Name: Lukas\r
  Comment: They keep putting these answers just to test how mature we are.\r
- Name: Mula\r
  Comment: greater of 5% of trip\r
OR\r
5 min Holding\r
- Name: Jonathan\r
  Comment: 17/05/22 - Austro - Exact answer\r
\r
Question Number: AT00105\r
- Name: AlexSL\r
  Comment: For UK CAA, this is in the Jeppeson Airway Manual - ATC section GSP-467\r
- Name: FALCON7G\r
  Comment: Heavy - 136,000 or more\r
Medium- 136,000 - 7,000\r
Light 7,000 or less\r
\r
Good luck champs\r
- Name: ElmosFire\r
  Comment: CAA Malaysia Seen - My question for this was they gave the actual mass of the aircraft and certified T/O mass. For ICAO wake turbulence category is based on certified T/O mass.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @ElmosFire, thank you for your feedback. We need more detailed information so that we can add a new question or update this one (333194) according to the question that appeared in your official exam. Therefore we kindly ask anyone who encounters this question on official exams to let us know.\r
- Name: David\r
  Comment: These can also be found in your Jeppesen Airway Manual.. If you are allowed to bring it to the exam, it holds quite a few answers!\r
\r
Question Number: AT00106\r
- Name: Fmaiate\r
  Comment: @Aithon the weather option is not a concern once the question doesnt state anything about weather has changed, therefore we presume that the weather is not a problem and has been checked prior to departure otherwise they wouldnt have departed.\r
- Name: Aithon\r
  Comment: Is the weather minima answer wrong or just less right?\r
- Name: skyys\r
  Comment: Today austro, however, with different fuel numbers in the question, same correct answer.\r
- Name: Fibster\r
  Comment: Got this in IAA the question was reworded but answer was the same,\r
- Name: Ulirich\r
  Comment: appeared at lba today. but with new option instead of B) it was: "Check the weather and if within minima proceed to destination..\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Ulirich. We have updated one of the options accordingly. Thank you for your feedback.\r
- Name: Ezequiel\r
  Comment: If you're in doubt, always choose 'land with final rsv intact'\r
- Name: somethingmika\r
  Comment: You sure this question is worth 3 points? Seems like a pretty simple question to answer. There is no alternate so forget 2 of the possible answers. The question states we will only use 8/15mins of Additional Fuel, so no need for an emergency as we have enough. If it is worth 3 points, it's a steal and make sure you all know this question by heart. Usually 3 points are given for Extra Fuel calculations etc.\r
- Name: Bogdan\r
  Comment: Guys, where do you see the points every question is worth? I am taking exams at Romanian CAA, I looked in their platform but there is no place showing the points.\r
- Name: Pedro Adrian\r
  Comment: thought this would be part of the contingency fuel but ok..\r
- Name: Koen\r
  Comment: Seen in Sweden. Reworded question but same answer, worth 3 points\r
\r
Question Number: AT00107\r
- Name: ivanzulevic\r
  Comment: DCT stands for DIRECT\r
\r
Question Number: AT00108\r
- Name: Jnp111\r
  Comment: Solid 10 min i was here looking at EHI 12 and no 2\r
- Name: LitMW\r
  Comment: Cop: Your eyes are all red. Did you take any illegal substances?\r
Me: No officer, i have been trying to find ORIST for the past 15 minutes.\r
Cop: I am an EASA official in disguise. Step out of the vehicle for me.\r
- Name: Plnakl\r
  Comment: lost my medical while trying to find ORIST\r
- Name: MoritzV\r
  Comment: I cant eat enough carrots to heal my eyes after this task\r
- Name: MCDavies\r
  Comment: Seen UKCAA today but with BORLO, as mentioned in the comments. I also put UP87.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @MCDavies. We have added a new question based on the information you've shared: 334816. Please check this question and compare it with the one you encountered in the official exam. Thank you for your valuable feedback.\r
- Name: RotorRider\r
  Comment: Locate the VOR first, then follow the airway. This makes "finding Waldo" less of a headache.\r
- Name: Bags96\r
  Comment: Seen UK CAA, but had BOLRO as the overfly point instead of ORIST. I chose UP87 but cant confirm if this was correct as of yet\r
- Name: AmirTaushkanov\r
  Comment: I dont have any words to explain the pain inside me\r
- Name: Irip77\r
  Comment: Checking the chart or minutes, starting to worry about my vision, questioning if I am dumb, reading comments, and realizing I am not alone, priceless :)\r
- Name: AliaBonin\r
  Comment: zoom with the plus in the bottom left corner of your window, so the picture will zoom in hd quality. if you use ur browser zoom, it will be in bad shape\r
- Name: Berni\r
  Comment: I just love these kind of charts where proving the basic ATPL knowledge is just a secondary objective, but rather wasting your time to make you fail is their main priority!\r
There's no way that spending 10 minutes looking for the smallest waypoint in an information-cluttered area is going to enhance our skills, this is pointless in my humble opinion.\r
\r
We better be quick on these IFR maps, otherwise we're done for.\r
- Name: givme5whiskey\r
  Comment: They couldve just put a wheres Wally? Question instead.. basically has the same learning effect\r
- Name: BoeingOrAirbus\r
  Comment: Finding ORIST: 5 minutes\r
Finding the answer: 5 seconds\r
- Name: SkyhawkPolska\r
  Comment: ULC POLAND MAY 2023;\r
\r
SAME EVERYTHING.\r
\r
UY110 CORRECT ANSWER\r
- Name: LGALL\r
  Comment: good 10 minutes looking for it\r
- Name: XavierDonoso\r
  Comment: @Christian instead of blaming Mike for saying what we all do think, be quite and move on. Zooming won't make these maps less pixelated, so you ain't even providing a solution. Telling him ignorant got no point here, that's just rude. Your arrogant and belittling behaviour won't bring you far in cockpit, that's for sure. Just look at all those thumbs down.\r
- Name: Witryna\r
  Comment: First time in my life I can feel pain to my eyez\r
- Name: Bob\r
  Comment: Orist, where are you buddy ?\r
- Name: Philip Frisch\r
  Comment: Seen Denmark July 2022\r
- Name: Lukasz\r
  Comment: Cool chart, I literally cant see anything\r
- Name: Mike\r
  Comment: EASA please give us smaller charts, more routes, less readable.. that makes us better pilots. After ATPL a have to go for glasses, after 1.5 year studying those Maps and graphs.\r
\r
Question Number: AT00109\r
- Name: Clivedesouza11\r
  Comment: Serious question, does anyone actually bother to work out the second time as well?\r
- Name: Lafiq\r
  Comment: Base factor x dist ;)\r
- Name: JojoD\r
  Comment: ANAC Portugal 13/03/25\r
2 point question. Same information and exact same answer.\r
Exam was very banky like 90%. Good luck guys\r
- Name: EuroJetPilot\r
  Comment: ULC Poland today probably 99% word for word. Same information 30kt wind. There was that answer probably correct but I marked other one. Rest answer it was 20/20; 13/19; 19/20.\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @EuroJetPilot, thank you for your feedback. We have updated the options accordingly.\r
- Name: Wiberus\r
  Comment: Just reduce GS by 30 aswell and recalculate leg times\r
- Name: Mahdy\r
  Comment: I actually calculated the ground speeds based on TAS with the winds given without using their GS given, and I find, for the first part of the question a GS of 85 kt and it gives me exactly the correct time of 23 min.\r
\r
Sometimes they want us to have an astronomical precision and sometimes we might get punished for being too precise. The lack of consistency from easa is ridiculous ..\r
- Name: HadiK\r
  Comment: Would calculating the actual GS of 78 kts as it took us 17 min from VJF (where we reduced the speed) to Tarifa be also correct? That should be standard as it’s what we normally do with other exercises.\r
I got 25 min for the first and 24 for the second, which is pretty close to the 23 and 23.\r
- Name: Domenico\r
  Comment: How can someone understand wether to calculate the GS with CRP-5 or not? Because, if done with CRP-5, I get 82-85-88 its GS. Quite close, but the 1st is not 87\r
- Name: SkyhawkPolska\r
  Comment: ONLY question in whole bank referencing this region near MALAGA so for me .. "23" "23" and move on..\r
- Name: Fisher\r
  Comment: Small appreciation post tofor making such in detail questions. The annexes provided are very close to what I've seen on the exam.\r
- Name: A350WBX\r
  Comment: Anac today requesting remaining fuel @LEMG\r
- Name: PaulVlad\r
  Comment: @AerialScope wind is the same, so you take the same wind into account, thus GS decreases same as TAS, by 30.\r
- Name: ATPLhustler\r
  Comment: Imagine if this question is one point only\r
- Name: BLima\r
  Comment: Great question! Really well made, it's impressive!\r
- Name: ArbreMagique\r
  Comment: Seen in Greece 15/003/2024 but the questions mentioned : Time from Tarifa - Estepona and Time from Estepona to Benalmaneda\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @ArbreMagique. We have updated the question accordingly. Thank you for your valuable feedback.\r
- Name: Alexander\r
  Comment: Seen Austro and reworded so that the answers actually make sense: the second leg asked is until Benalmadena instead of TOD!\r
- Name: LAIAMED18\r
  Comment: Finding the correct answer, then trying to understand why the numbers do not correspond, re calculate, choosing the wrong option, then starting a 10 years therapy.\r
- Name: easadepression\r
  Comment: why do they punish the people who calculate it correctly?\r
\r
memorise "23 and 23", it's the only way in this case..\r
- Name: Ralle400\r
  Comment: check your question. The first time you want to know are TWO waypoints! So the answer is and explanation don't fit to the question.\r
- Name: ATPL QUESTIONS\r
  Comment: Hello everyone, we appreciate your comments! Based on the available answers, it appears that when they mention "the next two legs," they are referring to the journey from Tarifa to Estepona and then from Estepona to TOD. We acknowledge that this could have been clearer in the question itself. If you happen to encounter this question worded in the same way, we recommend that you consider raising a challenge. Thank you!\r
- Name: Antonio\r
  Comment: can you please tell us why the next two legs from VJR is Estepona and TOD? Isn't it Tarifa and Estepona??\r
- Name: marticarving\r
  Comment: Agree with Chris..one leg (vjf to tarifa) is missing\r
- Name: Felix\r
  Comment: I thought we have to calculate the GS by ourselves..we always assume a trick behind everything and getting suspicious\r
- Name: Vasco\r
  Comment: Let's just ignore the fact that a flight from Faro to Malaga will pass through Vila Real..\r
- Name: Chris\r
  Comment: Aren't the next two legs from VJF to Tarifa and to Estepona rather than from Tarifa to Estepona and then to TOD?\r
\r
Question Number: AT00110\r
- Name: Yasinayranci\r
  Comment: i got this from norway but the second option wasnt in it\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Yasinayranci, thank you for your feedback. The question you mentioned is already in our database, question number 338077.\r
- Name: davidos\r
  Comment: Similar ULC Poland, no option "2. the weather is below minima". Answer was "only 3" which there it's 4 and states "there is no fuel available at the destination aerodrome" :)\r
- Name: ATPL QUESTIONS\r
  Comment: Hi guys, thank you for your feedback. We have added a new question based on the information you've shared: 338077.\r
- Name: BendikB03\r
  Comment: Norway today 12.03.24. Excact same q, but without option 2 so I chose "3 only".\r
- Name: JKirbs\r
  Comment: @Ralf they will not refuel during a thunderstorm. If you can land at destination, but have a quick turnaround due to any weather possibility - you could plan to tanker. Although, I agree it's a stupid question because this is highly unlikely.\r
- Name: Tom\r
  Comment: I wish these kind of questions existed in my exams. But no, Ill end up with some EASA special in a language Ive never heard of :((\r
- Name: Ralle400\r
  Comment: why weather?? Therefore I take alternate fuel with me! But that's not tankering?\r
- Name: MaximeHaulotte\r
  Comment: AUSTRO, same question and answers, but 2 (The weather at the destination is below landing minima) was not an option.\r
- Name: diogorsilva\r
  Comment: Fuel rules have to be changed in order to consider that tankering has anything to do with weather below minimuns at destination. The question is a wrong joke.\r
- Name: JamesRayner\r
  Comment: The reason for 2 being correct is that you don't mind having extra fuel in the event of a diversion.\r
\r
Since the weather is below minima, you may need to go to your alternate. In that case, it would actually be nice to have the extra fuel\r
\r
Number 4 is probably quite obvious so no explanation needed there\r
\r
Good luck guys :)\r
- Name: Gabriel\r
  Comment: 1 is assuming before you consider tankering you are at the MLM\r
- Name: Air Croissant\r
  Comment: Seen UK CAA\r
- Name: Tomas\r
  Comment: Czech CAA, same correct answers\r
- Name: Jakub\r
  Comment: Choose anwers that probably/ for sure will not allow you to tank at destination.\r
- Name: Cameron\r
  Comment: IAA 25/08/21\r
\r
Question Number: AT00111\r
- Name: muadib25\r
  Comment: There appears to be an error in the FlightPlan image: At the EIDW-LFPG portion, the sum of the FPL FUEL should be 6116, not 6086. Unless I am missing something...\r
- Name: DavidApollo\r
  Comment: We know when we land at EIDW we need to land with Final R & Alternate still on board so...\r
5,226 - 230 (Taxi) - 157 (Cont) - 2933 (Trip) = 1,906kg <-- Final R + Alternate\r
\r
Going back to LFPG block = 7,100kg\r
TANKER amount --> 7,100 - 1,906 = 5,194\r
Fuel Penalty at the bottom of EIDW - LFPG --> 5,194 x 1.06 = 5,505\r
- Name: Berkay\r
  Comment: the trip fuel on the annex shows 2933 KG can you please check where did we find 933 KG as Trip Fuel ?\r
\r
Thanks and good luck everyone :)\r
- Name: taviabrudan\r
  Comment: Seen in Austro, different values\r
- Name: RotorBoat\r
  Comment: @DRU1024 If you load your extra fuel without taking into account the contingency burn, the fuel you loaded will potentially not meet the requirements of the minimum block fuel for the EIDW-LFPG leg (7100kg) as the contingency burn could've been used, and will end up not being accounted for.\r
\r
It's a very awful assumption for a question like this, unfortunately. If you assume worst-case fuel burn for this scenario, it should help you push through this question!\r
- Name: Peresso\r
  Comment: seen today in malta but different values, method is still the same\r
- Name: DRU1024\r
  Comment: Don't get why we have to burn contingency fuel. An assumption is not a explanation why we should assume this.\r
- Name: maplewings\r
  Comment: Any explanation as for why in question 318597 contingency fuel is not being used and here it is?\r
- Name: NikolaosK\r
  Comment: Once more the examiner wants you to guess what kind of outrageous assumption he made the day (or most probably late at night) he thought of this question : "We assume that we have to use the Contingency fuel on the way to LFPG because something happened we wont have the minimum fuel to gt back " Really?? By the same token why dont we assume that something even worse happens and we have to use the Final Reserve Fuel as well?? Who is to say we cannot assume that as well?\r
- Name: SebiK\r
  Comment: Had this on my Austro exam. Same exact concept but different numbers. Ill search the database if they have a different version; but I got it right so use the saw method as for this question. Dont be afraid of new numbers\r
- Name: Fmaiate\r
  Comment: Can someone explain why we have to burn contingency fuel? The explanation isnt clear\r
- Name: Maramalbader98\r
  Comment: 1) Total fuel for sector 1 - Fuel burnet\r
5226 - 230 - 2933 -157 = 1906\r
2) fuel required for sector 2 - remaining fuel\r
7100 - 1906 = 5194\r
3) Weight change increment\r
5194 / 1000 = 5.194 x 60 = 312\r
4) 5194 + 312 = 5506\r
- Name: Esmita\r
  Comment: Hungary with different numbers\r
- Name: trueba\r
  Comment: (1) tof at lfpg minus taxi,trip,contmin\r
5226-230-2933-157 = 1906kg of fuel in your tanks when you land at eidw\r
\r
(2) you need to take off with 7100 at eidw so:\r
7100-1906 = 5194 kg EXTRA that you need to add when you take off at lfpg\r
\r
(3) also fuel penalty is 60kg more fuel per 1000 extra\r
(5194/1000)*60 = 312kg\r
\r
(4) add fuel penalty\r
5194+312 = 5506 kg total extra fuel\r
- Name: jakehalliday\r
  Comment: @gorder22 EGAA (Belfast) is our alternate so EGAA/25 992kg means we have planned 992kg as alternate fuel. If we land at EIDW, we haven't gone to our alternate, so there is still that 992kg on board upon landing.\r
- Name: gorder22\r
  Comment: What does EGAA/25 (992 KG) correspond to ? Do we assume it to be burnt durning the flight ?\r
- Name: TeddP\r
  Comment: Other observations-the alternate should read LFPO not EFPO.\r
\r
The return fuel total should be 7130, ether that or the additional should read 30 less.\r
- Name: TeddP\r
  Comment: Levente\r
If you land at EIDW with 7100 you will burn some fuel taxying in and therefore when you come to return you will be short.\r
- Name: TeddP\r
  Comment: You would also need to take taxi fuel inbound at Dublin but it doesn't seem to take that into account. That said only one answer is close.\r
- Name: ScareBus\r
  Comment: Why are we using the Target Fuel for the return leg (7100kg) instead of the total planned fuel (7130kg)?\r
- Name: TomiH\r
  Comment: Why is nobody mentioning the fact that 173+2953+171+1823+996+1014 is 7130 and not 7100?\r
- Name: AndyLT\r
  Comment: had this question today in Poland. Working out is the EXACT same as here but different answer. Answer was 2000 and something - I think it was 2554\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @AndyLT, thank you for your feedback. We appreciate it if anyone who has encountered the question you stated could provide more detailed information so that we can add a new question. Thanks in advance.\r
- Name: Zahar\r
  Comment: Why we bring extra fuel for flight from Paris to Dublin , why we should take it into account?\r
- Name: SHOKS\r
  Comment: Here u considered contingency fuel as consumed but in another similar question u did not\r
Please standardise\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @SHOKS, thank you for your comment. We should assume that the contingency fuel is burnt otherwise, (if we have used it) we will be below the minimum block fuel for the return route. Please share with us the question number you mentioned so that we can help you in a more useful way.\r
- Name: Nic490\r
  Comment: @Joan: Because you carre the fuel on that leg, not the last one. Hope that helps!\r
- Name: JoanAntoni\r
  Comment: could you explain to me why we must use the fuel penalty of the previous flight? Instead of the fuel penalty of the flight that me must do?\r
- Name: vtins\r
  Comment: Hey ,I had this kind of question today, but the flight was from EDHM to EIDW and back. The calculation principle was the same but with different values. One flight had a Block fuel of around 4000kg (only remember it vague) the otherone was around 5000kg. Correction factor value for tankering was 56kg per 1000kg.\r
\r
The correct answer (not guranteed) should be 2970 (maybe 2907?).\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @vtins, thank you for your comment. We appreciate it if you or anyone who has encountered the question you stated could provide more information. Thanks in advance.\r
- Name: Slyuosmaz\r
  Comment: Which LO says I need to know interface of each stupid existing flight planning tool? How am I supposed to know difference between FPL fuel, Target and Block fuel and if I have such a "nice" tool then why can't it give me Block fuel so that I don't have to assume word "TARGET" to mean "Block fuel"? And the most important: why would anyone (who wants to stay alive) assume that adding extra 5 tons of fuels wouldn't affect fuel consumption during first flight?\r
- Name: Schlugoo\r
  Comment: I had a question like this but nothing to calculate. Just theory. Austro Control 30.08.24\r
\r
You plan a flight from Athen to Paris and back. Due to refueling problems in Paris, you decide to take fuel for the flight Paris-Athen on the outbound leg, so that no fueling is necessary in Paris.\r
\r
What do you expect?\r
A.) The fuel consumption will be less from Paris to Athen\r
B.) The take off mass Paris - Athens increases\r
C.) The CO2 emission will increase on the outbound leg Athen-Paris\r
D.) You expect no change\r
\r
I chose option C.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Schlugoo. We have added a new question based on the information you've shared: 337896. Thank you for your feedback.\r
- Name: Nmaca64\r
  Comment: How I did it:\r
We need to be at the gate in Dublin with 7100 kg. So what do we need in Paris to achieve that? That and everything we reasonably expect to burn: definitely taxi and trip, and contingency. So we need 7100+230+2933+157 = 10420kg at the stand in Paris. We have planned 5226kg, so that means we want to tanker 10420 - 5226 = 5194 kg.\r
THEN don't miss the extra step of fuel penalty for tankering! We need to add 60 kg per 1000 kg extra, which brings you to 5505.4 kg\r
- Name: ViktorS\r
  Comment: KermitTheSnitch\r
\r
Before solving this question, take a sip of coffee and relax, cause its quite simple, once you get it ;-)\r
\r
1) Knowing that our planned fuel in the first leg is 5226 kg, we subtract taxi, trip and contingency = 1906 kg (fuel after landing at EIDW).\r
2) Our fuel needed for the return is 7100 kg --> 7100 - 1906 = 5194.\r
3) The fuel penalty is 60 kg per 1000 kg. Just divide 5194 with 1000, and multiply the answer with 60, which is 311.64.\r
\r
Add 5194 and 311.64 together and you will get 5505.64! :-D\r
It just requires some patience and practice, and you will get there.\r
Good luck!\r
- Name: KermitTheSnitch6\r
  Comment: If anyone has a methodical way to do these pls could you share?\r
\r
I look at this and just have no idea where to start :(\r
- Name: CharlieBravo\r
  Comment: please correct the image of the explanation, "contingency is not red boxed" and taxi is red boxed .. please correct\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @CharlieBravo. We have updated the figure. Thank you for your feedback.\r
- Name: Antonioslmarques\r
  Comment: The situation happens at the preflight. No one can assume thatanning phase the contingency fuel will be consumed during flight. Wrong assumption. Bad question. Wrong answer.\r
- Name: Talisa\r
  Comment: Hi there,\r
I am not convinced on the correct answer and the explanation. The explanation assumes the worst case on the flight LFPG-EIDW by fully consuming the contingency. Would the worst case not that we also assume an additional holding at EIDW and end up at EIDW with a remaining final reserve fuel only? With this assumption we would remain with 914 kg on board only at EIDW and a need of 7100 kg for the EIDW-LFPG leg. This would bring us to additional 6186kg required + penalty (672kg) = +7458Kg.\r
- Name: WojAviation\r
  Comment: To answer the question from ATPL- yes, the numbers are for TARGET fuel to first and second destiantion. And they are exact numbers from the annex, 100%. I memorized them and wrote down just after leaving the exam, specially for you guys:)\r
- Name: Charliestuckey\r
  Comment: Seen today (15/05/24) Malta - exactly the same as this question, word for word, so I put 5506\r
- Name: WojAviation\r
  Comment: Hey, had similar Q in my Flight Planning exam today, Polish ULC, but the numbers were different. The fuel was exactly 5024 kg to first destination and 4753kg to the second. That I am absolutely sure. And the fuel penalty was I believe 56kg for 1000kg extra. Fortunately I remembered the way to solve this one and got it right.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @WojAviation, thank you for your feedback! Just to clarify, in the annex, the target fuel for the first destination was 5024 kg and for the second it was 4753 kg? Thank you!\r
- Name: Marco\r
  Comment: could you please create a new question with what aurel is saying, thanks\r
- Name: ATPL QUESTIONS\r
  Comment: Hey guys. We are aware that a question very similar to this question with an answer of 2972 kg appears in your official exams. We will add this question to our database but we need more details about it. We don't want to randomly change other fuel quantities to add a new question with the answer 2972 kg, because this new question would not be the same as the one you all encountered anyway, only the answers would be the same. So we kindly ask for more detailed feedback from anyone who encounters this question. Thank you all for your feedback.\r
- Name: Nivatierrez\r
  Comment: Same as Aurel in Spain, another numbers and the correct answer is 2972\r
- Name: Pepperoni69\r
  Comment: I solved it this way:\r
\r
1) determine the fuel that is gonna be burned btw LFPG-EIDW. We need to take into account the contingency because, in case we don't assume is used and, for some reason we need it, we are below the minimum fuel for the return flight.\r
The total fuel that we are gonna burn on the first leg so is 230+2933+157=3320kg.\r
2) for the return leg, EIDW-LFPG we need 7100kg, as stated by the flight plan, but we'll have in our tanks also the fuel we didn't burn for the first leg (5226-3320=1906kg), so actually we don't need to take with us 7100kg for the return leg because we are gonna have also the 1906kg we didn't burn for the leg LFPG-EIDW.\r
3) Considering the above, the fuel we need to additionally put in our tanks is the difference btw the fuel required from EIDW-LFPG and the fuel we are not gonna burn on the leg LFPG-EIDW, so 7100-1906= 5194kg\r
4) to this 5194kg we need to add the fuel penalty to carry them, we are gonna take the penalty of the first leg as we need to carry them from LFPG to Eidw. As a result we have [(5194/1000) x 60] + 5194 = 5506.\r
\r
hope it helps guys!\r
- Name: TheMegaDon\r
  Comment: Seen today in Ireland with different figures, the answer was something between 2000 and 3000, 5506kg was also among the possible answers so don't just memorise this one. All the questions were right out of the bank, got 100% without touching the book, easy work boys and girls, just abuse this bank and you'll be fine. Good luck to all!\r
- Name: EASA4EVER\r
  Comment: Do NOT memorise this one, had this question in my Austro Control exam on monday with different Target Fuel values, answer was something like 2900kg, was worth 2 points!\r
- Name: Ezequiel\r
  Comment: Get the landing fuel at B, Taxi-Trip-Contingency = 1906 kg.\r
We need for T/O from B to C 7100 kg (target fuel).. Then, Target fuel - Landing fuel = 5194 kg, BUUUT we need to add the fuel penalty! adding the 69 kg per 1000 kg, 5194 + 358 = 5552 kg (close enough)\r
Hope it helps, good luck with your exams!\r
- Name: JonHart\r
  Comment: new question\r
\r
New question for flight planning seen 07/11/2023 for Austro control in Spain.\r
\r
An aircraft is flying along a true course of 276 and the actual wind is different than the forecast wind. The forecast wind is 240/15 and the actual wind is 290/25. The airspeed remains the same. Which statements are correct or incorrect?\r
\r
1) The lower ground speed will result in a later time of arrival.\r
2) The wind correction angle will change from a value to the right to a value to the left.\r
\r
Answer was 1) Correct and 2) Incorrect\r
\r
Worded alongs the lines of this\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Jon, thank you for your valuable feedback! A new question was added to our database: 337360. Good luck with your studies!\r
- Name: JonHart\r
  Comment: Seen Austro Spain 7/11/23 , although different values for fuel and answer was 2972kg, if I remember correctly. I can confirm that they want you to assume you have used your contingency fuel. The working out is exactly how the explanation is but just different numbers so make sure you know how to work it out, 2 pointer\r
- Name: easadepression\r
  Comment: In my opinion the contingency fuel burn in the explanation is irrelevant and has no reasons to be done. Is A T P L q making explanations to match the answer..?\r
\r
Don't do the part with contingency and the answer will be 5339,2 which is the closest to the right one.\r
- Name: pierinocolombo\r
  Comment: First, to solve this question you have to stop complaining, now, taking the most important step, we begin to solve:\r
\r
1) Knowing that our planned fuel in the first leg is 5226 kg, we subtract taxi, trip and contingency = 1906 kg (fuel after landing at EIDW).\r
\r
2) Our fuel needed for the return is 7100 kg --> 7100 - 1906 = 5194.\r
\r
3) The fuel penalty is 60 kg per 1000 kg, or in simpler numbers --> 6 kg per 100 kg. 5194 x 1.06 = 5505.4\r
\r
I hope that helps :)\r
- Name: sidalmukhtar\r
  Comment: It is easy but the explanation is a way too complicated\r
\r
You will land with 1906 KG after burning taxi trip and contingency so you need to fill 5194 to meet the required fuel for the return and since there is penalty on refueling which 60 kelo for each 1000 kg 5194*1.06= 5505.64 kg\r
- Name: JonasG650\r
  Comment: general feedback for everybody with Austro Control:\r
\r
Unfortunately FPL was not banky at all. However it is still easy to pass as long as you are well prepared.\r
Out of 42 questions I knew 6 or 7 from and some of them have not been reported at Austro before.\r
\r
The exam itself was very similar to GNAV.\r
More than half of all question were Flight/Aviation Computer questions -->finding W/V with heading given; find revised ground speed; find new ETAs with changed wind and so on.\r
\r
About 80% of all questions were calculations - only very little theory.\r
\r
Advise for Austro:\r
-make sure you are confident using the Flight Computer\r
-practice flight log questions\r
-take a look at the recently reported questions the morning before the exam just for short term memory.\r
\r
Good luck !\r
- Name: ChrisScholl\r
  Comment: Okay, so after working through this question again and again, I came to a conclusion which should help (at least me) to solve this question..\r
1. they are asking us to have the target fuel (7100 kgs) on board when returning, so this is the amount of fuel we should have when arriving at EIDW\r
2. We intend to land at EIDW (if we would have to use the alternate we wouldn't care about the tankering anymore, so consider the reserve & alternate fuel untouched @EIDW). To get to EIDW we burn from our block fuel the taxi fuel, the trip fuel and we also consider having burnt the contingency fuel to be on the safe side if we really would need to use it.\r
3. So we arrive with 1906 kgs on board\r
4. Find the difference to target fuel to find out how much fuel we need to tanker to get our target fuel @EIDW and correct it for the increased fuel burn via the 60kgs/1000kgs at LFPG\r
\r
I know for some this question might seem easy but i struggled a lot, maybe it helped someone else, too\r
Good Luck @ the exam :)\r
- Name: Mikolaj\r
  Comment: POLAND ULC 28.04 - Exact same wording but data was changed. Watch out - it was possible to choose 5056 kg but correct answer in my case was something over 2900 kg (Difference in req fuel + correction for extra weight)\r
- Name: kosta\r
  Comment: assume the contingency fuel is burned? ASSUME? why should i assume? how can you create a question based on assumptions? i am writing an EXAM. why should i be assuming anything in an exam? lol\r
- Name: rixii\r
  Comment: Seen in Austro today but with different numbers.\r
\r
First half was the same but second part (RETURN SECTOR) was different.\r
\r
Target block fuel in EIDW was something around 4775 and answer was around 3330 (2800 + additional fuel due to more weight).\r
- Name: ATPL QUESTIONS\r
  Comment: Hi everyone, thanks a lot for your feedback! Correct option and explanation updated :)\r
- Name: Gonzalo\r
  Comment: SENASA SPAIN, answer 5506\r
- Name: Balkanpilot\r
  Comment: Why are we taking into account Extra fuel at EIDW? The question clearly states MINIMUM fuel. If I am the pilot on that flight I would've fuelled up 4265 kg of fuel (without 1014 kg of extra fuel). If that Extra fuel is necessary for any reason it should be stated in the question otherwise it is not needed in my opinion since we have enough final reserve fuel and alternate fuel.\r
- Name: Javier\r
  Comment: When you land at EIDW you need to read 7100kg on the fuel indicator.\r
\r
1- So, you departed from LFPG with 5226kg but you will burn the taxi and trip fuel (2933+230=3163kg), so substract to know what you have remaining, 5226-3163=2063kg.\r
\r
2- You have 2063kg remaining but you wanted 7100kg so substract to know the extra fuel you need to add before departing, 7100-2063=5037kg. Thats it, you have the extra fuel you need, now just calculate the fuel penalty and add it.\r
\r
3- (5037/1000)x60=302.\r
302+5037= 5339\r
- Name: Levente\r
  Comment: Now I get it, but I used another method. Focus on that we need to have 7100 kg when departing from eidw. In order to achieve this, we need to depart from lfpg with the target fuel of 5226 (lfpg-eidw) and some extra (we need to find this). The key is that of this 5226 we won't consume the reserves, we'll have those at eidw.\r
Let's check our actual fuel in tanks after landing at eidw (basically the reserves of lfpg-eidw route): 157+992+914=2063, we already have this, but we need 7100, so we need 5037 kg more. But don't forget, that taxiing after landing at eidw requires 173 kg (this is very speculative, based on that we need 173 kg of taxi fuel when departing from eidw), we need to add this to extra (otherwise we wouldn't have 7100 when departing). 5037+173=5210 kg is the extra fuel.\r
Looking at the fuel plan we see that on the lfpg-eidw route there's a penalty if you carry extra fuel (+60 kg for every +1000kg). Calculate the penalty: extra/1000*60= 5210/1000*60=313 kg is our penalty. As last step for total extra, add extra fuel and penalty: 5210+313=5523 kg. How they get 5506, I don't know, but that's the closest value in the answers. If you find it difficult, try to draw 2 fuel tanks for the two different airports, and depict the required amounts at each locations.\r
- Name: Levente\r
  Comment: I think 5339 should be correct, in other questions we never account for taxi fuel at the destination airport\r
- Name: ATPL QUESTIONS\r
  Comment: @Levente, remember that LFPG-EIDW-LFPG trip is made at this question. Therefore taxi fuel at EIDW should be taken into account as it is not the final destination.\r
- Name: Avigator\r
  Comment: How much fuel i have on me right now= 5226 kg (block)\r
How much fuel i need at destination to come back without refuelling= 7100 kg (block)\r
How much extra needed=7100 kg - 5226 kg= 1874 kg\r
\r
But\r
How much i will burn during taxi and trip to destination= taxi(230 kg) + trip(2933 kg)= 3163 kg\r
\r
If i fill my tank with 1874 kg + 3163 kg= 5037 kg + 302 kg (penalty 60kg/1000kg)= 5339 kg on top of what i have right now\r
i will left with 7100 kg of block fuel at destination to come back without refuelling.\r
\r
Basically i need to fill my tanks with 5226 kg + 5339 kg= 10,565 kg to make sure i have 7100 kg of block fuel at destination.\r
\r
In my opinion i only need 5339 kg minimum extra.\r
\r
Any corrections will be appreciated?\r
\r
Question Number: AT00112\r
- Name: CapitaineCott\r
  Comment: @ebek32 I suggest that you go the Air Ops doc 965 PART CAT.OP.MPA.181 AMC6 page 982-984 point (d) page 983 RCF (Version Feb 2025), aerodrome B and C are both going via the DP when you draw it\r
- Name: RotorBoat\r
  Comment: @dlatr assuming the new syllabus, i believe if it states "with variation" in the q it'll mean to use the 3% for your leg to your optional refuelling destination.\r
\r
if it states without variation, then you assume 5%\r
\r
also if it states suitable en-route alternate or en-route alternate, you use 3%\r
- Name: dlatr\r
  Comment: comparing this question to No: 336672, Both q use the term of Optional refueling destination but in this we use 5% in No: 336672 3% why this change occurs?\r
- Name: Speegu\r
  Comment: they asked for destination B only in question\r
- Name: Federico00\r
  Comment: @Fmaiate ok thank you very much !!\r
- Name: Fmaiate\r
  Comment: @Federico00 but C isnt an Enroute Alternate, https://ibb.co/WWm8Hky6 , C is just a division airport for the DP, to consider 3% the question will state Enroute Alternate, otherwise consider 5%. Get attached to ERA mentioned or not in the question ,\r
If it state that ERA is available/can be use/etc use 3%\r
If the question doesnt state anything about ERA use 5%\r
- Name: Federico00\r
  Comment: @Fmaiate ok but he says "C is a optional refueling destination"..\r
- Name: Fmaiate\r
  Comment: @Federico00 you should only use 3% when the question mention that you have an EnRoute Alternate.\r
Please check question 339312\r
- Name: Federico00\r
  Comment: Sorry shy do you use always 5% and not 3% for the ruote A-DP-C?\r
- Name: CptBelt\r
  Comment: why is it 3%?? There is no mention that the refueling altn can be referred to as an ERA. We will never know the truth..\r
- Name: Pawcio\r
  Comment: what is the key to know when to add taxi fuel and when not?\r
There is a lot similar questions, asking about fuel required for flight, which has different attitude for this value (taxi fuel)?\r
- Name: MichalPL\r
  Comment: Explenation is very nice. Finally I understood where to use 3% of contingency.\r
Calculating A-B we have to find contingency from DP to B always, but we have to check alternate so\r
3% contingency ( reduced contingency ) from A-C and check which amount of fuel is greater and choose that.\r
Alternate is given here but in question we do not have anything that C is our alternate so alternate been calculated and given.\r
- Name: MauriMatta\r
  Comment: So we have to calculate A to C too?.. (Question asks for A to B fuel.)\r
- Name: ZachLaurent\r
  Comment: 777umaid 11000 kg = A to C via DP\r
- Name: Leonardo\r
  Comment: If yall didnt notice, its always the 5% from dp to destination, in all questions\r
- Name: Lucasb134\r
  Comment: trip = A-B\r
contingency = DP to B\r
\r
RCF 2\r
trip = A-C\r
contingency = 5% trip\r
- Name: 777umaid\r
  Comment: My way , I HOPE IT HELPS\r
https://ibb.co/r0Hv6JN\r
- Name: Adrian\r
  Comment: REDUCED FUEL CONTINGENCY\r
\r
The GREATER of:\r
5% from Decision Point (AD 1)\r
OR\r
5% of All Trip (AD 2)\r
- Name: AdamF\r
  Comment: UK 3 mark type in\r
- Name: flyingaua\r
  Comment: Austro Vienna exactly the same 31.05.2023\r
- Name: arya\r
  Comment: @Joe, in that question for RCF2 the alternate is en-route (read the last part of that question carefully). if alternate "En-route" then 3%.\r
i hope its clear now\r
- Name: jb123\r
  Comment: Why use 3% for RCF2 in Q339312 but 5% in this? Also, your explanation needs improving, Thanks.\r
- Name: Andrew\r
  Comment: UK type in\r
- Name: USAMA\r
  Comment: When he is asking flight time between the stations then why r we using Taxi fuel?\r
- Name: Thibault\r
  Comment: Seen DGAC France today, same data\r
- Name: MaxterPilot\r
  Comment: Hope it's help : https://ibb.co/GnXPhxf\r
- Name: MaxterPilot\r
  Comment: The most important thing is this kind of exercice is to understand that you must to CALCULATE YOUR\r
\r
Contigency (your 5 percent) : from the Decision Point to your destination, in this case B. (5 percent of 5000 kg)\r
\r
The reason why this procedure is named REDUCED contingency is because you DONT TAKE YOUR 5 percent of your TRIP fuel. BUT only from the Decision Point to your destination.\r
- Name: Danpanman\r
  Comment: You ain't getting to the runway without taxi fuel.\r
- Name: Philip Frisch\r
  Comment: Seen Denmark July 2022 word for word, same options and correct answer\r
- Name: Oscar\r
  Comment: minimum fuel required with taxi fuel included ?? really ??\r
- Name: Patryk\r
  Comment: minimum fuel required FOR THE FLIGHT ;-; great easa, thanks..\r
- Name: Alexx1215\r
  Comment: Minimum required --> We add also the taxi fuel\r
\r
Question Number: AT00113\r
- Name: Wardh\r
  Comment: Seen AUSTRO CONTROL/SWITZERLAND 24 october 2024\r
\r
Question wad a little different. Asking for RVR D CAT IIIB approach\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Wardh. We have recently added a question similar to the one you encountered: 332232. Please check this question and compare it with the one you encountered in the official exam. Thank you for your feedback.\r
- Name: TheGr4pe\r
  Comment: IAA options are 1590,1620 ft and 1590m and a random number\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @TheGr4pe. We have updated the options accordingly. Thank you for your feedback.\r
- Name: SleepyJoe\r
  Comment: it doesn't feel right when its this easy\r
- Name: SeldomFlying\r
  Comment: I was looking for the trap for about 3 minutes. There wasn't one..\r
- Name: RubenFinishdATPL\r
  Comment: Decision Height would have been 409?\r
\r
Question Number: AT00114\r
- Name: CaptainDarwish\r
  Comment: in the notes you state "Note: If the actual Take-off Mass is higher, there would be no economic benefit in tankering." although I understand what is being said as in english, but I dont understand the theory behind it. wouldn't ATOM always be higher than planned TOM when you go for tankering? could you please explain further\r
- Name: RotorBoat\r
  Comment: this subject saps my will to live.\r
how are we supposed to know flight leg distance means NGM?\r
- Name: Adam18479\r
  Comment: imagine never seeing this question in the bank before and going into exam. You would get it completely wrong based on the fact EASA decided "leg" now means NGM and not NAM? Ridicolous\r
- Name: vmx23\r
  Comment: flight leg distance, remind me when we taxi 4000 miles to the destination\r
- Name: JBMLL\r
  Comment: @AndyLT if they give you TAS and wind, they want you to calculate GS. If they want you to calculate GS, they're giving you NGM\r
- Name: CharlieN\r
  Comment: 1.) Calculate NAM using NGM/GS = NAM/TAS = 4000/400 = NAM/450 4000/400 x 450 = 4500NAM\r
2.) Calculate fuel ratio = 0.27/0.30 = 0.9\r
3.) Plot line across from 0.9 to where to meets the 4500NAM line\r
4.) Draw a line straight down from there and you should get 178,000kg\r
5.) 178,000 - 170,000 (your initial TOM) = 8,000kg\r
- Name: AndyLT\r
  Comment: how do I know if its NAM or NGM in the question?\r
- Name: Schmilb\r
  Comment: thanks for not putting NGM, much appreciated question writer\r
- Name: NicoH\r
  Comment: how am i supposed to know that the distance data give is in NGM and not NAM?\r
- Name: Henryy\r
  Comment: Figure 033-55 if you have the LRJT data sheets\r
- Name: ThrustTruster\r
  Comment: Oh finally at the destination the fuel's cheaper, almost clicked already 'operation not recommended'\r
- Name: BoeingOrAirbus\r
  Comment: BE CAREFUL! On other questions they say Air Distance (NAM) and others they say Flight Leg Distance (NGM). Seems logic what is what but when I see that EASA even has me doubt my own name, better to be safe than sorry\r
- Name: Razva\r
  Comment: Optimal higher > ATOM = Beneficial\r
Optional < ATOM = Not\r
- Name: Matias\r
  Comment: @atplq how do we know the distance provided in the question is NGM and not NAM? It nevers says.\r
- Name: ATPL QUESTIONS\r
  Comment: @Matias, flight leg distance is always given as NGM.\r
- Name: Jonathan\r
  Comment: 17/05/22 - Austro - Similar, different numbers\r
- Name: David\r
  Comment: @Harry, I'm (luckilly, I think) still in the ECQB2016.\r
- Name: Dmytro\r
  Comment: Today at Polish CAA\r
- Name: Hanook\r
  Comment: When departure is cheaper than destination then we carry more fuel\r
\r
When destination is cheaper than departure then we don't carry extra fuel\r
- Name: Sam\r
  Comment: Get Flight leg distance in NAM:\r
NAM = NGM x TAS / GS\r
......... = 4000 x 450 / 400 = 4500 NAM\r
\r
price ratio = 0.27 / 0.30 = 0.9 (Enter the graph with this and meet the 4500 NAM line and head straight down to meet 178,000)\r
178,000kg - initial weight 170,000 = 8,000kg available to tanker <------\r
\r
Question Number: AT00115\r
- Name: Feerreerr\r
  Comment: SEEN in SPAIN today, other answers reworded but correct answers were ok. Same concept\r
- Name: ATPLG8\r
  Comment: Planned = advance notice\r
Unplanned=notice after occurrence\r
- Name: Momo86\r
  Comment: Planned= outage is recognizable during flight preparation\r
Unplanned=pilot will be notified mid flight that the integrity is lost\r
- Name: Frsncesc\r
  Comment: both are notified, with the difference that the planned are notified in advance\r
- Name: McCrispy\r
  Comment: LBA July 2024, similar question, seemingly no correct answer.\r
Question was soething like 'when will the pilot be notified about an unplanned GNSS outage'\r
'an hour before the outage'\r
'sufficiently before the date of flying'\r
'during preflight preparation'\r
I forgot the 4th one, I think it was soething like 'it doesnt affect flight'. I appealed, because none of the answers made any sense, as the question was asking about an unplanned outage. All of the answers had some more text to confuse further haha\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @McCrispy, thank you for your feedback. Please keep us informed of the results of your appeal. We would appreciate it if anyone who has encountered the question you mentioned could provide more detailed information. Thanks in advance.\r
- Name: MichalPL\r
  Comment: if it is unplanned then you can not give futher notice.\r
- Name: Misiu1031\r
  Comment: Trust issue\r
- Name: Jack0410\r
  Comment: Planned = advance notice\r
Unplanned=notice after occurrence\r
- Name: Max\r
  Comment: @Gergo i thought the same, but when unplanned goes out, they will publish a notam right at the time they will notice. But when its planned its already published in advance\r
- Name: Husmani\r
  Comment: @Gergo I'm guessing the question is worded vaguely, they mean planned ones are notified beforhand. Whereas, unplanned ones are still notified just not with prior notice? I might be wrong though.\r
- Name: GGeri\r
  Comment: Someone tell me what is the difference between:\r
-unplanned outages are not notified\r
-planned outages are notified\r
- Name: donny\r
  Comment: I had exactly similar question today in my CAA but weirdly enough options were different:\r
A)unplanned outages are NOT notified(NOT being in caps lock in exam too) B)planned outages are notified in advance (I choose this as Ive seen it on the bank and sure to be correct but I dont have any idea if I got it right.) C) unplanned outages are notified weekly D) planned outages are not notified\r
\r
In my opinion I thought A is also right unless there is actually a more correct option between A and B.\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Salar, thank you for your feedback! Available options updated accordingly.\r
- Name: Angus\r
  Comment: Hey I know this one!\r
- Name: Michael\r
  Comment: seen switzerland, february 2023\r
- Name: Moha97\r
  Comment: @ATPLQ Had a similar question today. Options were. A - Planned outages are notified in advance. B - Unplanned outages are notified weekly. C - Unplanned outages are notified in advance. D - Planned outages are notified as they occur.\r
- Name: ATPL QUESTIONS\r
  Comment: Hey @Moha, thank you for letting us know! Available answers have been updated according to your feedback.\r
- Name: Joshua\r
  Comment: Only time I've ever seen "always" in a correct option in all 13 subjects\r
- Name: eulfen1\r
  Comment: Lemons are sour\r
Water is tasteless\r
ATPL is hell\r
- Name: bramkoene\r
  Comment: Ofcourse they can only notify if they plan to do it\r
- Name: Dan\r
  Comment: SEEN UK CAA 27/07/2022\r
\r
Question Number: AT00116\r
- Name: Arrow\r
  Comment: Use TRENT vor radial: 83 degrees and you are done\r
- Name: HarryOgden\r
  Comment: Had his UKCAA, but it was the other way around\r
- Name: corporatecasualt\r
  Comment: If im not mistaken you can use the plotter to measure and then compare it to the meridian. in this case its almost the whole meridian from 53N to 54N = 60NM. Please correct me if im wrong\r
- Name: ElPatron\r
  Comment: @Muhammedkasem Just compare the distance on the latitude. Good luck\r
- Name: Burraq\r
  Comment: Remember GNAV guys..\r
Dep = Ch of Long x 60 x cos of Mean Lat\r
dep = 1*38' x 60 * cos 53*07' = 58.81 ~ 59 NM\r
- Name: SierraPapaVictor\r
  Comment: you may have a different opinion about the RADIAL but the DISTANCE will help you with this question.\r
- Name: zeymahse\r
  Comment: @Soran04 Yes, as far as I've undestood, so far. If it's written on the chart, it's magnetic track and if you need true track, you can use CDMVT to add/subtract Var to get your true track, but, if you use your plotter on the chart, you'll directly read the true track and in this case you'll use the variation only if you need magnetic track.\r
Here, for example, since there isn't any written route that connects the two points that are mentioned, I draw a line myself to connect them. Using the plotter I got 82° TRUE track. Var is 2°W so -2° (because West is negative and East is positive for Var) and with CDMVT ( you subtract the values when going from right to left and you add them when going from left to right) I got 82° - (-2°) so 82° + 2° = 84° MAGNETIC Track\r
I did not seach for the distance sinnce there is only one 84° option.\r
- Name: Soran04\r
  Comment: So the bearings from the airways are magnetic headings but the straight lines that you use to align your plotter with, are oriented to true north?\r
- Name: AndyLT\r
  Comment: after 15 mins searching I found AMVEL\r
- Name: zeymahse\r
  Comment: 1. to find the waypoints, use the coordinates if they are given or follow the route if it is specified. Every map has a grid an all the routes's names are also always written, perhaps a few NM down or up from where you are looking but, the name will always be written. If nothing is provided, go on a blind searching spree. (..crying in a corner..)\r
\r
2. ON all H(ELO) chart, use the 1 INCH = 15 NM\r
\r
3. Good luck and keep on pushing. They may be strong, but we are stronger.\r
- Name: TommyCigar\r
  Comment: any feedback from SENASA Spain? I understand that you cannot take the JSPRM into the exam, i do not see a scale on the annex, i took the bearing using magnetic north of TNT vor as the datum and then used cos(53) x98 minutes of chlong to get the distance because i didn't see a scale on the provided annex\r
- Name: eWanHoge\r
  Comment: Q today in UKCAA, asking for distance and bearing from Trent to Timpo\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @eWanHoge. We have added a new question based on the information you've shared: 337049. Thank you for your feedback.\r
- Name: Elifs\r
  Comment: Where tf is AMVEL ?\r
- Name: MarcusR2\r
  Comment: AMVEL is not 2W, its on the 0 longitude\r
- Name: Kunal\r
  Comment: Uk Gatwick CAA earlier today, asking for distance and mag track from Trent to Tipil waypoint. About 2cm above Trent, answers were 7nm and mag track (cant remember)\r
- Name: ThrustTruster\r
  Comment: Even with coordinates it took ages to find AMVEL, instead I found ROLEX (N53'27 W004)\r
- Name: Dudu071wk\r
  Comment: ANAC PORTUGAL,23/05/2024 ,SEEN IN GNAV\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Dudu071wk. We have copied this question to General Navigation: 618660. Thank you for your feedback.\r
- Name: ATCguy\r
  Comment: Hello GNAV my old friend. If you need magnetic hdg FROM VOR, just allign protractor with some airway/radial from the VOR. Distance either calculate from latitude (60 NM between two parallels) or use the scale in the upper part of the map (like real sectional from GSPRM, you won't find the scale on annexes)\r
- Name: XIAOYAO\r
  Comment: good heck helped me a lot: the VOR symbol on the chart is always oriented referred to Nm. So\r
1) draw a line and use protractor,\r
2) overlay the protracator with the three small dash on the VOR symbol as 270 / 360 / 90 degree\r
3) you will read ~ 83.5 degree to the wpt\r
- Name: Nicolasg\r
  Comment: How i can do it if my rules is in cm and nor in inch ?\r
- Name: mifu112\r
  Comment: Coordinates for AMVEL are still off.\r
- Name: EagleOne\r
  Comment: The 1"/15NM is cut from the appendix\r
- Name: piperguy66\r
  Comment: the coordinates are off by one degree, should be 1 degree west not 2.\r
- Name: Antonio\r
  Comment: Glad that Im paying 70k to play Where's Wally!\r
- Name: Felix\r
  Comment: Are all those IFR charts (ELO) 1inch =15 NM ?? Can we use this in the exam?\r
- Name: Benjamin\r
  Comment: an other "where is Charlie question"\r
- Name: Heiko\r
  Comment: According to my Garmin 796 the correct answer is 083 degrees and 59.7 NM.\r
- Name: Kokoszka17\r
  Comment: Interesting. The route courses in the IFR chart are given in MAGNETIC but the navaid drawing resembling a circle divided into degress is oriented towards TRUE NORTH.\r
- Name: Aleks266\r
  Comment: Exact question in France DGAC : Find the magnetic bearing and distance to waypoint AMVEL (5311'N, 000 02'W) from Trent (TNT) VOR/DME (5303'N, 00140'W). I agree, it is the same but this way, the trap is easier to fall in.\r
- Name: Pierre Etienne\r
  Comment: I don't see the scale.. But I see the meridians, and the distance from AMVEL to Trent is more than 1 degree, so how can it be less than 60 Nm ?\r
- Name: Nuuyoma\r
  Comment: Amvel to Trent seen in austro 17 Nov\r
- Name: Virion\r
  Comment: AMVEL to TRENT, today ULC Poland\r
- Name: Jakub\r
  Comment: Today in Czech CAA but the other way (from AMVEL to TNT)\r
- Name: marcus\r
  Comment: what the.. I used 20 minutes looking for AMVEL. the coordinates are off @ATPLQ\r
\r
Question Number: AT00117\r
- Name: Morais\r
  Comment: why we use course to calculation in CRP5\r
- Name: Alexey\r
  Comment: The short way: since wind is the same, get first the wind coefficient:\r
coeff=157/175= 0,897\r
Then calculate new TAS(on crp), we know for M20 TAS is 175, so for M25 TAS will be 173.\r
Then 173*coeff= 155kt\r
Good luck!\r
- Name: UkkoM\r
  Comment: No need to calculate headwind with flight computer, wind conditions and track and heading remain the same, take headwind from TAS and GS from the standard scenario, and apply it to the new TAS Calculated in the Flight computer considering change in temperature\r
- Name: MarcoCapp\r
  Comment: CR3: TAS 173, but since the WCA is so big the ETAS became 164. (use the values on the black strip near the TAS)\r
ETAS 164 - HW 9kt = GS 155\r
- Name: Danne\r
  Comment: Then why do I get gs 172\r
- Name: cperceb\r
  Comment: Similar question today in SENASA Madrid.\r
- Name: MaxVitaleDM\r
  Comment: I did the average wind vel and direction and applied it to the TAS given, and the result was spot on correct\r
- Name: TopGun81\r
  Comment: Similar in Rome, only M35 B-C for the replanning\r
- Name: ACaviatrix7700\r
  Comment: I got a similar question in ANAC PT, with a correct answer of 151 KTS. 12/03/25\r
I think there are comments above about the question that I saw in my exam with the temperature given as M35.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @ACaviatrix7700, thanks for the feedback! If anyone else encounters a similar question to the one described by ACaviatrix7700, please share as many details as possible so we can create an accurate new question. Much appreciated!\r
- Name: eneskiziltepe\r
  Comment: calculators headwind formula (cos) , doesn't give good results when there is heavy crosswind like 80-90 degrees from the side. that's what I realized now.\r
\r
Flight computer gives the correct one.\r
- Name: liquid7\r
  Comment: easy solution to this without Flight Computer:\r
the only thing thats changed is a 5° decrease in OAT.\r
if you compare the planned TAS for A-B to B-C youll see that a 5 degree difference meant 2 kts slower TAS.\r
so just subtract 2 kts from the planned GS for B-C all youll be fine.\r
- Name: Mackenzie\r
  Comment: not the same conditions because the temperature has changed, use the FC with the CAS to get a new TAS\r
- Name: Omran\r
  Comment: HCAA - ANSWER 151\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Omran. Thanks! Could you please confirm that the data provided by the question was the exact same? Many thanks!\r
- Name: Jakie95\r
  Comment: TAS is 174 on the CRP5 when corrected for temperature. So thats only 1kt from the one given in the FPL.\r
Next look at the flight plan and see that TAS - GS gives a 18 kt HWC.\r
174-18 = 156 .. close enough to the 155 given.\r
There is not mucht point to use the wind side of the CRP5 to get the GS now.\r
- Name: KowalFly\r
  Comment: On CRP5:\r
1. Calculate the TAS for 155 CAS at FL100 with M25. The result is approximately 172 TAS.\r
2. Apply the wind (165/55) on the wind side. This gives a 19° right drift and a GS of 171 kt.\r
3. Balance the solution so that the true heading, after balancing, is 226°. (Rotate 19° so the rotation matches the indicated drift under the wind mark.)\r
4. Read the GS under the wind mark, which is approximately 154 kt.\r
- Name: Anezka\r
  Comment: Could I kindly ask you to review my calculation as I cannot find out where am I making a mistake? When I use the CRP-5 to get GS, I get a result close enough to the correct answer. But in Flight Planning I prefer to use trigonometry functions for majority of questions as I find it more accurate. This is the only Q which gives me a wrong answer with trigonometry, so I cannot get my head around it. Thank you!\r
\r
W/V at FL100 = 165/55\r
T = -25°\r
CAS = 155 kt\r
TR (T°) = 245°\r
Using CRP-5 to convert CAS to TAS => TAS = 174 kt (its a bit closer to 174 than 173).\r
hwc = 55 x cos(80°) = 9.55 kt\r
gs = tas - hwc = 174 - 9.55 = 164.45 kt\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Anezka, thank you for your comment. The reason why you cannot reach the correct answer is that you have not included the effect of the crosswind on the ground speed in your calculations.\r
If the crosswind speed is not excessively high relative to your TAS, you get results very close to the correct answer. Otherwise, even if there is only a crosswind, your ground speed will be slightly lower than your TAS.\r
Simply, in the case of no wind, the thrust of the aircraft is parallel to the course as no WCA is required. So 100% of the thrust is directed to the forward direction. So TAS and GS become equal. However, in the case of a WCA to the right or left, there is a difference between the direction of the aircraft's thrust and the course. In this case, the aircraft cannot provide 100% thrust on the required course.\r
Therefore, when calculating the ground speed, it is also necessary to calculate the effect of the crosswind by multiplying TAS by the cosine of WCA. So;\r
Effective TAS = TAS x cosine of WCA = 173 kt x cos (18°) = 164.5 kt\r
Ground Speed = Effective TAS - Headwind component = 164.5 - 9.5 = 155 kt\r
- Name: PedroCano\r
  Comment: I've seen today this question but with different temperature M35. Answer 149kts\r
- Name: javiergr\r
  Comment: 1.Calculate the new tas with CRP-5. (-25C /PA10000 / CAS 155) = TAS173kt\r
2. calcualte de new GS with the new TAS .\r
cos(245-165) x 55 = 9.55\r
GS =173-9.55 = 163kt\r
\r
155 KT IS INCORRECT// CHANGE THE ANSWER PLeasE\r
- Name: DIOSAR\r
  Comment: Guys dont even do this on the crp5. The only thing that changed from the original flight plan is the TAS from 175 to 173 . Wind is exaclty the same.So the original GS was 157 fibd the CLOSEST answer possible. THATS IT !!\r
- Name: ricardgalisteo\r
  Comment: wrong section\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @ricardgalisteo. We have updated the section of this question. Thank you for your feedback.\r
- Name: NicoH\r
  Comment: this is 163.\r
\r
im lost, i do everything right in this subject, i just dont get why its not 174 TAS minus 10 headwing\r
- Name: Charly\r
  Comment: nice we've got a TAS of 007deg. Nice one!\r
- Name: ATPL QUESTIONS\r
  Comment: Hello @Charly. We have updated the annexes in the question. Thank you for your feedback.\r
- Name: pcavaco\r
  Comment: Why is TAS in the table given in Degrees instead of Knots?\r
- Name: RotorRider\r
  Comment: NO NEED TO CALCULATE: departure time might have changed, but wind conditions are the same. GS 157(given) -> closest answer GS 155. ; )\r
- Name: Leonardo\r
  Comment: Pls check my last comment and try it out, something is wrong here\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Leonardo. There is nothing wrong with this question, please follow step by step what is mentioned in the explanation to get the solution. The use of a flight computer is a bit different since the input in the two questions you mentioned are different. Remember the following;\r
When the question provides a track => mark wind velocity upwards from centre.\r
When the Heading is known => mark wind velocity downwards from centre.\r
Let's go back to this question. With the expected delay given in the question, only the temperature value changed from -20 degrees to -25 degrees. As a result of the change in temperature, TAS is affected and becomes 173 kt. Subject to exactly the same wind the TAS is subjected to a headwind component of about 18 kt, as in the first situation, and the new GS becomes 155 kt. In this way, this question can be solved by finding only the TAS value from the flight computer. Consequently, the marked answer to this question is correct. Thank you for your comment.\r
- Name: Leonardo\r
  Comment: I definitely get 163 with formula..\r
\r
However if I use CRP-5 wind down method I get 155 but only after correcting for drift which is not the method I was taught to calculate GS as demonstrated in question 332284\r
\r
I can only conclude the answer is wrong. I believe whoever wrote the question used the wrong TCourse. Instead of using 245 from B to C they used TCourse 95 from A to B which gives you 155kts ground speed using formula.\r
\r
Thoughts?\r
- Name: Leonardo\r
  Comment: Btw if you actually do the calculations for the data given in the annex they are wrong, hw should be around 10 kts, they just want you to see that you can understand that if condition stay the same so there is no big change\r
- Name: Kangaxx\r
  Comment: This question's annex seems wrong.\r
Pre-flight planning indicates winds of 165°55kt (as given in the forecast and current plan) and GS of 157 is given. New-planning makes us use winds of 165°55kt (as given in the second forecast) which is the same. So ground speed should not change. The only exaplanation to have 155 as a correct answer is that the current plan given in the annex was wrong from the start.\r
- Name: ATPL QUESTIONS\r
  Comment: Hi @Kangaxx. TAS depends on altitude and temperature values. In this question, even if the wind direction and velocity are the same in both flight time intervals at the relevant level, TAS will change due to the temperature difference and consequently GS will also change.\r
In the winds and temperature aloft forecast validity 0601 UTC to 0900 UTC table, the temperature shown in row B to C and column FL100 should be M20, not M25. We will update this as soon as possible. Thank you for your comment.\r
- Name: Oliverinio\r
  Comment: Take planned HW so planned TAS 175 - Planned GS 157 = 18kt planned HWC\r
Correct TAS for temperature (-25*C) = 173kt (CRP5)\r
Apply planned HW to corrected TAS = New TAS 173kt - 18kt = 155kt GS\r
- Name: MarkoM\r
  Comment: CR3 after temperature correction TAS = 173 follow page 39. of the CR3 booklet accounting for EFFECTIVE TAS\r
\r
1) TAS=173, TC 245, HWC= almost 10kt, XWC=almost 55kt\r
2) use outer scale to determine CRAB angle for XWC=55 it is equal to 19 deg.\r
3) use effective black scale from the middle ring and read effective speed from 19 deg. on outer scale which equals 164 kt TAS\r
4) finally account for the HWC=10kt to obtain final GS, 164 - 10 = 154 kt\r
link: https://ww2.jeppesen.com/wp-content/uploads/2020/02/CR-3-User-Manual-Instructions.pdf\r
- Name: Michael\r
  Comment: why are heare so much coments? there is only a temperature difference by 5 degree, what do you think will heppen, by only 5 degrees difference ? nothing major will happon, its nearly the same. there are no calculatins neccecary\r
- Name: Ramiro\r
  Comment: Hello, how it possible that dooing it with CR3, i get a headwind of 10kts? could you explain it (at least onece) cause i thin the people using CR3 hace the same right ( like the others) to know how to do it (we are paying the same (as others), and if you think the only approbed method to get the results is using CPR5, also you could advise it ( but as far as i know EASA allows CPR5, CR3 & EB, so , please could you clarify please?\r
Thanks in advance.\r
P.D, would be nice from you, because i spent (as others) long time asking for a clarification about the differences between computers, and never got an answer from you guys.\r
- Name: ATPL QUESTIONS\r
  Comment: @Ramiro there is not any EASA approved mechanical flight/nav computer. According to students' feedback, the most known and reliable mechanical computers seem to be CRP-5 and E6B.\r
ATPLQ cannot recommend you what to buy, because it would be an unfair trade practice. There are several mechanical computers in the market and you should better advise, firstly, your flight school and, secondly, fora, social media and any other appropriate source to get informed for the appropriate mechanical computer for your exams.\r
As mentioned in a past reponse to your comments, the team has reviewed the explanation many times and it is correct.\r
- Name: jimbee\r
  Comment: step by step\r
\r
1. first of all, it must be clear which information from the table is required --> W/V 165/055 & temp. -25C\r
2. convert CAS to TAS, I use the CR-3 computer for this. Set PA opposite temp and read TAS from 155 CAS --> TAS = 174\r
3. Now we need the effective TAS. Formula: eTAS = TAS x cos (sin-1 (wind / TAS)) = 174 x cos (sin-1 (55/174)= 165.07\r
4. Now we have to find the HWC: cos(245-165) x 55 = 9.55\r
5. last but not least: eTAS - HWC= 165.07 - 9.55 = 155.52\r
\r
my last subject, good luck to all of you guys\r
- Name: aviator786\r
  Comment: guys, I have been doing these questions for a while now and figured out that the best thing to do is 1) try out doing trig and if you get an answer listed then thats the answer. IF this brings about a value that is not one of the options or is in. between two options use your CRP5.\r
here you do not need to bother with converting CAS to TAS as they give TAS 175. you still get right answer using their TAS given.\r
- Name: GGeri\r
  Comment: Why is everyone calculating? The conditions are just the same in both departure times, the GS remains the same.\r
- Name: Christian\r
  Comment: The answer is supposed to be 163..\r
COS(245-165)x55 is 10(your headwind)\r
After getting a TAS of 174 from the CRP, you subtract the 10 kt headwind to get a ground speed of approximately 163.\r
\r
Any recent feedback on this?\r
- Name: Veronika\r
  Comment: Just a hint. Look at original FP calculations. Wind is the SAME. So only temperature changed, changing TAS from 175 to 173. Respectively GS will also change by 2 knots and become 155 instead of 157.\r
I still made all possible mistakes with CRP5 before I got to that point..\r
- Name: Heiko\r
  Comment: Austro control 07.03.23\r
NEW TEMPERATURE given as minus 35 degrees.\r
Answer now 151 knots.\r
- Name: Assan\r
  Comment: I definitely get 163 with formula..\r
\r
However if I use CRP-5 wind down method I get 155 but only after correcting for drift which is not the method I was taught to calculate GS as demonstrated in question 332284\r
\r
I can only conclude the answer is wrong. I believe whoever wrote the question used the wrong TCourse. Instead of using 245 from B to C they used TCourse 95 from A to B which gives you 155kts ground speed using formula.\r
\r
Thoughts?\r
- Name: erica\r
  Comment: 80 degrees difference between the track and the wind direction.. how can the the headwind component be almost 20kts? GS is 163.\r
- Name: miguel\r
  Comment: same GS as the one shown on the table, it doesnt change the wind\r
- Name: Jacopo\r
  Comment: Probably Im doing something wrong.\r
Both with CR3 and with formulas i found 10k of longitudinal component as headwind.\r
So 173k- 10k = 163k\r
Doing something wrong =\r
\r
Question Number: AT00118\r
- Name: Lamma\r
  Comment: appeal no overall exact .. because in this question the FF in holding Is only over alternate aerodrome, personally I'm used this also for destination aerodrome but is not completely correct in my opinion !\r
- Name: LucasFly\r
  Comment: The Fuel policy says to use for the contigency fuel 5% of the trip fuel or " an amount to fly for 5 minutes at holding speed at 1 500 ft (450 m), above the DESTINATION aerodrome in standard conditions ". In the question there is given fuel flow above ALTERNATE, not above the DESTINATION, so I think using it for the explanation is wrong, (although it doesn't change the answer).\r
- Name: DailyLifter\r
  Comment: Dont forget to compare the contingency fuel of 5min of holding or 5% of trip take the highest\r
- Name: GeorgeEZY\r
  Comment: @Gv4life Only use 15 mins holding (additional) if there is NO destination alt\r
- Name: PaulVlad\r
  Comment: @UltraLight it clearly says Above Destination Alternate\r
\r
It doesnt say Above Destination only.\r
- Name: JoaoD\r
  Comment: @UltraLight, idk if the QB updated the question, but it is stated that the FF is above destination ALTERNATE, not above destination\r
So the FR is correct\r
- Name: Mike\r
  Comment: @Utralight you are right!\r
\r
Technicaly we cant calculate Final Reserve, but we all want to pass the exam so..\r
- Name: ChrisScholl\r
  Comment: Shouldn't it be 30 min holding above *alternate* aerodrome?\r
So how can we assume that we should use the departure holding FF.\r
Especially if it is a "type in" question.\r
- Name: Miadzi\r
  Comment: @ATPL where is min additional Fuel ?\r
As stated in explanation should be calculated ie. for emergency descend\r
- Name: Jim\r
  Comment: UK CAA (Remember to come back and mark as seen after your exams).\r
- Name: majkelmbo\r
  Comment: 3% is only for ERA - enroute alternate\r
- Name: Javier\r
  Comment: @ATPLQ Why do you calculate the final reserve with the fuel flow at destination in this exercise, and in this one 339347 you use the fuel flow at the alternate? In both you have an alternate.\r
- Name: Tobias\r
  Comment: T(i)T(ty)CAAFE, bam now youll remember it forever\r
- Name: Alexandre\r
  Comment: Fuel flow for final reserve calculation should be over dest alternate.\r
- Name: Ella\r
  Comment: Use mnemonic (TT CAFFE)\r
T\r
T\r
C\r
A\r
F\r
F\r
E\r
- Name: Cuong\r
  Comment: Again I forget 5% Contigency fuel #$%!\r
- Name: Cristian\r
  Comment: Don't forget the contingency fuel ;)\r
\r
Question Number: AT00119\r
- Name: Pilot99\r
  Comment: But after passing the E13 45 the first check point is The mast at N48°32', E013°36' !\r
- Name: Adrian726\r
  Comment: @Vlad on exam you will have your own map.\r
- Name: Sanni\r
  Comment: if you read bridge, its always the bridge as you also have it sometimes while flying at local aerodromes as reporting points.\r
1. Bridge\r
2. Masts\r
- Name: Carlospas\r
  Comment: Guys, check that there are many aerodromes wich you may confuse between them, so many masts along the route, and the lighted one is way far from the departure, thus it's not a good waypoint.\r
Looking at the answers and crosschecking the options with the first chart provided, there's only one motorway bridge and in a good location.\r
Hope it helps. Good luck with your exams!!\r
- Name: Mahdy\r
  Comment: This is ridiculous .. After spending 30 mins searching for the aerodromes from 2 DIFFERENT CHARTS AT THE SAME TIME, then trying to draw a line between them with an impossible precision and finally having a guessing game between 2 correct answers (bridge and Vilshofen), this question is absolutely disrespectful towards us students and should be reported for how useless it is.\r
- Name: Pilot351\r
  Comment: lets put 8 maps and plan from Paris to LA from North Pole\r
- Name: PaulVlad\r
  Comment: Seriously? One aerodrome on one chart, the other on another? Do they provided tape or glue in exam to put them together? Still made it, EASA fussfaces, won't give you a slice of satisfaction :)\r
- Name: Marco\r
  Comment: Remeber this order:\r
1. Bridge\r
2. Mast\r
- Name: John53\r
  Comment: It's funny because you dont really want a VFR check point directly beneath the route, ones which are 1-2 nm abeam are much better to see and time as you're flying instead of trying to look over the dash and cowling to get a good clocking.\r
- Name: Vladislav7\r
  Comment: West of this point can be Paris , and it will be right answer ) Tooo aproximate there\r
- Name: RotorRider\r
  Comment: This is the most unthought of trap I have seen so far from Easa. Solution = retrieve ED-4 chart from your airway manual!\r
- Name: Shihab\r
  Comment: Seen CZ CAA, Slightly reworded but the answers remained the same\r
- Name: 747Maverick\r
  Comment: A motorway bridge is not exactly visually conspicuous. I would have thought the Vilshofen aerodrome would have fitted the description better.\r
- Name: Ranieri\r
  Comment: For -Progress- they mean your GS.\r
So, you need an intersection of 90 degrees (motorway, river ecc..ecc..) of your track to calculate the speed. (Using time and distance)\r
- Name: gdtyrael1\r
  Comment: One of the few "mast" is not the answer\r
- Name: Ramiro\r
  Comment: Hello, why not to show the whole chart instead 2 separate anexes? or is the way it appears in the officials?\r
Thanks in advance.\r
- Name: olibarke\r
  Comment: You don't even need to look at chart. EASA hates masts and windfarms - easy to use a different one which is understandable. Airfields are flat and if its a grass strip can be hard to spot. Motorway bridges is by a massive town and very easy to spot. Also if you do look at chart is crosses a big river and railway line which is further confirmation of the correct reference.\r
- Name: TRUMP88\r
  Comment: The motorway bridge near PASSAU\r
- Name: Witryna\r
  Comment: Spent 10 minutes on focusing to find this stupid lolf. Shouldve just look at the comment section.\r
- Name: Spanner\r
  Comment: Motorway bridge is the only one in the area and is unique. If you select an airfield, there are quite a few similar looking ones around, hence the potential to mistake one for EDMV\r
- Name: Radoslaw\r
  Comment: why not EDMV Vishofen ?\r
- Name: Martin\r
  Comment: This is pure banking. No way to assume something like that.\r
- Name: Thomas\r
  Comment: This is very subjective - simply as it intersects the track (perpendicular) - headslap!\r
\r
TMD\r
- Name: Ahmed\r
  Comment: So you cant take a checkpoint thats abeam the track? LOL\r
- Name: Hussam Razzaq Anbooree\r
  Comment: Today Austro control Spain 2021/09/20\r
\r
The visual points to check ===> The motorway bridge\r
- Name: Konrad\r
  Comment: Polish CAA 07.07.21 answer was the same\r
- Name: Christopher\r
  Comment: A little bit of a subjective question really.\r
- Name: Will\r
  Comment: @Daniel\r
You can always check the back of the chart to quick find Lat and Long of aerodrome.\r
- Name: DanTheMan1\r
  Comment: Do they really give on real exams charts where you cant find the exact location ? Or its just a mistake of ATPLq ?\r
- Name: ATPL QUESTIONS\r
  Comment: Second chart has been added. We apologise for any inconvenience!\r
- Name: Myron\r
  Comment: Still looking for LOLF 😂\r
- Name: Patrick\r
  Comment: Why is LOLF airport not on the chart????\r
- Name: Tania Cabo\r
  Comment: It is becouse it crosses the track at 90 degreees\r
- Name: Dan\r
  Comment: I assume because the track takes you directly over the motorway bridge so you can immediately determine whether you're on track or not.\r
- Name: Dan\r
  Comment: Motorway bridge, although they all seem pretty relevant.\r
\r
`,v0="/assets/AT00001_img_1-B6OZRvjx.png",k0="/assets/AT00007_img_1-B6IaNbnJ.png",S0="/assets/AT00008_img_1-BrTUyj_v.png",I0="/assets/AT00009_img_1-Bq-U2MgF.png",E0="/assets/AT00010_img_1-DltxwZre.png",x0="/assets/AT00017_img_1-BeHCJBcn.png",_0="/assets/AT00018_img_1-CLMzM3O4.png",R0="/assets/AT00019_img_1-BkMb0xRI.png",L0="/assets/AT00022_img_1-mFt1DoeU.png",M0="/assets/AT00023_img_1-aeOcIxJA.png",P0="/assets/AT00026_img_1-BtIupFW0.png",O0="/assets/AT00028_img_1-OE2nsZPT.png",D0="/assets/AT00032_img_1-CV9jQxOo.png",F0="/assets/AT00033_img_1-BIGHb0Kq.png",q0="/assets/AT00035_img_1-BCOkw91F.png",B0="/assets/AT00035_img_2-KTSI_pOr.png",U0="/assets/AT00037_img_1-1xQ5QQbA.png",G0="/assets/AT00037_img_2-BfQySljF.png",W0="/assets/AT00038_img_1-BOBvfxw_.png",H0="/assets/AT00042_img_1-BD8levOx.png",j0="/assets/AT00044_img_1-BwW8ZYGh.png",Q0="/assets/AT00044_img_1-BwW8ZYGh.png",V0="/assets/AT00046_img_1-Cz60RBTY.png",K0="/assets/AT00047_img_1-BqRmQhvi.png",z0="/assets/AT00048_img_1-D9tGYpQ1.png",Y0="/assets/AT00048_img_2-CVMlsvba.png",J0="/assets/AT00048_img_3-nRFCK5qr.png",$0="/assets/AT00053_img_1-C_9EC8qF.png",Z0="/assets/AT00055_img_1-DMuxF6Tj.png",X0="/assets/AT00057_img_1-D-LSmKkg.png",ew="/assets/AT00057_img_2-D6NUNVbS.png",nw="/assets/AT00061_img_1-CKsS_xV4.png",tw="/assets/AT00063_img_1-CXWGgE3t.png",rw="/assets/AT00065_img_1-BVlBrcj4.png",aw="/assets/AT00067_img_1-CGuqDXx9.png",ow="/assets/AT00068_img_1-D_LBjYJU.png",iw="/assets/AT00048_img_1-D9tGYpQ1.png",sw="/assets/AT00071_img_2-CuoQx0t-.png",lw="/assets/AT00048_img_3-nRFCK5qr.png",uw="/assets/AT00074_img_1-BX3hQtkR.png",mw="/assets/AT00077_img_1-MVCF8X2M.png",hw="/assets/AT00077_img_2-DIbXsJ2d.png",dw="/assets/AT00078_img_1-CPbafKG0.png",cw="/assets/AT00079_img_1-DUW1zLdI.png",fw="/assets/AT00081_img_1-DgS9dO6b.png",gw="/assets/AT00082_img_1-CtMQuEJ1.png",pw="/assets/AT00082_img_2-BJ7zqppV.png",ww="/assets/AT00083_img_1-CPa13IyA.png",yw="/assets/AT00086_img_1-Dv1IbGya.png",Aw="/assets/AT00086_img_2-AYZsrdhL.png",Tw="/assets/AT00086_img_3-Dd_9JNPf.png",Nw="/assets/AT00086_img_4-xfydMYiG.png",bw="/assets/AT00065_img_1-BVlBrcj4.png",Cw="/assets/AT00088_img_1-ajPPokfC.png",vw="/assets/AT00088_img_2-DcWGNS0F.png",kw="/assets/AT00090_img_1-lTpgo1OA.png",Sw="/assets/AT00091_img_1-CXHCr_lL.png",Iw="/assets/AT00092_img_1-CVWAvSjR.png",Ew="/assets/AT00093_img_1-BApQY1fq.png",xw="/assets/AT00048_img_2-CVMlsvba.png",_w="/assets/AT00048_img_3-nRFCK5qr.png",Rw="/assets/AT00098_img_1-CZ4b34ip.png",Lw="/assets/AT00082_img_1-CtMQuEJ1.png",Mw="/assets/AT00081_img_1-DgS9dO6b.png",Pw="/assets/AT00103_img_1-l5WDWEfS.png",Ow="/assets/AT00108_img_1-CVWfZIEZ.png",Dw="/assets/AT00042_img_1-BD8levOx.png",Fw="/assets/AT00111_img_1-FYltmnNA.png",qw="/assets/AT00113_img_1-BzDdUz11.png",Bw="/assets/AT00114_img_1-BHaTCIP2.png",Uw="/assets/AT00114_img_2-BW0pRdQy.png",Gw="/assets/AT00116_img_1-DigZeMlD.png",Ww="/assets/AT00117_img_1-DTizco1o.png",Hw="/assets/AT00119_img_1-M0vcbU0G.png",jw="/assets/AT00119_img_2-CLFFndrb.png",Qw="/assets/AT00120_img_1-DMDL766B.png",Vw="/assets/AT00120_img_2-3b9RrlRI.png",Kw="/assets/explanation_AT00007_img_1-BVuZx-PD.png",zw="/assets/explanation_AT00008_img_1-dZa9xTF7.png",Yw="/assets/explanation_AT00009_img_1-yuZZt7AB.png",Jw="/assets/explanation_AT00010_img_1-YUfmQeaL.png",$w="/assets/explanation_AT00017_img_1-D_ymMlHp.png",Zw="/assets/explanation_AT00019_img_1-CxvSMKE_.png",Xw="/assets/explanation_AT00021_img_1-CE552jdL.png",ey="/assets/explanation_AT00023_img_1-C0p3eDdh.png",ny="/assets/explanation_AT00024_img_1-RsgsZ0DE.png",ty="/assets/explanation_AT00024_img_2-CCNmTI-u.png",ry="/assets/explanation_AT00026_img_1-tYrcLo5O.png",ay="/assets/explanation_AT00027_img_1-ke11o7tX.png",oy="/assets/explanation_AT00028_img_1-DXULC5GA.png",iy="/assets/explanation_AT00030_img_1-Br2gQCxx.png",sy="/assets/explanation_AT00030_img_2-BYS_5FK7.png",ly="/assets/explanation_AT00030_img_3-D6QQPOBr.png",uy="/assets/explanation_AT00033_img_1-CrjwY8t3.png",my="/assets/explanation_AT00037_img_1-Cay2ndIg.png",hy="/assets/explanation_AT00038_img_1-Mb72W2WU.png",dy="/assets/explanation_AT00038_img_2-BgZTzYql.png",cy="/assets/explanation_AT00041_img_1-C9VK_4LM.png",fy="/assets/explanation_AT00042_img_1-BMmpPpyT.png",gy="/assets/explanation_AT00044_img_1-BLj500zh.png",py="/assets/explanation_AT00045_img_1-qbrK6QKF.png",wy="/assets/explanation_AT00047_img_1-BzpI51eJ.png",yy="/assets/explanation_AT00048_img_1-YdJQ4hk4.png",Ay="/assets/explanation_AT00048_img_2-FpqpFVEM.png",Ty="/assets/explanation_AT00053_img_1-B6-Ks6-Y.png",Ny="/assets/explanation_AT00055_img_1-EV1oD8AI.png",by="/assets/explanation_AT00057_img_1-BtaM2I2b.png",Cy="/assets/explanation_AT00058_img_1-DFl_ll9u.png",vy="/assets/explanation_AT00058_img_2-CIBUn6hU.png",ky="/assets/explanation_AT00061_img_1-D8Zpivwp.png",Sy="/assets/explanation_AT00062_img_1-B6Jq0ceT.png",Iy="/assets/explanation_AT00063_img_1-DUid-vIp.png",Ey="/assets/explanation_AT00065_img_1-8p5KHQoq.png",xy="/assets/explanation_AT00067_img_1-DcPtXtoc.png",_y="/assets/explanation_AT00068_img_1-DDP1i7HV.png",Ry="/assets/explanation_AT00062_img_1-B6Jq0ceT.png",Ly="/assets/explanation_AT00062_img_1-B6Jq0ceT.png",My="/assets/explanation_AT00072_img_1-D5nmTG7u.png",Py="/assets/explanation_AT00074_img_1-BI-lBgTf.png",Oy="/assets/explanation_AT00077_img_1-Sit4wZEx.png",Dy="/assets/explanation_AT00077_img_2-DZ_MDFY4.png",Fy="/assets/explanation_AT00078_img_1-CVDI91mb.png",qy="/assets/explanation_AT00079_img_1-D1ZUrBcJ.png",By="/assets/explanation_AT00081_img_1-Ch5xIJ9i.png",Uy="/assets/explanation_AT00083_img_1-dzBQKrWc.png",Gy="/assets/explanation_AT00062_img_1-B6Jq0ceT.png",Wy="/assets/explanation_AT00086_img_1-B7bbcbSl.png",Hy="/assets/explanation_AT00087_img_1-DVFAqPDt.png",jy="/assets/explanation_AT00090_img_1-B4eXtKsu.png",Qy="/assets/explanation_AT00091_img_1-BoSY2ppk.png",Vy="/assets/explanation_AT00093_img_1-DezbWnh9.png",Ky="/assets/explanation_AT00098_img_1-D_goQ9GD.png",zy="/assets/explanation_AT00062_img_1-B6Jq0ceT.png",Yy="/assets/explanation_AT00102_img_1-tOKArOsQ.png",Jy="/assets/explanation_AT00103_img_1-C4P7BcTv.png",$y="/assets/explanation_AT00030_img_1-Br2gQCxx.png",Zy="/assets/explanation_AT00030_img_2-BYS_5FK7.png",Xy="/assets/explanation_AT00107_img_3-BI1q8hEY.png",eA="/assets/explanation_AT00108_img_1-r0KLVd4o.png",nA="/assets/explanation_AT00109_img_1-Bsm_E24s.png",tA="/assets/explanation_AT00111_img_1-B9ewaS5u.png",rA="/assets/explanation_AT00112_img_1-4yMq7ZP8.png",aA="/assets/explanation_AT00113_img_1-DhlGEJi4.png",oA="/assets/explanation_AT00114_img_1-DyvGOrnc.png",iA="/assets/explanation_AT00116_img_1-BlHRbdg3.png",sA="/assets/explanation_AT00117_img_1-C_DE3hjM.png",lA="/assets/explanation_AT00117_img_2-DbnpiYFz.png",uA="/assets/explanation_AT00117_img_3-1arWFB5h.png",mA="/assets/explanation_AT00117_img_4-Fb3tXsxS.png",hA="/assets/explanation_AT00119_img_1-DtKhjZBU.png",dA=e=>e.replace(/^([A-D])\.\s*[A-D]\s*/i,"").trim(),cA=(e,n,t)=>{const r=e.split(/^-{5,}\s*$/m).map(i=>i.trim()).filter(Boolean),a=[],o=new Map;if(n){const i=n.split(/\r?\n/);let s=null,l=[];const u=()=>{s&&o.set(s,l.join(`
`).trim()),l=[]};for(const c of i){const d=c.match(/^Question Number:\s*(AT\d{5})/);if(d){u(),s=d[1];continue}s&&l.push(c)}u()}for(const i of r){const s=i.split(/\r?\n/).map(_=>_.trim());if(s.length===0)continue;const l=i.match(/Question Number:\s*(AT\d{5})/),u=l?l[1]:void 0,c=s.findIndex(_=>/^Options:/i.test(_));if(c===-1)continue;const d=s.findIndex((_,R)=>R>0&&/^Explanation:/i.test(_)),g=d!==-1?d:c,A=[],T=[],y=[];for(let _=0;_<g;_++){const R=s[_];if(!/^Question Number:/i.test(R)&&!/^Subject:/i.test(R)){if(/^Images:/i.test(R)){for(let F=_+1;F<g;F++){const le=s[F];if(!le.startsWith("- "))break;const ue=le.replace(/^-[\s]*/,""),Ge=t.imageResolver(ue)||t.imageResolver(ue.replace(/^images\//,"images/"))||t.imageResolver(ue.replace(/^\.\/?/,""));Ge&&T.push(Ge)}continue}R.length&&A.push(R)}}let N="";const f=s.findIndex(_=>/^Explanation:/i.test(_));if(f!==-1)for(let _=f+1;_<s.length;_++){const R=s[_];if(/^Options:/i.test(R))break;if(/^Explanation Images:/i.test(R)){for(let F=_+1;F<s.length;F++){const le=s[F];if(!le.startsWith("- "))break;const ue=le.replace(/^-[\s]*/,""),Ge=t.imageResolver(ue)||t.imageResolver(ue.replace(/^images\//,"images/"))||t.imageResolver(ue.replace(/^\.\/?/,""));Ge&&y.push(Ge)}continue}if(/^Correct Answer:/i.test(R)||/^\-+\s*$/i.test(R))break;N+=(N?`
`:"")+R}const m=[];let p=-1;const b=s.findIndex(_=>/^Options:/i.test(_));let v=b+1;for(;v<s.length;v++){const _=s[v];if(/^Correct Answer:/i.test(_))break;if(_&&/^[A-D]\.\s*/i.test(_)){let F=dA(_);v+1<s.length&&!/^[A-D]\.\s*/i.test(s[v+1])&&!/^Correct Answer:/i.test(s[v+1])&&(F=`${F} ${s[v+1]}`.trim(),v+=1),m.push(F)}}for(let _=b+1;_<s.length;_++){const F=s[_].match(/^([A-D])\.[^\n]*\(CORRECT\)/i);if(F){const le=F[1].toUpperCase();p="ABCD".indexOf(le);break}}if(p===-1){const _=i.match(/Correct Answer:\s*([A-D])\./i);_&&(p="ABCD".indexOf(_[1].toUpperCase()))}if(m.length===0||p<0)continue;const E=A.join(`
`).trim(),I=u?o.get(u):void 0,x={id:a.length+1,code:u,text:E,options:m,correctAnswer:p,explanation:N||void 0,category:"ATPL(A) Flight Planning & Monitoring",difficulty:"medium",tags:["ATPL","EASA","033"],imageUrls:T.length?T:void 0,explanationImageUrls:y.length?y:void 0,commentsText:I,source:"questionDATA"};a.push(x)}return a},fA={"flight-planning":{folderMatch:"Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions"}},gA=Object.assign({"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/530_scraped_questions.txt":b0}),pA=Object.assign({"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/comments.txt":C0}),wA=Object.assign({"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00001_img_1.png":v0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00007_img_1.png":k0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00008_img_1.png":S0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00009_img_1.png":I0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00010_img_1.png":E0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00017_img_1.png":x0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00018_img_1.png":_0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00019_img_1.png":R0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00022_img_1.png":L0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00023_img_1.png":M0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00026_img_1.png":P0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00028_img_1.png":O0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00032_img_1.png":D0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00033_img_1.png":F0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00035_img_1.png":q0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00035_img_2.png":B0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00037_img_1.png":U0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00037_img_2.png":G0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00038_img_1.png":W0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00042_img_1.png":H0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00044_img_1.png":j0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00045_img_1.png":Q0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00046_img_1.png":V0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00047_img_1.png":K0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00048_img_1.png":z0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00048_img_2.png":Y0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00048_img_3.png":J0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00053_img_1.png":$0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00055_img_1.png":Z0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00057_img_1.png":X0,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00057_img_2.png":ew,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00061_img_1.png":nw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00063_img_1.png":tw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00065_img_1.png":rw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00067_img_1.png":aw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00068_img_1.png":ow,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00071_img_1.png":iw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00071_img_2.png":sw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00071_img_3.png":lw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00074_img_1.png":uw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00077_img_1.png":mw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00077_img_2.png":hw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00078_img_1.png":dw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00079_img_1.png":cw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00081_img_1.png":fw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00082_img_1.png":gw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00082_img_2.png":pw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00083_img_1.png":ww,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00086_img_1.png":yw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00086_img_2.png":Aw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00086_img_3.png":Tw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00086_img_4.png":Nw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00087_img_1.png":bw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00088_img_1.png":Cw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00088_img_2.png":vw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00090_img_1.png":kw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00091_img_1.png":Sw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00092_img_1.png":Iw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00093_img_1.png":Ew,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00093_img_2.png":xw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00093_img_3.png":_w,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00098_img_1.png":Rw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00099_img_1.png":Lw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00102_img_1.png":Mw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00103_img_1.png":Pw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00108_img_1.png":Ow,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00109_img_1.png":Dw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00111_img_1.png":Fw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00113_img_1.png":qw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00114_img_1.png":Bw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00114_img_2.png":Uw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00116_img_1.png":Gw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00117_img_1.png":Ww,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00119_img_1.png":Hw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00119_img_2.png":jw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00120_img_1.png":Qw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/AT00120_img_2.png":Vw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00007_img_1.png":Kw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00008_img_1.png":zw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00009_img_1.png":Yw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00010_img_1.png":Jw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00017_img_1.png":$w,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00019_img_1.png":Zw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00021_img_1.png":Xw,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00023_img_1.png":ey,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00024_img_1.png":ny,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00024_img_2.png":ty,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00026_img_1.png":ry,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00027_img_1.png":ay,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00028_img_1.png":oy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00030_img_1.png":iy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00030_img_2.png":sy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00030_img_3.png":ly,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00033_img_1.png":uy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00037_img_1.png":my,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00038_img_1.png":hy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00038_img_2.png":dy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00041_img_1.png":cy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00042_img_1.png":fy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00044_img_1.png":gy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00045_img_1.png":py,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00047_img_1.png":wy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00048_img_1.png":yy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00048_img_2.png":Ay,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00053_img_1.png":Ty,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00055_img_1.png":Ny,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00057_img_1.png":by,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00058_img_1.png":Cy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00058_img_2.png":vy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00061_img_1.png":ky,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00062_img_1.png":Sy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00063_img_1.png":Iy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00065_img_1.png":Ey,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00067_img_1.png":xy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00068_img_1.png":_y,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00069_img_1.png":Ry,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00070_img_1.png":Ly,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00072_img_1.png":My,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00074_img_1.png":Py,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00077_img_1.png":Oy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00077_img_2.png":Dy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00078_img_1.png":Fy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00079_img_1.png":qy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00081_img_1.png":By,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00083_img_1.png":Uy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00085_img_1.png":Gy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00086_img_1.png":Wy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00087_img_1.png":Hy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00090_img_1.png":jy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00091_img_1.png":Qy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00093_img_1.png":Vy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00098_img_1.png":Ky,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00101_img_1.png":zy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00102_img_1.png":Yy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00103_img_1.png":Jy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00107_img_1.png":$y,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00107_img_2.png":Zy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00107_img_3.png":Xy,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00108_img_1.png":eA,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00109_img_1.png":nA,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00111_img_1.png":tA,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00112_img_1.png":rA,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00113_img_1.png":aA,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00114_img_1.png":oA,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00116_img_1.png":iA,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00117_img_1.png":sA,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00117_img_2.png":lA,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00117_img_3.png":uA,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00117_img_4.png":mA,"/questionDATA/Flight Planning Monitoring (IRELAND BANK)/530_Ireland_questions/images/explanation_AT00119_img_1.png":hA}),yA=e=>n=>{const t=n.replace(/^\.\/?/,"").replace(/^\//,"");for(const[r,a]of Object.entries(wA))if(r.includes(e)&&(r.endsWith(t)||r.endsWith(t.replace(/^images\//,""))))return a};async function AA(e){const n=fA[e];if(!n)return[];const t=n.folderMatch,r=Object.entries(gA).find(([u])=>u.includes(t));if(!r)return[];const a=r[1],o=Object.entries(pA).find(([u])=>u.includes(t)),i=o?o[1]:null,s=yA(t);return cA(a,i,{imageResolver:s})}const TA=()=>{const{currentTest:e,currentQuestionIndex:n,nextQuestion:t,previousQuestion:r,answerQuestion:a}=Lh();w.useEffect(()=>{const o=i=>{if(!e)return;const s=e.questions[n];if(s)switch(i.key){case"ArrowRight":case" ":i.preventDefault(),t();break;case"ArrowLeft":i.preventDefault(),r();break;case"1":case"a":case"A":i.preventDefault(),a(s.id,0);break;case"2":case"b":case"B":i.preventDefault(),a(s.id,1);break;case"3":case"c":case"C":i.preventDefault(),a(s.id,2);break;case"4":case"d":case"D":i.preventDefault(),a(s.id,3);break;case"p":case"P":i.preventDefault();break;case"Escape":i.preventDefault(),document.fullscreenElement&&document.exitFullscreen();break}};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[e,n,t,r,a])},NA=()=>{const{currentTest:e,currentQuestionIndex:n,answers:t,flags:r,timeRemaining:a,isPaused:o,startTest:i,nextQuestion:s,previousQuestion:l,goToQuestion:u,answerQuestion:c,flagQuestion:d,pauseTest:g,resumeTest:A,endTest:T}=Lh(),{selectedMode:y,selectedSubject:N}=_t(),[f,m]=w.useState(!1),[p,b]=w.useState(!1),[v,E]=w.useState(""),[I,x]=w.useState(!1);TA(),w.useEffect(()=>{!e&&N&&y&&(async()=>{const Te=await AA(N.id),k={id:`${N.id}-${y.id}-${Date.now()}`,name:`${N.name} — ${y.name}`,category:N.name,questions:Te,currentQuestion:1,answers:{},flags:{},startTime:new Date,isCompleted:!1,totalQuestions:Te.length,correctAnswers:0,timeLimit:y.id==="exam"?60:0,allowReview:!0,shuffleQuestions:!1};i(k)})()},[e,i,y,N]);const _=Te=>{if(e){const k=e.questions[n];if(c(k.id,Te),(y==null?void 0:y.id)==="study"){const L=Te===k.correctAnswer;x(L),E(L?"Correct!":"Incorrect. Try again."),b(!0),setTimeout(()=>{b(!1)},3e3)}}},R=Te=>{if(e){const k=e.questions[n];d(k.id,Te)}},F=Te=>{u(Te-1),b(!1)},le=()=>{T(),m(!0)},ue=()=>{o?A():g()},Ge=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()};if(!e)return h.jsx("div",{className:"flex items-center justify-center min-h-screen",children:h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"}),h.jsx("p",{className:"mt-4 text-gray-600 dark:text-gray-400",children:"Loading test..."})]})});const Ie=e.questions[n],$n=t[Ie==null?void 0:Ie.id];return h.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[h.jsx(y0,{testName:e.name,currentQuestion:n+1,totalQuestions:e.questions.length,questionNumber:(Ie==null?void 0:Ie.code)||(Ie==null?void 0:Ie.id.toString())||"",timeRemaining:(y==null?void 0:y.id)==="exam"?a:0,onFlagQuestion:R,onPrevious:l,onNext:s}),p&&(y==null?void 0:y.id)==="study"&&h.jsx("div",{className:`fixed top-16 left-0 right-0 z-50 p-4 ${I?"bg-green-500":"bg-red-500"} text-white text-center font-medium`,children:h.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[I?h.jsx(hp,{className:"h-5 w-5"}):h.jsx(Op,{className:"h-5 w-5"}),h.jsx("span",{children:v})]})}),h.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-6",children:[h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[h.jsx("div",{className:"lg:col-span-3",children:h.jsx(A0,{question:Ie,selectedAnswer:$n,onAnswerSelect:_,showCorrectAnswer:f||(y==null?void 0:y.id)==="study"&&$n!==void 0})}),h.jsxs("div",{className:"lg:col-span-1 space-y-4",children:[h.jsx("div",{className:"text-center",children:h.jsxs("div",{className:`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${(y==null?void 0:y.id)==="study"?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"}`,children:[h.jsx("span",{className:"mr-2",children:y==null?void 0:y.icon}),y==null?void 0:y.name]})}),h.jsx("div",{className:"text-right",children:h.jsxs("button",{onClick:Ge,className:"flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200",children:[h.jsx(yp,{className:"h-4 w-4"}),h.jsx("span",{children:"Full Screen Test"})]})}),h.jsx("div",{children:h.jsxs("button",{className:"w-full btn btn-secondary",children:[h.jsx(Nh,{className:"h-4 w-4 mr-2"}),"Save Test"]})}),h.jsx(T0,{totalQuestions:e.questions.length,currentQuestion:n+1,answers:t,flags:r,onQuestionSelect:F}),h.jsx("div",{className:"text-center",children:h.jsxs("button",{className:"flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200",children:[h.jsx(pp,{className:"h-4 w-4"}),h.jsx("span",{children:"Use Keyboard Shortcuts"})]})}),(y==null?void 0:y.id)==="exam"&&h.jsx("div",{className:"hidden lg:block",children:h.jsx(N0,{initialTime:a,onTimeUp:le,isPaused:o,onPauseToggle:ue})})]})]}),h.jsx("div",{className:"lg:hidden mt-6",children:h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsxs("button",{onClick:l,disabled:n<=0,className:"btn btn-secondary",children:[h.jsx(ep,{className:"h-4 w-4 mr-2"}),"Previous"]}),h.jsxs("button",{onClick:s,disabled:n>=e.questions.length-1,className:"btn btn-secondary",children:["Next",h.jsx(ap,{className:"h-4 w-4 ml-2"})]})]})})]})]})},bA=()=>{const{selectedSubject:e,selectedMode:n}=_t(),t=Ya();return w.useEffect(()=>{(!e||!n)&&t("/")},[e,n,t]),!e||!n?null:h.jsx(NA,{})},CA=()=>h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[h.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-8",children:"Saved Tests"}),h.jsx("div",{className:"card p-6",children:h.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"No saved tests found"})})]}),vA=()=>h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[h.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-8",children:"Search Questions"}),h.jsx("div",{className:"card p-6",children:h.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Search functionality will be implemented here"})})]}),kA=()=>h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[h.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-8",children:"Contact Us"}),h.jsx("div",{className:"card p-6",children:h.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Contact form will be implemented here"})})]}),SA=()=>{const{selectedSubject:e,studyModes:n,setSelectedMode:t}=_t(),r=Ya();if(!e)return r("/"),null;const a=i=>{t(i),r("/test")},o=()=>{r("/")};return h.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[h.jsxs("div",{className:"mb-8",children:[h.jsxs("button",{onClick:o,className:"flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4",children:[h.jsx(tp,{className:"w-4 h-4 mr-2"}),"Back to Subjects"]}),h.jsxs("div",{className:"flex items-center mb-6",children:[h.jsx("div",{className:"text-2xl mr-4",children:e.icon}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:e.name}),h.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:e.description})]})]})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:n.map(i=>h.jsxs("div",{onClick:()=>a(i),className:"card p-8 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-blue-500",children:[h.jsxs("div",{className:"text-center mb-6",children:[h.jsx("div",{className:"text-4xl mb-4",children:i.icon}),h.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:i.name}),h.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:i.description})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Features:"}),h.jsx("ul",{className:"space-y-2",children:i.features.map((s,l)=>h.jsxs("li",{className:"flex items-start",children:[h.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"}),h.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:s})]},l))})]}),h.jsx("div",{className:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700",children:h.jsxs("button",{className:"w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200",children:["Start ",i.name]})})]},i.id))})]})};function IA(){const{theme:e,setTheme:n}=Rh();return w.useEffect(()=>{n(e)},[e,n]),h.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[h.jsx(g0,{}),h.jsx("main",{className:"pt-16",children:h.jsxs(Zf,{children:[h.jsx(Pn,{path:"/",element:h.jsx(w0,{})}),h.jsx(Pn,{path:"/mode-selection",element:h.jsx(SA,{})}),h.jsx(Pn,{path:"/test",element:h.jsx(bA,{})}),h.jsx(Pn,{path:"/save-test",element:h.jsx(CA,{})}),h.jsx(Pn,{path:"/search",element:h.jsx(vA,{})}),h.jsx(Pn,{path:"/contact",element:h.jsx(kA,{})})]})})]})}xo.createRoot(document.getElementById("root")).render(h.jsx(Ri.StrictMode,{children:h.jsxs(og,{children:[h.jsx(IA,{}),h.jsx(Zg,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff"},success:{duration:3e3,iconTheme:{primary:"#22c55e",secondary:"#fff"}},error:{duration:5e3,iconTheme:{primary:"#ef4444",secondary:"#fff"}}}})]})}));
