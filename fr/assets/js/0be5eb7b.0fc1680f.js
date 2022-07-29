"use strict";(self.webpackChunkdndocs=self.webpackChunkdndocs||[]).push([[947],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,v=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return t?n.createElement(v,l(l({ref:r},u),{},{components:t})):n.createElement(v,l({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(7294),a=t(6010);const o="tabItem_Ymn6";function l(e){let{children:r,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(7462),a=t(7294),o=t(6010),l=t(2389),s=t(7392),i=t(7094),c=t(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var r,t;const{lazy:l,block:m,defaultValue:d,values:v,groupId:f,className:b}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:y.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),g=(0,s.l)(h,((e,r)=>e.value===r.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(r=null!=d?d:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?r:y[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:O}=(0,i.U)(),[x,T]=(0,a.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=f){const e=w[f];null!=e&&e!==x&&h.some((r=>r.value===e))&&T(e)}const N=e=>{const r=e.currentTarget,t=E.indexOf(r),n=h[t].value;n!==x&&(j(r),T(n),null!=f&&O(f,String(n)))},C=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{var n;const r=E.indexOf(e.currentTarget)+1;t=null!=(n=E[r])?n:E[0];break}case"ArrowLeft":{var a;const r=E.indexOf(e.currentTarget)-1;t=null!=(a=E[r])?a:E[E.length-1];break}}null==(r=t)||r.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},h.map((e=>{let{value:r,label:t,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===r?0:-1,"aria-selected":x===r,key:r,ref:e=>E.push(e),onKeyDown:C,onFocus:N,onClick:N},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":x===r})}),null!=t?t:r)}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==x})))))}function d(e){const r=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(r)},e))}},926:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=t(7462),a=(t(7294),t(3905)),o=t(5488),l=t(5162);const s={sidebar_position:6},i="View the console from your servers \ud83e\uddd0",c={unversionedId:"hypervisor/Commands/Service/Screen",id:"hypervisor/Commands/Service/Screen",title:"View the console from your servers \ud83e\uddd0",description:"To get your console server: You have to get the server with its ID.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/hypervisor/03-Commands/Service/Screen.mdx",sourceDirName:"hypervisor/03-Commands/Service",slug:"/hypervisor/Commands/Service/Screen",permalink:"/fr/docs/hypervisor/Commands/Service/Screen",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hypervisor/03-Commands/Service/Screen.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Kill your servers \ud83d\udc80",permalink:"/fr/docs/hypervisor/Commands/Service/Kill"},next:{title:"Clear the console \ud83e\uddfd",permalink:"/fr/docs/hypervisor/Commands/Clear"}},u={},p=[],m={toc:p};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"view-the-console-from-your-servers-"},"View the console from your servers \ud83e\uddd0"),(0,a.kt)("p",null,"To get your console server: You have to get the server with its ID."),(0,a.kt)("p",null,"Example \u27a1\ufe0f  ",(0,a.kt)("inlineCode",{parentName:"p"},"  service screen servername-id")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"proxy",label:"DreamNetwork.jar - Example Proxy",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=/root/DNLauncher.jar",title:"/root/DNLauncher.jar"},"service screen proxy-0\n"))),(0,a.kt)(l.Z,{value:"server",label:"DreamNetwork.jar - Example Server",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=/root/DNLauncher.jar",title:"/root/DNLauncher.jar"},"service screen lobby-0\n")))))}d.isMDXComponent=!0}}]);