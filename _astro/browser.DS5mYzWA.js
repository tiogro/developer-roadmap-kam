function a(){if(typeof window>"u")return{};const n=new URLSearchParams(window.location.search),e={};for(const[r,t]of n.entries())e[r]=t;return e}function o(n){if(typeof window>"u")return;const e=new URL(window.location.href);e.searchParams.has(n)&&(e.searchParams.delete(n),window.history.pushState(null,"",e.toString()))}function s(n){if(typeof window>"u")return;const e=new URL(window.location.href);for(const[r,t]of Object.entries(n))e.searchParams.delete(r),e.searchParams.set(r,t);window.history.pushState(null,"",e.toString())}export{o as d,a as g,s};