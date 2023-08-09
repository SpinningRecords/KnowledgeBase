"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8945],{4137:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),k=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=k(t.components);return r.createElement(d.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),s=k(a),u=n,N=s["".concat(d,".").concat(u)]||s[u]||i[u]||o;return a?r.createElement(N,p(p({ref:e},m),{},{components:a})):r.createElement(N,p({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,p=new Array(o);p[0]=s;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:n,p[1]=l;for(var k=2;k<o;k++)p[k]=a[k];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8944:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>k});var r=a(7462),n=(a(7294),a(4137));const o={title:"Jak nastavit odchoz\xed proxy",sidebar_position:8},p=void 0,l={unversionedId:"adguard-for-android/solving-problems/outbound-proxy",id:"adguard-for-android/solving-problems/outbound-proxy",title:"Jak nastavit odchoz\xed proxy",description:"Tento \u010dl\xe1nek popisuje AdGuard pro Android, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, st\xe1hn\u011bte si aplikaci AdGuard",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/outbound-proxy.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/outbound-proxy",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/outbound-proxy",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/outbound-proxy.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Jak nastavit odchoz\xed proxy",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Jak blokovat reklamy v YouTube",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/youtube-ads"},next:{title:"Jak chr\xe1nit AdGuard p\u0159ed ukon\u010den\xedm syst\xe9mem",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/background-work"}},d={},k=[{value:"P\u0159\xedklady konfigurace proxy",id:"p\u0159\xedklady-konfigurace-proxy",level:2},{value:"Jak pou\u017e\xedvat AdGuard s Tor",id:"jak-pou\u017e\xedvat-adguard-s-tor",level:3},{value:"Jak pou\u017e\xedvat AdGuard s PIA (Private Internet Access)",id:"jak-pou\u017e\xedvat-adguard-s-pia-private-internet-access",level:3},{value:"Jak pou\u017e\xedvat AdGuard s TorGuard",id:"jak-pou\u017e\xedvat-adguard-s-torguard",level:3},{value:"Jak pou\u017e\xedvat AdGuard s NordVPN",id:"jak-pou\u017e\xedvat-adguard-s-nordvpn",level:3},{value:"Jak pou\u017e\xedvat AdGuard se Shadowsocks",id:"jak-pou\u017e\xedvat-adguard-se-shadowsocks",level:3},{value:"Jak pou\u017e\xedvat AdGuard s Clash",id:"jak-pou\u017e\xedvat-adguard-s-clash",level:3},{value:"Omezen\xed",id:"omezen\xed",level:2}],m={toc:k};function i(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro Android, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"st\xe1hn\u011bte si aplikaci AdGuard"))),(0,n.kt)("p",null,"AdGuard umo\u017e\u0148uje sm\u011brovat provoz va\u0161eho za\u0159\xedzen\xed p\u0159es server proxy. Chcete-li z\xedskat p\u0159\xedstup k nastaven\xed proxy, otev\u0159ete ",(0,n.kt)("strong",{parentName:"p"},"Nastaven\xed")," a p\u0159ejd\u011bte na ",(0,n.kt)("strong",{parentName:"p"},"Filtrov\xe1n\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"S\xed\u0165")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy"),"."),(0,n.kt)("h2",{id:"p\u0159\xedklady-konfigurace-proxy"},"P\u0159\xedklady konfigurace proxy"),(0,n.kt)("p",null,"V tomto \u010dl\xe1nku uv\xe1d\xedme p\u0159\xedklady nastaven\xed n\u011bkter\xfdch nejobl\xedben\u011bj\u0161\xedch proxy server\u016f pro spolupr\xe1ci s AdGuardem."),(0,n.kt)("h3",{id:"jak-pou\u017e\xedvat-adguard-s-tor"},"Jak pou\u017e\xedvat AdGuard s Tor"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete AdGuard a jd\u011bte do ",(0,n.kt)("strong",{parentName:"p"},"Nastaven\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtrov\xe1n\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"S\xed\u0165")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy"),'. St\xe1hn\u011bte si "Orbot: Proxy with Tor" p\u0159\xedmo z ',(0,n.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=org.torproject.android&noprocess"},"Obchodu Play")," nebo klepnut\xedm na ",(0,n.kt)("strong",{parentName:"p"},"Integrovat s Tor")," a pot\xe9 ",(0,n.kt)("strong",{parentName:"p"},"Instalovat"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete Orbot a stiskn\u011bte tla\u010d\xedtko ",(0,n.kt)("strong",{parentName:"p"},"Spustit")," na hlavn\xed obrazovce aplikace.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Vra\u0165te se na obrazovku ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," v AdGuardu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klepn\u011bte na tla\u010d\xedtko ",(0,n.kt)("strong",{parentName:"p"},"Integrovat s Tor"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"V\u0161echna povinn\xe1 pole budou p\u0159edvypln\u011bna:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pole"),(0,n.kt)("th",{parentName:"tr",align:null},"Hodnota"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Typ proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS4")," nebo ",(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hostitel proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"127.0.0.1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"9050"))))))),(0,n.kt)("p",null,"Nebo m\u016f\u017eete klepnout na ",(0,n.kt)("strong",{parentName:"p"},"Proxy server")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"P\u0159idat proxy server"),", zadat tyto hodnoty ru\u010dn\u011b a nastavit Orbot jako v\xfdchoz\xed proxy."),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Zapn\u011bte hlavn\xed p\u0159ep\xedna\u010d Proxy a AdGuard ochranu, aby byl provoz za\u0159\xedzen\xed sm\u011brov\xe1n p\u0159es proxy server.")),(0,n.kt)("p",null,"Nyn\xed bude AdGuard p\u0159epos\xedlat ve\u0161ker\xfd provoz p\u0159es Orbot. Pokud zak\xe1\u017eete Orbot, p\u0159ipojen\xed k Internetu bude nedostupn\xe9, dokud nezak\xe1\u017eete nastaven\xed odchoz\xedho proxy v AdGuardu."),(0,n.kt)("h3",{id:"jak-pou\u017e\xedvat-adguard-s-pia-private-internet-access"},"Jak pou\u017e\xedvat AdGuard s PIA (Private Internet Access)"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"P\u0159edpokl\xe1d\xe1me, \u017ee jste ji\u017e klientem PIA VPN a m\xe1te ji nainstalovanou ve sv\xe9m za\u0159\xedzen\xed.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete AdGuard a jd\u011bte do ",(0,n.kt)("strong",{parentName:"p"},"Nastaven\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtrov\xe1n\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"S\xed\u0165")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klepn\u011bte na tla\u010d\xedtko ",(0,n.kt)("strong",{parentName:"p"},"P\u0159idat proxy")," a zadejte n\xe1sleduj\xedc\xed \xfadaje:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pole"),(0,n.kt)("th",{parentName:"tr",align:null},"Hodnota"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Typ proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hostitel proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"proxy-nl.privateinternetaccess.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"1080")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Mus\xedte tak\xe9 vyplnit pole ",(0,n.kt)("strong",{parentName:"p"},"U\u017eivatelsk\xe9 jm\xe9no/heslo"),". Za t\xedmto \xfa\u010delem se p\u0159ihlaste do ",(0,n.kt)("a",{parentName:"p",href:"https://www.privateinternetaccess.com/pages/client-sign-in"},"Klientsk\xe9ho ovl\xe1dac\xedho panelu")," na webu PIA. Klikn\u011bte na tla\u010d\xedtko ",(0,n.kt)("strong",{parentName:"p"},"Generovat heslo")," v \u010d\xe1sti ",(0,n.kt)("strong",{parentName:"p"},"Generovat heslo PPTP/L2TP/SOCKS"),'. Zobraz\xed se u\u017eivatelsk\xe9 jm\xe9no za\u010d\xednaj\xedc\xed na "x" a n\xe1hodn\xe9 heslo. Pou\u017eijte je k vypln\u011bn\xed pol\xed ',(0,n.kt)("strong",{parentName:"p"},"U\u017eivatelsk\xe9 jm\xe9no proxy")," a ",(0,n.kt)("strong",{parentName:"p"},"Heslo proxy")," v AdGuardu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klepn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},"Ulo\u017eit a vybrat"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Zapn\u011bte hlavn\xed p\u0159ep\xedna\u010d Proxy a AdGuard ochranu, aby byl provoz za\u0159\xedzen\xed sm\u011brov\xe1n p\u0159es proxy server."))),(0,n.kt)("h3",{id:"jak-pou\u017e\xedvat-adguard-s-torguard"},"Jak pou\u017e\xedvat AdGuard s TorGuard"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"P\u0159edpokl\xe1d\xe1me, \u017ee jste ji\u017e klientem TorGuard a m\xe1te jej nainstalovan\xfd ve sv\xe9m za\u0159\xedzen\xed.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete AdGuard a jd\u011bte do ",(0,n.kt)("strong",{parentName:"p"},"Nastaven\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtrov\xe1n\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"S\xed\u0165")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klepn\u011bte na tla\u010d\xedtko ",(0,n.kt)("strong",{parentName:"p"},"P\u0159idat proxy")," a zadejte n\xe1sleduj\xedc\xed \xfadaje:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pole"),(0,n.kt)("th",{parentName:"tr",align:null},"Hodnota"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Typ proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hostitel proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"proxy.torguard.org")," nebo ",(0,n.kt)("em",{parentName:"td"},"proxy.torguard.io"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"1080")," nebo ",(0,n.kt)("em",{parentName:"td"},"1085")," nebo ",(0,n.kt)("em",{parentName:"td"},"1090")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Do pol\xed ",(0,n.kt)("strong",{parentName:"p"},"U\u017eivatelsk\xe9 jm\xe9no")," a ",(0,n.kt)("strong",{parentName:"p"},"Heslo")," zadejte sv\xe9 u\u017eivatelsk\xe9 jm\xe9no proxy a heslo proxy, kter\xe9 jste si zvolili p\u0159i registraci do TorGuardu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klepn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},"Ulo\u017eit a vybrat"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Zapn\u011bte hlavn\xed p\u0159ep\xedna\u010d Proxy a AdGuard ochranu, aby byl provoz za\u0159\xedzen\xed sm\u011brov\xe1n p\u0159es proxy server."))),(0,n.kt)("h3",{id:"jak-pou\u017e\xedvat-adguard-s-nordvpn"},"Jak pou\u017e\xedvat AdGuard s NordVPN"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete AdGuard a jd\u011bte do ",(0,n.kt)("strong",{parentName:"p"},"Nastaven\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtrov\xe1n\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"S\xed\u0165")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klepn\u011bte na tla\u010d\xedtko ",(0,n.kt)("strong",{parentName:"p"},"P\u0159idat proxy")," a zadejte n\xe1sleduj\xedc\xed \xfadaje:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pole"),(0,n.kt)("th",{parentName:"tr",align:null},"Hodnota"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Typ proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hostitel proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"jak\xfdkoli server z ",(0,n.kt)("a",{parentName:"em",href:"https://support.nordvpn.com/Connectivity/Proxy/"},"tohoto seznamu")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"1080")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Do pol\xed ",(0,n.kt)("strong",{parentName:"p"},"U\u017eivatelsk\xe9 jm\xe9no")," a ",(0,n.kt)("strong",{parentName:"p"},"Heslo")," zadejte sv\xe9 u\u017eivatelsk\xe9 jm\xe9no a heslo NordVPN.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klepn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},"Ulo\u017eit a vybrat"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Zapn\u011bte hlavn\xed p\u0159ep\xedna\u010d Proxy a AdGuard ochranu, aby byl provoz za\u0159\xedzen\xed sm\u011brov\xe1n p\u0159es proxy server."))),(0,n.kt)("h3",{id:"jak-pou\u017e\xedvat-adguard-se-shadowsocks"},"Jak pou\u017e\xedvat AdGuard se Shadowsocks"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Zde p\u0159edpokl\xe1d\xe1me, \u017ee jste ji\u017e nakonfigurovali server Shadowsocks a klienta ve sv\xe9m za\u0159\xedzen\xed.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You should remove Shadowsocks app from filtering before setting up the process (",(0,n.kt)("strong",{parentName:"p"},"App management")," \u2192\xa0",(0,n.kt)("strong",{parentName:"p"},"Shadowsocks")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Route traffic through AdGuard"),") to avoid infinite loops and drops.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete AdGuard a jd\u011bte do ",(0,n.kt)("strong",{parentName:"p"},"Nastaven\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtrov\xe1n\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"S\xed\u0165")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klepn\u011bte na tla\u010d\xedtko ",(0,n.kt)("strong",{parentName:"p"},"P\u0159idat proxy")," a vypl\u0148te pole:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pole"),(0,n.kt)("th",{parentName:"tr",align:null},"Hodnota"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Typ proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hostitel proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"127.0.0.1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"1080")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klepn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},"Ulo\u017eit a vybrat"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Zapn\u011bte hlavn\xed p\u0159ep\xedna\u010d Proxy a AdGuard ochranu, aby byl provoz za\u0159\xedzen\xed sm\u011brov\xe1n p\u0159es proxy server."))),(0,n.kt)("h3",{id:"jak-pou\u017e\xedvat-adguard-s-clash"},"Jak pou\u017e\xedvat AdGuard s Clash"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"P\u0159edpokl\xe1d\xe1me, \u017ee jste ji\u017e klientem Clash a m\xe1te jej nainstalovan\xfd ve sv\xe9m za\u0159\xedzen\xed.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete nastaven\xed Clash a p\u0159ejd\u011bte do ",(0,n.kt)("strong",{parentName:"p"},"Nastaven\xed")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"S\xed\u0165")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Sm\u011brovat syst\xe9mov\xfd provoz")," a p\u0159epn\u011bte p\u0159ep\xedna\u010d. T\xedmto nastav\xedte Clash do re\u017eimu proxy.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otev\u0159ete Adguard a p\u0159ejd\u011bte na ",(0,n.kt)("strong",{parentName:"p"},"Spr\xe1va aplikac\xed"),". Vyberte ",(0,n.kt)("strong",{parentName:"p"},"Clash pro Android")," a zaka\u017ete ",(0,n.kt)("strong",{parentName:"p"},"Sm\u011brovat provoz skrze AdGuard"),". T\xedmto se odstran\xed zacyklen\xed provozu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klepn\u011bte na tla\u010d\xedtko ",(0,n.kt)("strong",{parentName:"p"},"P\u0159idat proxy")," a vypl\u0148te pole:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pole"),(0,n.kt)("th",{parentName:"tr",align:null},"Hodnota"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Typ proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hostitel proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"127.0.0.1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"7891"))))))),(0,n.kt)("h2",{id:"omezen\xed"},"Omezen\xed"),(0,n.kt)("p",null,"Existuje faktor, kter\xfd m\u016f\u017ee zabr\xe1nit sm\u011brov\xe1n\xed ur\u010dit\xfdch p\u0159enos\u016f p\u0159es odchoz\xed proxy. AdGuard p\u0159esm\u011bruje pouze provoz, kter\xfd p\u0159es n\u011bj proch\xe1z\xed. V podstat\u011b se jedn\xe1 o aplikace, kter\xe9 maj\xed na kart\u011b ",(0,n.kt)("strong",{parentName:"p"},"Spr\xe1va aplikac\xed")," povolen p\u0159\xedznak ",(0,n.kt)("strong",{parentName:"p"},"Blokov\xe1n\xed reklam"),"."))}i.isMDXComponent=!0}}]);