"use strict";(self.webpackChunkdndocs=self.webpackChunkdndocs||[]).push([[6681],{1257:(e,r,s)=>{s.d(r,{J:()=>p});var a=s(7294),t=s(9521);const o=()=>({}),p=e=>{let{columns:r,data:s,getHeaderProps:p=o,getColumnProps:l=o}=e;const{getTableProps:n,getTableBodyProps:i,headerGroups:d,rows:u,prepareRow:c}=(0,t.useTable)({columns:r,data:s},t.useSortBy);return a.createElement("table",n(),a.createElement("thead",null,d.map((e=>a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((e=>a.createElement("th",e.getHeaderProps([{className:e.className},p(e),l(e),e.getSortByToggleProps()]),e.render("Header"),a.createElement("span",null,e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":"")))))))),a.createElement("tbody",i(),u.map(((e,r)=>(c(e),a.createElement("tr",e.getRowProps(),e.cells.map((e=>a.createElement("td",e.getCellProps([{className:e.column.className,style:e.column.style},l(e.column)]),e.render("Cell"))))))))))}},247:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>m,contentTitle:()=>c,default:()=>j,frontMatter:()=>u,metadata:()=>v,toc:()=>b});var a=s(7462),t=s(7294),o=s(3905),p=s(5488),l=s(5162),n=s(1257);const i=[{server:"1.8.8",proxy:"BUNGEECORD",urlProxy:"https://ci.md-5.net/job/BungeeCord/lastSuccessfulBuild/artifact/bootstrap/target/BungeeCord.jar",urlServer:"https://papermc.io/api/v2/projects/paper/versions/1.8.8/builds/445/downloads/paper-1.8.8-445.jar"},{server:"1.9.4",proxy:"WATERFALL",urlProxy:"https://api.papermc.io/v2/projects/waterfall/versions/1.19/builds/498/downloads/waterfall-1.19-498.jar",urlServer:"https://papermc.io/api/v2/projects/paper/versions/1.9.4/builds/775/downloads/paper-1.9.4-775.jar"},{server:"1.10.2",urlServer:"https://papermc.io/api/v2/projects/paper/versions/1.10.2/builds/918/downloads/paper-1.10.2-918.jar"},{server:"1.11.2",urlServer:"https://papermc.io/api/v2/projects/paper/versions/1.11.2/builds/1106/downloads/paper-1.11.2-1106.jar"},{server:"1.12.2",urlServer:"https://papermc.io/api/v2/projects/paper/versions/1.12.2/builds/1620/downloads/paper-1.12.2-1620.jar"},{server:"1.13.2",urlServer:"https://papermc.io/api/v2/projects/paper/versions/1.13.2/builds/657/downloads/paper-1.13.2-657.jar"},{server:"1.14.2",urlServer:"https://papermc.io/api/v2/projects/paper/versions/1.14.4/builds/245/downloads/paper-1.14.4-245.jar"},{server:"1.15.2",urlServer:"https://papermc.io/api/v2/projects/paper/versions/1.15.2/builds/393/downloads/paper-1.15.2-393.jar"},{server:"1.16.5",urlServer:"https://papermc.io/api/v2/projects/paper/versions/1.16.5/builds/794/downloads/paper-1.16.5-794.jar"},{server:"1.17.1",urlServer:"https://papermc.io/api/v2/projects/paper/versions/1.17.1/builds/397/downloads/paper-1.17.1-397.jar"},{server:"1.18.2",urlServer:"https://api.papermc.io/v2/projects/paper/versions/1.18.2/builds/387/downloads/paper-1.18.2-387.jar"},{server:"1.19",urlServer:"https://api.papermc.io/v2/projects/paper/versions/1.19/builds/65/downloads/paper-1.19-65.jar"}],d=[{Header:"Server",accessor:"server",className:"pester-data-table left",Cell:e=>{let{cell:{value:r},row:{original:s}}=e;return t.createElement("a",{href:""+s.urlServer,target:"blank",rel:"noreferrer noopener"},r)}},{Header:"Proxy",accessor:"proxy",className:"pester-data-table left",Cell:e=>{let{cell:{value:r},row:{original:s}}=e;return t.createElement("a",{href:""+s.urlProxy,target:"blank",rel:"noreferrer noopener"},r)}}],u={sidebar_position:4},c="Installez vos versions \ud83d\ude3a",v={unversionedId:"hypervisor/First-Setup/Install",id:"hypervisor/First-Setup/Install",title:"Installez vos versions \ud83d\ude3a",description:"Vous devez taper dans la console, service add serverType mode minimum-ram maximum-ram",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/hypervisor/02-First-Setup/Install.mdx",sourceDirName:"hypervisor/02-First-Setup",slug:"/hypervisor/First-Setup/Install",permalink:"/fr/docs/hypervisor/First-Setup/Install",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hypervisor/02-First-Setup/Install.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cr\xe9er vos premiers serveurs \ud83d\udc40",permalink:"/fr/docs/hypervisor/First-Setup/Add"},next:{title:"D\xe9marrer vos serveurs \ud83d\udcbb",permalink:"/fr/docs/hypervisor/First-Setup/Start"}},m={},b=[],h={toc:b};function j(e){let{components:r,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installez-vos-versions-"},"Installez vos versions \ud83d\ude3a"),(0,o.kt)("p",null,"Vous devez taper dans la console, service add serverType mode minimum-ram maximum-ram"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"service install type serverName VERSION\n")),(0,o.kt)(p.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"proxy",label:"DreamNetwork.jar - Exemple Proxy",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=/root/DNLauncher.jar",title:"/root/DNLauncher.jar"},"service install proxy proxy BUNGEECORD\n"))),(0,o.kt)(l.Z,{value:"server",label:"DreamNetwork.jar - Exemple Serveur",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=/root/DNLauncher.jar",title:"/root/DNLauncher.jar"},"service install server lobby 1.8.8\n")))),(0,o.kt)(n.J,{columns:d,data:i,mdxType:"PesterDataTable"}))}j.isMDXComponent=!0}}]);