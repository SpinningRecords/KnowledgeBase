"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4125],{4137:(o,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>k});var a=t(7294);function n(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function l(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.push.apply(t,a)}return t}function r(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){n(o,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))}))}return o}function d(o,e){if(null==o)return{};var t,a,n=function(o,e){if(null==o)return{};var t,a,n={},l=Object.keys(o);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(n[t]=o[t]);return n}(o,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(o);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(o,t)&&(n[t]=o[t])}return n}var v=a.createContext({}),p=function(o){var e=a.useContext(v),t=e;return o&&(t="function"==typeof o?o(e):r(r({},e),o)),t},i=function(o){var e=p(o.components);return a.createElement(v.Provider,{value:e},o.children)},u={inlineCode:"code",wrapper:function(o){var e=o.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(o,e){var t=o.components,n=o.mdxType,l=o.originalType,v=o.parentName,i=d(o,["components","mdxType","originalType","parentName"]),s=p(t),k=n,m=s["".concat(v,".").concat(k)]||s[k]||u[k]||l;return t?a.createElement(m,r(r({ref:e},i),{},{components:t})):a.createElement(m,r({ref:e},i))}));function k(o,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof o||n){var l=t.length,r=new Array(l);r[0]=s;var d={};for(var v in e)hasOwnProperty.call(e,v)&&(d[v]=e[v]);d.originalType=o,d.mdxType="string"==typeof o?o:n,r[1]=d;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7820:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>v,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=t(7462),n=(t(7294),t(4137));const l={title:"Pr\u016fvodce pokro\u010dil\xfdm (n\xedzko\xfarov\u0148ov\xfdm) nastaven\xedm",sidebar_position:7},r=void 0,d={unversionedId:"adguard-for-windows/solving-problems/low-level-settings",id:"adguard-for-windows/solving-problems/low-level-settings",title:"Pr\u016fvodce pokro\u010dil\xfdm (n\xedzko\xfarov\u0148ov\xfdm) nastaven\xedm",description:"Tento \u010dl\xe1nek popisuje AdGuard pro Windows, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, st\xe1hn\u011bte si aplikaci AdGuard",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/low-level-settings",permalink:"/KnowledgeBase/cs/adguard-for-windows/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Pr\u016fvodce pokro\u010dil\xfdm (n\xedzko\xfarov\u0148ov\xfdm) nastaven\xedm",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"B\u011b\u017en\xe9 chyby instala\u010dn\xedho programu",permalink:"/KnowledgeBase/cs/adguard-for-windows/solving-problems/common-installer-errors"},next:{title:"Jak vytvo\u0159it soubor v\xfdpisu",permalink:"/KnowledgeBase/cs/adguard-for-windows/solving-problems/dump-file"}},v={},p=[{value:"Jak dos\xe1hnout pokro\u010dil\xfdch nastaven\xed",id:"jak-dos\xe1hnout-pokro\u010dil\xfdch-nastaven\xed",level:2},{value:"Pokro\u010dil\xe1 nastaven\xed",id:"pokro\u010dil\xe1-nastaven\xed",level:2},{value:"Blokovat TCP Fast Open",id:"blokovat-tcp-fast-open",level:3},{value:"Pou\u017e\xedt Encrypted ClientHello",id:"pou\u017e\xedt-encrypted-clienthello",level:3},{value:"Zkontrolovat transparentnost certifik\xe1t\u016f webov\xfdch str\xe1nek",id:"zkontrolovat-transparentnost-certifik\xe1t\u016f-webov\xfdch-str\xe1nek",level:3},{value:"Povolit kontrolu odvol\xe1n\xed certifik\xe1t\u016f SSL/TLS",id:"povolit-kontrolu-odvol\xe1n\xed-certifik\xe1t\u016f-ssltls",level:3},{value:"Zobrazit AdGuard VPN v nastaven\xed",id:"zobrazit-adguard-vpn-v-nastaven\xed",level:3},{value:"Vylou\u010dit aplikaci z filtrov\xe1n\xed zad\xe1n\xedm \xfapln\xe9 cesty",id:"vylou\u010dit-aplikaci-z-filtrov\xe1n\xed-zad\xe1n\xedm-\xfapln\xe9-cesty",level:3},{value:"Povolit vyskakovac\xed ozn\xe1men\xed AdGuardu",id:"povolit-vyskakovac\xed-ozn\xe1men\xed-adguardu",level:3},{value:"Automaticky zachyt\xe1vat URL adresy pro odb\u011br filtr\u016f",id:"automaticky-zachyt\xe1vat-url-adresy-pro-odb\u011br-filtr\u016f",level:3},{value:"Pou\u017e\xedt re\u017eim p\u0159esm\u011brov\xe1n\xed ovlada\u010de",id:"pou\u017e\xedt-re\u017eim-p\u0159esm\u011brov\xe1n\xed-ovlada\u010de",level:3},{value:"Otev\u0159\xedt hlavn\xed okno p\u0159i startu syst\xe9mu",id:"otev\u0159\xedt-hlavn\xed-okno-p\u0159i-startu-syst\xe9mu",level:3},{value:"Zapnout filtrov\xe1n\xed p\u0159i spu\u0161t\u011bn\xed syst\xe9mu",id:"zapnout-filtrov\xe1n\xed-p\u0159i-spu\u0161t\u011bn\xed-syst\xe9mu",level:3},{value:"Filtrovat localhost",id:"filtrovat-localhost",level:3},{value:"Vylou\u010dit zadan\xe9 rozsahy IP z filtrov\xe1n\xed",id:"vylou\u010dit-zadan\xe9-rozsahy-ip-z-filtrov\xe1n\xed",level:3},{value:"Povolit z\xe1pis HAR",id:"povolit-z\xe1pis-har",level:3},{value:"P\u0159idat do b\u011b\u017en\xe9ho po\u017eadavku HTTP dodate\u010dnou mezeru",id:"p\u0159idat-do-b\u011b\u017en\xe9ho-po\u017eadavku-http-dodate\u010dnou-mezeru",level:3},{value:"Upravit velikost fragmentu \xfavodn\xedho paketu TLS",id:"upravit-velikost-fragmentu-\xfavodn\xedho-paketu-tls",level:3},{value:"Velikost fragmentu b\u011b\u017en\xe9ho po\u017eadavku HTTP",id:"velikost-fragmentu-b\u011b\u017en\xe9ho-po\u017eadavku-http",level:3},{value:"Zobrazit QUIC",id:"zobrazit-quic",level:3},{value:"Povolit udr\u017eov\xe1n\xed TCP",id:"povolit-udr\u017eov\xe1n\xed-tcp",level:3},{value:"Interval udr\u017eov\xe1n\xed TCP",id:"interval-udr\u017eov\xe1n\xed-tcp",level:3},{value:"\u010casov\xfd limit udr\u017eov\xe1n\xed TCP",id:"\u010dasov\xfd-limit-udr\u017eov\xe1n\xed-tcp",level:3},{value:"Blokovat Java",id:"blokovat-java",level:3},{value:"\u010casov\xfd limit DNS serveru",id:"\u010dasov\xfd-limit-dns-serveru",level:3},{value:"Pou\u017e\xedt HTTP/3 pro DNS-over-HTTPS",id:"pou\u017e\xedt-http3-pro-dns-over-https",level:3},{value:"Pou\u017e\xedt z\xe1lo\u017en\xed DNS odchoz\xedch p\u0159ipojen\xed",id:"pou\u017e\xedt-z\xe1lo\u017en\xed-dns-odchoz\xedch-p\u0159ipojen\xed",level:3},{value:"Paraleln\xed dotazov\xe1n\xed na odchoz\xed p\u0159ipojen\xed DNS",id:"paraleln\xed-dotazov\xe1n\xed-na-odchoz\xed-p\u0159ipojen\xed-dns",level:3},{value:"V\u017edy odpov\xeddat na ne\xfasp\u011b\u0161n\xe9 DNS dotazy",id:"v\u017edy-odpov\xeddat-na-ne\xfasp\u011b\u0161n\xe9-dns-dotazy",level:3},{value:"Povolit filtrov\xe1n\xed zabezpe\u010den\xfdch DNS po\u017eadavk\u016f",id:"povolit-filtrov\xe1n\xed-zabezpe\u010den\xfdch-dns-po\u017eadavk\u016f",level:3},{value:"Re\u017eim blokov\xe1n\xed pro pravidla hosts",id:"re\u017eim-blokov\xe1n\xed-pro-pravidla-hosts",level:3},{value:"Re\u017eim blokov\xe1n\xed pro pravidla stylu adblock",id:"re\u017eim-blokov\xe1n\xed-pro-pravidla-stylu-adblock",level:3},{value:"Vlastn\xed IPv4 adresa",id:"vlastn\xed-ipv4-adresa",level:3},{value:"Vlastn\xed IPv6 adresa",id:"vlastn\xed-ipv6-adresa",level:3},{value:"Z\xe1lo\u017en\xed server",id:"z\xe1lo\u017en\xed-server",level:3},{value:"Blokovat ECH",id:"blokovat-ech",level:3},{value:"Seznam vlastn\xedch z\xe1lo\u017en\xedch server\u016f",id:"seznam-vlastn\xedch-z\xe1lo\u017en\xedch-server\u016f",level:3},{value:"Seznam vlastn\xedch bootstrap adres",id:"seznam-vlastn\xedch-bootstrap-adres",level:3},{value:"DNS v\xfdjimky",id:"dns-v\xfdjimky",level:3},{value:"Vylou\u010dit zadan\xe9 n\xe1zvy s\xedt\xed Wi-Fi (SSID) z DNS filtrov\xe1n\xed",id:"vylou\u010dit-zadan\xe9-n\xe1zvy-s\xedt\xed-wi-fi-ssid-z-dns-filtrov\xe1n\xed",level:3}],i={toc:p};function u(o){let{components:e,...t}=o;return(0,n.kt)("wrapper",(0,a.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro Windows, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"st\xe1hn\u011bte si aplikaci AdGuard"))),(0,n.kt)("p",null,"Pokro\u010dil\xe1 nastaven\xed, d\u0159\xedve zn\xe1m\xe1 jako n\xedzko\xfarov\u0148ov\xe1 nastaven\xed v\u011bt\u0161inou obsahuj\xed mo\u017enosti, kter\xe9 p\u0159esahuj\xed kompetence b\u011b\u017en\xe9ho u\u017eivatele a\xed p\u0159i ka\u017edodenn\xedm pou\u017e\xedv\xe1n\xed se nepou\u017e\xedvaj\xed. AdGuard pro Windows je navr\u017een tak, aby fungoval, ani\u017e by bylo nutn\xe9 cokoliv m\u011bnit, ale v n\u011bkter\xfdch p\u0159\xedpadech nebo p\u0159i \u0159e\u0161en\xed neobvykl\xe9ho probl\xe9mu poskytuje dal\u0161\xed funkce."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Zm\u011bna ",(0,n.kt)("em",{parentName:"p"},"Pokro\u010dil\xfdch nastaven\xed")," m\u016f\u017ee ne\u010dekan\u011b zp\u016fsobit probl\xe9my s v\xfdkonem AdGuardu, m\u016f\u017ee p\u0159eru\u0161it internetov\xe9 p\u0159ipojen\xed nebo ohrozit va\u0161i bezpe\u010dnost a soukrom\xed. Tuto \u010d\xe1st byste m\u011bli otev\u0159\xedt pouze v p\u0159\xedpad\u011b, \u017ee jste si jisti t\xedm, co d\u011bl\xe1te, nebo pokud se v\xe1s na to zeptal n\xe1\u0161 t\xfdm podpory.")),(0,n.kt)("h2",{id:"jak-dos\xe1hnout-pokro\u010dil\xfdch-nastaven\xed"},"Jak dos\xe1hnout pokro\u010dil\xfdch nastaven\xed"),(0,n.kt)("p",null,"Chcete-li p\u0159ej\xedt na ",(0,n.kt)("em",{parentName:"p"},"Pokro\u010dil\xe1 nastaven\xed"),", v hlavn\xedm okn\u011b klikn\u011bte na ",(0,n.kt)("em",{parentName:"p"},"Nastaven\xed \u2192 Obecn\xe1 nastaven\xed")," a p\u0159ejd\u011bte dol\u016f na ",(0,n.kt)("em",{parentName:"p"},"Pokro\u010dil\xe1 nastaven\xed"),". P\u0159\xedpadn\u011b vyberte ",(0,n.kt)("em",{parentName:"p"},"Pokro\u010dil\xe9 \u2192 Pokro\u010dil\xe1 nastaven\xed...")," v menu."),(0,n.kt)("h2",{id:"pokro\u010dil\xe1-nastaven\xed"},"Pokro\u010dil\xe1 nastaven\xed"),(0,n.kt)("p",null,"Jakmile otev\u0159ete Pokro\u010dil\xe1 nastaven\xed, zobraz\xed se v\xe1m n\xe1sleduj\xedc\xed mo\u017enosti:"),(0,n.kt)("h3",{id:"blokovat-tcp-fast-open"},"Blokovat TCP Fast Open"),(0,n.kt)("p",null,"Pokud je tato funkce povolena, zablokuje AdGuard v prohl\xed\u017ee\u010di Edge funkci TCP Fast Open. Chcete-li pou\u017e\xedt nastaven\xed, budete muset restartovat prohl\xed\u017ee\u010d."),(0,n.kt)("h3",{id:"pou\u017e\xedt-encrypted-clienthello"},"Pou\u017e\xedt Encrypted ClientHello"),(0,n.kt)("p",null,"Ka\u017ed\xe9 \u0161ifrovan\xe9 internetov\xe9 p\u0159ipojen\xed m\xe1 i ne\u0161ifrovanou \u010d\xe1st. Jedn\xe1 se o prvn\xed paket, kter\xfd obsahuje n\xe1zev serveru, ke kter\xe9mu se p\u0159ipojujete. Technologie Encrypted Client Hello m\xe1 tento probl\xe9m vy\u0159e\u0161it a za\u0161ifrovat posledn\xed kousek ne\u0161ifrovan\xfdch informac\xed. Chcete-li to vyu\u017e\xedt, povolte mo\u017enost ",(0,n.kt)("em",{parentName:"p"},"Pou\u017e\xedt Encrypted ClientHello"),". K vyhled\xe1n\xed konfigurace ECH pro danou dom\xe9nu pou\u017e\xedv\xe1 m\xedstn\xed proxy server DNS. Pokud je nalezen, paket ClientHello bude za\u0161ifrov\xe1n."),(0,n.kt)("h3",{id:"zkontrolovat-transparentnost-certifik\xe1t\u016f-webov\xfdch-str\xe1nek"},"Zkontrolovat transparentnost certifik\xe1t\u016f webov\xfdch str\xe1nek"),(0,n.kt)("p",null,"Ov\u011b\u0159uje pravost v\u0161ech certifik\xe1t\u016f pro dom\xe9nu na z\xe1klad\u011b z\xe1sad transparentnosti certifik\xe1t\u016f Chrome. Pokud certifik\xe1t nen\xed v souladu se z\xe1sadami Chrome Certificate Transparency, AdGuard webov\xe9 str\xe1nky nefiltruje. Chrome to zase zablokuje."),(0,n.kt)("h3",{id:"povolit-kontrolu-odvol\xe1n\xed-certifik\xe1t\u016f-ssltls"},"Povolit kontrolu odvol\xe1n\xed certifik\xe1t\u016f SSL/TLS"),(0,n.kt)("p",null,"Po povolen\xed t\xe9to mo\u017enosti se spust\xed asynchronn\xed kontroly OCSP, aby se ov\u011b\u0159ilo, zda nen\xed SSL/TLS certifik\xe1t webov\xe9 str\xe1nky odvol\xe1n."),(0,n.kt)("p",null,"Pokud se kontrola OCSP dokon\u010d\xed b\u011bhem minim\xe1ln\xedho \u010dasov\xe9ho limitu, AdGuard okam\u017eit\u011b pou\u017eije v\xfdsledek: zablokuje p\u0159ipojen\xed, pokud je certifik\xe1t odvol\xe1n nebo nav\xe1\u017ee p\u0159ipojen\xed, pokud je certifik\xe1t platn\xfd."),(0,n.kt)("p",null,"Pokud ov\u011b\u0159en\xed trv\xe1 p\u0159\xedli\u0161 dlouho, AdGuard nav\xe1\u017ee spojen\xed a pokra\u010duje v kontrole na pozad\xed. Pokud je certifik\xe1t odvol\xe1n, budou sou\u010dasn\xe1 i budouc\xed p\u0159ipojen\xed k dom\xe9n\u011b zablokov\xe1na."),(0,n.kt)("h3",{id:"zobrazit-adguard-vpn-v-nastaven\xed"},"Zobrazit AdGuard VPN v nastaven\xed"),(0,n.kt)("p",null,"Povolen\xed t\xe9to mo\u017enosti umo\u017e\u0148uje zobrazit kartu AdGuard VPN v nastaven\xed pro snadn\xe9 otev\u0159en\xed aplikace a webov\xe9 str\xe1nky produktu."),(0,n.kt)("h3",{id:"vylou\u010dit-aplikaci-z-filtrov\xe1n\xed-zad\xe1n\xedm-\xfapln\xe9-cesty"},"Vylou\u010dit aplikaci z filtrov\xe1n\xed zad\xe1n\xedm \xfapln\xe9 cesty"),(0,n.kt)("p",null,"Pokud chcete, aby AdGuard nefiltroval konkr\xe9tn\xed aplikace, zadejte k nim \xfaplnou cestu a tyto aplikace budou z filtrov\xe1n\xed vylou\u010deny. Jednotliv\xe9 cesty odd\u011blte st\u0159edn\xedky."),(0,n.kt)("h3",{id:"povolit-vyskakovac\xed-ozn\xe1men\xed-adguardu"},"Povolit vyskakovac\xed ozn\xe1men\xed AdGuardu"),(0,n.kt)("p",null,"Povolen\xedm t\xe9to funkce zobraz\xedte vyskakovac\xed ozn\xe1men\xed AdGuardu. Nezobrazuj\xed se p\u0159\xedli\u0161 \u010dasto a obsahuj\xed pouze d\u016fle\u017eit\xe9 informace. Posledn\xed vyskakovac\xed ozn\xe1men\xed m\u016f\u017eete vyvolat tak\xe9 pomoc\xed menu."),(0,n.kt)("h3",{id:"automaticky-zachyt\xe1vat-url-adresy-pro-odb\u011br-filtr\u016f"},"Automaticky zachyt\xe1vat URL adresy pro odb\u011br filtr\u016f"),(0,n.kt)("p",null,"Tuto funkci povolte, pokud chcete, aby AdGuard automaticky zachycoval adresy URL pro p\u0159ihl\xe1\u0161en\xed k odb\u011bru filtr\u016f (tj. ",(0,n.kt)("inlineCode",{parentName:"p"},"abp:subscribe")," a podobn\xe9) a otev\xedral dialogov\xe9 okno pro instalaci vlastn\xedho filtru."),(0,n.kt)("h3",{id:"pou\u017e\xedt-re\u017eim-p\u0159esm\u011brov\xe1n\xed-ovlada\u010de"},"Pou\u017e\xedt re\u017eim p\u0159esm\u011brov\xe1n\xed ovlada\u010de"),(0,n.kt)("p",null,"Pokud je tato mo\u017enost povolena, AdGuard zachyt\xed ve\u0161ker\xfd provoz a p\u0159esm\u011bruje jej na m\xedstn\xed proxy pro dal\u0161\xed filtrov\xe1n\xed."),(0,n.kt)("p",null,"V opa\u010dn\xe9m p\u0159\xedpad\u011b bude AdGuard filtrovat ve\u0161ker\xfd provoz za b\u011bhu bez p\u0159esm\u011brov\xe1n\xed. V tomto p\u0159\xedpad\u011b bude syst\xe9m pova\u017eovat AdGuard za jedinou aplikaci, kter\xe1 se p\u0159ipojuje k internetu (ostatn\xed aplikace jsou sm\u011brov\xe1ny p\u0159es n\u011bj). Nev\xfdhodou je, \u017ee se t\xedm sn\xed\u017e\xed \xfa\u010dinnost syst\xe9mov\xe9 br\xe1ny Firewall. V\xfdhodou je, \u017ee tento p\u0159\xedstup funguje o n\u011bco rychleji."),(0,n.kt)("h3",{id:"otev\u0159\xedt-hlavn\xed-okno-p\u0159i-startu-syst\xe9mu"},"Otev\u0159\xedt hlavn\xed okno p\u0159i startu syst\xe9mu"),(0,n.kt)("p",null,"Tuto mo\u017enost povolte, aby se po na\u010dten\xed syst\xe9mu otev\u0159elo hlavn\xed okno AdGuardu. V\u0161imn\u011bte si, \u017ee toto nastaven\xed nem\xe1 vliv na to, zda je skute\u010dn\xe1 slu\u017eba filtrov\xe1n\xed spu\u0161t\u011bna, nebo ne, toto nastaven\xed se nach\xe1z\xed v ",(0,n.kt)("em",{parentName:"p"},"Nastaven\xed \u2192 Obecn\xe1 nastaven\xed")),(0,n.kt)("h3",{id:"zapnout-filtrov\xe1n\xed-p\u0159i-spu\u0161t\u011bn\xed-syst\xe9mu"},"Zapnout filtrov\xe1n\xed p\u0159i spu\u0161t\u011bn\xed syst\xe9mu"),(0,n.kt)("p",null,"Od verze 7.12 slu\u017eba AdGuard ve v\xfdchoz\xedm nastaven\xed nefiltruje provoz po spu\u0161t\u011bn\xed opera\u010dn\xedho syst\xe9mu, pokud je zak\xe1z\xe1na mo\u017enost Spustit AdGuard p\u0159i startu syst\xe9mu. Jin\xfdmi slovy, slu\u017eba AdGuard je spu\u0161t\u011bna v re\u017eimu \u201ene\u010dinnosti\u201c. Tuto mo\u017enost povolte, aby AdGuard filtroval provoz i v p\u0159\xedpad\u011b, \u017ee aplikace nen\xed spu\u0161t\u011bna."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"P\u0159ed verz\xed 7.12 se slu\u017eba AdGuard ve v\xfdchoz\xedm nastaven\xed spou\u0161t\u011bla v re\u017eimu filtrov\xe1n\xed (i kdy\u017e byla zak\xe1z\xe1na volba ",(0,n.kt)("em",{parentName:"p"},"Spustit AdGuard p\u0159i startu syst\xe9mu"),"). Pokud v\xe1m vyhovovalo star\xe9 chov\xe1n\xed, tuto mo\u017enost povolte.")),(0,n.kt)("h3",{id:"filtrovat-localhost"},"Filtrovat localhost"),(0,n.kt)("p",null,"Pokud chcete, aby AdGuard filtroval zp\u011btn\xe1 p\u0159ipojen\xed, za\u0161krtn\u011bte toto pol\xed\u010dko. Tato mo\u017enost bude v\u017edy zapnut\xe1, pokud m\xe1te nainstalovanou AdGuard VPN, proto\u017ee jinak nebude fungovat."),(0,n.kt)("h3",{id:"vylou\u010dit-zadan\xe9-rozsahy-ip-z-filtrov\xe1n\xed"},"Vylou\u010dit zadan\xe9 rozsahy IP z filtrov\xe1n\xed"),(0,n.kt)("p",null,"Pokud nechcete, aby AdGuard filtroval ur\u010dit\xe9 pods\xedt\u011b, povolte tuto funkci a zadejte rozsahy IP v notaci CIDR (nap\u0159. 98.51.100.14/24) v \u010d\xe1sti ",(0,n.kt)("strong",{parentName:"p"},"Rozsahy IP vylou\u010den\xe9 z filtrov\xe1n\xed")," n\xed\u017ee."),(0,n.kt)("h3",{id:"povolit-z\xe1pis-har"},"Povolit z\xe1pis HAR"),(0,n.kt)("p",null,"Tato mo\u017enost by m\u011bla b\xfdt zapnuta ",(0,n.kt)("strong",{parentName:"p"},"pouze pro \xfa\u010dely lad\u011bn\xed"),". Pokud za\u0161krtnete toto pol\xed\u010dko, AdGuard vytvo\u0159\xed soubor obsahuj\xedc\xed informace o v\u0161ech filtrovan\xfdch po\u017eadavc\xedch HTTP ve form\xe1tu HAR 1.2. Tento soubor lze analyzovat pomoc\xed aplikace Fiddler. Upozor\u0148ujeme, \u017ee to m\u016f\u017ee v\xfdrazn\u011b zpomalit prohl\xed\u017een\xed webu."),(0,n.kt)("h3",{id:"p\u0159idat-do-b\u011b\u017en\xe9ho-po\u017eadavku-http-dodate\u010dnou-mezeru"},"P\u0159idat do b\u011b\u017en\xe9ho po\u017eadavku HTTP dodate\u010dnou mezeru"),(0,n.kt)("p",null,'P\u0159id\xe1 dodate\u010dnou mezeru mezi metodu HTTP a URL adresu a odstran\xed mezeru za polem "Host:", aby se zabr\xe1nilo hloubkov\xe9 kontrole paket\u016f. Nap\u0159. po\u017eadavek'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET /foo/bar/ HTTP/1.1\nHost: example.org")),(0,n.kt)("p",null,"bude p\u0159eveden na"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /foo/bar/ HTTP/1.1\nHost: example.org")),(0,n.kt)("p",null,"Tato mo\u017enost se pou\u017eije pouze v p\u0159\xedpad\u011b, \u017ee je povolena mo\u017enost ",(0,n.kt)("em",{parentName:"p"},"Ochrana p\u0159ed DPI")," v Re\u017eimu utajen\xed."),(0,n.kt)("h3",{id:"upravit-velikost-fragmentu-\xfavodn\xedho-paketu-tls"},"Upravit velikost fragmentu \xfavodn\xedho paketu TLS"),(0,n.kt)("p",null,"Ur\u010duje velikost fragmentace paket\u016f TCP, \u010d\xedm\u017e se zabr\xe1n\xed hloubkov\xe9 kontrole paket\u016f. Tato mo\u017enost m\xe1 vliv pouze na zabezpe\u010den\xfd (HTTPS) provoz."),(0,n.kt)("p",null,"Pokud je tato mo\u017enost povolena, AdGuard rozd\u011bl\xed po\u010d\xe1te\u010dn\xed paket TLS (paket ClientHello) na dv\u011b \u010d\xe1sti: prvn\xed m\xe1 zadanou d\xe9lku a druh\xe1 obsahuje zbytek a\u017e do d\xe9lky cel\xe9ho po\u010d\xe1te\u010dn\xedho paketu TLS."),(0,n.kt)("p",null,"Platn\xe9 hodnoty: 1\u20131500. Pokud je zad\xe1na neplatn\xe1 velikost, pou\u017eije se hodnota vybran\xe1 syst\xe9mem. Tato mo\u017enost se pou\u017eije pouze v p\u0159\xedpad\u011b, \u017ee je povolena mo\u017enost ",(0,n.kt)("em",{parentName:"p"},"Ochrana p\u0159ed DPI")," v Re\u017eimu utajen\xed."),(0,n.kt)("h3",{id:"velikost-fragmentu-b\u011b\u017en\xe9ho-po\u017eadavku-http"},"Velikost fragmentu b\u011b\u017en\xe9ho po\u017eadavku HTTP"),(0,n.kt)("p",null,"Uprav\xed velikost fragmentace po\u017eadavk\u016f HTTP. Tato mo\u017enost m\xe1 vliv pouze na prost\xfd HTTP provoz. Pokud je tato mo\u017enost povolena, AdGuard rozd\u011bl\xed po\u010d\xe1te\u010dn\xed paket na dv\u011b \u010d\xe1sti: prvn\xed m\xe1 zadanou d\xe9lku a druh\xe1 obsahuje zbytek a\u017e do d\xe9lky cel\xe9ho p\u016fvodn\xedho paketu."),(0,n.kt)("p",null,"Platn\xe9 hodnoty: 1\u20131500. Pokud je zad\xe1na neplatn\xe1 velikost, pou\u017eije se hodnota vybran\xe1 syst\xe9mem. Tato mo\u017enost se pou\u017eije pouze v p\u0159\xedpad\u011b, \u017ee je povolena mo\u017enost ",(0,n.kt)("em",{parentName:"p"},"Ochrana p\u0159ed DPI")," v Re\u017eimu utajen\xed."),(0,n.kt)("h3",{id:"zobrazit-quic"},"Zobrazit QUIC"),(0,n.kt)("p",null,"Umo\u017e\u0148uje zobrazit z\xe1znamy protokolu QUIC v z\xe1znamech filtrov\xe1n\xed. Pouze pro blokovan\xe9 po\u017eadavky."),(0,n.kt)("h3",{id:"povolit-udr\u017eov\xe1n\xed-tcp"},"Povolit udr\u017eov\xe1n\xed TCP"),(0,n.kt)("p",null,"Pravideln\xe9 odes\xedl\xe1n\xed paket\u016f TCP p\u0159es neaktivn\xed p\u0159ipojen\xed, aby se zajistilo jeho fungov\xe1n\xed a resetov\xe1n\xed \u010dasov\xfdch limit\u016f NAT. Tato mo\u017enost m\u016f\u017ee b\xfdt u\u017eite\u010dn\xe1 pro obejit\xed p\u0159\xedsn\xe9ho nastaven\xed p\u0159ekladu s\xed\u0165ov\xfdch adres (NAT), kter\xe9 pou\u017e\xedvaj\xed n\u011bkte\u0159\xed poskytovatel\xe9 internetov\xfdch slu\u017eeb."),(0,n.kt)("h3",{id:"interval-udr\u017eov\xe1n\xed-tcp"},"Interval udr\u017eov\xe1n\xed TCP"),(0,n.kt)("p",null,"Zde m\u016f\u017eete zadat dobu ne\u010dinnosti v sekund\xe1ch p\u0159ed odesl\xe1n\xedm udr\u017eovac\xed sondy. Pokud je zad\xe1na 0, pou\u017eije se hodnota vybran\xe1 syst\xe9mem."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Toto nastaven\xed funguje pouze v p\u0159\xedpad\u011b, \u017ee je povolena mo\u017enost ",(0,n.kt)("em",{parentName:"p"},"Povolit udr\u017eov\xe1n\xed TCP"),".")),(0,n.kt)("h3",{id:"\u010dasov\xfd-limit-udr\u017eov\xe1n\xed-tcp"},"\u010casov\xfd limit udr\u017eov\xe1n\xed TCP"),(0,n.kt)("p",null,"Zde m\u016f\u017eete zadat dobu v sekund\xe1ch p\u0159ed odesl\xe1n\xedm dal\u0161\xed udr\u017eovac\xed sondy neodpov\xeddaj\xedc\xedmu partnerovi. Pokud je zad\xe1na 0, pou\u017eije se hodnota vybran\xe1 syst\xe9mem."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Toto nastaven\xed funguje pouze v p\u0159\xedpad\u011b, \u017ee je povolena mo\u017enost ",(0,n.kt)("em",{parentName:"p"},"Povolit udr\u017eov\xe1n\xed TCP"),".")),(0,n.kt)("h3",{id:"blokovat-java"},"Blokovat Java"),(0,n.kt)("p",null,"N\u011bkter\xe9 webov\xe9 str\xe1nky a webov\xe9 slu\u017eby st\xe1le podporuj\xed z\xe1suvn\xe9 moduly Java. Rozhran\xed API, kter\xe9 slou\u017e\xed jako z\xe1klad pro z\xe1suvn\xe9 moduly Java, obsahuje z\xe1va\u017en\xe9 bezpe\u010dnostn\xed chyby. Tyto z\xe1suvn\xe9 moduly m\u016f\u017eete z bezpe\u010dnostn\xedch d\u016fvod\u016f zak\xe1zat. Nicm\xe9n\u011b, i kdy\u017e se rozhodnete pou\u017e\xedt mo\u017enost ",(0,n.kt)("em",{parentName:"p"},"Blokovat Java"),", JavaScript bude st\xe1le povolen."),(0,n.kt)("h3",{id:"\u010dasov\xfd-limit-dns-serveru"},"\u010casov\xfd limit DNS serveru"),(0,n.kt)("p",null,"Zde m\u016f\u017eete zadat dobu v milisekund\xe1ch, po kterou bude AdGuard \u010dekat na odezvu od vybran\xe9ho DNS serveru, ne\u017e se uch\xfdl\xed k nouzov\xe9mu \u0159e\u0161en\xed. Pokud toto pole nevypln\xedte nebo zad\xe1te neplatnou hodnotu, bude pou\u017eita hodnota 5000."),(0,n.kt)("h3",{id:"pou\u017e\xedt-http3-pro-dns-over-https"},"Pou\u017e\xedt HTTP/3 pro DNS-over-HTTPS"),(0,n.kt)("p",null,"Povol\xed HTTP/3 pro odchoz\xed p\u0159ipojen\xed DNS-over-HTTPS, aby se urychlilo p\u0159ipojen\xed, pokud vybran\xe9 odchoz\xed p\u0159ipojen\xed tento protokol podporuje. To znamen\xe1, \u017ee povolen\xed t\xe9to mo\u017enosti nezaru\u010duje, \u017ee v\u0161echny po\u017eadavky DNS budou odes\xedl\xe1ny prost\u0159ednictv\xedm HTTP/3."),(0,n.kt)("h3",{id:"pou\u017e\xedt-z\xe1lo\u017en\xed-dns-odchoz\xedch-p\u0159ipojen\xed"},"Pou\u017e\xedt z\xe1lo\u017en\xed DNS odchoz\xedch p\u0159ipojen\xed"),(0,n.kt)("p",null,"B\u011b\u017en\xe9 dotazy budou p\u0159esm\u011brov\xe1ny na z\xe1lo\u017en\xed odchoz\xed server, pokud v\u0161echny po\u017eadavky DNS na vybran\xe9 odchoz\xed p\u0159ipojen\xed sel\u017eou."),(0,n.kt)("h3",{id:"paraleln\xed-dotazov\xe1n\xed-na-odchoz\xed-p\u0159ipojen\xed-dns"},"Paraleln\xed dotazov\xe1n\xed na odchoz\xed p\u0159ipojen\xed DNS"),(0,n.kt)("p",null,"V\u0161echny odchoz\xed p\u0159ipojen\xed budou dotazov\xe1ny paraleln\u011b a je vr\xe1cena prvn\xed odpov\u011b\u010f. Vzhledem k tomu, \u017ee dotazy DNS jsou prov\xe1d\u011bny paraleln\u011b, zvy\u0161uje se povolen\xedm t\xe9to funkce rychlost internetu."),(0,n.kt)("h3",{id:"v\u017edy-odpov\xeddat-na-ne\xfasp\u011b\u0161n\xe9-dns-dotazy"},"V\u017edy odpov\xeddat na ne\xfasp\u011b\u0161n\xe9 DNS dotazy"),(0,n.kt)("p",null,"Pokud se p\u0159ekl\xe1d\xe1n\xed adres nezda\u0159ilo v ka\u017ed\xe9m z p\u0159ed\xe1van\xfdch odchoz\xedch p\u0159ipojen\xed a tak\xe9 v z\xe1lo\u017en\xedch dom\xe9n\xe1ch, bude odpov\u011bd\xed na po\u017eadavek DNS ",(0,n.kt)("inlineCode",{parentName:"p"},"SERVFAIL"),"."),(0,n.kt)("h3",{id:"povolit-filtrov\xe1n\xed-zabezpe\u010den\xfdch-dns-po\u017eadavk\u016f"},"Povolit filtrov\xe1n\xed zabezpe\u010den\xfdch DNS po\u017eadavk\u016f"),(0,n.kt)("p",null,"Krom\u011b b\u011b\u017en\xfdch DNS po\u017eadavk\u016f bude AdGuard p\u0159esm\u011brov\xe1vat zabezpe\u010den\xe9 DNS po\u017eadavky na m\xedstn\xed DNS proxy."),(0,n.kt)("h3",{id:"re\u017eim-blokov\xe1n\xed-pro-pravidla-hosts"},"Re\u017eim blokov\xe1n\xed pro pravidla hosts"),(0,n.kt)("p",null,"Zde m\u016f\u017eete vybrat zp\u016fsob, jak\xfdm bude AdGuard reagovat na dom\xe9ny blokovan\xe9 pravidly DNS na z\xe1klad\u011b ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax"},"syntaxe pravidla hosts"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Odpov\u011b\u010f s chybou "Refused"'),(0,n.kt)("li",{parentName:"ul"},'Odpov\u011b\u010f s chybou "NxDomain"'),(0,n.kt)("li",{parentName:"ul"},"Odpov\u011b\u010f s vlastn\xed IP adresou")),(0,n.kt)("h3",{id:"re\u017eim-blokov\xe1n\xed-pro-pravidla-stylu-adblock"},"Re\u017eim blokov\xe1n\xed pro pravidla stylu adblock"),(0,n.kt)("p",null,"Zde m\u016f\u017eete vybrat zp\u016fsob, jak\xfdm bude AdGuard reagovat na dom\xe9ny blokovan\xe9 pravidly DNS na z\xe1klad\u011b ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax"},"syntaxe stylu ad-block"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Odpov\u011b\u010f s chybou "Refused"'),(0,n.kt)("li",{parentName:"ul"},'Odpov\u011b\u010f s chybou "NxDomain"'),(0,n.kt)("li",{parentName:"ul"},"Odpov\u011b\u010f s vlastn\xed IP adresou")),(0,n.kt)("h3",{id:"vlastn\xed-ipv4-adresa"},"Vlastn\xed IPv4 adresa"),(0,n.kt)("p",null,'Pokud je v re\u017eimu blokov\xe1n\xed pro pravidla pro hostitele, nebo v re\u017eimu blokov\xe1n\xed pro pravidla typu adblock vybr\xe1na vlastn\xed IP adresa, bude tato IP adresa vr\xe1cena v odpov\u011bdi na blokovan\xe9 po\u017eadavky A. Pokud nejsou zad\xe1no nic, AdGuard odpov\xed v\xfdchoz\xed chybou "Refused".'),(0,n.kt)("h3",{id:"vlastn\xed-ipv6-adresa"},"Vlastn\xed IPv6 adresa"),(0,n.kt)("p",null,'Pokud je v re\u017eimu blokov\xe1n\xed pro pravidla pro hostitele, nebo v re\u017eimu blokov\xe1n\xed pro pravidla typu adblock vybr\xe1na vlastn\xed IP adresa, bude tato IP adresa vr\xe1cena v odpov\u011bdi na blokovan\xe9 po\u017eadavky AAAA. Pokud nejsou zad\xe1no nic, AdGuard odpov\xed v\xfdchoz\xed chybou "Refused".'),(0,n.kt)("h3",{id:"z\xe1lo\u017en\xed-server"},"Z\xe1lo\u017en\xed server"),(0,n.kt)("p",null,"Zde m\u016f\u017eete zadat alternativn\xed DNS server, na kter\xfd bude po\u017eadavek DNS p\u0159esm\u011brov\xe1n, pokud hlavn\xed server neodpov\xed v \u010dasov\xe9m limitu uveden\xe9m v n\xe1sleduj\xedc\xed \u010d\xe1sti. Na v\xfdb\u011br jsou t\u0159i mo\u017enosti:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Nepou\u017e\xedvat z\xe1lo\u017en\xed servery;"),(0,n.kt)("li",{parentName:"ul"},"Pou\u017e\xedt v\xfdchoz\xed syst\xe9mov\xe9 servery;"),(0,n.kt)("li",{parentName:"ul"},"Pou\u017e\xedt vlastn\xed servery.")),(0,n.kt)("h3",{id:"blokovat-ech"},"Blokovat ECH"),(0,n.kt)("p",null,"Pokud je tato mo\u017enost povolena, AdGuard odstran\xed z dotaz\u016f parametry Encrypted Client Hello."),(0,n.kt)("h3",{id:"seznam-vlastn\xedch-z\xe1lo\u017en\xedch-server\u016f"},"Seznam vlastn\xedch z\xe1lo\u017en\xedch server\u016f"),(0,n.kt)("p",null,"Pokud chcete, aby AdGuard pou\u017e\xedval vlastn\xed z\xe1lo\u017en\xed servery, uve\u010fte je v t\xe9to \u010d\xe1sti po jednom na \u0159\xe1dek."),(0,n.kt)("h3",{id:"seznam-vlastn\xedch-bootstrap-adres"},"Seznam vlastn\xedch bootstrap adres"),(0,n.kt)("p",null,"Bootstrap je zprost\u0159edkuj\xedc\xed DNS server pou\u017e\xedvan\xfd k z\xedsk\xe1n\xed IP adresy zabezpe\u010den\xe9ho DNS serveru, kter\xfd jste vybrali d\u0159\xedve v menu ",(0,n.kt)("em",{parentName:"p"},"DNS ochrana"),'. Takov\xe1 "st\u0159edn\xed cesta" je nutn\xe1 p\u0159i pou\u017eit\xed protokol\u016f, kter\xe9 ozna\u010duj\xed adresu serveru p\xedsmeny (nap\u0159\xedklad DNS-over-TLS). V tomto p\u0159\xedpad\u011b funguje bootstrap jako p\u0159eklada\u010d a p\u0159ev\xe1d\xed p\xedsmena na \u010d\xedsla, kter\xfdm syst\xe9m rozum\xed.'),(0,n.kt)("p",null,"Ve v\xfdchoz\xedm nastaven\xed je pou\u017eit syst\xe9mov\xfd p\u0159eklada\u010d DNS a bootstrap po\u017eadavek je odesl\xe1n prost\u0159ednictv\xedm portu 53. Pokud v\xe1m to nevyhovuje, uve\u010fte zde IP adresy DNS server\u016f, kter\xe9 budou pou\u017eity k ur\u010den\xed adresy \u0161ifrovan\xe9ho DNS serveru v po\u0159ad\xed shora dol\u016f. Zadan\xe9 IP adresy budou pou\u017eity v uveden\xe9m po\u0159ad\xed. Pokud zad\xe1te neplatn\xe9 adresy nebo nezad\xe1te \u017e\xe1dn\xe9, budou pou\u017eity syst\xe9mov\xe9 IP adresy."),(0,n.kt)("h3",{id:"dns-v\xfdjimky"},"DNS v\xfdjimky"),(0,n.kt)("p",null,"V\u0161echny DNS po\u017eadavky na dom\xe9ny zde uveden\xe9 budou p\u0159esm\u011brov\xe1ny na v\xfdchoz\xed syst\xe9mov\xfd DNS server nam\xedsto DNS serveru zadan\xe9ho v nastaven\xed aplikace. Na tyto po\u017eadavky se tak\xe9 neuplatn\xed pravidla DNS blokov\xe1n\xed."),(0,n.kt)("h3",{id:"vylou\u010dit-zadan\xe9-n\xe1zvy-s\xedt\xed-wi-fi-ssid-z-dns-filtrov\xe1n\xed"},"Vylou\u010dit zadan\xe9 n\xe1zvy s\xedt\xed Wi-Fi (SSID) z DNS filtrov\xe1n\xed"),(0,n.kt)("p",null,"DNS ochrana nebude fungovat pro s\xedt\u011b Wi-Fi uveden\xe9 v t\xe9to \u010d\xe1sti. Zadejte n\xe1zvy s\xedt\xed Wi-Fi (SSID), jeden na \u0159\xe1dek. To m\u016f\u017ee b\xfdt u\u017eite\u010dn\xe9, pokud je ur\u010dit\xe1 s\xed\u0165 Wi-Fi ji\u017e chr\xe1n\u011bna pomoc\xed AdGuard Home nebo jin\xfdm syst\xe9mem DNS ochrany. V tomto p\u0159\xedpad\u011b je zbyte\u010dn\xe9 znovu filtrovat DNS po\u017eadavky."))}u.isMDXComponent=!0}}]);