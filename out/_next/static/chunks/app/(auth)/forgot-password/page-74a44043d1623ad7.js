(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9985],{3556:function(e,r,t){Promise.resolve().then(t.bind(t,8862))},6648:function(e,r,t){"use strict";t.d(r,{default:function(){return o.a}});var n=t(5601),o=t.n(n)},7138:function(e,r,t){"use strict";t.d(r,{default:function(){return o.a}});var n=t(231),o=t.n(n)},5601:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{default:function(){return c},getImageProps:function(){return s}});let n=t(9920),o=t(497),a=t(8173),i=n._(t(1241));function s(e){let{props:r}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,t]of Object.entries(r))void 0===t&&delete r[e];return{props:r}}let c=a.Image},8732:function(e,r,t){"use strict";t.d(r,{e:function(){return o}});var n=t(9826);let o=async()=>{var e;return null!==(e=(await n.u.get({key:"token"})).value)&&void 0!==e?e:""}},1125:function(e,r,t){"use strict";t.d(r,{gF:function(){return u},PR:function(){return d},pH:function(){return l},Rv:function(){return c},nl:function(){return m},SA:function(){return i},Aj:function(){return f},A9:function(){return s}});var n=t(8732),o=t(9088);let a=t(8472).Z.create({baseURL:"http://192.168.1.3:4000",withCredentials:!0,headers:{"Content-Type":"application/json"}});a.interceptors.request.use(e=>e,e=>Promise.reject(e)),a.interceptors.response.use(e=>e,e=>Promise.reject(e));let i=async e=>{try{let r=await fetch("".concat("http://192.168.1.3:4000","/api/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include",cache:"no-store"});return await r.json()}catch(e){if(e instanceof Error)throw Error("Error registering user: ".concat(e.message));throw Error("An unknown error occurred while registering user!")}},s=async e=>{try{let r=await fetch("".concat("http://192.168.1.3:4000","/api/auth/verify"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include",cache:"no-store"});return await r.json()}catch(e){if(e instanceof Error)throw Error("Error verifying user: ".concat(e.message));throw Error("An unknown error occurred while verifying user!")}},c=async e=>{try{return(await a.post("/api/auth/resend",{email:e})).data}catch(e){if(e instanceof Error)throw Error("Error re-sending OTP: ".concat(e.message));throw Error("An unknown error occurred while re-sending OTP!")}},l=async e=>{try{let r=await fetch("".concat("http://192.168.1.3:4000","/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include",cache:"no-store"});return await r.json()}catch(e){if(e instanceof Error)throw Error("Error signing in user: ".concat(e.message));throw Error("An unknown error occurred while signing in user!")}},u=async e=>{try{let r=await fetch("".concat("http://192.168.1.3:4000","/api/auth/forgetpassword"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"include",cache:"no-store"});return await r.json()}catch(e){if(e instanceof Error)throw Error("Error sending password resetting link: ".concat(e.message));throw Error("An unknown error occurred while sending password resetting link!")}},d=async()=>{let e=await (0,n.e)();try{let r=await fetch("".concat("http://192.168.1.3:4000","/api/auth/user"),{method:"GET",headers:{"Content-Type":"application/json",Cookie:"token=".concat(e)},credentials:"include"});return await r.json()}catch(e){if(e instanceof Error)throw Error("Error in fetching logged in user: ".concat(e.message));throw Error("An unknown error occurred while fetching logged in user")}},f=async e=>{let r=await (0,n.e)();try{let t=await fetch("".concat("http://192.168.1.3:4000","/api/user/profile/save"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Cookie:"token=".concat(r)},credentials:"include"});return await t.json()}catch(e){if(e instanceof Error)throw Error("Error in saving student info: ".concat(e.message));throw Error("An unknown error occurred while saving student info")}},m=async e=>{let r=await (0,n.e)();try{let t=await fetch("".concat("http://192.168.1.3:4000","/api/user/todaysVibe/save"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Cookie:"token=".concat(r)},credentials:"include"}),n=await t.json();return(0,o.revalidateTag)("userData"),n}catch(e){if(e instanceof Error)throw Error("Error in saving student current mood: ".concat(e.message));throw Error("An unknown error occurred while saving student current mood!")}}},8862:function(e,r,t){"use strict";var n=t(7437),o=t(1125),a=t(9733),i=t(3363),s=t(7209),c=t(1014),l=t(3274),u=t(6648),d=t(7138),f=t(6463),m=t(2265),h=t(9343),g=t(7776),p=t(9772);let y=p.Ry({email:p.Z_({required_error:"Please enter your email."}).email({message:"Invalid email address!"})});r.default=()=>{let[e,r]=(0,m.useState)(!1),t=(0,f.useRouter)(),p=(0,h.cI)({resolver:(0,c.F)(y)}),w=async e=>{r(!0);try{let r=await (0,o.gF)(e);g.A.success(r.message),t.replace("/login")}catch(e){g.A.error(e.message)}finally{r(!1)}};return(0,n.jsx)("section",{className:"w-full h-full flex items-center justify-center",children:(0,n.jsxs)("div",{className:"max-w-lg w-full rounded-xl shadow-2xl flex flex-col items-center justify-center gap-y-2 p-10",children:[(0,n.jsx)(u.default,{src:"/assets/images/leadlly_logo.svg",alt:"Leadlly Logo",width:130,height:130}),(0,n.jsx)("h2",{className:"text-2xl lg:text-5xl font-bold mt-5 mb-3",children:"Forgot Password"}),(0,n.jsx)("p",{className:"text-center font-medium leading-tight",children:"Enter the email you used to create your account so we can send you a link for resetting your password"}),(0,n.jsx)(i.l0,{...p,children:(0,n.jsxs)("form",{className:"w-full space-y-4 mt-5",onSubmit:p.handleSubmit(w),children:[(0,n.jsx)(i.Wi,{control:p.control,name:"email",render:e=>{let{field:r}=e;return(0,n.jsxs)(i.xJ,{className:"space-y-1",children:[(0,n.jsx)(i.lX,{className:"text-base lg:text-lg font-medium",children:"Email"}),(0,n.jsx)(i.NI,{children:(0,n.jsx)(s.I,{placeholder:"example@mail.com",className:"focus-visible:ring-0 text-lg focus:ring-offset-0",inputWrapperClassName:"h-12",...r})}),(0,n.jsx)(i.zG,{})]})}}),(0,n.jsx)(a.z,{type:"submit",className:"w-full h-12 text-base lg:text-lg",disabled:e,children:e?(0,n.jsxs)("span",{className:"flex items-center gap-2",children:[(0,n.jsx)(l.Z,{className:"w-5 h-5 animate-spin"}),"Sending"]}):"Send"})]})}),(0,n.jsx)(d.default,{href:"/login",className:"w-full mt-2",children:(0,n.jsx)(a.z,{variant:"outline",className:"w-full h-12 text-base",children:"Back to Log in"})})]})})}},9733:function(e,r,t){"use strict";t.d(r,{d:function(){return c},z:function(){return l}});var n=t(7437),o=t(2265),a=t(1538),i=t(2218),s=t(9354);let c=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=o.forwardRef((e,r)=>{let{className:t,variant:o,size:i,asChild:l=!1,...u}=e,d=l?a.g7:"button";return(0,n.jsx)(d,{className:(0,s.cn)(c({variant:o,size:i,className:t})),ref:r,...u})});l.displayName="Button"},3363:function(e,r,t){"use strict";t.d(r,{NI:function(){return p},Wi:function(){return d},l0:function(){return l},lX:function(){return g},pf:function(){return y},xJ:function(){return h},zG:function(){return w}});var n=t(7437),o=t(2265),a=t(1538),i=t(9343),s=t(9354),c=t(402);let l=i.RV,u=o.createContext({}),d=e=>{let{...r}=e;return(0,n.jsx)(u.Provider,{value:{name:r.name},children:(0,n.jsx)(i.Qr,{...r})})},f=()=>{let e=o.useContext(u),r=o.useContext(m),{getFieldState:t,formState:n}=(0,i.Gc)(),a=t(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:s}=r;return{id:s,name:e.name,formItemId:"".concat(s,"-form-item"),formDescriptionId:"".concat(s,"-form-item-description"),formMessageId:"".concat(s,"-form-item-message"),...a}},m=o.createContext({}),h=o.forwardRef((e,r)=>{let{className:t,...a}=e,i=o.useId();return(0,n.jsx)(m.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:r,className:(0,s.cn)("space-y-2",t),...a})})});h.displayName="FormItem";let g=o.forwardRef((e,r)=>{let{className:t,...o}=e,{error:a,formItemId:i}=f();return(0,n.jsx)(c._,{ref:r,className:(0,s.cn)(a&&"text-destructive",t),htmlFor:i,...o})});g.displayName="FormLabel";let p=o.forwardRef((e,r)=>{let{...t}=e,{error:o,formItemId:i,formDescriptionId:s,formMessageId:c}=f();return(0,n.jsx)(a.g7,{ref:r,id:i,"aria-describedby":o?"".concat(s," ").concat(c):"".concat(s),"aria-invalid":!!o,...t})});p.displayName="FormControl";let y=o.forwardRef((e,r)=>{let{className:t,...o}=e,{formDescriptionId:a}=f();return(0,n.jsx)("p",{ref:r,id:a,className:(0,s.cn)("text-sm text-muted-foreground",t),...o})});y.displayName="FormDescription";let w=o.forwardRef((e,r)=>{let{className:t,children:o,...a}=e,{error:i,formMessageId:c}=f(),l=i?String(null==i?void 0:i.message):o;return l?(0,n.jsx)("p",{ref:r,id:c,className:(0,s.cn)("text-sm font-medium text-destructive",t),...a,children:l}):null});w.displayName="FormMessage"},7209:function(e,r,t){"use strict";t.d(r,{I:function(){return i}});var n=t(7437),o=t(2265),a=t(9354);let i=o.forwardRef((e,r)=>{let{className:t,type:o,icon1:i,icon2:s,inputWrapperClassName:c,countryCodeClassName:l,...u}=e;return(0,n.jsxs)("div",{className:(0,a.cn)("flex items-center gap-x-2 px-3 py-1 border border-input rounded-md h-10  bg-background",c),children:[i&&i,"tel"===o&&(0,n.jsx)("span",{className:(0,a.cn)(l),children:"+91"}),(0,n.jsx)("input",{type:o,className:(0,a.cn)("h-full w-full text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...u}),s&&s]})});i.displayName="Input"},402:function(e,r,t){"use strict";t.d(r,{_:function(){return l}});var n=t(7437),o=t(2265),a=t(8364),i=t(2218),s=t(9354);let c=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),l=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)(a.f,{ref:r,className:(0,s.cn)(c(),t),...o})});l.displayName=a.f.displayName},9354:function(e,r,t){"use strict";t.d(r,{cn:function(){return a}});var n=t(4839),o=t(6164);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,o.m6)((0,n.W)(r))}}},function(e){e.O(0,[5473,8100,231,2642,1336,8472,2971,7023,1744],function(){return e(e.s=3556)}),_N_E=e.O()}]);