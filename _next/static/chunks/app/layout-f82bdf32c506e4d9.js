(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{35848:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,78346,23)),Promise.resolve().then(r.bind(r,6538)),Promise.resolve().then(r.t.bind(r,30347,23)),Promise.resolve().then(r.t.bind(r,1174,23)),Promise.resolve().then(r.bind(r,78534))},5565:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var s=r(4146),n=r.n(s)},4146:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return i},getImageProps:function(){return o}});let s=r(60306),n=r(40666),a=r(87970),l=s._(r(65514));function o(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let i=a.Image},6538:(e,t,r)=>{"use strict";r.d(t,{WrapperHeader:()=>m});var s=r(95155),n=r(48173),a=r.n(n),l=r(12115),o=r(5565);let i=e=>{let{children:t}=e;return(0,s.jsx)("header",{className:" mb-3 px-6 py-4 ",children:(0,s.jsxs)("div",{className:"container lg:mx-auto md:mx-auto flex justify-center",children:[(0,s.jsx)(a(),{href:"/",children:(0,s.jsx)(o.default,{className:" -mb-4 -mt-3 ",width:60,height:60,alt:"Menu",src:"assets/blog/menuIcons/svgviewer-output.svg"})}),(0,s.jsxs)(a(),{href:"/",children:[(0,s.jsx)("p",{className:"text-lg ml-4 -mt-4 dark:text-neutral-200  hover:text-sky-700",children:"Bem vindo ao"}),(0,s.jsx)("p",{className:"text-lg ml-8 -mb-4 dark:text-neutral-200  hover:text-sky-700",children:"Blog Post-it"})]}),(0,s.jsx)("div",{className:" ml-auto  text-neutral-200",children:t})]})})};var c=r(67113);function d(){let{resolvedTheme:e,setTheme:t}=(0,c.D)(),[r,n]=(0,l.useState)("");return(0,l.useEffect)(()=>{"light"===e?n("dark_mode"):n("light_mode")},[e]),(0,s.jsx)("button",{type:"button","aria-label":"Toggle dark mode",onClick:()=>{t("dark"===e?"light":"dark")},children:(0,s.jsx)("span",{className:"text-slate-600 dark:text-white dark:hover:text-sky-700 hover:text-sky-300 material-symbols-outlined",children:r})})}let m=()=>(0,s.jsx)(i,{children:(0,s.jsx)(d,{})})},78534:(e,t,r)=>{"use strict";r.d(t,{Providers:()=>l});var s=r(95155),n=r(12115),a=r(67113);function l(e){let{children:t}=e,[r,l]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{l(!0)},[]),r)?(0,s.jsx)(a.N,{enableSystem:!0,defaultTheme:"system",attribute:"class",children:t}):(0,s.jsx)(s.Fragment,{children:t})}},30347:()=>{},1174:()=>{},78346:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}},67113:(e,t,r)=>{"use strict";r.d(t,{D:()=>d,N:()=>m});var s=r(12115),n=(e,t,r,s,n,a,l,o)=>{let i=document.documentElement,c=["light","dark"];function d(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,s=r&&a?n.map(e=>a[e]||e):n;r?(i.classList.remove(...s),i.classList.add(t)):i.setAttribute(e,t)}),o&&c.includes(t)&&(i.style.colorScheme=t)}if(s)d(s);else try{let e=localStorage.getItem(t)||r,s=l&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(s)}catch(e){}},a=["light","dark"],l="(prefers-color-scheme: dark)",o="undefined"==typeof window,i=s.createContext(void 0),c={setTheme:e=>{},themes:[]},d=()=>{var e;return null!=(e=s.useContext(i))?e:c},m=e=>s.useContext(i)?s.createElement(s.Fragment,null,e.children):s.createElement(h,{...e}),u=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:c="theme",themes:d=u,defaultTheme:m=n?"system":"light",attribute:h="data-theme",value:p,children:b,nonce:x,scriptProps:k}=e,[w,S]=s.useState(()=>y(c,m)),[E,j]=s.useState(()=>y(c)),C=p?Object.values(p):d,T=s.useCallback(e=>{let t=e;if(!t)return;"system"===e&&n&&(t=v());let s=p?p[t]:t,l=r?g(x):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...C),s&&i.classList.add(s)):e.startsWith("data-")&&(s?i.setAttribute(e,s):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),o){let e=a.includes(m)?m:null,r=a.includes(t)?t:e;i.style.colorScheme=r}null==l||l()},[x]),_=s.useCallback(e=>{let t="function"==typeof e?e(w):e;S(t);try{localStorage.setItem(c,t)}catch(e){}},[w]),N=s.useCallback(e=>{j(v(e)),"system"===w&&n&&!t&&T("system")},[w,t]);s.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),s.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?S(e.newValue):_(m))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[_]),s.useEffect(()=>{T(null!=t?t:w)},[t,w]);let P=s.useMemo(()=>({theme:w,setTheme:_,forcedTheme:t,resolvedTheme:"system"===w?E:w,themes:n?[...d,"system"]:d,systemTheme:n?E:void 0}),[w,_,t,E,n,d]);return s.createElement(i.Provider,{value:P},s.createElement(f,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:n,enableColorScheme:o,defaultTheme:m,value:p,themes:d,nonce:x,scriptProps:k}),b)},f=s.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:a,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:c,themes:d,nonce:m,scriptProps:u}=e,h=JSON.stringify([a,r,i,t,d,c,l,o]).slice(1,-1);return s.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?m:"",dangerouslySetInnerHTML:{__html:"(".concat(n.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let r;if(!o){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},g=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},v=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[258,742,441,517,358],()=>t(35848)),_N_E=e.O()}]);