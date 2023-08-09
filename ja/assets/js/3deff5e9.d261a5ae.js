"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2563],{4137:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,d=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return a?r.createElement(d,l(l({ref:t},k),{},{components:a})):r.createElement(d,l({ref:t},k))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(4137));const o={title:"How to collect a HAR file",sidebar_position:1},l=void 0,i={unversionedId:"guides/collect-har-file",id:"guides/collect-har-file",title:"How to collect a HAR file",description:"HAR files help our technical support teams troubleshoot complex issues. To create these files, we recommend using Chrome or Firefox. However, IE 11, Edge, and Safari also provide .har file generation and export capability.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/collect-har-file.md",sourceDirName:"guides",slug:"/guides/collect-har-file",permalink:"/KnowledgeBase/ja/guides/collect-har-file",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/collect-har-file.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to collect a HAR file",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Credits & Acknowledgements",permalink:"/KnowledgeBase/ja/miscellaneous/acknowledgements"},next:{title:"How to install a proxy certificate",permalink:"/KnowledgeBase/ja/guides/proxy-certificate"}},p={},s=[{value:"Chrome",id:"chrome",level:2},{value:"Edge",id:"edge",level:2},{value:"Firefox",id:"firefox",level:2},{value:"Internet Explorer 11",id:"ie11",level:2},{value:"Safari",id:"safari",level:2},{value:"Android",id:"android",level:2},{value:"Windows",id:"windows",level:2}],k={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"HAR files help our technical support teams troubleshoot complex issues. To create these files, we recommend using Chrome or Firefox. However, IE 11, Edge, and Safari also provide ",(0,n.kt)("inlineCode",{parentName:"p"},".har")," file generation and export capability."),(0,n.kt)("h2",{id:"chrome"},"Chrome"),(0,n.kt)("p",null,"To create a HAR file in Chrome:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the URL where the issue occurs. Do not reproduce the issue yet.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Developer Tools"),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From menu: ",(0,n.kt)("strong",{parentName:"li"},"Menu \u2192 More Tools \u2192 Developer Tools"),"."),(0,n.kt)("li",{parentName:"ul"},"Keyboard: ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Shift+C"),", or ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Alt+I"),", or ",(0,n.kt)("strong",{parentName:"li"},"\u2325+\u2318+I for Mac"),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Network tab"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate the round button at the top left of the Network tab and confirm it is in red recording mode. If it's grey, click to turn red to start recording.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("strong",{parentName:"p"},"Clear")," button (the circle button with a line through it next to the record button) to clear all previous activity.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Preserve log")," check box on the Network tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Disable cache")," check box."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png",alt:"Chrome"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce the steps that create the issue.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by right-clicking the grid and selecting ",(0,n.kt)("strong",{parentName:"p"},"Save as HAR with content"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Forward to AdGuard support (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") with detailed explanation of issue. Supporting screenshots can be helpful, as well."))),(0,n.kt)("h2",{id:"edge"},"Edge"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the URL where the issue occurs. Do not reproduce the issue yet.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Developer Tools"),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From menu: ",(0,n.kt)("strong",{parentName:"li"},"Menu \u2192 More Tools \u2192 Developer Tools"),"."),(0,n.kt)("li",{parentName:"ul"},"Keyboard: ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Shift+C"),", or ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Alt+I"),", or ",(0,n.kt)("strong",{parentName:"li"},"\u2325+\u2318+I for Mac"),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Network tab"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate the round button at the top left of the Network tab and confirm it is in red recording mode. If it's grey, click to turn red to start recording.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("strong",{parentName:"p"},"Clear")," button (the circle button with a line through it next to the record button) to clear all previous activity.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Preserve log")," check box on the Network tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Disable cache")," check box."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png",alt:"edge"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce the steps that create the issue.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by right-clicking the grid and selecting ",(0,n.kt)("strong",{parentName:"p"},"Save as HAR with content"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Forward to AdGuard support (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") with detailed explanation of issue. Supporting screenshots can be helpful, as well."))),(0,n.kt)("h2",{id:"firefox"},"Firefox"),(0,n.kt)("p",null,"To create a HAR file in Firefox:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the URL where the issue occurs. Do not reproduce the issue yet.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Developer Tools in ",(0,n.kt)("strong",{parentName:"p"},"Network")," mode:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From menu: ",(0,n.kt)("strong",{parentName:"li"},"Menu \u2192 Web Developer \u2192 Network"),"."),(0,n.kt)("li",{parentName:"ul"},"Keyboard: ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Shift+C"),", or ",(0,n.kt)("strong",{parentName:"li"},"\u2325+\u2318+E (Mac)"),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Note the ",(0,n.kt)("strong",{parentName:"li"},"Play/Pause")," button at the top left of the Network tab.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Button should be in play mode.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If any information is currently displayed in the grid, clear by clicking the ",(0,n.kt)("strong",{parentName:"p"},"Delete trash can")," button next to the play/pause button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Persist Logs")," check box on the Network tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Disable cache")," check box."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png",alt:"firefox"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce the steps that create the issue.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by right-clicking the grid and selecting ",(0,n.kt)("strong",{parentName:"p"},"Save all as HAR"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Forward to AdGuard support (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") with detailed explanation of issue. Supporting screenshots can be helpful, as well."))),(0,n.kt)("h2",{id:"ie11"},"Internet Explorer 11"),(0,n.kt)("p",null,"To create a HAR file in Internet Explorer 11:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the URL where the issue occurs. Do not reproduce the issue yet.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Developer Tools in ",(0,n.kt)("strong",{parentName:"p"},"Network")," mode:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From Tools cog wheel menu: ",(0,n.kt)("strong",{parentName:"li"},"Developer Tools")," \u2192 ",(0,n.kt)("strong",{parentName:"li"},"Network tab"),"."),(0,n.kt)("li",{parentName:"ul"},"Keyboard: ",(0,n.kt)("strong",{parentName:"li"},"F12 \u2192 Network")," tab.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Note the start profiling session ",(0,n.kt)("strong",{parentName:"li"},"Play")," button and stop profiling ",(0,n.kt)("strong",{parentName:"li"},"Stop")," button at top left of Network tab.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Play button will be gray when recording and Stop button will be red. Put in ",(0,n.kt)("strong",{parentName:"li"},"Play")," mode.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Clear any session info appearing in the lower grid using the ",(0,n.kt)("strong",{parentName:"li"},"Clear session")," button on Network tab. Hover over icons to see names.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Clear session")," button is a three line icon with an x on it.")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Disable cache")," check box.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce the steps that create the issue.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Save disk")," button (Export as HAR) on Network tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Forward to AdGuard support (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") with detailed explanation of issue. Supporting screenshots can be helpful, as well."))),(0,n.kt)("h2",{id:"safari"},"Safari"),(0,n.kt)("p",null,"To create a HAR file in Safari:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Check the Safari menu bar at the top of the screen for a ",(0,n.kt)("strong",{parentName:"li"},"Develop")," menu.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If not visible, turn it on by going to ",(0,n.kt)("strong",{parentName:"li"},"Safari \u2192 Settings \u2192 Advanced"),"."),(0,n.kt)("li",{parentName:"ul"},"Check the checkbox at the bottom next to ",(0,n.kt)("strong",{parentName:"li"},"Show Develop menu in menu bar"),".")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the URL where the issue occurs. Do not reproduce the issue yet.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Network")," tab in Web Inspector:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From menu: ",(0,n.kt)("strong",{parentName:"li"},"Develop \u2192 Show Web Inspector \u2192 Network"),"."),(0,n.kt)("li",{parentName:"ul"},"Keyboard: ",(0,n.kt)("strong",{parentName:"li"},"\u2325+\u2318+I\u2192Network"))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Check ",(0,n.kt)("strong",{parentName:"li"},"Preserve Log")," checkbox on left side of the Network tabs, within the ",(0,n.kt)("strong",{parentName:"li"},"Other filter options...")," menu.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png",alt:"safari"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Clear current Network items by clicking the ",(0,n.kt)("strong",{parentName:"li"},"Delete Trash")," icon at the far right of Network tabs.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Keyboard: ",(0,n.kt)("strong",{parentName:"li"},"\u2318+K"))),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Disable caches")," check box.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce the steps that create the issue.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by clicking the ",(0,n.kt)("strong",{parentName:"p"},"Export")," icon next to the ",(0,n.kt)("strong",{parentName:"p"},"Delete Trash")," icon.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Forward to AdGuard support (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") with detailed explanation of issue. Supporting screenshots can be helpful, too."))),(0,n.kt)("h2",{id:"android"},"Android"),(0,n.kt)("p",null,"To create HAR files, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("strong",{parentName:"p"},"Advanced")," in the menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("strong",{parentName:"p"},"Low Level Settings"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Activate ",(0,n.kt)("inlineCode",{parentName:"p"},"pref.har.capture")," (you will have to restart the protection).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now reproduce the problem \u2014 open the app, perform the necessary actions to make the ad appear.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now turn ",(0,n.kt)("inlineCode",{parentName:"p"},"pref.har.capture")," off again.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go back and tap ",(0,n.kt)("strong",{parentName:"p"},"Export logs and system info")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("h2",{id:"windows"},"Windows"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Settings*")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"General settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Advanced settings")," and scroll down.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Enable HAR writing")," box.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce the problem.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"General settings")," \u2192 Click ",(0,n.kt)("strong",{parentName:"p"},"Export logs")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Save"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Disable HAR writing by unchecking the corresponding box."))))}m.isMDXComponent=!0}}]);