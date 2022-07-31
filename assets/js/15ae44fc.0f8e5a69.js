"use strict";(self.webpackChunkdndocs=self.webpackChunkdndocs||[]).push([[1712],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},i=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(d,".").concat(m)]||u[m]||l[m]||a;return t?n.createElement(f,p(p({ref:r},i),{},{components:t})):n.createElement(f,p({ref:r},i))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var c=2;c<a;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8862:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:0},p="Depends",s={unversionedId:"For developpers/Addon/Depends",id:"For developpers/Addon/Depends",title:"Depends",description:"Vous pouvez t\xe9l\xe9charger l'API cot\xe9 Addon sur ce lien:",source:"@site/docs/For developpers/Addon/Depends.mdx",sourceDirName:"For developpers/Addon",slug:"/For developpers/Addon/Depends",permalink:"/DreamNetwork-DocumentationV2/docs/For developpers/Addon/Depends",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/For developpers/Addon/Depends.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"For developpers",permalink:"/DreamNetwork-DocumentationV2/docs/category/for-developpers"},next:{title:"To begin",permalink:"/DreamNetwork-DocumentationV2/docs/For developpers/Addon/get-started"}},d={},c=[],i={toc:c};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"depends"},"Depends"),(0,o.kt)("p",null,"Vous pouvez t\xe9l\xe9charger l'API cot\xe9 Addon sur ce lien:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cdn.dreamnetwork.cloud/hypervisor/api/1.10/DreamNetwork-api.jar"},"https://cdn.dreamnetwork.cloud/hypervisor/api/1.10/DreamNetwork-api.jar")),(0,o.kt)("p",null,"Ajoutez DreamNetwork-api.jar dans un dossier facilement accessible par votre IDE, dans le cas de l'exemple ci-dessous, il se situra dans le dossier libs."),(0,o.kt)("p",null,"Rajouter les d\xe9pendences suivantes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>be.alexandre01.dreamnetwork</groupId>\n        <artifactId>DreamNetwork-Plugin-API</artifactId>\n        <version>1.4.0-SNAPSHOT</version>\n        <scope>system</scope>\n        <systemPath>${project.basedir}/libs/DreamNetwork-Plugin-api.jar</systemPath>\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <version>1.18.22</version>\n        <scope>compile</scope>\n    </dependency>\n")))}l.isMDXComponent=!0}}]);