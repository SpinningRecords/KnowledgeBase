"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6954],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=o,v=m["".concat(i,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(v,r(r({ref:t},u),{},{components:n})):a.createElement(v,r({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),o=(n(7294),n(4137));const l={title:"Tvary mno\u017en\xe9ho \u010d\xedsla",sidebar_position:4},r=void 0,p={unversionedId:"miscellaneous/contribute/translate/plural-forms",id:"miscellaneous/contribute/translate/plural-forms",title:"Tvary mno\u017en\xe9ho \u010d\xedsla",description:"Mezi sv\u011btov\xfdmi jazyky je mnoho rozd\xedl\u016f. Jedn\xedm z t\u011bchto rozd\xedl\u016f je pou\u017e\xedv\xe1n\xed mno\u017en\xe9ho \u010d\xedsla, kter\xe9 m\u016f\u017ee zp\u016fsobit velk\xe9 pot\xed\u017ee p\u0159i p\u0159ekladech.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/miscellaneous/contribute/translate/plural-forms.md",sourceDirName:"miscellaneous/contribute/translate",slug:"/miscellaneous/contribute/translate/plural-forms",permalink:"/KnowledgeBase/cs/miscellaneous/contribute/translate/plural-forms",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/miscellaneous/contribute/translate/plural-forms.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Tvary mno\u017en\xe9ho \u010d\xedsla",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Sm\u011brnice a doporu\u010den\xed",permalink:"/KnowledgeBase/cs/miscellaneous/contribute/translate/guidelines"},next:{title:"Jak up\u0159ednostnit p\u0159eklady soubor\u016f na Crowdinu",permalink:"/KnowledgeBase/cs/miscellaneous/contribute/translate/translation-priority"}},i={},s=[{value:"Co znamenaj\xed tvary mno\u017en\xe9ho \u010d\xedsla?",id:"plurals",level:2},{value:"Kde se m\u016f\u017eete dozv\u011bd\u011bt o po\u010dtu tvar\u016f mno\u017en\xe9ho \u010d\xedsla?",id:"where-to-learn",level:2},{value:"Mno\u017en\xe1 \u010d\xedsla v p\u0159ekladech AdGuardu",id:"translations",level:2},{value:"1. Fr\xe1ze s \u0159et\u011bzcov\xfdmi kl\xed\u010di kon\u010d\xedc\xedmi na <code>.singular</code>, <code>.dual</code>, <code>.plural</code>",id:"1type",level:3},{value:"2. \u0158et\u011bzce s podstatn\xfdmi jm\xe9ny v jednotn\xe9m a mno\u017en\xe9m \u010d\xedsle odd\u011blen\xe9 \u010d\xe1rkami",id:"2type",level:3},{value:"3. \u0158et\u011bzce, kter\xe9 pou\u017e\xedvaj\xed vzor vyvinut\xfd spole\u010dnost\xed Crowdin",id:"3type",level:3},{value:"4. \u0158et\u011bzce se \u0161ablonami odd\u011blen\xfdmi svisl\xfdmi \u010darami",id:"4type",level:3},{value:"Kr\xe1tk\xe9 shrnut\xed",id:"summury",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Mezi sv\u011btov\xfdmi jazyky je mnoho rozd\xedl\u016f. Jedn\xedm z t\u011bchto rozd\xedl\u016f je pou\u017e\xedv\xe1n\xed mno\u017en\xe9ho \u010d\xedsla, kter\xe9 m\u016f\u017ee zp\u016fsobit velk\xe9 pot\xed\u017ee p\u0159i p\u0159ekladech."),(0,o.kt)("p",null,"D\u016frazn\u011b doporu\u010dujeme, abyste si tento \u010dl\xe1nek \u0159\xe1dn\u011b p\u0159e\u010detli a dozv\u011bd\u011bli se v\xedce o tvarech mno\u017en\xe9ho \u010d\xedsla a jejich pou\u017eit\xed v p\u0159ekladech AdGuardu."),(0,o.kt)("h2",{id:"plurals"},"Co znamenaj\xed tvary mno\u017en\xe9ho \u010d\xedsla?"),(0,o.kt)("p",null,"Podstatn\xe1 jm\xe9na v r\u016fzn\xfdch jazyc\xedch mohou m\xedt n\u011bkolik tvar\u016f mno\u017en\xe9ho \u010d\xedsla. Jejich pou\u017eit\xed z\xe1vis\xed na po\u010dtu v\u011bc\xed, o kter\xfdch mluv\xedte."),(0,o.kt)("p",null,"Nap\u0159. anglick\xe1 slova maj\xed dva slovn\xed tvary, kdy\u017e se o n\u011b\u010dem mluv\xed v jednotn\xe9m \u010d\xedsle, nap\u0159. ",(0,o.kt)("em",{parentName:"p"},"'one star'")," a v mno\u017en\xe9m \u010d\xedsle \u2014 ",(0,o.kt)("em",{parentName:"p"},"'two stars'"),'. Je jedno, jestli \u0159eknete p\u011bt, dvacet \u0161est nebo t\u0159eba p\u011bt set t\u0159icet dva hv\u011bzdi\u010dek \u2014 koncov\xe9 "s" z\u016fstane stejn\xe9. N\u011bkter\xe9 jazyky v\u0161ak mohou obsahovat pouze jeden nebo v\xedce tvar\u016f mno\u017en\xe9ho \u010d\xedsla.'),(0,o.kt)("p",null,"Na rozd\xedl od angli\u010dtiny m\xe1 pol\u0161tina t\u0159i tvary mno\u017en\xe9ho \u010d\xedsla podstatn\xfdch jmen. Jeden z nich se pou\u017e\xedv\xe1, kdy\u017e se mluv\xed o n\u011b\u010dem v jednotn\xe9m \u010d\xedsle, druh\xfd tvar se pou\u017e\xedv\xe1 v mno\u017en\xe9m \u010d\xedsle, ale s \u010d\xedslovkami kon\u010d\xedc\xedmi na 2-4, s v\xfdjimkou 12-14, a t\u0159et\xed tvar \u2014 pro slova s jin\xfdmi \u010d\xedslovkami p\u0159ed nimi."),(0,o.kt)("p",null,"Pod\xedvejte se na tento obr\xe1zek. Zde vid\xedte skupiny \u010d\xedslovek, kter\xe9 ur\u010duj\xed tvar slova, kdy\u017e p\u0159ed n\xedm stoj\xedte."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png",alt:"Polish"})),(0,o.kt)("p",null,"Pro lep\u0161\xed pochopen\xed si ud\u011blejme malou paralelu mezi angli\u010dtinou a pol\u0161tinou:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  Anglick\xe1 verze:                                                 Polsk\xe9 ekvivalenty:\n\n  1. forma - It takes one hour.                                     1. forma - Zajmuje to godzin\u0119.\n  2. forma - It takes two hours.                                    2. forma - Zajmuje to dwie godziny.\n  3. forma - It takes five hours.                                   3. forma - Zajmuje to pi\u0119\u0107 godzin.\n")),(0,o.kt)("p",null,"Nyn\xed je z\u0159ejm\xe9, \u017ee polsk\xe9 slovo ",(0,o.kt)("em",{parentName:"p"},'"godzin\u0119"')," (hodina) m\xe1 t\u0159i r\u016fzn\xe9 podoby, zat\xedmco anglick\xe9 slovo m\u011bn\xed sv\u016fj tvar s dan\xfdmi \u010d\xedslovkami pouze dvakr\xe1t."),(0,o.kt)("p",null,"Krom\u011b pol\u0161tiny existuje mnoho dal\u0161\xedch jazyk\u016f, kter\xe9 maj\xed t\u0159i a v\xedce tvar\u016f mno\u017en\xe9ho \u010d\xedsla, nap\u0159\xedklad ru\u0161tina, srb\u0161tina, sloven\u0161tina, \u010de\u0161tina atd. Ne v\u0161echny se v\u0161ak \u0159\xedd\xed stejn\xfdm pravidlem. Proto je d\u016fle\u017eit\xe9 v\u011bd\u011bt, kolik tvar\u016f mno\u017en\xe9ho \u010d\xedsla v\xe1\u0161 jazyk obsahuje a jak je m\u016f\u017eete pou\u017e\xedt."),(0,o.kt)("h2",{id:"where-to-learn"},"Kde se m\u016f\u017eete dozv\u011bd\u011bt o po\u010dtu tvar\u016f mno\u017en\xe9ho \u010d\xedsla?"),(0,o.kt)("p",null,"Kdy\u017e se setk\xe1te s p\u0159ekladem, kter\xfd vy\u017eaduje pou\u017eit\xed mno\u017en\xe9ho \u010d\xedsla, mo\u017en\xe1 si hned neuv\u011bdom\xedte, kolik slovn\xedch tvar\u016f v\xe1\u0161 jazyk obsahuje."),(0,o.kt)("p",null,"Zde je n\u011bkolik zdroj\u016f informac\xed, kter\xe9 m\u016f\u017eete pou\u017e\xedt."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html"},"Pr\u016fvodce p\u0159eklady")," obsahuje \u0161irok\xfd seznam jazyk\u016f. Po\u010det tvar\u016f mno\u017en\xe9ho \u010d\xedsla pro r\u016fzn\xe9 jazyky se zobrazuje takto: 'nplurals=2', 'nplurals=4' atd. \u010c\xedslice za znam\xe9nkem rovnosti '=' znamen\xe1 po\u010det tvar\u016f mno\u017en\xe9ho \u010d\xedsla p\u0159\xedslu\u0161n\xe9ho jazyka."),(0,o.kt)("p",null,"Informace o tvarech mno\u017en\xe9ho \u010d\xedsla m\u016f\u017eete tak\xe9 z\xedskat v datab\xe1zi ",(0,o.kt)("a",{parentName:"p",href:"http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules"},"Unicode Common Locale Data Repository")," (CLDR). Pravidla CLDR pro mno\u017en\xe9 \u010d\xedslo uv\xe1d\u011bj\xed dal\u0161\xed slovn\xed tvar pro desetinn\xe1 \u010d\xedsla (1,5; 2,3; 100,1\u2026), ale v p\u0159ekladech AdGuardu je nepou\u017e\xedv\xe1me."),(0,o.kt)("h2",{id:"translations"},"Mno\u017en\xe1 \u010d\xedsla v p\u0159ekladech AdGuardu"),(0,o.kt)("p",null,"Nejprve bychom cht\u011bli zm\xednit, \u017ee ne ka\u017ed\xfd p\u0159eklad AdGuardu vy\u017eaduje pou\u017eit\xed mno\u017en\xe9ho \u010d\xedsla."),(0,o.kt)("p",null,"V sou\u010dasn\xe9 dob\u011b m\xe1me na Crowdinu 4 typy \u0159et\u011bzc\u016f, kter\xe9 zahrnuj\xed pou\u017eit\xed mno\u017en\xe9ho \u010d\xedsla."),(0,o.kt)("p",null,"Poj\u010fme se na n\u011b pod\xedvat bl\xed\u017ee."),(0,o.kt)("h3",{id:"1type"},"1. Fr\xe1ze s \u0159et\u011bzcov\xfdmi kl\xed\u010di kon\u010d\xedc\xedmi na ",(0,o.kt)("inlineCode",{parentName:"h3"},".singular"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},".dual"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},".plural")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png",alt:"crowdin *border"})),(0,o.kt)("p",null,"V\u011bt\u0161ina z nich je zastoupena v projektu ",(0,o.kt)("inlineCode",{parentName:"p"},"AdGuard pro Windows")," a skl\xe1d\xe1 se pouze z jednoho nebo dvou slov:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"days;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"extensions;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hours"))),(0,o.kt)("p",null,'V\u011bnujte pros\xedm pozornost \u0159et\u011bzcov\xfdm kl\xed\u010d\u016fm t\u011bchto fr\xe1z\xed a poli "Context", kde najdete n\u011bkolik d\u016fle\u017eit\xfdch pozn\xe1mek k mno\u017en\xe9mu \u010d\xedslu. \u0158et\u011bzcov\xe9 kl\xed\u010de mohou obsahovat slova ',(0,o.kt)("inlineCode",{parentName:"p"},"Singular"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Dual"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Plural")," (nap\u0159.",(0,o.kt)("inlineCode",{parentName:"p"},"FormatDayDeclensionDual"),"). V tomto p\u0159\xedpad\u011b byste m\u011bli ponechat p\u0159\xedslu\u0161n\xfd tvar mno\u017en\xe9ho \u010d\xedsla tak, jak je uveden v kl\xed\u010di."),(0,o.kt)("h3",{id:"2type"},"2. \u0158et\u011bzce s podstatn\xfdmi jm\xe9ny v jednotn\xe9m a mno\u017en\xe9m \u010d\xedsle odd\u011blen\xe9 \u010d\xe1rkami"),(0,o.kt)("p",null,"Tento druh \u0159et\u011bzc\u016f je v\u011bt\u0161inou soust\u0159ed\u011bn v projektu ",(0,o.kt)("inlineCode",{parentName:"p"},"AdGuard pro Android"),"."),(0,o.kt)("p",null,"Pod\xedvejte se na p\u0159\xedklad:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png",alt:"crowdin *border"})),(0,o.kt)("p",null,"Pokud ve va\u0161em jazyce existuj\xed 3 tvary mno\u017en\xe9ho \u010d\xedsla podstatn\xfdch jmen (jako v pol\u0161tin\u011b), napi\u0161te v\u0161echny tvary mno\u017en\xe9ho \u010d\xedsla odd\u011blen\xe9 \u010d\xe1rkami."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hour, hours \u2014 godzin\u0119, godziny, godzin")),(0,o.kt)("p",null,"V p\u0159\xedpad\u011b, \u017ee m\xe1 podstatn\xe9 jm\xe9no pouze 2 tvary, nen\xed t\u0159eba ps\xe1t stejn\xfd tvar dvakr\xe1t (",(0,o.kt)("em",{parentName:"p"},"typicky pouze pro tento typ \u0159et\u011bzc\u016f s mno\u017en\xfdm \u010d\xedslem!"),"). Nebude v\u0161ak chybou, kdy\u017e tvar zopakujete dvakr\xe1t."),(0,o.kt)("h3",{id:"3type"},"3. \u0158et\u011bzce, kter\xe9 pou\u017e\xedvaj\xed vzor vyvinut\xfd spole\u010dnost\xed Crowdin"),(0,o.kt)("p",null,"Jedn\xe1 se o u\u017eivatelsky nejp\u0159\xedv\u011btiv\u011bj\u0161\xed sch\xe9ma p\u0159ekladu \u0159et\u011bzc\u016f s mno\u017en\xfdm \u010d\xedslem."),(0,o.kt)("p",null,"Crowdin navrhuje u\u017eivatel\u016fm, aby p\u0159elo\u017eili ur\u010dit\xe9 mno\u017estv\xed fr\xe1z\xed s r\u016fzn\xfdmi tvary mno\u017en\xe9ho \u010d\xedsla."),(0,o.kt)("p",null,"Pokud v\xe1\u0161 jazyk poskytuje pouze jeden tvar mno\u017en\xe9ho \u010d\xedsla, zobraz\xed se pouze jedna v\u011bta k p\u0159ekladu. V p\u0159\xedpad\u011b t\u0159\xed nebo v\xedce tvar\u016f v\xe1m Crowdin poskytne \u0159et\u011bzec rozd\u011blen\xfd na dal\u0161\xed dva nebo t\u0159i \u0159et\u011bzce k p\u0159ekladu."),(0,o.kt)("p",null,"Nap\u0159:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png",alt:"crowdin *border"})),(0,o.kt)("p",null,'P\u0159i p\u0159ekladu t\u011bchto \u0159et\u011bzc\u016f a jejich schvalov\xe1n\xed bu\u010fte pozorn\xed. Pokud netu\u0161\xedte, co pole "Other" znamen\xe1, vlo\u017ete stejn\xfd tvar, jak\xfd je v poli "Many". P\u0159eklady pol\xed "Many" a "Other" mohou b\xfdt stejn\xe9.'),(0,o.kt)("h3",{id:"4type"},"4. \u0158et\u011bzce se \u0161ablonami odd\u011blen\xfdmi svisl\xfdmi \u010darami"),(0,o.kt)("p",null,"Jedn\xe1 se o nejslo\u017eit\u011bj\u0161\xed typ \u0159et\u011bzc\u016f AdGuardu, kter\xfd se v\u011bt\u0161inou pou\u017e\xedv\xe1 v projektu ",(0,o.kt)("inlineCode",{parentName:"p"},"AdGuard Websites"),"."),(0,o.kt)("p",null,"V\u011bnujte zv\xfd\u0161enou pozornost svisl\xe9mu znam\xe9nku mezi v\u011btami a ",(0,o.kt)("strong",{parentName:"p"},"%count%")," z\xe1stupn\xfdm znak\u016fm v origin\xe1ln\xedch fr\xe1z\xedch \u2014 pom\u016f\u017ee v\xe1m identifikovat fr\xe1ze, kde p\u0159eklad vy\u017eaduje pou\u017eit\xed tvar\u016f mno\u017en\xe9ho \u010d\xedsla."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png",alt:"crowdin *border"})),(0,o.kt)("p",null,"P\u0159edstavte si, \u017ee m\xe1te p\u0159ed sebou takov\xfd \u0159et\u011bzec: ",(0,o.kt)("inlineCode",{parentName:"p"},"Standardn\xed licence pro %count% po\u010d\xedta\u010d | Standardn\xed licence pro %count% po\u010d\xedta\u010de"),"."),(0,o.kt)("p",null,"Co byste m\u011bli v\u011bd\u011bt, abyste ho spr\xe1vn\u011b p\u0159elo\u017eili?"),(0,o.kt)("p",null,"V\u011bty, kter\xe9 jsou rozd\u011bleny svisl\xfdmi \u010darami, nazv\u011bme ",(0,o.kt)("strong",{parentName:"p"},'"\u0161ablony"'),", proto\u017ee vlastn\u011b slou\u017e\xed jako \u0161ablony pro v\u011bty s r\u016fzn\xfdmi \u010d\xedsly."),(0,o.kt)("p",null,"Vra\u0165me se k p\u0159\xedkladu, proto\u017ee anglick\xfd jazyk obsahuje pouze dva tvary, m\u011bly by existovat dv\u011b \u0161ablony:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Standard license for *%count%* computer | Standard license for *%count%* computers")),(0,o.kt)("p",null,"kde ",(0,o.kt)("strong",{parentName:"p"},"\u0161ablona 1")," je Standard license for ",(0,o.kt)("em",{parentName:"p"},"%count%")," computer,"),(0,o.kt)("p",null,"a ",(0,o.kt)("strong",{parentName:"p"},"\u0161ablona 2")," je Standard license for ",(0,o.kt)("em",{parentName:"p"},"%count%")," computers,"),(0,o.kt)("p",null,"Dal\u0161\xed d\u016fle\u017eitou v\u011bc\xed, kter\xe9 byste m\u011bli v\u011bnovat pozornost jsou z\xe1stupn\xe9 znaky ",(0,o.kt)("strong",{parentName:"p"},"%count%"),", kter\xe9 se jako obvykle nach\xe1zej\xed p\u0159ed slovy, kter\xe1 definuj\xed. Nam\xedsto ",(0,o.kt)("strong",{parentName:"p"},"%count%")," se zde zobraz\xed r\u016fzn\xe1 \u010d\xedsla v z\xe1vislosti na tom, kter\xe9 \u0161ablony jsou vybr\xe1ny."),(0,o.kt)("p",null,"V situaci s jin\xfdm jazykem, kter\xfd m\xe1, \u0159ekn\u011bme, t\u0159i tvary mno\u017en\xe9ho \u010d\xedsla, by m\u011bly existovat t\u0159i \u0161ablony se dv\u011bma svisl\xfdmi \u010darami mezi nimi."),(0,o.kt)("p",null,"Kdy\u017e nap\u0159\xedklad p\u0159elo\u017e\xedme v\xfd\u0161e uvedenou fr\xe1zi do sloven\u0161tiny, kter\xe1 m\xe1 podle pravidla ",(0,o.kt)("a",{parentName:"p",href:"http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html"},"Pr\u016fvodce p\u0159eklady")," t\u0159i slovn\xed druhy, bude spr\xe1vn\xfd p\u0159eklad vypadat takto:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"**\u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010d | \u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010de | \u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010dov**")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png",alt:"Slovak"})),(0,o.kt)("p",null,"V tomto p\u0159\xedpad\u011b vid\xedme t\u0159i \u0161ablony, kter\xe9 obsahuj\xed t\u0159i tvary slova ",(0,o.kt)("em",{parentName:"p"},'"po\u010d\xedta\u010d"')," (computer) ve sloven\u0161tin\u011b."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Pokud budeme ignorovat jeden z tvar\u016f a m\xedsto t\u0159\xed \u0161ablon pou\u017eijeme pro sloven\u0161tinu pouze dv\u011b, syst\xe9m nebude schopen pro ur\u010dit\xe1 \u010d\xedsla")," vybrat vhodnou \u0161ablonu a ve v\xfdsledku budeme m\xedt ve v\u011bt\xe1ch gramatick\xe9 chyby jako v angli\u010dtin\u011b: ",(0,o.kt)("em",{parentName:"p"},"Standard license for 5 computer"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"V\u017edy pou\u017e\xedvejte tolik tvar\u016f, kolik jich je ve va\u0161em jazyce, i kdy\u017e samotn\xe9 slovo m\xe1 m\xe9n\u011b tvar\u016f."))),(0,o.kt)("p",null,"Nap\u0159\xedklad srbsk\xe9 slovo ",(0,o.kt)("em",{parentName:"p"},'"ra\u010dunar"')," (computer) m\xe1 pouze dva tvary. V srb\u0161tin\u011b v\u0161ak existuj\xed 3 tvary mno\u017en\xe9ho \u010d\xedsla."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png",alt:"Serbian"})),(0,o.kt)("p",null,"P\u0159eklad z angli\u010dtiny do srb\u0161tiny by tedy m\u011bl zn\xedt:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"**Standardna licenca za *%count%* ra\u010dunar | Standardna licenca za *%count%* ra\u010dunara | Standardna licenca za *%count%* ra\u010dunara**")),(0,o.kt)("p",null,"I kdy\u017e je z\u0159ejm\xe9, \u017ee posledn\xed dv\u011b \u0161ablony se neli\u0161\xed, je velmi d\u016fle\u017eit\xe9 toto pravidlo dodr\u017eet: ",(0,o.kt)("strong",{parentName:"p"},"Po\u010det \u0161ablon by m\u011bl odpov\xeddat po\u010dtu tvar\u016f mno\u017en\xe9ho \u010d\xedsla p\u0159\xedslu\u0161n\xe9ho jazyka!")," (typicky pro tento typ \u0159et\u011bzc\u016f s mno\u017en\xfdm \u010d\xedslem)."),(0,o.kt)("h3",{id:"summury"},"Kr\xe1tk\xe9 shrnut\xed"),(0,o.kt)("p",null,"P\u0159i p\u0159ekladu projekt\u016f AdGuardu v\u011bnujte zv\xfd\u0161enou pozornost fr\xe1z\xedm, kter\xe9 vy\u017eaduj\xed pou\u017eit\xed tvar\u016f mno\u017en\xe9ho \u010d\xedsla."),(0,o.kt)("p",null,"Zat\xedmco prvn\xed t\u0159i typy t\u011bchto \u0159et\u011bzc\u016f jsou v\xedcem\xe9n\u011b snadno provediteln\xe9, \u010dtvrt\xfd typ vy\u017eaduje v\u011bt\u0161\xed ostra\u017eitost."),(0,o.kt)("p",null,"A je\u0161t\u011b jednou: pokud naraz\xedte na origin\xe1ln\xed fr\xe1zi se dv\u011bma d\u016fle\u017eit\xfdmi prvky: ",(0,o.kt)("strong",{parentName:"p"},"svisl\xe1 \u010d\xe1ra")," a ",(0,o.kt)("strong",{parentName:"p"},"%count%")," z\xe1stupn\xe9 znaky, ud\u011blejte pros\xedm n\xe1sleduj\xedc\xed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0158i\u010fte se pravidlem mno\u017en\xe9ho \u010d\xedsla jazyka, do kter\xe9ho p\u0159ekl\xe1d\xe1te;")),(0,o.kt)("p",null,"Po\u010det va\u0161ich \u0161ablon by m\u011bl odpov\xeddat po\u010dtu tvar\u016f mno\u017en\xe9ho \u010d\xedsla, kter\xe9 v\xe1\u0161 jazyk obsahuje, a to i v p\u0159\xedpadech, kdy n\u011bkter\xe1 slova maj\xed sama o sob\u011b m\xe9n\u011b tvar\u016f. Dva tvary mno\u017en\xe9ho \u010d\xedsla \u2014 dv\u011b \u0161ablony v p\u0159ekladu; p\u011bt tvar\u016f mno\u017en\xe9ho \u010d\xedsla \u2014 p\u011bt \u0161ablon atd."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nezapome\u0148te mezi \u0161ablonami pou\u017e\xedt svislou \u010d\xe1ru, jak je zn\xe1zorn\u011bno v p\u016fvodn\xedch \u0159et\u011bzc\xedch;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nep\u0159ekl\xe1dejte, nevypl\u0148ujte ani nema\u017ete z\xe1stupn\xe9 znaky ",(0,o.kt)("strong",{parentName:"p"},"%count%"),"."))),(0,o.kt)("p",null,"Dodr\u017eov\xe1n\xedm t\u011bchto jednoduch\xfdch pravidel pom\u016f\u017eete v\xfdvoj\xe1\u0159\u016fm AdGuardu vyhnout se mnoha zbyte\u010dn\xfdm komplikac\xedm b\u011bhem procesu p\u0159ekl\xe1d\xe1n\xed."))}d.isMDXComponent=!0}}]);