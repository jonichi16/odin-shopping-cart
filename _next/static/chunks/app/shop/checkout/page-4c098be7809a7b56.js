(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{1790:function(e,r,t){Promise.resolve().then(t.bind(t,2068))},2068:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var s=t(9268);t(6006);var n=t(8783);let l=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),o=e=>{let r=e.map(e=>e.price*e.qty).reduce((e,r)=>e+r,0);return l(r)},c=e=>{let{item:r}=e;return(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("h3",{children:r.name}),(0,s.jsx)("p",{className:"text-red-800",children:l(r.price*r.qty)})]})};var a=t(5846),u=t.n(a);let i=()=>(0,s.jsx)(u(),{href:"/shop",className:"bg-blue-800 text-slate-50 py-2 px-4 uppercase font-bold rounded hover:opacity-90",children:"Shop Now"}),d=()=>(0,s.jsxs)("div",{className:"flex-1 flex flex-col justify-center items-center gap-y-5",children:[(0,s.jsx)("h2",{className:"text-center font-bold text-slate-500",children:"Your cart is empty"}),(0,s.jsx)(i,{})]}),f=()=>{let{cart:e}=(0,n.useCart)();return 0===e.length?(0,s.jsx)(d,{}):(0,s.jsxs)("div",{className:"bg-blue-800 bg-opacity-20 w-full border-2 border-blue-800 rounded-md py-4 px-2",children:[(0,s.jsx)("ul",{children:e.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)(c,{item:e})},e.id))}),(0,s.jsxs)("p",{className:"text-end uppercase font-bold border-t-2 border-slate-900 pt-2",children:["Total: ",(0,s.jsx)("span",{className:"text-red-800 ml-3",children:o(e)})]})]})};var p=f},8783:function(e,r,t){"use strict";t.r(r),t.d(r,{useCart:function(){return o}});var s=t(9268),n=t(6006);let l=(0,n.createContext)(),o=()=>(0,n.useContext)(l),c=e=>{let{children:r}=e,[t,o]=(0,n.useState)([]);return(0,s.jsx)(l.Provider,{value:{cart:t,setCart:o},children:r})};r.default=c},3177:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=t(6006),n=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var s,a={},u=null,i=null;for(s in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(i=r.ref),r)l.call(r,s)&&!c.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===a[s]&&(a[s]=r[s]);return{$$typeof:n,type:e,key:u,ref:i,props:a,_owner:o.current}}r.jsx=a,r.jsxs=a},9268:function(e,r,t){"use strict";e.exports=t(3177)},5846:function(e,r,t){e.exports=t(414)}},function(e){e.O(0,[414,667,139,744],function(){return e(e.s=1790)}),_N_E=e.O()}]);