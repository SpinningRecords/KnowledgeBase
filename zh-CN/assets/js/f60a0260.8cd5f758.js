"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[23],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),g=n,c=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return r?a.createElement(c,l(l({ref:t},s),{},{components:r})):a.createElement(c,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const o={title:"\u53d7\u9650\u6a21\u5f0f\u5bfc\u81f4\u7684\u4e00\u4e9b\u95ee\u9898",sidebar_position:10},l=void 0,i={unversionedId:"adguard-for-android/solving-problems/restricted-profile",id:"adguard-for-android/solving-problems/restricted-profile",title:"\u53d7\u9650\u6a21\u5f0f\u5bfc\u81f4\u7684\u4e00\u4e9b\u95ee\u9898",description:"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/restricted-profile.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/restricted-profile",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/restricted-profile",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/restricted-profile.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u53d7\u9650\u6a21\u5f0f\u5bfc\u81f4\u7684\u4e00\u4e9b\u95ee\u9898",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"How to protect AdGuard from being disabled by the system",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/background-work"},next:{title:"\u624b\u52a8\u5c06\u5b89\u5168\u8bc1\u4e66\u5b89\u88c5\u5230\u706b\u72d0\u6d4f\u89c8\u5668\u4e2d",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/firefox-certificates"}},p={},d=[{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:2},{value:"\u65b9\u6848 1\uff1a\u5141\u8bb8 AdGuard \u4f7f\u7528 ADB",id:"\u65b9\u6848-1\u5141\u8bb8-adguard-\u4f7f\u7528-adb",level:3},{value:"\u65b9\u6848 2\uff1a\u79fb\u9664<strong>\u53d7\u9650\u7528\u6237\u5e10\u6237</strong>",id:"\u65b9\u6848-2\u79fb\u9664\u53d7\u9650\u7528\u6237\u5e10\u6237",level:3},{value:"\u65b9\u6848 3\uff1a\u4f7f\u7528 AdGuard \u7684\u672c\u5730 HTTP \u4ee3\u7406\u6a21\u5f0f\uff08\u9700\u8981 root \u6743\u9650\uff09",id:"\u65b9\u6848-3\u4f7f\u7528-adguard-\u7684\u672c\u5730-http-\u4ee3\u7406\u6a21\u5f0f\u9700\u8981-root-\u6743\u9650",level:3},{value:"LG \u548c\u4e09\u661f\u8bbe\u5907",id:"lg-\u548c\u4e09\u661f\u8bbe\u5907",level:2},{value:"\u4e09\u661f",id:"\u4e09\u661f",level:3},{value:"LG",id:"lg",level:3}],s={toc:d};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,n.kt)("p",null,"\u62e5\u6709\u5b89\u53537+\u64cd\u4f5c\u7cfb\u7edf\u7684\u624b\u673a\u3001\u7b14\u8bb0\u672c\u6216\u7535\u89c6\u7684\u7528\u6237\u53ef\u80fd\u4f1a\u9047\u5230\u4f7f\u7528",(0,n.kt)("strong",{parentName:"p"},"\u53d7\u9650\u6a21\u5f0f\uff08Restricted Mode\uff09\u7684\u914d\u7f6e\u6587\u4ef6"),"\u5bfc\u81f4\u7684\u95ee\u9898\u3002 \u5982\u60a8\u6709\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\uff0c",(0,n.kt)("strong",{parentName:"p"},"AdGuard")," \u4e0e\u5176\u4ed6\u4f7f\u7528 VPN \u7684\u5e94\u7528\u7a0b\u5e8f\u4e00\u6837\u8fdb\u884c\u9009\u62e9\u6027\u8fc7\u6ee4 VPN \u6d41\u91cf\u65f6\uff0c\u53d7\u5176\u9650\u5236\u3002 \u56e0\u6b64\uff0cAdGuard \u65e0\u6cd5\u4f7f\u7528",(0,n.kt)("strong",{parentName:"p"},"\u672c\u5730 VPN \u6a21\u5f0f"),"\u5f00\u542f\u4fdd\u62a4\u3002 \u9664\u6b64\u4e4b\u5916\uff0c\u5982\u60a8\u5728\u8bbe\u5907\u4e0a\u4f7f\u7528",(0,n.kt)("strong",{parentName:"p"},"\u53cc\u5f00\u5e94\u7528/\u5e94\u7528\u5206\u8eab\u5e10\u6237"),"\u4e5f\u4f1a\u5bfc\u81f4\u76f8\u4f3c\u7684\u95ee\u9898\u3002 \u4ee5\u4e0b\u662f\u60a8\u53ef\u4ee5\u89c4\u907f\u8be5\u95ee\u9898\u7684\u64cd\u4f5c\u3002"),(0,n.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,n.kt)("p",null,"\u89e3\u51b3\u8be5\u95ee\u9898\u6709\u4e09\u79cd\u65b9\u6cd5\uff1a"),(0,n.kt)("h3",{id:"\u65b9\u6848-1\u5141\u8bb8-adguard-\u4f7f\u7528-adb"},"\u65b9\u6848 1\uff1a\u5141\u8bb8 AdGuard \u4f7f\u7528 ADB"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This approach is available starting from ",(0,n.kt)("strong",{parentName:"p"},"AdGuard v3.5 nightly 6"),". \u5982\u60a8\u4ecd\u5728\u4f7f\u7528\u65e7\u7248\u672c\uff0c\u60a8\u53ef\u4ee5",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-android/overview.html"},"\u5728\u6b64\u5904"),"\u4e0b\u8f7d nightly \u7248\u672c\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6fc0\u6d3b",(0,n.kt)("strong",{parentName:"li"},"\u5f00\u53d1\u4eba\u5458\u6a21\u5f0f"),"\u4ee5\u53ca\u542f\u7528 ",(0,n.kt)("strong",{parentName:"li"},"USB \u8c03\u8bd5"),"\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the ",(0,n.kt)("strong",{parentName:"li"},"Settings")," app phone;"),(0,n.kt)("li",{parentName:"ul"},"\u524d\u5f80",(0,n.kt)("strong",{parentName:"li"},"\u7cfb\u7edf"),"\u90e8\u5206\uff08\u8bbe\u7f6e\u4e2d\u6700\u540e\u4e00\u9879\u9009\u9879\uff09\u3002 In this section, find the sub-item ",(0,n.kt)("strong",{parentName:"li"},"About phone"),";"),(0,n.kt)("li",{parentName:"ul"},"Tap the ",(0,n.kt)("strong",{parentName:"li"},"Build number")," line 7 times. \u4e4b\u540e\u60a8\u5c06\u4f1a\u6536\u5230\u901a\u77e5\u8bf4\u660e\u73b0\u5728",(0,n.kt)("strong",{parentName:"li"},"\u60a8\u662f\u5f00\u53d1\u4eba\u5458"),"\uff08\u5982\u9700\u8981\u7684\u8bdd\uff0c\u8f93\u5165\u89e3\u9501\u5bc6\u7801\uff09\uff1b"),(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("strong",{parentName:"li"},"System Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"li"},"Developer Options")," \u2192 Scroll down and enable ",(0,n.kt)("strong",{parentName:"li"},"USB debugging")," \u2192 Confirm debugging is enabled in the window ",(0,n.kt)("strong",{parentName:"li"},"Allow USB debugging")," after reading the warning carefully.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u60a8\u9047\u5230\u4efb\u4f55\u56f0\u96be\u6216\u5176\u4ed6\u95ee\u9898\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"\u5728\u6b64\u5904"),"\u53ef\u67e5\u770b\u5b8c\u6574\u8bf4\u660e\u3002")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.xda-developers.com/install-adb-windows-macos-linux/"},"Install and configure")," adb; On the Windows platform, ",(0,n.kt)("strong",{parentName:"li"},"Samsung")," owners may need to install ",(0,n.kt)("a",{parentName:"li",href:"https://developer.samsung.com/mobile/android-usb-driver.html"},"this utility"),"."),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,n.kt)("strong",{parentName:"li"},"USB \u7535\u7f06"),"\u5c06\u60a8\u7684\u8bbe\u5907\u8fde\u63a5\u81f3\u60a8\u5df2\u5b89\u88c5 ",(0,n.kt)("strong",{parentName:"li"},"ADB")," \u7684\u7535\u8111\u6216\u7b14\u8bb0\u672c\u7b49\u8bbe\u5907\u4e0a;"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u60a8\u7684 PC \u4e0a\u6253\u5f00",(0,n.kt)("strong",{parentName:"li"},"\u547d\u4ee4\u884c"),"\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u60a8\u4f7f\u7528\u7684\u662f ",(0,n.kt)("strong",{parentName:"li"},"Windows"),"\uff0c\u6253\u5f00 ",(0,n.kt)("strong",{parentName:"li"},"Cmd.exe"),"\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u60a8\u4f7f\u7528\u7684\u662f ",(0,n.kt)("strong",{parentName:"li"},"macOS"),"\uff0c\u6253\u5f00 ",(0,n.kt)("strong",{parentName:"li"}," Terminal "),"\uff1b")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u8f93\u5165 ",(0,n.kt)("inlineCode",{parentName:"li"},"adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS")," \u7684\u547d\u4ee4\u5e76\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u56de\u8f66\u952e"),"\u3002")),(0,n.kt)("h3",{id:"\u65b9\u6848-2\u79fb\u9664\u53d7\u9650\u7528\u6237\u5e10\u6237"},"\u65b9\u6848 2\uff1a\u79fb\u9664",(0,n.kt)("strong",{parentName:"h3"},"\u53d7\u9650\u7528\u6237\u5e10\u6237")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/a/answer/6223444?hl=en"},"\u5728\u6b64"),"\u53ef\u4ee5\u67e5\u770b\u5982\u4f55\u5728\u5b89\u5353\u8bbe\u5907\u4e0a\u7ba1\u7406\u7528\u6237\u5e10\u6237\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},":::note")),(0,n.kt)("p",null,"In some cases restricted user accounts are created implicitly and cannot be removed. \u4f8b\u5982\uff0c\u60a8\u5728",(0,n.kt)("strong",{parentName:"p"},"\u5b89\u5353"),"\u6216 ",(0,n.kt)("strong",{parentName:"p"},"LG")," \u8bbe\u5907\u4e0a\u4f7f\u7528\u5e94\u7528\u5206\u8eab\u6216\u53cc\u5f00\u5e94\u7528\u529f\u80fd\u65f6\uff0c\u5c06\u4f1a\u81ea\u52a8\u521b\u5efa\u53d7\u9650\u7528\u6237\u5e10\u6237\u3002 \u60a8\u53ef\u4ee5\u9605\u8bfb\u4ee5\u4e0b\u5185\u5bb9\u4ee5\u67e5\u770b\uff0c\u5728\u4e0a\u9762\u63cf\u8ff0\u7684\u60c5\u51b5\u4e0b\u8be5\u5982\u4f55\u89e3\u51b3\u95ee\u9898\u3002"),(0,n.kt)("p",null,":::"),(0,n.kt)("h3",{id:"\u65b9\u6848-3\u4f7f\u7528-adguard-\u7684\u672c\u5730-http-\u4ee3\u7406\u6a21\u5f0f\u9700\u8981-root-\u6743\u9650"},"\u65b9\u6848 3\uff1a\u4f7f\u7528 AdGuard \u7684\u672c\u5730 HTTP \u4ee3\u7406\u6a21\u5f0f\uff08\u9700\u8981 root \u6743\u9650\uff09"),(0,n.kt)("p",null,"To enable this mode, open ",(0,n.kt)("strong",{parentName:"p"},"AdGuard Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering method")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Local HTTP proxy")),(0,n.kt)("h2",{id:"lg-\u548c\u4e09\u661f\u8bbe\u5907"},"LG \u548c\u4e09\u661f\u8bbe\u5907"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"LG")," \u6216",(0,n.kt)("strong",{parentName:"p"},"\u4e09\u661f"),"\u624b\u673a\u7684\u7528\u6237\u4e5f\u53ef\u80fd\u4f1a\u9047\u5230\u76f8\u540c\u7684\u95ee\u9898\u3002 \u8fd9\u53ef\u80fd\u662f\u7531",(0,n.kt)("strong",{parentName:"p"},"\u53cc\u5f00\u5e94\u7528/\u53cc Messenger \u8d26\u6237"),"\u529f\u80fd\uff08\u5176\u672c\u8d28\u662f\u9690\u5f0f\u521b\u5efa\u4e86\u53d7\u9650\u8d26\u6237\uff09\u5f15\u8d77\u7684\u3002 \u4e3a\u4e86\u89e3\u51b3\u8be5\u95ee\u9898\uff0c\u60a8\u9700\u8981\u7981\u7528\u8be5\u529f\u80fd\u3002"),(0,n.kt)("h3",{id:"\u4e09\u661f"},"\u4e09\u661f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u524d\u5f80",(0,n.kt)("strong",{parentName:"li"},"\u8bbe\u7f6e"),"\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u9ad8\u7ea7"),"\u529f\u80fd\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5411\u4e0b\u79fb\u52a8\uff0c\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u53cc Messenger \u8d26\u6237"),"\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u7981\u7528\u6240\u6709\u5e94\u7528\u4f7f\u7528",(0,n.kt)("strong",{parentName:"li"},"\u5e94\u7528\u5206\u8eab"),"\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u9501\u5b9a\u60a8\u7684\u8bbe\u59075\u5206\u949f\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u89e3\u9501\u5c4f\u5e55\u5e76\u91cd\u65b0\u8bd5\u56fe\u521b\u5efa VPN \u8d26\u53f7\u3002")),(0,n.kt)("h3",{id:"lg"},"LG"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u524d\u5f80",(0,n.kt)("strong",{parentName:"li"},"\u8bbe\u7f6e"),"\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9",(0,n.kt)("strong",{parentName:"li"},"\u5e38\u89c4"),"\u6807\u7b7e\u94ae\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5411\u4e0b\u79fb\u52a8\uff0c\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u53cc\u5f00\u5e94\u7528"),"\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u79fb\u9664\u5e94\u7528\u5206\u8eab\u5217\u8868\u4e2d\u6240\u6709\u7684\u5e94\u7528\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u91cd\u542f\u60a8\u7684\u8bbe\u5907\u3002")))}m.isMDXComponent=!0}}]);