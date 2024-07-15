"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5518],{518:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.373.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(3480).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},7592:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.373.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(3480).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},7818:function(e,t,n){n.d(t,{default:function(){return i.a}});var r=n(551),i=n.n(r)},7138:function(e,t,n){n.d(t,{default:function(){return i.a}});var r=n(231),i=n.n(r)},551:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(9920);n(7437),n(2265);let i=r._(n(148));function o(e,t){var n;let r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let o={...r,...t};return(0,i.default)({...o,modules:null==(n=o.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let r=n(5592);function i(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},148:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(7437),i=n(2265),o=n(912),u=n(1481);function c(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(c(()=>null)),loading:null,ssr:!0},a=function(e){let t={...l,...e},n=(0,i.lazy)(()=>t.loader().then(c)),a=t.loading;function s(e){let c=a?(0,r.jsx)(a,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(u.PreloadCss,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(i.Suspense,{fallback:c,children:l})}return s.displayName="LoadableComponent",s}},1481:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return o}});let r=n(7437),i=n(8512);function o(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,i.getExpectedRequestStore)("next/dynamic css"),o=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));o.push(...t)}}return 0===o.length?null:(0,r.jsx)(r.Fragment,{children:o.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},4300:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(2265);function i(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function o(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let r=e[n],u=t[n];return"function"==typeof r?`${r}`==`${u}`:i(r)&&i(u)?o(r,u):r===u})}function u(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function c(e){return"number"==typeof e}function l(e){return"string"==typeof e}function a(e){return"boolean"==typeof e}function s(e){return"[object Object]"===Object.prototype.toString.call(e)}function f(e){return Math.abs(e)}function d(e){return Math.sign(e)}function p(e){return y(e).map(Number)}function m(e){return e[h(e)]}function h(e){return Math.max(0,e.length-1)}function g(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function y(e){return Object.keys(e)}function x(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function b(){let e=[],t={add:function(n,r,i,o={passive:!0}){let u;return"addEventListener"in n?(n.addEventListener(r,i,o),u=()=>n.removeEventListener(r,i,o)):(n.addListener(i),u=()=>n.removeListener(i)),e.push(u),t},clear:function(){e=e.filter(e=>e())}};return t}function v(e=0,t=0){let n=f(e-t);function r(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return r(n)?n<e?e:t:n},reachedAny:r,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function w(e){let t=e;function n(e){return c(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function E(e,t){let n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},r=t.style,i=!1;return{clear:function(){i||(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){i||(r.transform=n(e.direction(t)))},toggleActive:function(e){i=!e}}}let j={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function O(e,t,n){let r,i,o,u,S;let P=e.ownerDocument,k=P.defaultView,M=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(y(n).forEach(r=>{let i=t[r],o=n[r],u=s(i)&&s(o);t[r]=u?e(i,o):o}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let r=n.breakpoints||{},i=y(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{});return t(n,i)},optionsMediaQueries:function(t){return t.map(e=>y(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(k),L=(S=[],{init:function(e,t){return(S=t.filter(({options:e})=>!1!==M.optionsAtMedia(e).active)).forEach(t=>t.init(e,M)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){S=S.filter(e=>e.destroy())}}),I=b(),R=function(){let e,t={},n={init:function(t){e=t},emit:function(r){return(t[r]||[]).forEach(t=>t(e,r)),n},off:function(e,r){return t[e]=(t[e]||[]).filter(e=>e!==r),n},on:function(e,r){return t[e]=(t[e]||[]).concat([r]),n},clear:function(){t={}}};return n}(),{mergeOptions:C,optionsAtMedia:D,optionsMediaQueries:A}=M,{on:F,off:_,emit:T}=R,z=!1,N=C(j,O.globalOptions),B=C(N),H=[];function V(t,n){!z&&(B=D(N=C(N,t)),H=n||H,function(){let{container:t,slides:n}=B;o=(l(t)?e.querySelector(t):t)||e.children[0];let r=l(n)?o.querySelectorAll(n):n;u=[].slice.call(r||o.children)}(),r=function t(n){let r=function(e,t,n,r,i,o,u){let s,j;let{align:O,axis:S,direction:P,startIndex:k,loop:M,duration:L,dragFree:I,dragThreshold:R,inViewThreshold:C,slidesToScroll:D,skipSnaps:A,containScroll:F,watchResize:_,watchSlides:T,watchDrag:z}=o,N={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}},B=N.measure(t),H=n.map(N.measure),V=function(e,t){let n="rtl"===t,r="y"===e,i=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(e){let{height:t,width:n}=e;return r?t:n},direction:function(e){return e*i}}}(S,P),$=V.measureSize(B),q={measure:function(e){return e/100*$}},U=function(e,t){let n={start:function(){return 0},center:function(e){return(t-e)/2},end:function(e){return t-e}};return{measure:function(r,i){return l(e)?n[e](r):e(t,r,i)}}}(O,$),Z=!M&&!!F,{slideSizes:W,slideSizesWithGaps:J,startGap:X,endGap:G}=function(e,t,n,r,i,o){let{measureSize:u,startEdge:c,endEdge:l}=e,a=n[0]&&i,s=function(){if(!a)return 0;let e=n[0];return f(t[c]-e[c])}(),d=a?parseFloat(o.getComputedStyle(m(r)).getPropertyValue(`margin-${l}`)):0,p=n.map(u),g=n.map((e,t,n)=>{let r=t===h(n);return t?r?p[t]+d:n[t+1][c]-e[c]:p[t]+s}).map(f);return{slideSizes:p,slideSizesWithGaps:g,startGap:s,endGap:d}}(V,B,H,n,M||!!F,i),Q=function(e,t,n,r,i,o,u,l,a){let{startEdge:s,endEdge:d,direction:g}=e,y=c(n);return{groupSlides:function(e){return y?p(e).filter(e=>e%n==0).map(t=>e.slice(t,t+n)):e.length?p(e).reduce((n,c,a)=>{let p=m(n)||0,y=c===h(e),x=i[s]-o[p][s],b=i[s]-o[c][d],v=r||0!==p?0:g(u),w=f(b-(!r&&y?g(l):0)-(x+v));return a&&w>t+2&&n.push(c),y&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}}}(V,$,D,M,B,H,X,G,0),{snaps:Y,snapsAligned:K}=function(e,t,n,r,i){let{startEdge:o,endEdge:u}=e,{groupSlides:c}=i,l=c(r).map(e=>m(e)[u]-e[0][o]).map(f).map(t.measure),a=r.map(e=>n[o]-e[o]).map(e=>-f(e)),s=c(a).map(e=>e[0]).map((e,t)=>e+l[t]);return{snaps:a,snapsAligned:s}}(V,U,B,H,Q),ee=-m(Y)+m(J),{snapsContained:et,scrollContainLimit:en}=function(e,t,n,r,i){let o=v(-t+e,0),u=n.map((e,t)=>{let{min:r,max:i}=o,u=o.constrain(e),c=t===h(n);return t?c||1>f(r-u)?r:1>f(i-u)?i:u:i}).map(e=>parseFloat(e.toFixed(3))),c=function(){let e=u[0],t=m(u);return v(u.lastIndexOf(e),u.indexOf(t)+1)}();return{snapsContained:function(){if(t<=e+2)return[o.max];if("keepSnaps"===r)return u;let{min:n,max:i}=c;return u.slice(n,i)}(),scrollContainLimit:c}}($,ee,K,F,0),er=Z?et:K,{limit:ei}=function(e,t,n){let r=t[0];return{limit:v(n?r-e:m(t),r)}}(ee,er,M),eo=function e(t,n,r){let{constrain:i}=v(0,t),o=t+1,u=c(n);function c(e){return r?f((o+e)%o):i(e)}function l(){return e(t,u,r)}let a={get:function(){return u},set:function(e){return u=c(e),a},add:function(e){return l().set(u+e)},clone:l};return a}(h(er),k,M),eu=eo.clone(),ec=p(n),el=({dragHandler:e,eventHandler:t,scrollBody:n,scrollBounds:r,scrollLooper:i,slideLooper:o,translate:u,location:c,animation:l,options:{loop:a}})=>{a||r.constrain(e.pointerDown()),n.seek();let s=n.settled(),f=!r.shouldConstrain(),d=a?s:s&&f;d&&!e.pointerDown()&&(l.stop(),t.emit("settle")),d||t.emit("scroll"),a&&(i.loop(n.direction()),o.loop()),u.to(c.get())},ea=function(e,t,n){let r=b(),i=1e3/60,o=null,u=0,c=0;function l(e){if(!u)return;o||(o=e);let r=e-o;for(o=e,c+=r;c>=i;)n(),c-=i;u&&t.requestAnimationFrame(l)}function a(){t.cancelAnimationFrame(u),o=null,c=0,u=0}return{init:function(){r.add(e,"visibilitychange",()=>{e.hidden&&(o=null,c=0)})},destroy:function(){a(),r.clear()},start:function(){u||(u=t.requestAnimationFrame(l))},stop:a,update:n}}(r,i,()=>el(ew)),es=er[eo.get()],ef=w(es),ed=w(es),ep=function(e,t,n,r){let i=0,o=0,u=n,c=.68,l=e.get(),a=0;function s(e){return u=e,m}function p(e){return c=e,m}let m={direction:function(){return o},duration:function(){return u},velocity:function(){return i},seek:function(){let n=t.get()-e.get(),r=0;return u?(i+=n/u,i*=c,l+=i,e.add(i),r=l-a):(i=0,e.set(t),r=n),o=d(r),a=l,m},settled:function(){return .001>f(t.get()-e.get())},useBaseFriction:function(){return p(.68)},useBaseDuration:function(){return s(n)},useFriction:p,useDuration:s};return m}(ef,ed,L,0),em=function(e,t,n,r,i){let{reachedAny:o,removeOffset:u,constrain:c}=r;function l(e){return e.concat().sort((e,t)=>f(e)-f(t))[0]}function a(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return l(i);let o=i.filter(e=>d(e)===r);return o.length?l(o):m(i)-n}return{byDistance:function(n,r){let l=i.get()+n,{index:s,distance:d}=function(n){let r=e?u(n):c(n),{index:i}=t.map((e,t)=>({diff:a(e-r,0),index:t})).sort((e,t)=>f(e.diff)-f(t.diff))[0];return{index:i,distance:r}}(l),p=!e&&o(l);if(!r||p)return{index:s,distance:n};let m=n+a(t[s]-d,0);return{index:s,distance:m}},byIndex:function(e,n){let r=a(t[e]-i.get(),n);return{index:e,distance:r}},shortcut:a}}(M,er,ee,ei,ed),eh=function(e,t,n,r,i,o){function u(r){let u=r.distance,c=r.index!==t.get();i.add(u),u&&e.start(),c&&(n.set(t.get()),t.set(r.index),o.emit("select"))}return{distance:function(e,t){u(r.byDistance(e,t))},index:function(e,n){let i=t.clone().set(e);u(r.byIndex(i.get(),n))}}}(ea,eo,eu,em,ed,u),eg=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(ei),ey=b(),ex=function(e,t,n,r){let i;let o={},u=null,c=null,l=!1;return{init:function(){i=new IntersectionObserver(e=>{l||(e.forEach(e=>{o[t.indexOf(e.target)]=e}),u=null,c=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:r}),t.forEach(e=>i.observe(e))},destroy:function(){i&&i.disconnect(),l=!0},get:function(e=!0){if(e&&u)return u;if(!e&&c)return c;let t=y(o).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(e&&i||!e&&!i)&&t.push(r),t},[]);return e&&(u=t),e||(c=t),t}}}(t,n,u,C),{slideRegistry:eb}=function(e,t,n,r,i,o){let{groupSlides:u}=i,{min:c,max:l}=r;return{slideRegistry:function(){let r=u(o);return 1===n.length?[o]:e&&"keepSnaps"!==t?r.slice(c,l).map((e,t,n)=>{let r=t===h(n);return t?r?g(h(o)-m(n)[0]+1,m(n)[0]):e:g(m(n[0])+1)}):r}()}}(Z,F,er,en,Q,ec),ev=function(e,t,n,r,i,o,u){let l=0;function a(e){"Tab"===e.code&&(l=new Date().getTime())}function s(a){o.add(a,"focus",()=>{if(new Date().getTime()-l>10)return;e.scrollLeft=0;let o=t.indexOf(a),s=n.findIndex(e=>e.includes(o));c(s)&&(i.useDuration(0),r.index(s,0),u.emit("slideFocus"))},{passive:!0,capture:!0})}return{init:function(){o.add(document,"keydown",a,!1),t.forEach(s)}}}(e,n,eb,eh,ep,ey,u),ew={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:B,slideRects:H,animation:ea,axis:V,dragHandler:function(e,t,n,r,i,o,u,c,l,s,p,m,h,g,y,w,E,j,O){let{cross:S,direction:P}=e,k=["INPUT","SELECT","TEXTAREA"],M={passive:!1},L=b(),I=b(),R=v(50,225).constrain(g.measure(20)),C={mouse:300,touch:400},D={mouse:500,touch:600},A=y?43:25,F=!1,_=0,T=0,z=!1,N=!1,B=!1,H=!1;function V(e){if(!x(e,r)&&e.touches.length>=2)return $(e);let t=o.readPoint(e),n=o.readPoint(e,S),u=f(t-_),l=f(n-T);if(!N&&!H&&(!e.cancelable||!(N=u>l)))return $(e);let a=o.pointerMove(e);u>w&&(B=!0),s.useFriction(.3).useDuration(.75),c.start(),i.add(P(a)),e.preventDefault()}function $(e){let t=p.byDistance(0,!1).index!==m.get(),n=o.pointerUp(e)*(y?D:C)[H?"mouse":"touch"],r=function(e,t){let n=m.add(-1*d(e)),r=p.byDistance(e,!y).distance;return y||f(e)<R?r:E&&t?.5*r:p.byIndex(n.get(),0).distance}(P(n),t),i=function(e,t){var n,r;if(0===e||0===t||f(e)<=f(t))return 0;let i=(n=f(e),r=f(t),f(n-r));return f(i/e)}(n,r);N=!1,z=!1,I.clear(),s.useDuration(A-10*i).useFriction(.68+i/50),l.distance(r,!y),H=!1,h.emit("pointerUp")}function q(e){B&&(e.stopPropagation(),e.preventDefault(),B=!1)}return{init:function(e){O&&L.add(t,"dragstart",e=>e.preventDefault(),M).add(t,"touchmove",()=>void 0,M).add(t,"touchend",()=>void 0).add(t,"touchstart",c).add(t,"mousedown",c).add(t,"touchcancel",$).add(t,"contextmenu",$).add(t,"click",q,!0);function c(c){(a(O)||O(e,c))&&function(e){let c=x(e,r);H=c,B=y&&c&&!e.buttons&&F,F=f(i.get()-u.get())>=2,c&&0!==e.button||function(e){let t=e.nodeName||"";return k.includes(t)}(e.target)||(z=!0,o.pointerDown(e),s.useFriction(0).useDuration(0),i.set(u),function(){let e=H?n:t;I.add(e,"touchmove",V,M).add(e,"touchend",$).add(e,"mousemove",V,M).add(e,"mouseup",$)}(),_=o.readPoint(e),T=o.readPoint(e,S),h.emit("pointerDown"))}(c)}},destroy:function(){L.clear(),I.clear()},pointerDown:function(){return z}}}(V,e,r,i,ed,function(e,t){let n,r;function i(e){return e.timeStamp}function o(n,r){let i=r||e.scroll,o=`client${"x"===i?"X":"Y"}`;return(x(n,t)?n:n.touches[0])[o]}return{pointerDown:function(e){return n=e,r=e,o(e)},pointerMove:function(e){let t=o(e)-o(r),u=i(e)-i(n)>170;return r=e,u&&(n=e),t},pointerUp:function(e){if(!n||!r)return 0;let t=o(r)-o(n),u=i(e)-i(n),c=i(e)-i(r)>170,l=t/u;return u&&!c&&f(l)>.1?l:0},readPoint:o}}(V,i),ef,ea,eh,ep,em,eo,u,q,I,R,A,0,z),eventStore:ey,percentOfView:q,index:eo,indexPrevious:eu,limit:ei,location:ef,options:o,resizeHandler:function(e,t,n,r,i,o,u){let c,l;let s=[],d=!1;function p(e){return i.measureSize(u.measure(e))}return{init:function(i){o&&(l=p(e),s=r.map(p),c=new ResizeObserver(u=>{!d&&(a(o)||o(i,u))&&function(o){for(let u of o){let o=u.target===e,c=r.indexOf(u.target),a=o?l:s[c];if(f(p(o?e:r[c])-a)>=.5){n.requestAnimationFrame(()=>{i.reInit(),t.emit("resize")});break}}}(u)}),[e].concat(r).forEach(e=>c.observe(e)))},destroy:function(){c&&c.disconnect(),d=!0}}}(t,u,i,n,V,_,N),scrollBody:ep,scrollBounds:function(e,t,n,r,i){let o=i.measure(10),u=i.measure(50),c=v(.1,.99),l=!1;function a(){return!!(!l&&e.reachedAny(n.get())&&e.reachedAny(t.get()))}return{shouldConstrain:a,constrain:function(i){if(!a())return;let l=e.reachedMin(t.get())?"min":"max",s=f(e[l]-t.get()),d=n.get()-t.get(),p=c.constrain(s/u);n.subtract(d*p),!i&&f(d)<o&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(e){l=!e}}}(ei,ef,ed,ep,q),scrollLooper:function(e,t,n,r){let{reachedMin:i,reachedMax:o}=v(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?o(n.get()):-1===t&&i(n.get())))return;let u=-1*t*e;r.forEach(e=>e.add(u))}}}(ee,ei,ef,[ef,ed]),scrollProgress:eg,scrollSnapList:er.map(eg.get),scrollSnaps:er,scrollTarget:em,scrollTo:eh,slideLooper:function(e,t,n,r,i,o,u,c,l){let a=p(i),s=m(d(p(i).reverse(),u[0]),n,!1).concat(m(d(a,t-u[0]-1),-n,!0));function f(e,t){return e.reduce((e,t)=>e-i[t],t)}function d(e,t){return e.reduce((e,n)=>f(e,t)>0?e.concat([n]):e,[])}function m(i,u,a){let s=o.map((e,n)=>({start:e-r[n]+.5+u,end:e+t-.5+u}));return i.map(t=>{let r=a?0:-n,i=a?n:0,o=s[t][a?"end":"start"];return{index:t,loopPoint:o,slideLocation:w(-1),translate:E(e,l[t]),target:()=>c.get()>o?r:i}})}return{canLoop:function(){return s.every(({index:e})=>.1>=f(a.filter(t=>t!==e),t))},clear:function(){s.forEach(e=>e.translate.clear())},loop:function(){s.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:s}}(V,$,ee,W,J,Y,er,ef,n),slideFocus:ev,slidesHandler:(j=!1,{init:function(e){T&&(s=new MutationObserver(t=>{!j&&(a(T)||T(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),u.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){s&&s.disconnect(),j=!0}}),slidesInView:ex,slideIndexes:ec,slideRegistry:eb,slidesToScroll:Q,target:ed,translate:E(V,t)};return ew}(e,o,u,P,k,n,R);return n.loop&&!r.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):r}(B),A([N,...H.map(({options:e})=>e)]).forEach(e=>I.add(e,"change",$)),B.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(),r.eventHandler.init(W),r.resizeHandler.init(W),r.slidesHandler.init(W),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&u.length&&r.dragHandler.init(W),i=L.init(W,H)))}function $(e,t){let n=Z();q(),V(C({startIndex:n},e),t),R.emit("reInit")}function q(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),L.destroy(),I.clear()}function U(e,t,n){B.active&&!z&&(r.scrollBody.useBaseFriction().useDuration(!0===t?0:B.duration),r.scrollTo.index(e,n||0))}function Z(){return r.index.get()}let W={canScrollNext:function(){return r.index.add(1).get()!==Z()},canScrollPrev:function(){return r.index.add(-1).get()!==Z()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){z||(z=!0,I.clear(),q(),R.emit("destroy"),R.clear())},off:_,on:F,emit:T,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:$,rootNode:function(){return e},scrollNext:function(e){U(r.index.add(1).get(),e,-1)},scrollPrev:function(e){U(r.index.add(-1).get(),e,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:U,selectedScrollSnap:Z,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return V(t,n),setTimeout(()=>R.emit("init"),0),W}function S(e={},t=[]){let n=(0,r.useRef)(e),i=(0,r.useRef)(t),[c,l]=(0,r.useState)(),[a,s]=(0,r.useState)(),f=(0,r.useCallback)(()=>{c&&c.reInit(n.current,i.current)},[c]);return(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&a){O.globalOptions=S.globalOptions;let e=O(a,n.current,i.current);return l(e),()=>e.destroy()}l(void 0)},[a,l]),(0,r.useEffect)(()=>{o(n.current,e)||(n.current=e,f())},[e,f]),(0,r.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=u(e),r=u(t);return n.every((e,t)=>o(e,r[t]))}(i.current,t)&&(i.current=t,f())},[t,f]),[s,c]}O.globalOptions=void 0,S.globalOptions=void 0},5127:function(e,t,n){n.d(t,{M:function(){return x}});var r=n(7437),i=n(2265),o=n(9033);function u(){let e=(0,i.useRef)(!1);return(0,o.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var c=n(6219),l=n(7797),a=n(458),s=n(9791);class f extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d({children:e,isPresent:t}){let n=(0,i.useId)(),o=(0,i.useRef)(null),u=(0,i.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,i.useContext)(s._);return(0,i.useInsertionEffect)(()=>{let{width:e,height:r,top:i,left:l}=u.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;let a=document.createElement("style");return c&&(a.nonce=c),document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${i}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[t]),(0,r.jsx)(f,{isPresent:t,childRef:o,sizeRef:u,children:i.cloneElement(e,{ref:o})})}let p=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:u,presenceAffectsLayout:c,mode:s})=>{let f=(0,a.h)(m),p=(0,i.useId)(),h=(0,i.useMemo)(()=>({id:p,initial:t,isPresent:n,custom:u,onExitComplete:e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;o&&o()},register:e=>(f.set(e,!1),()=>f.delete(e))}),c?[Math.random()]:[n]);return(0,i.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[n]),i.useEffect(()=>{n||f.size||!o||o()},[n]),"popLayout"===s&&(e=(0,r.jsx)(d,{isPresent:n,children:e})),(0,r.jsx)(l.O.Provider,{value:h,children:e})};function m(){return new Map}var h=n(5050),g=n(9047);let y=e=>e.key||"",x=({children:e,custom:t,initial:n=!0,onExitComplete:l,exitBeforeEnter:a,presenceAffectsLayout:s=!0,mode:f="sync"})=>{var d;(0,g.k)(!a,"Replace exitBeforeEnter with mode='wait'");let m=(0,i.useContext)(h.p).forceRender||function(){let e=u(),[t,n]=(0,i.useState)(0),r=(0,i.useCallback)(()=>{e.current&&n(t+1)},[t]);return[(0,i.useCallback)(()=>c.Wi.postRender(r),[r]),t]}()[0],x=u(),b=function(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}(e),v=b,w=(0,i.useRef)(new Map).current,E=(0,i.useRef)(v),j=(0,i.useRef)(new Map).current,O=(0,i.useRef)(!0);if((0,o.L)(()=>{O.current=!1,function(e,t){e.forEach(e=>{let n=y(e);t.set(n,e)})}(b,j),E.current=v}),d=()=>{O.current=!0,j.clear(),w.clear()},(0,i.useEffect)(()=>()=>d(),[]),O.current)return(0,r.jsx)(r.Fragment,{children:v.map(e=>(0,r.jsx)(p,{isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:s,mode:f,children:e},y(e)))});v=[...v];let S=E.current.map(y),P=b.map(y),k=S.length;for(let e=0;e<k;e++){let t=S[e];-1!==P.indexOf(t)||w.has(t)||w.set(t,void 0)}return"wait"===f&&w.size&&(v=[]),w.forEach((e,n)=>{if(-1!==P.indexOf(n))return;let i=j.get(n);if(!i)return;let o=S.indexOf(n),u=e;u||(u=(0,r.jsx)(p,{isPresent:!1,onExitComplete:()=>{w.delete(n);let e=Array.from(j.keys()).filter(e=>!P.includes(e));if(e.forEach(e=>j.delete(e)),E.current=b.filter(t=>{let r=y(t);return r===n||e.includes(r)}),!w.size){if(!1===x.current)return;m(),l&&l()}},custom:t,presenceAffectsLayout:s,mode:f,children:i},y(i)),w.set(n,u)),v.splice(o,0,u)}),v=v.map(e=>{let t=e.key;return w.has(t)?e:(0,r.jsx)(p,{isPresent:!0,presenceAffectsLayout:s,mode:f,children:e},y(e))}),(0,r.jsx)(r.Fragment,{children:w.size?v:v.map(e=>(0,i.cloneElement)(e))})}}}]);