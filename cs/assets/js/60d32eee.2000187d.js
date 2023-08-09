"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4435],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(k,i(i({ref:t},l),{},{components:n})):o.createElement(k,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var o=n(7462),a=(n(7294),n(4137));const r={title:"Dokumentace pro administr\xe1tory",sidebar_position:5},i=void 0,d={unversionedId:"adguard-for-windows/admins-documentation",id:"adguard-for-windows/admins-documentation",title:"Dokumentace pro administr\xe1tory",description:"Tato str\xe1nka popisuje funkce a podrobnosti centr\xe1ln\xed spr\xe1vy z\xe1sad a p\u0159edvoleb AdGuardu.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-windows/admins-documentation.md",sourceDirName:"adguard-for-windows",slug:"/adguard-for-windows/admins-documentation",permalink:"/KnowledgeBase/cs/adguard-for-windows/admins-documentation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/admins-documentation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Dokumentace pro administr\xe1tory",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Zn\xe1m\xe9 probl\xe9my AdGuardu pro Windows",permalink:"/KnowledgeBase/cs/adguard-for-windows/solving-problems/known-issues"},next:{title:"P\u0159ehled funkc\xed",permalink:"/KnowledgeBase/cs/adguard-for-mac/overview"}},s={},u=[{value:"1. Sta\u017een\xed MSI",id:"msi-download",level:2},{value:"2. Konfigurace nastaven\xed pro va\u0161i s\xed\u0165",id:"settings-configuring",level:2},{value:"3. Kontrola dostupnosti server\u016f AdGuardu",id:"servers-available",level:2},{value:"4. Odesl\xe1n\xed MSI do va\u0161\xed s\xedt\u011b",id:"msi-push",level:2},{value:"5. Test instalace",id:"installation-test",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tato str\xe1nka popisuje funkce a podrobnosti centr\xe1ln\xed spr\xe1vy z\xe1sad a p\u0159edvoleb AdGuardu."),(0,a.kt)("h2",{id:"msi-download"},"1. Sta\u017een\xed MSI"),(0,a.kt)("p",null,"St\xe1hn\u011bte si ",(0,a.kt)("a",{parentName:"p",href:"https://static.adtidy.org/windows/setup.msi"},"AdGuard MSI"),"."),(0,a.kt)("h2",{id:"settings-configuring"},"2. Konfigurace nastaven\xed pro va\u0161i s\xed\u0165"),(0,a.kt)("p",null,"V po\u010d\xedta\u010d\xedch, kter\xe9 jsou p\u0159ipojeny k dom\xe9n\u011b Active Directory, m\u016f\u017ee b\xfdt nastaven\xed z\xe1sad ulo\u017eeno tak\xe9 v registru pod ",(0,a.kt)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE")," v n\xe1sleduj\xedc\xed cest\u011b: ",(0,a.kt)("inlineCode",{parentName:"p"},"Software\\Policies\\AdGuard\\"),"."),(0,a.kt)("p",null,"Jedinou podporovanou z\xe1sadou je ",(0,a.kt)("inlineCode",{parentName:"p"},"LicenseKey"),". Pokud je tato z\xe1sada nastavena, bude ji AdGuard up\u0159ednost\u0148ovat p\u0159ed t\xedm, co m\u016f\u017ee u\u017eivatel zadat v rozhran\xed. Tento licen\u010dn\xed kl\xed\u010d se pou\u017eije pro kontrolu stavu licence."),(0,a.kt)("h2",{id:"servers-available"},"3. Kontrola dostupnosti server\u016f AdGuardu"),(0,a.kt)("p",null,"AdGuard se p\u0159ipojuje ke dv\u011bma hostitel\u016fm: ",(0,a.kt)("inlineCode",{parentName:"p"},"api.adguard.org")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"filters.adtidy.org"),". Ujist\u011bte se, \u017ee jsou oba servery dostupn\xe9."),(0,a.kt)("h2",{id:"msi-push"},"4. Odesl\xe1n\xed MSI do va\u0161\xed s\xedt\u011b"),(0,a.kt)("p",null,"Pokud obvykle pou\u017e\xedv\xe1te SMS nebo jin\xe9 n\xe1stroje, pou\u017eijte je k odesl\xe1n\xed AdGuard MSI stejn\u011b jako u jin\xfdch instala\u010dn\xedch bal\xed\u010dk\u016f."),(0,a.kt)("p",null,"Jinak m\u016f\u017eete MSI spustit na c\xedlov\xe9m po\u010d\xedta\u010di p\u0159\xedmo (a nezji\u0161tn\u011b) pomoc\xed tohoto p\u0159\xedkazu: ",(0,a.kt)("inlineCode",{parentName:"p"},"Msiexec /q /i AdGuard.msi")),(0,a.kt)("p",null,"Pokud pot\u0159ebujete spustit aktualizaci, pou\u017eijte tento p\u0159\xedkaz: ",(0,a.kt)("inlineCode",{parentName:"p"},"Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Tyto p\u0159\xedkazy mus\xedte spou\u0161t\u011bt s pr\xe1vy administr\xe1tora.")),(0,a.kt)("p",null,"Pokud chcete nainstalovat AdGuard do po\u010d\xedta\u010de se syst\xe9mem Windows 7 ujist\u011bte se, \u017ee je v n\u011bm nainstalov\xe1n profil Client .NET 4: ",(0,a.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/download/details.aspx?id=24872"},"https://www.microsoft.com/en-us/download/details.aspx?id=24872")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"P\u0159i instalaci AdGuardu pro Windows z MSI jsou automatick\xe9 aktualizace zak\xe1z\xe1ny. Pokud chcete povolit aktualizace pro u\u017eivatele (co\u017e se nedoporu\u010duje, proto\u017ee centralizovan\xe9 aktualizace nebudou mo\u017en\xe9), nastavte hodnotu parametru ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowCheckUpdates")," pro kl\xed\u010d ",(0,a.kt)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Adguard")," na ",(0,a.kt)("inlineCode",{parentName:"p"},"ANO")," (nerozli\u0161uje se velikost p\xedsmen). V tomto p\u0159\xedpad\u011b budou automatick\xe9 aktualizace povoleny. Jak\xe1koli jin\xe1 hodnota nebo \u017e\xe1dn\xe1 hodnota tohoto parametru automatick\xe9 aktualizace zak\xe1\u017ee.")),(0,a.kt)("h2",{id:"installation-test"},"5. Test instalace"),(0,a.kt)("p",null,'V c\xedlov\xe9m po\u010d\xedta\u010di spus\u0165te AdGuard. Otev\u0159ete obrazovku licence a zkontrolujte, zda pou\u017e\xedv\xe1 nastavenou licenci. Mo\u017en\xe1 budete muset kliknout na tla\u010d\xedtko "Obnovit stav", aby AdGuard ov\u011b\u0159il licen\u010dn\xed kl\xed\u010d.'))}p.isMDXComponent=!0}}]);