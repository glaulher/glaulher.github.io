(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5241)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,o=n(2648).Z,l=n(1598).Z,a=n(7273).Z,i=l(n(7294)),s=o(n(3121)),c=n(2675),u=n(139),d=n(8730);n(7238);var f=o(n(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,n,o,l,a,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,l=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=i.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:o,widthInt:l,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:m,placeholder:h,loading:p,srcString:v,config:y,unoptimized:b,loader:w,onLoadRef:x,onLoadingCompleteRef:j,setBlurComplete:E,setShowAltText:C,onLoad:S,onError:_}=e,k=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},k,n,{width:l,height:o,decoding:"async","data-nimg":m?"fill":"1",className:c,loading:p,style:r({},u,d),ref:i.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&g(e,v,h,x,j,E,b))},[v,h,x,j,E,_,b,t]),onLoad:e=>{let t=e.currentTarget;g(t,v,h,x,j,E,b)},onError:e=>{C(!0),"blur"===h&&E(!0),_&&_(e)}})))}),y=i.forwardRef((e,t)=>{let n,o;var l,{src:g,sizes:y,unoptimized:b=!1,priority:w=!1,loading:x,className:j,quality:E,width:C,height:S,fill:_,style:k,onLoad:M,onLoadingComplete:O,placeholder:T="empty",blurDataURL:N,layout:P,objectFit:$,objectPosition:I,lazyBoundary:L,lazyRoot:R}=e,z=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=i.useContext(d.ImageConfigContext),D=i.useMemo(()=>{let e=m||A||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[A]),B=z,K=B.loader||f.default;delete B.loader;let U="__next_img_default"in K;if(U){if("custom"===D.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=K;K=t=>{let{config:n}=t,r=a(t,["config"]);return e(r)}}if(P){"fill"===P&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(k=r({},k,e));let t={responsive:"100vw",fill:"100vw"}[P];t&&!y&&(y=t)}let F="",W=p(C),Z=p(S);if("object"==typeof(l=g)&&(h(l)||void 0!==l.src)){let e=h(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,o=e.blurHeight,N=N||e.blurDataURL,F=e.src,!_){if(W||Z){if(W&&!Z){let t=W/e.width;Z=Math.round(e.height*t)}else if(!W&&Z){let t=Z/e.height;W=Math.round(e.width*t)}}else W=e.width,Z=e.height}}let q=!w&&("lazy"===x||void 0===x);((g="string"==typeof g?g:F).startsWith("data:")||g.startsWith("blob:"))&&(b=!0,q=!1),D.unoptimized&&(b=!0),U&&g.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(b=!0);let[H,G]=i.useState(!1),[J,V]=i.useState(!1),X=p(E),Q=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:$,objectPosition:I}:{},J?{}:{color:"transparent"},k),Y="blur"===T&&N&&!H?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:W,heightInt:Z,blurWidth:n,blurHeight:o,blurDataURL:N}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:l,sizes:a,loader:i}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let l=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:l,kind:"x"}}(t,o,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,r)=>"".concat(i({config:t,src:n,quality:l,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:i({config:t,src:n,quality:l,width:s[u]})}}({config:D,src:g,unoptimized:b,width:W,quality:X,sizes:y,loader:K}),et=g,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},er=i.useRef(M);i.useEffect(()=>{er.current=M},[M]);let eo=i.useRef(O);i.useEffect(()=>{eo.current=O},[O]);let el=r({isLazy:q,imgAttributes:ee,heightInt:Z,widthInt:W,qualityInt:X,className:j,imgStyle:Q,blurStyle:Y,loading:x,config:D,fill:_,unoptimized:b,placeholder:T,loader:K,srcString:et,onLoadRef:er,onLoadingCompleteRef:eo,setBlurComplete:G,setShowAltText:V},B);return i.default.createElement(i.default.Fragment,null,i.default.createElement(v,Object.assign({},el,{ref:t})),w?i.default.createElement(s.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),a=n(1003),i=n(7795),s=n(4465),c=n(2692),u=n(8245),d=n(9246),f=n(227),m=n(3468);let h=new Set;function p(e,t,n,r){if(a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function g(e){return"string"==typeof e?e:i.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,r;let{href:i,as:h,children:v,prefetch:y,passHref:b,replace:w,shallow:x,scroll:j,locale:E,onClick:C,onMouseEnter:S,onTouchStart:_,legacyBehavior:k=!1}=e,M=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,k&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let O=!1!==y,T=l.default.useContext(c.RouterContext),N=l.default.useContext(u.AppRouterContext),P=null!=T?T:N,$=!T,{href:I,as:L}=l.default.useMemo(()=>{if(!T){let e=g(i);return{href:e,as:h?g(h):e}}let[e,t]=a.resolveHref(T,i,!0);return{href:e,as:h?a.resolveHref(T,h):t||e}},[T,i,h]),R=l.default.useRef(I),z=l.default.useRef(L);k&&(r=l.default.Children.only(n));let A=k?r&&"object"==typeof r&&r.ref:t,[D,B,K]=d.useIntersection({rootMargin:"200px"}),U=l.default.useCallback(e=>{(z.current!==L||R.current!==I)&&(K(),z.current=L,R.current=I),D(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[L,A,I,K,D]);l.default.useEffect(()=>{P&&B&&O&&p(P,I,L,{locale:E})},[L,I,B,E,O,null==T?void 0:T.locale,P]);let F={ref:U,onClick(e){k||"function"!=typeof C||C(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,r,o,i,s,c,u,d){let{nodeName:f}=e.currentTarget,m="A"===f.toUpperCase();if(m&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?l.default.startTransition(h):h()}(e,P,I,L,w,x,j,E,$,O)},onMouseEnter(e){k||"function"!=typeof S||S(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),P&&(O||!$)&&p(P,I,L,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){k||"function"!=typeof _||_(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),P&&(O||!$)&&p(P,I,L,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!k||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&f.getDomainLocale(L,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);F.href=t||m.addBasePath(s.addLocale(L,e,null==T?void 0:T.defaultLocale))}return k?l.default.cloneElement(r,F):l.default.createElement("a",Object.assign({},M,F),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!l,[u,d]=r.useState(!1),f=r.useRef(null),m=r.useCallback(e=>{f.current=e},[]);r.useEffect(()=>{if(l){if(c||u)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},i.push(n),a.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=o.requestIdleCallback(()=>d(!0));return()=>o.cancelIdleCallback(e)}},[c,n,t,u,f.current]);let h=r.useCallback(()=>{d(!1)},[]);return[m,u,h]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:l}=e,a=r||t,i=o||n,s=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&i?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},5241:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(5893);n(7599);var o=n(7294);let l=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,s=(0,o.createContext)(void 0),c={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,o.useContext)(s))&&void 0!==e?e:c},d=e=>(0,o.useContext)(s)?o.createElement(o.Fragment,null,e.children):o.createElement(m,e),f=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:i="theme",themes:c=f,defaultTheme:u=n?"system":"light",attribute:d="data-theme",value:m,children:y,nonce:b})=>{let[w,x]=(0,o.useState)(()=>p(i,u)),[j,E]=(0,o.useState)(()=>p(i)),C=m?Object.values(m):c,S=(0,o.useCallback)(e=>{let o=e;if(!o)return;"system"===e&&n&&(o=v());let a=m?m[o]:o,i=t?g():null,s=document.documentElement;if("class"===d?(s.classList.remove(...C),a&&s.classList.add(a)):a?s.setAttribute(d,a):s.removeAttribute(d),r){let e=l.includes(u)?u:null,t=l.includes(o)?o:e;s.style.colorScheme=t}null==i||i()},[]),_=(0,o.useCallback)(e=>{x(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),k=(0,o.useCallback)(t=>{let r=v(t);E(r),"system"===w&&n&&!e&&S("system")},[w,e]);(0,o.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(k),k(e),()=>e.removeListener(k)},[k]),(0,o.useEffect)(()=>{let e=e=>{e.key===i&&_(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[_]),(0,o.useEffect)(()=>{S(null!=e?e:w)},[e,w]);let M=(0,o.useMemo)(()=>({theme:w,setTheme:_,forcedTheme:e,resolvedTheme:"system"===w?j:w,themes:n?[...c,"system"]:c,systemTheme:n?j:void 0}),[w,_,e,j,n,c]);return o.createElement(s.Provider,{value:M},o.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:i,themes:c,defaultTheme:u,attribute:d,value:m,children:y,attrs:C,nonce:b}),y)},h=(0,o.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:s,value:c,attrs:u,nonce:d})=>{let f="system"===s,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=i?l.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let o=c?c[e]:e,a=t?e+"|| ''":`'${o}'`,s="";return i&&r&&!t&&l.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||o?`c.add(${a})`:"null":o&&(s+=`d[s](n,${a})`),s},g=e?`!function(){${m}${p(e)}}()`:r?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}${f?"":"else{"+p(s,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}else{${p(s,!1,!1)};}${h}}catch(t){}}();`;return o.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:g}})},()=>!0),p=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light");var y=n(1664),b=n.n(y),w=n(5675),x=n.n(w);function j(){let{resolvedTheme:e,setTheme:t}=u(),[n,l]=(0,o.useState)("");return(0,o.useEffect)(()=>{"light"===e?l("dark_mode"):l("light_mode")},[e]),(0,r.jsx)("button",{type:"button","aria-label":"Toggle dark mode",onClick:()=>{t("dark"===e?"light":"dark")},children:(0,r.jsx)("span",{className:"hover:text-sky-700 material-symbols-outlined",children:n})})}function E(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,r.jsx)("header",{className:"bg-slate-600 mb-8 py-4",children:(0,r.jsxs)("div",{className:"container mx-auto flex justify-center",children:[(0,r.jsxs)(b(),{href:"/",children:[(0,r.jsx)(x(),{width:32,height:32,alt:"Menu",src:"/menuIcons/svgviewer-output.svg"}),(0,r.jsxs)("h1",{className:"ml-9 -mb-2 -mt-10 ",children:[(0,r.jsx)("p",{className:"text-neutral-200 hover:text-sky-700",children:"Bem vindo ao"}),(0,r.jsx)("p",{className:"ml-2 text-neutral-200 hover:text-sky-700",children:"Blog Post-it"})]})]}),(0,r.jsx)("span",{className:" ml-auto text-neutral-200",children:(0,r.jsx)(j,{})})]})}),(0,r.jsx)("main",{className:"container mx-auto flex-1",children:t}),(0,r.jsx)("footer",{className:"bg-slate-700 mt-8 py-4",children:(0,r.jsx)("div",{className:"container mx-auto flex justify-center",children:(0,r.jsx)("span",{className:"mx-auto text-neutral-200",children:"\xa9 2022 DailyDevTips"})})})]})}function C(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(d,{attribute:"class",children:(0,r.jsx)(E,{children:(0,r.jsx)(t,{...n})})})}},7599:function(){},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);