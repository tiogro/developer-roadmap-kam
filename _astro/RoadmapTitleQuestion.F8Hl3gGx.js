import{j as e}from"./jsx-runtime.KYujgZxC.js";import{r as n}from"./index.068npczX.js";import{u as d}from"./use-outside-click.8agT9V5u.js";import{m as p}from"./markdown.or4ulUFQ.js";import{c as i}from"./createLucideIcon.vQ5YHosT.js";import{C as x}from"./chevron-down.EIXdT033.js";/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=i("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=i("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);function w(o){const{question:a,answer:m}=o,[s,t]=n.useState(!1),r=n.useRef(null);return d(r,()=>{t(!1)}),e.jsxs("div",{className:"relative hidden border-t text-sm font-medium sm:block",children:[s&&e.jsx("div",{className:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50"}),e.jsxs("h2",{className:"z-50 flex cursor-pointer items-center px-2 py-2.5 text-base font-medium","aria-expanded":s?"true":"false",onClick:c=>{c.preventDefault(),t(!s)},children:[e.jsxs("span",{className:"flex flex-grow items-center",children:[e.jsx(l,{className:"mr-2 inline-block h-6 w-6"}),a]}),e.jsx("span",{className:"flex-shrink-0 text-gray-400",children:e.jsx(x,{className:"inline-block h-5 w-5"})})]}),e.jsxs("div",{className:`absolute left-0 right-0 top-0 z-50 mt-0 rounded-md border bg-white ${s?"block":"hidden"}`,ref:r,children:[s&&e.jsxs("h2",{className:"flex cursor-pointer items-center border-b px-[7px] py-[9px] text-base font-medium",onClick:()=>t(!1),children:[e.jsxs("span",{className:"flex flex-grow items-center",children:[e.jsx(l,{className:"mr-2 inline-block h-6 w-6"}),a]}),e.jsx("span",{className:"flex-shrink-0 text-gray-400",children:e.jsx(f,{className:"inline-block h-5 w-5"})})]}),e.jsx("div",{className:"bg-gray-100 p-3 text-base [&>h2]:mb-2 [&>h2]:mt-5 [&>h2]:text-[17px] [&>h2]:font-medium [&>p:last-child]:mb-0 [&>p>a]:font-semibold [&>p>a]:underline [&>p>a]:underline-offset-2 [&>p]:mb-3 [&>p]:font-normal [&>p]:leading-relaxed [&>p]:text-gray-800",dangerouslySetInnerHTML:{__html:p(m,!1)}})]})]})}export{w as RoadmapTitleQuestion};