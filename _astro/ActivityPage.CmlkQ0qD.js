import{j as e}from"./jsx-runtime.BPj4-Rfu.js";import{r as x}from"./index.SSXOyoI7.js";import{h as $,a as R}from"./http.CoFfIBz6.js";import{u as F}from"./use-toast.CK2mpur1.js";import{ProgressShareButton as D}from"./ProgressShareButton.DI8bzKTB.js";import{g as S}from"./jwt.DJKFTm3i.js";import{p}from"./page.C3ddTGlS.js";import{R as B}from"./RoadmapIcon.DUeTpdPA.js";import"./toast.BGQI3kl5.js";import"./index.CEvxOxeV.js";import"./use-auth.Bb8mCiPL.js";import"./use-copy-text.i66JXdki.js";import"./CheckIcon.Dy4QWWBd.js";import"./classname.VuY_V_HN.js";import"./bundle-mjs.CZZD-8Ii.js";function h(s){const{text:n,count:o}=s;return e.jsxs("div",{className:"relative flex flex-1 flex-row-reverse sm:flex-col px-0 sm:px-4 py-2 sm:py-4 text-center sm:pt-10 items-center gap-2 sm:gap-0 justify-end",children:[e.jsx("h2",{className:"text-base sm:text-5xl font-bold",children:o}),e.jsx("p",{className:"mt-0 sm:mt-2 text-sm text-gray-400",children:n})]})}function M(s){const{done:n,learning:o,streak:d}=s;return e.jsx("div",{className:"mx-0 -mt-5 sm:-mx-10 md:-mt-10",children:e.jsxs("div",{className:"flex flex-col sm:flex-row gap-0 sm:gap-2 divide-y sm:divide-y-0 divide-x-0 sm:divide-x border-b",children:[e.jsx(h,{text:"Topics Completed",count:`${n?.total||0}`}),e.jsx(h,{text:"Currently Learning",count:`${o?.total||0}`}),e.jsx(h,{text:"Visit Streak",count:`${d?.count||0}d`})]})})}function P(s){if(!Intl?.RelativeTimeFormat)return s;const n=new Intl.RelativeTimeFormat("en",{numeric:"auto",style:"narrow"}),o=new Date,d=new Date(s),a=o.getTime()-d.getTime(),i=Math.round(a/(1e3*60)),l=Math.round(a/(1e3*60*60)),t=Math.round(a/(1e3*60*60*24));let r;return i<60?r=n.format(-i,"minute"):l<24?r=n.format(-l,"hour"):r=n.format(-t,"day"),r}function w(s){const{showClearButton:n=!0,isCustomResource:o}=s,d=F(),[a,i]=x.useState(!1),[l,t]=x.useState(!1),r=S()?.id,{updatedAt:u,resourceType:c,resourceId:m,title:b,totalCount:j,learningCount:y,doneCount:g,skippedCount:f,onCleared:v}=s;async function A(){i(!0);const{error:N,response:T}=await $("https://api.roadmap.sh/v1-clear-resource-progress",{resourceId:m,resourceType:c});if(N||!T){d.error("Error clearing progress. Please try again."),console.error(N),i(!1);return}localStorage.removeItem(`${c}-${m}-${r}-favorite`),localStorage.removeItem(`${c}-${m}-${r}-progress`),i(!1),t(!1),v&&v()}let C=c==="roadmap"?`/${m}`:`/best-practices/${m}`;o&&(C=`/r?id=${m}`);const k=g+f,I=Math.round(k/j*100);return e.jsxs("div",{children:[e.jsxs("a",{href:C,className:"group relative flex cursor-pointer items-center rounded-t-md border p-3 text-gray-600 hover:border-gray-300 hover:text-black",children:[e.jsx("span",{className:"absolute left-0 top-0 block h-full cursor-pointer rounded-tl-md bg-black/5 group-hover:bg-black/10",style:{width:`${I}%`}}),e.jsx("span",{className:"relative  flex-1 cursor-pointer truncate",children:b}),e.jsx("span",{className:"ml-1 cursor-pointer text-sm text-gray-400",children:P(u)})]}),e.jsxs("div",{className:"sm:space-between flex flex-row items-start rounded-b-md border border-t-0 px-2 py-2 text-xs text-gray-500",children:[e.jsxs("span",{className:"hidden flex-1 gap-1 sm:flex",children:[g>0&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:[g," done"]})," •"]}),y>0&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:[y," in progress"]})," •"]}),f>0&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:[f," skipped"]})," •"]}),e.jsxs("span",{children:[j," total"]})]}),e.jsxs("div",{className:"flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-start",children:[e.jsx(D,{resourceType:c,resourceId:m,isCustomResource:o,className:"text-xs font-normal",shareIconClassName:"w-2.5 h-2.5 stroke-2",checkIconClassName:"w-2.5 h-2.5"}),e.jsx("span",{className:"hidden sm:block",children:"•"}),n&&e.jsxs(e.Fragment,{children:[!l&&e.jsxs("button",{className:"text-red-500 hover:text-red-800",onClick:()=>t(!0),disabled:a,children:[!a&&e.jsxs(e.Fragment,{children:["Clear Progress ",e.jsx("span",{children:"×"})]}),a&&"Processing..."]}),l&&e.jsxs("span",{children:["Are you sure?"," ",e.jsx("button",{onClick:A,className:"ml-1 mr-1 text-red-500 underline hover:text-red-800",children:"Yes"})," ",e.jsx("button",{onClick:()=>t(!1),className:"text-red-500 underline hover:text-red-800",children:"No"})]})]})]})]})]})}function E(){return e.jsx("div",{className:"rounded-md",children:e.jsxs("div",{className:"flex flex-col items-center p-7 text-center",children:[e.jsx(B,{className:"mb-2 w-[60px] h-[60px] sm:h-[120px] sm:w-[120px] opacity-10"}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold",children:"No Progress"}),e.jsxs("p",{className:"my-1 sm:my-2 max-w-[400px] text-gray-500 text-sm sm:text-base",children:["Progress will appear here as you start tracking your"," ",e.jsx("a",{href:"/roadmaps",className:"mt-4 text-blue-500 hover:underline",children:"Roadmaps"})," ","or"," ",e.jsx("a",{href:"/best-practices",className:"mt-4 text-blue-500 hover:underline",children:"Best Practices"})," ","progress."]})]})})}function _(){const[s,n]=x.useState(),[o,d]=x.useState(!0);async function a(){const{error:t,response:r}=await R("https://api.roadmap.sh/v1-get-user-stats");if(!r||t){console.error("Error loading activity"),console.error(t);return}n(r)}x.useEffect(()=>{a().finally(()=>{p.set(""),d(!1)})},[]);const i=s?.learning.roadmaps||[],l=s?.learning.bestPractices||[];return o?null:e.jsxs(e.Fragment,{children:[e.jsx(M,{done:s?.done||{today:0,total:0},learning:s?.learning||{today:0,total:0},streak:s?.streak||{count:0}}),e.jsxs("div",{className:"mx-0 px-0 py-5 md:-mx-10 md:px-8 md:py-8",children:[i.length===0&&l.length===0&&e.jsx(E,{}),(i.length>0||l.length>0)&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"mb-3 text-xs uppercase text-gray-400",children:"Continue Following"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[i.sort((t,r)=>{const u=new Date(t.updatedAt);return new Date(r.updatedAt).getTime()-u.getTime()}).map(t=>e.jsx(w,{isCustomResource:t.isCustomResource,doneCount:t.done||0,learningCount:t.learning||0,totalCount:t.total||0,skippedCount:t.skipped||0,resourceId:t.id,resourceType:"roadmap",updatedAt:t.updatedAt,title:t.title,onCleared:()=>{p.set("Updating activity"),a().finally(()=>{p.set("")})}},t.id)),l.sort((t,r)=>{const u=new Date(t.updatedAt);return new Date(r.updatedAt).getTime()-u.getTime()}).map(t=>e.jsx(w,{isCustomResource:t.isCustomResource,doneCount:t.done||0,totalCount:t.total||0,learningCount:t.learning||0,resourceId:t.id,skippedCount:t.skipped||0,resourceType:"best-practice",title:t.title,updatedAt:t.updatedAt,onCleared:()=>{p.set("Updating activity"),a().finally(()=>{p.set("")})}},t.id))]})]})]})]})}export{_ as ActivityPage};