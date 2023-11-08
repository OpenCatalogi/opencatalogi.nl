"use strict";(self.webpackChunkskeleton_pip=self.webpackChunkskeleton_pip||[]).push([[976],{4096:function(e,n,t){t.d(n,{z:function(){return s}});var a=t(7294),l=t(3579),o=t(7814),i=t(9417),r=t(6010),c=t(5893);const s=e=>{let{description:n}=e;const[t,s]=a.useState(!1),[d,u]=a.useState(""),[p,m]=a.useState(!1);return a.useEffect((()=>{m(n.length>300)}),[n]),a.useEffect((()=>{p&&u(`${n.substring(0,300)}...`)}),[p]),p?(0,c.jsxs)("div",{className:"ExpandableLeadParagraph-module--container--ac0d9",children:[(0,c.jsx)(l.nv,{lead:!0,children:t?n:d}),(0,c.jsxs)(l.zx,{appearance:"secondary-action-button",className:(0,r.Z)("ExpandableLeadParagraph-module--toggleButton--3de26",t&&"ExpandableLeadParagraph-module--isExpanded--b17f6"),onClick:()=>s((e=>!e)),children:[t?"Omschrijving inklappen":"Volledige omschrijving lezen",(0,c.jsx)(o.G,{className:"utrecht-icon--conduction-end",icon:i._tD})]})]}):(0,c.jsx)(l.nv,{lead:!0,children:n})}},4706:function(e,n,t){t.d(n,{o:function(){return i}});var a=t(7294),l=t(8767),o=t(7177);const i=e=>{const n=a.useContext(o.Z);return{getOne:t=>(0,l.useQuery)(["applications",t],(()=>null==n?void 0:n.Applications.getOne(t)),{initialData:()=>{var n;return null===(n=e.getQueryData("applications"))||void 0===n?void 0:n.find((e=>e.id===t))},onError:e=>{throw new Error(e.message)},enabled:!!t}),getAll:(e,t,a)=>(0,l.useQuery)(["applications",e,t,a],(()=>null==n?void 0:n.Applications.getAll(t,a)),{onError:e=>{throw new Error(e.message)}}),getCount:()=>(0,l.useQuery)(["applications_count"],(()=>null==n?void 0:n.Applications.getCount()),{onError:e=>{throw new Error(e.message)},refetchOnWindowFocus:!1,refetchOnReconnect:!1,retry:!1,staleTime:6e5})}}},1506:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(7294),l="ApplicationsDetailTemplate-module--buttonIcon--3b584",o="ApplicationsDetailTemplate-module--title--8914e",i=t(9246),r=t(5663),c=t(4478),s=t(9417),d=t(549),u=t(7814),p=t(8767),m=t(4706),v=t(8277),h=t(4096),y=t(989),b=t(1562),f=t(5893);const g=e=>{var n,t,g,x,j,C,T,k,A,w,D,N,L;let{applicationId:O}=e;const{t:I}=(0,c.$)(),[E,Z]=a.useState("layer"),F=new p.QueryClient,S=(0,m.o)(F).getOne(O);return(0,f.jsxs)(i.W2,{layoutClassName:"ApplicationsDetailTemplate-module--container--e6fce",children:[(0,f.jsxs)(r.rU,{className:"ApplicationsDetailTemplate-module--backButton--5f643",onClick:e=>{e.preventDefault(),(0,b.c4)("/applications")},href:"/applications",children:[(0,f.jsx)(r.JO,{children:(0,f.jsx)(u.G,{icon:s.acZ})}),I("Back to applications")]}),S.isSuccess&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"ApplicationsDetailTemplate-module--header--bd1fa",children:(0,f.jsxs)("div",{className:"ApplicationsDetailTemplate-module--description--31b70",children:[(0,f.jsx)(r.X6,{level:1,className:o,children:S.data.name}),(0,f.jsx)(h.z,{description:null!==(n=S.data.description)&&void 0!==n?n:I("There is no description available")}),(0,f.jsxs)("div",{className:"ApplicationsDetailTemplate-module--layerAndCategoryContainer--f8e7d",children:[(null===(t=S.data.embedded)||void 0===t?void 0:t.owner)&&(0,f.jsxs)(r.Ou,{"data-tooltip-id":y.TOOLTIP_ID,"data-tooltip-content":"Organisatie",children:[(0,f.jsx)(u.G,{icon:s.wp6}),null===(g=S.data.embedded)||void 0===g?void 0:g.owner.fullName]}),S.data.demoUrl&&(0,f.jsxs)(r.Ou,{"data-tooltip-id":y.TOOLTIP_ID,"data-tooltip-content":"Demo",onClick:()=>open(S.data.demoUrl),children:[(0,f.jsx)(u.G,{icon:s.py1}),I("Demo")]})]})]})}),(0,f.jsx)(r.Z0,{}),(0,f.jsxs)("div",{children:[(0,f.jsx)(r.X6,{level:2,className:o,children:"Screenshot"}),(0,f.jsx)("div",{className:"ApplicationsDetailTemplate-module--screenshotContainer--da970",children:(0,f.jsx)("img",{src:S.data.detailPageImageUrl,className:"ApplicationsDetailTemplate-module--screenshot--c7466"})})]}),(0,f.jsx)(r.Z0,{}),(null===(x=S.data)||void 0===x||null===(j=x.embedded)||void 0===j?void 0:j.components)&&(0,f.jsxs)("div",{className:"ApplicationsDetailTemplate-module--components--eb9d2",children:[(0,f.jsxs)(r.hE,{className:"ApplicationsDetailTemplate-module--dependenciesDisplaySwitchButtons--8b90b",children:[(0,f.jsxs)(r.zx,{className:l,pressed:"layer"===E,appearance:"layer"===E?"secondary-action-button":"subtle-button",onClick:()=>Z("layer"),children:[(0,f.jsx)(r.JO,{children:(0,f.jsx)(u.G,{icon:s.Krp})})," ",I("Layers")]}),(0,f.jsxs)(r.zx,{className:l,pressed:"relations"===E,appearance:"relations"===E?"secondary-action-button":"subtle-button",onClick:()=>Z("relations"),children:[(0,f.jsx)(r.JO,{children:(0,f.jsx)(u.G,{icon:s.bpC})})," ",I("Relations")]})]}),(0,f.jsx)(v.i,{type:E,components:null!==(C=null===(T=S.data)||void 0===T||null===(k=T.embedded)||void 0===k?void 0:k.components)&&void 0!==C?C:[],mainComponent:{id:S.data.id,name:S.data.name,layer:(null===(A=S.data.embedded)||void 0===A||null===(w=A.nl)||void 0===w||null===(D=w.embedded)||void 0===D?void 0:D.commonground.layerType)||null}})]}),!(null!==(N=S.data)&&void 0!==N&&null!==(L=N.embedded)&&void 0!==L&&L.components)&&(0,f.jsx)("span",{className:"ApplicationsDetailTemplate-module--noComponentsFound--23e6a",children:"Deze applicatie heeft (nog) geen gekoppelde componenten."})]}),S.isLoading&&(0,f.jsx)(d.Z,{height:"200px"})]})};var x=e=>(0,f.jsx)(g,{applicationId:e.params.applicationId})},8277:function(e,n,t){t.d(n,{i:function(){return N}});var a={};t.r(a),t.d(a,{layerColorData:function(){return d},layerColorIntegration:function(){return u},layerColorInterface:function(){return p},layerColorProcess:function(){return m},layerColorService:function(){return v},layerColorUnknown:function(){return h},relationsContainer:function(){return y}});var l=t(3433),o=t(1700),i=t.n(o),r=t(7294),c=t(8929),s=t.n(c),d="--web-app-layer-color-data",u="--web-app-layer-color-integration",p="--web-app-layer-color-interaction",m="--web-app-layer-color-process",v="--web-app-layer-color-services",h="--web-app-layer-color-unknown",y="RelationsDependenciesTemplate-module--relationsContainer--56763",b=t(1054),f=t(8272);const g=e=>{var n;return null===(n=e.match(/.{1,25}(\s|$)/g))||void 0===n?void 0:n.join("\n")};var x=t(1082),j=t(7762),C=t(989),T=t(5893);const k=e=>{var n;let{components:t,mainComponent:o}=e;const c=document.createElement("div"),d=(0,j.uS)((0,T.jsx)("div",{"data-tooltip-id":C.TOOLTIP_ID,"data-tooltip-content":"Dubbelklik het component om naar het component te gaan"}));c.innerHTML=`${d}`;const u=t.map((e=>{var n,t,l,o,r,d,u,p,m,v,h;return{id:null!==(n=e.id)&&void 0!==n?n:null===(t=e._self)||void 0===t?void 0:t.id,label:g(e.name),title:c,layer:null===(l=e.embedded)||void 0===l||null===(o=l.nl)||void 0===o||null===(r=o.embedded)||void 0===r||null===(d=r.commonground)||void 0===d?void 0:d.layerType,color:{background:(0,f.W)(a[s()(`layerColor ${i()(null!==(u=null===(p=e.embedded)||void 0===p||null===(m=p.nl)||void 0===m||null===(v=m.embedded)||void 0===v||null===(h=v.commonground)||void 0===h?void 0:h.layerType)&&void 0!==u?u:e.layerType)}`)])},font:{color:"white"},scaling:{min:10,max:10,label:{enabled:!0,min:10,max:10}},value:1,widthConstraint:90}})),p=[{id:o.id,label:g(o.name),layer:o.layer,color:{background:(0,f.W)(a[s()(`layerColor ${i()(null!==(n=o.layer)&&void 0!==n?n:"Unknown")}`)])},font:{color:"white",size:20}}].concat((0,l.Z)(u)),m=p.map((e=>e.id===o.id?{}:{from:e.id,to:o.id})),v={nodes:{shape:"circle",borderWidth:0,chosen:!1},edges:{color:"darkGray"},physics:{forceAtlas2Based:{gravitationalConstant:-26,centralGravity:.005,springLength:225,springConstant:.18},maxVelocity:146,solver:"forceAtlas2Based",timestep:.35,stabilization:{iterations:150}}},h=r.useRef(null);return r.useEffect((()=>{const e=h.current&&new b.Network(h.current,{nodes:p,edges:m},v);e&&e.on("doubleClick",(e=>{const n=e.nodes[0];n&&n!==o.id&&(0,x.c4)(`/components/${e.nodes[0]}`)}))}),[h,p,m]),(0,T.jsx)("div",{ref:h,className:y})};var A=t(4005);const w=e=>{let{components:n}=e;return(0,T.jsx)(A.A,{components:n})};var D=t(9825);const N=e=>{let{components:n,type:t,mainComponent:a}=e;switch(t){case"layer":return(0,T.jsx)(w,{components:n});case"relations":return(0,T.jsx)(L,{components:n,mainComponent:a})}},L=e=>{let{components:n,mainComponent:t}=e;const a=n.map((e=>{var n,t,a,l,o;return{...e,layerType:null!==(n=null==e||null===(t=e.embedded)||void 0===t||null===(a=t.nl)||void 0===a||null===(l=a.embedded)||void 0===l||null===(o=l.commonground)||void 0===o?void 0:o.layerType)&&void 0!==n?n:"Unknown"}})),o=a.filter((e=>"Interface"===i()(null==e?void 0:e.layerType))),r=a.filter((e=>"Process"===i()(null==e?void 0:e.layerType))),c=a.filter((e=>"Integration"===i()(null==e?void 0:e.layerType))),s=a.filter((e=>"Service"===i()(null==e?void 0:e.layerType))),d=a.filter((e=>"Data"===i()(null==e?void 0:e.layerType))),u=a.filter((e=>"Unknown"===i()(null==e?void 0:e.layerType))),{active:p,setActive:m}=O(),{active:v,setActive:h}=O(),{active:y,setActive:b}=O(),{active:f,setActive:g}=O(),{active:x,setActive:j}=O(),{active:C,setActive:A}=O(),w=[].concat((0,l.Z)(p?o:[]),(0,l.Z)(v?r:[]),(0,l.Z)(y?c:[]),(0,l.Z)(f?s:[]),(0,l.Z)(x?d:[]),(0,l.Z)(C?u:[]));return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(D.s,{items:[{label:"Interaction",handleClick:m,active:p,disabled:!o.length},{label:"Process",handleClick:h,active:v,disabled:!r.length},{label:"Integration",handleClick:b,active:y,disabled:!c.length},{label:"Service",handleClick:g,active:f,disabled:!s.length},{label:"Data",handleClick:j,active:x,disabled:!d.length},{label:"Unknown",handleClick:A,active:C,disabled:!u.length}]}),(0,T.jsx)(k,{mainComponent:{...t},components:w})]})},O=()=>{const[e,n]=r.useState(!0);return{active:e,setActive:n}}},9825:function(e,n,t){t.d(n,{s:function(){return y}});var a={};t.r(a),t.d(a,{active:function(){return l},container:function(){return o},data:function(){return i},disabled:function(){return r},integration:function(){return c},interaction:function(){return s},process:function(){return d},service:function(){return u},unknown:function(){return p}});var l="LayerAccordionFiltersTemplate-module--active--08daa",o="LayerAccordionFiltersTemplate-module--container--010d7",i="LayerAccordionFiltersTemplate-module--data--265e4",r="LayerAccordionFiltersTemplate-module--disabled--a6091",c="LayerAccordionFiltersTemplate-module--integration--2131e",s="LayerAccordionFiltersTemplate-module--interaction--de074",d="LayerAccordionFiltersTemplate-module--process--c9270",u="LayerAccordionFiltersTemplate-module--service--3623c",p="LayerAccordionFiltersTemplate-module--unknown--06253",m=t(6010),v=t(4478),h=t(5893);const y=e=>{let{items:n}=e;const{t:t}=(0,v.$)();return(0,h.jsx)("div",{className:o,children:n.map(((e,n)=>{let{label:o,active:i,handleClick:c,disabled:s}=e;return(0,h.jsx)("span",{onClick:()=>!s&&c((e=>!e)),className:(0,m.Z)(a[o.toLowerCase()],i&&!s&&l,s&&r),children:t(o)},n)}))})}}}]);
//# sourceMappingURL=02eda3c0b83155c35c8a38b691a3f2d72366f136-30e7646b12e3abdf5c28.js.map