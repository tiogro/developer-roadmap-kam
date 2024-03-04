import{j as e}from"./jsx-runtime.BPj4-Rfu.js";import{r as u}from"./index.SSXOyoI7.js";import{a as A,h as F,c as R}from"./http.BuCmuCAv.js";import{p as r}from"./page.C3ddTGlS.js";import{i as I}from"./jwt.CPeqYXpJ.js";import{s as S}from"./popup.CdCAhVM2.js";import{g as $}from"./browser.DS5mYzWA.js";import{C as j}from"./CheckIcon.Dy4QWWBd.js";import{D as x,A as q}from"./AddedUserIcon.exxP2bg_.js";import{u as E}from"./use-toast.CK2mpur1.js";import{u as L}from"./use-auth.jaZcEPdF.js";import{E as U}from"./ErrorIcon.Cf6fFoCT.js";import"./index.CEvxOxeV.js";import"./toast.BGQI3kl5.js";function P(d){const{additionalClasses:m="mr-2 w-[20px] h-[20px]"}=d;return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:`relative ${m}`,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"m4.9 4.9 14.2 14.2"})]})}function V(){const{u:d}=$(),m=E(),y=L(),[n,a]=u.useState(!1),[N,w]=u.useState(!0),[f,o]=u.useState(""),[t,p]=u.useState(),C=I();async function v(i){const{response:l,error:s}=await A(`https://api.roadmap.sh/v1-get-friend/${i}`);if(s||!l){o(s?.message||"Something went wrong");return}if(l.status==="accepted"){window.location.href="/account/friends?c=fa";return}p(l)}u.useEffect(()=>{d?v(d).finally(()=>{r.set(""),w(!1)}):(w(!1),o("Missing invite ID in URL"),r.set(""))},[d]);async function h(i,l){r.set("Please wait..."),o("");const{response:s,error:c}=await F(`https://api.roadmap.sh/v1-add-friend/${i}`,{});if(c||!s){o(c?.message||"Something went wrong");return}if(s.status==="accepted"){window.location.href="/account/friends?c=fa";return}p(s)}async function g(i,l){r.set("Please wait..."),o("");const{response:s,error:c}=await R(`https://api.roadmap.sh/v1-delete-friend/${i}`,{});if(c||!s){o(c?.message||"Something went wrong");return}p(s),m.success(l)}if(N)return null;if(!t)return e.jsxs("div",{className:"container text-center",children:[e.jsx(U,{additionalClasses:"mx-auto mb-4 mt-24 w-20 opacity-20"}),e.jsx("h2",{className:"mb-1 text-2xl font-bold",children:"Error"}),e.jsx("p",{className:"mb-4 text-base leading-6 text-gray-600",children:f||"There was a problem, please try again."}),e.jsx("div",{children:e.jsx("a",{href:"/",className:"flex-grow cursor-pointer rounded-lg bg-gray-200 px-3 py-2 text-center",children:"Back to home"})})]});const k=t.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${t.avatar}`:"/images/default-avatar.png",b=y?.id===t.id;return e.jsxs("div",{className:"container !max-w-[400px] text-center",children:[e.jsx("img",{alt:"join team",src:k,className:"mx-auto mb-4 mt-24 w-28 rounded-full"}),e.jsx("h2",{className:"mb-1 text-3xl font-bold",children:t.name}),e.jsxs("p",{className:"mb-6 text-base leading-6 text-gray-600",children:["After you add ",t.name," as a friend, you will be able to view each other's skills and progress."]}),e.jsx("div",{className:"mx-auto w-full duration-500 sm:max-w-md",children:e.jsxs("div",{className:"flex w-full flex-col items-center gap-2",children:[t.status==="none"&&e.jsx("button",{disabled:b,onClick:()=>{if(!C)return S();h(t.id).finally(()=>{r.set("")})},type:"button",className:"w-full flex-grow cursor-pointer rounded-lg bg-black px-3 py-2 text-center text-white disabled:cursor-not-allowed disabled:opacity-40",children:b?"You can't add yourself":"Add Friend"}),t.status==="sent"&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border  border-gray-300 px-3 py-2 text-center text-black",children:[e.jsx(j,{additionalClasses:"mr-2 h-4 w-4"}),"Request Sent"]}),!n&&e.jsxs("button",{onClick:()=>{a(!0)},type:"button",className:"flex w-full flex-grow cursor-pointer items-center justify-center rounded-lg border border-red-600 bg-red-600 px-3 py-2 text-center text-white hover:bg-red-700",children:[e.jsx(x,{additionalClasses:"mr-2 h-[19px] w-[19px]"}),"Withdraw Request"]}),n&&e.jsxs("span",{className:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border border-red-600 px-3 py-2.5 text-center text-sm text-red-600",children:["Are you sure?"," ",e.jsx("button",{className:"ml-2 text-red-700 underline",onClick:()=>{g(t.id,"Friend request withdrawn").finally(()=>{r.set("")})},children:"Yes"})," ",e.jsx("button",{onClick:()=>{a(!1)},className:"ml-2 text-red-600 underline",children:"No"})]})]}),t.status==="accepted"&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border  border-gray-300 px-3 py-2 text-center text-black",children:[e.jsx(q,{additionalClasses:"mr-2 h-5 w-5"}),"You are friends"]}),!n&&e.jsxs("button",{onClick:()=>{a(!0)},type:"button",className:"flex w-full flex-grow cursor-pointer items-center justify-center rounded-lg border border-red-600 bg-red-600 px-3 py-2 text-center text-white hover:bg-red-700",children:[e.jsx(x,{additionalClasses:"mr-2 h-[19px] w-[19px]"}),"Remove Friend"]}),n&&e.jsxs("span",{className:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border border-red-600 px-3 py-2.5 text-center text-sm text-red-600",children:["Are you sure?"," ",e.jsx("button",{className:"ml-2 text-red-700 underline",onClick:()=>{g(t.id,"Friend removed").finally(()=>{r.set("")})},children:"Yes"})," ",e.jsx("button",{onClick:()=>{a(!1)},className:"ml-2 text-red-600 underline",children:"No"})]})]}),t.status==="rejected"&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-center text-black",children:[e.jsx(x,{additionalClasses:"mr-2 h-4 w-4"}),"Request Rejected"]}),e.jsxs("span",{className:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border border-red-600 px-3 py-2.5 text-center text-sm text-red-600",children:["Changed your mind?"," ",e.jsx("button",{className:"ml-2 text-red-700 underline",onClick:()=>{h(t.id).finally(()=>{r.set("")})},children:"Click here to Accept"})]})]}),t.status==="got_rejected"&&e.jsx(e.Fragment,{children:e.jsxs("span",{className:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border border-red-500 px-3 py-2 text-center text-red-500",children:[e.jsx(P,{additionalClasses:"mr-2 h-4 w-4"}),"Request Rejected"]})}),t.status==="received"&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>{h(t.id).finally(()=>{r.set("")})},className:"flex w-full flex-grow cursor-pointer items-center justify-center rounded-lg border  border-gray-800 bg-gray-800 px-3 py-2 text-center text-white hover:bg-black",children:[e.jsx(j,{additionalClasses:"mr-2 h-4 w-4"}),"Accept Request"]}),!n&&e.jsxs("button",{onClick:()=>{a(!0)},type:"button",className:"flex w-full flex-grow cursor-pointer items-center justify-center rounded-lg border border-red-600 bg-white px-3 py-2 text-center text-red-600 hover:bg-red-100",children:[e.jsx(x,{additionalClasses:"mr-2 h-[19px] w-[19px]"}),"Reject Request"]}),n&&e.jsxs("span",{className:"flex w-full flex-grow cursor-default items-center justify-center rounded-lg border border-red-600 px-3 py-2.5 text-center text-sm text-red-600",children:["Are you sure?"," ",e.jsx("button",{className:"ml-2 text-red-700 underline",onClick:()=>{g(t.id,"Friend request rejected").finally(()=>{r.set("")})},children:"Yes"})," ",e.jsx("button",{onClick:()=>{a(!1)},className:"ml-2 text-red-600 underline",children:"No"})]})]})]})}),f&&e.jsx("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:f})]})}export{V as Befriend};