"use strict";(self.webpackChunkdndocs=self.webpackChunkdndocs||[]).push([[112],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>f});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?t.createElement(m,a(a({ref:r},c),{},{components:n})):t.createElement(m,a({ref:r},c))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2924:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="Le fichier JDKIndex \ud83d\udce6",s={unversionedId:"hypervisor/Configuration/JDKIndex",id:"hypervisor/Configuration/JDKIndex",title:"Le fichier JDKIndex \ud83d\udce6",description:"Le fichier JDKIndex se trouve dans le dossier data dans la racine de DreamNetwork",source:"@site/docs/hypervisor/04-Configuration/JDKIndex.mdx",sourceDirName:"hypervisor/04-Configuration",slug:"/hypervisor/Configuration/JDKIndex",permalink:"/DreamNetwork-DocumentationV2/fr/docs/hypervisor/Configuration/JDKIndex",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hypervisor/04-Configuration/JDKIndex.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Le fichier ServiceBundle \ud83d\udce6",permalink:"/DreamNetwork-DocumentationV2/fr/docs/hypervisor/Configuration/ServiceBundle"},next:{title:"Le fichier de Configuration dans le proxy",permalink:"/DreamNetwork-DocumentationV2/fr/docs/hypervisor/Configuration/ConfigBungee"}},l={},u=[],c={toc:u};function d(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"le-fichier-jdkindex-"},"Le fichier JDKIndex \ud83d\udce6"),(0,o.kt)("p",null,"Le fichier JDKIndex se trouve dans le dossier data dans la racine de DreamNetwork"),(0,o.kt)("p",null,"Elle permet de stocker toute les versions Java disponnible sur la machine."),(0,o.kt)("p",null,"Voici le fichier de configuration type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'{"default":"java","1.11.0":"/usr/lib/jvm/java-1.11.0-openjdk-amd64/bin/java","1.8.0":"/usr/lib/jvm/java-1.8.0-openjdk-amd64/bin/java","8":"/usr/lib/jvm/zulu-8-amd64/bin/java","11":"/usr/lib/jvm/java-11-openjdk-amd64/bin/java","java8":"/usr/lib/jvm/bellsoft-java8-amd64/bin/java"}\n')),(0,o.kt)("p",null,"Si vous n'avez pas la version Java inscrite dans le fichier, vous pouvez le rajouter manuellement comme dans l'exemple en haut, sinon si vous \xeates sur linux, vous pouvez supprimer et replacer le fichier."),(0,o.kt)("p",null,"Normalement lors de la cr\xe9ation des serveurs minecraft, dans le fichier Network.yml cr\xe9e dans le dossier du serveur, vous devez trouver une ligne avec la version Java utilis\xe9."),(0,o.kt)("p",null,"Voir ","[ici]","(./Network File.mdx)"))}d.isMDXComponent=!0}}]);