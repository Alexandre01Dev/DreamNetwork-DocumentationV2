"use strict";(self.webpackChunkdndocs=self.webpackChunkdndocs||[]).push([[9556],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8170:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2},i="Le fichier ServiceBundle \ud83d\udce6",u={unversionedId:"hypervisor/Configuration/ServiceBundle",id:"hypervisor/Configuration/ServiceBundle",title:"Le fichier ServiceBundle \ud83d\udce6",description:"Le fichier ServiceBundle se trouve dans le dossier data dans la racine de DreamNetwork",source:"@site/docs/hypervisor/04-Configuration/ServiceBundle.mdx",sourceDirName:"hypervisor/04-Configuration",slug:"/hypervisor/Configuration/ServiceBundle",permalink:"/docs/hypervisor/Configuration/ServiceBundle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hypervisor/04-Configuration/ServiceBundle.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/category/configuration"},next:{title:"Le fichier JDKIndex \ud83d\udce6",permalink:"/docs/hypervisor/Configuration/JDKIndex"}},l={},c=[],s={toc:c};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"le-fichier-servicebundle-"},"Le fichier ServiceBundle \ud83d\udce6"),(0,o.kt)("p",null,"Le fichier ServiceBundle se trouve dans le dossier data dans la racine de DreamNetwork"),(0,o.kt)("p",null,"elle permet d'executer les serveurs automatiquement \xe0 chaque d\xe9marrage du DreamNetwork."),(0,o.kt)("p",null,"Voici le fichier de configuration de base:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'{"defaultProxy":"1=PROXY,2=defaultProxy,3=[],4=true","defaultServer":"1=SERVER,2=defaultServer,3=[],4=true"}\n')),(0,o.kt)("p",null,'Vous pouvez mettre les serveurs \xe0 d\xe9marrer comme-ceci "NomDuServer:Nombre_De_Serveur_A_Allumer - exemple: lobby:3" dans le fichier'),(0,o.kt)("p",null,"Si le serveur est en mode STATIC mettez la valeur du nombre de serveur a allumer en 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'{"defaultProxy":"1=PROXY,2=defaultProxy,3=[BungeeCord:1],4=true","defaultServer":"1=SERVER,2=defaultServer,3=[Lobby:2;SkyWars:4],4=true"}\n')))}d.isMDXComponent=!0}}]);