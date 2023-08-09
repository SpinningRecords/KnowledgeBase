"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5836],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1660:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const o={title:"Ru\u010dn\xed instalace certifik\xe1tu",sidebar_position:1},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/manual-certificate-installation",id:"adguard-for-mac/solving-problems/manual-certificate-installation",title:"Ru\u010dn\xed instalace certifik\xe1tu",description:"Tento \u010dl\xe1nek popisuje AdGuard pro macOS, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, st\xe1hn\u011bte si aplikaci AdGuard",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/manual-certificate-installation.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/manual-certificate-installation",permalink:"/KnowledgeBase/cs/adguard-for-mac/solving-problems/manual-certificate-installation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/manual-certificate-installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Ru\u010dn\xed instalace certifik\xe1tu",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Asistent prohl\xed\u017ee\u010de",permalink:"/KnowledgeBase/cs/adguard-for-mac/browser-assistant"},next:{title:"Ochranu nelze povolit",permalink:"/KnowledgeBase/cs/adguard-for-mac/solving-problems/protection-cannot-be-enabled"}},p={},c=[],u={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro macOS, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"st\xe1hn\u011bte si aplikaci AdGuard"))),(0,n.kt)("p",null,"AdGuard for Mac pot\u0159ebuje nainstalovat ko\u0159enov\xfd certifik\xe1t do \xfalo\u017ei\u0161t\u011b certifik\xe1t\u016f, aby mohl ",(0,n.kt)("a",{parentName:"p",href:"/general/https-filtering/what-is-https-filtering"},"filtrovat HTTPS provoz"),". Tato akce se ve v\u011bt\u0161in\u011b p\u0159\xedpad\u016f provede automaticky p\u0159i prvn\xedm spu\u0161t\u011bn\xed aplikace, ale u\u017eivatel\xe9 prohl\xed\u017ee\u010d\u016f zalo\u017een\xfdch na technologii Gecko (Firefox, Waterfox atd.), kte\u0159\xed maj\xed pro sv\u016fj prohl\xed\u017ee\u010d nastaveno hlavn\xed heslo, mohou b\xfdt nuceni prov\xe9st dal\u0161\xed kroky (proto\u017ee tyto prohl\xed\u017ee\u010de pou\u017e\xedvaj\xed vlastn\xed \xfalo\u017ei\u0161t\u011b certifik\xe1t\u016f nam\xedsto syst\xe9mov\xe9ho). Na v\xfdzvu mus\xed bu\u010fto zadat hlavn\xed heslo (aby AdGuard z\xedskal p\u0159\xedstup k \xfalo\u017ei\u0161ti certifik\xe1t\u016f), nebo certifik\xe1t nainstalovat ru\u010dn\u011b."),(0,n.kt)("p",null,"Ru\u010dn\xed instalace certifik\xe1tu do prohl\xed\u017ee\u010de podobn\xe9ho Firefoxu:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Otev\u0159ete "P\u0159edvolby"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Jd\u011bte do "Ochrana soukrom\xed & Zabezpe\u010den\xed" \u2014 "Certifik\xe1ty"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Klikn\u011bte na "Zobrazit certifik\xe1ty"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'P\u0159ejd\u011bte na kartu "Opr\xe1vn\u011bn\xed" a klikn\u011bte na tla\u010d\xedtko "Importovat..."')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Vyberte soubor ",(0,n.kt)("inlineCode",{parentName:"p"},"/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer")," nebo si jej st\xe1hn\u011bte z ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert")," pomoc\xed prohl\xed\u017ee\u010de zalo\u017een\xe9ho na Chromiu (nap\u0159. Google Chrome nebo nov\xfd Edge) a se spu\u0161t\u011bn\xfdm HTTPS filtrov\xe1n\xedm v AdGuardu"))),(0,n.kt)("p",null,"P\u0159esn\xe9 \xfakony vy\u017eadovan\xe9 v r\u016fzn\xfdch prohl\xed\u017ee\u010d\xedch zalo\u017een\xfdch na technologii Gecko se mohou li\u0161it, ale obecn\xe1 posloupnost a cesta k souboru ",(0,n.kt)("inlineCode",{parentName:"p"},"AdGuard Personal CA.cer")," budou podobn\xe9 nebo stejn\xe9."),(0,n.kt)("p",null,"PS: Pro verze ",(0,n.kt)("a",{parentName:"p",href:"https://setapp.com/apps/adguard"},"aplikace Setapp")," je cesta k souboru n\xe1sleduj\xedc\xed: ",(0,n.kt)("inlineCode",{parentName:"p"},"/Library/Application Support/com.adguard.mac.adguard-setapp/AdguardCore/Adguard Personal CA.cer")))}s.isMDXComponent=!0}}]);