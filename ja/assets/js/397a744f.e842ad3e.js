"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8085],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(4137));const s={title:"\u30e6\u30fc\u30b6\u30fc\u30b9\u30af\u30ea\u30d7\u30c8",sidebar_position:5},o=void 0,i={unversionedId:"general/userscripts",id:"general/userscripts",title:"\u30e6\u30fc\u30b6\u30fc\u30b9\u30af\u30ea\u30d7\u30c8",description:'Userscripts (we also call them "extensions") are, de-facto, mini-programs written in JavaScript. They modify or extend the functionality of one or more websites. Many AdGuard users may be already familiar with such userscripts as AdGuard Assistant, Popup Blocker, and AdGuard Extra.',source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/general/userscripts.md",sourceDirName:"general",slug:"/general/userscripts",permalink:"/KnowledgeBase/ja/general/userscripts",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/userscripts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u30e6\u30fc\u30b6\u30fc\u30b9\u30af\u30ea\u30d7\u30c8",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9",permalink:"/KnowledgeBase/ja/general/stealth-mode"},next:{title:"How to register",permalink:"/KnowledgeBase/ja/general/account/register"}},l={},p=[{value:"Supported apps",id:"supported-apps",level:3},{value:"Recommended AdGuard scripts",id:"recommended-adguard-scripts",level:3},{value:"Where can you get more userscripts?",id:"more-userscripts",level:2},{value:"Stylish (userstyles.org)",id:"stylish-userstylesorg",level:3},{value:"Greasy Fork",id:"greasy-fork",level:3},{value:"OpenUserJS.org",id:"openuserjsorg",level:3},{value:"Community",id:"community",level:3},{value:"Development",id:"development",level:2},{value:"Request License",id:"request-license",level:3},{value:"Compatibility",id:"compatibility",level:3},{value:"Metadata block",id:"metadata-block",level:4},{value:"Supported properties",id:"supported-properties",level:5},{value:"Unsupported properties",id:"unsupported-properties",level:5},{value:"Supported GM functions",id:"supported-gm-functions",level:4},{value:"Values",id:"values",level:5},{value:"Example",id:"example",level:3}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Userscripts (we also call them "extensions") are, de-facto, mini-programs written in JavaScript. They modify or extend the functionality of one or more websites. Many AdGuard users may be already familiar with such userscripts as AdGuard Assistant, Popup Blocker, and AdGuard Extra.'),(0,a.kt)("h3",{id:"supported-apps"},"Supported apps"),(0,a.kt)("p",null,"AdGuard can significantly broaden website functionality by acting as a userscript manager. You can add your custom scripts or manage the existing ones in our three products: ",(0,a.kt)("a",{parentName:"p",href:"/adguard-for-windows/overview"},"AdGuard for Windows"),", ",(0,a.kt)("a",{parentName:"p",href:"/adguard-for-android/overview"},"AdGuard for Android")," and ",(0,a.kt)("a",{parentName:"p",href:"/adguard-for-mac/overview"},"AdGuard for Mac"),"."),(0,a.kt)("h3",{id:"recommended-adguard-scripts"},"Recommended AdGuard scripts"),(0,a.kt)("p",null,"These userscripts come directly from the AdGuard developers, and we can guarantee that they are effective and safe. Remember: whenever you download a userscript from an unknown source, you expose yourself to risk, as some scripts may be harmful to your computer. Get new scripts only from the sources you trust 100%. Furthermore, here are ",(0,a.kt)("a",{parentName:"p",href:"#more-userscripts"},"some examples")," of popular sites with scripts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AdGuard Extra"),". An extension that blocks advertising in difficult cases when the usual filter-based approach is not enough.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AdGuard Popup Blocker"),". The name speaks for itself: it blocks pop-ups \u2014 one of the most annoying types of ads on web pages.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AdGuard Assistant")," (legacy version). This custom extension is designed to control filtering directly from the browser page (manual blocking, exclusion of the site, etc.)."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This version of Assistant is legacy and there is no point in using it on new systems, since it has been replaced with the full-fledged ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-assistant/overview.html"},"Browser Assistant"),". But legacy Assistant might be of help if there is no Browser Assistant extension for your browser.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Disable AMP"),". A script, pre-installed only in AdGuard for Android, that disables AMP (Accelerated Mobile Pages) on the Google search results page.")),(0,a.kt)("h2",{id:"more-userscripts"},"Where can you get more userscripts?"),(0,a.kt)("p",null,"As userscripts are created mainly by enthusiasts, you should be cautious when installing them. Yet, there is a great variety of interesting scripts that can really make using some websites more convenient."),(0,a.kt)("p",null,"Here we will describe some of the most popular userscript catalogs."),(0,a.kt)("h3",{id:"stylish-userstylesorg"},"Stylish (userstyles.org)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://userstyles.org/"},"Userstyles.org")," is a catalog of user styles, but it allows you to load them as userscripts. Thus, any user style can be installed via AdGuard. Be careful if you decide to install an unpopular script \u2014 there's a risk it might be harmful."),(0,a.kt)("h3",{id:"greasy-fork"},"Greasy Fork"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://greasyfork.org/"},"Greasy Fork")," is a userscript catalog by Stylish creators. Unlike the above-mentioned userstyles.org, the scripts in this catalog undergo moderation, so their credibility is much higher."),(0,a.kt)("h3",{id:"openuserjsorg"},"OpenUserJS.org"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openuserjs.org/"},"OpenUserJS.org")," is an open source userscript catalog written in nodeJS. It doesn't have moderation so stay alert to any suspicious scripts."),(0,a.kt)("h3",{id:"community"},"Community"),(0,a.kt)("p",null,"If you like the idea of personifying your browser with the help of userscripts, and you have any questions, you can ask them on one of these websites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/userscripts"},"Stackoverflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webchat.freenode.net/#greasemonkey"},"FreeNode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/userscripts/"},"Reddit"))),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("h3",{id:"request-license"},"Request License"),(0,a.kt)("p",null,"If you are developing your own custom script and want to test how it works with AdGuard, request a beta-license key for the app."),(0,a.kt)("p",null,"To get it, please send an email to ",(0,a.kt)("a",{parentName:"p",href:"mailto:devteam@adguard.com"},"devteam@adguard.com")," with the following information:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Subject:")," Userscript author license request"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Body:")," Please tell us about the userscripts you are working on."),(0,a.kt)("p",null,"Here is a ",(0,a.kt)("a",{parentName:"p",href:"mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK"},"mailto link"),"."),(0,a.kt)("h3",{id:"compatibility"},"Compatibility"),(0,a.kt)("h4",{id:"metadata-block"},"Metadata block"),(0,a.kt)("h5",{id:"supported-properties"},"Supported properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@name\n@namespace\n@description\n@version\n@match\n@include\n@exclude\n@grant\n@connect\n@require\n@resource\n@downloadURL\n@updateURL\n@supportURL\n@homepageURL\n@homepage\n@website\n@source\n@run-at\n@noframes\n@icon\n@iconURL\n@defaulticon\n@icon64\n@icon64URL\n")),(0,a.kt)("h5",{id:"unsupported-properties"},"Unsupported properties"),(0,a.kt)("p",null,"These properties will be simply ignored by Adguard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@unwrap\n")),(0,a.kt)("h4",{id:"supported-gm-functions"},"Supported GM functions"),(0,a.kt)("p",null,"AdGuard supports both old GM","_"," functions and new GM4 API that use GM object."),(0,a.kt)("h5",{id:"values"},"Values"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All listed old Greasemonkey functions are deprecated but still supported.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GM.info / GM_info\nGM.setValue / GM_setValue\nGM.getValue / GM_getValue\nGM.listValues / GM_listValues\nGM.deleteValue / GM_deleteValue\nGM.getResourceUrl / GM_getResourceURL\nGM.setClipboard / GM_setClipboard\nGM.xmlHttpRequest / GM_xmlhttpRequest\nGM.openInTab / GM_openInTab\nGM.notification\nunsafeWindow\nGM_getResourceText\nGM_addStyle\nGM_log\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wiki.greasespot.net/GM.info"},"Here")," you can find more information about Greasemonkey API."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// ==UserScript==\n// @name            Name as shown to the user when locale is english or unknown\n// @name:ru         Name as shown to the user when locale is russian\n// @description     Description as shown to the user when locale is english or unknown\n// @description:ru  Description as shown to the user when locale is russian\n// @icon            https://myhomepage.com/myuserscript.png\n// @version         1.0.0.0\n// @downloadURL     https://dl.myhomepage.org/myuserscript.user.js\n// @updateURL       https://dl.myhomepage.org/myuserscript.meta.js\n// @homepageURL     https://myhomepage.com/myuserscript\n// @include         *\n// @exclude         *://website.com/*\n// @resource        https://myhomepage.com/myuserscript.css\n// @require         https://myhomepage.com/mylibrary.js\n// @grant           property:settings\n// @grant           GM_getValue\n// @grant           GM_setValue\n// @grant           GM_deleteValue\n// @grant           GM_listValues\n// @grant           GM_getResourceText\n// @grant           GM_getResourceURL\n// @grant           GM_addStyle\n// @grant           GM_log\n// @grant           GM_setClipboard\n// @grant           GM_xmlhttpRequest\n// @grant           unsafeWindow\n// @grant           GM_info\n// @grant           GM_openInTab\n// @grant           GM_registerMenuCommand\n// @run-at document-start\n// ==/UserScript==\n!function(){(\n    console.log("I am loaded!");\n)}();\n')))}d.isMDXComponent=!0}}]);