"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7576],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(4137));const o={title:"Installation problems solving",sidebar_position:5},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/installation-issues",id:"adguard-for-mac/solving-problems/installation-issues",title:"Installation problems solving",description:"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/installation-issues.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/installation-issues",permalink:"/KnowledgeBase/zh-TW/adguard-for-mac/solving-problems/installation-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/installation-issues.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Installation problems solving",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Compatibility issues with different macOS versions",permalink:"/KnowledgeBase/zh-TW/adguard-for-mac/solving-problems/big-sur-issues"},next:{title:"Launch issues on macOS",permalink:"/KnowledgeBase/zh-TW/adguard-for-mac/solving-problems/launch-issues"}},s={},c=[{value:"&quot;Installation failed&quot; error in macOS Catalina",id:"installation-failed-error-in-macos-catalina",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,n.kt)("h2",{id:"installation-failed-error-in-macos-catalina"},'"Installation failed" error in macOS Catalina'),(0,n.kt)("p",null,"During the installation you can face an error like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg",alt:"Installation error screen"})),(0,n.kt)("p",null,"Follow this instruction to solve the problem:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Restart your Mac"),(0,n.kt)("li",{parentName:"ol"},"As your Mac restarts, press and hold down the ",(0,n.kt)("em",{parentName:"li"},"Command(\u2318) + R")," keys immediately upon hearing the startup chime. Hold the keys until the Apple logo appears to get the computer into Recovery mode."),(0,n.kt)("li",{parentName:"ol"},"From the top bar select ",(0,n.kt)("em",{parentName:"li"},"Utilities")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"Terminal"),", and execute this command: ",(0,n.kt)("inlineCode",{parentName:"li"},"csrutil disable")),(0,n.kt)("li",{parentName:"ol"},"Restart the Mac and log into Administrator's profile"),(0,n.kt)("li",{parentName:"ol"},"Open the Finder window and select from the top bar ",(0,n.kt)("em",{parentName:"li"},"Go")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"Go to Folder")," and type ",(0,n.kt)("inlineCode",{parentName:"li"},"~/private/")),(0,n.kt)("li",{parentName:"ol"},"Create a folder named ",(0,n.kt)("em",{parentName:"li"},"tmp")," and type in your password"),(0,n.kt)("li",{parentName:"ol"},"Launch AdGuard installation")),(0,n.kt)("p",null,"As the installation is completed, restart your Mac in Recovery mode using the instruction above and execute ",(0,n.kt)("inlineCode",{parentName:"p"},"csrutil enable")," command in Terminal to enable system protection."))}d.isMDXComponent=!0}}]);