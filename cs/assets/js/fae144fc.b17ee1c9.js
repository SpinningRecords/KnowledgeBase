"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[88],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(4137));const a={title:"Ovlada\u010d WFP",sidebar_position:1},i=void 0,l={unversionedId:"adguard-for-windows/solving-problems/wfp-driver",id:"adguard-for-windows/solving-problems/wfp-driver",title:"Ovlada\u010d WFP",description:"Tento \u010dl\xe1nek popisuje AdGuard pro Windows, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, st\xe1hn\u011bte si aplikaci AdGuard",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/wfp-driver.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/wfp-driver",permalink:"/KnowledgeBase/cs/adguard-for-windows/solving-problems/wfp-driver",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/wfp-driver.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Ovlada\u010d WFP",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Asistent prohl\xed\u017ee\u010de",permalink:"/KnowledgeBase/cs/adguard-for-windows/browser-assistant"},next:{title:"Probl\xe9my souvisej\xedc\xed s certifik\xe1tem",permalink:"/KnowledgeBase/cs/adguard-for-windows/solving-problems/connection-not-trusted"}},s={},d=[],p={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro Windows, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"st\xe1hn\u011bte si aplikaci AdGuard"))),(0,o.kt)("p",null,"K filtrov\xe1n\xed s\xed\u0165ov\xe9ho provozu pou\u017e\xedv\xe1 AdGuard s\xed\u0165ov\xfd ovlada\u010d. Existuj\xed dv\u011b mo\u017enosti: ovlada\u010d TDI a ovlada\u010d WFP. A\u010dkoli je ovlada\u010d WFP obecn\u011b vhodn\u011bj\u0161\xed a je ve v\xfdchoz\xedm nastaven\xed povolen pro v\u0161echny nov\u011bj\u0161\xed verze opera\u010dn\xedho syst\xe9mu Windows (Windows 8 a nov\u011bj\u0161\xed), m\u016f\u017ee potenci\xe1ln\u011b zp\u016fsobovat probl\xe9my s kompatibilitou, zejm\xe9na s n\u011bkter\xfdmi antiviry. Tyto probl\xe9my a n\xe1sledn\xe9 chyby mohou b\xfdt v ka\u017ed\xe9m p\u0159\xedpad\u011b velmi odli\u0161n\xe9."),(0,o.kt)("p",null,"Pokud naraz\xedte na probl\xe9m, u kter\xe9ho m\xe1te podez\u0159en\xed, \u017ee by mohl b\xfdt zp\u016fsoben t\xedmto probl\xe9mem, m\u016f\u017eete v\u017edy p\u0159ej\xedt na star\u0161\xed, ale stabiln\u011bj\u0161\xed s\xed\u0165ov\xfd ovlada\u010d TDI. K tomu je t\u0159eba:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte do ",(0,o.kt)("em",{parentName:"p"},"Nastaven\xed \u2192 S\xed\u0165"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deaktivujte ovlada\u010d WFP, jak je to zobrazeno na tomto obr\xe1zku:"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png",alt:"WFP driver *border"})))}u.isMDXComponent=!0}}]);