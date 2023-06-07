"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8924],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,b=p["".concat(i,".").concat(g)]||p[g]||u[g]||a;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,l[1]=d;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var n=r(7462),o=(r(7294),r(4137));const a={title:"Features overview",sidebar_position:1},l=void 0,d={unversionedId:"adguard-content-blocker/overview",id:"adguard-content-blocker/overview",title:"Features overview",description:"AdGuard has two Android apps it blocks ads, trackers, and annoyances in browsers and apps, uses filters as well as domain-level ad blocking, and supports user rules. AdGuard Content Blocker has a limited functionality.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-content-blocker/overview.md",sourceDirName:"adguard-content-blocker",slug:"/adguard-content-blocker/overview",permalink:"/KnowledgeBase/zh-CN/adguard-content-blocker/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-content-blocker/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Features overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/KnowledgeBase/zh-CN/adguard-for-safari/installation"},next:{title:"\u5b89\u88c5",permalink:"/KnowledgeBase/zh-CN/adguard-content-blocker/installation"}},i={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"AdGuard has two Android apps: ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-android/overview.html"},"AdGuard for Android")," and ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-content-blocker/overview.html"},"AdGuard Content Blocker"),". AdGuard for Android has a much wider range of functionality: it blocks ads, trackers, and annoyances in browsers and apps, uses filters as well as domain-level ad blocking, and supports user rules. AdGuard Content Blocker has a limited functionality."),(0,o.kt)("p",null,"Full-fledged ad blockers can\u2019t be introduced to Google Play due to the policy of the store. Google Play ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/en/blog/google-removes-adguard-android-app-google-play.html"},"has banned"),' "apps that block or interfere with another app displaying ads". Thus, AdGuard for Android can be downloaded on AdGuard\'s official website only.'),(0,o.kt)("p",null,"As an alternative, Google offers to developers the Content blocking API. The API has strict limitations and is currently supported by two browsers: Yandex Browser and Samsung Internet browser. Many complex filtering rules supported in other AdGuard products don't work with this API."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/content_blocker/content_blocker.png",alt:"Available browsers *mobile"})),(0,o.kt)("p",null,"AdGuard Content Blocker was designed to fit the Google Play policy framework. Compared to other AdGuard products, AdGuard Content Blocker has less ad blocking capabilities:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"AdGuard Content Blocker works only in browsers that support the content blocking technology. Currently, there are two: Yandex Browser and Samsung Internet browser."),(0,o.kt)("li",{parentName:"ol"},"Within the existing technology, the functionality of AdGuard Content Blocker is limited: for example it cannot block ads and trackers in apps or other browsers, has no filtering log and doesn't support filtering at the domain level.")),(0,o.kt)("p",null,"However, AdGuard Content Blocker has 35 filters that allow you to block ads, trackers, and annoyances in two supported browsers. You can also customize ad blocking by selecting appropriate language-specific filters or adding user rules."),(0,o.kt)("p",null,"AdGuard Content Blocker is a free open-source software. Its source code is available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/ContentBlocker"},"on GitHub"),"."),(0,o.kt)("p",null,"For a better and more customizable ad blocking experience, try using the full-fledged Android app. AdGuard for Android can be downloaded ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-android/overview.html"},"from our website"),"."))}u.isMDXComponent=!0}}]);