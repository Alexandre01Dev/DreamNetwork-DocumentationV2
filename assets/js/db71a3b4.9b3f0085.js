"use strict";(self.webpackChunkdndocs=self.webpackChunkdndocs||[]).push([[5698],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(v,l(l({ref:r},c),{},{components:t})):n.createElement(v,l({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(7294),a=t(6010);const o="tabItem_Ymn6";function l(e){let{children:r,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>m});var n=t(7462),a=t(7294),o=t(6010),l=t(2389),s=t(7392),i=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var r,t;const{lazy:l,block:d,defaultValue:m,values:v,groupId:f,className:b}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:y.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),g=(0,s.l)(h,((e,r)=>e.value===r.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(r=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?r:y[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:O,setTabGroupChoices:w}=(0,i.U)(),[x,T]=(0,a.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=f){const e=O[f];null!=e&&e!==x&&h.some((r=>r.value===e))&&T(e)}const N=e=>{const r=e.currentTarget,t=j.indexOf(r),n=h[t].value;n!==x&&(E(r),T(n),null!=f&&w(f,String(n)))},C=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{var n;const r=j.indexOf(e.currentTarget)+1;t=null!=(n=j[r])?n:j[0];break}case"ArrowLeft":{var a;const r=j.indexOf(e.currentTarget)-1;t=null!=(a=j[r])?a:j[j.length-1];break}}null==(r=t)||r.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},h.map((e=>{let{value:r,label:t,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===r?0:-1,"aria-selected":x===r,key:r,ref:e=>j.push(e),onKeyDown:C,onFocus:N,onClick:N},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":x===r})}),null!=t?t:r)}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==x})))))}function m(e){const r=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(r)},e))}},3139:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=t(7462),a=(t(7294),t(3905)),o=t(5488),l=t(5162);const s={sidebar_position:1},i="Create your first servers \ud83d\udc40",u={unversionedId:"hypervisor/Commands/Service/Add",id:"hypervisor/Commands/Service/Add",title:"Create your first servers \ud83d\udc40",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/hypervisor/03-Commands/Service/Add.mdx",sourceDirName:"hypervisor/03-Commands/Service",slug:"/hypervisor/Commands/Service/Add",permalink:"/docs/hypervisor/Commands/Service/Add",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hypervisor/03-Commands/Service/Add.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Service",permalink:"/docs/category/service"},next:{title:"Install your versions \ud83d\ude3a",permalink:"/docs/hypervisor/Commands/Service/Install"}},c={},p=[],d={toc:p};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-your-first-servers-"},"Create your first servers \ud83d\udc40"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"proxy",label:"DreamNetwork.jar - Example Proxy",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=/root/DNLauncher.jar",title:"/root/DNLauncher.jar"},"service add proxy proxy STATIC 128M 512M\n"))),(0,a.kt)(l.Z,{value:"server",label:"DreamNetwork.jar - Example Server",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=/root/DNLauncher.jar",title:"/root/DNLauncher.jar"},"service add server lobby DYNAMIC 1G 2G\n")))))}m.isMDXComponent=!0}}]);