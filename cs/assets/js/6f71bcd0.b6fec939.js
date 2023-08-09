"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5425],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),k=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=k(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=k(a),N=r,c=d["".concat(l,".").concat(N)]||d[N]||s[N]||o;return a?n.createElement(c,p(p({ref:t},m),{},{components:a})):n.createElement(c,p({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var k=2;k<o;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4165:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>k});var n=a(7462),r=(a(7294),a(4137));const o={title:"Jak nainstalovat certifik\xe1t proxy",sidebar_position:2},p=void 0,i={unversionedId:"guides/proxy-certificate",id:"guides/proxy-certificate",title:"Jak nainstalovat certifik\xe1t proxy",description:"Desktopov\xe9 aplikace AdGuardu (AdGuard pro Windows a AdGuard pro Mac) lze pou\u017e\xedt jako proxy. To znamen\xe1, \u017ee m\u016f\u017eete p\u0159esm\u011brovat provoz jin\xfdch za\u0159\xedzen\xed p\u0159es AdGuard (zcela, nebo provoz konkr\xe9tn\xedch aplikac\xed/prohl\xed\u017ee\u010d\u016f).",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/guides/proxy-certificate.md",sourceDirName:"guides",slug:"/guides/proxy-certificate",permalink:"/KnowledgeBase/cs/guides/proxy-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/proxy-certificate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Jak nainstalovat certifik\xe1t proxy",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Jak shroma\u017e\u010fovat soubory HAR",permalink:"/KnowledgeBase/cs/guides/collect-har-file"},next:{title:"Jak nahl\xe1sit webovou str\xe1nku",permalink:"/KnowledgeBase/cs/guides/report-website"}},l={},k=[{value:"Jak st\xe1hnout a nainstalovat certifik\xe1t",id:"jak-st\xe1hnout-a-nainstalovat-certifik\xe1t",level:2},{value:"Windows",id:"windows",level:3},{value:"Mac",id:"mac",level:3},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3}],m={toc:k};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Desktopov\xe9 aplikace AdGuardu (AdGuard pro Windows a AdGuard pro Mac) lze pou\u017e\xedt jako proxy. To znamen\xe1, \u017ee m\u016f\u017eete p\u0159esm\u011brovat provoz jin\xfdch za\u0159\xedzen\xed p\u0159es AdGuard (zcela, nebo provoz konkr\xe9tn\xedch aplikac\xed/prohl\xed\u017ee\u010d\u016f)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Tato za\u0159\xedzen\xed mus\xed b\xfdt ve stejn\xe9 s\xedti jako PC nebo Mac, na kter\xe9m je AdGuard nainstalov\xe1n.")),(0,r.kt)("p",null,"Provoz HTTP bude filtrov\xe1n v ka\u017ed\xe9m p\u0159\xedpad\u011b, ale aby AdGuard mohl filtrovat provoz HTTPS, je t\u0159eba do p\u0159ipojen\xe9ho za\u0159\xedzen\xed ru\u010dn\u011b nainstalovat AdGuard certifik\xe1t."),(0,r.kt)("h2",{id:"jak-st\xe1hnout-a-nainstalovat-certifik\xe1t"},"Jak st\xe1hnout a nainstalovat certifik\xe1t"),(0,r.kt)("p",null,"V z\xe1vislosti na opera\u010dn\xedm syst\xe9mu va\u0161eho za\u0159\xedzen\xed (Windows/Mac/Android/iOS) postupujte podle jednoho z t\u011bchto pokyn\u016f:"),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Poznamenejte si IP adresu va\u0161eho PC s nainstalovan\xfdm AdGuardem.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zkontrolujte, zda je ochrana AdGuard zapnuta. Pot\xe9 za\u0161krtn\u011bte pol\xed\u010dko ",(0,r.kt)("strong",{parentName:"p"},"Pou\u017e\xedt AdGuard jako HTTP proxy")," na kart\u011b ",(0,r.kt)("strong",{parentName:"p"},"S\xed\u0165")," v jeho nastaven\xed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Na stejn\xe9m za\u0159\xedzen\xed s AdGuardem pou\u017eijte tento odkaz pomoc\xed libovoln\xe9ho prohl\xed\u017ee\u010de: ",(0,r.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klepn\u011bte na tla\u010d\xedtko ",(0,r.kt)("strong",{parentName:"p"},"St\xe1hnout"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"P\u0159eneste sta\u017een\xfd soubor ",(0,r.kt)("strong",{parentName:"p"},"cert.cer")," do za\u0159\xedzen\xed, jeho\u017e provoz chcete p\u0159es AdGuard sm\u011brovat.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Na tomto za\u0159\xedzen\xed stiskn\u011bte tla\u010d\xedtko ",(0,r.kt)("strong",{parentName:"p"},"Win"),", napi\u0161te ",(0,r.kt)("inlineCode",{parentName:"p"},"Spravovat certifik\xe1ty po\u010d\xedta\u010de")," a stiskn\u011bte ",(0,r.kt)("strong",{parentName:"p"},"Enter"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Na str\xe1nce ",(0,r.kt)("em",{parentName:"p"},"Certifik\xe1ty \u2013 m\xedstn\xed po\u010d\xedta\u010d")," najd\u011bte slo\u017eku ",(0,r.kt)("em",{parentName:"p"},"D\u016fv\u011bryhodn\xe1 ko\u0159enov\xe1 certifikace")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"Certifik\xe1ty"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klepn\u011bte prav\xfdm tla\u010d\xedtkem my\u0161i na slo\u017eku ",(0,r.kt)("em",{parentName:"p"},"Certifik\xe1ty")," a klepn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"V\u0161echny \xfalohy")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Importovat"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Na str\xe1nce ",(0,r.kt)("em",{parentName:"p"},"Pr\u016fvodce importem certifik\xe1tu")," klikn\u011bte na polo\u017eku ",(0,r.kt)("strong",{parentName:"p"},"Dal\u0161\xed"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Kliknut\xedm na ",(0,r.kt)("strong",{parentName:"p"},"Proch\xe1zet")," certifik\xe1t importujte.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na soubor certifik\xe1tu ",(0,r.kt)("strong",{parentName:"p"},"cert.cer"),", vyberte jej a klikn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Otev\u0159\xedt"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klikn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Dal\u0161\xed"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Za\u0161krtn\u011bte pol\xed\u010dko ",(0,r.kt)("strong",{parentName:"p"},"Um\xedstit v\u0161echny certifik\xe1ty do n\xe1sleduj\xedc\xedho \xfalo\u017ei\u0161t\u011b"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ujist\u011bte se, \u017ee se v poli ",(0,r.kt)("em",{parentName:"p"},"\xdalo\u017ei\u0161t\u011b certifik\xe1t\u016f")," zobrazuje polo\u017eka ",(0,r.kt)("em",{parentName:"p"},"D\u016fv\u011bryhodn\xe9 ko\u0159enov\xe9 certifika\u010dn\xed autority")," a klikn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Dal\u0161\xed"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klikn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Dokon\u010dit"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stiskn\u011bte kl\xe1vesu ",(0,r.kt)("strong",{parentName:"p"},"Win"),", pot\xe9 otev\u0159ete ",(0,r.kt)("strong",{parentName:"p"},"Nastaven\xed"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Vyberte ",(0,r.kt)("strong",{parentName:"p"},"S\xed\u0165 a Internet")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Proxy"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Vypn\u011bte ",(0,r.kt)("em",{parentName:"p"},"Automaticky zji\u0161\u0165ovat nastaven\xed"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klikn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Nastavit")," na kart\u011b ",(0,r.kt)("em",{parentName:"p"},"Pou\u017e\xedt proxy server"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zapn\u011bte p\u0159ep\xedna\u010d. Pro ",(0,r.kt)("strong",{parentName:"p"},"IP adresu proxy")," zadejte uvedenou IP adresu va\u0161eho stoln\xedho po\u010d\xedta\u010de (krok 1). Pro ",(0,r.kt)("strong",{parentName:"p"},"Port")," zadejte port zvolen\xfd v s\xed\u0165ov\xfdch nastaven\xedch desktopov\xe9 aplikace AdGuard.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klikn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Ulo\u017eit"),"."))),(0,r.kt)("h3",{id:"mac"},"Mac"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Poznamenejte si IP adresu va\u0161eho PC s nainstalovan\xfdm AdGuardem.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zkontrolujte, zda je ochrana AdGuard zapnuta. Pot\xe9 p\u0159ejd\u011bte do ",(0,r.kt)("strong",{parentName:"p"},"Nastaven\xed")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"S\xed\u0165")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"HTTP proxy")," a za\u0161krtn\u011bte pol\xed\u010dko ",(0,r.kt)("strong",{parentName:"p"},"Pou\u017e\xedt AdGuard jako HTTP proxy"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Na stejn\xe9m po\u010d\xedta\u010di s AdGuardem pou\u017eijte tento odkaz pomoc\xed libovoln\xe9ho prohl\xed\u017ee\u010de: ",(0,r.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klepn\u011bte na tla\u010d\xedtko ",(0,r.kt)("strong",{parentName:"p"},"St\xe1hnout"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"P\u0159eneste sta\u017een\xfd soubor ",(0,r.kt)("strong",{parentName:"p"},"cert.cer")," do za\u0159\xedzen\xed, jeho\u017e provoz chcete p\u0159es AdGuard sm\u011brovat.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dvakr\xe1t klikn\u011bte na sta\u017een\xfd soubor certifik\xe1tu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zadejte heslo administr\xe1tora a klikn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Modify Keychain"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Spotlight"),' (ikona vyhled\xe1v\xe1n\xed v prav\xe9m horn\xedm rohu), zadejte "Keychain Access" a pot\xe9 z v\xfdsledk\u016f vyhled\xe1v\xe1n\xed vyberte ',(0,r.kt)("strong",{parentName:"p"},"Keychain Access"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"V \u010d\xe1sti ",(0,r.kt)("em",{parentName:"p"},"Syst\xe9m")," zv\xfdrazn\u011bte certifik\xe1t, kter\xfd jste p\u0159idali.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klikn\u011bte na n\u011bj prav\xfdm tla\u010d\xedtkem my\u0161i a z kontextov\xe9 nab\xeddky vyberte mo\u017enost ",(0,r.kt)("strong",{parentName:"p"},"Z\xedskat informace"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rozbalte ",(0,r.kt)("em",{parentName:"p"},"Trust")," a zobrazte z\xe1sady d\u016fv\u011bryhodnosti pro certifik\xe1t.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"V \u010d\xe1sti ",(0,r.kt)("em",{parentName:"p"},"Secure Sockets Layers (SSL)")," vyberte ",(0,r.kt)("strong",{parentName:"p"},"V\u017edy d\u016fv\u011b\u0159ovat"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Otev\u0159ete ",(0,r.kt)("strong",{parentName:"p"},"P\u0159edvolby syst\xe9mu")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"S\xed\u0165")," a vyberte naho\u0159e aktivn\xed p\u0159ipojen\xed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klikn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Podrobnosti...")," a p\u0159ejd\u011bte na kartu ",(0,r.kt)("strong",{parentName:"p"},"Proxy"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Za\u0161krtn\u011bte dv\u011b pol\xed\u010dka: ",(0,r.kt)("em",{parentName:"p"},"Web proxy (HTTP)")," a ",(0,r.kt)("em",{parentName:"p"},"Secure web proxy (HTTPS)"),". Do pole ",(0,r.kt)("strong",{parentName:"p"},"Server")," zadejte zaznamenanou IP adresu po\u010d\xedta\u010de (krok 1). Do pole ",(0,r.kt)("strong",{parentName:"p"},"Port")," zadejte port zvolen\xfd v s\xed\u0165ov\xfdch nastaven\xedch desktopov\xe9 aplikace AdGuard."))),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Poznamenejte si IP adresu va\u0161eho PC s nainstalovan\xfdm AdGuardem.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zkontrolujte, zda je ochrana AdGuard zapnuta. Pot\xe9 za\u0161krtn\u011bte pol\xed\u010dko ",(0,r.kt)("strong",{parentName:"p"},"Pou\u017e\xedt AdGuard jako HTTP proxy")," na kart\u011b ",(0,r.kt)("strong",{parentName:"p"},"S\xed\u0165")," v jeho nastaven\xed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Na stejn\xe9m po\u010d\xedta\u010di s AdGuardem pou\u017eijte tento odkaz pomoc\xed libovoln\xe9ho prohl\xed\u017ee\u010de: ",(0,r.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klepn\u011bte na tla\u010d\xedtko ",(0,r.kt)("strong",{parentName:"p"},"St\xe1hnout"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"P\u0159eneste sta\u017een\xfd soubor ",(0,r.kt)("strong",{parentName:"p"},"cert.cer")," do za\u0159\xedzen\xed, jeho\u017e provoz chcete p\u0159es AdGuard sm\u011brovat.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Vyhledejte a klepn\u011bte na d\u0159\xedve sta\u017een\xfd certifik\xe1t ",(0,r.kt)("strong",{parentName:"p"},"cert.cer")," a otev\u0159ete soubor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"V n\u011bkter\xfdch telefonech m\u016f\u017eete b\xfdt vyzv\xe1ni k zad\xe1n\xed hesla za\u0159\xedzen\xed. To prove\u010fte a pot\xe9 stiskn\u011bte tla\u010d\xedtko ",(0,r.kt)("strong",{parentName:"p"},"OK"),". Certifik\xe1t byl nainstalov\xe1n.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Otev\u0159ete pokro\u010dil\xe1 nastaven\xed aktivn\xed Wi-Fi s\xedt\u011b.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"P\u0159epn\u011bte ",(0,r.kt)("strong",{parentName:"p"},"Typ proxy")," na ",(0,r.kt)("strong",{parentName:"p"},"Ru\u010dn\xed"),". Pro ",(0,r.kt)("strong",{parentName:"p"},"n\xe1zev hostitele proxy")," zadejte uvedenou IP adresu va\u0161eho stoln\xedho po\u010d\xedta\u010de (krok 1). Do pole ",(0,r.kt)("strong",{parentName:"p"},"Port proxy")," zadejte port zvolen\xfd v s\xed\u0165ov\xfdch nastaven\xedch desktopov\xe9 aplikace AdGuard."))),(0,r.kt)("h3",{id:"ios"},"iOS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Poznamenejte si IP adresu va\u0161eho PC s nainstalovan\xfdm AdGuardem.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zkontrolujte, zda je ochrana AdGuard zapnuta. Pot\xe9 za\u0161krtn\u011bte pol\xed\u010dko ",(0,r.kt)("strong",{parentName:"p"},"Pou\u017e\xedt AdGuard jako HTTP proxy")," na kart\u011b ",(0,r.kt)("strong",{parentName:"p"},"S\xed\u0165")," v jeho nastaven\xed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Na stejn\xe9m po\u010d\xedta\u010di s AdGuardem pou\u017eijte tento odkaz pomoc\xed libovoln\xe9ho prohl\xed\u017ee\u010de: ",(0,r.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klepn\u011bte na tla\u010d\xedtko ",(0,r.kt)("strong",{parentName:"p"},"St\xe1hnout"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"P\u0159eneste sta\u017een\xfd soubor ",(0,r.kt)("strong",{parentName:"p"},"cert.cer")," do za\u0159\xedzen\xed, jeho\u017e provoz chcete p\u0159es AdGuard sm\u011brovat.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Otev\u0159ete ",(0,r.kt)("strong",{parentName:"p"},"Nastaven\xed")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Zabezpe\u010den\xed")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"\u0160ifrov\xe1n\xed a pov\u011b\u0159en\xed")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Instalace certifik\xe1tu"),". Za\u0159\xedzen\xed Android ve v\xfdchoz\xedm nastaven\xed ned\u016fv\u011b\u0159uj\xed certifik\xe1t\u016fm, tak\u017ee kdy\u017e zvol\xedte ",(0,r.kt)("strong",{parentName:"p"},"Certifik\xe1t CA"),", zobraz\xed se varov\xe1n\xed. Klepn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"P\u0159esto instalovat"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Otev\u0159ete ",(0,r.kt)("strong",{parentName:"p"},"Nastaven\xed")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Sta\u017een\xfd profil")," a klepn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Nainstalovat")," v prav\xe9m horn\xedm rohu. Zadejte sv\xe9 heslo a potvr\u010fte instalaci. Klepn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Hotovo"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Nastaven\xed")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Obecn\xe9")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Informace")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"D\u016fv\u011bryhodnost certifik\xe1tu"),". Zapn\u011bte p\u0159ep\xedna\u010d vedle ",(0,r.kt)("em",{parentName:"p"},"Adguard Personal CA"),". Certifik\xe1t byl nainstalov\xe1n.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Na tomto za\u0159\xedzen\xed otev\u0159ete pokro\u010dil\xe1 nastaven\xed aktivn\xed Wi-Fi s\xedt\u011b.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"P\u0159epn\u011bte ",(0,r.kt)("strong",{parentName:"p"},"Typ proxy")," na ",(0,r.kt)("strong",{parentName:"p"},"Ru\u010dn\xed"),". Pro ",(0,r.kt)("strong",{parentName:"p"},"n\xe1zev hostitele proxy")," zadejte uvedenou IP adresu va\u0161eho po\u010d\xedta\u010de (krok 1). Do pole ",(0,r.kt)("strong",{parentName:"p"},"Port proxy")," zadejte port zvolen\xfd v s\xed\u0165ov\xfdch nastaven\xedch desktopov\xe9 aplikace AdGuard."))))}s.isMDXComponent=!0}}]);