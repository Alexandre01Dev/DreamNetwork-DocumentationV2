"use strict";(self.webpackChunkdndocs=self.webpackChunkdndocs||[]).push([[3661],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),u=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=n,v=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(v,l(l({ref:r},c),{},{components:t})):a.createElement(v,l({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>l});var a=t(7294),n=t(6010);const o="tabItem_Ymn6";function l(e){let{children:r,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>m});var a=t(7462),n=t(7294),o=t(6010),l=t(2389),s=t(7392),i=t(7094),u=t(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var r,t;const{lazy:l,block:p,defaultValue:m,values:v,groupId:f,className:b}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:y.map((e=>{let{props:{value:r,label:t,attributes:a}}=e;return{value:r,label:t,attributes:a}})),g=(0,s.l)(h,((e,r)=>e.value===r.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(r=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?r:y[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:O,setTabGroupChoices:T}=(0,i.U)(),[w,x]=(0,n.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=f){const e=O[f];null!=e&&e!==w&&h.some((r=>r.value===e))&&x(e)}const j=e=>{const r=e.currentTarget,t=C.indexOf(r),a=h[t].value;a!==w&&(N(r),x(a),null!=f&&T(f,String(a)))},E=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{var a;const r=C.indexOf(e.currentTarget)+1;t=null!=(a=C[r])?a:C[0];break}case"ArrowLeft":{var n;const r=C.indexOf(e.currentTarget)-1;t=null!=(n=C[r])?n:C[C.length-1];break}}null==(r=t)||r.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},h.map((e=>{let{value:r,label:t,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===r?0:-1,"aria-selected":w===r,key:r,ref:e=>C.push(e),onKeyDown:E,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===r})}),null!=t?t:r)}))),l?(0,n.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==w})))))}function m(e){const r=(0,l.Z)();return n.createElement(p,(0,a.Z)({key:String(r)},e))}},9700:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(7462),n=(t(7294),t(3905)),o=t(5488),l=t(5162);const s={sidebar_position:3},i="Create your first servers \ud83d\udc40",u={unversionedId:"hypervisor/Commands/Add",id:"hypervisor/Commands/Add",title:"Create your first servers \ud83d\udc40",description:"",source:"@site/docs/hypervisor/03-Commands/Add.mdx",sourceDirName:"hypervisor/03-Commands",slug:"/hypervisor/Commands/Add",permalink:"/docs/hypervisor/Commands/Add",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hypervisor/03-Commands/Add.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"STATIC and DYNAMIC \u26a1",permalink:"/docs/hypervisor/Commands/Mods"},next:{title:"Install your versions \ud83d\ude3a",permalink:"/docs/hypervisor/Commands/Install"}},c={},d=[],p={toc:d};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-your-first-servers-"},"Create your first servers \ud83d\udc40"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"proxy",label:"DreamNetwork.jar - Example Proxy",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=/root/DNLauncher.jar",title:"/root/DNLauncher.jar"},"service add proxy proxy STATIC 128M 512M\n"))),(0,n.kt)(l.Z,{value:"server",label:"DreamNetwork.jar - Example Server",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=/root/DNLauncher.jar",title:"/root/DNLauncher.jar"},"service add server lobby DYNAMIC 1G 2G\n")))))}m.isMDXComponent=!0}}]);