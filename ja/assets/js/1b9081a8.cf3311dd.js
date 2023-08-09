"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7777],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(4137));const l={title:"macOS\u3067AdGuard\u30a2\u30d7\u30ea\u304c\u8d77\u52d5\u3057\u306a\u3044\u554f\u984c",sidebar_position:6},o=void 0,i={unversionedId:"adguard-for-mac/solving-problems/launch-issues",id:"adguard-for-mac/solving-problems/launch-issues",title:"macOS\u3067AdGuard\u30a2\u30d7\u30ea\u304c\u8d77\u52d5\u3057\u306a\u3044\u554f\u984c",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u30ec\u30d9\u30eb\u3067\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u4fdd\u8b77\u3059\u308b\u591a\u6a5f\u80fd\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3001\u300cAdGuard for Mac\u300d\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u3044\u307e\u3059\u3002 \u5b9f\u969b\u306b\u4f7f\u3063\u3066\u307f\u308b\u306b\u306f\u3001AdGuard\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/launch-issues.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/launch-issues",permalink:"/KnowledgeBase/ja/adguard-for-mac/solving-problems/launch-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/launch-issues.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"macOS\u3067AdGuard\u30a2\u30d7\u30ea\u304c\u8d77\u52d5\u3057\u306a\u3044\u554f\u984c",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Installation problems solving",permalink:"/KnowledgeBase/ja/adguard-for-mac/solving-problems/installation-issues"},next:{title:"iCloud Private Relay and AdGuard",permalink:"/KnowledgeBase/ja/adguard-for-mac/solving-problems/icloud-private-relay"}},d={},s=[{value:"macOS 11\u4ee5\u964d\u3067\u306eAdGuard\u8d77\u52d5\u554f\u984c",id:"macos-11\u4ee5\u964d\u3067\u306eadguard\u8d77\u52d5\u554f\u984c",level:2},{value:"macOS 10\u4ee5\u4e0b\u3067\u306eAdGuard\u8d77\u52d5\u554f\u984c",id:"macos-10\u4ee5\u4e0b\u3067\u306eadguard\u8d77\u52d5\u554f\u984c",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u30ec\u30d9\u30eb\u3067\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u4fdd\u8b77\u3059\u308b\u591a\u6a5f\u80fd\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3001\u300cAdGuard for Mac\u300d\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u3044\u307e\u3059\u3002 \u5b9f\u969b\u306b\u4f7f\u3063\u3066\u307f\u308b\u306b\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"AdGuard\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),"\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("p",null,"\u6642\u6298\u3001macOS\u3067AdGuard\u306eNetwork\u62e1\u5f35\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u7834\u640d\u3057\u3001AdGuard\u30a2\u30d7\u30ea\u304c\u4f7f\u7528\u3067\u304d\u306a\u304f\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u304a\u4f7f\u3044\u306eOS\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5fdc\u3058\u3066\u3001\u4ee5\u4e0b\u306e\u3044\u305a\u308c\u304b\u306e\u65b9\u6cd5\u3067\u5bfe\u51e6\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"macos-11\u4ee5\u964d\u3067\u306eadguard\u8d77\u52d5\u554f\u984c"},"macOS 11\u4ee5\u964d\u3067\u306eAdGuard\u8d77\u52d5\u554f\u984c"),(0,n.kt)("p",null,"Big Sur\u3001Monterey\u3001Ventura\u306e\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u3067 AdGuard for Mac \u306e\u8d77\u52d5\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u3053\u3061\u3089\u306e\u624b\u9806\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Mac\u3092\u518d\u8d77\u52d5\u3057\u3001 ",(0,n.kt)("a",{parentName:"li",href:"https://support.apple.com/ja-jp/HT204904"},"\u30ea\u30ab\u30d0\u30ea\u30fc\uff08\u5fa9\u65e7\uff09\u30e2\u30fc\u30c9\u306b\u5165\u308b")),(0,n.kt)("li",{parentName:"ol"},"SIP\u3092\u7121\u52b9\u306b\u3059\u308b\uff08",(0,n.kt)("strong",{parentName:"li"},"\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u30fc"),"\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300c",(0,n.kt)("strong",{parentName:"li"},"\u30bf\u30fc\u30df\u30ca\u30eb"),"\u300d\u3092\u8d77\u52d5\u3057\u3001 ",(0,n.kt)("inlineCode",{parentName:"li"},"csrutil disable"),"\u3068\u5165\u529b\u3057\u307e\u3059\uff09"),(0,n.kt)("li",{parentName:"ol"},"Mac\u3092\u518d\u8d77\u52d5\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"AdGuard\u30a2\u30d7\u30ea\u3092\u9589\u3058\u3001\u300c",(0,n.kt)("strong",{parentName:"li"},"\u30bf\u30fc\u30df\u30ca\u30eb"),"\u300d\u3092\u958b\u304d\u3001 ",(0,n.kt)("inlineCode",{parentName:"li"},"systemextensionsctl reset"),"\u3068\u5165\u529b\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ol"},"Mac\u3092\u518d\u8d77\u52d5\u3057\u3001\u30ea\u30ab\u30d0\u30ea\u30fc\uff08\u5fa9\u65e7\uff09\u30e2\u30fc\u30c9\u306b\u5165\u308b"),(0,n.kt)("li",{parentName:"ol"},"SIP\u3092\u6709\u52b9\u306b\u3059\u308b\uff08",(0,n.kt)("strong",{parentName:"li"},"\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u30fc"),"\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u300c",(0,n.kt)("strong",{parentName:"li"},"\u30bf\u30fc\u30df\u30ca\u30eb"),"\u300d\u3092\u8d77\u52d5\u3057\u3001 ",(0,n.kt)("inlineCode",{parentName:"li"},"csrutil enable"),"\u3068\u5165\u529b\u3057\u307e\u3059\uff09"),(0,n.kt)("li",{parentName:"ol"},"AdGuard\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u3001\u4fdd\u8b77\u3092\u30aa\u30f3\u306b\u3057\u307e\u3059\u3002")),(0,n.kt)("h2",{id:"macos-10\u4ee5\u4e0b\u3067\u306eadguard\u8d77\u52d5\u554f\u984c"},"macOS 10\u4ee5\u4e0b\u3067\u306eAdGuard\u8d77\u52d5\u554f\u984c"),(0,n.kt)("p",null,"Sierra\u3001Mojave\u3001Catalina\u306e\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u3067 AdGuard for Mac \u306e\u8d77\u52d5\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u3053\u3061\u3089\u306e\u624b\u9806\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u300c",(0,n.kt)("strong",{parentName:"li"},"\u30bf\u30fc\u30df\u30ca\u30eb"),"\u300d\u3092\u958b\u304d\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"ls -@lOae /private/var/db/KernelExtensionManagement"),"\u3068\u3044\u3046\u30b3\u30de\u30f3\u30c9\u3092\u5165\u529b\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"\uff08\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u3088\u3046\u306b\uff09",(0,n.kt)("inlineCode",{parentName:"li"},"restricted")," \u30d5\u30e9\u30b0\u304c\u306a\u3057\uff08-\uff09\u306b\u306a\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg",alt:"\u30b3\u30de\u30f3\u30c9\u306e\u4f8b *border"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Mac\u3092\u30ea\u30ab\u30d0\u30ea\u30fc\u30e2\u30fc\u30c9\u3067\u518d\u8d77\u52d5\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"\u300c",(0,n.kt)("strong",{parentName:"li"},"\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"li"},"\u30bf\u30fc\u30df\u30ca\u30eb"),"\u300d\u3092\u958b\u304f"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"csrutil disable"),"\u3068\u5165\u529b\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u8005\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"Mac\u3092\u518d\u8d77\u52d5\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"\u300c",(0,n.kt)("strong",{parentName:"li"},"\u30bf\u30fc\u30df\u30ca\u30eb"),"\u300d\u3092\u958b\u304d\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"sudo chflags restricted /private/var/db/KernelExtensionManagement"),"\u3068\u3044\u3046\u30b3\u30de\u30f3\u30c9\u3092\u5165\u529b\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"Mac\u3092\u30ea\u30ab\u30d0\u30ea\u30fc\u30e2\u30fc\u30c9\u3067\u518d\u8d77\u52d5\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"\u300c",(0,n.kt)("strong",{parentName:"li"},"\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"li"},"\u30bf\u30fc\u30df\u30ca\u30eb"),"\u300d\u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"csrutil enable"),"\u3068\u5165\u529b\u3059\u308b \u2192 \u7ba1\u7406\u8005\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3059\u308b \u2192 Mac\u3092\u518d\u8d77\u52d5\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"AdGuard\u4fdd\u8b77\u3092\u30aa\u30f3\u306b\u3059\u308b")))}c.isMDXComponent=!0}}]);