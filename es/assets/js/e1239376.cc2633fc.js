"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5539],{4137:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=n,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(k,i(i({ref:a},s),{},{components:t})):r.createElement(k,i({ref:a},s))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},555:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(7462),n=(t(7294),t(4137));const o={title:"C\xf3mo instalar un certificado proxy",sidebar_position:2},i=void 0,p={unversionedId:"guides/proxy-certificate",id:"guides/proxy-certificate",title:"C\xf3mo instalar un certificado proxy",description:"Las aplicaciones de escritorio de AdGuard (AdGuard para Windows y AdGuard para Mac) se pueden usar como proxy. Esto significa que puedes enrutar el tr\xe1fico de otros dispositivos a trav\xe9s de AdGuard (totalmente o el tr\xe1fico de aplicaciones/navegadores espec\xedficos).",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/guides/proxy-certificate.md",sourceDirName:"guides",slug:"/guides/proxy-certificate",permalink:"/KnowledgeBase/es/guides/proxy-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/proxy-certificate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"C\xf3mo instalar un certificado proxy",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"C\xf3mo recopilar un archivo HAR",permalink:"/KnowledgeBase/es/guides/collect-har-file"},next:{title:"C\xf3mo denunciar un sitio web",permalink:"/KnowledgeBase/es/guides/report-website"}},l={},c=[{value:"C\xf3mo descargar e instalar el certificado",id:"c\xf3mo-descargar-e-instalar-el-certificado",level:2},{value:"Windows",id:"windows",level:3},{value:"Mac",id:"mac",level:3},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3}],s={toc:c};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Las aplicaciones de escritorio de AdGuard (AdGuard para Windows y AdGuard para Mac) se pueden usar como proxy. Esto significa que puedes enrutar el tr\xe1fico de otros dispositivos a trav\xe9s de AdGuard (totalmente o el tr\xe1fico de aplicaciones/navegadores espec\xedficos)."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"These devices must be in the same network as the PC or Mac on which AdGuard is installed.")),(0,n.kt)("p",null,"El tr\xe1fico HTTP se filtrar\xe1 en cualquier caso, pero para que AdGuard pueda filtrar el tr\xe1fico HTTPS, debes instalar manualmente el certificado de AdGuard en el dispositivo conectado."),(0,n.kt)("h2",{id:"c\xf3mo-descargar-e-instalar-el-certificado"},"C\xf3mo descargar e instalar el certificado"),(0,n.kt)("p",null,"Seg\xfan el sistema operativo de tu dispositivo (Windows/Mac/Android/iOS), sigue una de estas instrucciones:"),(0,n.kt)("h3",{id:"windows"},"Windows"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Anota la direcci\xf3n IP de tu computadora con AdGuard instalado.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure the AdGuard protection is enabled. Luego marca la casilla ",(0,n.kt)("strong",{parentName:"p"},"Usar AdGuard como un proxy HTTP")," en la pesta\xf1a ",(0,n.kt)("strong",{parentName:"p"},"Red")," de la configuraci\xf3n.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"En el mismo dispositivo con AdGuard, sigue este enlace usando cualquier navegador: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Descargar"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Transfiere el archivo ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," descargado al dispositivo cuyo tr\xe1fico deseas enrutar a trav\xe9s de AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"En ese dispositivo, presiona el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Win"),", escribe ",(0,n.kt)("inlineCode",{parentName:"p"},"Administrar certificados inform\xe1ticos")," y presiona ",(0,n.kt)("strong",{parentName:"p"},"Enter"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"En la p\xe1gina ",(0,n.kt)("em",{parentName:"p"},"Certificados - Computadora local"),", busca la carpeta ",(0,n.kt)("em",{parentName:"p"},"Certificado root confiable")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Certificados"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic con el bot\xf3n derecho del rat\xf3n en la carpeta ",(0,n.kt)("em",{parentName:"p"},"Certificados")," y haz clic en ",(0,n.kt)("strong",{parentName:"p"},"Todas las tareas")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Importar"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"En la p\xe1gina ",(0,n.kt)("em",{parentName:"p"},"Asistente de importaci\xf3n de certificados"),", haz clic en ",(0,n.kt)("strong",{parentName:"p"},"Siguiente"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en ",(0,n.kt)("strong",{parentName:"p"},"Navegar")," para importar el certificado.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Despl\xe1zate hasta el ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," Archivo de certificado, selecci\xf3nalo y, a continuaci\xf3n, haz clic en ",(0,n.kt)("strong",{parentName:"p"},"Abrir"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en ",(0,n.kt)("strong",{parentName:"p"},"Siguiente"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Selecciona la opci\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Colocar todos los certificados en el siguiente repositorio"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Aseg\xfarate de que el campo ",(0,n.kt)("em",{parentName:"p"},"Repositorio de certificados")," muestre ",(0,n.kt)("em",{parentName:"p"},"Autoridades de certificaci\xf3n ra\xedz de confianza")," y haz clic en ",(0,n.kt)("strong",{parentName:"p"},"Siguiente"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en ",(0,n.kt)("strong",{parentName:"p"},"Finalizar"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Presiona la tecla ",(0,n.kt)("strong",{parentName:"p"},"Win"),", luego abre ",(0,n.kt)("strong",{parentName:"p"},"Configuraci\xf3n"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Selecciona ",(0,n.kt)("strong",{parentName:"p"},"Red & Internet")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Alternar ",(0,n.kt)("em",{parentName:"p"},"Detectar configuraciones autom\xe1ticamente")," para desactivado.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en ",(0,n.kt)("strong",{parentName:"p"},"Configurar")," en la pesta\xf1a ",(0,n.kt)("em",{parentName:"p"},"Usar un servidor proxy"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Activa el interruptor. Para ",(0,n.kt)("strong",{parentName:"p"},"Direcci\xf3n IP de proxy"),", ingresa la direcci\xf3n IP anotada de tu computadora (paso 1). Para ",(0,n.kt)("strong",{parentName:"p"},"Puerto"),", ingresa el puerto elegido en la configuraci\xf3n de red de la aplicaci\xf3n AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en ",(0,n.kt)("strong",{parentName:"p"},"Guardar"),"."))),(0,n.kt)("h3",{id:"mac"},"Mac"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Anota la direcci\xf3n IP de tu computadora con AdGuard instalado.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure the AdGuard protection is enabled. Luego ve a ",(0,n.kt)("strong",{parentName:"p"},"Configuraci\xf3n")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Red")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy HTTP")," y marca la casilla ",(0,n.kt)("strong",{parentName:"p"},"Usar AdGuard como proxy HTTP"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the computer with AdGuard, follow this link using a web browser: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Descargar"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Transfiere el archivo ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," descargado al dispositivo cuyo tr\xe1fico deseas enrutar a trav\xe9s de AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz doble clic en el archivo de certificado descargado.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ingresa la contrase\xf1a de administrador y luego haz clic en ",(0,n.kt)("strong",{parentName:"p"},"Modificar Keychain"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ve a ",(0,n.kt)("strong",{parentName:"p"},"Spotlight"),' (el \xedcono de b\xfasqueda en la esquina superior derecha), escribe "Acceso Keychain" y luego selecciona ',(0,n.kt)("strong",{parentName:"p"},"Acceso Keychain")," de los resultados de b\xfasqueda.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"En ",(0,n.kt)("em",{parentName:"p"},"Sistema"),", resalta el certificado que agregaste.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic con el bot\xf3n derecho y elige ",(0,n.kt)("strong",{parentName:"p"},"Obtener informaci\xf3n")," en el men\xfa contextual.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Expande ",(0,n.kt)("em",{parentName:"p"},"Confianza")," para mostrar las pol\xedticas de confianza para el certificado.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"En ",(0,n.kt)("em",{parentName:"p"},"Capas de sockets seguros (SSL)"),", selecciona ",(0,n.kt)("strong",{parentName:"p"},"Confiar siempre"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre ",(0,n.kt)("strong",{parentName:"p"},"Preferencias del sistema")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Red")," y elige la conexi\xf3n activa superior.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en ",(0,n.kt)("strong",{parentName:"p"},"Detalles...")," y ve a la pesta\xf1a ",(0,n.kt)("strong",{parentName:"p"},"Proxies"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Marca dos casillas de verificaci\xf3n: ",(0,n.kt)("em",{parentName:"p"},"Proxy web (HTTP)")," y ",(0,n.kt)("em",{parentName:"p"},"Proxy web seguro (HTTPS)"),". En el campo ",(0,n.kt)("strong",{parentName:"p"},"Servidor"),", ingresa la direcci\xf3n IP anotada de tu computadora (paso 1). En el campo ",(0,n.kt)("strong",{parentName:"p"},"Puerto"),", ingresa el puerto elegido en la configuraci\xf3n de red de la aplicaci\xf3n de AdGuard."))),(0,n.kt)("h3",{id:"android"},"Android"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Anota la direcci\xf3n IP de tu computadora con AdGuard instalado.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure the AdGuard protection is enabled. Luego marca la casilla ",(0,n.kt)("strong",{parentName:"p"},"Usar AdGuard como un proxy HTTP")," en la pesta\xf1a ",(0,n.kt)("strong",{parentName:"p"},"Red")," de la configuraci\xf3n.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the computer with AdGuard, follow this link using a web browser: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Descargar"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Transfiere el archivo ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," descargado al dispositivo cuyo tr\xe1fico deseas enrutar a trav\xe9s de AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Localiza y pulsa el certificado ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," previamente descargado para abrir el archivo.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"En algunos tel\xe9fonos, es posible que se te solicite que ingreses la contrase\xf1a de tu dispositivo. Hazlo y, a continuaci\xf3n, pulsa ",(0,n.kt)("strong",{parentName:"p"},"OK"),". El certificado ya est\xe1 instalado.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre la configuraci\xf3n avanzada de la red Wi-Fi activa.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cambia el ",(0,n.kt)("strong",{parentName:"p"},"Tipo de proxy")," a ",(0,n.kt)("strong",{parentName:"p"},"Manual"),". Para ",(0,n.kt)("strong",{parentName:"p"},"Nombre de host de proxy"),", ingresa la direcci\xf3n IP anotada de tu computadora (paso 1). Para ",(0,n.kt)("strong",{parentName:"p"},"Puerto proxy"),", ingresa el puerto elegido en la configuraci\xf3n de red de la aplicaci\xf3n de AdGuard."))),(0,n.kt)("h3",{id:"ios"},"iOS"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Anota la direcci\xf3n IP de tu computadora con AdGuard instalado.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure the AdGuard protection is enabled. Luego marca la casilla ",(0,n.kt)("strong",{parentName:"p"},"Usar AdGuard como un proxy HTTP")," en la pesta\xf1a ",(0,n.kt)("strong",{parentName:"p"},"Red")," de la configuraci\xf3n.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the computer with AdGuard, follow this link using a web browser: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Descargar"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Transfiere el archivo ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," descargado al dispositivo cuyo tr\xe1fico deseas enrutar a trav\xe9s de AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre ",(0,n.kt)("strong",{parentName:"p"},"Configuraci\xf3n")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Seguridad")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Cifrado & Credenciales")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Instalar un certificado"),". Los dispositivos Android no conf\xedan en los certificados de forma predeterminada, por lo que aparecer\xe1 una advertencia cuando elijas ",(0,n.kt)("strong",{parentName:"p"},"certificado CA"),". Toca ",(0,n.kt)("strong",{parentName:"p"},"Instalar aun as\xed"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre ",(0,n.kt)("strong",{parentName:"p"},"Configuraci\xf3n")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Perfil descargado")," y toca ",(0,n.kt)("strong",{parentName:"p"},"Instalar")," en la esquina superior derecha. Introduce tu contrase\xf1a y confirma la instalaci\xf3n. Presiona ",(0,n.kt)("strong",{parentName:"p"},"Listo"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Vete a ",(0,n.kt)("strong",{parentName:"p"},"Configuraci\xf3n")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"General")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Acerca de")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Configuraci\xf3n de confianza de certificados"),". Habilita el interruptor junto a ",(0,n.kt)("em",{parentName:"p"},"Adguard Personal CA"),". El certificado ya est\xe1 instalado.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"En ese dispositivo, abre la configuraci\xf3n avanzada de la red Wi-Fi activa.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cambia el ",(0,n.kt)("strong",{parentName:"p"},"Tipo de proxy")," a ",(0,n.kt)("strong",{parentName:"p"},"Manual"),". Para ",(0,n.kt)("strong",{parentName:"p"},"Nombre de host de proxy"),", ingresa la direcci\xf3n IP anotada de tu computadora (paso 1). Para ",(0,n.kt)("strong",{parentName:"p"},"Puerto proxy"),", ingresa el puerto elegido en la configuraci\xf3n de red de la aplicaci\xf3n de AdGuard."))))}d.isMDXComponent=!0}}]);