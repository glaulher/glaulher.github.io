(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5970)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(6495).Z,n=r(2648).Z,o=r(1598).Z,a=r(7273).Z,l=o(r(7294)),s=n(r(3121)),c=r(2675),d=r(139),u=r(8730);r(7238);var f=n(r(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,n,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let w=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:o,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:g,placeholder:h,loading:m,srcString:w,config:v,unoptimized:b,loader:y,onLoadRef:_,onLoadingCompleteRef:E,setBlurComplete:S,setShowAltText:x,onLoad:j,onError:C}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,r,{width:o,height:n,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:m,style:i({},d,u),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&p(e,w,h,_,E,S,b))},[w,h,_,E,S,C,b,t]),onLoad:e=>{let t=e.currentTarget;p(t,w,h,_,E,S,b)},onError:e=>{x(!0),"blur"===h&&S(!0),C&&C(e)}})))}),v=l.forwardRef((e,t)=>{let r,n;var o,{src:p,sizes:v,unoptimized:b=!1,priority:y=!1,loading:_,className:E,quality:S,width:x,height:j,fill:C,style:z,onLoad:N,onLoadingComplete:O,placeholder:R="empty",blurDataURL:k,layout:P,objectFit:I,objectPosition:A,lazyBoundary:L,lazyRoot:M}=e,B=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(u.ImageConfigContext),T=l.useMemo(()=>{let e=g||D||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[D]),F=B,W=F.loader||f.default;delete F.loader;let G="__next_img_default"in W;if(G){if("custom"===T.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=W;W=t=>{let{config:r}=t,i=a(t,["config"]);return e(i)}}if(P){"fill"===P&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(z=i({},z,e));let t={responsive:"100vw",fill:"100vw"}[P];t&&!v&&(v=t)}let q="",Z=m(x),U=m(j);if("object"==typeof(o=p)&&(h(o)||void 0!==o.src)){let e=h(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,k=k||e.blurDataURL,q=e.src,!C){if(Z||U){if(Z&&!U){let t=Z/e.width;U=Math.round(e.height*t)}else if(!Z&&U){let t=U/e.height;Z=Math.round(e.width*t)}}else Z=e.width,U=e.height}}let V=!y&&("lazy"===_||void 0===_);((p="string"==typeof p?p:q).startsWith("data:")||p.startsWith("blob:"))&&(b=!0,V=!1),T.unoptimized&&(b=!0),G&&p.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(b=!0);let[J,X]=l.useState(!1),[H,$]=l.useState(!1),K=m(S),Q=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:A}:{},H?{}:{color:"transparent"},z),Y="blur"===R&&k&&!J?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Z,heightInt:U,blurWidth:r,blurHeight:n,blurDataURL:k}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}({config:T,src:p,unoptimized:b,width:Z,quality:K,sizes:v,loader:W}),et=p,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:F.crossOrigin},ei=l.useRef(N);l.useEffect(()=>{ei.current=N},[N]);let en=l.useRef(O);l.useEffect(()=>{en.current=O},[O]);let eo=i({isLazy:V,imgAttributes:ee,heightInt:U,widthInt:Z,qualityInt:K,className:E,imgStyle:Q,blurStyle:Y,loading:_,config:T,fill:C,unoptimized:b,placeholder:R,loader:W,srcString:et,onLoadRef:ei,onLoadingCompleteRef:en,setBlurComplete:X,setShowAltText:$},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement(w,Object.assign({},eo,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o}=e,a=i||t,l=n||r,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&n?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},5970:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return s},default:function(){return c}});var i=r(5893),n=r(5675),o=r.n(n),a=r(1664),l=r.n(a),s=!0;function c(e){let{posts:t}=e,r=t[0];return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 p-4 md:p-0",children:r&&(0,i.jsx)("div",{className:"border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col",children:(0,i.jsxs)(l(),{href:"/post/".concat(r.slug),children:[(0,i.jsx)(o(),{width:750,height:340,alt:r.frontmatter.title,src:"/".concat(r.frontmatter.socialImage)}),(0,i.jsx)("h1",{className:"p-4",children:r.frontmatter.title})]})},r.slug)})})}},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);