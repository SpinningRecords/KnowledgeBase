"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9581],{4137:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>N});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var k=r.createContext({}),m=function(e){var t=r.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=m(e.components);return r.createElement(k.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,k=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=m(a),N=n,d=u["".concat(k,".").concat(N)]||u[N]||s[N]||o;return a?r.createElement(d,p(p({ref:t},i),{},{components:a})):r.createElement(d,p({ref:t},i))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=u;var l={};for(var k in t)hasOwnProperty.call(t,k)&&(l[k]=t[k]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var m=2;m<o;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=a(7462),n=(a(7294),a(4137));const o={title:"Jak shroma\u017e\u010fovat soubory HAR",sidebar_position:1},p=void 0,l={unversionedId:"guides/collect-har-file",id:"guides/collect-har-file",title:"Jak shroma\u017e\u010fovat soubory HAR",description:"Soubory HAR pom\xe1haj\xed na\u0161im t\xfdm\u016fm technick\xe9 podpory \u0159e\u0161it slo\u017eit\xe9 probl\xe9my. K vytvo\u0159en\xed t\u011bchto soubor\u016f doporu\u010dujeme pou\u017e\xedt prohl\xed\u017ee\u010d Chrome nebo Firefox. IE 11, Edge a Safari v\u0161ak tak\xe9 umo\u017e\u0148uj\xed generov\xe1n\xed a export soubor\u016f .har.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/guides/collect-har-file.md",sourceDirName:"guides",slug:"/guides/collect-har-file",permalink:"/KnowledgeBase/cs/guides/collect-har-file",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/collect-har-file.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Jak shroma\u017e\u010fovat soubory HAR",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kredity a pod\u011bkov\xe1n\xed",permalink:"/KnowledgeBase/cs/miscellaneous/acknowledgements"},next:{title:"Jak nainstalovat certifik\xe1t proxy",permalink:"/KnowledgeBase/cs/guides/proxy-certificate"}},k={},m=[{value:"Chrome",id:"chrome",level:2},{value:"Edge",id:"edge",level:2},{value:"Firefox",id:"firefox",level:2},{value:"Internet Explorer 11",id:"ie11",level:2},{value:"Safari",id:"safari",level:2},{value:"Android",id:"android",level:2},{value:"Windows",id:"windows",level:2}],i={toc:m};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Soubory HAR pom\xe1haj\xed na\u0161im t\xfdm\u016fm technick\xe9 podpory \u0159e\u0161it slo\u017eit\xe9 probl\xe9my. K vytvo\u0159en\xed t\u011bchto soubor\u016f doporu\u010dujeme pou\u017e\xedt prohl\xed\u017ee\u010d Chrome nebo Firefox. IE 11, Edge a Safari v\u0161ak tak\xe9 umo\u017e\u0148uj\xed generov\xe1n\xed a export soubor\u016f ",(0,n.kt)("inlineCode",{parentName:"p"},".har"),"."),(0,n.kt)("h2",{id:"chrome"},"Chrome"),(0,n.kt)("p",null,"Postup vytvo\u0159en\xed souboru HAR v Chrome:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na URL, kde se probl\xe9m vyskytuje. Probl\xe9m zat\xedm nereproduktujte.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"N\xe1stroje pro v\xfdvoj\xe1\u0159e")),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Z menu: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Menu \u2192 Dal\u0161\xed n\xe1stroje \u2192 N\xe1stroje pro v\xfdvoj\xe1\u0159e")),"."),(0,n.kt)("li",{parentName:"ul"},"Na kl\xe1vesnici: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Ctrl+Shift+C")),", nebo ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Ctrl+Alt+I")),", nebo ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\u2325+\u2318+I pro Mac")),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klikn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Z\xe1lo\u017eku Network")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Najd\u011bte kulat\xe9 tla\u010d\xedtko v lev\xe9m horn\xedm rohu z\xe1lo\u017eky Network a zkontrolujte, zda je v \u010derven\xe9m re\u017eimu nahr\xe1v\xe1n\xed. Pokud je \u0161ed\xe1, kliknut\xedm na ni z\u010derven\xe1 a nahr\xe1v\xe1n\xed se spust\xed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pomoc\xed tla\u010d\xedtka ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"clear"))," (krou\u017ekov\xe9 tla\u010d\xedtko s proch\xe1zej\xedc\xed \u010d\xe1rou vedle tla\u010d\xedtka z\xe1znamu) vyma\u017eete ve\u0161kerou p\u0159edchoz\xed aktivitu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Za\u0161krtn\u011bte pol\xed\u010dko ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Preserve log"))," na z\xe1lo\u017ece Network.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Za\u0161krtn\u011bte pol\xed\u010dko ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Disable cache")),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png",alt:"chrome"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reprodukujte kroky, kter\xe9 zp\u016fsobuj\xed probl\xe9m.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ulo\u017ete relaci jako soubor .har kliknut\xedm prav\xfdm tla\u010d\xedtkem na m\u0159\xed\u017eku a v\xfdb\u011brem ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Save as HAR with content")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159epo\u0161lete na podporu AdGuardu (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") s podrobn\xfdm vysv\u011btlen\xedm probl\xe9mu. U\u017eite\u010dn\xe9 mohou b\xfdt i podp\u016frn\xe9 sn\xedmky obrazovky."))),(0,n.kt)("h2",{id:"edge"},"Edge"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na URL, kde se probl\xe9m vyskytuje. Probl\xe9m zat\xedm nereproduktujte.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"N\xe1stroje pro v\xfdvoj\xe1\u0159e")),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Z menu: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Menu \u2192 Dal\u0161\xed n\xe1stroje \u2192 N\xe1stroje pro v\xfdvoj\xe1\u0159e")),"."),(0,n.kt)("li",{parentName:"ul"},"Na kl\xe1vesnici: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Ctrl+Shift+C")),", nebo ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Ctrl+Alt+I")),", nebo ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\u2325+\u2318+I pro Mac")),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klikn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Z\xe1lo\u017eku Network")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Najd\u011bte kulat\xe9 tla\u010d\xedtko v lev\xe9m horn\xedm rohu z\xe1lo\u017eky Network a zkontrolujte, zda je v \u010derven\xe9m re\u017eimu nahr\xe1v\xe1n\xed. Pokud je \u0161ed\xe1, kliknut\xedm na ni z\u010derven\xe1 a nahr\xe1v\xe1n\xed se spust\xed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pomoc\xed tla\u010d\xedtka ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"clear"))," (krou\u017ekov\xe9 tla\u010d\xedtko s proch\xe1zej\xedc\xed \u010d\xe1rou vedle tla\u010d\xedtka z\xe1znamu) vyma\u017eete ve\u0161kerou p\u0159edchoz\xed aktivitu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Za\u0161krtn\u011bte pol\xed\u010dko ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Preserve log"))," na z\xe1lo\u017ece Network.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Za\u0161krtn\u011bte pol\xed\u010dko ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Disable cache")),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png",alt:"edge"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reprodukujte kroky, kter\xe9 zp\u016fsobuj\xed probl\xe9m.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ulo\u017ete relaci jako soubor .har kliknut\xedm prav\xfdm tla\u010d\xedtkem na m\u0159\xed\u017eku a v\xfdb\u011brem ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Save as HAR with content")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159epo\u0161lete na podporu AdGuardu (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") s podrobn\xfdm vysv\u011btlen\xedm probl\xe9mu. U\u017eite\u010dn\xe9 mohou b\xfdt i podp\u016frn\xe9 sn\xedmky obrazovky."))),(0,n.kt)("h2",{id:"firefox"},"Firefox"),(0,n.kt)("p",null,"Postup vytvo\u0159en\xed souboru HAR ve Firefoxu:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na URL, kde se probl\xe9m vyskytuje. Probl\xe9m zat\xedm nereproduktujte.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete N\xe1stroje pro v\xfdvoj\xe1\u0159e v re\u017eimu ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Network")),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Z menu: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Menu \u2192 Web Developer \u2192 Network")),"."),(0,n.kt)("li",{parentName:"ul"},"Na kl\xe1vesnici: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Ctrl+Shift+C")),", nebo ",(0,n.kt)("strong",{parentName:"li"},"\u2325+\u2318+E (Mac)"),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"V\u0161imn\u011bte si tla\u010d\xedtka ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"play/pause"))," v lev\xe9 horn\xed \u010d\xe1sti karty Network.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tla\u010d\xedtko by m\u011blo b\xfdt v re\u017eimu Play.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pokud jsou v m\u0159\xed\u017ece aktu\xe1ln\u011b zobrazeny n\u011bjak\xe9 informace, vyma\u017ete je kliknut\xedm na tla\u010d\xedtko ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"delete trash can"))," vedle tla\u010d\xedtka play/pause.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Za\u0161krtn\u011bte pol\xed\u010dko ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Persist Logs"))," na z\xe1lo\u017ece Network.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Za\u0161krtn\u011bte pol\xed\u010dko ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Disable cache")),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png",alt:"firefox"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reprodukujte kroky, kter\xe9 zp\u016fsobuj\xed probl\xe9m.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ulo\u017ete relaci jako soubor .har kliknut\xedm prav\xfdm tla\u010d\xedtkem na m\u0159\xed\u017eku a v\xfdb\u011brem ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Save all as HAR")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159epo\u0161lete na podporu AdGuardu (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") s podrobn\xfdm vysv\u011btlen\xedm probl\xe9mu. U\u017eite\u010dn\xe9 mohou b\xfdt i podp\u016frn\xe9 sn\xedmky obrazovky."))),(0,n.kt)("h2",{id:"ie11"},"Internet Explorer 11"),(0,n.kt)("p",null,"Postup vytvo\u0159en\xed souboru HAR v IE 11:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na URL, kde se probl\xe9m vyskytuje. Probl\xe9m zat\xedm nereproduktujte.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete N\xe1stroje pro v\xfdvoj\xe1\u0159e v re\u017eimu ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Network")),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Z nab\xeddky N\xe1stroje (ozuben\xe9 kolo): ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"N\xe1stroje pro v\xfdvoj\xe1\u0159e"))," \u2192 ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Z\xe1lo\u017eka S\xed\u0165")),"."),(0,n.kt)("li",{parentName:"ul"},"Na kl\xe1vesnici: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"F12 \u2192 Z\xe1lo\u017eka S\xed\u0165")),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"V\u0161imn\u011bte si tla\u010d\xedtka spu\u0161t\u011bn\xed profilov\xe1n\xed ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Play"))," a zastaven\xed profilov\xe1n\xed ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Stop"))," v lev\xe9 horn\xed \u010d\xe1sti z\xe1lo\u017eky S\xed\u0165.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tla\u010d\xedtko Play bude p\u0159i nahr\xe1v\xe1n\xed \u0161ed\xe9 a tla\u010d\xedtko Stop \u010derven\xe9. P\u0159ejd\u011bte do re\u017eimu ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Play")),".")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Pomoc\xed tla\u010d\xedtka ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Clear session"))," na z\xe1lo\u017ece S\xed\u0165 vyma\u017ete ve\u0161ker\xe9 informace o relaci zobrazen\xe9 ve spodn\xed m\u0159\xed\u017ece. N\xe1zvy zobraz\xedte najet\xedm na ikony.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tla\u010d\xedtko ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Clear session"))," je t\u0159\xed\u0159\xe1dkov\xe1 ikona s x.")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Za\u0161krtn\u011bte pol\xed\u010dko ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Disable cache")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reprodukujte kroky, kter\xe9 zp\u016fsobuj\xed probl\xe9m.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ulo\u017ete relaci jako soubor .har kliknut\xedm na tla\u010d\xedtko ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Save disk (Export as HAR) "))," na kart\u011b S\xed\u0165.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159epo\u0161lete na podporu AdGuardu (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") s podrobn\xfdm vysv\u011btlen\xedm probl\xe9mu. U\u017eite\u010dn\xe9 mohou b\xfdt i podp\u016frn\xe9 sn\xedmky obrazovky."))),(0,n.kt)("h2",{id:"safari"},"Safari"),(0,n.kt)("p",null,"Postup vytvo\u0159en\xed souboru HAR v Safari:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Na li\u0161t\u011b nab\xeddek Safari v horn\xed \u010d\xe1sti obrazovky najdete nab\xeddku ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Develop")),". Za\u0161krtn\u011bte pol\xed\u010dko ve spodn\xed \u010d\xe1sti vedle ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Show Develop menu in menu bar")),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pokud nen\xed vid\u011bt, zapn\u011bte ji p\u0159echodem na ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Safari \u2192 Preferences \u2192 Advanced")),".")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na URL, kde se probl\xe9m vyskytuje. Probl\xe9m zat\xedm nereproduktujte.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete z\xe1lo\u017eku ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Network"))," ve Web Inspector:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Z menu: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Develop \u2192 Show Web Inspector \u2192 Network")),"."),(0,n.kt)("li",{parentName:"ul"},"Na kl\xe1vesnici: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\u2325+\u2318+I \u2192 Network")))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Za\u0161krtn\u011bte pol\xed\u010dko ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Preserve Log"))," na prav\xe9 stran\u011b z\xe1lo\u017eky Network.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Vyma\u017ete aktu\xe1ln\xed polo\u017eky s\xedt\u011b kliknut\xedm na ikonu ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"delete Trash"))," zcela vpravo na z\xe1lo\u017ece Network.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Za\u0161krtn\u011bte pol\xed\u010dko ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Disable cache")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reprodukujte kroky, kter\xe9 zp\u016fsobuj\xed probl\xe9m.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ulo\u017ete relaci jako soubor .har kliknut\xedm na ikonu ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Export"))," vedle ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Preserve Log")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159epo\u0161lete na podporu AdGuardu (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") s podrobn\xfdm vysv\u011btlen\xedm probl\xe9mu. U\u017eite\u010dn\xe9 mohou b\xfdt i podp\u016frn\xe9 sn\xedmky obrazovky."))),(0,n.kt)("h2",{id:"android"},"Android"),(0,n.kt)("p",null,"Chcete-li z\xedskat soubory HAR, postupujte takto:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete AdGuard a p\u0159ejd\u011bte do ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Nastaven\xed")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"V menu zvolte ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Pokro\u010dil\xe9")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Vyberte ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"N\xedzko\xfarov\u0148ov\xe1 nastaven\xed")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Aktivujte ",(0,n.kt)("inlineCode",{parentName:"p"},"pref.har.capture")," (budete muset restartovat ochranu).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Nyn\xed probl\xe9m reprodukujte \u2014 otev\u0159ete aplikaci a prove\u010fte pot\u0159ebn\xe9 akce, aby se reklama zobrazila.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Nyn\xed ",(0,n.kt)("inlineCode",{parentName:"p"},"pref.har.capture")," op\u011bt vypn\u011bte.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Vra\u0165te se zp\u011bt a klepn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Exportovat protokoly a syst\xe9mov\xe9 informace"))," \u2192 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Ulo\u017eit")),"."))),(0,n.kt)("h2",{id:"windows"},"Windows"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Nastaven\xed"))," \u2192 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Obecn\xe1 nastaven\xed"))," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"*Pokro\u010dil\xe1 nastaven\xed")," a posu\u0148te se dol\u016f.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Za\u0161krtn\u011bte pol\xed\u010dko ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Enable HAR writting")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reprodukujte probl\xe9m.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Obecn\xe1 nastaven\xed"))," \u2192 klikn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Exportovat protokoly"))," \u2192 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Ulo\u017eit")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Deaktivujte z\xe1pis HAR zru\u0161en\xedm za\u0161krtnut\xed odpov\xeddaj\xedc\xedho pol\xed\u010dka."))))}s.isMDXComponent=!0}}]);