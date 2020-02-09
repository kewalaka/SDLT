!function(e){function n(n){for(var t,o,i=n[0],c=n[1],d=n[2],a=0,l=[];a<i.length;a++)o=i[a],I[o]&&l.push(I[o][0]),I[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(T&&T(n);l.length;)l.shift()();return k.push.apply(k,d||[]),r()}function r(){for(var e,n=0;n<k.length;n++){for(var r=k[n],t=!0,o=1;o<r.length;o++){var i=r[o];0!==I[i]&&(t=!1)}t&&(k.splice(n--,1),e=S(S.s=r[0]))}return e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!_[e]||!O[e])return;for(var r in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0==--w&&0===m&&P()}(e,n),t&&t(e,n)};var o,i=!0,c="a0ca7f00bf8c5c1cdc96",d=1e4,a={},l=[],s=[];function u(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:D,apply:x,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:a[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var y,v,b,w=0,m=0,g={},O={},_={};function j(e){return+e+""===e?+e:e}function D(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(n=d,n=n||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=S.p+"hot/hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;O={},g={},_=e.c,b=e.h,h("prepare");var n=new Promise(function(e,n){y={resolve:e,reject:n}});for(var r in v={},I)E(r);return"prepare"===f&&0===m&&0===w&&P(),n});var n}function E(e){var n;_[e]?(O[e]=!0,w++,(n=document.createElement("script")).charset="utf-8",n.src=S.p+"hot/hot-update.js",document.head.appendChild(n)):g[e]=!0}function P(){h("ready");var e=y;if(y=null,e)if(i)Promise.resolve().then(function(){return x(i)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(j(r));e.resolve(n)}}function x(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,i,d;function s(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,d=o.chain;if((i=H[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:d,moduleId:c};for(var a=0;a<i.parents.length;a++){var l=i.parents[a],s=H[l];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:d.concat([l]),moduleId:c,parentId:l};-1===n.indexOf(l)&&(s.hot._acceptedDependencies[c]?(r[l]||(r[l]=[]),u(r[l],[c])):(delete r[l],n.push(l),t.push({chain:d.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function u(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var p={},y=[],w={},m=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var g in v)if(Object.prototype.hasOwnProperty.call(v,g)){var O;d=j(g);var D=!1,E=!1,P=!1,x="";switch((O=v[g]?s(d):{type:"disposed",moduleId:g}).chain&&(x="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(D=new Error("Aborted because of self decline: "+O.moduleId+x));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+x));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(D=new Error("Aborted because "+d+" is not accepted"+x));break;case"accepted":n.onAccepted&&n.onAccepted(O),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),P=!0;break;default:throw new Error("Unexception type "+O.type)}if(D)return h("abort"),Promise.reject(D);if(E)for(d in w[d]=v[d],u(y,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,d)&&(p[d]||(p[d]=[]),u(p[d],O.outdatedDependencies[d]));P&&(u(y,[O.moduleId]),w[d]=m)}var k,A=[];for(t=0;t<y.length;t++)d=y[t],H[d]&&H[d].hot._selfAccepted&&A.push({module:d,errorHandler:H[d].hot._selfAccepted});h("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete I[e]}(e)});for(var M,q,T=y.slice();T.length>0;)if(d=T.pop(),i=H[d]){var U={},C=i.hot._disposeHandlers;for(o=0;o<C.length;o++)(r=C[o])(U);for(a[d]=U,i.hot.active=!1,delete H[d],delete p[d],o=0;o<i.children.length;o++){var L=H[i.children[o]];L&&((k=L.parents.indexOf(d))>=0&&L.parents.splice(k,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(i=H[d]))for(q=p[d],o=0;o<q.length;o++)M=q[o],(k=i.children.indexOf(M))>=0&&i.children.splice(k,1);for(d in h("apply"),c=b,w)Object.prototype.hasOwnProperty.call(w,d)&&(e[d]=w[d]);var R=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(i=H[d])){q=p[d];var J=[];for(t=0;t<q.length;t++)if(M=q[t],r=i.hot._acceptedDependencies[M]){if(-1!==J.indexOf(r))continue;J.push(r)}for(t=0;t<J.length;t++){r=J[t];try{r(q)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:q[t],error:e}),n.ignoreErrored||R||(R=e)}}}for(t=0;t<A.length;t++){var N=A[t];d=N.module,l=[d];try{S(d)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:r,originalError:e}),n.ignoreErrored||R||(R=r),R||(R=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||R||(R=e)}}return R?(h("fail"),Promise.reject(R)):(h("idle"),new Promise(function(e){e(y)}))}var H={},I={1:0},k=[];function S(n){if(H[n])return H[n].exports;var r=H[n]={i:n,l:!1,exports:{},hot:u(n),parents:(s=l,l=[],s),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=H[e];if(!n)return S;var r=function(r){return n.hot.active?(H[r]?-1===H[r].parents.indexOf(e)&&H[r].parents.push(e):(l=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),l=[]),S(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(n){S[e]=n}}};for(var i in S)Object.prototype.hasOwnProperty.call(S,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,t(i));return r.e=function(e){return"ready"===f&&h("prepare"),m++,S.e(e).then(n,function(e){throw n(),e});function n(){m--,"prepare"===f&&(g[e]||E(e),0===m&&0===w&&P())}},r.t=function(e,n){return 1&n&&(e=r(e)),S.t(e,-2&n)},r}(n)),r.l=!0,r.exports}S.m=e,S.c=H,S.d=function(e,n,r){S.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},S.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,n){if(1&n&&(e=S(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(S.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)S.d(r,t,function(n){return e[n]}.bind(null,t));return r},S.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(n,"a",n),n},S.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},S.p="/resources/themes/sdlt/dist/img/",S.h=function(){return c};var A=window.webpackJsonp=window.webpackJsonp||[],M=A.push.bind(A);A.push=n,A=A.slice();for(var q=0;q<A.length;q++)n(A[q]);var T=M;k.push([374,0]),r()}({374:function(e,n,r){r(162),e.exports=r(665)},665:function(e,n,r){"use strict";function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}r.r(n),function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,o;return n=e,o=[{key:"init",value:function(){window.addEventListener("load",function(e){var n=sessionStorage.getItem("SiteAlertClosed"),r=document.querySelector("#site-alert"),t=document.querySelector("body");r&&("true"!==n&&(r.style.display="flex",t.style.paddingTop=r.offsetHeight+"px"),document.querySelector("#site-alert .close-icon").addEventListener("click",function(){sessionStorage.setItem("SiteAlertClosed","true"),r.style.display="none",t.style.paddingTop=0}))})}}],(r=null)&&t(n.prototype,r),o&&t(n,o),e}().init()}});
//# sourceMappingURL=common.bundle.js.map