import{j as e}from"./jsx-runtime.6940b965.js";import{r}from"./index.070054a4.js";import{h as y,a as N}from"./http.3e3d4bea.js";import{p as j}from"./page.2efb91d4.js";import"./jwt.5556697d.js";import"./index.4b590221.js";function F(){const[n,x]=r.useState(""),[c,u]=r.useState(""),[l,m]=r.useState(""),[d,p]=r.useState(""),[w,a]=r.useState(""),[f,g]=r.useState(""),[h,t]=r.useState(!0),b=async s=>{if(s.preventDefault(),t(!0),a(""),g(""),l!==d){a("Passwords do not match"),t(!1);return}const{response:i,error:o}=await y("https://api.roadmap.sh/v1-update-password",{oldPassword:n==="email"?c:"social-auth",password:l,confirmPassword:d});if(o){a(o.message||"Something went wrong"),t(!1);return}a(""),u(""),m(""),p(""),g("Password updated successfully"),t(!1)},P=async()=>{t(!0);const{error:s,response:i}=await N("https://api.roadmap.sh/v1-me");if(s||!i){t(!1),a(s?.message||"Something went wrong");return}const{authProvider:o}=i;x(o),t(!1)};return r.useEffect(()=>{P().finally(()=>{j.set("")})},[]),e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"mb-8 hidden md:block",children:[e.jsx("h2",{className:"text-3xl font-bold sm:text-4xl",children:"Password"}),e.jsx("p",{className:"mt-2 text-gray-400",children:"Use the form below to update your password."})]}),e.jsxs("div",{className:"space-y-4",children:[n==="email"&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{htmlFor:"current-password",className:"text-sm leading-none text-slate-500",children:"Current Password"}),e.jsx("input",{disabled:n!=="email",type:"password",name:"current-password",id:"current-password",autoComplete:"current-password",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-100",required:!0,minLength:6,placeholder:"Current password",value:c,onInput:s=>u(s.target.value)})]}),e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{htmlFor:"new-password",className:"text-sm leading-none text-slate-500",children:"New Password"}),e.jsx("input",{type:"password",name:"new-password",id:"new-password",autoComplete:"new-password",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,minLength:6,placeholder:"New password",value:l,onInput:s=>m(s.target.value)})]}),e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{htmlFor:"new-password-confirmation",className:"text-sm leading-none text-slate-500",children:"Confirm New Password"}),e.jsx("input",{type:"password",name:"new-password-confirmation",id:"new-password-confirmation",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",autoComplete:"new-password",required:!0,minLength:6,placeholder:"Confirm New Password",value:d,onInput:s=>p(s.target.value)})]}),w&&e.jsx("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:w}),f&&e.jsx("p",{className:"mt-2 rounded-lg bg-green-100 p-2 text-green-700",children:f}),e.jsx("button",{type:"submit",disabled:h,className:"inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",children:h?"Please wait...":"Update Password"})]})]})}export{F as default};