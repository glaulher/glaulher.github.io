(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(757)}])},3412:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return s},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return d}});let o="refresh",i="navigate",l="restore",s="server-patch",a="prefetch",u="fast-refresh",c="server-action";function d(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(282),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3686:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(8754),o=r(1757),i=r(5893),l=o._(r(7294)),s=n._(r(3935)),a=n._(r(6665)),u=r(1908),c=r(4706),d=r(5670);r(1558);let f=r(1973),m=n._(r(3293)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,o,i){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){let[t,r]=l.version.split(".",2),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let v=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:s,width:a,decoding:u,className:c,style:d,fetchPriority:f,placeholder:m,loading:p,unoptimized:v,fill:y,onLoadRef:b,onLoadingCompleteRef:x,setBlurComplete:_,setShowAltText:j,onLoad:w,onError:C,...S}=e;return(0,i.jsx)("img",{...S,...g(f),loading:p,width:a,height:s,decoding:u,"data-nimg":y?"fill":"1",className:c,style:d,sizes:o,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,m,b,x,_,v))},[r,m,b,x,_,C,v,t]),onLoad:e=>{h(e.currentTarget,m,b,x,_,v)},onError:e=>{j(!0),"empty"!==m&&_(!0),C&&C(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,n),null):(0,i.jsx)(a.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),n=(0,l.useContext)(d.ImageConfigContext),o=(0,l.useMemo)(()=>{let e=p||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:s,onLoadingComplete:a}=e,h=(0,l.useRef)(s);(0,l.useEffect)(()=>{h.current=s},[s]);let g=(0,l.useRef)(a);(0,l.useEffect)(()=>{g.current=a},[a]);let[b,x]=(0,l.useState)(!1),[_,j]=(0,l.useState)(!1),{props:w,meta:C}=(0,u.getImgProps)(e,{defaultLoader:m.default,imgConf:o,blurComplete:b,showAltText:_});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{...w,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:x,setShowAltText:j,ref:t}),C.priority?(0,i.jsx)(y,{isAppRouter:!r,imgAttributes:w}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let n=r(8754),o=r(5893),i=n._(r(7294)),l=r(7950),s=r(7387),a=r(6982),u=r(6921),c=r(7727),d=r(1973),f=r(6216),m=r(1722),p=r(6504),h=r(634),g=r(3412),v=new Set;function y(e,t,r,n,o,i){if(i||(0,s.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,r,n)).catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let x=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:v,children:x,prefetch:_=null,passHref:j,replace:w,shallow:C,scroll:S,locale:E,onClick:O,onMouseEnter:P,onTouchStart:k,legacyBehavior:T=!1,...M}=e;r=x,T&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let I=i.default.useContext(d.RouterContext),R=i.default.useContext(f.AppRouterContext),N=null!=I?I:R,A=!I,z=!1!==_,L=null===_?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:$,as:D}=i.default.useMemo(()=>{if(!I){let e=b(a);return{href:e,as:v?b(v):e}}let[e,t]=(0,l.resolveHref)(I,a,!0);return{href:e,as:v?(0,l.resolveHref)(I,v):t||e}},[I,a,v]),F=i.default.useRef($),U=i.default.useRef(D);T&&(n=i.default.Children.only(r));let B=T?n&&"object"==typeof n&&n.ref:t,[K,G,H]=(0,m.useIntersection)({rootMargin:"200px"}),V=i.default.useCallback(e=>{(U.current!==D||F.current!==$)&&(H(),U.current=D,F.current=$),K(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[D,B,$,H,K]);i.default.useEffect(()=>{N&&G&&z&&y(N,$,D,{locale:E},{kind:L},A)},[D,$,G,E,z,null==I?void 0:I.locale,N,A,L]);let W={ref:V,onClick(e){T||"function"!=typeof O||O(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,o,l,a,u,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,s.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:u,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?i.default.startTransition(f):f()}(e,N,$,D,w,C,S,E,A)},onMouseEnter(e){T||"function"!=typeof P||P(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(z||!A)&&y(N,$,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:L},A)},onTouchStart(e){T||"function"!=typeof k||k(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(z||!A)&&y(N,$,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:L},A)}};if((0,u.isAbsoluteUrl)(D))W.href=D;else if(!T||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(D,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);W.href=t||(0,h.addBasePath)((0,c.addLocale)(D,e,null==I?void 0:I.defaultLocale))}return T?i.default.cloneElement(n,W):(0,o.jsx)("a",{...M,...W,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),o=r(9126),i="function"==typeof IntersectionObserver,l=new Map,s=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,u=a||!i,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),m=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(u||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},s.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,r,t,c,f.current]),[m,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1908:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(1558);let n=r(7386),o=r(4706);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,a,u,{src:c,sizes:d,unoptimized:f=!1,priority:m=!1,loading:p,className:h,quality:g,width:v,height:y,fill:b=!1,style:x,onLoad:_,onLoadingComplete:j,placeholder:w="empty",blurDataURL:C,fetchPriority:S,layout:E,objectFit:O,objectPosition:P,lazyBoundary:k,lazyRoot:T,...M}=e,{imgConf:I,showAltText:R,blurComplete:N,defaultLoader:A}=t,z=I||o.imageConfigDefault;if("allSizes"in z)s=z;else{let e=[...z.deviceSizes,...z.imageSizes].sort((e,t)=>e-t),t=z.deviceSizes.sort((e,t)=>e-t);s={...z,allSizes:e,deviceSizes:t}}let L=M.loader||A;delete M.loader,delete M.srcSet;let $="__next_img_default"in L;if($){if("custom"===s.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!d&&(d=t)}let D="",F=l(v),U=l(y);if("object"==typeof(r=c)&&(i(r)||void 0!==r.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,D=e.src,!b){if(F||U){if(F&&!U){let t=F/e.width;U=Math.round(e.height*t)}else if(!F&&U){let t=U/e.height;F=Math.round(e.width*t)}}else F=e.width,U=e.height}}let B=!m&&("lazy"===p||void 0===p);(!(c="string"==typeof c?c:D)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,B=!1),s.unoptimized&&(f=!0),$&&c.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),m&&(S="high");let K=l(g),G=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:P}:{},R?{}:{color:"transparent"},x),H=N||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:F,heightInt:U,blurWidth:a,blurHeight:u,blurDataURL:C||"",objectFit:G.objectFit})+'")':'url("'+w+'")',V=H?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},W=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),c=a.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:a.map((e,n)=>s({config:t,src:r,quality:i,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:s({config:t,src:r,quality:i,width:a[c]})}}({config:s,src:c,unoptimized:f,width:F,quality:K,sizes:d,loader:L});return{props:{...M,loading:B?"lazy":p,fetchPriority:S,width:F,height:U,decoding:"async",className:h,style:{...G,...V},sizes:W.sizes,srcSet:W.srcSet,src:W.src},meta:{unoptimized:f,priority:m,placeholder:w,fill:b}}}},7386:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,s=n?40*n:t,a=o?40*o:r,u=s&&a?"viewBox='0 0 "+s+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},9267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return s},default:function(){return a}});let n=r(8754),o=r(1908),i=r(3686),l=n._(r(3293)),s=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},a=i.Image},3293:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},757:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(5893);r(9166);var o=r(7294);let i=["light","dark"],l="(prefers-color-scheme: dark)",s="undefined"==typeof window,a=(0,o.createContext)(void 0),u={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,o.useContext)(a))&&void 0!==e?e:u},d=e=>(0,o.useContext)(a)?o.createElement(o.Fragment,null,e.children):o.createElement(m,e),f=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:n=!0,storageKey:s="theme",themes:u=f,defaultTheme:c=r?"system":"light",attribute:d="data-theme",value:m,children:y,nonce:b})=>{let[x,_]=(0,o.useState)(()=>h(s,c)),[j,w]=(0,o.useState)(()=>h(s)),C=m?Object.values(m):u,S=(0,o.useCallback)(e=>{let o=e;if(!o)return;"system"===e&&r&&(o=v());let l=m?m[o]:o,s=t?g():null,a=document.documentElement;if("class"===d?(a.classList.remove(...C),l&&a.classList.add(l)):l?a.setAttribute(d,l):a.removeAttribute(d),n){let e=i.includes(c)?c:null,t=i.includes(o)?o:e;a.style.colorScheme=t}null==s||s()},[]),E=(0,o.useCallback)(e=>{_(e);try{localStorage.setItem(s,e)}catch(e){}},[e]),O=(0,o.useCallback)(t=>{w(v(t)),"system"===x&&r&&!e&&S("system")},[x,e]);(0,o.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),(0,o.useEffect)(()=>{let e=e=>{e.key===s&&E(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),(0,o.useEffect)(()=>{S(null!=e?e:x)},[e,x]);let P=(0,o.useMemo)(()=>({theme:x,setTheme:E,forcedTheme:e,resolvedTheme:"system"===x?j:x,themes:r?[...u,"system"]:u,systemTheme:r?j:void 0}),[x,E,e,j,r,u]);return o.createElement(a.Provider,{value:P},o.createElement(p,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:n,storageKey:s,themes:u,defaultTheme:c,attribute:d,value:m,children:y,attrs:C,nonce:b}),y)},p=(0,o.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:n,enableColorScheme:s,defaultTheme:a,value:u,attrs:c,nonce:d})=>{let f="system"===a,m="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,p=s?i.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(e,t=!1,n=!0)=>{let o=u?u[e]:e,l=t?e+"|| ''":`'${o}'`,a="";return s&&n&&!t&&i.includes(e)&&(a+=`d.style.colorScheme = '${e}';`),"class"===r?a+=t||o?`c.add(${l})`:"null":o&&(a+=`d[s](n,${l})`),a},g=e?`!function(){${m}${h(e)}}()`:n?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${h(u?"x[e]":"e",!0)}}${f?"":"else{"+h(a,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${h(u?"x[e]":"e",!0)}}else{${h(a,!1,!1)};}${p}}catch(t){}}();`;return o.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:g}})},()=>!0),h=(e,t)=>{let r;if(!s){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light");var y=r(9008),b=r.n(y),x=r(1664),_=r.n(x),j=r(5675),w=r.n(j);function C(){let{resolvedTheme:e,setTheme:t}=c(),[r,i]=(0,o.useState)("");return(0,o.useEffect)(()=>{"light"===e?i("dark_mode"):i("light_mode")},[e]),(0,n.jsx)("button",{type:"button","aria-label":"Toggle dark mode",onClick:()=>{t("dark"===e?"light":"dark")},children:(0,n.jsx)("span",{className:"hover:text-sky-700 material-symbols-outlined",children:r})})}function S(e){let{children:t}=e;return(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsx)("header",{className:"bg-gray-700 mb-3 px-6 py-4 ",children:(0,n.jsxs)("div",{className:"container lg:mx-auto md:mx-auto flex justify-center",children:[(0,n.jsx)(_(),{href:"/",children:(0,n.jsx)(w(),{className:" -mb-4 -mt-3 ",width:60,height:60,alt:"Menu",src:"/menuIcons/svgviewer-output.svg"})}),(0,n.jsxs)(_(),{href:"/",children:[(0,n.jsx)("p",{className:"text-lg ml-4 -mt-4 text-neutral-200  hover:text-sky-700",children:"Bem vindo ao"}),(0,n.jsx)("p",{className:"text-lg ml-8 -mb-4 text-neutral-200  hover:text-sky-700",children:"Blog Post-it"})]}),(0,n.jsx)("div",{className:" ml-auto  text-neutral-200",children:(0,n.jsx)(C,{})})]})}),(0,n.jsx)("main",{className:"container mx-auto flex-1",children:t}),(0,n.jsx)("footer",{className:"bg-gray-700  mt-1 py-4",children:(0,n.jsx)("div",{className:"container mx-auto flex justify-center",children:(0,n.jsx)("span",{className:"mx-auto text-neutral-200",children:"\xa9 2024 GrmDevTips"})})})]})}function E(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d,{enableSystem:!0,attribute:"class",children:(0,n.jsxs)(S,{children:[(0,n.jsx)(b(),{children:(0,n.jsx)("title",{children:"Blog Post-it - tips software developer"})}),(0,n.jsx)(t,{...r})]})})})}},9166:function(){},9008:function(e,t,r){e.exports=r(6665)},5675:function(e,t,r){e.exports=r(9267)},1664:function(e,t,r){e.exports=r(3480)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(3035)}),_N_E=e.O()}]);