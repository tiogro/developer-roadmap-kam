import{j as e}from"./jsx-runtime.6940b965.js";import{r as s}from"./index.070054a4.js";import{u as L}from"./use-keydown.bb1f91bb.js";import{u as z}from"./use-outside-click.5adb83b9.js";import{h as Y,a as Z}from"./http.3e3d4bea.js";import{i as B}from"./jwt.5556697d.js";import{g as ee,u as G,a as _,b as K,i as te}from"./resource-progress.5a39ae1e.js";import{p as q,s as se}from"./page.2efb91d4.js";import{s as R}from"./popup.a359f713.js";import{u as $}from"./use-toast.dbd347db.js";import{S as O}from"./Spinner.799b0955.js";import{C as ne}from"./chevron-down.cc515fa2.js";import{m as re}from"./markdown.9aebbb7a.js";import{c as oe}from"./classname.0c0e8aac.js";import{g as ie}from"./browser.6245b9a5.js";import{X as H}from"./x.c33f2cf5.js";import{c as Q}from"./createLucideIcon.3c9fdece.js";import"./roadmap.2126cc25.js";import"./index.1c368e68.js";import"./index.4b590221.js";import"./toast.5b8c89b6.js";import"./bundle-mjs.58d1fad7.js";function le(f){s.useEffect(()=>{function n(a){const{resourceType:u,resourceId:o,topicId:c,isCustomResource:m=!1}=a.detail;f({resourceType:u,resourceId:o,topicId:c,isCustomResource:m})}return window.addEventListener("roadmap.topic.click",n),window.addEventListener("best-practice.topic.click",n),window.addEventListener("roadmap.node.click",n),()=>{window.removeEventListener("roadmap.topic.click",n),window.removeEventListener("best-practice.topic.click",n),window.removeEventListener("roadmap.node.click",n)}},[])}function ae(f){s.useEffect(()=>{function n(a){const{resourceType:u,resourceId:o,topicId:c}=a.detail;f({resourceType:u,resourceId:o,topicId:c})}return window.addEventListener("roadmap.topic.toggle",n),window.addEventListener("best-practice.topic.toggle",n),()=>{window.removeEventListener("best-practice.topic.toggle",n)}},[])}const ce=Q("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]),de=Q("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),T={done:"bg-green-500",learning:"bg-yellow-500",pending:"bg-gray-300",skipped:"bg-black",removed:""};function ue(f){const{topicId:n,resourceId:a,resourceType:u,onClose:o}=f,c=$(),[m,p]=s.useState(!0),[t,i]=s.useState("pending"),[b,r]=s.useState(!1),x=s.useRef(null);z(x,()=>{r(!1)});const g=s.useMemo(()=>!B(),[]);s.useEffect(()=>{!n||!a||!u||(p(!0),ee({topicId:n,resourceId:a,resourceType:u}).then(j=>{p(!1),i(j)}).catch(console.error))},[n,a,u]),L("d",()=>{if(t==="done"){o();return}l("done")},[t]),L("l",()=>{if(t==="learning"){o();return}l("learning")},[t]),L("s",()=>{if(t==="skipped"){o();return}l("skipped")},[t]),L("r",()=>{if(console.log(t),t==="pending"){o();return}l("pending")},[t]);const l=j=>{if(g){o(),R();return}p(!0),G({topicId:n,resourceId:a,resourceType:u},j).then(()=>{i(j),o(),_(n,j),K()}).catch(S=>{c.error(S.message||"Error updating progress"),console.error(S)}).finally(()=>{p(!1)})},N=["pending","learning","done"].includes(t),k=["skipped","pending","learning"].includes(t),h=["done","skipped","pending"].includes(t),I=["skipped","done","learning"].includes(t);return m?e.jsxs("button",{className:"inline-flex cursor-default items-center rounded-md border border-gray-300 bg-white p-1 px-2 text-sm text-black",children:[e.jsx(O,{className:"h-4 w-4"}),e.jsx("span",{className:"ml-2",children:"Updating Status.."})]}):e.jsxs("div",{className:"relative inline-flex rounded-md border border-gray-300",children:[e.jsxs("span",{className:"inline-flex cursor-default items-center  p-1 px-2 text-sm text-black",children:[e.jsx("span",{className:"flex h-2 w-2",children:e.jsx("span",{className:`relative inline-flex h-2 w-2 rounded-full ${T[t]}`})}),e.jsx("span",{className:"ml-2 capitalize",children:t==="learning"?"In Progress":t})]}),e.jsxs("button",{className:"inline-flex cursor-pointer items-center rounded-br-md rounded-tr-md border-l border-l-gray-300 bg-gray-100 p-1 px-2 text-sm text-black hover:bg-gray-200",onClick:()=>r(!0),children:[e.jsx("span",{className:"mr-0.5",children:"Update Status"}),e.jsx(ne,{className:"h-4 w-4"})]}),b&&e.jsxs("div",{className:"absolute right-0 top-full mt-1 flex min-w-[160px] flex-col divide-y rounded-md border border-gray-200 bg-white shadow-md [&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md",ref:x,children:[k&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>l("done"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${T.done}`}),"Done"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"D"})]}),h&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>l("learning"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${T.learning}`}),"In Progress"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"L"})]}),I&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>l("pending"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${T.pending}`}),"Reset"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"R"})]}),N&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>l("skipped"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${T.skipped}`}),"Skip"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"S"})]})]})]})}function pe(f){const{isLast:n,totalCount:a,onAdd:u,onRemove:o,onChange:c,id:m,title:p,link:t}=f,i=s.useRef(null),[b,r]=s.useState(""),[x,g]=s.useState(p),[l,N]=s.useState(t);s.useEffect(()=>{i?.current&&i.current.focus()},[]),s.useEffect(()=>{c({id:m,title:x,link:l})},[x,l]);const k=n&&a<5;return e.jsxs("div",{className:"relative mb-3 rounded-md border p-3",children:[e.jsx("p",{className:`mb-1 text-xs uppercase ${b==="title"?"text-black":"text-gray-400"}`,children:"Resource Title"}),e.jsx("input",{ref:i,type:"text",required:!0,className:"block w-full rounded-md border p-2 text-sm focus:border-gray-400 focus:outline-none",placeholder:"e.g. Introduction to RESTful APIs",onFocus:()=>r("title"),onBlur:()=>r(""),onChange:h=>g(h.target.value)}),e.jsx("p",{className:`mb-1 mt-3 text-xs uppercase ${b==="link"?"text-black":"text-gray-400"}`,children:"Resource Link"}),e.jsx("input",{type:"url",required:!0,className:"block w-full rounded-md border p-2 text-sm focus:border-gray-400 focus:outline-none",placeholder:"e.g. https://roadmap.sh/guides/some-url",onFocus:()=>r("link"),onBlur:()=>r(""),onChange:h=>N(h.target.value)}),e.jsxs("div",{className:"mb-0 mt-3 flex gap-3",children:[a!==1&&e.jsx("button",{onClick:h=>{h.preventDefault(),o()},className:"rounded-md text-sm font-semibold text-red-500 underline underline-offset-2 hover:text-red-800",children:"- Remove Link"}),k&&e.jsx("button",{onClick:h=>{h.preventDefault(),u()},className:"rounded-md text-sm font-semibold text-gray-600 underline underline-offset-2 hover:text-black",children:"+ Add another Link"})]})]})}function me(f){const{onClose:n,resourceType:a,resourceId:u,topicId:o}=f,c=$(),[m,p]=s.useState(!1),[t,i]=s.useState([{id:new Date().getTime(),title:"",link:""}]);async function b(r){r.preventDefault(),p(!0);const{response:x,error:g}=await Y("https://api.roadmap.sh/v1-contribute-link",{resourceType:a,resourceId:u,topicId:o,links:t});if(p(!1),!x||g){c.error(g?.message||"Something went wrong. Please try again.");return}n("Thanks for your contribution! We will review it shortly.")}return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2 mt-2 rounded-md border bg-gray-100 p-3",children:[e.jsx("h1",{className:"mb-2 text-2xl font-bold",children:"Guidelines"}),e.jsxs("ul",{className:"flex flex-col gap-1 text-sm text-gray-700",children:[e.jsx("li",{children:"Content should only be in English."}),e.jsx("li",{children:"Do not add things you have not evaluated personally."}),e.jsx("li",{children:"It should strictly be relevant to the topic."}),e.jsx("li",{children:"It should not be paid or behind a signup."}),e.jsx("li",{children:"Quality over quantity. Smaller set of quality links is preferred."})]})]}),e.jsxs("form",{onSubmit:b,children:[t.map((r,x)=>e.jsx(pe,{id:r.id,title:r.title,link:r.link,isLast:x===t.length-1,totalCount:t.length,onChange:g=>{i(t.map(l=>l.id===r.id?g:l))},onRemove:()=>{i(t.filter(g=>g.id!==r.id))},onAdd:()=>{i([...t,{id:new Date().getTime(),title:"",link:""}])}},r.id)),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{disabled:m,type:"submit",className:"block w-full rounded-md bg-gray-800 p-2 text-sm text-white hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-400",children:m?"Please wait ...":"Submit"}),e.jsx("button",{className:"block w-full rounded-md border border-red-500 p-2 text-sm text-red-600 hover:bg-red-600 hover:text-white",onClick:r=>{r.preventDefault(),n()},children:"Cancel"})]})]})]})}const xe={article:"bg-yellow-200",course:"bg-green-200",opensource:"bg-blue-200",podcast:"bg-purple-200",video:"bg-pink-200",website:"bg-red-200"};function Fe(f){const{canSubmitContribution:n}=f,[a,u]=s.useState(""),[o,c]=s.useState(!1),[m,p]=s.useState(!1),[t,i]=s.useState(!1),[b,r]=s.useState(""),[x,g]=s.useState(""),[l,N]=s.useState(""),[k,h]=s.useState([]),I=$(),{secret:j}=ie(),S=s.useMemo(()=>!B(),[]),E=s.useRef(null),[D,V]=s.useState(""),[A,W]=s.useState(""),[M,X]=s.useState("roadmap");if(z(E,()=>{c(!1),i(!1)}),L("Escape",()=>{c(!1),i(!1)}),ae(({topicId:d,resourceType:C,resourceId:w})=>{if(S){R();return}q.set("Updating"),te({topicId:d,resourceId:w,resourceType:C}).then(y=>G({topicId:d,resourceId:w,resourceType:C},y?"pending":"done")).then(({done:y=[]})=>{_(d,y.includes(d)?"done":"pending"),K()}).catch(y=>{I.error(y.message),console.error(y)}).finally(()=>{q.set("")})}),le(({topicId:d,resourceType:C,resourceId:w,isCustomResource:y})=>{r(""),p(!0),c(!0),se.set(!0),u(""),V(d),X(C),W(w);const F=d.replaceAll(":","/");let U=C==="roadmap"?`/${w}/${F}`:`/best-practices/${w}/${F}`;y&&(U=`https://api.roadmap.sh/v1-get-node-content/${w}/${d}${j?`?secret=${j}`:""}`),Z(U,{},{...!y&&{headers:{Accept:"text/html"}}}).then(({response:v})=>{if(!v){r("Topic not found."),p(!1);return}let P="";y?(h(v?.links||[]),N(v?.title||""),P=re(v?.description||"",!1)):P=v,p(!1),g(P)}).catch(v=>{r("Something went wrong. Please try again later."),p(!1)})}),s.useEffect(()=>{o&&E?.current?.focus()},[o]),!o)return null;const J=x?.length>0||k?.length>0||l;return e.jsxs("div",{className:"relative z-50",children:[e.jsxs("div",{ref:E,tabIndex:0,className:"fixed right-0 top-0 z-40 h-screen w-full overflow-y-auto bg-white p-4 focus:outline-0 sm:max-w-[600px] sm:p-6",children:[m&&e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(O,{outerFill:"#d1d5db",className:"h-6 w-6 sm:h-12 sm:w-12",innerFill:"#2563eb"})}),!m&&t&&e.jsx(me,{resourceType:M,resourceId:A,topicId:D,onClose:d=>{d&&u(d),i(!1)}}),!t&&!m&&!b&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-2",children:[e.jsx(ue,{topicId:D,resourceId:A,resourceType:M,onClose:()=>{c(!1),i(!1)}}),e.jsx("button",{type:"button",id:"close-topic",className:"absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",onClick:()=>{c(!1),i(!1)},children:e.jsx(H,{className:"h-5 w-5"})})]}),J?e.jsxs("div",{className:"prose prose-quoteless prose-h1:mb-2.5 prose-h1:mt-7 prose-h2:mb-3 prose-h2:mt-0 prose-h3:mb-[5px] prose-h3:mt-[10px] prose-p:mb-2 prose-p:mt-0 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-li:m-0 prose-li:mb-0.5",children:[l&&e.jsx("h1",{children:l}),e.jsx("div",{id:"topic-content",dangerouslySetInnerHTML:{__html:x}})]}):e.jsxs("div",{className:"flex h-[calc(100%-38px)] flex-col items-center justify-center",children:[e.jsx(de,{className:"h-16 w-16 text-gray-300"}),e.jsx("p",{className:"mt-2 text-lg font-medium text-gray-500",children:"Empty Content"})]}),k.length>0&&e.jsx("ul",{className:"mt-6 space-y-1",children:k.map(d=>e.jsx("li",{children:e.jsxs("a",{href:d.url,target:"_blank",className:"font-medium underline",children:[e.jsx("span",{className:oe("mr-2 inline-block rounded px-1.5 py-1 text-xs uppercase no-underline",xe[d.type]),children:d.type.charAt(0).toUpperCase()+d.type.slice(1)}),d.title]})}))}),n&&e.jsxs("div",{className:"mt-8 flex-1 border-t",children:[e.jsxs("p",{className:"mb-2 mt-2 text-sm leading-relaxed text-gray-400",children:["Help others learn by submitting links to learn more about this topic"," "]}),e.jsx("button",{onClick:()=>{if(S){c(!1),R();return}i(!0)},disabled:!!a,className:"block w-full rounded-md bg-gray-800 p-2 text-sm text-white transition-colors hover:bg-black hover:text-white disabled:bg-green-200 disabled:text-black",children:a||"Submit a Link"})]})]}),!t&&!m&&b&&e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",id:"close-topic",className:"absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",onClick:()=>{c(!1),i(!1)},children:e.jsx(H,{className:"h-5 w-5"})}),e.jsxs("div",{className:"flex h-full flex-col items-center justify-center",children:[e.jsx(ce,{className:"h-16 w-16 text-red-500"}),e.jsx("p",{className:"mt-2 text-lg font-medium text-red-500",children:b})]})]})]}),e.jsx("div",{className:"fixed inset-0 z-30 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"})]})}export{Fe as TopicDetail};