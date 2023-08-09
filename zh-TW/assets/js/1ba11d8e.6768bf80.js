"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1578],{4137:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(o),m=n,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return o?r.createElement(g,l(l({ref:t},p),{},{components:o})):r.createElement(g,l({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=o[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9889:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=o(7462),n=(o(7294),o(4137));const a={title:"How to collect AdGuard installation logs",sidebar_position:4},l=void 0,i={unversionedId:"adguard-for-windows/solving-problems/installation-logs",id:"adguard-for-windows/solving-problems/installation-logs",title:"How to collect AdGuard installation logs",description:"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/installation-logs.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/installation-logs",permalink:"/KnowledgeBase/zh-TW/adguard-for-windows/solving-problems/installation-logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/installation-logs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to collect AdGuard installation logs",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to collect AdGuard logs",permalink:"/KnowledgeBase/zh-TW/adguard-for-windows/solving-problems/adguard-logs"},next:{title:"How to collect Windows system logs",permalink:"/KnowledgeBase/zh-TW/adguard-for-windows/solving-problems/system-logs"}},s={},d=[],p={toc:d};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,n.kt)("p",null,"If any problems occur during the installation of AdGuard, the support team might ask you to collect and send them AdGuard installation logs. In this case you need to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("em",{parentName:"p"},"Run")," command in Start menu or press ",(0,n.kt)("em",{parentName:"p"},"Win + R")," on the keyboard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Type in ",(0,n.kt)("em",{parentName:"p"},"%tmp%")," and click ",(0,n.kt)("em",{parentName:"p"},"OK"),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/install-logs-1.png",alt:"Open temp folder *mobile"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"In the opened folder select all files starting with ",(0,n.kt)("inlineCode",{parentName:"li"},"Adguard")," and add them to archive (using WinRAR or any other archiving software).")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/install-logs-2.png",alt:"AdGuard installation log files *border"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Send this archive to AdGuard tech support at ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com")),".")))}c.isMDXComponent=!0}}]);