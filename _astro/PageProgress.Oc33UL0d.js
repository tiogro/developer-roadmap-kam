import{j as e}from"./jsx-runtime.KYujgZxC.js";import{u as n}from"./index.LKnyuT_C.js";import{p as l}from"./page.WSJoHwTn.js";import{r as t}from"./index.068npczX.js";import{S as m}from"./Spinner.JIsgQuDp.js";import"./index.rS7vpNfE.js";function x(i){const{initialMessage:a}=i,[r,o]=t.useState(a),s=n(l);return t.useEffect(()=>{s!==void 0&&o(s)},[s]),r?e.jsx("div",{children:e.jsx("div",{className:"fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-75",children:e.jsxs("div",{className:"flex  items-center justify-center rounded-md border bg-white px-4 py-2 ",children:[e.jsx(m,{className:"h-4 w-4 sm:h-4 sm:w-4",outerFill:"#e5e7eb",innerFill:"#2563eb"}),e.jsxs("h1",{className:"ml-2",children:[r,e.jsx("span",{className:"animate-pulse",children:"..."})]})]})})}):null}export{x as PageProgress};