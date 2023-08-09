"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4637],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),v=a,m=d["".concat(s,".").concat(v)]||d[v]||k[v]||r;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7462),a=(n(7294),n(4137));const r={title:"Z\xe1sady AdGuard filtr\u016f",sidebar_position:6},l=void 0,i={unversionedId:"general/ad-filtering/filter-policy",id:"general/ad-filtering/filter-policy",title:"Z\xe1sady AdGuard filtr\u016f",description:"P\u0159i diskus\xedch o filtrech reklam AdGuardu se \u010dasto objevuje jedno t\xe9ma \u2014 zda by m\u011bl AdGuard blokovat tu \u010di onu reklamu. Nastaven\xedm pravidel se dr\u017e\xedme konkr\xe9tn\xedch krit\xe9ri\xed, kter\xe1 jsou velmi podobn\xe1 z\xe1sad\xe1m EasyList, kter\xe9 pova\u017eujeme za spr\xe1vn\xe9 a vhodn\xe9. Provedli jsme v nich v\u0161ak n\u011bkolik zm\u011bn.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/general/ad-filtering/filter-policy.md",sourceDirName:"general/ad-filtering",slug:"/general/ad-filtering/filter-policy",permalink:"/KnowledgeBase/cs/general/ad-filtering/filter-policy",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/ad-filtering/filter-policy.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Z\xe1sady AdGuard filtr\u016f",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Jak vytv\xe1\u0159et vlastn\xed filtry reklam",permalink:"/KnowledgeBase/cs/general/ad-filtering/create-own-filters"},next:{title:"What is HTTPS filtering",permalink:"/KnowledgeBase/cs/general/https-filtering/what-is-https-filtering"}},s={},u=[{value:"Terminologie",id:"terminologie",level:2},{value:"Spole\u010dn\xe1 krit\xe9ria",id:"spole\u010dn\xe1-krit\xe9ria",level:2},{value:"Filtry reklam",id:"filtry-reklam",level:2},{value:"Filtr ochrany sledov\xe1n\xed",id:"filtr-ochrany-sledov\xe1n\xed",level:2},{value:"AdGuard filtr sledov\xe1n\xed URL",id:"adguard-filtr-sledov\xe1n\xed-url",level:2},{value:"Filtr soci\xe1ln\xedch m\xe9di\xed",id:"filtr-soci\xe1ln\xedch-m\xe9di\xed",level:2},{value:"Filtr obt\u011b\u017eov\xe1n\xed",id:"filtr-obt\u011b\u017eov\xe1n\xed",level:2},{value:"Filtr pro odblokov\xe1n\xed u\u017eite\u010dn\xfdch reklam",id:"filtr-pro-odblokov\xe1n\xed-u\u017eite\u010dn\xfdch-reklam",level:2},{value:"Po\u017eadavky na kvalitu pravidel filtrov\xe1n\xed",id:"po\u017eadavky-na-kvalitu-pravidel-filtrov\xe1n\xed",level:2}],p={toc:u};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"P\u0159i diskus\xedch o filtrech reklam AdGuardu se \u010dasto objevuje jedno t\xe9ma \u2014 zda by m\u011bl AdGuard blokovat tu \u010di onu reklamu. Nastaven\xedm pravidel se dr\u017e\xedme konkr\xe9tn\xedch krit\xe9ri\xed, kter\xe1 jsou velmi podobn\xe1 z\xe1sad\xe1m ",(0,a.kt)("a",{parentName:"p",href:"https://easylist.to/pages/policy.html"},"EasyList"),", kter\xe9 pova\u017eujeme za spr\xe1vn\xe9 a vhodn\xe9. Provedli jsme v nich v\u0161ak n\u011bkolik zm\u011bn."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Common/page_filtering.png",alt:"To filter or not to filter"})),(0,a.kt)("h2",{id:"terminologie"},"Terminologie"),(0,a.kt)("p",null,"V cel\xe9m textu pou\u017e\xedv\xe1me term\xedny ",(0,a.kt)("strong",{parentName:"p"},"vlastn\xed")," a ",(0,a.kt)("strong",{parentName:"p"},"t\u0159et\xed strana"),"."),(0,a.kt)("p",null,'"Vlastn\xed" je webov\xe1 str\xe1nka, kterou u\u017eivatel nav\u0161t\xedv\xed \xfamysln\u011b a v\u011bdom\u011b, plus soubor zdroj\u016f na webu provozovan\xfdch stejnou organizac\xed. V praxi pova\u017eujeme zdroje za pat\u0159\xedc\xed stejn\xe9 stran\u011b, pokud jsou sou\u010d\xe1st\xed stejn\xe9 registrovateln\xe9 dom\xe9ny: ve\u0159ejn\xe1 p\u0159\xedpona plus jedna dal\u0161\xed zna\u010dka. P\u0159\xedklad: ',(0,a.kt)("inlineCode",{parentName:"p"},"site.example"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"www.site.example"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"s.u.b.site.example")," pat\u0159\xed stejn\xe9 stran\u011b, proto\u017ee ",(0,a.kt)("inlineCode",{parentName:"p"},"site.example")," je jejich spole\u010dnou registrovatelnou dom\xe9nou."),(0,a.kt)("p",null,'"T\u0159et\xed strana" je jak\xe1koli strana, kter\xe1 nespad\xe1 do v\xfd\u0161e uveden\xe9 definice "Vlastn\xed". Interakce s jin\xfdmi stranami se pova\u017euj\xed za interakce s t\u0159et\xedmi stranami, i kdy\u017e je u\u017eivatel informov\xe1n p\u0159echodn\u011b v kontextu (nap\u0159. formou p\u0159esm\u011brov\xe1n\xed). Pouh\xe9 najet\xed na dan\xfd obsah, jeho ztlumen\xed, pozastaven\xed nebo zav\u0159en\xed neznamen\xe1 z\xe1m\u011br interakce.'),(0,a.kt)("h2",{id:"spole\u010dn\xe1-krit\xe9ria"},"Spole\u010dn\xe1 krit\xe9ria"),(0,a.kt)("p",null,"Plat\xed stejn\u011b pro pravidla ve v\u0161ech filtrech."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pravidla, kter\xe1 \u010dasto zp\u016fsobuj\xed probl\xe9my p\u0159i pr\xe1ci s n\u011bkter\xfdmi webov\xfdmi str\xe1nkami, budou odstran\u011bna."),(0,a.kt)("li",{parentName:"ul"},"Pravidla pro konkr\xe9tn\xed webov\xe9 str\xe1nky budou p\u0159id\xe1na pouze v p\u0159\xedpad\u011b, \u017ee m\xe1 webov\xe1 str\xe1nka dostate\u010dnou n\xe1v\u0161t\u011bvnost. N\xe1v\u0161t\u011bvnost se ur\u010duje podle otev\u0159en\xfdch statistik (pokud jsou k dispozici), nebo jin\xfdmi zp\u016fsoby, nap\u0159. podle po\u010dtu sleduj\xedc\xedch na soci\xe1ln\xedch s\xedt\xedch. N\xe1v\u0161t\u011bvnost webov\xfdch str\xe1nek je pova\u017eov\xe1na za dostate\u010dnou, pokud maj\xed 100 tis\xedc n\xe1v\u0161t\u011bv za m\u011bs\xedc. P\u0159id\xe1n\xed pravidla pro webov\xe9 str\xe1nky, kter\xe9 nejsou tak popul\xe1rn\xed, zv\xe1\u017e\xedme, ale kone\u010dn\xe9 rozhodnut\xed je na spr\xe1vci seznamu filtr\u016f.")),(0,a.kt)("h2",{id:"filtry-reklam"},"Filtry reklam"),(0,a.kt)("p",null,"Tato \u010d\xe1st popisuje z\xe1kladn\xed filtr AdGuardu, filtr mobiln\xedch reklam a n\xe1sleduj\xedc\xed jazykov\u011b specifick\xe9 filtry: Rusk\xfd, n\u011bmeck\xfd, nizozemsk\xfd, \u0161pan\u011blsk\xfd/portugalsk\xfd, japonsk\xfd, tureck\xfd, \u010d\xednsk\xfd a francouzsk\xfd jazyk."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Co maj\xed tyto filtry blokovat?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tyto filtry blokuj\xed reklamy, kdekoli je to mo\u017en\xe9."),(0,a.kt)("li",{parentName:"ul"},"Reklamy by m\u011bly b\xfdt blokov\xe1ny bez ohledu na jejich d\u016fvody a c\xedle."),(0,a.kt)("li",{parentName:"ul"},"Zablokujeme reklamy zobrazen\xe9 \u0161kodliv\xfdmi aplikacemi nebo roz\u0161\xed\u0159en\xedmi, kter\xe9 vkl\xe1daj\xed reklamy. Vezm\u011bte pros\xedm na v\u011bdom\xed, \u017ee to d\u011bl\xe1me pouze pod podm\xednkou, \u017ee zad\xe1te, jak takovou aplikaci nebo roz\u0161\xed\u0159en\xed nainstalovat.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Omezen\xed a v\xfdjimky")),(0,a.kt)("p",null,"Pokud se na pravidlo vztahuje seznam omezen\xed popsan\xfd n\xed\u017ee, nebude p\u0159id\xe1no do hlavn\xedch filtr\u016f."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vlastn\xed reklamy webov\xfdch str\xe1nek by nem\u011bly b\xfdt odstra\u0148ov\xe1ny z\xe1m\u011brn\u011b. Na druhou stranu by nem\u011bly b\xfdt odblokov\xe1ny, pokud by to mohlo zp\u016fsobit, \u017ee se znovu objev\xed reklamy t\u0159et\xedch stran."),(0,a.kt)("li",{parentName:"ul"},"Pravidla pro konkr\xe9tn\xed webov\xe9 str\xe1nky budou p\u0159id\xe1na pouze v p\u0159\xedpad\u011b, \u017ee m\xe1 webov\xe1 str\xe1nka dostate\u010dnou n\xe1v\u0161t\u011bvnost. N\xe1v\u0161t\u011bvnost se ur\u010duje podle otev\u0159en\xfdch statistik (pokud jsou k dispozici), nebo jin\xfdmi zp\u016fsoby, nap\u0159. podle po\u010dtu sleduj\xedc\xedch na soci\xe1ln\xedch s\xedt\xedch. N\xe1v\u0161t\u011bvnost webov\xfdch str\xe1nek je pova\u017eov\xe1na za dostate\u010dnou, pokud maj\xed 100 tis\xedc n\xe1v\u0161t\u011bv za m\u011bs\xedc. P\u0159id\xe1n\xed pravidla pro webov\xe9 str\xe1nky, kter\xe9 nejsou tak popul\xe1rn\xed, zv\xe1\u017e\xedme, ale kone\u010dn\xe9 rozhodnut\xed je na spr\xe1vci seznamu filtr\u016f."),(0,a.kt)("li",{parentName:"ul"},"Skripty proti blokov\xe1n\xed budou blokov\xe1ny pouze v p\u0159\xedpad\u011b, \u017ee omezuj\xed nebo ovliv\u0148uj\xed funk\u010dnost webov\xfdch str\xe1nek."),(0,a.kt)("li",{parentName:"ul"},"Skripty proti blokov\xe1n\xed nebudou blokov\xe1ny v p\u0159\xedpadech, kdy je to zak\xe1z\xe1no z\xe1konem."),(0,a.kt)("li",{parentName:"ul"},"Pravidla, kter\xe1 \u010dasto zp\u016fsobuj\xed probl\xe9my p\u0159i pr\xe1ci s n\u011bkter\xfdmi webov\xfdmi str\xe1nkami, budou odstran\u011bna.")),(0,a.kt)("h2",{id:"filtr-ochrany-sledov\xe1n\xed"},"Filtr ochrany sledov\xe1n\xed"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Co bude t\xedmto filtrem blokov\xe1no?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tento filtr zablokuje v\u0161echny sl\xeddi\u010de, kter\xe9 shroma\u017e\u010fuj\xed osobn\xed \xfadaje u\u017eivatele.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sledov\xe1n\xed")," definujeme jako shroma\u017e\u010fov\xe1n\xed \xfadaj\u016f o identit\u011b nebo aktivit\u011b jednotlivce na jedn\xe9 nebo v\xedce webov\xfdch str\xe1nk\xe1ch. I kdy\u017e jsou tyto \xfadaje pova\u017eov\xe1ny za neidentifikovateln\xe9, st\xe1le se jedn\xe1 o sledov\xe1n\xed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sl\xeddi\u010d")," je online skript, jeho\u017e jedin\xfdm \xfa\u010delem nebo jedn\xedm z \xfa\u010del\u016f je sledov\xe1n\xed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Omezen\xed a v\xfdjimky")),(0,a.kt)("p",null,"Pokud se na pravidlo vztahuje seznam omezen\xed popsan\xfd n\xed\u017ee, nebude p\u0159id\xe1no do tohoto filtru."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pravidla, kter\xe1 zp\u016fsobuj\xed probl\xe9my s funk\u010dnost\xed webov\xfdch str\xe1nek, budou odstran\u011bna."),(0,a.kt)("li",{parentName:"ul"},"Pravidla pro konkr\xe9tn\xed webov\xe9 str\xe1nky budou p\u0159id\xe1na pouze v p\u0159\xedpad\u011b, \u017ee m\xe1 webov\xe1 str\xe1nka dostate\u010dnou n\xe1v\u0161t\u011bvnost. N\xe1v\u0161t\u011bvnost se ur\u010duje podle otev\u0159en\xfdch statistik (pokud jsou k dispozici), nebo jin\xfdmi zp\u016fsoby, nap\u0159. podle po\u010dtu sleduj\xedc\xedch na soci\xe1ln\xedch s\xedt\xedch. N\xe1v\u0161t\u011bvnost webov\xfdch str\xe1nek je pova\u017eov\xe1na za dostate\u010dnou, pokud maj\xed 100 tis\xedc n\xe1v\u0161t\u011bv za m\u011bs\xedc. P\u0159id\xe1n\xed pravidla pro webov\xe9 str\xe1nky, kter\xe9 nejsou tak popul\xe1rn\xed, zv\xe1\u017e\xedme, ale kone\u010dn\xe9 rozhodnut\xed je na spr\xe1vci seznamu filtr\u016f.")),(0,a.kt)("h2",{id:"adguard-filtr-sledov\xe1n\xed-url"},"AdGuard filtr sledov\xe1n\xed URL"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Co bude t\xedmto filtrem blokov\xe1no?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tento filtr odstran\xed z URL adres v\u0161echny sledovac\xed parametry.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sledov\xe1n\xed")," definujeme jako shroma\u017e\u010fov\xe1n\xed \xfadaj\u016f o identit\u011b nebo aktivit\u011b jednotlivce na jedn\xe9 nebo v\xedce webov\xfdch str\xe1nk\xe1ch. I kdy\u017e jsou tyto \xfadaje pova\u017eov\xe1ny za neidentifikovateln\xe9, st\xe1le se jedn\xe1 o sledov\xe1n\xed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Omezen\xed a v\xfdjimky")),(0,a.kt)("p",null,"Pokud se na pravidlo vztahuje seznam omezen\xed popsan\xfd n\xed\u017ee, nebude p\u0159id\xe1no do tohoto filtru."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pravidla, kter\xe1 by sni\u017eovala \xfarove\u0148 zabezpe\u010den\xed u\u017eivatel\u016f, budou odstran\u011bna."),(0,a.kt)("li",{parentName:"ul"},"Pravidla, kter\xe1 zp\u016fsobuj\xed probl\xe9my s funk\u010dnost\xed webov\xfdch str\xe1nek, budou odstran\u011bna."),(0,a.kt)("li",{parentName:"ul"},"Pravidla pro konkr\xe9tn\xed webov\xe9 str\xe1nky budou p\u0159id\xe1na pouze v p\u0159\xedpad\u011b, \u017ee m\xe1 webov\xe1 str\xe1nka dostate\u010dnou n\xe1v\u0161t\u011bvnost. N\xe1v\u0161t\u011bvnost se ur\u010duje podle otev\u0159en\xfdch statistik (pokud jsou k dispozici), nebo jin\xfdmi zp\u016fsoby, nap\u0159. podle po\u010dtu sleduj\xedc\xedch na soci\xe1ln\xedch s\xedt\xedch. N\xe1v\u0161t\u011bvnost webov\xfdch str\xe1nek je pova\u017eov\xe1na za dostate\u010dnou, pokud maj\xed 100 tis\xedc n\xe1v\u0161t\u011bv za m\u011bs\xedc. P\u0159id\xe1n\xed pravidla pro webov\xe9 str\xe1nky, kter\xe9 nejsou tak popul\xe1rn\xed, zv\xe1\u017e\xedme, ale kone\u010dn\xe9 rozhodnut\xed je na spr\xe1vci seznamu filtr\u016f.")),(0,a.kt)("h2",{id:"filtr-soci\xe1ln\xedch-m\xe9di\xed"},"Filtr soci\xe1ln\xedch m\xe9di\xed"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Co bude t\xedmto filtrem blokov\xe1no?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Tento filtr zablokuje widgety soci\xe1ln\xedch m\xe9di\xed (na webov\xfdch str\xe1nk\xe1ch t\u0159et\xedch stran), jako jsou tla\u010d\xedtka "Like" a "Share", widgety doporu\u010den\xed a dal\u0161\xed.')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Omezen\xed a v\xfdjimky")),(0,a.kt)("p",null,"Pokud se na pravidlo vztahuje seznam omezen\xed popsan\xfd n\xed\u017ee, nebude p\u0159id\xe1no do tohoto filtru."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Pravidla, kter\xe1 blokuj\xed widgety, kter\xe9 jsou sou\u010d\xe1st\xed funkc\xed webov\xfdch str\xe1nek, nap\u0159\xedklad "Koment\xe1\u0159e", "Vlo\u017een\xfd p\u0159\xedsp\u011bvek", "Pr\u016fzkumy" nebo widgety, kter\xe9 vy\u017eaduj\xed autorizaci prost\u0159ednictv\xedm soci\xe1ln\xedch s\xedt\xed.'),(0,a.kt)("li",{parentName:"ul"},"Pravidla, kter\xe1 blokuj\xed odkazy na komunity webov\xfdch str\xe1nek v soci\xe1ln\xedch s\xedt\xedch."),(0,a.kt)("li",{parentName:"ul"},"Pravidla, kter\xe1 zp\u016fsobuj\xed probl\xe9my s funk\u010dnost\xed webov\xfdch str\xe1nek, budou odstran\u011bna."),(0,a.kt)("li",{parentName:"ul"},"Pravidla pro konkr\xe9tn\xed webov\xe9 str\xe1nky budou p\u0159id\xe1na pouze v p\u0159\xedpad\u011b, \u017ee m\xe1 webov\xe1 str\xe1nka dostate\u010dnou n\xe1v\u0161t\u011bvnost. N\xe1v\u0161t\u011bvnost se ur\u010duje podle otev\u0159en\xfdch statistik (pokud jsou k dispozici), nebo jin\xfdmi zp\u016fsoby, nap\u0159. podle po\u010dtu sleduj\xedc\xedch na soci\xe1ln\xedch s\xedt\xedch. N\xe1v\u0161t\u011bvnost webov\xfdch str\xe1nek je pova\u017eov\xe1na za dostate\u010dnou, pokud maj\xed 100 tis\xedc n\xe1v\u0161t\u011bv za m\u011bs\xedc. P\u0159id\xe1n\xed pravidla pro webov\xe9 str\xe1nky, kter\xe9 nejsou tak popul\xe1rn\xed, zv\xe1\u017e\xedme, ale kone\u010dn\xe9 rozhodnut\xed je na spr\xe1vci seznamu filtr\u016f.")),(0,a.kt)("h2",{id:"filtr-obt\u011b\u017eov\xe1n\xed"},"Filtr obt\u011b\u017eov\xe1n\xed"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Co bude t\xedmto filtrem blokov\xe1no?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tento filtr blokuje p\u0159ek\xe1\u017eky na str\xe1nce. Tyto prvky nejsou reklamou, ale br\xe1n\xed ve v\xfdhledu a zt\u011b\u017euj\xed zobrazen\xed skute\u010dn\xe9ho obsahu webov\xe9 str\xe1nky. Mezi tyto prvky pat\u0159\xed ozn\xe1men\xed o souborech cookies, widgety t\u0159et\xedch stran, vyskakovac\xed okna na str\xe1nce, formul\xe1\u0159e pro p\u0159ihl\xe1\u0161en\xed k odb\u011bru e-mail\u016f, bannery se speci\xe1ln\xedmi nab\xeddkami a agresivn\u011b um\xedst\u011bn\xe9 widgety soci\xe1ln\xedch m\xe9di\xed.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Omezen\xed a v\xfdjimky")),(0,a.kt)("p",null,"Pokud se na pravidlo vztahuje seznam omezen\xed popsan\xfd n\xed\u017ee, nebude p\u0159id\xe1no do tohoto filtru."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pravidla, kter\xe1 blokuj\xed prvky, je\u017e jsou nezbytn\xe9 pro fungov\xe1n\xed webov\xfdch str\xe1nek (nap\u0159. autoriza\u010dn\xed formul\xe1\u0159e), nebudou blokov\xe1na, i kdy\u017e spl\u0148uj\xed jin\xe9 po\u017eadavky."),(0,a.kt)("li",{parentName:"ul"},"Pravidla, kter\xe1 zp\u016fsobuj\xed probl\xe9my s funk\u010dnost\xed webov\xfdch str\xe1nek, budou odstran\u011bna."),(0,a.kt)("li",{parentName:"ul"},"Pravidla pro konkr\xe9tn\xed webov\xe9 str\xe1nky budou p\u0159id\xe1na pouze v p\u0159\xedpad\u011b, \u017ee m\xe1 webov\xe1 str\xe1nka dostate\u010dnou n\xe1v\u0161t\u011bvnost. N\xe1v\u0161t\u011bvnost se ur\u010duje podle otev\u0159en\xfdch statistik (pokud jsou k dispozici), nebo jin\xfdmi zp\u016fsoby, nap\u0159. podle po\u010dtu sleduj\xedc\xedch na soci\xe1ln\xedch s\xedt\xedch. N\xe1v\u0161t\u011bvnost webov\xfdch str\xe1nek je pova\u017eov\xe1na za dostate\u010dnou, pokud maj\xed 100 tis\xedc n\xe1v\u0161t\u011bv za m\u011bs\xedc. P\u0159id\xe1n\xed pravidla pro webov\xe9 str\xe1nky, kter\xe9 nejsou tak popul\xe1rn\xed, zv\xe1\u017e\xedme, ale kone\u010dn\xe9 rozhodnut\xed je na spr\xe1vci seznamu filtr\u016f.")),(0,a.kt)("h2",{id:"filtr-pro-odblokov\xe1n\xed-u\u017eite\u010dn\xfdch-reklam"},"Filtr pro odblokov\xe1n\xed u\u017eite\u010dn\xfdch reklam"),(0,a.kt)("p",null,"Na rozd\xedl od jin\xfdch filtr\u016f tento filtr ",(0,a.kt)("strong",{parentName:"p"},"odblokuje")," ur\u010ditou reklamu. V\xedce se o tom do\u010dtete v \u010dl\xe1nku o ",(0,a.kt)("a",{parentName:"p",href:"../search-ads"},"reklam\xe1ch ve vyhled\xe1v\xe1n\xed a vlastn\xed propagaci"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Co bude t\xedmto filtrem odblokov\xe1no?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reklamy ve vyhled\xe1v\xe1n\xed (reklamy, kter\xe9 se zobrazuj\xed mezi v\xfdsledky p\u0159i pou\u017eit\xed vyhled\xe1va\u010de)."),(0,a.kt)("li",{parentName:"ul"},"Vlastn\xed propagace webov\xe9 str\xe1nky (kdy\u017e reklama na webov\xe9 str\xe1nce propaguje pr\xe1v\u011b tuto webovou str\xe1nku nebo jin\xe9 webov\xe9 str\xe1nky/soci\xe1ln\xed m\xe9dia apod., kter\xe9 s n\xed \xfazce souvisej\xed).")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Omezen\xed a v\xfdjimky")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pravidla, kter\xe1 zp\u016fsobuj\xed probl\xe9my s funk\u010dnost\xed webov\xfdch str\xe1nek, budou odstran\u011bna."),(0,a.kt)("li",{parentName:"ul"},"Pravidla pro konkr\xe9tn\xed webov\xe9 str\xe1nky budou p\u0159id\xe1na pouze v p\u0159\xedpad\u011b, \u017ee m\xe1 webov\xe1 str\xe1nka dostate\u010dnou n\xe1v\u0161t\u011bvnost. N\xe1v\u0161t\u011bvnost se ur\u010duje podle otev\u0159en\xfdch statistik (pokud jsou k dispozici), nebo jin\xfdmi zp\u016fsoby, nap\u0159. podle po\u010dtu sleduj\xedc\xedch na soci\xe1ln\xedch s\xedt\xedch. N\xe1v\u0161t\u011bvnost webov\xfdch str\xe1nek je pova\u017eov\xe1na za dostate\u010dnou, pokud maj\xed 100 tis\xedc n\xe1v\u0161t\u011bv za m\u011bs\xedc. P\u0159id\xe1n\xed pravidla pro webov\xe9 str\xe1nky, kter\xe9 nejsou tak popul\xe1rn\xed, zv\xe1\u017e\xedme, ale kone\u010dn\xe9 rozhodnut\xed je na spr\xe1vci seznamu filtr\u016f.")),(0,a.kt)("h2",{id:"po\u017eadavky-na-kvalitu-pravidel-filtrov\xe1n\xed"},"Po\u017eadavky na kvalitu pravidel filtrov\xe1n\xed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pravidla by m\u011bla b\xfdt co nejefektivn\u011bj\u0161\xed z hlediska v\xfdkonu."),(0,a.kt)("li",{parentName:"ul"},"Pravidla pro v\xfdjimky by m\u011bla b\xfdt co nejkonkr\xe9tn\u011bj\u0161\xed, aby se zabr\xe1nilo zbyte\u010dn\xe9mu odblokov\xe1n\xed."),(0,a.kt)("li",{parentName:"ul"},"Pravidla pro vkl\xe1d\xe1n\xed CSS a JS by se m\u011bla pou\u017e\xedvat co nejm\xe9n\u011b a pouze v p\u0159\xedpadech, kdy bez nich nelze reklamy blokovat.")))}k.isMDXComponent=!0}}]);