"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6995],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),h=o,f=p["".concat(s,".").concat(h)]||p[h]||c[h]||l;return a?r.createElement(f,n(n({ref:t},u),{},{components:a})):r.createElement(f,n({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,n=new Array(l);n[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var d=2;d<l;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(7462),o=(a(7294),a(4137));const l={title:"Low Level Settings guide",sidebar_position:6},n=void 0,i={unversionedId:"adguard-for-android/solving-problems/low-level-settings",id:"adguard-for-android/solving-problems/low-level-settings",title:"Low Level Settings guide",description:"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/low-level-settings",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Low Level Settings guide",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How to get HAR files",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/har"},next:{title:"How to block ads in the YouTube app",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/youtube-ads"}},s={},d=[{value:"How to reach the Low-level settings",id:"how-to-reach-the-low-level-settings",level:2},{value:"Low-level settings",id:"low-level-settings",level:2},{value:"DNS protection",id:"dns-protection",level:3},{value:"Fallback upstreams",id:"fallback-upstreams",level:4},{value:"Fallback domains",id:"fallback-domains",level:4},{value:"Detect search domains",id:"detect-search-domains",level:4},{value:"Bootstrap upstreams",id:"bootstrap-upstreams",level:4},{value:"Blocking mode for adblock-style rules",id:"blocking-mode-for-adblock-style-rules",level:4},{value:"Blocking mode for hosts rules",id:"blocking-mode-for-hosts-rules",level:4},{value:"DNS request timeout",id:"dns-request-timeout",level:4},{value:"Blocked response TTL",id:"blocked-response-ttl",level:4},{value:"DNS cache size",id:"dns-cache-size",level:4},{value:"ECH blocking",id:"ech-blocking",level:4},{value:"Ignore unavailable outbound proxy",id:"ignore-unavailable-outbound-proxy",level:4},{value:"Try HTTP/3 for DNS-over-HTTPS upstreams",id:"try-http3-for-dns-over-https-upstreams",level:4},{value:"SERVFAIL failure response",id:"servfail-failure-response",level:4},{value:"Use fallback for non-fallback domains",id:"use-fallback-for-non-fallback-domains",level:4},{value:"Validate DNS upstreams",id:"validate-dns-upstreams",level:4},{value:"Filtering",id:"filtering",level:3},{value:"Capture HAR",id:"capture-har",level:4},{value:"Filtrage HTTPS",id:"filtrage-https",level:3},{value:"Encrypted Client Hello",id:"encrypted-client-hello",level:4},{value:"OCSP checking",id:"ocsp-checking",level:4},{value:"Redirect DNS-over-HTTPS requests",id:"redirect-dns-over-https-requests",level:4},{value:"Outbound Proxy",id:"outbound-proxy",level:3},{value:"Show the Filter DNS requests setting",id:"show-the-filter-dns-requests-setting",level:4},{value:"Protection",id:"protection",level:3},{value:"Port ranges",id:"port-ranges",level:4},{value:"Log removed HTML events",id:"log-removed-html-events",level:4},{value:"Scriplet debugging",id:"scriplet-debugging",level:4},{value:"Excluded apps",id:"excluded-apps",level:4},{value:"QUIC bypass packages",id:"quic-bypass-packages",level:4},{value:"Reconfigure Automatic proxy when network changes",id:"reconfigure-automatic-proxy-when-network-changes",level:4},{value:"IPv6 filtering",id:"ipv6-filtering",level:4},{value:"IPv4 ranges excluded from filtering",id:"ipv4-ranges-excluded-from-filtering",level:4},{value:"IPv6 ranges excluded from filtering",id:"ipv6-ranges-excluded-from-filtering",level:4},{value:"TCP keepalive for outgoing sockets",id:"tcp-keepalive-for-outgoing-sockets",level:4},{value:"Local VPN settings",id:"local-vpn-settings",level:3},{value:"Recovery delay for revoked VPN",id:"recovery-delay-for-revoked-vpn",level:4},{value:"Reschedule delay for revoked VPN recovery",id:"reschedule-delay-for-revoked-vpn-recovery",level:4},{value:"MTU",id:"mtu",level:4},{value:"Restore VPN automatically",id:"restore-vpn-automatically",level:4},{value:"Packet capture (PCAP)",id:"packet-capture-pcap",level:4},{value:"Include Wi-Fi gateway in VPN routes",id:"include-wi-fi-gateway-in-vpn-routes",level:4},{value:"IPv4 address",id:"ipv4-address",level:4},{value:"Forcibly route LAN IPv4",id:"forcibly-route-lan-ipv4",level:4},{value:"Route all LAN IPv4 connections",id:"route-all-lan-ipv4-connections",level:4},{value:"IPv6 address",id:"ipv6-address",level:4},{value:"Divers",id:"divers",level:3},{value:"Detect Samsung Pay",id:"detect-samsung-pay",level:4}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,o.kt)("h2",{id:"how-to-reach-the-low-level-settings"},"How to reach the Low-level settings"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Changing ",(0,o.kt)("em",{parentName:"p"},"Low-level settings")," can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only open this section if you are sure of what you are doing or our support-team has asked you about it.")),(0,o.kt)("p",null,"To go to ",(0,o.kt)("em",{parentName:"p"},"Low-level settings"),", open the AdGuard app and tap the gear icon in the lower right corner of the screen. Then choose ",(0,o.kt)("em",{parentName:"p"},"General \u2192 Advanced \u2192 Low-level settings"),"."),(0,o.kt)("h2",{id:"low-level-settings"},"Low-level settings"),(0,o.kt)("p",null,"For AdGuard v4.0 for Android we've completely redesigned the low-level settings: divided them into thematic blocks, made them clearer, added validation of entered values and other safety valves, got rid of some settings, and added others."),(0,o.kt)("h3",{id:"dns-protection"},"DNS protection"),(0,o.kt)("h4",{id:"fallback-upstreams"},"Fallback upstreams"),(0,o.kt)("p",null,"Here you can specify the fallback DNS resolver(s) to be used if the configured server is unavailable. There are three options: ",(0,o.kt)("em",{parentName:"p"},"Automatic DNS"),", ",(0,o.kt)("em",{parentName:"p"},"None"),", and ",(0,o.kt)("em",{parentName:"p"},"Custom DNS"),". If no fallback server is specified, the ",(0,o.kt)("em",{parentName:"p"},"Automatic DNS")," \u2014 the system DNS or AdGuard DNS \u2014 will be used. ",(0,o.kt)("em",{parentName:"p"},"None")," means no fallback at all. Selecting ",(0,o.kt)("em",{parentName:"p"},"Custom DNS")," allows you to list IPv4 and IPv6 server addresses to use as upstreams."),(0,o.kt)("h4",{id:"fallback-domains"},"Fallback domains"),(0,o.kt)("p",null,"Here you can list domains that will be forwarded directly to fallback upstreams if they exist."),(0,o.kt)("h4",{id:"detect-search-domains"},"Detect search domains"),(0,o.kt)("p",null,"If this option is enabled, AdGuard will detect search domains and automatically forward them to fallback upstreams."),(0,o.kt)("h4",{id:"bootstrap-upstreams"},"Bootstrap upstreams"),(0,o.kt)("p",null,"Bootstrap DNS for DoH, DoT, and DoQ servers. The ",(0,o.kt)("em",{parentName:"p"},"Automatic DNS")," - the system DNS or AdGuard DNS - is used by default. By selecting ",(0,o.kt)("em",{parentName:"p"},"Custom DNS"),", you can list IPv4 and IPv6 server addresses to use as bootstrap upstreams."),(0,o.kt)("h4",{id:"blocking-mode-for-adblock-style-rules"},"Blocking mode for adblock-style rules"),(0,o.kt)("p",null,"Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"||example.org^"),")."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Respond with REFUSED (default)"),(0,o.kt)("li",{parentName:"ul"},"Respond with NXDOMAIN"),(0,o.kt)("li",{parentName:"ul"},"Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here)")),(0,o.kt)("h4",{id:"blocking-mode-for-hosts-rules"},"Blocking mode for hosts rules"),(0,o.kt)("p",null,"Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax (for instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"<ip> <domain> 0.0.0.0 example.com"),")."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Respond with REFUSED"),(0,o.kt)("li",{parentName:"ul"},"Respond with NXDOMAIN"),(0,o.kt)("li",{parentName:"ul"},"Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here) \u2013 default")),(0,o.kt)("h4",{id:"dns-request-timeout"},"DNS request timeout"),(0,o.kt)("p",null,"Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don\u2019t fill in this field or enter an invalid value, the value of 5000 will be used."),(0,o.kt)("h4",{id:"blocked-response-ttl"},"Blocked response TTL"),(0,o.kt)("p",null,"Here you can specify the TTL (time to live) value that will be returned in response to a blocked request."),(0,o.kt)("h4",{id:"dns-cache-size"},"DNS cache size"),(0,o.kt)("p",null,"Here you can specify the maximum number of cached responses. Default value is 1000."),(0,o.kt)("h4",{id:"ech-blocking"},"ECH blocking"),(0,o.kt)("p",null,"If enabled, AdGuard strips Encrypted Client Hello parameters from DNS responses."),(0,o.kt)("h4",{id:"ignore-unavailable-outbound-proxy"},"Ignore unavailable outbound proxy"),(0,o.kt)("p",null,"Enable this feature to make AdGuard send DNS requests directly if the outbound proxy is unavailable."),(0,o.kt)("h4",{id:"try-http3-for-dns-over-https-upstreams"},"Try HTTP/3 for DNS-over-HTTPS upstreams"),(0,o.kt)("p",null,"By default, all DNS requests for DNS-over-HTTPS are sent via HTTP/2 protocol. If enabled, AdGuard uses HTTP/3 to speed up DNS query resolution for DoH upstreams."),(0,o.kt)("h4",{id:"servfail-failure-response"},"SERVFAIL failure response"),(0,o.kt)("p",null,"Once enabled, AdGuard sends a SERVFAIL response to the client if all upstreams, including fallback ones, fail to reply. When this setting is disabled, no response is sent to the client."),(0,o.kt)("h4",{id:"use-fallback-for-non-fallback-domains"},"Use fallback for non-fallback domains"),(0,o.kt)("p",null,"Enable this feature if you want AdGuard to use fallback upstream for all domains. Otherwise, fallback upstream will only be used for fallback domains and search domains if the corresponding option is enabled."),(0,o.kt)("h4",{id:"validate-dns-upstreams"},"Validate DNS upstreams"),(0,o.kt)("p",null,"Enable to make AdGuard test DNS upstreams before adding or updating custom DNS servers."),(0,o.kt)("h3",{id:"filtering"},"Filtering"),(0,o.kt)("h4",{id:"capture-har"},"Capture HAR"),(0,o.kt)("p",null,'Here you can enable HAR file capture. Use it only for debugging purposes! If the setting is enabled, AdGuard will create a directory named "har" inside the app cache directory. It contains information about all filtered HTTP requests in HAR 1.2 format and can be analyzed with the Fiddler program.'),(0,o.kt)("h3",{id:"filtrage-https"},"Filtrage HTTPS"),(0,o.kt)("h4",{id:"encrypted-client-hello"},"Encrypted Client Hello"),(0,o.kt)("p",null,"Every encrypted Internet connection has an unencrypted part. This is the very first packet which contains the name of the server you are connecting to. Encrypted Client Hello technology is supposed to solve this issue and encrypt that last bit of unencrypted information. To benefit from it, enable the ",(0,o.kt)("em",{parentName:"p"},"Encrypted Client Hello")," option. It uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, ClientHello packet will be encrypted."),(0,o.kt)("h4",{id:"ocsp-checking"},"OCSP checking"),(0,o.kt)("p",null,"Once enabled, this option runs asynchronous OCSP checks to check whether the website\u2019s SSL certificate is revoked."),(0,o.kt)("p",null,"If the OCSP check is completed within the minimum timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid."),(0,o.kt)("p",null,"If the verification takes too long, AdGuard will establish a connection and continue checking the certificate in the background. If it is revoked, current and future connections to the domain will be blocked."),(0,o.kt)("h4",{id:"redirect-dns-over-https-requests"},"Redirect DNS-over-HTTPS requests"),(0,o.kt)("p",null,"IF enabled, DNS-over-HTTPS requests will be redirected to the DNS Protection module. We recommend disabling fallback upstreams and use only encrypted DNS servers to maintain privacy."),(0,o.kt)("h3",{id:"outbound-proxy"},"Outbound Proxy"),(0,o.kt)("h4",{id:"show-the-filter-dns-requests-setting"},"Show the Filter DNS requests setting"),(0,o.kt)("p",null,"When this feature is enabled, the string ",(0,o.kt)("em",{parentName:"p"},"Filter DNS requests")," appears in the ",(0,o.kt)("em",{parentName:"p"},"Settings \u279d Filtering \u279d Network \u279d Proxy \u279d Proxy server \u279d Add proxy server")," section with the switch next to it. By toggling the switch, you can enable filtering of DNS requests passing through the proxy."),(0,o.kt)("h3",{id:"protection"},"Protection"),(0,o.kt)("h4",{id:"port-ranges"},"Port ranges"),(0,o.kt)("p",null,"Here you can specify port ranges that should be filtered."),(0,o.kt)("h4",{id:"log-removed-html-events"},"Log removed HTML events"),(0,o.kt)("p",null,"If enabled, AdGuard records blocked HTML elements in the filtering log."),(0,o.kt)("h4",{id:"scriplet-debugging"},"Scriplet debugging"),(0,o.kt)("p",null,"If you need to activate debugging of scriptlets, enable this feature. Then there will be messages in the browser log that some scriplet rules have been applied."),(0,o.kt)("h4",{id:"excluded-apps"},"Excluded apps"),(0,o.kt)("p",null,"Here you can list package names and UIDs that you want to exclude from AdGuard protection."),(0,o.kt)("h4",{id:"quic-bypass-packages"},"QUIC bypass packages"),(0,o.kt)("p",null,"Here you can specify package names for which AdGuard should bypass QUIC traffic."),(0,o.kt)("h4",{id:"reconfigure-automatic-proxy-when-network-changes"},"Reconfigure Automatic proxy when network changes"),(0,o.kt)("p",null,"Enable this setting if you want the protection to restart to reconfigure the automatic proxy settings when the device connects to another network. The state of this setting affects operation only if the current routing mode is Automatic proxy."),(0,o.kt)("h4",{id:"ipv6-filtering"},"IPv6 filtering"),(0,o.kt)("p",null,"If enabled, AdGuard filters IPv6 networks if an IPv6 network interface is available."),(0,o.kt)("h4",{id:"ipv4-ranges-excluded-from-filtering"},"IPv4 ranges excluded from filtering"),(0,o.kt)("p",null,"Filtering for IPv4 ranges, listed in this section, will be disabled."),(0,o.kt)("h4",{id:"ipv6-ranges-excluded-from-filtering"},"IPv6 ranges excluded from filtering"),(0,o.kt)("p",null,"Filtering for IPv6 ranges, listed in this section, will be disabled."),(0,o.kt)("h4",{id:"tcp-keepalive-for-outgoing-sockets"},"TCP keepalive for outgoing sockets"),(0,o.kt)("p",null,"If enabled, AdGuard sends a keepalive probe after the specified time period to ensure if the TCP connection is alive. Here you can specify the TCP keepalive idle time before starting keepalive probes and time between keepalive probes for an unresponsive peer."),(0,o.kt)("p",null,"After a system-defined number of unsuccessful attempts to get a response from the server, the system automatically closes the TCP connection."),(0,o.kt)("h3",{id:"local-vpn-settings"},"Local VPN settings"),(0,o.kt)("h4",{id:"recovery-delay-for-revoked-vpn"},"Recovery delay for revoked VPN"),(0,o.kt)("p",null,"Here you can set the time of a delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms."),(0,o.kt)("h4",{id:"reschedule-delay-for-revoked-vpn-recovery"},"Reschedule delay for revoked VPN recovery"),(0,o.kt)("p",null,"Here you can set the time of a delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms."),(0,o.kt)("h4",{id:"mtu"},"MTU"),(0,o.kt)("p",null,"Here you can set the maximum transmission unit (MTU) of the VPN interface. The recommended range is 1500-1900 bytes."),(0,o.kt)("h4",{id:"restore-vpn-automatically"},"Restore VPN automatically"),(0,o.kt)("p",null,"If enabled, this feature automatically re-enables AdGuard\u2019s local VPN after it has been turned off due to network absence, tethering, or low-power mode."),(0,o.kt)("h4",{id:"packet-capture-pcap"},"Packet capture (PCAP)"),(0,o.kt)("p",null,"If enabled, AdGuard will create the special file name ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp.pcap")," (for instance, 1682599851461.pcap). It contains all network packets transferred through the VPN. This file is located in the app cache directory and can be analyzed with the Wireshark program."),(0,o.kt)("h4",{id:"include-wi-fi-gateway-in-vpn-routes"},"Include Wi-Fi gateway in VPN routes"),(0,o.kt)("p",null,"If you want the gateway IP addresses to be added to VPN routes when on Wi-Fi, enable this feature."),(0,o.kt)("h4",{id:"ipv4-address"},"IPv4 address"),(0,o.kt)("p",null,"Here you can enter the IP address that will be used to create a TUN interface. By default, it is ",(0,o.kt)("inlineCode",{parentName:"p"},"172.18.11.218"),"."),(0,o.kt)("h4",{id:"forcibly-route-lan-ipv4"},"Forcibly route LAN IPv4"),(0,o.kt)("p",null,"When enabled, AdGuard filters all LAN connections, including local IPv4 network traffic, even if the ",(0,o.kt)("em",{parentName:"p"},"Route all LAN IPv4 connections")," option is enabled."),(0,o.kt)("h4",{id:"route-all-lan-ipv4-connections"},"Route all LAN IPv4 connections"),(0,o.kt)("p",null,"Once enabled, AdGuard excludes LAN connections from filtering for simple networks. May not work for complex networks. Works only with the ",(0,o.kt)("em",{parentName:"p"},"Forcibly route LAN IPv4")," option disabled."),(0,o.kt)("h4",{id:"ipv6-address"},"IPv6 address"),(0,o.kt)("p",null,"Here you can enter the IP address that will be used to create a TUN interface. By default, it is ",(0,o.kt)("inlineCode",{parentName:"p"},"2001:db8:ad:0:ff::"),"."),(0,o.kt)("h3",{id:"divers"},"Divers"),(0,o.kt)("h4",{id:"detect-samsung-pay"},"Detect Samsung Pay"),(0,o.kt)("p",null,"Korean users may encounter issues with Samsung Pay when AdGuard is enabled. Activate this feature to pause AdGuard's protection and use the Samsung Pay app seamlessly."))}c.isMDXComponent=!0}}]);