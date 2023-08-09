"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9536],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const o={title:"Certificate installation in a Secure folder",sidebar_position:13},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/secure-folder",id:"adguard-for-android/solving-problems/secure-folder",title:"Certificate installation in a Secure folder",description:"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-android/solving-problems/secure-folder.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/secure-folder",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/secure-folder",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/secure-folder.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Certificate installation in a Secure folder",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u0421ertificate installation issues on devices with Android 11+",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/manual-certificate"},next:{title:"Moving CA certificate to System store on rooted devices",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/https-certificate-for-rooted"}},s={},d=[],c={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,n.kt)("p",null,"If you install AdGuard to ",(0,n.kt)("a",{parentName:"p",href:"https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/"},"the ",(0,n.kt)("em",{parentName:"a"},"Secure folder")," on your Android")," (this applies mainly to Samsung devices), you may face some difficulties when installing the HTTPS certificate. The thing is, the ",(0,n.kt)("em",{parentName:"p"},"Secure folder")," has its own space where the certificates are stored. However, if you do everything according to the regular certificate installation instructions (",(0,n.kt)("a",{parentName:"p",href:"../../overview#https-filtering"},"described here"),"), the certificate will be installed into the main memory and will play no role for your ad blocker in the ",(0,n.kt)("em",{parentName:"p"},"Secure folder"),". To solve this problem and install the certificate for your AdGuard for Android into the ",(0,n.kt)("em",{parentName:"p"},"Secure folder's")," storage, please follow these instructions instead:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"After installing the app and connecting the local VPN, tap ",(0,n.kt)("strong",{parentName:"li"},"ENABLE")," next to the ",(0,n.kt)("em",{parentName:"li"},"HTTPS filtering is off")," message."),(0,n.kt)("li",{parentName:"ol"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Next")," \u2192 ",(0,n.kt)("strong",{parentName:"li"},"Next")," \u2192 ",(0,n.kt)("strong",{parentName:"li"},"Save it now")," \u2192 ",(0,n.kt)("strong",{parentName:"li"},"Save certificate"),"."),(0,n.kt)("li",{parentName:"ol"},"Save the certificate (at this stage, you can rename it to make it easier to locate it later, which you will need to do)."),(0,n.kt)("li",{parentName:"ol"},"After the ",(0,n.kt)("em",{parentName:"li"},"Installation instructions")," popup appears, ",(0,n.kt)("strong",{parentName:"li"},"DO NOT")," tap ",(0,n.kt)("strong",{parentName:"li"},"Open Settings"),"."),(0,n.kt)("li",{parentName:"ol"},"Minimize the app and go to the ",(0,n.kt)("em",{parentName:"li"},"Secure folder"),"."),(0,n.kt)("li",{parentName:"ol"},"Tap the three-dot menu and go to ",(0,n.kt)("strong",{parentName:"li"},"Settings")," \u2192\xa0",(0,n.kt)("strong",{parentName:"li"},"Other security settings"),"."),(0,n.kt)("li",{parentName:"ol"},"Tap ",(0,n.kt)("strong",{parentName:"li"},"Security certificates")," \u2192 ",(0,n.kt)("strong",{parentName:"li"},"Install from device storage")," \u2192 ",(0,n.kt)("strong",{parentName:"li"},"CA certificate")," \u2192 ",(0,n.kt)("strong",{parentName:"li"},"Install anyway")),(0,n.kt)("li",{parentName:"ol"},"Confirm installation with your graphic key/password/fingerprint."),(0,n.kt)("li",{parentName:"ol"},"Find and select the previously saved certificate, then tap ",(0,n.kt)("strong",{parentName:"li"},"Done"),"."),(0,n.kt)("li",{parentName:"ol"},"Return to the AdGuard app and navigate back to the main screen. You may have to swipe and restart the app to get rid of the ",(0,n.kt)("em",{parentName:"li"},"HTTPS filtering is off")," message."),(0,n.kt)("li",{parentName:"ol"},"Done! The certificate has been installed.")))}p.isMDXComponent=!0}}]);