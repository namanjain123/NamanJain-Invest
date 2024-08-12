(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{1838:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/financialperformance",function(){return l(7304)}])},7304:function(e,a,l){"use strict";l.r(a),l.d(a,{__N_SSG:function(){return d},default:function(){return u}});var t=l(5893),r=l(7294),o=l(6495),n=l(3148);n.kL.register(n.uw,n.f$,n.od,n.jn,n.Dx,n.u,n.De);var s=e=>{let{labels:a,portfolioValues:l,benchmarkValues:r}=e;return(0,t.jsx)(o.x1,{data:{labels:a,datasets:[{label:"Portfolio Value",data:l,borderColor:"rgba(75, 192, 192, 1)",backgroundColor:"rgba(75, 192, 192, 0.2)",fill:!1},{label:"Benchmark Value",data:r,borderColor:"rgba(153, 102, 255, 1)",backgroundColor:"rgba(153, 102, 255, 0.2)",fill:!1}]},options:{responsive:!0}})},i=e=>{let{title:a,value:l,change:r,gradientFrom:o,gradientTo:n,icon:s,date:i}=e;return(0,t.jsxs)("div",{className:"flex-1 p-6 bg-gradient-to-br ".concat(o," ").concat(n," text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"),children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-3",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold",children:a}),s&&(0,t.jsx)("div",{className:"text-3xl",children:s})]}),(0,t.jsx)("p",{className:"text-3xl font-semibold mb-2",children:"number"==typeof l?"$".concat(l.toLocaleString()):l}),void 0!==r&&(0,t.jsxs)("p",{className:"text-lg ".concat(r>=0?"text-green-300":"text-red-300"),children:[r>=0?"▲":"▼"," ",Math.abs(r),"%"]}),i&&(0,t.jsxs)("p",{className:"text-sm mt-2",children:["Date: ",i]})]})};function c(e){for(let a=e.length-1;a>=0;a--)if(e[a].length>=3)return e[a];return null}var d=!0,u=e=>{let{financialData:a,xirrData:l}=e,[o,n]=(0,r.useState)([]),[d,u]=(0,r.useState)([]),[p,g]=(0,r.useState)([]),[x,h]=(0,r.useState)(null);(0,r.useEffect)(()=>{if(a){let e=a.slice(1).map(e=>e[0]),l=a.slice(1).map(e=>parseFloat(e[1].replace(/,/g,""))),t=a.slice(1).map(e=>e[2]?parseFloat(e[2].replace(/,/g,"")):null).filter(e=>null!==e);n(e),u(l),g(t),h(c(a))}},[a]);let f=c(a.slice(0,-1)),m=x&&f?((parseFloat(x[1].replace(/,/g,""))-parseFloat(f[1].replace(/,/g,"")))/parseFloat(f[1].replace(/,/g,""))*100).toFixed(2):null,b=x&&f&&x[2]&&f[2]?((parseFloat(x[2].replace(/,/g,""))-parseFloat(f[2].replace(/,/g,"")))/parseFloat(f[2].replace(/,/g,""))*100).toFixed(2):null;return(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold mb-6",children:"Financial Dashboard"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[x&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{title:"Portfolio Value",value:parseFloat(x[1].replace(/,/g,"")),change:null!==m?parseFloat(m):void 0,gradientFrom:"from-blue-600",gradientTo:"to-indigo-700",date:x[0]}),x[2]&&(0,t.jsx)(i,{title:"Benchmark (Nifty 50)",value:parseFloat(x[2].replace(/,/g,"")),change:null!==b?parseFloat(b):void 0,gradientFrom:"from-purple-600",gradientTo:"to-pink-700"})]}),l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{title:"Portfolio XIRR",value:"".concat(parseFloat(l.portfolioXIRR).toFixed(2),"%"),gradientFrom:"from-emerald-500",gradientTo:"to-green-600"}),(0,t.jsx)(i,{title:"Nifty 50 XIRR",value:"".concat(parseFloat(l.nifty50XIRR).toFixed(2),"%"),gradientFrom:"from-teal-500",gradientTo:"to-cyan-600"})]}),(0,t.jsx)("div",{className:"col-span-1 md:col-span-3",children:o.length>0&&d.length>0&&p.length>0?(0,t.jsx)("div",{className:"p-4 bg-white rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl",children:(0,t.jsx)(s,{labels:o,portfolioValues:d,benchmarkValues:p})}):(0,t.jsx)("p",{children:"Loading data..."})})]})]})}}},function(e){e.O(0,[196,853,888,774,179],function(){return e(e.s=1838)}),_N_E=e.O()}]);