(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(766)}])},766:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h},default:function(){return m}});var l=r(5893),s=r(7294),a=r(5675),n=r.n(a),i=r(1664),o=r.n(i);let d=(e,t)=>Array.from({length:t-e+1},(t,r)=>r+e),c=e=>{let{totalCount:t,pageSize:r,siblingCount:l=1,currentPage:a}=e,n=(0,s.useMemo)(()=>{let e=Math.ceil(t/r);if(l+5>=e)return d(1,e);let s=Math.max(a-l,1),n=Math.min(a+l,e),i=s>2,o=n<e-2;if(!i&&o){let t=d(1,3+2*l);return[...t,"...",e]}if(i&&!o){let t=d(e-(3+2*l)+1,e);return[1,"...",...t]}if(i&&o){let t=d(s,n);return[1,"...",...t,"...",e]}},[t,r,l,a]);return n};function x(e){let{pageSize:t,totalCount:r,onPageChange:s,currentPage:a,siblingCount:n=1}=e,i=c({currentPage:a,totalCount:r,siblingCount:n,pageSize:t});if(0===a||i.length<2)return null;let o=()=>{s(a+1)},d=()=>{s(a-1)},x=i[i.length-1];return(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)("nav",{"aria-label":"Page navigation example",children:(0,l.jsxs)("ul",{className:"list-style-none flex",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{onClick:()=>{a>1&&d()},className:"relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-300 dark:text-white dark:hover:bg-sky-700 dark:hover:text-white",href:"#",children:"Anterior"})}),i.map(e=>"..."===e?(0,l.jsx)("li",{children:"…"},e):(0,l.jsx)("li",{className:"relative block rounded py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-300 dark:text-white dark:hover:bg-sky-700 dark:hover:text-white ".concat(a===e?"bg-sky-900 text-white font-bold":"bg-transparent"),onClick:()=>s(Number(e)),children:e},Number(e))),(0,l.jsx)("li",{children:(0,l.jsx)("a",{onClick:()=>{a<Number(x)&&o()},className:"relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-300 dark:text-white dark:hover:bg-sky-700 dark:hover:text-white",href:"#",children:"Pr\xf3ximo"})})]})})})}var h=!0;function m(e){let{posts:t}=e,[r,a]=(0,s.useState)(""),i=t[0],d=t.slice(1).filter(e=>e.frontmatter.title.toLowerCase().includes(r.toLowerCase())),[c,h]=(0,s.useState)(1),m=(0,s.useMemo)(()=>{let e=(Number(c)-1)*4;return d.slice(e,e+4)},[c,d]),u=e=>{a(e.target.value)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-1 p-4 md:p-0",children:[(0,l.jsxs)("div",{className:"relative flex items-center mr-2 justify-end ml-auto",children:[(0,l.jsx)("input",{type:"text",placeholder:"Pesquisar",value:r,onChange:u,className:"pl-2 pr-7 py-2 dark:bg-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"}),(0,l.jsx)("span",{className:"absolute right-1 z-10 hover:text-sky-700 material-symbols-outlined",children:"search"})]}),(0,l.jsx)("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2",children:c<2&&!r&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col",children:(0,l.jsxs)(o(),{href:"/post/".concat(i.slug),children:[(0,l.jsx)(n(),{width:750,height:340,alt:i.frontmatter.title,src:"/".concat(i.frontmatter.socialImage),priority:!0}),(0,l.jsx)("div",{className:"flex justify-between ",children:(0,l.jsx)("span",{className:"pl-4 py-4 text-base",children:i.frontmatter.title})})]})},i.slug),(0,l.jsxs)("div",{className:"border border-gray-200 m-2 p-4 rounded-xl shadow-lg overflow-hidden flex flex-col",children:[(0,l.jsx)("span",{className:"font-bold xl:mt12 xl:mb-4 lg:mt-8 lg:mb-4 lg:text-2xl md:text-lg sm:text-base",children:i.frontmatter.title}),(0,l.jsx)("span",{className:"ml-4 mt-4 lg:text-xl md:text-base sm:text-sm",children:"".concat(i.frontmatter.metaDesc,"...")}),(0,l.jsxs)("div",{className:"justify-items-end mt-auto flex justify-between",children:[(0,l.jsx)("span",{className:"mr-4 text-lg",children:new Date(i.frontmatter.date).toLocaleDateString("pt-BR")}),(0,l.jsx)(o(),{className:"",href:"/post/".concat(i.slug),children:(0,l.jsx)("span",{className:"hover:text-sky-700 ml-4 text-xl",children:"Continue →"})})]})]},i.frontmatter.date)]})}),(0,l.jsx)("div",{className:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2",children:d.length>0&&m.map(e=>{let{slug:t,frontmatter:r}=e;return(0,l.jsx)("div",{className:"border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col",children:(0,l.jsxs)(o(),{href:"/post/".concat(t),children:[(0,l.jsx)(n(),{width:650,height:340,alt:r.title,src:"/".concat(r.socialImage)}),(0,l.jsx)("h1",{className:"p-4",children:r.title})]})},t)})})]}),(0,l.jsx)("div",{className:" mt-48",children:(0,l.jsx)(x,{currentPage:Number(c),totalCount:t.length,pageSize:4,onPageChange:e=>h(e)})})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);