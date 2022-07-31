"use strict";(self.webpackChunkdndocs=self.webpackChunkdndocs||[]).push([[6067],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(t),f=i,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return t?n.createElement(d,a(a({ref:r},c),{},{components:t})):n.createElement(d,a({ref:r},c))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3490:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:1},a="Le fichier Network \ud83d\udda7",u={unversionedId:"hypervisor/Configuration/Network File",id:"hypervisor/Configuration/Network File",title:"Le fichier Network \ud83d\udda7",description:"Il s'agit du fichier de configuration utilis\xe9 pour que le syst\xe8me sache par d\xe9faut ce qu'il doit faire.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/hypervisor/04-Configuration/Network File.mdx",sourceDirName:"hypervisor/04-Configuration",slug:"/hypervisor/Configuration/Network File",permalink:"/fr/docs/hypervisor/Configuration/Network File",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hypervisor/04-Configuration/Network File.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/fr/docs/category/configuration"},next:{title:"Le fichier ServiceBundle \ud83d\udce6",permalink:"/fr/docs/hypervisor/Configuration/ServiceBundle"}},s={},l=[],c={toc:l};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"le-fichier-network-"},"Le fichier Network \ud83d\udda7"),(0,i.kt)("p",null,"Il s'agit du fichier de configuration utilis\xe9 pour que le syst\xe8me sache par d\xe9faut ce qu'il doit faire."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Lobby's configuration of the startup -|- DreamNetwork\u2122 2022\ntype: DYNAMIC #Ou STATIC ; Vous pouvez changez le type ici \nxms: 1G # RAM Minimum\nxmx: 2G # RAM Maximum\nexecutable: paper_spigot_1_8_8 # le jar qui va s'executer\njava-version: 8 #La version de java, vous pouvez trouver vos versions dans le dossier de donn\xe9es de DreamNetwork dans le JDKIndex.json\nproxy: false\n")),(0,i.kt)("p",null,"Il y a une m\xe9thode en plus qui peut \xeatre rajout\xe9 et qui se nomme startup."),(0,i.kt)("p",null,"Vous pouvez vous m\xeame rajouter vos propres arguments Java customis\xe9 pour chaque serveur."),(0,i.kt)("p",null,"%java% : Le chemin vers la version du Java utilis\xe9 pour le serveur actuel"),(0,i.kt)("p",null,"%xms%: Ram minimum"),(0,i.kt)("p",null,"%xmx%: Ram maximum"),(0,i.kt)("p",null,"%exec%: Le fichier utilis\xe9 pour executer le serveur / proxy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#Exemple avec l'optimisation Aikar\nstartup: %java% -DB=false -DN=false -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -Xms%xms% -Xmx%xmx% -jar %exec% nogui\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Dans la version actuelle de DreamNetwork, vous devez le red\xe9marrer pour appliquer les changements.")))}p.isMDXComponent=!0}}]);