(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{8110:function(e,s,t){Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,4664)),Promise.resolve().then(t.bind(t,7831)),Promise.resolve().then(t.bind(t,2788)),Promise.resolve().then(t.bind(t,741)),Promise.resolve().then(t.bind(t,2698)),Promise.resolve().then(t.bind(t,1214)),Promise.resolve().then(t.bind(t,456)),Promise.resolve().then(t.bind(t,6762)),Promise.resolve().then(t.bind(t,9817)),Promise.resolve().then(t.bind(t,6991)),Promise.resolve().then(t.bind(t,6028)),Promise.resolve().then(t.bind(t,292)),Promise.resolve().then(t.bind(t,1721)),Promise.resolve().then(t.bind(t,4199)),Promise.resolve().then(t.bind(t,8037)),Promise.resolve().then(t.bind(t,2380)),Promise.resolve().then(t.bind(t,8307)),Promise.resolve().then(t.bind(t,50)),Promise.resolve().then(t.bind(t,420)),Promise.resolve().then(t.bind(t,1617))},4664:function(e,s,t){"use strict";var a=t(7437);t(2265),s.default=e=>{let{title:s,icon:t}=e;return(0,a.jsxs)("button",{className:"flex items-center justify-start gap-2 md:gap-6 text-base font-semibold border w-full py-3 px-2 md:py-2 md:px-3 rounded-md",children:[t&&t,(0,a.jsx)("span",{className:"text-sm md:text-base",children:s})]})}},7831:function(e,s,t){"use strict";var a=t(7437),l=t(2265),r=t(6648),i=t(9354),n=t(6798),d=t(7776);s.default=e=>{let{moodEmojis:s}=e,[t,o]=(0,l.useState)("neutral"),c=async e=>{try{console.log("ji");let s=await n.Z.post("/api/user/todaysVibe/save",{todaysVibe:e});d.A.success(s.data.message),o(e)}catch(e){console.log(e,"hello"),d.A.error("Mood Change Failed",{description:e.message})}};return(0,a.jsxs)("div",{className:"relative flex items-center justify-between mt-2 max-w-48 w-full mx-auto",children:[(0,a.jsx)("span",{className:"w-[6px] h-[6px] rounded-full bg-primary"}),s.map(e=>(0,a.jsx)(r.default,{src:e.moodImg,alt:e.mood,width:20,height:20,onClick:()=>c(e.mood),className:(0,i.cn)("cursor-pointer transition-all ease-in duration-200",t===e.mood?"grayscale-0":"grayscale")},e.mood_id)),(0,a.jsx)("span",{className:"w-[6px] h-[6px] rounded-full bg-primary"}),(0,a.jsx)("div",{className:"absolute top-1/2 left-0 -translate-y-1/2 -z-10 bg-primary w-full h-[2px] bg-[#D9D9D9]"})]})}},2788:function(e,s,t){"use strict";t.r(s);var a=t(7437),l=t(420),r=t(9733),i=t(8675),n=t(7138);s.default=()=>{var e;let s=(0,i.CG)(e=>e.user.user);return(0,a.jsxs)("div",{className:"flex flex-col justify-center xl:justify-start xl:gap-4 border rounded-xl bg-gradient-to-b from-white/15 to-primary/15 px-5 py-3",children:[(0,a.jsxs)("div",{className:"flex items-center flex-col xl:flex-row gap-3 xl:gap-6",children:[(0,a.jsxs)(l.Avatar,{className:"w-16 h-16 md:hidden xl:block",children:[(0,a.jsx)(l.AvatarImage,{src:null==s?void 0:null===(e=s.avatar)||void 0===e?void 0:e.url,alt:"".concat(null==s?void 0:s.firstname,"'s profile")}),(0,a.jsxs)(l.AvatarFallback,{className:"text-2xl font-semibold capitalize",children:[null==s?void 0:s.firstname[0],(0,a.jsx)("span",{className:"capitalize",children:(null==s?void 0:s.lastname)?s.lastname[0]:""})]})]}),(0,a.jsxs)("div",{className:"w-full flex flex-col justify-start gap-1 xl:gap-2 truncate",children:[(0,a.jsxs)("h2",{className:"text-xl xl:text-base font-semibold text-black whitespace-nowrap capitalize text-center xl:text-left",children:[(0,a.jsx)("span",{className:"text-primary",children:"Hello,"})," ",null==s?void 0:s.firstname," ",null==s?void 0:s.lastname]}),(0,a.jsx)("div",{className:"hidden xl:block w-full",children:(0,a.jsx)(n.default,{href:"/manage-account",children:(0,a.jsx)(r.z,{variant:"outline",className:"text-primary hover:text-primary/80 h-7",children:"Manage Account"})})})]})]}),(0,a.jsxs)("div",{className:"text-base xl:text-sm text-black font-normal space-y-2",children:[(0,a.jsx)("p",{className:"text-center xl:text-left",children:"Embrace the course as a catalyst for personal growth and empowerment, propelling you towards success with unwavering determination."}),(0,a.jsx)("div",{className:"w-full flex items-center justify-center xl:hidden",children:(0,a.jsx)(n.default,{href:"/manage-account",children:(0,a.jsx)(r.z,{variant:"outline",className:"text-primary hover:text-primary/80",children:"Manage Account"})})})]})]})}},741:function(e,s,t){"use strict";t.r(s);var a=t(7437),l=t(2265),r=t(6990);let i=[{id:"weekly",title:"Weekly"},{id:"monthly",title:"Monthly"},{id:"overall",title:"Overall"}];s.default=()=>{let[e,s]=(0,l.useState)("weekly");return(0,a.jsxs)("div",{className:"px-3 py-2",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h4",{className:"text-xs md:text-sm font-bold",children:"Progress Analytics"}),(0,a.jsx)("ul",{className:"flex items-center gap-1 border p-[2px] rounded-md",children:i.map(t=>(0,a.jsx)(r.fh,{title:t.title,id:t.id,activeTab:e,setActiveTab:s,layoutIdPrefix:"progress_analytics",activeTabClassName:"h-full inset-0"},t.id))})]}),(0,a.jsxs)("div",{className:"w-full h-full overflow-hidden",children:[(0,a.jsx)(r.I5,{id:"weekly",activeTab:e,children:(0,a.jsx)("div",{className:"flex items-center gap-3",children:(0,a.jsx)(r.vz,{})})}),(0,a.jsx)(r.I5,{id:"monthly",activeTab:e,children:(0,a.jsx)("div",{className:"flex items-center gap-3",children:(0,a.jsx)(r.TH,{})})}),(0,a.jsx)(r.I5,{id:"overall",activeTab:e,children:(0,a.jsx)("div",{className:"flex items-center gap-3",children:(0,a.jsx)(r.TH,{})})})]})]})}},2698:function(e,s,t){"use strict";t.r(s);var a=t(7437),l=t(2265),r=t(6990);let i=[{title:"Maths",id:"maths"},{title:"Physics",id:"physics"},{title:"Chemistry",id:"chemistry"}];s.default=()=>{let[e,s]=(0,l.useState)("maths");return(0,a.jsxs)("div",{className:"h-full py-2",children:[(0,a.jsxs)("div",{className:"px-3 flex items-center justify-between",children:[(0,a.jsx)("h4",{className:"text-xs md:text-sm font-bold",children:"Subject Progress"}),(0,a.jsx)("ul",{className:"flex items-center gap-1 border p-[2px] rounded-md",children:i.map(t=>(0,a.jsx)(r.fh,{title:t.title,id:t.id,activeTab:e,setActiveTab:s,layoutIdPrefix:"subject_progress",activeTabClassName:"h-full inset-0"},t.id))})]}),(0,a.jsxs)("div",{className:"w-full h-full overflow-hidden",children:[(0,a.jsx)(r.I5,{id:"maths",activeTab:e,children:(0,a.jsxs)("div",{className:"h-full grid grid-cols-2 mt-3 place-items-center",children:[(0,a.jsx)("div",{className:"h-full flex flex-col gap-2",children:(0,a.jsx)(r.qv,{series:[70],colors:["#6200EE"],chartLabel:"revision"})}),(0,a.jsx)("div",{className:"h-full flex flex-col gap-2",children:(0,a.jsx)(r.qv,{series:[30],colors:["#56CFE1"],chartLabel:"efficiency"})})]})}),(0,a.jsx)(r.I5,{id:"physics",activeTab:e,children:(0,a.jsxs)("div",{className:"grid grid-cols-2 mt-3",children:[(0,a.jsx)("div",{className:"h-full flex flex-col gap-2",children:(0,a.jsx)(r.qv,{series:[55],colors:["#6200EE"],chartLabel:"revision"})}),(0,a.jsx)("div",{className:"h-full flex flex-col gap-2",children:(0,a.jsx)(r.qv,{series:[60],colors:["#56CFE1"],chartLabel:"efficiency"})})]})}),(0,a.jsx)(r.I5,{id:"chemistry",activeTab:e,children:(0,a.jsxs)("div",{className:"grid grid-cols-2 mt-3",children:[(0,a.jsx)("div",{className:"h-full flex flex-col gap-2",children:(0,a.jsx)(r.qv,{series:[90],colors:["#6200EE"],chartLabel:"revision"})}),(0,a.jsx)("div",{className:"h-full flex flex-col gap-2",children:(0,a.jsx)(r.qv,{series:[25],colors:["#56CFE1"],chartLabel:"efficiency"})})]})})]})]})}},1214:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return b}});var a=t(7437),l=t(2265),r=t(7138),i=t(6990),n=t(4541),d=t(9735),o=t(9733),c=t(1617),m=t(9354),x=t(1266),f=t(2468),u=t(4697),p=t(7758),h=t(4662),g=e=>{let{children:s,setOpenDialogBox:t}=e;return(0,a.jsx)(h.Vq,{defaultOpen:!0,open:!0,onOpenChange:()=>{t(!1)},children:(0,a.jsx)(h.t9,{className:"backdrop-blur-sm",children:(0,a.jsx)(h.cZ,{className:"text-black text-3xl shadow-dialog bg-white rounded-xl max-w-4xl w-full px-0 py-0 overflow-hidden",children:s})})})},j=e=>{let{setOpenQuestionDialogBox:s,questions:t,topic:r}=e,[i,n]=(0,l.useState)(0),[d,h]=(0,l.useState)([]),[j,b]=(0,l.useState)(""),[N,v]=(0,l.useState)(null),{question:y,options:{all:w,correct:k}}=t[i],C=(e,s)=>{v(s),e===k[0]?b(e):b(""),d.includes(i)||j||h(e=>[...e,i])};return(0,a.jsxs)(g,{setOpenDialogBox:s,children:[(0,a.jsxs)("div",{className:"h-20 bg-primary/[0.2] rounded-b-xl flex items-center justify-between gap-5 md:gap-28 px-5 md:px-12",children:[(0,a.jsx)("div",{className:"w-6 h-6 md:w-10 md:h-10 rounded-md bg-white flex items-center justify-center border border-gray-300 cursor-pointer",onClick:()=>s(!1),children:(0,a.jsx)(x.Z,{className:"w-4 h-4 md:w-6 md:h-6"})}),(0,a.jsxs)("div",{className:"flex-1 flex items-center gap-2 md:gap-5",children:[(0,a.jsx)(c.Progress,{value:d.length/t.length*100,className:"h-2"}),(0,a.jsxs)("p",{className:"text-xs md:text-lg font-bold",children:[d.length,"/",t.length]})]}),(0,a.jsx)(o.z,{className:"h-8 md:h-11 bg-gradient-to-b from-primary to-[#913AE8] px-3 md:px-6 rounded-md md:rounded-xl text-base md:text-lg font-semibold",children:"Submit"})]}),(0,a.jsxs)("div",{className:"px-3 md:px-14 md:py-8 flex flex-col md:flex-row items-start gap-3",children:[(0,a.jsxs)("div",{className:"md:w-44 py-4 md:border-r-2 border-[#cfcfcf]",children:[(0,a.jsxs)("p",{className:"text-xs md:text-base text-[#7b7b7b] font-semibold mb-2",children:["Questions 1 to ",t.length,":"]}),(0,a.jsx)("ul",{className:"w-full flex items-center justify-center flex-wrap md:flex-col md:items-start md:justify-start gap-4 md:gap-0 px-3 md:px-0",children:t.map((e,s)=>(0,a.jsxs)("li",{className:(0,m.cn)("relative flex items-center gap-1 md:gap-3 cursor-pointer py-2 md:py-4 md:w-full transition-all duration-200 ease-in"),onClick:()=>n(s),children:[(0,a.jsx)("div",{className:(0,m.cn)("w-4 h-4 rounded-full border border-black -mt-[1px] flex items-center justify-center",d.includes(s)?"border-green-500":""),children:d.includes(s)&&(0,a.jsx)("div",{className:"w-[10px] h-[10px] rounded-full bg-green-500"})}),(0,a.jsxs)("p",{className:"text-xs md:text-base font-normal text-black leading-none",children:["Question ",s+1]}),i===s&&(0,a.jsx)(p.MotionDiv,{layoutId:"quiz_questions",transition:{type:"spring",duration:.6},className:"hidden md:block absolute rounded-sm h-full w-1 bg-primary inset-y-0 right-0"})]},e.question))})]}),(0,a.jsxs)("div",{className:"w-full flex-1",children:[(0,a.jsxs)("h3",{className:"text-center text-xl md:text-3xl font-semibold text-black",children:["Quiz on ",(0,a.jsx)("span",{className:"capitalize",children:r})]}),(0,a.jsxs)("div",{className:"px-4 md:px-7 my-7",children:[(0,a.jsxs)("p",{className:"text-base md:text-xl text-black font-medium mb-2",children:[(0,a.jsxs)("span",{children:[i+1,". "]}),y]}),(0,a.jsx)("ul",{className:"flex flex-col justify-start gap-2 px-3 md:px-5",children:w.map((e,s)=>(0,a.jsxs)("li",{className:(0,m.cn)("flex items-center gap-6 text-base md:text-xl text-black font-normal border rounded-xl px-4 py-2 cursor-pointer",N===s&&j===k[0]?"border-primary bg-primary/10":N===s&&j!==k[0]?"border-red-500 bg-red-500/10":""),onClick:()=>C(e,s),children:[(0,a.jsxs)("div",{className:(0,m.cn)("w-4 h-4 rounded-full border border-black cursor-pointer flex items-center justify-center",N===s&&j===k[0]?"bg-primary border-none":N===s&&j!==k[0]?"bg-red-500 border-none":""),children:[N===s&&j===k[0]&&(0,a.jsx)(f.Z,{className:"w-3 h-3 text-white font-medium"}),N===s&&j!==k[0]&&(0,a.jsx)(u.Z,{className:"w-3 h-3 text-white font-medium"})]}),(0,a.jsx)("span",{children:e})]},e))})]}),(0,a.jsx)("div",{className:"w-full flex items-center justify-center md:justify-end mb-6 md:mb-0",children:(0,a.jsx)(o.z,{type:"button",className:"h-7 md:h-9 px-4 md:px-6 text-base md:text-xl font-semibold",disabled:i===t.length-1,onClick:()=>{v(null),b(""),i!==t.length-1&&n(e=>e+1)},children:"Next"})})]})]})]})},b=e=>{let{todaysTopics:s}=e,[t,o]=(0,l.useState)(!1),[c,m]=(0,l.useState)(""),x=e=>{m(e),o(!0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex items-center justify-between py-3 px-4 md:px-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 md:flex-col md:gap-1",children:[(0,a.jsx)("h4",{className:"text-base md:text-xl font-semibold",children:"Today's Plan"}),(0,a.jsx)("p",{className:"text-[10px] md:text-xs mt-[2px] md:mt-0 font-medium text-[#9E9C9C]",children:function(){let e=new Date,s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=String(e.getDate()).padStart(2,"0"),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],l=e.getFullYear();return"".concat(s," ").concat(t," ").concat(a," ").concat(l)}()})]}),(0,a.jsxs)(r.default,{href:"/",className:"flex items-center gap-4 text-[#A36AF5] text-sm md:text-base",children:["View all",(0,a.jsx)(i.AD,{className:"md:w-[9px] md:h-[9px] stroke-[#A36AF5]"})]})]}),(0,a.jsx)("div",{className:"w-full flex-1 px-4 md:px-6 overflow-y-auto custom__scrollbar",children:(0,a.jsx)("ul",{className:"w-full h-full flex flex-col justify-start gap-1 md:gap-4 xl:gap-0",children:s.map((e,s)=>(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("li",{className:"flex items-start gap-2 w-full py-1",children:[(0,a.jsx)(n.X,{className:"h-4 w-4 md:h-[18px] md:w-[18px] md:mt-[2px] border-[2px] border-[#787878] data-[state=checked]:bg-green-400 data-[state=checked]:text-white data-[state=checked]:border-none",checked:e.completed,onClick:()=>x(e.label)}),(0,a.jsx)("div",{className:"capitalize text-sm md:text-base font-medium",children:(0,a.jsx)("p",{children:e.label})})]}),e.completed&&(0,a.jsx)("div",{className:"text-[10px] py-[2px] px-1 text-green-500 bg-green-400/10 rounded capitalize",children:(0,a.jsx)("p",{children:"completed"})})]},s))})}),t&&(0,a.jsx)(j,{openQuestionDialogBox:t,setOpenQuestionDialogBox:o,questions:d.Hg,topic:c})]})}},456:function(e,s,t){"use strict";t.d(s,{default:function(){return E}});var a=t(7437),l=t(2265),r=t(3304),i=t(2218),n=t(9354);let d=r.fC,o=r.xz;r.x8;let c=r.h_,m=l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)(r.aV,{className:(0,n.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...l,ref:s})});m.displayName=r.aV.displayName;let x=(0,i.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),f=l.forwardRef((e,s)=>{let{side:t="right",className:l,children:i,icon:d,sheetCloseClassName:o,...f}=e;return(0,a.jsxs)(c,{children:[(0,a.jsx)(m,{}),(0,a.jsxs)(r.VY,{ref:s,className:(0,n.cn)(x({side:t}),l),...f,children:[i,(0,a.jsxs)(r.x8,{className:(0,n.cn)("absolute top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",o),children:[d&&d,(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=r.VY.displayName;let u=e=>{let{className:s,...t}=e;return(0,a.jsx)("div",{className:(0,n.cn)("flex flex-col space-y-2 text-center sm:text-left",s),...t})};u.displayName="SheetHeader",l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)(r.Dx,{ref:s,className:(0,n.cn)("text-lg font-semibold text-foreground",t),...l})}).displayName=r.Dx.displayName,l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)(r.dk,{ref:s,className:(0,n.cn)("text-sm text-muted-foreground",t),...l})}).displayName=r.dk.displayName;var p=t(1266),h=t(2788),g=t(6990),j=t(1617),b=t(7592),N=t(6648),v=e=>{let{cardBgColor:s,iconImageSrc:t,iconAltText:l,iconShadowColor:r,chevronBgColor:i,pointsColor:d,points:o,pointsText:c,progressValue:m,pointsProgressText:x,pointsProgressTextColor:f,progressIndicatorBg:u,progressIconStroke:p}=e;return(0,a.jsxs)("div",{className:(0,n.cn)("border rounded-md p-2 flex flex-col justify-start gap-1",s),children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(N.default,{src:t,alt:l,width:"Streak"===c?11:14,height:"Streak"===c?11:14,className:(0,n.cn)("shadow-lg",r)}),(0,a.jsx)(b.Z,{width:12,height:12,className:(0,n.cn)("rounded-full border-none p-[2px]",i)})]}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col justify-center items-center gap-1",children:[(0,a.jsx)("h3",{className:(0,n.cn)("leading-[0.5] text-xl font-semibold",d),children:o}),(0,a.jsx)("p",{className:"text-sm font-medium text-[#6B6B6B]",children:c}),(0,a.jsx)(j.Progress,{value:m,className:"h-[5px]",indicatorClassName:u}),"Streak"!==c&&(0,a.jsxs)("div",{className:"flex items-center gap-[2px]",children:[(0,a.jsx)(g.Ms,{fill:p}),(0,a.jsx)("span",{className:(0,n.cn)("text-[9px] font-bold mt-[0.5px]",f),children:x})]}),"Streak"===c&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:" w-full text-[6px] text-black font-semibold flex items-center justify-between -mt-1",children:[(0,a.jsx)("span",{children:"Jan12"}),(0,a.jsx)("span",{children:"Feb12"})]}),(0,a.jsx)("p",{className:"text-[8px] text-black font-semibold -mt-1",children:"Good Work"})]})]})]})},y=()=>(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-4 xl:gap-2",children:[(0,a.jsx)(v,{cardBgColor:"bg-[#00B2FF]/[0.03]",iconImageSrc:"/assets/images/trophy_cup.png",iconAltText:"Trophy cup",iconShadowColor:"shadow-[#32CEFF]/[0.55]",chevronBgColor:"bg-[#D2E0E7]",pointsColor:"text-[#0075FF]",points:10,pointsText:"Level Up",progressValue:60,progressIndicatorBg:"bg-[#0075FF]",pointsProgressText:"+ 60%",pointsProgressTextColor:"text-[#00B75F]",progressIconStroke:"#00B75F"}),(0,a.jsx)(v,{cardBgColor:"bg-[#FF8A00]/[0.03]",iconImageSrc:"/assets/images/yellow_dollar_coin.png",iconAltText:"Dollar Coin",iconShadowColor:"shadow-[#FFE608]/[0.55]",chevronBgColor:"bg-[#FCDEBC]",pointsColor:"text-[#FF9900]",points:70,pointsText:"Points",progressValue:30,progressIndicatorBg:"bg-[#FF9900]",pointsProgressText:"+ 30%",pointsProgressTextColor:"text-[#E55426]",progressIconStroke:"#E55426"}),(0,a.jsx)(v,{cardBgColor:"bg-[#EF31FF]/[0.03]",iconImageSrc:"/assets/images/fire_flame.png",iconAltText:"Fire Flame",chevronBgColor:"bg-[#FFC0F9]",pointsColor:"text-[#FF00E5]",points:16,pointsText:"Streak",progressValue:50,progressIndicatorBg:"bg-[#FF00E5]"})]}),w=t(7831);let k=[{moodImg:"/assets/icons/sad_emoji.png",mood_id:"sad-emoji",mood:"sad"},{moodImg:"/assets/icons/unhappy_emoji.png",mood_id:"unhappy-emoji",mood:"unhappy"},{moodImg:"/assets/icons/neutral_emoji.png",mood_id:"neutral-emoji",mood:"neutral"},{moodImg:"/assets/icons/smiling_emoji.png",mood:"smiling",mood_id:"smiling-emoji"},{moodImg:"/assets/icons/laughing_emoji.png",mood_id:"laughing-emoji",mood:"laughing"}];var C=()=>(0,a.jsxs)("div",{className:"border rounded-xl px-3 py-[10px]",children:[(0,a.jsx)("h4",{className:"text-sm text-black font-semibold",children:"Today's Vibes"}),(0,a.jsx)("p",{className:"text-[10px] text-black font-normal",children:"Sessions and quizzes were insightful and engaging ?"}),(0,a.jsx)(w.default,{moodEmojis:k})]}),F=t(9733),P=()=>(0,a.jsxs)("div",{className:"border rounded-xl p-3 flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)("h4",{className:"text-sm text-black font-bold",children:"Daily Streak Questions"}),(0,a.jsx)("p",{className:"text-[11px] text-black font-normal",children:"Daily prompts sustain commitment, motivation."}),(0,a.jsx)(F.z,{className:"h-6 text-xs",children:"Attempt Now"})]}),(0,a.jsx)("div",{children:(0,a.jsx)(N.default,{src:"/assets/images/dsq_image.png",alt:"young man working remotely",width:82,height:82})})]}),A=t(420),S=t(3550),_=()=>(0,a.jsxs)("div",{className:"border rounded-xl px-3 py-1 space-y-2",children:[(0,a.jsx)("h4",{className:"text-sm text-black font-bold",children:"Upcoming Workshops"}),(0,a.jsxs)("div",{className:"bg-primary/[0.12] border rounded-lg py-1 px-2",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"w-[6px] h-[6px] rounded-full bg-primary"}),(0,a.jsx)("span",{className:"text-[10px] text-primary font-semibold",children:"Live"})]}),(0,a.jsx)("div",{className:"w-3 h-3 rounded bg-white text-black flex items-center justify-center",children:(0,a.jsx)(S.Z,{className:"w-full"})})]}),(0,a.jsxs)("div",{className:"flex items-end justify-between gap-1",children:[(0,a.jsxs)("div",{className:"space-y-[2px]",children:[(0,a.jsx)("h4",{className:"text-xs font-semibold text-black",children:"Study On Ocular Potential"}),(0,a.jsx)("p",{className:"text-[10px] text-[#818181] font-semibold",children:"It tells about Visual function"}),(0,a.jsx)("p",{className:"text-[10px] text-black font-normal",children:"Meeting at 10AM, 27Feb 2024"})]}),(0,a.jsxs)("div",{className:"flex items-end gap-[2px]",children:[(0,a.jsx)("span",{className:"text-[7px] text-black font-semibold",children:"- By Doris Wilson"}),(0,a.jsxs)(A.Avatar,{className:"w-5 h-5",children:[(0,a.jsx)(A.AvatarImage,{src:"/assets/images/teacher.jpg",alt:"Mentor Image"}),(0,a.jsx)(A.AvatarFallback,{className:"text-[7px] font-bold",children:"LA"})]})]})]})]})]}),z=t(8675),E=()=>{var e;let s=(0,z.CG)(e=>e.user.user);return(0,a.jsxs)(d,{children:[(0,a.jsx)(o,{children:(0,a.jsxs)(A.Avatar,{className:"w-10 h-10",children:[(0,a.jsx)(A.AvatarImage,{src:null==s?void 0:null===(e=s.avatar)||void 0===e?void 0:e.url,alt:"".concat(null==s?void 0:s.firstname,"'s profile image")}),(0,a.jsxs)(A.AvatarFallback,{className:"text-sm font-bold capitalize",children:[null==s?void 0:s.firstname[0],(0,a.jsx)("span",{className:"capitalize",children:(null==s?void 0:s.lastname)?s.lastname[0]:""})]})]})}),(0,a.jsxs)(f,{className:"w-full sm:min-w-full py-4 flex flex-col gap-y-4 overflow-y-auto custom__scrollbar",icon:(0,a.jsx)(p.Z,{className:"w-5 h-5"}),sheetCloseClassName:"left-4",children:[(0,a.jsx)(u,{className:"text-left ml-10 text-xl font-semibold -mt-1",children:"Profile"}),(0,a.jsx)(h.default,{}),(0,a.jsx)(y,{}),(0,a.jsx)(C,{}),(0,a.jsx)(P,{}),(0,a.jsx)(_,{})]})]})}},7758:function(e,s,t){"use strict";t.d(s,{MotionDiv:function(){return a}});let a=t(6765).E.div},420:function(e,s,t){"use strict";t.d(s,{Avatar:function(){return n},AvatarFallback:function(){return o},AvatarImage:function(){return d}});var a=t(7437),l=t(2265),r=t(1713),i=t(9354);let n=l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)(r.fC,{ref:s,className:(0,i.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...l})});n.displayName=r.fC.displayName;let d=l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)(r.Ee,{ref:s,className:(0,i.cn)("aspect-square h-full w-full",t),...l})});d.displayName=r.Ee.displayName;let o=l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)(r.NY,{ref:s,className:(0,i.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...l})});o.displayName=r.NY.displayName},4541:function(e,s,t){"use strict";t.d(s,{X:function(){return d}});var a=t(7437),l=t(2265),r=t(6772),i=t(2468),n=t(9354);let d=l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)(r.fC,{ref:s,className:(0,n.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",t),...l,children:(0,a.jsx)(r.z$,{className:(0,n.cn)("flex items-center justify-center text-current"),children:(0,a.jsx)(i.Z,{className:"h-3 w-3"})})})});d.displayName=r.fC.displayName},4662:function(e,s,t){"use strict";t.d(s,{Vq:function(){return d},cZ:function(){return m},t9:function(){return c}});var a=t(7437),l=t(2265),r=t(3304),i=t(4697),n=t(9354);let d=r.fC;r.xz;let o=r.h_;r.x8;let c=l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)(r.aV,{ref:s,className:(0,n.cn)("fixed inset-0 z-50 bg-white/90 lg:bg-white/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...l})});c.displayName=r.aV.displayName;let m=l.forwardRef((e,s)=>{let{className:t,children:l,...d}=e;return(0,a.jsxs)(o,{children:[(0,a.jsx)(c,{}),(0,a.jsxs)(r.VY,{ref:s,className:(0,n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...d,children:[l,(0,a.jsxs)(r.x8,{className:"hidden absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(i.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=r.VY.displayName,l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)(r.Dx,{ref:s,className:(0,n.cn)("text-lg font-semibold leading-none tracking-tight",t),...l})}).displayName=r.Dx.displayName,l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)(r.dk,{ref:s,className:(0,n.cn)("text-sm text-muted-foreground",t),...l})}).displayName=r.dk.displayName},1617:function(e,s,t){"use strict";t.d(s,{Progress:function(){return n}});var a=t(7437),l=t(2265),r=t(6506),i=t(9354);let n=l.forwardRef((e,s)=>{let{className:t,value:l,indicatorClassName:n,...d}=e;return(0,a.jsx)(r.fC,{ref:s,className:(0,i.cn)("relative h-4 w-full overflow-hidden rounded-full bg-secondary",t),...d,children:(0,a.jsx)(r.z$,{className:(0,i.cn)("h-full w-full flex-1 bg-primary transition-all rounded-full",n),style:{transform:"translateX(-".concat(100-(l||0),"%)")}})})});n.displayName=r.fC.displayName}},function(e){e.O(0,[428,231,961,974,890,631,406,154,380,971,23,744],function(){return e(e.s=8110)}),_N_E=e.O()}]);