import c from"./NavBarItemRow-27bae768.mjs";import{S as l}from"./index-5b832ac2.mjs";import{_ as i,d,c as m,a as t,b as r,J as _,o as p}from"./bootstrap-e5702bc3.mjs";const b=d({props:{searchButtonClicked:null,hideItemsWhenSM:{type:Boolean}},setup(s,{expose:a}){a();const e={SearchIcon:l};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),f={class:"w-5 mx-auto lg:mx-0"},x=r("p",{class:"hidden lg:block my-auto"},"\u691C\u7D22",-1);function h(s,a,e,n,B,C){const o=c;return p(),m("div",{class:_([e.hideItemsWhenSM?"hidden":"flex","sm:flex justify-around items-center space-x-6 lg:mx-8 xl:mx-12"])},[t(o,{title:"\u6982\u8981",to:"/about"}),t(o,{title:"\u4F5C\u54C1",to:"/about"}),t(o,{title:"\u8A18\u4E8B",to:"/about"}),t(o,{title:"\u5B9F\u7E3E",to:"/about"}),t(o,{title:"\u6587\u5316\u796D",to:"/about"}),r("button",{class:"w-8 h-8 lg:w-24 lg:px-2 bg-stone-100 text-gray-600 hover:shadow-sm rounded-full border-2 border-transparent hover:border-primary flex justify-between items-center",onClick:a[0]||(a[0]=(...u)=>e.searchButtonClicked&&e.searchButtonClicked(...u))},[r("div",f,[t(n.SearchIcon)]),x])],2)}var w=i(b,[["render",h]]);export{w as default};