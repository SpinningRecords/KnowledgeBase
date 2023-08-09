"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8372],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(4137));const o={title:"How to use Samsung Pay with AdGuard in South Korea",sidebar_position:17},i=void 0,s={unversionedId:"adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",id:"adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",title:"How to use Samsung Pay with AdGuard in South Korea",description:"Cet article parle de AdGuard pour Android, un bloqueur de contenus multifonctionnel qui prot\xe8ge votre appareil au niveau du syst\xe8me. Pour voir comment cela fonctionne, t\xe9l\xe9chargez l'application AdGuard",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"How to use Samsung Pay with AdGuard in South Korea",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Known compatibility issues with Android apps",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/compatibility-issues"},next:{title:"Features overview",permalink:"/KnowledgeBase/fr/adguard-for-ios/overview"}},u={},d=[],l={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Cet article parle de AdGuard pour Android, un bloqueur de contenus multifonctionnel qui prot\xe8ge votre appareil au niveau du syst\xe8me. Pour voir comment cela fonctionne, ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"t\xe9l\xe9chargez l'application AdGuard"))),(0,a.kt)("p",null,"A number of users have encountered an issue where Samsung Pay does not work while AdGuard is running. This issue occurs almost exclusively on devices registered in South Korea."),(0,a.kt)("p",null,"What is causing this issue? Sometimes Samsung Pay does not work on devices with VPN services running, and AdGuard is one of these apps. By default, AdGuard uses Local VPN to filter traffic. As a consequence, users had to disable AdGuard when making payments with Samsung Pay. This can now be avoided with the new ",(0,a.kt)("strong",{parentName:"p"},"Detect Samsung Pay")," feature. When this option is enabled, the AdGuard app is paused whenever the user opens the Samsung Pay app and resumes when the app is closed."),(0,a.kt)("p",null,"To enable ",(0,a.kt)("strong",{parentName:"p"},"Detect Samsung Pay"),", follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,a.kt)("strong",{parentName:"p"},"General")," \u2192 ",(0,a.kt)("strong",{parentName:"p"},"Advanced"),"\u2192 ",(0,a.kt)("strong",{parentName:"p"},"Low-level settings"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Scroll to ",(0,a.kt)("strong",{parentName:"p"},"Detect Samsung Pay")," and move the slider to the right")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Tap ",(0,a.kt)("strong",{parentName:"p"},"Allow permissions")," and give AdGuard permission to collect your data"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We don't collect any personal data, we just need statistics about how Samsung Pay is working to make the ",(0,a.kt)("strong",{parentName:"p"},"Detect Samsung Pay")," feature work.")),(0,a.kt)("p",null,"Once you enable this feature, AdGuard will send you notifications as shown in the screenshot."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/en.gif",alt:"samsungpay *mobile"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This feature will work only if the Local VPN filtering mode is chosen in AdGuard settings. If another mode is being used, Samsung Pay will function without any interruptions.")))}p.isMDXComponent=!0}}]);