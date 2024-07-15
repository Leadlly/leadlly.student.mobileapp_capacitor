"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2380],{6762:function(e,t,a){var l=a(7437);let r=(0,a(7818).default)(()=>Promise.all([a.e(9562),a.e(3865)]).then(a.bind(a,3865)),{loadableGenerated:{webpack:()=>[3865]},ssr:!1});t.default=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsx)(r,{type:"area",width:"100%",height:140,series:[{name:"Revision Session",data:[31,40]},{name:"Quizzes",data:[11,32]}],options:{dataLabels:{enabled:!1},stroke:{curve:"smooth",width:[1,1]},xaxis:{type:"category",categories:["Jan12","Feb12"]},fill:{colors:["#9654F4","#56CFE1"]},legend:{show:!1}}})})})},6601:function(e,t,a){a.d(t,{default:function(){return o}});var l=a(7437),r=a(7818),s=a(2183);a(2265);var n=()=>(0,l.jsx)("div",{className:"w-full px-6 py-4 flex justify-between",children:Array.from({length:7}).map((e,t)=>(0,l.jsxs)("div",{className:"flex items-end gap-1",children:[(0,l.jsx)(s.O,{className:"w-5 h-24 rounded-t"}),(0,l.jsx)(s.O,{className:"w-5 h-20 rounded-t"})]},t))});let i=(0,r.default)(()=>Promise.all([a.e(9562),a.e(3865)]).then(a.bind(a,3865)),{loadableGenerated:{webpack:()=>[3865]},ssr:!1,loading:()=>(0,l.jsx)(n,{})});var o=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsx)(i,{type:"bar",width:"100%",height:140,series:[{name:"Revisions",data:[44,55,57,56,61,58,63]},{name:"Quizzes",data:[35,41,36,26,45,48,52]}],options:{chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"40%",borderRadius:1.5}},dataLabels:{enabled:!1},stroke:{show:!0,width:3,colors:["transparent"]},xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},fill:{colors:["#9654F4","#56CFE1"]},legend:{show:!1}}})}),(0,l.jsxs)("div",{className:"w-36 hidden md:block",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:" block w-3 h-3 rounded bg-primary"}),(0,l.jsx)("span",{className:"text-xs capitalize",children:"Revision Sessions"})]}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:" block w-3 h-3 rounded bg-[#72EFDD]"}),(0,l.jsx)("span",{className:"text-xs capitalize",children:"Quizzes"})]})]})]})},6991:function(e,t,a){var l=a(7437);let r=(0,a(7818).default)(()=>Promise.all([a.e(9562),a.e(3865)]).then(a.bind(a,3865)),{loadableGenerated:{webpack:()=>[3865]},ssr:!1});t.default=e=>{let{data:t}=e,a=[t.plannerFrequency,t.overall_efficiency,70];return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r,{type:"donut",width:"100%",height:"100%",series:[...a],options:{chart:{height:"100%",type:"donut"},responsive:[{breakpoint:763,options:{chart:{width:150},plotOptions:{pie:{donut:{labels:{show:!0,value:{fontWeight:700,fontFamily:"Mada,sans-serif",fontSize:"20px",color:"#000000",offsetY:0}}}}}}}],legend:{show:!1},dataLabels:{enabled:!1},colors:["#9654f4","#72EFDD","#FFDA57"],stroke:{width:3},plotOptions:{pie:{donut:{labels:{show:!0,value:{fontWeight:700,fontFamily:"Mada,sans-serif",fontSize:"24px",color:"#000000",offsetY:0},total:{show:!0,color:"#4f4f4f",fontFamily:"Mada,sans-serif",fontSize:"8px",label:"Total Value",formatter:function(e){var t,a;let l=(null==e?void 0:null===(t=e.globals)||void 0===t?void 0:t.series.reduce((e,t)=>e+t,0))/(null==e?void 0:null===(a=e.globals)||void 0===a?void 0:a.series.length);return"".concat(Math.round(l/100*100),"%")}}}}}}}})})}},5589:function(e,t,a){a.d(t,{default:function(){return d}});var l=a(7437),r=a(9354),s=a(7818),n=a(2183);a(2265);var i=()=>(0,l.jsx)("div",{className:"px-12 py-5",children:(0,l.jsx)(n.O,{className:"w-28 h-28 bg-transparent border-[15px] border-muted rounded-full"})});let o=(0,s.default)(()=>Promise.all([a.e(9562),a.e(3865)]).then(a.bind(a,3865)),{loadableGenerated:{webpack:()=>[3865]},ssr:!1,loading:()=>(0,l.jsx)(i,{})});var d=e=>{let{series:t,colors:a,labels:s,dataLabel:n,width:i,hollowSize:d,fontSize:c}=e;return(0,l.jsxs)("div",{className:"relative h-full",children:[(0,l.jsx)(o,{type:"radialBar",width:i,height:"100%",series:t,options:{chart:{height:"100%",type:"radialBar"},colors:a,plotOptions:{radialBar:{hollow:{margin:5,size:d},dataLabels:{show:!s.includes("No. of Questions Solved"),value:{fontSize:null!=c?c:"18px",fontWeight:600,fontFamily:"Mada,sans-serif",offsetY:2},name:{show:!1},total:{show:!0,formatter:function(e){var t,a;let l=(null==e?void 0:null===(t=e.globals)||void 0===t?void 0:t.series.reduce((e,t)=>e+t,0))/(null==e?void 0:null===(a=e.globals)||void 0===a?void 0:a.series.length);return"".concat(Math.round(l/100*100),"%")}}}}},labels:s,stroke:{lineCap:"round"}}}),(0,l.jsxs)("div",{className:(0,r.cn)("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2","questions"===n?"-mt-3":""),children:[s.includes("No. of Questions Solved")&&(0,l.jsx)("p",{className:"text-2xl leading-none font-semibold text-center",children:"120+"}),(0,l.jsx)("p",{className:(0,r.cn)("text-sm leading-none font-medium mt-2 capitalize","overall"===n?"text-[10px] text-[#a9a9a9] -mt-1":"","questions"===n?"-mt-[1px]":""),children:n})]})]})}},2256:function(e,t,a){a.d(t,{default:function(){return d}});var l=a(7437),r=a(7818),s=a(9354),n=a(2183),i=()=>(0,l.jsx)("div",{className:"py-4",children:(0,l.jsx)(n.O,{className:"w-32 h-16 border-[15px] border-b-0 border-muted bg-transparent rounded-t-full"})});let o=(0,r.default)(()=>Promise.all([a.e(9562),a.e(3865)]).then(a.bind(a,3865)),{loadableGenerated:{webpack:()=>[3865]},ssr:!1,loading:()=>(0,l.jsx)(i,{})});var d=e=>{let{series:t=[],colors:a=[],chartLabel:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{width:180,height:180,type:"radialBar",series:t,options:{plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"rgba(98, 0, 238, 0.1)",strokeWidth:"100%"},dataLabels:{name:{show:!1},value:{fontSize:"18px",fontWeight:"600",offsetY:8}}}},fill:{type:"colors",colors:a},stroke:{lineCap:"round"}}}),(0,l.jsxs)("div",{className:"w-full flex items-center justify-center gap-1",children:[(0,l.jsx)("span",{className:(0,s.cn)("w-2 h-2 rounded-[2px] -mt-[2px]","revision"===r?"bg-primary":"bg-[#56CFE1]")}),(0,l.jsx)("p",{className:"text-xs capitalize",children:r})]})]})}},6990:function(e,t,a){a.d(t,{TH:function(){return x.default},o8:function(){return w},vz:function(){return h.default},GP:function(){return g},T3:function(){return N},YE:function(){return f.default},h4:function(){return i},qg:function(){return p},TR:function(){return n},Oq:function(){return j},ZO:function(){return b},B1:function(){return u.default},AD:function(){return m},qv:function(){return c.default},jE:function(){return k},I5:function(){return d.default},fh:function(){return o.default},Ms:function(){return v}});var l=a(7437),r=a(6648),s=a(9354),n=e=>{let{fullLogoWidth:t,fullLogoHeight:a,fullLogoClassName:n,smallLogoWidth:i,smallLogoHeight:o,smallLogoClassName:d}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.default,{src:"/assets/images/leadlly_logo.svg",alt:"Leadlly_logo",width:t,height:a,className:(0,s.cn)(n)}),(0,l.jsx)(r.default,{src:"/assets/images/leadlly_logo_small.svg",alt:"Leadlly_logo",width:i,height:o,className:(0,s.cn)(d)})]})},i=e=>{let{title:t,className:a,icon:r,titleClassName:n}=e;return(0,l.jsxs)("header",{className:(0,s.cn)("w-full text-page-title leading-none font-semibold flex items-center justify-between",a),children:[(0,l.jsx)("h2",{className:(0,s.cn)(n),children:t}),r&&(0,l.jsx)("div",{children:r})]})};a(2380),a(8037);var o=a(50),d=a(8307);a(7138),a(7300),a(2265);var c=a(2256),u=a(5589),h=a(6601),x=a(6762),f=a(6991),m=e=>{let{className:t,...a}=e;return(0,l.jsxs)("svg",{viewBox:"0 0 7 12",xmlns:"http://www.w3.org/2000/svg",className:(0,s.cn)("w-[6px] h-[6px] fill-none stroke-black stroke-2",t),...a,children:[(0,l.jsx)("path",{d:"M1.46651 10.5319L5.1582 5.86192",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M5.1582 5.86194L1.46651 1.192",strokeLinecap:"round",strokeLinejoin:"round"})]})},p=e=>{let{className:t,...a}=e;return(0,l.jsx)("svg",{viewBox:"0 0 7 12",xmlns:"http://www.w3.org/2000/svg",className:(0,s.cn)("w-3 h-3 fill-none stroke-black stroke-2",t),...a,children:(0,l.jsx)("path",{d:"M6 1L1 6L6 11",strokeLinecap:"round",strokeLinejoin:"round"})})},v=e=>{let{className:t,...a}=e;return(0,l.jsx)("svg",{viewBox:"0 0 6 4",xmlns:"http://www.w3.org/2000/svg",className:(0,s.cn)("w-2 h-1",t),...a,children:(0,l.jsx)("path",{d:"M2.75377 0.405041C2.95221 0.193401 3.28852 0.194526 3.48554 0.407488L5.80218 2.9116C6.09891 3.23234 5.87042 3.75261 5.43349 3.75115L0.783508 3.7356C0.346572 3.73413 0.121574 3.21235 0.420435 2.8936L2.75377 0.405041Z"})})},w=e=>{let{className:t,...a}=e;return(0,l.jsx)("svg",{viewBox:"0 0 19 31",xmlns:"http://www.w3.org/2000/svg",className:(0,s.cn)("w-[10px] h-5 stroke-[#6a6a6a] stroke-[3] fill-none",t),...a,children:(0,l.jsx)("path",{d:"M17 11L17 20C17 24.9706 13.6421 29 9.5 29C5.35786 29 2 24.9706 2 20L2 8C2 4.68629 4.23858 2 7 2C9.76142 2 12 4.68629 12 8L12 20C12 21.6569 10.8807 23 9.5 23C8.11929 23 7 21.6569 7 20L7 8",strokeLinecap:"round",strokeLinejoin:"round"})})},g=e=>{let{className:t,...a}=e;return(0,l.jsx)("svg",{viewBox:"0 0 33 33",xmlns:"http://www.w3.org/2000/svg",className:(0,s.cn)("w-5 h-5 fill-none stroke-black stroke-[2.6]",t),...a,children:(0,l.jsx)("path",{d:"M23.2865 31.0698C12.8729 28.2243 4.78215 19.8461 2.30183 9.33959C1.36286 5.36218 4.82893 2.05775 8.91506 2.12908L10.7647 2.16136C11.7862 2.17919 12.5901 3.02365 12.6732 4.04196C12.8134 5.7624 13.1898 7.41786 13.7703 8.97518L10.9112 11.7363C13.0186 16.345 16.6593 20.115 21.1917 22.3821L24.0509 19.621C25.587 20.2555 27.2283 20.6895 28.9428 20.8897C29.9576 21.0082 30.7735 21.8411 30.7557 22.8626L30.7234 24.7123C30.6521 28.7984 27.2287 32.147 23.2865 31.0698Z",strokeLinecap:"round",strokeLinejoin:"round"})})};a(2762);var j=e=>{let{className:t,...a}=e;return(0,l.jsxs)("svg",{viewBox:"0 0 8 32",xmlns:"http://www.w3.org/2000/svg",className:(0,s.cn)("w-3 h-3 fill-none stroke-black stroke-[3.8]",t),...a,children:[(0,l.jsx)("path",{d:"M2.0791 27.4513C2.0791 28.5048 2.941 29.3589 4.0042 29.3589C5.06741 29.3589 5.92931 28.5048 5.92931 27.4513C5.92931 26.3977 5.06741 25.5436 4.0042 25.5436C2.941 25.5436 2.0791 26.3977 2.0791 27.4513Z",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M2.0791 16.0056C2.0791 17.0591 2.941 17.9132 4.0042 17.9132C5.06741 17.9132 5.92931 17.0591 5.92931 16.0056C5.92931 14.9521 5.06741 14.098 4.0042 14.098C2.941 14.098 2.0791 14.9521 2.0791 16.0056Z",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M2.0791 4.55995C2.0791 5.6135 2.941 6.46756 4.0042 6.46756C5.06741 6.46756 5.92931 5.6135 5.92931 4.55995C5.92931 3.50641 5.06741 2.65234 4.0042 2.65234C2.941 2.65234 2.0791 3.50641 2.0791 4.55995Z",strokeLinecap:"round",strokeLinejoin:"round"})]})},b=e=>{let{className:t,...a}=e;return(0,l.jsxs)("svg",{viewBox:"0 0 35 35",xmlns:"http://www.w3.org/2000/svg",className:(0,s.cn)("w-5 h-5 fill-none stroke-[#6a6a6a] stroke-[3]",t),...a,children:[(0,l.jsx)("rect",{x:"13.125",y:"4.375",width:"8.75",height:"16.0417",rx:"4.375",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M27.7082 16.0415C27.7082 21.6794 23.1377 26.2498 17.4998 26.2498C11.8619 26.2498 7.2915 21.6794 7.2915 16.0415",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M17.5 26.25V30.625",strokeLinecap:"round",strokeLinejoin:"round"})]})},k=e=>{let{className:t,...a}=e;return(0,l.jsxs)("svg",{viewBox:"0 0 29 29",xmlns:"http://www.w3.org/2000/svg",className:(0,s.cn)("w-5 h-5 fill-none stroke-[3] stroke-primary",t),...a,children:[(0,l.jsx)("path",{d:"M6.21973 2.4725L25.4635 11.588C27.9206 12.7519 27.9206 16.2482 25.4635 17.412L6.21972 26.5275C3.93977 27.6075 1.35922 25.767 1.63782 23.2596L2.61111 14.5L1.63782 5.74038C1.35922 3.23301 3.93978 1.39253 6.21973 2.4725Z",fill:"white"}),(0,l.jsx)("path",{d:"M2.61111 14.5L1.63782 5.74038C1.35922 3.23301 3.93978 1.39253 6.21973 2.4725L25.4635 11.588C27.9206 12.7519 27.9206 16.2482 25.4635 17.412L6.21972 26.5275C3.93977 27.6075 1.35922 25.767 1.63782 23.2596L2.61111 14.5ZM2.61111 14.5H10",strokeLinecap:"round",strokeLinejoin:"round"})]})},N=e=>{let{className:t,...a}=e;return(0,l.jsx)("svg",{viewBox:"0 0 13 13",xmlns:"http://www.w3.org/2000/svg",className:(0,s.cn)("w-3 h-3 stroke-primary fill-none stroke-[1.5]",t),...a,children:(0,l.jsx)("path",{d:"M6.42857 3.4127V6.42857H9.44444M6.42857 11.8571C3.43045 11.8571 1 9.42669 1 6.42857C1 3.43045 3.43045 1 6.42857 1C9.42669 1 11.8571 3.43045 11.8571 6.42857C11.8571 9.42669 9.42669 11.8571 6.42857 11.8571Z",strokeLinecap:"round",strokeLinejoin:"round"})})}},7300:function(e,t,a){a.d(t,{default:function(){return g}});var l=a(7437),r=a(2265),s=a(7138),n=a(6463),i=a(6765),o=a(9735),d=a(9354),c=a(9733),u=a(4300),h=a(7592),x=a(518);let f=()=>{let e=(0,r.useContext)(m);if(!e)throw Error("useCarousel must be used within a CarouselProvider");return e},m=(0,r.createContext)(null),p=(0,r.forwardRef)((e,t)=>{var a,s,n;let{carouselOptions:i,orientation:o="horizontal",dir:c,plugins:h,children:x,className:f,...p}=e,[v,w]=(0,u.Z)({...i,axis:"vertical"===o?"y":"x",direction:null!==(a=null==i?void 0:i.direction)&&void 0!==a?a:c},h),[g,j]=(0,u.Z)({...i,axis:"vertical"===o?"y":"x",direction:null!==(s=null==i?void 0:i.direction)&&void 0!==s?s:c,containScroll:"keepSnaps",dragFree:!0},h),[b,k]=(0,r.useState)(!1),[N,y]=(0,r.useState)(!1),[C,L]=(0,r.useState)(0),z=(0,r.useCallback)(()=>{w&&w.scrollNext()},[w]),M=(0,r.useCallback)(()=>{w&&w.scrollPrev()},[w]),F=null!==(n=null==i?void 0:i.direction)&&void 0!==n?n:c,S=(0,r.useCallback)(e=>{if(e.preventDefault(),w)switch(e.key){case"ArrowLeft":if("horizontal"===o){if("rtl"===F){z();return}M()}break;case"ArrowRight":if("horizontal"===o){if("rtl"===F){M();return}z()}break;case"ArrowUp":"vertical"===o&&M();break;case"ArrowDown":"vertical"===o&&z()}},[w,o,F]),R=(0,r.useCallback)(e=>{w&&j&&w.scrollTo(e)},[w,j]),_=(0,r.useCallback)(()=>{if(!w||!j)return;let e=w.selectedScrollSnap();L(e),j.scrollTo(e),k(w.canScrollPrev()),y(w.canScrollNext())},[w,j]);return(0,r.useEffect)(()=>{if(w)return _(),w.on("select",_),w.on("reInit",_),()=>{w.off("select",_)}},[w,_]),(0,l.jsx)(m.Provider,{value:{emblaMainApi:w,mainRef:v,thumbsRef:g,scrollNext:z,scrollPrev:M,canScrollNext:N,canScrollPrev:b,activeIndex:C,onThumbClick:R,handleKeyDown:S,carouselOptions:i,direction:F,orientation:o||((null==i?void 0:i.axis)==="y"?"vertical":"horizontal")},children:(0,l.jsx)("div",{...p,tabIndex:0,ref:t,onKeyDownCapture:S,className:(0,d.cn)("grid gap-2 w-full relative focus:outline-none",f),dir:F,children:x})})});p.displayName="Carousel",(0,r.forwardRef)((e,t)=>{let{className:a,dir:r,children:s,...n}=e,{mainRef:i,orientation:o,direction:c}=f();return(0,l.jsx)("div",{...n,ref:i,className:"overflow-hidden",dir:c,children:(0,l.jsx)("div",{ref:t,className:(0,d.cn)("flex","".concat("vertical"===o?"flex-col":""),a),children:s})})}).displayName="CarouselMainContainer";let v=(0,r.forwardRef)((e,t)=>{let{className:a,dir:r,children:s,...n}=e,{thumbsRef:i,orientation:o,direction:c}=f();return(0,l.jsx)("div",{...n,ref:i,className:"overflow-hidden",dir:c,children:(0,l.jsx)("div",{ref:t,className:(0,d.cn)("flex","".concat("vertical"===o?"flex-col":""),a),children:s})})});v.displayName="CarouselThumbsContainer",(0,r.forwardRef)((e,t)=>{let{className:a,children:r,...s}=e,{orientation:n}=f();return(0,l.jsx)("div",{...s,ref:t,className:(0,d.cn)("min-w-0 shrink-0 grow-0 basis-full bg-background p-1 ".concat("vertical"===n?"pb-1":"pr-1"),a),children:r})}).displayName="SliderMainItem";let w=(0,r.forwardRef)((e,t)=>{let{className:a,index:r,children:s,...n}=e,{activeIndex:i,onThumbClick:o,orientation:c}=f(),u=i===r;return(0,l.jsx)("div",{...n,ref:t,onClick:()=>o(r),className:(0,d.cn)("flex min-w-0 shrink-0 grow-0 basis-1/3 bg-background","".concat("vertical"===c?"pb-1":"pr-1"),a),children:(0,l.jsx)("div",{className:"relative aspect-square h-[70px] w-full rounded-md transition-opacity ".concat(u?"!opacity-100":""),children:s})})});w.displayName="SliderThumbItem",(0,r.forwardRef)((e,t)=>{let{className:a,index:r,children:s,...n}=e,{activeIndex:i,onThumbClick:o}=f();return(0,l.jsx)(c.z,{ref:t,size:"icon",className:(0,d.cn)("h-1 w-6 rounded-full","data-[active='false']:bg-primary/50 data-[active='true']:bg-primary",a),"data-active":i===r,onClick:()=>o(r),...n,children:(0,l.jsxs)("span",{className:"sr-only",children:["slide ",r+1," "]})})}).displayName="CarouselIndicator",(0,r.forwardRef)((e,t)=>{let{className:a,dir:r,variant:s="outline",size:n="icon",...i}=e,{canScrollNext:o,canScrollPrev:u,scrollNext:h,scrollPrev:m,orientation:p,direction:v}=f();return(0,l.jsxs)(c.z,{ref:t,variant:s,size:n,className:(0,d.cn)("absolute h-6 w-6 rounded-full z-10","vertical"===p?"-top-2 left-1/2 -translate-x-1/2 rotate-90":"-left-2 top-1/2 -translate-y-1/2",a),onClick:"rtl"===v?h:m,disabled:!("rtl"===v?o:u),...i,children:[(0,l.jsx)(x.Z,{className:"h-4 w-4"}),(0,l.jsx)("span",{className:"sr-only",children:"Previous slide"})]})}).displayName="CarouselPrevious",(0,r.forwardRef)((e,t)=>{let{className:a,dir:r,variant:s="outline",size:n="icon",...i}=e,{canScrollNext:o,canScrollPrev:u,scrollNext:x,scrollPrev:m,orientation:p,direction:v}=f();return(0,l.jsxs)(c.z,{ref:t,variant:s,size:n,className:(0,d.cn)("absolute h-6 w-6 rounded-full z-10","vertical"===p?"-bottom-2 left-1/2 -translate-x-1/2 rotate-90":"-right-2 top-1/2 -translate-y-1/2",a),onClick:"rtl"===v?m:x,disabled:!("rtl"===v?u:o),...i,children:[(0,l.jsx)(h.Z,{className:"h-4 w-4"}),(0,l.jsx)("span",{className:"sr-only",children:"Next slide"})]})}).displayName="CarouselNext";var g=()=>{let e=(0,n.usePathname)();return(0,l.jsx)(p,{children:(0,l.jsx)(v,{className:"flex items-center overflow-x-auto no-scrollbar",children:o.qQ.map((t,a)=>(0,l.jsx)(w,{index:a+1,className:"basis-[18%] bg-transparent px-1",children:(0,l.jsxs)(s.default,{href:t.href,className:(0,d.cn)("relative size-full rounded-xl flex items-center justify-center"),children:[(0,l.jsxs)("li",{className:"w-full flex flex-col gap-2 items-center justify-center",children:[(0,l.jsx)(t.icon,{className:(0,d.cn)(e===t.href?"growth meter"!==t.label?"stroke-[#5A10D9]":"fill-[#5A10D9]":"growth meter"!==t.label?"stroke-[#6a6a6a]":"fill-[#6a6a6a]")}),(0,l.jsx)("span",{className:(0,d.cn)("leading-none text-xs capitalize text-nowrap",e===t.href?"text-[#5A10D9]":"text-[#6a6a6a]"),children:t.label})]}),e===t.href&&(0,l.jsx)(i.E.div,{layoutId:"activeLink",transition:{type:"spring",duration:.6},className:(0,d.cn)("absolute rounded bg-gradient-to-r from-white via-[#5A10D9] to-white h-[3px] w-full top-0 inset-x-0 z-[999]")})]})},t.href))})})}},8037:function(e,t,a){var l=a(7437),r=a(2380),s=a(9735);t.default=()=>(0,l.jsx)(r.default,{sidebar:s.qQ})},2380:function(e,t,a){var l=a(7437);a(2265);var r=a(7138),s=a(6463),n=a(6765),i=a(6990),o=a(9354);t.default=e=>{let{sidebar:t}=e,a=(0,s.usePathname)();return(0,l.jsxs)("aside",{className:"bg-sidebar-background w-full h-full md:w-20 xl:w-sidebar md:h-main-height md:rounded-xl overflow-y-hidden shadow-xl",children:[(0,l.jsx)("div",{className:"w-full px-[25px] py-4",children:(0,l.jsx)(r.default,{href:"/",children:(0,l.jsx)(i.TR,{fullLogoWidth:150,fullLogoHeight:50,fullLogoClassName:"block md:hidden xl:block",smallLogoWidth:90,smallLogoHeight:90,smallLogoClassName:"hidden md:block xl:hidden"})})}),(0,l.jsx)("ul",{className:"flex flex-col justify-start items-start md:items-center xl:items-start gap-2 h-[calc(100dvh-97px)] overflow-x-hidden overflow-y-auto custom__scrollbar px-[25px] md:px-3 xl:px-[25px] py-3",children:t.map(e=>(0,l.jsxs)(r.default,{href:e.href,className:(0,o.cn)("relative px-4 py-3 rounded-xl md:rounded-full xl:rounded-xl w-full flex items-center justify-start md:justify-center xl:justify-start"),children:[a===e.href&&(0,l.jsx)(n.E.div,{layoutId:"sidebar_active_tab",transition:{type:"spring",duration:.6},className:"absolute rounded-full xl:rounded-xl h-full bg-primary inset-0"}),(0,l.jsxs)("li",{className:"relative z-10 flex items-center gap-3 capitalize text-base md:text-[20px]",children:[(0,l.jsx)(e.icon,{className:(0,o.cn)(a===e.href?"growth meter"!==e.label?"stroke-white":"fill-white":"growth meter"!==e.label?"stroke-[#5A10D9]":"fill-[#5A10D9]")}),(0,l.jsx)("div",{className:(0,o.cn)("md:hidden xl:block",a===e.href?"text-white":"text-[#5A10D9]"),children:e.label})]})]},e.href))})]})}},8307:function(e,t,a){var l=a(7437),r=a(5127),s=a(6765),n=a(9354);let i={initial:{x:0,opacity:1},enter:{x:0,opacity:1},exit:{x:-100,opacity:0}};t.default=e=>{let{id:t,activeTab:a,children:o,className:d}=e;return a===t?(0,l.jsx)(r.M,{mode:"wait",children:(0,l.jsx)(s.E.div,{variants:i,initial:"initial",animate:"enter",exit:"exit",transition:{duration:.5},className:(0,n.cn)("h-full",d),children:o})}):null}},50:function(e,t,a){var l=a(7437),r=a(6765),s=a(9354);t.default=e=>{let{id:t,title:a,activeTab:n,setActiveTab:i,className:o,activeTabClassName:d,titleClassName:c,layoutIdPrefix:u}=e;return(0,l.jsxs)("li",{onClick:()=>{i(t)},className:(0,s.cn)("relative text-xs p-1 rounded cursor-pointer transition-all ease-in-out",n===t?"text-white":"text-black",o),children:[n===t&&(0,l.jsx)(r.E.div,{layoutId:"".concat(u,"_active__tab"),transition:{type:"spring",duration:.6},className:(0,s.cn)("absolute rounded bg-primary",d)}),(0,l.jsx)("span",{className:(0,s.cn)("relative z-10",c),children:a})]})}},2183:function(e,t,a){a.d(t,{O:function(){return s}});var l=a(7437),r=a(9354);function s(e){let{className:t,...a}=e;return(0,l.jsx)("div",{className:(0,r.cn)("animate-pulse rounded-md bg-muted",t),...a})}}}]);