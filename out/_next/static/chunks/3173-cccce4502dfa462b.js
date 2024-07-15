"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3173],{1745:function(e,t,l){var s=l(7437),a=l(9750),r=l(9733),c=l(7304),n=l(9870),i=l(2023),d=l(3274),m=l(399),o=l(2265),x=l(7776);t.Z=e=>{let{unrevisedTopics:t}=e,[l,f]=(0,o.useState)(null),u=null==t?void 0:t.reduce((e,t)=>{let l=e.find(e=>e.name===t.chapter.name);return l?l.topics.push(t.topic):e.push({name:t.chapter.name,topics:[t.topic],studiedAt:t.chapter.studiedAt,level:t.chapter.level,overall_efficiency:t.chapter.overall_efficiency,plannerFrequency:t.chapter.plannerFrequency}),e},[]),h=async e=>{f(e.chapterName);try{let t=await (0,a.W6)(e);x.A.success(t.message)}catch(e){x.A.error(e.message)}finally{f(e.chapterName)}};return(0,s.jsx)("div",{className:"w-full h-full overflow-y-auto custom__scrollbar",children:(0,s.jsxs)(c.iA,{children:[(0,s.jsx)(c.xD,{className:"bg-[#f2f2f2] sticky top-0 z-30",children:(0,s.jsxs)(c.SC,{className:"border-none",children:[(0,s.jsxs)(c.ss,{className:"lg:w-96 flex items-center gap-2 text-sm lg:text-lg font-medium leading-tight",children:[(0,s.jsx)(i.Z,{className:"w-5 h-5"}),"List of chapters"]}),(0,s.jsx)(c.ss,{className:"text-sm lg:text-lg text-center font-medium leading-tight",children:"Topics covered"}),(0,s.jsx)(c.ss,{className:"text-sm lg:text-lg text-center font-medium leading-tight",children:"Difficulty level"}),(0,s.jsx)(c.ss,{className:"text-sm lg:text-lg text-center font-medium leading-tight",children:"Actions"})]})}),(0,s.jsx)(c.RM,{children:u&&u.length?null==u?void 0:u.map((e,t)=>(0,s.jsxs)(c.SC,{children:[(0,s.jsxs)(c.pj,{className:"text-base lg:text-lg leading-tight flex items-start gap-2",children:[(0,s.jsxs)("span",{children:[t+1,"."]})," ",(0,s.jsx)("span",{children:(0,n.fm)(e.name)})]}),(0,s.jsx)(c.pj,{className:"text-center text-base lg:text-lg leading-tight",children:e.topics.length}),(0,s.jsx)(c.pj,{className:"text-center text-base lg:text-lg leading-tight capitalize",children:e.level}),(0,s.jsx)(c.pj,{className:"flex items-center justify-center gap-1 lg:gap-3",children:(0,s.jsx)(r.z,{className:"flex items-center justify-center w-7 h-7 lg:w-24 lg:h-8 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium px-0 lg:px-4",onClick:()=>h({chapterName:e.name}),disabled:l===e.name,children:l===e.name?(0,s.jsx)(d.Z,{className:"w-3 h-3 animate-spin"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Z,{className:"w-3 h-3 text-primary lg:hidden"}),(0,s.jsx)("span",{className:"hidden lg:inline-block",children:"Remove"})]})})})]},e.name)):(0,s.jsx)(c.SC,{children:(0,s.jsx)(c.pj,{className:"font-medium text-muted-foreground",children:"No topics yet!"})})})]})})}},6090:function(e,t,l){l.d(t,{Z:function(){return v}});var s=l(7437),a=l(2265),r=l(1014),c=l(9343),n=l(3363),i=l(1499),d=l(112),m=l(9733),o=l(1413),x=l(4063),f=l(9354),u=l(2421),h=l(2468),p=l(3274),g=l(7776),j=l(8047),N=l(9750),b=l(9772);let y=b.z.object({chapterName:b.z.string({required_error:"Please select a chapter!"}),topicNames:b.z.string({required_error:"Please select at least one topic"}).array().min(1,{message:"Please select at least one topic"}).default([]),levelOfDifficulty:b.z.string({required_error:"Please select a difficulty level."})});var v=e=>{let{subjectChapters:t,activeSubject:l,userStandard:b,onResetForm:v}=e,[w,C]=(0,a.useState)([]),[_,k]=(0,a.useState)(!1),R=(0,c.cI)({resolver:(0,r.F)(y)}),z=R.watch("chapterName");(0,a.useEffect)(()=>{(async()=>{try{let e=await (0,j.D)(l,z,b);C(e.topics)}catch(e){g.A.error("Unable to fetch topics!",{description:e.message})}})()},[z,l,b]),(0,a.useEffect)(()=>{v(()=>R.reset({chapterName:"",topicNames:[],levelOfDifficulty:""}))},[v,R.reset]);let A=async e=>{k(!0);let t={tag:"unrevised_topic",topics:e.topicNames.map(e=>({name:e})),chapter:{name:e.chapterName,level:e.levelOfDifficulty},subject:l,standard:b};try{let e=await (0,N.tV)(t);e.data.length>0?g.A.success(e.message,{description:"Chapter added successfully"}):g.A.error("Chapter already saved!"),R.reset({chapterName:"",topicNames:[],levelOfDifficulty:""})}catch(e){g.A.error("Error adding chapter",{description:e.message})}finally{k(!1)}};return(0,s.jsx)("div",{className:"p-3 lg:p-6",children:(0,s.jsx)(n.l0,{...R,children:(0,s.jsxs)("form",{onSubmit:R.handleSubmit(A),className:"flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10",children:[(0,s.jsxs)("div",{className:"flex-1 flex flex-col gap-y-6",children:[(0,s.jsxs)("div",{className:"w-full grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-20",children:[(0,s.jsx)(n.Wi,{control:R.control,name:"chapterName",render:e=>{var l;let{field:a}=e;return(0,s.jsxs)(n.xJ,{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"flex items-center  gap-2 lg:gap-10",children:[(0,s.jsx)(n.lX,{className:"whitespace-nowrap text-base lg:text-xl font-medium mt-1",children:"Chapter :"}),(0,s.jsxs)(o.J2,{children:[(0,s.jsx)(o.xo,{asChild:!0,children:(0,s.jsx)(n.NI,{children:(0,s.jsxs)(m.z,{variant:"outline",role:"combobox",className:(0,f.cn)("w-full justify-between",!a.value&&"text-muted-foreground"),children:[a.value?null===(l=t.find(e=>e.name===a.value))||void 0===l?void 0:l.name:"Select chapter",(0,s.jsx)(u.Z,{className:"ml-2 h-4 w-4 shrink-0"})]})})}),(0,s.jsx)(o.yk,{className:"p-0",children:(0,s.jsxs)(x.mY,{children:[(0,s.jsx)(x.sZ,{placeholder:"Search chapter..."}),(0,s.jsxs)(x.e8,{children:[(0,s.jsx)(x.rb,{children:"No chapter found."}),(0,s.jsx)(x.fu,{children:null==t?void 0:t.map(e=>(0,s.jsxs)(x.di,{value:e.name,onSelect:()=>{R.setValue("chapterName",e.name)},children:[(0,s.jsx)(h.Z,{className:(0,f.cn)("mr-2 h-4 w-4",e.name===a.value?"opacity-100":"opacity-0")}),e.name]},e._id))})]})]})})]})]}),(0,s.jsx)(n.zG,{})]})}}),(0,s.jsx)(n.Wi,{control:R.control,name:"topicNames",render:e=>{let{field:t}=e;return(0,s.jsxs)(n.xJ,{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"flex items-center gap-[18px] lg:gap-10",children:[(0,s.jsx)(n.lX,{className:"whitespace-nowrap text-base lg:text-xl font-medium mt-1",children:"Topics :"}),(0,s.jsx)(n.NI,{children:(0,s.jsx)(i.N,{options:w,onValueChange:t.onChange,defaultValue:t.value,placeholder:"Select topics",variant:"inverted",animation:2})})]}),(0,s.jsx)(n.zG,{})]})}})]}),(0,s.jsx)(n.Wi,{control:R.control,name:"levelOfDifficulty",render:e=>{let{field:t}=e;return(0,s.jsxs)(n.xJ,{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 lg:gap-10",children:[(0,s.jsx)(n.lX,{className:"whitespace-nowrap text-base lg:text-xl font-medium mt-1",children:"Difficulty Level :"}),(0,s.jsx)(n.NI,{children:(0,s.jsxs)(d.E,{onValueChange:t.onChange,defaultValue:t.value,className:"flex items-center gap-x-5 lg:gap-x-20",children:[(0,s.jsxs)(n.xJ,{className:"flex items-center gap-x-2 space-y-0",children:[(0,s.jsx)(n.NI,{children:(0,s.jsx)(d.m,{value:"easy",className:"lg:w-5 lg:h-5"})}),(0,s.jsx)(n.lX,{className:"text-base lg:text-xl font-medium",children:"Easy"})]}),(0,s.jsxs)(n.xJ,{className:"flex items-center gap-x-2 space-y-0",children:[(0,s.jsx)(n.NI,{children:(0,s.jsx)(d.m,{value:"moderate",className:"lg:w-5 lg:h-5"})}),(0,s.jsx)(n.lX,{className:"text-base lg:text-xl font-medium",children:"Moderate"})]}),(0,s.jsxs)(n.xJ,{className:"flex items-center gap-x-2 space-y-0",children:[(0,s.jsx)(n.NI,{children:(0,s.jsx)(d.m,{value:"hard",className:"lg:w-5 lg:h-5"})}),(0,s.jsx)(n.lX,{className:"text-base lg:text-xl font-medium",children:"Hard"})]})]})})]}),(0,s.jsx)(n.zG,{})]})}})]}),(0,s.jsx)("div",{className:"grid place-items-center",children:(0,s.jsx)(m.z,{type:"submit",className:"h-9 lg:h-10 w-24 text-lg lg:text-2xl font-semibold",disabled:_,children:_?(0,s.jsxs)("span",{className:"flex items-center text-base",children:[(0,s.jsx)(p.Z,{className:"mr-2 w-4 h-4 animate-spin"})," Adding"]}):"Add"})})]})})})}},7758:function(e,t,l){l.d(t,{y:function(){return s}});let s=l(6765).E.div},112:function(e,t,l){l.d(t,{E:function(){return i},m:function(){return d}});var s=l(7437),a=l(2265),r=l(9497),c=l(8165),n=l(9354);let i=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)(r.fC,{className:(0,n.cn)("grid gap-2",l),...a,ref:t})});i.displayName=r.fC.displayName;let d=a.forwardRef((e,t)=>{let{className:l,circleClassName:a,...i}=e;return(0,s.jsx)(r.ck,{ref:t,className:(0,n.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",l),...i,children:(0,s.jsx)(r.z$,{className:"flex items-center justify-center",children:(0,s.jsx)(c.Z,{className:(0,n.cn)("h-2.5 w-2.5 fill-current text-current",a)})})})});d.displayName=r.ck.displayName},7304:function(e,t,l){l.d(t,{RM:function(){return i},SC:function(){return d},iA:function(){return c},pj:function(){return o},ss:function(){return m},xD:function(){return n}});var s=l(7437),a=l(2265),r=l(9354);let c=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("table",{ref:t,className:(0,r.cn)("w-full caption-bottom text-sm",l),...a})});c.displayName="Table";let n=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("thead",{ref:t,className:(0,r.cn)("[&_tr]:border-b",l),...a})});n.displayName="TableHeader";let i=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("tbody",{ref:t,className:(0,r.cn)("[&_tr:last-child]:border-0",l),...a})});i.displayName="TableBody",a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("tfoot",{ref:t,className:(0,r.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",l),...a})}).displayName="TableFooter";let d=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("tr",{ref:t,className:(0,r.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",l),...a})});d.displayName="TableRow";let m=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("th",{ref:t,className:(0,r.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",l),...a})});m.displayName="TableHead";let o=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("td",{ref:t,className:(0,r.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",l),...a})});o.displayName="TableCell",a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("caption",{ref:t,className:(0,r.cn)("mt-4 text-sm text-muted-foreground",l),...a})}).displayName="TableCaption"}}]);