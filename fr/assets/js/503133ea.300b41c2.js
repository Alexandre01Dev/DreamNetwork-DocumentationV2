"use strict";(self.webpackChunkdndocs=self.webpackChunkdndocs||[]).push([[2431],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(v,i(i({ref:r},c),{},{components:t})):n.createElement(v,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},556:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},i="Install the Hypervisor\ud83c\udf25\ufe0f",s={unversionedId:"hypervisor/Installation/install-dn",id:"hypervisor/Installation/install-dn",title:"Install the Hypervisor\ud83c\udf25\ufe0f",description:"D'abord,vous devez t\xe9l\xe9charger le Launcher de l'hyperviseur de DreamNetwork via :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/hypervisor/01-Installation/install-dn.mdx",sourceDirName:"hypervisor/01-Installation",slug:"/hypervisor/Installation/install-dn",permalink:"/DreamNetwork-DocumentationV2/fr/docs/hypervisor/Installation/install-dn",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hypervisor/01-Installation/install-dn.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installer Java\ud83d\udcf2",permalink:"/DreamNetwork-DocumentationV2/fr/docs/hypervisor/Installation/install-java"},next:{title:"First Setup",permalink:"/DreamNetwork-DocumentationV2/fr/docs/category/first-setup"}},l={},p=[],c={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-the-hypervisor\ufe0f"},"Install the Hypervisor\ud83c\udf25\ufe0f"),(0,a.kt)("p",null,"D'abord,vous devez t\xe9l\xe9charger le Launcher de l'hyperviseur de DreamNetwork via :",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"wget https://cdn.dreamnetwork.cloud/hypervisor/launcher/DNLauncher.jar")),(0,a.kt)("p",null,"Donnez lui les permissions",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"chmod +x DNLauncher.jar")),(0,a.kt)("p",null,'Puis lancez le ou cr\xe9e un shell (fichier "~.sh") via cette commande:',(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar -Xms128M -Xmx512M -XX:+UseG1GC -XX:MinHeapFreeRatio=15 -XX:MaxHeapFreeRatio=30 -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=50 -XX:CompileThreshold=100 -XX:+UseCompressedOops -jar DNLauncher.jar\n")),(0,a.kt)("admonition",{title:"Si vous utilisez Java 9 ou sup\xe9rieur: Ajoutez ces arguments avant le -jar:",type:"danger"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"--add-opens java.base/java.nio=ALL-UNNAMED --add-opens java.base/jdk.internal.ref=ALL-UNNAMED\n")),(0,a.kt)("p",{parentName:"admonition"},"Example: "),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"java -Xms128M -Xmx512M --add-opens java.base/java.nio=ALL-UNNAMED --add-opens java.base/jdk.internal.ref=ALL-UNNAMED -jar DNLauncher.jar\n")),(0,a.kt)("p",{parentName:"admonition"},'Cela aide a ne pas avoir de "carbage collections" (Des donn\xe9es qui restent dans la RAM).:::')))}u.isMDXComponent=!0}}]);