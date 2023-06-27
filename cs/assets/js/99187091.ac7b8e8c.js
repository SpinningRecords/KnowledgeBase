"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5e3],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=o.createContext({}),u=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,v=c["".concat(d,".").concat(m)]||c[m]||p[m]||n;return r?o.createElement(v,i(i({ref:t},s),{},{components:r})):o.createElement(v,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=r(7462),a=(r(7294),r(4137));const n={title:"Jak blokovat reklamy v YouTube",sidebar_position:7},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/youtube-ads",id:"adguard-for-android/solving-problems/youtube-ads",title:"Jak blokovat reklamy v YouTube",description:"Tento \u010dl\xe1nek popisuje AdGuard pro Android, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, st\xe1hn\u011bte si aplikaci AdGuard",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/youtube-ads.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/youtube-ads",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/youtube-ads",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/youtube-ads.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Jak blokovat reklamy v YouTube",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Pr\u016fvodce n\xedzko\xfarov\u0148ov\xfdch nastaven\xed",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/low-level-settings"},next:{title:"Jak nastavit odchoz\xed proxy",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/outbound-proxy"}},d={},u=[{value:"Sledov\xe1n\xed YouTube v aplikaci AdGuard",id:"sledov\xe1n\xed-youtube-v-aplikaci-adguard",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro Android, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"st\xe1hn\u011bte si aplikaci AdGuard"))),(0,a.kt)("p",null,'Jedna z nej\u010dast\u011bj\u0161\xedch ot\xe1zek, kterou n\xe1m u\u017eivatel\xe9 kladou, zn\xed: "Je mo\u017en\xe9 blokovat reklamy YouTube v syst\xe9mu Android?". Vzhledem k technick\xfdm omezen\xedm opera\u010dn\xedho syst\xe9mu Android neexistuje zp\u016fsob, jak ',(0,a.kt)("em",{parentName:"p"},"zcela")," odstranit reklamy z aplikace YouTube. Na\u0161li jsme v\u0161ak alternativu, kter\xe1 v\xe1s k n\u011bmu co nejv\xedce p\u0159ibl\xed\u017e\xed a z\xe1rove\u0148 obejde omezen\xed dan\xe1 syst\xe9mem Android."),(0,a.kt)("h2",{id:"sledov\xe1n\xed-youtube-v-aplikaci-adguard"},"Sledov\xe1n\xed YouTube v aplikaci AdGuard"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/Android/3-6/share.gif",alt:"N\xe1vod *mobile"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Otev\u0159ete YouTube a spus\u0165te video, kter\xe9 chcete sledovat."),(0,a.kt)("li",{parentName:"ol"},"Klepn\u011bte na tla\u010d\xedtko ",(0,a.kt)("em",{parentName:"li"},"Sd\xedlet")," a vyberte ",(0,a.kt)("em",{parentName:"li"},"AdGuard pro Android")," ze seznamu aplikac\xed.")),(0,a.kt)("p",null,"A je to! Otev\u0159e se nov\xe9 okno s videem, ve kter\xe9m jej budete moci sledovat bez p\u0159eru\u0161ov\xe1n\xed reklamami."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pokud m\xe1te nainstalovan\xfd a spu\u0161t\u011bn\xfd AdGuard, m\u016f\u017eete YouTube sledovat tak\xe9 v prohl\xed\u017ee\u010di a nebudou se zobrazovat \u017e\xe1dn\xe9 reklamy.")))}p.isMDXComponent=!0}}]);