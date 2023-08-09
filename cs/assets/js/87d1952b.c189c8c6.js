"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7659],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=o,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(4137));const a={title:"Zn\xe1m\xe9 probl\xe9my",sidebar_position:2},i=void 0,l={unversionedId:"general/https-filtering/known-issues",id:"general/https-filtering/known-issues",title:"Zn\xe1m\xe9 probl\xe9my",description:"Posledn\xed aktualizace: 20. z\xe1\u0159\xed 2022",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/general/https-filtering/known-issues.md",sourceDirName:"general/https-filtering",slug:"/general/https-filtering/known-issues",permalink:"/KnowledgeBase/cs/general/https-filtering/known-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/https-filtering/known-issues.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Zn\xe1m\xe9 probl\xe9my",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is HTTPS filtering",permalink:"/KnowledgeBase/cs/general/https-filtering/what-is-https-filtering"},next:{title:"Dom\xe9na local.adguard.org",permalink:"/KnowledgeBase/cs/general/https-filtering/local-adguard-com-domain"}},p={},u=[{value:"Zn\xe1m\xe9 probl\xe9my",id:"zn\xe1m\xe9-probl\xe9my",level:2},{value:"Kontrola origin\xe1lu certifik\xe1tu",id:"kontrola-origin\xe1lu-certifik\xe1tu",level:3},{value:"Transparentnost certifik\xe1tu",id:"transparentnost-certifik\xe1tu",level:3},{value:"M\xe1te p\u0159ipom\xednky nebo n\xe1vrhy?",id:"m\xe1te-p\u0159ipom\xednky-nebo-n\xe1vrhy",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Posledn\xed aktualizace: 20. z\xe1\u0159\xed 2022"),(0,o.kt)("p",null,"Pochopen\xed tohoto \u010dl\xe1nku m\u016f\u017ee vy\u017eadovat z\xe1kladn\xed znalosti o \u0161ifrov\xe1n\xed, TLS a HTTPS."),(0,o.kt)("p",null,"Nejprve se pod\xedvejte na tento jednoduch\xfd diagram, kter\xfd ukazuje obecnou strukturu protokolu HTTPS:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png",alt:"What is HTTPS filtering"})),(0,o.kt)("p",null,"AdGuard zkop\xedruje vlastnosti p\u0159ipojen\xed TLS, kter\xe9 pou\u017e\xedv\xe1 v\xe1\u0161 prohl\xed\u017ee\u010d:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AdGuard pou\u017e\xedv\xe1 stejnou verzi TLS"),(0,o.kt)("li",{parentName:"ul"},"AdGuard pou\u017e\xedv\xe1 stejn\xe9 \u0161ifrovac\xed metody (\u0161ifry) jako v\xe1\u0161 prohl\xed\u017ee\u010d")),(0,o.kt)("p",null,"V podstat\u011b to znamen\xe1, \u017ee pokud pou\u017e\xedv\xe1te modern\xed a bezpe\u010dn\xfd prohl\xed\u017ee\u010d, bude br\xe1t v \xfavahu v\u0161echny zn\xe1m\xe9 probl\xe9my TLS a nebude se pokou\u0161et pou\u017e\xedvat nebezpe\u010dn\xe9 \u0161ifry."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Jak AdGuard postupuje v p\u0159\xedpad\u011b pochybnost\xed o platnosti certifik\xe1tu?")," V takov\xfdch p\u0159\xedpadech AdGuard zcela ukon\u010d\xed filtrov\xe1n\xed v\u0161ech p\u0159ipojen\xed k t\xe9to dom\xe9n\u011b a ponech\xe1 ve\u0161ker\xe1 rozhodnut\xed na prohl\xed\u017ee\u010di."),(0,o.kt)("h2",{id:"zn\xe1m\xe9-probl\xe9my"},"Zn\xe1m\xe9 probl\xe9my"),(0,o.kt)("p",null,"HTTPS filtrov\xe1n\xed v AdGuardu m\xe1 sv\xe9 nev\xfdhody. T\xe9m\u011b\u0159 v\u0161echny z nich maj\xed b\xfdt odstran\u011bny v n\u011bkolika p\u0159\xed\u0161t\xedch verz\xedch AdGuardu."),(0,o.kt)("p",null,"V\u0161echny n\xe1m zn\xe1m\xe9 probl\xe9my a p\u0159edpokl\xe1dan\xe9 term\xedny jejich oprav jsou uvedeny n\xed\u017ee."),(0,o.kt)("h3",{id:"kontrola-origin\xe1lu-certifik\xe1tu"},"Kontrola origin\xe1lu certifik\xe1tu"),(0,o.kt)("p",null,"Nejv\u011bt\u0161\xed nev\xfdhodou mechanismu HTTPS filtrov\xe1n\xed je, \u017ee skr\xfdv\xe1 skute\u010dn\xfd certifik\xe1t webov\xe9 str\xe1nky. Nem\u016f\u017eete jednodu\u0161e zkontrolovat jeho origin\xe1ln\xed certifik\xe1t, proto\u017ee vid\xedte pouze ten, kter\xfd vydal AdGuard."),(0,o.kt)("p",null,"Tento probl\xe9m \u0159e\u0161\xed v ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-assistant/overview.html"},"Asistent prohl\xed\u017ee\u010de"),". Toto roz\u0161\xed\u0159en\xed prohl\xed\u017ee\u010de v\xe1m pom\u016f\u017ee spravovat filtrov\xe1n\xed p\u0159\xedmo z prohl\xed\u017ee\u010de a umo\u017en\xed v\xe1m zkontrolovat origin\xe1ln\xed certifik\xe1t jak\xe9koli webov\xe9 str\xe1nky."),(0,o.kt)("h3",{id:"transparentnost-certifik\xe1tu"},"Transparentnost certifik\xe1tu"),(0,o.kt)("p",null,"D\xedky modern\xed kryptografii dok\xe1\u017e\xed prohl\xed\u017ee\u010de obvykle odhalit \u0161kodliv\xe9 webov\xe9 str\xe1nky, kter\xe9 jsou opat\u0159eny pad\u011blan\xfdmi nebo fale\u0161n\xfdmi certifik\xe1ty SSL. Sou\u010dasn\xe9 kryptografick\xe9 mechanismy v\u0161ak nejsou tak dobr\xe9 p\u0159i odhalov\xe1n\xed \u0161kodliv\xfdch webov\xfdch str\xe1nek, pokud jsou vybaveny chybn\u011b vydan\xfdmi certifik\xe1ty nebo certifik\xe1ty, kter\xe9 byly vyd\xe1ny kompromitovanou nebo nepoctivou certifika\u010dn\xed autoritou (CA). Transparentnost certifik\xe1t\u016f si klade za c\xedl odstranit tyto hrozby zalo\u017een\xe9 na certifik\xe1tech t\xedm, \u017ee zp\u0159\xedstupn\xed vyd\xe1v\xe1n\xed a existenci certifik\xe1t\u016f SSL kontrole ze strany vlastn\xedk\u016f dom\xe9n, certifika\u010dn\xedch autorit a u\u017eivatel\u016f dom\xe9n."),(0,o.kt)("p",null,"Produkty AdGuard, kter\xe9 pou\u017e\xedvaj\xed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/CoreLibs/"},"CoreLibs")," po\u010d\xednaje verz\xed ",(0,o.kt)("strong",{parentName:"p"},"1.11"),", budou implementovat z\xe1sady zalo\u017een\xe9 na ",(0,o.kt)("a",{parentName:"p",href:"https://googlechrome.github.io/CertificateTransparency/ct_policy.html"},"Chrome Certificate Transparency Policy"),"."),(0,o.kt)("h2",{id:"m\xe1te-p\u0159ipom\xednky-nebo-n\xe1vrhy"},"M\xe1te p\u0159ipom\xednky nebo n\xe1vrhy?"),(0,o.kt)("p",null,"Pokud chcete n\u011bco doplnit, nahl\xe1sit chyby nebo polo\u017eit dotaz, kontaktujte n\xe1s na: ",(0,o.kt)("inlineCode",{parentName:"p"},"devteam@adguard.com"),"."))}c.isMDXComponent=!0}}]);