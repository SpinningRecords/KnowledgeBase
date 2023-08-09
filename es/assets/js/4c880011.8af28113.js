"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7259],{4137:(e,a,i)=>{i.d(a,{Zo:()=>c,kt:()=>m});var r=i(7294);function l(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function o(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?o(Object(i),!0).forEach((function(a){l(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function t(e,a){if(null==e)return{};var i,r,l=function(e,a){if(null==e)return{};var i,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],a.indexOf(i)>=0||(l[i]=e[i]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=r.createContext({}),d=function(e){var a=r.useContext(s),i=a;return e&&(i="function"==typeof e?e(a):n(n({},a),e)),i},c=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var i=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=t(e,["components","mdxType","originalType","parentName"]),u=d(i),m=l,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return i?r.createElement(v,n(n({ref:a},c),{},{components:i})):r.createElement(v,n({ref:a},c))}));function m(e,a){var i=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=i.length,n=new Array(o);n[0]=u;var t={};for(var s in a)hasOwnProperty.call(a,s)&&(t[s]=a[s]);t.originalType=e,t.mdxType="string"==typeof e?e:l,n[1]=t;for(var d=2;d<o;d++)n[d]=i[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},551:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var r=i(7462),l=(i(7294),i(4137));const o={title:"Gu\xeda de configuraci\xf3n avanzada (bajo nivel)",sidebar_position:7},n=void 0,t={unversionedId:"adguard-for-windows/solving-problems/low-level-settings",id:"adguard-for-windows/solving-problems/low-level-settings",title:"Gu\xeda de configuraci\xf3n avanzada (bajo nivel)",description:"Este art\xedculo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, descarga la aplicaci\xf3n AdGuard",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/low-level-settings",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Gu\xeda de configuraci\xf3n avanzada (bajo nivel)",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Common installer errors",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/common-installer-errors"},next:{title:"How to create a dump file",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/dump-file"}},s={},d=[{value:"C\xf3mo acceder a la configuraci\xf3n avanzada",id:"c\xf3mo-acceder-a-la-configuraci\xf3n-avanzada",level:2},{value:"Configuraci\xf3n avanzada",id:"configuraci\xf3n-avanzada",level:2},{value:"Bloquear TCP Fast Open",id:"bloquear-tcp-fast-open",level:3},{value:"Usar Encrypted ClientHello",id:"usar-encrypted-clienthello",level:3},{value:"Verificar la transparencia de los certificados de los sitios web",id:"verificar-la-transparencia-de-los-certificados-de-los-sitios-web",level:3},{value:"Habilitar verificaci\xf3n de revocaci\xf3n de certificados SSL/TLS",id:"habilitar-verificaci\xf3n-de-revocaci\xf3n-de-certificados-ssltls",level:3},{value:"Mostrar AdGuard VPN en la configuraci\xf3n",id:"mostrar-adguard-vpn-en-la-configuraci\xf3n",level:3},{value:"Excluye aplicaciones del filtrado ingresando la ruta completa",id:"excluye-aplicaciones-del-filtrado-ingresando-la-ruta-completa",level:3},{value:"Habilitar notificaciones en ventanas emergentes de AdGuard",id:"habilitar-notificaciones-en-ventanas-emergentes-de-adguard",level:3},{value:"Interceptar autom\xe1ticamente las URL de suscripci\xf3n a los filtros",id:"interceptar-autom\xe1ticamente-las-url-de-suscripci\xf3n-a-los-filtros",level:3},{value:"Usar modo de redireccionamiento del driver",id:"usar-modo-de-redireccionamiento-del-driver",level:3},{value:"Abrir la ventana principal al inicio del sistema",id:"abrir-la-ventana-principal-al-inicio-del-sistema",level:3},{value:"Habilitar filtrado al iniciar el sistema",id:"habilitar-filtrado-al-iniciar-el-sistema",level:3},{value:"Filtrar localhost",id:"filtrar-localhost",level:3},{value:"Excluir del filtrado rangos de IP especificados",id:"excluir-del-filtrado-rangos-de-ip-especificados",level:3},{value:"Habilitar escritura HAR",id:"habilitar-escritura-har",level:3},{value:"A\xf1adir un espacio adicional a la petici\xf3n HTTP simple",id:"a\xf1adir-un-espacio-adicional-a-la-petici\xf3n-http-simple",level:3},{value:"Ajustar el tama\xf1o de la fragmentaci\xf3n del paquete TLS inicial",id:"ajustar-el-tama\xf1o-de-la-fragmentaci\xf3n-del-paquete-tls-inicial",level:3},{value:"Tama\xf1o de fragmento de la petici\xf3n HTTP simple",id:"tama\xf1o-de-fragmento-de-la-petici\xf3n-http-simple",level:3},{value:"Mostrar QUIC",id:"mostrar-quic",level:3},{value:"Habilitar TCP keepalive",id:"habilitar-tcp-keepalive",level:3},{value:"Intervalo de TCP keepalive",id:"intervalo-de-tcp-keepalive",level:3},{value:"Tiempo de espera de TCP keepalive",id:"tiempo-de-espera-de-tcp-keepalive",level:3},{value:"Bloquear Java",id:"bloquear-java",level:3},{value:"Tiempo de espera del servidor DNS",id:"tiempo-de-espera-del-servidor-dns",level:3},{value:"Usar HTTP/3 para DNS-over-HTTPS",id:"usar-http3-para-dns-over-https",level:3},{value:"Usar upstreams de DNS alternativos",id:"usar-upstreams-de-dns-alternativos",level:3},{value:"Consultar servidores DNS de upstream en paralelo",id:"consultar-servidores-dns-de-upstream-en-paralelo",level:3},{value:"Siempre responder a las consultas DNS fallidas",id:"siempre-responder-a-las-consultas-dns-fallidas",level:3},{value:"Habilitar el filtrado de solicitudes de DNS seguras",id:"habilitar-el-filtrado-de-solicitudes-de-dns-seguras",level:3},{value:"Modo de bloqueo para reglas de hosts",id:"modo-de-bloqueo-para-reglas-de-hosts",level:3},{value:"Modo de bloqueo para reglas de estilo adblock",id:"modo-de-bloqueo-para-reglas-de-estilo-adblock",level:3},{value:"Direcci\xf3n IPv4 personalizada",id:"direcci\xf3n-ipv4-personalizada",level:3},{value:"Direcci\xf3n IPv6 personalizada",id:"direcci\xf3n-ipv6-personalizada",level:3},{value:"Servidores fallback",id:"servidores-fallback",level:3},{value:"Bloquear ECH",id:"bloquear-ech",level:3},{value:"Lista de servidores alternativos personalizados",id:"lista-de-servidores-alternativos-personalizados",level:3},{value:"Lista de direcciones boostrap personalizadas",id:"lista-de-direcciones-boostrap-personalizadas",level:3},{value:"Exclusiones del DNS",id:"exclusiones-del-dns",level:3},{value:"Excluir los nombres de redes Wi-Fi (SSID) especificados del filtrado de DNS",id:"excluir-los-nombres-de-redes-wi-fi-ssid-especificados-del-filtrado-de-dns",level:3}],c={toc:d};function p(e){let{components:a,...i}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Este art\xedculo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, ",(0,l.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"descarga la aplicaci\xf3n AdGuard"))),(0,l.kt)("p",null,"Anteriormente conocida como configuraci\xf3n de bajo nivel, la configuraci\xf3n avanzada contiene principalmente opciones que van m\xe1s all\xe1 de la competencia del usuario promedio y no se aplican en el uso diario. AdGuard para Windows fue dise\xf1ado para funcionar sin tener que cambiar ninguno de ellos, pero proporcionar\xe1 funciones adicionales al resolver problemas poco comunes."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Cambiar una ",(0,l.kt)("em",{parentName:"p"},"Configuraci\xf3n avanzada")," sin pensar puede causar problemas con el rendimiento de AdGuard, interrumpir la conexi\xf3n a Internet o comprometer tu seguridad y privacidad online. Solo debes realizar cambios en esta configuraci\xf3n si est\xe1s seguro de lo que est\xe1s haciendo o si nuestro equipo de soporte te lo ha pedido.")),(0,l.kt)("h2",{id:"c\xf3mo-acceder-a-la-configuraci\xf3n-avanzada"},"C\xf3mo acceder a la configuraci\xf3n avanzada"),(0,l.kt)("p",null,"Para ir a ",(0,l.kt)("em",{parentName:"p"},"Configuraci\xf3n avanzada"),", haz clic en ",(0,l.kt)("em",{parentName:"p"},"Configuraci\xf3n \u2192 Configuraci\xf3n general")," en la ventana principal y despl\xe1zate hacia abajo hasta ",(0,l.kt)("em",{parentName:"p"},"Configuraci\xf3n avanzada"),". Alternativamente, selecciona ",(0,l.kt)("em",{parentName:"p"},"Avanzado \u2192 Configuraci\xf3n avanzada...")," en el men\xfa lateral."),(0,l.kt)("h2",{id:"configuraci\xf3n-avanzada"},"Configuraci\xf3n avanzada"),(0,l.kt)("p",null,"Una vez que abras la Configuraci\xf3n avanzada, se te presentar\xe1n las siguientes opciones:"),(0,l.kt)("h3",{id:"bloquear-tcp-fast-open"},"Bloquear TCP Fast Open"),(0,l.kt)("p",null,"Si est\xe1 habilitada, AdGuard bloquear\xe1 TCP Fast Open en el navegador Edge. Para aplicar la configuraci\xf3n, debes reiniciar el navegador."),(0,l.kt)("h3",{id:"usar-encrypted-clienthello"},"Usar Encrypted ClientHello"),(0,l.kt)("p",null,"Toda conexi\xf3n a Internet cifrada tiene una parte no cifrada. Este es el primer paquete que contiene el nombre del servidor al que te est\xe1s conectando. La tecnolog\xeda Encrypted Client Hello resuelve este problema y cifra la \xfaltima parte de la informaci\xf3n no cifrada. Para aprovecharla, activa la opci\xf3n ",(0,l.kt)("em",{parentName:"p"},"Usar Encrypted ClientHello"),". It uses a local DNS proxy to look for the ECH configuration for the domain. Si se encuentra, el paquete ClientHello se cifrar\xe1."),(0,l.kt)("h3",{id:"verificar-la-transparencia-de-los-certificados-de-los-sitios-web"},"Verificar la transparencia de los certificados de los sitios web"),(0,l.kt)("p",null,"Verifica la autenticidad de todos los certificados para el dominio seg\xfan la pol\xedtica de transparencia de certificados de Chrome. If the certificate does not comply with the Chrome Certificate Transparency Policy, AdGuard will not filter the website. Chrome, a su vez, lo bloquear\xe1."),(0,l.kt)("h3",{id:"habilitar-verificaci\xf3n-de-revocaci\xf3n-de-certificados-ssltls"},"Habilitar verificaci\xf3n de revocaci\xf3n de certificados SSL/TLS"),(0,l.kt)("p",null,"Una vez habilitada, esta opci\xf3n ejecuta verificaciones OCSP as\xedncronas para verificar si el certificado SSL/TLS del sitio web est\xe1 revocado."),(0,l.kt)("p",null,"Si la verificaci\xf3n de OCSP se completa dentro del tiempo de espera m\xednimo, AdGuard aplicar\xe1 inmediatamente el resultado: bloquear\xe1 la conexi\xf3n si el certificado es revocado o establecer\xe1 una conexi\xf3n si el certificado es v\xe1lido."),(0,l.kt)("p",null,"Si la verificaci\xf3n demora demasiado, AdGuard establecer\xe1 una conexi\xf3n y continuar\xe1 verificando en segundo plano. Si se revoca el certificado, se bloquear\xe1n las conexiones actuales y futuras al dominio."),(0,l.kt)("h3",{id:"mostrar-adguard-vpn-en-la-configuraci\xf3n"},"Mostrar AdGuard VPN en la configuraci\xf3n"),(0,l.kt)("p",null,"Habilitar esta opci\xf3n te permite mostrar la pesta\xf1a AdGuard VPN en Configuraci\xf3n para abrir f\xe1cilmente la aplicaci\xf3n y el sitio web del producto."),(0,l.kt)("h3",{id:"excluye-aplicaciones-del-filtrado-ingresando-la-ruta-completa"},"Excluye aplicaciones del filtrado ingresando la ruta completa"),(0,l.kt)("p",null,"Si deseas que AdGuard no filtre ninguna aplicaci\xf3n espec\xedfica, especifica la ruta completa a ellas y las aplicaciones se excluir\xe1n del filtrado. Separa las diferentes rutas con punto y coma."),(0,l.kt)("h3",{id:"habilitar-notificaciones-en-ventanas-emergentes-de-adguard"},"Habilitar notificaciones en ventanas emergentes de AdGuard"),(0,l.kt)("p",null,"Habilita esta funci\xf3n para ver las notificaciones en ventanas emergentes de AdGuard. Ellas no aparecen con demasiada frecuencia y solo contienen informaci\xf3n importante. Tambi\xe9n puedes usar el men\xfa de la bandeja para recuperar la \xfaltima notificaci\xf3n de ventana emergente."),(0,l.kt)("h3",{id:"interceptar-autom\xe1ticamente-las-url-de-suscripci\xf3n-a-los-filtros"},"Interceptar autom\xe1ticamente las URL de suscripci\xf3n a los filtros"),(0,l.kt)("p",null,"Habilita esta funci\xf3n si deseas que AdGuard intercepte autom\xe1ticamente las URL de suscripci\xf3n de filtro (es decir, ",(0,l.kt)("inlineCode",{parentName:"p"},"abp:subscribe")," y similares) y abra un cuadro de di\xe1logo de instalaci\xf3n de filtro personalizado."),(0,l.kt)("h3",{id:"usar-modo-de-redireccionamiento-del-driver"},"Usar modo de redireccionamiento del driver"),(0,l.kt)("p",null,"Si esta opci\xf3n est\xe1 habilitada, AdGuard intercepta todo el tr\xe1fico y lo redirige al servidor proxy local para un mayor filtrado."),(0,l.kt)("p",null,"De lo contrario, AdGuard filtrar\xe1 todo el tr\xe1fico, sin redirecci\xf3n. En este caso, el sistema considerar\xe1 que AdGuard es la \xfanica aplicaci\xf3n que se conecta a Internet (las dem\xe1s aplicaciones se enrutan a trav\xe9s de \xe9l). La desventaja es que eso har\xe1 que el Firewall del sistema sea menos efectivo. La ventaja es que este enfoque funciona un poco m\xe1s r\xe1pido."),(0,l.kt)("h3",{id:"abrir-la-ventana-principal-al-inicio-del-sistema"},"Abrir la ventana principal al inicio del sistema"),(0,l.kt)("p",null,"Activa esta opci\xf3n para que la ventana principal de AdGuard se abra despu\xe9s de cargar el sistema. Ten en cuenta que no afecta si el servicio de filtrado real se inicia o no, esta configuraci\xf3n se encuentra en ",(0,l.kt)("em",{parentName:"p"},"Configuraci\xf3n \u2192 Configuraci\xf3n general")),(0,l.kt)("h3",{id:"habilitar-filtrado-al-iniciar-el-sistema"},"Habilitar filtrado al iniciar el sistema"),(0,l.kt)("p",null,'A partir de la versi\xf3n 7.12, de forma predeterminada, el servicio de AdGuard no filtra el tr\xe1fico despu\xe9s del inicio del sistema operativo si la opci\xf3n Iniciar AdGuard al iniciar el sistema est\xe1 deshabilitada. En otras palabras, el servicio de AdGuard se inicia en modo "inactivo". Habilita esta opci\xf3n para que AdGuard filtre el tr\xe1fico incluso si la aplicaci\xf3n no se inicia.'),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Before v7.12, the AdGuard service started in filtering mode by default (even if the ",(0,l.kt)("em",{parentName:"p"},"Launch AdGuard at system start-up")," was disabled). If you were satisfied with the old behavior, enable this option.")),(0,l.kt)("h3",{id:"filtrar-localhost"},"Filtrar localhost"),(0,l.kt)("p",null,"Si deseas que AdGuard filtre las conexiones loopback, marca la casilla. Esta opci\xf3n siempre estar\xe1 activada si tienes AdGuard VPN instalado, porque de lo contrario no podr\xe1 funcionar."),(0,l.kt)("h3",{id:"excluir-del-filtrado-rangos-de-ip-especificados"},"Excluir del filtrado rangos de IP especificados"),(0,l.kt)("p",null,"Si no deseas que AdGuard filtre subredes particulares, habilita esta funci\xf3n y especifica los rangos de IP en la notaci\xf3n CIDR (por ejemplo, 98.51.100.14/24) en la secci\xf3n ",(0,l.kt)("strong",{parentName:"p"},"rangos de IP excluidos del filtrado")," a continuaci\xf3n."),(0,l.kt)("h3",{id:"habilitar-escritura-har"},"Habilitar escritura HAR"),(0,l.kt)("p",null,"Esta opci\xf3n debe habilitarse ",(0,l.kt)("strong",{parentName:"p"},"solo con fines de debugging"),". Si marcas la marca de verificaci\xf3n, AdGuard crear\xe1 un archivo que contiene informaci\xf3n sobre todas las solicitudes HTTP filtradas en formato HAR 1.2. Este archivo se puede analizar con la aplicaci\xf3n Fiddler. Ten en cuenta que esto puede ralentizar significativamente tu navegaci\xf3n web."),(0,l.kt)("h3",{id:"a\xf1adir-un-espacio-adicional-a-la-petici\xf3n-http-simple"},"A\xf1adir un espacio adicional a la petici\xf3n HTTP simple"),(0,l.kt)("p",null,'Agrega espacio adicional entre el m\xe9todo HTTP y la URL y elimina el espacio despu\xe9s del campo "Host:" para evitar la inspecci\xf3n profunda de paquetes. Por ejemplo, la solicitud'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /foo/bar/ HTTP/1.1\nHost: ejemplo.org")),(0,l.kt)("p",null,"se convertir\xe1 en"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET  /foo/bar/ HTTP/1.1\nHost: example.org")),(0,l.kt)("p",null,"Esta opci\xf3n solo se aplica cuando la opci\xf3n ",(0,l.kt)("em",{parentName:"p"},"Proteger de DPI")," en Modo Stealh est\xe1 habilitada."),(0,l.kt)("h3",{id:"ajustar-el-tama\xf1o-de-la-fragmentaci\xf3n-del-paquete-tls-inicial"},"Ajustar el tama\xf1o de la fragmentaci\xf3n del paquete TLS inicial"),(0,l.kt)("p",null,"Especifica el tama\xf1o de la fragmentaci\xf3n del paquete TCP, evitando la inspecci\xf3n profunda de paquetes. This option only affects secured (HTTPS) traffic."),(0,l.kt)("p",null,"Si esta opci\xf3n est\xe1 habilitada, AdGuard divide el paquete TLS inicial (el paquete ClientHello) en dos partes: la primera tiene la longitud especificada y la segunda tiene el resto, hasta la longitud de todo el paquete TLS inicial."),(0,l.kt)("p",null,"Valid values: 1\u20131500. Si se especifica un tama\xf1o no v\xe1lido, se utilizar\xe1 el valor seleccionado por el sistema. Esta opci\xf3n solo se aplica cuando la opci\xf3n ",(0,l.kt)("em",{parentName:"p"},"Proteger de DPI")," en Modo Stealh est\xe1 habilitada."),(0,l.kt)("h3",{id:"tama\xf1o-de-fragmento-de-la-petici\xf3n-http-simple"},"Tama\xf1o de fragmento de la petici\xf3n HTTP simple"),(0,l.kt)("p",null,"Ajusta el tama\xf1o de la fragmentaci\xf3n de la solicitud HTTP. Esta opci\xf3n solo afecta al tr\xe1fico HTTP simple. Si esta opci\xf3n est\xe1 habilitada, AdGuard divide el paquete inicial en dos partes: la primera tiene la longitud especificada y la segunda tiene el resto, hasta la longitud de todo el paquete original."),(0,l.kt)("p",null,"Valid values: 1\u20131500. Si se especifica un tama\xf1o no v\xe1lido, se utilizar\xe1 el valor seleccionado por el sistema. Esta opci\xf3n solo se aplica cuando la opci\xf3n ",(0,l.kt)("em",{parentName:"p"},"Proteger de DPI")," en Modo Stealh est\xe1 habilitada."),(0,l.kt)("h3",{id:"mostrar-quic"},"Mostrar QUIC"),(0,l.kt)("p",null,"Permite visualizar los registros del protocolo QUIC en el log de filtrado. Solo para solicitudes bloqueadas."),(0,l.kt)("h3",{id:"habilitar-tcp-keepalive"},"Habilitar TCP keepalive"),(0,l.kt)("p",null,"Env\xeda peri\xf3dicamente paquetes TCP a trav\xe9s de una conexi\xf3n inactiva para asegurarte de que est\xe9 activa y para renovar los tiempos de espera de NAT. Esta opci\xf3n puede ser \xfatil para omitir la estricta configuraci\xf3n de traducci\xf3n de direcciones de red (NAT) que utilizan algunos ISP."),(0,l.kt)("h3",{id:"intervalo-de-tcp-keepalive"},"Intervalo de TCP keepalive"),(0,l.kt)("p",null,"Aqu\xed puedes especificar un per\xedodo de tiempo de inactividad, en segundos, antes de enviar una prueba de keepalive. If 0 is specified, the value selected by the system will be used."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This setting only works when the ",(0,l.kt)("em",{parentName:"p"},"Enable TCP keepalive")," option is enabled.")),(0,l.kt)("h3",{id:"tiempo-de-espera-de-tcp-keepalive"},"Tiempo de espera de TCP keepalive"),(0,l.kt)("p",null,"Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. Si se especifica 0, se utilizar\xe1 el valor seleccionado por el sistema."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This setting only works when the ",(0,l.kt)("em",{parentName:"p"},"Enable TCP keepalive")," option is enabled.")),(0,l.kt)("h3",{id:"bloquear-java"},"Bloquear Java"),(0,l.kt)("p",null,"Algunos sitios web y servicios web todav\xeda son compatibles con los complementos de Java. La API que sirve como base para los complementos de Java tiene vulnerabilidades de seguridad graves. Puedes deshabilitar estos complementos por motivos de seguridad. Sin embargo, incluso si decides utilizar la opci\xf3n ",(0,l.kt)("em",{parentName:"p"},"Bloquear Java"),", JavaScript seguir\xe1 estando habilitado."),(0,l.kt)("h3",{id:"tiempo-de-espera-del-servidor-dns"},"Tiempo de espera del servidor DNS"),(0,l.kt)("p",null,"Aqu\xed puedes especificar el tiempo en milisegundos que AdGuard esperar\xe1 la respuesta del servidor DNS seleccionado antes de recurrir al fallback. Si no completas este campo o ingresas un valor no v\xe1lido, se utilizar\xe1 el valor de 5000."),(0,l.kt)("h3",{id:"usar-http3-para-dns-over-https"},"Usar HTTP/3 para DNS-over-HTTPS"),(0,l.kt)("p",null,"Habilita HTTP/3 para upstreams de DNS-over-HTTPS para acelerar la conexi\xf3n si el upstream seleccionado admite este protocolo. Esto significa que habilitar esta opci\xf3n no garantiza que todas las solicitudes de DNS se env\xeden a trav\xe9s de HTTP/3."),(0,l.kt)("h3",{id:"usar-upstreams-de-dns-alternativos"},"Usar upstreams de DNS alternativos"),(0,l.kt)("p",null,"Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail."),(0,l.kt)("h3",{id:"consultar-servidores-dns-de-upstream-en-paralelo"},"Consultar servidores DNS de upstream en paralelo"),(0,l.kt)("p",null,"All upstreams will be queried in parallel and the first response is returned. Dado que las consultas de DNS se realizan en paralelo, habilitar esta funci\xf3n aumenta la velocidad de Internet."),(0,l.kt)("h3",{id:"siempre-responder-a-las-consultas-dns-fallidas"},"Siempre responder a las consultas DNS fallidas"),(0,l.kt)("p",null,"Si la resoluci\xf3n de direcciones falla en cada uno de los upstreams reenviados, as\xed como en los dominios alternativos, la respuesta a la solicitud de DNS ser\xe1 ",(0,l.kt)("inlineCode",{parentName:"p"},"SERVFAIL"),"."),(0,l.kt)("h3",{id:"habilitar-el-filtrado-de-solicitudes-de-dns-seguras"},"Habilitar el filtrado de solicitudes de DNS seguras"),(0,l.kt)("p",null,"AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests."),(0,l.kt)("h3",{id:"modo-de-bloqueo-para-reglas-de-hosts"},"Modo de bloqueo para reglas de hosts"),(0,l.kt)("p",null,"Aqu\xed puedes seleccionar la forma en que AdGuard responder\xe1 a los dominios bloqueados por las reglas de DNS seg\xfan ",(0,l.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax"},"la sintaxis de la regla de hosts"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Respuesta con error "Rechazado"'),(0,l.kt)("li",{parentName:"ul"},'Respuesta con error "NxDomain"'),(0,l.kt)("li",{parentName:"ul"},"Respuesta con una direcci\xf3n IP personalizada")),(0,l.kt)("h3",{id:"modo-de-bloqueo-para-reglas-de-estilo-adblock"},"Modo de bloqueo para reglas de estilo adblock"),(0,l.kt)("p",null,"Aqu\xed puedes seleccionar la forma en que AdGuard responder\xe1 a los dominios bloqueados por las reglas de DNS seg\xfan ",(0,l.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax"},"la sintaxis de la regla de estilo adblock"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Respuesta con error "Rechazado"'),(0,l.kt)("li",{parentName:"ul"},'Respuesta con error "NxDomain"'),(0,l.kt)("li",{parentName:"ul"},"Respuesta con una direcci\xf3n IP personalizada")),(0,l.kt)("h3",{id:"direcci\xf3n-ipv4-personalizada"},"Direcci\xf3n IPv4 personalizada"),(0,l.kt)("p",null,'Si se selecciona la direcci\xf3n IP personalizada en modo de bloqueo para reglas de hosts o modo de bloqueo para reglas de estilo adblock, esta direcci\xf3n IP se devolver\xe1 en respuesta a solicitudes A bloqueadas. Si no se especifica ninguno, AdGuard responder\xe1 con el error predeterminado "Rechazado".'),(0,l.kt)("h3",{id:"direcci\xf3n-ipv6-personalizada"},"Direcci\xf3n IPv6 personalizada"),(0,l.kt)("p",null,'Si se selecciona la direcci\xf3n IP personalizada en modo de bloqueo para reglas de hosts o modo de bloqueo para reglas de estilo adblock, esta direcci\xf3n IP se devolver\xe1 en respuesta a solicitudes AAAA bloqueadas. Si no se especifica ninguno, AdGuard responder\xe1 con el error predeterminado "Rechazado".'),(0,l.kt)("h3",{id:"servidores-fallback"},"Servidores fallback"),(0,l.kt)("p",null,"Aqu\xed puesde especificar un servidor DNS alternativo al que se redirigir\xe1 una solicitud de DNS si el servidor principal no responde dentro del per\xedodo de tiempo de espera especificado en la siguiente secci\xf3n. Hay tres opciones para elegir:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"No usar servidores alternativos;"),(0,l.kt)("li",{parentName:"ul"},"Usar servidores predeterminados del sistema;"),(0,l.kt)("li",{parentName:"ul"},"Usar servidores personalizados.")),(0,l.kt)("h3",{id:"bloquear-ech"},"Bloquear ECH"),(0,l.kt)("p",null,"Si est\xe1 habilitado, AdGuard elimina los par\xe1metros Encrypted ClientHello de las respuestas."),(0,l.kt)("h3",{id:"lista-de-servidores-alternativos-personalizados"},"Lista de servidores alternativos personalizados"),(0,l.kt)("p",null,"Si deseas que AdGuard use servidores alternativos personalizados, incl\xfayelos en esta secci\xf3n, uno por l\xednea."),(0,l.kt)("h3",{id:"lista-de-direcciones-boostrap-personalizadas"},"Lista de direcciones boostrap personalizadas"),(0,l.kt)("p",null,"Un bootstrap es un servidor DNS intermedio que se utiliza para obtener la direcci\xf3n IP del servidor DNS seguro que eligiste anteriormente en ",(0,l.kt)("em",{parentName:"p"},"Protecci\xf3n DNS"),". Este intermedio es necesario cuando se utilizan protocolos que indican la direcci\xf3n del servidor mediante letras (como DNS-over-TLS, por ejemplo). En este caso, el bootstrap act\xfaa como un traductor, transformando las letras en n\xfameros que tu sistema pueda entender."),(0,l.kt)("p",null,"De forma predeterminada, se utiliza el sistema de resoluci\xf3n de DNS del sistema y la solicitud bootstrap inicial se realiza a trav\xe9s del puerto 53. Si esto no te conviene, enumera aqu\xed las direcciones IP de los servidores DNS que se utilizar\xe1n para determinar la direcci\xf3n del servidor DNS encriptado en orden de arriba a abajo. Las direcciones IP especificadas se aplicar\xe1n en el orden indicado. Si especificas direcciones no v\xe1lidas, o ninguna direcci\xf3n, se utilizar\xe1n las IP del sistema."),(0,l.kt)("h3",{id:"exclusiones-del-dns"},"Exclusiones del DNS"),(0,l.kt)("p",null,"Todas las solicitudes de DNS a los dominios enumerados aqu\xed se redirigir\xe1n al servidor DNS predeterminado del sistema en lugar del servidor DNS especificado en la configuraci\xf3n de la aplicaci\xf3n. Adem\xe1s, las reglas de bloqueo de DNS no se aplicar\xe1n a estas solicitudes."),(0,l.kt)("h3",{id:"excluir-los-nombres-de-redes-wi-fi-ssid-especificados-del-filtrado-de-dns"},"Excluir los nombres de redes Wi-Fi (SSID) especificados del filtrado de DNS"),(0,l.kt)("p",null,"DNS protection will not include Wi-Fi networks listed in this section. Especifique los nombres de las redes Wi-Fi (SSID), uno por l\xednea. Esto puede ser \xfatil si una red Wi-Fi en particular ya est\xe1 protegida por AdGuard Home u otro sistema de protecci\xf3n de DNS. En este caso, es superfluo volver a filtrar las solicitudes de DNS."))}p.isMDXComponent=!0}}]);